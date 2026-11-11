/* ============================================================
   THE TIDY STORY · THE EVIDENCE LADDER · LIVE CLASS  06/10/2026
   Main series B2 · passiva de relato: X is said / thought / believed /
   reported / known + to (o nome vai para a frente; nunca THAT depois
   dele); o tempo vai para dentro (to be agora · to have + particípio
   antes); It is said that … quando não há tópico. A escada da evidência:
   said < thought < believed < reported < known. Erros: He is said that
   he …, is said to tried, misturar as duas portas, The rule says to be.
   ⚠ Aula irmã: a B2 it-is-thought-to-have-been (124) é a revisão do
   infinitivo perfeito; aqui o centro é a escolha do nome na frente e o
   peso do verbo.
   O MUNDO (da aula velha): a regra das dez mil horas; quem contou? Os
   oito áudios (m1–m2, t1–t2 na copa; p1–p4 a pesquisadora) mantidos e
   conferidos no faster-whisper em 06/10: batem. O vídeo mantido
   (jLOuMXnM5wk, 0:07–1:15), selado. Nenhum nome de canal ou palestrante
   na tela (Federer está no áudio da pesquisadora: é o assunto, fica).
   A CARA (nova; a velha era o fichário de boatos claro): a ESCADA DA
   EVIDÊNCIA — cinco degraus, said embaixo, known em cima; cada afirmação
   sobe só até o degrau que a evidência paga. E a CORRENTE DO BOATO na
   copa: quem ouviu de quem, até o “?” do começo.
   Fila: FILA-LIVE-386.md · 134. Pasta piloto-tidy (conferida: não existia).
   23/10/2026 · OS FORMATOS NOVOS (kit/formatos.js + formatos2.js), mesmas
   páginas, nada de escolher entre frases quase iguais. II = verdadeiro ou
   mentira sobre a corrente do boato (FM.verdadeOuMentira); III = o nome
   vai para a frente: o aluno FALA e toca Check (FM.fala); IV = separar
   frases em AGORA / ANTES (FM.separa); V = ligar a situação ao tópico
   (FM.liga); VII = vídeo: régua antes do play, verdadeiro ou mentira com
   ▶ no minuto, ligar a afirmação ao dono; IX = o verbo que ela usou, por
   SOM, e a escada sobe (FM.som); X = três amigos em cartas (FM.cartas);
   XI = achar a parte quebrada de cinco frases (FM.erro). I, VI e XII ficam.
   ============================================================ */
var L = [
  { k: 'capa', est: null, img: 'gavetas' },
  { k: 'regra', est: 'o', min: 7, img: 'ficha', rot: 'I · The Rule You Hear', t: 'Think of a rule for success that you hear all the time.', p: 'Tap the rule. Then answer out loud.' },
  { k: 'copa', est: 'l', min: 7, img: 'sala', rot: 'II · Who Counted?', t: 'Two colleagues at the coffee machine. One repeats the rule. The other asks a question.', p: 'Play the four lines in order. Follow the chain back to the start. Then tap True or Lie.' },
  { k: 'gx', est: 'f', min: 4, img: 'ficha', rot: 'III · The Flip', t: 'Watch the name jump to the front.', p: 'Flip each rumor. Notice the verb after to. Then flip four on your own.' },
  { k: 'nome', est: 'f', min: 7, img: 'gaveta', rot: 'IV · Move the Name', t: 'Each rumor has a vague owner. Move the name to the front.', p: 'Read the rumor. Say it with the name first. Then tap Check.' },
  { k: 'tempo', est: 'f', min: 6, img: 'ficha', rot: 'V · The Time Goes Inside', t: 'The reporting verb stays present. The time goes inside: to be (now) or to have + third form (before).', p: 'Tap a sentence, then its box: is the time now, or before? Then say each one about a famous person.' },
  { k: 'portas', est: 'f', min: 6, extra: 1, img: 'gaveta', rot: 'VI · Whose Sentence Is It?', t: 'Both doors are correct. Choose the one that keeps YOUR TOPIC as the subject.', p: 'Tap a situation, then the sentence that keeps your topic as the subject. Say it.' },
  { k: 'palavras', est: 'l', img: 'sala', rot: 'VII · The Words', t: 'Five words from the video.', p: 'Learn the words before you watch. Then listen for them: they turn yellow in the video.' },
  { k: 'video', est: 'l', min: 10, img: 'sala', rot: 'VIII · One Minute, Count the Owners', t: 'One minute about practice. Count the owners of each claim.', p: 'Slide the ruler. Watch. Tap True or Lie (and ▶ to hear a line again). Then match each claim to its owner.' },
  { k: 'falas', est: 'l', extra: 1, img: 'sala', rot: 'IX · Line by Line', t: 'Every line of the video, one by one.', p: 'Tap a line. Hear it again. The lines with yellow words open the explanation.' },
  { k: 'escada', est: 'l', min: 7, extra: 1, img: 'sala', rot: 'X · The Evidence Ladder', t: 'Said, thought, believed: a rumor or an opinion. Reported: somebody published it. Known: an established fact.', p: 'Play the researcher. Tap the verb she used. Watch the claim climb. Say why it fits.' },
  { k: 'explica', est: 'o', min: 7, extra: 1, img: 'ficha', rot: 'XI · Keep Your Distance', t: 'A friend is sure about the ten-thousand-hour rule. Explain it, without signing it.', p: 'Your teacher is the friend. Tap a card. Answer without signing the claim.' },
  { k: 'erros', est: 'f', min: 6, extra: 1, img: 'gaveta', rot: 'XII · He Is Said That', t: 'Five sentences are broken.', p: 'Find the broken part in each line. Say the fix. Then tap Check.' },
  { k: 'fim', est: 'w', min: 6, img: 'gavetas', rot: 'XIII · File It', t: 'Your rule from scene I, without signing it.', p: 'Write it, and one thing people say about your city. It goes to your My notes.' }
];

var YT = 'jLOuMXnM5wk';
var TR = {
  'm1.mp3': 'Everybody knows it takes ten thousand hours. It is in every book.',
  'm2.mp3': 'Some psychologist, I think. I read it somewhere. Or I heard it somewhere.',
  'p1.mp3': 'Elite athletes are reported to spend more time in deliberate practice. That part holds up everywhere we look.',
  'p2.mp3': 'They are also said to have tried more sports as children. That one was measured, not repeated, and it is the one nobody quotes.',
  'p3.mp3': 'Federer’s mother is known to have refused to coach him. She has told the story herself, more than once.',
  'p4.mp3': 'Golf is thought to be a good model for learning. It is not. It is a good model for golf.',
  't1.mp3': 'Everybody knows it. But who counted them? Do you know?',
  't2.mp3': 'So it is said. It is not shown. Those are two different things, and we teach both.'
};

var DEGRAUS = ['said', 'thought', 'believed', 'reported', 'known'];
var DEG_N = { said: 'a rumor', thought: 'an opinion', believed: 'many people believe it', reported: 'somebody published it', known: 'an established fact' };

var REGRAS = ['it takes ten thousand hours', 'start young or never', 'practice makes perfect', 'talent is born, not made', 'never give up', 'follow your passion'];
var REGRA_Q = [
  { q: 'Where did you first hear it?', fup: 'Who said it?', st: ['I first heard it …'], ex: 'I first heard it from a teacher at school.' },
  { q: 'Do you believe it? Why?', fup: 'Have you seen it work?', st: ['Yes, because …', 'Not really, …'], ex: 'Not really. I know people who practiced a lot and quit.' },
  { q: 'Who could actually prove it?', fup: 'How?', st: ['Maybe a …'], ex: 'Maybe a scientist with a lot of data.' }
];

var COPA = [['m1.mp3', 'MARK'], ['t1.mp3', 'TESSA'], ['m2.mp3', 'MARK'], ['t2.mp3', 'TESSA']];
/* II · verdadeiro ou mentira (FM.verdadeOuMentira) */
var VM_COPA = { formato: 'verdadeOuMentira', titulo: 'True or lie? If it is a lie, say the truth.', itens: [
  { f: 'Mark knows exactly who counted the ten thousand hours.', t: false, c: 'He doesn’t know: “some psychologist, I think”.' },
  { f: 'Mark says he read it somewhere, or heard it somewhere.', t: true },
  { f: 'Tessa says the rule has been proven.', t: false, c: 'People say it, but nobody has shown it.' },
  { f: 'Tessa says “said” and “shown” are two different things.', t: true }
] };

var NOME = [
  { pre: 'People say that', nome: 'Federer', pos: 'tried ten sports as a child.', ops: ['is said to have tried ten sports as a child.'], outra: 'It is said that Federer tried ten sports as a child.' },
  { pre: 'People think that', nome: 'The pattern', pos: 'holds in music too.', ops: ['is thought to hold in music too.'], outra: 'It is thought that the pattern holds in music too.' },
  { pre: 'People believe that', nome: 'The inventor', pos: 'failed his electronics exams.', ops: ['is believed to have failed his electronics exams.'], outra: 'It is believed that the inventor failed his electronics exams.' },
  { pre: 'Reports say that', nome: 'Elite athletes', pos: 'practice more deliberately.', ops: ['are reported to practice more deliberately.'], outra: 'It is reported that elite athletes practice more deliberately.' },
  { pre: 'Everyone knows that', nome: 'His mother', pos: 'refused to coach him.', ops: ['is known to have refused to coach him.'], outra: 'It is known that his mother refused to coach him.' },
  { pre: 'People say that', nome: 'Golf', pos: 'is a good model for learning.', ops: ['is said to be a good model for learning.'], outra: 'It is said that golf is a good model for learning.' }
];
/* III · o nome vai para a frente: o aluno FALA e toca Check (FM.fala) */
var NOME_FALA = NOME.map(function (x) {
  return { pista: 'Move <b>' + x.nome.replace(/^The /, 'the ').replace(/^His /, 'his ') + '</b> to the front.<small style="display:block;margin-top:8px;font:600 clamp(16px,1.2vw,20px) var(--ui);color:var(--am)">Start: “' + x.nome + ' ' + x.ops[0].split(' to ')[0] + ' …”</small>',
    resp: x.nome + ' <b>' + x.ops[0] + '</b>', depois: 'And the other door? ' + x.outra };
});

var TEMPO = [
  { a: 'She is said ', b: ' very rich.', q: 'now', ops: ['to be'] },
  { a: 'He is believed ', b: ' the city in 2010.', q: 'before', ops: ['to have left'] },
  { a: 'The company is thought ', b: ' money right now.', q: 'now', ops: ['to be losing'] },
  { a: 'The painting is known ', b: ' twice.', q: 'before', ops: ['to have been stolen'] },
  { a: 'They are reported ', b: ' in Lisbon these days.', q: 'now', ops: ['to live'] },
  { a: 'Mozart is said ', b: ' his first symphony at eight.', q: 'before', ops: ['to have written'] }
];
/* IV · AGORA ou ANTES, por sentido (FM.separa) */
var SEPARA_TEMPO = { formato: 'separa', titulo: 'Tap a sentence, then its box. Is the time now, or before?', caixas: ['NOW · to + verb', 'BEFORE · to have + third form'], itens: TEMPO.map(function (x) { return { t: x.a + x.ops[0] + x.b, c: x.q === 'now' ? 0 : 1 }; }) };

/* V · ligar a situação ao tópico que fica na frente (FM.liga) */
var LIGA_PORTAS = { formato: 'liga', titulo: 'Match the situation to the sentence that keeps your topic first.', ordemDireita: [3, 0, 4, 1, 2], pares: [
  ['Your topic is FEDERER, for a magazine.', 'Federer is said to have tried ten sports.'],
  ['No topic: you report what people say in general.', 'It is said that ten thousand hours is the magic number.'],
  ['Your topic is THE INVENTOR, in a talk.', 'The inventor is believed to have failed his exams.'],
  ['Your topic is EARLY SPECIALIZATION, the whole report.', 'Early specialization is thought to pay off.'],
  ['Your topic is YOUR WORK, and you disagree next.', 'Our work is said to be easy, but …']
] };

var ANTES = 'Before you watch: who do you think invented the ten-thousand-hour rule?';
var ANTES_REGUA = { formato: 'regua', titulo: 'Before you watch', frase: 'Ten thousand hours of practice make you great at anything.', esquerda: 'No way', direita: 'Totally', depois: 'Now say it: who do you think invented the rule? I think it was … / Probably a …' };
/* VII · durante o vídeo: verdadeiro ou mentira com ▶ no minuto (legenda-dados.js, trecho 0:07 a 1:15) */
var VM_VIDEO = { formato: 'verdadeOuMentira', titulo: 'True or lie? If it is a lie, say the truth. Tap ▶ to hear it again.', itens: [
  { f: 'The poster child for the ten-thousand-hour story is Tiger Woods.', t: true, tm: '0:18' },
  { f: 'Two of the three Pulgar sisters became grandmaster chess players.', t: true, tm: '0:31' },
  { f: 'Scientists found that elite athletes spend less time in deliberate practice.', t: false, tm: '0:48', c: 'More time: elite athletes are reported to spend more time in deliberate practice.' },
  { f: 'Future elites usually specialize early and never try other sports.', t: false, tm: '0:59', c: 'They try a variety of activities first: they are said to specialize later than their peers.' }
] };
/* VII · depois: ligar a afirmação ao dono */
var LIGA_DEPOIS = { formato: 'liga', titulo: 'Who owns each claim in the video? Match them.', ordemDireita: [2, 0, 1], pares: [
  ['“It takes ten thousand hours.”', 'Nobody: it is an idea people have.'],
  ['“Elite athletes practice more.”', 'Scientists who studied elite athletes.'],
  ['“Future elites sample many activities first.”', 'Scientists who tracked athletes over time.']
] };
var DEPOIS = [{ q: 'Say one claim from the video without saying who made it.', h: 'Early specialization is thought to be the best path, but many athletes tried several sports first.' }];

var ESCADA = [
  { au: 'p1.mp3', v: 'reported', por: 'Measured in studies, again and again: reported.' },
  { au: 'p2.mp3', v: 'said', por: 'She uses the lightest verb, even though it was measured, and nobody quotes it.' },
  { au: 'p3.mp3', v: 'known', por: 'His mother told the story herself: known.' },
  { au: 'p4.mp3', v: 'thought', por: 'A popular opinion, and she disagrees: thought.' }
];
/* IX · o verbo que ela usou, por SOM (FM.som); a escada sobe a cada acerto */
var SOM_ESCADA = { formato: 'som', titulo: 'Which verb did she use?', nota: 'Not sure? Play the line again.', itens: [
  { a: 'Elite athletes are ', par: ['reported', 'known'], c: 0, b: ' to spend more time in deliberate practice.' },
  { a: 'They are also ', par: ['said', 'known'], c: 0, b: ' to have tried more sports as children.' },
  { a: 'Federer’s mother is ', par: ['thought', 'known'], c: 1, b: ' to have refused to coach him.' },
  { a: 'Golf is ', par: ['known', 'thought'], c: 1, b: ' to be a good model for learning.' }
] };

var EXPLICA = [
  { amigo: 'Ten thousand hours and you’re an expert. That’s science.', st: 'It’s said to be science, but …', meu: 'What would you need to see to believe it?' },
  { amigo: 'But elite athletes practice more, right?', st: 'They’re reported to … That part holds up.', meu: 'Name a skill where practice clearly matters.' },
  { amigo: 'So I should make my kids pick one sport early?', st: 'Many top athletes are thought to have …', meu: 'What would you tell a parent?' }
];
/* X · três amigos em cartas (FM.cartas) */
var CARTAS_AMIGO = { formato: 'cartas', titulo: 'Your friend is 100% sure. Tap a card. Answer without signing the claim.', fechada: 'Tap to open', cartas: EXPLICA.map(function (x, i) {
  return ['Your friend · ' + (i + 1), '“' + x.amigo + '”<br><em style="color:var(--ac2)">Start: ' + x.st + '</em><br><small>Then ask: ' + x.meu + '</small>'];
}) };

/* XI · achar a parte quebrada (FM.erro) */
var ERRO_TIDY = [
  { f: 'He <u>is said that he is</u> very rich.', r: 'is said to be' },
  { f: 'She is believed <u>to left</u> in 2010.', r: 'to have left' },
  { f: '<u>It is said Federer to have tried</u> ten sports.', r: 'Federer is said to have tried' },
  { f: 'The players <u>is</u> thought to train more.', r: 'are' },
  { f: 'The rule <u>says to be</u> true.', r: 'is said to be' }
];
var PRESA_TIDY = 'Name first + <b>is said to</b> + verb<br>Past inside: <b>to have</b> + third form<br>No topic: <b>It is said that</b> + sentence<br>One door, not both.';

var S = { i: 0, faixa: 1, fala: {}, resp: {}, armas: {},
  rg: { tema: '', n: 0, foi: {} }, video: { p: 0 } };

/* a escada da evidência: cinco degraus, cada afirmação sobe até onde a evidência paga */
function escada(sobe, atual) {
  return '<div class="td-escada">' + DEGRAUS.slice().reverse().map(function (d) {
    var aqui = Object.keys(sobe).filter(function (k) { return sobe[k] === d; });
    return '<div class="td-degrau ' + d + (atual === d ? ' on' : '') + '"><b>' + d.toUpperCase() + '</b><small>' + DEG_N[d] + '</small><span>' + aqui.map(function (k) { return '<i>' + k + '</i>'; }).join('') + '</span></div>';
  }).join('') + '<div class="td-chao">SAID IS NOT SHOWN</div></div>';
}
/* a corrente do boato */
function corrente(n) {
  var elos = [['?', 'who counted?'], ['SOME PSYCHOLOGIST', '“I think”'], ['A BOOK', '“every book”'], ['MARK', 'at the coffee machine']];
  return '<div class="td-corrente">' + elos.map(function (e, i) { var aceso = (n >= 3 && i === 0) || (n >= 2 && i <= 2 && i >= 1) || (n >= 0 && i === 3); return '<div class="td-elo' + (aceso ? ' on' : '') + (i === 0 ? ' fonte' : '') + '"><b>' + e[0] + '</b><small>' + e[1] + '</small></div>' + (i < 3 ? '<i class="td-seta">←</i>' : ''); }).join('') + '</div>';
}

var R = {};
R.capa = function () {
  return '<div class="capa"><div><span class="kick">MAIN SERIES · B2 · IS SAID TO · IS THOUGHT TO</span><h1>The Tidy <b>Story</b></h1>'
    + '<p class="sub"><i>People say it takes ten thousand hours.</i> Who counted? <b>Ten thousand hours is said to be the number.</b> Now the sentence knows it hasn’t signed anything.</p>'
    + '<div class="chipsx"><span class="pilula">X is said to …</span><span class="pilula">to have + third form</span><span class="pilula">said &lt; thought &lt; known</span><span class="pilula">Live Class · W·O·L·F</span></div>'
    + '<button type="button" class="btn cheio" data-a="ir" data-n="1">Climb the ladder</button>' + faixaLive() + '</div>'
    + '<div class="capa-r">' + escada({ '10,000 hours': 'said', 'more practice': 'reported' }, '') + '</div></div>';
};

R.regra = function (c) {
  var e = S.rg;
  var chips = '<div class="td-temas">' + REGRAS.map(function (t) { return '<button type="button" class="pilula' + (e.tema === t ? ' on' : '') + '" data-a="rg-t" data-v="' + h(t) + '">' + t + '</button>'; }).join('') + '</div>';
  if (!e.tema) return cab(c) + chips + '<p class="dica-aluno" style="text-align:center">Tap a rule you hear all the time.</p>';
  return cab(c) + chips + sequencia({ est: 'o', rot: '', t: '', p: '' }, REGRA_Q, e, 'rg', 'Keep your rule. At the end you’ll say it again, without signing it.').replace(/<div class="cab[\s\S]*?<\/p><\/div>/, '')
    + '<p class="so-prof dica-aluno" style="text-align:center">Write down the second answer. “They say that …”, “It is said that he …”: don’t correct yet.</p>';
};

R.copa = function (c) {
  var ouvidos = COPA.filter(function (x) { return (S.ouviu || {})[x[0]]; }).length;
  var esq = '<div class="lado-l">' + corrente(ouvidos - 1) + '<div class="td-quatro">' + COPA.map(function (x, i) { return '<div class="td-ouve vd"><div class="toca-linha">' + tocar(x[0]) + '<b>' + (i + 1) + ' · ' + x[1] + '</b></div>' + transcricao(x[0], TR[x[0]]) + '</div>'; }).join('') + '</div></div>';
  var dir = ouvidos < 4 ? '<p class="dica-aluno">Play the four lines in order.</p>' : FM.ex('cp', VM_COPA) + '<div class="pergunta vd"><small>THE WHOLE HOUR</small><h2>“So it is said. It is not shown.” That difference is the whole hour.</h2></div>';
  return cab(c) + '<div class="mesa-c">' + esq + '<div class="lado-l">' + dir + '</div></div>';
};

R.nome = function (c) {
  return cab(c) + FM.ex('nm', { formato: 'fala', itens: NOME_FALA, rotulo: 'Rumor', prox: 'Next rumor', diga: 'Say it with the name first', fim: 'Six names moved to the front, and nobody signed anything. Now say two of them the IT IS SAID THAT way.',
    lado: function (feitas, atual, ver) {
      if (atual < 0) return '<div class="td-cartao vd"><p><b class="td-nome frente">Six names</b> <span class="td-resto">moved to the front.</span></p></div>';
      var x = NOME[atual], nm = x.nome.replace(/^The /, 'the ').replace(/^His /, 'his ');
      return '<div class="td-cartao vd">' + (ver ? '<p><b class="td-nome frente">' + x.nome + '</b> <span class="td-resto">' + x.ops[0] + '</span></p><p class="td-velho"><s>' + x.pre + ' ' + nm + ' ' + x.pos + '</s></p>'
        : '<p>' + x.pre + ' <span class="td-nome">' + nm + '</span> ' + x.pos + '</p>') + '</div>';
    } });
};

R.tempo = function (c) {
  var em = ((S.fq || {}).tp || {}).em || {}, todos = SEPARA_TEMPO.itens.every(function (x, i) { return em[i] === x.c; });
  return cab(c) + '<div class="td-relogio"><span class="on">NOW · to + verb</span><span class="on">BEFORE · to have + third form</span></div>' + FM.ex('tp', SEPARA_TEMPO)
    + (todos ? '<p class="aprova" style="text-align:center">The reporting verb never moved; the time went inside. Say each sentence again about a famous person.</p>' : '<p class="dica-aluno" style="text-align:center">Look for the time clue in the sentence.</p>');
};

R.portas = function (c) {
  return cab(c) + FM.ex('pt', LIGA_PORTAS) + '<p class="dica-aluno" style="text-align:center">Both doors are correct English. The topic decides. Finish the last one with your own opinion.</p>';
};

R.video = function (c) {
  var e = S.video, corpo;
  if (e.p === 0) corpo = '<div class="mesa-c"><div class="lado-l">' + FM.ex('vr', ANTES_REGUA) + '</div>'
    + '<div class="lado-l"><div class="selo-v vd"><b>SEALED</b><small>About one minute. It opens after your answer.</small></div><div><button type="button" class="btn cheio" data-a="vd-p" data-n="1">Watch</button></div></div></div>';
  else if (e.p === 1) corpo = '<div class="mesa-video"><div class="video-col">' + iframe(YT, 'Practice', '&start=7&end=75') + '<small class="cred">0:07 to 1:15 · it stops by itself · tap ▶ to hear a line again</small></div><div class="lado-video">' + FM.ex('vt', VM_VIDEO) + '<div><button type="button" class="btn" data-a="vd-p" data-n="2">After the video</button></div></div></div>';
  else corpo = '<div class="td-depois"><div class="lado-l">' + FM.ex('vl', LIGA_DEPOIS) + '</div><div class="lado-l">' + DEPOIS.map(function (a, i) { return '<div class="pergunta vd ja"><small>YOUR TURN</small><h2>' + a.q + '</h2></div>' + mostra('vb' + i, a.h, 1); }).join('') + '</div></div>';
  return cab(c) + '<div class="tres-tempos">' + tempos3(e.p) + '</div>' + corpo;
};

R.escada = function (c) {
  var r = ((S.fq || {}).es || {}).esc || {}, subiu = {}, ult = '';
  ESCADA.forEach(function (x, i) { if (r[i] === SOM_ESCADA.itens[i].c) { subiu['claim ' + (i + 1)] = x.v; ult = x.v; } });
  var esq = '<div class="lado-l">' + escada(subiu, ult) + '</div>';
  var players = '<div class="td-quatro">' + ESCADA.map(function (x, i) {
    var ok = r[i] === SOM_ESCADA.itens[i].c;
    return '<div class="td-ouve vd"><div class="toca-linha">' + tocar(x.au) + '<b>THE RESEARCHER · CLAIM ' + (i + 1) + '</b></div>' + (ok ? transcricao(x.au, TR[x.au]) + '<p class="aprova">' + x.por + '</p>' : '') + '</div>';
  }).join('') + '</div>';
  return cab(c) + '<div class="mesa-c">' + esq + '<div class="lado-l">' + players + FM.ex('es', SOM_ESCADA) + '</div></div>';
};

R.explica = function (c) {
  return cab(c) + '<div class="td-um">' + FM.ex('ex', CARTAS_AMIGO) + '<p class="so-prof dica-aluno" style="text-align:center">Insist once: “But everyone says so!”</p></div>';
};

R.erros = function (c) {
  return cab(c) + FM.ex('er', { formato: 'erro', titulo: 'Five sentences are broken. Find the broken part. Say the fix.', itens: ERRO_TIDY, regra: PRESA_TIDY });
};

R.fim = function (c) {
  var r = S.rg.tema || 'practice makes perfect';
  return cab(c) + '<div class="fim">' + escritaFinal('fim', (S.txt || {}).fim || '', (S.salvo || {}).fim, '“' + r + '” is said to be true, but I’ve never seen who counted.\nMy city is said to …\nIt is thought that …', 'Your rule',
    ['is said to', 'is thought to', 'is known to', 'to have', 'It is said that'], ['YOUR RULE, WITHOUT SIGNING IT', 'Your rule from scene I, one thing people say about your city, and one thing that is really known.'])
    + '<div class="lado-fim">' + escada({ 'your rule': 'said' }, 'said')
    + '<div class="grande vd"><span><u>X is said / thought / known to</u> + verb</span><span><u>to have + third form</u> · the past goes inside</span><span><u>It is said that</u> · no topic</span><span>not <s>He is said that he …</s>, not <s>is said to tried</s></span></div>'
    + mostra('fim', '“Practice makes perfect” is said to be true, but I’ve never seen who counted.<br>My city is said to have the best coffee in the country.<br>It is known that the river flooded in 1983.', 1)
    + '<p class="hw"><a class="pilula" href="HW/" target="_blank" rel="noopener">Homework for the student →</a></p></div></div>';
};

TOQUES['rg-t'] = function (b, n, v) { S.rg.tema = v; };
TOQUES['vd-p'] = function (b, n) { S.video.p = n; };

/* 10/11/2026 · AS EXPLICAÇÕES (kit/formatos3.js) · G7 · uma cena curta nova (k: gx) antes de nome.
   Explicação 100% em inglês: see → notice → use (o aluno fala ou escreve uma frase dele no fim). */
var GX_EXPLICA = { formato: 'vira', titulo: 'The rumor, then the careful version. Watch the name move.',
  frases: [
    { de: ['People say that', '*Ava', 'practices', 'ten hours a day', '.'], para: ['*Ava', '+is said to', 'practice', 'ten hours a day', '.'], d: 'The name goes first. No that. After to, the clean verb.' },
    { de: ['People believe that', '*Mr. Reed', '*wrote', 'the rule', '.'], para: ['*Mr. Reed', '+is believed to have', '*written', 'the rule', '.'], d: 'Before now: to have + the third form.' },
    { de: ['Experts report that', '*the study', 'shows', 'a clear pattern', '.'], para: ['*The study', '+is reported to', 'show', 'a clear pattern', '.'], d: 'Same door. said, thought, believed, reported: the same shape.' }
  ],
  notaBotao: 'What moves?',
  nota: 'The name goes to the front and <b>that</b> disappears: <b>Ava is said to practice</b>. Now = <b>to + verb</b>. Before = <b>to have + third form</b>. Never “She is said that she …”.',
  pergunta: 'Your turn. Flip it out loud, then check.',
  treino: [
    { de: 'People say that Ben sleeps six hours a night.', r: 'Ben is <b>said to sleep</b> six hours a night.' },
    { de: 'Everyone thinks that Lia started the rumor.', r: 'Lia is <b>thought to have started</b> the rumor.' },
    { de: 'They believe that the coach trains alone.', r: 'The coach is <b>believed to train</b> alone.' },
    { de: 'Experts report that the school lost the files.', r: 'The school is <b>reported to have lost</b> the files.' }
  ],
  uso: { p: 'Your turn. Something people say about a famous person or about your city. Say it without that.', molde: ['… is said to …', '… is believed to have …'], ex: 'My city is said to have the best coffee. The mayor is believed to have started the plan.' } };
R.gx = function (c) { return cab(c) + FM.ex('gx_vira', GX_EXPLICA); };
