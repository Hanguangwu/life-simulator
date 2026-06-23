import { useEffect, useState, useCallback, useRef } from 'react';
import type { GameState, EventChoice } from '../../types/game.ts';
import { FIXED_EVENTS } from '../../data/events.ts';
import { getAgeFromEventIndex } from '../../utils/eventManager.ts';
import { StatsPanel } from '../ui/StatsPanel.tsx';
import { EventCard } from '../ui/EventCard.tsx';
import { ParticleBg } from '../ui/ParticleBg.tsx';

interface GamePlayProps {
  state: GameState;
  onChoose: (choice: EventChoice, isRandom: boolean) => void;
  onAdvance: () => void;
  onCheckRandom: () => boolean;
}

export function GamePlay({ state, onChoose, onAdvance, onCheckRandom }: GamePlayProps) {
  const [showEvent, setShowEvent] = useState(false);
  const [eventKey, setEventKey] = useState(0);
  const advanceTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const currentEvent = state.pendingRandomEvent ?? FIXED_EVENTS[state.currentEventIndex];
  const age = getAgeFromEventIndex(state.currentEventIndex);
  const isRandom = state.pendingRandomEvent !== null;

  // Show event with animation after state changes (new event index or random event)
  useEffect(() => {
    setShowEvent(false);
    setEventKey((k) => k + 1);

    if (!state.pendingRandomEvent) {
      // Check for random events before showing fixed event
      const triggered = onCheckRandom();
      if (triggered) return; // Will re-render with pendingRandomEvent set
    }

    const timer = setTimeout(() => setShowEvent(true), 150);
    return () => clearTimeout(timer);
  }, [state.currentEventIndex, state.pendingRandomEvent]);

  const handleChoice = useCallback((choice: EventChoice) => {
    onChoose(choice, isRandom);
    setShowEvent(false);

    // After fixed event choice, auto-advance to next event after a short pause
    if (!isRandom) {
      if (advanceTimerRef.current) clearTimeout(advanceTimerRef.current);
      advanceTimerRef.current = setTimeout(() => {
        onAdvance();
      }, 800);
    }
    // After random event choice: pendingRandomEvent gets cleared by COMPLETE_RANDOM_EVENT,
    // which triggers the useEffect above to show the fixed event
  }, [onChoose, isRandom, onAdvance]);

  // Cleanup timer on unmount
  useEffect(() => {
    return () => {
      if (advanceTimerRef.current) clearTimeout(advanceTimerRef.current);
    };
  }, []);

  const handleContinue = useCallback(() => {
    onAdvance();
  }, [onAdvance]);

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!showEvent || !currentEvent) return;

      if ('choices' in currentEvent) {
        const keyMap: Record<string, number> = {
          '1': 0, 'a': 0, 'A': 0,
          '2': 1, 'b': 1, 'B': 1,
          '3': 2, 'c': 2, 'C': 2,
          '4': 3, 'd': 3, 'D': 3,
        };
        const idx = keyMap[e.key];
        if (idx !== undefined && idx < currentEvent.choices.length) {
          const choice = currentEvent.choices[idx];
          if (!choice.threshold || state.stats[choice.threshold.stat] >= choice.threshold.value) {
            handleChoice(choice);
          }
        }
      }

      if (e.key === 'Enter' || e.key === ' ') {
        handleContinue();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [showEvent, currentEvent, handleChoice, handleContinue, state.stats]);

  if (!currentEvent) return null;

  return (
    <div className="screen gameplay">
      <ParticleBg />
      <StatsPanel
        stats={state.stats}
        age={age}
        originName={state.origin?.name}
        originIcon={state.origin?.icon}
      />
      <div className="gameplay__event-area">
        <div className={`event-wrapper ${showEvent ? 'event-wrapper--visible' : ''}`} key={eventKey}>
          <EventCard
            event={currentEvent}
            isRandom={isRandom}
            stats={state.stats}
            onChoose={handleChoice}
          />
        </div>
      </div>
    </div>
  );
}
