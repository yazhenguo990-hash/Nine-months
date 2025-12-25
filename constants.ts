
import { Question, PersonalityType } from './types';

export const QUESTIONS: Question[] = [
  {
    id: 1,
    text: "在聚会中，你通常是：",
    dimension: 'E/I',
    options: [
      { text: "主动与新朋友交流，充满活力", value: 'E' },
      { text: "和熟悉的朋友待在一起，保持低调", value: 'I' }
    ]
  },
  {
    id: 2,
    text: "在约会时，你更倾向于：",
    dimension: 'S/N',
    options: [
      { text: "关注当下的实际体验（美食、电影等）", value: 'S' },
      { text: "交流彼此的价值观和未来的梦想", value: 'N' }
    ]
  },
  {
    id: 3,
    text: "面对另一半的情绪化，你更可能：",
    dimension: 'T/F',
    options: [
      { text: "冷静分析问题，寻求逻辑解决方案", value: 'T' },
      { text: "优先安抚对方情绪，感同身受", value: 'F' }
    ]
  },
  {
    id: 4,
    text: "对于周末的约会计划，你通常：",
    dimension: 'J/P',
    options: [
      { text: "提前安排好每个细节和流程", value: 'J' },
      { text: "随遇而安，根据当时的心情临时决定", value: 'P' }
    ]
  },
  {
    id: 5,
    text: "你认为恋爱中最重要的基础是：",
    dimension: 'S/N',
    options: [
      { text: "稳妥的物质条件和生活细节", value: 'S' },
      { text: "深层的灵魂共鸣和精神契合", value: 'N' }
    ]
  },
  {
    id: 6,
    text: "在表达爱意时，你更倾向于：",
    dimension: 'E/I',
    options: [
      { text: "热烈而直接，让全世界都知道", value: 'E' },
      { text: "含蓄而深刻，关注私密的互动", value: 'I' }
    ]
  },
  {
    id: 7,
    text: "如果发生争吵，你更希望：",
    dimension: 'T/F',
    options: [
      { text: "讲清楚谁对谁错，公平解决", value: 'T' },
      { text: "照顾彼此感受，维护关系和谐", value: 'F' }
    ]
  },
  {
    id: 8,
    text: "你理想的生活方式是：",
    dimension: 'J/P',
    options: [
      { text: "有条不紊，目标明确", value: 'J' },
      { text: "自由散漫，充满变数和惊喜", value: 'P' }
    ]
  },
  {
    id: 9,
    text: "在爱情中，你更相信：",
    dimension: 'S/N',
    options: [
      { text: "一眼万年的直觉与火花", value: 'N' },
      { text: "日久生情的现实考验与陪伴", value: 'S' }
    ]
  },
  {
    id: 10,
    text: "结束一段繁忙的社交后，你恢复能量的方式是：",
    dimension: 'E/I',
    options: [
      { text: "找朋友倾诉聊天，在互动中找回状态", value: 'E' },
      { text: "安静地独处，看书或听音乐来放空", value: 'I' }
    ]
  },
  {
    id: 11,
    text: "当伴侣向你抱怨工作时，你的第一反应是：",
    dimension: 'T/F',
    options: [
      { text: "帮Ta出主意解决具体麻烦", value: 'T' },
      { text: "抱抱Ta，痛骂Ta的烂老板", value: 'F' }
    ]
  },
  {
    id: 12,
    text: "对于“说走就走的旅行”，你的看法是：",
    dimension: 'J/P',
    options: [
      { text: "太混乱了，必须有详尽的攻略", value: 'J' },
      { text: "极具浪漫感，现在就可以出发", value: 'P' }
    ]
  },
  {
    id: 13,
    text: "在收到伴侣的礼物时，你更在乎：",
    dimension: 'S/N',
    options: [
      { text: "礼物的实用性与耐用度", value: 'S' },
      { text: "礼物背后的寓意与独特灵感", value: 'N' }
    ]
  },
  {
    id: 14,
    text: "如果你需要给伴侣提意见，你会：",
    dimension: 'T/F',
    options: [
      { text: "直截了当，因为事实重于雄辩", value: 'T' },
      { text: "委婉含蓄，优先考虑Ta是否会难受", value: 'F' }
    ]
  },
  {
    id: 15,
    text: "面对未知的明天，你的心态通常是：",
    dimension: 'E/I',
    options: [
      { text: "充满期待，想去体验新的可能性", value: 'E' },
      { text: "更希望生活在自己可控的舒适圈里", value: 'I' }
    ]
  }
];

export const PERSONALITY_TYPES: Record<string, PersonalityType> = {
  'ISTJ': {
    code: 'ISTJ',
    name: '稳健舵手',
    tagline: '承诺即责任，行动胜过千言万语',
    description: '你是一个极其靠谱、注重实际的人。你的爱体现在每一件琐碎的生活细节中，是一个值得信赖的伴侣。',
    traits: ['稳重', '现实', '守信', '务实'],
    compatibility: ['ESFP', 'ESTP'],
    advice: '试着多表达你的内心感受，哪怕这让你感到有些不自然。',
    datingStyle: '传统的守护者，追求稳定、可预测的家庭生活。'
  },
  'ISFJ': {
    code: 'ISFJ',
    name: '守护天使',
    tagline: '温润如玉，默默守护岁月的静好',
    description: '你天生具有同情心，总是默默关怀另一半的各种需求，是避风港一般的存在。',
    traits: ['细腻', '体贴', '忠诚', '勤恳'],
    compatibility: ['ESFP', 'ESTP'],
    advice: '别忘了关爱自己，你的付出也需要得到回馈。',
    datingStyle: '体贴入微，擅长通过照顾对方的生活来表达爱意。'
  },
  'INFJ': {
    code: 'INFJ',
    name: '灵魂导师',
    tagline: '洞察深邃，寻找跨越时空的共鸣',
    description: '你拥有极强的直觉和同理心，追求精神层面的高度契合，不喜欢浅薄的社交。',
    traits: ['睿智', '理想主义', '神秘', '果决'],
    compatibility: ['ENTP', 'ENFP'],
    advice: '不要对一段关系抱有完美的幻想，接受生活的不完美。',
    datingStyle: '深沉而专注，追求命中注定的“唯一”。'
  },
  'INTJ': {
    code: 'INTJ',
    name: '战略智囊',
    tagline: '逻辑为刃，构建未来的爱情版图',
    description: '你独立且自信，对伴侣有着极高的智力要求，喜欢共同成长和解决问题的关系。',
    traits: ['独立', '理性', '追求效率', '坚定'],
    compatibility: ['ENFP', 'ENTP'],
    advice: '有时候，一个拥抱比一通逻辑分析更有用。',
    datingStyle: '理智冷静，更倾向于通过共同的奋斗目标来维系感情。'
  },
  'ISTP': {
    code: 'ISTP',
    name: '冷静极客',
    tagline: '酷爱自由，在掌控中体验心跳',
    description: '你行动力极强，喜欢新鲜感和挑战，不喜欢被束缚或过度依赖。',
    traits: ['随性', '灵活', '客观', '动手力'],
    compatibility: ['ESTJ', 'ESFJ'],
    advice: '试着给予伴侣更多的安全感，长期承诺并非束缚。',
    datingStyle: '喜欢一起探索新事物，爱情是一场有趣的冒险。'
  },
  'ISFP': {
    code: 'ISFP',
    name: '灵感艺术家',
    tagline: '感性至上，用美点亮彼此的生活',
    description: '你温和内敛，拥有极高的审美，喜欢在静谧中感受生活的点滴美好。',
    traits: ['优雅', '感性', '谦逊', '即兴'],
    compatibility: ['ENFJ', 'ESFJ'],
    advice: '勇敢表达你的负面情绪，不要总是憋在心里。',
    datingStyle: '浪漫而富有创意，擅长制造生活中的小惊喜。'
  },
  'INFP': {
    code: 'INFP',
    name: '纯真诗人',
    tagline: '在理想与现实间，寻找灵魂的契合',
    description: '你内心世界丰富，渴望一段超越世俗的纯粹爱情。你对另一半的忠诚和理解是极高的。',
    traits: ['敏感', '忠诚', '理想主义', '深沉'],
    compatibility: ['ENFJ', 'ENTJ'],
    advice: '不要因为害怕冲突而隐藏真实想法，沟通是保持亲密的钥匙。',
    datingStyle: '慢热但极具爆发力，一旦爱上便会深陷其中。'
  },
  'INTP': {
    code: 'INTP',
    name: '逻辑学者',
    tagline: '求知若渴，探索智慧的交锋',
    description: '你思维敏捷，对世界充满好奇。你希望在感情中能有独立的思考空间。',
    traits: ['好奇', '公正', '独立', '理论'],
    compatibility: ['ENTJ', 'ESTJ'],
    advice: '学会关注伴侣的日常情绪变化，不要总活在思维殿堂里。',
    datingStyle: '倾向于理性的沟通，寻找志同道合的智力伴侣。'
  },
  'ESTP': {
    code: 'ESTP',
    name: '活力先锋',
    tagline: '享受当下，在动感中谱写恋曲',
    description: '你充满能量，社交能力极佳。你喜欢充满激情和快节奏的互动。',
    traits: ['自信', '务实', '社交达人', '爱冒险'],
    compatibility: ['ISFJ', 'ISTJ'],
    advice: '学会放慢脚步，耐心经营那些需要时间的深层次连接。',
    datingStyle: '热情奔放，喜欢直截了当的恋爱方式。'
  },
  'ESFP': {
    code: 'ESFP',
    name: '耀眼明星',
    tagline: '快乐共享，把生活活成一场庆典',
    description: '你是人群中的焦点，充满了乐观和幽默感，能给周围的人带去无尽的欢乐。',
    traits: ['幽默', '直觉', '亲和', '乐观'],
    compatibility: ['ISTJ', 'ISFJ'],
    advice: '面对关系中的困难时，不要习惯性地逃避或选择娱乐。',
    datingStyle: '热烈而充满感染力，追求丰富多样的恋爱生活。'
  },
  'ENFP': {
    code: 'ENFP',
    name: '快乐源泉',
    tagline: '创意无限，追随内心的各种可能性',
    description: '你充满想象力，总能发现生活中的美好。你渴望探索人生的各种可能性。',
    traits: ['热情', '创意', '变通', '温暖'],
    compatibility: ['INTJ', 'INFJ'],
    advice: '尝试专注于当下的决定，不要总是被下一个新目标带走注意力。',
    datingStyle: '多才多艺且情感充沛，喜欢能陪你胡闹也陪你成长的伴侣。'
  },
  'ENTP': {
    code: 'ENTP',
    name: '智力挑战者',
    tagline: '思维火花，在博弈中体验爱意',
    description: '你喜欢挑战陈规，脑子里总有新主意。你寻求一个能接住你每一个“梗”的伴侣。',
    traits: ['机智', '大胆', '灵活', '博学'],
    compatibility: ['INFJ', 'INTJ'],
    advice: '不要为了赢过对方而争论，感情不是辩论赛场。',
    datingStyle: '风趣幽默，喜欢充满智力碰撞的相处模式。'
  },
  'ESTJ': {
    code: 'ESTJ',
    name: '铁腕统帅',
    tagline: '秩序之美，构建高效的家庭体系',
    description: '你传统、负责，是天生的组织者。你希望生活一切井然有序。',
    traits: ['果断', '系统', '诚实', '现实'],
    compatibility: ['ISFP', 'ISTP'],
    advice: '试着多一些灵活性，生活偶尔的失控也是一种美。',
    datingStyle: '直接且有目标感，会把照顾家庭看作头等大事。'
  },
  'ESFJ': {
    code: 'ESFJ',
    name: '贴心家长',
    tagline: '和谐第一，用温情编织爱的纽带',
    description: '你乐于助人，非常看重社会的认可和关系的和谐，是朋友圈里的粘合剂。',
    traits: ['热心', '守旧', '细心', '合作'],
    compatibility: ['ISFP', 'ISTP'],
    advice: '不要太在意他人的评价，你自己的感受同样重要。',
    datingStyle: '服务型人格，致力于为伴侣创造温馨稳定的生活环境。'
  },
  'ENFJ': {
    code: 'ENFJ',
    name: '浪漫教主',
    tagline: '用热情点燃爱，用责任守护家',
    description: '你是一位极具魅力的社交达人，对他人的感受高度敏感，总是致力于让周围的人感到舒适。',
    traits: ['热情', '利他', '责任心', '同理心'],
    compatibility: ['INFP', 'ISFP'],
    advice: '有时可以试着放下照顾他人的重担，坦诚表达自己的需求。',
    datingStyle: '倾向于认真且长久的关系，会全力以赴地经营。'
  },
  'ENTJ': {
    code: 'ENTJ',
    name: '霸气领袖',
    tagline: '志向远大，在共创辉煌中前行',
    description: '你果断而充满动力，喜欢掌控局面，希望伴侣是一个同样强大且有野心的人。',
    traits: ['霸气', '远见', '高效', '直率'],
    compatibility: ['INTP', 'INFP'],
    advice: '学会展示你脆弱的一面，这会增加你的人格魅力和亲密感。',
    datingStyle: '雷厉风行，追求高质量、高效率的共同成长。'
  },
  'default': {
    code: 'UNKNOWN',
    name: '探索者',
    tagline: '正在解锁你的恋爱密码',
    description: '你的恋爱性格具有多面性，是一个复杂且迷人的存在。',
    traits: ['灵活', '敏锐', '独立'],
    compatibility: ['相似类型'],
    advice: '继续保持对自我的觉察。',
    datingStyle: '注重当下的连接与体验。'
  }
};
