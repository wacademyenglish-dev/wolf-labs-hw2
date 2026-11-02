/* ============================================================
   I DECIDED TO STAY · POSTCARDS FROM A GAP YEAR · LIVE CLASS  06/10/2026
   Main series A2 · verb patterns: want / need / plan / hope / decide + TO ·
   enjoy / avoid / finish / mind / keep + -ING · nunca to + -ing.
   O MUNDO (da aula velha): um ano sabático em Galway, Kyoto e Queenstown,
   contado em cartões-postais para a avó Ruth; a última noite no hostel do
   lago, o voo sai às 6 AM… e o aluno decide ficar. Sem vídeo, sem áudio.
   A CARA: os CARTÕES-POSTAIS escuros com carimbo do correio (CSS) e o
   RELÓGIO da última noite (SVG), que anda uma hora a cada resposta certa,
   de 10 PM a 6 AM. Fila: FILA-LIVE-386.md · 053.
   ============================================================ */
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'abre', est: 'o', min: 7, img: 'irlanda', rot: 'I · You and the World', t: 'Before the trip: you, travel and home.', p: 'Pick a card. Nobody is corrected here. Your teacher taps what you used.' },
  { k: 'post', est: 'o', min: 7, img: 'japao', rot: 'II · Postcards Home', t: 'One year, three countries. Six postcards to Grandma Ruth.', p: 'Tap a postcard. Read the situation, then tell Grandma what is happening. A correct answer gets the postmark.' },
  { k: 'regra', est: 'f', min: 6, img: 'sala', rot: 'III · The Rule', t: 'The first verb chooses. To, or -ing?', p: 'Say each wrong line the right way, out loud. Then tap it.' },
  { k: 'noite', est: 'o', min: 7, img: 'mala', rot: 'IV · The Last Night', t: 'The flight home is at 6 AM. Eight friends, eight questions.', p: 'Your teacher is the friend. Answer at once. Every right answer moves the clock one hour.' },
  { k: 'mae', est: 'o', min: 7, img: 'nz', rot: 'V · Mom Calls', t: 'The airline told Mom: you are not on the plane.', p: 'Your teacher is Mom. Explain your decision with to and -ing.' },
  { k: 'quiz', est: 'f', min: 6, extra: 1, img: 'irlanda', rot: 'VI · Quick Check', t: 'Six quick lines from the gap year.', p: 'Say the whole sentence. Then tap the word.' },
  { k: 'roda', est: 'o', min: 7, extra: 1, img: 'sala', rot: 'VII · Your Choices', t: 'Your life: what you enjoy, what you want, what you decided.', p: 'Spin. Answer with the verb in the question. Your teacher answers too.' },
  { k: 'fim', est: 'w', min: 6, img: 'capa', rot: 'VIII · One Year Later', t: 'A new postcard to Grandma Ruth, from the same lake.', p: 'Is there a place where you want to stay? Write it with one to and one -ing. It goes to your My notes.' }
];

var ABRE = [
  { k: 'THE BEST TRIP', q: 'What is the best trip of your life? Where did you go?', fup: 'Who did you go with?', st: ['My best trip was …', 'I went to …'], ex: 'A trip to the beach with my friends. It was amazing.' },
  { k: 'POSTCARDS', q: 'When you travel, do you send postcards, messages or photos?', fup: 'Who gets them?', st: ['I usually send …'], ex: 'Only photos. A lot of photos!' },
  { k: 'FAR AWAY', q: 'Do you have family or friends abroad?', fup: 'Do you want to visit them?', st: ['Yes, my … lives in …', 'No, everybody is here.'], ex: 'Yes, my cousin lives in Canada.' },
  { k: 'A GAP YEAR', q: 'A gap year: one year to travel or work in other countries. Is it a good idea for you?', fup: 'Where would you go?', st: ['Yes! But …', 'No, because …'], ex: 'Yes! But it’s expensive.' },
  { k: 'HOME', q: 'What is home for you: a city, a house, or people?', fup: 'Can home change?', st: ['Home is …'], ex: 'Home is my family. And my dog.' }
];
var FORMAS = [{ k: 'to', t: 'WANT / NEED + TO' }, { k: 'ing', t: 'ENJOY / MIND + -ING' }, { k: 'enjoyto', t: 'ENJOY TO …', erro: 1 }, { k: 'wantgo', t: 'I WANT GO …', erro: 1 }];

var NOTA = {
  to: 'want, need, plan, hope, decide + TO + verb.', to2: 'Don’t forget the TO: want to find.', ing: 'enjoy, avoid, finish, mind, keep + -ING. No to.',
  ing2: 'This verb needs the -ing: enjoy working.', base: 'After TO, the simple verb. No -ing.', for: 'No for: decided TO stay.'
};

var POST = [
  { k: 'GALWAY · WEEK 1', onde: 'GALWAY', img: 'irlanda', cor: '#7fc49a', pista: 'You just arrived in Ireland. You have very little money. The plan: a job, fast.',
    ops: [['I want to find a job here.', 'ok'], ['I want finding a job here.', 'to'], ['I want find a job here.', 'to2']] },
  { k: 'GALWAY · WEEK 6', onde: 'GALWAY', img: 'irlanda', cor: '#7fc49a', pista: 'You work in a small coffee shop by the sea. You love the job and the people.',
    ops: [['I enjoy working here.', 'ok'], ['I enjoy to work here.', 'ing'], ['I enjoy work here.', 'ing2']] },
  { k: 'KYOTO · WEEK 12', onde: 'KYOTO', img: 'japao', cor: '#e0798a', pista: 'The trains in Kyoto are full at 8 AM. So you walk, or you go out later.',
    ops: [['I avoid taking the train at 8 AM.', 'ok'], ['I avoid to take the train at 8 AM.', 'ing'], ['I avoid take the train at 8 AM.', 'ing2']] },
  { k: 'KYOTO · WEEK 16', onde: 'KYOTO', img: 'japao', cor: '#e0798a', pista: 'You started Japanese classes. The goal: speak a little by June.',
    ops: [['I hope to speak a little Japanese by June.', 'ok'], ['I hope speaking a little Japanese by June.', 'to'], ['I hope to speaking a little Japanese by June.', 'base']] },
  { k: 'QUEENSTOWN · WEEK 30', onde: 'QUEENSTOWN', img: 'nz', cor: '#7fb6e8', pista: 'Now you work at a hostel on a lake. You clean the rooms at 6 AM. A problem? No!',
    ops: [['I don’t mind cleaning the rooms.', 'ok'], ['I don’t mind to clean the rooms.', 'ing'], ['I don’t mind clean the rooms.', 'ing2']] },
  { k: 'QUEENSTOWN · WEEK 50', onde: 'QUEENSTOWN', img: 'nz', cor: '#7fb6e8', pista: 'Your flight home is next week. But every day you say the same thing: “One more week.”',
    ops: [['I keep saying “one more week.”', 'ok'], ['I keep to say “one more week.”', 'ing'], ['I keep say “one more week.”', 'ing2']] }
];

var FITAS = [['+ TO', 'want · need · plan · hope · decide'], ['+ -ING', 'enjoy · avoid · finish · mind · keep'], ['NEVER', 'to + -ing: decided to stay, not to staying']];
var ARMAS = [
  ['ENJOY', 'I enjoy to travel.', 'I enjoy traveling.', 'enjoy, avoid, finish, mind, keep + -ing. No to.'],
  ['WANT', 'I want going home.', 'I want to go home.', 'want, need, plan, hope, decide + to + verb.'],
  ['NO MIX', 'I decided to staying.', 'I decided to stay.', 'After to, the simple verb.'],
  ['AVOID', 'I avoid to eat late.', 'I avoid eating late.', 'avoid + -ing.'],
  ['FINISH', 'We finished to pack at ten.', 'We finished packing at ten.', 'finish + -ing.'],
  ['MIND', 'Do you mind to wait?', 'Do you mind waiting?', 'mind + -ing.']
];

var NOITE = [
  { k: 'MAYA', diz: 'Are you excited? Do you want to go home?', ini: 'Honestly, I don’t…', ops: [['Honestly, I don’t want to go home.', 'ok'], ['Honestly, I don’t want going home.', 'to'], ['Honestly, I don’t want go home.', 'to2']] },
  { k: 'TOMO', diz: 'What do you enjoy doing here?', ini: 'I enjoy…', ops: [['I enjoy swimming in the lake.', 'ok'], ['I enjoy to swim in the lake.', 'ing'], ['I enjoy swim in the lake.', 'ing2']] },
  { k: 'INES', diz: 'Did you finish packing?', ini: 'No! I didn’t…', ops: [['No! I didn’t finish packing.', 'ok'], ['No! I didn’t finish to pack.', 'ing'], ['No! I didn’t finish pack.', 'ing2']] },
  { k: 'FINN', diz: 'I need a new manager for the hostel. Do you want to work here?', ini: 'Yes! I want…', ops: [['Yes! I want to work here.', 'ok'], ['Yes! I want working here.', 'to'], ['Yes! I want to working here.', 'base']] },
  { k: 'PRIYA', diz: 'And your family? What do you need to do?', ini: 'I need…', ops: [['I need to call my mom.', 'ok'], ['I need calling my mom.', 'to'], ['I need call my mom.', 'to2']] },
  { k: 'SAM', diz: 'Why are you looking at your phone all the time?', ini: 'I keep…', ops: [['I keep checking my flight.', 'ok'], ['I keep to check my flight.', 'ing'], ['I keep check my flight.', 'ing2']] },
  { k: 'HANA', diz: 'A new guest has your bed tonight. Do you mind sleeping on the sofa?', ini: 'No, I don’t…', ops: [['No, I don’t mind sleeping on the sofa.', 'ok'], ['No, I don’t mind to sleep on the sofa.', 'ing'], ['No, I don’t mind sleep on the sofa.', 'ing2']] },
  { k: 'LEO', diz: 'It’s 5 AM. The taxi is outside. So? What did you decide?', ini: 'I decided…', ops: [['I decided to stay!', 'ok'], ['I decided staying!', 'to'], ['I decided for staying!', 'for']] }
];

var MAE = [
  { ela: 'Honey? The airline says you’re not on the plane! Where are you?', pede: 'I’m still in Queenstown. I decided…', resp: 'You decided to stay?! For how long?' },
  { ela: 'But what do you want to do there?', pede: 'I want to… / I plan to…', resp: 'The manager of a hostel! Wow.' },
  { ela: 'Are you OK? Do you really enjoy living so far away?', pede: 'Yes, I enjoy… / I don’t mind…', resp: 'OK… you sound happy. You really do.' },
  { ela: 'Promise me one thing: don’t avoid calling me!', pede: 'I promise. I plan to… / I hope to…', resp: 'Every Sunday. I love you. And send Grandma a postcard!' }
];

var QUIZ = [
  { a: 'I enjoy ', b: ' in the lake.', op: ['swimming', 'to swim', 'swim'], nao: 'enjoy + -ing.' },
  { a: 'She decided ', b: ' in Japan.', op: ['to stay', 'staying', 'stay'], nao: 'decide + to + verb.' },
  { a: 'Did you finish ', b: ' your bag?', op: ['packing', 'to pack', 'pack'], nao: 'finish + -ing.' },
  { a: 'We plan ', b: ' New Zealand next year.', op: ['to visit', 'visiting', 'to visiting'], nao: 'plan + to + the simple verb.' },
  { a: 'He keeps ', b: ' “one more week.”', op: ['saying', 'to say', 'say'], nao: 'keep + -ing.' },
  { a: 'I need ', b: ' my ticket today.', op: ['to change', 'changing', 'change'], nao: 'need + to + verb.' }
];

var FATIAS = [
  { k: 'WEEKENDS', q: 'What do you enjoy doing on weekends?', h: 'I enjoy cooking and watching series.' },
  { k: 'THIS YEAR', q: 'What do you want to learn this year?', h: 'I want to learn to swim.' },
  { k: 'MONDAYS', q: 'What do you avoid doing on Mondays?', h: 'I avoid going to the supermarket.' },
  { k: 'DECISION', q: 'What was a big decision in your life? What did you decide to do?', h: 'I decided to change jobs.' },
  { k: 'ONE DAY', q: 'Where do you hope to travel one day?', h: 'I hope to visit Japan.' },
  { k: 'AT HOME', q: 'What housework don’t you mind doing?', h: 'I don’t mind washing the dishes.' },
  { k: 'A HABIT', q: 'What do you keep doing, but you want to stop?', h: 'I keep checking my phone in bed.' },
  { k: 'PLANS', q: 'What do you plan to do next weekend?', h: 'I plan to visit my parents.' }
];
var CORES_R = ['#1f3024', '#33241a', '#1c2a3a', '#3a1e22', '#2c2616', '#16282c', '#2e1c30', '#22223a'];
var GIROS = ordem(FATIAS.map(function (_, i) { return i; }), 5);

var S = { i: 0, faixa: 1, fala: {}, resp: {}, armas: {},
  abre: { sel: -1, foi: {}, formas: {} }, post: { sel: -1, esc: {} }, noite: { n: 0, esc: '' }, mae: { n: 0, viu: {} }, quiz: { esc: {} }, roda: { g: 0, anim: 0 } };

function carimbo(onde, cor, dia) {
  return '<div class="carimbo" style="--cor:' + cor + '"><small>' + (dia || 'AIR MAIL') + '</small><b>' + onde + '</b></div>';
}
function relogio(h) {
  /* h = horas passadas desde as 10 PM (0..8) */
  var hora = (22 + h) % 12, ang = hora * 30, pts = '';
  for (var i = 0; i < 12; i++) { var a = i * 30 * Math.PI / 180; pts += '<line x1="' + (100 + 78 * Math.sin(a)).toFixed(1) + '" y1="' + (100 - 78 * Math.cos(a)).toFixed(1) + '" x2="' + (100 + 88 * Math.sin(a)).toFixed(1) + '" y2="' + (100 - 88 * Math.cos(a)).toFixed(1) + '" stroke="' + (i % 3 ? '#3a4458' : '#8a93a8') + '" stroke-width="' + (i % 3 ? 2 : 4) + '"/>'; }
  var arco = '', a0 = 300, a1 = 300 + h * 30;
  if (h > 0) { var r = 66, p0 = [100 + r * Math.sin(a0 * Math.PI / 180), 100 - r * Math.cos(a0 * Math.PI / 180)], p1 = [100 + r * Math.sin(a1 * Math.PI / 180), 100 - r * Math.cos(a1 * Math.PI / 180)];
    arco = '<path d="M' + p0[0].toFixed(1) + ' ' + p0[1].toFixed(1) + ' A' + r + ' ' + r + ' 0 ' + (h * 30 > 180 ? 1 : 0) + ' 1 ' + p1[0].toFixed(1) + ' ' + p1[1].toFixed(1) + '" fill="none" stroke="#e8a64a" stroke-width="8" stroke-linecap="round" opacity=".55"/>'; }
  var rot = ((22 + h) > 24 ? (22 + h - 24) : (22 + h)), txt = (rot % 12 || 12) + (rot >= 12 && rot < 24 ? ' PM' : ' AM');
  return '<div class="relogio-box"><svg class="relogio" viewBox="0 0 200 200" role="img" aria-label="' + txt + '"><circle cx="100" cy="100" r="96" fill="#0b0f18" stroke="#26304a" stroke-width="3"/>' + pts + arco
    + '<line x1="100" y1="100" x2="' + (100 + 50 * Math.sin(ang * Math.PI / 180)).toFixed(1) + '" y2="' + (100 - 50 * Math.cos(ang * Math.PI / 180)).toFixed(1) + '" stroke="#e8a64a" stroke-width="7" stroke-linecap="round"/>'
    + '<line x1="100" y1="100" x2="100" y2="24" stroke="#c6ccdc" stroke-width="3" stroke-linecap="round"/><circle cx="100" cy="100" r="7" fill="#e8a64a"/>'
    + '<circle cx="' + (100 + 88 * Math.sin(Math.PI)).toFixed(1) + '" cy="' + (100 - 88 * Math.cos(Math.PI)).toFixed(1) + '" r="6" fill="#ec6a52"/></svg><b class="hora-t">' + txt + '</b><small>THE FLIGHT: 6 AM</small></div>';
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
  return '<div class="roda-box"><span class="ponteiro"></span><svg class="roda' + (anim ? ' gira' : '') + '" viewBox="0 0 200 200" style="--ate:' + fim + 'deg;transform:rotate(' + fim + 'deg)" role="img" aria-label="To or -ing wheel">' + fat + '<circle cx="100" cy="100" r="16" fill="#0a0d14" stroke="#e8a64a" stroke-width="2"/></svg></div>';
}

var R = {};
R.capa = function () {
  return '<div class="capa"><div class="lado-a"><span class="kick">MAIN SERIES · A2 · POSTCARDS FROM A GAP YEAR</span><h1>I Decided <b>to Stay</b></h1>'
    + '<p class="sub">Three countries, six postcards, one flight home at 6 AM. <b>I want to go</b>… <b>I enjoy being</b> here… <b>I decided to stay</b>.</p>'
    + '<div class="chipsx"><span class="pilula">want · need · decide + to</span><span class="pilula">enjoy · avoid · mind + -ing</span><span class="pilula">Live Class · W·O·L·F</span></div>'
    + '<button type="button" class="btn cheio" data-a="ir" data-n="1">Open the postcards</button>' + faixaLive() + '</div>'
    + '<div class="capa-d"><div class="cartao capa-c" style="--cor:#7fb6e8"><div class="foto-c" style="background-image:url(' + img('nz') + ')"></div><div class="verso-c"><p class="mao">Dear Grandma Ruth,<br>I keep saying “one more week”…</p>' + carimbo('QUEENSTOWN', '#7fb6e8', 'WEEK 50') + '</div></div></div></div>';
};

R.abre = function (c) {
  return cartasPessoais(c, ABRE, S.abre, 'abre') + '<div class="partes so-prof"><h5>WHAT YOU HEAR · DON’T CORRECT</h5>' + FORMAS.map(function (f) { return '<button type="button" class="chip frase' + (f.erro ? ' erro-ouvido' : '') + (S.abre.formas[f.k] ? ' on' : '') + '" data-a="ab-f" data-v="' + f.k + '">' + f.t + '</button>'; }).join('') + '</div>';
};

R.post = function (c) {
  var e = S.post, x = e.sel >= 0 ? POST[e.sel] : null, n = 0, lado;
  POST.forEach(function (_, i) { if (e.esc[i] === 'ok') n++; });
  var mural = '<div class="mural">' + POST.map(function (p, i) {
    var ok = e.esc[i] === 'ok';
    return '<button type="button" class="post-b' + (e.sel === i ? ' on' : '') + (ok ? ' feito' : '') + '" data-a="po" data-n="' + i + '" style="--cor:' + p.cor + '"><span class="foto-m" style="background-image:url(' + img(p.img) + ')"></span><small>' + p.k + '</small>' + (ok ? carimbo(p.onde, p.cor) : '') + '</button>';
  }).join('') + '</div>';
  if (!x) lado = '<div class="pergunta vd"><small>' + n + ' OF 6 POSTMARKED</small><h2>' + (n === 6 ? 'Six postcards. Why want TO find, but enjoy workING? The rule is next.' : 'Tap a postcard. Then tell Grandma Ruth what is happening.') + '</h2></div>';
  else {
    var esc = e.esc[e.sel], ok = esc === 'ok';
    lado = '<div class="cartao" style="--cor:' + x.cor + '"><div class="foto-c" style="background-image:url(' + img(x.img) + ')"></div><div class="verso-c"><small class="onde">' + x.k + '</small><p class="mao">' + (ok ? 'Dear Grandma,<br>' + x.ops[0][0] : x.pista) + '</p>' + (ok ? carimbo(x.onde, x.cor) : '') + '</div></div>'
      + (ok ? '' : '<h5 class="so-prof rot-ouve">TAP THE VERSION YOU HEARD</h5><div class="versoes">' + ordem(x.ops, e.sel + 1).map(function (o) { return '<button type="button" class="versao' + (esc === o[1] ? ' errado' : '') + '" data-a="po-v" data-v="' + o[1] + '">' + o[0] + '</button>'; }).join('') + '</div>' + (esc ? '<p class="recusa">' + NOTA[esc] + '</p>' : ''));
  }
  return cab(c) + '<div class="mesa-c mesa-p">' + mural + '<div class="lado-l">' + lado + '</div></div>';
};

R.regra = function (c) {
  return cab(c) + '<div class="fitas">' + FITAS.map(function (f) { return '<div class="fita vd"><small>' + f[0] + '</small><b>' + f[1] + '</b></div>'; }).join('') + '</div>' + armas(ARMAS, 'THE TRAPS · SAY IT RIGHT, THEN TAP');
};

R.noite = function (c) {
  var e = S.noite, n = e.n, fim = n >= NOITE.length, lado;
  if (fim) lado = '<div class="pergunta vd"><small>6 AM</small><h2>The plane leaves without you. You’re on the sofa, the lake is still dark… and you decided to stay.</h2></div>';
  else {
    var x = NOITE[n], ok = e.esc === 'ok';
    lado = '<div class="pede vd"><small>' + x.k + '</small><b>“' + x.diz + '”</b></div>' + (ok ? '<div class="balao vd"><small>YOU</small><p>' + x.ops[0][0] + '</p></div><div><button type="button" class="btn" data-a="no-prox">Next friend · one hour later</button></div>'
      : '<p class="ini">' + x.ini + '</p><h5 class="so-prof rot-ouve">TAP WHAT YOU HEARD</h5><div class="versoes">' + ordem(x.ops, n + 2).map(function (o) { return '<button type="button" class="versao' + (e.esc === o[1] ? ' errado' : '') + '" data-a="no" data-v="' + o[1] + '">' + o[0] + '</button>'; }).join('') + '</div>' + (e.esc ? '<p class="recusa">' + NOTA[e.esc] + '</p>' : ''));
  }
  return cab(c) + trilha(NOITE, n) + '<div class="mesa-n"><div class="vd noite-box">' + relogio(fim ? 8 : n + (e.esc === 'ok' ? 1 : 0)) + '</div><div class="lado-l">' + lado + '</div></div>';
};

R.mae = function (c) {
  var e = S.mae, n = e.n, fim = n >= MAE.length;
  var foto = '<div class="aberta vd" style="background-image:url(' + img('nz') + ')"><span class="rec">● VIDEO CALL</span><span>MOM · 7 AM</span></div>';
  if (fim) return cab(c) + '<div class="mesa-c">' + foto + '<div class="lado-l">' + follow('THE BIG QUESTION', 'Have you ever made a big decision like this? What did you decide to do?', ['I decided to …', 'I enjoy … now.'], [], 'big', mostra('big', 'Yes. I decided to change jobs. I enjoy working with people now.', 1)) + '</div></div>';
  var x = MAE[n], viu = e.viu[n];
  return cab(c) + '<div class="mesa-c">' + foto + '<div class="lado-l">' + trilha(MAE, n) + '<div class="balao vd"><small>MOM</small><p>“' + x.ela + '”</p></div><div class="pede vd"><small>YOUR TURN</small><b>' + x.pede + '</b></div>'
    + (viu ? '<div class="balao vd resp"><small>MOM</small><p>“' + x.resp + '”</p></div><div><button type="button" class="btn" data-a="ma-prox">Next</button></div>' : '<div><button type="button" class="btn so-prof" data-a="ma-viu">Answered · Mom replies</button></div>') + '</div></div>';
};

R.quiz = function (c) {
  var e = S.quiz, todos = QUIZ.every(function (_, i) { return e.esc[i] === 0; });
  return cab(c) + '<div class="quiz">' + QUIZ.map(function (x, i) {
    var esc = e.esc[i], ok = esc === 0;
    return '<div class="q-linha vd' + (ok ? ' feito' : '') + '"><p>' + x.a + '<span class="gap">' + (ok ? x.op[0] : '___') + '</span>' + x.b + '</p><div class="tres-b">' + ordem(x.op.map(function (o, k) { return [o, k]; }), i + 1).map(function (o) {
      return '<button type="button" class="pilula' + (esc === o[1] ? (ok ? ' certo' : ' errado') : '') + '" data-a="qz" data-n="' + i + '" data-v="' + o[1] + '"' + (ok ? ' disabled' : '') + '>' + o[0] + '</button>'; }).join('') + '</div>' + (esc > 0 ? '<p class="recusa">' + x.nao + '</p>' : '') + '</div>';
  }).join('') + '</div>' + (todos ? '<p class="aprova" style="text-align:center">Six out of six. Now, your own life.</p>' : '');
};

R.roda = function (c) {
  var e = S.roda, sel = e.g > 0 ? GIROS[(e.g - 1) % 8] : -1, x = sel >= 0 ? FATIAS[sel] : null;
  var lado = x ? '<div class="pergunta vd ja"><small>' + x.k + ' · TO OR -ING?</small><h2>' + x.q + '</h2></div>' + fala('rd' + sel, ['Use the verb in the question.'], []) + mostra('rd' + sel, x.h, 1) + '<p class="dica-aluno">Your teacher answers too. Then ask why!</p>'
    : '<div class="pergunta vd"><small>TO OR -ING</small><h2>Spin the wheel. Answer with the same verb as the question.</h2></div>';
  return cab(c) + '<div class="mesa-c"><div class="lado-l centro">' + roda(sel, e.anim) + '<button type="button" class="btn cheio" data-a="rd">' + (e.g ? 'Spin again' : 'Spin') + '</button></div><div class="lado-l">' + lado + '</div></div>';
};

R.fim = function (c) {
  var f = S.abre.formas, lembra = FORMAS.filter(function (x) { return f[x.k]; }).map(function (x) { return x.t; });
  return cab(c) + '<div class="fim">' + escritaFinal('fim', (S.txt || {}).fim || '', (S.salvo || {}).fim, 'Dear Grandma Ruth,\nI enjoy …\nI want to …', 'A postcard',
    ['Dear Grandma Ruth, ', 'I enjoy ', 'I want to ', 'I decided to ', 'I don’t mind ', 'I hope to '], ['IS THERE A PLACE WHERE YOU WANT TO STAY?', lembra.length ? 'In scene I your teacher heard: ' + lembra.join(', ') + '. Now a postcard: one to, one -ing.' : 'A place you enjoy visiting. Do you want to live there one day? One to, one -ing.'])
    + '<div class="lado-fim">' + carimbo('ONE YEAR LATER', '#e8a64a') + '<div class="grande vd"><span><u>want · need · plan · hope · decide</u> + to</span><span><u>enjoy · avoid · finish · mind · keep</u> + -ing</span><span>never <u>to + -ing</u></span></div>'
    + mostra('fim', 'Dear Grandma Ruth,<br>I enjoy living by the lake. I don’t mind the cold.<br>I want to stay one more year. I hope to see you at Christmas!', 1)
    + '<p class="hw"><a class="pilula" href="HW/" target="_blank" rel="noopener">Homework for the student →</a></p></div></div>';
};

TOQUES['ab-f'] = function (b, n, v) { S.abre.formas[v] = !S.abre.formas[v]; };
TOQUES.po = function (b, n) { S.post.sel = n; };
TOQUES['po-v'] = function (b, n, v) { S.post.esc[S.post.sel] = v; };
TOQUES.no = function (b, n, v) { S.noite.esc = v; };
TOQUES['no-prox'] = function () { S.noite = { n: S.noite.n + 1, esc: '' }; };
TOQUES['ma-viu'] = function () { S.mae.viu[S.mae.n] = 1; };
TOQUES['ma-prox'] = function () { S.mae.n++; };
TOQUES.qz = function (b, n, v) { S.quiz.esc[n] = +v; };
TOQUES.rd = function () { S.roda.g++; S.roda.anim = 1; setTimeout(function () { S.roda.anim = 0; }, 1300); };
