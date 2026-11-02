/* ============================================================
   THE WEEK FILLS UP · THE PLANNER WALL · LIVE CLASS  06/10/2026
   Main series A2 · present continuous para o que já está marcado:
   I'm working on Saturday · Are you … on …? · I'm not … · will para
   o que se decide agora e para previsão.
   Erros universais: "I meet my doctor tomorrow", "I will see him Friday"
   para o que já está na agenda, "It's raining tomorrow".
   O MUNDO (da aula velha): uma semana, quatro horários livres, seis
   convites; o que se aceita não volta; duas agendas lado a lado com UM
   horário livre nas duas (quinta, 13h). Os quatro áudios (a1–a4)
   conferidos no whisper em 06/10: batem.
   A CARA: o QUADRO DA SEMANA no escuro — grade de cinco colunas com
   blocos que acendem em cor quando ocupados (cada convite tem cor
   própria), o relógio de "agora" contra o calendário de "marcado".
   Fila: FILA-LIVE-386.md · 073.
   ============================================================ */
var L = [
  { k: 'capa', est: null, img: 'agenda' },
  { k: 'abre', est: 'o', min: 7, img: 'agenda', rot: 'I · Your Week Already', t: 'What is already fixed in your week?', p: 'Pick a card. Answer out loud. Mistakes are OK. Nobody corrects you.' },
  { k: 'agora', est: 'f', min: 6, img: 'agenda', rot: 'II · Now or Already?', t: 'Same three words. The day does the rest.', p: 'Read the whole line out loud. Happening now, or already arranged?' },
  { k: 'convites', est: 'o', min: 7, img: 'agenda', rot: 'III · Four Slots, Six Invitations', t: 'Four free slots. Six invitations. You spend each slot once.', p: 'Say the sentence out loud first. Then accept. You can’t change it.' },
  { k: 'recusa', est: 'o', min: 7, img: 'cafe', rot: 'IV · The Two You Turned Down', t: 'Two people. Neither of them hears the word no.', p: 'Your teacher plays the person who invited you. Turn them down with what you’re doing instead.' },
  { k: 'ouve', est: 'l', min: 7, img: 'agenda', rot: 'V · The Day Comes Last', t: 'Both halves sound the same until the last words.', p: 'Play it. Right now, or arranged? The text opens after you listen.' },
  { k: 'will', est: 'f', min: 6, extra: 1, img: 'agenda', rot: 'VI · Who Agreed, and When?', t: 'Two ways to say it. Only one keeps the appointment.', p: 'Read the situation out loud. Pick one. Then read the whole line.' },
  { k: 'duas', est: 'o', min: 7, extra: 1, img: 'cafe', rot: 'VII · Two Calendars', t: 'Coffee with your teacher this week. One slot works.', p: 'Ask: “What are you doing on Monday at nine?” Your teacher taps that slot and answers. Then book it.' },
  { k: 'seu', est: 'o', min: 7, extra: 1, img: 'porta', rot: 'VIII · Six About Your Week', t: 'Every question is about a day that hasn’t come.', p: 'Answer out loud. Then ask your teacher the same.' },
  { k: 'fim', est: 'w', min: 6, img: 'porta', rot: 'IX · Your Week, Written', t: 'Your week from scene I comes back.', p: 'Write three plans that are already arranged, and one you’re NOT doing. It goes to your My notes.' }
];

var TR = {
  'a1.mp3': 'I’m working right now. Call me later.',
  'a2.mp3': 'I’m working on Saturday, so I can’t come.',
  'a3.mp3': 'She’s having lunch. She’ll call you back.',
  'a4.mp3': 'She’s having lunch with Marco on Thursday.'
};

var ABRE = [
  { k: 'Fixed', q: 'Name one thing in your week that is already fixed.', fup: 'Who else knows about it?', st: ['On … I’m …'], ex: 'On Thursday I’m seeing my sister.' },
  { k: 'Fullest', q: 'Which day of your week is the fullest?', fup: 'What are you doing that day?', st: ['On … I’m … and I’m …'], ex: 'On Monday I’m working all day and I’m going to the gym at seven.' },
  { k: 'Tonight', q: 'What are you doing tonight?', fup: 'Could it still change?', st: ['Tonight I’m …'], ex: 'Tonight I’m having dinner with friends.' }
];
var FORMAS = [{ k: 'cont', t: 'I’M + -ING + DAY' }, { k: 'will', t: 'I’LL (DECIDED NOW)' }, { k: 'simples', t: 'I MEET … TOMORROW', erro: 1 }, { k: 'willplano', t: 'I WILL SEE … FRIDAY', erro: 1 }];

var AGORA = [
  { t: 'I’m eating. Call me back.', k: 'agora', d: '' },
  { t: 'I’m eating with Ben on Friday.', k: 'marcado', d: 'on Friday' },
  { t: 'She’s driving. She can’t answer.', k: 'agora', d: '' },
  { t: 'She’s driving to Chicago next Sunday.', k: 'marcado', d: 'next Sunday' },
  { t: 'They’re moving the couch.', k: 'agora', d: '' },
  { t: 'They’re moving in April.', k: 'marcado', d: 'in April' }
];

var VAGAS = [{ id: 'ter', d: 'TUE', h: '7 PM' }, { id: 'qui', d: 'THU', h: '7 PM' }, { id: 'sab1', d: 'SAT', h: '10 AM' }, { id: 'sab2', d: 'SAT', h: '8 PM' }];
var CONVITES = [
  { qm: 'Ana', oq: 'birthday dinner', vaga: 'sab2', cor: 'c1', say: 'I’m having dinner with Ana on Saturday.', fazendo: 'having dinner with Ana' },
  { qm: 'Ben', oq: 'soccer game', vaga: 'qui', cor: 'c2', say: 'I’m playing soccer with Ben on Thursday.', fazendo: 'playing soccer with Ben' },
  { qm: 'Your cousin', oq: 'wedding party', vaga: 'sab2', cor: 'c3', say: 'I’m going to my cousin’s wedding on Saturday.', fazendo: 'going to my cousin’s wedding' },
  { qm: 'Marta', oq: 'study group', vaga: 'qui', cor: 'c4', say: 'I’m studying with Marta on Thursday.', fazendo: 'studying with Marta' },
  { qm: 'Your mom', oq: 'farmers market', vaga: 'sab1', cor: 'c5', say: 'I’m going to the market with my mom on Saturday morning.', fazendo: 'going to the market with my mom' },
  { qm: 'Your team', oq: 'drinks after work', vaga: 'ter', cor: 'c6', say: 'I’m meeting my team on Tuesday.', fazendo: 'meeting my team' }
];

var OUVE = [
  { au: 'a1.mp3', k: 'agora', pq: 'Right now: the opposite of a day in the calendar.' },
  { au: 'a2.mp3', k: 'marcado', pq: 'Same first words, and then Saturday arrived.' },
  { au: 'a3.mp3', k: 'agora', pq: 'She’s at the table while you listen.' },
  { au: 'a4.mp3', k: 'marcado', pq: 'A person and a day. Nobody is eating yet.' }
];

var WILL = [
  { sit: 'The meeting went into your calendar last week.', op: ['I’m meeting them at four.', 'I will meet them at four.'], pq: 'Agreed before today: the form of now.' },
  { sit: 'Your friend asks for help, and you decide this second.', op: ['OK, I’ll help you.', 'OK, I’m helping you.'], pq: 'Decided now: will.' },
  { sit: 'Your flight is booked and paid for.', op: ['I’m flying on Monday.', 'I fly on Monday.'], pq: 'An airline agreed with you, in writing.' },
  { sit: 'You’re guessing about the weather.', op: ['It will rain tomorrow.', 'It’s raining tomorrow.'], pq: 'Rain agreed with nobody.' },
  { sit: 'The dentist has you down for Tuesday.', op: ['I’m seeing the dentist on Tuesday.', 'I see the dentist on Tuesday.'], pq: 'Your name is in somebody’s book.' },
  { sit: 'The phone rings, and you offer to get it.', op: ['I’ll get it.', 'I’m getting it.'], pq: 'Decided while the phone was ringing.' }
];

var DIAS = ['MON', 'TUE', 'WED', 'THU', 'FRI'], HORAS = ['9 AM', '1 PM', '7 PM'];
var EU = [['working', '', 'gym'], ['working', 'lunch with Sam', ''], ['', 'working', 'English class'], ['working', '', 'dinner with Mom'], ['dentist', 'working', '']];
var PROF = [['', 'teaching', 'yoga'], ['teaching', '', 'movie night'], ['seeing the doctor', '', 'teaching'], ['teaching', '', 'teaching'], ['', 'seeing a friend', 'flying to Denver']];
var NOMEDIA = { MON: 'Monday', TUE: 'Tuesday', WED: 'Wednesday', THU: 'Thursday', FRI: 'Friday' };

var SEU = [
  { q: 'What are you doing on Saturday?', fup: 'Who arranged it: you, or somebody else?', ini: 'On Saturday I’m …', ex: 'On Saturday I’m visiting my grandparents.' },
  { q: 'Are you working next Monday?', fup: 'What time are you starting?', ini: 'Yes, I am. / No, I’m not. I’m …', ex: 'Yes, I am. I’m starting at eight.' },
  { q: 'Who are you seeing this week?', fup: 'Where are you meeting them?', ini: 'I’m seeing …', ex: 'I’m seeing my old roommate on Friday.' },
  { q: 'Are you going anywhere next month?', fup: 'Is it booked already?', ini: 'I’m going to …', ex: 'I’m going to the beach for a long weekend.' },
  { q: 'What time are you finishing today?', fup: 'What are you doing after that?', ini: 'I’m finishing at …', ex: 'I’m finishing at six, and then I’m cooking.' },
  { q: 'Your turn: ask your teacher three things about their week.', fup: 'Now ask one thing they’re NOT doing.', ini: 'What are you doing on …?', ex: 'Are you working on Sunday? What are you doing tonight?' }
];

var S = { i: 0, faixa: 1, fala: {}, resp: {}, armas: {},
  abre: { sel: -1, foi: {}, formas: {} }, ag: { n: 0, esc: '' }, cv: { aceito: {}, recusou: {}, ult: -1, msg: '' }, rec: { n: 0 }, ou: { esc: {} }, wl: { n: 0, esc: -1 }, du: { vis: {}, esc: '' }, seu: { n: 0 } };

function quem(v) { var i = S.cv.aceito[v]; return i === undefined ? null : CONVITES[i]; }
function recusados() {
  var r = CONVITES.map(function (c, i) { return i; }).filter(function (i) { return S.cv.aceito[CONVITES[i].vaga] !== undefined && S.cv.aceito[CONVITES[i].vaga] !== i; });
  return r.length ? r : [0, 3];
}
function semana(mini) {
  return '<div class="semana' + (mini ? ' sem-mini' : '') + '">' + VAGAS.map(function (v) { var c = quem(v.id); return '<div class="bloco' + (c ? ' ocupado ' + c.cor : '') + '"><small>' + v.d + ' · ' + v.h + '</small><b>' + (c ? c.qm : 'FREE') + '</b>' + (c ? '<em>' + c.oq + '</em>' : '') + '</div>'; }).join('') + '</div>';
}

var R = {};
R.capa = function () {
  var grade = '<div class="parede">' + DIAS.map(function (d, i) { return '<div class="col-d"><small>' + d + '</small>' + HORAS.map(function (h, j) { var t = EU[i][j]; return '<span class="cel' + (t ? ' ocup c' + ((i + j) % 6 + 1) : '') + '">' + (t || '') + '</span>'; }).join('') + '</div>'; }).join('') + '</div>';
  return '<div class="capa"><div class="lado-a"><span class="kick">MAIN SERIES · A2 · ONE WEEK · FOUR SLOTS</span><h1>The Week <b>Fills Up</b></h1>'
    + '<p class="sub">I’m working. <b>I’m working on Saturday.</b> Three words, and the day did the rest.</p>'
    + '<div class="chipsx"><span class="pilula">I’m meeting her on Friday</span><span class="pilula">Are you free on…?</span><span class="pilula">I’ll · it will rain</span><span class="pilula">Live Class · W·O·L·F</span></div>'
    + '<button type="button" class="btn cheio" data-a="ir" data-n="1">Open the week</button>' + faixaLive() + '</div>'
    + '<div class="capa-d">' + grade + '</div></div>';
};

R.abre = function (c) {
  return cartasPessoais(c, ABRE, S.abre, 'abre') + '<div class="partes so-prof"><h5>WHAT YOU HEAR · DON’T CORRECT</h5>' + FORMAS.map(function (f) { return '<button type="button" class="chip frase' + (f.erro ? ' erro-ouvido' : '') + (S.abre.formas[f.k] ? ' on' : '') + '" data-a="ab-f" data-v="' + f.k + '">' + f.t + '</button>'; }).join('') + '</div>';
};

function doisLados(esc, k, acao) {
  return '<div class="dois-l"><button type="button" class="lado-btn lb-agora' + (esc === 'agora' ? (k === 'agora' ? ' certo' : ' errado') : '') + '" data-a="' + acao + '" data-v="agora"><span class="ic-relogio"><i></i></span>RIGHT NOW</button>'
    + '<button type="button" class="lado-btn lb-marcado' + (esc === 'marcado' ? (k === 'marcado' ? ' certo' : ' errado') : '') + '" data-a="' + acao + '" data-v="marcado"><span class="ic-cal"><i></i></span>ALREADY ARRANGED</button></div>';
}
R.agora = function (c) {
  var e = S.ag, n = e.n, fim = n >= AGORA.length;
  if (fim) return cab(c) + trilha(AGORA, n) + '<div class="foco"><div class="pergunta vd"><small>SIX LINES</small><h2>Same form six times. The day changed the meaning.</h2></div></div>';
  var x = AGORA[n], ok = e.esc === x.k, linha = ok && x.d ? x.t.replace(x.d, '<u>' + x.d + '</u>') : x.t;
  return cab(c) + trilha(AGORA, n) + '<div class="foco"><div class="balao vd"><p>' + linha + '</p></div>' + doisLados(e.esc, x.k, 'ag')
    + (ok ? '<p class="aprova" style="text-align:center">' + (x.d ? 'The day at the end, <b>' + x.d + '</b>, turned now into later.' : 'No day, no hour: it’s happening while you speak.') + '</p><div style="text-align:center"><button type="button" class="btn" data-a="ag-prox">Next line</button></div>'
      : e.esc ? '<p class="recusa" style="text-align:center">Read to the end of the line. Is there a day or an hour?</p>' : '') + '</div>';
};

R.convites = function (c) {
  var e = S.cv, cheias = Object.keys(e.aceito).length;
  var cartas = '<div class="convites">' + CONVITES.map(function (x, i) {
    var aceito = e.aceito[x.vaga] === i, recusado = e.recusou[i];
    return '<div class="convite ' + x.cor + (aceito ? ' aceito' : '') + (recusado ? ' fora' : '') + '"><small>' + x.qm.toUpperCase() + ' · ' + VAGAS.filter(function (v) { return v.id === x.vaga; })[0].d + ' ' + VAGAS.filter(function (v) { return v.id === x.vaga; })[0].h + '</small><b>' + x.oq + '</b>'
      + (aceito ? '<em>“' + x.say + '”</em>' : recusado ? '<em class="fora-t">Slot taken. You turn this one down in scene IV.</em>' : '<button type="button" class="chip" data-a="cv" data-n="' + i + '">Say it, then accept</button>') + '</div>';
  }).join('') + '</div>';
  return cab(c) + '<div class="mesa-c"><div class="lado-l"><h5 class="rot-ouve">YOUR WEEK · ' + cheias + ' OF 4 SLOTS</h5>' + semana() + (e.msg ? '<p class="' + (e.ult >= 0 && e.recusou[e.ult] ? 'recusa' : 'aprova') + '">' + e.msg + '</p>' : '')
    + (cheias >= 4 ? '<p class="aprova">Four slots spent. Two people are still waiting for an answer.</p>' : '') + '<button type="button" class="chip so-prof" data-a="cv-zera">Clear the week</button></div><div class="lado-l">' + cartas + '</div></div>';
};

R.recusa = function (c) {
  var rs = recusados(), n = Math.min(S.rec.n, rs.length - 1), x = CONVITES[rs[n]], dono = quem(x.vaga) || CONVITES[x.vaga === 'sab2' ? 2 : 1];
  var v = VAGAS.filter(function (y) { return y.id === x.vaga; })[0], dia = v.d === 'SAT' ? 'Saturday' : v.d === 'THU' ? 'Thursday' : v.d === 'TUE' ? 'Tuesday' : 'that day';
  return cab(c) + trilha(rs, S.rec.n) + '<div class="mesa-c"><div class="lado-l"><div class="convite ' + x.cor + ' grande-c"><small>' + x.qm.toUpperCase() + ' INVITES YOU · ' + v.d + ' ' + v.h + '</small><b>' + x.oq + '</b><em>“Can you come?”</em></div><div class="aberta vd" style="background-image:url(' + img('cafe') + ')"><span>THE MESSAGE IS WAITING</span></div></div>'
    + '<div class="lado-l"><div class="pede vd"><small>THE MOLD</small><b>I’m sorry, I can’t. I’m … on …</b></div><p class="dica-aluno">Your slot on ' + dia + ' says: <b>' + dono.fazendo + '</b>. Your teacher insists once; refuse again, politely.</p>'
    + fala('rc' + n, ['I’m sorry, I can’t. I’m …'], ['I’m …-ing', 'on ' + dia, 'Are you free on …?']) + mostra('rc' + n, 'I’m sorry, I can’t. I’m ' + dono.fazendo + ' on ' + dia + '. Are you free on Sunday?', 1)
    + (n < rs.length - 1 ? '<div><button type="button" class="btn" data-a="rc-prox">Next one</button></div>' : '<p class="aprova">Two refusals, and the word no wasn’t in either of them.</p>') + '</div></div>';
};

R.ouve = function (c) {
  var e = S.ou;
  return cab(c) + '<div class="ouve-g">' + OUVE.map(function (x, i) {
    var ouviu = (S.ouviu || {})[x.au], esc = e.esc[i], ok = esc === x.k;
    return '<div class="ouve-c vd"><div class="toca-linha">' + tocar(x.au) + '<b>Line ' + (i + 1) + '</b></div>' + (ouviu ? doisLados(esc, x.k, 'ou" data-n="' + i) : '<p class="transcricao vazia">Play it first.</p>')
      + (ok ? '<p class="aprova">' + x.pq + '</p>' + transcricao(x.au, TR[x.au], 'ou' + i) : esc ? '<p class="recusa">Play it again. The day, if there is one, comes at the end.</p>' : '') + '</div>';
  }).join('') + '</div>';
};

R.will = function (c) {
  var e = S.wl, n = e.n, fim = n >= WILL.length;
  if (fim) return cab(c) + trilha(WILL, n) + '<div class="foco"><div class="pergunta vd"><small>SIX SITUATIONS</small><h2>Only two were decided while you spoke. One was a guess.</h2></div></div>';
  var x = WILL[n], ok = e.esc === 0;
  return cab(c) + trilha(WILL, n) + '<div class="foco"><div class="pergunta vd ja"><small>THE SITUATION</small><h2>' + x.sit + '</h2></div><div class="versoes duas-v">' + ordem([[x.op[0], 0], [x.op[1], 1]], n + 2).map(function (o) { return '<button type="button" class="versao' + (e.esc === o[1] ? (o[1] === 0 ? ' certo' : ' errado') : '') + '" data-a="wl" data-n="' + o[1] + '">' + o[0] + '</button>'; }).join('') + '</div>'
    + (ok ? '<p class="aprova" style="text-align:center">' + x.pq + '</p><div style="text-align:center"><button type="button" class="btn" data-a="wl-prox">Next</button></div>' : e.esc === 1 ? '<p class="recusa" style="text-align:center">Was it agreed before now, or decided this second?</p>' : '') + '</div>';
};

R.duas = function (c) {
  var e = S.du, ok = e.esc === '3-1';
  function grade(dados, quemE) {
    return '<div class="grade-d"><span></span>' + DIAS.map(function (d) { return '<small>' + d + '</small>'; }).join('') + HORAS.map(function (h, j) {
      return '<small class="hr">' + h + '</small>' + DIAS.map(function (d, i) {
        var t = dados[i][j], id = i + '-' + j;
        if (quemE === 'prof') { var vis = e.vis[id] || ok || e.esc === id; return '<button type="button" class="cel-d' + (vis ? (t ? ' ocup' : ' livre') : ' oculta') + '" data-a="du-v" data-v="' + id + '">' + (vis ? (t || 'free') : '?') + '</button>'; }
        return '<button type="button" class="cel-d' + (t ? ' ocup' : ' livre') + (e.esc === id ? (ok ? ' certo' : ' errado') : '') + '"' + (t ? ' disabled' : ' data-a="du" data-v="' + id + '"') + '>' + (t || 'free') + '</button>';
      }).join('');
    }).join('') + '</div>';
  }
  var msg = '';
  if (e.esc) { var p = e.esc.split('-'), t = PROF[+p[0]][+p[1]]; msg = ok ? '<p class="aprova">Found it. Book it out loud: “Are you free on Thursday at one? Let’s meet then.”</p>' : '<p class="recusa">Not that one. On ' + NOMEDIA[DIAS[+p[0]]] + ' at ' + HORAS[+p[1]].toLowerCase() + ' your teacher is ' + t + '.</p>'; }
  return cab(c) + '<div class="duas-g"><div class="lado-l"><h5 class="rot-ouve">YOUR WEEK · TAP A FREE SLOT TO BOOK</h5>' + grade(EU, 'eu') + msg + '</div>'
    + '<div class="lado-l"><h5 class="rot-ouve">YOUR TEACHER’S WEEK · THEY TAP WHAT YOU ASK ABOUT</h5>' + grade(PROF, 'prof') + '<div class="pede vd"><small>ASK</small><b>What are you doing on Monday at nine? · Are you free on Tuesday at one?</b></div><p class="so-prof dica-aluno">Answer with the continuous: “On Monday at one I’m teaching.”</p></div></div>';
};

R.seu = function (c) {
  var e = S.seu, n = Math.min(e.n, SEU.length - 1), x = SEU[n];
  return cab(c) + trilha(SEU, e.n) + '<div class="mesa-c"><div class="lado-l">' + semana(1) + '<div class="aberta vd" style="background-image:url(' + img('porta') + ')"><span>NEXT WEEK</span></div></div><div class="lado-l"><div class="pergunta vd ja"><small>QUESTION ' + (n + 1) + ' OF 6</small><h2>' + x.q + '</h2></div>'
    + fala('se' + n, [x.ini], ['I’m …-ing', 'on …', 'at …', 'I’m not …-ing']) + mostra('se' + n, x.ex, 1) + '<p class="dica-aluno">Follow-up: ' + x.fup + '</p>'
    + (n < SEU.length - 1 ? '<div><button type="button" class="btn" data-a="se-prox">Next question</button></div>' : '<p class="aprova">Six questions, and every answer was already in a calendar.</p>') + '</div></div>';
};

R.fim = function (c) {
  var f = S.abre.formas, lembra = FORMAS.filter(function (x) { return f[x.k]; }).map(function (x) { return x.t; });
  return cab(c) + '<div class="fim">' + escritaFinal('fim', (S.txt || {}).fim || '', (S.salvo || {}).fim, 'On … I’m …\nOn … I’m …\nOn … I’m …\nI’m not … on …', 'Your week',
    ['On Monday I’m ', 'On Saturday I’m ', 'Tonight I’m ', 'I’m not ', ' with my '], ['YOUR WEEK, ARRANGED', lembra.length ? 'In scene I your teacher heard: ' + lembra.join(', ') + '. Now: I’m + -ing + the day.' : 'Three plans already arranged, one you’re not doing: I’m + -ing + the day.'])
    + '<div class="lado-fim">' + semana(1) + '<div class="grande vd"><span>I’<u>m working</u> on Saturday</span><span><u>Are</u> you free on Thursday?</span><span>OK, I’<u>ll</u> help · it <u>will</u> rain</span></div>'
    + mostra('fim', 'On Monday I’m starting a new course.<br>On Thursday I’m having lunch with my brother.<br>On Saturday I’m visiting my grandmother.<br>I’m not working on Sunday.', 1)
    + '<p class="hw"><a class="pilula" href="HW/" target="_blank" rel="noopener">Homework for the student →</a></p></div></div>';
};

TOQUES['ab-f'] = function (b, n, v) { S.abre.formas[v] = !S.abre.formas[v]; };
TOQUES.ag = function (b, n, v) { S.ag.esc = v; };
TOQUES['ag-prox'] = function () { S.ag = { n: S.ag.n + 1, esc: '' }; };
TOQUES.cv = function (b, n) {
  var e = S.cv, x = CONVITES[n], dono = quem(x.vaga); e.ult = n;
  if (dono) { e.recusou[n] = 1; e.msg = 'That slot is already taken: you’re ' + dono.fazendo + '. Read what’s in it.'; }
  else { e.aceito[x.vaga] = n; e.msg = 'Booked: “' + x.say + '”'; }
};
TOQUES['cv-zera'] = function () { S.cv = { aceito: {}, recusou: {}, ult: -1, msg: '' }; S.rec = { n: 0 }; };
TOQUES['rc-prox'] = function () { S.rec.n++; };
TOQUES.ou = function (b, n, v) { S.ou.esc[n] = v; };
TOQUES.wl = function (b, n) { S.wl.esc = n; };
TOQUES['wl-prox'] = function () { S.wl = { n: S.wl.n + 1, esc: -1 }; };
TOQUES['du-v'] = function (b, n, v) { S.du.vis[v] = 1; };
TOQUES.du = function (b, n, v) { S.du.esc = v; var p = v.split('-'); S.du.vis[v] = 1; };
TOQUES['se-prox'] = function () { S.seu.n++; };
