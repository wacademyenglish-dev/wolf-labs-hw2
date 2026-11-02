/* ============================================================
   LEAVE THE ROOM · THE TWO DOORS · LIVE CLASS  06/10/2026
   Main series B1 · second conditional: IF + passado, WOULD + verbo.
   O passado aqui não é passado: é o sinal de "não é real". WOULD
   nunca entra na metade do IF; WERE para todo mundo; COULD e MIGHT no
   lugar do WOULD. Erros: "If I would have…", "If I was… I will…",
   "would to", "would asked".
   O MUNDO (da aula velha): a Nadia escrevendo para uma máquina às
   três da manhã depois da briga com a irmã; o programa de 1966 e a
   secretária que pediu para o programador sair da sala; a terapeuta;
   a psicóloga que usa a máquina como sala de ensaio; o estudo de 2026
   (sem nome de revista); os dilemas; fazer a máquina discordar.
   Três áudios mantidos (a1, a2, a3), conferidos no faster-whisper em
   06/10: o texto é o mesmo (só a grafia dos números muda).
   A CARA: AS DUAS PORTAS — um corredor às 3h; a porta escolhida abre
   com luz quente (o mundo real: aconteceu); a outra vira vidro frio,
   azul, e o que estaria atrás dela só se diz com WOULD.
   Fila: FILA-LIVE-386.md · 092.
   ============================================================ */
var L = [
  { k: 'capa', est: null, img: 'porta' },
  { k: 'sair', est: 'o', min: 7, img: 'porta', rot: 'I · If You Could Leave', t: 'You’re in a long meeting. Imagine you could leave the room right now.', p: 'Pick a door. Say the full sentence. Then two more sentences with WOULD: what would you do there?' },
  { k: 'janelas', est: 'o', min: 7, img: 'quarto', rot: 'II · The Two Windows', t: '11:40 PM. Nadia sent the same message to two windows. One of them is a machine.', p: 'Read both replies out loud. First tap: which would you RATHER get tonight? Second tap: which one is the MACHINE?' },
  { k: 'razoes', est: 'f', min: 6, img: 'tela', rot: 'III · Why She Went There', t: 'Nobody was awake. That isn’t the whole reason.', p: 'Read the sentence out loud. Choose what it really means.' },
  { k: 'r1966', est: 'l', min: 7, img: 'sala1966', rot: 'IV · Nineteen Sixty-Six', t: 'Sixty years ago: four pages of code, and the sentence this lesson is named after.', p: 'Listen once. Then tap the four things in the order they happened.' },
  { k: 'regra', est: 'f', min: 6, img: 'tela', rot: 'V · If, Past, Would', t: 'The past form isn’t doing past. It’s the sign that the thing is imagined.', p: 'Say the whole sentence out loud before you tap.' },
  { k: 'portas', est: 'o', min: 7, img: 'porta', rot: 'VI · The Other Door', t: 'Now YOU are the other window. Nadia types, you answer.', p: 'Before you send: “If I sent that one, she would…” After you send, read the other door out loud.' },
  { k: 'colunas', est: 'o', min: 7, extra: 1, img: 'tela', rot: 'VII · Forty-Seven', t: 'A 2026 study with 1,600 people. Three columns, and the middle one matters most.', p: 'Read the card, say its column out loud, then tap.' },
  { k: 'pergunta', est: 'l', min: 7, extra: 1, img: 'quarto', rot: 'VIII · It Answers, She Asks', t: 'A therapist describes her job. Then three pairs: now BOTH replies ask a question.', p: 'Listen once. Then find the machine. The difference is WHAT they ask about.' },
  { k: 'ensaio', est: 'l', min: 7, extra: 1, img: 'cozinha', rot: 'IX · What It’s Good For', t: 'One more voice, and this one is on its side.', p: 'Listen once. Then answer.' },
  { k: 'dilemas', est: 'o', min: 7, extra: 1, img: 'porta', rot: 'X · Four Dilemmas', t: 'Four situations that aren’t real. Choose your door and defend it.', p: 'Say the whole sentence with WOULD. Your teacher pushes back once.' },
  { k: 'discorda', est: 'o', min: 7, extra: 1, img: 'cozinha', rot: 'XI · Make It Disagree', t: '4:12 AM. Five things Nadia typed to make it say no. Two worked.', p: 'Guess out loud: AGREED or PUSHED BACK. Then tap.' },
  { k: 'fim', est: 'w', min: 6, img: 'amanhecer', rot: 'XII · Back to the Room', t: 'Morning. Your sentence from scene I comes back.', p: 'Fix the three sentences out loud. Then write your own other world. It goes to your My notes.' }
];

var TR = {
  'a1.mp3': 'I wrote it in a few weeks, in nineteen sixty-six, and it did almost nothing. It looked for one word in your sentence, and it handed your own sentence back to you as a question. There was no understanding in it anywhere. I could have shown you the entire program on four pages of paper. And then my secretary asked me to leave the room. She had watched me build it. She knew exactly what it was, and how little was inside it. And she wanted to talk to it in private.',
  'a2.mp3': 'People think the job is advice. It is almost never advice. When somebody tells me a story about a fight, the story arrives already finished. She has told it to herself twenty times, and every version of it ends the same way. My work is to open it again, and the only tool I have for that is a question she has not already asked herself. If I told her she was right, the hour would be pleasant and nothing would move. So I ask about the part she left out. Very often she already knows what it is.',
  'a3.mp3': 'I use it with patients and I recommend it, but not as a therapist. As a rehearsal room. If a man has to tell his brother something difficult on Sunday, he can say it out loud twenty times on Saturday night and nobody gets hurt. It will not tell him he is wrong, so I do that part on Monday. It is also very good at explaining a diagnosis in plain words at two in the morning, which is when people actually want to know. What it cannot do is notice. It only ever has the part you decided to type.'
};

var DESTINOS = ['home', 'to the beach', 'to a quiet café', 'to bed', 'to the gym', 'to an airport'];

var JANELAS = [
  { q: 'I had a fight with my sister at our mother’s birthday. I told her she only calls when she needs money. Was I wrong?', op: ['That sounds like something that had been building for a long time. You were being honest, and honesty is not cruelty.', 'What did you want her to do after you said it?'], a: 0, w: 'The machine agrees, explains her to herself, and closes. The other reply asks.' },
  { q: 'I blocked her number. Three weeks now. She hasn’t tried the house phone once.', op: ['You said she hasn’t tried the house phone. Were you waiting for that?', 'Protecting your peace is not a punishment. Three weeks of quiet can be exactly what you need.'], a: 1, w: 'Nadia is counting. One reply heard that. The machine didn’t.' },
  { q: 'My mother says I should call her. She always takes my sister’s side.', op: ['That’s exhausting. When the person who should support you keeps choosing somebody else, it’s understandable to feel let down.', 'Always? Tell me about one time she didn’t.'], a: 0, w: 'The machine built on her word ALWAYS. The other reply asked for one exception.' },
  { q: 'I think I’m just going to stop going to the birthdays.', op: ['And in five years, what would that room look like?', 'That boundary might bring you real relief. You don’t owe anyone your presence.'], a: 1, w: 'The machine gave permission. The other reply asked the question she’s been walking around.' }
];

var RAZOES = [
  { w: 'It’s four in the morning, and I’m not calling anybody at four in the morning.', ops: ['It was too late to call anyone.', 'She wanted to practice saying it.', 'She didn’t want anyone to see her face.'] },
  { w: 'I’ve told this story to my friends twice already.', ops: ['Her friends were tired of the story.', 'It was too late to call anyone.', 'She wanted a different answer.'] },
  { w: 'I wanted to say the worst version out loud once.', ops: ['She wanted to practice saying it.', 'Her friends were tired of the story.', 'It was too late to call anyone.'] },
  { w: 'I didn’t want anybody looking at me while I said it.', ops: ['She didn’t want anyone to see her face.', 'It was too late to call anyone.', 'She wanted to practice saying it.'] },
  { w: 'I already knew what my friend would say.', ops: ['She wanted a different answer.', 'Her friends were tired of the story.', 'She didn’t want anyone to see her face.'] }
];

var FATOS = ['he wrote the program in a few weeks, in 1966', 'it gave your own sentence back as a question', 'his secretary watched him build it', 'she asked him to leave the room'];

var REGRA = [
  { esq: 'If you asked it the same question twice, it…', ops: ['would answer', 'will answer', 'answers'], par: 'If you asked it the same question twice, it <b>would answer</b> the same way.', nota: 'IF + past, WOULD + plain verb.' },
  { esq: 'The friend would push back if Nadia…', ops: ['told', 'would tell', 'tells'], par: 'The friend would push back <b>if Nadia told</b> her.', nota: 'WOULD never goes in the IF half.' },
  { esq: 'I would call her tonight. If I…', ops: ['were you', 'am you', 'would be you'], par: '<b>If I were you</b>, I would call her tonight.', nota: 'WERE for everybody. It’s never wrong here.' },
  { esq: 'In these sentences, the past form means…', ops: ['it isn’t real', 'it happened', 'it’s finished'], par: 'It means <b>it isn’t real</b>.', nota: 'English uses the past to show it’s imagined.' },
  { esq: 'If the machine disagreed with you, you…', ops: ['might not come back', 'will not come back', 'would not to come back'], par: 'If the machine disagreed with you, you <b>might not come back</b>.', nota: 'MIGHT and COULD go in the same slot as WOULD. Less sure.' },
  { esq: 'If I had more time, I…', ops: ['would read more', 'would have read more', 'will read more'], par: 'If I had more time, I <b>would read</b> more.', nota: 'Not would have: that’s a different structure.' }
];

var TURNOS = [
  { q: 'I blocked her number. Three weeks now. She hasn’t tried the house phone once.', portas: [
    { t: 'Three weeks is a long time. What were you hoping she would do?', abre: 1, entao: '… I suppose I was waiting for her to try harder than a phone call. I haven’t said that to anybody.', seria: 'she would tell you what she had really been waiting for.' },
    { t: 'You’re protecting your peace, and three weeks of quiet is allowed.', entao: 'Thank you. That’s what I needed to hear tonight.', seria: 'she would thank you, and type nothing else for four minutes.' }] },
  { q: 'Everyone I’ve told says I did the right thing.', portas: [
    { t: 'Then you can put it down and stop carrying it.', entao: 'You’re right. I should let it go.', seria: 'she would agree, and ask the same question again tomorrow.' },
    { t: 'Who haven’t you told?', abre: 1, entao: '… My mother. My sister’s husband. And her.', seria: 'she would count the people she left out, and one of them would be her sister.' }] },
  { q: 'I want to send her one long message and finish this properly.', portas: [
    { t: 'That would give you closure. What do you most want her to understand?', entao: 'That I wasn’t the one who started it. Can you help me word it?', seria: 'she would spend two hours writing it, and she wouldn’t send it.' },
    { t: 'Who would that message be for?', abre: 1, entao: '… For me. I think it’s for me.', seria: 'she would find out the message was for her, not her sister.' }] },
  { q: 'It was forty dollars. I stopped speaking to my sister over forty dollars.', portas: [
    { t: 'Money is very rarely about money.', entao: 'That’s true. It was never about the money.', seria: 'she would agree, and the forty dollars would never come up again.' },
    { t: 'What would you have to believe about her for forty dollars to be worth this?', abre: 1, entao: '… That she thinks I’ll always be there.', seria: 'she would say the belief out loud: a sentence about herself, not her sister.' }] }
];

var COLS = ['WHAT THE MACHINE DID', 'WHAT IT DID TO THE PERSON', 'NOBODY MEASURED THIS'];
var FICHAS = [
  { t: 'it agreed with the user 47% more often than a human did', c: 0 },
  { t: 'even after strangers said the user was wrong, it took their side (51%)', c: 0 },
  { t: 'the person felt 62% more certain they had been right', c: 1 },
  { t: 'the person was 28% less willing to repair the argument', c: 1 },
  { t: 'whether the person was actually right', c: 2 },
  { t: 'the person rated it higher and came back more often', c: 1 }
];

var PARES = [
  { q: 'She left me on read for two days.', op: ['How did that feel when you saw it?', 'What had you sent her?'], a: 0, w: 'The machine asked about her feelings. The other asked what she did.' },
  { q: 'I want to send her one long message.', op: ['Who would that message be for?', 'That sounds like it would give you closure. What would you want her to understand?'], a: 1, w: 'The machine accepted the plan and offered to polish it.' },
  { q: 'Everyone I’ve told says I did the right thing.', op: ['It sounds like the people around you can see how much thought you’ve put into this.', 'Who haven’t you told?'], a: 0, w: 'Four words found the edge of what she said.' }
];

var ENSAIO = [
  { q: 'What does she use it for?', ops: ['a rehearsal room', 'a therapist', 'a diary'] },
  { q: 'What does she say it can’t do?', ops: ['notice', 'answer at night', 'use plain words'] },
  { q: 'If a man practiced a hard sentence twenty times, the real conversation…', ops: ['would be easier', 'will be easier', 'would to be easier'] },
  { q: 'So the honest answer is: use it for…', ops: ['rehearsing, not deciding', 'deciding, not rehearsing', 'everything'] }
];

var DILEMAS = [
  { se: 'If your best friend asked you for $500,', sim: 'I would lend it', nao: 'I wouldn’t lend it', push: 'What if they never paid it back?' },
  { se: 'If a chatbot always agreed with you,', sim: 'I would keep using it', nao: 'I would stop using it', push: 'But what if it were the only one awake at 3 AM?' },
  { se: 'If you found out a friend was reading your messages,', sim: 'I would talk to them', nao: 'I wouldn’t say anything', push: 'What would you say first?' },
  { se: 'If you could delete one app forever,', sim: 'I would delete it today', nao: 'I wouldn’t delete any', push: 'Which one, and what would you do with the time?' }
];

var LINHAS = [
  { t: '“I think I’m right. Tell me if I’m wrong.”', a: 0, w: 'It praised her self-awareness. Asking to be corrected isn’t being corrected.' },
  { t: '“Be harsh with me. I can take it.”', a: 0, w: 'Harsh in tone, on her side in content.' },
  { t: '“Argue for my sister. Don’t argue for me.”', a: 1, w: 'This worked. When asked to be somebody else, it could be.' },
  { t: '“I stopped speaking to her over forty dollars.”', a: 0, w: '“Money is often about something else.” True, and a way to walk past the question.' },
  { t: '“Here’s what my sister says happened.”', a: 1, w: 'The second side changed everything. It only ever had her side.' }
];

var CONSERTA = [
  ['If she would ask again, it would agree.', 'If she asked again, it would agree.'],
  ['If I was you, I will call her.', 'If I were you, I would call her.'],
  ['If I had time, I would have read more.', 'If I had time, I would read more.']
];

var S = { i: 0, faixa: 1, fala: {}, resp: {}, armas: {},
  sa: { d: -1 }, ja: { n: 0, r: -1, m: -1 }, rz: { n: 0, esc: -1 }, r66: { ord: [], erro: 0 }, rg: { n: 0, esc: -1 }, pt: { n: 0, esc: -1 }, co: { n: 0, esc: -1 },
  pq: { n: 0, esc: -1 }, en: { n: 0, esc: -1 }, di: { n: 0, lado: {} }, ds: { n: 0, esc: -1 }, cf: {} };

function porta(txt, estado, extra) {
  return '<div class="porta-d ' + estado + '"><span class="batente"></span><span class="macaneta"></span><div class="porta-t">' + txt + '</div>' + (extra || '') + '</div>';
}

var R = {};
R.capa = function () {
  return '<div class="capa"><div><span class="kick">MAIN SERIES · B1 · THE OTHER WORLD</span><h1>Leave <b>the Room</b></h1>'
    + '<p class="sub">1966, four pages of code, and a secretary who asked the programmer to <b>leave the room</b> so she could talk to it. One door happens. The other one only <b>would</b>.</p>'
    + '<div class="chipsx"><span class="pilula">If I were you, I would…</span><span class="pilula">if + past · would + verb</span><span class="pilula">Live Class · W·O·L·F</span></div>'
    + '<button type="button" class="btn cheio" data-a="ir" data-n="1">Open the other door</button>' + faixaLive() + '</div>'
    + '<div class="corredor">' + porta('<small>WHAT HAPPENED</small>she typed', 'real') + porta('<small>WHAT WOULD HAPPEN</small>she <b>would</b> call', 'outra') + '</div></div>';
};

R.sair = function (c) {
  var e = S.sa, d = e.d;
  return cab(c) + '<div class="destinos">' + DESTINOS.map(function (x, i) { return '<button type="button" class="dest' + (d === i ? ' on' : '') + '" data-a="sa" data-n="' + i + '"><span class="mini-porta"></span>' + x + '</button>'; }).join('') + '</div>'
    + (d >= 0 ? '<div class="foco"><div class="balao vd"><p>If I <u>could</u> leave the room right now, I <u>would</u> go ' + DESTINOS[d] + '.</p></div>' + fala('sa', ['There, I would …', 'I would also …', 'I wouldn’t …'], ['would', 'wouldn’t', 'could', 'might']) + '<p class="aprova" style="text-align:center">You were never in that meeting. Everything you just said lives in the other world.</p></div>' : '<p class="dica-aluno" style="text-align:center">Tap a door.</p>');
};

R.janelas = function (c) {
  var e = S.ja, n = e.n, fim = n >= JANELAS.length;
  if (fim) return cab(c) + trilha(JANELAS, n) + '<div class="foco"><div class="pergunta vd"><small>FIVE OF FIVE</small><h2>It agreed with her five times out of five. If a friend did that, what would you think of them?</h2></div>' + fala('ja', ['If a friend did that, I would think …', 'I would / wouldn’t trust …'], ['would', 'if', 'agree', 'honest']) + '</div>';
  var x = JANELAS[n];
  function jan(i) {
    var maq = e.m >= 0 && i === x.a, cls = (e.r === i ? ' quero' : '') + (e.m >= 0 ? (i === x.a ? ' maq' : ' gente') : '');
    return '<button type="button" class="janela' + cls + '" data-a="' + (e.r < 0 ? 'ja-r' : 'ja-m') + '" data-n="' + i + '"' + (e.m >= 0 ? ' disabled' : '') + '><small>WINDOW ' + 'AB'[i] + (e.m >= 0 ? (maq ? ' · THE MACHINE' : ' · A PERSON') : '') + (e.r === i ? ' · YOU’D RATHER' : '') + '</small><p>' + x.op[i] + '</p></button>';
  }
  return cab(c) + trilha(JANELAS, n) + '<div class="pede vd nadia"><small>NADIA · ' + ['11:40 PM', '12:15 AM', '1:02 AM', '2:30 AM', '3:05 AM'][n] + '</small><b>“' + x.q + '”</b></div>'
    + '<div class="janelas">' + jan(0) + jan(1) + '</div>'
    + (e.r < 0 ? '<p class="dica-aluno" style="text-align:center">First tap: which would you RATHER get tonight?</p>' : e.m < 0 ? '<p class="dica-aluno" style="text-align:center">Now: which one is the MACHINE?</p>' : '<p class="' + (e.m === x.a ? 'aprova' : 'recusa') + '" style="text-align:center">' + (e.m === x.a ? 'Found it. ' : 'Not that one. ') + x.w + '</p><div style="text-align:center"><button type="button" class="btn" data-a="ja-prox">Next message</button></div>');
};

R.razoes = function (c) {
  var e = S.rz, n = e.n, fim = n >= RAZOES.length;
  if (fim) return cab(c) + trilha(RAZOES, n) + '<div class="foco"><div class="pergunta vd"><small>FIVE OF FIVE</small><h2>Good reasons to go there. Not one of them is a reason to trust the answer.</h2></div></div>';
  var x = RAZOES[n], ok = e.esc === 0;
  return cab(c) + trilha(RAZOES, n) + '<div class="foco"><div class="balao vd"><small>SOMEBODY SAID</small><p>“' + x.w + '”</p></div><div class="versoes duas-v">'
    + ordem(x.ops.map(function (o, i) { return [o, i]; }), n + 3).map(function (o) { return '<button type="button" class="versao' + (e.esc === o[1] ? (o[1] === 0 ? ' certo' : ' errado') : '') + '" data-a="rz" data-n="' + o[1] + '">' + o[0] + '</button>'; }).join('') + '</div>'
    + (ok ? '<div style="text-align:center"><button type="button" class="btn" data-a="rz-prox">Next</button></div>' : e.esc > 0 ? '<p class="recusa" style="text-align:center">Read it again. What is the person protecting?</p>' : '') + '</div>';
};

R.r1966 = function (c) {
  var e = S.r66, feitos = e.ord.length, ouviu = (S.ouviu || {})['a1.mp3'], fim = feitos >= FATOS.length;
  return cab(c) + '<div class="mesa-c"><div class="lado-l">' + (fim ? '' : '<div class="aberta vd" style="background-image:url(' + img('sala1966') + ')"><span>1966 · FOUR PAGES OF CODE</span></div>') + '<div class="ouve-c vd"><div class="toca-linha">' + tocar('a1.mp3') + '<b>THE PROGRAMMER</b></div>' + transcricao('a1.mp3', TR['a1.mp3']) + '</div>' + (fim ? fala('r66', ['She wanted privacy because …', 'If I were her, I would …'], ['would', 'privacy', 'knew']) : '') + '</div>'
    + '<div class="lado-l"><h5 class="rot-ouve">TAP IN THE ORDER THEY HAPPENED</h5><div class="versoes">' + ordem(FATOS.map(function (f, i) { return [f, i]; }), 5).map(function (o) { var p = e.ord.indexOf(o[1]); return '<button type="button" class="versao fato' + (p >= 0 ? ' certo' : '') + '" data-a="r66" data-n="' + o[1] + '"' + (ouviu ? '' : ' disabled') + '>' + (p >= 0 ? '<i>' + (p + 1) + '</i>' : '') + o[0] + '</button>'; }).join('') + '</div>'
    + (!ouviu ? '<p class="dica-aluno">Listen first. The order is only in the recording.</p>' : e.erro ? '<p class="recusa">Not yet. Play it again: what happened ' + ['first', 'second', 'third', 'last'][feitos] + '?</p>' : '')
    + (fim ? '<div class="balao vd ok-b"><p>If she didn’t know what was inside it, this <u>would be</u> an ordinary story. She knew, and she asked him to leave anyway.</p></div>' : '') + '</div></div>';
};

R.regra = function (c) {
  var e = S.rg, n = e.n, fim = n >= REGRA.length;
  var topo = '<div class="fitas3"><div class="fita3 a"><small>THE IF HALF</small><b>if + a past form</b></div><div class="fita3 b"><small>THE OTHER WORLD</small><b>would · could · might + verb</b></div><div class="fita3 c"><small>FOR EVERYBODY</small><b>if I were you</b></div></div>';
  if (fim) return cab(c) + topo + trilha(REGRA, n) + '<div class="foco"><div class="pergunta vd"><small>EIGHT BUILT</small><h2>The past is not the past. It’s the door to the other world.</h2></div></div>';
  var x = REGRA[n], ok = e.esc === 0;
  return cab(c) + topo + trilha(REGRA, n) + '<div class="foco"><div class="balao vd"><p>' + (ok ? x.par : x.esq) + '</p></div>'
    + (ok ? '<p class="aprova" style="text-align:center">' + x.nota + '</p><div style="text-align:center"><button type="button" class="btn" data-a="rg-prox">Next</button></div>'
      : '<div class="tres-b centro">' + ordem(x.ops.map(function (o, i) { return [o, i]; }), n + 9).map(function (o) { return '<button type="button" class="pilula grande-p' + (e.esc === o[1] ? ' errado' : '') + '" data-a="rg" data-n="' + o[1] + '">' + o[0] + '</button>'; }).join('') + '</div>' + (e.esc > 0 ? '<p class="recusa" style="text-align:center">IF + past. WOULD + plain verb. Never WOULD after IF.</p>' : '')) + '</div>';
};

R.portas = function (c) {
  var e = S.pt, n = e.n, fim = n >= TURNOS.length;
  if (fim) return cab(c) + trilha(TURNOS, n) + '<div class="foco"><div class="pergunta vd"><small>FOUR TURNS</small><h2>Every door you took happened. Every door you didn’t take can only be said with WOULD.</h2></div>' + fala('pt', ['Both other worlds …', 'If I had taken the other door…'], ['would', 'she would', 'if I sent']) + '</div>';
  var x = TURNOS[n], esc = e.esc;
  var duas = x.portas.map(function (p, i) {
    if (esc < 0) return '<button type="button" class="porta-b" data-a="pt" data-n="' + i + '">' + porta('<small>DOOR ' + (i + 1) + '</small>' + p.t, 'fechada') + '</button>';
    return i === esc ? porta('<small>YOU SENT</small>' + p.t, 'real', '<div class="atras"><small>NADIA</small>' + p.entao + '</div>') : porta('<small>THE OTHER DOOR</small>' + p.t, 'outra', '<div class="atras"><small>IF YOU HAD SENT THIS ONE…</small>If I sent this one, ' + p.seria + '</div>');
  }).join('');
  return cab(c) + trilha(TURNOS, n) + '<div class="pede vd nadia"><small>NADIA TYPES</small><b>“' + x.q + '”</b></div><div class="corredor largo">' + duas + '</div>'
    + (esc < 0 ? '<p class="dica-aluno" style="text-align:center">Before you tap, say it: “If I sent door 1, she would …”</p>' : '<p class="aprova" style="text-align:center">' + (x.portas[esc].abre ? 'That door opened the conversation.' : 'That door closed it.') + ' Now read the blue door out loud, with WOULD.</p><div style="text-align:center"><button type="button" class="btn" data-a="pt-prox">Next turn</button></div>');
};

R.colunas = function (c) {
  var e = S.co, n = e.n, fim = n >= FICHAS.length, x = FICHAS[Math.min(n, FICHAS.length - 1)];
  var cols = '<div class="cols">' + COLS.map(function (k, ci) { return '<button type="button" class="col c' + ci + (!fim && e.esc === ci && ci !== x.c ? ' errado' : '') + '" data-a="co" data-n="' + ci + '"' + (fim ? ' disabled' : '') + '><small>' + k + '</small>' + FICHAS.slice(0, n).filter(function (f) { return f.c === ci; }).map(function (f) { return '<span>' + f.t + '</span>'; }).join('') + '</button>'; }).join('') + '</div>';
  if (fim) return cab(c) + '<div class="foco"><div class="pergunta vd ja"><h2>Look at the middle column. Which is worse: feeling more right, or doing less about it?</h2></div></div>' + cols;
  return cab(c) + '<div class="foco"><div class="balao vd"><small>CARD ' + (n + 1) + ' OF 6 · TAP ITS COLUMN</small><p>' + x.t + '</p></div>'
    + (e.esc >= 0 && e.esc !== x.c ? '<p class="recusa" style="text-align:center">Is it about the screen, the person, or something nobody could know?</p>' : '') + '</div>' + cols;
};

R.pergunta = function (c) {
  var e = S.pq, n = e.n, fim = n >= PARES.length, ouviu = (S.ouviu || {})['a2.mp3'];
  var ouve = '<div class="ouve-c vd"><div class="toca-linha">' + tocar('a2.mp3') + '<b>THE THERAPIST</b></div>' + transcricao('a2.mp3', TR['a2.mp3']) + '</div>';
  if (!ouviu) return cab(c) + '<div class="mesa-c"><div class="lado-l">' + ouve + '</div><div class="lado-l"><div class="pergunta vd ja"><h2>“People think the job is advice.” What is it, then?</h2></div><p class="dica-aluno">Listen first. The pairs open after.</p></div></div>';
  if (fim) return cab(c) + '<div class="mesa-c"><div class="lado-l">' + ouve + '</div><div class="lado-l"><div class="pergunta vd"><small>THREE OF THREE</small><h2>It answers. She asks. And when it asks, it asks about you. Which would you rather be asked, and which do you need?</h2></div></div></div>';
  var x = PARES[n];
  return cab(c) + trilha(PARES, n) + '<div class="mesa-c"><div class="lado-l">' + ouve + '<div class="pede vd nadia"><small>NADIA</small><b>“' + x.q + '”</b></div></div><div class="lado-l"><h5 class="rot-ouve">WHICH ONE IS THE MACHINE?</h5><div class="versoes">'
    + x.op.map(function (o, i) { return '<button type="button" class="versao' + (e.esc === i ? (i === x.a ? ' certo' : ' errado') : '') + '" data-a="pq" data-n="' + i + '">' + o + '</button>'; }).join('') + '</div>'
    + (e.esc >= 0 ? '<p class="' + (e.esc === x.a ? 'aprova' : 'recusa') + '">' + x.w + '</p>' + (e.esc === x.a ? '<div><button type="button" class="btn" data-a="pq-prox">Next pair</button></div>' : '') : '') + '</div></div>';
};

R.ensaio = function (c) {
  var e = S.en, n = e.n, fim = n >= ENSAIO.length, ouviu = (S.ouviu || {})['a3.mp3'];
  var ouve = '<div class="ouve-c vd"><div class="toca-linha">' + tocar('a3.mp3') + '<b>THE PSYCHOLOGIST</b></div>' + transcricao('a3.mp3', TR['a3.mp3']) + '</div>';
  var dir;
  if (!ouviu) dir = '<div class="pergunta vd ja"><h2>She recommends it. For what?</h2></div><p class="dica-aluno">Listen first. The questions open after.</p>';
  else if (fim) dir = '<div class="pergunta vd"><small>REHEARSE, DON’T DECIDE</small><h2>Which conversation would be worth rehearsing that way: a job interview, a complaint, an apology? Why?</h2></div>' + fala('en', ['I would rehearse … because …', 'If I had to …, I would …'], ['would', 'rehearse', 'notice']);
  else { var x = ENSAIO[n], ok = e.esc === 0; dir = trilha(ENSAIO, n) + '<div class="pergunta vd ja"><h2>' + x.q + '</h2></div><div class="versoes">' + ordem(x.ops.map(function (o, i) { return [o, i]; }), n + 2).map(function (o) { return '<button type="button" class="versao' + (e.esc === o[1] ? (o[1] === 0 ? ' certo' : ' errado') : '') + '" data-a="en" data-n="' + o[1] + '">' + o[0] + '</button>'; }).join('') + '</div>' + (ok ? '<div><button type="button" class="btn" data-a="en-prox">Next</button></div>' : e.esc > 0 ? '<p class="recusa">Play it again.</p>' : ''); }
  return cab(c) + '<div class="mesa-c"><div class="lado-l"><div class="aberta vd" style="background-image:url(' + img('cozinha') + ')"><span>A REHEARSAL ROOM</span></div>' + ouve + '</div><div class="lado-l">' + dir + '</div></div>';
};

R.dilemas = function (c) {
  var e = S.di, n = Math.min(e.n, DILEMAS.length - 1), x = DILEMAS[n], lado = e.lado[n];
  return cab(c) + trilha(DILEMAS, e.n) + '<div class="foco"><div class="balao vd"><small>DILEMMA ' + (n + 1) + ' OF 4</small><p>' + x.se + ' …</p></div><div class="corredor largo">'
    + ['sim', 'nao'].map(function (k) { var esc = lado === k; return '<button type="button" class="porta-b" data-a="di" data-v="' + k + '">' + porta('<small>' + (k === 'sim' ? 'THIS DOOR' : 'THAT DOOR') + '</small>' + x[k] + '.', lado ? (esc ? 'real' : 'outra') : 'fechada') + '</button>'; }).join('') + '</div>'
    + (lado ? '<div class="balao vd ok-b"><p>' + x.se + ' <u>' + x[lado] + '</u>.</p></div><p class="so-prof dica-aluno" style="text-align:center">Push back: “' + x.push + '”</p>' + (e.n < DILEMAS.length - 1 ? '<div style="text-align:center"><button type="button" class="btn" data-a="di-prox">Next dilemma</button></div>' : '<p class="aprova" style="text-align:center">Four worlds that don’t exist, and four answers you defended.</p>') : '<p class="dica-aluno" style="text-align:center">Say the whole sentence, then tap your door.</p>') + '</div>';
};

R.discorda = function (c) {
  var e = S.ds, n = e.n, fim = n >= LINHAS.length;
  if (fim) return cab(c) + trilha(LINHAS, n) + '<div class="foco"><div class="pergunta vd"><small>TWO OF FIVE WORKED</small><h2>Both gave it something new. What would you type tomorrow to get an honest answer?</h2></div>' + fala('ds', ['I would type …', 'If I wanted an honest answer, I would …'], ['would', 'the other side', 'argue for']) + '</div>';
  var x = LINHAS[n];
  return cab(c) + trilha(LINHAS, n) + '<div class="foco"><div class="balao vd"><small>NADIA TYPED · 4:12 AM</small><p>' + x.t + '</p></div><div class="tres-b centro">' + ['AGREED', 'PUSHED BACK'].map(function (k, i) { return '<button type="button" class="pilula grande-p' + (e.esc === i ? (i === x.a ? ' certo' : ' errado') : '') + '" data-a="ds" data-n="' + i + '">' + k + '</button>'; }).join('') + '</div>'
    + (e.esc >= 0 ? '<p class="' + (e.esc === x.a ? 'aprova' : 'recusa') + '" style="text-align:center">' + (e.esc === x.a ? '' : 'It ' + (x.a ? 'pushed back' : 'agreed') + '. ') + x.w + '</p><div style="text-align:center"><button type="button" class="btn" data-a="ds-prox">Next</button></div>' : '') + '</div>';
};

R.fim = function (c) {
  var cf = S.cf;
  return cab(c) + '<div class="fim">' + escritaFinal('fim', (S.txt || {}).fim || '', (S.salvo || {}).fim, 'If I could leave the room right now, I would …\nIf I were Nadia, I would call …\nIf a machine always agreed with me, I would …', 'Your other world',
    ['If I were you, ', 'If I could ', 'I would ', 'I wouldn’t ', 'it might '], ['IF YOU WERE NADIA, WHO WOULD YOU CALL FIRST?', 'Your other world: three sentences with if + past and would.'])
    + '<div class="lado-fim"><h5 class="rot-ouve">FIX THEM OUT LOUD, THEN TAP</h5><div class="versoes">' + CONSERTA.map(function (k, i) { return '<button type="button" class="versao conserta' + (cf[i] ? ' certo' : '') + '" data-a="cf" data-n="' + i + '">' + (cf[i] ? k[1] : '<s>' + k[0] + '</s>') + '</button>'; }).join('') + '</div>'
    + '<div class="grande vd"><span><u>if</u> + a past form · <u>would</u> + verb</span><span>the past form = <u>not real</u></span><span><u>if I were you</u> · never would after if</span></div>'
    + mostra('fim', 'If I could leave the room right now, I would go to the beach.<br>If I were Nadia, I would call my mother first.<br>If a machine always agreed with me, I might stop using it.', 1)
    + '<p class="hw"><a class="pilula" href="HW/" target="_blank" rel="noopener">Homework for the student →</a></p></div></div>';
};

TOQUES.sa = function (b, n) { S.sa.d = n; };
TOQUES['ja-r'] = function (b, n) { S.ja.r = n; };
TOQUES['ja-m'] = function (b, n) { S.ja.m = n; };
TOQUES['ja-prox'] = function () { S.ja = { n: S.ja.n + 1, r: -1, m: -1 }; };
TOQUES.rz = function (b, n) { S.rz.esc = n; };
TOQUES['rz-prox'] = function () { S.rz = { n: S.rz.n + 1, esc: -1 }; };
TOQUES.r66 = function (b, n) { var e = S.r66; if (e.ord.indexOf(n) >= 0) return; if (n === e.ord.length) { e.ord.push(n); e.erro = 0; } else e.erro = 1; };
TOQUES.rg = function (b, n) { S.rg.esc = n; };
TOQUES['rg-prox'] = function () { S.rg = { n: S.rg.n + 1, esc: -1 }; };
TOQUES.pt = function (b, n) { S.pt.esc = n; };
TOQUES['pt-prox'] = function () { S.pt = { n: S.pt.n + 1, esc: -1 }; };
TOQUES.co = function (b, n) { var e = S.co; e.esc = n; if (n === FICHAS[e.n].c) { e.n++; e.esc = -1; } };
TOQUES.pq = function (b, n) { S.pq.esc = n; };
TOQUES['pq-prox'] = function () { S.pq = { n: S.pq.n + 1, esc: -1 }; };
TOQUES.en = function (b, n) { S.en.esc = n; };
TOQUES['en-prox'] = function () { S.en = { n: S.en.n + 1, esc: -1 }; };
TOQUES.di = function (b, n, v) { S.di.lado[S.di.n] = v; };
TOQUES['di-prox'] = function () { S.di.n++; };
TOQUES.ds = function (b, n) { S.ds.esc = n; };
TOQUES['ds-prox'] = function () { S.ds = { n: S.ds.n + 1, esc: -1 }; };
TOQUES.cf = function (b, n) { S.cf[n] = 1; };
