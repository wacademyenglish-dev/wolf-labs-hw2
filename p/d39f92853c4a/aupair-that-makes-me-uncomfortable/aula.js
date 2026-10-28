/* ============================================================
   AU PAIR · MODULE 6 · LESSON 21 OF 24 · THAT MAKES ME UNCOMFORTABLE · LIVE CLASS  15/10/2026
   Só os dados: o motor é o kit/revisao/revisao.js. Curso Au Pair (A2+/B1).
   Dizer não com educação e firmeza; a conversa difícil com a família; o choque cultural.
   Frases do plano: "I'm not comfortable with that." "I need to check with my coordinator first." "Could we write the
   schedule down?" "I'd like to keep my passport with me." Vídeo: Au Pair in America, "What is culture shock and how can
   you overcome it?" (1:11). Áudios: edge-tts, pai da família (Brian). Família FICTÍCIA.
   ============================================================ */
var REV = { tipo: 'aula', nivel: 'B1', unidade: 21, kick: 'AU PAIR · MODULE 6 · LESSON 21 OF 24', titulo: ['That Makes Me', 'Uncomfortable'], tema: 'Saying no, kindly and firmly', placa: 'LESSON 21',
  lugarConversa: 'AN HONEST TALK', cor: '#ffb38a', cor2: '#ffd9c2',
  sub: 'Living with a family has small conflicts. Sometimes you should not accept a request. Today you learn to say no in a kind and firm way, and to deal with culture shock.',
  chips: ['Culture shock', 'Kind, firm, or rude?', 'The host dad asks'], botao: 'Start the lesson',
  nota: 'Kind and firm is not rude. You can smile and still say no.' };
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'video', est: 'l', min: 7, img: 'conversa', rot: 'I · Culture Shock', t: 'What it is, and how to deal with it.', p: 'One question before, then the video, then the questions.' },
  { k: 'descobre', est: 'f', min: 10, img: 'capa', rot: 'II · Kind and Firm', t: 'Too soft, too hard, or just right?', p: 'Compare A and B. Which one is kind AND firm?' },
  { k: 'prova', est: 'o', min: 14, img: 'conversa', rot: 'III · The Host Dad Asks', t: 'Five requests. Answer kindly and firmly.', p: 'Play the request, start the clock, answer in about 30 seconds.' },
  { k: 'pode', est: 'f', min: 4, img: 'capa', rot: 'IV · I Can', t: 'Lesson 21: what can you do now?', p: 'Read each line out loud. Tap the ones you can do. Your teacher confirms.' }
];

var VIDEO = { yt: 'QWH0QddMqME', titulo: 'What is culture shock and how can you overcome it?', fonte: 'AU PAIR IN AMERICA · 1 MIN',
  antes: { q: 'What could feel strange for a Brazilian in an American house?', h: 'Dinner at 6, no hugs with strangers, very direct talk, shoes off, cold weather, quiet weekends…' },
  ouvir: 'Listen: What is culture shock? What tips do au pairs give?',
  perguntas: [
    { q: 'What is culture shock?', h: 'The confused feeling when you move to a place very different from home.' },
    { q: 'In which areas can it happen?', h: 'Clothing, food, weather, language, values, religion, general behavior.' },
    { q: 'What tips do the au pairs give?', h: 'Talk to other au pairs, keep in touch with home, keep an open mind, stay active, share your culture with your host family.' },
    { q: 'What is “reverse culture shock”?', h: 'Feeling strange when you go back home after the program.' }],
  fecho: 'Culture shock is normal. Talking about it is the first step.' };

var DESCOBRE = {
  pares: [
    { a: '“{I’m not comfortable with that.} Can we find another solution?”', b: '“{OK…} (and you do it, unhappy)”', q: 'A host parent asks for something that is not OK. Which answer protects you?', r: 'A: <b>kind and firm</b>. B is too soft: the problem continues.' },
    { a: '“{No way! That’s not my job!}”', b: '“{I understand, but that’s not part of my duties.} Could we talk to my coordinator about it?”', q: 'Which one is kind AND firm?', r: 'B. A is firm but rude. B says no, explains, and offers a next step.' },
    { a: '“{I need to check with my coordinator first.}”', b: '“{Maybe… I don’t know… whatever you want.}”', q: 'Which answer gives you time to think?', r: 'A. You don’t have to decide on the spot.' },
    { a: '“{Could we write the schedule down?} Then we both know my hours.”', b: '“{You always change my hours!}”', q: 'Which one starts a good conversation?', r: 'A: a <b>proposal</b>, not an accusation.' }],
  regra: [['ACKNOWLEDGE', 'I understand… / I see why you ask…'], ['SAY NO CLEARLY', 'but I’m not comfortable with that / that’s not part of my duties'], ['OFFER A NEXT STEP', 'Could we…? / I need to check with my coordinator.'], ['WHEN IT’S SERIOUS', 'leave the situation and call your coordinator or the help line']],
  armas: [['TOO SOFT', 'OK… (and you hate it)', 'I’m not comfortable with that.', 'say it'], ['RUDE', 'That’s not my job!', 'I understand, but that’s not part of my duties.', 'kind + firm'], ['NO TIME', 'Yes, OK, fine!', 'I need to check with my coordinator first.', 'take time'], ['ACCUSING', 'You always…!', 'Could we write it down?', 'propose']] };

var PROVA = { rot: 'THE HOST DAD ASKS', tarefas: [
  { k: 'REQUEST 1', tipo: 'fala', seg: 30, audio: 'uc1.mp3', ouve: 'Hey, could you also clean the garage this Saturday? It’s your day off, but it’s just a couple of hours.', enun: 'Listen. Answer kindly and firmly, in about 30 seconds.',
    criterios: ['Acknowledged the request', 'Said no clearly (day off, not childcare)', 'Offered a next step', 'Calm, polite tone'],
    modelo: 'I understand, but Saturday is my day off, and cleaning the garage is not part of my duties. I’m happy to help with the kids’ things during my hours.' },
  { k: 'REQUEST 2', tipo: 'fala', seg: 30, audio: 'uc2.mp3', ouve: 'I’ll keep your passport in my office, okay? It’s safer there.', enun: 'Listen. Answer kindly and firmly.',
    criterios: ['Said no clearly', 'Used “I’d like to keep my passport with me”', 'Stayed calm and polite'],
    modelo: 'Thank you, but I’d like to keep my passport with me. I’ll keep it in a safe place in my room.' },
  { k: 'REQUEST 3', tipo: 'fala', seg: 30, audio: 'uc3.mp3', ouve: 'Can you work until midnight on Friday? We’ll pay you extra.', enun: 'Listen. Answer kindly and firmly.',
    criterios: ['Remembered the rule (10 hours a day, 45 a week)', 'Said extra pay doesn’t change it', 'Offered to check / plan'],
    modelo: 'I’d like to help, but I already work 9 hours on Friday, and the limit is 10 a day, even with extra pay. Could we plan another solution, or check with my coordinator?' },
  { k: 'REQUEST 4', tipo: 'fala', seg: 30, audio: 'uc4.mp3', ouve: 'You’re always on your phone in the evenings. We’d love it if you spent more time with us.', enun: 'Listen. Answer kindly: this one is a normal family conversation.',
    criterios: ['Showed you understand their feeling', 'Explained your need (calls home, rest)', 'Proposed something (a family dinner, a game night)'],
    modelo: 'Thank you for saying that, I like spending time with you too. In the evenings I call my family in Brazil, because of the time difference. What if we have a game night on Wednesdays?' },
  { k: 'REQUEST 5', tipo: 'fala', seg: 30, audio: 'uc5.mp3', ouve: 'That dress looks really good on you. You should wear it more often around the house.', enun: 'Listen. Answer firmly. This comment is not OK.',
    criterios: ['Said clearly “I’m not comfortable with comments like that.”', 'Did not apologize or laugh it off', 'Knows the next step: tell the coordinator'],
    modelo: 'I’m not comfortable with comments like that. Please don’t talk about my clothes or my body. (And after that: tell your coordinator. It is not your fault.)' }] };

var PODE = [
  'I can explain culture shock and what helps.',
  'I can say no kindly and firmly: I understand, but…',
  'I can say “I’m not comfortable with that” and “I need to check with my coordinator first”.',
  'I can tell a normal family conversation from a red flag.'
];

/* MECÂNICAS VARIADAS */
/* AU PAIR 21: video · descobre · prova (áudio) (os dados estão no topo do aula.js) */
