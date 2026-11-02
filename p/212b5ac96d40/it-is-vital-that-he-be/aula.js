/* ============================================================
   IT IS VITAL THAT HE BE · THE MINUTES · LIVE CLASS  06/10/2026
   Main series C1 · o subjuntivo formal: depois de vital / essential /
   recommend / insist / request / propose / require + THAT, o verbo na
   forma base para todo sujeito (that he be, that she take); negativo
   NOT + base; passiva BE + particípio. Fato × exigência: insisted that
   it WAS (fato) × BE (exigência).
   Erros: that she takes · that he is / will be · recommend her to ·
   that he doesn't sign · that the budget approved · be approve.
   O MUNDO (da aula velha): o conselho de um pequeno farol-museu no
   Maine, quinta às 7 PM; uma empresa quer comprar e fazer hotel; o
   aluno é o novo secretário; a carta de fundação de 1974 diz "insisted
   that the light BE kept burning" — a gramática salva o farol. Sem
   áudio, sem vídeo. Nomes inventados (Seacliff, Aldermoor), sem marca real.
   A CARA (nova; a velha era ata + mesa oval em cartões): o LIVRO DE
   ATAS — à esquerda o bilhete à mão do tesoureiro (Caveat, torto); à
   direita a linha formal escrita a tinta no livro (Caslon); o VERBO
   CONGELADO (o mesmo verbo sob I / you / she / they / the board); a
   LENTE DO FAROL com oito painéis que acendem a cada moção; e os dois
   carimbos DEMAND × FACT.
   Fila: FILA-LIVE-386.md · 141. Pasta piloto-vital (conferida: não existia).
   22/10/2026 · OS FORMATOS NOVOS (kit/formatos.js + formatos2.js), mesmas 9
   páginas. A auditoria: 16 rodadas de escolher entre três frases quase iguais
   (II e IV) e as armadilhas de tocar. Agora: II ligar o bilhete do tesoureiro
   à linha formal (FM.liga, escolha de SENTIDO; a regra aparece no input) e a
   linha vai a tinta para o livro; III a carta de fundação de 1974 → tocar os
   verbos depois de THAT e completar a regra (FM.carta) + o verbo congelado;
   IV seis vozes à mesa, a linha formal falada + Check acende a lente
   (FM.fala). V (DEMAND × FACT) fica: já é escolha de sentido. VII deixa de
   ser EXTRA.
   ============================================================ */
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'voce', est: 'o', min: 7, img: 'janela', rot: 'I · You and Meetings', t: 'Before the meeting: you, rules, and the voice you use at work.', p: 'Tap a card. The student answers; then the teacher answers too.' },
  { k: 'ata', est: 'f', min: 6, img: 'ata', rot: 'II · The Treasurer’s Notes', t: 'The treasurer sends his demands like text messages. The minutes need them in formal English.', p: 'Tap a note, then its formal line. It goes into the book in ink. Read it out loud, slowly, like a secretary.' },
  { k: 'regra', est: 'f', min: 7, img: 'arquivo', rot: 'III · The Charter, 1974', t: 'The old charter of the lighthouse. Read it like a lawyer.', p: 'Read the charter out loud. Tap every verb after THAT. Then finish the rule.' },
  { k: 'lente', est: 'o', min: 7, img: 'sala', rot: 'IV · Around the Table', t: 'Thursday, 7 PM. Six voices. Put each one in the minutes, fast.', p: 'The teacher reads each voice in character. The student says the formal line out loud, then taps Check: a panel of the lamp lights up.' },
  { k: 'carimbo', est: 'f', min: 6, img: 'arquivo', rot: 'V · Demand or Fact?', t: 'Insisted that he WAS: a fact. Insisted that he BE: a demand.', p: 'Read the line. Stamp it DEMAND or FACT. Then say what it means.' },
  { k: 'mocao', est: 'o', min: 7, img: 'farol', rot: 'VI · Your Formal Voice', t: 'Your life, in the voice of the minutes.', p: 'Tap a card. Answer about real life: it is vital that, I suggest that, I insist that.' },
  { k: 'herald', est: 'o', min: 7, extra: 1, img: 'janela', rot: 'VII · The Newspaper Calls', t: '9:40 PM. A reporter calls the new board secretary. That’s you.', p: 'The teacher is the reporter. Answer on the record, in formal English.' },
  { k: 'fim', est: 'w', min: 6, img: 'capa', rot: 'VIII · Your Motion', t: 'Should an old building be protected, even when it no longer earns its keep?', p: 'Three formal demands for your building, street or city. They go to your My notes.' }
];

var VOCE = [
  { k: 'MEETINGS', q: 'What meetings do you go to? Which one is the most formal?', fup: 'What do people argue about?', st: ['The meeting in my …'], ex: 'The meeting in my building. People argue about parking for two hours.' },
  { k: 'TWO VOICES', q: 'Do you talk differently to friends and at work? Give me an example.', fup: 'Which voice is easier?', st: ['To my friends I say …'], ex: 'To my friends I say “send it now”. At work I say “could you please send it today?”' },
  { k: 'THE RULES', q: 'Who makes the rules where you live or work? Do people follow them?', fup: 'Which rule do people ignore?', st: ['The manager …'], ex: 'The manager. Some people follow them, some people pretend.' },
  { k: 'AN OLD PLACE', q: 'Is an old building in your city in danger? What happened to it?', fup: 'Should it be protected?', st: ['An old … downtown.'], ex: 'An old movie theater downtown. Now it’s a pharmacy.' },
  { k: 'YOUR DEMAND', q: 'One new rule for your city, starting tomorrow: what would it be?', fup: 'Who would hate it?', st: ['Buses every …'], ex: 'Buses every ten minutes, all night.' }
];

/* o livro de atas: nota = o bilhete casual; ok = a linha formal; v = o verbo congelado */
var ATA = [
  { k: 'THE KEEPER', nota: 'Hollis HAS to be there Thursday. No excuses.', v: 'be', ops: ['It is vital that Hollis be present on Thursday.'] },
  { k: 'THE BUDGET', nota: 'get the budget approved b4 summer!!', v: 'be approved', ops: ['It is essential that the budget be approved before summer.'] },
  { k: 'THE PRESS', nota: 'nobody talks to the newspaper till the vote. NOBODY.', v: 'speak', ops: ['We ask that no one speak to the press before the vote.'] },
  { k: 'THE LAWYER', nota: 'their lawyer can’t vote. obviously.', v: 'not vote', ops: ['The board requires that their lawyer not vote.'] },
  { k: 'THE ARCHIVE', nota: 'lock the archive room ok?? the 1974 papers are in there', v: 'be locked', ops: ['It is important that the archive room be locked.'] },
  { k: 'IN WRITING', nota: 'tell the hotel people to send the offer IN WRITING', v: 'send', ops: ['We request that the company send its offer in writing.'] }
];
var LIGA = { formato: 'liga', titulo: 'Match each note to its line in the minutes.', pares: ATA.map(function (x) { return [x.nota, x.ops[0]]; }), ordemDireita: [2, 5, 0, 3, 1, 4] };

/* 22/10/2026 · III a carta de fundação (texto nosso, no mundo da aula) → a regra */
var CARTA = { de: 'The Seacliff Light · the charter · 1974',
  txt: 'The light was built in 1858, and the town has loved it ever since. We, the founders, insist that the light [[be kept]] burning every night. We require that the keeper [[live]] in the house next to it, and we ask that no part of the land [[be sold]]. It is essential that every trustee [[read]] this charter, and that the board [[not change]] it without a vote of the town.',
  assina: 'The founders' };
var REGRA = [
  { a: 'We require that the keeper ', par: ['live', 'lives'], c: 0, b: ' in the house: no -s, for everyone.' },
  { a: 'It is vital that he ', par: ['is', 'be'], c: 1, b: ' present.' },
  { a: 'Negative: that the board ', par: ['doesn’t change', 'not change'], c: 1, b: ' it' },
  { a: 'Passive: that the light ', par: ['be kept', 'is kept'], c: 0, b: ' burning' },
  { a: 'We recommend ', par: ['that she take', 'her to take'], c: 0, b: ' the chair.' },
  { a: 'The light was built in 1858: ', par: ['a demand', 'a fact'], c: 1, b: ', so a normal past.' }
];
var PRESA = 'vital · essential · insist · ask + <b>that</b><br>+ the <b>bare verb</b>, for everyone:<br>that he <b>be</b> · that she <b>take</b><br>not: that he <b>not sign</b><br>passive: that it <b>be kept</b><br>not <s>recommend her to</s>';
var SUJ = ['I', 'you', 'she', 'they', 'the board'];

var LENTE = [
  { quem: 'THE TREASURER', diz: 'Hollis can’t leave early tonight. He stays till the end.', ini: 'It is vital that …', resp: 'It is vital that Hollis <b>stay</b> until the end.' },
  { quem: 'A VOLUNTEER GUIDE', diz: 'Somebody has to check the big lens every single night.', ini: 'I propose that the lens …', resp: 'I propose that the lens <b>be checked</b> every night.' },
  { quem: 'A TRUSTEE', diz: 'Their lawyer shouldn’t be in the room when we vote.', ini: 'We ask that Ms. Quist …', resp: 'We ask that Ms. Quist <b>not be</b> present for the vote.' },
  { quem: 'THE COMPANY’S LAWYER', diz: 'My client thinks you should sell by Friday. It’s a very good offer.', ini: 'The company suggests that …', resp: 'The company suggests that the board <b>sell</b> by Friday.' },
  { quem: 'THE HARBOR MASTER', diz: 'The fishing boats need that light. It stays on. Period.', ini: 'The town insists that …', resp: 'The town insists that the light <b>stay</b> on.' },
  { quem: 'THE CHARTER, 1974', diz: 'The company’s lawyer reads the old line and smiles: “It just tells us what they did back then.”', ini: 'No. The founders insisted that the light …', resp: 'No. The founders insisted that the light <b>be kept</b> burning. It is a demand, and it still stands.' }
];

var CARIMBO = [
  { f: 'The founders insisted that the light <b>be</b> kept burning.', r: 'DEMAND', w: 'They demanded it, and the demand still stands.' },
  { f: 'Hollis insisted that he <b>was</b> at the lighthouse on the night of the storm.', r: 'FACT', w: 'He says it’s true. A normal past.' },
  { f: 'The doctor insisted that she <b>rest</b> for a week.', r: 'DEMAND', w: 'An order: bare verb, no -s.' },
  { f: 'The report suggests that prices <b>are</b> rising.', r: 'FACT', w: 'SUGGEST here means “shows”. A fact: normal present.' },
  { f: 'The board suggests that the company <b>wait</b> until Friday.', r: 'DEMAND', w: 'Advice: bare verb.' },
  { f: 'She insisted that the report <b>had been</b> sent.', r: 'FACT', w: 'A claim about the past.' }
];

var MOCAO = [
  { k: 'YOUR BUILDING', q: 'What new rule would you propose for your building or street?', fup: 'Who would vote against it?', st: ['I propose that …'], ex: 'I propose that the elevator be fixed within a week.' },
  { k: 'A NEW STUDENT', q: 'What do you recommend that a new student of English do?', fup: 'Why that?', st: ['I recommend that they …'], ex: 'I recommend that they watch one series without subtitles.' },
  { k: 'YOUR BOSS', q: 'What is vital that your boss, your teacher or your client understand?', fup: 'Have you told them?', st: ['It is vital that my boss not …'], ex: 'It is vital that my boss not schedule meetings at 8 AM.' },
  { k: 'THE MAYOR', q: 'You have two minutes with the mayor. What do you demand?', fup: 'And if the answer is no?', st: ['I demand that the city …'], ex: 'I demand that the city keep the buses running all night.' },
  { k: 'AT HOME', q: 'What house rule do you insist on?', fup: 'Does everyone follow it?', st: ['I insist that everyone …'], ex: 'I insist that everyone wash their own coffee cup.' },
  { k: 'A TIRED FRIEND', q: 'A friend is exhausted. What do you suggest?', fup: 'Would you do it?', st: ['I suggest that she …'], ex: 'I suggest that she take a week off and turn off her phone.' }
];

var HERALD = [
  { q: '“So, the old keeper: does he keep his job?”', fup: 'The reporter says: “Good news for the fishing boats, then.”', st: ['The board insists that Hollis …'], ex: 'The board insists that Hollis stay on as keeper.' },
  { q: '“And the hotel company? Are they giving up?”', fup: 'The reporter says: “The charter! Nobody reads those anymore.”', st: ['They suggested that the board …, but the charter requires that the light …'], ex: 'They suggested that the board sell, but the charter requires that the light be kept burning.' },
  { q: '“What would you recommend to other small museums?”', fup: 'The reporter says: “That’s a quote. I’m using it.”', st: ['We recommend that every small museum …'], ex: 'We recommend that every small museum read its charter carefully.' },
  { q: '“Can I print the name of the trustee who talked to the company first?”', fup: 'The reporter says: “Fair enough. Off the record, then.”', st: ['We ask that you not …'], ex: 'We ask that you not print any names.' }
];

var S = { i: 0, faixa: 1, fala: {}, resp: {}, armas: {},
  voce: { sel: -1, foi: {} }, sj: 2, cb: {}, mo: { sel: -1, foi: {} }, he: { n: 0, foi: {} } };

/* o livro: bilhete à esquerda, linha a tinta à direita */
function livro(x, foi, n) {
  return '<div class="vt-livro vd"><div class="vt-bilhete"><small>NOTE FROM THE TREASURER</small><p>' + x.nota + '</p></div>'
    + '<div class="vt-pagina"><small>MINUTES · THURSDAY, 7 PM · LINE ' + (n + 1) + '</small>'
    + (foi ? '<p class="vt-tinta">' + x.ops[0].replace(new RegExp('\\b(' + x.v + ')\\b'), '<b>$1</b>') + '</p>' : '<p class="vt-pauta"><span></span><span></span></p>') + '</div></div>';
}
/* o verbo congelado: o mesmo verbo para todo sujeito */
function congela(sel) {
  return '<div class="vt-gelo vd"><small>WE RECOMMEND THAT …</small><div class="vt-sujs">' + SUJ.map(function (s, i) { return '<button type="button" class="pilula' + (sel === i ? ' on' : '') + '" data-a="sj" data-n="' + i + '">' + s + '</button>'; }).join('') + '</div>'
    + '<p class="vt-gelo-f">We recommend that <u>' + SUJ[sel] + '</u> <b>take</b> the chair.</p><p class="vt-gelo-n">The verb never moves: no -s, no will, no to.</p></div>';
}
/* a lente do farol: oito painéis */
function lente(n) {
  var N = LENTE.length, p = ''; n = Math.min(n, N);
  for (var i = 0; i < N; i++) p += '<i class="' + (i < n ? 'acesa' : '') + '" style="transform:rotate(' + (i * 360 / N) + 'deg) translateY(-200%)"></i>';
  return '<div class="vt-farol"><div class="vt-feixe' + (n >= N ? ' gira' : '') + '"></div><div class="vt-lente">' + p + '<b>' + n + '/' + N + '</b></div><small>' + (n >= N ? 'THE LIGHT STAYS ON' : 'MOTIONS CARRIED') + '</small></div>';
}

var R = {};
R.capa = function () {
  return '<div class="capa"><div><span class="kick">MAIN SERIES · C1 · THE SUBJUNCTIVE</span><h1>It Is Vital <b>That He Be</b></h1>'
    + '<p class="sub">“Hollis HAS to be there. No excuses.” In the minutes: <b>It is vital that he be present.</b> One bare verb, the same for everyone.</p>'
    + '<div class="chipsx"><span class="pilula">that he be</span><span class="pilula">that she take</span><span class="pilula">that you not print</span><span class="pilula">Live Class · W·O·L·F</span></div>'
    + '<button type="button" class="btn cheio" data-a="ir" data-n="1">Open the meeting</button>' + faixaLive() + '</div>'
    + '<div class="capa-r">' + livro(ATA[0], 1, 0) + '</div></div>';
};

R.voce = function (c) { return cartasPessoais(c, VOCE, S.voce, 'voce', ['At work I say …', 'I think it should …', 'The manager …']); };

/* II · ligar o bilhete à linha formal; o último par ligado vai a tinta para o livro */
R.ata = function (c) {
  var e = (S.fq || {}).ata, feitos = [];
  if (e && e.par) Object.keys(e.par).forEach(function (i) { if (e.par[i] === +i) feitos.push(+i); });
  var ult = feitos.length ? feitos[feitos.length - 1] : -1, fim = feitos.length >= ATA.length;
  return cab(c) + '<div class="mesa-c"><div class="lado-l">' + FM.ex('ata', LIGA) + '</div><div class="lado-l">' + livro(ATA[ult < 0 ? 0 : ult], ult >= 0, ult < 0 ? 0 : ult)
    + (fim ? '<div class="pergunta vd"><small>SIX LINES IN INK</small><h2>Why BE and not IS, SPEAK and not SPEAKS, NOT VOTE and not DOESN’T VOTE? Guess before the rule.</h2></div>' : '<p class="dica-aluno">Every right pair: read the formal line out loud, slowly.</p>') + '</div></div>';
};

/* III · a carta de 1974 → a regra; embaixo, o verbo congelado */
R.regra = function (c) {
  return cab(c) + FM.carta('carta', CARTA, REGRA, { toque: 'Tap every verb after THAT', pronta: 'The rule is ready. It stays in the corner of the table.' })
    + '<div style="width:min(720px,100%);margin:22px auto 0">' + congela(S.sj) + '</div>';
};

/* IV · as vozes à mesa: a linha dita e conferida acende um painel da lente */
R.lente = function (c) {
  return cab(c) + FM.fala('lente', LENTE.map(function (x) {
    return { pista: '<small style="display:block;margin-bottom:6px;font:800 13px var(--ui);letter-spacing:.12em;color:var(--am)">' + x.quem + '</small>“' + x.diz + '” · <b>' + x.ini + '</b>', resp: x.resp };
  }), {
    rotulo: 'Voice', prox: 'Next voice', regra: PRESA, diga: 'Say the formal line first',
    lado: function (feitas) { return '<div style="width:min(300px,100%);margin:0 auto">' + lente(feitas) + '</div>'; },
    fim: 'The motion to sell fails. The charter was never a story about 1974: BE KEPT is a demand, and it still stands.'
  });
};

R.carimbo = function (c) {
  var e = S.cb;
  return cab(c) + '<div class="vt-lista">' + CARIMBO.map(function (x, i) {
    var foi = e[i], ok = foi === x.r;
    return '<div class="vt-cb vd' + (foi ? (ok ? ' certo' : ' errado') : '') + '"><p>' + x.f + '</p><div class="vt-selos">' + ['DEMAND', 'FACT'].map(function (r) { return '<button type="button" class="vt-selo ' + r.toLowerCase() + (foi === r ? ' on' + (ok ? '' : ' mal') : '') + '" data-a="cb" data-n="' + i + '" data-v="' + r + '">' + r + '</button>'; }).join('') + '</div>' + (ok ? '<small class="vt-cb-w">' + x.w + '</small>' : '') + '</div>';
  }).join('') + '</div>';
};

R.mocao = function (c) { return cartasPessoais(c, MOCAO, S.mo, 'mo', ['I propose that …', 'It is vital that …', 'I insist that …']); };

R.herald = function (c) {
  return cab(c) + '<div class="vt-fone vd"><span class="vt-pulso"></span><b>THE LOCAL NEWSPAPER · ON THE RECORD</b><small>9:40 PM</small></div>'
    + sequencia({ est: 'o', rot: '', t: '', p: '' }, HERALD, S.he, 'he', 'The reporter hangs up. The minutes are signed.').replace(/<div class="cab[\s\S]*?<\/p><\/div>/, '');
};

R.fim = function (c) {
  return cab(c) + '<div class="fim">' + escritaFinal('fim', (S.txt || {}).fim || '', (S.salvo || {}).fim, 'I propose that …\nIt is vital that the city …\nWe ask that … not …', 'Your motion',
    ['I propose that', 'It is vital that', 'I insist that', 'not', 'be + participle'], ['YOUR MOTION', 'Three formal demands for your building, street or city.'])
    + '<div class="lado-fim">' + lente(8)
    + '<div class="grande vd"><span><u>that + bare verb</u> · that he be, that she take, the same for everyone</span><span><u>not + bare verb</u> · that you not print it</span><span><u>be + participle</u> · that the light be kept burning</span><span>not <s>that she takes</s>, not <s>recommend her to</s>, not <s>that he doesn’t</s></span></div>'
    + mostra('fim', 'I propose that the old market be protected and never sold.<br>It is vital that the city keep the buses running all night.<br>We ask that cars not park on the sidewalk.', 1)
    + '<p class="hw"><a class="pilula" href="HW/" target="_blank" rel="noopener">Homework for the student →</a></p></div></div>';
};

TOQUES.sj = function (b, n) { S.sj = n; };
TOQUES.cb = function (b, n, v) { S.cb[n] = v; };
