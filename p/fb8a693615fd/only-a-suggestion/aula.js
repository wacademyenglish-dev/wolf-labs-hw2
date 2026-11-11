/* ============================================================
   ONLY A SUGGESTION · THE TASK BOARD · LIVE CLASS  06/10/2026
   Main series B2 · suggest / recommend / insist: sem lugar para pessoa
   logo depois do verbo. A pessoa vai num THAT com verbo puro (I suggest
   that Marina send it), a ideia sem dono vai em -ING (I suggest sending
   it), insist ON + -ing, explain / mention + coisa + TO + pessoa. Os
   verbos COM lugar: tell / ask / remind / advise + pessoa + to. Erros:
   I suggest you to, recommend me to, explained me, insisted to pay,
   that she takes (o -s não cai).
   O MUNDO (da aula velha): a reunião das onze; às quatro alguém diz
   "nobody told me to"; a ata prova. Sem áudio, sem vídeo.
   A CARA (nova; a velha era a ata clara que rasgava): o QUADRO DE
   TAREFAS — cada decisão é um cartão; a linha certa prende o crachá de
   quem vai fazer (Marina, Paulo, Ines, Hugo, Ada); a linha sem pessoa
   deixa o cartão em "NO OWNER". E os VERBOS COM CADEIRA: tell, ask,
   remind, advise têm uma cadeira vazia ao lado; suggest, recommend,
   explain, mention não têm.
   Fila: FILA-LIVE-386.md · 130. Pasta piloto-suggest (conferida: não existia).
   22/10/2026 · OS FORMATOS NOVOS (kit/formatos.js), mesmas 11 páginas:
   nada de escolher entre três frases quase iguais (eram 27 rodadas).
   II a ata da Ada (carta → regra; cada forma achada prende o crachá no
   quadro); III seis verbos, não oito; IV montar a linha (FM.pergunta);
   V a palavra errada (FM.erro); VII a reunião em fala primeiro + Check,
   essencial; VIII Correct or Wrong; IX deixa de ser extra.
   ============================================================ */
var L = [
  { k: 'capa', est: null, img: 'sala' },
  { k: 'abre', est: 'o', min: 7, img: 'corredor', rot: 'I · Ten to Eleven', t: 'Ten minutes before a meeting. What would you suggest to improve your work?', p: 'Tap the topic. Then answer out loud.' },
  { k: 'quadro', est: 'f', min: 7, img: 'sala', rot: 'II · Ada’s Minutes', t: 'After the meeting, Ada sends the minutes. Every decision has a name on it.', p: 'Read the minutes out loud. Tap each verb with its person. Then finish the rule.' },
  { k: 'gx', est: 'f', min: 4, img: 'ata', rot: 'III · Mistake Hunter', t: 'Six lines from the meeting. Each one has a wrong part.', p: 'Tap the wrong part. Say the line right. Then check.' },
  { k: 'cadeiras', est: 'f', min: 5, img: 'sala', rot: 'IV · Who Has a Chair?', t: 'Some verbs have a chair for a person right next to them. Some don’t. The meaning won’t tell you.', p: 'Say the verb with a name after it. Tap CHAIR or NO CHAIR.' },
  { k: 'conserta', est: 'f', min: 6, img: 'ata', rot: 'V · Keep the Person', t: 'No chair after the verb? Keep the person anyway: THAT + person + plain verb, or TO + person at the end.', p: 'Build each line out loud. Tap Check. Then say the -ING version.' },
  { k: 'tira', est: 'f', min: 5, img: 'ata', rot: 'VI · The -s Comes Off', t: 'After suggest / recommend / insist that, the verb goes back to its plain form, even with he, she, it.', p: 'One word is wrong in each line. Say the right one out loud. Then tap Check.' },
  { k: 'quatro', est: 'f', min: 6, img: 'corredor', rot: 'VII · Four O’Clock', t: 'Five lines from the meeting. Who walked out knowing it was their job?', p: 'Read it out loud. Tap A NAME or NOBODY.' },
  { k: 'reuniao', est: 'o', min: 7, img: 'caderno', rot: 'VIII · Eleven O’Clock', t: 'The meeting. Four items. Every decision goes on the board, with a name.', p: 'Your teacher chairs. Say your line out loud, then tap Check. Then decide it your way.' },
  { k: 'erros', est: 'f', min: 5, extra: 1, img: 'ata', rot: 'IX · No Owner', t: 'Six lines. Some left a card with no owner.', p: 'Read each line out loud. Tap Correct or Wrong. If it’s wrong, say it right.' },
  { k: 'vida', est: 'o', min: 7, extra: 1, img: 'corredor', rot: 'X · Your Advice', t: 'Three cards. Give real advice.', p: 'Tap a card. Answer with the frame and add a reason.' },
  { k: 'fim', est: 'w', min: 6, img: 'sala', rot: 'XI · On the Record', t: 'Your suggestion from scene I, with a name on it.', p: 'Write it for the board. It goes to your My notes.' }
];

var GENTE = { Marina: 'MA', Paulo: 'PA', Ines: 'IN', Hugo: 'HU', Ada: 'AD', 'the team': '··' };

var TEMAS = ['meetings', 'email', 'the office', 'deadlines', 'training', 'communication'];
var ABRE = [
  { q: 'What exactly would you suggest?', fup: 'Why hasn’t anyone done it yet?', st: ['I’d suggest …'], ex: 'I’d suggest shorter meetings, twenty minutes max.' },
  { q: 'Who would have to do it?', fup: 'Would they agree?', st: ['… would have to …'], ex: 'My manager would have to change the calendar.' },
  { q: 'Would you say it in the meeting? Say it now, the way you would.', fup: 'Say it again, more politely.', st: ['I suggest …'], ex: 'I suggest that we stop every meeting at twenty minutes.' }
];

var QUADRO = [
  { task: 'Book the room for Thursday', quem: 'Paulo' },
  { task: 'Call the supplier', quem: 'the team' },
  { task: 'Send the revised quote', quem: 'Marina' },
  { task: 'Update the shared sheet', quem: 'Ines' },
  { task: 'Pay for lunch', quem: 'Hugo' },
  { task: 'Explain the supplier delay', quem: 'Ada' }
];

var CADEIRAS = [['tell', 'cabe'], ['suggest', 'nao'], ['ask', 'cabe'], ['recommend', 'nao'], ['advise', 'cabe'], ['mention', 'nao']];

/* 22/10/2026 · OS FORMATOS NOVOS (kit/formatos.js) */
/* II · a ata da Ada (texto nosso, no mundo da aula) → a regra; cada forma achada prende um crachá */
var CARTA = { de: 'From: Ada · To: the team · 11:40 · Minutes',
  txt: 'Hi all, here is what we decided. Hugo [[insisted on paying]] for lunch. Thank you, Hugo! The manager [[recommended that Ines update]] the shared sheet by Friday. I [[asked Marina to send]] the revised quote today. Paulo, I [[suggested that you book]] the room for Thursday. Someone [[suggested calling]] the supplier, and I [[explained the delay to]] the client. So please, nobody can say “nobody told me to”!',
  assina: 'Ada' };
var CARTA_CARD = [4, 3, 2, 0, 1, 5];   /* a forma i da ata → o cartão do QUADRO */
var REGRA = [
  { a: 'tell / ask / remind / advise + ', par: ['person + to', 'that + person'], c: 0, b: ': asked Marina to send.' },
  { a: 'suggest / recommend + ', par: ['person + to', 'that + person + plain verb'], c: 1, b: ': recommended that Ines update.' },
  { a: 'An idea with no owner: suggest + ', par: ['-ing', 'to + verb'], c: 0, b: ': suggested calling.' },
  { a: 'insist ', par: ['on', 'to'], c: 0, b: ' + -ing: insisted on paying.' },
  { a: 'explain / mention + thing + ', par: ['to + person', 'person'], c: 0, b: ': explained the delay to the client.' }
];
var PRESA = '<b>tell / ask / remind / advise</b><br>+ person + to<br><b>suggest / recommend that</b><br>+ person + plain verb<br>suggest + <b>-ing</b> · insist <b>on</b> + -ing<br>explain + thing + <b>to</b> + person';
var PRESA_PURO = '<b>suggest / recommend / insist that</b><br>+ he / she / it + <b>plain verb</b><br>she <b>take</b> · it <b>start</b> · he <b>be</b><br>no -s, no to';

/* IV · monte a linha: a pessoa fica no cartão */
var CONSERTA = [
  { p: '(I suggested · Marina · send · the quote)', r: 'I suggested <b>that Marina send</b> the quote.' },
  { p: '(I explained · Ada · the delay)', r: 'I explained <b>the delay to Ada</b>.' },
  { p: '(she recommended · Paulo · book · the room himself)', r: 'She recommended <b>that Paulo book</b> the room himself.' },
  { p: '(I mentioned · Hugo · the invoice)', r: 'I mentioned <b>the invoice to Hugo</b>.' },
  { p: '(the doctor recommended · I · walk more)', r: 'The doctor recommended <b>that I walk</b> more.' },
  { p: '(they insisted · we · read the contract first)', r: 'They insisted <b>that we read</b> the contract first.' }
];

/* V · uma palavra errada: o -s cai */
var TIRA = [
  { f: 'I suggest that Marina <u>sends</u> it again today.', r: 'send' },
  { f: 'They proposed that the meeting <u>starts</u> at nine.', r: 'start' },
  { f: 'I suggest she <u>takes</u> the earlier train.', r: 'take' },
  { f: 'He insisted that she <u>is</u> there at four.', r: 'be' },
  { f: 'We recommend that he <u>updates</u> the sheet before Friday.', r: 'update' }
];

var QUATRO = [['I suggested sending the revised quote today.', 'ninguem'], ['I reminded Ines that the sheet was three days old.', 'pessoa'], ['I mentioned the invoice.', 'ninguem'], ['I recommended that Paulo book the room himself.', 'pessoa'], ['I told Hugo to sign it before he left.', 'pessoa']];

/* VII · a reunião: fala primeiro, o crachá vai para o quadro */
var PAUTA = [
  { item: 'The client quote is late.', quem: 'Marina', pista: '“So what do we do about the quote?”<br>suggest · <b>Marina</b> · send it before noon', resp: 'I suggest <b>that Marina send</b> it before noon.', depois: 'Who exactly, and by when? Now decide it your way.' },
  { item: 'The Thursday room isn’t booked.', quem: 'Paulo', pista: '“And the room for Thursday?”<br>recommend · <b>Paulo</b> · book it today', resp: 'I recommend <b>that Paulo book</b> it today.', depois: 'Name a person from your own team. Who would book it?' },
  { item: 'The shared sheet is out of date.', quem: 'Ines', pista: '“Someone has to fix the sheet.”<br>I’ll ask · <b>Ines</b> · update it by Friday', resp: 'I’ll ask <b>Ines to update</b> it by Friday.', depois: 'Who would you ask in your team? Ask them now.' },
  { item: 'Nobody knows why the supplier is late.', quem: 'Ada', pista: '“Can someone explain the delay?”<br>I insist · <b>call</b> the supplier myself · and explain it · everyone', resp: 'I insist <b>on calling</b> the supplier myself, and I’ll explain it <b>to everyone</b> tomorrow.', depois: 'What would you insist on in your job?' }
];

/* VIII · Correct or Wrong: uma frase só, o aluno julga e conserta */
var ERROS = { formato: 'verdadeOuMentira', rotulos: ['Correct', 'Wrong'], titulo: 'Correct or wrong? If it’s wrong, say it right.', itens: [
  { f: 'I suggest you to take a break.', t: false, c: 'I suggest that you take a break.' },
  { f: 'I advised Marina to wait for the answer.', t: true, c: 'ADVISE has a chair for Marina.' },
  { f: 'The doctor recommended me to rest.', t: false, c: 'The doctor recommended that I rest.' },
  { f: 'Ada explained me the problem.', t: false, c: 'Ada explained the problem to me.' },
  { f: 'I suggested calling the supplier.', t: true, c: 'No owner, so -ING.' },
  { f: 'He insisted to pay.', t: false, c: 'He insisted on paying.' }
] };

var VIDA = [
  { k: 'NO SLEEP', q: 'A friend can’t sleep. What do you suggest?', fup: 'Has it worked for you?', st: ['I suggest that she / he …'], ex: 'I suggest that he leave his phone in the kitchen.' },
  { k: 'ENGLISH', q: 'What would you recommend to someone learning English?', fup: 'Why that?', st: ['I’d recommend … -ing …'], ex: 'I’d recommend watching series with English subtitles.' },
  { k: 'NO MATTER WHAT', q: 'What do you always insist on, at work or at home?', fup: 'Does anyone complain?', st: ['I always insist on …'], ex: 'I always insist on eating dinner together.' }
];

var S = { i: 0, faixa: 1, fala: {}, resp: {}, armas: {},
  ab: { tema: '', n: 0, foi: {} }, cd: {}, q4: {}, vida: { sel: -1, foi: {} } };

/* o quadro de tarefas: cada cartão com crachá ou NO OWNER */
function quadro(lista, feitos, atual, titulo) {
  return '<div class="sg-board"><div class="sg-board-cab"><b>' + (titulo || 'TASK BOARD · 11 AM MEETING') + '</b><small>' + Object.keys(feitos).length + ' / ' + lista.length + ' OWNED</small></div><div class="sg-cartoes">' + lista.map(function (t, i) {
    var dono = feitos[i];
    return '<div class="sg-card' + (dono ? ' dono' : '') + (i === atual ? ' agora' : '') + '"><p>' + t.task + '</p>' + (dono ? '<span class="sg-cracha"><i>' + GENTE[t.quem] + '</i>' + t.quem.toUpperCase() + '</span>' : '<span class="sg-sem">NO OWNER</span>') + '</div>';
  }).join('') + '</div></div>';
}
function feitosAte(n, esc) { var f = {}; for (var i = 0; i < n; i++) f[i] = 1; if (esc === 0) f[n] = 1; return f; }

var R = {};
R.capa = function () {
  return '<div class="capa"><div><span class="kick">MAIN SERIES · B2 · SUGGEST · RECOMMEND · INSIST</span><h1>Only a <b>Suggestion</b></h1>'
    + '<p class="sub"><i>I suggested Paulo to book the room.</i> Nobody owns that task. <b>I suggested that Paulo book the room.</b> Now his name is on the card, and at four o’clock he can’t say nobody told him.</p>'
    + '<div class="chipsx"><span class="pilula">suggest that + person + plain verb</span><span class="pilula">suggest + -ing</span><span class="pilula">tell / ask + person + to</span><span class="pilula">Live Class · W·O·L·F</span></div>'
    + '<button type="button" class="btn cheio" data-a="ir" data-n="1">Open the board</button>' + faixaLive() + '</div>'
    + '<div class="capa-r">' + quadro(QUADRO.slice(0, 4), { 0: 1, 2: 1 }, -1) + '</div></div>';
};

R.abre = function (c) {
  var e = S.ab;
  var chips = '<div class="sg-temas">' + TEMAS.map(function (t) { return '<button type="button" class="pilula' + (e.tema === t ? ' on' : '') + '" data-a="ab-t" data-v="' + h(t) + '">' + t + '</button>'; }).join('') + '</div>';
  if (!e.tema) return cab(c) + chips + '<p class="dica-aluno" style="text-align:center">Tap a topic from your real work.</p>';
  return cab(c) + chips + sequencia({ est: 'o', rot: '', t: '', p: '' }, ABRE, e, 'ab', 'Keep your last sentence. It goes on the board at the end.').replace(/<div class="cab[\s\S]*?<\/p><\/div>/, '')
    + '<p class="so-prof dica-aluno" style="text-align:center">Write the third answer word for word. “I suggest you to …”: don’t correct yet.</p>';
};

R.quadro = function (c) {
  var e = (S.fq || {}).carta || { v: {} }, feitos = {};
  CARTA_CARD.forEach(function (card, i) { if (e.v && e.v[i]) feitos[card] = 1; });
  return cab(c) + FM.carta('carta', CARTA, REGRA, { papel: 'tela', toque: 'Tap each verb with its person', pronta: 'The rule is ready. It stays in the corner on the next pages.' })
    + '<div class="sg-sob">' + quadro(QUADRO, feitos, -1, 'TASK BOARD · FROM ADA’S MINUTES') + '</div>';
};

R.cadeiras = function (c) {
  var e = S.cd, todos = CADEIRAS.every(function (x, i) { return e[i] === x[1]; });
  return cab(c) + '<div class="sg-verbos">' + CADEIRAS.map(function (x, i) {
    var foi = e[i], ok = foi === x[1];
    return '<div class="sg-verbo vd' + (foi ? (ok ? ' certo' : ' errado') : '') + '"><div class="sg-vfila"><b>' + x[0].toUpperCase() + '</b>' + (ok ? (x[1] === 'cabe' ? '<i class="sg-cadeira" title="chair"></i><span>Marina to …</span>' : '<i class="sg-sem-cad"></i><span>that Marina …</span>') : '<i class="sg-vazio"></i>') + '</div>'
      + '<div class="sg-fs">' + [['cabe', 'CHAIR'], ['nao', 'NO CHAIR']].map(function (o) { return '<button type="button" class="pilula' + (foi === o[0] ? (ok ? ' certo' : ' errado') : '') + '" data-a="cd" data-n="' + i + '" data-v="' + o[0] + '">' + o[1] + '</button>'; }).join('') + '</div></div>';
  }).join('') + '</div>'
    + (todos ? '<p class="aprova" style="text-align:center">Three with a chair, three without. TELL and MENTION mean almost the same, and behave in opposite ways. ADVISE has a chair; RECOMMEND doesn’t.</p>' : '<p class="dica-aluno" style="text-align:center">Test it out loud: “I ___ Marina to go.” Does it work?</p>');
};

R.conserta = function (c) {
  return cab(c) + FM.pergunta('conserta', CONSERTA, { titulo: 'Keep the person. Build the line out loud.', regra: PRESA, depoisRot: 'No owner? -ING', depois: ['I suggested sending …', 'She recommended booking …', 'They insisted on reading …'] });
};

R.tira = function (c) {
  return cab(c) + FM.erro('tira', TIRA, { titulo: 'One word is wrong. Say the whole sentence the right way.', regra: PRESA_PURO });
};
R.quatro = function (c) {
  var e = S.q4, todos = QUATRO.every(function (x, i) { return e[i] === x[1]; });
  return cab(c) + '<div class="sg-relogio vd"><b>4:00 PM</b><span>“Nobody told me to.”</span></div><div class="sg-lista">' + QUATRO.map(function (x, i) {
    var foi = e[i], ok = foi === x[1];
    return '<div class="sg-tf vd' + (foi ? (ok ? ' certo' : ' errado') : '') + '"><span>' + x[0] + '</span><div class="sg-fs">' + [['pessoa', 'A NAME'], ['ninguem', 'NOBODY']].map(function (o) { return '<button type="button" class="pilula' + (foi === o[0] ? (ok ? ' certo' : ' errado') : '') + '" data-a="q4" data-n="' + i + '" data-v="' + o[0] + '">' + o[1] + '</button>'; }).join('') + '</div></div>';
  }).join('') + '</div>'
    + (todos ? '<p class="aprova" style="text-align:center">Two lines named nobody, and both were said by someone who thought they had asked. Rewrite them with a name.</p>' : '<p class="dica-aluno" style="text-align:center">Look for a name. No name, no owner.</p>');
};

R.reuniao = function (c) {
  var mini = PAUTA.map(function (p) { return { task: p.item.replace(/\.$/, ''), quem: p.quem }; });
  return cab(c) + FM.fala('reuniao', PAUTA.map(function (x, i) { return { pista: '<span class="ano">ITEM ' + (i + 1) + '</span>' + x.pista, resp: x.resp, depois: x.depois }; }), {
    rotulo: 'Item', prox: 'Next item', regra: PRESA, diga: 'Say your line out loud first',
    lado: function (feitas, atual) { var f = {}; for (var i = 0; i < feitas; i++) f[i] = 1; return quadro(mini, f, atual, atual < 0 ? 'THE AGENDA · DECIDED' : 'THE AGENDA'); },
    fim: 'Four names on the board. At four o’clock, nobody can say nobody told them. Now swap: you chair, and your teacher makes vague suggestions. Ask “Who exactly?”'
  });
};

R.erros = function (c) {
  return cab(c) + FM.ex('erros', ERROS);
};
R.vida = function (c) { return cartasPessoais(c, VIDA, S.vida, 'vida', ['Because …', 'It worked for me when …', 'I’m not sure, but …']); };

R.fim = function (c) {
  return cab(c) + '<div class="fim">' + escritaFinal('fim', (S.txt || {}).fim || '', (S.salvo || {}).fim, 'I suggest that … (a real name) … (plain verb) … by …\nI’ll ask … to …\nI always insist on …', 'Your suggestion',
    ['I suggest that', 'I recommend', 'I’ll ask', 'to', 'insist on'], ['YOUR SUGGESTION, WITH AN OWNER', 'Your suggestion from scene I with a real name, one task you’ll ask someone to do, and what you always insist on.'])
    + '<div class="lado-fim">' + quadro([{ task: 'Your suggestion', quem: 'the team' }, { task: 'Ask someone to help', quem: 'Marina' }], { 0: 1, 1: 1 }, -1, 'YOUR BOARD')
    + '<div class="grande vd"><span><u>suggest / recommend / insist that</u> + person + plain verb</span><span><u>suggest / recommend + -ING</u> · no owner</span><span><u>tell / ask / remind / advise</u> + person + to</span><span><u>explain / mention</u> + thing + to + person</span><span>not <s>I suggest you to</s>, not <s>explained me</s></span></div>'
    + mostra('fim', 'I suggest that Paulo stop every meeting at twenty minutes.<br>I’ll ask Marina to send the agenda the day before.<br>I always insist on finishing on time.', 1)
    + '<p class="hw"><a class="pilula" href="HW/" target="_blank" rel="noopener">Homework for the student →</a></p></div></div>';
};

TOQUES['ab-t'] = function (b, n, v) { S.ab.tema = v; };
TOQUES.cd = function (b, n, v) { S.cd[n] = v; };
TOQUES.q4 = function (b, n, v) { S.q4[n] = v; };

/* 10/11/2026 · AS EXPLICAÇÕES (kit/formatos3.js) · G14 · uma cena curta nova (k: gx) antes de cadeiras.
   Explicação 100% em inglês: see → notice → use (o aluno fala ou escreve uma frase dele no fim). */
var GX_EXPLICA = { formato: 'cacaErro', titulo: 'Mistake hunter. Six lines from the minutes.',
  toque: 'People who speak Portuguese often say these. Tap the wrong part before you see the answer.',
  itens: [
    { f: 'I suggest [[Marina to send]] the file.', r: 'I suggest <b>that Marina send</b> the file.', d: 'No person right after suggest. Use that + person + plain verb.' },
    { f: 'Hugo [[explained me]] the problem.', r: 'Hugo explained the problem <b>to me</b>.', d: 'explain has no chair for a person: explain + thing + to + person.' },
    { f: 'Ada insisted [[to pay]] for lunch.', r: 'Ada insisted <b>on paying</b> for lunch.', d: 'insist + on + -ing.' },
    { f: 'I suggest that Paulo [[takes]] the lead.', r: 'I suggest that Paulo <b>take</b> the lead.', d: 'After suggest that, the -s comes off.' },
    { f: 'I suggest [[to move]] the meeting.', r: 'I suggest <b>moving</b> the meeting.', d: 'An idea with no owner: suggest + -ing.' },
    { f: 'She [[recommended me]] to call the client.', r: 'She <b>recommended that I call</b> the client.', d: 'recommend has no chair either. Use that + person + plain verb.' }
  ],
  nota: 'Suggest, recommend, explain and mention have <b>no chair</b> for a person right after them. Keep the person with <b>that + person + plain verb</b> or <b>to + person</b> at the end. Or use <b>-ing</b> when nobody owns the idea.',
  uso: { p: 'Your turn. Advice for a colleague. One line with suggest that and one with recommend + -ing.', molde: ['I suggest that you …', 'I recommend …ing …'], ex: 'I suggest that you send the report today. I recommend checking the numbers first.' } };
R.gx = function (c) { return cab(c) + FM.ex('gx_caca', GX_EXPLICA); };
