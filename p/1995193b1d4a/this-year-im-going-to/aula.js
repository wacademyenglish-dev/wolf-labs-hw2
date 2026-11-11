/* ============================================================
   THIS YEAR I'M GOING TO… · THE JANUARY TRACKER · LIVE CLASS  06/10/2026
   Main series A2 (aula irmã da buzzer-wolf) · going to (plano de antes,
   prova na frente) × will (decidido agora, promessa, opinião com I think)
   · want to / would like to + verbo · was going to (plano que falhou).
   Erros universais: I will to run · I call you tomorrow (promessa no
   presente) · It snows (com prova) · I think you do it · I went to clean
   it · I'm going run · I'd like speak · I want going to.
   O MUNDO (da aula velha): a família Carter, cinco resoluções, o diário
   de janeiro; a contagem de 11:52 PM; a tia Clara liga do México. Sem
   áudio. Personagens sem rosto (iniciais).
   A CARA: o RASTREADOR DE JANEIRO — cinco linhas de 31 dias; quando a
   fala certa sai, a linha acende até o dia em que a resolução parou (ou
   até o 31). Na contagem, um céu em SVG onde cada fala certa solta um
   fogo e o relógio anda um minuto até a meia-noite.
   Fila: FILA-LIVE-386.md · 074.
   ============================================================ */
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'abre', est: 'o', min: 7, img: 'sala', rot: 'I · You and Your New Year', t: 'Before the tracker: you, your New Year, your habits.', p: 'Pick a card. Answer out loud, however it comes out. Then your teacher answers too.' },
  { k: 'tracker', est: 'f', min: 6, img: 'quadro', rot: 'II · The January Tracker', t: 'Five resolutions. Thirty-one days. Which ones survive?', p: 'Pick a person. Read the chapter out loud. Answer the question. Then say their line.' },
  { k: 'gx', est: 'f', min: 4, img: 'quadro', rot: 'III · Card or Window?', t: 'Two scenes from the Carter house. Two futures.', p: 'Read A and B out loud. Say what is different, then check. Then choose for four new moments.' },
  { k: 'regra', est: 'f', min: 6, img: 'janela', rot: 'IV · When Was It Decided?', t: 'The card is going to. The window is will.', p: 'Read each wrong line out loud and say it the right way. Then tap Fix it.' },
  { k: 'fogos', est: 'o', min: 7, img: 'ceu', rot: 'V · The Countdown', t: 'December 31, 11:52 PM. Five people talk to you.', p: 'Your teacher plays each person. Answer fast. Every good line lights a firework.' },
  { k: 'ano', est: 'o', min: 7, img: 'sala', rot: 'VI · Your Year', t: 'Your real plans, goals and promises.', p: 'Pick five cards. Answer with going to, will, want to, would like to or was going to.' },
  { k: 'clara', est: 'o', min: 7, img: 'piscina', rot: 'VII · Aunt Clara Calls', t: 'February 1. Aunt Clara wants the January story.', p: 'Your teacher is Aunt Clara. Tell her what happened, from memory. Then ask her back.' },
  { k: 'quiz', est: 'f', min: 6, extra: 1, img: 'quadro', rot: 'VIII · Quick Check', t: 'Five quick lines from the Carter house.', p: 'Say the whole sentence out loud. Then tap the word.' },
  { k: 'fim', est: 'w', min: 6, img: 'capa', rot: 'IX · Your Card', t: 'Row six on the tracker is empty. It’s yours.', p: 'Write your card: one plan, one goal, one promise. Will you keep it? It goes to your My notes.' }
];

var ABRE = [
  { k: 'Last year', q: 'Where were you last New Year’s Eve? Who was with you?', fup: 'Did you see fireworks?', st: ['I was at …'], ex: 'I was at home with my family. We watched the fireworks.' },
  { k: 'Resolutions', q: 'Do you make New Year’s resolutions? Do you write them down?', fup: 'Do you read them again?', st: ['Yes, I … / No, I …'], ex: 'Yes, I write them in my notebook. I never read them again!' },
  { k: 'January', q: 'What is January like for you: busy or quiet? Hot or cold?', fup: 'What do you usually do?', st: ['It’s …'], ex: 'It’s hot and quiet. A lot of people are on vacation.' },
  { k: 'A habit', q: 'What is one good habit you have now? How did it start?', fup: 'Is it easy?', st: ['I … every …'], ex: 'I walk every morning. It started with my dog.' }
];
var FORMAS = [{ k: 'going', t: 'I’M GOING TO …' }, { k: 'will', t: 'I’LL … (NOW)' }, { k: 'willto', t: 'I WILL TO …', erro: 1 }, { k: 'pres', t: 'I CALL YOU TOMORROW', erro: 1 }, { k: 'goingsem', t: 'I’M GOING RUN', erro: 1 }];

var CARTER = [
  { k: 'MARCUS', c: 'MC', quem: 'DAD · 44', res: 'I’m going to run every morning.', dias: 5, fim: 'DROPPED', cor: 't1',
    cap: 'January 1: Marcus runs at 6 AM. It’s dark and cold, but he’s happy. January 2, 3, 4, 5: he runs every morning. January 6, 6 AM: Marcus looks out the window. The sky is dark gray, and the clouds are low and heavy. His running shoes are by the door. He goes back to the kitchen and makes coffee.',
    q: 'Does Marcus run on January 6? Why not?', qa: 'No. The clouds are heavy, and he makes coffee.', pede: 'Marcus looks at the sky. What does he say?',
    ops: [['Look at those clouds. It’s going to snow. OK, I’ll run tomorrow.', 'ok'], ['Look at those clouds. It snows. OK, I run tomorrow.', 'prova'], ['It will to snow. OK, I will to run tomorrow.', 'willto']], depois: 'January 31: no more running. Marcus says, “I’ll run in the spring.”' },
  { k: 'LENA', c: 'LC', quem: 'MOM · 42', res: 'I’d like to speak Spanish by June.', dias: 31, fim: 'STILL GOING', cor: 't2',
    cap: 'Lena’s sister, Clara, lives in Mexico. In June, the family is going to visit her. On January 2, Lena downloads a language app. Every night at 9 PM, she studies for fifteen minutes. On January 20, she is very tired. The app says: “Day 20! Don’t stop now.” She opens the app.',
    q: 'Why is the family going to Mexico in June?', qa: 'To visit Lena’s sister, Clara.', pede: 'Clara calls: “Why Spanish, Lena?” What does Lena say?',
    ops: [['I’d like to talk to your kids, so I’m going to study every night.', 'ok'], ['I would like talk to your kids, so I’m going to study.', 'like'], ['I want going to talk to your kids.', 'want']], depois: 'January 31: day 31 on the app. Lena says “Buenas noches!” to the whole family.' },
  { k: 'ZOE', c: 'ZC', quem: 'DAUGHTER · 15', res: 'I’m going to put my phone away at 9 PM.', dias: 24, fim: 'ALMOST', cor: 't3',
    cap: 'Zoe’s phone is always in her hand. So on January 1, she puts a small box in the kitchen: the phone box. At 9 PM, her phone goes in the box. January 14, 9:05 PM: her friend Maya texts, “Are you there?? Big news!!” Zoe looks at the box. She types one fast answer.',
    q: 'Where does Zoe put her phone at 9 PM?', qa: 'In the phone box, in the kitchen.', pede: 'Zoe answers Maya fast, before the box. What does she write?',
    ops: [['It’s 9 PM! I’ll call you tomorrow, I promise.', 'ok'], ['It’s 9 PM! I call you tomorrow, I promise.', 'pres'], ['It’s 9 PM! I will to call you tomorrow.', 'willto']], depois: 'January 31: the phone is in the box most nights. Most nights.' },
  { k: 'LEO', c: 'LE', quem: 'SON · 10', res: 'I’m going to keep my room clean.', dias: 7, fim: 'DROPPED', cor: 't4',
    cap: 'On January 1, Leo’s room is perfect: the bed is made, and the toys are in boxes. January 8: there are socks on the floor. January 15: there are socks, cookies and a skateboard on the bed. January 18: Mom opens the door. “Leo! Your room! What happened?”',
    q: 'What is on Leo’s bed on January 15?', qa: 'Socks, cookies and a skateboard.', pede: 'Leo had a plan, but it didn’t happen. What does he say to Mom?',
    ops: [['I was going to clean it, but I forgot!', 'ok'], ['I went to clean it, but I forgot!', 'went'], ['I was going clean it, but I forgot!', 'semto']], depois: 'January 31: the skateboard is still on the bed.' },
  { k: 'GRANDPA WALT', c: 'WC', quem: 'GRANDFATHER · 71', res: 'I’m going to learn to swim.', dias: 31, fim: 'STILL GOING', cor: 't5',
    cap: 'Grandpa Walt is seventy-one, and he can’t swim. On January 3, he goes to the pool for his first class. He holds the wall. The water is cold! Every Tuesday and Thursday, he goes back. January 31: Grandpa swims from one side of the pool to the other. Alone. The family claps.',
    q: 'How often does Grandpa go to the pool?', qa: 'Every Tuesday and Thursday.', pede: 'In August, Grandpa wants to swim across the lake. What does the family say?',
    ops: [['You’re so strong! I think you’ll do it, Grandpa!', 'ok'], ['You’re so strong! I think you do it, Grandpa!', 'achopres'], ['I think you will to do it, Grandpa!', 'willto']], depois: 'January 31: the card has a gold star.' }
];
var NAO = {
  prova: 'Proof in front of you (the clouds): it’s going to snow. And a decision now: I’ll run.',
  willto: 'will never takes to: I’ll run, I think you’ll do it.',
  like: 'would like always takes to: I’d like to talk.',
  want: 'want + to + verb: I want to talk. No going there.',
  pres: 'A promise or an offer, decided now: I’ll + verb. The plain present is not a promise.',
  went: 'went to is a trip to a place. A plan that didn’t happen: I was going to clean it.',
  semto: 'going needs its to: I was going to clean it.',
  achopres: 'An opinion about the future: I think you’ll do it.',
  plano: 'A plan from before: I’m going to learn.',
  wasg: 'A plan that didn’t happen: I was going to go.'
};

var FITAS = [['A PLAN FROM BEFORE', 'I’m going to run every morning.', 'going'], ['PROOF IN FRONT OF YOU', 'Look at those clouds. It’s going to snow.', 'going'], ['DECIDED NOW · A PROMISE', 'OK, I’ll run tomorrow. I’ll call you.', 'will'], ['ONLY AN OPINION', 'I think you’ll do it. I don’t think he will.', 'will'], ['A GOAL', 'I want to / I’d like to speak Spanish.', 'meta'], ['A PLAN THAT FAILED', 'I was going to clean it, but I forgot.', 'falhou']];
var CONSERTA = [
  { no: 'It’s 9 PM! I call you tomorrow.', si: 'It’s 9 PM! I’ll call you tomorrow.', nota: 'A promise, decided now: will.' },
  { no: 'I went to clean it, but I forgot.', si: 'I was going to clean it, but I forgot.', nota: 'A plan that didn’t happen: was going to.' },
  { no: 'I would like speak Spanish.', si: 'I’d like to speak Spanish.', nota: 'want and would like take to + verb.' },
  { no: 'I will to run.', si: 'I’ll run.', nota: 'will never takes to.' },
  { no: 'I think you do it.', si: 'I think you’ll do it.', nota: 'An opinion about tomorrow: will.' },
  { no: 'I’m going run.', si: 'I’m going to run.', nota: 'going needs its to.' }
];

var FOGOS = [
  { k: 'GRANDPA WALT', diz: 'The phone’s ringing! Can somebody get it?', ops: [['Sure! I’ll get it.', 'ok'], ['Sure! I get it.', 'pres'], ['Sure! I will to get it.', 'willto']] },
  { k: 'LENA', diz: 'So, what’s on your card? What’s your plan for this year?', ops: [['This year I’m going to learn to cook.', 'ok'], ['This year I’m going learn to cook.', 'semto'], ['This year I go learn to cook.', 'plano']] },
  { k: 'MARCUS', diz: 'Look outside! Those clouds are so dark.', ops: [['Oh no. It’s going to snow.', 'ok'], ['Oh no. It snows.', 'prova'], ['Oh no. It’s going snow.', 'semto']] },
  { k: 'ZOE', diz: 'Do you think Dad will really run every morning?', ops: [['Hmm… I don’t think he will.', 'ok'], ['Hmm… I don’t think he runs.', 'achopres'], ['Hmm… I don’t think he will to.', 'willto']] },
  { k: 'LEO', diz: 'Can you help me with my room tomorrow?', ops: [['Sure, I’ll help you. I promise!', 'ok'], ['Sure, I help you. I promise!', 'pres'], ['Sure, I’ll to help you.', 'willto']] }
];

var ANO = [
  { k: 'This weekend', q: 'What are you going to do this weekend? Is it a plan already?', fup: 'Who with?', st: ['I’m going to …'], ex: 'I’m going to visit my mom on Sunday.' },
  { k: 'A goal', q: 'What would you like to learn this year?', fup: 'Why that?', st: ['I’d like to …'], ex: 'I’d like to learn to play the guitar.' },
  { k: 'The window', q: 'Look out the window now. What is the weather going to do?', fup: 'What can you see?', st: ['Look at the … It’s going to …'], ex: 'Look at the sun. It’s going to be a hot afternoon.' },
  { k: 'A trip', q: 'Do you think you’ll travel this year? Where?', fup: 'Who with?', st: ['I think I’ll … / I don’t think I’ll …'], ex: 'I think I’ll go to the beach in July.' },
  { k: 'Last year', q: 'What was a plan last year that didn’t happen?', fup: 'What happened?', st: ['I was going to …, but …'], ex: 'I was going to learn to swim, but I didn’t have time.' },
  { k: 'A promise', q: 'Make a promise to someone at home. What is it?', fup: 'Will you keep it?', st: ['…, I’ll …'], ex: 'Mom, I’ll call you every Sunday.' }
];

var CLARA = [
  { ela: 'Hi! It’s February! So tell me: does Marcus run every morning?', conta: 'He was going to run every morning, but it snowed. He says he’ll run in the spring.', voce: 'Are you going to make a resolution this year?', resp: 'Yes! I’m going to walk to work. Well… I think I will.' },
  { ela: 'And Zoe? Is her phone in the box at 9 PM?', conta: 'Most nights! One night she texted Maya: “I’ll call you tomorrow, I promise.”', voce: 'What would you like to do in June with us?', resp: 'I’d like to take you all to the beach!' },
  { ela: 'What about Leo’s room? Is it clean now?', conta: 'No! He was going to clean it, but he forgot. The skateboard is still on the bed.', voce: 'Do you think it’s going to be hot in June?', resp: 'Oh, yes. June is summer here. It’s going to be very hot!' },
  { ela: 'And Lena and Grandpa? Did they stop too?', conta: 'No! Lena studies every night, and Grandpa can swim now. We think he’ll swim across the lake.', voce: 'We’ll call you every Sunday. (a promise)', resp: 'You promise? OK. I’ll wait by the phone!' }
];

var QUIZ = [
  { f: 'Look at those clouds! It ___ snow.', op: ['’s going to', 'will to', 'snows'], nao: 'Proof in front of you: going to.' },
  { f: 'The phone’s ringing! ___ get it.', op: ['I’ll', 'I', 'I will to'], nao: 'Decided right now: I’ll + verb.' },
  { f: 'I ___ clean my room, but I forgot.', op: ['was going to', 'went to', 'will'], nao: 'A plan that didn’t happen: was going to.' },
  { f: 'I’d like ___ Spanish.', op: ['to speak', 'speak', 'speaking'], nao: 'would like + to + verb.' },
  { f: 'I don’t think Dad ___ run tomorrow.', op: ['will', 'will to', 'is going'], nao: 'Only an opinion: I don’t think… will.' }
];

var S = { i: 0, faixa: 1, fala: {}, resp: {}, armas: {},
  abre: { sel: -1, foi: {}, formas: {} }, tr: { sel: -1, esc: {}, viu: {} }, rg: {}, fg: { n: 0, esc: '' }, ano: { sel: -1, foi: {} }, cl: { n: 0, viu: {} }, qz: { n: 0, esc: -1 } };

function tracker(feitos, sel) {
  var linhas = CARTER.map(function (p, i) {
    var ok = feitos[i], cel = '';
    for (var d = 1; d <= 31; d++) cel += '<i class="d' + (ok && d <= p.dias ? ' on' : '') + (ok && d === p.dias && p.dias < 31 ? ' parou' : '') + '"></i>';
    return '<button type="button" class="linha-t ' + p.cor + (sel === i ? ' sel' : '') + '" data-a="tr" data-n="' + i + '"><span class="ini-t">' + p.c + '</span><span class="dias-t">' + cel + '</span><em>' + (ok ? p.fim : '· · ·') + '</em></button>';
  }).join('');
  return '<div class="tracker"><div class="topo-t"><span></span><span class="num-t"><b>1</b><b>10</b><b>20</b><b>31</b></span><span>JANUARY</span></div>' + linhas + '</div>';
}
function ceu(n) {
  var pos = [[90, 70, 'f1'], [230, 45, 'f2'], [370, 80, 'f3'], [510, 50, 'f4'], [150, 140, 'f5'], [300, 125, 'f6'], [450, 150, 'f2'], [580, 120, 'f1']];
  var fogos = pos.slice(0, n).map(function (p, i) {
    var raios = '';
    for (var r = 0; r < 12; r++) { var a = r * Math.PI / 6, x2 = p[0] + Math.cos(a) * 34, y2 = p[1] + Math.sin(a) * 34; raios += '<line x1="' + p[0] + '" y1="' + p[1] + '" x2="' + x2.toFixed(1) + '" y2="' + y2.toFixed(1) + '"/>'; }
    return '<g class="fogo ' + p[2] + (i === n - 1 ? ' novo' : '') + '">' + raios + '<circle cx="' + p[0] + '" cy="' + p[1] + '" r="4"/></g>';
  }).join('');
  var min = 52 + n, hora = n >= 8 ? '12:00 AM' : '11:' + min + ' PM';
  return '<svg class="ceu-s" viewBox="0 0 660 230" role="img" aria-label="The sky"><rect width="660" height="230" rx="14" class="fundo-s"/>' + fogos
    + '<path d="M0 230 L0 200 L40 200 L40 180 L80 180 L80 205 L130 205 L130 170 L170 170 L170 200 L230 200 L230 185 L260 185 L260 210 L320 210 L320 175 L360 175 L360 200 L420 200 L420 165 L470 165 L470 195 L530 195 L530 180 L580 180 L580 205 L660 205 L660 230 Z" class="cidade"/>'
    + '<text x="330" y="224" text-anchor="middle" class="relogio-s">' + hora + '</text></svg>';
}

var R = {};
R.capa = function () {
  return '<div class="capa"><div class="lado-a"><span class="kick">MAIN SERIES · A2 · EASY READER · THE CARTER HOUSE</span><h1>This Year <b>I’m Going to…</b></h1>'
    + '<p class="sub">Five resolutions. Thirty-one days. <b>Which plans are going to survive January?</b></p>'
    + '<div class="chipsx"><span class="pilula">I’m going to run</span><span class="pilula">It’s going to snow</span><span class="pilula">OK, I’ll run tomorrow</span><span class="pilula">I was going to…</span><span class="pilula">Live Class · W·O·L·F</span></div>'
    + '<button type="button" class="btn cheio" data-a="ir" data-n="1">Open the tracker</button>' + faixaLive() + '</div>'
    + '<div class="capa-d">' + tracker({ 0: 1, 1: 1, 2: 1, 3: 1, 4: 1 }, -1) + '</div></div>';
};

R.abre = function (c) {
  return cartasPessoais(c, ABRE, S.abre, 'abre') + '<div class="partes so-prof"><h5>WHAT YOU HEAR · DON’T CORRECT</h5>' + FORMAS.map(function (f) { return '<button type="button" class="chip frase' + (f.erro ? ' erro-ouvido' : '') + (S.abre.formas[f.k] ? ' on' : '') + '" data-a="ab-f" data-v="' + f.k + '">' + f.t + '</button>'; }).join('') + '</div>';
};

R.tracker = function (c) {
  var e = S.tr, feitos = {}, x = e.sel >= 0 ? CARTER[e.sel] : null;
  CARTER.forEach(function (p, i) { if (e.esc[i] === 'ok') feitos[i] = 1; });
  var n = Object.keys(feitos).length, lado;
  if (!x) lado = '<div class="pergunta vd"><small>' + n + ' OF 5</small><h2>' + (n >= 5 ? 'Two survive January, one almost does, and two fall down. Why I’m going to on the cards, but I’ll at the window?' : 'Pick a person on the tracker.') + '</h2></div>';
  else {
    var esc = e.esc[e.sel], ok = esc === 'ok';
    lado = '<div class="cartao-r ' + x.cor + '"><small>' + x.k + ' · ' + x.quem + '</small><b>“' + x.res + '”</b></div><p class="capitulo">' + x.cap + '</p>'
      + (ok ? '' : '<div class="pede vd"><small>QUESTION</small><b>' + x.q + '</b></div>' + mostra('trq' + e.sel, x.qa, 1))
      + '<h5 class="rot-ouve">' + x.pede.toUpperCase() + '</h5>'
      + (ok ? '<div class="balao vd"><p>“' + x.ops[0][0] + '”</p></div><p class="aprova">' + x.depois + '</p>'
        : '<div class="versoes">' + ordem(x.ops, e.sel + 1).map(function (o) { return '<button type="button" class="versao' + (esc === o[1] ? ' errado' : '') + '" data-a="tr-v" data-v="' + o[1] + '">' + o[0] + '</button>'; }).join('') + '</div>' + (esc ? '<p class="recusa">' + NAO[esc] + '</p>' : ''));
  }
  return cab(c) + '<div class="mesa-c"><div class="lado-l">' + tracker(feitos, e.sel) + '</div><div class="lado-l">' + lado + '</div></div>';
};

R.regra = function (c) {
  return cab(c) + '<div class="regra-g"><div class="fitas">' + FITAS.map(function (f) { return '<div class="fita ' + f[2] + '"><small>' + f[0] + '</small><b>' + f[1] + '</b></div>'; }).join('') + '</div>'
    + '<div class="consertos">' + CONSERTA.map(function (x, i) { var on = S.rg[i]; return '<div class="conserto vd' + (on ? ' feito' : '') + '"><s>' + x.no + '</s>' + (on ? '<b>' + x.si + '</b><small>' + x.nota + '</small>' : '<button type="button" class="chip" data-a="rg" data-n="' + i + '">Fix it</button>') + '</div>'; }).join('') + '</div></div>';
};

R.fogos = function (c) {
  var e = S.fg, n = e.n, fim = n >= FOGOS.length;
  if (fim) return cab(c) + '<div class="mesa-c"><div class="lado-l">' + ceu(8) + '</div><div class="lado-l"><div class="pergunta vd"><small>12:00 AM</small><h2>Five fireworks in the sky, and five new cards on the board. Happy New Year!</h2></div></div></div>';
  var x = FOGOS[n], esc = e.esc;
  return cab(c) + trilha(FOGOS, n) + '<div class="mesa-c"><div class="lado-l">' + ceu(n) + '</div><div class="lado-l"><div class="pede vd"><small>' + x.k + ' SAYS</small><b>“' + x.diz + '”</b></div><h5 class="rot-ouve">ANSWER FAST</h5>'
    + '<div class="versoes">' + ordem(x.ops, n + 5).map(function (o) { return '<button type="button" class="versao' + (esc === o[1] ? (o[1] === 'ok' ? ' certo' : ' errado') : '') + '" data-a="fg" data-v="' + o[1] + '">' + o[0] + '</button>'; }).join('') + '</div>'
    + (esc === 'ok' ? '<div><button type="button" class="btn" data-a="fg-prox">Light it</button></div>' : esc ? '<p class="recusa">' + NAO[esc] + '</p>' : '') + '</div></div>';
};

R.ano = function (c) { return cartasPessoais(c, ANO, S.ano, 'ano'); };

R.clara = function (c) {
  var e = S.cl, n = Math.min(e.n, CLARA.length - 1), x = CLARA[n];
  return cab(c) + trilha(CLARA, e.n) + '<div class="mesa-c"><div class="lado-l"><div class="chamada"><div class="tela-v" style="background-image:url(' + img('piscina') + ')"><span class="ini-v">AC</span><small>AUNT CLARA · VIDEO CALL FROM MEXICO</small></div></div></div>'
    + '<div class="lado-l"><div class="pede vd"><small>AUNT CLARA ASKS</small><b>“' + x.ela + '”</b></div>' + fala('cl' + n, ['He was going to … / She’s going to … / I think he’ll …'], ['was going to', 'going to', 'will', 'I think …’ll']) + mostra('cl' + n, x.conta, 1)
    + '<div class="pede vd"><small>NOW ASK HER</small><b>' + x.voce + '</b></div><p class="so-prof dica-aluno">Clara answers: “' + x.resp + '”</p>'
    + (n < CLARA.length - 1 ? '<div><button type="button" class="btn" data-a="cl-prox">Next question</button></div>' : '<p class="aprova">The story is told, card by card.</p>') + '</div></div>';
};

R.quiz = function (c) {
  var e = S.qz, n = e.n, fim = n >= QUIZ.length;
  if (fim) return cab(c) + trilha(QUIZ, n) + '<div class="foco"><div class="pergunta vd"><small>FIVE OF FIVE</small><h2>Plan or proof: going to. Now, a promise, an opinion: will.</h2></div></div>';
  var x = QUIZ[n], ok = e.esc === 0;
  return cab(c) + trilha(QUIZ, n) + '<div class="foco"><div class="balao vd"><p>' + x.f.replace('___', ok ? '<u>' + x.op[0] + '</u>' : '<span class="lacuna-q">___</span>') + '</p></div><div class="tres-b centro">'
    + ordem(x.op.map(function (o, i) { return [o, i]; }), n + 9).map(function (o) { return '<button type="button" class="pilula grande-p' + (e.esc === o[1] ? (o[1] === 0 ? ' certo' : ' errado') : '') + '" data-a="qz" data-n="' + o[1] + '">' + o[0] + '</button>'; }).join('') + '</div>'
    + (ok ? '<div style="text-align:center"><button type="button" class="btn" data-a="qz-prox">Next</button></div>' : e.esc > 0 ? '<p class="recusa" style="text-align:center">' + x.nao + '</p>' : '') + '</div>';
};

R.fim = function (c) {
  var f = S.abre.formas, lembra = FORMAS.filter(function (x) { return f[x.k]; }).map(function (x) { return x.t; });
  return cab(c) + '<div class="fim">' + escritaFinal('fim', (S.txt || {}).fim || '', (S.salvo || {}).fim, 'This year I’m going to …\nI’d like to …\nI’ll … , I promise.\nI think it will survive. / I don’t think it will.', 'Your card',
    ['This year I’m going to ', 'I’d like to ', 'I’ll ', 'I promise', 'I think it will survive', 'I don’t think it will'], ['YOUR CARD FOR NEXT JANUARY', lembra.length ? 'In scene I your teacher heard: ' + lembra.join(', ') + '. Now your card.' : 'One plan, one goal, one promise, and will it survive?'])
    + '<div class="lado-fim"><div class="grande vd"><span>I’m <u>going to</u> run · it’s <u>going to</u> snow</span><span>OK, I’<u>ll</u> run tomorrow · I think you’<u>ll</u> do it</span><span>I’d like <u>to</u> · I <u>was going to</u>…</span></div>'
    + mostra('fim', 'This year I’m going to cook at home more.<br>I’d like to learn Spanish.<br>I’ll call my grandmother every Sunday, I promise.<br>I think it will survive!', 1)
    + '<p class="hw"><a class="pilula" href="HW/" target="_blank" rel="noopener">Homework for the student →</a></p></div></div>';
};

TOQUES['ab-f'] = function (b, n, v) { S.abre.formas[v] = !S.abre.formas[v]; };
TOQUES.tr = function (b, n) { S.tr.sel = n; };
TOQUES['tr-v'] = function (b, n, v) { S.tr.esc[S.tr.sel] = v; };
TOQUES.rg = function (b, n) { S.rg[n] = 1; };
TOQUES.fg = function (b, n, v) { S.fg.esc = v; };
TOQUES['fg-prox'] = function () { S.fg = { n: S.fg.n + 1, esc: '' }; };
TOQUES['cl-prox'] = function () { S.cl.n++; };
TOQUES.qz = function (b, n) { S.qz.esc = n; };
TOQUES['qz-prox'] = function () { S.qz = { n: S.qz.n + 1, esc: -1 }; };

/* 10/11/2026 · AS EXPLICAÇÕES (kit/formatos3.js) · G5 · uma cena curta nova (k: gx) antes de regra.
   Explicação 100% em inglês: see → notice → use (o aluno fala ou escreve uma frase dele no fim). */
var GX_EXPLICA = { formato: 'contraste', titulo: 'Going to or will? Two scenes at the Carters’.',
  a: { t: 'Decided before', falas: [['Aunt Clara', 'What’s your plan for this year, Mia?'], ['Mia', 'I’m <mark>going to</mark> run every morning.']], d: 'The plan is old: it is already on the card. That is <b>going to</b>.' },
  b: { t: 'Decided now', falas: [['Dad', 'The fireworks are starting! Where is the camera?'], ['Mia', 'I<mark>’ll</mark> get it!']], d: 'Something happens and you decide right now. That is <b>will</b>.' },
  pergunta: 'Same future, two forms. What is different in the situation?',
  pergunta2: 'Now you. Which one fits?',
  itens: [
    { p: 'It’s January 1. Your list on the fridge says: “Learn guitar.” You say:', o: ['I’ll learn guitar this year.', 'I’m going to learn guitar this year.'], c: 1, d: 'The plan is on the list: decided before.' },
    { p: 'Dad can’t find his glasses. You say:', o: ['I’ll look for them.', 'I’m going to look for them.'], c: 0, d: 'A quick offer, right now.' },
    { p: 'You look at the dark clouds. You say:', o: ['It’s going to rain.', 'I think it will rain.'], c: 0, d: 'You see the proof in front of you.' },
    { p: 'Aunt Clara says: “Please call me on Sunday.” You decide now:', o: ['I’ll call you on Sunday.', 'I’m going to call you on Sunday.'], c: 0, d: 'You decide when she asks.' }
  ],
  nota: 'Ask: when was it decided? Before, or with proof in front of you: <b>going to</b>. Right now, a promise, or <b>I think</b>: <b>will</b>.',
  uso: { p: 'Your turn. One plan you made before, and one quick promise to a friend right now.', molde: ['This year I’m going to …', 'OK, I’ll …'], ex: 'This year I’m going to save money. Don’t worry, I’ll help you move on Saturday.' } };
R.gx = function (c) { return cab(c) + FM.ex('gx_contraste', GX_EXPLICA); };
