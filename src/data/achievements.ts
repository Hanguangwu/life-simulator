import type { Achievement } from '../types/game.ts';

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: 'scholar_life',
    icon: '🧠',
    name: '学霸人生',
    condition: (state) => state.stats.intelligence >= 90,
  },
  {
    id: 'billionaire',
    icon: '💰',
    name: '亿万富翁',
    condition: (state) => state.stats.wealth >= 90,
  },
  {
    id: 'longevity_champion',
    icon: '❤️',
    name: '长寿冠军',
    condition: (state) => state.stats.health >= 85,
  },
  {
    id: 'artist_soul',
    icon: '🎨',
    name: '艺术家之魂',
    condition: (state) => state.stats.creativity >= 85,
  },
  {
    id: 'happiness_overflow',
    icon: '😊',
    name: '幸福满满',
    condition: (state) => state.stats.happiness >= 85,
  },
  {
    id: 'charm_max',
    icon: '✨',
    name: '万人迷',
    condition: (state) => state.stats.charm >= 85,
  },
  {
    id: 'all_rounder',
    icon: '🌈',
    name: '全才人生',
    condition: (state) =>
      state.stats.intelligence >= 70 &&
      state.stats.charm >= 70 &&
      state.stats.health >= 70 &&
      state.stats.wealth >= 70 &&
      state.stats.happiness >= 70 &&
      state.stats.creativity >= 70,
  },
  {
    id: 'eventful_life',
    icon: '🛡️',
    name: '命运多舛',
    condition: (state) => state.triggeredRandomEventCount >= 4,
  },
  {
    id: 'unlucky',
    icon: '💀',
    name: '倒霉鬼',
    condition: (state) => state.lowestStatEver <= 10,
  },
  {
    id: 'legendary_life',
    icon: '👑',
    name: '传奇人生',
    condition: (state) => state.lifeScore >= 80,
  },
  {
    id: 'adventurer',
    icon: '🎲',
    name: '冒险家',
    condition: (state) => {
      // Check if any event log entry mentions risk/dice
      return state.eventLog.some((entry) => entry.title.includes('命运骰子'));
    },
  },
  {
    id: 'achievement_collector',
    icon: '🏆',
    name: '成就收集者',
    condition: (state) => {
      // Exclude this achievement itself from count
      const otherAchievements = state.unlockedAchievements.filter((a) => a !== 'achievement_collector');
      return otherAchievements.length >= 5;
    },
  },
  {
    id: 'hidden_personality',
    icon: '🌟',
    name: '隐藏人格觉醒',
    condition: (state) => state.hasSBTI,
  },
];
