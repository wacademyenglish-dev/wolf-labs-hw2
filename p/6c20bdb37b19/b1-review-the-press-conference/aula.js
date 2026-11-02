/* ============================================================
   REVIEW · B1 · UNIT 9 · THE PRESS CONFERENCE · LIVE CLASS  15/10/2026
   Só os dados: o motor é o kit/revisao/revisao.js. Mecânicas: rapido · missao · erros · conversa · pode.
   Unidade 9 (Perguntar com jeito e relatar): question tags (you’re tired, aren’t you?) e a entonação;
   perguntas indiretas (Could you tell me why…? Do you know where…?); reported speech (she said she
   was…, he told me he would…, she asked if…).
   A missão: o aluno é repórter numa coletiva e entrevista três pessoas famosas (inventadas); no fim,
   relata ao estúdio o que cada uma disse.
   ============================================================ */
var REV = { nivel: 'B1', unidade: 9, titulo: ['The Press', 'Conference'], tema: 'Asking politely and reporting', placa: 'LIVE · PRESS ROOM', lugarConversa: 'THE STUDIO SOFA', cor: '#7fb0f0', cor2: '#bfd6f8',
  sub: 'Unit 9 review. You are a TV reporter at a big press conference. Three famous people answer questions. Ask politely, then tell the studio what they said.' };
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'rapido', est: 'f', min: 6, img: 'conversa', rot: 'I · Speed Round', t: 'Sixty seconds. How many can you do?', p: 'Answer fast. Your teacher taps Right or Pass. Then try to beat your score.' },
  { k: 'missao', est: 'o', min: 15, img: 'capa', rot: 'II · The Press Room', t: 'Three famous guests. Ask politely.', p: 'Ask each guest five questions. Your teacher is the guest. Then report to the studio: she said…, he told us…' },
  { k: 'erros', est: 'f', min: 7, img: 'conversa', rot: 'III · Find the Mistakes', t: 'Something is wrong here.', p: 'Read it. Find the mistakes, say the right form, then tap.' },
  { k: 'conversa', est: 'o', min: 8, img: 'conversa', rot: 'IV · On the Sofa', t: 'Off the air: just you and me.', p: 'Answer, then ask back with a tag: “…, don’t you?”' },
  { k: 'pode', est: 'f', min: 4, img: 'capa', rot: 'V · I Can', t: 'Unit 9: what can you do now?', p: 'Read each line out loud. Tap the ones you can do. Your teacher confirms.' }
];
var PORTAS = [];

var MISSAO = { pede: 'LIVE · ASK FIVE QUESTIONS', quem: 'guest', depois: 'Report to the studio',
  campos: [
    { c: 'tag', r: 'THE TAG', q: 'You’re very tired today, aren’t you?', f: 'Tired, aren’t you?' },
    { c: 'porque', r: 'WHY', q: 'Could you tell me why this day is so important?', f: 'Why so important?' },
    { c: 'onde', r: 'WHERE NEXT', q: 'Do you know where you’re going next?', f: 'Where next?' },
    { c: 'medo', r: 'AFRAID', q: 'Can I ask what you were afraid of?', f: 'Afraid of what?' },
    { c: 'msg', r: 'THE MESSAGE', q: 'Is there anything you’d like to say to your fans?', f: 'To your fans?' }],
  itens: [
    { k: 'GUEST 1', tag: 'THE ASTRONAUT', ele: 'She', relato: 'She said she was exhausted, but happy. She told us she had been in space for six months, and she said she would go home to see her dog. She asked everybody to look at the stars tonight.', v: { tag: 'exhausted, but happy', porque: 'she has been in space for six months', onde: 'home, to see her dog', medo: 'nothing in space; she’s afraid of spiders!', msg: 'look at the stars tonight' }, diz: '“Yes, I am! Exhausted, but happy.” · “Because I’ve been in space for six months.” · “I’m going home. I want to see my dog!” · “In space? Nothing. But I’m afraid of spiders!” · “Please look at the stars tonight.”' },
    { k: 'GUEST 2', tag: 'THE COACH', ele: 'He', relato: 'He said he wasn’t tired, he was angry. He told us they had lost the final, and he said he didn’t know where he was going next. He told the fans he was sorry.', v: { tag: 'not tired, angry', porque: 'they have lost the final', onde: 'he doesn’t know', medo: 'he was afraid of losing his job', msg: 'he is sorry' }, diz: '“I’m not tired. I’m angry!” · “Because we have lost the final.” · “I don’t know where I’m going. Maybe on holiday.” · “I was afraid of losing my job. I still am.” · “To the fans: I’m sorry.”' },
    { k: 'GUEST 3', tag: 'THE POP STAR', ele: 'She', relato: 'She said she was a bit tired after the show. She told us she had written a new song, and she said she would sing it in Rio next month. She asked the fans to come and sing with her.', v: { tag: 'a bit tired after the show', porque: 'she has written a new song', onde: 'to Rio, next month', medo: 'she was afraid people wouldn’t like the new song', msg: 'come and sing with her' }, diz: '“A bit, yes. The show was long.” · “Because I’ve written a new song!” · “I’m going to Rio next month. I’ll sing it there.” · “I was afraid people wouldn’t like it.” · “Come and sing with me!”' }],
  relato: { titulo: 'BACK TO THE STUDIO · WHAT DID THEY SAY?',
    pede: function (x) { return 'Thanks! So, what did ' + x.tag.toLowerCase() + ' say?'; },
    chips: function (x) { return [x.ele + ' said (that) ' + x.ele.toLowerCase() + ' was …', x.ele + ' told us …', x.ele + ' said ' + x.ele.toLowerCase() + ' would …', x.ele + ' had …', x.ele + ' asked …']; },
    modelo: function (x) { return x.relato; } },
  nao: { said: '“She said me that…” → she TOLD me / she SAID that…', back: '“He said he is tired” → he said he WAS tired.', ind: '“Could you tell me why is it important?” → why IT IS important.' },
  fim: 'Three guests, one live show. question tags, indirect questions and said / told / asked: all of Unit 9 in the press room.' };

var CONVERSA = [
  { q: 'You like coffee, don’t you?', f: 'Coffee, don’t you?', voce: ['Yes, I do. You …, don’t you?', 'Actually, I don’t.'], ex: 'Yes, I do! You prefer tea, don’t you?' },
  { q: 'Could you tell me what you did last weekend?', f: 'Last weekend?', voce: ['Sure. I …', 'Do you know what I did?'], ex: 'Sure. I went to a friend’s birthday party.' },
  { q: 'What’s the nicest thing someone has said to you recently?', f: 'Something nice someone said?', voce: ['She said (that) I …', 'He told me I …'], ex: 'My boss told me I was doing a great job.' },
  { q: 'Do you know where you’ll be on your next holiday?', f: 'Next holiday: where?', voce: ['I don’t know where …', 'I think I’ll …'], ex: 'I don’t know where I’ll go yet. Maybe the beach.' },
  { q: 'What did your family ask you to do this week?', f: 'Your family asked you…?', voce: ['My mom asked me to …', 'They told me to …'], ex: 'My mom asked me to call her more!' }
];

var PODE = [
  'I can check with a question tag: You’re tired, aren’t you?',
  'I can use the tag to really ask (↗) or to agree (↘).',
  'I can ask politely: Could you tell me where the station is?',
  'I can report: She said she was tired. He told me he would come.',
  'I can report questions and requests: She asked if…, he asked me to…'
];

/* MECÂNICAS VARIADAS */
/* B1 R9: rapido · missao · erros · conversa */
var RAPIDO = { seg: 60, itens: [['You’re tired, ___?', 'aren’t you'], ['She doesn’t eat meat, ___?', 'does she'], ['They went home, ___?', 'didn’t they'], ['You can swim, ___?', 'can’t you'], ['Where is the bank? → Could you tell me ___?', 'where the bank is'], ['What time does it start? → Do you know ___?', 'what time it starts'], ['“I’m tired.” → She said she ___ tired.', 'was'], ['“I’ll call you.” → He said he ___ call me.', 'would'], ['said or told? She ___ me the truth.', 'told'], ['“Are you OK?” → He asked ___ I was OK.', 'if / whether']] };
var ERROS = { tipo: 'chat', rot: 'A MESSAGE FROM THE CAMERAMAN', partes: ['You were great today, ', ['wasn’t you', 'weren’t you', 'You were → weren’t you.'], '? The astronaut said ', ['me', 'that', 'said that / told me.'], ' she was afraid of spiders, haha. The coach told us he ', ['is', 'was', 'Reported: is → was.'], ' angry. And the pop star said she ', ['will', 'would', 'will → would.'], ' sing in Rio! Oh, could you tell me where ', ['is the car', 'the car is', 'Indirect question: subject + verb.'], '? And the boss asked ', ['are you free', 'if you were free', 'Reported question: if + past.'], ' tomorrow.'] };
