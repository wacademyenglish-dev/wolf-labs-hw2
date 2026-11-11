/* ============================================================
   NOBODY DOES THAT ANYMORE · THE MUSEUM · LIVE CLASS  06/10/2026
   Main series A2 · used to (hábito ou estado que ACABOU) · didn't use to ·
   did you use to. As duas portas: MANY TIMES? e IS IT OVER? Erros
   universais: "I use to" (presente → usually), used to para uma vez só,
   "didn't used to".
   O MUNDO (da aula velha): um museu de objetos comuns que todo mundo usava
   (orelhão, locadora, lista telefônica, câmera de filme, mapa de papel,
   internet discada, fita de vídeo, guia de TV). Nove áudios, conferidos
   com faster-whisper em 06/10: batem com a transcrição antiga.
   A CARA: o MUSEU à noite — vitrines com luz de cima, plaquinha de latão
   gravada, e as DUAS PORTAS que abrem (ou não) para o used to.
   Fila: FILA-LIVE-386.md · 057.
   ============================================================ */
var L = [
  { k: 'capa', est: null, img: 'museu' },
  { k: 'abre', est: 'o', min: 7, img: 'album', rot: 'I · When You Were Ten', t: 'Before the museum: your own life.', p: 'Pick a card. Any English you have. Nobody is corrected here.' },
  { k: 'vitrine', est: 'l', min: 7, img: 'museu', rot: 'II · Eight Cases', t: 'Eight ordinary things. Everybody did them. Then everybody stopped.', p: 'Open a case. Play the plaque. Engrave the verb. Then answer the question.' },
  { k: 'gx', est: 'f', min: 3, img: 'museu', rot: 'III · Then, Stopped, Now', t: 'Where does each sentence live in time?', p: 'Tap a sentence, then its place on the line. Notice the verbs. Then say three lines about you.' },
  { k: 'portas', est: 'f', min: 6, img: 'museu', rot: 'IV · Two Doors', t: 'A sentence needs two open doors to say USED TO.', p: 'Answer each door out loud. Then tap. Both must open.' },
  { k: 'teste', est: 'f', min: 6, img: 'museu', rot: 'V · The Door Test', t: 'Ten sentences. Six of them can’t get in.', p: 'Both doors, out loud. Then the verdict.' },
  { k: 'd', est: 'f', min: 6, img: 'vhs', rot: 'VI · The D', t: 'In speech nobody hears it. On paper it is the mistake.', p: 'Say it right, twice. Then tap it.' },
  { k: 'tres', est: 'o', min: 7, img: 'album', rot: 'VII · Turn It Over', t: 'One sentence, three faces.', p: 'Say the negative out loud, then the question. Your teacher opens each one.' },
  { k: 'placa', est: 'l', min: 7, extra: 1, img: 'payphone', rot: 'VIII · Case Nine', t: 'The Sunday phone call.', p: 'Listen first. The text opens after. Then five questions.' },
  { k: 'entrevista', est: 'o', min: 7, extra: 1, img: 'album', rot: 'IX · Interview a Grandparent', t: 'Your teacher is seventy-five now. Interview them.', p: 'Pick a card. Build the question out loud. Check it. Then ask, and listen.' },
  { k: 'caixa', est: 'o', min: 7, extra: 1, img: 'museu', rot: 'X · Your Case', t: 'One case is still empty. It has your name on it.', p: 'Say the plaque. Then say when it stopped.' },
  { k: 'fim', est: 'w', min: 6, img: 'museu', rot: 'XI · Closing Time', t: 'The museum closes. Write your own plaque.', p: 'Three things you used to do, and one you didn’t use to like. It goes to your My notes.' }
];

var TR = {
  'p1.mp3': 'People used to carry coins in their pocket for the phone. No coin, no call. You walked home and told nobody.',
  'p2.mp3': 'People used to drive to a shop to rent a film. And the film you wanted was always already gone.',
  'p3.mp3': 'People used to look for numbers in a big yellow book. Your address was in it. Everybody’s address was in it.',
  'p4.mp3': 'People used to wait a week to see their photos. Twenty-four photos. That was the whole holiday.',
  'p5.mp3': 'People used to stop the car and open an enormous map. Then fold it again. Nobody could ever fold it again.',
  'p6.mp3': 'The internet used to sing for thirty seconds before it worked. Then your mother picked up the phone and killed it.',
  'p7.mp3': 'People used to rewind a film before they gave it back. If you forgot, you paid. There was a fine for forgetting.',
  'p8.mp3': 'People used to plan the whole evening around one printed page. If you missed the program, you missed it. There was no watching it again.',
  'placa9.mp3': 'Before mobile phones, a long call cost real money. So families used to call each other on Sunday, when it was cheaper. Children used to line up in the hall. Each one said two sentences to a grandmother. They saw her twice a year. Nobody used to talk for an hour. You said hello. You said you were fine. Then you handed the phone to your brother.'
};

var ABRE = [
  { k: 'AT TEN', q: 'Tell me one thing you did at ten and don’t do anymore.', fup: 'When did you stop?', st: ['At ten, I …', 'Now I don’t …'], ex: 'At ten, I played in the street every day. Now I don’t.' },
  { k: 'YOUR PARENTS', q: 'Name one thing your parents did every day that you never do.', fup: 'Why don’t you do it?', st: ['My mom …', 'My dad …'], ex: 'My dad read the newspaper every morning. On paper!' },
  { k: 'A TOY', q: 'What toy or game did you love as a child?', fup: 'Where is it now?', st: ['I loved …'], ex: 'A red bike. I rode it everywhere.' },
  { k: 'YOUR STREET', q: 'What was your street like when you were a kid?', fup: 'What is different now?', st: ['There was …', 'Kids …'], ex: 'There was a small shop on the corner. Now it’s a pharmacy.' }
];
var FORMAS = [{ k: 'used', t: 'USED TO + VERB' }, { k: 'past', t: 'SIMPLE PAST' }, { k: 'use', t: 'I USE TO …', erro: 1 }, { k: 'once', t: 'USED TO FOR ONE TIME', erro: 1 }];

var CASES = [
  { n: 'THE PAYPHONE', img: 'payphone', au: 'p1.mp3', a: 'People used to ', b: ' coins in their pocket for the phone.', k: 'carry', op: ['carried', 'carry', 'carrying'], q: 'Did you ever use one? Who did you call?' },
  { n: 'THE VIDEO STORE', img: 'videostore', au: 'p2.mp3', a: 'People used to ', b: ' to a shop to rent a film.', k: 'drive', op: ['drove', 'driving', 'drive'], q: 'Where did your family use to get films?' },
  { n: 'THE PHONE BOOK', img: 'phonebook', au: 'p3.mp3', a: 'People used to ', b: ' for numbers in a big yellow book.', k: 'look', op: ['look', 'looked', 'looks'], q: 'Did your house use to have one?' },
  { n: 'THE FILM CAMERA', img: 'camera', au: 'p4.mp3', a: 'People used to ', b: ' a week to see their photos.', k: 'wait', op: ['waiting', 'waited', 'wait'], q: 'Who used to take the photos in your family?' },
  { n: 'THE PAPER MAP', img: 'map', au: 'p5.mp3', a: 'People used to ', b: ' the car and open an enormous map.', k: 'stop', op: ['stop', 'stopped', 'stops'], q: 'In the car, who used to read the map?' },
  { n: 'DIAL-UP INTERNET', img: 'dialup', au: 'p6.mp3', a: 'The internet used to ', b: ' for thirty seconds before it worked.', k: 'sing', op: ['sang', 'sing', 'singing'], q: 'How old were you when the internet arrived?' },
  { n: 'THE VIDEO TAPE', img: 'vhs', au: 'p7.mp3', a: 'People used to ', b: ' a film before they gave it back.', k: 'rewind', op: ['rewound', 'rewinds', 'rewind'], q: 'What film did you use to watch again and again?' },
  { n: 'THE TV GUIDE', img: 'tvguide', au: 'p8.mp3', a: 'People used to ', b: ' the whole evening around one printed page.', k: 'plan', op: ['plan', 'planned', 'planning'], q: 'What did your family use to watch together?' }
];

var PORTAS = [
  { s: 'When I was ten, I went to the beach every summer.', g1: 1, g2: 1, out: 'I used to go to the beach every summer.', why: 'Many times, and it stopped. Both doors open.' },
  { s: 'I went to Disney in 2019. One time, one week.', g1: 0, g2: 1, out: 'I went to Disney in 2019.', why: 'Once is not a habit. Door one stays shut: simple past.' },
  { s: 'I live in Chicago. I still live here today.', g1: 1, g2: 0, out: 'I live in Chicago.', why: 'It never ended. Door two stays shut: present.' },
  { s: 'My grandmother had long white hair for thirty years.', g1: 1, g2: 1, out: 'My grandmother used to have long white hair.', why: 'A state that lasted, and it is over. Both doors.' }
];
var TESTE = [
  { s: 'When I was a kid, I ate rice and beans every single day.', g1: 1, g2: 1, out: 'I used to eat rice and beans every day.' },
  { s: 'I broke my leg when I was twelve.', g1: 0, g2: 1, out: 'I broke my leg when I was twelve.' },
  { s: 'My father smoked for twenty years. He stopped in 2015.', g1: 1, g2: 1, out: 'My father used to smoke.' },
  { s: 'I work at a bank. I started last year.', g1: 1, g2: 0, out: 'I work at a bank.' },
  { s: 'I saw that movie last night.', g1: 0, g2: 1, out: 'I saw that movie last night.' },
  { s: 'We went to my grandmother’s house every Sunday. She moved away.', g1: 1, g2: 1, out: 'We used to go to my grandmother’s house every Sunday.' },
  { s: 'I speak Portuguese.', g1: 1, g2: 0, out: 'I speak Portuguese.' },
  { s: 'I called my mother yesterday.', g1: 0, g2: 1, out: 'I called my mother yesterday.' },
  { s: 'My sister had a red car for six years. She sold it.', g1: 1, g2: 1, out: 'My sister used to have a red car.' },
  { s: 'I drink coffee every morning, and I still do.', g1: 1, g2: 0, out: 'I drink coffee every morning.' }
];

var DD = [
  { ok: 'I didn’t use to smoke.', mau: 'I didn’t used to smoke.', w: 'DID is already the past, so USED gives the D away.' },
  { ok: 'Did she use to live here?', mau: 'Did she used to live here?', w: 'Same rule in the question.' },
  { ok: 'I used to play football.', mau: 'I use to play football.', w: 'No DID, so the D stays.' },
  { ok: 'I usually drink coffee in the morning.', mau: 'I use to drink coffee in the morning.', w: 'For now, say usually. USED TO is only the past.' },
  { ok: 'I went to Disney in 2019.', mau: 'I used to go to Disney in 2019.', w: 'One time: simple past.' },
  { ok: 'Where did you use to live?', mau: 'Where you used to live?', w: 'Question word + did + person + use to.' }
];

var TRES = [
  { base: 'I used to smoke.', neg: 'I didn’t use to smoke.', q: 'Did you use to smoke?' },
  { base: 'She used to play the piano.', neg: 'She didn’t use to play the piano.', q: 'Did she use to play the piano?' },
  { base: 'They used to live in Boston.', neg: 'They didn’t use to live in Boston.', q: 'Did they use to live in Boston?' },
  { base: 'My brother used to eat meat.', neg: 'My brother didn’t use to eat meat.', q: 'Did your brother use to eat meat?' },
  { base: 'We used to have a dog.', neg: 'We didn’t use to have a dog.', q: 'Did you use to have a dog?' },
  { base: 'You used to walk to work.', neg: 'You didn’t use to walk to work.', q: 'Did you use to walk to work?' }
];

var QS9 = [
  { q: 'When did families use to call?', o: ['On Sunday', 'Every night', 'On Saturday morning'] },
  { q: 'Why that day?', o: ['It cost less', 'Everybody was at home', 'The shops were closed'] },
  { q: 'How long were the calls?', o: ['Short', 'About an hour', 'All evening'] },
  { q: 'How often did they use to see the grandmother?', o: ['Twice a year', 'Every Sunday', 'Never'] },
  { q: 'What does the last line tell you?', o: ['There was a line of kids', 'She talked a lot', 'They called every day'] }
];

var CARTAS = [
  { topic: 'a food you hated as a child', model: 'Did you use to hate any food?' },
  { topic: 'a sport', model: 'Did you use to play a sport?' },
  { topic: 'where you lived at ten', model: 'Where did you use to live?' },
  { topic: 'a bad habit', model: 'Did you use to have a bad habit?' },
  { topic: 'your hair', model: 'Did your hair use to be different?' },
  { topic: 'getting to school', model: 'How did you use to get to school?' },
  { topic: 'something you were afraid of', model: 'What did you use to be afraid of?' },
  { topic: 'a program you never missed', model: 'What did you use to watch every week?' }
];

var SLOTS = [
  { ask: 'Something you used to eat, and stopped', hint: 'I used to eat …', ex: 'I used to eat cereal every night. I stopped last year.' },
  { ask: 'Something you used to do every week', hint: 'Every week I used to …', ex: 'Every week I used to visit my grandmother.' },
  { ask: 'Something you didn’t use to like, and now you love', hint: 'I didn’t use to like …, but now …', ex: 'I didn’t use to like coffee, but now I drink three a day.' },
  { ask: 'Something everybody in your city used to do', hint: 'People here used to …', ex: 'People here used to go to the square on Sunday night.' }
];

var S = { i: 0, faixa: 1, fala: {}, resp: {}, armas: {},
  abre: { sel: -1, foi: {}, formas: {} }, vit: { sel: -1, esc: {} }, portas: { n: 0, g1: -1, g2: -1 }, teste: { n: 0, g1: -1, g2: -1 }, d: { n: 0, esc: '' }, tres: { n: 0 }, p9: {}, ent: { sel: -1, feito: {} }, caixa: { sel: 0 } };

function placa(txt, cls) { return '<div class="placa' + (cls ? ' ' + cls : '') + '">' + txt + '</div>'; }
function porta(rot, v, dataA, alvo) {
  var est = v === -1 ? '' : (v === alvo ? (v ? ' aberta-p' : ' fechada-p') : ' errada-p');
  return '<div class="porta' + est + '"><div class="folha"><span class="mac"></span></div><b>' + rot + '</b><div class="tres-b">'
    + [[1, 'YES'], [0, 'NO']].map(function (o) { return '<button type="button" class="pilula' + (v === o[0] ? (v === alvo ? ' certo' : ' errado') : '') + '" data-a="' + dataA + '" data-v="' + o[0] + '">' + o[1] + '</button>'; }).join('') + '</div></div>';
}
function rPortas(c, lista, e, chave, fimTxt) {
  var n = e.n, fim = n >= lista.length;
  if (fim) return cab(c) + trilha(lista, n) + '<div class="foco"><div class="pergunta vd"><small>EVERY DOOR CHECKED</small><h2>' + fimTxt + '</h2></div></div>';
  var x = lista[n], pronto = e.g1 === x.g1 && e.g2 === x.g2, usa = x.g1 && x.g2;
  return cab(c) + trilha(lista, n) + '<div class="foco"><div class="frase-p vd"><small>THE SENTENCE</small><b>' + x.s + '</b></div>'
    + '<div class="portas">' + porta('1 · MANY TIMES?', e.g1, chave + '1', x.g1) + porta('2 · IS IT OVER?', e.g2, chave + '2', x.g2) + '</div>'
    + (pronto ? '<div class="veredito vd ' + (usa ? 'entra' : 'fora') + '"><small>' + (usa ? 'BOTH DOORS OPEN · USED TO' : 'A DOOR STAYS SHUT · NO USED TO') + '</small><b>' + x.out + '</b>' + (x.why ? '<em>' + x.why + '</em>' : '') + '<div><button type="button" class="btn" data-a="' + chave + '-prox">Next</button></div></div>'
      : (e.g1 >= 0 && e.g1 !== x.g1) || (e.g2 >= 0 && e.g2 !== x.g2) ? '<p class="recusa" style="text-align:center">Look again. Does that door open for this sentence?</p>' : '') + '</div>';
}

var R = {};
R.capa = function () {
  return '<div class="capa"><div class="lado-a"><span class="kick">MAIN SERIES · A2 · THE MUSEUM</span><h1>Nobody Does <b>That Anymore</b></h1>'
    + '<p class="sub">A museum of ordinary things. Everybody <b>used to</b> do them. Then everybody stopped.</p>'
    + '<div class="chipsx"><span class="pilula">used to + verb</span><span class="pilula">didn’t use to</span><span class="pilula">did you use to?</span><span class="pilula">Live Class · W·O·L·F</span></div>'
    + '<button type="button" class="btn cheio" data-a="ir" data-n="1">Enter the museum</button>' + faixaLive() + '</div>'
    + '<div class="capa-d"><div class="caso grande-c"><div class="vidro-c" style="background-image:url(' + img('payphone') + ')"></div>' + placa('THE PAYPHONE<small>People used to carry coins for the phone.</small>') + '</div></div></div>';
};

R.abre = function (c) {
  return cartasPessoais(c, ABRE, S.abre, 'abre') + '<div class="partes so-prof"><h5>WHAT YOU HEAR · DON’T CORRECT</h5>' + FORMAS.map(function (f) { return '<button type="button" class="chip frase' + (f.erro ? ' erro-ouvido' : '') + (S.abre.formas[f.k] ? ' on' : '') + '" data-a="ab-f" data-v="' + f.k + '">' + f.t + '</button>'; }).join('') + '</div>';
};

R.vitrine = function (c) {
  var e = S.vit, x = e.sel >= 0 ? CASES[e.sel] : null, n = 0;
  CASES.forEach(function (_, i) { if (e.esc[i] === CASES[i].k) n++; });
  var sala = '<div class="sala-m">' + CASES.map(function (k, i) {
    var ok = e.esc[i] === k.k;
    return '<button type="button" class="caso' + (e.sel === i ? ' on' : '') + (ok ? ' feito' : '') + '" data-a="vt" data-n="' + i + '"><span class="vidro-c" style="background-image:url(' + img(k.img) + ')"></span>' + placa(k.n) + '</button>';
  }).join('') + '</div>';
  if (!x) return cab(c) + '<p class="dica-aluno" style="text-align:center">' + n + ' of 8 plaques engraved. Tap a case.</p>' + sala;
  var esc = e.esc[e.sel], ok = esc === x.k;
  return cab(c) + '<div class="mesa-v"><div class="lado-l"><div class="caso grande-c"><div class="vidro-c" style="background-image:url(' + img(x.img) + ')"></div>' + placa(x.n) + '</div><div class="mini-sala">' + CASES.map(function (k, i) { return '<button type="button" class="chip' + (e.sel === i ? ' on' : '') + (e.esc[i] === k.k ? ' feito' : '') + '" data-a="vt" data-n="' + i + '">' + (i + 1) + '</button>'; }).join('') + '</div></div>'
    + '<div class="lado-l"><div class="toca-linha">' + tocar(x.au) + '<div>' + transcricao(x.au, TR[x.au]) + '</div></div>'
    + '<div class="placa grava"><small>ENGRAVE THE PLAQUE</small>' + x.a + '<span class="gap">' + (ok ? x.k : '___') + '</span>' + x.b + '</div>'
    + (ok ? '' : '<div class="tres-b">' + ordem(x.op.map(function (o) { return [o, o]; }), e.sel + 2).map(function (o) { return '<button type="button" class="pilula grande-p' + (esc === o[1] ? ' errado' : '') + '" data-a="vt-v" data-v="' + o[1] + '">' + o[0] + '</button>'; }).join('') + '</div>' + (esc ? '<p class="recusa">After USED TO, the verb is plain: no -ed, no -s, no -ing.</p>' : ''))
    + (ok ? '<div class="pergunta vd ja"><small>YOU AND THIS CASE</small><h2>' + x.q + '</h2></div>' + fala('vt' + e.sel, ['I used to …', 'My family used to …', 'I didn’t use to …'], []) : '') + '</div></div>';
};

R.portas = function (c) { return rPortas(c, PORTAS, S.portas, 'po', 'Two questions decide every past sentence you will say.'); };
R.teste = function (c) { return rPortas(c, TESTE, S.teste, 'te', 'Ten sentences, twenty doors, and you decided every one.'); };

R.d = function (c) {
  var e = S.d, n = e.n, fim = n >= DD.length;
  if (fim) return cab(c) + trilha(DD, n) + '<div class="foco"><div class="pergunta vd"><small>THE D</small><h2>One past per sentence. If DID is there, USED loses its D.</h2></div></div>';
  var x = DD[n], ok = e.esc === 'ok';
  return cab(c) + trilha(DD, n) + '<div class="foco">' + (ok ? placa(x.ok, 'grande-pl') + '<p class="aprova" style="text-align:center">' + x.w + '</p><div style="text-align:center"><button type="button" class="btn" data-a="dd-prox">Next</button></div>'
    : '<div class="versoes dois-v">' + ordem([[x.ok, 'ok'], [x.mau, 'mau']], n + 1).map(function (o) { return '<button type="button" class="versao' + (e.esc === o[1] ? ' errado' : '') + '" data-a="dd" data-v="' + o[1] + '">' + o[0] + '</button>'; }).join('') + '</div>' + (e.esc ? '<p class="recusa" style="text-align:center">Is there a DID? Then no D. No DID? Then keep it.</p>' : '')) + '</div>';
};

R.tres = function (c) {
  var e = S.tres, n = Math.min(e.n, TRES.length - 1), x = TRES[n];
  return cab(c) + trilha(TRES, e.n) + '<div class="foco"><div class="tres-faces">' + placa(x.base, 'face') + '<div class="face-b vd"><small>NEGATIVE</small>' + mostra('tn' + n, x.neg) + '</div><div class="face-b vd"><small>QUESTION</small>' + mostra('tq' + n, x.q) + '</div></div>'
    + (n < TRES.length - 1 ? '<div style="text-align:center"><button type="button" class="btn" data-a="tr-prox">Next sentence</button></div>' : '<p class="aprova" style="text-align:center">Six sentences, eighteen faces, and the D behaved every time.</p>') + '</div>';
};

R.placa = function (c) {
  var ouviu = (S.ouviu || {})['placa9.mp3'];
  var todos9 = QS9.every(function (_, i) { return S.p9[i] === 0; });
  return cab(c) + '<div class="mesa-v mesa-9"><div class="lado-l">' + ((S.trans || {})['placa9.mp3'] ? placa('CASE NINE · THE SUNDAY CALL') : '<div class="caso grande-c medio"><div class="vidro-c" style="background-image:url(' + img('payphone') + ')"></div>' + placa('CASE NINE · THE SUNDAY CALL') + '</div>') + '<div class="toca-linha">' + tocar('placa9.mp3') + '<span class="rot-ouve">PLAY IT. THE TEXT OPENS AFTER.</span></div>' + transcricao('placa9.mp3', TR['placa9.mp3']) + '</div>'
    + '<div class="lado-l">' + (ouviu && todos9 ? '<p class="aprova">Five out of five.</p>' + follow('YOUR FAMILY', 'Was it like this in your family? What did Sunday use to be?', ['On Sunday we used to …'], [], 'p9f', '') : ouviu ? '<div class="qs9">' + QS9.map(function (x, i) {
      var esc = S.p9[i], ok = esc === 0;
      return '<div class="q-linha vd' + (ok ? ' feito' : '') + '"><p>' + x.q + '</p><div class="tres-b">' + ordem(x.o.map(function (o, k) { return [o, k]; }), i + 4).map(function (o) { return '<button type="button" class="pilula' + (esc === o[1] ? (ok ? ' certo' : ' errado') : '') + '" data-a="p9" data-n="' + i + '" data-v="' + o[1] + '"' + (ok ? ' disabled' : '') + '>' + o[0] + '</button>'; }).join('') + '</div>' + (esc > 0 ? '<p class="recusa">Read that part again. The answer is in the text.</p>' : '') + '</div>';
    }).join('') + '</div>' : '<p class="transcricao vazia">Listen first. Five questions come after.</p>') + '</div></div>';
};

R.entrevista = function (c) {
  var e = S.ent, n = Object.keys(e.feito).length, x = e.sel >= 0 ? CARTAS[e.sel] : null;
  return cab(c) + '<div class="placar-m">' + [0, 1, 2, 3, 4, 5].map(function (i) { return '<i class="' + (i < n ? 'on' : '') + '"></i>'; }).join('') + '<b>' + n + ' / 6 ASKED</b></div><div class="mesa-v"><div class="cartas-e">' + CARTAS.map(function (k, i) {
    return '<button type="button" class="carta-e' + (e.sel === i ? ' on' : '') + (e.feito[i] ? ' feito' : '') + '" data-a="en" data-n="' + i + '"><small>' + (i + 1) + '</small><b>' + k.topic + '</b></button>';
  }).join('') + '</div><div class="lado-l">' + (x ? '<div class="pergunta vd ja"><small>THE TOPIC</small><h2>' + x.topic + '</h2></div><p class="dica-aluno">Build the question out loud: did you use to …? / what did you use to …?</p>' + mostra('en' + e.sel, x.model) + (e.feito[e.sel] ? '<p class="aprova">Asked. Now listen to the answer, and ask one more.</p>' : '<div><button type="button" class="btn so-prof" data-a="en-ok">Asked · I answered</button></div>')
    : '<div class="pergunta vd"><small>THE INTERVIEW</small><h2>' + (n >= 6 ? 'Six questions to another generation, and a real answer to every one.' : 'Tap a card. Ask your teacher, who is seventy-five today.') + '</h2></div>') + '</div></div>';
};

R.caixa = function (c) {
  var e = S.caixa, x = SLOTS[e.sel];
  return cab(c) + '<div class="mesa-v"><div class="caso vazio"><div class="vidro-c"><span class="seu">YOUR NAME</span></div><div class="placas-s">' + SLOTS.map(function (s, i) { return '<button type="button" class="placa mini' + (e.sel === i ? ' on' : '') + '" data-a="cx" data-n="' + i + '">' + (i + 1) + ' · ' + s.ask + '</button>'; }).join('') + '</div></div>'
    + '<div class="lado-l"><div class="pergunta vd ja"><small>PLAQUE ' + (e.sel + 1) + ' OF 4</small><h2>' + x.ask + '</h2></div>' + fala('cx' + e.sel, [x.hint, 'I stopped when …'], ['used to', 'didn’t use to', 'anymore']) + mostra('cx' + e.sel, x.ex, 1)
    + (e.sel < SLOTS.length - 1 ? '<div><button type="button" class="btn" data-a="cx" data-n="' + (e.sel + 1) + '">Next plaque</button></div>' : '') + '</div></div>';
};

R.fim = function (c) {
  var f = S.abre.formas, lembra = FORMAS.filter(function (x) { return f[x.k]; }).map(function (x) { return x.t; });
  return cab(c) + '<div class="fim">' + escritaFinal('fim', (S.txt || {}).fim || '', (S.salvo || {}).fim, 'When I was ten, I used to …\nI didn’t use to like …, but now …', 'Your plaque',
    ['When I was ten, ', 'I used to ', 'I didn’t use to ', ', but now ', 'anymore'], ['AT TEN, AND NOW', lembra.length ? 'In scene I your teacher heard: ' + lembra.join(', ') + '. Now the same memories, through the two doors.' : 'Three things you used to do, and one you didn’t use to like.'])
    + '<div class="lado-fim">' + placa('CLOSING TIME<small>many times? · is it over?</small>') + '<div class="grande vd"><span>both doors open: <u>used to</u> + verb</span><span>with DID: <u>didn’t use to</u> · <u>did you use to</u></span><span>now: <u>usually</u>, never <s>I use to</s></span></div>'
    + mostra('fim', 'When I was ten, I used to ride my bike to school.<br>I used to watch cartoons every Saturday.<br>I didn’t use to like vegetables, but now I love them.', 1)
    + '<p class="hw"><a class="pilula" href="HW/" target="_blank" rel="noopener">Homework for the student →</a></p></div></div>';
};

TOQUES['ab-f'] = function (b, n, v) { S.abre.formas[v] = !S.abre.formas[v]; };
TOQUES.vt = function (b, n) { S.vit.sel = n; };
TOQUES['vt-v'] = function (b, n, v) { S.vit.esc[S.vit.sel] = v; };
TOQUES.po1 = function (b, n, v) { S.portas.g1 = +v; };
TOQUES.po2 = function (b, n, v) { S.portas.g2 = +v; };
TOQUES['po-prox'] = function () { S.portas = { n: S.portas.n + 1, g1: -1, g2: -1 }; };
TOQUES.te1 = function (b, n, v) { S.teste.g1 = +v; };
TOQUES.te2 = function (b, n, v) { S.teste.g2 = +v; };
TOQUES['te-prox'] = function () { S.teste = { n: S.teste.n + 1, g1: -1, g2: -1 }; };
TOQUES.dd = function (b, n, v) { S.d.esc = v; };
TOQUES['dd-prox'] = function () { S.d = { n: S.d.n + 1, esc: '' }; };
TOQUES['tr-prox'] = function () { S.tres.n++; };
TOQUES.p9 = function (b, n, v) { S.p9[n] = +v; };
TOQUES.en = function (b, n) { S.ent.sel = n; };
TOQUES['en-ok'] = function () { S.ent.feito[S.ent.sel] = 1; };
TOQUES.cx = function (b, n) { S.caixa.sel = n; };

/* 10/11/2026 · AS EXPLICAÇÕES (kit/formatos3.js) · G2 · uma cena curta nova (k: gx) antes de portas.
   Explicação 100% em inglês: see → notice → use (o aluno fala ou escreve uma frase dele no fim). */
var GX_EXPLICA = { formato: 'linhaTempo', titulo: 'The museum case on one line. Where does each sentence go?',
  marcos: [{ t: 'THEN', s: 'many times, long ago' }, { t: 'IT STOPPED', s: 'one event, the end' }, { t: 'NOW', s: 'today' }],
  frases: [
    { f: 'People used to rent movies at the video store.', c: 0, d: 'used to · many times, then over' },
    { f: 'Then streaming came. The store closed.', c: 1, d: 'closed · one event' },
    { f: 'Now we watch movies at home.', c: 2, d: 'watch · true today' },
    { f: 'I didn’t use to have a phone.', c: 0, d: 'didn’t use to · a state that ended' },
    { f: 'One day, my last payphone card ended.', c: 1, d: 'ended · one event' },
    { f: 'Now I carry my phone everywhere.', c: 2, d: 'carry · true today' }
  ],
  nota: '<b>Used to</b> lives on the left: it happened many times, and it is over. One event is the past simple. Today is the present: I <b>carry</b> my phone. Question and no: <b>did you use to</b>, <b>didn’t use to</b>, with no d.',
  uso: { p: 'Your turn. One thing you used to do, the day it stopped, and what you do now.', molde: ['I used to …', 'Then …', 'Now I …'], ex: 'I used to play outside every day. Then I got my first computer. Now I play online.' } };
R.gx = function (c) { return cab(c) + FM.ex('gx_tempo', GX_EXPLICA); };
