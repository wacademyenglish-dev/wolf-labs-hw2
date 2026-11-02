/* ============================================================
   TWO HUNDRED AND TWENTY WORDS · THE X-RAY · LIVE CLASS  06/10/2026
   Main series C1 · nominalização: desmontar o substantivo (verbo + quem
   faz) e montar um quando o relatório precisa ser curto; -tion, -ment,
   -al, -ance e a forma zero (a cut, a rise, a delay); empilhar antes do
   substantivo no lugar de cadeias de OF; e saber quem sumiu.
   Erros: a cutting / a rising · improvation · refusement · the reduction
   of the costs of the transport · A decision was made (sem a pessoa).
   O MUNDO (da aula velha): a carta da prefeitura que corta uma linha de
   ônibus escolar sem dizer quem decidiu; as duas respostas dos
   moradores; o projeto em 60 segundos. Sem áudio, sem vídeo. As três
   fotos da pasta mantidas (carta, parada, prédio); IMAGENS.md sem
   homenagem.
   A CARA (nova; a velha era relatório que encolhe, CLARO): o RAIO-X —
   a carta oficial em negativo azul; tocar um substantivo acende a lupa
   e mostra o verbo e a pessoa escondidos dentro dele; e o QUADRO DOS
   DESAPARECIDOS: a cada compressão, a pessoa que sumiu vira um cartão
   "MISSING" na parede lateral (THE COMPANY, THE CUSTOMERS, THE TEAM…).
   Fila: FILA-LIVE-386.md · 149. Pasta piloto-twotwenty (conferida).
   ============================================================ */
var L = [
  { k: 'capa', est: null, img: 'parada' },
  { k: 'abre', est: 'o', min: 7, img: 'carta', rot: 'I · A Long Email', t: 'Think of a long, formal email you wrote recently.', p: 'Tap who it was to. Then answer out loud.' },
  { k: 'carta', est: 'l', min: 7, img: 'carta', rot: 'II · The Letter', t: 'A letter from the city. Somewhere inside it, a school bus stops running.', p: 'Read the whole letter out loud. Then answer three questions, or say that you can’t.' },
  { k: 'raiox', est: 'f', min: 6, img: 'carta', rot: 'III · The X-Ray', t: 'Every noun in the letter has a verb inside it, and a person who does it.', p: 'Tap a noun to X-ray it. Choose the verb. Then say who would do it.' },
  { k: 'regra', est: 'f', min: 6, img: 'predio', rot: 'IV · How English Builds Them', t: '-tion, -ment, -al, -ance, and a fifth form with no ending at all.', p: 'Choose the noun. Say a short phrase with it.' },
  { k: 'encolhe', est: 'f', min: 6, img: 'predio', rot: 'V · Who Disappeared?', t: 'Six long sentences for a one-page report. Condense the verbs into nouns.', p: 'Choose the short version. Then say who disappeared: they go on the wall.' },
  { k: 'pilha', est: 'f', min: 6, img: 'carta', rot: 'VI · Stack It', t: 'English stacks before the noun instead of hanging chains of OF behind it.', p: 'Choose the stacked version. Read it from the end.' },
  { k: 'resposta', est: 'o', min: 7, extra: 1, img: 'predio', rot: 'VII · The Reply That Worked', t: 'Two residents replied to the city. Only one got a meeting.', p: 'Read both replies. Answer the questions out loud. Is it fair?' },
  { k: 'projeto', est: 'o', min: 7, extra: 1, img: 'carta', rot: 'VIII · Sixty Seconds', t: 'Summarize a project in sixty seconds for a busy director. Use the nouns, and keep the people.', p: 'Choose each part. Say it. Then say your own version.' },
  { k: 'fim', est: 'w', min: 6, img: 'parada', rot: 'IX · Your Email, Shorter', t: 'Your email from scene I. Shorter, with nouns, and you still in it.', p: 'Write the short version and name who is responsible. It goes to your My notes.' }
];

var DEST = ['my boss', 'a client', 'a school', 'a landlord', 'a company', 'my team'];
var ABRE = [
  { q: 'What did you need to say?', fup: 'Did they answer?', st: ['I needed to …'], ex: 'I needed to ask for a later deadline.' },
  { q: 'How long was it, and why so long?', fup: 'What could you cut?', st: ['About … paragraphs, because …'], ex: 'About five paragraphs, because I explained everything twice.' },
  { q: 'Say the main point in one sentence.', fup: 'Keep it: at the end you will shrink it.', st: ['I asked …'], ex: 'I asked my boss to move the deadline to Friday because the client changed the brief.' }
];

var CARTA = 'Dear Resident, Following a comprehensive review of route [provision] across the district, the Department has completed an [assessment] of network [utilization]. This assessment has resulted in the identification of certain low-utilization services. A recommendation for the [discontinuation] of these services has been made, with [implementation] scheduled for March 1. [Notification] of affected households is currently in progress. Thank you for your continued understanding.';
var PERG = [
  { q: 'What is the city actually going to do?', ops: ['Stop some bus routes.', 'Improve some bus routes.', 'Only review the bus routes.'], w: '“The discontinuation of certain low-utilization services” = they will STOP some buses.' },
  { q: 'When?', ops: ['On March 1.', 'After a meeting with residents.', 'The letter doesn’t say.'], w: 'One date, hidden inside “with implementation scheduled for…”.' },
  { q: 'Who decided?', ops: ['Nobody is named.', 'The mayor.', 'The residents.'], w: '“A recommendation… has been made.” By whom? The noun deleted the person.' }
];

/* o raio-x: o substantivo, o verbo, quem faz */
var RAIO = [
  { w: 'provision', ops: ['provide', 'prove', 'provoke'], quem: 'THE CITY provides routes.' },
  { w: 'assessment', ops: ['assess', 'assist', 'assign'], quem: 'THE DEPARTMENT assessed the network.' },
  { w: 'utilization', ops: ['use', 'utter', 'update'], quem: 'PEOPLE use the buses.' },
  { w: 'discontinuation', ops: ['discontinue', 'discount', 'discover'], quem: 'THE CITY will discontinue the routes.' },
  { w: 'implementation', ops: ['implement', 'imply', 'improve'], quem: 'THE DEPARTMENT will implement the plan.' },
  { w: 'notification', ops: ['notify', 'note', 'notice'], quem: 'THE CITY is notifying the families.' }
];

var FORMAS = [
  { esq: 'decide → a ___', ops: ['decision', 'decidement', 'decidal'], f: '-ion' },
  { esq: 'improve → an ___', ops: ['improvement', 'improvation', 'improval'], f: '-ment' },
  { esq: 'prices rise → a ___ in prices', ops: ['rise', 'rising', 'risement'], f: 'ZERO' },
  { esq: 'refuse → a ___', ops: ['refusal', 'refusement', 'refusation'], f: '-al' },
  { esq: 'perform → a strong ___', ops: ['performance', 'performation', 'performal'], f: '-ance' },
  { esq: 'they cut the budget → a budget ___', ops: ['cut', 'cutting', 'cutment'], f: 'ZERO' }
];

var ENCOLHE = [
  { longa: 'Because the company decided to close the office, many people lost their jobs.', ops: ['The office closure led to many job losses.', 'The office closing decision made people lose jobs a lot.', 'The closure of the office of the company of the city.'], sumiu: 'THE COMPANY', w: 'Who decided? The company.' },
  { longa: 'Prices rose sharply, so customers bought less.', ops: ['A sharp price rise reduced demand.', 'A sharp rising of prices made the buying less.', 'The rise of the prices of the shops of the city.'], sumiu: 'THE CUSTOMERS', w: 'Who bought less? The customers: now “demand”.' },
  { longa: 'The team improved the process, and so they delivered faster.', ops: ['Process improvements enabled faster delivery.', 'The improvation of the process made delivering faster.', 'The improvement of the process of the team of delivery.'], sumiu: 'THE TEAM', w: 'Who improved it? The team.' },
  { longa: 'We analyzed the data carefully, and we found that sales had fallen.', ops: ['Careful data analysis revealed a fall in sales.', 'A careful analyzing of the data found falling of sales.', 'The analysis of the data of the sales of the year.'], sumiu: 'US', w: 'Who analyzed it? We did.' },
  { longa: 'The city will stop some buses on March 1 because not many people use them.', ops: ['Low-use bus routes will be discontinued on March 1.', 'The stopping of the buses of low using on March 1.', 'The discontinuation of the buses of the routes of the city.'], sumiu: 'THE CITY', w: 'Who will stop them? The city, again.' },
  { longa: 'The board refused to approve the budget, so the project was delayed.', ops: ['The board’s refusal to approve the budget caused a project delay.', 'The refusement of the board made the delaying of the project.', 'The refusal of the approval of the budget of the board.'], sumiu: '', w: 'This one kept the person: the board.' }
];

var TRAPS = [
  ['THE ZERO FORM', 'There was a cutting in the budget.', 'There was a <b>cut</b> in the budget.', 'Many nouns are the verb itself: a cut, a rise, a delay, a change.'],
  ['A REAL NOUN', 'The improvation was clear.', 'The <b>improvement</b> was clear.', 'Say it out loud: does it exist? -ment, -al, -ance, -tion.'],
  ['STACK, DON’T CHAIN', 'the reduction of the costs of the transport', '<b>transport cost reduction</b>', 'Modifiers before the noun. The main noun is last.'],
  ['WHO DID IT?', 'A decision was made.', '<b>The director decided</b> on May 3.', 'A noun can delete the person. Put them back when it matters.']
];

var PILHA = [
  { plain: 'the reduction of the costs of transport', ops: ['transport cost reduction', 'reduction transport cost', 'costs transport reduction'] },
  { plain: 'a review of the provision of routes', ops: ['a route provision review', 'a provision routes review', 'a review route provision'] },
  { plain: 'the growth of sales in the second quarter', ops: ['second-quarter sales growth', 'sales second-quarter growth', 'growth second-quarter sales'] },
  { plain: 'a delay in the delivery of the project', ops: ['a project delivery delay', 'a delivery project delay', 'a delay project delivery'] }
];

var RESP = [
  { q: '“Which reply got a meeting with the city? Why?”', fup: 'Is that fair?', st: ['B, because …'], ex: 'B, the compressed one. It speaks the city’s language, and it gives a number.' },
  { q: '“What did B lose that A had?”', fup: 'Does it matter?', st: ['It lost …'], ex: 'It lost the person: the son. Forty children is a number, not a face.' },
  { q: '“Write a version that keeps both the number and the son.”', fup: 'Read it out loud.', st: ['The route discontinuation will …, including my son …'], ex: 'The route discontinuation will block school access for 40 children, including my son, Leo. I request a review meeting.' }
];

var PROJ = [
  { rot: 'THE GOAL', ops: ['Our goal was a 20% reduction in delivery time.', 'Our goal it was that we reduce the time that deliveries take by 20%.', 'Our goal was a 20% reducement of delivery time.'], meu: 'Your goal, in one noun phrase.' },
  { rot: 'WHAT WE DID', ops: ['My team led a full process review and two system changes.', 'A review was made and changes were done.', 'My team did a reviewing of processes and changings.'], meu: 'What you did, and name who did it.' },
  { rot: 'THE RESULT', ops: ['The result was a 25% drop in delays and a rise in client satisfaction.', 'The result was a 25% dropping of delays.', 'A result was obtained.'], meu: 'Your result, with a number.' }
];

var S = { i: 0, faixa: 1, fala: {}, resp: {}, armas: {},
  ab: { dest: '', n: 0, foi: {} }, ca: { n: 0, esc: -1 }, rx: { sel: -1, esc: {} }, fo: { n: 0, esc: -1 }, en: { n: 0, esc: -1 }, pi: { n: 0, esc: -1 }, re: { n: 0, foi: {} }, pr: { n: 0, esc: -1 } };

/* a carta em negativo; os substantivos marcados viram lupas */
function carta(clicavel, achados) {
  achados = achados || {};
  var i = -1;
  return '<div class="nz-carta vd"><div class="nz-timbre"><b>CITY TRANSPORT DEPARTMENT</b><small>REF. RT-2026-114 · NOTICE TO RESIDENTS</small></div><p>' + CARTA.replace(/\[([A-Za-z]+)\]/g, function (m, w) {
    i++; var k = RAIO.map(function (r) { return r.w; }).indexOf(w.toLowerCase());
    return clicavel ? '<button type="button" class="nz-nome' + (achados[k] ? ' raio' : '') + (S.rx.sel === k ? ' on' : '') + '" data-a="rx-s" data-n="' + k + '">' + w + '</button>' : '<b class="nz-nome-f">' + w + '</b>';
  }) + '</p><div class="nz-carimbo">NO NAME · NO PERSON</div></div>';
}
function desaparecidos(lista) {
  return '<div class="nz-parede vd"><small>THE MISSING · WHO THE NOUNS DELETED</small><div>' + (lista.length ? lista.map(function (p) { return '<span class="nz-sumido"><i></i><b>' + p + '</b><em>MISSING</em></span>'; }).join('') : '<span class="nz-vazio">nobody yet</span>') + '</div></div>';
}
function tres(acao, ops, esc, semente, classe) {
  return '<div class="nz-ops' + (classe ? ' ' + classe : '') + '">' + ordem(ops.map(function (o, i) { return [o, i]; }), semente).map(function (o) { return '<button type="button" class="versao' + (esc === o[1] ? (o[1] === 0 ? ' certo' : ' errado') : '') + '" data-a="' + acao + '" data-n="' + o[1] + '">' + o[0] + '</button>'; }).join('') + '</div>';
}

var R = {};
R.capa = function () {
  return '<div class="capa"><div><span class="kick">MAIN SERIES · C1 · NOMINALIZATION</span><h1>Two Hundred <b>and Twenty Words</b></h1>'
    + '<p class="sub"><i>The discontinuation of certain low-utilization services.</i> Somewhere in there, a school bus stops running. <b>Nobody says who decided.</b></p>'
    + '<div class="chipsx"><span class="pilula">a cut, a rise</span><span class="pilula">transport cost reduction</span><span class="pilula">who did it?</span><span class="pilula">Live Class · W·O·L·F</span></div>'
    + '<button type="button" class="btn cheio" data-a="ir" data-n="1">Open the letter</button>' + faixaLive() + '</div>'
    + '<div class="capa-r">' + carta(0) + desaparecidos(['THE CITY', 'THE DEPARTMENT']) + '</div></div>';
};

R.abre = function (c) {
  var e = S.ab;
  var chips = '<div class="nz-dests">' + DEST.map(function (t) { return '<button type="button" class="pilula' + (e.dest === t ? ' on' : '') + '" data-a="ab-d" data-v="' + h(t) + '">' + t + '</button>'; }).join('') + '</div>';
  if (!e.dest) return cab(c) + chips + '<p class="dica-aluno" style="text-align:center">Who was the email to?</p>';
  return cab(c) + chips + sequencia({ est: 'o', rot: '', t: '', p: '' }, ABRE, e, 'ab', 'Keep your one sentence. At the end you shrink it, and check who disappeared.').replace(/<div class="cab[\s\S]*?<\/p><\/div>/, '');
};

R.carta = function (c) {
  var e = S.ca, n = e.n, fim = n >= PERG.length;
  var lado = fim ? '<div class="pergunta vd"><small>THREE ANSWERS</small><h2>A whole letter. One event, one date, and not one person.</h2></div>'
    : '<div class="pergunta vd ja"><small>QUESTION ' + (n + 1) + ' OF 3</small><h2>' + PERG[n].q + '</h2></div>' + tres('ca', PERG[n].ops, e.esc, n + 1)
      + (e.esc === 0 ? '<div class="nz-linha-ok"><p class="aprova">' + PERG[n].w + '</p><button type="button" class="btn" data-a="ca-prox">Next</button></div>' : e.esc > 0 ? '<p class="recusa">Look for the longest noun in the letter: the event is hiding inside it.</p>' : '');
  return cab(c) + '<div class="mesa-c"><div class="lado-l">' + carta(0) + '</div><div class="lado-l">' + lado + '</div></div>';
};

R.raiox = function (c) {
  var e = S.rx, achados = {};
  Object.keys(e.esc).forEach(function (k) { if (e.esc[k] === 0) achados[k] = 1; });
  var lado;
  if (e.sel < 0) lado = '<div class="pergunta vd"><small>THE X-RAY</small><h2>Tap a highlighted noun in the letter.</h2></div>';
  else {
    var x = RAIO[e.sel], ok = e.esc[e.sel] === 0;
    lado = '<div class="nz-lupa vd' + (ok ? ' on' : '') + '"><small>INSIDE THE NOUN</small><b>' + x.w + '</b><span class="nz-seta">↓</span>' + (ok ? '<p><em>verb</em> ' + x.ops[0] + '</p><p class="nz-pessoa"><em>who?</em> ' + x.quem + '</p>' : '<p class="nz-vazio">which verb is inside?</p>') + '</div>'
      + tres('rx', x.ops, e.esc[e.sel], e.sel + 2, 'linha3') + (e.esc[e.sel] > 0 ? '<p class="recusa">Say the noun slowly. Which verb do you hear at the start?</p>' : ok ? '<p class="aprova">Now a full sentence, with the person in front.</p>' : '');
  }
  return cab(c) + '<div class="mesa-c"><div class="lado-l">' + carta(1, achados) + '<p class="nz-conta">' + Object.keys(achados).length + ' / 6 NOUNS X-RAYED</p></div><div class="lado-l">' + lado + '</div></div>';
};

R.regra = function (c) {
  var e = S.fo, n = e.n, fim = n >= FORMAS.length;
  var faixa = '<div class="nz-cinco">' + [['-TION', 'decision'], ['-MENT', 'improvement'], ['-AL', 'refusal'], ['-ANCE', 'performance'], ['ZERO', 'a cut · a rise']].map(function (f) { return '<div class="nz-tipo vd' + (f[0] === 'ZERO' ? ' zero' : '') + '"><small>' + f[0] + '</small><p>' + f[1] + '</p></div>'; }).join('') + '</div>';
  if (fim) return cab(c) + faixa + armas(TRAPS);
  var x = FORMAS[n], ok = e.esc === 0;
  return cab(c) + faixa + trilha(FORMAS, n) + '<div class="foco"><div class="nz-esq vd"><p>' + x.esq.replace('___', ok ? '<b>' + x.ops[0] + '</b>' : '<u>___</u>') + '</p>' + (ok ? '<small>' + x.f + '</small>' : '') + '</div>' + tres('fo', x.ops, e.esc, n + 3, 'linha')
    + (ok ? '<div class="nz-linha-ok centro"><p class="aprova">Use it in a short phrase.</p><button type="button" class="btn" data-a="fo-prox">Next</button></div>' : e.esc > 0 ? '<p class="recusa" style="text-align:center">Say it out loud. Does it exist? The shortest one is often the native one.</p>' : '') + '</div>';
};

R.encolhe = function (c) {
  var e = S.en, n = e.n, fim = n >= ENCOLHE.length;
  var lista = ENCOLHE.slice(0, n + (e.esc === 0 ? 1 : 0)).map(function (x) { return x.sumiu; }).filter(Boolean);
  if (fim) return cab(c) + '<div class="mesa-c"><div class="lado-l"><div class="pergunta vd"><small>SIX SENTENCES</small><h2>Shorter every time, and in five of them somebody quietly disappeared.</h2></div></div><div class="lado-l">' + desaparecidos(lista) + '</div></div>';
  var x = ENCOLHE[n], ok = e.esc === 0;
  return cab(c) + trilha(ENCOLHE, n) + '<div class="mesa-c"><div class="lado-l"><div class="nz-longa vd"><small>THE LONG VERSION · ' + x.longa.split(' ').length + ' WORDS</small><p>' + x.longa + '</p></div>' + tres('en', x.ops, e.esc, n + 4)
    + (ok ? '<div class="nz-linha-ok"><p class="aprova">' + x.w + '</p><button type="button" class="btn" data-a="en-prox">Next</button></div>' : e.esc > 0 ? '<p class="recusa">Is it shorter? Is every noun a real English noun? Is there a chain of OF?</p>' : '') + '</div>'
    + '<div class="lado-l">' + desaparecidos(lista) + '</div></div>';
};

R.pilha = function (c) {
  var e = S.pi, n = e.n, fim = n >= PILHA.length;
  if (fim) return cab(c) + trilha(PILHA, n) + '<div class="foco"><div class="pergunta vd"><small>FOUR STACKS</small><h2>Four chains of OF became four short stacks. Now one from your job.</h2></div></div>';
  var x = PILHA[n], ok = e.esc === 0;
  var corrente = x.plain.split(/ (of|in) /).map(function (p) { return p === 'of' || p === 'in' ? '<i>' + p + '</i>' : '<span>' + p + '</span>'; }).join('');
  return cab(c) + trilha(PILHA, n) + '<div class="foco"><div class="nz-corrente vd' + (ok ? ' some' : '') + '">' + corrente + '</div><div class="nz-seta-b">' + (ok ? '▼ STACKED' : '▼') + '</div><div class="nz-pilha vd' + (ok ? ' on' : '') + '">' + (ok ? x.ops[0].split(' ').map(function (w, i, a) { return '<span class="' + (i === a.length - 1 ? 'chefe' : '') + '">' + w + '</span>'; }).join('') : '<em>…</em>') + '</div>' + tres('pi', x.ops, e.esc, n + 6, 'linha')
    + (ok ? '<div class="nz-linha-ok centro"><p class="aprova">The main noun is last. Read it from the end.</p><button type="button" class="btn" data-a="pi-prox">Next</button></div>' : e.esc > 0 ? '<p class="recusa" style="text-align:center">The main noun goes last. Read from the end.</p>' : '') + '</div>';
};

R.resposta = function (c) {
  return cab(c) + '<div class="nz-duas"><div class="nz-resp vd"><small>REPLY A · A MOTHER</small><p>“My son can’t get to school now. Please don’t take the bus away.”</p><em>→ a form letter</em></div><div class="nz-resp vd b"><small>REPLY B · A NEIGHBOR</small><p>“The route discontinuation will prevent school access for 40 children. I request a review meeting.”</p><em>→ a meeting</em></div></div>'
    + sequencia({ est: 'o', rot: '', t: '', p: '' }, RESP, S.re, 're', 'Unfair, but useful. Know the register, and know what it hides.').replace(/<div class="cab[\s\S]*?<\/p><\/div>/, '');
};

R.projeto = function (c) {
  var e = S.pr, n = e.n, fim = n >= PROJ.length;
  if (fim) return cab(c) + trilha(PROJ, n) + '<div class="foco"><div class="pergunta vd"><small>SIXTY SECONDS</small><h2>Three noun phrases, and your team is still in the story. Now your own project, in sixty seconds.</h2></div></div>';
  var x = PROJ[n], ok = e.esc === 0;
  return cab(c) + trilha(PROJ, n) + '<div class="mesa-c"><div class="lado-l"><div class="nz-rot-p vd"><small>PART ' + (n + 1) + ' OF 3</small><b>' + x.rot + '</b></div>' + (ok ? '<div class="pergunta vd ja"><small>NOW YOURS</small><h2>' + x.meu + '</h2></div>' : '') + '</div><div class="lado-l">' + tres('pr', x.ops, e.esc, n + 8)
    + (ok ? '<p class="so-prof dica-aluno">Ask: “Who did that?” after each part.</p><div><button type="button" class="btn" data-a="pr-prox">Next part</button></div>' : e.esc > 0 ? '<p class="recusa">A real noun, no chain of OF, and keep the people.</p>' : '') + '</div></div>';
};

R.fim = function (c) {
  return cab(c) + '<div class="fim">' + escritaFinal('fim', (S.txt || {}).fim || '', (S.salvo || {}).fim, 'I’m writing about the … (noun), and I request a … by …', 'Your email',
    ['a request', 'a delay', 'a change', 'a decision', 'a review'], ['YOUR EMAIL, SHORTER', 'Your email from scene I, with nouns. Then name who is responsible.'])
    + '<div class="lado-fim">' + desaparecidos(['THE CITY', 'THE COMPANY', 'THE TEAM'])
    + '<div class="grande vd"><span><u>unpack</u> · noun → verb + person</span><span><u>build</u> · -tion, -ment, -al, -ance, or the zero form: a cut, a rise</span><span><u>stack</u> · transport cost reduction, not the reduction of the costs of…</span><span>not <s>a cutting</s>, not <s>improvation</s>; and always ask: who did it?</span></div>'
    + mostra('fim', 'I’m writing about the deadline change, and I request a two-day extension. The client’s new brief caused the delay, and my team needs the time.', 1)
    + '<p class="hw"><a class="pilula" href="HW/" target="_blank" rel="noopener">Homework for the student →</a></p></div></div>';
};

TOQUES['ab-d'] = function (b, n, v) { S.ab.dest = v; };
TOQUES.ca = function (b, n) { S.ca.esc = n; };
TOQUES['ca-prox'] = function () { S.ca = { n: S.ca.n + 1, esc: -1 }; };
TOQUES['rx-s'] = function (b, n) { S.rx.sel = n; };
TOQUES.rx = function (b, n) { S.rx.esc[S.rx.sel] = n; };
TOQUES.fo = function (b, n) { S.fo.esc = n; };
TOQUES['fo-prox'] = function () { S.fo = { n: S.fo.n + 1, esc: -1 }; };
TOQUES.en = function (b, n) { S.en.esc = n; };
TOQUES['en-prox'] = function () { S.en = { n: S.en.n + 1, esc: -1 }; };
TOQUES.pi = function (b, n) { S.pi.esc = n; };
TOQUES['pi-prox'] = function () { S.pi = { n: S.pi.n + 1, esc: -1 }; };
TOQUES.pr = function (b, n) { S.pr.esc = n; };
TOQUES['pr-prox'] = function () { S.pr = { n: S.pr.n + 1, esc: -1 }; };
