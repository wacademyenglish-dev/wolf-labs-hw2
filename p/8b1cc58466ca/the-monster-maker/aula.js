/* ============================================================
   THE MONSTER MAKER · STUDIO 13 · NIGHT SHOOT · LIVE 09/10/2026
   (refeita para ADULTOS em 09/10 à noite, pedido do Carlos: "a aula do
   A1, do Halloween, está muito infantil... é aula para adultos". A
   versão de oficina de fantasia ficou em *.antes-do-adulto.)
   Main series A1 · Halloween · has / has got para DESCREVER (He’s got
   scars = He has scars; I / you / we / they have / 've got), a negativa
   (It hasn’t got a mouth / It doesn’t have a mouth), a pergunta (Has it
   got fangs? Yes, it has. / Does it have…?) e a ordem tamanho + cor +
   coisa (two small yellow eyes), cor sem -s.
   Erros universais: "It have got", "He has got grey" (a cor do corpo é
   IS grey), "hair black", "two reds eyes", "It don’t have", "Have he
   got…?".
   O MUNDO: o estúdio 13, filmagem noturna de um filme de terror. O aluno
   é o designer de criaturas: preenche a ficha da criatura (o retrato
   cresce na tela), faz o casting com as fichas dos monstros clássicos
   (Guess Who com o professor) e, na festa de encerramento, desenha o
   convidado fantasiado que o professor descreve.
   O VÍDEO: o trailer de Frankenstein (2025, Guillermo del Toro),
   8aulMPhE12g (2:23, conferido 09/10: incorporável, sem limite de
   idade). 0:00–1:00 a criatura lembra ("I remember… pieces"); 1:00–2:23
   o criador ("Victor Frankenstein. My creator.").
   VI conta por que esculpimos abóboras (pedido do Carlos, 08/10).
   A CARA: ficha de produção de cinema à noite — papel-carvão, fita de
   claquete, verde-cadáver e âmbar de lâmpada. Nada de cor de bala.
   ============================================================ */
var YT = '8aulMPhE12g';
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'abre', est: 'o', min: 7, img: 'estudio', rot: 'I · Before the Shoot', t: 'Before the shoot: you, Halloween and horror films.', p: 'Pick a card. Answer. Nobody is corrected here.' },
  { k: 'palavras', est: 'l', img: 'estudio', rot: 'II · The Words', t: 'Five words from the video.', p: 'Learn the words before you watch. Then listen for them: they turn yellow in the video.' },
  { k: 'video', est: 'l', min: 10, img: 'estudio', rot: 'III · The Trailer', t: 'Frankenstein: the creature tells his story.', p: 'Before and during the trailer: answer out loud. Then True or Lie.' },
  { k: 'falas', est: 'l', extra: 1, img: 'estudio', rot: 'IV · Line by Line', t: 'Every line of the video, one by one.', p: 'Tap a line. Hear it again. The lines with yellow words open the explanation.' },
  { k: 'regra', est: 'f', min: 6, img: 'camarim', rot: 'V · The Rule', t: 'He’s got long black hair.', p: 'has / has got · hasn’t got · Has it got…? Say each trap the right way, then tap it.' },
  { k: 'oficina', est: 'o', min: 7, img: 'camarim', rot: 'VI · The Creature Sheet', t: 'Design the creature. Say every part.', p: 'Choose a part. Then say the sentence: It’s got …' },
  { k: 'adivinha', est: 'o', min: 7, img: 'estudio', rot: 'VII · Casting', t: 'Eight monsters in the casting files. Your teacher chose one.', p: 'Ask: Has it got fangs? Then tap the monsters that are out.' },
  { k: 'historia', est: 'l', min: 7, extra: 1, img: 'abobora', rot: 'VIII · Why Pumpkins?', t: 'Why do we make faces in pumpkins?', p: 'Your teacher reads the story. Then answer.' },
  { k: 'ditado', est: 'l', min: 7, extra: 1, img: 'camarim', rot: 'IX · The Wrap Party', t: 'Three guests in costume. Your teacher describes one. You draw it.', p: 'Listen and draw on paper (or on the board). Then compare.' },
  { k: 'quiz', est: 'f', min: 6, extra: 1, img: 'estudio', rot: 'X · Quick Check', t: 'Six quick ones before the wrap.', p: 'Say the whole sentence. Then tap the word.' },
  { k: 'fim', est: 'w', min: 6, img: 'abobora', rot: 'XI · Your Creature', t: 'Write the creature file for your film.', p: 'Five sentences. It goes to your My notes.' }
];

var ABRE = [
  { k: 'HALLOWEEN', q: 'Is Halloween a big thing where you live?', fup: 'What do people do?', st: ['Yes, …', 'Not really, …'], ex: 'Not really. Some bars have a Halloween party.' },
  { k: 'COSTUMES', q: 'Do you wear costumes? At Carnival, at parties?', fup: 'What is a good costume for you?', st: ['Yes, I do. …', 'No, I don’t. …'], ex: 'Yes! A vampire. It’s got big fangs and a black cape.' },
  { k: 'HORROR FILMS', q: 'Do you watch horror films?', fup: 'Alone or with friends?', st: ['Yes, I …', 'No, I …'], ex: 'Yes, but never alone! I watch them with my sister.' },
  { k: 'THE SCARIEST', q: 'Do you know a scary film? What is it?', fup: 'Why is it scary?', st: ['It’s …', 'For me, …'], ex: 'The Exorcist. The girl’s voice is terrible.' },
  { k: 'THE BEST MONSTER', q: 'Vampires, zombies or ghosts?', fup: 'Why?', st: ['Vampires, because …', 'Zombies, because …'], ex: 'Vampires. They’re elegant, and they never get old.' }
];
var FORMAS = [{ k: 'got', t: 'HE’S GOT / HE HAS' }, { k: 'nao', t: 'IT HASN’T GOT' }, { k: 'have', t: 'HE HAVE GOT', erro: 1 }, { k: 'ordem', t: 'HAIR BLACK', erro: 1 }];

var ANTES = [
  { q: 'This is a trailer for Frankenstein. Do you know the story?', h: 'Yes. A scientist makes a man from dead bodies.' },
  { q: 'Imagine the creature. What has it got?', h: 'It’s got scars. It’s got big, sad eyes.' }
];
var CAPS = [
  { k: 'WHO AM I?', ini: 0, fim: 60, q: 'The creature says: “I remember… pieces.” Look at him. What has he got?', h: 'He’s got long black hair. He’s got scars and stitches on his body.' },
  { k: 'MY CREATOR', ini: 60, fim: 143, q: 'Who is Victor Frankenstein?', h: 'He’s the creator. The creature is his work.' }
];
var DEB_VM = { formato: "verdadeOuMentira", titulo: "True or Lie? If it’s a lie, say the true line.", itens: [
  {"f": "The creature says: “I remember… pieces.”", "t": true, "tm": "0:27"},
  {"f": "He remembers one man.", "t": false, "tm": "0:35", "c": "No. “Memories of different men.”"},
  {"f": "He finds a name: Victor Frankenstein.", "t": true, "tm": "0:52"},
  {"f": "He calls Victor “my friend”.", "t": false, "tm": "1:08", "c": "No. “My creator.”"},
  {"f": "He asks Victor for money.", "t": false, "tm": "1:17", "c": "No. He wants one thing: love."},
  {"f": "If Victor says no, the creature is angry.", "t": true, "tm": "1:33"}
] };
var DEB_GO = {
  "formato": "reacao",
  "titulo": "Last call · Monster or victim?",
  "quem": "The director",
  "fala": "The director: “One last question for the film. Is the creature a monster or a victim?”",
  "reacoes": [
    [
      "A victim",
      "A victim. He hasn’t got a family. He hasn’t got a name.",
      "“Yes. That is why the audience loves him.”"
    ],
    [
      "A monster",
      "A monster. He’s got scars and he’s angry.",
      "“Scary. Good for a horror film.”"
    ],
    [
      "Both",
      "Both. He’s got a sad face, but he’s angry.",
      "“Perfect. That is the film.”"
    ]
  ]
};
var SEG0 = [0, 60];   /* o trecho de abertura do Play (antes de qualquer ▶) */
var DEB_SEG = [[0, 60], [60, 100]];   /* os trechos limpos: o ▶ toca só dentro de um deles */
/* o ▶ recarrega o vídeo no trecho limpo da linha (o trailer fora de 0–1:40 tem a ação e o "Now, run."); sem vídeo na tela, o Play carrega no mesmo ponto */
window.addEventListener('load', function () {
  TOQUES['fq-pula'] = function (b, n, v, c) {
    var t = +v, g = null; DEB_SEG.forEach(function (x) { if (t >= x[0] && t < x[1]) g = x; });
    if (!g) return false;
    S.depSeg = [t, g[1]];
    var fr = document.querySelector('#palco .video iframe');
    if (!fr) return false;
    fr.src = fr.src.replace(/([?&])start=\d+/, '$1start=' + t).replace(/([?&])end=\d+/, '$1end=' + g[1]).replace(/&autoplay=\d/, '') + '&autoplay=1';
    return false;
  };
});
var DEB_PASSOS = [{"pele": "#3b4a3c"}, {"corOlho": "#e3b53c"}, {"cabelo": "longo"}, {"marca": "pontos"}, {"cabeca": "parafusos"}, {"pele": "#7d9479"}];   /* o retrato da criatura (monstro() da aula): cada linha certa acrescenta uma parte */

var FITAS = [['HE, SHE, IT', 'He’s got scars. = He has scars.'], ['I, YOU, WE, THEY', 'Vampires have got fangs. = They have fangs.'], ['NOT · QUESTION', 'It hasn’t got a name. · Has it got fangs? Yes, it has.'], ['SIZE, COLOR, THING', 'two small yellow eyes · no -s on colors']];
var ARMAS = [
  ['HAS', 'The creature have got scars.', 'The creature <b>has</b> got scars.', 'he, she, it: has. Or: He’s got.'],
  ['IS FOR THE SKIN COLOR', 'He has got grey.', 'He <b>is</b> grey.', 'The color of the body: is. The parts: has got.'],
  ['COLOR FIRST', 'He’s got hair black.', 'He’s got <b>black hair</b>.', 'The color comes before the thing.'],
  ['NO -S ON COLORS', 'She’s got two reds eyes.', 'She’s got two <b>red</b> eyes.', 'Colors never take -s.'],
  ['NOT', 'The mummy don’t have hair.', 'The mummy <b>hasn’t got</b> hair.', 'Or: It doesn’t have hair.'],
  ['THE QUESTION', 'Have he got fangs?', '<b>Has</b> he got fangs?', 'he: Has he got…? Yes, he has. / No, he hasn’t.']
];

/* IV: a ficha da criatura (cada opção: o rótulo, a frase e o que muda no retrato) */
var PARTES = [
  { k: 'SKIN', ops: [['grey-green', 'It’s grey-green.', { pele: '#7d9479' }], ['grey', 'It’s grey.', { pele: '#8d8c88' }], ['pale', 'It’s very pale.', { pele: '#cfc6b6' }]] },
  { k: 'EYES', ops: [['two yellow eyes', 'It’s got two small yellow eyes.', { olhos: 2, corOlho: '#e3b53c' }], ['one white eye', 'It’s got one big white eye.', { olhos: 1, corOlho: '#e9e4da' }], ['two red eyes', 'It’s got two red eyes.', { olhos: 2, corOlho: '#c8323c' }]] },
  { k: 'FACE', ops: [['stitches', 'It’s got long black stitches on its face.', { marca: 'pontos' }], ['a big scar', 'It’s got a big scar on its face.', { marca: 'cicatriz' }], ['no scars', 'It hasn’t got scars.', { marca: null }]] },
  { k: 'HEAD AND NECK', ops: [['two bolts', 'It’s got two metal bolts in its neck.', { cabeca: 'parafusos' }], ['two horns', 'It’s got two black horns.', { cabeca: 'chifres' }], ['nothing', 'It hasn’t got bolts or horns.', { cabeca: null }]] },
  { k: 'MOUTH', ops: [['two fangs', 'It’s got two long white fangs.', { boca: 'presas' }], ['sharp teeth', 'It’s got a big mouth with sharp teeth.', { boca: 'dentes' }], ['no mouth', 'It hasn’t got a mouth!', { boca: 'nada' }]] },
  { k: 'HAIR', ops: [['long black hair', 'It’s got long black hair.', { cabelo: 'longo' }], ['short white hair', 'It’s got short white hair.', { cabelo: 'curto' }], ['no hair', 'It hasn’t got hair.', { cabelo: null }]] }
];
var BASE = { pele: '#7d9479', olhos: 2, corOlho: '#e3b53c', marca: null, cabeca: null, boca: 'linha', cabelo: null };

/* V: o casting · oito fichas de monstros do cinema (o professor escolhe um em segredo) */
var MONSTROS = [
  { k: 'DRACULA', f: 'Dracula · 1931', t: ['fangs', 'a black cape', 'black hair', 'red eyes'] },
  { k: 'THE MUMMY', f: 'The Mummy · 1932', t: ['bandages', 'no hair', 'two small eyes'] },
  { k: 'THE WEREWOLF', f: 'The Wolf Man · 1941', t: ['fangs', 'claws', 'a tail', 'a lot of hair'] },
  { k: 'THE WITCH', f: 'The Wizard of Oz · 1939', t: ['green skin', 'a black hat', 'a long nose', 'black hair'] },
  { k: 'THE ZOMBIE', f: 'Night of the Living Dead · 1968', t: ['grey skin', 'old clothes', 'one arm'] },
  { k: 'THE CREATURE', f: 'Frankenstein · 2025', t: ['scars', 'stitches', 'long black hair', 'grey skin'] },
  { k: 'THE GHOST', f: 'A Ghost Story · 2017', t: ['a white sheet', 'two black eyes', 'no legs'] },
  { k: 'THE INVISIBLE MAN', f: 'The Invisible Man · 1933', t: ['bandages', 'a hat', 'dark glasses', 'a coat'] }
];
var SEGREDO = [5, 2, 7];   /* rodízio fixo (sem Math.random): o mesmo nos dois lados da sala */

/* VI: por que esculpimos abóboras, em A1 */
var HIST = {
  txt: 'This is an old story from Ireland. On October 31st, people are afraid of bad spirits. So they take a turnip, a small white vegetable, and they make a face in it. They put a little light inside. The face is scary, and the spirits go away! Then Irish families go to America. In America there are pumpkins. A pumpkin is big, it’s orange, and it’s easy to cut. So now we make faces in pumpkins. Its name is jack-o’-lantern.',
  qs: [
    { q: 'Where is this story from?', h: 'From Ireland.' },
    { q: 'What has the face got? Look.', h: 'In a turnip, a small white vegetable.' },
    { q: 'Is the face scary or funny?', h: 'It’s scary, for the bad spirits.' },
    { q: 'What is a pumpkin like?', h: 'It’s big, it’s orange, and it’s easy to cut.' }
  ]
};

/* VII: a festa de encerramento · o ditado desenhado (o professor lê; o aluno desenha) */
var DITADOS = [
  { txt: 'This guest is grey-green. He’s got two small yellow eyes. He’s got long black stitches on his face and two metal bolts in his neck. He hasn’t got hair.', m: { pele: '#7d9479', olhos: 2, corOlho: '#e3b53c', marca: 'pontos', cabeca: 'parafusos', boca: 'linha', cabelo: null } },
  { txt: 'This guest is very pale. She’s got two red eyes and two long white fangs. She’s got long black hair. She hasn’t got scars.', m: { pele: '#cfc6b6', olhos: 2, corOlho: '#c8323c', marca: null, cabeca: null, boca: 'presas', cabelo: 'longo' } },
  { txt: 'This guest is grey. He’s got one big white eye and a big scar on his face. He’s got a big mouth with sharp teeth, two black horns and short white hair.', m: { pele: '#8d8c88', olhos: 1, corOlho: '#e9e4da', marca: 'cicatriz', cabeca: 'chifres', boca: 'dentes', cabelo: 'curto' } }
];

var QUIZ = [
  { a: 'The creature ', b: ' got long black hair.', op: ['has', 'have', 'is'], nao: 'he, she, it: has got.' },
  { a: 'She’s got two ', b: ' eyes.', op: ['red', 'reds', 'eyes red'], nao: 'Colors never take -s.' },
  { a: 'The ghost ', b: ' got legs.', op: ['hasn’t', 'don’t', 'haven’t'], nao: 'it: hasn’t got.' },
  { a: '', b: ' Dracula got fangs? Yes, he has.', op: ['Has', 'Have', 'Does'], nao: 'Has he got…?' },
  { a: 'The witch ', b: ' green.', op: ['is', 'has got', 'have'], nao: 'The color of the body: is.' },
  { a: 'Werewolves have got ', b: '.', op: ['long black claws', 'claws long black', 'long blacks claws'], nao: 'Size, color, thing. No -s on colors.' }
];

var S = { i: 0, faixa: 1, fala: {}, resp: {}, armas: {},
  abre: { sel: -1, foi: {}, formas: {} }, video: { p: 0, cap: 0, viu: {} }, of: { n: 0, esc: {} }, ad: { r: 0, fora: {}, revela: 0 }, hist: { ouviu: 0 }, dt: { n: 0, mostra: 0 }, quiz: { esc: {} } };

/* o retrato da criatura em SVG (cabeça e ombros, luz de cima) */
function monstro(o, mini) {
  var m = {}; for (var k in BASE) m[k] = BASE[k]; for (var j in o) m[j] = o[j];
  var p = m.pele, s = '<svg class="monstro' + (mini ? ' mini' : '') + '" viewBox="0 0 200 220" role="img" aria-label="A creature">';
  s += '<defs><radialGradient id="luzc" cx=".5" cy=".18" r=".8"><stop offset="0" stop-color="#fff" stop-opacity=".22"/><stop offset=".6" stop-color="#fff" stop-opacity="0"/></radialGradient></defs>';
  /* o casaco e o pescoço */
  s += '<path d="M18 220 Q24 176 70 166 L130 166 Q176 176 182 220 Z" fill="#1c1a20"/><path d="M70 166 L100 206 L130 166 Z" fill="#2a2730"/>';
  s += '<rect x="78" y="150" width="44" height="26" fill="' + p + '"/><rect x="78" y="150" width="44" height="26" fill="#000" opacity=".22"/>';
  if (m.cabeca === 'parafusos') s += '<rect x="64" y="154" width="16" height="9" rx="2" fill="#6d6f74"/><rect x="120" y="154" width="16" height="9" rx="2" fill="#6d6f74"/><rect x="60" y="152" width="6" height="13" rx="2" fill="#9a9ca2"/><rect x="134" y="152" width="6" height="13" rx="2" fill="#9a9ca2"/>';
  /* o cabelo comprido fica atrás da cabeça */
  if (m.cabelo === 'longo') s += '<path d="M50 70 Q48 30 100 28 Q152 30 150 70 L156 168 Q140 150 138 120 L62 120 Q60 150 44 168 Z" fill="#141216"/>';
  if (m.cabeca === 'chifres') s += '<path d="M64 52 Q46 30 52 6 Q66 30 78 44 Z" fill="#141216"/><path d="M136 52 Q154 30 148 6 Q134 30 122 44 Z" fill="#141216"/>';
  /* a cabeça: alta, de topo reto */
  s += '<path d="M58 54 Q58 36 100 36 Q142 36 142 54 L144 118 Q144 156 100 160 Q56 156 56 118 Z" fill="' + p + '"/>';
  s += '<path d="M58 54 Q58 36 100 36 Q142 36 142 54 L144 118 Q144 156 100 160 Q56 156 56 118 Z" fill="url(#luzc)"/>';
  s += '<path d="M60 120 Q62 154 100 160 Q138 154 140 120 Q120 146 100 146 Q80 146 60 120 Z" fill="#000" opacity=".16"/>';
  if (m.cabelo === 'longo') s += '<path d="M56 74 Q60 38 100 36 Q140 38 144 74 Q126 52 100 54 Q74 52 56 74 Z" fill="#141216"/>';
  if (m.cabelo === 'curto') s += '<path d="M58 60 L62 38 L72 50 L78 32 L88 46 L96 30 L104 46 L112 30 L120 46 L128 34 L134 50 L140 40 L142 60 Q120 48 100 48 Q80 48 58 60 Z" fill="#e6e2da"/>';
  /* a testa pesada e os olhos */
  s += '<path d="M66 86 Q100 76 134 86 L134 92 Q100 84 66 92 Z" fill="#000" opacity=".28"/>';
  var xs = m.olhos === 1 ? [100] : [82, 118], r = m.olhos === 1 ? 13 : 8;
  xs.forEach(function (x) { s += '<ellipse cx="' + x + '" cy="100" rx="' + (r + 4) + '" ry="' + (r + 1) + '" fill="#000" opacity=".3"/><circle cx="' + x + '" cy="100" r="' + r + '" fill="' + m.corOlho + '"/><circle cx="' + x + '" cy="100" r="' + (r * 0.36) + '" fill="#0c0b0e"/>'; });
  /* as marcas */
  if (m.marca === 'pontos') {
    s += '<path d="M62 68 Q100 60 138 68" stroke="#141216" stroke-width="2.5" fill="none"/>';
    for (var t = 0; t < 7; t++) { var x0 = 70 + t * 10; s += '<path d="M' + x0 + ' 60 L' + (x0 + 2) + ' 72" stroke="#141216" stroke-width="2"/>'; }
    s += '<path d="M126 108 L134 140" stroke="#141216" stroke-width="2.2"/><path d="M124 116 L134 114 M126 124 L136 122 M128 132 L138 130" stroke="#141216" stroke-width="2"/>';
  } else if (m.marca === 'cicatriz') s += '<path d="M70 70 Q88 100 110 140" stroke="#5b2a2c" stroke-width="5" fill="none" stroke-linecap="round" opacity=".85"/><path d="M70 70 Q88 100 110 140" stroke="#000" stroke-width="1.5" fill="none" opacity=".4"/>';
  /* o nariz e a boca */
  s += '<path d="M100 104 L94 124 L104 124" stroke="#000" stroke-width="2" fill="none" opacity=".3"/>';
  if (m.boca === 'linha') s += '<path d="M84 136 L116 136" stroke="#2a1416" stroke-width="3" stroke-linecap="round"/>';
  else if (m.boca === 'presas') s += '<path d="M82 134 Q100 140 118 134" stroke="#2a1416" stroke-width="3" fill="none" stroke-linecap="round"/><path d="M89 136 L92 150 L95 137 Z M105 137 L108 150 L111 136 Z" fill="#f1ede4"/>';
  else if (m.boca === 'dentes') s += '<path d="M78 130 Q100 158 122 130 Z" fill="#1d0b0e"/><path d="M80 131 L85 141 L90 132 L95 143 L100 132 L105 143 L110 132 L115 141 L120 131 Z" fill="#e9e4da"/>';
  return s + '</svg>';
}
function montado() { var o = {}; PARTES.forEach(function (p, i) { var e = S.of.esc[i]; if (e != null) { var d = p.ops[e][2]; for (var k in d) o[k] = d[k]; } }); return o; }

var R = {};
R.capa = function () {
  return '<div class="capa"><div><span class="kick">MAIN SERIES · A1 · STUDIO 13 · NIGHT SHOOT</span><h1>The Monster <b>Maker</b></h1>'
    + '<p class="sub">Tonight you design the creature for a horror film. <b>It’s got</b> stitches and two bolts… <b>It hasn’t got</b> a name.</p>'
    + '<div class="chipsx"><span class="pilula">he’s got · he has</span><span class="pilula">it hasn’t got</span><span class="pilula">two small yellow eyes</span><span class="pilula">Live Class · W·O·L·F</span></div>'
    + '<button type="button" class="btn cheio" data-a="ir" data-n="1">Enter the studio</button>' + faixaLive() + '</div>'
    + '<div class="capa-d"><div class="claquete"><span>SCENE 13</span><span>TAKE 1</span><span>NIGHT</span></div>' + monstro({ pele: '#7d9479', olhos: 2, corOlho: '#e3b53c', marca: 'pontos', cabeca: 'parafusos', cabelo: 'longo' }) + '</div></div>';
};

R.abre = function (c) {
  return cartasPessoais(c, ABRE, S.abre, 'abre') + '<div class="partes so-prof"><h5>WHAT YOU HEAR · DON’T CORRECT</h5>' + FORMAS.map(function (f) { return '<button type="button" class="chip frase' + (f.erro ? ' erro-ouvido' : '') + (S.abre.formas[f.k] ? ' on' : '') + '" data-a="ab-f" data-v="' + f.k + '">' + f.t + '</button>'; }).join('') + '</div>';
};

/* 23/10/2026 · AFTER numa tela só (pedido do dono: o Show answer cansa; ele quer uma tela dinâmica): vídeo na tela + True or Lie com ▶ + o retrato da criatura que ganha uma parte a cada acerto + uma pergunta final de um toque */
function depVideo() { return iframe(YT, 'Frankenstein · official trailer', '&start=' + (S.depSeg || SEG0)[0] + '&end=' + (S.depSeg || SEG0)[1]); }
var debAcesa = {};
function debEstado() {
  var e = (S.fq && S.fq.deb_vm && S.fq.deb_vm.r) || {}, ok = 0, feitas = 0, st = [];
  DEB_VM.itens.forEach(function (x, i) {
    var r = e[i]; if (r == null) { st.push(0); return; }
    feitas++; if ((r === 't') === !!x.t) { ok++; st.push(1); } else st.push(-1);
  });
  return { ok: ok, feitas: feitas, st: st };
}
function debTopo(d, rot, titulo) {
  var n = DEB_VM.itens.length;
  return '<div class="deb-topo"><div><small>' + rot + ' · ' + d.feitas + ' OF ' + n + ' ANSWERED</small><h3>' + titulo + ' <b>' + d.ok + '</b> / ' + n + '</h3></div></div>';
}
function debNave() {
  var d = debEstado(), n = DEB_VM.itens.length;
  var m = { pele: '#24222a', olhos: 2, corOlho: '#24222a', boca: 'linha' }, j, k;
  for (j = 0; j < d.ok; j++) for (k in DEB_PASSOS[j]) m[k] = DEB_PASSOS[j][k];
  return debTopo(d, 'CREATURE FILE', 'Parts found') + '<div class="deb-monstro">' + monstro(m) + '</div>';
}
function debDir() {
  var d = debEstado();
  return FM.ex('deb_vm', DEB_VM) + (d.feitas === DEB_VM.itens.length ? FM.ex('deb_go', DEB_GO) : '<p class="fm-nota deb-dica">Answer all six lines. Then ' + DEB_GO.quem.replace(/^The /, 'the ') + ' has one last question.</p>');
}
function debPinta() {
  var a = document.getElementById('deb-nave'), b = document.getElementById('deb-dir');
  if (a) a.innerHTML = debNave(); if (b) b.innerHTML = debDir();
}
R.video = function (c) {
  var e = S.video, corpo;
  if (e.p === 0) corpo = '<div class="mesa-c"><div class="lado-l">' + ANTES.map(function (a, i) { return '<div class="pergunta vd ja"><small>BEFORE YOU WATCH · ' + (i + 1) + '</small><h2>' + a.q + '</h2></div>' + mostra('va' + i, a.h, 1); }).join('') + '</div>'
    + '<div class="lado-l centro">' + monstro({ pele: '#24222a', olhos: 2, corOlho: '#24222a', boca: 'linha', cabelo: 'longo' }) + '<div><button type="button" class="btn cheio" data-a="vd-p" data-n="1">Watch the trailer</button></div></div></div>';
  else if (e.p === 1) {
    var k = CAPS[e.cap];
    corpo = '<div class="mesa-video"><div class="video-col">' + iframe(YT, 'Frankenstein · official trailer', '&start=' + k.ini + '&end=' + k.fim) + '<small class="cred">Frankenstein (2025) · dir. Guillermo del Toro · official trailer · part ' + (e.cap + 1) + ' of 2</small></div><div class="lado-video">'
      + '<div class="caps">' + CAPS.map(function (x, i) { return '<button type="button" class="chip' + (e.cap === i ? ' on' : '') + (e.viu[i] ? ' feito' : '') + '" data-a="vd-c" data-n="' + i + '">' + x.k + '</button>'; }).join('') + '</div>'
      + '<div class="pergunta vd ja"><small>' + k.k + '</small><h2>' + k.q + '</h2></div>' + mostra('vd' + e.cap, k.h, 1)
      + '<div>' + (e.cap < CAPS.length - 1 ? '<button type="button" class="btn" data-a="vd-c" data-n="1">Part 2: My creator</button>' : '<button type="button" class="btn" data-a="vd-p" data-n="2">After the trailer</button>') + '</div></div></div>';
  } else corpo = '<div class="deb"><div class="deb-esq">' + depVideo() + '<small class="deb-cred">Tap a time to hear that moment again (the part where the creature speaks: it stops by itself).</small><div id="deb-nave">' + debNave() + '</div></div><div class="deb-dir" id="deb-dir">' + debDir() + '</div></div>';
  return cab(c) + '<div class="tres-tempos">' + tempos3(e.p) + '</div>' + corpo;
};

R.regra = function (c) {
  return cab(c) + '<div class="fitas">' + FITAS.map(function (f) { return '<div class="fita vd"><small>' + f[0] + '</small><b>' + f[1] + '</b></div>'; }).join('') + '</div>' + armas(ARMAS, 'THE TRAPS · SAY IT RIGHT, THEN TAP');
};

R.oficina = function (c) {
  var e = S.of, n = e.n, fim = n >= PARTES.length, m = montado();
  var frases = PARTES.map(function (p, i) { var x = e.esc[i]; return x != null ? '<li>' + p.ops[x][1] + '</li>' : ''; }).join('');
  if (fim) return cab(c) + '<div class="mesa-c"><div class="lado-l centro">' + monstro(m) + '</div><div class="lado-l"><div class="pergunta vd"><small>CREATURE SHEET · APPROVED</small><h2>Give it a name for the film poster. Then say all the sentences again, without looking!</h2></div><ul class="ficha vd">' + frases + '</ul></div></div>';
  var p = PARTES[n], esc = e.esc[n];
  return cab(c) + trilha(PARTES, n) + '<div class="mesa-c"><div class="lado-l centro">' + monstro(m) + '</div><div class="lado-l"><div class="pergunta vd ja"><small>PART ' + (n + 1) + ' OF 6 · ' + p.k + '</small><h2>Choose. Then say it: It’s got … / It hasn’t got …</h2></div>'
    + '<div class="potes">' + p.ops.map(function (o, i) { return '<button type="button" class="pote' + (esc === i ? ' on' : '') + '" data-a="of" data-n="' + i + '">' + o[0] + '</button>'; }).join('') + '</div>'
    + (esc != null ? '<div class="balao vd"><small>SAY IT</small><p>' + p.ops[esc][1] + '</p></div><div><button type="button" class="btn" data-a="of-prox">Next part</button></div>' : '<p class="dica-aluno">Tap a part for your creature.</p>')
    + (frases ? '<ul class="ficha vd">' + frases + '</ul>' : '') + '</div></div>';
};

R.adivinha = function (c) {
  var e = S.ad, alvo = SEGREDO[e.r % SEGREDO.length], fora = e.fora, sobra = MONSTROS.filter(function (_, i) { return !fora[i]; }).length;
  var grade = '<div class="galeria">' + MONSTROS.map(function (x, i) {
    return '<button type="button" class="cartinha' + (fora[i] ? ' fora' : '') + (i === alvo ? ' alvo' : '') + (e.revela && i === alvo ? ' achou' : '') + '" data-a="ad" data-n="' + i + '"><b>' + x.k + '</b><small>' + x.f + '</small><ul>' + x.t.map(function (t) { return '<li>' + t + '</li>'; }).join('') + '</ul>' + (i === alvo ? '<i class="so-prof segredo">SECRET</i>' : '') + '</button>'; }).join('') + '</div>';
  var lado = '<div class="pergunta vd ja"><small>' + sobra + ' MONSTERS LEFT</small><h2>' + (e.revela ? 'It’s ' + MONSTROS[alvo].k + '! Now you choose one, and your teacher asks.' : 'Ask yes / no questions: Has it got…?') + '</h2></div>'
    + fala('ad' + e.r, ['Has it got fangs?', 'Has it got bandages?', 'Has it got a hat?', 'Is it green?'], [])
    + '<p class="so-prof" style="margin:0;color:var(--t3);font-size:14px">Answer: Yes, it has. / No, it hasn’t. The secret monster has a SECRET tag on your screen only.</p>'
    + '<div class="tres-b">' + (e.revela ? '<button type="button" class="btn" data-a="ad-novo">Play again</button>' : '<button type="button" class="btn so-prof" data-a="ad-revela">Show the secret monster</button>') + '</div>';
  return cab(c) + '<div class="mesa-c largo"><div class="lado-l">' + grade + '</div><div class="lado-l">' + lado + '</div></div>';
};

R.historia = function (c) {
  var e = S.hist, texto = e.ouviu ? '<p class="conto">' + HIST.txt + '</p>'
    : '<p class="so-prof conto">' + HIST.txt + '</p><p class="dica-aluno conto-vazio">Listen. Your teacher reads the story.</p><div class="so-prof"><button type="button" class="btn" data-a="hs-ouviu">Read it · show the story to the student</button></div>';
  return cab(c) + '<div class="mesa-c"><div class="lado-l"><div class="pergaminho vd"><small>A STORY FROM IRELAND</small><h3>From a turnip to a pumpkin</h3>' + texto + '</div></div>'
    + '<div class="lado-l hist-q">' + HIST.qs.map(function (x, i) { return '<div class="pergunta vd ja"><small>' + (i + 1) + ' OF 4</small><h2>' + x.q + '</h2></div>' + mostra('hs' + i, x.h); }).join('') + '</div></div>';
};

R.ditado = function (c) {
  var e = S.dt, n = e.n, fim = n >= DITADOS.length;
  if (fim) return cab(c) + '<div class="foco"><div class="pergunta vd"><small>THREE GUESTS</small><h2>Three descriptions, three drawings. Now you describe your costume for a Halloween party, and your teacher draws it!</h2></div></div>';
  var x = DITADOS[n];
  return cab(c) + trilha(DITADOS, n) + '<div class="mesa-c"><div class="lado-l"><div class="pergaminho vd"><small>GUEST ' + (n + 1) + ' OF 3 · YOUR TEACHER READS</small>'
    + (e.mostra ? '<p class="conto">' + x.txt + '</p>' : '<p class="so-prof conto">' + x.txt + '</p><p class="dica-aluno conto-vazio">Listen and draw. Your teacher reads it two times.</p>') + '</div>'
    + (e.mostra ? '<div><button type="button" class="btn" data-a="dt-prox">Next guest</button></div>' : '<div><button type="button" class="btn so-prof" data-a="dt-mostra">Done drawing · show the guest</button></div>') + '</div>'
    + '<div class="lado-l centro">' + (e.mostra ? monstro(x.m) : '<div class="papel-vazio"><b>?</b><small>Draw it on paper or on the board</small></div>') + '</div></div>';
};

R.quiz = function (c) {
  var e = S.quiz, todos = QUIZ.every(function (_, i) { return e.esc[i] === 0; });
  return cab(c) + '<div class="quiz">' + QUIZ.map(function (x, i) {
    var esc = e.esc[i], ok = esc === 0;
    return '<div class="q-linha vd' + (ok ? ' feito' : '') + '"><p>' + x.a + '<span class="gap">' + (ok ? x.op[0] : '___') + '</span>' + x.b + '</p><div class="tres-b">' + ordem(x.op.map(function (o, k) { return [o, k]; }), i + 1).map(function (o) {
      return '<button type="button" class="pilula' + (esc === o[1] ? (ok ? ' certo' : ' errado') : '') + '" data-a="qz" data-n="' + i + '" data-v="' + o[1] + '"' + (ok ? ' disabled' : '') + '>' + o[0] + '</button>'; }).join('') + '</div>' + (esc > 0 ? '<p class="recusa">' + x.nao + '</p>' : '') + '</div>';
  }).join('') + '</div>' + (todos ? '<p class="aprova" style="text-align:center">Six out of six. That’s a wrap!</p>' : '');
};

R.fim = function (c) {
  var f = S.abre.formas, lembra = FORMAS.filter(function (x) { return f[x.k]; }).map(function (x) { return x.t; });
  return cab(c) + '<div class="fim">' + escritaFinal('fim', (S.txt || {}).fim || '', (S.salvo || {}).fim, 'The film is called …\nMy creature’s name is …\nIt’s …\nIt’s got …\nIt hasn’t got …', 'Your creature',
    ['The film is called ', 'My creature’s name is ', 'It’s ', 'It’s got ', 'It hasn’t got ', 'two small '], ['THE CREATURE FILE', lembra.length ? 'In scene I your teacher heard: ' + lembra.join(', ') + '. Now write five sentences about your creature.' : 'Five sentences about your creature.'])
    + '<div class="lado-fim">' + monstro(montado()) + '<div class="grande vd"><span><u>He’s got</u> scars. = He has scars.</span><span><u>It hasn’t got</u> a name.</span><span>long <u>black</u> hair · never <s>hair black</s></span></div>'
    + mostra('fim', 'The film is called Night Shift. My creature’s name is Number Nine. It’s grey-green. It’s got two small yellow eyes and two metal bolts in its neck. It hasn’t got a mouth!', 1)
    + '<p class="hw"><a class="pilula" href="HW/" target="_blank" rel="noopener">Homework for the student →</a></p></div></div>';
};

TOQUES['ab-f'] = function (b, n, v) { S.abre.formas[v] = !S.abre.formas[v]; };
/* 23/10/2026 · no AFTER, True/Lie e a pergunta final não repintam a página (o vídeo segue tocando): só o contador e as linhas */
window.addEventListener('load', function () {
  ['fq2-tf', 'fq2-rea'].forEach(function (k) {
    var f = TOQUES[k]; if (!f) return;
    TOQUES[k] = function (b, n, v, c) { var r = f(b, n, v, c); if (document.getElementById('deb-dir')) { debPinta(); return false; } return r; };
  });
});
TOQUES['vd-p'] = function (b, n) { S.video.p = n; };
TOQUES['vd-c'] = function (b, n) { S.video.viu[S.video.cap] = 1; S.video.cap = n; };
TOQUES.of = function (b, n) { S.of.esc[S.of.n] = n; };
TOQUES['of-prox'] = function () { S.of.n++; };
TOQUES.ad = function (b, n) { S.ad.fora[n] = !S.ad.fora[n]; };
TOQUES['ad-revela'] = function () { S.ad.revela = 1; };
TOQUES['ad-novo'] = function () { S.ad = { r: S.ad.r + 1, fora: {}, revela: 0 }; };
TOQUES['hs-ouviu'] = function () { S.hist.ouviu = 1; };
TOQUES['dt-mostra'] = function () { S.dt.mostra = 1; };
TOQUES['dt-prox'] = function () { S.dt = { n: S.dt.n + 1, mostra: 0 }; };
TOQUES.qz = function (b, n, v) { S.quiz.esc[n] = +v; };
