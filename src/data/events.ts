import type { FixedEvent } from '../types/game.ts';

export const FIXED_EVENTS: FixedEvent[] = [
  // ======== 婴幼儿期（0-5岁）========
  {
    id: 0,
    age: 0,
    title: '来到这个世界',
    description: '伴随着一声啼哭，你来到了这个世界。新生的你紧闭着双眼，感受着这个陌生而温暖的世界。亲人们围在床边，脸上洋溢着喜悦的笑容。',
    choices: [
      {
        text: '大声啼哭，宣告到来',
        stats: { health: 2, charm: 1 },
        mbti: { E: 3, T: 1 },
        outcome: '你以响亮的啼哭声向世界宣告了自己的到来，充满了生命力。',
      },
      {
        text: '安静地观察周围',
        stats: { intelligence: 2, creativity: 1 },
        mbti: { I: 3, N: 2 },
        outcome: '你安静地睁着眼睛，仿佛在认真观察这个崭新的世界。',
      },
      {
        text: '紧紧抓住妈妈的手指',
        stats: { charm: 2, happiness: 2 },
        mbti: { F: 3, J: 1 },
        outcome: '你紧紧握住妈妈的手指，那一瞬间的触感让所有人心里一暖。',
      },
    ],
  },
  {
    id: 1,
    age: 2,
    title: '学会走路',
    description: '你开始尝试自己走路了。小小的身体摇摇晃晃地站在地上，眼前是一条充满未知的路。大人们在一旁鼓励地看着你。',
    choices: [
      {
        text: '勇敢地迈出第一步',
        stats: { health: 2, charm: 1 },
        mbti: { E: 3, T: 1 },
        outcome: '你勇敢地迈出了第一步，虽然摔倒了，但马上又爬起来继续走。',
      },
      {
        text: '扶着墙慢慢走',
        stats: { intelligence: 2, creativity: 1 },
        mbti: { I: 2, J: 3 },
        outcome: '你选择了谨慎的方式，扶着墙一步一步地探索前进。',
      },
      {
        text: '站在原地伸手要抱抱',
        stats: { charm: 3, happiness: 2 },
        mbti: { F: 3, E: 1 },
        outcome: '你张开双臂撒娇要抱抱，大人们笑着把你抱在怀里。',
      },
    ],
  },
  {
    id: 2,
    age: 4,
    title: '幼儿园的第一天',
    description: '今天是上幼儿园的第一天，教室里有许多从没见过的玩具和小朋友。妈妈把你送到门口，蹲下来摸了摸你的头。',
    choices: [
      {
        text: '开心地和妈妈挥手告别',
        stats: { charm: 2, happiness: 1 },
        mbti: { E: 3, J: 1 },
        outcome: '你大方地和妈妈挥手再见，转身就跑去找小朋友们玩了。',
      },
      {
        text: '躲在角落里独自玩积木',
        stats: { intelligence: 2, creativity: 2 },
        mbti: { I: 3, N: 1 },
        outcome: '你安安静静地坐在角落里搭积木，沉浸在自己的小世界里。',
      },
      {
        text: '主动交新朋友',
        stats: { charm: 3, happiness: 2 },
        mbti: { E: 3, F: 2 },
        outcome: '你主动走到一个小朋友面前说"我们一起玩吧"，很快就交到了第一个朋友。',
      },
    ],
  },
  {
    id: 3,
    age: 5,
    title: '小小的陪伴 🐾',
    description: '家里来了一只小动物，毛茸茸的小家伙好奇地看着你。你伸出手，它小心翼翼地闻了闻你的指尖。',
    choices: [
      {
        text: '兴奋地和小狗满屋跑',
        stats: { health: 2, happiness: 3 },
        mbti: { E: 3, P: 1 },
        outcome: '你和小狗在屋子里追来追去，笑声充满了整个家。',
      },
      {
        text: '温柔地给小猫梳毛',
        stats: { charm: 3, happiness: 2 },
        mbti: { F: 3, J: 2 },
        outcome: '你轻轻地给小猫梳毛，它舒服地发出了咕噜咕噜的声音。',
      },
      {
        text: '认真研究小乌龟的习性',
        stats: { intelligence: 3, creativity: 1 },
        mbti: { I: 2, T: 3 },
        outcome: '你蹲在鱼缸前观察小乌龟怎么爬、怎么吃东西，充满了好奇。',
      },
      {
        text: '有点害怕，远远地看着',
        stats: { intelligence: 1, creativity: 1 },
        mbti: { S: 2, T: 2 },
        outcome: '你有点害怕这个小家伙，躲在大人身后偷偷观察。',
      },
    ],
  },

  // ======== 童年期（6-11岁）========
  {
    id: 4,
    age: 6,
    title: '小学生活开始',
    description: '背上新书包，你成了一名小学生。崭新的课本散发着油墨的香味，教室里挂着"好好学习，天天向上"的标语。',
    choices: [
      {
        text: '坐第一排认真听课',
        stats: { intelligence: 3, creativity: 1 },
        mbti: { J: 3, T: 1 },
        outcome: '你坐得笔直，眼睛跟着老师的粉笔走，是班上最认真的学生。',
      },
      {
        text: '下课就和同学疯玩',
        stats: { health: 2, charm: 2 },
        mbti: { E: 3, P: 2 },
        outcome: '铃声一响你就冲出去玩，跳皮筋、扔沙包，满头大汗。',
      },
      {
        text: '帮老师擦黑板收作业',
        stats: { charm: 3, happiness: 1 },
        mbti: { F: 2, J: 2 },
        outcome: '你主动帮老师做事，成了老师眼中的小帮手。',
      },
    ],
  },
  {
    id: 5,
    age: 8,
    title: '发现了新爱好',
    description: '学校开了兴趣班，五花八门的课程让你眼花缭乱。你站在公告栏前，认真地看着每一张海报。',
    choices: [
      {
        text: '学弹钢琴——指尖流淌的旋律',
        stats: { creativity: 3, charm: 2 },
        mbti: { N: 2, F: 1 },
        outcome: '你的手指在黑白琴键上跳跃，第一次完整弹出一首曲子时，你开心极了。',
      },
      {
        text: '和队友一起踢足球',
        stats: { health: 3, happiness: 2 },
        mbti: { E: 3, T: 1 },
        outcome: '你在绿茵场上奔跑，和队友配合进球的那一刻，你爱上了这项运动。',
      },
      {
        text: '学下围棋——棋盘上的智慧',
        stats: { intelligence: 3, creativity: 2 },
        mbti: { I: 2, T: 3, J: 2 },
        outcome: '你坐在棋盘前潜心思考，每一步落子都让你感受到策略的魅力。',
      },
      {
        text: '开始学画画',
        stats: { creativity: 4, charm: 1 },
        mbti: { N: 3, P: 2 },
        outcome: '你拿着画笔在纸上涂涂抹抹，虽然画得歪歪扭扭，但想象力已经开始飞翔。',
      },
    ],
  },
  {
    id: 6,
    age: 10,
    title: '和好朋友吵架了',
    description: '最好的朋友因为一件小事和你吵了起来，对方气鼓鼓地说"再也不和你玩了！"你心里又委屈又难过。',
    choices: [
      {
        text: '主动道歉和好',
        stats: { charm: 3, happiness: 2 },
        mbti: { F: 3, E: 1 },
        outcome: '你鼓起勇气说了对不起，朋友破涕为笑，你们和好如初了。',
      },
      {
        text: '冷战到底，绝不低头',
        stats: { intelligence: 1, creativity: 1 },
        mbti: { I: 2, T: 3, J: 3 },
        outcome: '你倔强地不肯开口，两人冷战了整整一个星期。',
      },
      {
        text: '写一封道歉信',
        stats: { creativity: 2, intelligence: 2 },
        mbti: { F: 2, N: 2 },
        outcome: '你写了一封信塞进对方的书包里，文字的力量让你们重归于好。',
      },
      {
        text: '找老师帮忙调解',
        stats: { charm: 2, intelligence: 1 },
        mbti: { J: 2, F: 2 },
        outcome: '在老师的帮助下，你们互相理解了对方的想法。',
      },
    ],
  },

  // ======== 少年期（12-17岁）========
  {
    id: 7,
    age: 12,
    title: '进入初中',
    description: '你踏入了初中的大门，校园比小学大了好几倍。课程变多了，同学们也来自不同的地方，一切都很新鲜。',
    choices: [
      {
        text: '竞选班长',
        stats: { charm: 3, intelligence: 1 },
        mbti: { E: 3, T: 2, J: 2 },
        outcome: '你站在讲台上发表竞选演说，最终以高票当选班长。',
      },
      {
        text: '默默努力学习',
        stats: { intelligence: 4, creativity: 1 },
        mbti: { I: 3, J: 3 },
        outcome: '你把所有精力都放在学习上，成绩名列前茅。',
      },
      {
        text: '参加各种社团活动',
        stats: { happiness: 3, creativity: 2 },
        mbti: { E: 2, N: 2, P: 2 },
        outcome: '你加入了文学社和科学社，认识了一群志同道合的朋友。',
      },
    ],
  },
  {
    id: 8,
    age: 14,
    title: '青春期的心事',
    description: '你发现自己好像变了很多，有时候莫名地烦躁，有时候又莫名地感伤。心里藏了一些不敢说出口的小秘密。',
    choices: [
      {
        text: '偷偷写日记',
        stats: { creativity: 3, intelligence: 1 },
        mbti: { I: 3, N: 2, F: 2 },
        outcome: '你把所有的心事都写进了带锁的日记本里，文字成了最好的倾诉对象。',
      },
      {
        text: '和好朋友倾诉',
        stats: { charm: 2, happiness: 2 },
        mbti: { E: 3, F: 3 },
        outcome: '你趴在好朋友肩上哭了很久，说出来之后心里舒服多了。',
      },
      {
        text: '疯狂打游戏发泄',
        stats: { creativity: 1, intelligence: 1 },
        mbti: { P: 3, T: 2 },
        outcome: '你把自己关在房间里打了一整天的游戏，暂时忘记了烦恼。',
      },
      {
        text: '找老师/父母谈心',
        stats: { intelligence: 2, happiness: 2 },
        mbti: { J: 2, F: 2 },
        outcome: '你鼓起勇气和父母聊了聊，他们的理解和包容让你很感动。',
      },
    ],
  },
  {
    id: 9,
    age: 16,
    title: '人生第一个重要选择（文理分科）',
    description: '高二要分科了，这是你人生中第一次需要做出的重要选择。文科还是理科？老师、家长、同学各有各的建议。',
    choices: [
      {
        text: '选择理科——逻辑与理性',
        stats: { intelligence: 4, creativity: 1 },
        mbti: { T: 3, J: 2 },
        outcome: '你选择了理科，沉浸在公式和定理的世界里，逻辑思维日益敏锐。',
      },
      {
        text: '选择文科——人文与情怀',
        stats: { charm: 3, creativity: 2 },
        mbti: { F: 2, N: 3 },
        outcome: '你选择了文科，在历史和文学的海洋中徜徉，内心变得丰富而柔软。',
      },
      {
        text: '选择艺术特长',
        stats: { creativity: 4, charm: 2 },
        mbti: { N: 3, P: 2 },
        outcome: '你选择了艺术的道路，用画笔和色彩表达内心的世界。',
      },
      {
        text: '听从父母的安排',
        stats: { happiness: 2, charm: 1 },
        mbti: { J: 3, F: 2 },
        outcome: '你听从了父母的建议，虽然不完全是自己想要的，但也认真努力地学着。',
      },
    ],
  },

  // ======== 青年期（18-24岁）========
  {
    id: 10,
    age: 18,
    title: '高考结束',
    description: '最后一门考试的铃声响起，你放下笔，看着窗外。十二年的寒窗苦读，在这一刻画上了句号。未来的大门正在缓缓打开。',
    choices: [
      {
        text: '金榜题名，考上985重点大学',
        stats: { intelligence: 5, wealth: 2 },
        mbti: { I: 2, T: 2, J: 3 },
        threshold: { stat: 'intelligence', value: 60 },
        outcome: '你以优异的成绩考上了理想的大学，全家人都为你感到骄傲。',
      },
      {
        text: '考上普通本科',
        stats: { happiness: 3, charm: 1 },
        mbti: { F: 2, E: 2 },
        outcome: '你考上了一所普通的大学，虽然不是顶尖，但你相信未来在自己手中。',
      },
      {
        text: '选择出国留学',
        stats: { intelligence: 3, creativity: 3 },
        mbti: { N: 3, P: 2 },
        outcome: '你踏上了异国他乡的土地，开始了充满挑战的留学生活。',
      },
      {
        text: '直接进入社会工作',
        stats: { wealth: 3, charm: 3 },
        mbti: { E: 3, T: 2, P: 2 },
        outcome: '你选择直接工作，提前步入了社会这所大学。',
      },
    ],
  },
  {
    id: 11,
    age: 20,
    title: '大学时光',
    description: '大学的生活丰富多彩，你拥有了前所未有的自由。课程可以自己选，时间可以自己安排，人生第一次完全由自己做主。',
    choices: [
      {
        text: '泡图书馆，专注学业',
        stats: { intelligence: 4, creativity: 1 },
        mbti: { I: 2, T: 2, J: 3 },
        outcome: '你把大部分时间都泡在图书馆里，专业知识非常扎实。',
      },
      {
        text: '参加学生会/社团活动',
        stats: { charm: 3, happiness: 2 },
        mbti: { E: 3, F: 2, P: 1 },
        outcome: '你活跃在各大社团之间，认识了很多朋友，社交能力大大提升。',
      },
      {
        text: '谈一场恋爱',
        stats: { charm: 2, happiness: 3 },
        mbti: { F: 3, E: 2 },
        outcome: '你在校园里遇到了心动的人，谈了一场纯粹而美好的恋爱。',
      },
      {
        text: '开始做兼职/创业',
        stats: { wealth: 3, intelligence: 2 },
        mbti: { T: 2, E: 2, J: 2 },
        outcome: '你利用课余时间做兼职，第一次体会到了赚钱的不易和成就感。',
      },
    ],
  },
  {
    id: 12,
    age: 22,
    title: '毕业季的抉择',
    description: '大学毕业了，同学们各奔东西。你站在人生的十字路口，面前是几条截然不同的路，每一条都通向未知的未来。',
    choices: [
      {
        text: '进大公司稳定工作',
        stats: { wealth: 4, intelligence: 1 },
        mbti: { J: 3, T: 2 },
        outcome: '你通过了层层面试，进入了一家知名企业，开始了朝九晚五的白领生活。',
      },
      {
        text: '追随梦想自由职业',
        stats: { creativity: 4, happiness: 2 },
        mbti: { N: 3, P: 3 },
        outcome: '你选择了自由职业，虽然收入不稳定，但每一天都在做自己热爱的事情。',
      },
      {
        text: '继续读研深造',
        stats: { intelligence: 4, creativity: 1 },
        mbti: { I: 2, T: 3, J: 2 },
        outcome: '你继续留在校园里深造，朝着学术的道路前进。',
      },
      {
        text: '和恋人一起去陌生城市打拼',
        stats: { charm: 2, happiness: 3 },
        mbti: { E: 2, F: 3, P: 2 },
        outcome: '你和恋人一起去了一个陌生的城市，虽然辛苦，但有爱人在身边就不怕。',
      },
    ],
  },

  // ======== 壮年期（25-34岁）========
  {
    id: 13,
    age: 25,
    title: '职场新人',
    description: '踏入职场已经一年多了，你渐渐从懵懂的新人变成了能独立承担工作的骨干。职场的规则比想象中复杂得多。',
    choices: [
      {
        text: '拼命加班，努力表现',
        stats: { intelligence: 3, wealth: 3 },
        mbti: { T: 3, J: 2, I: 2 },
        outcome: '你每天最早到最晚走，领导看到了你的努力，给你加了薪。',
      },
      {
        text: '搞好人际关系',
        stats: { charm: 4, happiness: 1 },
        mbti: { E: 3, F: 2 },
        outcome: '你请同事喝奶茶、帮大家带午餐，成了办公室里人缘最好的那一个。',
      },
      {
        text: '保持自己的步调，不卑不亢',
        stats: { health: 2, intelligence: 2 },
        mbti: { I: 2, J: 3 },
        outcome: '你按时上下班，高效完成工作，不参与职场勾心斗角。',
      },
      {
        text: '寻找更好的机会',
        stats: { wealth: 2, creativity: 2 },
        mbti: { N: 2, P: 2, T: 2 },
        outcome: '你敏锐地发现了更好的职业机会，果断跳槽到了新公司。',
      },
    ],
  },
  {
    id: 14,
    age: 28,
    title: '感情的抉择',
    description: '身边的朋友陆续结婚了，父母也开始催了。你的感情生活站在了一个十字路口，是继续等待还是抓住眼前？',
    choices: [
      {
        text: '向喜欢的人表白',
        stats: { charm: 3, happiness: 3 },
        mbti: { E: 3, F: 2, P: 2 },
        outcome: '你鼓起勇气表白了，对方红着脸点了点头，你们在一起了。',
      },
      {
        text: '接受家里的相亲安排',
        stats: { happiness: 2, charm: 1 },
        mbti: { J: 3, F: 2 },
        outcome: '你见了家人介绍的几个对象，和一个踏实的人开始交往了。',
      },
      {
        text: '专注于事业',
        stats: { wealth: 4, intelligence: 2 },
        mbti: { I: 2, T: 3 },
        outcome: '你把所有精力都投入到了工作中，事业蒸蒸日上。',
      },
      {
        text: '继续等待真爱',
        stats: { creativity: 2, happiness: 2 },
        mbti: { N: 3, F: 2 },
        outcome: '你相信真爱值得等待，宁愿一个人也不愿将就。',
      },
    ],
  },
  {
    id: 15,
    age: 30,
    title: '三十而立',
    description: '三十岁了，古人说"三十而立"。你回望过去的三十年，展望未来的路，心里有一种说不清的紧迫感。',
    choices: [
      {
        text: '买房安家',
        stats: { wealth: -3, happiness: 3 },
        mbti: { J: 3, S: 2 },
        outcome: '你掏空积蓄付了首付，虽然成了房奴，但有了属于自己的家。',
      },
      {
        text: '辞职创业',
        stats: { wealth: 3, creativity: 3 },
        mbti: { N: 3, P: 3, T: 2 },
        outcome: '你辞去了稳定的工作，开始自己创业，每一天都充满了挑战。',
      },
      {
        text: '结婚生子',
        stats: { happiness: 4, charm: 2 },
        mbti: { F: 3, J: 2, E: 1 },
        outcome: '你和爱人走进了婚姻的殿堂，不久后迎来了新生命的诞生。',
      },
      {
        text: '独自去旅行',
        stats: { happiness: 3, creativity: 2 },
        mbti: { N: 2, P: 3, I: 2 },
        outcome: '你背起行囊独自旅行了一个月，在旅途中重新认识了自己。',
      },
    ],
  },
  {
    id: 16,
    age: 32,
    title: '毛茸茸的缘分 🐾',
    description: '一个偶然的机会，一只毛茸茸的小家伙闯入了你的生活。它用湿漉漉的眼睛看着你，仿佛在说"带我回家吧"。',
    choices: [
      {
        text: '领养一只流浪猫',
        stats: { happiness: 3, charm: 2 },
        mbti: { F: 3, N: 1 },
        outcome: '你把这只流浪猫带回了家，从那天起，你多了一个毛茸茸的家人。',
      },
      {
        text: '给爸妈买一只看门狗',
        stats: { health: 1, wealth: -1 },
        mbti: { T: 2, J: 2 },
        outcome: '你给老家的父母买了一只小狗，既能看家又能陪伴他们。',
      },
      {
        text: '去宠物店打工体验',
        stats: { creativity: 2, charm: 2 },
        mbti: { E: 2, P: 2 },
        outcome: '你在宠物店兼职了一段时间，学到了很多照顾动物的知识。',
      },
      {
        text: '认真考虑后决定不养',
        stats: { intelligence: 3, health: 1 },
        mbti: { I: 2, T: 3, J: 2 },
        outcome: '你理性地评估了自己的时间和条件，决定暂时不养宠物。',
      },
    ],
  },

  // ======== 中年期（35-54岁）========
  {
    id: 17,
    age: 35,
    title: '中年危机的苗头',
    description: '最近你常常失眠，半夜醒来看着天花板发呆。工作遇到了瓶颈，身体也不如从前了。一种说不清的焦虑在心头蔓延。',
    choices: [
      {
        text: '开始健身，改善自己',
        stats: { health: 4, happiness: 2 },
        mbti: { T: 2, J: 3 },
        outcome: '你办了健身卡，每周坚持去健身房，身体状况明显改善了。',
      },
      {
        text: '学一门新技能',
        stats: { intelligence: 3, creativity: 2 },
        mbti: { N: 3, P: 2 },
        outcome: '你利用业余时间学习了一门新技能，打开了新的可能性。',
      },
      {
        text: '买一辆好车犒劳自己',
        stats: { wealth: -3, happiness: 3 },
        mbti: { E: 2, S: 2 },
        outcome: '你刷信用卡买了一辆心仪已久的车，开在路上感觉找回了年轻的自己。',
      },
      {
        text: '找老朋友喝酒倾诉',
        stats: { charm: 2, happiness: 2 },
        mbti: { F: 3, E: 2 },
        outcome: '你和老友约在路边摊喝酒，聊着聊着，心里的石头就放下了。',
      },
    ],
  },
  {
    id: 18,
    age: 40,
    title: '不惑之年',
    description: '四十岁了。你发现自己不再像年轻时那样焦虑和迷茫，很多事情看开了、想通了。但内心深处，还有一个声音在问：这一生，你到底想要什么？',
    choices: [
      {
        text: '给家人更多陪伴',
        stats: { happiness: 4, charm: 2 },
        mbti: { F: 3, J: 2 },
        outcome: '你减少了加班，周末带家人出去郊游，孩子的笑声是最好的治愈。',
      },
      {
        text: '投资理财，让钱生钱',
        stats: { wealth: 4, intelligence: 2 },
        mbti: { T: 3, J: 2 },
        outcome: '你开始认真研究理财，学会了让钱为你工作的道理。',
      },
      {
        text: '培养一个修身养性的爱好',
        stats: { health: 2, creativity: 3 },
        mbti: { I: 2, N: 2, P: 1 },
        outcome: '你开始练书法和种花，心静了下来，生活有了新的寄托。',
      },
      {
        text: '写一本关于人生的书',
        stats: { creativity: 4, intelligence: 2 },
        mbti: { N: 3, I: 2 },
        outcome: '你拿起笔开始记录自己的人生感悟，写着写着竟成了一本书。',
      },
    ],
  },
  {
    id: 19,
    age: 45,
    title: '健康警钟',
    description: '体检报告上几项指标亮起了红灯。医生严肃地告诉你，需要改变生活方式了。你第一次真切地感受到，身体不是取之不尽的资本。',
    choices: [
      {
        text: '全面检查，调整饮食和作息',
        stats: { health: 5, happiness: 1 },
        mbti: { J: 3, T: 2 },
        outcome: '你严格按照医生的建议调整了生活方式，半年后各项指标恢复正常。',
      },
      {
        text: '不以为意，继续拼命工作',
        stats: { wealth: 3, health: -4 },
        mbti: { T: 3, J: 2 },
        outcome: '你把体检报告塞进抽屉，继续没日没夜地工作，身体越来越差了。',
      },
      {
        text: '开始晨练和太极拳',
        stats: { health: 4, happiness: 2 },
        mbti: { I: 2, P: 1 },
        outcome: '你每天早起打太极拳，身体渐渐硬朗起来，心情也平和了许多。',
      },
      {
        text: '减少工作，及时行乐',
        stats: { happiness: 3, health: 2 },
        mbti: { N: 2, F: 2 },
        outcome: '你决定不再透支身体，开始享受生活中的小确幸。',
      },
    ],
  },
  {
    id: 20,
    age: 50,
    title: '知天命',
    description: '半百之年，你终于理解了什么叫"知天命"。人生有太多事情无法强求，但也有许多美好值得珍惜。你望着镜子里两鬓斑白的自己，释然地笑了。',
    choices: [
      {
        text: '提携后辈，传授经验',
        stats: { charm: 3, happiness: 3 },
        mbti: { F: 3, E: 2, J: 1 },
        outcome: '你主动指导年轻同事，看着他们成长，你有了一种传承的成就感。',
      },
      {
        text: '回顾半生，写回忆录',
        stats: { creativity: 3, intelligence: 2 },
        mbti: { I: 2, N: 2, F: 1 },
        outcome: '你开始写回忆录，将半生的故事化作文字留给后人。',
      },
      {
        text: '开始做公益和慈善',
        stats: { happiness: 4, charm: 2 },
        mbti: { F: 3, E: 2, N: 1 },
        outcome: '你加入了公益组织，去山区支教、捐款助学，内心前所未有的充实。',
      },
      {
        text: '继续奋斗，再创高峰',
        stats: { wealth: 3, intelligence: 2 },
        mbti: { T: 3, J: 2 },
        outcome: '你不服老，继续在商场上打拼，又创造了一个事业高峰。',
      },
    ],
  },

  // ======== 晚年期（55岁以上）========
  {
    id: 21,
    age: 55,
    title: '退休前的准备',
    description: '距离退休还有几年，你开始认真思考退休后的生活。大半辈子都在忙碌，终于可以为自己活一次了。',
    choices: [
      {
        text: '精心规划退休生活',
        stats: { intelligence: 2, happiness: 2 },
        mbti: { J: 3, S: 2, T: 1 },
        outcome: '你制作了一份详细的退休计划表，把想做的事都列了出来。',
      },
      {
        text: '接受返聘继续工作',
        stats: { wealth: 3, intelligence: 2 },
        mbti: { T: 2, J: 2 },
        outcome: '单位返聘了你，你继续在熟悉的岗位上发光发热。',
      },
      {
        text: '买一套养老的房子',
        stats: { wealth: -3, happiness: 3 },
        mbti: { J: 2, S: 2 },
        outcome: '你在风景优美的海边城市买了套小房子，准备在那里安度晚年。',
      },
      {
        text: '开始学摄影/书法/绘画',
        stats: { creativity: 4, happiness: 2 },
        mbti: { N: 2, P: 2, I: 1 },
        outcome: '你拿起相机和毛笔，退休生活变得比上班还充实。',
      },
    ],
  },
  {
    id: 22,
    age: 60,
    title: '花甲之年',
    description: '六十大寿，儿女们为你操办了一场热闹的寿宴。你看着满堂的儿孙和亲友，心里感慨万千。',
    choices: [
      {
        text: '在家含饴弄孙',
        stats: { happiness: 4, charm: 2 },
        mbti: { F: 3, J: 2 },
        outcome: '你每天接送孙子上下学、给他讲故事，享受着天伦之乐。',
      },
      {
        text: '和老伴周游世界',
        stats: { happiness: 4, health: 2 },
        mbti: { E: 3, N: 2, P: 2 },
        outcome: '你牵起老伴的手，开始了环游世界的旅行。',
      },
      {
        text: '开一个博客记录生活',
        stats: { creativity: 3, intelligence: 2 },
        mbti: { N: 2, F: 2, E: 1 },
        outcome: '你学会了上网，开了博客分享自己的故事，居然收获了不少粉丝。',
      },
    ],
  },
  {
    id: 23,
    age: 65,
    title: '人生的智慧',
    description: '活了大半辈子，你沉淀下了许多人生智慧。年轻人来向你请教，你笑着给他们倒了一杯茶。',
    choices: [
      {
        text: '整理家谱，传承家风',
        stats: { intelligence: 2, charm: 2 },
        mbti: { J: 2, F: 2, S: 2 },
        outcome: '你花了几个月时间整理家谱，把家族的故事一代代传下去。',
      },
      {
        text: '到社区做志愿者',
        stats: { happiness: 3, charm: 2 },
        mbti: { F: 3, E: 2 },
        outcome: '你在社区做志愿者，帮助那些需要帮助的人，感到非常有意义。',
      },
      {
        text: '写一本自传留给后人',
        stats: { creativity: 3, intelligence: 3 },
        mbti: { I: 2, N: 2 },
        outcome: '你认认真真写了一本自传，把一生的经验和感悟留给了子孙。',
      },
      {
        text: '每天喝茶养花，悠然自得',
        stats: { health: 3, happiness: 3 },
        mbti: { I: 2, P: 2, S: 1 },
        outcome: '你的后院种满了花草，每天泡一壶茶、看一本书，岁月静好。',
      },
    ],
  },
  {
    id: 24,
    age: 70,
    title: '夕阳红',
    description: '七十古稀，你的头发全白了，但精神依然很好。每天早上在公园里散步，看着日出，觉得这一生很值得。',
    choices: [
      {
        text: '和老友们聚会叙旧',
        stats: { happiness: 4, charm: 1 },
        mbti: { E: 3, F: 2 },
        outcome: '你定期和几个老友聚会，回忆年轻时的故事，笑声不断。',
      },
      {
        text: '学习使用智能手机',
        stats: { intelligence: 3, creativity: 1 },
        mbti: { N: 2, P: 1 },
        outcome: '你学会了用智能手机，和孙子视频通话、刷短视频，跟上了时代。',
      },
      {
        text: '安享晚年，随遇而安',
        stats: { happiness: 3, health: 2 },
        mbti: { I: 2, J: 2, S: 1 },
        outcome: '你每天晒晒太阳、逗逗鸟，过着不紧不慢的日子。',
      },
    ],
  },
  {
    id: 25,
    age: 75,
    title: '人生回望',
    description: '你坐在老藤椅上，阳光暖暖地照在身上。一生如电影般在眼前闪过，有欢笑有泪水，有遗憾有满足。你深吸一口气，缓缓闭上了眼睛。',
    choices: [
      {
        text: '对自己的一生感到满意',
        stats: { happiness: 5, charm: 2 },
        mbti: { F: 2, J: 1 },
        outcome: '你微笑着闭上眼睛，这一生，你无怨无悔。',
      },
      {
        text: '有些遗憾，但已经释怀',
        stats: { happiness: 3, health: 2 },
        mbti: { F: 2, N: 1 },
        outcome: '你想起了一些遗憾的事，但已经能够平静地接受人生的不完美。',
      },
      {
        text: '如果再来一次……',
        stats: { creativity: 3, intelligence: 2 },
        mbti: { N: 2, P: 2 },
        outcome: '你想象着另一种人生的可能，带着微笑进入了梦乡。',
      },
    ],
  },
];
