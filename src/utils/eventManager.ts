import type { RandomEvent, Stats } from '../types/game.ts';
import { RANDOM_EVENTS } from '../data/randomEvents.ts';

/**
 * Try to trigger a random event for the given age.
 * Returns null if no event triggers.
 * @param age Current age to check
 * @param triggeredEvents Set of already-triggered event IDs
 * @param stats Current stats (for requirement checks)
 * @param eventsInAgeGroup Number of random events already triggered in this age group
 */
export function tryTriggerRandomEvent(
  age: number,
  triggeredEvents: string[],
  stats: Stats,
  eventsInAgeGroup: number
): RandomEvent | null {
  // Max 2 random events per age group
  if (eventsInAgeGroup >= 2) return null;

  // Filter eligible events
  const eligible = RANDOM_EVENTS.filter((event) => {
    // Check age range
    if (age < event.ageMin || age > event.ageMax) return false;
    // Check if already triggered
    if (triggeredEvents.includes(event.id)) return false;
    // Check requirement
    if (event.requirement) {
      const statValue = stats[event.requirement.stat];
      if (event.requirement.type === 'min' && statValue < event.requirement.value)
        return false;
      if (event.requirement.type === 'max' && statValue > event.requirement.value)
        return false;
    }
    return true;
  });

  if (eligible.length === 0) return null;

  // Probability check for each eligible event
  for (const event of eligible) {
    if (Math.random() < event.probability) {
      return event;
    }
  }

  return null;
}

/**
 * Get age from event index (fixed events: id 0-25 map to ages 0,2,4,5,6,8,10,12,14,16,18,20,22,25,28,30,32,35,40,45,50,55,60,65,70,75)
 */
export function getAgeFromEventIndex(index: number): number {
  const ages = [0, 2, 4, 5, 6, 8, 10, 12, 14, 16, 18, 20, 22, 25, 28, 30, 32, 35, 40, 45, 50, 55, 60, 65, 70, 75];
  return ages[index] ?? 75;
}

/**
 * Clamp a stat value between 0 and 100
 */
export function clampStat(value: number): number {
  return Math.max(0, Math.min(100, value));
}
