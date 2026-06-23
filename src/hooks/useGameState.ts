import { useReducer, useCallback } from 'react';
import type { GameState, GameAction, EventChoice, Stats, MBTIScores } from '../types/game.ts';
import { getRandomOrigin } from '../data/origins.ts';
import { FIXED_EVENTS } from '../data/events.ts';
import { calculateMBTI } from '../utils/mbtiCalculator.ts';
import { checkSBTI } from '../utils/sbtiChecker.ts';
import { tryTriggerRandomEvent, getAgeFromEventIndex, clampStat } from '../utils/eventManager.ts';
import { calculateLifeScore, getLifeRating } from '../utils/rating.ts';

const initialStats: Stats = {
  intelligence: 30,
  charm: 30,
  health: 30,
  wealth: 30,
  happiness: 30,
  creativity: 30,
};

const initialMBTIScores: MBTIScores = {
  E: 0, I: 0,
  S: 0, N: 0,
  T: 0, F: 0,
  J: 0, P: 0,
};

const initialState: GameState = {
  phase: 'gender',
  gender: null,
  origin: null,
  currentEventIndex: 0,
  stats: { ...initialStats },
  mbtiScores: { ...initialMBTIScores },
  eventLog: [],
  triggeredRandomEvents: [],
  pendingRandomEvent: null,
  unlockedAchievements: [],
  mbtiResult: null,
  sbtiResult: null,
  lifeRating: null,
};

function gameReducer(state: GameState, action: GameAction): GameState {
  switch (action.type) {
    case 'SET_GENDER':
      return { ...state, gender: action.payload };

    case 'SET_ORIGIN': {
      const origin = action.payload;
      const stats = { ...state.stats };
      for (const [key, value] of Object.entries(origin.modifiers)) {
        if (value !== undefined) {
          const fluctuation = Math.floor(Math.random() * 11) - 5;
          stats[key as keyof Stats] = clampStat(stats[key as keyof Stats] + value + fluctuation);
        }
      }
      return { ...state, phase: 'playing', origin, stats };
    }

    case 'APPLY_CHOICE': {
      const { choice, eventTitle, age, isRandom } = action.payload;
      const stats = { ...state.stats };
      const mbtiScores = { ...state.mbtiScores };

      // Apply stat changes
      if (choice.stats) {
        for (const [key, value] of Object.entries(choice.stats)) {
          if (value !== undefined) {
            stats[key as keyof Stats] = clampStat(stats[key as keyof Stats] + value);
          }
        }
      }

      // Apply MBTI changes
      if (choice.mbti) {
        for (const [key, value] of Object.entries(choice.mbti)) {
          if (value !== undefined) {
            mbtiScores[key as keyof MBTIScores] += value;
          }
        }
      }

      const eventLog = [
        ...state.eventLog,
        {
          age,
          title: eventTitle,
          choice: choice.text,
          outcome: choice.outcome,
          stats: choice.stats,
          isRandom,
        },
      ];

      return { ...state, stats, mbtiScores, eventLog };
    }

    case 'NEXT_FIXED_EVENT':
      return { ...state, currentEventIndex: state.currentEventIndex + 1 };

    case 'SET_PENDING_RANDOM_EVENT':
      return { ...state, pendingRandomEvent: action.payload };

    case 'COMPLETE_RANDOM_EVENT': {
      const { choice, eventTitle } = action.payload;
      const stats = { ...state.stats };
      const mbtiScores = { ...state.mbtiScores };

      if (choice.stats) {
        for (const [key, value] of Object.entries(choice.stats)) {
          if (value !== undefined) {
            stats[key as keyof Stats] = clampStat(stats[key as keyof Stats] + value);
          }
        }
      }
      if (choice.mbti) {
        for (const [key, value] of Object.entries(choice.mbti)) {
          if (value !== undefined) {
            mbtiScores[key as keyof MBTIScores] += value;
          }
        }
      }

      const triggeredRandomEvents = [...state.triggeredRandomEvents];
      if (state.pendingRandomEvent) {
        triggeredRandomEvents.push(state.pendingRandomEvent.id);
      }

      const eventLog = [
        ...state.eventLog,
        {
          age: getAgeFromEventIndex(state.currentEventIndex),
          title: eventTitle,
          choice: choice.text,
          outcome: choice.outcome,
          stats: choice.stats,
          isRandom: true,
        },
      ];

      return {
        ...state,
        stats,
        mbtiScores,
        eventLog,
        triggeredRandomEvents,
        pendingRandomEvent: null,
      };
    }

    case 'FINISH_GAME':
      return {
        ...state,
        phase: 'ending',
        mbtiResult: action.payload.mbtiResult,
        sbtiResult: action.payload.sbtiResult,
        lifeRating: action.payload.lifeRating,
      };

    case 'RESTART':
      return { ...initialState };

    default:
      return state;
  }
}

export function useGameState() {
  const [state, dispatch] = useReducer(gameReducer, initialState);

  const selectGender = useCallback((gender: 'male' | 'female') => {
    dispatch({ type: 'SET_GENDER', payload: gender });
    const origin = getRandomOrigin();
    dispatch({ type: 'SET_ORIGIN', payload: origin });
  }, []);

  const applyChoice = useCallback((choice: EventChoice, isRandom: boolean) => {
    const age = isRandom
      ? getAgeFromEventIndex(state.currentEventIndex)
      : getAgeFromEventIndex(state.currentEventIndex);
    const eventTitle = isRandom && state.pendingRandomEvent
      ? state.pendingRandomEvent.title
      : FIXED_EVENTS[state.currentEventIndex]?.title ?? '';

    if (isRandom && state.pendingRandomEvent) {
      dispatch({ type: 'COMPLETE_RANDOM_EVENT', payload: { choice, eventTitle } });
    } else {
      dispatch({ type: 'APPLY_CHOICE', payload: { choice, eventTitle, age, isRandom } });
    }
  }, [state.currentEventIndex, state.pendingRandomEvent]);

  const advanceEvent = useCallback(() => {
    const nextIndex = state.currentEventIndex + 1;

    // Check if we've completed all events (id 0-25 = 26 events)
    if (nextIndex >= FIXED_EVENTS.length) {
      // Calculate final results
      const mbtiResult = calculateMBTI(state.mbtiScores, state.stats);
      const sbtiResult = checkSBTI(state.stats);
      const lifeScore = calculateLifeScore(state.stats);
      const lifeRating = getLifeRating(lifeScore);
      dispatch({ type: 'FINISH_GAME', payload: { mbtiResult, sbtiResult, lifeRating } });
      return;
    }

    dispatch({ type: 'NEXT_FIXED_EVENT' });
  }, [state.currentEventIndex, state.mbtiScores, state.stats]);

  const checkRandomEvent = useCallback((): boolean => {
    if (state.origin === null) return false;

    const age = getAgeFromEventIndex(state.currentEventIndex);
    const eventsInAgeGroup = state.triggeredRandomEvents.length;
    const triggered = tryTriggerRandomEvent(
      age,
      state.triggeredRandomEvents,
      state.stats,
      eventsInAgeGroup
    );

    if (triggered) {
      dispatch({ type: 'SET_PENDING_RANDOM_EVENT', payload: triggered });
      return true;
    }
    return false;
  }, [state.currentEventIndex, state.origin, state.triggeredRandomEvents, state.stats]);

  const restart = useCallback(() => {
    dispatch({ type: 'RESTART' });
  }, []);

  const finishGame = useCallback(() => {
    const mbtiResult = calculateMBTI(state.mbtiScores, state.stats);
    const sbtiResult = checkSBTI(state.stats);
    const lifeScore = calculateLifeScore(state.stats);
    const lifeRating = getLifeRating(lifeScore);
    dispatch({ type: 'FINISH_GAME', payload: { mbtiResult, sbtiResult, lifeRating } });
  }, [state.mbtiScores, state.stats]);

  return {
    state,
    selectGender,
    applyChoice,
    advanceEvent,
    checkRandomEvent,
    restart,
    finishGame,
  };
}
