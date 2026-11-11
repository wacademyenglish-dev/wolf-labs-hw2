/* ============================================================
   REVIEW · B1 · UNIT 2 · THE REUNION · LIVE CLASS  15/10/2026
   Só os dados: o motor é o kit/revisao/revisao.js. Mecânicas: memoria · missao · cartao · escolha · pode.
   Unidade 2 (Há quanto tempo e como era): present perfect continuous (for / since, I’ve been … all
   night); used to × present simple; should have / could have; be used to / get used to.
   A missão: a turma da escola se reencontra vinte anos depois. O aluno organiza o telão "Where are
   they now?" e entrevista três ex-colegas; no fim apresenta cada um para a turma.
   ============================================================ */
var REV = { nivel: 'B1', unidade: 2, titulo: ['The', 'Reunion'], tema: 'How long and how it was', placa: 'CLASS OF 2006', lugarConversa: 'THE OLD CAFE', cor: '#b8a4f0', cor2: '#ddd3fa',
  sub: 'Unit 2 review. Twenty years after school, the whole class meets again. You are making the “Where are they now?” slideshow. Three old friends have just arrived.' };
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'memoria', est: 'l', min: 8, img: 'conversa', rot: 'I · Memory', t: 'Find the pairs.', p: 'Open two cards. Find the pair. Then make a sentence with it.' },
  { k: 'missao', est: 'o', min: 15, img: 'capa', rot: 'II · Where Are They Now?', t: 'Three old friends. Twenty years. Ask.', p: 'Ask each friend five questions. Your teacher is the friend. Then present them to the class.' },
  { k: 'cartao', est: 'w', min: 7, img: 'conversa', rot: 'III · Dear Younger Me', t: 'Write a note to you, twenty years ago.', p: 'Four short lines: what you used to do, what you’ve been doing, what you should have done, what you’re used to now.' },
  { k: 'escolha', est: 'o', min: 7, img: 'capa', rot: 'IV · Would You Rather?', t: 'A or B? Choose and say why.', p: 'Choose one. Then say why, with because.' },
  { k: 'gx', est: 'f', min: 4, img: 'conversa', rot: 'V · The Reunion Pairs', t: 'Five pairs from the class reunion.', p: 'Read both out loud. Tap the right one. The other one gets crossed out.' },
  { k: 'pode', est: 'f', min: 4, img: 'capa', rot: 'VI · I Can', t: 'Unit 2: what can you do now?', p: 'Read each line out loud. Tap the ones you can do. Your teacher confirms.' }
];
var PORTAS = [];

var MISSAO = { pede: 'THE SLIDESHOW · ASK FIVE QUESTIONS', quem: 'old friend', depois: 'Present them to the class',
  campos: [
    { c: 'faz', r: 'BEEN DOING', q: 'So, what have you been doing all these years?', f: 'All these years: what?' },
    { c: 'quanto', r: 'HOW LONG', q: 'How long have you been living there?', f: 'How long there?' },
    { c: 'antes', r: 'USED TO', q: 'What did you use to do at school?', f: 'At school: you used to…?' },
    { c: 'acost', r: 'GOT USED TO', q: 'What was hard to get used to?', f: 'Hard to get used to?' },
    { c: 'devia', r: 'SHOULD HAVE', q: 'Is there anything you should have done differently?', f: 'Anything different?' }],
  itens: [
    { k: 'OLD FRIEND 1', tag: 'MARINA', ele: 'She', v: { faz: 'working as a pilot', quanto: 'in Lisbon for six years', antes: 'sleep in every math class', acost: 'the time changes', devia: 'learned Portuguese before she moved' }, diz: '“I’ve been working as a pilot!” · “I’ve been living in Lisbon for six years.” · “I used to sleep in every math class. Remember?” · “The time changes. It was hard to get used to them.” · “I should have learned Portuguese before I moved.”' },
    { k: 'OLD FRIEND 2', tag: 'TOM', ele: 'He', v: { faz: 'running a small bakery', quanto: 'in our old town since 2010: he never left', antes: 'be the shyest boy in class', acost: 'waking up at 4 AM', devia: 'opened the bakery earlier' }, diz: '“I’ve been running a small bakery.” · “Here, in our old town, since 2010. I never left!” · “I used to be the shyest boy in class.” · “Waking up at four in the morning. But now I’m used to it.” · “I could have opened it earlier. I was scared.”' },
    { k: 'OLD FRIEND 3', tag: 'DANI', ele: 'She', v: { faz: 'traveling and teaching yoga', quanto: 'on a boat for two years', antes: 'hate sports', acost: 'living in a very small space', devia: 'brought fewer shoes' }, diz: '“I’ve been traveling and teaching yoga.” · “On a boat! I’ve been living on a boat for two years.” · “I used to hate sports. Funny, right?” · “Living in a very small space. I’m still getting used to it.” · “I should have brought fewer shoes!”' }],
  relato: { titulo: 'THE SLIDESHOW · PRESENT YOUR FRIEND',
    pede: function (x) { return 'Next photo! Who is this, and what has ' + x.ele.toLowerCase() + ' been doing?'; },
    chips: function (x) { return ['This is ' + x.tag.charAt(0) + x.tag.slice(1).toLowerCase() + '!', x.ele + ' has been …ing', 'for … / since …', 'At school ' + x.ele.toLowerCase() + ' used to …', x.ele + ' is used to …', x.ele + ' should have …']; },
    modelo: function (x) { var v = x.v, e = x.ele, n = x.tag.charAt(0) + x.tag.slice(1).toLowerCase(); return 'This is ' + n + '! ' + e + ' has been ' + v.faz + ', ' + v.quanto + '. At school ' + e.toLowerCase() + ' used to ' + v.antes + '. ' + e + ' says ' + e.toLowerCase() + ' should have ' + v.devia + '.'; } },
  nao: { since: '“I live here since 2010” → I’VE LIVED / I’VE BEEN LIVING here since 2010.', used: '“I’m used to wake up early” → I’m used to WAKING up.', should: '“I should learned” → I should HAVE learned.' },
  fim: 'Three friends, twenty years, one slideshow. have been …ing, for / since, used to, be used to and should have: all of Unit 2 at the reunion.' };

var CARTAO = { ph: 'Dear younger me,\nYou used to worry about everything.\nI’ve been studying English for two years, and it’s working!\nYou should have started earlier, but it’s OK.\nNow I’m used to speaking in meetings.', rot: 'Dear younger me',
  chips: ['You used to ', 'You didn’t use to ', 'I’ve been …ing for ', 'since ', 'You should have ', 'You could have ', 'Now I’m used to ', 'I’m getting used to '],
  perg: ['DEAR YOUNGER ME', 'What did you use to do? What have you been doing? What should you have done? What are you used to now?'],
  exemploRot: 'MARINA · TWENTY YEARS LATER', exemplo: [['USED TO', 'sleep in math class'], ['BEEN DOING', 'flying planes'], ['HOW LONG', 'six years in Lisbon'], ['SHOULD HAVE', 'learned Portuguese'], ['USED TO NOW', 'time changes']],
  modelo: 'Dear younger me, you used to worry about everything.<br>I’ve been studying English for two years, and it’s working!<br>You should have started earlier, but it’s OK. Now I’m used to speaking in meetings.' };

var PODE = [
  'I can say how long: I’ve been living here for six years / since 2019.',
  'I can say what I’ve been doing lately: I’ve been working a lot.',
  'I can compare then and now: I used to…, but now I…',
  'I can talk about regrets: I should have…, I could have…',
  'I can use be used to / get used to + -ing.'
];

/* MECÂNICAS VARIADAS */
/* B1 R2: memoria · missao · cartao · escolha */
var PARES = [
  ['I’ve been waiting', 'for an hour!', 'I’ve been waiting for an hour! Where are you?'],
  ['She’s lived here', 'since 2010.', 'She’s lived here since 2010. She never left.'],
  ['I used to', 'hate sports.', 'I used to hate sports, but now I run every day.'],
  ['I should have', 'called you.', 'I’m sorry. I should have called you.'],
  ['I’m used to', 'waking up early.', 'I’m a baker, so I’m used to waking up early.'],
  ['It took me months', 'to get used to it.', 'The cold! It took me months to get used to it.']];
var ESCOLHA = [
  { a: 'go back to your school days for one day', b: 'see yourself in twenty years for one day', chips: ['I’d rather …', 'because I used to … / I’ve been …'], ex: 'Go back! I used to have so much free time.' },
  { a: 'live in the same town all your life', b: 'move to a new country every five years', chips: ['I’d choose …', 'It’s hard to get used to …'], ex: 'Move. I get used to new places quickly.' },
  { a: 'a job you’ve been doing for years', b: 'a new job you’ve never done', chips: ['I’ve been … for …', 'I should have …'], ex: 'A new job. I’ve been doing the same thing for ten years.' },
  { a: 'wake up at 5 AM every day', b: 'go to bed at 3 AM every day', chips: ['I’m used to …', 'I could never get used to …'], ex: '5 AM. I’m used to waking up early.' }];

/* 10/11/2026 · AS EXPLICAÇÕES (kit/formatos3.js) · G3 · uma cena curta nova (k: gx) antes de pode.
   Explicação 100% em inglês: see → notice → use (o aluno fala ou escreve uma frase dele no fim). */
var GX_EXPLICA = { formato: 'certoErrado', titulo: 'Right, not this. Tap the right one.', pares: [{ c: 'I’ve lived here since 2010.', x: 'I live here since 2010.', d: 'Since a point in the past: have + <b>lived</b>.' }, { c: 'I’m used to waking up early.', x: 'I’m used to wake up early.', d: 'be used to + <b>-ing</b>.' }, { c: 'I should have learned more.', x: 'I should learned more.', d: 'should + <b>have</b> + participle.' }, { c: 'We’ve been talking for two hours.', x: 'We’re talking since two hours.', d: 'How long: <b>have been</b> + -ing + for.' }, { c: 'I used to play the drums.', x: 'I use to play the drums.', d: 'A past habit: <b>used</b> to.' }], nota: 'How long until now: <b>have been -ing</b> with <b>for / since</b>. Then and now: <b>used to</b> + verb, but <b>be used to</b> + -ing. A regret: <b>should have</b> + participle.', uso: { p: 'Your turn. Tell an old classmate about your life: how long you have lived or worked there, and what you used to do.', molde: ['I’ve been … for …', 'I used to …, but now I …'], ex: 'I’ve been working at a bank for six years. I used to be a teacher, but now I work with numbers.' } };
var R = R || {};
R.gx = function (c) { return cab(c) + FM.ex('gx_certo', GX_EXPLICA); };
