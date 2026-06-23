import type { Stats } from '../types/game.ts';

export interface SBTIDef {
  id: string;
  name: string;
  icon: string;
  condition: (stats: Stats) => boolean;
  themeColor: string;
  tagline: string;
  description: string;
}

export const SBTI_TYPES: SBTIDef[] = [
  {
    id: 'SBTI-DW',
    name: '造梦师',
    icon: '💫',
    condition: (s) => s.creativity >= 80 && s.happiness >= 75,
    themeColor: '#a29bfe',
    tagline: '在梦与现实的交界处，编织属于你的星河',
    description: '你是天生的梦想家，脑海中总是涌现出无数奇思妙想。你不仅能造梦，更有将梦想变为现实的勇气和能力。在你的世界里，没有什么是不可能的。',
  },
  {
    id: 'SBTI-AK',
    name: '人间清醒',
    icon: '👁️',
    condition: (s) => s.intelligence >= 85 && s.happiness <= 40,
    themeColor: '#00cec9',
    tagline: '看透世间繁华，独守内心清明',
    description: '你是那个看透一切的人。在这个信息爆炸的时代，你始终保持独立思考，不被外界喧嚣所扰。清醒是你的天赋，也是你的宿命。',
  },
  {
    id: 'SBTI-LM',
    name: '生活家',
    icon: '🍵',
    condition: (s) => {
      const vals = [s.intelligence, s.charm, s.health, s.wealth, s.happiness, s.creativity];
      const max = Math.max(...vals);
      const min = Math.min(...vals);
      return max - min <= 25 && s.happiness >= 60;
    },
    themeColor: '#55efc4',
    tagline: '平凡日子里，过出不平凡的滋味',
    description: '你不追求极致的成功，却拥有让人羡慕的生活智慧。在工作与生活之间，你找到了最舒适的平衡点，把平凡的日子过成了诗。',
  },
  {
    id: 'SBTI-RB',
    name: '破局者',
    icon: '🔥',
    condition: (s) => s.charm >= 75 && s.creativity >= 75 && s.wealth <= 40,
    themeColor: '#fd79a8',
    tagline: '规则不过是起跑线，我要的是终点之外',
    description: '你天生就不喜欢按常理出牌。当别人还在循规蹈矩时，你已经找到了新的赛道。打破规则不是你的目的，创造新的可能才是。',
  },
  {
    id: 'SBTI-GF',
    name: '温柔力量',
    icon: '🌸',
    condition: (s) => s.happiness >= 70 && s.charm >= 70 && s.intelligence <= 50,
    themeColor: '#fab1a0',
    tagline: '柔软不是软弱，而是最坚韧的盔甲',
    description: '你选择用温柔对待这个世界。你的力量不来自锋芒，而来自包容与理解。你像水一样柔软，却能穿透最坚硬的石头。',
  },
  {
    id: 'SBTI-LW',
    name: '孤独行者',
    icon: '🐺',
    condition: (s) => s.intelligence >= 70 && s.charm <= 35 && s.happiness <= 50,
    themeColor: '#636e72',
    tagline: '独行者速，独步者远',
    description: '你习惯了独处，在孤独中找到了自己的力量。你不需要别人的认可，因为你知道自己的价值。独行不是孤独，而是一种选择。',
  },
  {
    id: 'SBTI-FW',
    name: '烟火人间',
    icon: '🎆',
    condition: (s) => s.charm >= 80 && s.happiness >= 70 && s.health <= 45,
    themeColor: '#e17055',
    tagline: '活成一场烟火，绚烂每一秒',
    description: '你是人群中最耀眼的那一个。你相信生命就该像烟花一样绚烂，即使短暂也要绽放最美丽的光芒。你的热情感染着身边的每一个人。',
  },
  {
    id: 'SBTI-IS',
    name: '铁壁守护',
    icon: '⚔️🛡️',
    condition: (s) => s.health >= 75 && s.wealth >= 70 && s.happiness <= 50,
    themeColor: '#74b9ff',
    tagline: '为所爱之人，铸一面不倒的城墙',
    description: '你是那个永不言弃的守护者。你用自己的方式保护着身边的人，即使不被理解也从不退缩。你的坚强，是他人最可靠的港湾。',
  },
  {
    id: 'SBTI-SG',
    name: '追星者',
    icon: '✨',
    condition: (s) => s.intelligence >= 75 && s.wealth >= 70 && s.creativity >= 65,
    themeColor: '#6c5ce7',
    tagline: '仰望星空的人，终将成为别人的星',
    description: '你始终保持着对知识的渴望和对美好的追求。你相信努力终有回报，而你也确实用自己的成就照亮了他人的道路。',
  },
  {
    id: 'SBTI-LS',
    name: '笑面智者',
    icon: '🃏',
    condition: (s) => s.charm >= 80 && s.happiness >= 65 && s.intelligence >= 60,
    themeColor: '#ffeaa7',
    tagline: '用笑声解构世界，用幽默穿越人生',
    description: '你是那个总能让别人笑的人。但你的幽默背后是深刻的洞察力，你看透了生活的本质，却选择用笑声来面对。',
  },
  {
    id: 'SBTI-TT',
    name: '时光旅人',
    icon: '⏳',
    condition: (s) => s.creativity >= 65 && s.happiness >= 55 && s.charm >= 55 && s.intelligence <= 55,
    themeColor: '#81ecec',
    tagline: '在岁月的缝隙里，收藏每一个值得铭记的瞬间',
    description: '你是一个怀旧而感性的人，喜欢收集生活中的美好瞬间。你懂得欣赏时光的流逝，在快节奏的世界里保持着内心的从容。',
  },
  {
    id: 'SBTI-VW',
    name: '虚空行者',
    icon: '🕳️',
    condition: (s) => {
      const vals = [s.intelligence, s.charm, s.health, s.wealth, s.happiness, s.creativity];
      const avg = vals.reduce((a, b) => a + b, 0) / vals.length;
      return vals.some((v) => v <= 20) && avg >= 45;
    },
    themeColor: '#2d3436',
    tagline: '在最深的黑暗中，找到最亮的光',
    description: '你经历了生命中最深的低谷，却从未放弃希望。你明白黑暗的意义，也懂得光明的珍贵。你是从深渊中走出的行者，带着只有经历过才能获得的智慧。',
  },
];
