/* ============================================================
   HAVING MISSED THE TRAIN · THE 11:52 NIGHT TRAIN · LIVE CLASS 06/10/2026
   Main series B2 · orações de particípio: Having + particípio (antes);
   -ing (ao mesmo tempo / o motivo); Not + -ing (negativa); particípio
   sozinho (feito a ele). O sujeito vem logo depois da vírgula e é quem
   faz a primeira parte. Erros: Having miss · Walked into (voz) · Don't
   knowing · Leaving alone (para coisa) · Nora sitting…, she · o sujeito
   pendurado (Walking to the station, the rain started).
   O MUNDO (da aula velha): Nora Vane perde o das 9:40 e pega o noturno
   das 11:52; no compartimento 12, uma maleta marrom sozinha; às 2:10 a
   luz apaga por quarenta segundos e a maleta some; o relatório da
   condutora esconde o sujeito em cada linha. Sem áudio, sem vídeo.
   A CARA: o PAINEL DE PARTIDAS de plaquinhas que viram, e o RELATÓRIO
   COM TARJA: cada linha tem o sujeito coberto por uma tarja preta;
   quando o aluno devolve o sujeito, a tarja levanta e o nome ganha um
   carimbo na ficha dos quatro passageiros. Os seis planos furam o
   BILHETE da noite, um furo por horário.
   Fila: FILA-LIVE-386.md · 122.
   ============================================================ */
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'noite', est: 'o', min: 7, img: 'janela', rot: 'I · You and the Night', t: 'Before the train: you, the night and the things you miss.', p: 'One question at a time. Then your teacher answers too.' },
  { k: 'planos', est: 'o', min: 7, img: 'plataforma', rot: 'II · Six Shots', t: 'The night in six shots. Every shot punches the ticket.', p: 'Read the shot out loud like a movie script. Answer the question. Then join the two ideas in one sentence.' },
  { k: 'regra', est: 'f', min: 6, img: 'corredor', rot: 'III · The Rule', t: 'The clause has no subject. It borrows the one after the comma.', p: 'Read the four kinds. Then say each trap the right way before you tap it.' },
  { k: 'relatorio', est: 'f', min: 6, img: 'cabine', rot: 'IV · The Conductor’s Report', t: '3 AM. Every line of the report hides who did it.', p: 'Your teacher reads the line as the inspector. Put the real subject back after the comma. The black bar lifts.' },
  { k: 'inspetor', est: 'o', min: 7, img: 'plataforma', rot: 'V · The Inspector at Dawn', t: '6 AM. Kessel Station. You are Nora. Tell the night again.', p: 'Your teacher is the inspector. Answer from memory, with one clause. Then ask him back.' },
  { k: 'quiz', est: 'f', min: 6, img: 'janela', rot: 'VI · Quick Check', t: 'Six quick lines from the night train.', p: 'Say the whole sentence. Then tap.' },
  { k: 'bilhete', est: 'o', min: 7, extra: 1, img: 'maleta', rot: 'VII · Your Night Shots', t: 'Your real life, in short shots.', p: 'Print a ticket. Answer in one short, cinematic sentence.' },
  { k: 'fim', est: 'w', min: 6, img: 'capa', rot: 'VIII · Your Missed Train', t: 'What did you once miss that turned out to be lucky?', p: 'Write it like a thriller, in three short shots. It goes to your My notes.' }
];

var NOITE = [
  { q: 'Have you ever traveled at night: a bus, a train, a plane? Where were you going?', fup: 'Did you sleep?', st: ['I took a night … to …'], ex: 'I took a night bus to the beach once. I didn’t sleep at all.' },
  { q: 'What’s the worst thing you’ve ever missed: a flight, a bus, a meeting, a party?', fup: 'What happened next?', st: ['I missed …'], ex: 'I missed a flight to Chile. I was at the wrong gate.' },
  { q: 'When you travel alone, do you talk to strangers, or do you put your headphones on?', fup: 'Why?', st: ['Headphones, always.', 'I talk to …'], ex: 'Headphones, always. But I watch everybody.' },
  { q: 'Do you like thrillers? Tell me about one you couldn’t stop watching or reading.', fup: 'How did it end?', st: ['I watched … in one …'], ex: 'I watched a whole series in one weekend. I couldn’t stop.' }
];

var PLANOS = [
  { hora: '11:40 PM', lugar: 'EXT. HOLLIN STATION', cena: 'Rain. An empty platform. Nora Vane missed the 9:40. She waited two hours in the station café. At 11:52, the night train came in. She got on.', q: 'Why is Nora on the night train, and not at home?', ops: ['Having missed the 9:40, Nora got on the night train.', 'Having miss the 9:40, Nora got on the night train.', 'Having missed the 9:40, the night train took Nora.'], por: ['', 'Having + past participle: missed.', 'The train didn’t miss anything. Nora did.'] },
  { hora: '12:05 AM', lugar: 'INT. CARRIAGE 7', cena: 'The conductor, Ms. Ortiz, checked the ticket. Blue uniform. Wet shoulders. No smile. Nora walked into compartment 12. On the seat, a brown briefcase. Nobody else.', q: 'What is strange about compartment 12?', ops: ['Walking into compartment 12, Nora saw a brown briefcase.', 'Walking into compartment 12, a brown briefcase was on the seat.', 'Walked into compartment 12, Nora saw a brown briefcase.'], por: ['', 'The briefcase wasn’t walking.', 'Nora did the walking: -ing.'] },
  { hora: '12:40 AM', lugar: 'INT. COMPARTMENT 12', cena: 'A knock. A man in a gray coat: Mr. Crane. He didn’t know the way to the dining car. He asked Nora. Twenty minutes later, he asked again.', q: 'Why do you think he asked twice?', ops: ['Not knowing the way, Mr. Crane asked Nora twice.', 'Don’t knowing the way, Mr. Crane asked Nora twice.', 'Not knowing the way, Nora heard the question twice.'], por: ['', 'The negative is NOT + -ing.', 'Nora knew the way. Who didn’t?'] },
  { hora: '1:30 AM', lugar: 'INT. CORRIDOR', cena: 'Nora couldn’t sleep. She stood in the corridor. Compartment 11: Theo, a student, big headphones. Compartment 13: Mrs. Blume, wide awake, a gray cat on her lap.', q: 'Who is in carriage 7 tonight? Say every name.', ops: ['Standing in the corridor, Nora looked into every compartment.', 'Standing in the corridor, every compartment was open.', 'Stood in the corridor, Nora looked into every compartment.'], por: ['', 'The compartments weren’t standing.', 'Nora did the standing: -ing.'] },
  { hora: '2:10 AM', lugar: 'EXT. A SMALL STATION', cena: 'The train stopped. A station with no name. Then the lights went out. Forty seconds of dark. Only the rain on the roof.', q: 'What can you hear on a train in the dark?', ops: ['Sitting in the dark, Nora listened to the rain.', 'Sitting in the dark, the rain got louder.', 'Nora sitting in the dark, she listened to the rain.'], por: ['', 'The rain wasn’t sitting.', 'One subject only, after the comma.'] },
  { hora: '2:11 AM', lugar: 'INT. COMPARTMENT 12', cena: 'The lights came back. The seat was empty. The briefcase was gone. For two hours, nobody touched it. Now it wasn’t there.', q: 'Who knew the briefcase was there? Say every name.', ops: ['Left alone for two hours, the briefcase was an easy target.', 'Leaving alone for two hours, the briefcase was an easy target.', 'Left alone for two hours, somebody took the briefcase.'], por: ['', 'Something was done TO it: left.', 'Somebody wasn’t left alone. The briefcase was.'] }
];

var TIPOS = [['SAME TIME', 'Walking into the station, I saw the train.'], ['FIRST, THEN', 'Having missed the train, she took a taxi.'], ['NOT · THE REASON', 'Not knowing the way, he asked twice.'], ['DONE TO IT', 'Left alone, the bag was an easy target.']];
var TRAPS = [
  ['WHO IS WALKING?', 'Walking to the station, the rain started.', 'Walking to the station, I got caught in the rain.', 'The rain wasn’t walking.'],
  ['FIRST, THEN', 'Having miss the train, she waited.', 'Having missed the train, she waited.', 'having + past participle'],
  ['NOT FIRST', 'Don’t knowing the way, he asked.', 'Not knowing the way, he asked.', 'not + -ing'],
  ['DONE TO IT', 'Leaving alone, the bag was an easy target.', 'Left alone, the bag was an easy target.', 'the bag didn’t leave anybody']
];

var SUSP = [['MS. ORTIZ', 'the conductor · blue uniform'], ['MR. CRANE', 'gray coat · compartment 14'], ['THEO', 'student · compartment 11'], ['MRS. BLUME', 'a gray cat · compartment 13']];
var REL = [
  { a: 'Walking down the corridor at 1:30 AM,', tarja: 'the briefcase was still on the seat.', perg: 'Who was walking down the corridor?', quem: 0, ops: ['Walking down the corridor, Ms. Ortiz saw the briefcase.', 'Walking down the corridor, the briefcase was still there.', 'Walked down the corridor, Ms. Ortiz saw the briefcase.'] },
  { a: 'Not knowing the way,', tarja: 'my help was needed by Mr. Crane.', perg: 'Who didn’t know the way?', quem: 1, ops: ['Not knowing the way, Mr. Crane asked for help twice.', 'Don’t knowing the way, Mr. Crane asked for help.', 'Not knowing the way, Ms. Ortiz helped Mr. Crane.'] },
  { a: 'Listening to loud music,', tarja: 'nothing was heard in compartment 11.', perg: 'Who was listening to loud music?', quem: 2, ops: ['Listening to loud music, Theo heard nothing.', 'Listening to loud music, nothing was heard.', 'Theo listening to loud music, he heard nothing.'] },
  { a: 'Having boarded at Hollin with a cat,', tarja: 'sleep was impossible.', perg: 'Who boarded at Hollin with a cat?', quem: 3, ops: ['Having boarded at Hollin, Mrs. Blume stayed awake all night.', 'Having boarded at Hollin, sleep was impossible.', 'Having board at Hollin, Mrs. Blume stayed awake.'] },
  { a: 'Having the only key to the light panel,', tarja: 'the lights went out at 2:10.', perg: 'Who has the only key to the light panel on a train?', quem: 0, ops: ['Having the only key, Ms. Ortiz could turn off the lights.', 'Having the only key, the lights went out at 2:10.', 'Having the only key, Mr. Crane could turn off the lights.'] },
  { a: 'Left alone in the dark,', tarja: 'somebody took the briefcase at 2:10.', perg: 'What was left alone in the dark? Not a person.', quem: -1, ops: ['Left alone in the dark, the briefcase disappeared.', 'Left alone in the dark, somebody took the briefcase.', 'Leaving alone in the dark, the briefcase disappeared.'] },
  { a: 'Looking out of the window at 2:11,', tarja: 'a blue uniform was on the platform.', perg: 'Who was awake and looking out of the window?', quem: 3, ops: ['Looking out of the window, Mrs. Blume saw a blue uniform.', 'Looking out of the window, a blue uniform was on the platform.', 'Looked out of the window, Mrs. Blume saw a blue uniform.'] },
  { a: 'Asked about the uniform at dawn,', tarja: 'the rain was too heavy to see anything.', perg: 'Who was asked about the blue uniform at dawn?', quem: 0, ops: ['Asked about the uniform, Ms. Ortiz said the rain was too heavy.', 'Asked about the uniform, the rain was too heavy.', 'Asking about the uniform, Ms. Ortiz said it was raining.'] }
];

var TROCAS = [
  { ela: 'Ms. Vane, why were you on the night train, and not on the 9:40?', st: ['Having missed the 9:40, I …'], voce: 'Having read the report, who do you think did it?', resp: 'Having read it twice, I suspect the person who wrote it.' },
  { ela: 'What did you see when you walked into compartment 12?', st: ['Walking into compartment 12, I saw …'], voce: 'Is Mr. Crane in trouble?', resp: 'No. Not knowing the train, he left his briefcase in the wrong compartment. That’s all.' },
  { ela: 'And at 2:10, when the lights went out? What did you hear?', st: ['Sitting in the dark, I heard …'], voce: 'Where is the briefcase now?', resp: 'Found under a bench on that little platform, wrapped in a blue coat.' },
  { ela: 'Last question. Would you take the night train again?', st: ['Having seen all this, I …'], voce: 'Having seen all this, would you?', resp: 'Every night. Nothing ever happens on the day train.' }
];

var QUIZ = [
  { a: '', b: ' the 9:40, Nora took the night train.', ops: ['Having missed', 'Having miss', 'Missed'], w: 'First this, then that: <b>having + past participle</b>.' },
  { a: 'Not ', b: ' the way, Mr. Crane asked twice.', ops: ['knowing', 'know', 'known'], w: 'The negative: <b>not + -ing</b>.' },
  { a: '', b: ' alone for two hours, the briefcase was an easy target.', ops: ['Left', 'Leaving', 'Having leave'], w: 'Done TO the briefcase: <b>left</b>.' },
  { a: 'Walking into the station, ', b: '.', ops: ['I saw the train leave', 'the train left', 'the rain started'], w: 'Who was walking? <b>I</b>, right after the comma.' },
  { a: '', b: ' the report, the inspector smiled.', ops: ['Having read', 'Having readed', 'Having reading'], w: '<b>read</b> is irregular: having read.' },
  { a: 'Looking out of the window, ', b: '.', ops: ['Mrs. Blume saw the uniform', 'the uniform was seen', 'the platform was wet'], w: 'The platform wasn’t looking. <b>Mrs. Blume</b> was.' }
];

var FATIAS = [
  { k: 'THE MISSED ONE', q: 'Tell me about a bus, a train or a flight you missed. What did you do next?', h: 'Having missed the last bus, I walked home in the rain.' },
  { k: 'NO WORDS', q: 'Think of a time you didn’t know what to say. What did you do?', h: 'Not knowing what to say, I just smiled.' },
  { k: 'WALKING IN', q: 'Walking into your home tonight, what’s the first thing you’ll see?', h: 'Walking into my home, I’ll see my dog at the door.' },
  { k: 'AFTER WORK', q: 'Having finished work today, what’s the first thing you’ll do?', h: 'Having finished work, I’ll make a big coffee.' },
  { k: 'LEFT ALONE', q: 'What happens to your plants, your pet or your fridge when you travel?', h: 'Left alone for a week, my plants always die.' },
  { k: 'THE WINDOW SEAT', q: 'Do you sleep on buses, trains or planes? What happens?', h: 'Sitting by the window, I fall asleep in minutes.' },
  { k: 'A STRANGER', q: 'Did a stranger ever help you on a trip?', h: 'Not speaking the language, I asked a stranger for help.' },
  { k: 'A BIG STEP', q: 'What did you do after you finished school?', h: 'Having finished school, I started working at a bank.' }
];
var BILHETES = ordem(FATIAS, 11);

var S = { i: 0, faixa: 1, fala: {}, resp: {}, armas: {},
  nt: { n: 0, foi: {} }, pl: { n: 0, esc: -1 }, rl: { n: 0, esc: -1 }, ip: { n: 0, foi: {} }, qz: { n: 0, esc: -1 }, bl: { n: 0 } };

/* o painel de partidas: plaquinhas que viram */
function painel(linhas) {
  return '<div class="nt-painel"><div class="nt-painel-cab"><span>DEPARTURES</span><span>HOLLIN</span></div>' + linhas.map(function (l, i) {
    return '<div class="nt-linha-p' + (l[2] ? ' ' + l[2] : '') + '">' + [l[0], l[1]].map(function (t, j) { return '<span class="nt-placas">' + t.split('').map(function (ch, k) { return '<i style="animation-delay:' + ((i * 6 + k) * 22) + 'ms">' + (ch === ' ' ? '&nbsp;' : ch) + '</i>'; }).join('') + '</span>'; }).join('') + '</div>';
  }).join('') + '</div>';
}
/* o bilhete da noite, um furo por plano */
function bilhete(n) {
  return '<div class="nt-bilhete"><div class="nt-bil-cab"><b>NIGHT TRAIN · 11:52</b><small>CARRIAGE 7 · COMPARTMENT 12 · NORA VANE</small></div><div class="nt-furos">' + PLANOS.map(function (p, i) {
    return '<span class="nt-furo' + (i < n ? ' furado' : '') + (i === n ? ' agora' : '') + '"><i></i><small>' + p.hora + '</small></span>';
  }).join('') + '</div></div>';
}
/* a ficha dos quatro passageiros, com os carimbos */
function ficha(n) {
  var c = [0, 0, 0, 0];
  for (var i = 0; i < n; i++) if (REL[i].quem >= 0) c[REL[i].quem]++;
  return '<div class="nt-ficha">' + SUSP.map(function (s, i) {
    return '<div class="nt-susp vd' + (c[i] ? ' marcado' : '') + (n >= REL.length && i === 0 ? ' alvo' : '') + '"><b>' + s[0] + '</b><small>' + s[1] + '</small><span class="nt-carimbos">' + (c[i] ? new Array(c[i] + 1).join('<i></i>') : '') + '</span></div>';
  }).join('') + '</div>';
}
function tres(acao, ops, esc, semente, classe) {
  return '<div class="nt-ops' + (classe ? ' ' + classe : '') + '">' + ordem(ops.map(function (o, i) { return [o, i]; }), semente).map(function (o) { return '<button type="button" class="versao' + (esc === o[1] ? (o[1] === 0 ? ' certo' : ' errado') : '') + '" data-a="' + acao + '" data-n="' + o[1] + '">' + o[0] + '</button>'; }).join('') + '</div>';
}

var R = {};
R.capa = function () {
  return '<div class="capa"><div><span class="kick">MAIN SERIES · B2 · PARTICIPLE CLAUSES</span><h1>Having Missed <b>the Train</b></h1>'
    + '<p class="sub"><b>Having missed the 9:40, she took the night train.</b> In compartment 12, a briefcase, left alone. At 2:10 the lights go out. The report hides who did it.</p>'
    + '<div class="chipsx"><span class="pilula">having missed</span><span class="pilula">not knowing</span><span class="pilula">walking into</span><span class="pilula">left alone</span><span class="pilula">Live Class · W·O·L·F</span></div>'
    + '<button type="button" class="btn cheio" data-a="ir" data-n="1">Board the train</button>' + faixaLive() + '</div>'
    + '<div class="capa-r">' + painel([['9:40 KESSEL', 'DEPARTED', 'foi'], ['11:52 KESSEL', 'NIGHT · 7', 'este'], ['2:10 ??????', 'NO STOP', 'foi']]) + '</div></div>';
};

R.noite = function (c) {
  return sequencia(c, NOITE, S.nt, 'nt', '11:40 PM. A station in the rain. A woman has just missed her train. The next one leaves at 11:52.')
    + '<p class="so-prof dica-aluno" style="text-align:center">Long stories with “after I … when I …” are fine. Don’t correct yet: scene II will shorten them.</p>';
};

R.planos = function (c) {
  var e = S.pl, n = e.n;
  if (n >= PLANOS.length) return cab(c) + bilhete(6) + '<div class="foco"><div class="pergunta vd"><small>SIX SHOTS</small><h2>A missing briefcase, four people in carriage 7, and a conductor writing a report right now. How does English say who did what?</h2></div></div>';
  var x = PLANOS[n], ok = e.esc === 0;
  return cab(c) + bilhete(n + (ok ? 1 : 0)) + '<div class="mesa-c"><div class="lado-l"><div class="nt-roteiro vd"><small>' + x.lugar + ' · ' + x.hora + '</small><p>' + x.cena + '</p></div>'
    + '<div class="pergunta vd ja"><small>ASK</small><h2>' + x.q + '</h2></div></div>'
    + '<div class="lado-l"><p class="nt-rot">JOIN THE TWO IDEAS · ONE SENTENCE</p>' + tres('pl', x.ops, e.esc, n + 3)
    + (ok ? '<div class="nt-linha-ok"><p class="aprova">Read it like a trailer.</p><button type="button" class="btn" data-a="pl-prox">Next shot</button></div>' : e.esc > 0 ? '<p class="recusa">' + x.por[e.esc] + '</p>' : '<p class="dica-aluno">“After she missed …” is fine out loud. Now the short one.</p>') + '</div></div>';
};

R.regra = function (c) {
  return cab(c) + '<div class="nt-tipos">' + TIPOS.map(function (t) { return '<div class="nt-tipo vd"><small>' + t[0] + '</small><p>' + t[1] + '</p></div>'; }).join('') + '</div>'
    + '<p class="nt-lei">The subject goes <b>right after the comma</b>, and it must be the one doing the first part.</p>' + armas(TRAPS);
};

R.relatorio = function (c) {
  var e = S.rl, n = e.n, fim = n >= REL.length;
  var doc = '<div class="nt-doc"><div class="nt-doc-cab"><b>INCIDENT REPORT · CARRIAGE 7</b><small>WRITTEN BY THE CONDUCTOR · 3:00 AM</small></div>' + REL.map(function (r, i) {
    var feito = i < n || (i === n && e.esc === 0);
    return '<p class="nt-rl' + (i === n && !fim ? ' agora' : '') + (feito ? ' feito' : '') + '"><span class="nt-num">' + (i + 1) + '</span><span>' + (feito ? '<span class="nt-certa">' + r.ops[0] + '</span>' : r.a + ' <i class="nt-tarja">' + r.tarja + '</i>') + '</span></p>';
  }).join('') + '</div>';
  if (fim) return cab(c) + '<div class="mesa-c"><div class="lado-l">' + doc + '</div><div class="lado-l">' + ficha(n) + '<div class="balao vd ok-b"><small>EIGHT LINES FIXED</small><p>Put the subject back, and one name keeps coming: <u>Ms. Ortiz</u>.</p></div><p class="aprova">Her report hid the subject. The grammar found it. Now: who took it? Prove it with two lines.</p></div></div>';
  var x = REL[n], ok = e.esc === 0;
  return cab(c) + '<div class="mesa-c"><div class="lado-l">' + doc + '</div><div class="lado-l">' + ficha(n + (ok ? 1 : 0))
    + '<div class="pergunta vd ja"><small>THE INSPECTOR ASKS</small><h2>' + x.perg + '</h2></div>' + tres('rl', x.ops, e.esc, n + 5)
    + (ok ? '<div class="nt-linha-ok"><p class="aprova">The bar lifts. Say it again, slowly.</p><button type="button" class="btn" data-a="rl-prox">Next line</button></div>' : e.esc > 0 ? '<p class="recusa">Who does the first part? That one comes right after the comma.</p>' : '') + '</div></div>';
};

R.inspetor = function (c) {
  var e = S.ip, n = e.n, fim = n >= TROCAS.length;
  if (fim) return cab(c) + trilha(TROCAS, n) + '<div class="foco"><div class="pergunta vd"><small>DAWN</small><h2>The inspector closes his notebook. One quick check before the train leaves again.</h2></div></div>';
  var x = TROCAS[n], aberto = S.resp['ip' + n];
  return cab(c) + trilha(TROCAS, n) + '<div class="mesa-c"><div class="lado-l"><div class="nt-insp vd"><small>INSPECTOR HALE · KESSEL STATION</small><p>“' + x.ela + '”</p></div>' + fala('ip' + n, x.st, ['the 9:40', 'compartment 12', 'the dark', 'the rain']) + '</div>'
    + '<div class="lado-l"><div class="nt-insp eu vd"><small>NORA ASKS BACK</small><p>“' + x.voce + '”</p></div>' + (aberto ? '<div class="balao vd"><small>THE INSPECTOR</small><p>' + x.resp + '</p></div><div><button type="button" class="btn" data-a="ip-prox">Next question</button></div>' : '<div class="resp-btn"><button type="button" class="pilula" data-a="resp" data-c="ip' + n + '">The inspector answers</button></div>') + '</div></div>';
};

R.quiz = function (c) {
  var e = S.qz, n = e.n, fim = n >= QUIZ.length;
  if (fim) return cab(c) + trilha(QUIZ, n) + '<div class="foco"><div class="pergunta vd"><small>SIX OUT OF SIX</small><h2>Now the night is yours.</h2></div></div>';
  var x = QUIZ[n], ok = e.esc === 0;
  return cab(c) + trilha(QUIZ, n) + '<div class="foco"><div class="balao vd"><p>' + x.a + '<u>' + (ok ? x.ops[0] : '_____') + '</u>' + x.b + '</p></div>' + tres('qz', x.ops, e.esc, n + 2, 'linha')
    + (ok ? '<div class="nt-linha-ok centro"><p class="aprova">' + x.w + ' Say the whole sentence.</p><button type="button" class="btn" data-a="qz-prox">Next</button></div>' : e.esc > 0 ? '<p class="recusa" style="text-align:center">Who does the first part? Did it happen first? Was it done to it?</p>' : '') + '</div>';
};

R.bilhete = function (c) {
  var n = S.bl.n, x = n ? BILHETES[(n - 1) % BILHETES.length] : null;
  return cab(c) + '<div class="mesa-c"><div class="lado-l"><div class="nt-maquina vd"><small>TICKET MACHINE · CARRIAGE 7</small><b>' + Math.min(n, 5) + ' / 5 TICKETS</b><button type="button" class="btn cheio" data-a="bl"' + (n >= 5 ? ' disabled' : '') + '>' + (n >= 5 ? 'Five shots of your life' : 'Print a ticket') + '</button></div>'
    + '<div class="nt-feitos">' + BILHETES.slice(0, Math.min(n, 5)).map(function (f, i) { return '<span class="pilula' + (i === n - 1 ? ' on' : '') + '">' + f.k + '</span>'; }).join('') + '</div></div>'
    + '<div class="lado-l">' + (x ? '<div class="nt-tique vd"><small>' + x.k + '</small><p>' + x.q + '</p></div>' + mostra('bl' + n, x.h, 1) : '<div class="nt-tique vazio vd"><small>NO TICKET YET</small><p>Having done · not knowing · -ing · left</p></div>') + '</div></div>';
};

R.fim = function (c) {
  return cab(c) + '<div class="fim">' + escritaFinal('fim', (S.txt || {}).fim || '', (S.salvo || {}).fim, 'Having missed …, I …\nNot knowing …, I …\nWalking into …, I saw …', 'Your missed train',
    ['Having missed', 'Not knowing', 'Walking into', 'Left alone', 'Having seen'], ['THREE SHORT SHOTS', 'What did you miss, what did you do next, and what did you see?'])
    + '<div class="lado-fim">' + painel([['11:52 KESSEL', 'ARRIVED', 'este']])
    + '<div class="grande vd"><span><u>Having missed</u> · this happened first</span><span><u>Not knowing</u> · not goes first</span><span><u>Walking into</u> · at the same time</span><span><u>Left alone</u> · done to it</span><span>not <s>Walking to the station, the rain started</s></span></div>'
    + mostra('fim', 'Having missed the bus that day, I walked to work.<br>Not knowing the way, I asked a woman at a café.<br>Walking into the office an hour late, I met my best friend.', 1)
    + '<p class="hw"><a class="pilula" href="HW/" target="_blank" rel="noopener">Homework for the student →</a></p></div></div>';
};

TOQUES.pl = function (b, n) { S.pl.esc = n; };
TOQUES['pl-prox'] = function () { S.pl = { n: S.pl.n + 1, esc: -1 }; };
TOQUES.rl = function (b, n) { S.rl.esc = n; };
TOQUES['rl-prox'] = function () { S.rl = { n: S.rl.n + 1, esc: -1 }; };
TOQUES['ip-prox'] = function () { S.ip.n++; };
TOQUES.qz = function (b, n) { S.qz.esc = n; };
TOQUES['qz-prox'] = function () { S.qz = { n: S.qz.n + 1, esc: -1 }; };
TOQUES.bl = function () { if (S.bl.n < 5) S.bl.n++; };
