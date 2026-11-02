/* ============================================================
   EERILY QUIET · THE GOTHIC WRITING ROOM · LIVE 09/10/2026
   Main series C1 · Halloween · colocações advérbio + adjetivo: o
   advérbio escolhe o adjetivo (eerily quiet, bitterly cold, dimly lit,
   faintly familiar, utterly deserted, painfully slow, deathly pale,
   perfectly still); com adjetivo EXTREMO, absolutely / utterly /
   completely (utterly terrified), nunca very; com GRADUÁVEL, very /
   extremely / deeply / highly (highly unlikely, deeply sorry), nunca
   absolutely. A armadilha do português: "muito" serve para tudo.
   Erros universais: "very terrified", "absolutely scary", "strongly
   cold", "highly sorry", "eerie quiet" (sem -ly).
   O MUNDO: uma oficina de escrita gótica à luz de vela. O aluno ouve a
   abertura de "The Tell-Tale Heart" (Poe, 1843, domínio público),
   desmonta como o medo é construído, gira o "dial" de cada adjetivo,
   edita a página de um escritor iniciante e escreve a primeira página
   do próprio conto. A virada: "The house was very quiet" × "The house
   was eerily quiet" — a mesma cena, outro medo.
   O VÍDEO: The Tell-Tale Heart (UPA, 1953, narrado por James Mason),
   bCEdRES08Y4, conferido 09/10: incorporável, sem limite de idade.
   SÓ DOIS TRECHOS: 0:58–2:08 (a abertura: "very, very dreadfully
   nervous") e 3:20–4:12 (a noite, o silêncio, o coração). O crime e o
   corpo ficam de fora de propósito.
   VI conta de onde vem a história de terror gótica e por que a
   contamos no Halloween (pedido do Carlos, 08/10: a origem).
   A CARA: a escrivaninha do escritor à luz de vela (âmbar, pequena),
   a página datilografada em tinta clara sobre papel ESCURO, o dial de
   intensidade de bronze e as cartas de colocação.
   ============================================================ */
var YT = 'bCEdRES08Y4';
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'abre', est: 'o', min: 7, img: 'vela', rot: 'I · What Scares You', t: 'Before we write: what really frightens you?', p: 'Pick a card. Real opinions. Nobody is corrected here.' },
  { k: 'video', est: 'l', min: 10, img: 'quarto', rot: 'II · The Tell-Tale Heart', t: 'Edgar Allan Poe, 1843. Two short pieces.', p: 'Watch the opening and the night scene. Listen for how the narrator builds fear.' },
  { k: 'regra', est: 'f', min: 6, img: 'mesa', rot: 'III · The Rule', t: 'The adverb chooses the adjective.', p: 'Eerily quiet, bitterly cold, utterly terrified. Say each trap the right way, then tap it.' },
  { k: 'dial', est: 'o', min: 7, img: 'mesa', rot: 'IV · The Dial', t: 'Eight adjectives. Which adverb belongs?', p: 'Say the sentence with the adverb that sounds natural. Then tap it.' },
  { k: 'editor', est: 'o', min: 7, img: 'pagina', rot: 'V · The Editor', t: 'A beginner wrote this. Make it frightening.', p: 'Rewrite each “very” out loud. Then compare with the editor’s version.' },
  { k: 'origem', est: 'l', min: 7, extra: 1, img: 'tempestade', rot: 'VI · Why We Tell Them', t: 'Where do gothic stories come from?', p: 'Your teacher reads the story behind the stories. Then answer.' },
  { k: 'leitura', est: 'o', min: 7, extra: 1, img: 'vela', rot: 'VII · Read It Like Poe', t: 'Read the opening as the narrator.', p: 'Slowly. Stress the adverbs. Your teacher listens and gives one note.' },
  { k: 'quiz', est: 'f', min: 6, extra: 1, img: 'mesa', rot: 'VIII · Quick Check', t: 'Six pairs before the candle goes out.', p: 'Say the whole phrase. Then tap the adverb.' },
  { k: 'fim', est: 'w', min: 6, img: 'quarto', rot: 'IX · Your First Page', t: 'Write the opening of your own gothic tale.', p: 'About 150 words, at least five collocations from today. It goes to your My notes.' }
];

var ABRE = [
  { k: 'REAL FEAR', q: 'What frightens you more: monsters or silence?', fup: 'Why do you think that is?', st: ['Silence, definitely, because …', 'Monsters, because …'], ex: 'Silence, definitely. A monster you can see; a silence makes you imagine.' },
  { k: 'BOOKS', q: 'Has a book ever scared you more than a film?', fup: 'What made the difference?', st: ['Yes, … Because …', 'Never. …'], ex: 'Yes, Stephen King’s It. My imagination was far worse than any screen.' },
  { k: 'HALLOWEEN HERE', q: 'Some people say Halloween is an imported holiday in Brazil. What do you think?', fup: 'Should schools celebrate it?', st: ['I’d argue that …', 'To some extent …'], ex: 'I’d argue it’s more about fun than culture. Kids love the costumes either way.' },
  { k: 'WRITING', q: 'Do you write anything for pleasure: stories, a diary, posts?', fup: 'Where do your ideas come from?', st: ['I used to …', 'Not really, but …'], ex: 'I used to keep a diary. Now I just write long voice messages!' },
  { k: 'THE CLASSICS', q: 'Have you read any Edgar Allan Poe, or seen something based on his work?', fup: 'What stayed with you?', st: ['I’ve read …', 'Only …'], ex: 'Only The Raven, at school. I still remember “Nevermore”.' }
];
var FORMAS = [{ k: 'par', t: 'NATURAL PAIRS (EERILY QUIET)' }, { k: 'ext', t: 'UTTERLY + EXTREME' }, { k: 'very', t: 'VERY TERRIFIED', erro: 1 }, { k: 'abs', t: 'ABSOLUTELY SCARY', erro: 1 }];

var CAPS = [
  { k: 'THE OPENING', ini: 58, fim: 128, q: 'The narrator says he is “very, very dreadfully nervous”. What does “dreadfully” do that “very” doesn’t?', h: '“Dreadfully” adds fear and drama: it isn’t just a lot, it’s a frightening amount.' },
  { k: 'THE NIGHT', ini: 200, fim: 252, q: '“For an hour I did not move a muscle.” He hears a sound, “dull and muffled”. What is it, and how does the silence make it worse?', h: 'It’s the old man’s heart. Because the house is so eerily quiet, even a faint sound feels deafening.' }
];
var ANTES = [
  { q: 'Poe wrote this story in 1843. Why do you think it still scares people today?', h: 'Because the fear is inside the narrator’s head, and that never gets old.' },
  { q: 'An unreliable narrator says: “I’m not mad.” What makes you not trust somebody who says that?', h: 'People who are truly calm rarely need to insist on it.' }
];

var FITAS = [['THE ADVERB CHOOSES', 'eerily quiet · bitterly cold · dimly lit · deeply sorry'], ['EXTREME WORDS', 'utterly terrified · absolutely freezing · completely deserted (not very)'], ['GRADABLE WORDS', 'extremely scary · highly unlikely · deeply worried (not absolutely)'], ['REALLY, PRETTY', 'work with both: really terrified, really scary']];
var ARMAS = [
  ['EXTREME', 'I was very terrified.', 'I was <b>utterly</b> terrified.', 'terrified is already extreme: utterly, absolutely, completely. Not very.'],
  ['GRADABLE', 'The story was absolutely scary.', 'The story was <b>extremely</b> scary.', 'scary is gradable: very, extremely. absolutely goes with extreme words: absolutely terrifying.'],
  ['THE PAIR', 'It was strongly cold that night.', 'It was <b>bitterly</b> cold that night.', 'cold goes with bitterly. The adverb chooses the adjective.'],
  ['THE PAIR', 'I am highly sorry for the noise.', 'I am <b>deeply</b> sorry for the noise.', 'sorry goes with deeply, terribly, truly.'],
  ['THE PAIR', 'It’s strongly unlikely that he heard us.', 'It’s <b>highly</b> unlikely that he heard us.', 'likely and unlikely go with highly.'],
  ['-LY', 'The room was eerie quiet.', 'The room was <b>eerily</b> quiet.', 'Before an adjective: the adverb, with -ly.']
];

/* IV: o dial de cada adjetivo (a certa primeiro; a ordem na tela sai de ordem()) */
var DIAL = [
  { adj: 'quiet', frase: 'The street was ___ quiet. Not a single car.', ops: ['eerily', 'highly', 'heavily'], nota: 'eerily quiet: quiet in a way that feels wrong.' },
  { adj: 'cold', frase: 'It was ___ cold, and the wind cut through my coat.', ops: ['bitterly', 'strongly', 'highly'], nota: 'bitterly cold: painfully cold.' },
  { adj: 'deserted', frase: 'At midnight, the station was ___ deserted.', ops: ['utterly', 'very', 'deeply'], nota: 'deserted is extreme: utterly, completely.' },
  { adj: 'lit', frase: 'We walked down a long, ___ lit corridor.', ops: ['dimly', 'darkly', 'lowly'], nota: 'dimly lit: with very little light.' },
  { adj: 'familiar', frase: 'Her voice was ___ familiar, like a song from childhood.', ops: ['faintly', 'strongly', 'bitterly'], nota: 'faintly familiar: you almost remember.' },
  { adj: 'slow', frase: 'The clock was ___ slow. Midnight would never come.', ops: ['painfully', 'heavily', 'deeply'], nota: 'painfully slow: so slow it hurts.' },
  { adj: 'still', frase: 'The water was ___ still. Nothing moved.', ops: ['perfectly', 'strongly', 'highly'], nota: 'perfectly still: not one movement.' },
  { adj: 'pale', frase: 'When he saw the letter, he went ___ pale.', ops: ['deathly', 'darkly', 'highly'], nota: 'deathly pale: as pale as a dead person.' }
];

var EDITOR = [
  { fraco: 'The night was very cold.', forte: 'The night was bitterly cold.' },
  { fraco: 'The house was very quiet.', forte: 'The house was eerily quiet.' },
  { fraco: 'The hall was very dark.', forte: 'The hall was dimly lit, almost pitch-dark.' },
  { fraco: 'I was very scared.', forte: 'I was utterly terrified.' },
  { fraco: 'Then I heard a very small sound.', forte: 'Then I heard a faint, strangely familiar sound.' }
];

/* VI: a origem da história gótica e do conto de terror no Halloween (fatos: o verão de 1816 no lago de Genebra,
   o desafio de Byron e Frankenstein; Poe publica The Tell-Tale Heart em 1843; o Samhain celta) */
var ORIGEM = {
  txt: 'The idea of telling frightening stories on a dark night is very old. The Celts believed that on Samhain, the night of October 31st, the dead walked among the living, so families sat by the fire and told tales of spirits. Centuries later, in the summer of 1816, it was bitterly cold and wet in Switzerland: the year had no real summer. Stuck inside a villa by Lake Geneva, the poet Lord Byron challenged his friends to write a ghost story. Mary Shelley, only eighteen, began Frankenstein. Gothic fiction was born in rooms just like that: dimly lit, eerily quiet, full of imagination. In 1843, Edgar Allan Poe published The Tell-Tale Heart, and the horror moved inside the narrator’s mind. Today, every Halloween, we are still doing what the Celts did: sitting in the dark, telling stories.',
  qs: [
    { q: 'Why did the Celts tell tales of spirits on October 31st?', h: 'Because they believed that the dead walked among the living that night.' },
    { q: 'What was strange about the summer of 1816?', h: 'It was bitterly cold and wet: there was no real summer.' },
    { q: 'What happened at the villa by Lake Geneva?', h: 'Lord Byron challenged his friends to write a ghost story, and Mary Shelley began Frankenstein.' },
    { q: 'How did Poe change horror?', h: 'He moved it inside the narrator’s mind.' }
  ]
};

/* VII: a abertura de Poe (domínio público), com as colocações em <b> */
var POE = 'True! — nervous — very, very <b>dreadfully nervous</b> I had been and am; but why will you say that I am mad? The disease had <b>sharpened</b> my senses — not destroyed — not dulled them. Above all was the sense of hearing acute. I heard all things in the heaven and in the earth. I heard many things in hell. How, then, am I mad? Hearken! and observe how <b>healthily</b> — how <b>calmly</b> I can tell you the whole story.';
var NOTAS_LEITURA = ['Slow down on “dreadfully”.', 'Pause at every dash.', 'Make “calmly” sound anything but calm.', 'Stress the adverbs, not the nouns.'];

var QUIZ = [
  { a: 'The corridor was ', b: ' lit.', op: ['dimly', 'darkly', 'lowly'], nao: 'dimly lit.' },
  { a: 'I was ', b: ' terrified.', op: ['utterly', 'very', 'highly'], nao: 'Extreme word: utterly.' },
  { a: 'It’s ', b: ' unlikely that anyone heard.', op: ['highly', 'strongly', 'utterly'], nao: 'highly unlikely.' },
  { a: 'The night was ', b: ' cold.', op: ['bitterly', 'strongly', 'heavily'], nao: 'bitterly cold.' },
  { a: 'The film was ', b: ' scary.', op: ['extremely', 'absolutely', 'utterly'], nao: 'scary is gradable: extremely.' },
  { a: 'The forest was ', b: ' quiet.', op: ['eerily', 'eerie', 'highly'], nao: 'Before an adjective: eerily.' }
];

var S = { i: 0, faixa: 1, fala: {}, resp: {}, armas: {},
  abre: { sel: -1, foi: {}, formas: {} }, video: { p: 0, cap: 0, viu: {} }, dl: { n: 0, esc: -1 }, ed: { n: 0, viu: {} }, org: { ouviu: 0 }, lt: { nota: {} }, quiz: { esc: {} } };

function dialSvg(sel, ok) {
  var pos = sel < 0 ? -60 : [-60, 0, 60][sel];
  return '<svg class="dial-svg' + (ok ? ' ok' : '') + '" viewBox="0 0 200 200" aria-hidden="true"><defs><radialGradient id="bronze" cx="40%" cy="35%"><stop offset="0" stop-color="#c9a066"/><stop offset=".7" stop-color="#6b4a22"/><stop offset="1" stop-color="#2a1c0c"/></radialGradient></defs>'
    + '<circle cx="100" cy="100" r="86" fill="#120d08" stroke="#3a2a16" stroke-width="2"/>'
    + [-60, 0, 60].map(function (a) { var r = a * Math.PI / 180; return '<line x1="' + (100 + 70 * Math.sin(r)).toFixed(1) + '" y1="' + (100 - 70 * Math.cos(r)).toFixed(1) + '" x2="' + (100 + 82 * Math.sin(r)).toFixed(1) + '" y2="' + (100 - 82 * Math.cos(r)).toFixed(1) + '" stroke="#8a6a3a" stroke-width="3"/>'; }).join('')
    + '<g style="transform:rotate(' + pos + 'deg);transform-origin:100px 100px;transition:transform .4s"><circle cx="100" cy="100" r="54" fill="url(#bronze)"/><rect x="97" y="50" width="6" height="30" rx="3" fill="#f4dcae"/></g></svg>';
}

var R = {};
R.capa = function () {
  return '<div class="capa"><div><span class="kick">MAIN SERIES · C1 · THE GOTHIC WRITING ROOM</span><h1><b>Eerily</b> Quiet</h1>'
    + '<p class="sub">“The house was very quiet.” Now read it again: “The house was <b>eerily</b> quiet.” Same house. A different fear.</p>'
    + '<div class="chipsx"><span class="pilula">eerily quiet · bitterly cold</span><span class="pilula">utterly terrified</span><span class="pilula">not very terrified</span><span class="pilula">Live Class · W·O·L·F</span></div>'
    + '<button type="button" class="btn cheio" data-a="ir" data-n="1">Light the candle</button>' + faixaLive() + '</div>'
    + '<div class="capa-d"><div class="folha"><p>It was <b>bitterly</b> cold, and the house was <b>eerily</b> quiet. Somewhere below, <b>faintly</b>, something was beating.</p><span class="cursor"></span></div></div></div>';
};

R.abre = function (c) {
  return cartasPessoais(c, ABRE, S.abre, 'abre') + '<div class="partes so-prof"><h5>WHAT YOU HEAR · DON’T CORRECT</h5>' + FORMAS.map(function (f) { return '<button type="button" class="chip frase' + (f.erro ? ' erro-ouvido' : '') + (S.abre.formas[f.k] ? ' on' : '') + '" data-a="ab-f" data-v="' + f.k + '">' + f.t + '</button>'; }).join('') + '</div>';
};

R.video = function (c) {
  var e = S.video, corpo;
  if (e.p === 0) corpo = '<div class="mesa-c"><div class="lado-l">' + ANTES.map(function (a, i) { return '<div class="pergunta vd ja"><small>BEFORE YOU WATCH · ' + (i + 1) + '</small><h2>' + a.q + '</h2></div>' + mostra('va' + i, a.h, 1); }).join('') + '</div>'
    + '<div class="lado-l"><div class="selo-v vd"><b>TWO PIECES</b><small>The opening, and the night. Nothing more: the rest of the story you can read later, if you dare.</small></div><div><button type="button" class="btn cheio" data-a="vd-p" data-n="1">Watch the opening</button></div></div></div>';
  else {
    var k = CAPS[e.cap];
    corpo = '<div class="mesa-video"><div class="video-col">' + iframe(YT, 'The Tell-Tale Heart (1953)', '&start=' + k.ini + '&end=' + k.fim) + '<small class="cred">The Tell-Tale Heart (UPA, 1953) · narrated by James Mason · piece ' + (e.cap + 1) + ' of 2 · it stops by itself</small></div><div class="lado-video">'
      + '<div class="caps">' + CAPS.map(function (x, i) { return '<button type="button" class="chip' + (e.cap === i ? ' on' : '') + (e.viu[i] ? ' feito' : '') + '" data-a="vd-c" data-n="' + i + '">' + x.k + '</button>'; }).join('') + '</div>'
      + '<div class="pergunta vd ja"><small>' + k.k + '</small><h2>' + k.q + '</h2></div>' + mostra('vd' + e.cap, k.h, 1)
      + '<div>' + (e.cap < CAPS.length - 1 ? '<button type="button" class="btn" data-a="vd-c" data-n="' + (e.cap + 1) + '">The night scene</button>' : '<p class="aprova">“Dreadfully nervous”, “dull and muffled”: Poe never says “very scared”. Now let’s look at how that works.</p>') + '</div></div></div>';
  }
  return cab(c) + '<div class="tres-tempos">' + tempos3(e.p === 0 ? 0 : e.cap === 1 ? 2 : 1, 'vd-aba') + '</div>' + corpo;
};

R.regra = function (c) {
  return cab(c) + '<div class="fitas">' + FITAS.map(function (f) { return '<div class="fita vd"><small>' + f[0] + '</small><b>' + f[1] + '</b></div>'; }).join('') + '</div>' + armas(ARMAS, 'THE TRAPS · SAY IT RIGHT, THEN TAP');
};

R.dial = function (c) {
  var e = S.dl, n = e.n, fim = n >= DIAL.length;
  if (fim) return cab(c) + trilha(DIAL, n) + '<div class="foco"><div class="pergunta vd"><small>EIGHT DIALS</small><h2>eerily quiet · bitterly cold · utterly deserted · dimly lit · faintly familiar · painfully slow · perfectly still · deathly pale. Keep these eight: you’ll need them in scene IX.</h2></div></div>';
  var x = DIAL[n], ops = ordem(x.ops.map(function (o, k) { return [o, k]; }), n + 1), esc = e.esc, ok = esc === 0;
  var frase = x.frase;
  return cab(c) + trilha(DIAL, n) + '<div class="mesa-c"><div class="lado-l centro">' + dialSvg(ops.map(function (o) { return o[1]; }).indexOf(esc), ok) + '<b class="adj">' + x.adj + '</b></div>'
    + '<div class="lado-l"><div class="pergunta vd ja"><small>ADJECTIVE ' + (n + 1) + ' OF 8</small><h2>' + frase.replace('___', '<span class="gap">' + (ok ? x.ops[0] : '___') + '</span>') + '</h2></div>'
    + '<div class="tres-b grande-b">' + ops.map(function (o) { return '<button type="button" class="pilula' + (esc === o[1] ? (ok ? ' certo' : ' errado') : '') + '" data-a="dl" data-v="' + o[1] + '"' + (ok ? ' disabled' : '') + '>' + o[0] + '</button>'; }).join('') + '</div>'
    + (ok ? '<p class="aprova">' + x.nota + '</p><div><button type="button" class="btn" data-a="dl-prox">Next adjective</button></div>' : esc > 0 ? '<p class="recusa">It doesn’t sound natural with “' + x.adj + '”. Try another.</p>' : '<p class="dica-aluno">Say the sentence out loud with the adverb you choose.</p>') + '</div></div>';
};

R.editor = function (c) {
  var e = S.ed, n = e.n, fim = n >= EDITOR.length;
  var pagina = '<div class="folha editor-f">' + EDITOR.map(function (x, i) {
    var feito = e.viu[i]; return '<span class="fr' + (i === n ? ' on' : '') + (feito ? ' feito' : '') + '">' + (feito ? x.forte : x.fraco) + '</span> '; }).join('') + '</div>';
  if (fim) return cab(c) + '<div class="mesa-c"><div class="lado-l">' + pagina + '</div><div class="lado-l"><div class="pergunta vd"><small>THE EDITOR’S PAGE</small><h2>Same scene, five choices. Not one “very” left, and now the page is frightening.</h2></div></div></div>';
  var x = EDITOR[n], viu = e.viu[n];
  return cab(c) + trilha(EDITOR, n) + '<div class="mesa-c"><div class="lado-l">' + pagina + '</div><div class="lado-l"><div class="pede vd"><small>LINE ' + (n + 1) + ' · TOO WEAK</small><b>' + x.fraco + '</b></div>'
    + fala('ed' + n, ['It was bitterly …', 'utterly …', 'eerily …', 'dimly lit …'], ['bitterly', 'eerily', 'utterly', 'faintly', 'dimly', 'strangely'])
    + (viu ? '<div class="balao vd"><small>THE EDITOR’S VERSION</small><p>' + x.forte + '</p></div><div><button type="button" class="btn" data-a="ed-prox">Next line</button></div>'
      : '<div><button type="button" class="btn so-prof" data-a="ed-viu">Said it · show the editor’s version</button><p class="dica-aluno">Say your stronger version out loud.</p></div>') + '</div></div>';
};

R.origem = function (c) {
  var e = S.org, texto = e.ouviu ? '<p class="conto">' + ORIGEM.txt + '</p>'
    : '<p class="so-prof conto">' + ORIGEM.txt + '</p><p class="dica-aluno conto-vazio">Listen. Your teacher reads the story behind the stories.</p><div class="so-prof"><button type="button" class="btn" data-a="og-ouviu">Read it · show the text to the student</button></div>';
  return cab(c) + '<div class="mesa-c"><div class="lado-l"><div class="pergaminho vd"><small>THE STORY BEHIND THE STORIES</small><h3>From Samhain to Frankenstein to Poe</h3>' + texto + '</div></div>'
    + '<div class="lado-l hist-q">' + ORIGEM.qs.map(function (x, i) { return '<div class="pergunta vd ja"><small>' + (i + 1) + ' OF 4</small><h2>' + x.q + '</h2></div>' + mostra('og' + i, x.h); }).join('') + '</div></div>';
};

R.leitura = function (c) {
  var e = S.lt;
  return cab(c) + '<div class="mesa-c"><div class="lado-l"><div class="folha poe"><small>THE TELL-TALE HEART · EDGAR ALLAN POE, 1843</small><p>' + POE + '</p></div></div>'
    + '<div class="lado-l"><div class="pergunta vd ja"><small>READ IT ALOUD</small><h2>Read it as the narrator: slowly, a little too calmly. Stress the words in bold.</h2></div>'
    + '<h5 class="so-prof rot-ouve">ONE NOTE FOR THE STUDENT · TAP TO SHOW IT</h5><div class="tres-b">' + NOTAS_LEITURA.map(function (t, i) { return '<button type="button" class="pilula' + (e.nota[i] ? ' on' : '') + '" data-a="lt" data-n="' + i + '">' + t + '</button>'; }).join('') + '</div>'
    + mostra('lt', 'Notice: Poe never writes “very scared”. He writes “dreadfully nervous”, and he makes “calmly” sound terrifying.', 0) + '</div></div>';
};

R.quiz = function (c) {
  var e = S.quiz, todos = QUIZ.every(function (_, i) { return e.esc[i] === 0; });
  return cab(c) + '<div class="quiz">' + QUIZ.map(function (x, i) {
    var esc = e.esc[i], ok = esc === 0;
    return '<div class="q-linha vd' + (ok ? ' feito' : '') + '"><p>' + x.a + '<span class="gap">' + (ok ? x.op[0] : '___') + '</span>' + x.b + '</p><div class="tres-b">' + ordem(x.op.map(function (o, k) { return [o, k]; }), i + 1).map(function (o) {
      return '<button type="button" class="pilula' + (esc === o[1] ? (ok ? ' certo' : ' errado') : '') + '" data-a="qz" data-n="' + i + '" data-v="' + o[1] + '"' + (ok ? ' disabled' : '') + '>' + o[0] + '</button>'; }).join('') + '</div>' + (esc > 0 ? '<p class="recusa">' + x.nao + '</p>' : '') + '</div>';
  }).join('') + '</div>' + (todos ? '<p class="aprova" style="text-align:center">Six out of six. The candle can go out now.</p>' : '');
};

R.fim = function (c) {
  var f = S.abre.formas, lembra = FORMAS.filter(function (x) { return f[x.k]; }).map(function (x) { return x.t; });
  return cab(c) + '<div class="fim">' + escritaFinal('fim', (S.txt || {}).fim || '', (S.salvo || {}).fim, 'It was bitterly cold, and …\nThe house was eerily …\nThen, faintly, …', 'Your first page',
    ['It was bitterly cold', 'eerily quiet', 'dimly lit', 'utterly deserted', 'faintly familiar', 'painfully slow', 'perfectly still', 'deathly pale'], ['YOUR GOTHIC TALE · PAGE ONE', lembra.length ? 'In scene I your teacher heard: ' + lembra.join(', ') + '. Now write your opening: about 150 words and at least five collocations.' : 'About 150 words. Use at least five collocations from today.'])
    + '<div class="lado-fim"><div class="grande vd"><span>the pair: <u>eerily quiet · bitterly cold</u></span><span>extreme: <u>utterly terrified</u> · never <s>very terrified</s></span><span>gradable: <u>extremely scary</u> · never <s>absolutely scary</s></span></div>'
    + mostra('fim', 'It was bitterly cold the night I came back to my grandmother’s house. The street was utterly deserted, and the house was eerily quiet, as if it had been holding its breath for twenty years. The hall was dimly lit by a single candle that nobody could have left there. I stood perfectly still. Somewhere upstairs, faintly, a piano was playing a strangely familiar song, painfully slow, the song she used to sing to me. I went deathly pale. My grandmother had died in the spring.', 1)
    + '<p class="hw"><a class="pilula" href="HW/" target="_blank" rel="noopener">Homework for the student →</a></p></div></div>';
};

TOQUES['ab-f'] = function (b, n, v) { S.abre.formas[v] = !S.abre.formas[v]; };
TOQUES['vd-p'] = function (b, n) { S.video.p = n; };
TOQUES['vd-c'] = function (b, n) { S.video.viu[S.video.cap] = 1; S.video.cap = n; };
/* abas livres (23/10): BEFORE = p 0; WATCH = 1ª parte; AFTER = 2ª parte (a cena da noite) */
TOQUES['vd-aba'] = function (b, n) { if (n === 0) { S.video.p = 0; return; } S.video.viu[S.video.cap] = 1; S.video.p = 1; S.video.cap = n === 2 ? 1 : 0; };
TOQUES.dl = function (b, n, v) { S.dl.esc = +v; };
TOQUES['dl-prox'] = function () { S.dl = { n: S.dl.n + 1, esc: -1 }; };
TOQUES['ed-viu'] = function () { S.ed.viu[S.ed.n] = 1; };
TOQUES['ed-prox'] = function () { S.ed.n++; };
TOQUES['og-ouviu'] = function () { S.org.ouviu = 1; };
TOQUES.lt = function (b, n) { S.lt.nota[n] = !S.lt.nota[n]; };
TOQUES.qz = function (b, n, v) { S.quiz.esc[n] = +v; };
