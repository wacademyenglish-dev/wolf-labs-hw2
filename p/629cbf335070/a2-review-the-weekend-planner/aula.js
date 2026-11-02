/* ============================================================
   REVIEW · A2 · UNIT 9 · THE WEEKEND PLANNER · LIVE CLASS  15/10/2026
   Só os dados: o motor é o kit/revisao/revisao.js. Mecânicas: rapido · missao · ordem · escolha · pode.
   Unidade 9 (Se… e verbo + verbo): zero conditional (if + present, present); if + imperativo;
   first conditional (if + present, will; unless); want / need / plan / decide + TO, enjoy / avoid /
   finish / mind / keep + -ING; want / ask / tell + pessoa + to; remember / forget / stop + -ing ou to.
   A missão: três amigos vão viajar no fim de semana; o aluno organiza; no fim combina o plano B.
   ============================================================ */
var REV = { nivel: 'A2', unidade: 9, titulo: ['The Weekend', 'Planner'], tema: 'If… and verb + verb', placa: 'WEEKEND TRIP', lugarConversa: 'THE MOUNTAIN CABIN', cor: '#9fc0f2', cor2: '#cfdff9',
  sub: 'Unit 9 review. Three friends are going to the mountains this weekend, and you are planning the trip. What if it rains?' };
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'rapido', est: 'f', min: 6, img: 'conversa', rot: 'I · Speed Round', t: 'Sixty seconds. How many can you do?', p: 'Answer fast. Your teacher taps Right or Pass. Then try to beat your score.' },
  { k: 'missao', est: 'o', min: 14, img: 'capa', rot: 'II · The Weekend Planner', t: 'Three friends, one weekend. Plan it.', p: 'Ask each friend five questions. Your teacher is the friend. Then tell the group the plan.' },
  { k: 'ordem', est: 'o', min: 7, img: 'conversa', rot: 'III · The Story in Order', t: 'What happened first?', p: 'Tap the cards in order. Then tell the story with the connectors.' },
  { k: 'escolha', est: 'o', min: 7, img: 'capa', rot: 'IV · Would You Rather?', t: 'A or B? Choose and say why.', p: 'Choose one. Then say why, with because.' },
  { k: 'pode', est: 'f', min: 4, img: 'capa', rot: 'V · I Can', t: 'Unit 9: what can you do now?', p: 'Read each line out loud. Tap the ones you can do. Your teacher confirms.' }
];
var PORTAS = [];

var MISSAO = { pede: 'THE TRIP · ASK FIVE QUESTIONS', quem: 'friend', depois: 'Tell the group the plan',
  campos: [
    { c: 'quer', r: 'WANTS TO', q: 'What do you want to do this weekend?', f: 'You want to…?' },
    { c: 'gosta', r: 'ENJOYS', q: 'What do you enjoy doing in the mountains?', f: 'You enjoy…?' },
    { c: 'se', r: 'IF IT RAINS', q: 'What will you do if it rains?', f: 'Rain: what will you do?' },
    { c: 'esquece', r: 'FORGETS', q: 'What do you always forget to pack?', f: 'You forget…?' },
    { c: 'pediu', r: 'WAS TOLD TO', q: 'What did your family tell you to do?', f: 'Your family told you…?' }],
  itens: [
    { k: 'FRIEND 1', tag: 'BIA', ele: 'She', v: { quer: 'to climb the big hill', gosta: 'taking photos', se: 'she’ll read by the fire', esquece: 'her charger', pediu: 'her mom told her to call every night' }, diz: '“I want to climb the big hill!” · “I enjoy taking photos.” · “If it rains, I’ll read by the fire.” · “I always forget to pack my charger.” · “My mom told me to call her every night.”' },
    { k: 'FRIEND 2', tag: 'THEO', ele: 'He', v: { quer: 'to relax and sleep', gosta: 'cooking for everybody', se: 'he’ll cook a big lunch', esquece: 'his toothbrush', pediu: 'his doctor told him to stop working so much' }, diz: '“I want to relax. And sleep!” · “I enjoy cooking for everybody.” · “If it rains, I’ll cook a big lunch.” · “I always forget my toothbrush.” · “My doctor told me to stop working so much.”' },
    { k: 'FRIEND 3', tag: 'KAI', ele: 'He', v: { quer: 'to try the zip line', gosta: 'running in the forest', se: 'he’ll go anyway, unless there’s a storm', esquece: 'nothing: he makes a list', pediu: 'his sister asked him to bring her a souvenir' }, diz: '“I want to try the zip line!” · “I enjoy running in the forest.” · “If it rains, I’ll go anyway, unless there’s a storm.” · “Nothing! I always remember to make a list.” · “My sister asked me to bring her a souvenir.”' }],
  relato: { titulo: 'THE GROUP CHAT · WHAT IS THE PLAN?',
    pede: function () { return 'OK, everybody is here. What’s the plan for Saturday?'; },
    chips: function () { return ['If it’s sunny, we’ll …', 'If it rains, we’ll …', '… wants to …', '… enjoys …ing', 'Don’t forget to …', 'unless …']; },
    modelo: function (x) { return 'If it’s sunny, we’ll climb the big hill, because Bia wants to take photos. If it rains, Theo will cook a big lunch. Kai, don’t forget to bring your list!'; } },
  nao: { will: '“If it will rain, we’ll stay” → If it RAINS, we’ll stay.', to: '“I enjoy to cook” → I enjoy COOKING. “I want go” → I want TO go.', tell: '“She told that I call” → she told ME TO call.' },
  fim: 'Three friends, one plan, and a plan B. if + present / will, want to, enjoy -ing and told me to: all of Unit 9 in one weekend.' };

var PODE = [
  'I can say general facts with if: If you heat ice, it melts.',
  'I can talk about future possibilities: If it rains, I’ll stay home.',
  'I can use want / need / decide + to and enjoy / avoid + -ing.',
  'I can report what people asked or told me to do.',
  'I can use remember / forget to … and stop …ing.'
];

/* MECÂNICAS VARIADAS */
/* A2 R9: rapido · missao · ordem · escolha */
var RAPIDO = { seg: 60, itens: [['If you heat ice, it ___. (melt)', 'melts'], ['If it rains, we ___ stay home. (will)', 'will / ’ll'], ['I want ___ go.', 'to'], ['I enjoy ___ (cook)', 'cooking'], ['She decided ___ stay.', 'to'], ['He avoids ___ (drive) at night.', 'driving'], ['Don’t forget ___ call me!', 'to'], ['She told me ___ wait.', 'to'], ['If it ___ (be) sunny, we’ll swim.', 'is'], ['We’ll go ___ it rains. (only if not)', 'unless']] };
var ORDEM = { rot: 'THE RAINY SATURDAY', pede: 'Tap the events in the right order.', chips: ['First,', 'Then,', 'If…,', 'In the end,'],
  modelo: 'First, the friends wanted to climb the hill. Then it started to rain. If it rains, Theo cooks, so he made a big lunch. In the end, the sun came back and they climbed the hill after lunch!',
  passos: ['The friends planned to climb the hill.', 'Suddenly it started to rain.', 'They decided to stay in the cabin.', 'Theo cooked a big lunch.', 'The rain stopped in the afternoon.', 'They climbed the hill after lunch!'] };
var ESCOLHA = [
  { a: 'a weekend in the mountains', b: 'a weekend at the beach', chips: ['I’d choose …', 'If I go there, I’ll …'], ex: 'The mountains. If I go there, I’ll read by the fire all day.' },
  { a: 'plan every hour', b: 'decide on the day', chips: ['I prefer …', 'I enjoy …ing'], ex: 'Decide on the day. I enjoy surprises.' },
  { a: 'go even if it rains', b: 'stay home if it rains', chips: ['If it rains, I’ll …', 'unless …'], ex: 'I’ll go, unless there’s a storm.' },
  { a: 'forget your charger', b: 'forget your toothbrush', chips: ['I’d prefer to forget …', 'because …'], ex: 'My toothbrush! I can buy one. I can’t live without my phone.' }];
