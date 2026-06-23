import type { EventLogEntry } from '../../types/game.ts';

interface TimelineProps {
  eventLog: EventLogEntry[];
}

export function Timeline({ eventLog }: TimelineProps) {
  if (eventLog.length === 0) return null;

  return (
    <div className="timeline">
      <h3>📜 人生时间线</h3>
      <div className="timeline-list">
        {eventLog.map((entry, i) => (
          <div key={i} className={`timeline-item ${entry.isRandom ? 'timeline-item--random' : ''}`}>
            <div className="timeline-item__marker">
              {entry.isRandom ? '⚡' : '●'}
            </div>
            <div className="timeline-item__content">
              <div className="timeline-item__header">
                <span className="timeline-item__age">{entry.age}岁</span>
                <span className="timeline-item__title">
                  {entry.isRandom ? `[随机] ${entry.title}` : entry.title}
                </span>
              </div>
              <div className="timeline-item__choice">
                选择: {entry.choice}
              </div>
              <div className="timeline-item__outcome">
                {entry.outcome}
              </div>
              {entry.stats && (
                <div className="timeline-item__stats">
                  {Object.entries(entry.stats).map(([key, val]) => {
                    if (val === undefined) return null;
                    const labels: Record<string, string> = {
                      intelligence: '智力',
                      charm: '魅力',
                      health: '健康',
                      wealth: '财富',
                      happiness: '幸福',
                      creativity: '创造力',
                    };
                    const sign = val >= 0 ? '+' : '';
                    return (
                      <span
                        key={key}
                        className={`stat-change ${val >= 0 ? 'stat-change--pos' : 'stat-change--neg'}`}
                      >
                        {labels[key] ?? key} {sign}{val}
                      </span>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
