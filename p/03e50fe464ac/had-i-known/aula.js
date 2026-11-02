/* ============================================================
   HAD I KNOWN · THE INVERT SWITCH · LIVE CLASS  06/10/2026
   Main series C1 · condicionais invertidas: Had I known (passado
   imaginado) · Were I / Were it not for (agora imaginado) · Should you
   ever (futuro possível). Sem IF, sem contração, NOT depois do sujeito.
   Erros: If had I known · Hadn't he turned · Had not he · Was it not for
   · If should you · Should you will/needed · Did I know…, · Had I known,
   I will.
   O MUNDO (da aula velha): o passageiro da poltrona 1D do avião que
   pousou no rio Hudson em 2009; palestra de 5 min (8_zk2DpgLCs) SELADA
   em seis capítulos. Sem nome do palestrante, do evento ou de filme na
   tela. Nada de susto: o pouso deu certo; o guia avisa sobre medo de voar.
   A CARA (nova; a velha era árvore + caixa-preta em cartões): o PAINEL
   DA CABINE — a chave INVERT: as peças da oração com IF caem, o
   auxiliar (HAD / WERE / SHOULD) sobe para a frente; e a ROTA: o
   caminho real em linha cheia e o outro caminho tracejado, que acende
   quando a inversão sai certa.
   Colisão conferida: third conditional (B1) e mixed (B2) no ar; aqui só
   a inversão.
   Fila: FILA-LIVE-386.md · 140. Pasta piloto-known (conferida: não existia).
   22/10/2026 · OS FORMATOS NOVOS (kit/formatos.js + formatos2.js), mesmas 11
   páginas. A auditoria: 24 rodadas de escolher entre três frases quase iguais
   (V, VII), armadilhas de tocar (VI) e o vídeo só com perguntas abertas +
   Show answer. Agora: III palpite antes, tarefa de toque em cada um dos seis
   capítulos e, depois, o motivo + a palavra errada, tudo com ▶ no minuto da
   legenda; V ligar cada virada ao outro caminho (a rota se acende); VI a
   carta do passageiro para a filha → a regra (FM.carta); VII seis frases com
   IF da caixa-preta ditas invertidas + Check, a chave vira (FM.fala);
   VIII monte a pergunta invertida e entreviste o professor (FM.pergunta);
   IX o velho amigo, quatro respostas faladas + Check. VIII e IX deixam de
   ser EXTRAS.
   ============================================================ */
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'voce', est: 'o', min: 7, img: 'bifurcacao', rot: 'I · Your Turning Points', t: 'Before the talk: the big moments of your life.', p: 'Tap a card. The student answers; then the teacher answers too.' },
  { k: 'palavras', est: 'l', img: 'cabine', rot: 'II · The Words', t: 'Five words from the video.', p: 'Learn the words before you watch. Then listen for them: they turn yellow in the video.' },
  { k: 'video', est: 'l', min: 10, img: 'cabine', rot: 'III · Seat 1D', t: 'A passenger in seat 1D: three things he learned while his plane went down.', p: 'Guess first. Then six chapters: read the task, play, tap your answers. Tap ▶ to hear a moment again.' },
  { k: 'falas', est: 'l', extra: 1, img: 'cabine', rot: 'IV · Line by Line', t: 'Every line of the video, one by one.', p: 'Tap a line. Hear it again. The lines with yellow words open the explanation.' },
  { k: 'rota', est: 'o', min: 7, img: 'bifurcacao', rot: 'V · The Other Path', t: 'Five turning points of that day. What happened, and what could have happened.', p: 'Match each turning point to its other path. Then read the other paths out loud.' },
  { k: 'regra', est: 'f', min: 7, img: 'caixa', rot: 'VI · The Letter', t: 'A letter from the passenger to his daughter, on the bus home.', p: 'Read the letter out loud. Tap every inversion. Then finish the rule.' },
  { k: 'caixa', est: 'f', min: 6, img: 'caixa', rot: 'VII · The Black Box', t: 'Six IF-sentences from the flight recorder. Flip the switch on each one.', p: 'Read the IF-sentence. Say it inverted out loud. Then tap Check: the switch flips.' },
  { k: 'ano', est: 'o', min: 7, extra: 1, img: 'vinho', rot: 'VIII · Had You Only a Year', t: 'Big questions, elegant answers. Now you interview your teacher.', p: 'Build each question out loud. Tap Check. Then ask it, and answer with an inversion.' },
  { k: 'amigo', est: 'o', min: 7, img: 'palco', rot: 'IX · Your Turning Point', t: 'You meet an old friend after ten years. They ask about your life.', p: 'The teacher is the old friend. Say each answer with an inversion. Then tap Check.' },
  { k: 'fim', est: 'w', min: 6, img: 'capa', rot: 'X · Your Speech', t: 'What would you do differently, had you only a year left?', p: 'Three sentences: one Had, one Were, one Should. They go to your My notes.' }
];

var YT = '8_zk2DpgLCs';

var VOCE = [
  { k: 'A CHOICE', q: 'What was a real turning point in your life?', fup: 'What changed after it?', st: ['Moving …', 'Starting …'], ex: 'Moving to another city. Everything changed after that.' },
  { k: 'LUCK', q: 'Tell me about a time you were lucky: a bus you almost missed, a meeting by chance.', fup: 'What if it hadn’t happened?', st: ['I met … because …'], ex: 'I met my best friend because my flight was canceled.' },
  { k: 'REGRET', q: 'Is there something you wish you had done differently?', fup: 'Why didn’t you?', st: ['I wish I had …'], ex: 'I wish I had learned to play an instrument.' },
  { k: 'THE LIST', q: 'What is on your bucket list, the things you want to do before you die?', fup: 'What is stopping you?', st: ['Seeing …', 'Running …'], ex: 'Seeing the northern lights, and running a marathon.' },
  { k: 'FLYING', q: 'Do you like flying? What do you think about on a plane?', fup: 'Window or aisle?', st: ['I don’t mind it …', 'I hate it …'], ex: 'I don’t mind it. I always think about my family on takeoff.' }
];

/* 22/10/2026 · OS FORMATOS NOVOS (kit/formatos.js) */
/* III · palpite antes (com veredito), uma tarefa de toque por capítulo, depois o motivo + a palavra errada.
   Minutos da legenda (legenda-dados.js). Nada assustador na tela: só o homem no palco. */
var ANTES = { formato: 'escolhe', titulo: 'Guess first.', itens: [
  { p: 'In 2009 a plane landed on the Hudson River in New York. What happened to the people?', o: ['Everybody survived.', 'Nobody survived.'], c: 0, d: 'Everybody survived. The man in 1D tells the story.' },
  { p: 'If you had five minutes left, what would you think about?', o: ['my family', 'my work', 'my phone'], c: -1, d: 'There is no wrong answer. Remember yours.' }
] };
var CAPS = [
  { k: 'THE SEAT', ini: 16, fim: 49, ex: { formato: 'escolhe', titulo: 'Tap the answer.', itens: [
    { p: 'Where was he sitting?', tm: '0:33', o: ['1D', '12A', '1A'], c: 0 },
    { p: 'What did the flight attendants say?', tm: '0:38', o: ['“No problem, we probably hit some birds.”', '“Everybody, please sit down.”', '“We are landing in Boston.”'], c: 0 },
    { p: 'The pilot had already …', tm: '0:42', o: ['turned the plane around', 'called the tower', 'opened the door'], c: 0 }
  ] } },
  { k: 'BRACE', ini: 49, fim: 86, ex: { formato: 'verdadeOuMentira', titulo: 'True or false? If it’s false, say the truth.', itens: [
    { f: 'The pilot lines up the plane with the Hudson River.', t: true, tm: '0:53' },
    { f: 'It’s usually the route.', t: false, tm: '0:58', c: '“It’s usually not the route.”' },
    { f: 'The pilot turns off the engines.', t: true, tm: '1:01' },
    { f: 'The pilot says six words.', t: false, tm: '1:08', c: 'Three words: “brace for impact.”' }
  ] } },
  { k: 'LESSON ONE', ini: 86, fim: 126, ex: { formato: 'escolhe', titulo: 'Tap the answer.', itens: [
    { p: 'The first lesson: it all changes …', tm: '1:31', o: ['in an instant', 'every year', 'slowly'], c: 0 },
    { p: 'His saying about wine:', tm: '1:51', o: ['“I collect bad wines.”', '“I never drink wine.”', '“I only buy good wine.”'], c: 0 },
    { p: 'If the wine is ready and the person is there, he …', tm: '1:56', o: ['opens it', 'saves it', 'sells it'], c: 0 }
  ] } },
  { k: 'LESSON TWO', ini: 126, fim: 177, ex: { formato: 'verdadeOuMentira', titulo: 'True or false? If it’s false, say the truth.', itens: [
    { f: 'He felt one real regret.', t: true, tm: '2:15' },
    { f: 'He regretted the time he wasted on things that did not matter.', t: true, tm: '2:29' },
    { f: 'He has a fight with his wife every week now.', t: false, tm: '2:48', c: 'No fight with his wife in two years.' },
    { f: 'He still tries to be right.', t: false, tm: '2:52', c: '“I no longer try to be right. I choose to be happy.”' }
  ] } },
  { k: 'LESSON THREE', ini: 177, fim: 250, ex: { formato: 'escolhe', titulo: 'Tap the answer.', itens: [
    { p: 'His one wish:', tm: '3:30', o: ['to see his kids grow up', 'to be rich', 'to fly again'], c: 0 },
    { p: 'A month later he was at …', tm: '3:37', o: ['his daughter’s school performance', 'a wedding', 'an airport'], c: 0 },
    { p: 'Above all, the only goal he has is to be …', tm: '4:04', o: ['a great dad', 'a pilot', 'a rich man'], c: 0 }
  ] } },
  { k: 'THE CHALLENGE', ini: 263, fim: 286, ex: { formato: 'escolhe', titulo: 'Tap the answer.', itens: [
    { p: 'He asks the audience to imagine …', tm: '4:23', o: ['the same thing on their plane', 'a new job', 'a long trip'], c: 0 },
    { p: 'About their relationships he asks:', tm: '4:37', o: ['How would you change them?', 'Who is your best friend?', 'Where do they live?'], c: 0 },
    { p: 'More than anything: are you being the best … you can?', tm: '4:43', o: ['parent', 'pilot', 'teacher'], c: 0 }
  ] } }
];
var MOTIVO = { formato: 'escolhe', titulo: 'Why?', itens: [
  { p: 'Why does he say “I collect bad wines”?', o: ['He opens the good wine now, with the right people.', 'He collects old wine bottles.', 'He does not like good wine.'], c: 0, d: 'He doesn’t save the good ones. He opens them now.' },
  { p: 'What changed after the flight?', o: ['He stopped trying to be right.', 'He stopped drinking wine.', 'He started flying more.'], c: 0, d: 'He chose to be happy.' }
] };
var ERRO = [
  { f: 'I thought about all the people I wanted to <u>forget</u>.', r: 'reach out to', t: '1:39' },
  { f: 'I decided to <u>keep</u> negative energy from my life.', r: 'eliminate', t: '2:43' },
  { f: 'I didn’t want to <u>stay</u>.', r: 'go', t: '3:24' },
  { f: 'I only wish I could see my kids <u>sleep</u>.', r: 'grow up', t: '3:34' }
];

/* a rota: real = o que aconteceu; outro = o outro caminho (a inversão) */
var ROTA = [
  { k: 'THE SEAT', real: 'He sat in 1D, so he could talk to the crew.', curto: 'He sat in 1D.', outro: 'Had he not been in 1D, he couldn’t have talked to the crew.' },
  { k: 'THE PILOT', real: 'The pilot turned the plane around at once.', curto: 'The pilot turned around at once.', outro: 'Had the pilot not turned around, they would have crashed.' },
  { k: 'THE RIVER', real: 'The river was calm and wide that day.', curto: 'The river was calm and wide.', outro: 'Were it not for the calm river, the landing might have failed.' },
  { k: 'THE WINE', real: 'He saved his best wine for “one day”.', curto: 'He saved his best wine for “one day”.', outro: 'Had he known, he would have opened it sooner.' },
  { k: 'THE CHALLENGE', real: 'He asks the audience to imagine it on their plane.', curto: 'He asks you to imagine it on your plane.', outro: 'Should you ever be in that situation, what would you change?' }
];
var LIGA = { formato: 'liga', titulo: 'What happened… and what could have happened?', ordemDireita: [3, 0, 4, 2, 1], pares: ROTA.map(function (x) { return [x.curto, x.outro]; }) };

/* VI · a carta do passageiro para a filha, no ônibus de volta (texto nosso) → a regra */
var CARTA = { de: 'A letter to my daughter · written on the bus home',
  txt: '[[Had I known]] how short life is, I would have written to you sooner. [[Had I not]] listened to the captain, I would have panicked. [[Were it not for]] the pilot, we wouldn’t be here. [[Were I]] braver, I would call you every day. [[Should you ever]] feel afraid, remember this letter. [[Should you need]] anything, call me.',
  assina: 'Dad' };
var REGRA = [
  { a: 'The inversion replaces the IF: ', par: ['Had I known', 'If had I known'], c: 0, b: ' how short life is…' },
  { a: 'The negative: Had he ', par: ['not', 'n’t'], c: 0, b: ' turned. NOT goes after the subject: no contraction.' },
  { a: 'Now, imagined: ', par: ['Were', 'Was'], c: 0, b: ' it not for the pilot… (always were, for every person)' },
  { a: 'Future, possible: Should you ever ', par: ['need', 'needed'], c: 0, b: ': the base verb after should.' },
  { a: 'The inversion is ', par: ['formal', 'very casual'], c: 0, b: ': a speech, a letter, a serious email.' }
];
var PRESA = 'If I had known → <b>Had I known</b><br>Had he <b>not</b> turned (no hadn’t)<br>If it weren’t for → <b>Were it not for</b><br><b>Should</b> you need + base verb<br>No IF. Never both.';

/* a caixa-preta: se = a oração com IF em peças; inv = a invertida; resto */
var CAIXA = [
  { se: ['If', 'I', 'had', 'known', 'about the delay'], inv: ['Had', 'I', 'known', 'about the delay'], resto: 'I would have taken the train.', ops: ['Had I known about the delay, …', 'If had I known about the delay, …', 'Did I know about the delay, …'] },
  { se: ['If', 'you', 'need', 'help'], inv: ['Should', 'you', 'need', 'help'], resto: 'press the call button.', ops: ['Should you need help, …', 'Should you needed help, …', 'If should you need help, …'] },
  { se: ['If', 'it', 'weren’t', 'for the pilot'], inv: ['Were', 'it', 'not', 'for the pilot'], resto: 'we wouldn’t be here today.', ops: ['Were it not for the pilot, …', 'Was it not for the pilot, …', 'Weren’t it for the pilot, …'] },
  { se: ['If', 'they', 'hadn’t', 'landed on the river'], inv: ['Had', 'they', 'not', 'landed on the river'], resto: 'the plane would have hit the city.', ops: ['Had they not landed on the river, …', 'Hadn’t they landed on the river, …', 'Had not they landed on the river, …'] },
  { se: ['If', 'you', 'ever', 'fly again'], inv: ['Should', 'you', 'ever', 'fly again'], resto: 'sit near the front.', ops: ['Should you ever fly again, …', 'Should you ever flew again, …', 'If should you ever fly again, …'] },
  { se: ['If', 'I', 'were', 'in his seat'], inv: ['Were', 'I', 'in his seat'], resto: 'I would be terrified.', ops: ['Were I in his seat, …', 'Was I in his seat, …', 'If were I in his seat, …'] },
  { se: ['If', 'the birds', 'hadn’t', 'hit the engines'], inv: ['Had', 'the birds', 'not', 'hit the engines'], resto: 'it would have been a normal flight.', ops: ['Had the birds not hit the engines, …', 'Did the birds not hit the engines, …', 'Hadn’t the birds hit the engines, …'] },
  { se: ['If', 'it', 'weren’t', 'for my kids'], inv: ['Were', 'it', 'not', 'for my kids'], resto: 'I wouldn’t try so hard.', ops: ['Were it not for my kids, …', 'If were it not for my kids, …', 'Were not it for my kids, …'] }
];

/* VIII · monte a pergunta invertida e entreviste o professor */
var PERGUNTAS = [
  { p: '(Were · you · to have only a year left · what · you · do)?', r: '<b>Were you</b> to have only a year left, what would you do?' },
  { p: '(Had · you · known · how short life is · what · you · do differently)?', r: '<b>Had you known</b> how short life is, what would you have done differently?' },
  { p: '(Should · you · ever · win the lottery · what · you · do first)?', r: '<b>Should you</b> ever win the lottery, what would you do first?' },
  { p: '(Were it not for · your family · where · you · be)?', r: '<b>Were it not for</b> your family, where would you be?' },
  { p: '(Had · you · studied music · what · you · be now)?', r: '<b>Had you studied</b> music, what would you be now?' }
];

var AITENS = [
  { pista: '<span class="ano">Friend</span>“So! What was the biggest turning point since we last met?”', resp: '<b>Had I not moved</b> to Lisbon, I would never have met my wife.', depois: 'Where would you be now, had you not moved?' },
  { pista: '<span class="ano">Friend</span>“Any regrets?”', resp: '<b>Had I known</b> how fast kids grow, I would have worked less.', depois: 'What did you learn too late?' },
  { pista: '<span class="ano">Friend</span>“Who helped you the most?”', resp: '<b>Were it not for</b> my sister, I wouldn’t have finished college.', depois: 'Who helped you the most?' },
  { pista: '<span class="ano">Friend</span>“And what’s next for you?”', resp: '<b>Should everything</b> go well, I’ll open my own studio next year.', depois: 'And if it doesn’t go well?' }
];

var S = { i: 0, faixa: 1, fala: {}, resp: {}, armas: {},
  voce: { sel: -1, foi: {} }, video: { p: 0, cap: 0, viu: {} } };

/* a chave INVERT */
function chave(x, foi) {
  var antes = x.se.map(function (p, i) { return '<span class="hk-peca' + (i === 0 ? ' se' + (foi ? ' cai' : '') : '') + (foi && i > 0 ? ' some' : '') + '">' + p + '</span>'; }).join('');
  var depois = foi ? x.inv.map(function (p, i) { return '<span class="hk-peca' + (i === 0 ? ' aux' : '') + (p === 'not' ? ' nao' : '') + '" style="animation-delay:' + (i * .08) + 's">' + p + (i === x.inv.length - 1 ? '<span class="hk-virg">,</span>' : '') + '</span>'; }).join('') : '<span class="hk-vazio">flip the switch</span>';
  return '<div class="hk-painel vd"><div class="hk-chave' + (foi ? ' on' : '') + '"><i></i><small>' + (foi ? 'INVERTED' : 'INVERT') + '</small></div>'
    + '<div class="hk-linhas"><div class="hk-linha"><small>IF-CLAUSE</small><div>' + antes + '</div></div><div class="hk-linha"><small>INVERTED</small><div>' + depois + '</div></div>'
    + '<p class="hk-resto">… ' + x.resto + '</p></div></div>';
}
/* a rota: caminho real cheio, o outro tracejado */
function rota(x, foi) {
  return '<div class="hk-rota vd"><svg viewBox="0 0 400 150" aria-hidden="true"><path class="hk-r-real" d="M20 120 C 120 120, 160 70, 230 60 S 360 40, 385 30"/><path class="hk-r-outro' + (foi ? ' on' : '') + '" d="M150 92 C 210 110, 300 130, 385 128"/><circle cx="150" cy="92" r="9" class="hk-r-no"/><circle cx="385" cy="30" r="5" class="hk-r-fim"/><circle cx="385" cy="128" r="5" class="hk-r-fim' + (foi ? ' on' : '') + '"/></svg>'
    + '<div class="hk-r-txt"><p class="hk-real"><small>WHAT HAPPENED · ' + x.k + '</small>' + x.real + '</p><p class="hk-outro' + (foi ? ' on' : '') + '"><small>THE OTHER PATH</small>' + (foi ? x.outro : '…') + '</p></div></div>';
}

var R = {};
R.capa = function () {
  return '<div class="capa"><div><span class="kick">MAIN SERIES · C1 · INVERTED CONDITIONALS</span><h1>Had I <b>Known</b></h1>'
    + '<p class="sub"><b>Had I known</b> it could end in an instant, I would have opened the good wine years ago. No IF: the verb flips to the front.</p>'
    + '<div class="chipsx"><span class="pilula">Had I known</span><span class="pilula">Were it not for</span><span class="pilula">Should you ever</span><span class="pilula">Live Class · W·O·L·F</span></div>'
    + '<button type="button" class="btn cheio" data-a="ir" data-n="1">Take your seat</button>' + faixaLive() + '</div>'
    + '<div class="capa-r">' + chave(CAIXA[0], 1) + '</div></div>';
};

R.voce = function (c) { return cartasPessoais(c, VOCE, S.voce, 'voce', ['If I hadn’t …', 'I wish I had …', 'Because …']); };

R.video = function (c) {
  var e = S.video, corpo;
  if (e.p === 0) corpo = '<div class="mesa-c"><div class="lado-l">' + FM.ex('antes', ANTES) + '</div>'
    + '<div class="lado-l"><div class="selo-v vd"><b>SEALED</b><small>A five-minute talk, in six short chapters. Nothing scary on screen: just a man on a stage. Every chapter has a short task. It opens after your guesses.</small></div><div><button type="button" class="btn cheio" data-a="vd-p" data-n="1">Watch, chapter by chapter</button></div></div></div>';
  else if (e.p === 1) {
    var k = CAPS[e.cap];
    corpo = '<div class="mesa-video"><div class="video-col">' + iframe(YT, 'Three things he learned', '&start=' + k.ini + '&end=' + k.fim) + '<small class="cred">Chapter ' + (e.cap + 1) + ' of 6 · read the task, then play · it stops by itself</small></div><div class="lado-video"><div class="caps">'
      + CAPS.map(function (x, i) { return '<button type="button" class="chip' + (e.cap === i ? ' on' : '') + (e.viu[i] ? ' feito' : '') + '" data-a="vd-c" data-n="' + i + '">' + x.k + '</button>'; }).join('') + '</div>'
      + FM.ex('cap' + e.cap, k.ex)
      + '<div>' + (e.cap < CAPS.length - 1 ? '<button type="button" class="btn" data-a="vd-c" data-n="' + (e.cap + 1) + '">Next chapter</button>' : '<button type="button" class="btn" data-a="vd-p" data-n="2">After the video</button>') + '</div></div></div>';
  } else corpo = '<div class="mesa-video"><div class="video-col">' + iframe(YT, 'Three things he learned') + '<small class="cred">The whole talk · tap ▶ to hear a moment again</small></div><div class="lado-video">'
    + FM.ex('motivo', MOTIVO) + FM.erro('erro', ERRO, { titulo: 'One word is wrong. Say the right one.' }) + '</div></div>'
    + '<p class="aprova" style="text-align:center">“If the pilot hadn’t turned around…” is correct. Now watch it become: <b>Had the pilot not turned around</b>…</p>';
  return cab(c) + '<div class="tres-tempos">' + tempos3(e.p) + '</div>' + corpo;
};

/* V · ligar a virada ao outro caminho; o desenho mostra o par escolhido */
R.rota = function (c) {
  var e = ((S.fq || {}).rota) || { a: -1, par: {} }, ks = Object.keys(e.par || {});
  var idx = e.a >= 0 ? e.a : (ks.length ? +ks[ks.length - 1] : 0);
  return cab(c) + '<div class="mesa-c"><div class="lado-l">' + rota(ROTA[idx], e.par && e.par[idx] === idx) + '</div><div class="lado-l">' + FM.ex('rota', LIGA)
    + '<p class="hk-rot">THEN READ THE OTHER PATHS OUT LOUD, SLOWLY, LIKE A SPEECH</p></div></div>';
};

/* VI · a carta do passageiro → a regra */
R.regra = function (c) {
  return cab(c) + FM.carta('carta', CARTA, REGRA, { toque: 'Tap every inversion', pronta: 'The rule is ready. It stays in the corner on the next pages.' });
};

/* VII · a caixa-preta: a frase com IF dita invertida; o Check vira a chave */
R.caixa = function (c) {
  var itens = CAIXA.slice(0, 6).map(function (x) {
    return { pista: '<span class="ano">TRACK</span>' + x.se.join(' ') + ', ' + x.resto, resp: '<b>' + x.inv.join(' ') + '</b>, ' + x.resto };
  });
  return cab(c) + FM.fala('caixa', itens, {
    rotulo: 'Track', prox: 'Next track', regra: PRESA, diga: 'Say it inverted out loud first',
    lado: function (feitas, atual, ver) { return chave(CAIXA[atual >= 0 ? atual : 5], atual < 0 || !!ver); },
    fim: 'Six tracks. The black box is closed. Now: what would YOU change?'
  });
};

/* VIII · Ask me: monte a pergunta invertida e entreviste o professor */
R.ano = function (c) {
  return cab(c) + FM.pergunta('ask', PERGUNTAS, { regra: PRESA, depoisRot: 'Then answer', depois: ['Were I to …, I would …', 'Had I known …, I would have …', 'Should I ever …, I will …'] });
};

/* IX · o velho amigo: quatro respostas faladas + Check */
R.amigo = function (c) {
  return cab(c) + FM.fala('amigo', AITENS, {
    rotulo: 'Question', prox: 'Next', regra: PRESA, diga: 'Answer with an inversion out loud first',
    lado: function () { return '<div class="hk-cafe vd"><b>AN OLD FRIEND · COFFEE AFTER TEN YEARS</b><small>TABLE FOR TWO</small></div>'; },
    fim: 'Four answers, four elegant turns. Same time in ten years?'
  });
};

R.fim = function (c) {
  return cab(c) + '<div class="fim">' + escritaFinal('fim', (S.txt || {}).fim || '', (S.salvo || {}).fim, 'Had I known …, I would have …\nWere it not for …, I wouldn’t …\nShould I ever …, I will …', 'Your speech',
    ['Had I known', 'Had I not', 'Were it not for', 'Were I', 'Should I ever'], ['YOUR SPEECH', 'Your turning point, as three elegant sentences: one Had, one Were, one Should.'])
    + '<div class="lado-fim">' + chave(CAIXA[3], 1)
    + '<div class="grande vd"><span><u>Had + subject + participle</u> · the past, imagined</span><span><u>Were + subject / Were it not for</u> · now, imagined</span><span><u>Should + subject + base verb</u> · the future, possible</span><span>no <s>if had</s>, no <s>hadn’t he</s>, no <s>had not he</s>, no <s>was it not for</s></span></div>'
    + mostra('fim', 'Had I known how fast life changes, I would have called my grandfather more.<br>Were it not for my teacher, I wouldn’t speak English today.<br>Should I ever have a year off, I will travel around South America.', 1)
    + '<p class="hw"><a class="pilula" href="HW/" target="_blank" rel="noopener">Homework for the student →</a></p></div></div>';
};

TOQUES['vd-p'] = function (b, n) { S.video.p = n; };
TOQUES['vd-c'] = function (b, n) { S.video.viu[S.video.cap] = 1; S.video.cap = n; };
