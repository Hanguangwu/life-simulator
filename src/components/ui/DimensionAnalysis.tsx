import type { MBTIScores, Stats } from '../../types/game.ts';
import { getDimensionPercentages } from '../../utils/mbtiCalculator.ts';

interface DimensionAnalysisProps {
  mbtiScores: MBTIScores;
  stats: Stats;
}

export function DimensionAnalysis({ mbtiScores, stats }: DimensionAnalysisProps) {
  const dimensions = getDimensionPercentages(mbtiScores, stats);

  return (
    <div className="dimension-analysis">
      <h3>🧬 人格维度分析</h3>
      <div className="dimension-grid">
        {dimensions.map((d) => (
          <div key={d.dimension} className="dimension-bar-group">
            <div className="dimension-label">
              <span className="dimension-letter">{d.left}</span>
              <span className="dimension-name">{d.dimension}</span>
              <span className="dimension-letter">{d.right}</span>
            </div>
            <div className="dimension-track">
              <div className="dimension-fill" style={{ width: `${d.leftPercent}%` }} />
              <div className="dimension-fill dimension-fill--right" style={{ width: `${d.rightPercent}%` }} />
            </div>
            <div className="dimension-percent">
              <span>{d.leftPercent}%</span>
              <span>{d.rightPercent}%</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
