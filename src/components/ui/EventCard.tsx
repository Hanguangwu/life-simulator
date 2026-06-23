import { useCallback } from 'react';
import type { FixedEvent, RandomEvent, EventChoice, Stats } from '../../types/game.ts';
import { ChoiceButton } from './ChoiceButton.tsx';

interface EventCardProps {
  event: FixedEvent | RandomEvent;
  isRandom: boolean;
  stats: Stats;
  onChoose: (choice: EventChoice) => void;
}

export function EventCard({ event, isRandom, stats, onChoose }: EventCardProps) {
  // For fixed events, use their defined choices
  const fixedEvent = !isRandom ? (event as FixedEvent) : null;
  const choices = fixedEvent?.choices ?? [];

  const handleRandomAcknowledge = useCallback(() => {
    const randomEvent = event as RandomEvent;
    const effectLabels: string[] = [];
    const labelMap: Record<string, string> = {
      intelligence: '智力', charm: '魅力', health: '健康',
      wealth: '财富', happiness: '幸福', creativity: '创造力',
    };
    for (const [key, val] of Object.entries(randomEvent.effect)) {
      if (val !== undefined) {
        const sign = val >= 0 ? '+' : '';
        effectLabels.push(`${labelMap[key] ?? key} ${sign}${val}`);
      }
    }

    const choice: EventChoice = {
      text: randomEvent.type === 'positive' ? '坦然接受这份好运 🙏' : '勇敢面对命运的挑战 💪',
      outcome: `属性变化: ${effectLabels.join(', ')}`,
      stats: randomEvent.effect,
    };
    onChoose(choice);
  }, [event, onChoose]);

  const isChoiceDisabled = (choice: EventChoice): boolean => {
    if (!choice.threshold) return false;
    return stats[choice.threshold.stat] < choice.threshold.value;
  };

  return (
    <div className={`event-card ${isRandom ? 'event-card--random' : ''}`}>
      {isRandom && (
        <div className="event-card__random-badge">⚡ 命运的捉弄</div>
      )}
      <div className="event-card__age">
        {isRandom ? '随机事件' : `年龄 ${'age' in event ? event.age : ''} 岁`}
      </div>
      <h2 className="event-card__title">{event.title}</h2>
      <p className="event-card__description">{event.description}</p>
      <div className="event-card__choices">
        {isRandom ? (
          <button
            className="choice-button choice-button--random"
            onClick={handleRandomAcknowledge}
          >
            <span className="choice-hotkey">⏎</span>
            <span className="choice-text">
              {(event as RandomEvent).type === 'positive' ? '坦然接受这份好运 🙏' : '勇敢面对命运的挑战 💪'}
            </span>
          </button>
        ) : (
          choices.map((choice, i) => (
            <ChoiceButton
              key={i}
              choice={choice}
              index={i}
              disabled={isChoiceDisabled(choice)}
              onChoose={() => onChoose(choice)}
            />
          ))
        )}
      </div>
    </div>
  );
}
