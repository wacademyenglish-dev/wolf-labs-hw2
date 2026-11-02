/* ============================================================
   THE CAFÉ WHERE WE MET · A LITTLE GUIDE TO PORTLAND · LIVE 06/10/2026
   Main series A2 · relativas: revisão de who / that / where e o centro em
   WHICH, WHERE × WHICH (the café where we met × the café which we loved),
   o pronome que some antes de um sujeito novo e a preposição que FICA no
   fim (the song we danced to · the bench we sat on). O teste: diga a
   segunda metade sozinha — we met THERE → where; we loved IT → which.
   Erros: "the café where we loved", "where we met there", "which we
   crossed it", "the man which", "the book what", "the song we danced",
   "the bench where we sat on". AULA IRMÃ de A2/keep-wolf (que ensina who /
   that / where): aqui é outro formato (Easy Reader em páginas de guia).
   O MUNDO (da aula velha): Rosa e Ben, dez anos juntos, escrevem um guia
   para a irmã dele; no aniversário, ele deixa oito pistas. Sem áudio.
   A CARA: o GUIA DE BOLSO — mapa noturno com o rio em SVG e seis alfinetes;
   cada página é um cartão de papel escuro com serifa; o VARAL DE LUZES
   acende uma lâmpada por pista. Fila: FILA-LIVE-386.md · 069.
   ============================================================ */
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'abre', est: 'o', min: 7, img: 'rua', rot: 'I · You and Your Places', t: 'Before the guide: you and the places in your life.', p: 'Pick a card. Real life. No one corrects you here.' },
  { k: 'guia', est: 'o', min: 7, img: 'guia', rot: 'II · The Guidebook', t: 'Six places, six short pages. Rosa and Ben’s story is on the map.', p: 'Tap a pin. Read the page out loud, answer, then join the two ideas in one sentence.' },
  { k: 'regra', est: 'f', min: 6, img: 'mesa', rot: 'III · The Rule', t: 'where or which? Say the second half alone.', p: 'Say each wrong line the right way, out loud. Then tap it.' },
  { k: 'luzes', est: 'o', min: 7, img: 'terraco', rot: 'IV · Ben’s Five Clues', t: 'Their anniversary. Ben is not home. Say his five clues, fast.', p: 'Your teacher reads the two facts and the first words. You are Ben: say the clue at once. Each one lights a bulb.' },
  { k: 'lucy', est: 'o', min: 7, img: 'guia', rot: 'V · Lucy Calls', t: 'Ben’s sister moves to Portland next week. She wants the whole story.', p: 'Your teacher is Lucy. You are Rosa: tell the story again, from memory.' },
  { k: 'quiz', est: 'f', min: 6, extra: 1, img: 'mesa', rot: 'VI · Quick Check', t: 'Five quick lines from the guidebook.', p: 'Say the whole sentence. Then tap the word.' },
  { k: 'roda', est: 'o', min: 7, extra: 1, img: 'ponte', rot: 'VII · Your City Guide', t: 'Your real city, one page at a time.', p: 'Spin. Answer with who, which, that, where, or no word at all.' },
  { k: 'fim', est: 'w', min: 6, img: 'capa', rot: 'VIII · Your Little Guide', t: 'Which place in your city tells your story?', p: 'Write three pages of your own guide. It goes to your My notes.' }
];

var ABRE = [
  { k: 'YOUR CITY', q: 'What is your favorite place in your city? Why?', fup: 'When do you go there?', st: ['My favorite place is …'], ex: 'The beach at night. It’s quiet and there are no cars.' },
  { k: 'COFFEE', q: 'Do you have a favorite café? What do you order there?', fup: 'Who do you go with?', st: ['There’s a café …'], ex: 'Yes, a small one near my work. I always order a cappuccino.' },
  { k: 'FRIENDS', q: 'Where did you meet your best friend?', fup: 'How old were you?', st: ['We met …'], ex: 'At school, when we were ten. In the library!' },
  { k: 'ONE DAY', q: 'A friend visits your city for one day. Where do you take them?', fup: 'And for dinner?', st: ['I take them to …'], ex: 'To the old market, and then to a good restaurant.' },
  { k: 'A SONG', q: 'Does a song make you think of a special person or place?', fup: 'Why that song?', st: ['There’s a song …'], ex: 'Yes, an old song from my first trip with my friends.' }
];
var FORMAS = [{ k: 'where', t: 'THE PLACE WHERE …' }, { k: 'which', t: 'THE … WHICH / THAT …' }, { k: 'wl', t: 'WHERE WE LOVED', erro: 1 }, { k: 'it', t: '… WHICH WE CROSSED IT', erro: 1 }];

var NOTA = {
  where: 'We met there: where.', there: 'where already means there. Say it once.', who: 'People: who.', extra: 'which / who already means it / he. Say it once.',
  where2: 'We loved it, we crossed it: which (or that). where only if it happened there.', what: 'Never what after a noun.', prep: 'The little word stays at the end: sat on, danced to.',
  dobro: 'Choose one: the bench where we sat, or the bench we sat on.', sentido: 'They didn’t meet there! It’s the café which they loved.'
};

var PAGINAS = [
  { k: 'PAGE 1', tit: 'The Blue Door', x: 140, y: 70, texto: 'Ten years ago, on a rainy Tuesday, Rosa was reading a book in a small café with a blue door. Ben walked in, hit a chair and spilled his coffee on her book. He said sorry nine times. She laughed. That was the start.', q: 'What happened to Rosa’s book?', par: ['This is the café.', 'Rosa and Ben met there.'], ops: [['This is the café where Rosa and Ben met.', 'ok'], ['This is the café which Rosa and Ben met.', 'where'], ['This is the café where Rosa and Ben met there.', 'there']] },
  { k: 'PAGE 2', tit: 'The Bookstore', x: 320, y: 50, texto: 'The next day, Ben went to a bookstore on Pine Street. The owner, Mr. Okafor, is an old man with a big white beard. He found the same book for Ben, a new copy. Ben wrote his phone number inside it and gave it to Rosa.', q: 'What did Ben write inside the new book?', par: ['Mr. Okafor is the man.', 'He found the book for Ben.'], ops: [['Mr. Okafor is the man who found the book for Ben.', 'ok'], ['Mr. Okafor is the man which found the book for Ben.', 'who'], ['Mr. Okafor is the man who he found the book for Ben.', 'extra']] },
  { k: 'PAGE 3', tit: 'The Green Bridge', x: 300, y: 160, texto: 'Rosa called. They walked across the old green bridge over the river. It was snowing, and the city lights were orange in the water. For two years, they crossed that bridge every morning on the way to work.', q: 'What was the weather like on their first walk?', par: ['This is the bridge.', 'They crossed it every morning.'], ops: [['This is the bridge which they crossed every morning.', 'ok'], ['This is the bridge where they crossed every morning.', 'where2'], ['This is the bridge which they crossed it every morning.', 'extra']] },
  { k: 'PAGE 4', tit: 'The Little Fern', x: 470, y: 90, texto: 'The Little Fern is a tiny café with plants everywhere. It has only six tables and one old jukebox. Rosa and Ben went there every Saturday for ten years. They loved it. Rosa tells everybody they met there. They didn’t.', q: 'Did Rosa and Ben meet at the Little Fern?', par: ['The Little Fern is the café.', 'They loved it for ten years.'], ops: [['The Little Fern is the café which they loved for ten years.', 'ok'], ['The Little Fern is the café where they loved for ten years.', 'where2'], ['The Little Fern is the café what they loved for ten years.', 'what']] },
  { k: 'PAGE 5', tit: 'The Bench', x: 520, y: 220, texto: 'In Laurel Park there is a long wooden bench under a big tree. Every Sunday, Rosa and Ben sat on it with two coffees and one newspaper. Ben read the sports. Rosa did the crossword. Very romantic.', q: 'What did Rosa and Ben do on Sundays?', par: ['This is the bench.', 'They sat on it every Sunday.'], ops: [['This is the bench they sat on every Sunday.', 'ok'], ['This is the bench they sat every Sunday.', 'prep'], ['This is the bench where they sat on every Sunday.', 'dobro']] },
  { k: 'PAGE 6', tit: 'The Night Market', x: 160, y: 230, texto: 'On Friday nights, the night market opens by the river. Food trucks, little lights, a man with a guitar. One night, he played a slow old song. Ben can’t dance, but they danced to it anyway. Now it is “their song”.', q: 'Can Ben dance? What did they do anyway?', par: ['That is the song.', 'They danced to it at the night market.'], ops: [['That is the song they danced to at the night market.', 'ok'], ['That is the song they danced at the night market.', 'prep'], ['That is the song where they danced to.', 'dobro']] }
];

var FITAS = [['PEOPLE', 'the man who found the book'], ['THINGS AND PLACES', 'the café which (that) we loved'], ['IT HAPPENED THERE', 'the café where we met'], ['NO WORD', 'the song we danced to']];
var ARMAS = [
  ['IT → WHICH', 'The Little Fern is the café where we loved.', 'The Little Fern is the café which we loved.', 'We loved it, not we loved there. it → which (or that).'],
  ['THERE → WHERE', 'The Blue Door is the café which we met.', 'The Blue Door is the café where we met.', 'We met there. there → where.'],
  ['SAY IT ONCE', 'This is the bridge which we crossed it.', 'This is the bridge which we crossed.', 'which already means it; where already means there.'],
  ['THE LITTLE WORD STAYS', 'That’s the song we danced.', 'That’s the song we danced to.', 'We danced to it, we sat on it: the little word stays at the end.'],
  ['PEOPLE', 'the man which sold me the book', 'the man who sold me the book', 'People: who.'],
  ['NOT BOTH', 'the bench where we sat on', 'the bench we sat on', 'Or: the bench where we sat. Not both.']
];

var PISTAS = [
  { k: 'CLUE 1', diz: 'Rosa and Ben met in a café. The café has a blue door.', ini: 'Go to the café where…', ops: [['Go to the café where we met.', 'ok'], ['Go to the café which we met.', 'where'], ['Go to the café where we met there.', 'there']] },
  { k: 'CLUE 2', diz: 'At the Blue Door there is a waiter, Marco. He makes the best coffee in town.', ini: 'Ask for the waiter who…', ops: [['Ask for the waiter who makes the best coffee in town.', 'ok'], ['Ask for the waiter which makes the best coffee.', 'who'], ['Ask for the waiter who he makes the best coffee.', 'extra']] },
  { k: 'CLUE 3', diz: 'Marco has an envelope. Ben left it with him this morning.', ini: 'He has an envelope I…', ops: [['He has an envelope I left with him this morning.', 'ok'], ['He has an envelope where I left with him.', 'where2'], ['He has an envelope I left it with him.', 'extra']] },
  { k: 'CLUE 4', diz: 'Walk to the green bridge. They crossed it in the snow on their first date.', ini: 'Cross the bridge which…', ops: [['Cross the bridge which we crossed in the snow.', 'ok'], ['Cross the bridge where we crossed in the snow.', 'where2'], ['Cross the bridge which we crossed it in the snow.', 'extra']] },
  { k: 'CLUE 5', diz: 'In Laurel Park there is a bench. They sat on it every Sunday.', ini: 'Find the bench we…', ops: [['Find the bench we sat on every Sunday.', 'ok'], ['Find the bench we sat every Sunday.', 'prep'], ['Find the bench where we sat on every Sunday.', 'dobro']] }
];

var LUCY = [
  { ela: 'Rosa! Happy anniversary! So where did you and Ben meet? The Little Fern, right?', pede: 'Tell her the truth: No! The café where we met is…', resp: 'The Blue Door! With the coffee on the book? Ben told me. Nine sorries!' },
  { ela: 'I don’t know anybody there. Who can help me in the city?', pede: 'Tell her about a person: Go to Mr. Okafor. He’s the man who…', resp: 'A bookstore and a big white beard. Perfect.' },
  { ela: 'I love walking. Is there a nice place to walk?', pede: 'Tell her about a place: There’s a bridge which… / a park where…', resp: 'In the snow? So romantic. I’ll wait for winter.' },
  { ela: 'And last night? What did Ben do? He never tells me anything!', pede: 'Tell her about the clues: The last one was the song we…', resp: 'But he can’t dance! Okay, I have to see that jukebox.' }
];

var QUIZ = [
  { a: 'The Blue Door is the café ', b: ' we met.', op: ['where', 'which', 'what'], nao: 'We met there: where.' },
  { a: 'The Little Fern is the café ', b: ' we loved.', op: ['which', 'where', 'who'], nao: 'We loved it: which (or that).' },
  { a: 'Mr. Okafor is the man ', b: ' found the book.', op: ['who', 'which', 'where'], nao: 'For people: who.' },
  { a: 'That’s the song we danced ', b: '.', op: ['to', '(no word)', 'there'], nao: 'We danced to it: the little word stays at the end.' },
  { a: 'This is the bridge which we ', b: ' in the snow.', op: ['crossed', 'crossed it', 'crossed there'], nao: 'which already means it. Say it once.' }
];

var FATIAS = [
  { k: 'A CAFÉ', q: 'Do you have a favorite café or restaurant? Why do you love it?', h: 'There’s a small café which I love. It has the best cheese bread.' },
  { k: 'WHERE YOU MET', q: 'Think of a good friend. Where did you meet? Say it like a guide.', h: 'The school where I met my best friend is near my house.' },
  { k: 'A PERSON', q: 'Who is a person in your neighborhood who everybody knows?', h: 'There’s a man who sells fruit on the corner.' },
  { k: 'A SONG', q: 'Is there a song you danced to at a party or a wedding?', h: 'There’s a song we danced to at my cousin’s wedding.' },
  { k: 'QUIET', q: 'Where do you go when you want to think?', h: 'There’s a bench I sit on near the beach.' },
  { k: 'A VISITOR', q: 'A friend visits your city. What must they see?', h: 'There’s a park which they must see. It’s beautiful at night.' },
  { k: 'A KEEPSAKE', q: 'Do you keep something from a special day? What is it?', h: 'I have a ticket I keep from my first concert.' },
  { k: 'YOUR STREET', q: 'Tell me about the street where you live.', h: 'The street where I live is quiet, but there’s a very loud dog.' }
];
var CORES_R = ['#2a2018', '#1c2a26', '#2c1e2a', '#1e2432', '#30261a', '#1a2a1e', '#2e1c1c', '#22223a'];
var GIROS = ordem(FATIAS.map(function (_, i) { return i; }), 6);

var S = { i: 0, faixa: 1, fala: {}, resp: {}, armas: {},
  abre: { sel: -1, foi: {}, formas: {} }, gp: { sel: -1, esc: {} }, lz: { n: 0, esc: '' }, lucy: { n: 0, viu: {} }, quiz: { esc: {} }, roda: { g: 0, anim: 0 } };

function mapa(sel, feitas) {
  var pinos = PAGINAS.map(function (p, i) {
    return '<g class="pino-m' + (sel === i ? ' sel' : '') + (feitas[i] ? ' feito' : '') + '" data-a="gp" data-n="' + i + '" role="button"><circle cx="' + p.x + '" cy="' + p.y + '" r="17"/><text x="' + p.x + '" y="' + (p.y + 5) + '" text-anchor="middle">' + (i + 1) + '</text><text x="' + p.x + '" y="' + (p.y + 34) + '" text-anchor="middle" class="nome-pino">' + p.tit.toUpperCase() + '</text></g>';
  }).join('');
  return '<svg class="mapa-g" viewBox="0 0 640 280" role="img" aria-label="Map of Portland"><rect width="640" height="280" fill="#141a1e"/>'
    + '<g class="ruas"><path d="M0 40 L640 60 M0 120 L640 110 M0 200 L640 210 M80 0 L100 280 M240 0 L230 280 M400 0 L420 280 M560 0 L540 280"/></g>'
    + '<path d="M-10 150 C 100 120, 180 190, 300 150 S 500 110, 650 160" class="rio"/><rect x="290" y="128" width="20" height="50" class="ponte-m"/>'
    + '<text x="600" y="270" text-anchor="end" class="tit-m">PORTLAND · OUR LITTLE GUIDE</text>' + pinos + '</svg>';
}
function varal(n) {
  var b = '';
  for (var i = 0; i < 8; i++) { var x = 30 + i * 74, y = 30 + Math.sin((i + .5) / 8 * Math.PI) * 26; b += '<line x1="' + x + '" y1="' + (y - 14) + '" x2="' + x + '" y2="' + y + '" class="fio-l"/><circle cx="' + x + '" cy="' + (y + 10) + '" r="12" class="lamp' + (i < n ? ' on' : '') + '"/>'; }
  return '<svg class="varal" viewBox="0 0 580 90" role="img" aria-label="String of lights"><path d="M0 14 Q290 70 580 14" class="fio-l"/>' + b + '</svg>';
}
function roda(sel, anim) {
  var fat = FATIAS.map(function (f, i) {
    var a0 = (i * 45 - 90) * Math.PI / 180, a1 = ((i + 1) * 45 - 90) * Math.PI / 180, am = ((i + 0.5) * 45 - 90) * Math.PI / 180;
    var x0 = 100 + 96 * Math.cos(a0), y0 = 100 + 96 * Math.sin(a0), x1 = 100 + 96 * Math.cos(a1), y1 = 100 + 96 * Math.sin(a1);
    var tx = 100 + 62 * Math.cos(am), ty = 100 + 62 * Math.sin(am);
    return '<path d="M100 100 L' + x0.toFixed(1) + ' ' + y0.toFixed(1) + ' A96 96 0 0 1 ' + x1.toFixed(1) + ' ' + y1.toFixed(1) + ' Z" fill="' + CORES_R[i] + '" stroke="#0a0d14" stroke-width="2"/>'
      + '<text x="' + tx.toFixed(1) + '" y="' + ty.toFixed(1) + '" transform="rotate(' + ((i + 0.5) * 45) + ' ' + tx.toFixed(1) + ' ' + ty.toFixed(1) + ')" text-anchor="middle" dominant-baseline="middle">' + f.k + '</text>';
  }).join('');
  var fim = sel < 0 ? 0 : -((sel + 0.5) * 45);
  return '<div class="roda-box"><span class="ponteiro"></span><svg class="roda' + (anim ? ' gira' : '') + '" viewBox="0 0 200 200" style="--ate:' + fim + 'deg;transform:rotate(' + fim + 'deg)" role="img" aria-label="City guide wheel">' + fat + '<circle cx="100" cy="100" r="16" fill="#0a0d14" stroke="#e6a75a" stroke-width="2"/></svg></div>';
}

var R = {};
R.capa = function () {
  return '<div class="capa"><div class="lado-a"><span class="kick">MAIN SERIES · A2 · A LITTLE GUIDE TO PORTLAND</span><h1>The Café <i>Where</i> We Met</h1>'
    + '<p class="sub">The Blue Door is the café <b>where we met</b>. The Little Fern is the café <b>which we loved</b>.</p>'
    + '<div class="chipsx"><span class="pilula">where · it happened there</span><span class="pilula">which · we loved it</span><span class="pilula">the song we danced to</span><span class="pilula">Live Class · W·O·L·F</span></div>'
    + '<button type="button" class="btn cheio" data-a="ir" data-n="1">Open the guide</button>' + faixaLive() + '</div>'
    + '<div class="capa-d"><div class="guia-livro">' + mapa(-1, {}) + '</div></div></div>';
};

R.abre = function (c) {
  return cartasPessoais(c, ABRE, S.abre, 'abre') + '<div class="partes so-prof"><h5>WHAT YOU HEAR · DON’T CORRECT</h5>' + FORMAS.map(function (f) { return '<button type="button" class="chip frase' + (f.erro ? ' erro-ouvido' : '') + (S.abre.formas[f.k] ? ' on' : '') + '" data-a="ab-f" data-v="' + f.k + '">' + f.t + '</button>'; }).join('') + '</div>';
};

R.guia = function (c) {
  var e = S.gp, x = e.sel >= 0 ? PAGINAS[e.sel] : null, feitas = {}, n = 0, lado, pag = '';
  PAGINAS.forEach(function (_, i) { if (e.esc[i] === 'ok') { feitas[i] = 1; n++; } });
  if (!x) lado = '<div class="pergunta vd"><small>' + n + ' OF 6 PAGES</small><h2>' + (n === 6 ? 'Look again: the Blue Door is the café WHERE they met, and the Little Fern is the café WHICH they loved. Why not the same word? The rule is next.' : 'Tap a pin on the map. Read the page out loud.') + '</h2></div>';
  else {
    var esc = e.esc[e.sel], ok = esc === 'ok';
    pag = '<div class="pagina-g"><small>' + x.k + '</small><h3>' + x.tit + '</h3><p>' + x.texto + '</p></div>';
    lado = '<div class="pergunta vd ja"><small>THE QUESTION</small><h2>' + x.q + '</h2></div>'
      + (ok ? '<div class="balao vd"><small>ONE SENTENCE</small><p>' + x.ops[0][0] + '</p></div>'
        : '<div class="par-g"><span>' + x.par[0] + '</span><span>' + x.par[1] + '</span></div><h5 class="so-prof rot-ouve">JOIN THEM · TAP THE VERSION YOU HEARD</h5><div class="versoes">' + ordem(x.ops, e.sel + 1).map(function (o) { return '<button type="button" class="versao' + (esc === o[1] ? ' errado' : '') + '" data-a="gp-v" data-v="' + o[1] + '">' + o[0] + '</button>'; }).join('') + '</div>' + (esc ? '<p class="recusa">' + NOTA[esc] + '</p>' : ''));
  }
  return cab(c) + '<div class="mesa-g"><div class="lado-l"><div class="guia-livro' + (x ? ' menor' : '') + '">' + mapa(e.sel, feitas) + '</div>' + (x ? pag : '') + '</div><div class="lado-l">' + lado + '</div></div>';
};

R.regra = function (c) {
  return cab(c) + '<div class="fitas">' + FITAS.map(function (f) { return '<div class="fita vd"><small>' + f[0] + '</small><b>' + f[1] + '</b></div>'; }).join('') + '</div>' + armas(ARMAS, 'THE TRAPS · SAY IT RIGHT, THEN TAP');
};

R.luzes = function (c) {
  var e = S.lz, n = e.n, fim = n >= PISTAS.length, acesas = n + (!fim && e.esc === 'ok' ? 1 : 0), lado;
  if (fim) lado = '<div class="pergunta vd"><small>FIVE LIGHTS</small><h2>Rosa opens the door of the Little Fern. The jukebox plays their song, and Ben is at table six, with a very old book with a coffee stain on it.</h2></div>';
  else {
    var x = PISTAS[n], ok = e.esc === 'ok';
    lado = '<div class="pede vd"><small>' + x.k + ' · THE FACTS</small><b>' + x.diz + '</b></div>' + (ok ? '<div class="bilhete"><small>BEN’S NOTE</small><p>' + x.ops[0][0] + '</p></div><div><button type="button" class="btn" data-a="lz-prox">Next clue</button></div>'
      : '<p class="ini">' + x.ini + '</p><h5 class="so-prof rot-ouve">TAP WHAT YOU HEARD</h5><div class="versoes">' + ordem(x.ops, n + 3).map(function (o) { return '<button type="button" class="versao' + (e.esc === o[1] ? ' errado' : '') + '" data-a="lz" data-v="' + o[1] + '">' + o[0] + '</button>'; }).join('') + '</div>' + (e.esc ? '<p class="recusa">' + NOTA[e.esc] + '</p>' : ''));
  }
  return cab(c) + trilha(PISTAS, n) + '<div class="mesa-l"><div class="vitrine vd"><div class="fachada" style="background-image:url(' + img('terraco') + ')"></div>' + varal(acesas) + '<small>THE LITTLE FERN · ' + acesas + ' OF 8 LIGHTS</small></div><div class="lado-l">' + lado + '</div></div>';
};

R.lucy = function (c) {
  var e = S.lucy, n = e.n, fim = n >= LUCY.length;
  var foto = '<div class="aberta vd" style="background-image:url(' + img('guia') + ')"><span class="rec">● CALLING</span><span>LUCY · BEN’S SISTER</span></div>';
  if (fim) return cab(c) + '<div class="mesa-c">' + foto + '<div class="lado-l"><div class="pergunta vd"><small>A NEW PAGE</small><h2>Lucy has a new page for the guide. A quick check.</h2></div></div></div>';
  var x = LUCY[n], viu = e.viu[n];
  return cab(c) + '<div class="mesa-c">' + foto + '<div class="lado-l">' + trilha(LUCY, n) + '<div class="balao vd"><small>LUCY</small><p>“' + x.ela + '”</p></div><div class="pede vd"><small>YOU ARE ROSA</small><b>' + x.pede + '</b></div>'
    + (viu ? '<div class="balao vd"><small>LUCY</small><p>“' + x.resp + '”</p></div><div><button type="button" class="btn" data-a="lc-prox">Next</button></div>' : '<div><button type="button" class="btn so-prof" data-a="lc-viu">Answered · Lucy replies</button></div>') + '</div></div>';
};

R.quiz = function (c) {
  var e = S.quiz, todos = QUIZ.every(function (_, i) { return e.esc[i] === 0; });
  return cab(c) + '<div class="quiz">' + QUIZ.map(function (x, i) {
    var esc = e.esc[i], ok = esc === 0;
    return '<div class="q-linha vd' + (ok ? ' feito' : '') + '"><p>' + x.a + '<span class="gap">' + (ok ? x.op[0] : '___') + '</span>' + x.b + '</p><div class="tres-b">' + ordem(x.op.map(function (o, k) { return [o, k]; }), i + 1).map(function (o) {
      return '<button type="button" class="pilula' + (esc === o[1] ? (ok ? ' certo' : ' errado') : '') + '" data-a="qz" data-n="' + i + '" data-v="' + o[1] + '"' + (ok ? ' disabled' : '') + '>' + o[0] + '</button>'; }).join('') + '</div>' + (esc > 0 ? '<p class="recusa">' + x.nao + '</p>' : '') + '</div>';
  }).join('') + '</div>' + (todos ? '<p class="aprova" style="text-align:center">Five out of five. Now your own city.</p>' : '');
};

R.roda = function (c) {
  var e = S.roda, sel = e.g > 0 ? GIROS[(e.g - 1) % 8] : -1, x = sel >= 0 ? FATIAS[sel] : null;
  var lado = x ? '<div class="pergunta vd ja"><small>' + x.k + ' · YOUR CITY GUIDE</small><h2>' + x.q + '</h2></div>' + fala('rd' + sel, ['There’s a … which …', 'The … where I …', 'the … I … to / on'], []) + mostra('rd' + sel, x.h, 1)
    : '<div class="pergunta vd"><small>YOUR CITY GUIDE</small><h2>Spin the wheel. Answer about your real city, like a guidebook.</h2></div>';
  return cab(c) + '<div class="mesa-c"><div class="lado-l centro">' + roda(sel, e.anim) + '<button type="button" class="btn cheio" data-a="rd">' + (e.g ? 'Spin again' : 'Spin') + '</button></div><div class="lado-l">' + lado + '</div></div>';
};

R.fim = function (c) {
  var f = S.abre.formas, lembra = FORMAS.filter(function (x) { return f[x.k]; }).map(function (x) { return x.t; });
  return cab(c) + '<div class="fim">' + escritaFinal('fim', (S.txt || {}).fim || '', (S.salvo || {}).fim, 'The place where I …\nThe café which I …\nThe song I … to', 'Your little guide',
    ['The place where I ', 'The café which I ', 'The song I danced to ', 'The person who '], ['THREE PAGES OF YOUR OWN GUIDE', lembra.length ? 'In scene I your teacher heard: ' + lembra.join(', ') + '. Now three pages, and say the second half alone first.' : 'Three places in your city, each with one sentence. Say the second half alone first: there → where, it → which.'])
    + '<div class="lado-fim"><div class="pagina-g mini"><small>THE LAST PAGE</small><h3>For Lucy</h3><p>there → <b>where</b> · it → <b>which</b> · the song we danced <b>to</b></p></div><div class="grande vd"><span>the café <u>where</u> we met</span><span>the café <u>which</u> we loved</span><span>the song we danced <u>to</u></span><span>never <s>where we loved</s> · <s>crossed it</s></span></div>'
    + mostra('fim', 'The school where I met my best friend is near the beach.<br>There’s a small café which I love on my street.<br>“Dancing Queen” is the song we danced to at my cousin’s wedding.', 1)
    + '<p class="hw"><a class="pilula" href="HW/" target="_blank" rel="noopener">Homework for the student →</a></p></div></div>';
};

TOQUES['ab-f'] = function (b, n, v) { S.abre.formas[v] = !S.abre.formas[v]; };
TOQUES.gp = function (b, n) { S.gp.sel = n; };
TOQUES['gp-v'] = function (b, n, v) { S.gp.esc[S.gp.sel] = v; };
TOQUES.lz = function (b, n, v) { S.lz.esc = v; };
TOQUES['lz-prox'] = function () { S.lz = { n: S.lz.n + 1, esc: '' }; };
TOQUES['lc-viu'] = function () { S.lucy.viu[S.lucy.n] = 1; };
TOQUES['lc-prox'] = function () { S.lucy.n++; };
TOQUES.qz = function (b, n, v) { S.quiz.esc[n] = +v; };
TOQUES.rd = function () { S.roda.g++; S.roda.anim = 1; setTimeout(function () { S.roda.anim = 0; }, 1300); };
