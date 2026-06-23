import type { EventChoice } from '../../types/game.ts';

interface ChoiceButtonProps {
  choice: EventChoice;
  index: number;
  disabled: boolean;
  onChoose: () => void;
}

export function ChoiceButton({ choice, index, disabled, onChoose }: ChoiceButtonProps) {
  const hotkey = index + 1;

  return (
    <button
      className={`choice-button ${disabled ? 'choice-button--disabled' : ''}`}
      onClick={onChoose}
      disabled={disabled}
      title={
        choice.threshold
          ? `需要 ${choice.threshold.stat === 'intelligence' ? '智力' :
               choice.threshold.stat === 'charm' ? '魅力' :
               choice.threshold.stat === 'health' ? '健康' :
               choice.threshold.stat === 'wealth' ? '财富' :
               choice.threshold.stat === 'happiness' ? '幸福' : '创造力'} ≥ ${choice.threshold.value}`
          : undefined
      }
    >
      <span className="choice-hotkey">{hotkey}</span>
      <span className="choice-text">{choice.text}</span>
      {choice.threshold && (
        <span className="choice-threshold">
          🔒 {choice.threshold.stat === 'intelligence' ? '智力' :
               choice.threshold.stat === 'charm' ? '魅力' :
               choice.threshold.stat === 'health' ? '健康' :
               choice.threshold.stat === 'wealth' ? '财富' :
               choice.threshold.stat === 'happiness' ? '幸福' : '创造力'} ≥ {choice.threshold.value}
        </span>
      )}
    </button>
  );
}
