import type { GameState } from '../../types/game.ts';
import { ParticleBg } from '../ui/ParticleBg.tsx';
import { PersonalityCard } from '../ui/PersonalityCard.tsx';
import { DimensionAnalysis } from '../ui/DimensionAnalysis.tsx';
import { Timeline } from '../ui/Timeline.tsx';
import { AchievementGrid } from '../ui/AchievementGrid.tsx';
import { LifeRatingCard } from '../ui/LifeRating.tsx';

interface EndingProps {
  state: GameState;
  onRestart: () => void;
}

export function Ending({ state, onRestart }: EndingProps) {
  if (!state.mbtiResult || !state.lifeRating || !state.origin) return null;

  return (
    <div className="screen ending">
      <ParticleBg />
      <div className="ending__content">
        <h1 className="ending__title">📖 人生总结</h1>

        <div className="ending__section">
          <h3>🏠 出身回顾</h3>
          <p>{state.origin.icon} {state.origin.name} — {state.origin.description}</p>
        </div>

        <PersonalityCard
          mbtiType={state.mbtiResult}
          sbtiResult={state.sbtiResult}
        />

        <DimensionAnalysis
          mbtiScores={state.mbtiScores}
          stats={state.stats}
        />

        <LifeRatingCard
          rating={state.lifeRating}
          stats={state.stats}
          mbtiType={state.mbtiResult}
          sbtiName={state.sbtiResult?.name ?? null}
        />

        <Timeline eventLog={state.eventLog} />

        <AchievementGrid state={state} />

        <button className="restart-button" onClick={onRestart}>
          🔄 重新开始人生
        </button>
      </div>
    </div>
  );
}
