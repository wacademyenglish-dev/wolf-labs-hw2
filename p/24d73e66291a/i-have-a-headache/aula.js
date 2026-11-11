/* ============================================================
   I HAVE A HEADACHE · MAPLE STREET CLINIC · LIVE CLASS  05/10/2026
   Main series A1 · saúde: I have a + problema · I feel + como · my …
   hurts · You should + verbo (introdução)
   O MUNDO: segunda, 8 AM, ainda escuro; a sala de espera da clínica da
   Maple Street. A enfermeira Rosa chama as senhas. O painel de senhas
   acende cada número; o aluno dá voz a cada paciente. A virada: o
   primeiro diz "I am with a headache" e a Rosa olha em volta: "With
   who?". Depois o relógio da parede corre das 9 ao meio-dia (os
   ponteiros andam a cada resposta), e a última senha é da própria Rosa.
   Sem áudio (como na aula antiga). Fila: FILA-LIVE-386.md · 010.
   ============================================================ */
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'voce', est: 'o', min: 7, img: 'corredor', rot: 'I · You and Your Health', t: 'Before the clinic: you, colds, doctors and sleep.', p: 'Pick a card. Answer out loud. Then the follow-up comes.' },
  { k: 'sala', est: 'o', min: 7, img: 'sala', rot: 'II · The Waiting Room', t: 'Eight chairs, eight tickets. Nurse Rosa calls each number.', p: 'Call a ticket. Read what we see. You are the patient: say what’s wrong. Then tap your sentence.' },
  { k: 'gx', est: 'f', min: 4, img: 'sala', rot: 'III · Find the Rule', t: 'Four tickets from the waiting room. You find the rule.', p: 'Read the four sentences out loud. Look at the lit verbs. Choose the rule. Then say your own.' },
  { k: 'regra', est: 'f', min: 6, img: 'balcao', rot: 'IV · The Rule', t: 'You HAVE a problem. You FEEL a way. A part of you HURTS.', p: 'Read the four cards out loud. Then fix the four traps.' },
  { k: 'relogio', est: 'o', min: 7, img: 'consultorio', rot: 'V · Nine to Noon', t: 'The clock says 9 AM. Eight moments until lunch.', p: 'Your teacher reads the moment. Answer at once, as the patient or as the doctor. The clock moves with every answer.' },
  { k: 'rosa', est: 'o', min: 7, img: 'balcao', rot: 'VI · Your Ticket', t: 'Tuesday, 8 AM. Now YOU take a ticket.', p: 'Your teacher is Nurse Rosa. You are the patient: yourself, with a problem you choose.' },
  { k: 'quiz', est: 'f', min: 6, extra: 1, img: 'remedios', rot: 'VII · Quick Check', t: 'Six quick lines from the waiting room.', p: 'Say the whole sentence first. Then tap the word.' },
  { k: 'roda', est: 'o', min: 7, extra: 1, img: 'cha', rot: 'VIII · Your Health', t: 'Your real life: colds, headaches and good advice.', p: 'Spin the wheel. Answer with I have a, I feel, my … hurts or you should.' },
  { k: 'fim', est: 'w', min: 6, img: 'cha', rot: 'IX · A Note to the Doctor', t: 'You feel sick today. Write a note to the doctor.', p: 'What do you have? How do you feel? What hurts? Then one piece of advice for a friend. The red line watches it. It goes to your My notes.' }
];

var VOCE = [
  { k: 'WINTER', q: 'Do you get colds in the winter?', fup: 'What do you do then?', st: ['Yes, every …', 'No, never.'], ex: 'Yes, every winter. Always in July. I drink a lot of tea.' },
  { k: 'THE DOCTOR', q: 'Do you like going to the doctor?', fup: 'How often do you go?', st: ['Not really. I only go when …', 'Yes, …'], ex: 'Not really. I only go when I feel very sick.' },
  { k: 'SLEEP', q: 'How many hours do you sleep at night?', fup: 'Is it enough?', st: ['I sleep …', 'It’s (not) enough.'], ex: 'Six hours. It’s not enough!' },
  { k: 'TEA OR PILLS', q: 'Tea or medicine: what do you take first?', fup: 'Is that from your family?', st: ['Tea first.', 'Medicine first.'], ex: 'Tea first. Then medicine. That’s from my grandmother!' }
];

var POR = { com: 'In English you don’t sit WITH a headache: you HAVE one.', artigo: 'One problem, one little A: a fever, a cold.', dor: 'Say a sore throat, a stomachache.', frio: 'I AM COLD is the temperature. Sick, with tissues: I HAVE A COLD.', ordem: 'The body part first: MY KNEE hurts.', pain: 'Body part + HURTS.', me: 'No ME: I feel dizzy.', fico: 'Say FEEL: I feel dizzy.', ed: 'How you feel: TIRED (not tiring).', temcansado: 'How you feel: I FEEL tired.', to: 'After SHOULD, the verb alone: you should rest.', ing: 'After SHOULD, the verb alone: you should rest.', s: 'After SHOULD, no -S: you should drink.', tosse: 'The word is COUGH.', s3: 'One back: it HURTS, with -S.' };

var PAC = [
  { k: 'MR. HILL', n: '01', ve: 'He holds his head with both hands. The lights are too bright for him. A loud concert last night.', ops: [['I have a headache.', 'ok'], ['I am with a headache.', 'com'], ['I have headache.', 'artigo']] },
  { k: 'LILY, 8', n: '02', ve: 'Lily can’t talk very well. It hurts when she eats. Three ice creams yesterday!', ops: [['I have a sore throat.', 'ok'], ['I have a pain of throat.', 'dor'], ['I have sore throat.', 'artigo']] },
  { k: 'MRS. CHEN', n: '03', ve: 'A big box of tissues on her lap. She sneezes every ten seconds. Her nose is red.', ops: [['I have a cold.', 'ok'], ['I am cold.', 'frio'], ['I am with a cold.', 'com']] },
  { k: 'MR. RUIZ', n: '04', ve: 'His face is red and hot. The thermometer says 102 degrees.', ops: [['I have a fever. I feel hot.', 'ok'], ['I have fever. I feel hot.', 'artigo'], ['I am with fever. I feel hot.', 'com']] },
  { k: 'TOM, A RUNNER', n: '05', ve: 'Running shoes and an ice pack on his knee. His knee hurts.', ops: [['My knee hurts.', 'ok'], ['Hurts my knee.', 'ordem'], ['My knee pains.', 'pain']] },
  { k: 'GRANDPA JOE', n: '06', ve: 'He stands up too fast and sits down again. The room turns around him.', ops: [['I feel dizzy.', 'ok'], ['I feel me dizzy.', 'me'], ['I stay dizzy.', 'fico']] },
  { k: 'MS. BROOKS', n: '07', ve: 'A hand on her stomach. A whole pizza last night, at midnight.', ops: [['I have a stomachache.', 'ok'], ['I have a stomach hurt.', 'dor'], ['I am with a stomachache.', 'com']] },
  { k: 'SAM, A NIGHT NURSE', n: '08', ve: 'Twelve hours at work. Coffee number five. His eyes are closing.', ops: [['I feel tired. I need sleep.', 'ok'], ['I feel tiring. I need sleep.', 'ed'], ['I have tired. I need sleep.', 'temcansado']] }
];

var MOM = [
  { k: 'TICKET 09', h: 9, m: 0, quem: 'THE PATIENT', diz: 'Mr. Park can’t eat. He has a hand on his cheek. Candy wrappers in his pocket.', ops: [['Doctor, I have a toothache.', 'ok'], ['Doctor, I am with a toothache.', 'com'], ['Doctor, my tooth pains.', 'pain']] },
  { k: 'TICKET 09', h: 9, m: 20, quem: 'THE DOCTOR', diz: 'Dr. Patel looks at Mr. Park’s tooth. It’s a job for a dentist.', ops: [['You should see a dentist.', 'ok'], ['You should to see a dentist.', 'to'], ['You should seeing a dentist.', 'ing']] },
  { k: 'TICKET 10', h: 9, m: 40, quem: 'THE PATIENT', diz: 'Ms. Green coughs and coughs. All night. Her voice is almost gone.', ops: [['I have a bad cough.', 'ok'], ['I have a bad toss.', 'tosse'], ['I am with a bad cough.', 'com']] },
  { k: 'TICKET 10', h: 10, m: 0, quem: 'THE DOCTOR', diz: 'A cough and a sore throat. Dr. Patel has a simple idea.', ops: [['You should drink hot tea with honey.', 'ok'], ['You should drinks hot tea with honey.', 's'], ['You should to drink hot tea with honey.', 'to']] },
  { k: 'TICKET 11', h: 10, m: 20, quem: 'THE PATIENT', diz: 'Mr. Diaz moved a big sofa yesterday. Now he walks very, very slowly.', ops: [['My back hurts.', 'ok'], ['Hurts my back.', 'ordem'], ['My back hurt.', 's3']] },
  { k: 'TICKET 12', h: 11, m: 0, quem: 'THE PATIENT', diz: 'Emma is ten. Her face is hot and she doesn’t want to play.', ops: [['I feel sick. I have a fever.', 'ok'], ['I feel me sick. I have a fever.', 'me'], ['I feel sick. I have fever.', 'artigo']] },
  { k: 'TICKET 12', h: 11, m: 30, quem: 'THE DOCTOR', diz: 'Emma’s mom asks: “School tomorrow?” Dr. Patel says no.', ops: [['You should stay in bed and rest.', 'ok'], ['You should staying in bed and rest.', 'ing'], ['You should stays in bed and rest.', 's']] },
  { k: 'TICKET 13', h: 12, m: 0, quem: 'YOU', diz: 'Noon. The last ticket is Nurse Rosa’s. She sits down: “I have a headache, and I feel so tired.”', ops: [['Rosa, you should rest. Go home!', 'ok'], ['Rosa, you should to rest. Go home!', 'to'], ['Rosa, you should resting. Go home!', 'ing']] }
];

var ROSA = [
  { q: 'Good morning! Here’s your ticket: number 21. So, what’s wrong today?', st: ['I have a …', 'My … hurts.'], ex: 'I have a headache, and my back hurts.', resp: 'Oh no. Sit down, please. Dr. Patel is ready in five minutes.' },
  { q: 'And how do you feel today?', st: ['I feel …'], ex: 'I feel tired and a little dizzy.', resp: 'I’m sorry. Here, have some water.' },
  { q: 'What do you usually do for a cold at home?', st: ['When I have a cold, I …'], ex: 'When I have a cold, I drink tea and I sleep a lot.', resp: 'Good idea. My grandmother says: chicken soup!' },
  { q: 'And me? I always feel tired on Tuesdays. Any advice?', st: ['You should …'], ex: 'You should sleep early on Mondays!', resp: 'Thank you! Good advice. Your turn, number 21!' }
];

var QUIZ = [
  { f: 'I ___ a headache.', op: ['have', 'am with', 'am'], nao: 'A problem: I HAVE A headache.' },
  { f: 'Achoo! Tissues, please. I have ___ cold.', op: ['a', '(nothing)', 'the'], nao: 'One problem, one little A.' },
  { f: 'My knee ___.', op: ['hurts', 'pains', 'hurt me'], nao: 'Body part + HURTS.' },
  { f: 'Twelve hours at work. I feel ___.', op: ['tired', 'me tired', 'tiring'], nao: 'I FEEL + how: tired. No ME.' },
  { f: 'You have a sore throat. You should ___ hot tea.', op: ['drink', 'to drink', 'drinking'], nao: 'SHOULD + the verb: drink.' },
  { f: 'Brr! The window is open. I’m ___.', op: ['cold', 'with a cold', 'a cold'], nao: 'Temperature: I’m cold. Sick, with tissues: I have a cold.' }
];

var FATIAS = [
  { k: 'A COLD', q: 'What do you do when you have a cold?', h: 'I drink tea with honey and I sleep a lot.' },
  { k: 'HEADACHE', q: 'Do you often have headaches? What helps?', h: 'Sometimes. I drink water and I turn off my phone.' },
  { k: 'RIGHT NOW', q: 'How do you feel today, right now?', h: 'I feel good, but a little tired.' },
  { k: 'DENTIST', q: 'When do you go to the dentist? Do you like it?', h: 'Once a year. I don’t like it!' },
  { k: 'NO SLEEP', q: 'Your friend can’t sleep at night. What’s your advice?', h: 'You should drink warm milk. No coffee after 4 PM!' },
  { k: 'THROAT', q: 'What does your family do for a sore throat?', h: 'My mom makes tea with lemon, honey and ginger.' },
  { k: 'SPORTS', q: 'Do you play sports? What hurts after?', h: 'I run. After a long run, my legs hurt.' },
  { k: 'STRESS', q: 'Your friend feels stressed. What’s your advice?', h: 'You should take a walk and call a friend.' }
];

var S = { i: 0, faixa: 1, fala: {}, resp: {}, armas: {},
  voce: { sel: -1, foi: {} }, sala: { sel: -1, esc: {} }, relo: { n: 0, esc: -1 }, rosa: { n: 0, foi: {} },
  quiz: { n: 0, esc: -1 }, roda: { giros: 0, foi: {} } };

function opcoes(lista, esc, acao, n) {
  return '<div class="versoes">' + ordem(lista.map(function (o, i) { return [o, i]; }), n + 1).map(function (o) {
    return '<button type="button" class="versao' + (esc === o[1] ? (o[1] === 0 ? ' certo' : ' errado') : '') + '" data-a="' + acao + '" data-n="' + n + '" data-v="' + o[1] + '"' + (esc === 0 ? ' disabled' : '') + '>' + o[0][0] + '</button>';
  }).join('') + '</div>';
}
function relogio(h, m) {
  var ah = (h % 12) * 30 + m * 0.5, am = m * 6, t = '';
  for (var i = 0; i < 12; i++) t += '<line x1="0" y1="-84" x2="0" y2="-96" class="tk" transform="rotate(' + i * 30 + ')"/>';
  return '<svg class="relo" viewBox="-110 -110 220 220" role="img" aria-label="The clinic clock"><circle r="106" class="aro"/><circle r="100" class="face"/>' + t
    + '<text y="52" class="marca-t">MAPLE ST.</text><g style="transform:rotate(' + ah + 'deg)" class="ponteiro-h"><line y1="10" y2="-50" class="mao hh"/></g><g style="transform:rotate(' + am + 'deg)" class="ponteiro-m"><line y1="14" y2="-80" class="mao mm"/></g><circle r="6" class="eixo"/></svg>';
}

var R = {};
R.capa = function () {
  return '<div class="capa"><div class="lado-a"><span class="kick">MAIN SERIES · MAPLE STREET CLINIC · A1</span><h1>I Have <b>a Headache</b></h1>'
    + '<p class="sub">Monday, 8 AM. Still dark outside. Eight tickets, eight patients, and one nurse with a headache of her own.</p>'
    + '<div class="chipsx"><span class="pilula">I have a headache</span><span class="pilula">I feel tired</span><span class="pilula">my knee hurts</span><span class="pilula">you should rest</span><span class="pilula">Live Class · W·O·L·F</span></div>'
    + '<button type="button" class="btn cheio" data-a="ir" data-n="1">Take a ticket</button>' + faixaLive() + '</div>'
    + '<div class="foto"><img src="' + img('capa') + '" alt="A clinic waiting room before sunrise"><div class="placa-capa"><small>NOW SERVING</small><b>01</b><span>MAPLE STREET CLINIC</span></div></div></div>';
};
R.voce = function (c) { return cartasPessoais(c, VOCE, S.voce, 'voce'); };

R.sala = function (c) {
  var e = S.sala, x = e.sel >= 0 ? PAC[e.sel] : null, feitos = PAC.filter(function (_, i) { return e.esc[i] === 0; }).length;
  var painel = '<div class="painel-senha vd"><small>NOW SERVING</small><b>' + (x ? x.n : '--') + '</b></div>';
  var cadeiras = '<div class="cadeiras">' + PAC.map(function (p, i) {
    var ok = e.esc[i] === 0;
    return '<button type="button" class="cadeira' + (e.sel === i ? ' on' : '') + (ok ? ' atendido' : '') + '" data-a="sl-sel" data-n="' + i + '"><span class="senha">' + p.n + '</span><b>' + p.k + '</b>' + (ok ? '<em>' + p.ops[0][0] + '</em>' : '') + '</button>';
  }).join('') + '</div>';
  var lado = x ? '<div class="pergunta vd"><small>TICKET ' + x.n + ' · ' + x.k + '</small><h2>' + x.ve + '</h2></div><p class="rosa-diz">Nurse Rosa: <b>“What’s wrong?”</b></p>' + opcoes(x.ops, e.esc[e.sel], 'sl', e.sel)
    + (e.esc[e.sel] === 0 ? '<p class="aprova">GOT IT.</p>' : (e.esc[e.sel] > 0 ? '<p class="recusa">' + POR[x.ops[e.esc[e.sel]][1]] + (x.ops[e.esc[e.sel]][1] === 'com' ? ' Nurse Rosa looks around: “With who? Is Mr. Headache here too?”' : '') + '</p>' : '<p class="dica-aluno">You are the patient. Say it first. Then tap your sentence.</p>'))
    : '<p class="dica-aluno">Call a ticket.</p>';
  return cab(c) + '<div class="mesa-sala"><div class="sala-esq">' + painel + cadeiras + '</div><div class="lado-sala">' + lado + (feitos === PAC.length ? '<p class="aprova">Eight tickets, eight patients. How does English do it?</p>' : '') + '</div></div>';
};

R.regra = function (c) {
  return cab(c) + '<div class="cartoes quatro">'
    + '<div class="cr vd"><small>1 · THE PROBLEM</small><h3>I <em>have a</em> …</h3><div class="ex"><span>a headache · a cold · a fever · a cough · a sore throat</span></div></div>'
    + '<div class="cr vd"><small>2 · HOW YOU FEEL</small><h3>I <em>feel</em> …</h3><div class="ex"><span>tired · sick · dizzy · better</span></div></div>'
    + '<div class="cr vd"><small>3 · WHERE IT HURTS</small><h3><em>My</em> knee <em>hurts</em>.</h3><div class="ex"><span>my back · my head · my tooth</span></div></div>'
    + '<div class="cr vd"><small>4 · ADVICE</small><h3><em>You should</em> rest.</h3><div class="ex"><span>should + the verb alone</span></div></div></div>'
    + armas([['WITH', 'I am with a headache.', 'I have a headache.', 'A headache isn’t a friend in the room!'], ['THE LITTLE A', 'I have fever.', 'I have a fever.', 'One problem, one A.'], ['HURTS', 'Hurts my head.', 'My head hurts.', 'Body part first.'], ['COLD', 'I am cold. (tissues, red nose)', 'I have a cold.', 'I’m cold = the temperature.']], 'THE FOUR TRAPS · TAP TO FIX');
};

R.relogio = function (c) {
  var r = S.relo, n = r.n, fim = n >= MOM.length, x = MOM[Math.min(n, MOM.length - 1)], hm = fim ? [12, 0] : [x.h, x.m];
  if (fim) return cab(c) + '<div class="mesa-relo"><div class="relo-box vd">' + relogio(12, 0) + '<small>12:00 · THE ROOM IS EMPTY</small></div><div class="foco"><div class="pergunta vd"><small>NOON</small><h2>Nurse Rosa takes her coat and smiles: “OK, OK. I have a headache, I feel tired, and I should rest. See you tomorrow!”</h2></div></div></div>';
  var hh = x.h % 12 || 12, txt = hh + ':' + (x.m < 10 ? '0' : '') + x.m + (x.h < 12 ? ' AM' : ' PM');
  return cab(c) + trilha(MOM, n) + '<div class="mesa-relo"><div class="relo-box vd">' + relogio(hm[0], hm[1]) + '<small>' + txt + ' · ' + x.k + '</small></div><div class="lado-relo"><div class="pergunta vd"><small>YOU ARE ' + x.quem + '</small><h2>' + x.diz + '</h2></div>'
    + opcoes(x.ops, r.esc, 'rl', n) + (r.esc === 0 ? '<p class="aprova">GOT IT. The clock moves on.</p><div><button type="button" class="btn" data-a="rl-prox">Next moment</button></div>' : (r.esc > 0 ? '<p class="recusa">' + POR[x.ops[r.esc][1]] + '</p>' : '<p class="dica-aluno">Answer at once, out loud. Then tap what you said.</p>')) + '</div></div>';
};

R.rosa = function (c) {
  var a = S.rosa, n = a.n, fim = n >= ROSA.length, x = ROSA[Math.min(n, ROSA.length - 1)];
  if (fim) return cab(c) + trilha(ROSA, n) + '<div class="foco"><div class="pergunta vd"><small>NUMBER 21</small><h2>Nurse Rosa calls your number. Four answers, all yours.</h2></div></div>';
  return cab(c) + trilha(ROSA, n) + '<div class="ligacao"><div class="balcao-rosa vd"><div class="senha-grande">21</div><small>NURSE ROSA · THE FRONT DESK</small><p>“' + x.q + '”</p></div><div class="lado-rosa">'
    + fala('rs' + n, x.st, []) + mostra('rs' + n, x.ex, 1)
    + (a.foi[n] ? '<div class="balcao-rosa resp vd"><small>NURSE ROSA</small><p>“' + x.resp + '”</p></div><div><button type="button" class="btn" data-a="seq-prox" data-c="rosa">Next</button></div>' : '<div><button type="button" class="btn so-prof" data-a="seq-foi" data-c="rosa">Answered · Rosa replies</button></div>') + '</div></div>';
};

R.quiz = function (c) {
  var q = S.quiz, n = q.n, fim = n >= QUIZ.length, x = QUIZ[Math.min(n, QUIZ.length - 1)];
  if (fim) return cab(c) + trilha(QUIZ, n) + '<div class="foco"><div class="pergunta vd"><small>SIX OUT OF SIX</small><h2>You HAVE a problem. You FEEL a way. A part of you HURTS.</h2></div></div>';
  var certo = q.esc === 0;
  return cab(c) + trilha(QUIZ, n) + '<div class="foco"><div class="pergunta vd' + (certo ? ' ja' : '') + '"><small>LINE ' + (n + 1) + '</small><h2>' + x.f.replace('___', certo ? '<b>' + x.op[0] + '</b>' : '<span class="vaga">___</span>') + '</h2></div>'
    + '<div class="versoes linha">' + ordem(x.op.map(function (o, i) { return [o, i]; }), n).map(function (o) { return '<button type="button" class="versao' + (q.esc === o[1] ? (o[1] === 0 ? ' certo' : ' errado') : '') + '" data-a="qz" data-n="' + o[1] + '"' + (certo ? ' disabled' : '') + '>' + o[0] + '</button>'; }).join('') + '</div>'
    + (certo ? '<p class="aprova" style="text-align:center">GOT IT. Say it again.</p><div style="text-align:center"><button type="button" class="btn" data-a="qz-prox">Next</button></div>' : (q.esc > 0 ? '<p class="recusa">' + x.nao + '</p>' : '')) + '</div>';
};

R.roda = function (c) {
  var r = S.roda, atual = r.giros ? (r.giros * 3 - 3) % FATIAS.length : -1, x = atual >= 0 ? FATIAS[atual] : null, ang = r.giros ? atual * 45 + r.giros * 360 : 0;
  var fatias = FATIAS.map(function (f, i) {
    var a0 = (i * 45 - 112.5) * Math.PI / 180, a1 = (i * 45 - 67.5) * Math.PI / 180, am = (i * 45 - 90) * Math.PI / 180, tx = 100 + 58 * Math.cos(am), ty = 100 + 58 * Math.sin(am);
    return '<path d="M100 100 L' + (100 + 92 * Math.cos(a0)).toFixed(1) + ' ' + (100 + 92 * Math.sin(a0)).toFixed(1) + ' A92 92 0 0 1 ' + (100 + 92 * Math.cos(a1)).toFixed(1) + ' ' + (100 + 92 * Math.sin(a1)).toFixed(1) + ' Z" class="fatia f' + (i % 2) + (r.foi[i] ? ' feita' : '') + '"/>'
      + '<text x="' + tx.toFixed(1) + '" y="' + (ty + 3).toFixed(1) + '" transform="rotate(' + (i * 45) + ' ' + tx.toFixed(1) + ' ' + ty.toFixed(1) + ')">' + f.k + '</text>';
  }).join('');
  var roda = '<div class="roda-box vd"><div class="ponteiro"></div><svg class="roda-svg" viewBox="0 0 200 200" style="transform:rotate(' + (-ang) + 'deg)">' + fatias + '<circle cx="100" cy="100" r="16" class="eixo"/></svg><button type="button" class="btn cheio" data-a="rd-gira">Spin</button></div>';
  var lado = x ? '<div class="pergunta vd"><small>' + x.k + '</small><h2>' + x.q + '</h2></div>' + fala('rd' + atual, ['I have a …', 'I feel …', 'My … hurts.', 'You should …'], []) + mostra('rd' + atual, x.h, 1)
    + (r.foi[atual] ? '' : '<div><button type="button" class="btn so-prof" data-a="rd-foi">Answered · your turn, teacher</button></div>') : '<p class="dica-aluno">Spin the wheel.</p>';
  return cab(c) + '<div class="mesa-roda">' + roda + '<div class="lado-roda">' + lado + '</div></div>';
};

R.fim = function (c) {
  return cab(c) + '<div class="fim">' + escritaFinal('fim', (S.txt || {}).fim || '', (S.salvo || {}).fim, 'Dear Dr. Patel,\nI have a … I feel …\nMy … hurts.', 'A note to the doctor',
    ['I have a ', 'I feel ', 'My ', ' hurts.', 'You should ', 'headache', 'cold', 'tired'], ['A NOTE TO THE DOCTOR', 'You feel sick today. What do you have? How do you feel? What hurts? And one piece of advice for a friend.'])
    + '<div class="lado-fim"><div class="grande vd"><span>I <u>have a</u> headache.</span><span>I <u>feel</u> tired. My knee <u>hurts</u>.</span><span>You <u>should</u> rest.</span><small>Not “I am with”. Not “I have fever”. Not “I feel me”. And I’m cold is only the temperature.</small></div>'
    + mostra('fim', 'Dear Dr. Patel,<br>I have a bad cold and a sore throat.<br>I feel tired and a little dizzy.<br>My head hurts, too.<br>And my friend Bia works twelve hours a day: she should rest!', 1)
    + '<p class="hw"><a class="pilula" href="HW/" target="_blank" rel="noopener">Homework for the student →</a></p></div></div>';
};

TOQUES['sl-sel'] = function (b, n) { S.sala.sel = n; };
TOQUES.sl = function (b, n, v) { if (S.sala.esc[n] === 0) return false; S.sala.esc[n] = +v; };
TOQUES.rl = function (b, n, v) { if (S.relo.esc === 0) return false; S.relo.esc = +v; };
TOQUES['rl-prox'] = function () { S.relo = { n: S.relo.n + 1, esc: -1 }; };
TOQUES.qz = function (b, n) { if (S.quiz.esc === 0) return false; S.quiz.esc = n; };
TOQUES['qz-prox'] = function () { S.quiz = { n: S.quiz.n + 1, esc: -1 }; };
TOQUES['rd-gira'] = function () { S.roda.giros++; };
TOQUES['rd-foi'] = function () { var r = S.roda; r.foi[(r.giros * 3 - 3) % FATIAS.length] = 1; };

/* 10/11/2026 · AS EXPLICAÇÕES (kit/formatos3.js) · G10 · uma cena curta nova (k: gx) antes de regra.
   Explicação 100% em inglês: see → notice → use (o aluno fala ou escreve uma frase dele no fim). */
var GX_EXPLICA = { formato: 'achaRegra', titulo: 'Four patients at the Maple Street Clinic. Find the rule yourself.',
  exemplos: [
    'I <b>have</b> a headache.',
    'She <b>has</b> a cold.',
    'I <b>feel</b> tired.',
    'My back <b>hurts</b>.'
  ],
  pergunta: 'To say what is wrong with you, we use …',
  opcoes: ['have + a problem, feel + how, my … hurts', 'am with + a problem', 'am + a problem: I am a headache'], c: 0,
  nao: 'Not that one. Read the four lit verbs again: is there an am? a with?',
  regra: '<b>I have a</b> + problem: I have a headache. <b>I feel</b> + how: I feel tired. <b>My</b> + part of the body + <b>hurts</b>. Not “I am with a headache”.',
  uso: { p: 'Your turn. You are at the clinic. Nurse Rosa asks. Say one problem you have, how you feel, and what hurts.', molde: ['I have a …', 'I feel …', 'My … hurts.'], ex: 'I have a cold. I feel tired. My throat hurts.' } };
R.gx = function (c) { return cab(c) + FM.ex('gx_regra', GX_EXPLICA); };
