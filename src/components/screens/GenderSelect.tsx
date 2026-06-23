interface GenderSelectProps {
  onSelect: (gender: 'male' | 'female') => void;
}

export function GenderSelect({ onSelect }: GenderSelectProps) {
  return (
    <div className="screen gender-select">
      <div className="gender-select__title">
        <h1>🌈 人生模拟器</h1>
        <p>从出生到75岁，在每个关键节点做出选择，</p>
        <p>书写属于你的独一无二的人生故事。</p>
      </div>
      <div className="gender-select__cards">
        <button
          className="gender-card"
          onClick={() => onSelect('male')}
        >
          <span className="gender-card__icon">👦</span>
          <span className="gender-card__label">男生</span>
          <span className="gender-card__desc">以男生的视角体验人生</span>
        </button>
        <button
          className="gender-card"
          onClick={() => onSelect('female')}
        >
          <span className="gender-card__icon">👧</span>
          <span className="gender-card__label">女生</span>
          <span className="gender-card__desc">以女生的视角体验人生</span>
        </button>
      </div>
    </div>
  );
}
