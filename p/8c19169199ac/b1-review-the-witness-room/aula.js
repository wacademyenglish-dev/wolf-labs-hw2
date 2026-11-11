/* ============================================================
   REVIEW · B1 · UNIT 1 · THE WITNESS ROOM · LIVE CLASS  15/10/2026
   Só os dados: o motor é o kit/revisao/revisao.js. Mecânicas: escada · missao · ordem · conversa · pode.
   Unidade 1 (Contar o que aconteceu): past continuous × past simple (when / while); past simple ×
   present perfect (tempo terminado ou resultado agora); present perfect de experiência e de notícia.
   A missão: o bolo campeão do concurso da cidade sumiu às onze da noite. O aluno é o detetive e
   ouve três testemunhas; no fim faz o relatório para a delegada.
   ============================================================ */
var REV = { nivel: 'B1', unidade: 1, titulo: ['The Witness', 'Room'], tema: 'Telling what happened', placa: 'CASE 0117', lugarConversa: 'AFTER THE RAIN', cor: '#e9a46a', cor2: '#f5d2b4',
  sub: 'Unit 1 review. Last night at eleven, the winning cake of the town baking contest disappeared. You are the detective. Three witnesses are waiting.' };
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'escada', est: 'f', min: 8, img: 'conversa', rot: 'I · The Ladder', t: 'Climb from easy to hard.', p: 'Go one step at a time. Give a good answer and you go up.' },
  { k: 'missao', est: 'o', min: 15, img: 'capa', rot: 'II · The Witness Room', t: 'Three witnesses. Who saw what?', p: 'Ask each witness five questions. Your teacher is the witness. Then report to the chief.' },
  { k: 'ordem', est: 'o', min: 7, img: 'conversa', rot: 'III · The Story in Order', t: 'What happened first?', p: 'Tap the cards in order. Then tell the story with the connectors.' },
  { k: 'conversa', est: 'o', min: 8, img: 'conversa', rot: 'IV · Your Stories', t: 'Your turn: real stories, your life.', p: 'Answer, then ask the question back: “What about you?”' },
  { k: 'gx', est: 'f', min: 4, img: 'conversa', rot: 'V · The Witness Rule', t: 'Four sentences from the witnesses. You find the rule.', p: 'Read the four sentences out loud. Look at the lit words. Choose the rule. Then say your own.' },
  { k: 'pode', est: 'f', min: 4, img: 'capa', rot: 'VI · I Can', t: 'Unit 1: what can you do now?', p: 'Read each line out loud. Tap the ones you can do. Your teacher confirms.' }
];

var PORTAS = [
  { k: 'WAS DOING', tema: 'past continuous', t: 'Yesterday at 7 AM, 1 PM and 9 PM: what were you doing?', ex: 'At seven I was having breakfast, at one I was working, and at nine I was watching a series.', trap: '“I was watch” → I was watching.' },
  { k: 'WHEN / WHILE', tema: 'past continuous × past simple: when, while', t: 'Something interrupted you last week. Tell it with when and while.', ex: 'I was cooking when my phone rang. While I was talking, the rice burned!', trap: 'The long action: was …ing. The short one: past simple.' },
  { k: 'DONE OR DID?', tema: 'past simple or present perfect', t: 'Two things you did last year, and one result you can see now.', ex: 'I moved house and changed jobs last year. I’ve lost my old keys, so I can’t visit!', trap: 'With last year / in 2020 / ago: past simple, never “I have done … last year”.' },
  { k: 'EVER', tema: 'present perfect for experience', t: 'Three things you’ve never done and one you’ve done many times.', ex: 'I’ve never been to Japan, I’ve never ridden a horse… but I’ve seen this movie ten times!', trap: '“I have went” → I have gone / been.' },
  { k: 'BREAKING NEWS', tema: 'present perfect for news', t: 'Read two pieces of news from your city, today.', ex: 'The new bridge has opened! And the price of coffee has gone up again.', trap: 'News now: has opened. The details later: it opened at 8 AM.' },
  { k: 'SO FAR', tema: 'how many times, so far, this week', t: 'This week so far: how many coffees, how many hours of sleep, how many messages?', ex: 'This week I’ve had nine coffees, I’ve slept about thirty hours and I’ve sent a hundred messages.', trap: 'The week isn’t over: present perfect.' }
];

var MISSAO = { pede: 'CASE 0117 · ASK FIVE QUESTIONS', quem: 'witness', depois: 'Report to the chief',
  campos: [
    { c: 'onde', r: 'AT 11 PM', q: 'Where were you at eleven o’clock last night?', f: 'Eleven PM: where?' },
    { c: 'fazia', r: 'WAS DOING', q: 'What were you doing when you heard the noise?', f: 'The noise: what were you doing?' },
    { c: 'viu', r: 'SAW', q: 'What did you see while you were there?', f: 'What did you see?' },
    { c: 'ja', r: 'EVER', q: 'Have you ever talked to the baker?', f: 'The baker: ever talked?' },
    { c: 'desde', r: 'SINCE THEN', q: 'What have you done since then?', f: 'Since then?' }],
  itens: [
    { k: 'WITNESS 1', tag: 'THE NIGHT GUARD', ele: 'He', v: { onde: 'at the door of the contest hall', fazia: 'checking the doors', viu: 'a small shadow running to the kitchen', ja: 'never: he has never talked to her', desde: 'he has checked the cameras twice' }, diz: '“I was at the door of the contest hall.” · “I was checking the doors when I heard a crash.” · “While I was walking in, I saw a small shadow. It was running to the kitchen.” · “No, never. I’ve never talked to her.” · “Since then I’ve checked the cameras twice. Nothing!”' },
    { k: 'WITNESS 2', tag: 'THE OTHER BAKER', ele: 'She', v: { onde: 'in the parking lot', fazia: 'putting her cakes in the car', viu: 'the judge’s dog near the back door', ja: 'many times: they have known each other for years', desde: 'she hasn’t slept at all' }, diz: '“I was in the parking lot.” · “I was putting my cakes in the car when I heard it.” · “I saw the judge’s dog. It was sitting near the back door.” · “Oh, many times. We’ve known each other for years.” · “Since then? I haven’t slept at all!”' },
    { k: 'WITNESS 3', tag: 'THE JUDGE', ele: 'He', v: { onde: 'at home, two streets away', fazia: 'looking for his dog', viu: 'nothing: it was raining and dark', ja: 'yes: he met her this morning', desde: 'he has found his dog, and it has cream on its nose' }, diz: '“I was at home, two streets away.” · “I was looking for my dog. He ran away at ten.” · “Nothing. It was raining and it was very dark.” · “Yes. I met her this morning, at the contest.” · “Since then I’ve found my dog. He has… cream on his nose.”' }],
  relato: { titulo: 'THE CHIEF · WHAT DID YOUR WITNESS SAY?',
    pede: function (x) { return 'OK, detective. What did ' + x.tag.toLowerCase() + ' tell you?'; },
    chips: function (x) { return ['At eleven, ' + x.ele.toLowerCase() + ' was …ing', 'when ' + x.ele.toLowerCase() + ' heard …', 'While ' + x.ele.toLowerCase() + ' was …ing, …', x.ele + ' has never / has …', 'Since then, ' + x.ele.toLowerCase() + ' has …']; },
    modelo: function (x) { var v = x.v, e = x.ele; return 'At eleven, ' + e.toLowerCase() + ' was ' + v.onde + '. ' + e + ' was ' + v.fazia + ' when ' + e.toLowerCase() + ' heard the noise. ' + e + ' saw ' + v.viu + '. Since then, ' + v.desde + '.'; } },
  nao: { cont: '“I was check the doors” → I was CHECKING.', pp: '“I have seen him yesterday” → I SAW him yesterday.', short: '“When I was walking, I was hearing a crash” → I HEARD a crash.' },
  fim: 'Case closed: the judge’s dog ate the cake! was …ing, when / while, did or have done, ever and since: all of Unit 1 in one night.' };

var CONVERSA = [
  { q: 'What were you doing this time last year?', f: 'One year ago?', voce: ['This time last year I was …ing.', 'I was living in …'], ex: 'This time last year I was preparing for a new job.' },
  { q: 'Tell me about a time something surprising happened while you were traveling.', f: 'A surprise on a trip?', voce: ['I was …ing when …', 'While I was …, …'], ex: 'I was waiting for a train in Rome when I met an old school friend!' },
  { q: 'What’s the most interesting place you’ve ever been to?', f: 'The best place ever?', voce: ['I’ve been to …', 'I went there in …'], ex: 'I’ve been to Chile. I went there in 2019 and I loved it.' },
  { q: 'What have you learned this year that you’re proud of?', f: 'Proud this year?', voce: ['This year I’ve learned …', 'I’ve started …'], ex: 'This year I’ve learned to make bread. It’s not perfect yet!' },
  { q: 'Have you ever lost something important? What happened?', f: 'Lost something?', voce: ['I’ve lost … / I lost it when …', 'I was …ing when …'], ex: 'Yes! I lost my passport when I was getting off a bus. Someone found it.' }
];

var PODE = [
  'I can say what was happening: at nine I was working.',
  'I can join two actions with when and while.',
  'I can choose: I did it last year / I’ve done it (result now).',
  'I can talk about experiences: I’ve never been, I’ve seen it twice.',
  'I can give news: The bridge has opened! and report what a witness saw.'
];

/* MECÂNICAS VARIADAS */
/* B1 R1: escada · missao · ordem · conversa */
var ORDEM = { rot: 'THE NIGHT OF THE CAKE', pede: 'Tap the events in the right order.', chips: ['First,', 'While …,', 'When …,', 'Since then,'],
  modelo: 'First, the judge’s dog ran away at ten. While the judge was looking for him, the dog was walking into the contest hall. When the guard heard a crash, the cake was already gone. Since then, everybody has laughed about it: the dog has become famous!',
  passos: ['The judge’s dog ran away at ten.', 'The dog was walking into the contest hall.', 'The guard heard a crash at eleven.', 'The cake was gone.', 'The judge found his dog, with cream on its nose.', 'Since then, the dog has become famous in town!'] };

/* 10/11/2026 · AS EXPLICAÇÕES (kit/formatos3.js) · G10 · uma cena curta nova (k: gx) antes de pode.
   Explicação 100% em inglês: see → notice → use (o aluno fala ou escreve uma frase dele no fim). */
var GX_EXPLICA = { formato: 'achaRegra', titulo: 'Four statements. Find the rule yourself.', exemplos: ['I <b>was working</b> when the lights <u>went</u> out.', 'While she <b>was walking</b>, she <u>heard</u> a crash.', 'They <b>were sleeping</b> when the thief <u>came</u> in.', 'He <b>was cooking</b> when I <u>called</u>.'], pergunta: 'The long action and the short action:', opcoes: ['was / were + -ing for the long one, past simple for the short one', 'past simple for both actions', 'was / were + -ing for both actions'], c: 0, nao: 'Not that one. Which action was in progress? Which one interrupted it?', regra: 'The long action in progress: <b>was / were + -ing</b>. The short action that interrupts it: <b>past simple</b>. I was working when the lights went out.', uso: { p: 'Your turn. You are a witness. Say what you were doing last night at eleven, and what happened.', molde: ['At eleven I was …', 'When … , I …'], ex: 'At eleven I was watching TV when I heard a loud noise.' } };
var R = R || {};
R.gx = function (c) { return cab(c) + FM.ex('gx_regra', GX_EXPLICA); };
