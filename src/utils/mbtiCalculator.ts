import type { Stats, MBTIScores } from '../types/game.ts';

/**
 * Calculate MBTI type from accumulated dimension scores and stat weightings.
 * Stat weightings modify the dimension scores before comparison.
 */
export function calculateMBTI(mbtiScores: MBTIScores, stats: Stats): string {
  const weighted = { ...mbtiScores };

  // Apply stat weighting modifiers
  // High charm → E boost
  if (stats.charm >= 70) weighted.E += 3;
  else if (stats.charm >= 50) weighted.E += 1;

  // High intelligence → T, I boost
  if (stats.intelligence >= 70) {
    weighted.T += 3;
    weighted.I += 2;
  } else if (stats.intelligence >= 50) {
    weighted.T += 1;
    weighted.I += 1;
  }

  // High happiness → F boost
  if (stats.happiness >= 70) weighted.F += 3;
  else if (stats.happiness >= 50) weighted.F += 1;

  // High creativity → N, I boost
  if (stats.creativity >= 70) {
    weighted.N += 3;
    weighted.I += 1;
  } else if (stats.creativity >= 50) {
    weighted.N += 1;
  }

  // High wealth → T, J boost
  if (stats.wealth >= 70) {
    weighted.T += 2;
    weighted.J += 2;
  } else if (stats.wealth >= 50) {
    weighted.T += 1;
    weighted.J += 1;
  }

  // Determine each dimension
  const ei = weighted.E >= weighted.I ? 'E' : 'I';
  const sn = weighted.S >= weighted.N ? 'S' : 'N';
  const tf = weighted.T >= weighted.F ? 'T' : 'F';
  const jp = weighted.J >= weighted.P ? 'J' : 'P';

  return `${ei}${sn}${tf}${jp}`;
}

export function getDimensionPercentages(mbtiScores: MBTIScores, stats: Stats): {
  dimension: string;
  left: string;
  leftPercent: number;
  right: string;
  rightPercent: number;
}[] {
  const weighted = { ...mbtiScores };

  if (stats.charm >= 70) weighted.E += 3;
  else if (stats.charm >= 50) weighted.E += 1;
  if (stats.intelligence >= 70) { weighted.T += 3; weighted.I += 2; }
  else if (stats.intelligence >= 50) { weighted.T += 1; weighted.I += 1; }
  if (stats.happiness >= 70) weighted.F += 3;
  else if (stats.happiness >= 50) weighted.F += 1;
  if (stats.creativity >= 70) { weighted.N += 3; weighted.I += 1; }
  else if (stats.creativity >= 50) weighted.N += 1;
  if (stats.wealth >= 70) { weighted.T += 2; weighted.J += 2; }
  else if (stats.wealth >= 50) { weighted.T += 1; weighted.J += 1; }

  const dimensions = [
    { dimension: '精力方向', left: 'E', leftScore: weighted.E, right: 'I', rightScore: weighted.I },
    { dimension: '认知方式', left: 'S', leftScore: weighted.S, right: 'N', rightScore: weighted.N },
    { dimension: '判断方式', left: 'T', leftScore: weighted.T, right: 'F', rightScore: weighted.F },
    { dimension: '生活方式', left: 'J', leftScore: weighted.J, right: 'P', rightScore: weighted.P },
  ];

  return dimensions.map((d) => {
    const total = d.leftScore + d.rightScore;
    return {
      dimension: d.dimension,
      left: d.left,
      leftPercent: total > 0 ? Math.round((d.leftScore / total) * 100) : 50,
      right: d.right,
      rightPercent: total > 0 ? Math.round((d.rightScore / total) * 100) : 50,
    };
  });
}
