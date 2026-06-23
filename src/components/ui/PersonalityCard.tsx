import { MBTI_TYPES } from '../../data/mbti.ts';
import type { SBTIResult } from '../../types/game.ts';

interface PersonalityCardProps {
  mbtiType: string;
  sbtiResult: SBTIResult | null;
}

export function PersonalityCard({ mbtiType, sbtiResult }: PersonalityCardProps) {
  const mbtiData = MBTI_TYPES.find((m) => m.type === mbtiType);

  if (!mbtiData) return null;

  if (sbtiResult) {
    return (
      <div
        className="personality-card personality-card--sbti"
        style={{ '--sbti-color': sbtiResult.themeColor } as React.CSSProperties}
      >
        <div className="personality-card__badge">🌟 SBTI 隐藏人格</div>
        <div className="personality-card__icon">{sbtiResult.icon}</div>
        <div className="personality-card__name">{sbtiResult.name}</div>
        <div className="personality-card__tagline">{sbtiResult.tagline}</div>
        <div className="personality-card__description">{sbtiResult.description}</div>
        <div className="personality-card__mbti-ref">
          基础人格参考: {mbtiData.icon} {mbtiType} {mbtiData.name}
        </div>
      </div>
    );
  }

  return (
    <div className="personality-card personality-card--mbti">
      <div className="personality-card__icon">{mbtiData.icon}</div>
      <div className="personality-card__type">{mbtiType}</div>
      <div className="personality-card__name">{mbtiData.name}</div>
      <div className="personality-card__tagline">{mbtiData.tagline}</div>
      <div className="personality-card__divider" />
      <div className="personality-card__section">
        <h4>你的样子</h4>
        <p>{mbtiData.lifeStyle}</p>
      </div>
      <div className="personality-card__columns">
        <div className="personality-card__section">
          <h4>✨ 优势天赋</h4>
          <ul>
            {mbtiData.strengths.map((s, i) => (
              <li key={i}>{s}</li>
            ))}
          </ul>
        </div>
        <div className="personality-card__section">
          <h4>🌱 成长空间</h4>
          <ul>
            {mbtiData.weaknesses.map((w, i) => (
              <li key={i}>{w}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="personality-card__section">
        <h4>💡 专属建议</h4>
        <p>{mbtiData.advice}</p>
      </div>
    </div>
  );
}
