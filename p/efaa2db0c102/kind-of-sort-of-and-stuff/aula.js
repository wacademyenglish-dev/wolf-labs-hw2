/* ============================================================
   KIND OF, SORT OF, AND STUFF · SOFT FOCUS · LIVE CLASS  06/10/2026
   Main series C1 · linguagem vaga: kind of / sort of + adjetivo ou
   verbo; kind of A + substantivo; and stuff / and things like that /
   or something (like that); -ish (nine-ish, bluish); a bit + adjetivo,
   a bit of a + substantivo. E o registro: vago para a irmã, exato para
   o balcão.
   Erros: a kind of weird · kind of a big · and stuffs · and thing · or
   something like (pendurado) · nine-ish o'clock · a bit of tired · kind
   of very · vago no formulário.
   O MUNDO (da aula velha): uma viajante pousa em Denver às 9:12 PM e a
   mala não aparece; conta a mesma noite em mensagens de voz para a irmã
   e no balcão de bagagem extraviada. Vídeo de entrevista de rua em
   Washington, D.C. (iO4lwmO5EMY) SELADO em quatro capítulos; sem nome do
   canal na tela. Sem áudio próprio.
   A CARA (nova; a velha eram ondas + esteira em cartões): o FOCO SUAVE —
   o mesmo fato em duas telas: a mensagem de voz (onda, letras com halo
   desfocado nas palavras vagas) e a ficha do balcão (campos nítidos em
   mono); e a ESTEIRA 5 com as malas passando, cada uma com a etiqueta
   DESK ou SISTER.
   Fila: FILA-LIVE-386.md · 142. Pasta piloto-vague (conferida: não existia).
   23/10/2026 · OS FORMATOS NOVOS (kit/formatos.js + formatos2.js), mesmas
   páginas, nada de escolher entre frases quase iguais. III = antes do play
   uma reação e uma régua; em cada capítulo verdadeiro ou mentira (e "quão
   certa está a pessoa?") com ▶ no minuto (legenda-dados.js); depois, uma
   régua (FM.reacao, FM.regua, FM.verdadeOuMentira, FM.escolhe). V = o
   aluno FALA o recado a partir da ficha exata e toca Check (FM.fala, as
   duas telas em cima); VI = adivinhar o que quatro frases têm em comum
   (FM.revela) e achar a parte quebrada (FM.erro); VII = a esteira: tocar a
   resposta e depois quem ouve, o balcão ou a irmã (FM.separa). I, II, IV,
   VIII, IX e X ficam.
   ============================================================ */
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'voce', est: 'o', min: 7, img: 'fone', rot: 'I · You and Talking', t: 'Before the memos: how do you talk, and to whom?', p: 'Tap a card. The student answers with a real story; then the teacher answers too.' },
  { k: 'palavras', est: 'l', img: 'estudio', rot: 'II · The Words', t: 'Five words from the video.', p: 'Learn the words before you watch. Then listen for them: they turn yellow in the video.' },
  { k: 'video', est: 'l', min: 10, img: 'estudio', rot: 'III · Trick Questions', t: 'A street interview in Washington, D.C. Trick questions, real answers, no script.', p: 'Tap your answers first. Then the video plays in four short chapters: tap True or Lie, and ▶ to hear a line again.' },
  { k: 'falas', est: 'l', extra: 1, img: 'estudio', rot: 'IV · Line by Line', t: 'Every line of the video, one by one.', p: 'Tap a line. Hear it again. The lines with yellow words open the explanation.' },
  { k: 'memos', est: 'o', min: 7, img: 'esteira', rot: 'V · Voice Memos to Her Sister', t: 'Friday, 9:12 PM, Denver. The bag never comes out. Six voice memos to her sister.', p: 'Read the exact fact. Say the memo the way you really talk. Then tap Check: the vague words glow.' },
  { k: 'regra', est: 'f', min: 7, img: 'fone', rot: 'VI · The Rule', t: 'Vague is not wrong. It depends on who is listening.', p: 'Read the clues. Guess what the four lines share. Then find the broken part of five lines.' },
  { k: 'esteira', est: 'o', min: 7, img: 'balcao', rot: 'VII · Carousel 5', t: '11 PM. The desk and the sister, one after the other.', p: 'Tap an answer, then the one who is listening: the DESK or HER SISTER. Then say it again in the other voice.' },
  { k: 'real', est: 'o', min: 7, extra: 1, img: 'sala', rot: 'VIII · Your Two Versions', t: 'Your real life, casual first.', p: 'Tap a card. Answer like a voice memo to a friend.' },
  { k: 'irma', est: 'o', min: 7, extra: 1, img: 'sala', rot: 'IX · Her Sister Calls', t: '11:30 PM. Her sister calls. You are the traveler, in a hotel room with no suitcase.', p: 'The teacher is the sister. Casual, except when you repeat what you told the desk.' },
  { k: 'fim', est: 'w', min: 6, img: 'capa', rot: 'X · Two Versions', t: 'When is it better to be vague, and when do you have to be exact?', p: 'One moment of your week, twice: a voice memo, then an email to your boss.' }
];

var YT = 'iO4lwmO5EMY';

var VOCE = [
  { k: 'MEMO OR TEXT?', q: 'Voice memos or text messages? Who do you send them to?', fup: 'Why that one?', st: ['Voice memos …', 'Texts …'], ex: 'Voice memos. My mom never reads texts, but she listens to everything.' },
  { k: 'LONG OR SHORT?', q: 'Tell me something from this week, in your style: the long story or the short version?', fup: 'Do your friends complain?', st: ['The long version …'], ex: 'The long version, always. My friends say I never get to the point.' },
  { k: 'THE BAG', q: 'Has an airline ever lost or broken something of yours?', fup: 'What did you do?', st: ['Once …', 'Never, I …'], ex: 'Never. I travel with a carry-on only. I never wait at the carousel.' },
  { k: 'AROUND SEVEN', q: 'When a friend says “around seven”, what time do you really arrive?', fup: 'And at work?', st: ['Around seven means …'], ex: 'Around seven means seven thirty in my family.' },
  { k: 'FRIENDS OR A BANK?', q: 'Talking to friends or talking to a bank: which is easier in English?', fup: 'What changes in the way you talk?', st: ['Friends are easier …'], ex: 'Friends are easier. With a bank I choose every word.' }
];

/* III · antes do play: uma reação e uma régua (tudo por toque) */
var ANTES_REACAO = { formato: 'reacao', titulo: 'A stranger with a microphone. What do you do?', fala: 'He asks: “What’s the highest mountain in the world?” You think it’s Everest, but it sounds like a trick.', quem: 'The host', reacoes: [
  ['Say it with total confidence', '“Mount Everest. Of course.”', 'He smiles. “Are you sure? That was kind of easy…”'],
  ['Be vague on purpose', '“I think it’s Everest, kind of, or something.”', 'He laughs. “Kind of, or something. I like it. Now the real question.”'],
  ['Say you don’t know', '“No idea. I’ll guess.”', 'He says: “A guess is fine. Guessing is the game.”']
] };
var ANTES_REGUA = { formato: 'regua', titulo: 'Before you watch', frase: 'When you are not sure, “I think it’s kind of …” sounds more natural than “It is …”.', esquerda: 'Disagree', direita: 'Agree', depois: 'Say why. Start with: With strangers, I …' };
/* por capítulo: duas ou três linhas com ▶ no minuto (legenda-dados.js) */
var CAPS = [
  { k: 'PART ONE', ini: 0, fim: 95, tarefa: { formato: 'verdadeOuMentira', titulo: 'Part one · true or lie?', itens: [
    { f: 'The host says these questions are made to fool you.', t: true, tm: '0:17' },
    { f: 'The first question is about the highest mountain in the world.', t: true, tm: '0:52' },
    { f: 'One man is sure the highest mountain is in Japan.', t: false, tm: '1:05', c: 'He says: “I think it’s one in Japan, I believe.” He is not sure.' }
  ] } },
  { k: 'PART TWO', ini: 95, fim: 190, tarefa: { formato: 'verdadeOuMentira', titulo: 'Part two · true or lie?', itens: [
    { f: 'A woman says: “I’m gonna guess Mount McKinley.”', t: true, tm: '1:45' },
    { f: 'The host says the answer is Mount McKinley.', t: false, tm: '1:57', c: 'No: it was still Mount Everest. They just hadn’t discovered it yet.' },
    { f: 'A taxi goes the wrong way down a one-way street, and two policemen don’t stop it.', t: true, tm: '2:38' }
  ] } },
  { k: 'PART THREE', ini: 190, fim: 285, tarefa: { formato: 'escolhe', titulo: 'Part three · how sure is each person?', itens: [
    { p: 'About the taxi: “I don’t get it.”', o: ['Sure', 'Guessing', 'No idea'], c: 2, tm: '3:45', d: 'No idea: she gives up.' },
    { p: '“I don’t know. Thought he might have a Uzi in the car.”', o: ['Sure', 'Guessing', 'No idea'], c: 1, tm: '3:50', d: 'Guessing: “I don’t know”, “might have”.' },
    { p: '“Because he’s walking.”', o: ['Sure', 'Guessing', 'No idea'], c: 0, tm: '3:53', d: 'Sure: a right answer, with no soft words at all.' },
    { p: 'About the hole: “There wouldn’t be any dirt in it if it’s a hole, if it’s empty.”', o: ['Sure', 'Guessing', 'No idea'], c: 0, tm: '4:34', d: 'Sure: now the logic is clear to him.' }
  ] } },
  { k: 'THE END', ini: 285, fim: 378, tarefa: { formato: 'verdadeOuMentira', titulo: 'The end · true or lie?', itens: [
    { f: 'The host asks how many books fit in an empty backpack.', t: true, tm: '5:01' },
    { f: 'The host says the answer is twelve.', t: false, tm: '5:08', c: 'The answer is none: with one book inside, it is not empty any more.' },
    { f: 'At the end, he says it doesn’t matter if you get them right, as long as you had fun.', t: true, tm: '5:42' }
  ] } }
];
var REGUA_DEPOIS = { formato: 'regua', titulo: 'After the video', frase: 'In a job interview, people would answer as vaguely as they did on the street.', esquerda: 'Disagree', direita: 'Agree', depois: 'Say why. Start with: In an interview, I would …' };

/* f = o fato exato (campo da ficha), m = a mensagem casual com as palavras vagas entre [ ] */
var MEMOS = [
  { k: 'LANDED', hora: '10:02 PM', campo: 'ARRIVAL', exato: '9:12 PM · 40 min late', ops: ['I landed at nine-ish. It was kind of late.', 'I landed at nine-ish o’clock.', 'The flight was a kind of late.'], m: 'I landed at [nine-ish]. It was [kind of] late.' },
  { k: 'THE WAIT', hora: '10:05 PM', campo: 'WAIT AT CAROUSEL 5', exato: '47 min · belt stopped 10:01 PM', ops: ['I waited for, like, forty-five minutes or something.', 'I waited forty-five minutes or something like.', 'I waited forty-five minutes and something.'], m: 'I waited for, [like], forty-five minutes [or something].' },
  { k: 'THE BAG', hora: '10:09 PM', campo: 'DESCRIPTION', exato: 'navy blue hard-shell · 28 in', ops: ['It’s kind of big, and it’s bluish.', 'It’s a kind of big.', 'It’s kind of a big.'], m: 'It’s [kind of] big, and it’s [bluish]. Dark blue, you know?' },
  { k: 'THE STICKERS', hora: '10:12 PM', campo: 'MARKS', exato: 'yellow ribbon · 3 stickers: whale, cactus, moon', ops: ['It’s got the yellow ribbon, and the stickers and stuff.', 'It’s got the yellow ribbon, and the stickers and stuffs.', 'It’s got the yellow ribbon, and the stickers and thing.'], m: 'It’s got the yellow ribbon, and the stickers [and stuff].' },
  { k: 'INSIDE', hora: '10:20 PM', campo: 'CONTENTS', exato: 'gray wool coat · running shoes · camera charger · 2 books', ops: ['My coat’s in there, my shoes, my charger and things like that.', 'My coat’s in there, my shoes, my charger and these things.', 'My coat’s in there, my shoes, my charger, something like.'], m: 'My coat’s in there, my shoes, my charger [and things like that].' },
  { k: 'HOW I FEEL', hora: '10:40 PM', campo: 'STATUS', exato: 'tired · cold · angry with the airline', ops: ['Honestly, I’m a bit tired and sort of annoyed.', 'Honestly, I’m a bit of tired.', 'Honestly, I’m kind of very annoyed.'], m: 'Honestly, I’m [a bit] tired and [sort of] annoyed.' }
];

/* V · a placa da regra (no canto) */
var PRESA_V = '<b>kind of / sort of</b> + adjective · no A<br><b>kind of a</b> + noun: kind of a mess<br><b>and stuff</b> · and things like that · or something (like that)<br><b>-ish</b> replaces o’clock<br><b>a bit</b> + adjective · <b>a bit of a</b> + noun';
var MEMO_DEP = ['When did your last trip start, roughly?', 'How long do you usually wait for a bus or a delivery?', 'Describe your own bag, vaguely.', 'What stickers do you have on your phone or laptop?', 'What is in your backpack right now?', 'How are you feeling today, honestly?'];
/* VI · adivinhar o que têm em comum (FM.revela) e achar a parte quebrada (FM.erro) */
var REVELA_V = { formato: 'revela', titulo: 'What do these lines have in common?', pistas: ['“It was kind of weird.”', '“My keys, my phone and stuff.”', '“See you at nine-ish.”', '“I’m a bit tired.”'],
  resposta: 'They are all SOFT: vague on purpose, for people you trust. For the desk, the exact version: 9:12 PM, 28 inches, about $400.', mais: 'Next line', botao: 'I know it! Show' };
var ERRO_V = [
  { f: 'It was <u>a kind of weird</u>.', r: 'kind of weird' },
  { f: 'My shoes, my coat and <u>stuffs</u>.', r: 'stuff' },
  { f: 'Call me at nine or <u>something like</u>.', r: 'something like that' },
  { f: 'Call me at <u>nine-ish o’clock</u>.', r: 'nine-ish' },
  { f: 'I’m <u>a bit of tired</u>.', r: 'a bit tired' }
];

/* a esteira: quem = DESK ou SISTER */
/* VII · a esteira: tocar a resposta e depois quem ouve (FM.separa) */
var SEPARA_EST = { formato: 'separa', titulo: 'Tap an answer, then the one who is listening.', caixas: ['THE DESK · exact', 'HER SISTER · casual'], itens: [
  { t: 'It landed at 9:12 PM, about forty minutes late.', c: 0 },
  { t: 'He’s kind of slow, but he’s sort of sweet.', c: 1 },
  { t: 'A navy blue hard-shell suitcase, 28 inches tall.', c: 0 },
  { t: 'Just my coat, my shoes, a charger and stuff.', c: 1 },
  { t: 'Approximately four hundred dollars.', c: 0 },
  { t: 'Tomorrow afternoon, two-ish, or something like that.', c: 1 }
] };

var REAL = [
  { k: 'THE WEEKEND', q: 'Tell me about your weekend, like a voice memo to a friend.', fup: 'Now the exact version: what time did you get up on Saturday?', st: ['It was kind of …', '… and stuff.'], ex: 'It was kind of quiet. I watched a series and stuff.' },
  { k: 'BEDTIME', q: 'What time do you usually go to bed?', fup: 'And last night, exactly?', st: ['…-ish.', '… or something.'], ex: 'Eleven-ish. Sometimes midnight or something.' },
  { k: 'SOMEONE', q: 'Describe a coworker or a neighbor, without a name.', fup: 'Now for a police report!', st: ['He’s …-ish, and kind of …'], ex: 'He’s tallish, forty-ish, and kind of funny.' },
  { k: 'YOUR BAG', q: 'What’s in your bag or your pockets right now?', fup: 'Now the exact list.', st: ['My keys, … and things like that.'], ex: 'My keys, my wallet, some gum and things like that.' },
  { k: 'TODAY', q: 'How do you feel today, honestly?', fup: 'Why?', st: ['A bit …, but sort of …'], ex: 'A bit tired, but sort of happy. It’s Friday.' },
  { k: 'THE DISH', q: 'Describe a dish from your city to a tourist.', fup: 'And the exact recipe?', st: ['It’s kind of like a …, a bit …'], ex: 'It’s kind of like a pie, a bit spicy, with cheese and stuff.' }
];

var IRMA = [
  { q: '“You sound terrible. What happened, from the start?”', fup: 'The sister says: “Oh no. Poor you. Forty-five minutes at the carousel?”', st: ['So, I landed at …-ish, and …'], ex: 'So, I landed at nine-ish, waited forever, and the bag just never came out.' },
  { q: '“Did they find it?”', fup: 'The sister says: “Tomorrow? Okay, that’s not so bad.”', st: ['Not yet. They said tomorrow, …-ish, or something.'], ex: 'Not yet. They said tomorrow, two-ish, or something like that.' },
  { q: '“What did you tell the guy at the desk? Word for word!”', fup: 'The sister says: “Wow. Very professional. You sound like Mom.”', st: ['Switch: the exact version.'], ex: 'A navy blue hard-shell suitcase, 28 inches, with a yellow ribbon on the handle.' },
  { q: '“Do you want me to bring you a coat tonight?”', fup: 'The sister says: “On my way. Twenty minutes-ish!”', st: ['Casual again: a bit …, sort of …'], ex: 'Yes, please. I’m a bit cold and sort of hungry too.' }
];

var S = { i: 0, faixa: 1, fala: {}, resp: {}, armas: {},
  voce: { sel: -1, foi: {} }, video: { p: 0, cap: 0, viu: {} }, re: { sel: -1, foi: {} }, ir: { n: 0, foi: {} } };

/* a onda da mensagem de voz: alturas fixas */
function onda(semente) {
  var b = '', v = semente * 7 + 3;
  for (var i = 0; i < 28; i++) { v = (v * 37 + 11) % 97; b += '<i style="height:' + (18 + (v % 70)) + '%"></i>'; }
  return '<div class="vg-onda">' + b + '</div>';
}
/* as duas telas: a mensagem (vaga, com halo) e a ficha (nítida) */
function duas(x, n, ok) {
  var memo = ok ? x.m.replace(/\[([^\]]+)\]/g, '<span class="vg-vago">$1</span>') : '<span class="vg-gravando">● recording…</span>';
  return '<div class="vg-telas vd"><div class="vg-memo' + (ok ? ' on' : '') + '"><small>VOICE MEMO TO HER SISTER · ' + x.hora + '</small>' + onda(n) + '<p>' + memo + '</p></div>'
    + '<div class="vg-ficha"><small>LOST BAGGAGE CLAIM · CAROUSEL 5</small><div class="vg-campo"><span>' + x.campo + '</span><b>' + x.exato + '</b></div></div></div>';
}
function esteira(n, quem) {
  var m = ''; for (var i = 0; i < 6; i++) m += '<i class="' + (i < n ? 'foi' : i === n ? 'agora ' + (quem === 'DESK' ? 'desk' : 'irma') : '') + '">' + (i === n ? '<em>' + quem + '</em>' : '') + '</i>';
  return '<div class="vg-esteira"><small>CAROUSEL 5 · ' + Math.min(n, 6) + ' / 6 SORTED</small><div class="vg-correia">' + m + '</div></div>';
}

var R = {};
R.capa = function () {
  return '<div class="capa"><div><span class="kick">MAIN SERIES · C1 · VAGUE LANGUAGE</span><h1>Kind Of, Sort Of, <b>and Stuff</b></h1>'
    + '<p class="sub">To her sister: <b>“It’s kind of big and bluish, with stickers and stuff.”</b> To the airline: “A navy blue hard-shell suitcase, 28 inches.” Same bag, two voices.</p>'
    + '<div class="chipsx"><span class="pilula">kind of</span><span class="pilula">-ish</span><span class="pilula">and stuff</span><span class="pilula">Live Class · W·O·L·F</span></div>'
    + '<button type="button" class="btn cheio" data-a="ir" data-n="1">Play the first memo</button>' + faixaLive() + '</div>'
    + '<div class="capa-r">' + duas(MEMOS[2], 2, 1) + '</div></div>';
};

R.voce = function (c) { return cartasPessoais(c, VOCE, S.voce, 'voce', ['Kind of …', '… or something.', 'Honestly …']); };

R.video = function (c) {
  var e = S.video, corpo;
  if (e.p === 0) corpo = '<div class="mesa-c"><div class="lado-l">' + FM.ex('va1', ANTES_REACAO) + FM.ex('va2', ANTES_REGUA) + '</div>'
    + '<div class="lado-l"><div class="selo-v vd"><b>SEALED</b><small>About six minutes, in four short chapters. It opens after your answers.</small></div><div><button type="button" class="btn cheio" data-a="vd-p" data-n="1">Watch, chapter by chapter</button></div></div></div>';
  else if (e.p === 1) {
    var k = CAPS[e.cap];
    corpo = '<div class="mesa-video"><div class="video-col">' + iframe(YT, 'Trick questions on the street', '&start=' + k.ini + '&end=' + k.fim) + '<small class="cred">Chapter ' + (e.cap + 1) + ' of 4 · it stops by itself · tap ▶ to hear a line again</small></div><div class="lado-video"><div class="caps">'
      + CAPS.map(function (x, i) { return '<button type="button" class="chip' + (e.cap === i ? ' on' : '') + (e.viu[i] ? ' feito' : '') + '" data-a="vd-c" data-n="' + i + '">' + x.k + '</button>'; }).join('') + '</div>'
      + FM.ex('vc' + e.cap, k.tarefa)
      + '<div>' + (e.cap < CAPS.length - 1 ? '<button type="button" class="btn" data-a="vd-c" data-n="' + (e.cap + 1) + '">Next chapter</button>' : '<button type="button" class="btn" data-a="vd-p" data-n="2">After the video</button>') + '</div></div></div>';
  } else corpo = '<div class="pd-um">' + FM.ex('vl', REGUA_DEPOIS) + '</div><p class="aprova" style="text-align:center">On the street, people are <b>kind of</b> sure, answer <b>or something</b>, and nobody minds. Now let’s use it.</p>';
  return cab(c) + '<div class="tres-tempos">' + tempos3(e.p) + '</div>' + corpo;
};

R.memos = function (c) {
  return cab(c) + FM.fala('mm', MEMOS.map(function (x, i) { return { pista: '<span class="ano">' + x.k + '</span>' + x.exato, resp: x.m.replace(/\[([^\]]+)\]/g, '<b>$1</b>'), depois: MEMO_DEP[i] }; }), {
    rotulo: 'Memo', prox: 'Next memo', regra: PRESA_V, diga: 'Say the memo to her sister',
    fim: 'Six memos sent. Her sister knows everything she needs. Why KIND OF BIG and not A KIND OF BIG? Why never STUFFS?',
    lado: function (feitas, atual, ver) { var i = atual < 0 ? MEMOS.length - 1 : atual; return duas(MEMOS[i], i, atual < 0 ? 1 : ver); } });
};

R.regra = function (c) {
  var feito = ((S.fq || {}).rv || {}).fim;
  return cab(c) + FM.ex('rv', REVELA_V)
    + (feito ? '<div style="height:18px"></div>' + FM.ex('rg', { formato: 'erro', titulo: 'Five lines are broken. Find the broken part. Say the fix.', itens: ERRO_V, regra: PRESA_V }) : '<p class="dica-aluno" style="text-align:center">Read the clues one by one. When you know, tap “I know it!”.</p>');
};

R.esteira = function (c) {
  var em = ((S.fq || {}).es || {}).em || {}, certos = SEPARA_EST.itens.filter(function (x, i) { return em[i] === x.c; }).length, todos = certos === SEPARA_EST.itens.length;
  return cab(c) + esteira(todos ? 6 : certos, '') + '<div class="foco">' + FM.ex('es', SEPARA_EST)
    + (todos ? '<div class="pergunta vd ja"><small>CAROUSEL 5 · AGAIN</small><h2>Now say each answer in the OTHER voice: the desk answer for her sister, the sister answer for the desk.</h2></div><p class="aprova" style="text-align:center">Tomorrow, two-ish, a navy blue suitcase with a whale on it comes home. Same night, two voices.</p>' : '<p class="dica-aluno" style="text-align:center">Who is listening: a form that needs the detail, or a sister?</p>') + '</div>';
};

R.real = function (c) { return cartasPessoais(c, REAL, S.re, 're', ['Kind of …', '…-ish.', 'A bit …']); };

R.irma = function (c) {
  return cab(c) + '<div class="vg-fone vd"><span class="vg-pulso"></span><b>INCOMING CALL · HER SISTER</b><small>HOTEL ROOM · 11:30 PM</small></div>'
    + sequencia({ est: 'o', rot: '', t: '', p: '' }, IRMA, S.ir, 'ir', 'The same night, two voices, and both of them sound right.').replace(/<div class="cab[\s\S]*?<\/p><\/div>/, '');
};

R.fim = function (c) {
  return cab(c) + '<div class="fim">' + escritaFinal('fim', (S.txt || {}).fim || '', (S.salvo || {}).fim, 'To a friend: …\nTo my boss: …', 'Two versions',
    ['kind of', 'sort of', '-ish', 'a bit', 'and stuff', 'or something like that'], ['TWO VERSIONS', 'One moment of your week: first a voice memo to a friend, then an email to your boss.'])
    + '<div class="lado-fim">' + duas(MEMOS[0], 0, 1)
    + '<div class="grande vd"><span><u>kind of / sort of</u> + adjective · kind of A + noun</span><span><u>and stuff · and things like that · or something</u> · close the list</span><span><u>-ish · a bit</u> · roughly right</span><span>not <s>a kind of weird</s>, not <s>and stuffs</s>, not <s>nine-ish o’clock</s>, not <s>a bit of tired</s>; vague is for friends</span></div>'
    + mostra('fim', 'To a friend: I left work at six-ish, kind of tired, and just ordered a pizza or something.<br>To my boss: I left the office at 6:05 PM after sending the final report.', 1)
    + '<p class="hw"><a class="pilula" href="HW/" target="_blank" rel="noopener">Homework for the student →</a></p></div></div>';
};

TOQUES['vd-p'] = function (b, n) { S.video.p = n; };
TOQUES['vd-c'] = function (b, n) { S.video.viu[S.video.cap] = 1; S.video.cap = n; };
