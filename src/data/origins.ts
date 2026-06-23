import type { Origin } from '../types/game.ts';

export const ORIGINS: Origin[] = [
  {
    id: 'scholar',
    name: '书香门第',
    icon: '📚',
    description: '知识分子家庭，藏书万卷',
    modifiers: { intelligence: 15 },
  },
  {
    id: 'merchant',
    name: '商贾之家',
    icon: '🏦',
    description: '富裕但父母忙碌',
    modifiers: { wealth: 30, happiness: -15 },
  },
  {
    id: 'artist',
    name: '艺术世家',
    icon: '🎭',
    description: '自由浪漫但经济不稳',
    modifiers: { creativity: 25, wealth: -15 },
  },
  {
    id: 'medical',
    name: '医学世家',
    icon: '🏥',
    description: '注重健康，科学氛围',
    modifiers: { health: 5, intelligence: 10 },
  },
  {
    id: 'working',
    name: '工薪家庭',
    icon: '🏠',
    description: '普通温馨，稳扎稳打',
    modifiers: {},
  },
  {
    id: 'rural',
    name: '农村家庭',
    icon: '🌾',
    description: '物质匮乏但自由快乐',
    modifiers: { health: 5, wealth: -25 },
  },
  {
    id: 'military',
    name: '军人家庭',
    icon: '🎖️',
    description: '严格自律，坚韧不拔',
    modifiers: { health: 10, charm: -5 },
  },
  {
    id: 'single',
    name: '单亲家庭',
    icon: '💪',
    description: '缺少陪伴但学会独立',
    modifiers: { happiness: -20, creativity: 5 },
  },
  {
    id: 'diplomat',
    name: '外交官家庭',
    icon: '🌍',
    description: '见多识广但缺乏安定',
    modifiers: { charm: 20, happiness: -15 },
  },
  {
    id: 'sports',
    name: '体育世家',
    icon: '🏃',
    description: '运动天赋，身体强健',
    modifiers: { health: 15, intelligence: -10 },
  },
  {
    id: 'tech',
    name: '科技新贵',
    icon: '💻',
    description: '科技产品丰富，久坐伤身',
    modifiers: { wealth: 25, health: -25 },
  },
  {
    id: 'noble',
    name: '豪门望族',
    icon: '👑',
    description: '锦衣玉食但自由受限',
    modifiers: { wealth: 40, happiness: -25 },
  },
];

export function getRandomOrigin(): Origin {
  const idx = Math.floor(Math.random() * ORIGINS.length);
  return ORIGINS[idx];
}

export function applyOriginModifiers(modifiers: Partial<Record<string, number>>): Record<string, number> {
  const result: Record<string, number> = {};
  for (const [key, value] of Object.entries(modifiers)) {
    if (value !== undefined) {
      // Add ±5 random fluctuation
      const fluctuation = Math.floor(Math.random() * 11) - 5;
      result[key] = value + fluctuation;
    }
  }
  return result;
}
