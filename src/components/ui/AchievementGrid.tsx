import type { GameState } from '../../types/game.ts';
import { ACHIEVEMENTS } from '../../data/achievements.ts';

interface AchievementGridProps {
  state: GameState;
}

export function AchievementGrid({ state }: AchievementGridProps) {
  const randomEventCount = state.eventLog.filter((e) => e.isRandom).length;
  const lowestStatEver = Math.min(
    state.stats.intelligence,
    state.stats.charm,
    state.stats.health,
    state.stats.wealth,
    state.stats.happiness,
    state.stats.creativity
  );

  const achievementState = {
    stats: state.stats,
    eventLog: state.eventLog,
    triggeredRandomEventCount: randomEventCount,
    unlockedAchievements: state.unlockedAchievements,
    hasSBTI: state.sbtiResult !== null,
    lifeScore: state.lifeRating?.score ?? 0,
    lowestStatEver,
  };

  const results = ACHIEVEMENTS.map((a) => ({
    ...a,
    unlocked: a.condition(achievementState),
  }));

  return (
    <div className="achievement-grid">
      <h3>🏆 成就</h3>
      <div className="achievement-list">
        {results.map((achievement) => (
          <div
            key={achievement.id}
            className={`achievement-item ${achievement.unlocked ? 'achievement-item--unlocked' : 'achievement-item--locked'}`}
          >
            <span className="achievement-item__icon">
              {achievement.unlocked ? achievement.icon : '🔒'}
            </span>
            <span className="achievement-item__name">
              {achievement.unlocked ? achievement.name : '???'}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
