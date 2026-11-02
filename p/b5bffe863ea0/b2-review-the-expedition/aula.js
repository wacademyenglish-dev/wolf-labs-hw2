/* ============================================================
   REVIEW · B2 · UNIT 1 · THE EXPEDITION · LIVE CLASS  15/10/2026
   Só os dados: o motor é o kit/revisao/revisao.js. Mecânicas: escada · missao · ordem · conversa · pode.
   Unidade 1 (O passado por camadas e o futuro): past perfect simple e continuous (nobody had been
   living there); used to × be / get used to + -ing; future perfect e future continuous (by 2040 we
   will have…), by × until; was going to.
   A missão: uma equipe volta de 14 meses numa ilha remota. O aluno faz o documentário e entrevista
   três membros; no fim grava a narração.
   ============================================================ */
var REV = { nivel: 'B2', unidade: 1, titulo: ['The', 'Expedition'], tema: 'The past in layers and the future', placa: 'ISLAND STATION · 14 MONTHS', lugarConversa: 'THE SHIP’S CABIN', cor: '#e8b86a', cor2: '#f4dcb4',
  sub: 'Unit 1 review. A research team has just come back after fourteen months on a remote island. You are making the documentary. Three of them agreed to talk.' };
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'escada', est: 'f', min: 8, img: 'conversa', rot: 'I · The Ladder', t: 'Climb from easy to hard.', p: 'One step at a time. A good answer, and you go up.' },
  { k: 'missao', est: 'o', min: 15, img: 'capa', rot: 'II · The Documentary', t: 'Three explorers. Fourteen months. Ask.', p: 'Ask each explorer five questions. Your teacher is the explorer. Then record the voice-over.' },
  { k: 'ordem', est: 'o', min: 7, img: 'conversa', rot: 'III · The Story in Order', t: 'What happened first?', p: 'Tap the cards in order. Then tell the story with the connectors.' },
  { k: 'conversa', est: 'o', min: 8, img: 'conversa', rot: 'IV · In the Cabin', t: 'Your own layers of time.', p: 'Answer in detail, then turn the question back.' },
  { k: 'pode', est: 'f', min: 4, img: 'capa', rot: 'V · I Can', t: 'Unit 1: what can you do now?', p: 'Read each line out loud. Tap the ones you can do. Your teacher confirms.' }
];

var PORTAS = [
  { k: 'HAD DONE', tema: 'past perfect', t: 'The last time you came back from a trip: what had changed at home while you were away?', ex: 'When I got back, my neighbors had moved out and someone had painted the building blue.', trap: 'The earlier past: had + participle, even in a long story.' },
  { k: 'HAD BEEN DOING', tema: 'past perfect continuous', t: 'A time you were exhausted, soaked or furious. What had you been doing?', ex: 'I was soaked because I had been waiting for the bus in the rain for forty minutes.', trap: 'The activity that lasted up to that moment: had been + -ing.' },
  { k: 'GET USED TO', tema: 'used to × be / get used to + -ing', t: 'Something you used to do, something you’re used to now, and something you’re still getting used to.', ex: 'I used to commute two hours. Now I’m used to working from home, but I’m still getting used to the silence.', trap: 'be / get used to + -ing (or a noun), never + verb.' },
  { k: 'WILL HAVE DONE', tema: 'future perfect and future continuous', t: 'By 2030: three things you will have done. And this time next year, what will you be doing?', ex: 'By 2030 I’ll have paid off my flat and I’ll have run a marathon. This time next year I’ll be living abroad.', trap: 'Finished before a future point: will have + participle.' },
  { k: 'BY OR UNTIL', tema: 'by × until', t: 'Your week: one thing you must finish by Friday, one thing you’ll keep doing until Friday.', ex: 'I have to send the report by Friday, and I’ll be working late until Friday.', trap: 'by = no later than (a deadline). until = all the time up to.' },
  { k: 'WAS GOING TO', tema: 'was going to: plans that didn’t happen', t: 'Tell a plan that went in another direction. What were you going to do, and what stopped you?', ex: 'I was going to study engineering, but I had fallen in love with photography by then.', trap: 'A past plan: was going to + verb.' }
];

var MISSAO = { pede: 'THE DOCUMENTARY · ASK FIVE QUESTIONS', quem: 'explorer', depois: 'Record the voice-over',
  campos: [
    { c: 'chegada', r: 'WHEN THEY ARRIVED', q: 'What did you find when you arrived on the island?', f: 'When you arrived?' },
    { c: 'fazia', r: 'BEEN DOING', q: 'What had you been doing just before the boat came back for you?', f: 'Before the boat came?' },
    { c: 'acost', r: 'GETTING USED TO', q: 'What are you still getting used to, back home?', f: 'Still getting used to?' },
    { c: 'ia', r: 'WAS GOING TO', q: 'What were you going to do first, and did you do it?', f: 'Your first plan?' },
    { c: 'futuro', r: 'BY NEXT YEAR', q: 'What will you have done by this time next year?', f: 'By next year?' }],
  itens: [
    { k: 'EXPLORER 1', tag: 'DR. INES VALE, BIOLOGIST', ele: 'She', v: { chegada: 'nobody had been living there for thirty years, and birds had taken over the old houses', fazia: 'counting turtle nests on the beach for six hours', acost: 'the noise of the traffic', ia: 'eat a huge pizza, and she did', futuro: 'published her book about the birds' }, diz: '“Nobody had been living there for thirty years. Birds had taken over the old houses!” · “I had been counting turtle nests on the beach for six hours.” · “The noise of the traffic. I’m still getting used to it.” · “I was going to eat a huge pizza. And I did!” · “By next year I’ll have published my book about the birds.”' },
    { k: 'EXPLORER 2', tag: 'TEO, THE ENGINEER', ele: 'He', v: { chegada: 'a storm had destroyed the old radio tower', fazia: 'fixing the solar panels all night', acost: 'sleeping in a soft bed: he’s used to the floor now', ia: 'call his mother, but his phone had died', futuro: 'built a new station on another island' }, diz: '“A storm had destroyed the old radio tower.” · “I had been fixing the solar panels all night.” · “Sleeping in a soft bed! I got used to the floor.” · “I was going to call my mother, but my phone had died.” · “By next year we’ll have built a new station on another island.”' },
    { k: 'EXPLORER 3', tag: 'MAYA, THE PHOTOGRAPHER', ele: 'She', v: { chegada: 'someone had left an old diary in the lighthouse', fazia: 'waiting for the perfect sunset photo for a week', acost: 'having so many people around', ia: 'go straight back to the island, and she still wants to', futuro: 'opened an exhibition of the photos' }, diz: '“Someone had left an old diary in the lighthouse. From 1962!” · “I had been waiting for the perfect sunset photo for a week.” · “Having so many people around. I’m not used to it anymore.” · “Honestly? I was going to go straight back. I still want to.” · “By next year I’ll have opened an exhibition of the photos.”' }],
  relato: { titulo: 'THE VOICE-OVER · RECORDING…',
    pede: function (x) { return 'Recording in three, two, one… Tell us about ' + x.tag.split(',')[0].toLowerCase().replace(/\b\w/g, function (c) { return c.toUpperCase(); }) + '.'; },
    chips: function (x) { return ['When they arrived, …had…', x.ele + ' had been …ing', x.ele + ' is still getting used to …', x.ele + ' was going to …', 'By next year, ' + x.ele.toLowerCase() + ' will have …']; },
    modelo: function (x) { var v = x.v, e = x.ele; return 'When they arrived, ' + v.chegada + '. Just before the boat came back, ' + e.toLowerCase() + ' had been ' + v.fazia + '. By next year, ' + e.toLowerCase() + ' will have ' + v.futuro + '.'; } },
  nao: { usedto: '“I’m used to sleep on the floor” → I’m used to SLEEPING.', hadbeen: '“I was counting nests for six hours when…” → I HAD BEEN counting.', willhave: '“By next year I will publish” → I WILL HAVE published.' },
  fim: 'Fourteen months in fifteen minutes. had done, had been doing, get used to, was going to and will have done: all of Unit 1 in one documentary.' };

var CONVERSA = [
  { q: 'What had you already done in your life by the age of twenty?', f: 'By twenty?', voce: ['By twenty I had already …', 'I hadn’t … yet.'], ex: 'By twenty I had already moved out, but I hadn’t traveled abroad yet.' },
  { q: 'Think of a day that went wrong. What had you been doing before it went wrong?', f: 'A day that went wrong?', voce: ['I had been …ing for …', 'when suddenly …'], ex: 'I had been working on a file for hours when my laptop crashed.' },
  { q: 'What’s something you had to get used to as an adult?', f: 'Something you got used to?', voce: ['I had to get used to …ing', 'Now I’m used to …'], ex: 'I had to get used to paying bills. Now I’m used to it, sadly.' },
  { q: 'Where do you think you’ll be living, and what will you have achieved, in ten years?', f: 'In ten years?', voce: ['I’ll be living …', 'I’ll have …'], ex: 'I’ll be living near the sea, and I’ll have started my own business.' },
  { q: 'Tell me about something you were going to do this year but didn’t.', f: 'A plan that didn’t happen?', voce: ['I was going to …, but …', 'By then I had …'], ex: 'I was going to learn the guitar, but I had already signed up for a course.' }
];

var PODE = [
  'I can tell a story in layers: when I arrived, they had already left.',
  'I can say what had been happening: I had been waiting for an hour.',
  'I can contrast used to with be / get used to + -ing.',
  'I can say what will be done or happening: by 2030 I’ll have…, I’ll be living…',
  'I can choose by or until, and talk about plans with was going to.'
];

/* MECÂNICAS VARIADAS */
/* B2 R1: escada · missao · ordem · conversa */
var ORDEM = { rot: 'THE DIARY IN THE LIGHTHOUSE', pede: 'Tap the events in the order they really happened. Then tell it, in layers.', chips: ['In 1962,', 'By the time …, … had …', 'Fourteen months ago,', 'By next year,'],
  modelo: 'In 1962 a lighthouse keeper had been living alone on the island for ten years when he wrote his last page. By the time the team arrived, nobody had read his diary. Maya found it fourteen months ago, and by next year it will have been published with her photos.',
  passos: ['A keeper lived alone in the lighthouse for ten years.', 'In 1962 he wrote the last page of his diary and left.', 'For sixty years nobody visited the lighthouse.', 'The team arrived on the island.', 'Maya found the diary.', 'Next year the diary will be published with her photos.'] };
