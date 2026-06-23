import type { Stats } from '../../types/game.ts';
import { StatBar } from './StatBar.tsx';

interface StatsPanelProps {
  stats: Stats;
  age: number;
  originName?: string;
  originIcon?: string;
}

const STAT_CONFIG: { key: keyof Stats; name: string; icon: string; color: string }[] = [
  { key: 'intelligence', name: '智力', icon: '🧠', color: '#74b9ff' },
  { key: 'charm', name: '魅力', icon: '✨', color: '#fd79a8' },
  { key: 'health', name: '健康', icon: '❤️', color: '#00b894' },
  { key: 'wealth', name: '财富', icon: '💰', color: '#fdcb6e' },
  { key: 'happiness', name: '幸福', icon: '😊', color: '#a29bfe' },
  { key: 'creativity', name: '创造力', icon: '🎨', color: '#e17055' },
];

export function StatsPanel({ stats, age, originName, originIcon }: StatsPanelProps) {
  return (
    <div className="stats-panel">
      <div className="stats-panel-header">
        <span className="stats-age">年龄: {age}岁</span>
        {originName && (
          <span className="stats-origin">
            {originIcon} {originName}
          </span>
        )}
      </div>
      <div className="stats-grid">
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
  );
}
