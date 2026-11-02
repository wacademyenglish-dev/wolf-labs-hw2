/* ============================================================
   THE SPEECH · THE SHAPE OF A LINE · LIVE CLASS  06/10/2026
   Main series C1 · recursos retóricos: tricolon (três itens, o maior no
   fim) · paralelismo (mesma gramática em cada parte) · antítese (not X,
   but Y) · pergunta retórica (auxiliar antes do sujeito) · anáfora (as
   mesmas palavras no começo de cada linha, repetidas de propósito).
   Erros: sinônimo que mata a anáfora · because is easy · Why we should…?
   · to read, studying and for meeting · etc. no fim do tricolon.
   O MUNDO (da aula velha): o discurso da Lua de 1962 num estádio do
   Texas (WZyRbnpGyzQ, domínio público) SELADO em quatro capítulos; e a
   cidade inventada de Harlow Falls, onde a biblioteca Lantern (1923,
   cúpula de vidro) pode virar garagem: o aluno tem 90 segundos no pódio,
   ao vivo na rádio da cidade. Final feliz: 5 a 2. Sem nome do
   presidente, do canal, da universidade ou do alpinista na tela.
   A CARA (nova; a velha era salão com poltronas + holofote): a FORMA DA
   FRASE — quando a linha sai certa, ela se desenha no palco: tricolon em
   três degraus que crescem, anáfora com o começo repetido alinhado em
   ouro, antítese e paralelismo em duas metades espelhadas, pergunta com
   o auxiliar aceso e o "?" sem resposta; e o VU de rádio ON AIR que sobe
   a cada batida dos 90 segundos.
   Fila: FILA-LIVE-386.md · 147. Pasta piloto-speech (conferida: não existia).
   23/10/2026 · OS FORMATOS NOVOS (kit/formatos.js + formatos2.js), mesmas
   páginas, nada de escolher entre frases quase iguais. III = antes do play
   uma reação (como abrir o discurso) e uma régua; em cada capítulo
   verdadeiro ou mentira com ▶ no minuto (legenda-dados.js); depois, ligar
   o recurso à fala do discurso (FM.reacao, FM.regua, FM.verdadeOuMentira,
   FM.liga). V = a linha chata: o aluno FALA e toca Check, e a forma se
   desenha (FM.fala, SEIS cadeiras, eram sete); VI = achar a parte quebrada
   de cinco linhas com os cinco recursos na placa (FM.erro); VII = 90 s no
   relógio, o aluno toca cada recurso quando usa (FM.cronometro + FM.usa,
   SEIS batidas, eram oito: o VU também). I, II, IV, VIII, IX e X ficam.
   ============================================================ */
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'voce', est: 'o', min: 7, img: 'bastidores', rot: 'I · You and the Microphone', t: 'Before the stage: you, words, and a room full of people.', p: 'Tap a card. The student answers; then the teacher answers too.' },
  { k: 'palavras', est: 'l', img: 'lua', rot: 'II · The Words', t: 'Five words from the video.', p: 'Learn the words before you watch. Then listen for them: they turn yellow in the video.' },
  { k: 'video', est: 'l', min: 10, img: 'lua', rot: 'III · Why the Moon?', t: 'A stadium in Texas, September 12, 1962. A president, a hot crowd, and one very expensive idea.', p: 'Tap your answers first. Then the speech plays in four short chapters: tap True or Lie, and ▶ to hear a line again.' },
  { k: 'falas', est: 'l', extra: 1, img: 'lua', rot: 'IV · Line by Line', t: 'Every line of the video, one by one.', p: 'Tap a line. Hear it again. The lines with yellow words open the explanation.' },
  { k: 'sala', est: 'o', min: 7, img: 'biblioteca', rot: 'V · The Sleeping Hall', t: 'Thursday, 9 PM. The town hall is empty. Tomorrow the council votes on the library.', p: 'Read the flat line. Say it so nobody could sleep through it. Then tap Check: a right line draws its shape.' },
  { k: 'regra', est: 'f', min: 7, img: 'podio', rot: 'VI · The Rule', t: 'Rhetoric is grammar you can hear: the same shape, again and again.', p: 'Find the broken part in each line. Say the fix. The five devices are in the corner. Then tap Check.' },
  { k: 'foco', est: 'o', min: 7, img: 'podio', rot: 'VII · Ninety Seconds', t: 'Friday, 7 PM. The red light is on: you are live on the town radio. Six beats.', p: 'Start the clock. The teacher reads each beat. Deliver the line at once, and tap each device when you use it.' },
  { k: 'radio', est: 'o', min: 7, extra: 1, img: 'radio', rot: 'VIII · Night Line', t: 'After the vote, the town radio calls. You are live again.', p: 'The teacher is the late-night host. Answer each question with the device in brackets.' },
  { k: 'causa', est: 'o', min: 7, extra: 1, img: 'cortina', rot: 'IX · Your Cause', t: 'Your life, your causes. Two lines, then stand up and say them.', p: 'Tap a card. Write two lines with a device, then deliver them.' },
  { k: 'fim', est: 'w', min: 6, img: 'biblioteca', rot: 'X · The Lamp Stays On', t: 'What would you stand at a podium to save?', p: 'Your place from scene I, in three lines: a question, an antithesis, the same words three times.' }
];

var YT = 'WZyRbnpGyzQ';

var VOCE = [
  { k: 'STAGE FRIGHT', q: 'When was the last time you spoke in front of a group? What did your body do?', fup: 'What helped?', st: ['At a … last …'], ex: 'At a work meeting last month. My hands were cold and I spoke too fast.' },
  { k: 'A TOAST', q: 'Have you ever given a toast at a wedding, a birthday or a goodbye party? How did it go?', fup: 'Do you remember a line?', st: ['Once, at …'], ex: 'Once, at my brother’s wedding. I forgot half of it, but people laughed in the right places.' },
  { k: 'A VOICE', q: 'Whose voice could you listen to for an hour? Why them?', fup: 'What do they do with pauses?', st: ['An old … of mine.'], ex: 'An old history teacher of mine. He paused before every important word.' },
  { k: 'WORDS THAT STAYED', q: 'Is there a sentence someone said to you years ago that you still remember?', fup: 'Is it the idea, or the sound?', st: ['My grandfather: …'], ex: 'My grandfather: “Work hard, stay kind, and call your mother.”' }
];

/* III · antes do play: como abrir o discurso (FM.reacao) e uma régua (FM.regua) */
var ANTES_REACAO = { formato: 'reacao', titulo: 'How do you open? Tap one.', fala: 'You have eighteen minutes to convince a stadium that a trip to the moon is worth billions of dollars. The crowd is hot and tired.', quem: 'The crowd', reacoes: [
  ['Open with a joke', '“It is a hot day, so I will be quick. Well, almost.”', 'They laugh. Now they are listening.'],
  ['Open with a big question', '“What kind of country do we want to be?”', 'They go quiet. They wait for your answer.'],
  ['Open with the price', '“Billions of dollars. That is what it costs.”', 'They frown. They want a reason before the price.']
] };
var ANTES_REGUA = { formato: 'regua', titulo: 'Before you watch', frase: 'What makes a speech stay in your head is the rhythm of the words, not the ideas.', esquerda: 'The ideas', direita: 'The rhythm', depois: 'Say why. Start with: I remember how it sounds before …' };
/* por capítulo: duas linhas, verdadeiro ou mentira, ▶ no minuto (legenda-dados.js) */
var CAPS = [
  { k: 'THE OPENING', ini: 50, fim: 81, tarefa: { formato: 'verdadeOuMentira', titulo: 'The opening · true or lie?', itens: [
    { f: 'He says the college is noted for knowledge, the city for progress and the state for strength.', t: true, tm: '0:52' },
    { f: 'He says we meet “in a decade of peace and plenty”.', t: false, tm: '1:09', c: 'Hope and fear: two opposites in the same frame.' }
  ] } },
  { k: 'THOSE WHO WAITED', ini: 236, fim: 272, tarefa: { formato: 'verdadeOuMentira', titulo: 'Those who waited · true or lie?', itens: [
    { f: 'He names a city, a state and a country in the same frame: this city of …, this state of …, this country of …', t: true, tm: '4:04' },
    { f: 'He says this country was built by those who waited and rested.', t: false, tm: '4:10', c: 'It was NOT built by those who waited: it was conquered by those who moved forward.' }
  ] } },
  { k: 'WHY THE MOON?', ini: 527, fim: 584, tarefa: { formato: 'verdadeOuMentira', titulo: 'Why the moon? · true or lie?', itens: [
    { f: 'He asks: why climb the highest mountain? Why fly the Atlantic?', t: true, tm: '8:54' },
    { f: 'He says they will go to the moon because it is easy.', t: false, tm: '9:16', c: 'Not because they are easy, but because they are hard.' }
  ] } },
  { k: 'BECAUSE IT IS THERE', ini: 1051, fim: 1086, tarefa: { formato: 'verdadeOuMentira', titulo: 'Because it is there · true or lie?', itens: [
    { f: 'A famous climber, asked why he wanted to climb the mountain, said: because it is there.', t: true, tm: '17:38' },
    { f: 'He says the moon and the planets are too far away to matter.', t: false, tm: '17:43', c: 'He says space is there, like the mountain, and we are going to climb it.' }
  ] } }
];
/* depois do vídeo: ligar o recurso à fala do discurso (FM.liga) */
var LIGA_SP = { formato: 'liga', titulo: 'Match each device to a line from the speech.', ordemDireita: [2, 0, 3, 1], pares: [
  ['TRICOLON · the biggest last', 'one we are willing to accept, one we are unwilling to postpone, and one we intend to win'],
  ['ANTITHESIS', 'not because they are easy, but because they are hard'],
  ['RHETORICAL QUESTIONS', 'Why climb the highest mountain? Why fly the Atlantic?'],
  ['ANAPHORA', 'this city of Houston, this state of Texas, this country of the United States']
] };

/* d = o recurso (tri · ana · anti · par · q); p = as partes da forma; rep = o começo repetido; hl = o auxiliar da pergunta */
var SALA = [
  { dev: 'RHETORICAL QUESTION', plano: 'Some people think we don’t need a library anymore, because everything is online.', d: 'q', p: ['Why should we keep a library', 'when everything is online?'], hl: 'should we', ops: ['Why should we keep a library when everything is online?', 'Why we should keep a library when everything is online?', 'Why to keep a library when everything is online?'] },
  { dev: 'TRICOLON', plano: 'People read there. They also study there, and sometimes they meet friends.', d: 'tri', p: ['to read,', 'to study,', 'and to meet.'], ops: ['We come here to read, to study and to meet.', 'We come here to read, studying and for meeting.', 'We come here to read, to study, to meet, etc.'] },
  { dev: 'ANTITHESIS', plano: 'Keeping the library is hard. I think we should do it anyway.', d: 'anti', p: ['not because it is easy,', 'but because it is right.'], ops: ['We keep it open not because it is easy, but because it is right.', 'We keep it open not because is easy, but because is right.', 'We keep it open not because it is easy, but for being right.'] },
  { dev: 'ANAPHORA', plano: 'The library helped my grandmother. It helped me too, and it helps kids today.', d: 'ana', rep: 'It opened its doors', p: ['It opened its doors to my grandmother.', 'It opened its doors to me.', 'It opened its doors to your children.'], ops: ['It opened its doors to my grandmother. It opened its doors to me. It opened its doors to your children.', 'It opened its doors to my grandmother. It welcomed me. It received your children.', 'It opened its doors to my grandmother, me and your children.'] },
  { dev: 'PARALLELISM', plano: 'A parking garage stores cars. The library is good for people’s minds.', d: 'par', p: ['A garage stores our cars;', 'a library grows our minds.'], ops: ['A garage stores our cars; a library grows our minds.', 'A garage stores our cars, but our minds are grown by a library.', 'A garage stores our cars; a library is very good for minds.'] },
  { dev: 'TRICOLON · BIGGEST LAST', plano: 'It is free. It is quiet. It is open late.', d: 'tri', p: ['It is quiet,', 'it is open late,', 'and it is free for every single one of us.'], ops: ['It is quiet, it is open late, and it is free for every single one of us.', 'It is free for every single one of us, it is open late, and it is quiet.', 'It is quiet, it is open late, and it doesn’t cost anything, etc.'] },
  { dev: 'QUESTION · REPEATED', plano: 'Please vote no on Friday. It’s important to do it now.', d: 'ana', rep: 'If not', p: ['If not now, when?', 'If not us, who?'], ops: ['If not now, when? If not us, who?', 'If not now, when? If not us, which person?', 'If not now, when will be? If not us, who will be?'] }
];

/* VI · achar a parte quebrada (FM.erro) · a placa com os cinco recursos */
var ERRO_SP = [
  { f: 'It opened its doors to me. It <u>welcomed</u> my sister.', r: 'opened its doors to' },
  { f: 'We come here <u>to read, studying and for meeting</u>.', r: 'to read, to study and to meet' },
  { f: 'Not because <u>is easy, but because is hard</u>.', r: 'it is easy, but because it is hard' },
  { f: '<u>Why we should</u> close the one place open to everyone?', r: 'Why should we' },
  { f: 'It is quiet, it is open late, it is free for everyone<u>, etc.</u>', r: 'delete “etc.”' }
];
var PRESA_SP = '<b>TRICOLON</b> · three items, same shape, the biggest last<br><b>PARALLELISM</b> · the same grammar in both halves<br><b>ANTITHESIS</b> · not X, but Y (with a subject)<br><b>QUESTION</b> · auxiliary first, no answer<br><b>ANAPHORA</b> · repeat, don’t replace';

var FOCO = [
  { t: '0:00', dev: 'RHETORICAL QUESTION', cue: 'Open with a question about the town. Nobody should answer it.', d: 'q', p: ['What kind of town are we', 'if we close our library?'], hl: 'are we', ops: ['What kind of town are we if we close our library?', 'What kind of town we are if we close our library?', 'What kind of town are we if we close our library? A bad one.'] },
  { t: '0:12', dev: 'TRICOLON', cue: 'Forty thousand books. Three hundred visitors a day. A hundred years under the dome.', d: 'tri', p: ['Forty thousand books,', 'three hundred visitors a day,', 'one hundred years of light.'], ops: ['Forty thousand books, three hundred visitors a day, one hundred years of light.', 'Forty thousand books and three hundred visitors a day.', 'Forty thousand books, three hundred visitors, etc.'] },
  { t: '0:24', dev: 'ANTITHESIS', cue: 'The council talks about what the library costs. Turn it around.', d: 'anti', p: ['They see what the library costs;', 'I see what it gives.'], ops: ['They see what the library costs; I see what it gives.', 'They see what the library costs; what it gives is seen by me.', 'They see what the library costs; I think it is very generous.'] },
  { t: '0:35', dev: 'ANAPHORA', cue: 'Name three people who need the library. Start each line the same way.', d: 'ana', rep: 'For the', p: ['For the student with no quiet room.', 'For the worker with no computer.', 'For the grandmother with no one to talk to.'], ops: ['For the student with no quiet room. For the worker with no computer. For the grandmother with no one to talk to.', 'For the student with no quiet room. In benefit of the worker. On behalf of the grandmother.', 'For the student with no quiet room. To help workers. And grandmothers too.'] },
  { t: '0:46', dev: 'PARALLELISM', cue: 'Compare the garage and the library. Give them the same sentence.', d: 'par', p: ['A garage asks, “Where can I leave my car?”', 'A library asks, “Where can I take my mind?”'], ops: ['A garage asks, “Where can I leave my car?” A library asks, “Where can I take my mind?”', 'A garage asks, “Where I can leave my car?” A library asks, “Where I can take my mind?”', 'A garage asks where to leave the car; a library is about the mind.'] },
  { t: '0:57', dev: 'ANTITHESIS', cue: 'Admit it is expensive. Then use the moon speech frame.', d: 'anti', p: ['not because it is cheap,', 'but because it is ours.'], ops: ['We should save it, not because it is cheap, but because it is ours.', 'We should save it, not because is cheap, but because is ours.', 'We should save it, not because it is cheap, but for it belonging to us.'] },
  { t: '1:08', dev: 'ANAPHORA · TRICOLON', cue: 'Say “Keep it” three times, each time with a reason.', d: 'ana', rep: 'Keep it for', p: ['Keep it for our kids.', 'Keep it for our nights.', 'Keep it for our town.'], ops: ['Keep it for our kids. Keep it for our nights. Keep it for our town.', 'Keep it for our kids. Save it for our nights. Protect it for our town.', 'Keep it for our kids, our nights, our town and many other things.'] },
  { t: '1:19', dev: 'TRICOLON · BIGGEST LAST', cue: 'The last ten seconds. Three votes, the biggest idea last.', d: 'tri', p: ['Vote for the books,', 'vote for the light,', 'vote for the town we want to be.'], ops: ['Vote for the books, vote for the light, vote for the town we want to be.', 'Vote for the town we want to be, for the light, for the books.', 'Vote for the books, support the light, choose the town we want to be.'] }
];

/* VII · seis batidas (eram oito) */
var FOCO6 = [FOCO[0], FOCO[2], FOCO[3], FOCO[4], FOCO[6], FOCO[7]];
var CRONO_SP = { formato: 'cronometro', segundos: 90, titulo: 'On air · 90 seconds' };
var USA_SP = { formato: 'usa', titulo: 'Tap each device when you use it.', palavras: FOCO6.map(function (x, i) { return (i + 1) + ' · ' + x.dev; }), fim: 'Six beats, six devices. The hall is standing.' };
var RADIO = [
  { q: '“You’re live on Night Line. A listener texted: ‘Libraries are dead.’ What do you say to her?”', fup: 'The host says: “Ha! I felt that one. The phones are ringing already.”', st: ['Why …? / What kind of …? (a rhetorical question)'], ex: 'What kind of town lets its last quiet room go dark?' },
  { q: '“A caller says the garage would bring money and jobs. Your answer?”', fup: 'The host says: “Fair and sharp. He’s still on the line, and he’s laughing.”', st: ['He sees …; I see … (an antithesis)'], ex: 'He sees parking spaces; I see a future.' },
  { q: '“Tell our listeners what the library gave YOU. Three things.”', fup: 'The host says: “That’s beautiful. Somebody is crying in their car.”', st: ['It gave me … It gave me … It gave me … (anaphora, biggest last)'], ex: 'It gave me books. It gave me friends. It gave me the person I am.' },
  { q: '“News just in: five to two. The library stays open! One closing line for the whole town?”', fup: 'The host says: “That’s going on the wall under the dome. Good night, Harlow Falls.”', st: ['Your own closing line (any two devices)'], ex: 'Not a garage, but a lantern: for our kids, for our nights, for our town.' }
];

var CAUSA = [
  { k: 'YOUR STREET', q: 'Something on your street you would save. Give it a tricolon.', fup: 'Now deliver it, standing.', st: ['…, … and …'], ex: 'Our bakery: the bread, the smell, and the owner who knows my name.' },
  { k: 'YOUR JOB', q: 'Defend your job or your studies with an antithesis.', fup: 'Say it slower, with a pause before the second half.', st: ['… don’t …; they …'], ex: 'Teachers don’t fill heads; they open them.' },
  { k: 'A HABIT', q: 'A habit you want everyone to try. Start with a rhetorical question.', fup: 'Don’t answer it.', st: ['Why do we …?'], ex: 'Why do we drive to the gym and never walk to work?' },
  { k: 'A PERSON', q: 'Someone who changed your life. Three lines, same start.', fup: 'Is the biggest one last?', st: ['She taught me … She taught me … She taught me …'], ex: 'She taught me to read. She taught me to wait. She taught me to try again.' },
  { k: 'YOUR CITY', q: 'A twenty-second ad for your city.', fup: 'Which device did you use?', st: ['Come for …, stay for …, …'], ex: 'Come for the beaches, stay for the food, fall in love with the people.' },
  { k: 'YOUR GRADUATION', q: 'The last line of your own graduation speech.', fup: 'Say it to the camera.', st: ['We came here as …; we leave as …'], ex: 'We came here as strangers; we leave as a team.' }
];

var S = { i: 0, faixa: 1, fala: {}, resp: {}, armas: {},
  voce: { sel: -1, foi: {} }, video: { p: 0, cap: 0, viu: {} }, ra: { n: 0, foi: {} }, ca: { sel: -1, foi: {} } };

/* a forma da frase no palco */
function forma(x, foi) {
  if (!foi) return '<div class="pd-palco vd vazio"><small>' + x.dev + '</small><p>the shape appears when the line is right</p></div>';
  var corpo;
  if (x.d === 'tri') corpo = '<div class="pd-degraus">' + x.p.map(function (p, i) { return '<span style="--n:' + i + '"><i>' + (i + 1) + '</i>' + p + '</span>'; }).join('') + '</div><em class="pd-tag">THE BIGGEST LAST</em>';
  else if (x.d === 'ana') corpo = '<div class="pd-pilha">' + x.p.map(function (p) { return '<span><b>' + x.rep + '</b>' + p.slice(x.rep.length) + '</span>'; }).join('') + '</div><em class="pd-tag">SAME START, ON PURPOSE</em>';
  else if (x.d === 'anti' || x.d === 'par') corpo = '<div class="pd-espelho"><span>' + x.p[0] + '</span><i></i><span>' + x.p[1] + '</span></div><em class="pd-tag">' + (x.d === 'anti' ? 'OPPOSITES, ONE FRAME' : 'SAME GRAMMAR, BOTH HALVES') + '</em>';
  else corpo = '<div class="pd-pergunta"><span>' + x.p[0].replace(x.hl, '<b>' + x.hl + '</b>') + ' ' + x.p[1].replace('?', '') + '</span><i>?</i></div><em class="pd-tag">AUXILIARY FIRST · NO ANSWER</em>';
  return '<div class="pd-palco vd"><small>' + x.dev + '</small>' + corpo + '</div>';
}
/* o VU de rádio ON AIR */
function vu(n, t) {
  var b = ''; for (var i = 0; i < 6; i++) b += '<i class="' + (i < n ? (i > 4 ? 'pico' : 'on') : '') + '"></i>';
  return '<div class="pd-vu vd"><span class="pd-ar' + (n < 6 ? ' vivo' : '') + '">ON AIR</span><div class="pd-barras s6">' + b + '</div><small>' + (n >= 6 ? '1:30 · THE HALL IS STANDING' : '1:30 · ' + n + ' OF 6 BEATS DONE') + '</small></div>';
}

var R = {};
R.capa = function () {
  return '<div class="capa"><div><span class="kick">MAIN SERIES · C1 · RHETORICAL DEVICES</span><h1>The <b>Speech</b></h1>'
    + '<p class="sub">Not because it is easy, <b>but because it is ours.</b> Lists of three, opposites, questions nobody answers, the same words again and again: grammar you can hear.</p>'
    + '<div class="chipsx"><span class="pilula">tricolon</span><span class="pilula">antithesis</span><span class="pilula">anaphora</span><span class="pilula">Live Class · W·O·L·F</span></div>'
    + '<button type="button" class="btn cheio" data-a="ir" data-n="1">Step into the light</button>' + faixaLive() + '</div>'
    + '<div class="capa-r">' + forma(FOCO[5], 1) + forma(FOCO[6], 1) + '</div></div>';
};

R.voce = function (c) { return cartasPessoais(c, VOCE, S.voce, 'voce', ['At a …', 'Once, at …', 'My grandfather …']); };

R.video = function (c) {
  var e = S.video, corpo;
  if (e.p === 0) corpo = '<div class="mesa-c"><div class="lado-l">' + FM.ex('va1', ANTES_REACAO) + FM.ex('va2', ANTES_REGUA) + '</div>'
    + '<div class="lado-l"><div class="selo-v vd"><b>SEALED</b><small>Four short chapters from an eighteen-minute speech. It opens after your answers.</small></div><div><button type="button" class="btn cheio" data-a="vd-p" data-n="1">Watch, chapter by chapter</button></div></div></div>';
  else if (e.p === 1) {
    var k = CAPS[e.cap];
    corpo = '<div class="mesa-video"><div class="video-col">' + iframe(YT, 'The moon speech, 1962', '&start=' + k.ini + '&end=' + k.fim) + '<small class="cred">Chapter ' + (e.cap + 1) + ' of 4 · it stops by itself · tap ▶ to hear a line again</small></div><div class="lado-video"><div class="caps">'
      + CAPS.map(function (x, i) { return '<button type="button" class="chip' + (e.cap === i ? ' on' : '') + (e.viu[i] ? ' feito' : '') + '" data-a="vd-c" data-n="' + i + '">' + x.k + '</button>'; }).join('') + '</div>'
      + FM.ex('vc' + e.cap, k.tarefa)
      + '<div>' + (e.cap < CAPS.length - 1 ? '<button type="button" class="btn" data-a="vd-c" data-n="' + (e.cap + 1) + '">Next chapter</button>' : '<button type="button" class="btn" data-a="vd-p" data-n="2">After the video</button>') + '</div></div></div>';
  } else corpo = '<div class="pd-um">' + FM.ex('vl', LIGA_SP) + '</div><p class="aprova" style="text-align:center">Lists of three, opposites, questions, repetition: the machine behind a great speech. Now a small town needs one.</p>';
  return cab(c) + '<div class="tres-tempos">' + tempos3(e.p) + '</div>' + corpo;
};

/* V · a linha chata: o aluno FALA, toca Check, e a forma se desenha (seis cadeiras) */
var SALA6 = SALA.filter(function (x, i) { return i !== 5; });
R.sala = function (c) {
  return cab(c) + FM.ex('sl', { formato: 'fala', rotulo: 'Seat', prox: 'Next seat', diga: 'Say it so nobody could sleep',
    fim: 'Six seats awake. You already use the devices: you just did it six times. Let’s name the machine.',
    itens: SALA6.map(function (x) { return { pista: '<span class="ano">' + x.dev + '</span>' + x.plano, resp: x.ops[0], depois: 'Say it again, slower, with a pause before the last part.' }; }),
    lado: function (feitas, atual, ver) { return '<div class="pd-um">' + forma(atual < 0 ? SALA6[SALA6.length - 1] : SALA6[atual], atual < 0 ? 1 : ver) + '</div>'; } });
};

R.regra = function (c) {
  return cab(c) + FM.ex('rg', { formato: 'erro', titulo: 'Five lines are broken. Find the broken part. Say the fix.', itens: ERRO_SP, regra: PRESA_SP });
};

R.foco = function (c) {
  var u = ((S.fq || {}).fu || {}).u || {}, n = Object.keys(u).length;
  var beats = '<ol class="pd-beats">' + FOCO6.map(function (x, i) { return '<li class="' + (u[i] ? 'feito' : '') + '"><b>' + x.t + '</b><span>' + x.dev + '</span><em>' + x.cue + '</em></li>'; }).join('') + '</ol>';
  var modelos = '<details class="so-prof pd-modelos"><summary>Model lines (teacher)</summary>' + FOCO6.map(function (x) { return '<p><b>' + x.dev + '</b> ' + x.ops[0] + '</p>'; }).join('') + '</details>';
  return cab(c) + vu(n) + '<div class="mesa-c"><div class="lado-l">' + beats + modelos + '</div><div class="lado-l">' + FM.ex('ft', CRONO_SP) + FM.ex('fu', USA_SP) + '</div></div>';
};

R.radio = function (c) {
  return cab(c) + '<div class="pd-fone vd"><span class="pd-pulso"></span><b>NIGHT LINE · TOWN RADIO 88.7</b><small>9:40 PM · LIVE</small></div>'
    + sequencia({ est: 'o', rot: '', t: '', p: '' }, RADIO, S.ra, 'ra', 'Five to two. The lamp under the dome stays on.').replace(/<div class="cab[\s\S]*?<\/p><\/div>/, '');
};

R.causa = function (c) { return cartasPessoais(c, CAUSA, S.ca, 'ca', ['Not …, but …', 'Why do we …?', '…, … and …']); };

R.fim = function (c) {
  return cab(c) + '<div class="fim">' + escritaFinal('fim', (S.txt || {}).fim || '', (S.salvo || {}).fim, 'Why should we …?\nNot because …, but because …\nFor …. For …. For ….', 'Your speech',
    ['Why should we', 'not because it is', 'but because', 'For the', 'and'], ['YOUR PLACE', 'Your place from scene I, in three lines: a question, an antithesis, the same words three times.'])
    + '<div class="lado-fim">' + forma(FOCO[7], 1)
    + '<div class="grande vd"><span><u>tricolon · parallelism</u> · three items, same shape, the biggest last</span><span><u>antithesis</u> · not because it is easy, but because it is ours</span><span><u>question · anaphora</u> · Why should we…? · the same start, on purpose</span><span>not <s>because is easy</s>, not <s>why we should</s>, not <s>etc.</s>, no synonyms</span></div>'
    + mostra('fim', 'Why should we close the one bookstore that knows our names?<br>Not because it is big, but because it is ours.<br>For the readers. For the dreamers. For the town we want to be.', 1)
    + '<p class="hw"><a class="pilula" href="HW/" target="_blank" rel="noopener">Homework for the student →</a></p></div></div>';
};

TOQUES['vd-p'] = function (b, n) { S.video.p = n; };
TOQUES['vd-c'] = function (b, n) { S.video.viu[S.video.cap] = 1; S.video.cap = n; };
