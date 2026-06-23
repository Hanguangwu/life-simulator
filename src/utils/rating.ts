import type { Stats, LifeRating } from '../types/game.ts';

/**
 * Calculate life score as average of all 6 stats.
 */
export function calculateLifeScore(stats: Stats): number {
  const values = [
    stats.intelligence,
    stats.charm,
    stats.health,
    stats.wealth,
    stats.happiness,
    stats.creativity,
  ];
  return Math.round(values.reduce((sum, v) => sum + v, 0) / values.length);
}

/**
 * Get life rating from score.
 */
export function getLifeRating(score: number): LifeRating {
  if (score >= 80) return { score, grade: 'S', label: '传奇人生', color: '#fdcb6e' };
  if (score >= 70) return { score, grade: 'A', label: '精彩人生', color: '#00b894' };
  if (score >= 60) return { score, grade: 'B', label: '充实人生', color: '#74b9ff' };
  if (score >= 50) return { score, grade: 'C', label: '平凡人生', color: '#a29bfe' };
  if (score >= 40) return { score, grade: 'D', label: '坎坷人生', color: '#e17055' };
  return { score, grade: 'E', label: '艰难人生', color: '#d63031' };
}

/**
 * Get a personality-appropriate life summary based on MBTI/SBTI result.
 */
export function getLifeSummary(mbtiType: string | null, sbtiName: string | null, _stats: Stats): string {
  if (sbtiName) {
    const summaries: Record<string, string> = {
      '造梦师': '你的一生如同一场绚丽的梦，用想象力点亮了现实。你创造了属于自己的世界，也给身边的人带来了无限灵感。',
      '人间清醒': '你用清醒的目光看透了世间的真相，在孤独中依然保持着理性与尊严。你的人生是一场深刻的思考。',
      '生活家': '你把平凡的日子过成了诗，在每一个细节中找到了生活的真谛。你的一生是最朴实的幸福范本。',
      '破局者': '你不断打破规则的束缚，在不可能中创造了可能。你的人生是一场精彩的逆袭。',
      '温柔力量': '你用温柔改变了世界，用善良感染了每一个人。你的力量不在于锋芒，而于包容。',
      '孤独行者': '你在孤独中走出了自己的路，不需要掌声也能坚定前行。你的人生是一首独行的壮歌。',
      '烟火人间': '你活成了最绚烂的模样，在短暂的生命中绽放了最耀眼的光芒。你的一生是一场盛大的绽放。',
      '铁壁守护': '你用自己的方式守护着所爱的一切，即使不被理解也从未退缩。你的人生是一座坚实的堡垒。',
      '追星者': '你始终追逐着心中的星光，最终自己也成为了照亮他人的光。你的人生是一场美丽的追光之旅。',
      '笑面智者': '你用幽默化解了生活的苦难，用智慧看透了人生的真相。你的一生是一场通透的修行。',
      '时光旅人': '你在时光的缝隙中收集美好，用温柔的目光注视着世界。你的人生是一首悠长的散文诗。',
      '虚空行者': '你从深渊中走出，带着只有经历过才能获得的智慧。你的人生是一部震撼人心的史诗。',
    };
    return summaries[sbtiName] ?? '你的人生丰富多彩，充满了独特的魅力。';
  }

  const type = mbtiType ?? 'ISFJ';
  const defaultSummaries: Record<string, string> = {
    'INTJ': '你用战略的眼光规划了一生，每一步都在朝着目标前进。你的人生是一盘精妙的大棋。',
    'INTP': '你始终保持着对世界的好奇，用理性探索着万物的规律。你的人生是一场永不停歇的思考。',
    'ENTJ': '你天生就是领导者，用果断和魄力开创了自己的天地。你的人生是一部壮丽的史诗。',
    'ENTP': '你不断挑战常规，在创新中找到了自己的价值。你的人生是一场精彩的冒险。',
    'INFJ': '你用深邃的同理心理解世界，用理想主义照亮他人。你的人生是一首温暖的诗。',
    'INFP': '你守住了内心的诗意和纯粹，在喧嚣的世界里保持着真我。你的人生是一幅美丽的画。',
    'ENFJ': '你用自己的光芒照亮了他人，用感染力改变了世界。你的人生是一曲动人的歌。',
    'ENFP': '你把生命活成了一场盛大的冒险，用热情拥抱每一个可能。你的人生是一段绚丽的旅程。',
    'ISTJ': '你脚踏实地地走好了每一步，用勤勉和可靠赢得了尊重。你的人生是最坚实的丰碑。',
    'ISFJ': '你用默默的守护温暖了身边的人，在平凡中书写了不平凡的故事。你的人生是温暖的港湾。',
    'ESTJ': '你用规则和效率建立了自己的秩序，用执行力成就了不凡。你的人生是一座坚实的殿堂。',
    'ESFJ': '你连接了每一颗心，温暖了每一个角落。你的人生是爱与关怀的见证。',
    'ISTP': '你用行动证明了自己，用实践解决了问题。你的人生是一次次精彩的突破。',
    'ISFP': '你用独特的审美诠释了世界，在平凡中发现了不凡的美。你的人生是一件艺术品。',
    'ESTP': '你抓住了每一个机会，在冒险中创造了精彩。你的人生是一场酣畅淋漓的演出。',
    'ESFP': '你活成了最闪耀的主角，用感染力点燃了每一个舞台。你的人生是一场精彩的表演。',
  };

  return defaultSummaries[type] ?? '你的人生丰富多彩，每一步都值得铭记。';
}
