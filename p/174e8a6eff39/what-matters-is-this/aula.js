/* ============================================================
   WHAT MATTERS IS THIS · ONE LIGHT · LIVE CLASS  06/10/2026
   Main series C1 · clivadas e ênfase na persuasão: what-cleft (What
   matters is…), it-cleft (It isn't X that… It's Y), All I'm asking
   is…, The thing is…, The reason… is that…, do/did enfático + verbo
   base, a pausa retórica (— and this is what matters —). Inversão só
   como revisão (uma linha).
   Erros: The important is · Is the kids that (sem it) · all what · the
   reason is because · the reason of · this is what that matters · did
   tried · ALL … IT'S.
   O MUNDO (da aula velha): a Noite dos Pitches num teatro pequeno, 60
   segundos sob um holofote; a palestra de um professor e poeta sobre o
   perigo do silêncio (NiKtZgImdlY) SELADA em quatro capítulos, PULANDO
   3:06–3:25 de propósito (imagens violentas); o rascunho da Rosa para o
   ônibus-biblioteca; o pitch do aluno. Sem nome do palestrante, do
   evento ou do líder citado na tela.
   A CARA (nova; a velha eram cartões em arco + relógio; e a 147 já é o
   palco que desenha formas): UM HOLOFOTE SÓ. A frase chata fica no
   escuro, com a luz difusa; quando a clivada sai certa, um único cone
   de tungstênio atravessa a frase e para na palavra que importa. Na
   cena dos 60 segundos, as fileiras da plateia acendem uma a uma.
   Tudo o mais é quieto: azul-plateia, cinza, Gloock nos títulos,
   rótulos em caixa normal.
   Fila: FILA-LIVE-386.md · 150. Pasta piloto-matters (conferida).
   22/10/2026 · OS FORMATOS NOVOS (kit/formatos.js), mesmas 10 páginas:
   nada de escolher entre três frases quase iguais (eram 14 rodadas).
   III cada capítulo tem uma tarefa de toque ANTES do play, com ▶ no
   minuto (nunca 3:06–3:25); depois, qual palavra você ouviu + duas
   clivadas faladas. V o desmonte em fala primeiro + Check (o holofote
   acende no Check). VI o rascunho final da Rosa (carta → regra). VII
   seis oradores, fala primeiro. VIII deixa de ser extra.
   ============================================================ */
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'voce', est: 'o', min: 7, img: 'bastidor', rot: 'I · Your Voice', t: 'Backstage, before the show: you and your voice.', p: 'Tap a card. The student answers; then the teacher answers too.' },
  { k: 'palavras', est: 'l', img: 'plateia', rot: 'II · The Words', t: 'Five words from the video.', p: 'Learn the words before you watch. Then listen for them: they turn yellow in the video.' },
  { k: 'video', est: 'l', min: 10, img: 'plateia', rot: 'III · The Talk', t: 'A teacher and poet on stage: the danger of silence.', p: 'Answer first. Then four short chapters: read the task before you play, tap the answer. Tap ▶ to hear a moment again.' },
  { k: 'falas', est: 'l', extra: 1, img: 'plateia', rot: 'IV · Line by Line', t: 'Every line of the video, one by one.', p: 'Tap a line. Hear it again. The lines with yellow words open the explanation.' },
  { k: 'desmonte', est: 'o', extra: 1, min: 7, img: 'microfone', rot: 'V · The Teardown', t: 'Rosa runs a library on wheels. Her pitch is true, but it’s flat.', p: 'Read Rosa’s flat line. Say it again out loud with the frame, the light on the right words. Then tap Check.' },
  { k: 'gx', est: 'f', min: 4, img: 'roteiro', rot: 'VI · The Flip', t: 'Watch the idea move to the end.', p: 'Flip each flat sentence. Notice where the big idea lands. Then flip four on your own.' },
  { k: 'regra', est: 'f', min: 6, img: 'roteiro', rot: 'VII · Rosa’s Final Draft', t: 'The night of the show. Every frame holds the idea back, then lands on it.', p: 'Read Rosa’s pitch out loud. Tap the six frames. Then finish the rule.' },
  { k: 'sessenta', est: 'o', min: 7, img: 'holofote', rot: 'VIII · Sixty Seconds', t: 'Six speakers, six flat lines. Fix each one in one breath.', p: 'Read the flat line. The student says it again at once with the frame, then taps Check.' },
  { k: 'pitch', est: 'o', min: 7, img: 'microfone', rot: 'IX · Your Sixty Seconds', t: 'Your turn under the light. Pick a real cause: something your town, school or company should fund, fix or save.', p: 'Build it beat by beat. Then the whole pitch, in under sixty seconds.' },
  { k: 'fim', est: 'w', min: 6, img: 'cortina', rot: 'X · The Ghost Light', t: 'What is one thing you would never stay silent about?', p: 'Write your pitch. It goes to your My notes.' }
];

var YT = 'NiKtZgImdlY';

var VOCE = [
  { k: 'The stage', q: 'Have you ever spoken in front of a crowd? What was it, and how did your body feel?', fup: 'Would you do it again?', st: ['Yes, at …'], ex: 'Yes, at my sister’s wedding. My hands were shaking the whole time.' },
  { k: 'The persuader', q: 'Who is the most persuasive person you know? What do they do that works?', fup: 'Could you do the same?', st: ['My … She / He …'], ex: 'My boss. She never raises her voice. She just asks the right question.' },
  { k: 'The meeting', q: 'In meetings, do you speak up, or do you wait for someone else to say it?', fup: 'What stops you?', st: ['I usually …'], ex: 'I usually wait, and then I regret it.' },
  { k: 'The ad', q: 'What ad, video or speech made you change your mind about something?', fup: 'What exactly worked?', st: ['A video about …'], ex: 'A video about plastic in the ocean. I stopped buying water bottles.' },
  { k: 'One minute on TV', q: 'If you had one minute on national TV, what would you talk about?', fup: 'Why that?', st: ['… Teachers / Hospitals / …'], ex: 'Public schools. Teachers need better pay.' }
];

var ANTES = [
  { q: 'The talk is called “The danger of silence”. How can silence be dangerous? Guess.', h: 'Maybe when you see something wrong and say nothing.' },
  { q: 'He is a teacher. What do you think a teacher asks students to do in a poetry class?', h: 'To write about their own lives, maybe.' }
];
var CAPS = [
  { k: 'The quote', ini: 12, fim: 77, itens: [
    { p: 'Whose words open the talk?', tm: '0:13', o: ['A civil rights leader’s', 'His mother’s', 'A student’s'], c: 0 },
    { p: 'In the end, what will we remember?', tm: '0:20', o: ['The words of our enemies', 'The silence of our friends'], c: 1 },
    { p: 'The four rules on his board end with…', tm: '1:08', o: ['“Tell your truth.”', '“Be quiet.”', '“Work hard.”'], c: 0 }
  ] },
  { k: 'Giving something up', ini: 77, fim: 123, itens: [
    { p: 'One year, during Lent, what did he give up?', tm: '1:50', o: ['Soda', 'Speaking', 'French fries'], c: 1 },
    { p: 'What did he realize?', tm: '1:57', o: ['He gave up his voice a long time ago.', 'Silence is easy.', 'His students talk too much.'], c: 0 }
  ] },
  { k: 'The silences', ini: 123, fim: 186, itens: [
    { p: 'The woman at the gala called his students…', tm: '2:43', o: ['brilliant', '“poor, unintelligent kids”', 'lions'], c: 1 },
    { p: 'Why did he bite his lip?', tm: '2:49', o: ['The school needed her money.', 'He was afraid of her.', 'He agreed with her.'], c: 0, d: 'Her money mattered more than his students’ dignity.' }
  ] },
  { k: 'The promise', ini: 205, fim: 253, itens: [
    { p: 'This year, instead of giving something up, he will…', tm: '3:53', o: ['stay silent', 'speak up every day', 'leave the school'], c: 1 },
    { p: 'He will live as if there were a … under his tongue.', tm: '3:57', o: ['microphone', 'secret', 'stone'], c: 0 }
  ] }
];
/* depois: qual palavra você ouviu (três linhas são clivadas com ALL) + duas clivadas faladas */
var SOM = [
  { a: 'In the end, we will remember not the words of our enemies, but the ', par: ['silence', 'science'], c: 0, b: ' of our friends.', t: '0:20' },
  { a: 'The most valuable thing I could sacrifice was my own ', par: ['choice', 'voice'], c: 1, b: '.', t: '1:54' },
  { a: 'Sometimes all people want to be is ', par: ['human', 'heard'], c: 0, b: '.', t: '3:39' },
  { a: 'Who has to have a soapbox, when all you’ve ever needed is your ', par: ['vote', 'voice'], c: 1, b: '?', t: '4:03' }
];
var DEPOIS = [
  { pista: '“We will remember the silence of our friends.”<br>Start with: <b>What we will remember is…</b>', resp: '<b>What we will remember is</b> the silence of our friends.' },
  { pista: '“He gave up his voice a long time ago.”<br>Start with: <b>It was his voice that…</b>', resp: '<b>It was his voice that</b> he gave up a long time ago.' }
];

/* plano = a linha chata; ok = a clivada, com [[ ]] na palavra que leva a luz */
var DESMONTE = [
  { k: 'The hook', plano: 'The kids matter most. Not the bus.', ok: 'What matters is [[the kids]], not the bus.' },
  { k: 'The hero', plano: 'The bus doesn’t change lives. Mr. Okafor, the driver, changes lives.', ok: 'It isn’t the bus that changes lives. It’s [[the driver]].' },
  { k: 'The proof', plano: 'People say it failed. It worked: 900 kids got library cards last year.', ok: 'People say it failed. It [[did work]]: 900 kids got library cards.' },
  { k: 'The reason', plano: 'Why do we need it? Most families here don’t live near a library.', ok: 'The reason we need it is that [[most families live far from a library]].' },
  { k: 'The pause', plano: 'Books are cheap. Time with someone who reads to you is not cheap. That’s the important part.', ok: 'Books are cheap. But time with someone who reads to you — [[and this is what matters]] — is not.' },
  { k: 'The ask', plano: 'I only want one thing from you tonight: one more year for the bus.', ok: 'All I’m asking for tonight is [[one more year]].' }
];

/* VI · o rascunho final da Rosa (texto nosso) → a regra */
var CARTA = { de: 'Rosa · Pitch Night · final draft',
  txt: 'Good evening. [[What matters is]] the kids, not the bus. [[It isn’t the bus that]] changes lives. [[It’s the driver]], Mr. Okafor. People say the project failed. It [[did work]]: 900 kids got library cards last year. [[The reason we need it is that]] most families here live far from a library. Books are cheap. But time with someone who reads to you is not. [[All I’m asking for tonight is]] one more year.',
  assina: 'Rosa' };
var REGRA = [
  { a: 'The what-cleft: ', par: ['What matters is', 'The important is'], c: 0, b: ' the kids. An adjective can’t be the subject.' },
  { a: 'The it-cleft: ', par: ['It isn’t', 'Isn’t'], c: 0, b: ' the bus that changes lives. Keep the IT.' },
  { a: 'Only this: ', par: ['All I’m asking is', 'All what I’m asking is'], c: 0, b: ' one more year.' },
  { a: 'The reason we need it is ', par: ['that', 'because'], c: 0, b: ' most families live far away.' },
  { a: 'Extra weight: it did ', par: ['work', 'worked'], c: 0, b: '. DID + the base verb.' }
];
var PRESA = '<b>What</b> matters <b>is</b> …<br><b>It</b> isn’t X <b>that</b> … It’s Y<br><b>All</b> I’m asking <b>is</b> …<br>The reason … is <b>that</b> …<br>We <b>did</b> try.<br>— and this is what matters —';

var SESSENTA = [
  { plano: 'I want to say one thing: this park belongs to all of us.', frame: 'What I want to say is…', ok: 'What I want to say is that [[this park belongs to all of us]].' },
  { plano: 'The bars don’t keep people awake. The trucks keep people awake.', frame: 'It isn’t … that … It’s …', ok: 'It isn’t the bars that keep people awake. It’s [[the trucks]].' },
  { plano: 'We only need two more volunteers on Saturdays.', frame: 'All we need is…', ok: 'All we need is [[two more volunteers]] on Saturdays.' },
  { plano: 'Here’s the problem: nobody reads the school emails.', frame: 'The thing is, …', ok: 'The thing is, [[nobody reads the school emails]].' },
  { plano: 'Why are young people leaving? Because the rent is too high.', frame: 'The reason … is that …', ok: 'The reason young people are leaving is that [[the rent is too high]].' },
  { plano: 'The Sunday market brings people together. That is the important part.', frame: '— and this is what matters —', ok: 'The Sunday market — [[and this is what matters]] — brings people together.' }
];

var PITCH = [
  { q: 'The hook. What is your cause? Start with “What worries me is…” or “What I want to talk about is…”.', fup: 'Say it again, slower, with the stress at the end.', st: ['What worries me is that …'], ex: 'What worries me is that our street has no light at night.' },
  { q: 'The turn. What do people blame, and what is the real problem?', fup: 'Stress the second part.', st: ['It isn’t … that … It’s …'], ex: 'It isn’t the crime that scares people. It’s the dark.' },
  { q: 'The reason. Why now? Then one line with DO or DID.', fup: 'Say the DID strongly.', st: ['The reason … is that … And we did …'], ex: 'The reason it matters now is that the school opens there in March. And we did ask the city, twice.' },
  { q: 'The ask. What exactly do you want from the audience?', fup: 'One thing only.', st: ['All I’m asking is …'], ex: 'All I’m asking is six street lights. That’s it.' },
  { q: 'Now the whole pitch, under sixty seconds. Add one pause: “— and this is what matters —”.', fup: 'The teacher times it. Then plays a tough audience: “Why should we pay for that?”', st: ['What … It isn’t … The reason … All I’m asking …'], ex: 'What worries me is… It isn’t… It’s… The reason… is that… All I’m asking is…' }
];

var S = { i: 0, faixa: 1, fala: {}, resp: {}, armas: {},
  voce: { sel: -1, foi: {} }, video: { p: 0, cap: 0, viu: {} }, pi: { n: 0, foi: {} } };

/* o holofote: a frase chata no escuro, a clivada com um cone só sobre a palavra que importa */
function palco(plano, ok, aceso) {
  if (!aceso) return '<div class="wm-palco escuro vd"><p class="wm-plano">' + plano + '</p></div>';
  var html = ok.replace(/\[\[([^\]]+)\]\]/, '<span class="wm-alvo"><i class="wm-cone" aria-hidden="true"></i>$1</span>');
  return '<div class="wm-palco vd"><p class="wm-plano velho">' + plano + '</p><p class="wm-clivada">' + html + '</p></div>';
}
/* a plateia: oito fileiras que acendem */
function plateia(n, total) {
  if (total) n = Math.round(n * 8 / total);
  var f = ''; for (var i = 0; i < 8; i++) f += '<i class="' + (i < n ? 'on' : '') + '" style="--r:' + i + '"></i>';
  return '<div class="wm-plateia" aria-label="' + n + ' of 8 rows lit"><div>' + f + '</div><p>' + (n >= 8 ? 'The whole house is listening.' : n + ' of 8 rows are with you') + '</p></div>';
}
function luz(s) { return s.replace(/\[\[([^\]]+)\]\]/, '<b>$1</b>'); }

var R = {};
R.capa = function () {
  return '<div class="capa"><div><span class="kick">MAIN SERIES · C1 · CLEFTS AND EMPHASIS</span><h1>What Matters Is This</h1>'
    + '<p class="sub">Sixty seconds, one spotlight. Good speakers don’t say more; they move the light onto one idea, and they make you wait for it.</p>'
    + '<div class="chipsx"><span class="pilula">What matters is…</span><span class="pilula">It’s … that …</span><span class="pilula">All I’m asking is…</span><span class="pilula">Live Class · W·O·L·F</span></div>'
    + '<button type="button" class="btn cheio" data-a="ir" data-n="1">Step into the light</button>' + faixaLive() + '</div>'
    + '<div class="capa-r">' + palco('The kids matter most. Not the bus.', DESMONTE[0].ok, 1) + '</div></div>';
};

R.voce = function (c) { return cartasPessoais(c, VOCE, S.voce, 'voce', ['The thing is, …', 'What I hate is …', 'Honestly, …']); };

R.video = function (c) {
  var e = S.video, corpo;
  if (e.p === 0) corpo = '<div class="mesa-c"><div class="lado-l">' + ANTES.map(function (a, i) { return '<div class="pergunta vd ja"><small>Before you watch · ' + (i + 1) + '</small><h2>' + a.q + '</h2></div>' + mostra('va' + i, a.h, 1); }).join('') + '</div>'
    + '<div class="lado-l"><div class="selo-v vd"><b>Sealed</b><small>About four minutes, in four short chapters. It opens after your answers.</small></div><div><button type="button" class="btn cheio" data-a="vd-p" data-n="1">Watch, chapter by chapter</button></div></div></div>';
  else if (e.p === 1) {
    var k = CAPS[e.cap];
    corpo = '<div class="mesa-video"><div class="video-col">' + iframe(YT, 'The danger of silence', '&start=' + k.ini + '&end=' + k.fim) + '<small class="cred">Chapter ' + (e.cap + 1) + ' of 4 · it stops by itself</small></div><div class="lado-video"><div class="caps">'
      + CAPS.map(function (x, i) { return '<button type="button" class="chip' + (e.cap === i ? ' on' : '') + (e.viu[i] ? ' feito' : '') + '" data-a="vd-c" data-n="' + i + '">' + x.k + '</button>'; }).join('') + '</div>'
      + FM.ex('cap' + e.cap, { formato: 'escolhe', titulo: k.k + ': read first, then play.', itens: k.itens })
      + '<div>' + (e.cap < CAPS.length - 1 ? '<button type="button" class="btn" data-a="vd-c" data-n="' + (e.cap + 1) + '">Next chapter</button>' : '<button type="button" class="btn" data-a="vd-p" data-n="2">After the talk</button>') + '</div></div></div>';
  } else corpo = '<div class="mesa-video"><div class="video-col">' + iframe(YT, 'The danger of silence') + '<small class="cred">Tap a time to hear that moment again.</small></div><div class="lado-video">'
    + FM.som('som', SOM, { nota: 'Lines 3 and 4 hold the idea back: “all … is …”. Say them with a beat before the last word.' })
    + FM.fala('depois', DEPOIS, { rotulo: 'Cleft', fim: 'He holds the idea back and lands on it. Now a speech that doesn’t.' }) + '</div></div>';
  return cab(c) + '<div class="tres-tempos">' + tempos3(e.p) + '</div>' + corpo;
};

R.desmonte = function (c) {
  var FR = ['What matters is…', 'It isn’t … that … It’s …', 'It did …', 'The reason … is that …', '— and this is what matters —', 'All I’m asking for tonight is…'];
  return cab(c) + FM.fala('desmonte', DESMONTE.map(function (x, i) { return { pista: '<span class="ano">' + x.k + '</span>Use: <b>' + FR[i] + '</b>', resp: luz(x.ok) }; }), {
    rotulo: 'Card', prox: 'Next card', diga: 'Say it out loud, then wait a beat before the lit words',
    lado: function (feitas, atual, nova) { var x = DESMONTE[atual >= 0 ? atual : DESMONTE.length - 1]; return palco(x.plano, x.ok, atual < 0 || nova); },
    fim: 'Same facts, and now Rosa sounds like she means it. What is the machine behind it? The next page shows it.'
  });
};

R.regra = function (c) {
  return cab(c) + FM.carta('carta', CARTA, REGRA, { toque: 'Tap the six frames that hold the idea back', pronta: 'The rule is ready. It stays in the corner on the next pages.' });
};

R.sessenta = function (c) {
  return cab(c) + FM.fala('sessenta', SESSENTA.map(function (x, i) { return { pista: 'Use: <b>' + x.frame + '</b>', resp: luz(x.ok) }; }), {
    rotulo: 'Speaker', prox: 'Next speaker', regra: PRESA, diga: 'Say it at once, in one breath',
    lado: function (feitas, atual, nova) { var x = SESSENTA[atual >= 0 ? atual : SESSENTA.length - 1]; return plateia(feitas, SESSENTA.length) + palco(x.plano, x.ok, atual < 0 || nova); },
    fim: 'The house is full and listening. Now it’s your turn at the microphone.'
  });
};
R.pitch = function (c) {
  return cab(c) + sequencia({ est: 'o', rot: '', t: '', p: '' }, PITCH, S.pi, 'pi', 'The spotlight goes off. One second of silence, and then they clap.').replace(/<div class="cab[\s\S]*?<\/p><\/div>/, '')
    + '<p class="so-prof dica-aluno" style="text-align:center">Help the student pick a real cause in ten seconds: a bike lane, a dog park, longer library hours.</p>';
};

R.fim = function (c) {
  return cab(c) + '<div class="fim">' + escritaFinal('fim', (S.txt || {}).fim || '', (S.salvo || {}).fim, 'What worries me is …\nIt isn’t … that … It’s …\nAll I’m asking is …', 'Your pitch',
    ['What matters is', 'It isn’t … that', 'It’s', 'All I’m asking is', 'The reason … is that', 'did'], ['Your sixty seconds', 'Your pitch, written down: the hook, the turn, the reason, the ask.'])
    + '<div class="lado-fim">' + palco('I would never stay silent about…', 'What I would never stay silent about is [[a child being treated unfairly]].', 1)
    + '<div class="grande vd"><span><u>What matters is…</u> · the what-cleft</span><span><u>It isn’t X that… It’s Y</u> · keep the it</span><span><u>All I’m asking is… · The reason… is that…</u></span><span>not <s>the important is</s>, not <s>all what</s>, not <s>the reason is because</s>, not <s>did tried</s></span></div>'
    + mostra('fim', 'What worries me is that our street has no light at night. It isn’t the crime that scares people. It’s the dark. All I’m asking is six street lights.', 1)
    + '<p class="hw"><a class="pilula" href="HW/" target="_blank" rel="noopener">Homework for the student →</a></p></div></div>';
};

TOQUES['vd-p'] = function (b, n) { S.video.p = n; };
TOQUES['vd-c'] = function (b, n) { S.video.viu[S.video.cap] = 1; S.video.cap = n; };

/* 10/11/2026 · AS EXPLICAÇÕES (kit/formatos3.js) · G7 · uma cena curta nova (k: gx) antes de regra.
   Explicação 100% em inglês: see → notice → use (o aluno fala ou escreve uma frase dele no fim). */
var GX_EXPLICA = { formato: 'vira', titulo: 'The flat line, then the strong one. Watch the words move.',
  frases: [
    { de: ['Rosa', 'needs', 'a van', '.'], para: ['+What', 'Rosa', 'needs', '+is', '*a van', '.'], d: 'What + sentence + is: the big idea waits at the end.' },
    { de: ['*Rosa', 'built', 'the library', '.'], para: ['+It was', '*Rosa', '+who', 'built', 'the library', '.'], d: 'It was + the person + who: the light falls on Rosa.' },
    { de: ['Rosa', 'loved', 'the project', '.'], para: ['Rosa', '+did', '*love', 'the project', '.'], d: 'did + the base verb: the feeling gets strong. Not did loved.' }
  ],
  notaBotao: 'What moves?',
  nota: 'Hold the idea back, then land on it: <b>What</b> matters <b>is</b> …, <b>It was</b> … <b>that</b> …, <b>did</b> + base verb.',
  pergunta: 'Your turn. Flip it out loud, then check.',
  treino: [
    { de: 'Kids need books.', r: 'What kids need <b>is</b> books.' },
    { de: 'The council ignored the library.', r: 'It was the council <b>that</b> ignored the library.' },
    { de: 'We are late because the road is closed.', r: 'The reason we are late <b>is that</b> the road is closed.' },
    { de: 'I love this town.', r: 'I <b>do love</b> this town.' }
  ],
  uso: { p: 'Your turn. A cause you care about. Say it flat, then with What … is.', molde: ['The town needs …', 'What the town needs is …'], ex: 'The town needs a new bus line. What the town needs is a bus every ten minutes.' } };
R.gx = function (c) { return cab(c) + FM.ex('gx_vira', GX_EXPLICA); };
