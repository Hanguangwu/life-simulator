export type Phase = 'gender' | 'playing' | 'ending';
export type Gender = 'male' | 'female';
export type StatName = 'intelligence' | 'charm' | 'health' | 'wealth' | 'happiness' | 'creativity';
export type MBTIDimension = 'E' | 'I' | 'S' | 'N' | 'T' | 'F' | 'J' | 'P';

export interface Stats {
  intelligence: number;
  charm: number;
  health: number;
  wealth: number;
  happiness: number;
  creativity: number;
}

export interface MBTIScores {
  E: number;
  I: number;
  S: number;
  N: number;
  T: number;
  F: number;
  J: number;
  P: number;
}

export interface Origin {
  id: string;
  name: string;
  icon: string;
  description: string;
  modifiers: Partial<Stats>;
}

export interface EventChoice {
  text: string;
  stats?: Partial<Stats>;
  mbti?: Partial<MBTIScores>;
  /** Attribute threshold required to pick this choice */
  threshold?: { stat: StatName; value: number };
  /** Outcome description shown in timeline */
  outcome: string;
}

export interface FixedEvent {
  id: number;
  age: number;
  title: string;
  description: string;
  choices: EventChoice[];
}

export interface RandomEvent {
  id: string;
  title: string;
  description: string;
  /** Inclusive age range for this event to trigger */
  ageMin: number;
  ageMax: number;
  probability: number; // 0-1
  effect: Partial<Stats>;
  /** Optional stat requirement to trigger */
  requirement?: { stat: StatName; value: number; type: 'min' | 'max' };
  type: 'positive' | 'negative';
}

export interface EventLogEntry {
  age: number;
  title: string;
  choice: string;
  outcome: string;
  stats?: Partial<Stats>;
  isRandom: boolean;
}

export interface SBTIDefinition {
  id: string;
  name: string;
  icon: string;
  condition: (stats: Stats) => boolean;
  themeColor: string;
  tagline: string;
  description: string;
}

export interface MBTIDefinition {
  type: string;
  name: string;
  icon: string;
  tagline: string;
  lifeStyle: string;
  strengths: string[];
  weaknesses: string[];
  advice: string;
}

export interface SBTIResult {
  id: string;
  name: string;
  icon: string;
  themeColor: string;
  tagline: string;
  description: string;
}

export interface Achievement {
  id: string;
  icon: string;
  name: string;
  condition: (state: AchievementCheckState) => boolean;
}

export interface AchievementCheckState {
  stats: Stats;
  eventLog: EventLogEntry[];
  triggeredRandomEventCount: number;
  unlockedAchievements: string[];
  hasSBTI: boolean;
  lifeScore: number;
  lowestStatEver: number;
}

export interface LifeRating {
  score: number;
  grade: 'S' | 'A' | 'B' | 'C' | 'D' | 'E';
  label: string;
  color: string;
}

export interface GameState {
  phase: Phase;
  gender: Gender | null;
  origin: Origin | null;
  currentEventIndex: number;
  stats: Stats;
  mbtiScores: MBTIScores;
  eventLog: EventLogEntry[];
  triggeredRandomEvents: string[];
  pendingRandomEvent: RandomEvent | null;
  unlockedAchievements: string[];
  mbtiResult: string | null;
  sbtiResult: SBTIResult | null;
  lifeRating: LifeRating | null;
}

export type GameAction =
  | { type: 'SET_GENDER'; payload: Gender }
  | { type: 'SET_ORIGIN'; payload: Origin }
  | { type: 'APPLY_CHOICE'; payload: { choice: EventChoice; eventTitle: string; age: number; isRandom: boolean } }
  | { type: 'NEXT_FIXED_EVENT' }
  | { type: 'SET_PENDING_RANDOM_EVENT'; payload: RandomEvent | null }
  | { type: 'COMPLETE_RANDOM_EVENT'; payload: { choice: EventChoice; eventTitle: string } }
  | { type: 'FINISH_GAME'; payload: { mbtiResult: string; sbtiResult: SBTIResult | null; lifeRating: LifeRating } }
  | { type: 'RESTART' };
