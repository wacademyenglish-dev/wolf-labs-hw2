/* ============================================================
   HOWEVER, DESPITE THE RAIN · THE TORN TICKET · LIVE CLASS  06/10/2026
   Main series B1 · but junta duas ideias · However, começa frase nova
   · although / even though + sujeito + verbo · despite / in spite of +
   substantivo ou -ing · although OU but, nunca os dois.
   Erros universais (a armadilha do português): "despite of the rain",
   "despite it was raining", "It rained, however we stayed", "Although
   it rained, but we danced", "in spite the mud".
   O MUNDO (da aula velha): sábado no Lanternfield, um festival de um
   dia; chuva desde as 16h, lama, a atração principal (The Northern Hum,
   banda fictícia) duas horas atrasada, queda de luz — e ninguém foi
   embora. O aluno é o crítico e a resenha fecha à meia-noite. Sem áudio.
   A CARA: o INGRESSO RASGADO — cada coisa é um ingresso picotado: a
   metade do que deu errado de um lado, a do que deu certo do outro; a
   palavra (despite / although / however) é a costura que junta as
   duas metades. No prazo, a coluna do jornal vai se enchendo enquanto
   o relógio anda até a meia-noite. Fila: FILA-LIVE-386.md · 088.
   ============================================================ */
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'voce', est: 'o', min: 7, img: 'pulseiras', rot: 'I · You and Big Nights Out', t: 'Before the festival: you, music and plans that go wrong.', p: 'Pick a card. Answer out loud. Then your teacher answers too.' },
  { k: 'mapa', est: 'o', min: 7, img: 'botas', rot: 'II · Eight Torn Tickets', t: 'Eight things went wrong, and something went right every time.', p: 'Pick a ticket. Join the bad half and the good half in ONE sentence, any way you like. Your teacher taps what you said.' },
  { k: 'gx', est: 'f', min: 4, img: 'palco', rot: 'III · The Stitch in Blocks', t: 'The same night, told in three ways.', p: 'Read the blocks out loud. Notice what changes. Then build a sentence and say your own.' },
  { k: 'regra', est: 'f', min: 6, img: 'palco', rot: 'IV · The Stitch', t: 'After the word: a clause, or a noun? That’s the whole question.', p: 'Read the three stitches out loud. Then fix the four traps.' },
  { k: 'prazo', est: 'o', min: 7, img: 'mesa', rot: 'V · The Midnight Deadline', t: 'The review is due at 12 AM. Eight lines. Each line has its own word.', p: 'Your teacher reads the notes. Say the line with the word on the ticket, at once.' },
  { k: 'rosa', est: 'o', min: 7, img: 'luzes', rot: 'VI · The Organizer Calls', t: 'Sunday morning. The organizer read your review, and she has questions.', p: 'Your teacher is Rosa. Answer with despite, although, even though, however.' },
  { k: 'quiz', est: 'f', min: 6, extra: 1, img: 'pulseiras', rot: 'VII · Quick Check', t: 'Six quick lines from the festival.', p: 'Say the whole sentence out loud. Then tap the word.' },
  { k: 'tudo', est: 'o', min: 7, extra: 1, img: 'palco', rot: 'VIII · Despite Everything', t: 'Your life: the good and the bad in one sentence.', p: 'Pick five cards. Answer with despite, in spite of, although, even though or however.' },
  { k: 'fim', est: 'w', min: 6, img: 'luzes', rot: 'IX · After the Festival', t: 'The field is empty, the lights are still on, and the review is out.', p: 'Write your own review of a night out: five stars or one? Use despite, although and however. It goes to your My notes.' }
];

var VOCE = [
  { k: 'Live music', q: 'What was the last concert or live show you went to?', fup: 'How was it?', st: ['I saw …'], ex: 'I saw a samba band in a small bar. It was amazing.' },
  { k: 'Festivals', q: 'Have you ever been to a music festival? Would you like to go?', fup: 'What was the worst part?', st: ['Yes, once. / No, but …'], ex: 'Yes, once. It was hot and crowded, but I loved it.' },
  { k: 'The weather', q: 'It’s raining on the day of a big plan. What do you do?', fup: 'Always?', st: ['I …'], ex: 'I go anyway. I just take an umbrella.' },
  { k: 'Went wrong', q: 'Tell me about a trip or a party where something went wrong.', fup: 'Was it still good?', st: ['We …, but …'], ex: 'We missed the bus, but we found a better place to eat.' },
  { k: 'Reviews', q: 'Do you read reviews before you buy a ticket, a meal or a trip?', fup: 'The good ones or the bad ones?', st: ['I …'], ex: 'Always! I read the bad ones first.' }
];

var BILHETES = [
  { k: 'RAIN', mal: 'The rain started at 4 PM and never stopped.', bem: 'Nobody went home.', ops: [['It rained all night, but nobody went home.', 'ok'], ['Despite of the rain, nobody went home.', 'of'], ['Despite it rained all night, nobody went home.', 'clause']] },
  { k: 'MUD', mal: 'The whole field turned into mud.', bem: 'People danced anyway.', ops: [['The field was all mud, but people danced anyway.', 'ok'], ['Although the field was all mud, but people danced.', 'dupla'], ['The field was all mud, however people danced.', 'how']] },
  { k: 'LATE', mal: 'The headliner was two hours late.', bem: 'They played for two hours.', ops: [['They were two hours late, but they played for two hours.', 'ok'], ['Despite they were late, they played for two hours.', 'clause'], ['In spite the delay, they played for two hours.', 'inspite']] },
  { k: 'POWER', mal: 'The power went out at 9 PM.', bem: 'The crowd kept singing in the dark.', ops: [['The power went out, but the crowd kept singing.', 'ok'], ['Although the power cut, the crowd kept singing.', 'cl2'], ['Despite of the power cut, the crowd kept singing.', 'of']] },
  { k: 'FOOD', mal: 'The taco truck sold out at 7 PM.', bem: 'A stranger shared a pizza with me.', ops: [['The tacos sold out, but a stranger shared a pizza with me.', 'ok'], ['The tacos sold out, however a stranger shared a pizza.', 'how'], ['Although the tacos sold out, but a stranger shared a pizza.', 'dupla']] },
  { k: 'LINES', mal: 'The line for the bathroom was forty minutes long.', bem: 'I made two new friends in that line.', ops: [['The line was forty minutes long, but I made two new friends.', 'ok'], ['Despite the line was long, I made two new friends.', 'clause'], ['Despite of the long line, I made two new friends.', 'of']] },
  { k: 'PRICE', mal: 'A ticket cost $120.', bem: 'It was worth every dollar.', ops: [['The ticket was expensive, but it was worth every dollar.', 'ok'], ['Despite expensive, it was worth every dollar.', 'adj'], ['The ticket was expensive, however it was worth it.', 'how']] },
  { k: 'FIREWORKS', mal: 'The fireworks were canceled because of the rain.', bem: 'The stage lights looked like fireworks in the rain.', ops: [['The fireworks were canceled, but the lights looked like fireworks.', 'ok'], ['In spite of the fireworks were canceled, the lights were beautiful.', 'clause'], ['Although the fireworks were canceled, but the lights were beautiful.', 'dupla']] }
];
var NAO = {
  of: 'despite: no of. (in spite of: always with of.)', clause: 'Subject + verb after it? although / even though. Or keep despite + a noun: despite the rain.',
  dupla: 'although OR but. Never both in one sentence.', how: 'However starts a NEW sentence: … . However, …', inspite: 'in spite OF: three words.',
  cl2: 'although / even though need subject + verb: although the power went out.', adj: 'despite + a noun or -ing: despite the price.', how2: 'However starts a new sentence, after a period.'
};

var PONTOS = [['+ SUBJECT + VERB', 'although it rained · even though they were late', 'cl'], ['+ NOUN OR -ING', 'despite the rain · in spite of being late', 'sn'], ['A NEW SENTENCE', 'It rained. However, nobody left.', 'nv']];
var ARMAS = [
  ['NO OF', 'Despite of the rain, we stayed.', 'Despite the rain, we stayed.', 'despite: no of. in spite of: always with of.'],
  ['NOUN OR CLAUSE?', 'Despite it was raining, we stayed.', 'Even though it was raining, we stayed.', 'Subject + verb after it? although / even though.'],
  ['ONE IS ENOUGH', 'Although it rained, but we danced.', 'Although it rained, we danced.', 'although or but. Never both.'],
  ['A NEW SENTENCE', 'It rained, however we stayed.', 'It rained. However, we stayed.', 'However starts a new sentence, with a comma after it.']
];

var PRAZO = [
  { k: 'DESPITE', nota: 'rain all day · 20,000 people came', ini: 'Despite the…', ops: [['Despite the rain, 20,000 people came.', 'ok'], ['Despite of the rain, 20,000 people came.', 'of'], ['Despite it rained all day, 20,000 people came.', 'clause']] },
  { k: 'HOWEVER', nota: 'the sound was bad at first · perfect by 8 PM', ini: 'The sound was bad at first. However,…', ops: [['The sound was bad at first. However, by 8 PM it was perfect.', 'ok'], ['The sound was bad at first, however by 8 PM it was perfect.', 'how'], ['However the sound was bad, by 8 PM it was perfect.', 'how2']] },
  { k: 'EVEN THOUGH', nota: 'the main band two hours late · nobody left', ini: 'Even though the headliner…', ops: [['Even though the headliner was two hours late, nobody left.', 'ok'], ['Even though the delay, nobody left.', 'cl2'], ['Even though they were late, but nobody left.', 'dupla']] },
  { k: 'IN SPITE OF + -ING', nota: 'the band was tired · 22 songs', ini: 'In spite of being…', ops: [['In spite of being tired, the band played 22 songs.', 'ok'], ['In spite of they were tired, the band played 22 songs.', 'clause'], ['In spite being tired, the band played 22 songs.', 'inspite']] },
  { k: 'ALTHOUGH', nota: 'the power went out · the crowd kept singing', ini: 'Although the power…', ops: [['Although the power went out, the crowd kept singing.', 'ok'], ['Although the power cut, the crowd kept singing.', 'cl2'], ['Despite the power went out, the crowd kept singing.', 'clause']] },
  { k: 'BUT', nota: 'the food was expensive · delicious', ini: 'The food was expensive,…', ops: [['The food was expensive, but it was delicious.', 'ok'], ['The food was expensive, however it was delicious.', 'how'], ['Despite expensive, the food was delicious.', 'adj']] },
  { k: 'DESPITE + -ING', nota: 'I lost my phone · the best night of the year', ini: 'Despite losing…', ops: [['Despite losing my phone, I had the best night of the year.', 'ok'], ['Despite I lost my phone, I had the best night of the year.', 'clause'], ['Despite of losing my phone, I had the best night.', 'of']] },
  { k: 'HOWEVER', nota: 'not a perfect festival · I’d go again tomorrow', ini: 'It wasn’t a perfect festival. However,…', ops: [['It wasn’t a perfect festival. However, I’d go again tomorrow.', 'ok'], ['It wasn’t perfect, however I’d go again tomorrow.', 'how'], ['Although it wasn’t perfect, but I’d go again.', 'dupla']] }
];

var ROSA = [
  { ela: 'Hi, it’s Rosa from Lanternfield. I read your review. Be honest: was the rain a disaster?', voce: 'Despite the rain, … / It rained a lot. However, …', resp: 'Thank you. I cried a little at 4 PM, to be honest.' },
  { ela: 'Some people say the tickets were too expensive. What do you think?', voce: 'Although the tickets were …, …', resp: 'Fair. We’re thinking about a cheaper ticket for students.' },
  { ela: 'The power cut was my worst moment. Did people really stay?', voce: 'Yes! Even though it was dark, …', resp: 'I heard them singing from the office. It was beautiful.' },
  { ela: 'So… should we do it again next year, in spite of everything?', voce: 'In spite of the mud, … / Yes. However, you need …', resp: 'More bathrooms. I know! Thank you. See you next year.' }
];

var QUIZ = [
  { f: '___ the rain, we stayed until the end.', op: ['Despite', 'Although', 'However'], nao: 'A noun after it (the rain): Despite.' },
  { f: '___ it was cold, we danced all night.', op: ['Even though', 'Despite', 'In spite of'], nao: 'Subject + verb (it was): Even though.' },
  { f: 'The show started late. ___, it was amazing.', op: ['However', 'Although', 'Despite'], nao: 'A new sentence with a comma: However,' },
  { f: 'In spite ___ the mud, 20,000 people came.', op: ['of', 'from', 'to'], nao: 'in spite of: three words.' },
  { f: 'Despite ___ tired, they played for two hours.', op: ['being', 'they were', 'be'], nao: 'After despite: a noun or -ing.' },
  { f: 'We’ll go again next year ___ it rains.', op: ['even if', 'even though', 'despite'], nao: 'Maybe it rains, maybe not: even if. (It rained, a fact: even though.)' }
];

var TUDO = [
  { k: 'A bad start', q: 'Tell me about a day that started badly but ended well.', fup: 'What changed?', st: ['Although …, …'], ex: 'Although the morning was terrible, the night was great.' },
  { k: 'The weather', q: 'What do you always do, despite the weather?', fup: 'Even in a storm?', st: ['I … despite the …'], ex: 'I walk my dog despite the rain.' },
  { k: 'Every week', q: 'What do you do every week even though you don’t like it?', fup: 'Why?', st: ['I … even though …'], ex: 'I go to the gym even though I hate it.' },
  { k: 'Worth it', q: 'What was expensive but worth it?', fup: 'Would you buy it again?', st: ['… was expensive. However, …'], ex: 'My guitar was expensive. However, I play it every day.' },
  { k: 'Tired', q: 'What did you do recently in spite of being tired?', fup: 'Was it a good idea?', st: ['In spite of being tired, I …'], ex: 'In spite of being tired, I went to my friend’s party.' },
  { k: 'Food', q: 'What food do you eat although you know it isn’t healthy?', fup: 'How often?', st: ['I eat … although …'], ex: 'I eat fries although I know they aren’t healthy.' },
  { k: 'A trip', q: 'Tell me about a trip with a problem that was still great.', fup: 'Would you go back?', st: ['Despite …-ing, I …'], ex: 'Despite losing my bag, I loved that trip.' },
  { k: 'Your city', q: 'What do you love about your city, despite its problems?', fup: 'And what would you change?', st: ['Despite the …, I love …'], ex: 'Despite the traffic, I love the food and the people.' }
];

var S = { i: 0, faixa: 1, fala: {}, resp: {}, armas: {},
  voce: { sel: -1, foi: {} }, mp: { sel: 0, esc: {} }, pz: { n: 0, esc: '' }, ro: { n: 0 }, qz: { n: 0, esc: -1 }, tudo: { sel: -1, foi: {} } };

function ingresso(mal, bem, palavra, junto, k) {
  return '<div class="ingresso' + (junto ? ' junto' : '') + '"><div class="meia mal"><small>' + (k || 'WHAT WENT WRONG') + '</small><p>' + mal + '</p></div><div class="costura"><span>' + (palavra || '?') + '</span></div><div class="meia bem"><small>WHAT WENT RIGHT</small><p>' + bem + '</p></div></div>';
}
function jornal(linhas, hora) {
  return '<div class="jornal"><div class="cab-j"><b>THE LANTERNFIELD REVIEW</b><span>' + hora + '</span></div><div class="estrelas-j">★★★★☆</div><div class="col-j">' + (linhas.length ? linhas.map(function (l, i) { return '<p' + (i === linhas.length - 1 ? ' class="nova"' : '') + '>' + l + '</p>'; }).join('') : '<p class="vazia">The page is still empty…</p>') + '</div></div>';
}

var R = {};
R.capa = function () {
  return '<div class="capa"><div class="lado-a"><span class="kick">MAIN SERIES · B1 · THE LANTERNFIELD REVIEW</span><h1>However, <b>Despite the Rain</b></h1>'
    + '<p class="sub">Rain, mud, a late band and a power cut. <b>Despite</b> all that, nobody went home. <b>However</b>, the review is due at midnight.</p>'
    + '<div class="chipsx"><span class="pilula">despite the rain</span><span class="pilula">although it rained</span><span class="pilula">It rained. However, …</span><span class="pilula">Live Class · W·O·L·F</span></div>'
    + '<button type="button" class="btn cheio" data-a="ir" data-n="1">Enter the festival</button>' + faixaLive() + '</div>'
    + '<div class="capa-d">' + ingresso('The rain started at 4 PM and never stopped.', 'Nobody went home.', 'DESPITE', 1, 'RAIN') + '</div></div>';
};

R.voce = function (c) { return cartasPessoais(c, VOCE, S.voce, 'voce'); };

R.mapa = function (c) {
  var e = S.mp, x = BILHETES[e.sel], esc = e.esc[e.sel], ok = esc === 'ok', feitos = BILHETES.filter(function (b, i) { return e.esc[i] === 'ok'; }).length;
  return cab(c) + '<div class="mesa-c"><div class="lado-l"><div class="pulseiras">' + BILHETES.map(function (b, i) { return '<button type="button" class="pulseira' + (e.sel === i ? ' on' : '') + (e.esc[i] === 'ok' ? ' feita' : '') + '" data-a="mp" data-n="' + i + '">' + b.k + '</button>'; }).join('') + '</div>' + ingresso(x.mal, x.bem, ok ? 'BUT' : '', ok, x.k) + '</div>'
    + '<div class="lado-l">' + (ok ? '<div class="balao vd ok-b"><p>' + x.ops[0][0] + '</p></div><p class="aprova">Joined. Most people say but, and that’s fine for now.</p>' : '<h5 class="so-prof rot-ouve">TAP THE VERSION YOU HEARD</h5><div class="versoes">' + ordem(x.ops, e.sel + 2).map(function (o) { return '<button type="button" class="versao' + (esc === o[1] ? ' errado' : '') + '" data-a="mp-v" data-v="' + o[1] + '">' + o[0] + '</button>'; }).join('') + '</div>' + (esc ? '<p class="recusa">' + NAO[esc] + '</p>' : ''))
    + (feitos >= 8 ? '<p class="aprova">Eight tickets, almost all joined with but. A critic has four more stitches. Let’s look at them.</p>' : '<p class="dica-aluno">' + feitos + ' of 8 joined.</p>') + '</div></div>';
};

R.regra = function (c) {
  return cab(c) + '<div class="pontos">' + PONTOS.map(function (p) { return '<div class="ponto ' + p[2] + '"><small>' + p[0] + '</small><b>' + p[1] + '</b></div>'; }).join('') + '</div>' + armas(ARMAS, 'THE TRAPS · SAY IT RIGHT, THEN TAP');
};

R.prazo = function (c) {
  var e = S.pz, n = e.n, linhas = PRAZO.slice(0, n).map(function (p) { return p.ops[0][0]; }), fim = n >= PRAZO.length;
  var hora = '11:' + (40 + Math.min(n, 8) * 2 + (fim ? 3 : 0)) + ' PM';
  if (fim) return cab(c) + trilha(PRAZO, n) + '<div class="mesa-c"><div class="lado-l">' + jornal(linhas, '11:59 PM · SENT') + '</div><div class="lado-l"><div class="pergunta vd"><small>11:59 PM</small><h2>Eight lines, one review, sent. Four and a half stars, despite the mud.</h2></div></div></div>';
  var x = PRAZO[n], esc = e.esc, ok = esc === 'ok';
  if (ok) linhas.push(x.ops[0][0]);
  return cab(c) + trilha(PRAZO, n) + '<div class="mesa-c"><div class="lado-l">' + jornal(linhas, hora) + '<div class="pulseira-g"><small>THE WORD ON THIS TICKET</small><b>' + x.k + '</b></div></div>'
    + '<div class="lado-l"><div class="pede vd"><small>THE NOTES</small><b>' + x.nota + '</b><span class="ini">' + x.ini + '</span></div>'
    + (ok ? '<div><button type="button" class="btn" data-a="pz-prox">Next line</button></div>' : '<h5 class="so-prof rot-ouve">TAP THE VERSION YOU HEARD</h5><div class="versoes">' + ordem(x.ops, n + 5).map(function (o) { return '<button type="button" class="versao' + (esc === o[1] ? ' errado' : '') + '" data-a="pz" data-v="' + o[1] + '">' + o[0] + '</button>'; }).join('') + '</div>' + (esc ? '<p class="recusa">' + NAO[esc] + '</p>' : '')) + '</div></div>';
};

R.rosa = function (c) {
  var e = S.ro, n = Math.min(e.n, ROSA.length - 1), x = ROSA[n];
  return cab(c) + trilha(ROSA, e.n) + '<div class="mesa-c"><div class="lado-l"><div class="aberta vd" style="background-image:url(' + img('luzes') + ')"><span>ROSA · LANTERNFIELD ORGANIZER</span></div></div>'
    + '<div class="lado-l"><div class="pede vd"><small>ROSA</small><b>“' + x.ela + '”</b></div>' + fala('ro' + n, [x.voce], ['despite', 'although', 'even though', 'However,', 'in spite of']) + '<p class="so-prof dica-aluno">Rosa answers: “' + x.resp + '”</p>'
    + (n < ROSA.length - 1 ? '<div><button type="button" class="btn" data-a="ro-prox">Next</button></div>' : '<p class="aprova">Rosa is already planning next year.</p>') + '</div></div>';
};

R.quiz = function (c) {
  var e = S.qz, n = e.n, fim = n >= QUIZ.length;
  if (fim) return cab(c) + trilha(QUIZ, n) + '<div class="foco"><div class="pergunta vd"><small>SIX OF SIX</small><h2>Clause: although, even though. Noun or -ing: despite, in spite of. New sentence: However.</h2></div></div>';
  var x = QUIZ[n], ok = e.esc === 0;
  return cab(c) + trilha(QUIZ, n) + '<div class="foco"><div class="balao vd"><p>' + x.f.replace('___', ok ? '<u>' + x.op[0] + '</u>' : '<span class="lacuna-q">___</span>') + '</p></div><div class="tres-b centro">'
    + ordem(x.op.map(function (o, i) { return [o, i]; }), n + 4).map(function (o) { return '<button type="button" class="pilula grande-p' + (e.esc === o[1] ? (o[1] === 0 ? ' certo' : ' errado') : '') + '" data-a="qz" data-n="' + o[1] + '">' + o[0] + '</button>'; }).join('') + '</div>'
    + (ok ? '<div style="text-align:center"><button type="button" class="btn" data-a="qz-prox">Next</button></div>' : e.esc > 0 ? '<p class="recusa" style="text-align:center">' + x.nao + '</p>' : '') + '</div>';
};

R.tudo = function (c) { return cartasPessoais(c, TUDO, S.tudo, 'tudo'); };

R.fim = function (c) {
  return cab(c) + '<div class="fim">' + escritaFinal('fim', (S.txt || {}).fim || '', (S.salvo || {}).fim, 'Despite the …, …\nAlthough …, …\n… . However, …', 'Your review',
    ['Despite the ', 'In spite of ', 'Although ', 'Even though ', '. However, '], ['WAS IT WORTH IT, DESPITE EVERYTHING?', 'Your own review of a night out. Five stars or one? Explain with despite, although and however.'])
    + '<div class="lado-fim">' + ingresso('the rain, the mud, the late band', 'we stayed', 'DESPITE', 1, 'LANTERNFIELD') + '<div class="grande vd"><span><u>despite</u> the rain · <u>in spite of</u> being late</span><span><u>although</u> it rained · <u>even though</u> they were late</span><span>It rained. <u>However,</u> we stayed.</span></div>'
    + mostra('fim', 'Despite the rain, it was the best concert of my life.<br>Although the tickets were expensive, every song was worth it.<br>The bus home was two hours late. However, I was still singing.', 1)
    + '<p class="hw"><a class="pilula" href="HW/" target="_blank" rel="noopener">Homework for the student →</a></p></div></div>';
};

TOQUES.mp = function (b, n) { S.mp.sel = n; };
TOQUES['mp-v'] = function (b, n, v) { S.mp.esc[S.mp.sel] = v; };
TOQUES.pz = function (b, n, v) { S.pz.esc = v; };
TOQUES['pz-prox'] = function () { S.pz = { n: S.pz.n + 1, esc: '' }; };
TOQUES['ro-prox'] = function () { S.ro.n++; };
TOQUES.qz = function (b, n) { S.qz.esc = n; };
TOQUES['qz-prox'] = function () { S.qz = { n: S.qz.n + 1, esc: -1 }; };

/* 10/11/2026 · AS EXPLICAÇÕES (kit/formatos3.js) · G1 · uma cena curta nova (k: gx) antes de regra.
   Explicação 100% em inglês: see → notice → use (o aluno fala ou escreve uma frase dele no fim). */
var GX_EXPLICA = { formato: 'blocos', titulo: 'The rainy festival, in blocks. Each block has a job.',
  frases: [
    { b: [['Although', 'LINK', 'aux'], ['it rained', 'A WHOLE SENTENCE', 'quem'], ['the fans stayed', 'RESULT', 'acao']], d: 'Although opens a whole sentence: it rained.' },
    { b: [['Despite', 'LINK', 'aux'], ['the rain', 'A NOUN', 'o'], ['the fans stayed', 'RESULT', 'acao']], d: 'Despite opens a noun: the rain.' },
    { b: [['Despite', 'LINK', 'aux'], ['waiting in the mud', '-ING', 'como'], ['the fans sang', 'RESULT', 'acao']], d: 'Despite can also open an -ing.' }
  ],
  nota: 'After <b>although</b> or <b>even though</b>: a whole sentence (who + verb). After <b>despite</b> or <b>in spite of</b>: a noun or an -ing. Never “despite of”, and never although + but.',
  monta: { p: 'Build the next line from the festival. Then say it.', pecas: [['the lights went out', 'A WHOLE SENTENCE', 'quem'], ['Although', 'LINK', 'aux'], ['everybody kept dancing', 'RESULT', 'acao']], ordem: [1, 0, 2], outras: [[2, 1, 0]] },
  uso: { p: 'Your turn. A night out that went wrong, but you stayed. Say two sentences: one with although, one with despite.', molde: ['Although …, …', 'Despite …, …'], ex: 'Although it was cold, we stayed until midnight. Despite the long line, we got in.' },
  prof: 'Read the blocks with the student, top to bottom: the word on top, its job under it. Point at what comes after the link.' };
R.gx = function (c) { return cab(c) + FM.ex('gx_blocos', GX_EXPLICA); };
