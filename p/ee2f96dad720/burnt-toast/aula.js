/* ============================================================
   BURNT TOAST · THREE TUBES · LIVE CLASS  05/10/2026
   Main series A1 · past simple afirmativo: -ed com três sons (/t/ /d/ /ɪd/)
   e os irregulares (went, took, bought, saw, ate, left) · First, Then…
   O MUNDO: terça, 11:40 PM, o alarme de incêndio acorda o prédio inteiro.
   O síndico quer a noite de todo mundo, hora por hora. A máquina tem três
   tubos de vidro e um cofre: o verbo regular cai no tubo pelo SOM (o aluno
   ouve primeiro, bate palmas nas sílabas e só então vê a palavra); o
   irregular vai para o cofre. No fim: ninguém apertou nada. Alguém
   queimou a torrada.
   Mantido da aula antiga: os 12 áudios (conferidos no faster-whisper),
   as três fotos e a revelação. Fila: FILA-LIVE-386.md · 003.
   ============================================================ */
var L = [
  { k: 'capa', est: null, img: 'alarme' },
  { k: 'semana', est: 'o', min: 7, img: 'predio', rot: 'I · Your Week', t: 'Before the file: your week.', p: 'Pick a card. Answer out loud, in the past. Then the follow-up comes.' },
  { k: 'cofre', est: 'f', min: 6, img: 'alarme', rot: 'II · Tubes or Vault?', t: 'English verbs do one of two things in the past.', p: 'Pick a verb. Say the past out loud. Then send it: -ED to the tubes, a new word to the vault.' },
  { k: 'gx', est: 'l', min: 4, img: 'alarme', rot: 'III · One Beat or Two?', t: 'Same two letters, different sounds.', p: 'Listen to the pairs. Then the ear test: one beat or two? Then say yours.' },
  { k: 'tubos', est: 'l', min: 7, img: 'alarme', rot: 'IV · Three Tubes', t: 'Three sounds behind the same two letters.', p: 'Play it first. Clap the beats. Then the word appears: drop it in the tube that matches the SOUND.' },
  { k: 'frio', est: 'o', min: 7, img: 'predio', rot: 'V · Twelve, Cold', t: 'No story, no help. Just the verb.', p: 'Say the past before you flip the card.' },
  { k: 'noite', est: 'o', min: 7, img: 'predio', rot: 'VI · Build Your Alibi', t: 'The manager wants your night. Six hours of it.', p: 'For each hour, pick a line and say it. Or say your own. It goes into your alibi file.' },
  { k: 'ordem', est: 'f', min: 6, extra: 1, img: 'predio', rot: 'VII · First, Then, After That', t: 'A night isn’t a list. It has an order, and the order has words.', p: 'Tap the four lines in order. Then say the whole story.' },
  { k: 'reuniao', est: 'o', min: 7, extra: 1, img: 'predio', rot: 'VIII · The Building Meeting', t: 'The next morning: who did what before 11:40?', p: 'Knock on a door. Tell the meeting what the neighbor did, in order.' },
  { k: 'denovo', est: 'o', min: 7, extra: 1, img: 'alarme', rot: 'IX · Your Alibi, Cold', t: 'The file is closed. Tell your night again.', p: 'Hour by hour. Only the order word is on the screen.' },
  { k: 'torrada', est: 'f', min: 6, extra: 1, img: 'predio', rot: 'X · So Who Did It?', t: 'Three facts on the table.', p: 'Read them out loud. Say what happened. Then open the photo.' },
  { k: 'fim', est: 'w', min: 6, img: 'predio', rot: 'XI · Your Real Night', t: 'The invented night is over. Now a real one.', p: 'Write what you did last night, in order: First, Then, After that, Finally. The red line watches the past. It goes to your My notes.' }
];

/* I · sua semana */
var SEMANA = [
  { k: 'LAST NIGHT', q: 'What did you do last night?', fup: 'What time did you go to bed?', st: ['I watched …', 'I worked …', 'I went to …'], ex: 'I cooked pasta and watched a series. I went to bed at eleven.' },
  { k: 'WENT WRONG', q: 'What did you lose or miss this week?', fup: 'What did you do then?', st: ['I lost …', 'I burned …', 'I missed …'], ex: 'I missed the bus on Monday. I walked to work in the rain!' },
  { k: 'THE WEEKEND', q: 'Where did you go last weekend?', fup: 'Who did you go with?', st: ['I went to …', 'I stayed at home.'], ex: 'I went to the beach with my cousins.' },
  { k: 'DINNER', q: 'What did you eat for dinner yesterday?', fup: 'Who cooked it?', st: ['I ate …', 'I cooked …', 'My … cooked.'], ex: 'I ate rice and chicken. My father cooked it.' }
];

/* II · tubos ou cofre */
var COFRE = [
  { w: 'work', k: 'ed', p: 'worked' }, { w: 'go', k: 'irr', p: 'went' }, { w: 'play', k: 'ed', p: 'played' }, { w: 'take', k: 'irr', p: 'took' },
  { w: 'watch', k: 'ed', p: 'watched' }, { w: 'buy', k: 'irr', p: 'bought' }, { w: 'open', k: 'ed', p: 'opened' }, { w: 'see', k: 'irr', p: 'saw' },
  { w: 'call', k: 'ed', p: 'called' }, { w: 'eat', k: 'irr', p: 'ate' }, { w: 'start', k: 'ed', p: 'started' }, { w: 'leave', k: 'irr', p: 'left' }
];

/* III · os três tubos */
var TUBOS = [{ k: 't', t: '/t/', s: 'ends like T', b: 1 }, { k: 'd', t: '/d/', s: 'ends like D', b: 1 }, { k: 'id', t: '/ɪd/', s: 'one more beat', b: 2 }];
var PALAVRAS = [
  { w: 'worked', k: 't', au: 'worked.mp3' }, { w: 'played', k: 'd', au: 'played.mp3' }, { w: 'wanted', k: 'id', au: 'wanted.mp3' },
  { w: 'watched', k: 't', au: 'watched.mp3' }, { w: 'called', k: 'd', au: 'called.mp3' }, { w: 'needed', k: 'id', au: 'needed.mp3' },
  { w: 'stopped', k: 't', au: 'stopped.mp3' }, { w: 'opened', k: 'd', au: 'opened.mp3' }, { w: 'started', k: 'id', au: 'started.mp3' },
  { w: 'washed', k: 't', au: 'washed.mp3' }, { w: 'lived', k: 'd', au: 'lived.mp3' }, { w: 'waited', k: 'id', au: 'waited.mp3' }
];
var PORQUE = { t: 'No new beat: one clap, like the verb itself. The end sounds like T.', d: 'No new beat: one clap. The end sounds like D.', id: 'A real new beat: want-ed. Only after a T or D sound.' };

/* IV · doze a frio */
var FRIO = [['go', 'went'], ['work', 'worked'], ['take', 'took'], ['watch', 'watched'], ['buy', 'bought'], ['call', 'called'], ['see', 'saw'], ['start', 'started'], ['eat', 'ate'], ['open', 'opened'], ['leave', 'left'], ['play', 'played']];

/* V · o álibi */
var HORAS = [
  { h: '7:00 PM', o: ['I cooked dinner.', 'I worked late.', 'I walked home.'] },
  { h: '8:00 PM', o: ['I watched a movie.', 'I called my mother.', 'I washed the dishes.'] },
  { h: '9:00 PM', o: ['I played a game.', 'I read a book.', 'I went to the gym.'] },
  { h: '10:00 PM', o: ['I took a shower.', 'I talked to a friend.', 'I cleaned the kitchen.'] },
  { h: '11:00 PM', o: ['I went to bed.', 'I watched the news.', 'I made some tea.'] },
  { h: '11:40 PM', o: ['I heard the alarm.', 'I woke up.', 'I opened my door.'] }
];

/* VI · a ordem */
var ORDEM = [{ c: 'First,', f: 'I cooked dinner.' }, { c: 'Then', f: 'I watched a movie.' }, { c: 'After that,', f: 'I called my sister.' }, { c: 'Finally,', f: 'I went to bed.' }];

/* VII · a reunião */
var VIZINHOS = [
  { ap: 'APT 1', n: 'Mr. Costa', v: [['watch', 'TV'], ['fall', 'asleep'], ['wake', 'up at 11:40']], ex: 'First, Mr. Costa watched TV. Then he fell asleep. Finally, he woke up at 11:40.' },
  { ap: 'APT 2', n: 'Ms. Reed', v: [['make', 'toast'], ['read', 'a book'], ['open', 'a window']], ex: 'First, Ms. Reed made toast. Then she read a book. After that, she opened a window.' },
  { ap: 'APT 3', n: 'The Parks', v: [['play', 'cards'], ['call', 'a friend'], ['go', 'to bed']], ex: 'First, the Parks played cards. Then they called a friend. Finally, they went to bed.' },
  { ap: 'APT 4', n: 'You', v: [['your', 'own night']], ex: 'First, I cooked dinner. Then I watched a movie. Finally, I went to bed.' }
];
var PARTES = [{ k: 'ed', t: '-ED WITH THE RIGHT SOUND' }, { k: 'irr', t: 'AN IRREGULAR (MADE, FELL, WENT…)' }, { k: 'ordem', t: 'FIRST / THEN / FINALLY' }];

/* VIII · de novo */
var DENOVO = ['First', 'Then', 'After that', 'After that', 'Then', 'Finally'];

/* IX · a torrada */
var FATOS = ['The alarm started at 11:40 PM.', 'Nobody saw a person near the alarm.', 'The smoke came from apartment 2.'];
var TORRADA_OPS = ['Somebody burned the toast.', 'Mr. Costa pressed the alarm.', 'The Parks started a fire.'];

/* ---------- o estado ---------- */
var S = { i: 0, faixa: 1, fala: {}, resp: {}, armas: {},
  semana: { sel: -1, foi: {} }, cofre: { sel: -1, feitos: {}, err: '' },
  tubos: { n: 0, palmas: 0, esc: '' }, frio: { vira: {}, de: {} },
  noite: { esc: {} }, ordem: { poe: [], err: -1 }, reuniao: { sel: -1, partes: {}, erro: {}, foi: {} },
  denovo: { n: 0 }, torrada: { esc: -1, foto: 0 } };

/* ---------- desenhos ---------- */
function tubo(t, cheio, ativo) {
  var n = Math.min(cheio, 4), liq = n * 22;
  return '<svg class="tubo-svg" viewBox="0 0 80 180" aria-hidden="true"><rect x="16" y="6" width="48" height="160" rx="22" class="vidro"/>'
    + '<rect x="20" y="' + (162 - liq) + '" width="40" height="' + liq + '" rx="16" class="liq liq-' + t + '"/>'
    + (ativo ? '<rect x="16" y="6" width="48" height="160" rx="22" class="brilho"/>' : '') + '<path d="M26 20 v120" class="reflexo"/></svg>';
}

/* ---------- as cenas ---------- */
var R = {};
R.capa = function () {
  return '<div class="capa"><div class="lado-a"><span class="kick">MAIN SERIES · THREE TUBES · A1</span><h1>Burnt <b>Toast</b></h1>'
    + '<p class="sub">Tuesday, 11:40 PM. The fire alarm woke the whole building. Now everybody needs an alibi.</p>'
    + '<div class="chipsx"><span class="pilula">worked /t/</span><span class="pilula">played /d/</span><span class="pilula">wanted /ɪd/</span><span class="pilula">went · took · ate</span><span class="pilula">Live Class · W·O·L·F</span></div>'
    + '<button type="button" class="btn cheio" data-a="ir" data-n="1">Open the file</button>' + faixaLive() + '</div>'
    + '<div class="foto"><img src="' + img('alarme') + '" alt="A red fire alarm in a dark corridor"><div class="placa-capa"><small>FIRE ALARM · BUILDING 7</small><b>11:40 PM</b><span>TUESDAY</span></div></div></div>';
};
R.semana = function (c) { return cartasPessoais(c, SEMANA, S.semana, 'semana'); };

R.cofre = function (c) {
  var e = S.cofre, x = e.sel >= 0 ? COFRE[e.sel] : null, nTub = 0, nCof = 0;
  COFRE.forEach(function (v, i) { if (e.feitos[i]) { if (v.k === 'ed') nTub++; else nCof++; } });
  var fila = '<div class="verbos">' + COFRE.map(function (v, i) {
    return '<button type="button" class="verbo' + (e.sel === i ? ' on' : '') + (e.feitos[i] ? ' feito' : '') + '" data-a="cf-sel" data-n="' + i + '"' + (e.feitos[i] ? ' disabled' : '') + '>' + v.w + '</button>';
  }).join('') + '</div>';
  var dentro = function (k) { return COFRE.filter(function (v, i) { return e.feitos[i] && v.k === k; }).map(function (v) { return '<span>' + v.p + '</span>'; }).join(''); };
  var destinos = '<div class="destinos"><button type="button" class="destino tubos-d' + (x && e.err === 'ed' ? ' errado' : '') + '" data-a="cf" data-v="ed"' + (x && !e.feitos[e.sel] ? '' : ' disabled') + '><small>THE TUBES · + ED</small><div class="mini-tubos">' + tubo('t', nTub, 0) + tubo('d', nTub > 2 ? nTub - 2 : 0, 0) + tubo('id', nTub > 4 ? 1 : 0, 0) + '</div><div class="dentro">' + (dentro('ed') || '<em>empty</em>') + '</div></button>'
    + '<button type="button" class="destino cofre-d' + (x && e.err === 'irr' ? ' errado' : '') + '" data-a="cf" data-v="irr"' + (x && !e.feitos[e.sel] ? '' : ' disabled') + '><small>THE VAULT · A NEW WORD</small><div class="porta-cofre"><i></i></div><div class="dentro">' + (dentro('irr') || '<em>empty</em>') + '</div></button></div>';
  var meio = x ? (e.feitos[e.sel] ? '<p class="aprova">GOT IT. ' + x.w + ' → <b>' + x.p + '</b>. ' + (x.k === 'ed' ? 'It just takes -ED.' : 'A new word: it goes in the vault.') + '</p>'
      : '<div class="pergunta vd"><small>SAY THE PAST FIRST</small><h2>' + x.w + ' → ?</h2></div>' + (e.err ? '<p class="recusa">' + (x.k === 'irr' ? 'That one changes into a new word. It goes to the vault.' : 'That one just takes -ED. Send it to the tubes.') + '</p>' + mostra('cf' + e.sel, x.w + ' → <b>' + x.p + '</b>') : ''))
    : '<p class="dica-aluno" style="text-align:center">Pick a verb.</p>';
  var fim = Object.keys(e.feitos).length === COFRE.length ? '<p class="aprova">Six take -ED, six change. There is no third kind.</p>' : '';
  return cab(c) + fila + '<div class="foco">' + meio + '</div>' + destinos + fim;
};

R.tubos = function (c) {
  var t = S.tubos, n = t.n, fim = n >= PALAVRAS.length, x = PALAVRAS[Math.min(n, PALAVRAS.length - 1)];
  var cont = { t: 0, d: 0, id: 0 }; PALAVRAS.slice(0, n).forEach(function (p) { cont[p.k]++; });
  var certo = !fim && t.esc === x.k;
  if (certo) cont[x.k]++;
  var ouviu = !fim && (S.ouviu || {})[x.au];
  var maq = '<div class="maquina vd">' + TUBOS.map(function (b) {
    var cls = !fim && t.esc === b.k ? (b.k === x.k ? ' certo' : ' errado') : '';
    return '<button type="button" class="tubo' + cls + '" data-a="tb" data-v="' + b.k + '"' + (!fim && ouviu && !certo ? '' : ' disabled') + '><b>' + b.t + '</b>' + tubo(b.k, cont[b.k], cls === ' certo') + '<small>' + b.s + '</small><span class="dentro">' + PALAVRAS.slice(0, n + (certo ? 1 : 0)).filter(function (p) { return p.k === b.k; }).map(function (p) { return '<i>' + p.w + '</i>'; }).join('') + '</span></button>';
  }).join('') + '</div>';
  if (fim) return cab(c) + trilha(PALAVRAS, n) + maq + '<div class="foco"><div class="pergunta vd"><small>TWELVE WORDS, THREE SOUNDS</small><h2>Only one tube adds a beat: /ɪd/, after a T or D sound.</h2></div></div>';
  var lado = '<div class="ouvir-tubo vd"><div class="toca-linha">' + tocar(x.au) + '<span>' + (ouviu ? 'Now clap the beats of the verb.' : 'Play it first. Ears only.') + '</span></div>'
    + '<div class="palmas"><button type="button" class="palma" data-a="palma" aria-label="Clap">👏</button><b>' + t.palmas + '</b><span>' + (t.palmas === 1 ? 'beat' : 'beats') + '</span><button type="button" class="pilula" data-a="palma-zera">again</button></div>'
    + (ouviu ? '<div class="palavra-viva">He <b>' + x.w + '</b>.</div>' : '<div class="palavra-viva oculta">He ______.</div>')
    + (certo ? '<p class="aprova">GOT IT. ' + PORQUE[x.k] + '</p><div><button type="button" class="btn" data-a="tb-prox">Next word</button></div>'
      : (t.esc ? '<p class="recusa">Play it again and clap. How many beats? Does the end sound like T or D?</p>' + mostra('tb' + n, x.w + ' → ' + TUBOS.filter(function (b) { return b.k === x.k; })[0].t) : (ouviu ? '<p class="dica-aluno">Say it. Then drop it in a tube.</p>' : ''))) + '</div>';
  return cab(c) + trilha(PALAVRAS, n) + '<div class="lab">' + maq + lado + '</div>';
};

R.frio = function (c) {
  var f = S.frio, feitos = Object.keys(f.vira).length;
  return cab(c) + '<div class="cartas-frio">' + FRIO.map(function (v, i) {
    var on = f.vira[i];
    return '<button type="button" class="frio-c' + (on ? ' on' : '') + (f.de[i] ? ' de-novo' : '') + '" data-a="fr" data-n="' + i + '"><span class="face frente"><small>' + (i + 1) + '</small><b>' + v[0] + '</b></span><span class="face verso"><b>' + v[1] + '</b></span></button>';
  }).join('') + '</div>' + (feitos === FRIO.length ? '<p class="aprova" style="text-align:center">Twelve out of twelve, cold. Now again, faster: your teacher points.</p>' : '<p class="dica-aluno" style="text-align:center">Say the past out loud. Then flip.</p>');
};

R.noite = function (c) {
  var e = S.noite, todos = HORAS.every(function (_, i) { return e.esc[i] != null; });
  var linhas = HORAS.map(function (x, i) {
    return '<div class="hora vd"><b class="h">' + x.h + '</b><div class="ops">' + x.o.map(function (o, k) { return '<button type="button" class="chip frase' + (e.esc[i] === k ? ' on' : '') + '" data-a="nt" data-n="' + i + '" data-v="' + k + '">' + o + '</button>'; }).join('')
      + '<button type="button" class="chip frase propria' + (e.esc[i] === 9 ? ' on' : '') + '" data-a="nt" data-n="' + i + '" data-v="9">my own</button></div></div>';
  }).join('');
  var ficha = '<div class="ficha vd"><small>ALIBI FILE · APARTMENT 4</small>' + HORAS.map(function (x, i) {
    var k = e.esc[i]; return '<p><b>' + x.h + '</b> ' + (k == null ? '<span class="vazio">…</span>' : k === 9 ? '<em>(said in my own words)</em>' : x.o[k]) + '</p>';
  }).join('') + (todos ? '<span class="carimbo">SIGNED</span>' : '') + '</div>';
  return cab(c) + '<div class="alibi"><div class="horas">' + linhas + '</div>' + ficha + '</div>' + (todos ? '<p class="aprova" style="text-align:center">Six hours, six sentences, all yours. Remember them: the manager asks again later.</p>' : '');
};

R.ordem = function (c) {
  var e = S.ordem, fim = e.poe.length === ORDEM.length;
  var soltas = ordem(ORDEM.map(function (x, i) { return [x, i]; }), 3).filter(function (o) { return e.poe.indexOf(o[1]) < 0; });
  return cab(c) + '<div class="historia-ordem"><div class="montada vd">' + (e.poe.length ? e.poe.map(function (i) { return '<p><b>' + ORDEM[i].c + '</b> ' + ORDEM[i].f + '</p>'; }).join('') : '<p class="vazio">The story starts here.</p>') + '</div>'
    + (fim ? '<div class="foco"><p class="aprova">GOT IT. Four words, and the night became a story.</p>' + follow('NOW YOURS', 'Tell last night with the same four words.', ['First, I …', 'Then I …', 'After that, I …', 'Finally, I …'], [], 'ordemsua', mostra('ordemsua', 'First, I had dinner. Then I watched a movie. After that, I called my sister. Finally, I went to bed.', 1)) + '</div>'
      : '<div class="soltas-o">' + soltas.map(function (o) { return '<button type="button" class="tira-o' + (e.err === o[1] ? ' treme' : '') + '" data-a="od" data-n="' + o[1] + '"><b>' + o[0].c + '</b> ' + o[0].f + '</button>'; }).join('') + '</div>'
        + (e.err >= 0 ? '<p class="recusa">Not yet. Which word starts a story? Which one ends it?</p>' : '')) + '</div>';
};

R.reuniao = function (c) {
  var e = S.reuniao, x = e.sel >= 0 ? VIZINHOS[e.sel] : null;
  var portas = '<div class="portas">' + VIZINHOS.map(function (v, i) {
    return '<button type="button" class="porta' + (e.sel === i ? ' on' : '') + (e.foi[i] ? ' feita' : '') + '" data-a="rn" data-n="' + i + '"><small>' + v.ap + '</small><b>' + v.n + '</b><i class="macaneta"></i></button>';
  }).join('') + '</div>';
  if (!x) return cab(c) + portas + '<p class="dica-aluno" style="text-align:center">Knock on a door.</p>';
  var pt = e.partes[e.sel] || {}, err = e.erro[e.sel];
  var cartao = '<div class="cartao-viz vd"><small>' + x.ap + ' · ' + x.n.toUpperCase() + ' · BEFORE 11:40</small><ol>' + x.v.map(function (v) { return '<li><b>' + v[0] + '</b> ' + v[1] + '</li>'; }).join('') + '</ol><p class="dica-aluno">Say it in the past, in order: First, … Then, … Finally, …</p></div>';
  var lado = '<div class="lado-reuniao"><div class="partes"><h5>WHAT YOU HEAR</h5>' + PARTES.map(function (p) { return '<button type="button" class="chip frase' + (pt[p.k] ? ' on' : '') + '" data-a="rn-parte" data-v="' + p.k + '">' + p.t + '</button>'; }).join('')
    + '<button type="button" class="chip frase erro-ouvido' + (err ? ' on' : '') + '" data-a="rn-erro">MISTAKE HEARD: work-ED / goed / maked</button></div>'
    + (err ? '<p class="recusa">One beat: <b>worked</b>. And the vault words: <b>made, fell, went, woke</b>.</p>' : '')
    + mostra('rn' + e.sel, x.ex, 1) + (e.foi[e.sel] ? '' : '<div><button type="button" class="btn so-prof" data-a="rn-foi">Reported · close the door</button></div>')
    + (e.sel === 1 ? '<p class="so-prof diga-prof">Ask: <i>“Toast? At what time?”</i> Don’t say more.</p>' : '') + '</div>';
  return cab(c) + portas + '<div class="mesa-reuniao">' + cartao + lado + '</div>';
};

R.denovo = function (c) {
  var e = S.denovo, n = e.n, fim = n >= HORAS.length, x = HORAS[Math.min(n, HORAS.length - 1)], k = S.noite.esc[Math.min(n, HORAS.length - 1)];
  if (fim) return cab(c) + trilha(HORAS, n) + '<div class="foco"><div class="pergunta vd"><small>CASE FILE · APARTMENT 4</small><h2>Six hours, in order, with nothing on the table.</h2></div></div>';
  return cab(c) + trilha(HORAS, n) + '<div class="foco"><div class="pergunta vd"><small>' + x.h + '</small><h2>' + DENOVO[n] + (DENOVO[n] === 'Then' ? '' : ',') + ' …</h2></div>'
    + mostra('dn' + n, k == null ? 'Your line from scene V (you didn’t pick one): ' + x.o[0] : k === 9 ? 'You said this hour in your own words.' : DENOVO[n] + (DENOVO[n] === 'Then' ? ' ' : ', ') + x.o[k].charAt(0).toLowerCase() + x.o[k].slice(1), 1)
    + '<div style="text-align:center"><button type="button" class="btn" data-a="dn-prox">Next hour</button></div></div>';
};

R.torrada = function (c) {
  var e = S.torrada, certo = e.esc === 0, ops = ordem(TORRADA_OPS.map(function (t, i) { return [t, i]; }), 2);
  var fatos = '<div class="fatos">' + FATOS.map(function (f, i) { return '<div class="fato-c vd"><small>FACT ' + (i + 1) + '</small><p>' + f + '</p></div>'; }).join('') + '</div>';
  var corpo = certo ? '<div class="revela"><div class="foto-torrada' + (e.foto ? ' on' : '') + '">' + (e.foto ? '<img src="' + img('torrada') + '" alt="Two pieces of burnt toast on a plate">' : '<button type="button" class="btn cheio" data-a="tr-foto">Open the photo from apartment 2</button>') + '</div>'
      + '<div class="lado-revela"><p class="aprova">GOT IT. Somebody <b>burned</b> the toast. /d/, one beat.</p><p class="nota-fim">Nobody pressed anything. The whole building spent the night defending itself against nothing.</p>'
      + follow('FOLLOW-UP', 'What did Ms. Reed do next, do you think?', ['She opened …', 'She called …', 'She said …'], [], 'trf', mostra('trf', 'She opened all the windows and she said sorry to everybody!', 1)) + '</div></div>'
    : '<div class="foco"><div class="pergunta vd"><small>SO WHAT HAPPENED?</small><h2>Say it before you tap.</h2></div><div class="versoes">' + ops.map(function (o) { return '<button type="button" class="versao' + (e.esc === o[1] ? ' errado' : '') + '" data-a="tr" data-n="' + o[1] + '">' + o[0] + '</button>'; }).join('') + '</div>'
      + (e.esc > 0 ? '<p class="recusa">Look at fact three. Where did the smoke come from? What did Ms. Reed make?</p>' + mostra('tr', TORRADA_OPS[0]) : '') + '</div>';
  return cab(c) + fatos + corpo;
};

R.fim = function (c) {
  return cab(c) + '<div class="fim">' + escritaFinal('fim', (S.txt || {}).fim || '', (S.salvo || {}).fim, 'First, I cooked dinner.\nThen I …', 'Your real night',
    ['First, I ', 'Then I ', 'After that, I ', 'Finally, I ', 'went ', 'watched ', 'cooked ', 'ate '], ['YOUR REAL NIGHT', 'What did you do last night? Five lines, in order.'])
    + '<div class="lado-fim"><div class="grande vd"><span>work<u>ed</u> /t/ · play<u>ed</u> /d/ · want<u>ed</u> /ɪd/</span><span>go → <u>went</u> · eat → <u>ate</u> · take → <u>took</u></span><small>Only -ted and -ded add a beat. The vault words never take -ED.</small></div>'
    + mostra('fim', 'First, I worked until seven.<br>Then I cooked pasta and watched a movie.<br>After that, I called my sister.<br>Finally, I went to bed at eleven. No alarm, no toast!', 1)
    + '<p class="hw"><a class="pilula" href="HW/" target="_blank" rel="noopener">Homework for the student →</a></p></div></div>';
};

/* ---------- os toques desta aula ---------- */
TOQUES['cf-sel'] = function (b, n) { S.cofre.sel = n; S.cofre.err = ''; };
TOQUES.cf = function (b, n, v) { var e = S.cofre, x = COFRE[e.sel]; if (!x || e.feitos[e.sel]) return false; if (v === x.k) { e.feitos[e.sel] = 1; e.err = ''; } else e.err = v; };
TOQUES.palma = function () { S.tubos.palmas = Math.min(S.tubos.palmas + 1, 9); };
TOQUES['palma-zera'] = function () { S.tubos.palmas = 0; };
TOQUES.tb = function (b, n, v) { var t = S.tubos, x = PALAVRAS[t.n]; if (!x || t.esc === x.k) return false; t.esc = v; };
TOQUES['tb-prox'] = function () { S.tubos = { n: S.tubos.n + 1, palmas: 0, esc: '' }; };
TOQUES.fr = function (b, n) { var f = S.frio; if (f.vira[n]) { f.de[n] = !f.de[n]; } else f.vira[n] = 1; };
TOQUES.nt = function (b, n, v) { S.noite.esc[n] = +v; };
TOQUES.od = function (b, n) { var e = S.ordem; if (n === e.poe.length) { e.poe.push(n); e.err = -1; } else e.err = n; };
TOQUES.rn = function (b, n) { S.reuniao.sel = n; };
TOQUES['rn-parte'] = function (b, n, v) { var e = S.reuniao; e.partes[e.sel] = e.partes[e.sel] || {}; e.partes[e.sel][v] = !e.partes[e.sel][v]; };
TOQUES['rn-erro'] = function () { var e = S.reuniao; e.erro[e.sel] = !e.erro[e.sel]; };
TOQUES['rn-foi'] = function () { S.reuniao.foi[S.reuniao.sel] = 1; };
TOQUES['dn-prox'] = function () { S.denovo.n++; };
TOQUES.tr = function (b, n) { if (S.torrada.esc === 0) return false; S.torrada.esc = n; };
TOQUES['tr-foto'] = function () { S.torrada.foto = 1; };

/* 10/11/2026 · AS EXPLICAÇÕES (kit/formatos3.js) · G11 · uma cena curta nova (k: gx) antes de tubos.
   Explicação 100% em inglês: see → notice → use (o aluno fala ou escreve uma frase dele no fim). */
var GX_EXPLICA = { formato: 'som2', titulo: 'The past with -ed. Listen first.',
  toque: 'Tap ▶ and listen. Count the beats in the verb: walked has one, wanted has two.',
  pares: [
    [{ t: 'walked', fala: 'We walked home.' }, { t: 'called', fala: 'We called home.' }],
    [{ t: 'wanted', fala: 'We wanted toast.' }, { t: 'watched', fala: 'We watched the news.' }]
  ],
  pergunta: 'The ear test. How many beats in the verb?',
  itens: [
    { fala: 'We cooked dinner.', o: ['1 beat', '2 beats'], c: 0 },
    { fala: 'We waited for the bus.', o: ['1 beat', '2 beats'], c: 1 },
    { fala: 'I called my mom.', o: ['1 beat', '2 beats'], c: 0 },
    { fala: 'He needed help.', o: ['1 beat', '2 beats'], c: 1 }
  ],
  nota: 'After <b>t</b> or <b>d</b>, -ed is a new beat: wait-ed, need-ed, want-ed. After any other sound, -ed adds no beat: cooked, called, walked.',
  uso: { p: 'Your turn. Say what you did last night: one verb with one beat, one verb with two beats.', molde: ['I cooked …', 'I wanted …'], ex: 'I cooked dinner. Then I waited for the toast.' },
  prof: 'The ▶ uses the voice of the browser. No sound? Say the pairs yourself: one beat, then two beats.' };
R.gx = function (c) { return cab(c) + FM.ex('gx_som', GX_EXPLICA); };
