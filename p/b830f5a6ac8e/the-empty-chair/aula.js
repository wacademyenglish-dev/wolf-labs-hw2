/* ============================================================
   THE EMPTY CHAIR · THE CALENDAR · LIVE CLASS  06/10/2026
   Main series B2 · should have / could have / shouldn't have / couldn't
   have + particípio. Porta aberta (agora): should + verbo. Porta fechada
   (passado): should have + particípio. Culpa (should have: alguém
   contava com você) × chance (could have) × impossível (couldn't have).
   Erros: I should call her (sobre abril), should have went, should of,
   could have para dever, couldn't have para o que só era difícil.
   O MUNDO (da aula velha): Daniel e Maya; ela pediu uma conversa em
   abril, ele adiou três vezes, em julho ela pediu demissão; a técnica
   da cadeira vazia (o aluno troca de cadeira de verdade). Os cinco
   áudios (c1–c4, e1) mantidos e conferidos no faster-whisper em 06/10:
   batem.
   A CARA (nova; a velha era a cadeira no linho claro + a balança): o
   CALENDÁRIO DE MESA de abril a julho — a reunião carimbada MOVED três
   vezes, julho com NOTICE; a PORTA que fecha e leva o conselho para o
   passado; o ARQUIVO de três gavetas (DUTY · CHANCE · IMPOSSIBLE) onde
   cada arrependimento cai.
   Fila: FILA-LIVE-386.md · 132. Pasta piloto-chair (conferida: não existia).
   ============================================================ */
var L = [
  { k: 'capa', est: null, img: 'cadeira' },
  { k: 'troca', est: 'o', min: 7, img: 'cadeira', rot: 'I · The Chair Swap', t: 'Think of someone you admire. Put them in your chair, last week.', p: 'Tap a seat. Say what they would have done. Then say what you didn’t do.' },
  { k: 'gx', est: 'f', min: 4, img: 'espera', rot: 'II · Open or Closed?', t: 'Where does each sentence live in time?', p: 'Tap a sentence, then its place on the line. Notice the verbs. Then say three lines about you.' },
  { k: 'porta', est: 'f', min: 6, img: 'sala', rot: 'III · The Door Closes', t: 'While the door is open, it’s advice. When it closes, it’s the past.', p: 'Say the open sentence. Close the door. Say it again.' },
  { k: 'gavetas', est: 'f', min: 6, img: 'sala', rot: 'IV · Three Drawers', t: 'Every regret goes in a drawer: DUTY, CHANCE or IMPOSSIBLE.', p: 'Read the fact. Was anybody counting on you? Tap the drawer. Then say the full sentence.' },
  { k: 'vozes', est: 'l', min: 7, img: 'sala', rot: 'V · Four Confessions', t: 'A leadership group. Four people, each walking towards a confession.', p: 'Play a voice. Say the confession for them. Then choose the drawer.' },
  { k: 'fez', est: 'f', min: 6, img: 'espera', rot: 'VI · Did It or Didn’t?', t: 'Two kinds of regret: what you didn’t do, and what you did.', p: 'Read it. Did it happen? Tap. Then say the regret.' },
  { k: 'rascunho', est: 'o', min: 7, img: 'carta', rot: 'VII · The Draft, Never Sent', t: 'In Daniel’s drafts folder: an email to Maya. Written in July. Never sent.', p: 'Every line is crossed out. Choose it right, and the line comes back. Then decide: send or keep?' },
  { k: 'cadeira', est: 'o', min: 7, extra: 1, img: 'cadeira', rot: 'VIII · Change Chairs', t: 'Put an empty chair in front of you. Maya is sitting in it.', p: 'First you are Daniel, talking to her. Then you stand up, change chairs, and answer as Maya.' },
  { k: 'tribunal', est: 'o', min: 7, extra: 1, img: 'trem', rot: 'IX · The Tribunal', t: 'Three short cases. You are the judge.', p: 'Read the case. Put every person in a drawer. Say their sentence. Then answer the last question.' },
  { k: 'vida', est: 'o', min: 7, extra: 1, img: 'cadeira', rot: 'X · Your Own Chair', t: 'Now you. Small regrets only: work, study, decisions.', p: 'Four questions. Your teacher asks; you answer.' },
  { k: 'fim', est: 'w', min: 6, img: 'cadeira', rot: 'XI · Your Chair, Again', t: 'Back to the first scene. Here is how you said it.', p: 'Write it again, with the door closed. It goes to your My notes.' }
];

var TR = {
  'c1.mp3': 'I let that project run for two more quarters after everybody could see it had stopped working. It was comfortable, and stopping things is loud.',
  'c2.mp3': 'She asked me for a conversation in April, and I moved it three times. In July, she gave her notice, and the conversation never happened.',
  'c3.mp3': 'My old boss taught me everything I use every day. I have had his number in my phone for six years, and I have never once used it.',
  'c4.mp3': 'I made excuses for a partner who missed three deadlines. I told the team he was busy. He was not busy.',
  'e1.mp3': 'She asked me once, in the kitchen, and I said we would talk about it later. I think she asked because she had already decided.'
};

var DRAW = { should: ['DUTY', 'should have', 'it was your job'], could: ['CHANCE', 'could have', 'it was open'], couldnt: ['IMPOSSIBLE', 'couldn’t have', 'no way'], shouldnt: ['WRONG', 'shouldn’t have', 'you did it'] };

var ASSENTOS = [
  { k: 'AT WORK OR SCHOOL', q: 'Your admired person had your job or your classes last week. What would they have done differently?', fup: 'And you? What is one thing you didn’t do last week?', st: ['She would …', 'He would have …'], ex: 'She would have asked for help on Monday.' },
  { k: 'AS A LEARNER', q: 'They were learning English in your place last month. What would they have done?', fup: 'And what didn’t you do this month?', st: ['They would …'], ex: 'He would have watched a series every night.' },
  { k: 'WITH A FRIEND', q: 'They had your friends last month. Who would they have called?', fup: 'Who didn’t you call?', st: ['She would have called …'], ex: 'She would have called my old roommate.' },
  { k: 'IN A MEETING', q: 'They were in your last meeting or class. What would they have said?', fup: 'What didn’t you say?', st: ['He would have said …'], ex: 'He would have said the plan was too fast.' }
];
var OUVIDOS = [['presente', 'SHOULD / WOULD + VERB'], ['passado', 'SHOULD / WOULD HAVE + PARTICIPLE'], ['outro', 'SOMETHING ELSE']];

var PORTA = [
  { aberta: 'The meeting is tomorrow.', ab: 'I should prepare.', fechada: 'The meeting was yesterday.', fe: 'I should have prepared.' },
  { aberta: 'She is asking for a conversation.', ab: 'I could talk to her today.', fechada: 'She asked in April.', fe: 'I could have talked to her in April.' },
  { aberta: 'The train leaves at 4 AM.', ab: 'You could take the train.', fechada: 'The train left at 4 AM.', fe: 'You could have taken the train.' },
  { aberta: 'The report goes out tonight.', ab: 'He should check the numbers.', fechada: 'The report went out last night.', fe: 'He should have checked the numbers.' },
  { aberta: 'The offer is open until Friday.', ab: 'We should say yes.', fechada: 'The offer closed on Friday.', fe: 'We should have said yes.' }
];

var GAVETAS = [
  { fato: 'The report went out with my name on it and a wrong number inside.', p: 'should', ok: 'I should have checked the numbers.' },
  { fato: 'There was a free place on the team trip, and I didn’t put my name down.', p: 'could', ok: 'I could have gone on the trip.' },
  { fato: 'The storm closed the airport. My flight was canceled.', p: 'couldnt', ok: 'I couldn’t have gotten there on time.' },
  { fato: 'Maya asked for a conversation three times. Daniel moved it every time.', p: 'should', ok: 'He should have talked to her.' },
  { fato: 'They offered a free course in March and again in June. I was busy.', p: 'could', ok: 'I could have taken the course.' },
  { fato: 'The client changed the plan the night before. Nobody told us.', p: 'couldnt', ok: 'We couldn’t have known.' },
  { fato: 'I watched my colleague take the blame in the meeting and said nothing.', p: 'should', ok: 'I should have said something.' }
];
var NAO = { should: 'Was anybody counting on you? Here nobody was, or it was impossible.', could: 'Somebody was counting on you here, or it was never possible.', couldnt: 'It was possible. Hard, maybe, but possible.', shouldnt: 'Did it happen? This drawer is for things you did.' };

var VOZES = [
  { quem: 'A TEAM LEAD', au: 'c1.mp3', p: 'should', q: 'What did this person let happen?', ok: 'I should have stopped the project two quarters ago.', nota: '“It was comfortable”: that’s the blame.' },
  { quem: 'DANIEL, THE MANAGER', au: 'c2.mp3', p: 'should', q: 'What did he move three times?', ok: 'I should have had that conversation in April.', nota: 'Three times. The number turns a miss into a duty.' },
  { quem: 'SOMEONE ON A SUNDAY', au: 'c3.mp3', p: 'could', alt: 'should', q: 'What has this person never done in six years?', ok: 'I could have called my old boss.', nota: 'Nobody was waiting for that call. Or were they? SHOULD HAVE works too: ask which one they would say.' },
  { quem: 'A FOUNDER', au: 'c4.mp3', p: 'shouldnt', q: 'What did this person tell the team?', ok: 'I shouldn’t have made excuses for him.', nota: 'This person DID something wrong: shouldn’t have.' }
];

var FEZ = [
  { fato: 'I sent the email when I was angry.', fez: 1, ok: 'I shouldn’t have sent it.' },
  { fato: 'I didn’t read the contract.', fez: 0, ok: 'I should have read it.' },
  { fato: 'I told everyone about her promotion before she did.', fez: 1, ok: 'I shouldn’t have told them.' },
  { fato: 'I didn’t ask for help.', fez: 0, ok: 'I should have asked for help.' },
  { fato: 'Daniel said “later” in the kitchen.', fez: 1, ok: 'He shouldn’t have said “later”.' }
];

var RASCUNHO = [
  { riscada: 'I should talk to you in April.', ops: ['I should have talked to you in April.', 'I should talked to you in April.', 'I should have talk to you in April.'] },
  { riscada: 'I could not move our meeting three times.', ops: ['I shouldn’t have moved our meeting three times.', 'I couldn’t have moved our meeting three times.', 'I shouldn’t moved our meeting three times.'] },
  { riscada: 'In the kitchen, I can ask what was wrong.', ops: ['In the kitchen, I could have asked what was wrong.', 'In the kitchen, I could asked what was wrong.', 'In the kitchen, I should can ask what was wrong.'] },
  { riscada: 'I didn’t know you had already decided. I can’t know.', ops: ['I couldn’t have known you had already decided.', 'I couldn’t have knew you had already decided.', 'I shouldn’t have known you had already decided.'] },
  { riscada: 'You should tell me earlier. Maybe.', ops: ['Maybe you could have told me earlier, too.', 'Maybe you could have tell me earlier, too.', 'Maybe you should told me earlier, too.'] }
];

var LADOS = [
  { k: 'DANIEL', diz: 'You are Daniel. Talk to Maya: say “you”, not “she”.', qs: [['Tell her what you should have done in April.', 'Maya, I should have …'], ['Tell her what you could have asked in the kitchen.', 'That day in the kitchen, I could have …'], ['Tell her one thing you couldn’t have known.', 'I couldn’t have known …']] },
  { k: 'MAYA', diz: 'Now you are Maya. Answer Daniel.', qs: [['Tell Daniel what he shouldn’t have done.', 'Daniel, you shouldn’t have …'], ['Tell him what you could have done differently.', 'I could have …'], ['Tell him why you couldn’t have stayed, or why you could have.', 'I couldn’t have stayed because …']] }
];

var CASOS = [
  { k: 'THE MISSED FLIGHT', txt: 'Ana had a 6 AM flight. Her brother promised to drive her, but he overslept. Ana knew there was a train at 4 AM, and she stayed in bed waiting for him.', papeis: [['HER BROTHER', 'should', 'He should have set an alarm.'], ['ANA', 'could', 'She could have taken the train.']], q: 'Who pays for the new ticket?' },
  { k: 'THE LOST CLIENT', txt: 'A client emailed Tom three times while he was on vacation. His auto-reply was off. His colleague Lia saw the emails, but she thought it wasn’t her job. The client left.', papeis: [['TOM', 'should', 'He should have turned on his auto-reply.'], ['LIA', 'could', 'She could have answered the client.']], q: 'Should the company say anything to Lia?' },
  { k: 'THE SMOKE', txt: 'Sam left a pan on the stove when his phone rang. His roommate smelled smoke but kept watching TV. The smoke alarm had no battery: changing it was the landlord’s job, and nobody had told Sam.', papeis: [['THE LANDLORD', 'should', 'The landlord should have changed the battery.'], ['THE ROOMMATE', 'could', 'The roommate could have checked the kitchen.'], ['SAM', 'couldnt', 'Sam couldn’t have known the alarm was dead.']], q: 'And Sam: did he do anything wrong? Use shouldn’t have.' }
];

var VIDA = [
  { q: 'What is something you could have done last year, but didn’t?', fup: 'Is the door still open?', st: ['I could have …'], ex: 'I could have taken a course in design.' },
  { q: 'Is there a conversation you should have had at work or school?', fup: 'What would you say now?', st: ['I should have told …'], ex: 'I should have told my boss I was tired.' },
  { q: 'What is a decision you couldn’t have made differently?', fup: 'Why not?', st: ['I couldn’t have …'], ex: 'I couldn’t have stayed in that city. There was no work.' },
  { q: 'Your turn. Ask your teacher: what should you have done at my age?', fup: 'Now ask what they could have done better this week.', st: ['What should you have done …?'], ex: 'What should you have done at my age?' }
];

var S = { i: 0, faixa: 1, fala: {}, resp: {}, armas: {},
  tc: { sel: -1, foi: {}, conta: {} }, pt: { n: 0, fechou: 0 }, gv: { n: 0, esc: '' }, vz: { n: 0, esc: '' }, fz: {}, rs: { n: 0, esc: -1, envia: -1 }, cd: { lado: 0, n: 0 }, tb: { n: 0, foi: {} }, vida: { n: 0, foi: {} } };

/* o calendário: abril a julho */
function calendario(destaque) {
  var meses = [
    ['APRIL', [['8', 'MAYA · 1:1', 'moved'], ['22', 'MAYA · 1:1', 'moved']]],
    ['MAY', [['13', 'MAYA · 1:1', 'moved'], ['27', 'KITCHEN · “later”', 'nota']]],
    ['JUNE', [['—', 'no meeting', 'vazio']]],
    ['JULY', [['3', 'MAYA · NOTICE', 'aviso']]]
  ];
  return '<div class="ec-cal">' + meses.map(function (m, i) {
    return '<div class="ec-mes' + (destaque === i ? ' on' : '') + '"><b>' + m[0] + '</b>' + m[1].map(function (d) { return '<div class="ec-dia ' + d[2] + '"><i>' + d[0] + '</i><span>' + d[1] + '</span>' + (d[2] === 'moved' ? '<em>MOVED</em>' : '') + '</div>'; }).join('') + '</div>';
  }).join('') + '</div>';
}
/* a porta */
function porta(fechada) {
  return '<div class="ec-porta' + (fechada ? ' fechada' : '') + '"><svg viewBox="0 0 200 260" aria-hidden="true"><rect class="ec-batente" x="40" y="20" width="120" height="220" rx="4"/><rect class="ec-luz" x="46" y="26" width="108" height="208"/><g class="ec-folha"><rect x="46" y="26" width="108" height="208" rx="2"/><circle cx="140" cy="132" r="5"/></g></svg><b>' + (fechada ? 'DOOR CLOSED · THE PAST' : 'DOOR OPEN · NOW') + '</b></div>';
}
/* o arquivo de três gavetas */
function arquivo(tipos, aberta, acao, n) {
  return '<div class="ec-arq">' + tipos.map(function (k) {
    var d = DRAW[k];
    return '<button type="button" class="ec-gaveta ' + k + (aberta === k ? ' aberta' : '') + '" data-a="' + acao + '" data-v="' + k + '"' + (n !== undefined ? ' data-n="' + n + '"' : '') + '><i></i><b>' + d[0] + '</b><small>' + d[1] + ' · ' + d[2] + '</small></button>';
  }).join('') + '</div>';
}
function tres(acao, ops, esc, semente, classe) {
  return '<div class="ec-ops' + (classe ? ' ' + classe : '') + '">' + ordem(ops.map(function (o, i) { return [o, i]; }), semente).map(function (o) { return '<button type="button" class="versao' + (esc === o[1] ? (o[1] === 0 ? ' certo' : ' errado') : '') + '" data-a="' + acao + '" data-n="' + o[1] + '">' + o[0] + '</button>'; }).join('') + '</div>';
}

var R = {};
R.capa = function () {
  return '<div class="capa"><div><span class="kick">MAIN SERIES · B2 · SHOULD HAVE · COULD HAVE</span><h1>The Empty <b>Chair</b></h1>'
    + '<p class="sub">In April she asked for a conversation. He moved it three times. In July she left. Today you sit in front of her chair and say <b>what should have been said</b>.</p>'
    + '<div class="chipsx"><span class="pilula">should have</span><span class="pilula">could have</span><span class="pilula">couldn’t have</span><span class="pilula">Live Class · W·O·L·F</span></div>'
    + '<button type="button" class="btn cheio" data-a="ir" data-n="1">Take a seat</button>' + faixaLive() + '</div>'
    + '<div class="capa-r">' + calendario(-1) + '</div></div>';
};

R.troca = function (c) {
  var e = S.tc, conta = '<div class="ec-conta so-prof"><small>YOU HEARD · TAP WHAT THE STUDENT SAID FOR THE FIRST HALF</small><div>' + OUVIDOS.map(function (o) { return '<button type="button" class="pilula" data-a="tc-o" data-v="' + o[0] + '">' + o[1] + ' · ' + (e.conta[o[0]] || 0) + '</button>'; }).join('') + '</div></div>';
  return cartasPessoais(c, ASSENTOS, e, 'tc', ['I didn’t …', 'I forgot to …', 'I never …']).replace('<div class="cartas', conta + '<div class="cartas');
};

R.porta = function (c) {
  var e = S.pt, n = e.n, fim = n >= PORTA.length;
  if (fim) return cab(c) + trilha(PORTA, n) + '<div class="foco"><div class="pergunta vd"><small>FIVE DOORS</small><h2>Closed door: HAVE + participle: gone, taken, said, checked. Now one about your own week.</h2></div></div>';
  var x = PORTA[n];
  return cab(c) + trilha(PORTA, n) + '<div class="mesa-c"><div class="lado-l">' + porta(e.fechou) + '</div><div class="lado-l">'
    + '<div class="ec-sit vd' + (e.fechou ? ' passado' : '') + '"><small>' + (e.fechou ? 'NOW IT’S OVER' : 'THE SITUATION') + '</small><p>' + (e.fechou ? x.fechada : x.aberta) + '</p></div>'
    + (e.fechou ? '<div class="pergunta vd ja"><small>SAY IT AGAIN, DOOR CLOSED</small><h2>Say it before you look.</h2></div>' + mostra('pt' + n, x.fe, 1) + '<div><button type="button" class="btn" data-a="pt-prox">Next door</button></div>'
      : '<div class="balao vd"><small>DOOR OPEN · SAY IT</small><p>' + x.ab + '</p></div><div><button type="button" class="btn cheio" data-a="pt-f">Close the door</button></div>') + '</div></div>';
};

R.gavetas = function (c) {
  var e = S.gv, n = e.n, fim = n >= GAVETAS.length;
  if (fim) return cab(c) + trilha(GAVETAS, n) + '<div class="foco"><div class="pergunta vd"><small>SEVEN FACTS</small><h2>DUTY weighs the most: somebody was waiting. Say fact 7 again, slowly.</h2></div></div>';
  var x = GAVETAS[n], ok = e.esc === x.p;
  return cab(c) + trilha(GAVETAS, n) + '<div class="mesa-c"><div class="lado-l"><div class="ec-fato vd"><small>THE FACT</small><p>' + x.fato + '</p></div>' + (ok ? '<div class="balao vd ok-b"><small>THE SENTENCE</small><p>' + x.ok + '</p></div><div><button type="button" class="btn" data-a="gv-prox">Next fact</button></div>' : e.esc ? '<p class="recusa">' + NAO[e.esc] + '</p>' : '<p class="dica-aluno">Ask: was anybody counting on you?</p>') + '</div>'
    + '<div class="lado-l">' + arquivo(['should', 'could', 'couldnt'], e.esc, 'gv') + '</div></div>';
};

R.vozes = function (c) {
  var e = S.vz, n = Math.min(e.n, VOZES.length - 1), fim = e.n >= VOZES.length, x = VOZES[n], ouviu = (S.ouviu || {})[x.au], ok = e.esc && (e.esc === x.p || e.esc === x.alt);
  if (fim) return cab(c) + trilha(VOZES, e.n) + '<div class="mesa-c"><div class="lado-l">' + calendario(3) + '</div><div class="lado-l"><div class="pergunta vd"><small>FOUR CONFESSIONS</small><h2>One of them is Daniel’s, and Maya’s chair is still empty. What should each person do now, with the door open again?</h2></div></div></div>';
  return cab(c) + trilha(VOZES, e.n) + '<div class="mesa-c"><div class="lado-l"><div class="ec-ouve vd"><div class="toca-linha">' + tocar(x.au) + '<b>' + x.quem + '</b></div>' + transcricao(x.au, TR[x.au]) + '</div>'
    + (ouviu ? '<div class="pergunta vd ja"><small>SAY THE CONFESSION FOR THEM</small><h2>' + x.q + '</h2></div>' : '<p class="dica-aluno">Play the voice first.</p>') + '</div>'
    + '<div class="lado-l">' + (ouviu ? arquivo(['should', 'could', 'shouldnt'], e.esc, 'vz') + (ok ? '<div class="balao vd ok-b"><small>THE CONFESSION</small><p>' + x.ok + '</p></div><p class="aprova">' + x.nota + '</p><div><button type="button" class="btn" data-a="vz-prox">Next voice</button></div>' : e.esc ? '<p class="recusa">Listen again: did they fail to do something, lose a chance, or do something wrong?</p>' : '') : '') + '</div></div>';
};

R.fez = function (c) {
  var e = S.fz, todos = FEZ.every(function (x, i) { return e[i] === (x.fez ? 'fez' : 'nao'); });
  return cab(c) + '<div class="ec-lista">' + FEZ.map(function (x, i) {
    var foi = e[i], ok = foi === (x.fez ? 'fez' : 'nao');
    return '<div class="ec-tf vd' + (foi ? (ok ? ' certo' : ' errado') : '') + '"><span>' + x.fato + (ok ? '<b> → ' + x.ok + '</b>' : '') + '</span><div class="ec-fs">' + [['fez', 'IT HAPPENED'], ['nao', 'IT DIDN’T']].map(function (o) { return '<button type="button" class="pilula' + (foi === o[0] ? (ok ? ' certo' : ' errado') : '') + '" data-a="fz" data-n="' + i + '" data-v="' + o[0] + '">' + o[1] + '</button>'; }).join('') + '</div></div>';
  }).join('') + '</div>' + (todos ? '<p class="aprova" style="text-align:center">Didn’t do it: SHOULD HAVE. Did it: SHOULDN’T HAVE. Now a COULD HAVE for each one.</p>' : '<p class="dica-aluno" style="text-align:center">Say the regret before it appears.</p>');
};

R.rascunho = function (c) {
  var e = S.rs, n = e.n, fim = n >= RASCUNHO.length;
  var mail = '<div class="ec-mail vd"><div class="ec-mail-cab"><span>To: maya.r@…</span><span>Subject: About April</span><small>DRAFT · JULY</small></div>' + RASCUNHO.map(function (l, i) {
    var feito = i < n || (i === n && e.esc === 0);
    return '<p class="' + (feito ? 'volta' : '') + (i === n && !fim ? ' agora' : '') + '">' + (feito ? l.ops[0] : '<s>' + l.riscada + '</s>') + '</p>';
  }).join('') + '</div>';
  if (fim) return cab(c) + '<div class="mesa-c"><div class="lado-l">' + mail + '</div><div class="lado-l"><div class="pergunta vd ja"><small>THE DRAFT IS READY</small><h2>Does Daniel send it?</h2></div><div class="ec-dois">' + [['SEND', 0], ['KEEP IT IN DRAFTS', 1]].map(function (o) { return '<button type="button" class="versao grande-v' + (e.envia === o[1] ? ' certo' : '') + '" data-a="rs-e" data-n="' + o[1] + '">' + o[0] + '</button>'; }).join('') + '</div>'
    + (e.envia === 0 ? '<div class="pergunta vd ja"><small>SAY WHY</small><h2>Why now? What should Maya do when she reads it?</h2></div>' : e.envia === 1 ? '<div class="pergunta vd ja"><small>SAY WHY</small><h2>Why not? What could he do instead?</h2></div>' : '') + '</div></div>';
  var x = RASCUNHO[n], ok = e.esc === 0;
  return cab(c) + '<div class="mesa-c"><div class="lado-l">' + mail + '</div><div class="lado-l"><p class="ec-rot">LINE ' + (n + 1) + ' · SAY IT RIGHT, THEN CHOOSE</p>' + tres('rs', x.ops, e.esc, n + 2)
    + (ok ? '<div class="ec-linha-ok"><p class="aprova">The line comes back.</p><button type="button" class="btn" data-a="rs-prox">Next line</button></div>' : e.esc > 0 ? '<p class="recusa">Is the door closed? His job, a chance, or impossible? HAVE + participle.</p>' : '<p class="so-prof dica-aluno">Line 4 is the defense: couldn’t have known. Line 5 turns the blame around: is that fair?</p>') + '</div></div>';
};

R.cadeira = function (c) {
  var e = S.cd, lado = LADOS[e.lado], fim = e.lado >= 1 && e.n >= 3;
  var cadeiras = '<div class="ec-cadeiras"><div class="ec-cad' + (e.lado === 0 ? ' voce' : '') + '"><i></i><b>DANIEL</b><small>YOUR CHAIR</small></div><div class="ec-cad' + (e.lado === 1 ? ' voce' : ' vazia') + '"><i></i><b>MAYA</b><small>' + (e.lado === 1 ? 'YOU ARE HERE NOW' : 'EMPTY') + '</small></div></div>';
  var corpo;
  if (fim) corpo = '<div class="pergunta vd"><small>TWO CHAIRS, TWO VOICES</small><h2>Which one was easier to speak in? Swap once more: Daniel answers Maya’s last sentence.</h2></div>';
  else if (e.lado === 0 && e.n >= 3) corpo = '<div class="ec-troca vd"><b>STAND UP.</b><p>Walk to the other chair. Sit down as Maya.</p></div><div><button type="button" class="btn cheio" data-a="cd-t">I changed chairs</button></div>';
  else { var q = lado.qs[e.n]; corpo = '<div class="pergunta vd ja"><small>' + lado.k + ' · ' + (e.n + 1) + ' OF 3</small><h2>' + q[0] + '</h2></div>' + fala('cd' + e.lado + e.n, [q[1]], []) + '<div><button type="button" class="btn" data-a="cd-n">Said it</button></div>'; }
  return cab(c) + '<div class="mesa-c"><div class="lado-l">' + cadeiras + (e.lado === 0 ? '<div class="ec-ouve vd"><div class="toca-linha">' + tocar('e1.mp3') + '<b>DANIEL, BEFORE</b></div>' + transcricao('e1.mp3', TR['e1.mp3']) + '</div>' : '') + '<p class="dica-aluno">' + lado.diz + '</p></div><div class="lado-l">' + corpo + '</div></div>';
};

R.tribunal = function (c) {
  var e = S.tb, n = e.n, fim = n >= CASOS.length;
  if (fim) return cab(c) + trilha(CASOS, n) + '<div class="foco"><div class="pergunta vd"><small>THREE CASES CLOSED</small><h2>The judge used every drawer. Add a fourth person to one case, and give them a sentence.</h2></div></div>';
  var x = CASOS[n], todos = x.papeis.every(function (p, i) { return e.foi[i] === p[1]; });
  return cab(c) + trilha(CASOS, n) + '<div class="mesa-c"><div class="lado-l"><div class="ec-caso vd"><small>CASE ' + (n + 1) + ' · ' + x.k + '</small><p>' + x.txt + '</p></div>'
    + (todos ? '<div class="ec-martelo vd"><b>⚖ CASE CLOSED</b><p>' + x.q + '</p></div><div><button type="button" class="btn" data-a="tb-prox">Next case</button></div>' : '<p class="so-prof dica-aluno">Disagree on purpose: a good judge defends the verdict.</p>') + '</div>'
    + '<div class="lado-l">' + x.papeis.map(function (p, i) { var foi = e.foi[i], ok = foi === p[1]; return '<div class="ec-papel vd' + (foi ? (ok ? ' certo' : ' errado') : '') + '"><b>' + p[0] + '</b>' + (ok ? '<p>' + p[2] + '</p>' : '') + '<div class="ec-fs">' + ['should', 'could', 'couldnt'].map(function (k) { return '<button type="button" class="pilula' + (foi === k ? (ok ? ' certo' : ' errado') : '') + '" data-a="tb" data-n="' + i + '" data-v="' + k + '">' + DRAW[k][0] + '</button>'; }).join('') + '</div></div>'; }).join('') + '</div></div>';
};

R.vida = function (c) { return sequencia(c, VIDA, S.vida, 'vida', 'Your own chair. Some doors are still open. What should you do this week?') + '<p class="so-prof dica-aluno" style="text-align:center">Small regrets only. If something heavy comes up, listen, then go back to Daniel and Maya. In question 4, answer honestly.</p>'; };

R.fim = function (c) {
  var k = S.tc.conta, tot = (k.presente || 0) + (k.passado || 0) + (k.outro || 0);
  var resumo = tot ? '<div class="ec-volta vd"><small>SCENE I · WHAT YOUR TEACHER HEARD</small><p>' + OUVIDOS.map(function (o) { return '<span>' + o[1] + ' · <b>' + (k[o[0]] || 0) + '</b></span>'; }).join('') + '</p></div>' : '';
  return cab(c) + '<div class="fim">' + escritaFinal('fim', (S.txt || {}).fim || '', (S.salvo || {}).fim, 'Last week, my … would have … I should have …\nI could have …\nI couldn’t have known …', 'Your chair',
    ['should have', 'could have', 'shouldn’t have', 'couldn’t have', 'would have'], ['YOUR CHAIR, DOOR CLOSED', 'Your admired person in your chair last week, one duty you missed, one chance you lost, and one thing you couldn’t have known.'])
    + '<div class="lado-fim">' + resumo + porta(1)
    + '<div class="grande vd"><span><u>should have</u> · it was your job</span><span><u>could have</u> · it was a chance</span><span><u>shouldn’t have</u> · you did it, and it was wrong</span><span><u>couldn’t have</u> · it was impossible</span><span>not <s>I should call her</s> about April, not <s>should have went</s></span></div>'
    + mostra('fim', 'Last week, my sister would have asked for help on Monday. I should have asked too.<br>I could have taken the afternoon off.<br>I couldn’t have known the client would change the plan.', 1)
    + '<p class="hw"><a class="pilula" href="HW/" target="_blank" rel="noopener">Homework for the student →</a></p></div></div>';
};

TOQUES['tc-o'] = function (b, n, v) { S.tc.conta[v] = (S.tc.conta[v] || 0) + 1; };
TOQUES['pt-f'] = function () { S.pt.fechou = 1; };
TOQUES['pt-prox'] = function () { S.pt = { n: S.pt.n + 1, fechou: 0 }; };
TOQUES.gv = function (b, n, v) { S.gv.esc = v; };
TOQUES['gv-prox'] = function () { S.gv = { n: S.gv.n + 1, esc: '' }; };
TOQUES.vz = function (b, n, v) { S.vz.esc = v; };
TOQUES['vz-prox'] = function () { S.vz = { n: S.vz.n + 1, esc: '' }; };
TOQUES.fz = function (b, n, v) { S.fz[n] = v; };
TOQUES.rs = function (b, n) { S.rs.esc = n; };
TOQUES['rs-prox'] = function () { S.rs.n++; S.rs.esc = -1; };
TOQUES['rs-e'] = function (b, n) { S.rs.envia = n; };
TOQUES['cd-n'] = function () { S.cd.n++; };
TOQUES['cd-t'] = function () { S.cd = { lado: 1, n: 0 }; };
TOQUES.tb = function (b, n, v) { S.tb.foi[n] = v; };
TOQUES['tb-prox'] = function () { S.tb = { n: S.tb.n + 1, foi: {} }; };

/* 10/11/2026 · AS EXPLICAÇÕES (kit/formatos3.js) · G2 · uma cena curta nova (k: gx) antes de porta.
   Explicação 100% em inglês: see → notice → use (o aluno fala ou escreve uma frase dele no fim). */
var GX_EXPLICA = { formato: 'linhaTempo', titulo: 'Daniel’s calendar on one line. Where does each sentence go?',
  marcos: [{ t: 'THE DOOR IS OPEN', s: 'April · advice' }, { t: 'THE DOOR IS CLOSED', s: 'July · regret' }],
  frases: [
    { f: 'He should have called her in April.', c: 1, d: 'should have + participle · too late' },
    { f: 'He should call her today.', c: 0, d: 'should + verb · advice' },
    { f: 'He could have asked her in May.', c: 1, d: 'could have + participle · a lost chance' },
    { f: 'You could ask her this week.', c: 0, d: 'could + verb · a chance now' },
    { f: 'He shouldn’t wait any longer.', c: 0, d: 'shouldn’t + verb · advice' },
    { f: 'He shouldn’t have waited so long.', c: 1, d: 'shouldn’t have + participle · regret' }
  ],
  nota: 'While the door is open, it is advice: <b>should</b> + verb. When it closes, it is the past: <b>should have</b> + participle. <b>could have</b> = a chance he had. <b>couldn’t have</b> = it was impossible. Never “should of”, never “should have went”.',
  uso: { p: 'Your turn. One small thing you did not do last week. Say it with should have, and one chance you had with could have.', molde: ['I should have …', 'I could have …'], ex: 'I should have called my mother. I could have gone to the gym, but I stayed at home.' },
  prof: 'Let the student place the sentences alone. A wrong place comes back with one tap.' };
R.gx = function (c) { return cab(c) + FM.ex('gx_tempo', GX_EXPLICA); };
