/* ============================================================
   MIND MATTERS · THE CERTAINTY DIAL · LIVE CLASS  06/10/2026
   Main series A2 · dedução no presente: must be (100%) · might be (50%) ·
   can't be (0%). E a separação: have to é REGRA, must be é PROVA.
   Erros universais: "must to be", "it can be" para o impossível, "must
   not be" no lugar de can't be, "he has to be tired" para dedução.
   O MUNDO (da aula velha): o Paciente 07 na sala de espera; o aluno é o
   assistente do médico e monta a ficha. No fim, três bolsas esquecidas.
   O passado (must have been) é da Office Mystery: fica fora.
   A CARA: o MOSTRADOR de certeza (SVG, meia-lua de 0 a 100%, ponteiro) e a
   FICHA clínica escura de prancheta. Sem áudio.
   Fila: FILA-LIVE-386.md · 056.
   ============================================================ */
var L = [
  { k: 'capa', est: null, img: 'mesa' },
  { k: 'abre', est: 'o', min: 7, img: 'janela', rot: 'I · Look at Me', t: 'Before the patient comes in: guess about your teacher.', p: 'Pick a card. Answer out loud, then say how sure you are. Nobody is corrected here.' },
  { k: 'ouve', est: 'l', min: 7, img: 'sala', rot: 'II · What He Says', t: 'Patient 07 talks. Only what he really said goes on the chart.', p: 'Your teacher reads his words. Then file each note: HE SAID IT, or HE DIDN’T.' },
  { k: 'deve', est: 'f', min: 6, img: 'mesa', rot: 'III · Must, or Have To?', t: 'One is you reading the proof. The other is somebody forcing him.', p: 'Read the situation. Say the right one out loud. Then tap it.' },
  { k: 'ponteiro', est: 'o', min: 7, img: 'sala', rot: 'IV · Set the Needle', t: 'Read the proof. Set the needle. Then say the sentence.', p: '0% can’t be · 50% might be · 100% must be. The needle comes first.' },
  { k: 'bate', est: 'f', min: 6, img: 'xicara', rot: 'V · Match the Dial', t: 'The needle is already set. Pick the sentence that matches it.', p: 'Read the dial. Say the sentence. Then tap it.' },
  { k: 'regra', est: 'f', min: 6, img: 'mesa', rot: 'VI · The Rule', t: 'Not what is true: how sure you are.', p: 'Say each wrong line the right way, out loud. Then tap it.' },
  { k: 'ficha', est: 'o', min: 7, extra: 1, img: 'mesa', rot: 'VII · The Chart', t: 'Build each line of the chart from the pieces.', p: 'Read the proof. Say the sentence from the pieces. Then open it.' },
  { k: 'bolsas', est: 'o', min: 7, extra: 1, img: 'sala', rot: 'VIII · Three Bags', t: 'Three strangers left their bags in the waiting room.', p: 'Look at the bag. Guess the owner’s life. Your teacher asks: are you sure?' },
  { k: 'semana', est: 'o', min: 7, extra: 1, img: 'xicara', rot: 'IX · Your Week', t: 'Real life now. Answer, then guess about somebody you know.', p: 'Pick a card. Answer it. The follow-up asks for a deduction.' },
  { k: 'fim', est: 'w', min: 6, img: 'porta', rot: 'X · The Conclusion', t: 'The doctor opens the door. Your chart is the conclusion.', p: 'Write three lines about somebody you know: one must be, one might be, one can’t be. It goes to your My notes.' }
];

var ABRE = [
  { k: 'LAST NIGHT', q: 'What do you think I did last night? Are you sure?', fup: 'How sure: 100%, 50%, 0%?', st: ['Maybe you …', 'I think you …'], ex: 'I think you watched a series. I’m not sure.' },
  { k: 'TODAY', q: 'Look at me. How do I feel today? How sure are you?', fup: 'What is the proof?', st: ['You look …', 'You must be …'], ex: 'You look tired. You must be tired!' },
  { k: 'MY BAG', q: 'What do you think I have in my bag right now?', fup: 'And what can’t be in it?', st: ['You might have …'], ex: 'You might have a book. You must have your phone.' }
];
var FORMAS = [{ k: 'must', t: 'MUST BE' }, { k: 'might', t: 'MIGHT BE' }, { k: 'cant', t: 'CAN’T BE' }, { k: 'to', t: 'MUST TO BE / HAVE TO BE', erro: 1 }, { k: 'canbe', t: 'IT CAN BE (FOR A NO)', erro: 1 }];

/* o mostrador: v de 0 a 100 */
function mostrador(v, cls) {
  var a = Math.PI * (1 - (v === null || v === undefined ? 50 : v) / 100), x = 150 + 108 * Math.cos(a), y = 160 - 108 * Math.sin(a), marcas = '';
  for (var i = 0; i <= 10; i++) { var b = Math.PI * (1 - i / 10), r1 = i % 5 ? 122 : 116; marcas += '<line x1="' + (150 + r1 * Math.cos(b)).toFixed(1) + '" y1="' + (160 - r1 * Math.sin(b)).toFixed(1) + '" x2="' + (150 + 130 * Math.cos(b)).toFixed(1) + '" y2="' + (160 - 130 * Math.sin(b)).toFixed(1) + '" stroke="#5d6b7a" stroke-width="' + (i % 5 ? 1.5 : 3) + '"/>'; }
  var arco = function (d0, d1, cor) { var p0 = Math.PI * (1 - d0), p1 = Math.PI * (1 - d1); return '<path d="M' + (150 + 140 * Math.cos(p0)).toFixed(1) + ' ' + (160 - 140 * Math.sin(p0)).toFixed(1) + ' A140 140 0 0 1 ' + (150 + 140 * Math.cos(p1)).toFixed(1) + ' ' + (160 - 140 * Math.sin(p1)).toFixed(1) + '" fill="none" stroke="' + cor + '" stroke-width="12"/>'; };
  var semAgulha = v === null || v === undefined;
  return '<svg class="mostrador' + (cls ? ' ' + cls : '') + '" viewBox="0 -18 300 236" role="img" aria-label="Certainty ' + (semAgulha ? 'not set' : v + '%') + '">'
    + arco(0, .32, '#b9525a') + arco(.34, .66, '#c9a24a') + arco(.68, 1, '#4f9e74') + marcas
    + '<text x="22" y="184">CAN’T BE</text><text x="150" y="2" text-anchor="middle">MIGHT BE</text><text x="278" y="184" text-anchor="end">MUST BE</text>'
    + (semAgulha ? '<text x="150" y="150" text-anchor="middle" class="q">?</text>' : '<line x1="150" y1="160" x2="' + x.toFixed(1) + '" y2="' + y.toFixed(1) + '" class="agulha"/>')
    + '<circle cx="150" cy="160" r="10" fill="#1c232c" stroke="#8fa0b2" stroke-width="2"/>'
    + (semAgulha ? '' : '<text x="150" y="208" text-anchor="middle" class="pct">' + v + '%</text>') + '</svg>';
}
var ZONAS = [[0, 'CAN’T BE · 0%'], [50, 'MIGHT BE · 50%'], [100, 'MUST BE · 100%']];

var FALA07 = ['It’s my stomach. That’s why I came.', 'It hurts in the morning. Always before work.', 'I eat well. I sleep… enough, I think.', 'My wife says it’s the coffee.', 'So I stopped. One month, no coffee.', 'Nothing changed. My hands still shake.'];
var NOTAS = [
  { n: 'stomach pain in the morning', k: 1, w: 'He said it first.' },
  { n: 'no coffee for one month', k: 1, w: 'He gave a date. It matters later.' },
  { n: 'he sleeps well', k: 0, w: '“Enough, I think” is an opinion, not a fact.' },
  { n: 'his hands shake', k: 1, w: 'His words: my hands still shake.' },
  { n: 'pain in the chest', k: 0, w: 'He never said it. Nothing invented goes on a chart.' },
  { n: 'he hates his job', k: 0, w: 'He said work. Not one word about hating it.' }
];

var DEVE = [
  { sit: 'He arrived two hours early and never sat back in the chair.', ok: 'He must be nervous.', mau: 'He has to be nervous.', w: 'Nobody is ordering him to feel it. You are reading proof.' },
  { sit: 'A clinic rule: every new patient is here at eight.', ok: 'He has to be here at eight.', mau: 'He must be here at eight.', w: 'This one is a real rule. A rule takes HAVE TO.' },
  { sit: 'He stopped coffee a month ago, and his hands still shake.', ok: 'It can’t be the coffee.', mau: 'It must not be the coffee.', w: 'For IMPOSSIBLE, English says CAN’T BE.' },
  { sit: 'He says his job is fine, three times in ten minutes.', ok: 'It might be his job.', mau: 'It has to be his job.', w: 'Three times is a reason to look, not to be sure.' },
  { sit: 'Four hours of sleep a night, for months.', ok: 'He must be exhausted.', mau: 'He must to be exhausted.', w: 'No TO after MUST.' },
  { sit: 'He has a high fever. Is he well?', ok: 'He can’t be well.', mau: 'He can be well.', w: 'CAN’T BE is the one the proof killed. Can be says the opposite.' }
];

var PROVAS = [
  { p: 'Four hours of sleep a night, for months.', v: 100, diz: 'He must be exhausted.' },
  { p: 'The pain comes only before work. On Sunday, nothing.', v: 50, diz: 'It might be his job.' },
  { p: 'No coffee for a month. The hands still shake.', v: 0, diz: 'It can’t be the coffee.' },
  { p: 'His phone rings. He looks at it and doesn’t answer.', v: 50, diz: 'It might be his boss.' },
  { p: 'He is wearing a wedding ring and talks about his wife.', v: 100, diz: 'He must be married.' },
  { p: 'He ran up four floors in one minute, and he isn’t tired.', v: 0, diz: 'His heart can’t be the problem.' },
  { p: 'Everything else on the chart is crossed out.', v: 100, diz: 'He must be anxious.' },
  { p: 'He smiles at the photo of a child on his phone.', v: 50, diz: 'It might be his son.' }
];

var BATE = [
  { v: 100, sit: 'She has three coffee cups on her desk, and it’s 9 AM.', op: [['She must be tired.', 'ok'], ['She might be tired.', 'pct'], ['She must to be tired.', 'to']] },
  { v: 0, sit: 'He’s in Tokyo today. That man in the lobby looks like him.', op: [['It can’t be him.', 'ok'], ['It can be him.', 'canbe'], ['It might be him.', 'pct']] },
  { v: 50, sit: 'The door is locked. The lights are off.', op: [['They might be out.', 'ok'], ['They must be out.', 'pct'], ['They can’t be out.', 'pct2']] },
  { v: 100, sit: 'The baby is crying, and it’s been four hours since lunch.', op: [['He must be hungry.', 'ok'], ['He has to be hungry.', 'have'], ['He can’t be hungry.', 'pct']] },
  { v: 0, sit: 'She just ate a big dinner.', op: [['She can’t be hungry.', 'ok'], ['She must not be hungry.', 'mustnot'], ['She might be hungry.', 'pct']] }
];
var NOTA = { pct: 'Read the dial again. How sure is it?', pct2: 'Read the dial again. How sure is it?', to: 'No TO after must: must be.', canbe: 'Can be says it’s possible. For impossible: can’t be.', have: 'have to is a rule. This is proof: must be.', mustnot: 'For impossible, English says can’t be.' };

var FITAS = [['MUST BE · 100%', 'the only answer left'], ['MIGHT BE · 50%', 'one answer out of two or three'], ['CAN’T BE · 0%', 'the answer the proof killed'], ['HAVE TO', 'a rule, not a guess']];
var ARMAS = [
  ['NO TO', 'He must to be tired.', 'He must be tired.', 'After must, might, can’t: the plain verb. No to, no s.'],
  ['IMPOSSIBLE', 'It must not be the coffee.', 'It can’t be the coffee.', 'For 0%, English says can’t be.'],
  ['CAN BE', 'He has a fever. He can be well.', 'He has a fever. He can’t be well.', 'can be = it’s possible. The proof killed it: can’t be.'],
  ['PROOF, NOT A RULE', 'He has to be nervous.', 'He must be nervous.', 'Nobody forces a feeling. Proof: must be.'],
  ['A REAL RULE', 'Every patient must be here at eight, I think.', 'Every patient has to be here at eight.', 'A clinic rule takes have to.'],
  ['NO S', 'She musts be tired.', 'She must be tired.', 'must never changes: he must, they must.']
];

var FICHA = [
  { quem: 'four hours of sleep, every night, for months', pista: 'he · must + be · exhausted', ok: 'He must be exhausted.' },
  { quem: 'the stomach pain comes only before work', pista: 'it · might + be · his job', ok: 'It might be his job.' },
  { quem: 'no coffee for a month, and the hands still shake', pista: 'it · can + not + be · the coffee', ok: 'It can’t be the coffee.' },
  { quem: 'his hands shake at 10 AM, with nothing in them', pista: 'he · must + be · nervous right now', ok: 'He must be nervous right now.' },
  { quem: 'he came two hours early and never opened a magazine', pista: 'he · must + be · worried about today', ok: 'He must be worried about today.' }
];

var BOLSAS = [
  { img: 'bolsa1', n: 'BAG ONE', coisas: 'a water bottle · a banana · headphones · a towel', qs: ['How old might the owner be?', 'What must they do after work?', 'Can they be a lazy person? Why not?'], ex: 'They must go to the gym. They can’t be lazy!' },
  { img: 'bolsa2', n: 'BAG TWO', coisas: 'a pacifier · a toy car · crackers · keys · tissues', qs: ['Who must this person be?', 'How old might the child be?', 'Can they be free this evening?'], ex: 'They must be a mom or a dad. The child might be two.' },
  { img: 'bolsa3', n: 'BAG THREE', coisas: 'reading glasses · a thermos · paper lunch bags · a notebook and a pencil', qs: ['How old might the owner be?', 'What might their job be?', 'Can they be in a hurry today?'], ex: 'They might be a teacher. They can’t be in a hurry: a thermos!' }
];

var SEMANA = [
  { k: 'HEAVIEST DAY', q: 'Which day of your week is the heaviest?', fup: 'Now guess about a colleague on that day: He must be… / She might be…', st: ['Monday, because …'], ex: 'Monday. Three meetings before lunch.' },
  { k: 'COFFEE', q: 'How much coffee do you drink?', fup: 'A person who drinks five a day: what might be wrong?', st: ['I drink …'], ex: 'Two cups. Maybe three.' },
  { k: 'REST', q: 'What really rests you?', fup: 'Your best friend hasn’t called for two weeks. What might be happening?', st: ['Walking, reading …'], ex: 'Long walks with my dog.' },
  { k: 'BEDTIME', q: 'What time do you go to bed?', fup: 'Your neighbor’s light is on at 3 AM every night. What must be true?', st: ['At about …'], ex: 'At about eleven. Midnight on Fridays.' }
];

var S = { i: 0, faixa: 1, fala: {}, resp: {}, armas: {},
  abre: { sel: -1, foi: {}, formas: {} }, ouv: {}, deve: { n: 0, esc: '' }, pt: { n: 0, v: null, ok: 0 }, bate: { n: 0, esc: '' }, ficha: { sel: 0 }, bolsa: { sel: 0 }, semana: { sel: -1, foi: {} } };

var R = {};
R.capa = function () {
  return '<div class="capa"><div class="lado-a"><span class="kick">MAIN SERIES · A2 · THE CERTAINTY DIAL</span><h1>Mind <b>Matters</b></h1>'
    + '<p class="sub">Patient 07 is in the waiting room. Set the needle before you speak: <b>must be</b>, <b>might be</b>, or <b>can’t be</b>.</p>'
    + '<div class="chipsx"><span class="pilula">must be · 100%</span><span class="pilula">might be · 50%</span><span class="pilula">can’t be · 0%</span><span class="pilula">Live Class · W·O·L·F</span></div>'
    + '<button type="button" class="btn cheio" data-a="ir" data-n="1">Open the chart</button>' + faixaLive() + '</div>'
    + '<div class="capa-d"><div class="prancheta"><span class="clipe"></span><small>PATIENT 07 · CHART</small>' + mostrador(100, 'grande') + '<p class="linha-f">He must be exhausted.</p></div></div></div>';
};

R.abre = function (c) {
  return cartasPessoais(c, ABRE, S.abre, 'abre') + '<div class="partes so-prof"><h5>WHAT YOU HEAR · DON’T CORRECT</h5>' + FORMAS.map(function (f) { return '<button type="button" class="chip frase' + (f.erro ? ' erro-ouvido' : '') + (S.abre.formas[f.k] ? ' on' : '') + '" data-a="ab-f" data-v="' + f.k + '">' + f.t + '</button>'; }).join('') + '</div>';
};

R.ouve = function (c) {
  var n = 0; NOTAS.forEach(function (x, i) { if (S.ouv[i] === x.k) n++; });
  return cab(c) + '<div class="mesa-c"><div class="vd fala07"><small>PATIENT 07 · YOUR TEACHER READS IT</small>' + FALA07.map(function (f) { return '<p>“' + f + '”</p>'; }).join('') + '</div>'
    + '<div class="lado-l"><div class="notas">' + NOTAS.map(function (x, i) {
      var esc = S.ouv[i], ok = esc === x.k;
      return '<div class="nota vd' + (ok ? ' feito' : '') + '"><b>' + x.n + '</b><div class="tres-b">' + [[1, 'HE SAID IT'], [0, 'HE DIDN’T']].map(function (o) { return '<button type="button" class="pilula' + (esc === o[0] ? (ok ? ' certo' : ' errado') : '') + '" data-a="ov" data-n="' + i + '" data-v="' + o[0] + '">' + o[1] + '</button>'; }).join('') + '</div>' + (ok ? '<p class="aprova">' + x.w + '</p>' : esc !== undefined ? '<p class="recusa">Find it in his words. Is it there?</p>' : '') + '</div>';
    }).join('') + '</div>' + (n === 6 ? '<p class="aprova">Three facts on the chart, and every one came out of his mouth.</p>' : '') + '</div></div>';
};

R.deve = function (c) {
  var e = S.deve, n = e.n, fim = n >= DEVE.length;
  if (fim) return cab(c) + trilha(DEVE, n) + '<div class="foco"><div class="pergunta vd"><small>SIX OUT OF SIX</small><h2>HAVE TO is somebody forcing. MUST BE is you, reading the proof.</h2></div></div>';
  var x = DEVE[n], ok = e.esc === 'ok';
  return cab(c) + trilha(DEVE, n) + '<div class="foco"><div class="sit vd"><small>THE SITUATION</small><b>' + x.sit + '</b></div>'
    + (ok ? '<div class="balao vd"><small>THE CHART</small><p>' + x.ok + '</p></div><p class="aprova" style="text-align:center">' + x.w + '</p><div style="text-align:center"><button type="button" class="btn" data-a="dv-prox">Next</button></div>'
      : '<div class="versoes dois-v">' + ordem([[x.ok, 'ok'], [x.mau, 'mau']], n + 1).map(function (o) { return '<button type="button" class="versao' + (e.esc === o[1] ? ' errado' : '') + '" data-a="dv" data-v="' + o[1] + '">' + o[0] + '</button>'; }).join('') + '</div>' + (e.esc ? '<p class="recusa" style="text-align:center">Is somebody forcing him, or are you reading the proof?</p>' : '')) + '</div>';
};

R.ponteiro = function (c) {
  var e = S.pt, n = e.n, fim = n >= PROVAS.length, lado;
  if (fim) return cab(c) + trilha(PROVAS, n) + '<div class="foco"><div class="pergunta vd"><small>EIGHT NEEDLES</small><h2>Every sentence matched its dial. That is a good chart.</h2></div></div>';
  var x = PROVAS[n], certo = e.v === x.v;
  lado = '<div class="sit vd"><small>THE PROOF · ' + (n + 1) + ' OF 8</small><b>' + x.p + '</b></div>'
    + (certo ? (e.ok ? '<div class="balao vd"><small>THE CHART</small><p>' + x.diz + '</p></div><div><button type="button" class="btn" data-a="pt-prox">Next proof</button></div>'
      : '<p class="ini">Now say the sentence that matches the needle.</p><div><button type="button" class="btn so-prof" data-a="pt-ok">Said it · show the chart line</button></div>')
      : '<h5 class="rot-ouve">1 · SET THE NEEDLE FIRST</h5><div class="tres-b">' + ZONAS.map(function (z) { return '<button type="button" class="pilula grande-p' + (e.v === z[0] ? ' errado' : '') + '" data-a="pt" data-v="' + z[0] + '">' + z[1] + '</button>'; }).join('') + '</div>' + (e.v !== null ? '<p class="recusa">Look at the proof again. Does it point one way, two ways, or nowhere?</p>' : ''));
  return cab(c) + trilha(PROVAS, n) + '<div class="mesa-m"><div class="vd quadro-m">' + mostrador(e.v) + '</div><div class="lado-l">' + lado + '</div></div>';
};

R.bate = function (c) {
  var e = S.bate, n = e.n, fim = n >= BATE.length;
  if (fim) return cab(c) + trilha(BATE, n) + '<div class="foco"><div class="pergunta vd"><small>FIVE DIALS</small><h2>Five dials, five matching sentences.</h2></div></div>';
  var x = BATE[n], ok = e.esc === 'ok';
  return cab(c) + trilha(BATE, n) + '<div class="mesa-m"><div class="vd quadro-m">' + mostrador(x.v) + '</div><div class="lado-l"><div class="sit vd"><small>THE SITUATION</small><b>' + x.sit + '</b></div>'
    + (ok ? '<div class="balao vd"><small>MATCHES THE DIAL</small><p>' + x.op[0][0] + '</p></div><div><button type="button" class="btn" data-a="bt-prox">Next</button></div>'
      : '<h5 class="so-prof rot-ouve">TAP WHAT YOU HEARD</h5><div class="versoes">' + ordem(x.op, n + 2).map(function (o) { return '<button type="button" class="versao' + (e.esc === o[1] ? ' errado' : '') + '" data-a="bt" data-v="' + o[1] + '">' + o[0] + '</button>'; }).join('') + '</div>' + (e.esc ? '<p class="recusa">' + NOTA[e.esc] + '</p>' : '')) + '</div></div>';
};

R.regra = function (c) {
  return cab(c) + '<div class="fitas">' + FITAS.map(function (f) { return '<div class="fita vd"><small>' + f[0] + '</small><b>' + f[1] + '</b></div>'; }).join('') + '</div>' + armas(ARMAS, 'THE TRAPS · SAY IT RIGHT, THEN TAP');
};

R.ficha = function (c) {
  var e = S.ficha;
  return cab(c) + '<div class="mesa-c"><div class="prancheta ficha"><span class="clipe"></span><small>PATIENT 07 · THE CHART</small>' + FICHA.map(function (x, i) {
    var aberto = (S.resp || {})['fc' + i];
    return '<button type="button" class="linha-c' + (e.sel === i ? ' on' : '') + (aberto ? ' feito' : '') + '" data-a="fc" data-n="' + i + '"><span>' + (i + 1) + '</span><em>' + x.quem + '</em></button>';
  }).join('') + '</div><div class="lado-l"><div class="sit vd"><small>THE PROOF</small><b>' + FICHA[e.sel].quem + '</b></div><div class="pecas">' + FICHA[e.sel].pista.split(' · ').map(function (p) { return '<span>' + p + '</span>'; }).join('') + '</div>'
    + '<p class="dica-aluno">Say the whole sentence from the pieces.</p>' + mostra('fc' + e.sel, FICHA[e.sel].ok) + (e.sel < FICHA.length - 1 ? '<div><button type="button" class="btn" data-a="fc" data-n="' + (e.sel + 1) + '">Next line</button></div>' : '') + '</div></div>';
};

R.bolsas = function (c) {
  var e = S.bolsa, x = BOLSAS[e.sel];
  return cab(c) + '<div class="abas-b">' + BOLSAS.map(function (b, i) { return '<button type="button" class="chip' + (e.sel === i ? ' on' : '') + '" data-a="bl" data-n="' + i + '">' + b.n + '</button>'; }).join('') + '</div>'
    + '<div class="mesa-c"><div class="aberta vd" style="background-image:url(' + img(x.img) + ')"><span>' + x.n + '</span></div><div class="lado-l"><div class="sit vd"><small>INSIDE THE BAG</small><b>' + x.coisas + '</b></div>'
    + x.qs.map(function (q, i) { return '<div class="q-bolsa vd"><span>' + (i + 1) + '</span>' + q + '</div>'; }).join('')
    + '<p class="dica-aluno">Your teacher asks: are you sure? Set the needle in your head: 100, 50 or 0.</p>' + mostra('bl' + e.sel, x.ex, 1) + '</div></div>';
};

R.semana = function (c) { return cartasPessoais(c, SEMANA, S.semana, 'semana', ['He must be …', 'She might be …', 'It can’t be …']); };

R.fim = function (c) {
  var f = S.abre.formas, lembra = FORMAS.filter(function (x) { return f[x.k]; }).map(function (x) { return x.t; });
  return cab(c) + '<div class="fim">' + escritaFinal('fim', (S.txt || {}).fim || '', (S.salvo || {}).fim, 'My neighbor must be …\nHe might be …\nHe can’t be …', 'Your chart',
    [' must be ', ' might be ', ' can’t be ', 'because '], ['THE DOCTOR’S CONCLUSION: It can’t be the coffee. It might be his job. He must be anxious, and very tired.', lembra.length ? 'In scene I your teacher heard: ' + lembra.join(', ') + '. Now a chart of your own, about somebody you know.' : 'A chart of your own: three lines about somebody you know, with the proof.'])
    + '<div class="lado-fim">' + mostrador(50, 'mini') + '<div class="grande vd"><span><u>must be</u>: the only answer left</span><span><u>might be</u>: one of two or three</span><span><u>can’t be</u>: the proof killed it</span><span><u>have to</u>: only for rules</span></div>'
    + mostra('fim', 'My neighbor must be a musician: I hear a piano every night.<br>He might be a teacher too.<br>He can’t be rich: he takes the bus.', 1)
    + '<p class="hw"><a class="pilula" href="HW/" target="_blank" rel="noopener">Homework for the student →</a></p></div></div>';
};

TOQUES['ab-f'] = function (b, n, v) { S.abre.formas[v] = !S.abre.formas[v]; };
TOQUES.ov = function (b, n, v) { S.ouv[n] = +v; };
TOQUES.dv = function (b, n, v) { S.deve.esc = v; };
TOQUES['dv-prox'] = function () { S.deve = { n: S.deve.n + 1, esc: '' }; };
TOQUES.pt = function (b, n, v) { S.pt.v = +v; };
TOQUES['pt-ok'] = function () { S.pt.ok = 1; };
TOQUES['pt-prox'] = function () { S.pt = { n: S.pt.n + 1, v: null, ok: 0 }; };
TOQUES.bt = function (b, n, v) { S.bate.esc = v; };
TOQUES['bt-prox'] = function () { S.bate = { n: S.bate.n + 1, esc: '' }; };
TOQUES.fc = function (b, n) { S.ficha.sel = n; };
TOQUES.bl = function (b, n) { S.bolsa.sel = n; };
