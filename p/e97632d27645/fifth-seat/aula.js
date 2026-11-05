/* ============================================================
   THE FIFTH SEAT · THE ARCTIC GATE · LIVE CLASS  05/10/2026
   Main series A1 · be na 3ª pessoa: he is / she is · Is she…? · a / an + job
   O MUNDO: o navio Polaris sai para o Ártico em três dias e há um lugar
   vazio. Quatro candidatos; a tela é o portão: quatro fichas ESCURAS com
   ícone de profissão (sem rostos). O aluno pergunta, abre a prova e
   carimba TRUE/FALSE até achar o mentiroso.
   ÁUDIOS (faster-whisper): os p-* NÃO dizem “She is a doctor” como a aula
   velha escrevia; são os candidatos em 1ª pessoa (“Hello, I am Nadia. I am
   a doctor. I am from Egypt.”). Viraram a mecânica da cena III: ouvir o
   I am e dizer She is. O d-ivo diz “He isn't an engineer. He is a cook.”
   Fila: FILA-LIVE-386.md · 022.
   ============================================================ */
var L = [
  { k: 'capa', est: null, img: 'navio' },
  { k: 'abre', est: 'o', min: 7, img: 'base', rot: 'I · Your Job', t: 'What is your job? And someone in your family?', p: 'Pick a card. One word is enough, then a sentence. Your teacher taps what you used. Don’t worry about it yet.' },
  { k: 'radio', est: 'l', min: 7, img: 'base', rot: 'II · Radio Log', t: 'Five transmissions. No notes.', p: 'Listen. Say it back. Then print it in the log.' },
  { k: 'fichas', est: 'l', min: 7, img: 'base', rot: 'III · Four Files', t: 'Four people applied for the last seat.', p: 'Each one says I am… Listen. Then say it about them: She is… / He is…' },
  { k: 'artigo', est: 'f', min: 6, img: 'base', rot: 'IV · The Missing Word', t: 'The word that isn’t in Portuguese.', p: 'Say the sentence out loud. Then tap the missing word.' },
  { k: 'pergunta', est: 'l', min: 7, img: 'base', rot: 'V · The Verb Jumps', t: 'To ask, the verb jumps to the front.', p: 'Tap the verb and watch it move. Ask out loud. Then listen to the answer.' },
  { k: 'carimbo', est: 'f', min: 6, extra: 1, img: 'base', rot: 'VI · Stamp the Files', t: 'Eight facts. The evidence arrived.', p: 'Pick a fact. Ask the question out loud. Open the evidence. Stamp it.' },
  { k: 'mentiroso', est: 'o', min: 7, extra: 1, img: 'navio', rot: 'VII · Who Is Lying', t: 'He isn’t. He is.', p: 'Tap each person. Say both halves in one breath.' },
  { k: 'bordo', est: 'o', min: 7, extra: 1, img: 'navio', rot: 'VIII · Already on Board', t: 'Four seats are taken.', p: 'Tap each person. Say what they are. Then read what is missing.' },
  { k: 'entrevista', est: 'o', min: 7, extra: 1, img: 'navio', rot: 'IX · The Interview', t: 'There’s a fifth candidate: you.', p: 'Your teacher interviews you for the seat. Then you decide who goes, and why.' },
  { k: 'fim', est: 'w', min: 6, img: 'base', rot: 'X · The Gate Closes', t: 'Write the file of your family.', p: 'Three people: name, job (with a or an), country. One question about them. The red line watches. It goes to your My notes.' }
];

var TR = {
  'f-doctor.mp3': 'She is a doctor.', 'f-pilot.mp3': 'He is a pilot.', 'f-eng.mp3': 'He is an engineer.', 'f-egypt.mp3': 'She is from Egypt.', 'f-isnt.mp3': 'He isn’t a cook.',
  'p-nadia.mp3': 'Hello, I am Nadia. I am a doctor. I am from Egypt.', 'p-tomas.mp3': 'Hello, I am Tomás. I am a pilot. I am from Portugal.',
  'p-ivo.mp3': 'Hi, I am Ivo. I am an engineer. I am from Croatia.', 'p-mei.mp3': 'Hello, I am Mei. I am a translator. I am from Singapore.',
  'd-ivo.mp3': 'He isn’t an engineer. He is a cook.',
  'q-pilot.mp3': 'Is he a pilot? Yes, he is.', 'q-doctor.mp3': 'Is she a doctor? Yes, she is.', 'q-eng.mp3': 'Is he an engineer? He says he is.',
  'q-sing.mp3': 'Is she from Singapore? Yes, she is.', 'q-croatia.mp3': 'Is he from Croatia? Yes, he is.', 'q-ready.mp3': 'Are they ready? Three of them are.'
};
var ICON = { doc: '🩺', pil: '✈️', eng: '⚙️', tra: '🌐', coo: '🍳', cap: '⚓', bio: '🧬', mec: '🔧', rad: '📻' };

var ABRE = [
  { k: 'YOUR JOB', q: 'What is your job? One word, then a sentence.', fup: 'Is it a good job?', st: ['I’m a / an …'], ex: 'Teacher. I’m a teacher.' },
  { k: 'FAMILY', q: 'Someone in your family: what is their job?', fup: 'Is he or she happy?', st: ['My … is a / an …'], ex: 'My sister is an engineer.' },
  { k: 'FRIEND', q: 'Your best friend: what is their job? Where are they from?', fup: 'Is that a good job?', st: ['My friend is a / an …', 'He is from … / She is from …'], ex: 'My friend Paulo is a cook. He is from Recife.' },
  { k: 'DREAM', q: 'A dream job: what is it?', fup: 'Is it a hard job?', st: ['In my dream, I’m a / an …'], ex: 'In my dream, I’m an astronaut. It’s a big job.' }
];
var FORMAS = [{ k: 'art', t: 'A / AN + JOB' }, { k: 'she', t: 'HE IS / SHE IS' }, { k: 'sem', t: 'SHE IS DOCTOR', erro: 1 }, { k: 'dupla', t: 'IS SHE IS…?', erro: 1 }];

var RADIO = [{ au: 'f-doctor.mp3', de: 'STATION' }, { au: 'f-pilot.mp3', de: 'STATION' }, { au: 'f-eng.mp3', de: 'STATION' }, { au: 'f-egypt.mp3', de: 'BASE' }, { au: 'f-isnt.mp3', de: 'BASE' }];

var GENTE = [
  { n: 'Nadia', i: 'doc', el: 'She', job: 'a doctor', pais: 'Egypt', au: 'p-nadia.mp3' },
  { n: 'Tomás', i: 'pil', el: 'He', job: 'a pilot', pais: 'Portugal', au: 'p-tomas.mp3' },
  { n: 'Ivo', i: 'eng', el: 'He', job: 'an engineer', pais: 'Croatia', au: 'p-ivo.mp3' },
  { n: 'Mei', i: 'tra', el: 'She', job: 'a translator', pais: 'Singapore', au: 'p-mei.mp3' }
];

var ARTIGO = [
  { a: 'She is', fim: 'doctor.', ok: 'a', w: 'doctor starts with a consonant sound: a.' }, { a: 'He is', fim: 'engineer.', ok: 'an', w: 'engineer starts with a vowel sound: an.' },
  { a: 'She is', fim: 'translator.', ok: 'a', w: 'A job always takes a little word.' }, { a: 'He is', fim: 'astronaut.', ok: 'an', w: 'Your mouth opens: an.' },
  { a: 'He is', fim: 'cook.', ok: 'a', w: 'a cook, never nothing.' }, { a: 'She is', fim: 'artist.', ok: 'an', w: 'an artist.' },
  { a: 'She is from', fim: 'Egypt.', ok: 'nothing', w: 'A country takes no little word.' }, { a: 'He is', fim: 'pilot.', ok: 'a', w: 'a pilot.' }
];

var PERG = [
  { suj: 'He', v: 'is', rest: 'a pilot', q: 'Is he a pilot?', au: 'q-pilot.mp3' }, { suj: 'She', v: 'is', rest: 'a doctor', q: 'Is she a doctor?', au: 'q-doctor.mp3' },
  { suj: 'He', v: 'is', rest: 'an engineer', q: 'Is he an engineer?', au: 'q-eng.mp3' }, { suj: 'She', v: 'is', rest: 'from Singapore', q: 'Is she from Singapore?', au: 'q-sing.mp3' },
  { suj: 'He', v: 'is', rest: 'from Croatia', q: 'Is he from Croatia?', au: 'q-croatia.mp3' }, { suj: 'They', v: 'are', rest: 'ready', q: 'Are they ready?', au: 'q-ready.mp3' }
];

var FATOS = [
  { p: 0, q: 'Is she a doctor?', ev: 'A hospital card from Cairo, with her name.', v: 1, r: 'Yes, she is.' },
  { p: 0, q: 'Is she from Egypt?', ev: 'A passport stamp: born in Alexandria.', v: 1, r: 'Yes, she is.' },
  { p: 1, q: 'Is he a pilot?', ev: 'A flight log with four hundred hours.', v: 1, r: 'Yes, he is.' },
  { p: 1, q: 'Is he from Portugal?', ev: 'A letter from his mother in Lisbon.', v: 1, r: 'Yes, he is.' },
  { p: 2, q: 'Is he an engineer?', ev: 'A photo: Ivo in a kitchen, with a chef’s hat.', v: 0, r: 'No, he isn’t. He is a cook.' },
  { p: 2, q: 'Is he from Croatia?', ev: 'A ferry ticket from Split, his home town.', v: 1, r: 'Yes, he is.' },
  { p: 3, q: 'Is she a translator?', ev: 'A letter from her, in three languages.', v: 1, r: 'Yes, she is.' },
  { p: 3, q: 'Is she from Singapore?', ev: 'A school photo: Singapore, class of 2010.', v: 1, r: 'Yes, she is.' }
];

var PARES = [
  { quem: 'Nadia', nao: 'She isn’t a pilot.', sim: 'She is a doctor.' }, { quem: 'Ivo', nao: 'He isn’t an engineer.', sim: 'He is a cook.', au: 'd-ivo.mp3', mente: 1 },
  { quem: 'Tomás', nao: 'He isn’t a cook.', sim: 'He is a pilot.' }, { quem: 'Mei', nao: 'She isn’t from Egypt.', sim: 'She is from Singapore.' }
];

var CREW = [{ n: 'Anders', i: 'cap', s: 'Anders is a captain.' }, { n: 'Rita', i: 'bio', s: 'Rita is a biologist.' }, { n: 'Kwame', i: 'mec', s: 'Kwame is a mechanic.' }, { n: 'Lena', i: 'rad', s: 'Lena is a radio operator.' }];

var PERG_E = ['What is your job?', 'Where are you from?', 'What is your best friend’s job?', 'Is your father a doctor or a cook?', 'Are you a good cook?', 'Are you the right person for this seat?'];
var PARTES_E = [{ k: 'art', t: 'I’M A / AN …' }, { k: 'ele', t: 'HE IS / SHE IS …' }, { k: 'curta', t: 'YES, SHE IS / NO, HE ISN’T' }];
var CAND = [{ n: 'Nadia', por: 'because she is a doctor' }, { n: 'Tomás', por: 'because he is a pilot' }, { n: 'Ivo', por: 'because he is a cook' }, { n: 'Mei', por: 'because she is a translator' }, { n: 'Me', por: 'because I am …' }];

var S = { i: 0, faixa: 1, fala: {}, resp: {}, armas: {},
  abre: { sel: -1, foi: {}, formas: {} }, radio: { n: 0, imp: {} }, fichas: { sel: -1, disse: {} }, art: { n: 0, esc: '' }, perg: { n: 0, pulou: 0 },
  car: { sel: -1, abriu: {}, stamp: {}, err: '' }, ment: { abre: {} }, bordo: { abre: {} }, ent: { n: 0, partes: {}, erro: 0, esc: -1 } };

function ficha(g, extra, corpo) { return '<div class="dossie' + (extra || '') + '"><span class="icone">' + ICON[g.i] + '</span><b>' + g.n + '</b>' + (corpo || '') + '</div>'; }

var R = {};
R.capa = function () {
  return '<div class="capa"><div class="lado-a"><span class="kick">MAIN SERIES · A1</span><h1>The Fifth <b>Seat</b></h1>'
    + '<p class="sub">Four people want one seat on the Polaris. One of them is lying.</p>'
    + '<div class="chipsx"><span class="pilula">She is a doctor</span><span class="pilula">Is he a pilot?</span><span class="pilula">He isn’t</span><span class="pilula">Live Class · W·O·L·F</span></div>'
    + '<button type="button" class="btn cheio" data-a="ir" data-n="1">Open the files</button>' + faixaLive() + '</div>'
    + '<div class="foto"><img src="' + img('navio') + '" alt="A red and white ship in the Arctic ice at night"><div class="assentos">' + [0, 1, 2, 3, 4].map(function (i) { return '<span class="' + (i < 4 ? 'tomado' : 'vazio') + '">' + (i < 4 ? '■' : '?') + '</span>'; }).join('') + '<small>POLARIS · SEAT 5 IS EMPTY</small></div></div></div>';
};

R.abre = function (c) {
  return cartasPessoais(c, ABRE, S.abre, 'abre') + '<div class="partes so-prof"><h5>WHAT YOU HEAR · DON’T CORRECT</h5>' + FORMAS.map(function (f) { return '<button type="button" class="chip frase' + (f.erro ? ' erro-ouvido' : '') + (S.abre.formas[f.k] ? ' on' : '') + '" data-a="ab-f" data-v="' + f.k + '">' + f.t + '</button>'; }).join('') + '</div>';
};

R.radio = function (c) {
  var r = S.radio, n = r.n, fim = n >= RADIO.length;
  var log = '<div class="log vd"><small>RADIO LOG · POLARIS</small>' + RADIO.map(function (x, i) { return '<p class="' + (r.imp[i] ? 'impressa' : '') + '"><em>' + x.de + '</em>' + (r.imp[i] ? TR[x.au].replace(/\b(an?)\b/, '<b>$1</b>') : '………') + '</p>'; }).join('') + '</div>';
  if (fim) return cab(c) + '<div class="mesa-radio"><div class="foco"><div class="pergunta vd"><small>FIVE LINES</small><h2>Four have a word Portuguese leaves out: a doctor, a pilot, an engineer, a cook.</h2></div></div>' + log + '</div>';
  var x = RADIO[n], ouviu = (S.ouviu || {})[x.au];
  return cab(c) + trilha(RADIO, n) + '<div class="mesa-radio"><div class="foco"><div class="toca-linha vd"><span class="ic-r">📡</span>' + tocar(x.au) + '<span>' + (ouviu ? 'Say it back, out loud.' : 'Listen. Ears only.') + '</span></div>'
    + '<div>' + (r.imp[n] ? '<button type="button" class="btn" data-a="rd-prox">Next transmission</button>' : '<button type="button" class="btn cheio" data-a="rd-imp"' + (ouviu ? '' : ' disabled') + '>Print it</button>') + '</div></div>' + log + '</div>';
};

R.fichas = function (c) {
  var f = S.fichas, x = f.sel >= 0 ? GENTE[f.sel] : null;
  var grade = '<div class="dossies">' + GENTE.map(function (g, i) { return '<button type="button" class="dossie-b' + (f.sel === i ? ' on' : '') + (f.disse[i] ? ' feito' : '') + '" data-a="fc" data-n="' + i + '">' + ficha(g, '', '<small>' + (f.disse[i] ? g.el + ' is ' + g.job + '.' : 'FILE 0' + (i + 1)) + '</small>') + '</button>'; }).join('') + '</div>';
  if (!x) return cab(c) + grade + '<p class="dica-aluno" style="text-align:center">Open a file.</p>';
  var ouviu = (S.ouviu || {})[x.au];
  return cab(c) + grade + '<div class="mesa-ficha"><div class="toca-linha vd">' + tocar(x.au) + '<div>' + transcricao(x.au, TR[x.au]) + '</div></div>'
    + '<div class="vira-pessoa vd"><small>NOW SAY IT ABOUT ' + x.n.toUpperCase() + '</small>' + (f.disse[f.sel] ? '<p><b>' + x.el + ' is</b> ' + x.job + '. <b>' + x.el + ' is</b> from ' + x.pais + '.</p>' : '<p class="vaga">I am … → ' + x.el + ' is …</p><button type="button" class="btn so-prof" data-a="fc-disse"' + (ouviu ? '' : ' disabled') + '>Said it</button>') + '</div></div>';
};

R.artigo = function (c) {
  var a = S.art, n = a.n, fim = n >= ARTIGO.length, x = ARTIGO[Math.min(n, ARTIGO.length - 1)];
  if (fim) return cab(c) + trilha(ARTIGO, n) + '<div class="foco"><div class="pergunta vd"><small>EIGHT LINES</small><h2>Every job had its little word. The country had none.</h2></div>' + follow('YOUR FAMILY', 'Three people in your family, and their jobs.', ['My … is a / an …'], [], 'arf') + '</div>';
  var ok = a.esc === x.ok;
  return cab(c) + trilha(ARTIGO, n) + '<div class="frase-a vd"><span>' + x.a + '</span><span class="buraco' + (ok ? ' cheio' : a.esc ? ' errado' : '') + '">' + (ok ? (x.ok === 'nothing' ? '∅' : x.ok) : '?') + '</span><span>' + x.fim + '</span></div>'
    + '<div class="tres-b centro">' + ['a', 'an', 'nothing'].map(function (o) { return '<button type="button" class="pilula grande' + (a.esc === o ? (ok ? ' certo' : ' errado') : '') + '" data-a="ar" data-v="' + o + '">' + o + '</button>'; }).join('') + '</div>'
    + (a.esc && !ok ? '<p class="recusa" style="text-align:center">Say it out loud. Portuguese leaves it out. Does English?</p>' : '')
    + (ok ? '<p class="aprova" style="text-align:center">' + x.w + '</p><div style="text-align:center"><button type="button" class="btn" data-a="ar-prox">Next</button></div>' : '');
};

R.pergunta = function (c) {
  var p = S.perg, n = p.n, fim = n >= PERG.length, x = PERG[Math.min(n, PERG.length - 1)];
  if (fim) return cab(c) + trilha(PERG, n) + '<div class="foco"><div class="pergunta vd"><small>SIX QUESTIONS</small><h2>One answer isn’t a yes: “He says he is.”</h2></div></div>';
  var pecas = p.pulou ? [x.v.charAt(0).toUpperCase() + x.v.slice(1), x.suj.toLowerCase(), x.rest + '?'] : [x.suj, x.v, x.rest + '.'];
  return cab(c) + trilha(PERG, n) + '<div class="trem' + (p.pulou ? ' pulou' : '') + '">' + pecas.map(function (w, i) { var verbo = p.pulou ? i === 0 : i === 1; return verbo ? '<button type="button" class="vagao verbo-v" data-a="pg-pula">' + w + '</button>' : '<span class="vagao">' + w + '</span>'; }).join('') + '</div>'
    + (p.pulou ? '<p class="dica-aluno" style="text-align:center">Ask it out loud. Then listen to the answer.</p><div class="toca-linha vd centro">' + tocar(x.au) + '<div>' + transcricao(x.au, TR[x.au]) + '</div></div>'
      + ((S.trans || {})[x.au] ? '<div style="text-align:center"><button type="button" class="btn" data-a="pg-prox">Next</button></div>' : '') : '<p class="dica-aluno" style="text-align:center">Tap the verb. It jumps to the front; it is not copied.</p>');
};

R.carimbo = function (c) {
  var e = S.car, x = e.sel >= 0 ? FATOS[e.sel] : null, feitos = Object.keys(e.stamp).length;
  var mesa = '<div class="mural">' + GENTE.map(function (g, gi) {
    return '<div class="col-m">' + ficha(g, ' mini') + FATOS.map(function (f, i) { if (f.p !== gi) return ''; var s = e.stamp[i]; return '<button type="button" class="fato' + (e.sel === i ? ' on' : '') + (s ? ' s-' + s : '') + '" data-a="cb-sel" data-n="' + i + '">' + f.q + (s ? '<em>' + (s === 'v' ? 'TRUE' : 'FALSE') + '</em>' : '') + '</button>'; }).join('') + '</div>';
  }).join('') + '</div>';
  var lado = '';
  if (x) lado = '<div class="lado-car"><div class="pergunta vd"><small>ASK IT OUT LOUD FIRST</small><h2>' + x.q + '</h2></div>'
    + (e.abriu[e.sel] ? '<div class="prova vd"><small>THE EVIDENCE</small><p>' + x.ev + '</p></div>' + (e.stamp[e.sel] ? '<p class="aprova">' + x.r + '</p>' : '<div class="tres-b">' + [['v', 'TRUE'], ['f', 'FALSE']].map(function (o) { return '<button type="button" class="carimbar c-' + o[0] + (e.err === o[0] ? ' errado' : '') + '" data-a="cb" data-v="' + o[0] + '">' + o[1] + '</button>'; }).join('') + '</div>' + (e.err ? '<p class="recusa">Read the evidence again. Does it say the same thing as the file?</p>' : ''))
      : '<button type="button" class="btn cheio" data-a="cb-abre">Open the evidence</button>') + '</div>';
  else lado = '<div class="lado-car"><div class="pergunta vd"><small>' + feitos + ' OF 8 STAMPED</small><h2>' + (feitos === 8 ? 'Seven TRUE, one FALSE. Ivo isn’t an engineer.' : 'Pick a fact.') + '</h2></div></div>';
  return cab(c) + '<div class="mesa-car">' + mesa + lado + '</div>';
};

R.mentiroso = function (c) {
  var m = S.ment.abre, tudo = PARES.every(function (_, i) { return m[i]; });
  return cab(c) + '<div class="pares-m">' + PARES.map(function (p, i) {
    var g = GENTE.filter(function (x) { return x.n === p.quem; })[0];
    return '<button type="button" class="par-m vd' + (m[i] ? ' aberto' : '') + (m[i] && p.mente ? ' mente' : '') + '" data-a="mt" data-n="' + i + '">' + ficha(g, ' mini') + (m[i] ? '<p><s>' + p.nao + '</s></p><p><b>' + p.sim + '</b></p>' : '<p class="dica-aluno">Say both halves, then tap.</p>') + '</button>';
  }).join('') + '</div>' + (m[1] ? '<div class="toca-linha vd centro"><span class="ic-r">📡</span>' + tocar('d-ivo.mp3') + '<div>' + transcricao('d-ivo.mp3', TR['d-ivo.mp3']) + '</div></div>' : '')
    + (tudo ? '<p class="aprova" style="text-align:center">Ivo isn’t an engineer. He is a cook. And the ship has no cook.</p>' : '');
};

R.bordo = function (c) {
  var b = S.bordo.abre, tudo = CREW.every(function (_, i) { return b[i]; });
  return cab(c) + '<div class="mesa-bordo"><div class="tripulacao">' + CREW.map(function (x, i) { return '<button type="button" class="trip vd' + (b[i] ? ' on' : '') + '" data-a="bd" data-n="' + i + '"><span>' + ICON[x.i] + '</span><b>' + x.n + '</b><small>' + (b[i] ? x.s : 'Say it, then tap') + '</small></button>'; }).join('')
    + '<div class="trip vazio"><span>?</span><b>SEAT 5</b><small>empty</small></div></div>'
    + (tudo ? '<div class="falta vd"><small>WHAT IS MISSING</small><p>Nobody on board is a <b>doctor</b>. Nobody on board is a <b>cook</b>.</p><em>One seat, two holes.</em></div>' + follow('ASK ME', 'Ask about the crew: Is Rita a doctor?', ['Is … a …?', 'No, she isn’t. She is …'], [], 'bdf') : '') + '</div>';
};

R.entrevista = function (c) {
  var e = S.ent, n = e.n;
  if (n < PERG_E.length) {
    var pt = e.partes[n] || {};
    return cab(c) + trilha(PERG_E, n) + '<div class="mesa-ent"><div class="pergunta vd"><small>THE INTERVIEW · QUESTION ' + (n + 1) + '</small><h2>' + PERG_E[n] + '</h2></div>'
      + '<div class="partes"><h5>WHAT YOU HEAR</h5>' + PARTES_E.map(function (p) { return '<button type="button" class="chip frase' + (pt[p.k] ? ' on' : '') + '" data-a="en-p" data-v="' + p.k + '">' + p.t + '</button>'; }).join('')
      + '<button type="button" class="chip frase erro-ouvido' + (e.erro ? ' on' : '') + '" data-a="en-e">MISTAKE: SHE IS DOCTOR / IS SHE IS</button></div>'
      + (e.erro ? '<p class="recusa">She is a doctor. And the question: Is she a doctor?</p>' : '') + '<div><button type="button" class="btn" data-a="en-prox">' + (n < 5 ? 'Next question' : 'Now decide') + '</button></div></div>';
  }
  return cab(c) + '<div class="mesa-ent"><div class="pergunta vd"><small>WHO GETS THE SEAT?</small><h2>Choose, and say why with because.</h2></div><div class="candidatos">' + CAND.map(function (x, i) { return '<button type="button" class="cand' + (e.esc === i ? ' on' : '') + '" data-a="en-c" data-n="' + i + '">' + x.n + '</button>'; }).join('') + '</div>'
    + (e.esc >= 0 ? '<p class="decisao">' + CAND[e.esc].n + ' gets the seat, ' + CAND[e.esc].por + '.</p>' + fala('ent', ['… gets the seat, because …', 'I don’t choose …, because …'], []) : '') + '</div>';
};

R.fim = function (c) {
  var f = S.abre.formas, lembra = FORMAS.filter(function (x) { return f[x.k]; }).map(function (x) { return x.t; });
  return cab(c) + '<div class="fim">' + escritaFinal('fim', (S.txt || {}).fim || '', (S.salvo || {}).fim, 'This is my sister, Lia. She is an engineer. She is from Recife.\n…', 'Your family file',
    ['He is a ', 'She is an ', 'He is from ', 'She isn’t ', 'Is he a ', 'Is she an '], ['YOUR FAMILY FILE', lembra.length ? 'In scene I your teacher heard: ' + lembra.join(', ') + '. Now three people, with the little word every time.' : 'Three people: name, job with a or an, country. Then one question about them.'])
    + '<div class="lado-fim"><div class="grande vd"><span>She is <u>a</u> doctor. He is <u>an</u> engineer.</span><span><u>Is</u> she a doctor? Yes, she is.</span><span>He <u>isn’t</u> an engineer. He is a cook.</span></div>'
    + mostra('fim', 'This is my sister, Lia. She is an engineer. She is from Recife.<br>This is my father, Paulo. He is a cook. He isn’t from Brazil, he is from Portugal.<br>Is my mother a doctor? No, she isn’t. She is a teacher.', 1)
    + '<p class="hw"><a class="pilula" href="HW/" target="_blank" rel="noopener">Homework for the student →</a></p></div></div>';
};

TOQUES['ab-f'] = function (b, n, v) { S.abre.formas[v] = !S.abre.formas[v]; };
TOQUES['rd-imp'] = function () { var r = S.radio; if (!(S.ouviu || {})[RADIO[r.n].au]) return false; r.imp[r.n] = 1; };
TOQUES['rd-prox'] = function () { S.radio.n++; };
TOQUES.fc = function (b, n) { S.fichas.sel = n; };
TOQUES['fc-disse'] = function () { var f = S.fichas; if (f.sel < 0) return false; f.disse[f.sel] = 1; };
TOQUES.ar = function (b, n, v) { S.art.esc = v; };
TOQUES['ar-prox'] = function () { S.art = { n: S.art.n + 1, esc: '' }; };
TOQUES['pg-pula'] = function () { S.perg.pulou = 1; };
TOQUES['pg-prox'] = function () { S.perg = { n: S.perg.n + 1, pulou: 0 }; };
TOQUES['cb-sel'] = function (b, n) { S.car.sel = n; S.car.err = ''; };
TOQUES['cb-abre'] = function () { var e = S.car; if (e.sel < 0) return false; e.abriu[e.sel] = 1; };
TOQUES.cb = function (b, n, v) { var e = S.car, x = FATOS[e.sel]; if (!x) return false; if ((v === 'v') === !!x.v) { e.stamp[e.sel] = v; e.err = ''; } else e.err = v; };
TOQUES.mt = function (b, n) { S.ment.abre[n] = 1; };
TOQUES.bd = function (b, n) { S.bordo.abre[n] = 1; };
TOQUES['en-p'] = function (b, n, v) { var e = S.ent; e.partes[e.n] = e.partes[e.n] || {}; e.partes[e.n][v] = !e.partes[e.n][v]; };
TOQUES['en-e'] = function () { S.ent.erro = !S.ent.erro; };
TOQUES['en-prox'] = function () { S.ent.n++; S.ent.erro = 0; };
TOQUES['en-c'] = function (b, n) { S.ent.esc = n; };
