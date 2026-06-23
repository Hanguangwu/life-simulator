import type { LifeRating, Stats } from '../../types/game.ts';
import { getLifeSummary } from '../../utils/rating.ts';
import { StatBar } from './StatBar.tsx';

interface LifeRatingProps {
  rating: LifeRating;
  stats: Stats;
  mbtiType: string | null;
  sbtiName: string | null;
}

const STAT_CONFIG: { key: keyof Stats; name: string; icon: string; color: string }[] = [
  { key: 'intelligence', name: '智力', icon: '🧠', color: '#74b9ff' },
  { key: 'charm', name: '魅力', icon: '✨', color: '#fd79a8' },
  { key: 'health', name: '健康', icon: '❤️', color: '#00b894' },
  { key: 'wealth', name: '财富', icon: '💰', color: '#fdcb6e' },
  { key: 'happiness', name: '幸福', icon: '😊', color: '#a29bfe' },
  { key: 'creativity', name: '创造力', icon: '🎨', color: '#e17055' },
];

export function LifeRatingCard({ rating, stats, mbtiType, sbtiName }: LifeRatingProps) {
  const summary = getLifeSummary(mbtiType, sbtiName, stats);

  return (
    <div className="life-rating">
      <div className="life-rating__score" style={{ color: rating.color }}>
        <span className="life-rating__grade">{rating.grade}</span>
        <span className="life-rating__label">{rating.label}</span>
        <span className="life-rating__number">{rating.score}分</span>
      </div>

      <div className="life-rating__summary">
        <p>{summary}</p>
      </div>

      <div className="life-rating__stats">
        <h4>最终属性</h4>
        <div className="life-rating__stats-grid">
          {STAT_CONFIG.map((cfg) => (
            <StatBar
              key={cfg.key}
              name={cfg.name}
              value={stats[cfg.key]}
              icon={cfg.icon}
              color={cfg.color}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
