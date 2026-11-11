/* ============================================================
   REVIEW · A1 · UNIT 1 · THE WELCOME DESK · LIVE CLASS  15/10/2026
   Só os dados: o motor é o kit/revisao/revisao.js (montar com kit/revisao/monta_rev.py).
   Unidade 1 (Hello, I’m…): apresentações e soletrar (his / her), And you?, be para idade
   e estado (I’m 30), I’m from / I live in, he is / she is + a / an + profissão,
   dias com on e How much is it?
   A missão: a recepção de um hotel pequeno à noite; três hóspedes; o relatório ao gerente.
   ============================================================ */
var REV = { nivel: 'A1', unidade: 1, titulo: ['The Welcome', 'Desk'], tema: 'Hello, I’m…', placa: 'RECEPTION', lugarConversa: 'THE LOBBY',
  sub: 'Unit 1 review. You work at the welcome desk of a small hotel tonight. Six doors, three guests, one report to the manager.' };
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'portas', est: 'f', min: 8, img: 'chave', rot: 'I · Six Doors', t: 'Six doors. One minute each. No notes.', p: 'Pick a door. Do the task out loud, from memory. Your teacher taps Got it or Review.' },
  { k: 'missao', est: 'o', min: 15, img: 'capa', rot: 'II · The Welcome Desk', t: 'Three guests arrive. You are at the desk.', p: 'Ask each guest five questions. Your teacher is the guest. Then tell the manager about one guest.' },
  { k: 'cartao', est: 'w', min: 6, img: 'chave', rot: 'III · Your Card', t: 'Now you are the guest. Write your card.', p: 'Four short lines about you. Then one line about a friend.' },
  { k: 'conversa', est: 'o', min: 8, img: 'capa', rot: 'IV · Small Talk', t: 'The lobby is quiet. Let’s talk.', p: 'Answer, then ask the question back: “And you?”' },
  { k: 'gx', est: 'f', min: 4, img: 'conversa', rot: 'V · The Welcome Desk Card', t: 'Four lines from Unit 1.', p: 'Read one line at a time. Then keep the card in the corner for the last page.' },
  { k: 'pode', est: 'f', min: 4, img: 'chave', rot: 'VI · I Can', t: 'Unit 1: what can you do now?', p: 'Read each line out loud. Tap the ones you can do. Your teacher confirms.' }
];

var PORTAS = [
  { k: 'HELLO', tema: 'introductions, spelling, his / her', t: 'Say hello and your name. Spell your first name. Then say: “His name is…” about a friend.', ex: 'Hi, I’m Carla. C-A-R-L-A. My friend? His name is Leo.', trap: 'his = a man, her = a woman.' },
  { k: 'AND YOU?', tema: 'giving the turn back', t: 'Your teacher asks: “How are you?” Answer, and ask back.', ex: 'I’m fine, thanks. And you?', trap: 'Always give the turn back: And you?' },
  { k: 'HOW OLD?', tema: 'be for age and how you feel', t: 'How old are you? And now: are you tired, hungry or happy?', ex: 'I’m 34. I’m a little tired.', trap: '“I have 34” → I AM 34. Age is be.' },
  { k: 'FROM & IN', tema: 'I’m from / I live in', t: 'Where are you from? Where do you live?', ex: 'I’m from Brazil. I live in Recife.', trap: 'from = your country · live in = your city now.' },
  { k: 'HE IS, SHE IS', tema: 'he is / she is + a / an + job', t: 'Talk about a person in your family: name, job, age.', ex: 'This is my sister. She is a nurse. She is 29.', trap: 'She is a nurse (a!). He is an engineer (an!).' },
  { k: 'DAYS & PRICES', tema: 'days with on, How much is it?', t: 'When is your English class? And how much is a coffee in your city?', ex: 'On Tuesday. A coffee is five reais.', trap: 'on Monday · Monday with a capital M.' }
];

var MISSAO = { pede: 'AT THE DESK · ASK FIVE QUESTIONS', quem: 'guest', depois: 'Call the manager',
  campos: [
    { c: 'nome', r: 'NAME', q: 'What’s your name? How do you spell it?', f: 'Your name, please?' },
    { c: 'de', r: 'FROM', q: 'Where are you from?', f: 'Your country?' },
    { c: 'mora', r: 'LIVES IN', q: 'Where do you live?', f: 'Your city?' },
    { c: 'idade', r: 'AGE', q: 'How old are you?', f: 'Your age?' },
    { c: 'job', r: 'JOB', q: 'What’s your job?', f: 'Your job?' }],
  itens: [
    { k: 'GUEST 1', tag: 'ROOM 12', ele: 'He', v: { nome: 'Tom Baker', de: 'Canada', mora: 'Toronto', idade: '34', job: 'a teacher' }, diz: '“My name is Tom Baker. B-A-K-E-R.” · “I’m from Canada.” · “I live in Toronto.” · “I’m 34.” · “I’m a teacher.”' },
    { k: 'GUEST 2', tag: 'ROOM 14', ele: 'She', v: { nome: 'Yuki Sato', de: 'Japan', mora: 'Osaka', idade: '27', job: 'a nurse' }, diz: '“My name is Yuki Sato. S-A-T-O.” · “I’m from Japan.” · “I live in Osaka.” · “I’m 27.” · “I’m a nurse.”' },
    { k: 'GUEST 3', tag: 'ROOM 21', ele: 'He', v: { nome: 'Omar Haddad', de: 'Egypt', mora: 'Cairo', idade: '41', job: 'an engineer' }, diz: '“My name is Omar Haddad. H-A-D-D-A-D.” · “I’m from Egypt.” · “I live in Cairo.” · “I’m 41.” · “I’m an engineer.”' }],
  relato: { titulo: 'THE MANAGER CALLS · TELL ME ABOUT ONE GUEST',
    pede: function (x) { return 'Who is in ' + x.tag.toLowerCase() + '?'; },
    chips: function (x) { return [x.ele + ' is …', x.ele + ' is from …', x.ele + ' lives in …', x.ele + ' is … years old.', x.ele + ' is a / an …']; },
    modelo: function (x) { var v = x.v; return x.ele + ' is ' + v.nome + '. ' + x.ele + ' is from ' + v.de + '. ' + x.ele + ' lives in ' + v.mora + '. ' + x.ele + ' is ' + v.idade + '. ' + x.ele + ' is ' + v.job + '.'; } },
  nao: { have: '“He has 34” → He IS 34. Age is be.', sem_a: '“She is nurse” → She is A nurse. Job: a / an.', of: '“He is of Canada” → He is FROM Canada.' },
  fim: 'Three guests, one report. Name, from, live in, age, job: all of Unit 1 at one desk.' };

var CARTAO = { ph: 'Name: Ana Souza\nFrom: Brazil\nI live in Recife.\nI’m 30. I’m a designer.\nMy friend is Lia. She is from Chile.', rot: 'My guest card',
  chips: ['My name is ', 'I’m from ', 'I live in ', 'I’m ', ' years old', 'I’m a ', 'I’m an ', 'My friend is ', 'He is ', 'She is '],
  perg: ['YOUR CARD', 'Name, from, live in, age, job. Then one line about a friend.'],
  exemploRot: 'GUEST CARD · ROOM 7', exemplo: [['NAME', 'Ana Souza'], ['FROM', 'Brazil'], ['LIVES IN', 'Recife'], ['AGE', '30'], ['JOB', 'a designer']],
  modelo: 'My name is Ana Souza.<br>I’m from Brazil. I live in Recife.<br>I’m 30. I’m a designer.<br>My friend is Lia. She is from Chile.' };

var CONVERSA = [
  { q: 'Where are you from? And your family?', f: 'Your family: from where?', voce: ['I’m from …', 'My family is from …'], ex: 'I’m from Bahia. My family is from Bahia too.' },
  { q: 'Where do you live now? Is it a big city?', f: 'Your city: big or small?', voce: ['I live in …', 'It’s a big / small city.'], ex: 'I live in Campinas. It’s a big city.' },
  { q: 'Who is your best friend? What’s his or her job?', f: 'Your best friend: name? job?', voce: ['My best friend is …', 'He / She is a …'], ex: 'My best friend is Rafa. He is a cook.' },
  { q: 'Your favorite day: Saturday or Sunday?', f: 'Your favorite day?', voce: ['My favorite day is …', 'I’m … on …'], ex: 'Saturday! I’m not tired on Saturday.' },
  { q: 'Are you tired or happy today?', f: 'Today: tired? happy?', voce: ['I’m …', 'I’m not …'], ex: 'I’m happy. I’m not tired.' }
];

var PODE = [
  'I can say my name and spell it.',
  'I can say where I’m from and where I live.',
  'I can say my age with I’m (not I have).',
  'I can talk about a person: he is / she is a …',
  'I can answer “How are you?” and ask “And you?”'
];

/* 10/11/2026 · AS EXPLICAÇÕES (kit/formatos3.js) · G13 · uma cena curta nova (k: gx) antes de pode.
   Explicação 100% em inglês: see → notice → use (o aluno fala ou escreve uma frase dele no fim). */
var GX_EXPLICA = { formato: 'regraBolso', titulo: 'Four lines to keep from Unit 1.', rotulo: 'Hello, I’m…', linhas: ['I’m <b>34</b> · not “I have 34” · age is <b>be</b>', 'I’m <b>from</b> Brazil · I live <b>in</b> Recife', 'He is <b>a</b> teacher · She is <b>an</b> engineer', '<b>his</b> = a man · <b>her</b> = a woman · <b>on</b> Monday'], uso: { p: 'Your turn. Tell the manager about one guest: name, where from, age and job.', molde: ['His name is … / Her name is …', 'He is from … / She is from …', 'He is a … / She is an …'], ex: 'Her name is Yuki. She is from Japan. She is 27. She is a nurse.' } };
var R = R || {};
R.gx = function (c) { return cab(c) + FM.ex('gx_bolso', GX_EXPLICA); };
