import type { Stats, SBTIResult } from '../types/game.ts';
import { SBTI_TYPES } from '../data/sbti.ts';

/**
 * Check SBTI hidden personality conditions.
 * First match in definition order wins (priority order).
 * Returns null if no SBTI type matches.
 */
export function checkSBTI(stats: Stats): SBTIResult | null {
  for (const sbti of SBTI_TYPES) {
    if (sbti.condition(stats)) {
      return {
        id: sbti.id,
        name: sbti.name,
        icon: sbti.icon,
        themeColor: sbti.themeColor,
        tagline: sbti.tagline,
        description: sbti.description,
      };
    }
  }
  return null;
}
