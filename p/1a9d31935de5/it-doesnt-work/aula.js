/* ============================================================
   IT DOESN'T WORK · THE NIGHT TECHNICIAN · LIVE CLASS  05/10/2026
   Main series A1 · don't / doesn't + verbo puro · Do / Does …? · o S
   não some, muda de lugar (she works → she doesn't work)
   O MUNDO (mantido): uma lavanderia às 11:30 da noite. Oito máquinas
   desenhadas; duas com aviso escrito à mão. O aluno é o técnico de
   plantão com a ficha de serviço: pergunta Does it…? e a ficha acende
   OK ou ✗. No caminho: a mulher do fundo, que não está ali para lavar
   nada, e o aviso da porta: WE DON'T CLOSE.
   Sem áudio (como na aula antiga): o professor faz o suporte técnico.
   Fila: FILA-LIVE-386.md · 013.
   23/10/2026 · OS FORMATOS NOVOS (kit/formatos.js + formatos2.js), mesmas
   páginas: IV = contar e separar as coisas em UMA / MAIS DE UMA (FM.separa);
   VI = a ficha de serviço: montar a pergunta de cada máquina, Check, e a
   ficha acende OK ou ✗ (FM.pergunta, SEIS verificações, eram oito);
   VII = ligar cada aviso à frase (FM.liga); VIII = a ligação ganha um
   minuto no relógio (FM.cronometro); IX = a mulher do fundo, uma linha de
   cada vez, e "I know it!" (FM.revela). VII deixa de ser extra
   (é fala); VIII e IX continuam extra. I, II, III, V, X e XI ficam.
   ============================================================ */
var L = [
  { k: 'capa', est: null, img: 'salao' },
  { k: 'casa', est: 'o', min: 7, img: 'salao', rot: 'I · Your House', t: 'Before the laundromat: your own house.', p: 'Pick a card. Answer out loud. Then the follow-up comes.' },
  { k: 'maquinas', est: 'o', min: 7, img: 'salao', rot: 'II · Eight Machines', t: 'Eight machines. Six work. Two have a sign.', p: 'Tap each machine. Read its line out loud.' },
  { k: 'move', est: 'f', min: 6, img: 'caixa', rot: 'III · The S Moves', t: 'The S never disappears. It moves.', p: 'Say the top line. Tap the S. Watch it move into DOES. Say the new line.' },
  { k: 'gx', est: 'f', min: 4, img: 'caixa', rot: 'IV · Right, Not This', t: 'Six pairs from the laundromat. One is right.', p: 'Read both out loud. Tap the right one. The other one gets crossed out.' },
  { k: 'conta', est: 'f', min: 6, img: 'salao', rot: 'V · One, or More?', t: 'Count the machines. The count chooses the word.', p: 'Tap a group, then its box. One thing: doesn’t. More than one: don’t. Then say the lines.' },
  { k: 'dois', est: 'f', min: 6, img: 'caixa', rot: 'VI · Never Two', t: 'Each line has the S in two places.', p: 'Say the line. Tap the word with the extra S. Then say it right.' },
  { k: 'ficha', est: 'o', min: 7, img: 'caixa', rot: 'VII · The Service Form', t: 'You’re the technician. Check each machine with a question.', p: 'Build each question out loud. Tap Check. The machine answers, and the form lights up.' },
  { k: 'avisos', est: 'o', min: 7, img: 'porta', rot: 'VIII · The Signs', t: 'Six pieces of paper, taped up by someone tired.', p: 'Match each sign to its sentence. Then say the sentence out loud.' },
  { k: 'suporte', est: 'o', min: 7, extra: 1, img: 'caixa', rot: 'IX · The Support Call', t: 'A phone call to technical support.', p: 'Round 1: you call, your teacher is support. Round 2: you are support.' },
  { k: 'mulher', est: 'o', min: 7, extra: 1, img: 'cadeira', rot: 'X · The Woman at the Back', t: 'Six things. None of them says who she is.', p: 'Open the lines one by one. Read each out loud. When you know why she is here, tap I know it.' },
  { k: 'porta', est: 'o', min: 7, extra: 1, img: 'porta', rot: 'XI · The Door', t: 'One sign, and it isn’t about a machine.', p: 'Open one step at a time. Say each step before the next.' },
  { k: 'fim', est: 'w', min: 6, img: 'salao', rot: 'XII · Your Service Form', t: 'Your own house: a service form.', p: 'Write five lines: what doesn’t work, what you don’t use, and two Does it…? questions. The red line watches the S. It goes to your My notes.' }
];

var CASA = [
  { k: 'AT HOME', q: 'What doesn’t work well in your house?', fup: 'Does it make noise?', st: ['My … doesn’t work.', 'It doesn’t …'], ex: 'My shower doesn’t get hot. It makes a lot of noise!' },
  { k: 'NEVER', q: 'What do you never use? Why not?', fup: 'Does anybody in your house use it?', st: ['I don’t use …', 'because it doesn’t …'], ex: 'I don’t use the oven. It doesn’t close well.' },
  { k: 'YOUR PHONE', q: 'What doesn’t your phone do well?', fup: 'Does it take good photos?', st: ['It doesn’t …'], ex: 'It doesn’t charge fast. The battery doesn’t last.' },
  { k: 'YOUR FAMILY', q: 'What doesn’t your family like?', fup: 'And you?', st: ['My mother doesn’t like …', 'We don’t …'], ex: 'My mother doesn’t like loud music. We don’t listen to it at home.' }
];

var MAQ = [
  { n: '01', luz: 1, fr: 'Machine one works. It gets hot.' },
  { n: '02', luz: 1, fr: 'Machine two works.' },
  { n: '03', luz: 0, fr: 'Machine three doesn’t work. It doesn’t take coins.', aviso: 'NO COINS' },
  { n: '04', luz: 1, fr: 'Machine four works, but it doesn’t get hot.' },
  { n: '05', luz: 1, fr: 'Machine five works.' },
  { n: '06', luz: 0, fr: 'Machine six doesn’t work. The door doesn’t close.', aviso: 'DOOR!' },
  { n: '07', luz: 1, fr: 'Machine seven works. It doesn’t stop at nine.' },
  { n: '08', luz: 1, fr: 'Machine eight works, and nobody uses it.' }
];

var MOVE = [
  { su: 'She', v: 'work', r: ' here.' }, { su: 'He', v: 'drive', r: ' at night.' }, { su: 'It', v: 'get', r: ' hot.' },
  { su: 'The door', v: 'close', r: '.' }, { su: 'Ana', v: 'have', r: ' coins.', has: 1 }, { su: 'The dryer', v: 'stop', r: ' at nine.' }
];

var CONTA = [
  { f: 'Machine three ___ take coins.', a: 0 },
  { f: 'Machines one and two ___ get hot.', a: 1 },
  { f: 'The door of machine six ___ close.', a: 0 },
  { f: 'Machines four, five and seven ___ stop at nine.', a: 1 },
  { f: 'Machine eight ___ have a sign.', a: 0 },
  { f: 'These machines ___ take cards.', a: 1 }
];
var SEPARA = { formato: 'separa', titulo: 'Count the machines. Tap a group, then its box.', caixas: ['ONE thing → doesn’t / does', 'MORE THAN ONE → don’t / do'], itens: [
  { t: 'Machine three', c: 0 }, { t: 'Machines one and two', c: 1 }, { t: 'The door of machine six', c: 0 },
  { t: 'Machines four, five and seven', c: 1 }, { t: 'Machine eight', c: 0 }, { t: 'These eight machines', c: 1 }
] };

var DOIS = [
  { p: ['She', 'doesn’t', 'likes', 'coffee.'], a: 2, fix: 'She doesn’t like coffee.' },
  { p: ['He', 'doesn’t', 'works', 'on', 'Sundays.'], a: 2, fix: 'He doesn’t work on Sundays.' },
  { p: ['Does', 'the', 'machine', 'takes', 'coins?'], a: 3, fix: 'Does the machine take coins?' },
  { p: ['Ana', 'doesn’t', 'has', 'a', 'car.'], a: 2, fix: 'Ana doesn’t have a car.' },
  { p: ['Does', 'it', 'gets', 'hot?'], a: 2, fix: 'Does it get hot?' },
  { p: ['My', 'brother', 'doesn’t', 'drives.'], a: 3, fix: 'My brother doesn’t drive.' }
];

var CHECKS = [
  { m: 'MACHINE 3', p: '(it · take · coins)?', r: 'Does it <b>take</b> coins?', sim: 0 },
  { m: 'MACHINE 6', p: '(the door · close)?', r: 'Does the door <b>close</b>?', sim: 0 },
  { m: 'MACHINES 4 & 5', p: '(they · get · hot)?', r: '<b>Do</b> they <b>get</b> hot?', sim: 1, plural: 1 },
  { m: 'MACHINES 4 & 5', p: '(they · stop · at nine)?', r: '<b>Do</b> they <b>stop</b> at nine?', sim: 0, plural: 1 },
  { m: 'THE DRYER', p: '(it · make · noise)?', r: 'Does it <b>make</b> noise?', sim: 1 },
  { m: 'THE DRYER', p: '(it · take · cards)?', r: 'Does it <b>take</b> cards?', sim: 0 }
];
function strip(s) { return String(s).replace(/<[^>]+>/g, ''); }

var AVISOS = [
  { t: 'NO COINS', g: -2, fr: 'This machine doesn’t take coins.' },
  { t: 'DOOR — PLEASE', g: 1.4, fr: 'The door doesn’t close by itself.' },
  { t: 'COLD ONLY', g: -1, fr: 'It doesn’t get hot.' },
  { t: 'NOT AFTER 9', g: 2, fr: 'These machines don’t stop at nine.' },
  { t: 'NO SHOES', g: -1.6, fr: 'We don’t wash shoes here.' },
  { t: 'WE DON’T CLOSE', g: .8, fr: 'This place doesn’t close.' }
];

var SUP = [
  { quem: 'YOU CALL · YOUR TEACHER IS SUPPORT', dica: 'Your washing machine doesn’t work. Explain three problems.', ex: 'Hi. My washing machine doesn’t work. It doesn’t get hot, the door doesn’t close, and it makes a strange noise.' },
  { quem: 'YOU ARE SUPPORT · YOUR TEACHER CALLS', dica: 'Ask at least three Does it…? questions.', ex: 'Does it turn on? Does it get hot? Does the door open? Does it make noise?' }
];
var IDEIAS = ['turn on', 'get hot', 'drain', 'stop', 'make noise', 'open'];
var PARTES = [{ k: 'neg', t: 'IT DOESN’T …' }, { k: 'perg', t: 'DOES IT …?' }, { k: 'curta', t: 'YES, IT DOES / NO, IT DOESN’T' }];

var MULHER = ['She doesn’t have a bag of clothes.', 'She doesn’t look at the machines.', 'She doesn’t use her phone.', 'She doesn’t talk to anybody.', 'She doesn’t leave when a machine stops.', 'She doesn’t come here to wash clothes.'];

var PORTA = [
  { k: 'WHAT THE SIGN SAYS', t: 'There is a sign on the front door. Same handwriting as the others. It says: WE DON’T CLOSE.' },
  { k: 'WHAT IT DOESN’T SAY', t: 'It doesn’t say when it opens. It doesn’t say “open late”. It says what this place doesn’t do.' },
  { k: 'AND SO', t: 'It’s 11:30. Her clothes aren’t going round. This place doesn’t close. That’s why she’s still here.' }
];

var LIGA_AV = { formato: 'liga', titulo: 'Six signs on the wall. Match each sign to its sentence. Then say it.', pares: AVISOS.map(function (a) { return [a.t, a.fr]; }), ordemDireita: [3, 0, 5, 2, 4, 1] };

var S = { i: 0, faixa: 1, fala: {}, resp: {}, armas: {},
  casa: { sel: -1, foi: {} }, maq: { sel: -1, lidas: {} }, move: { n: 0, foi: 0 }, dois: { n: 0, toc: -1 },
  sup: { n: 0, partes: {}, erro: {} }, porta: { n: 0 } };

function maquina(m, i, o) {
  o = o || {};
  var on = m.luz;
  return '<button type="button" class="maq' + (on ? ' roda' : ' parada') + (o.sel ? ' on' : '') + (o.luz ? ' acesa' : '') + (o.apaga ? ' apagada' : '') + '"' + (o.acao ? ' data-a="' + o.acao + '" data-n="' + i + '"' : ' tabindex="-1"') + '>'
    + '<span class="painel-m"><i class="led"></i>' + m.n + '</span><span class="porta-m"><span class="vidro-m"><i class="roupa"></i></span></span>' + (m.aviso && !o.semAviso ? '<span class="aviso-m">' + m.aviso + '</span>' : '') + '</button>';
}

var R = {};
R.capa = function () {
  return '<div class="capa"><div class="lado-a"><span class="kick">MAIN SERIES · THE NIGHT TECHNICIAN · A1</span><h1>It Doesn’t <b>Work</b></h1>'
    + '<p class="sub">11:30 PM. You’re the night technician. Ask the machines, and read what they don’t do.</p>'
    + '<div class="chipsx"><span class="pilula">don’t · doesn’t</span><span class="pilula">Does it…?</span><span class="pilula">the S moves</span><span class="pilula">Live Class · W·O·L·F</span></div>'
    + '<button type="button" class="btn cheio" data-a="ir" data-n="1">Start the night shift</button>' + faixaLive() + '</div>'
    + '<div class="foto"><img src="' + img('salao') + '" alt="A laundromat at night, a long row of washing machines"><div class="placa-capa"><small>LAUNDROMAT</small><b>11:30 PM</b><span>WE DON’T CLOSE</span></div></div></div>';
};
R.casa = function (c) { return cartasPessoais(c, CASA, S.casa, 'casa'); };

R.maquinas = function (c) {
  var e = S.maq, x = e.sel >= 0 ? MAQ[e.sel] : null, lidas = Object.keys(e.lidas).length;
  return cab(c) + '<div class="lavanderia vd">' + MAQ.map(function (m, i) { return maquina(m, i, { acao: 'mq', sel: e.sel === i }); }).join('') + '</div>'
    + '<div class="foco">' + (x ? '<div class="pergunta vd"><small>MACHINE ' + x.n + '</small><h2>' + x.fr + '</h2></div>' : '<p class="dica-aluno" style="text-align:center">Tap a machine.</p>')
    + (lidas === MAQ.length ? '<p class="aprova" style="text-align:center">Eight machines. Five lines say what a machine doesn’t do.</p>' : '') + '</div>';
};

R.move = function (c) {
  var e = S.move, n = e.n, fim = n >= MOVE.length, x = MOVE[Math.min(n, MOVE.length - 1)];
  if (fim) return cab(c) + trilha(MOVE, n) + '<div class="foco"><div class="pergunta vd"><small>SIX LINES</small><h2>One S before, one S after. It only changed address.</h2></div></div>';
  var verboS = x.has ? 'has' : x.v + (/[sxz]$|ch$|sh$/.test(x.v) ? 'es' : 's');
  var cima = '<div class="linha-s vd"><span>' + x.su + '</span> <span class="verbo">' + (e.foi ? x.v : (x.has ? 'ha<b class="s">s</b>' : x.v + '<b class="s" data-a="mv">' + (/[sxz]$|ch$|sh$/.test(x.v) ? 'es' : 's') + '</b>')) + '</span>' + x.r + '</div>';
  var baixo = e.foi ? '<div class="linha-s nova vd"><span>' + x.su + '</span> <span class="does">doe<b class="s chega">s</b>n’t</span> <span class="verbo">' + x.v + '</span>' + x.r + '</div>' : '';
  return cab(c) + trilha(MOVE, n) + '<div class="foco">' + cima + (e.foi ? '' : '<div style="text-align:center"><button type="button" class="btn cheio" data-a="mv">Tap the S · make it negative</button></div>') + baixo
    + (e.foi ? '<p class="aprova" style="text-align:center">GOT IT. The S moved into DOES, and the verb is plain: <b>' + x.su + ' doesn’t ' + x.v + x.r + '</b>' + (x.has ? ' (HAS goes back to HAVE.)' : '') + '</p><div style="text-align:center"><button type="button" class="btn" data-a="mv-prox">Next line</button></div>' : '') + '</div>';
};

R.conta = function (c) {
  var e = (S.fq && S.fq.cnt && S.fq.cnt.em) || {}, pronta = SEPARA.itens.every(function (x, i) { return e[i] === x.c; });
  return cab(c) + '<div class="lavanderia vd">' + MAQ.map(function (m, i) { return maquina(m, i, { semAviso: 1 }); }).join('') + '</div>'
    + '<div class="fm-gap"></div>' + FM.ex('cnt', SEPARA)
    + (pronta ? '<div class="foco"><ol class="fm-linhas" style="max-width:760px;margin:14px auto 0">' + CONTA.map(function (x) { return '<li><p>' + x.f.replace('___', '<b>' + ['doesn’t', 'don’t'][x.a] + '</b>') + '</p></li>'; }).join('') + '</ol><p class="aprova" style="text-align:center">Say the six lines. One thing: doesn’t. More than one: don’t. The count chooses the word.</p></div>' : '');
};

R.dois = function (c) {
  var e = S.dois, n = e.n, fim = n >= DOIS.length, x = DOIS[Math.min(n, DOIS.length - 1)];
  if (fim) return cab(c) + trilha(DOIS, n) + '<div class="foco"><div class="pergunta vd"><small>SIX LINES</small><h2>One S per sentence, in answers and in questions.</h2></div></div>';
  var certo = e.toc === x.a;
  return cab(c) + trilha(DOIS, n) + '<div class="foco"><div class="frase-s vd">' + x.p.map(function (w, i) {
    if (certo && i === x.a) return '<span class="pal certo"><s>' + w + '</s></span>';
    return '<button type="button" class="pal' + (e.toc === i ? ' errado' : '') + '" data-a="ds" data-n="' + i + '"' + (certo ? ' disabled' : '') + '>' + w + '</button>';
  }).join('') + '</div>'
    + (certo ? '<p class="aprova" style="text-align:center">GOT IT. Say it right: <b>' + x.fix + '</b></p><div style="text-align:center"><button type="button" class="btn" data-a="ds-prox">Next</button></div>' : (e.toc >= 0 ? '<p class="recusa" style="text-align:center">DOES already has the S. Find the other one.</p>' : '<p class="dica-aluno" style="text-align:center">Say the line. Tap the word with the extra S.</p>')) + '</div>';
};

R.ficha = function (c) {
  var v = (S.fq && S.fq.fch && S.fq.fch.ver) || {}, feitos = CHECKS.filter(function (_, i) { return v[i]; }).length, ult = -1;
  CHECKS.forEach(function (_, i) { if (v[i]) ult = i; });
  var form = '<div class="form-servico vd"><small>SERVICE FORM · NIGHT SHIFT · 11:30 PM</small>' + CHECKS.map(function (k, i) {
    var r = !!v[i]; return '<p class="' + (!r && i === CHECKS.findIndex(function (_, j) { return !v[j]; }) ? 'agora' : '') + '"><span>' + k.m + '</span><em>' + (r ? strip(k.r) : '…') + '</em><b class="' + (r ? (k.sim ? 'sim' : 'nao') : '') + '">' + (r ? (k.sim ? 'OK' : '✗') : '') + '</b></p>';
  }).join('') + '</div>';
  var k = ult >= 0 ? CHECKS[ult] : null;
  var resposta = k ? (k.plural ? (k.sim ? 'Yes, they do.' : 'No, they don’t.') : (k.sim ? 'Yes, it does.' : 'No, it doesn’t.')) : '';
  return cab(c) + '<div class="mesa-ficha">' + form + '<div class="lado-ficha">'
    + FM.ex('fch', { formato: 'pergunta', titulo: 'Ask each machine out loud. Tap Check. The machine answers.', itens: CHECKS.map(function (x) { return { p: x.m + ' · ' + x.p, r: x.r }; }) })
    + (k ? '<div class="resposta-maq vd ' + (k.sim ? 'sim' : 'nao') + '"><small>' + k.m + ' ANSWERS</small><b>' + resposta + '</b></div>' : '')
    + (feitos === CHECKS.length ? '<div class="pergunta vd"><small>THE FORM IS FULL</small><h2>Six checks. Machine three and machine six need a technician tomorrow.</h2></div>' : '') + '</div></div>';
};

R.avisos = function (c) {
  var p = (S.fq && S.fq.av && S.fq.av.par) || {}, ligou = AVISOS.every(function (_, i) { return p[i] === i; });
  return cab(c) + '<div class="parede-avisos">' + AVISOS.map(function (a, i) { return '<button type="button" class="aviso-p' + (p[i] === i ? ' feito' : '') + '" tabindex="-1" style="pointer-events:none;transform:rotate(' + a.g + 'deg)"><i class="fita"></i>' + a.t + '</button>'; }).join('') + '</div>'
    + '<div class="fm-gap"></div>' + FM.ex('av', LIGA_AV)
    + '<p class="so-prof" style="text-align:center;color:var(--t3)">The last sign (WE DON’T CLOSE) is not about a machine. Let the student notice.</p>'
    + (ligou ? '<p class="aprova" style="text-align:center">Six signs. One of them is not about a machine.</p>' : '');
};

R.suporte = function (c) {
  var s = S.sup, n = s.n, fim = n >= SUP.length, x = SUP[Math.min(n, SUP.length - 1)];
  if (fim) return cab(c) + trilha(SUP, n) + '<div class="foco"><div class="pergunta vd"><small>TWO CALLS</small><h2>And the S never doubled.</h2></div></div>';
  var pt = s.partes[n] || {}, err = s.erro[n];
  return cab(c) + trilha(SUP, n) + '<div class="mesa-sup"><div class="tel-sup vd"><span class="ring">📞</span><small>' + x.quem + '</small><h3>' + x.dica + '</h3><div class="ideias">' + IDEIAS.map(function (w) { return '<span class="chip palavra">' + w + '</span>'; }).join('') + '</div></div>'
    + '<div class="lado-sup"><div class="partes"><h5>WHAT YOU HEAR</h5>' + PARTES.map(function (p) { return '<button type="button" class="chip frase' + (pt[p.k] ? ' on' : '') + '" data-a="sp-parte" data-v="' + p.k + '">' + p.t + '</button>'; }).join('')
    + '<button type="button" class="chip frase erro-ouvido' + (err ? ' on' : '') + '" data-a="sp-erro">MISTAKE HEARD: it don’t / does it works?</button></div>'
    + (err ? '<p class="recusa">One thing: it doesn’t work. Does it work?</p>' : '') + FM.ex('crono' + n, { formato: 'cronometro', titulo: 'One minute on the phone', segundos: 60 }) + mostra('sp' + n, x.ex, 1) + '<div><button type="button" class="btn" data-a="sp-prox">' + (n ? 'End the call' : 'Swap · round 2') + '</button></div></div></div>';
};

R.mulher = function (c) {
  return cab(c) + '<div class="mesa-mulher"><div class="cadeira-foto vd" style="background-image:url(' + img('cadeira') + ')"><span>THE BACK OF THE ROOM · 11:30 PM</span></div><div class="lado-mulher">'
    + FM.ex('mlh', { formato: 'revela', titulo: 'Six things she doesn’t do. Why is she here?', pistas: MULHER, mais: 'Next line', botao: 'I know it! Show', resposta: 'Maybe she doesn’t want to be alone. The laundromat is warm and it doesn’t close.' }) + '</div></div>';
};

R.porta = function (c) {
  var p = S.porta, n = p.n;
  return cab(c) + '<div class="mesa-porta"><div class="porta-foto vd" style="background-image:url(' + img('porta') + ')">' + (n >= 1 ? '<span class="papel-porta">WE DON’T CLOSE</span>' : '') + '</div><div class="passos-porta">' + PORTA.map(function (s, i) {
    return i < n ? '<div class="passo vd"><small>' + (i + 1) + ' · ' + s.k + '</small><p>' + s.t + '</p></div>' : '';
  }).join('') + (n < PORTA.length ? '<div><button type="button" class="btn cheio" data-a="pt">' + (n ? 'Open the next step' : 'Look at the door') + '</button></div>' : '<p class="aprova">The negatives were never really about machines.</p>') + '</div></div>';
};

R.fim = function (c) {
  return cab(c) + '<div class="fim">' + escritaFinal('fim', (S.txt || {}).fim || '', (S.salvo || {}).fim, 'SERVICE FORM · MY HOUSE\nMy shower doesn’t get hot.\nDoes it …?', 'Your service form',
    ['doesn’t ', 'don’t ', 'Does it ', 'Do they ', 'work', 'get hot', 'close', 'make noise'], ['YOUR SERVICE FORM', 'Your own house: what doesn’t work, what you don’t use, and two questions for a technician.'])
    + '<div class="lado-fim"><div class="grande vd"><span>She work<u>s</u> → She doe<u>s</u>n’t work.</span><span><u>Does</u> it get hot? No, it doesn’t.</span><small>One thing: doesn’t, does. More than one: don’t, do. One S per sentence.</small></div>'
    + mostra('fim', 'SERVICE FORM · MY HOUSE<br>My shower doesn’t get hot.<br>The kitchen door doesn’t close.<br>We don’t use the oven.<br>Does it need a new part? Do the windows close well?', 1)
    + '<p class="hw"><a class="pilula" href="HW/" target="_blank" rel="noopener">Homework for the student →</a></p></div></div>';
};

TOQUES.mq = function (b, n) { S.maq.sel = n; S.maq.lidas[n] = 1; };
TOQUES.mv = function () { S.move.foi = 1; };
TOQUES['mv-prox'] = function () { S.move = { n: S.move.n + 1, foi: 0 }; };
TOQUES.ds = function (b, n) { var x = DOIS[S.dois.n]; if (!x || S.dois.toc === x.a) return false; S.dois.toc = n; };
TOQUES['ds-prox'] = function () { S.dois = { n: S.dois.n + 1, toc: -1 }; };
TOQUES['sp-parte'] = function (b, n, v) { var s = S.sup; s.partes[s.n] = s.partes[s.n] || {}; s.partes[s.n][v] = !s.partes[s.n][v]; };
TOQUES['sp-erro'] = function () { var s = S.sup; s.erro[s.n] = !s.erro[s.n]; };
TOQUES['sp-prox'] = function () { S.sup.n++; };
TOQUES.pt = function () { S.porta.n++; };

/* 10/11/2026 · AS EXPLICAÇÕES (kit/formatos3.js) · G3 · uma cena curta nova (k: gx) antes de conta.
   Explicação 100% em inglês: see → notice → use (o aluno fala ou escreve uma frase dele no fim). */
var GX_EXPLICA = { formato: 'certoErrado', titulo: 'Right, not this. Tap the right one.',
  pares: [
    { c: 'Machine 4 <b>doesn’t work</b>.', x: 'Machine 4 doesn’t works.', d: 'The S is in doesn’t. work stays clean.' },
    { c: 'The dryers <b>don’t</b> take coins.', x: 'The dryers doesn’t take coins.', d: 'More than one machine: don’t.' },
    { c: '<b>Does</b> it spin?', x: 'Do it spin?', d: 'It is one thing: does.' },
    { c: 'It <b>doesn’t</b> dry the clothes.', x: 'It no dry the clothes.', d: 'For no: doesn’t + verb.' },
    { c: '<b>Does</b> the door <b>close</b>?', x: 'Does the door closes?', d: 'The S is in does. Never two.' },
    { c: 'I <b>don’t</b> have coins.', x: 'I doesn’t have coins.', d: 'I, you, we, they: don’t.' }
  ],
  nota: 'The S lives in one place only. With <b>does</b> or <b>doesn’t</b>, the verb has no S: it doesn’t work, does it spin?',
  uso: { p: 'Your turn. Something in your house: one thing that doesn’t work, and one question for the technician.', molde: ['My … doesn’t …', 'Does it …?'], ex: 'My microwave doesn’t heat the food. Does it need a new part?' } };
R.gx = function (c) { return cab(c) + FM.ex('gx_certo', GX_EXPLICA); };
