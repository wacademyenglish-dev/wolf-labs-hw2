/* ============================================================
   TWO LIVES · THE SCALE · LIVE CLASS  06/10/2026
   Main series A2 · as … as · not as … as · just as · twice / half as …
   as · the same as · different from (e THAN volta só quando é "mais").
   Erros universais: "as expensive than", "the same that", "different of",
   "twice more expensive than", "so expensive as".
   O MUNDO (da aula velha): três vozes que mudaram de vida, o estudo dos
   1.600, Rosa (60) e Nuno (24), o debate cidade × interior. Os seis áudios
   conferidos no whisper em 06/10: NENHUM bate com a transcrição antiga
   (frases mais longas, fatos diferentes: o estudo diz "just as good as
   before"; a terceira voz diz "my days are twice as long now"). As
   perguntas foram refeitas pelo que o áudio diz. "flat" fica: é o áudio.
   A CARA: a BALANÇA — prato da cidade de um lado, prato do interior do
   outro; as … as e the same as deixam a balança reta; not as … as faz
   descer o prato que tem MAIS. Fila: FILA-LIVE-386.md · 076.
   ============================================================ */
var L = [
  { k: 'capa', est: null, img: 'fundo' },
  { k: 'abre', est: 'o', min: 7, img: 'cidade', rot: 'I · Your Two Lives', t: 'Everybody has two lives to compare.', p: 'Pick a card. Answer out loud. Nobody corrects you here.' },
  { k: 'vozes', est: 'l', min: 7, img: 'cidade', rot: 'II · Three Voices', t: 'Three people who changed their lives.', p: 'Play one. Pick what is true. Then say the whole sentence. You can read the text after.' },
  { k: 'regra', est: 'f', min: 6, img: 'fundo', rot: 'III · Six Shapes', t: 'Six shapes, and none of them says better.', p: 'Read each shape out loud. Then make one of your own.' },
  { k: 'balanca', est: 'f', min: 6, img: 'fundo', rot: 'IV · The Scale', t: 'Equal keeps the scale level. Not as … as: the side with MORE goes down.', p: 'Read the sentence out loud. Then tap: level, or which side goes down?' },
  { k: 'numeros', est: 'f', min: 6, img: 'fundo', rot: 'V · How Much, Exactly?', t: 'Two numbers. Pick the shape.', p: 'Read the two facts. Pick. Then say the whole sentence.' },
  { k: 'palavra', est: 'f', min: 6, img: 'fundo', rot: 'VI · One Wrong Word', t: 'Every mistake here is one word long.', p: 'Read it out loud. Tap the wrong word. Then say it right.' },
  { k: 'estudo', est: 'l', min: 7, extra: 1, img: 'cidade', rot: 'VII · The Study', t: '1,600 people. Six months. Two days a week at home.', p: 'Guess first, out loud. Then play the result.' },
  { k: 'estranhos', est: 'l', min: 7, extra: 1, img: 'campo', rot: 'VIII · Two Strangers', t: 'Two people you will never meet.', p: 'Play. Pick the right line. Then say it about them: She says… / He says…' },
  { k: 'debate', est: 'o', min: 7, extra: 1, img: 'campo', rot: 'IX · City or Country?', t: 'A short debate. You pick a side. Your teacher takes the other.', p: 'For each topic: your point, your teacher’s answer, your reply.' },
  { k: 'fim', est: 'w', min: 6, img: 'fundo', rot: 'X · Both Sides', t: 'Your answers from scene I come back.', p: 'Write your two lives: as … as, not as … as, the same as, different from. It goes to your My notes.' }
];

var TR = {
  'voz1.mp3': 'I moved away from the capital two years ago. The rent here is half as expensive. The internet is not as fast, and that was the hard part. But my street is not as loud either. I sleep now. I did not sleep before.',
  'voz2.mp3': 'Everybody warned me. They said the city is not as friendly as home. That is not true. It is just as friendly. You only have to ask first. What is not the same is the price. Everything here costs twice as much.',
  'voz3.mp3': 'Same city, same flat, a different life. My old job was three hours of travel every day. The new one is zero. The money is almost the same. My days are twice as long now, and they are mine.',
  'lab.mp3': 'Sixteen hundred people, one company, six months. Half of them worked from home two days a week. Before the test, their managers said the work would get worse. It did not get worse. It was just as good as before, and a third fewer people left the company.',
  'ela.mp3': 'I am sixty. I moved to the coast when I stopped working. The winter here is not as cold as people say. The summer is not as quiet. My old friends are four hours away, and that is the price. I pay it.',
  'ele.mp3': 'I went back to my parents’ town after five years away. Nobody understood. The jobs here are not as good, and that is true, but I see my father every day. He is seventy-one. Five years was long enough.'
};

var ABRE = [
  { k: 'Home or office', q: 'Working from home or at an office: is one just as good as the other?', fup: 'Why?', st: ['Home is just as … as …'], ex: 'Home is just as good as the office, but not as social.' },
  { k: 'Now and before', q: 'Where do you live now, and where did you live before? Is it the same?', fup: 'What do you miss?', st: ['My … now is not as … as …'], ex: 'My apartment now is not as big as my old one.' },
  { k: 'Different', q: 'What is different about your life now, compared with five years ago?', fup: 'Is it better?', st: ['My life now is different from …'], ex: 'My life now is different from before. I work from home.' }
];
var FORMAS = [{ k: 'asas', t: 'AS … AS / NOT AS … AS' }, { k: 'same', t: 'THE SAME AS / DIFFERENT FROM' }, { k: 'than', t: 'AS … THAN', erro: 1 }, { k: 'of', t: 'THE SAME THAT / DIFFERENT OF', erro: 1 }];

var VOZES = [
  { au: 'voz1.mp3', quem: 'THE FIRST VOICE', op: ['The rent is half as expensive as before.', 'The internet is just as fast as before.', 'The street is twice as loud.'], w: 'Half as expensive, and the internet is not as fast. But the street is not as loud either.' },
  { au: 'voz2.mp3', quem: 'THE SECOND VOICE', op: ['The city is just as friendly as home.', 'The city is not as friendly as home.', 'The prices are the same as at home.'], w: 'People warned this person, and they were wrong. The prices are not the same: twice as much.' },
  { au: 'voz3.mp3', quem: 'THE THIRD VOICE', op: ['The money is almost the same as before.', 'This person moved to a different city.', 'The days are not as long as before.'], w: 'Same city, same flat, almost the same money. And the days are twice as long now.' }
];

var SHAPES = [
  ['EQUAL', 'as + adjective + as', 'The winter here is as cold as at home.', 'meio'],
  ['LESS (THE USEFUL ONE)', 'not as … as', 'My apartment is not as expensive as yours.', 'menos'],
  ['EQUAL, WITH FORCE', 'just as … as', 'The work was just as good as before.', 'meio'],
  ['A NUMBER IN FRONT', 'twice / half / three times as … as', 'The office is twice as far as the old one.', 'num'],
  ['IDENTICAL', 'the same as · never the same that', 'My rent is the same as last year.', 'meio'],
  ['NOT THE SAME', 'different from · never different of', 'This town is different from the city.', 'dif']
];

var BAL = [
  { f: 'The town is not as noisy as the city.', k: 'a', w: 'The city has more noise: the city side goes down.' },
  { f: 'The coffee in the town is just as good as in the city.', k: 'meio', w: 'Equal: the scale stays level.' },
  { f: 'The city is not as quiet as the town.', k: 'b', w: 'The town has more quiet: the town side goes down.' },
  { f: 'The internet in the town is the same as in the city.', k: 'meio', w: 'Identical: level.' },
  { f: 'The rent in the city is twice as high as in the town.', k: 'a', w: 'The city has more, twice as much.' },
  { f: 'The town is not as expensive as the city.', k: 'a', w: 'The city is more expensive.' },
  { f: 'People in the city are as friendly as people in the town.', k: 'meio', w: 'Equal: level.' },
  { f: 'The city is not as green as the town.', k: 'b', w: 'The town has more green.' }
];

var FORMAS_N = ['half as {a} as', 'not as {a} as', 'just as {a} as', 'twice as {a} as', '{e} than'];
var NUMEROS = [
  { fa: 'winter: −2 °C', fb: 'winter: −2 °C', suj: 'The winter in A is', alvo: 'the winter in B.', a: 'cold', e: 'colder', k: 2, w: 'Same number: just as cold as.' },
  { fa: 'apartment: 50 m²', fb: 'apartment: 70 m²', suj: 'The apartment in A is', alvo: 'the apartment in B.', a: 'big', e: 'bigger', k: 1, w: 'Less, without saying smaller: not as big as.' },
  { fa: 'commute: 40 min', fb: 'commute: 80 min', suj: 'The commute in A is', alvo: 'the commute in B.', a: 'long', e: 'longer', k: 0, w: 'Exactly half: half as long as.' },
  { fa: 'rent: $2,400', fb: 'rent: $1,200', suj: 'The rent in A is', alvo: 'the rent in B.', a: 'expensive', e: 'more expensive', k: 3, w: 'A number goes in front: twice as expensive as. Never twice more expensive than.' },
  { fa: 'salary: $8,200', fb: 'salary: $6,800', suj: 'The salary in A is', alvo: 'the salary in B.', a: 'high', e: 'higher', k: 4, w: 'Simply more, no exact number: THAN comes back.' }
];

var PALAVRA = [
  { txt: 'My apartment is as good than yours.', mau: 5, bom: 'as' },
  { txt: 'My rent is the same than last year.', mau: 5, bom: 'as' },
  { txt: 'Working from home is different of an office.', mau: 5, bom: 'from' },
  { txt: 'The winter here is not as cold than people say.', mau: 7, bom: 'as' },
  { txt: 'This coffee is so expensive as the one at home.', mau: 3, bom: 'as' },
  { txt: 'The food here is the same that at home.', mau: 6, bom: 'as' }
];

var ESTUDO = { pre: ['The work gets worse.', 'The work stays just as good.', 'The work gets better.'], k: 0, q: 'After six months, the work was…', op: ['just as good as before', 'worse than before', 'twice as good as before'] };

var ESTRANHOS = [
  { au: 'ela.mp3', quem: 'ROSA, 60', img: 'campo', op: ['The winter is not as cold as people say.', 'The winter is not as cold than people say.'], k: 0, w: 'She says it, and adds: the summer is not as quiet. Her friends are four hours away.', terc: 'She says the winter is not as cold as people say.' },
  { au: 'ele.mp3', quem: 'NUNO, 24', img: 'cidade', op: ['The jobs here are not as good than in the city.', 'The jobs here are not as good.'], k: 1, w: 'AS never takes THAN. And he sees his father every day.', terc: 'He says the jobs there are not as good, but he sees his father every day.' }
];

var TEMAS = [
  { t: 'MONEY', dica: 'The rent in … is not as … as …', ex: 'The rent in the country is not as high as in the city.' },
  { t: 'TIME', dica: 'The commute is twice as … as …', ex: 'In the city, my commute is twice as long as in the country.' },
  { t: 'PEOPLE', dica: 'People here are just as … as …', ex: 'People in the city are just as friendly as people in the country.' },
  { t: 'NOISE AND NATURE', dica: 'The country is not as … as …', ex: 'The country is not as noisy as the city.' },
  { t: 'THE LAST WORD', dica: 'Life in … is different from … because …', ex: 'Life in the city is different from life in the country because everything is close.' }
];

var S = { i: 0, faixa: 1, fala: {}, resp: {}, armas: {},
  abre: { sel: -1, foi: {}, formas: {} }, vz: { esc: {} }, bl: { n: 0, esc: '' }, nm: { n: 0, esc: -1 }, pw: { n: 0, esc: -1 }, es: { aposta: -1, esc: -1 }, et: { esc: {} }, db: { lado: '', n: 0 } };

function balanca(inc, rot) {
  var ang = inc === 'a' ? -12 : inc === 'b' ? 12 : 0;
  return '<svg class="balanca" viewBox="0 0 600 300" role="img" aria-label="The scale"><rect width="600" height="300" rx="16" class="fundo-b"/>'
    + '<path d="M300 90 L300 260 M250 262 L350 262" class="poste"/><path d="M285 96 L300 70 L315 96 Z" class="topo-b"/>'
    + '<g class="braco" style="transform:rotate(' + ang + 'deg)">'
    + '<line x1="110" y1="90" x2="490" y2="90" class="barra-b"/>'
    + '<g transform="rotate(' + (-ang) + ' 110 90)"><line x1="110" y1="90" x2="70" y2="170" class="corda"/><line x1="110" y1="90" x2="150" y2="170" class="corda"/><path d="M50 170 Q110 205 170 170 Z" class="prato a' + (inc === 'a' ? ' pesa' : '') + '"/><text x="110" y="232" text-anchor="middle" class="rot-b">' + (rot ? rot[0] : 'THE CITY') + '</text></g>'
    + '<g transform="rotate(' + (-ang) + ' 490 90)"><line x1="490" y1="90" x2="450" y2="170" class="corda"/><line x1="490" y1="90" x2="530" y2="170" class="corda"/><path d="M430 170 Q490 205 550 170 Z" class="prato b' + (inc === 'b' ? ' pesa' : '') + '"/><text x="490" y="232" text-anchor="middle" class="rot-b">' + (rot ? rot[1] : 'THE TOWN') + '</text></g>'
    + '</g><circle cx="300" cy="90" r="9" class="pino-b"/>'
    + (inc === 'meio' ? '<text x="300" y="44" text-anchor="middle" class="nivel-b">LEVEL · EQUAL</text>' : '') + '</svg>';
}

var R = {};
R.capa = function () {
  return '<div class="capa"><div class="lado-a"><span class="kick">MAIN SERIES · A2 · TWO LIVES · ONE SCALE</span><h1>Two <b>Lives</b></h1>'
    + '<p class="sub">A big city, a small town, and the things that are <b>just as good</b> in both.</p>'
    + '<div class="chipsx"><span class="pilula">as cold as</span><span class="pilula">not as expensive as</span><span class="pilula">the same as · different from</span><span class="pilula">Live Class · W·O·L·F</span></div>'
    + '<button type="button" class="btn cheio" data-a="ir" data-n="1">Weigh both lives</button>' + faixaLive() + '</div>'
    + '<div class="capa-d">' + balanca('meio') + '</div></div>';
};

R.abre = function (c) {
  return cartasPessoais(c, ABRE, S.abre, 'abre') + '<div class="partes so-prof"><h5>WHAT YOU HEAR · DON’T CORRECT</h5>' + FORMAS.map(function (f) { return '<button type="button" class="chip frase' + (f.erro ? ' erro-ouvido' : '') + (S.abre.formas[f.k] ? ' on' : '') + '" data-a="ab-f" data-v="' + f.k + '">' + f.t + '</button>'; }).join('') + '</div>';
};

R.vozes = function (c) {
  var e = S.vz;
  return cab(c) + '<div class="ouve-3">' + VOZES.map(function (x, i) {
    var ouviu = (S.ouviu || {})[x.au], esc = e.esc[i], ok = esc === 0;
    return '<div class="ouve-c vd"><div class="toca-linha">' + tocar(x.au) + '<b>' + x.quem + '</b></div>'
      + (ouviu ? '<div class="versoes">' + ordem(x.op.map(function (o, j) { return [o, j]; }), i + 4).map(function (o) { return '<button type="button" class="versao' + (esc === o[1] ? (o[1] === 0 ? ' certo' : ' errado') : '') + '" data-a="vz" data-n="' + i + '" data-v="' + o[1] + '">' + o[0] + '</button>'; }).join('') + '</div>' : '<p class="transcricao vazia">Play it first.</p>')
      + (ok ? '<p class="aprova">' + x.w + '</p>' + transcricao(x.au, TR[x.au], 'vz' + i) : esc > 0 ? '<p class="recusa">Listen again. Nobody said better.</p>' : '') + '</div>';
  }).join('') + '</div>';
};

R.regra = function (c) {
  return cab(c) + '<div class="shapes">' + SHAPES.map(function (s, i) { return '<div class="shape ' + s[3] + '"><small>' + s[0] + '</small><b>' + s[1] + '</b><p>' + s[2] + '</p></div>'; }).join('') + '</div>'
    + '<div class="foco">' + fala('rg', ['My … is as … as … / is not as … as …'], ['as … as', 'not as … as', 'twice as … as', 'the same as', 'different from']) + '</div>';
};

R.balanca = function (c) {
  var e = S.bl, n = e.n, fim = n >= BAL.length;
  if (fim) return cab(c) + trilha(BAL, n) + '<div class="mesa-c"><div class="lado-l">' + balanca('meio') + '</div><div class="lado-l"><div class="pergunta vd"><small>EIGHT SENTENCES</small><h2>Equal keeps it level. Not as … as sends down the side with more.</h2></div></div></div>';
  var x = BAL[n], ok = e.esc === x.k;
  return cab(c) + trilha(BAL, n) + '<div class="mesa-c"><div class="lado-l">' + balanca(ok ? x.k : (e.esc && e.esc !== x.k ? e.esc : '')) + '</div><div class="lado-l"><div class="balao vd"><p>' + x.f + '</p></div>'
    + '<div class="tres-b">' + [['a', 'THE CITY GOES DOWN'], ['meio', 'LEVEL · EQUAL'], ['b', 'THE TOWN GOES DOWN']].map(function (o) { return '<button type="button" class="pilula grande-p' + (e.esc === o[0] ? (ok ? ' certo' : ' errado') : '') + '" data-a="bl" data-v="' + o[0] + '">' + o[1] + '</button>'; }).join('') + '</div>'
    + (ok ? '<p class="aprova">' + x.w + '</p><div><button type="button" class="btn" data-a="bl-prox">Next sentence</button></div>' : e.esc ? '<p class="recusa">The scale tipped the wrong way. Is it equal? If not, who has MORE?</p>' : '') + '</div></div>';
};

R.numeros = function (c) {
  var e = S.nm, n = e.n, fim = n >= NUMEROS.length;
  if (fim) return cab(c) + trilha(NUMEROS, n) + '<div class="foco"><div class="pergunta vd"><small>FIVE ROUNDS</small><h2>Equal, less, a number, or simply more? One question decides every round.</h2></div></div>';
  var x = NUMEROS[n], ok = e.esc === x.k;
  function forma(i) { return FORMAS_N[i].replace('{a}', x.a).replace('{e}', x.e); }
  return cab(c) + trilha(NUMEROS, n) + '<div class="foco"><div class="fatos"><div class="fato vd"><small>A</small><b>' + x.fa + '</b></div><div class="fato vd"><small>B</small><b>' + x.fb + '</b></div></div>'
    + '<div class="balao vd"><p>' + x.suj + ' <span class="lacuna-n">' + (ok ? forma(x.k) : '…') + '</span> ' + x.alvo + '</p></div><div class="tres-b centro">'
    + FORMAS_N.map(function (f, i) { return '<button type="button" class="pilula' + (e.esc === i ? (ok ? ' certo' : ' errado') : '') + '" data-a="nm" data-n="' + i + '">' + forma(i) + '</button>'; }).join('') + '</div>'
    + (ok ? '<p class="aprova" style="text-align:center">' + x.w + '</p><div style="text-align:center"><button type="button" class="btn" data-a="nm-prox">Next round</button></div>' : e.esc >= 0 ? '<p class="recusa" style="text-align:center">Read your sentence out loud. Does it match the two numbers?</p>' : '') + '</div>';
};

R.palavra = function (c) {
  var e = S.pw, n = e.n, fim = n >= PALAVRA.length;
  if (fim) return cab(c) + trilha(PALAVRA, n) + '<div class="foco"><div class="pergunta vd"><small>SIX REPAIRS</small><h2>If AS opens it, AS closes it. The same AS. Different FROM.</h2></div></div>';
  var x = PALAVRA[n], ws = x.txt.split(' '), ok = e.esc === x.mau;
  return cab(c) + trilha(PALAVRA, n) + '<div class="foco"><div class="palavras">' + ws.map(function (w, i) {
    var limpo = w.replace(/[.,]/g, ''), pont = w.slice(limpo.length);
    return '<button type="button" class="pal' + (e.esc === i ? (ok ? ' certo' : ' errado') : '') + '" data-a="pw" data-n="' + i + '">' + (ok && i === x.mau ? '<s>' + limpo + '</s> <b>' + x.bom + '</b>' : limpo) + pont + '</button>';
  }).join('') + '</div>'
    + (ok ? '<p class="aprova" style="text-align:center">Now say it right: “' + ws.map(function (w, i) { return i === x.mau ? x.bom : w; }).join(' ') + '”</p><div style="text-align:center"><button type="button" class="btn" data-a="pw-prox">Next sentence</button></div>' : e.esc >= 0 ? '<p class="recusa" style="text-align:center">That word is fine. Read it again and listen.</p>' : '') + '</div>';
};

R.estudo = function (c) {
  var e = S.es, ouviu = (S.ouviu || {})['lab.mp3'], ok = e.esc === 0;
  return cab(c) + '<div class="mesa-c"><div class="lado-l"><div class="pergunta vd ja"><small>BET FIRST</small><h2>Before the test, what did the managers say?</h2></div><div class="versoes">' + ESTUDO.pre.map(function (o, i) { return '<button type="button" class="versao' + (e.aposta === i ? ' marcada' : '') + '" data-a="es-a" data-n="' + i + '">' + o + '</button>'; }).join('') + '</div>'
    + (e.aposta >= 0 ? '<div class="toca-linha">' + tocar('lab.mp3') + '<b>THE RESULT</b></div>' : '<p class="dica-aluno">Bet out loud first. Then the recording opens.</p>') + '</div>'
    + '<div class="lado-l">' + (ouviu ? '<div class="pede vd"><small>AFTER SIX MONTHS</small><b>' + ESTUDO.q + '</b></div><div class="versoes">' + ESTUDO.op.map(function (o, i) { return '<button type="button" class="versao' + (e.esc === i ? (i === 0 ? ' certo' : ' errado') : '') + '" data-a="es" data-n="' + i + '">' + o + '</button>'; }).join('') + '</div>'
      + (ok ? '<p class="aprova">The managers said worse' + (e.aposta === 0 ? ', and so did you' : '') + '. It was just as good as before, and a third fewer people left. Nobody had to be better.</p>' + transcricao('lab.mp3', TR['lab.mp3'], 'lab') : e.esc > 0 ? '<p class="recusa">Play it again. Listen for “just as”.</p>' : '') : '<div class="balanca-p">' + balanca('', ['OFFICE', 'HOME']) + '</div>') + '</div></div>';
};

R.estranhos = function (c) {
  var e = S.et;
  return cab(c) + '<div class="dois-c">' + ESTRANHOS.map(function (x, i) {
    var ouviu = (S.ouviu || {})[x.au], esc = e.esc[i], ok = esc === x.k;
    return '<div class="estranho vd"><div class="foto-e" style="background-image:url(' + img(x.img) + ')"><span>' + x.quem + '</span></div><div class="toca-linha">' + tocar(x.au) + '</div>'
      + (ouviu ? '<div class="versoes">' + x.op.map(function (o, j) { return '<button type="button" class="versao' + (esc === j ? (j === x.k ? ' certo' : ' errado') : '') + '" data-a="et" data-n="' + i + '" data-v="' + j + '">' + o + '</button>'; }).join('') + '</div>' : '<p class="transcricao vazia">Play it first.</p>')
      + (ok ? '<p class="aprova">' + x.w + '</p><p class="dica-aluno">Say it about them: “' + x.terc + '”</p>' + transcricao(x.au, TR[x.au], 'et' + i) : esc !== undefined && esc !== x.k ? '<p class="recusa">Say it out loud and listen for the THAN.</p>' : '') + '</div>';
  }).join('') + '</div>';
};

R.debate = function (c) {
  var e = S.db;
  if (!e.lado) return cab(c) + '<div class="foco"><div class="pergunta vd ja"><small>PICK A SIDE</small><h2>City or country? Your teacher takes the other side, for real.</h2></div><div class="dois-l"><button type="button" class="lado-btn" data-a="db" data-v="THE CITY"><b>THE CITY</b></button><button type="button" class="lado-btn" data-a="db" data-v="THE COUNTRY"><b>THE COUNTRY</b></button></div></div>';
  var n = Math.min(e.n, TEMAS.length - 1), x = TEMAS[n], outro = e.lado === 'THE CITY' ? 'THE COUNTRY' : 'THE CITY';
  return cab(c) + trilha(TEMAS, e.n) + '<div class="mesa-c"><div class="lado-l">' + balanca(n % 2 ? 'b' : 'a', e.lado === 'THE CITY' ? ['YOU · CITY', 'TEACHER · COUNTRY'] : ['TEACHER · CITY', 'YOU · COUNTRY']) + '</div>'
    + '<div class="lado-l"><div class="pede vd"><small>ROUND ' + (n + 1) + ' OF 5 · ' + x.t + '</small><b>You: ' + e.lado.toLowerCase() + ' · Your teacher: ' + outro.toLowerCase() + '</b></div>'
    + fala('db' + n, [x.dica], ['as … as', 'not as … as', 'twice as … as', 'just as … as', 'different from']) + mostra('db' + n, x.ex, 1)
    + (n < TEMAS.length - 1 ? '<div><button type="button" class="btn" data-a="db-prox">Next round</button></div>' : '<p class="aprova">Five rounds. Nobody won, and nobody needed the word better.</p>') + '</div></div>';
};

R.fim = function (c) {
  var f = S.abre.formas, lembra = FORMAS.filter(function (x) { return f[x.k]; }).map(function (x) { return x.t; });
  return cab(c) + '<div class="fim">' + escritaFinal('fim', (S.txt || {}).fim || '', (S.salvo || {}).fim, 'My life now is different from …\nMy … is not as … as …\nMy … is the same as …\n… is just as … as …', 'Your two lives',
    ['My life now is different from ', ' is not as ', ' is just as ', ' is the same as ', ' twice as '], ['YOUR TWO LIVES', lembra.length ? 'In scene I your teacher heard: ' + lembra.join(', ') + '. Now compare again.' : 'Compare your two lives: as … as, not as … as, the same as, different from.'])
    + '<div class="lado-fim">' + balanca('meio') + '<div class="grande vd"><span><u>as</u> cold <u>as</u> · <u>not as</u> big <u>as</u></span><span><u>twice as</u> long <u>as</u></span><span>the same <u>as</u> · different <u>from</u></span></div>'
    + mostra('fim', 'My life now is different from my life in college.<br>My apartment is not as big as my old one.<br>My salary is the same as last year.<br>My new city is just as friendly as my hometown.', 1)
    + '<p class="hw"><a class="pilula" href="HW/" target="_blank" rel="noopener">Homework for the student →</a></p></div></div>';
};

TOQUES['ab-f'] = function (b, n, v) { S.abre.formas[v] = !S.abre.formas[v]; };
TOQUES.vz = function (b, n, v) { S.vz.esc[n] = +v; };
TOQUES.bl = function (b, n, v) { S.bl.esc = v; };
TOQUES['bl-prox'] = function () { S.bl = { n: S.bl.n + 1, esc: '' }; };
TOQUES.nm = function (b, n) { S.nm.esc = n; };
TOQUES['nm-prox'] = function () { S.nm = { n: S.nm.n + 1, esc: -1 }; };
TOQUES.pw = function (b, n) { S.pw.esc = n; };
TOQUES['pw-prox'] = function () { S.pw = { n: S.pw.n + 1, esc: -1 }; };
TOQUES['es-a'] = function (b, n) { S.es.aposta = n; };
TOQUES.es = function (b, n) { S.es.esc = n; };
TOQUES.et = function (b, n, v) { S.et.esc[n] = +v; };
TOQUES.db = function (b, n, v) { S.db.lado = v; };
TOQUES['db-prox'] = function () { S.db.n++; };
