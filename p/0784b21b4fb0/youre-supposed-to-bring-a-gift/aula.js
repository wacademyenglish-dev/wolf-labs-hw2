/* ============================================================
   YOU’RE SUPPOSED TO BRING A GIFT · THE INVITATION · LIVE CLASS  06/10/2026
   Main series B1 · be supposed to (a regra, o plano, o que se espera);
   be expected to (o mesmo, mais formal); not supposed to (a etiqueta
   proíbe, ≠ don't have to); was / were supposed to (o plano que não
   aconteceu); supposedly ≠ supposed to. Erros: "Is to bring a gift?",
   "We supposed to", "supposed bring", "suppose to", "don't have to"
   para proibido, "supposed to being".
   O MUNDO (da aula velha): a amiga Emma casa com o Kenji em Kyoto; o
   aluno comprou uma cafeteira enorme; o convite preto e dourado com o
   guia do convidado (envelope com notas novas, nada de branco,
   discursos de três minutos); a recepção mesa por mesa; a ligação do
   Leo no dia seguinte. Sem áudio, como a velha.
   A CARA: o CONVITE preto e dourado com OITO SELOS de cera em SVG —
   cada selo se parte ao abrir e revela uma linha do guia — e o MAPA
   DE MESAS do salão: oito mesas redondas em arco, com nome de árvore,
   que acendem em dourado quando o convidado é atendido.
   Fila: FILA-LIVE-386.md · 115.
   ============================================================ */
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'festas', est: 'o', min: 7, img: 'bolo', rot: 'I · You and Parties', t: 'Before the wedding: you and big parties. This or that?', p: 'Choose a side fast. Then tell a real story. Your teacher answers too.' },
  { k: 'convite', est: 'o', min: 7, img: 'convite', rot: 'II · The Invitation', t: 'Eight gold seals, eight lines of the guest guide. What are the guests supposed to do?', p: 'Open a seal. Read the line. Say what guests have to do. Your teacher taps what they heard.' },
  { k: 'regra', est: 'f', min: 6, img: 'envelope', rot: 'III · The Rule', t: 'A person, then BE, then supposed to, then the verb.', p: 'Say each wrong line the right way out loud. Then tap SHOW ME.' },
  { k: 'mesas', est: 'o', min: 7, img: 'mesas', rot: 'IV · The Seating Chart', t: 'The reception. Eight tables, eight guests, and everybody has a question.', p: 'Your teacher is the guest. Answer at once, starting with the words under the line.' },
  { k: 'manha', est: 'o', min: 7, img: 'jardim', rot: 'V · The Morning After', t: 'Your friend Leo calls. He has a wedding in Japan next month.', p: 'Your teacher is Leo. Tell the story and explain the etiquette. Then ask Leo one question.' },
  { k: 'quiz', est: 'f', min: 6, extra: 1, img: 'bolo', rot: 'VI · Quick Check', t: 'Six quick lines from the wedding.', p: 'Say the whole sentence. Then tap the word.' },
  { k: 'regras', est: 'o', min: 7, extra: 1, img: 'presente', rot: 'VII · Your Rules', t: 'Your life has etiquette too. What are you supposed to do?', p: 'Tap any five. Answer with supposed to, expected to, not supposed to, or was supposed to.' },
  { k: 'fim', est: 'w', min: 6, img: 'capa', rot: 'VIII · Your Guest Guide', t: 'What is everybody supposed to do at a party in your country, and what does nobody really do?', p: 'Write the guest guide for a party in your city. It goes to your My notes.' }
];

var FESTAS = [
  { a: 'A BIG WEDDING', b: 'A SMALL WEDDING', q: 'Why? Tell me about the best wedding or party you went to.', h: 'A small one. My cousin’s wedding had thirty people, and it was perfect.' },
  { a: 'DANCING', b: 'TALKING', q: 'What do you do at a party? Who do you usually talk to?', h: 'Talking. I always end up in the kitchen with my aunts.' },
  { a: 'A GIFT', b: 'MONEY', q: 'What do you like to receive on your birthday? Why?', h: 'Money, honestly. Then I buy what I really want.' },
  { a: 'DRESS UP', b: 'JEANS AND SNEAKERS', q: 'What did you wear to the last big party?', h: 'A suit. It was too hot!' },
  { a: 'ARRIVE EARLY', b: 'ARRIVE LATE', q: 'Are you usually early or late? Tell me a real story.', h: 'Late. Last year I arrived at a wedding after the ceremony.' },
  { a: 'GIVE A SPEECH', b: 'STAY QUIET', q: 'Did you ever give a speech at a party? Would you?', h: 'Never! I get very nervous.' }
];

var NOTA = {
  semser: 'It needs BE: we’re supposed to …', semto: 'It needs TO: supposed TO reply.', semd: 'supposed, with a D.', isto: 'It needs a person and BE: we’re / guests are supposed to …',
  proibido: 'don’t have to = you can choose. The etiquette says no: NOT SUPPOSED TO.', suposta: 'supposedly = people say. The rule: supposed to.', ing: 'supposed to + the base verb: to be.', suppose: 'be supposed to: we’re supposed to …', tempo: 'It’s over, it didn’t happen: WASN’T supposed to.'
};

var SELOS = [
  { k: 'THE REPLY', diz: 'Kindly reply by April 10.', q: 'What do the guests have to do, and when?', ops: [['We’re supposed to reply by April 10.', 'ok'], ['We supposed to reply by April 10.', 'semser'], ['We’re supposed reply by April 10.', 'semto']] },
  { k: 'THE TIME', diz: 'The welcome desk opens at 1:30 PM. The ceremony begins at 2 PM.', q: 'What time do guests have to be there?', ops: [['Guests are supposed to arrive at 1:30.', 'ok'], ['Guests are suppose to arrive at 1:30.', 'semd'], ['Is to arrive at 1:30.', 'isto']] },
  { k: 'THE DRESS', diz: 'Formal dress. White belongs to the bride.', q: 'Can a guest wear a white dress?', ops: [['No. Guests aren’t supposed to wear white.', 'ok'], ['No. Guests don’t have to wear white.', 'proibido'], ['No. Guests not supposed to wear white.', 'semser']] },
  { k: 'THE GIFT', diz: 'Please, no boxed gifts. A gift envelope is kindly expected.', q: 'So … the coffee machine? What do guests bring?', ops: [['We’re expected to bring money in an envelope.', 'ok'], ['We’re expected bring money in an envelope.', 'semto'], ['Is expected to bring money in an envelope.', 'isto']] },
  { k: 'THE BILLS', diz: 'New bills only, please.', q: 'Can you use the old bills in your wallet?', ops: [['No. The bills are supposed to be new.', 'ok'], ['No. The bills are supposedly new.', 'suposta'], ['No. The bills are supposed to being new.', 'ing']] },
  { k: 'THE SEATS', diz: 'Please find your name on the seating chart.', q: 'Can guests sit anywhere they want?', ops: [['No. We’re supposed to sit at our own table.', 'ok'], ['No. We suppose to sit at our own table.', 'suppose'], ['No. We’re supposed sit at our own table.', 'semto']] },
  { k: 'THE SPEECHES', diz: 'Toasts: three minutes each, and no sad words.', q: 'You’re giving a toast. How long?', ops: [['Speeches are supposed to be short.', 'ok'], ['Speeches supposed to be short.', 'semser'], ['Speeches are supposed to being short.', 'ing']] },
  { k: 'THE PHONES', diz: 'Please keep your phone in your bag during the ceremony.', q: 'Can you take photos during the ceremony?', ops: [['We aren’t supposed to use our phones.', 'ok'], ['We don’t have to use our phones.', 'proibido'], ['We aren’t suppose to use our phones.', 'semd']] }
];

var CAMINHOS = [
  { k: 'A PERSON + BE', antes: 'Is to bring a gift?', depois: '<b>Are we supposed to</b> bring a gift?', nota: 'A person, BE and TO: Am I / Are we / Is she supposed to …?' },
  { k: 'THE ETIQUETTE SAYS NO', antes: 'You don’t have to wear white.', depois: 'You’re <b>not supposed to</b> wear white.', nota: 'don’t have to: you can choose. not supposed to: please don’t.' },
  { k: 'THE PLAN FAILED', antes: 'The speech is supposed to be short, but it was twenty minutes.', depois: 'The speech <b>was supposed to</b> be short, but it was twenty minutes.', nota: 'The plan in the past, and something different happened.' }
];

var MESAS = [
  { k: 'MAPLE', quem: 'UNCLE BILL', diz: 'I brought a toaster. Are we supposed to give a gift, or money?', ini: 'We’re supposed to …', ops: [['We’re supposed to give money, in an envelope.', 'ok'], ['Is to give money, in an envelope.', 'isto'], ['We’re supposed give money.', 'semto']] },
  { k: 'BAMBOO', quem: 'YUKI', diz: 'I’m so late! What time were we supposed to be here?', ini: 'We were …', ops: [['We were supposed to be here at 1:30.', 'ok'], ['We supposed to be here at 1:30.', 'semser'], ['We were suppose to be here at 1:30.', 'semd']] },
  { k: 'PLUM', quem: 'JESS', diz: 'Can I sit with you? My table is so boring.', ini: 'Sorry, you aren’t …', ops: [['Sorry, you aren’t supposed to sit here.', 'ok'], ['Sorry, you don’t have to sit here.', 'proibido'], ['Sorry, you not supposed to sit here.', 'semser']] },
  { k: 'PINE', quem: 'COUSIN AMY', diz: 'Do you like my dress? It’s white, like snow!', ini: 'It’s beautiful, but …', ops: [['It’s beautiful, but guests aren’t supposed to wear white.', 'ok'], ['It’s beautiful, but guests don’t have to wear white.', 'proibido'], ['It’s beautiful, but guests aren’t supposedly wearing white.', 'suposta']] },
  { k: 'WILLOW', quem: 'MR. SATO', diz: 'My speech is twenty minutes. Is that OK?', ini: 'Speeches are …', ops: [['Speeches are supposed to be short. Three minutes!', 'ok'], ['Speeches are supposed be short.', 'semto'], ['Speeches are supposed to being short.', 'ing']] },
  { k: 'LOTUS', quem: 'MRS. TANAKA', diz: 'The toast is starting. Are guests expected to stand up?', ini: 'Yes, we’re …', ops: [['Yes, we’re expected to stand up.', 'ok'], ['Yes, is expected to stand up.', 'isto'], ['Yes, we’re expected stand up.', 'semto']] },
  { k: 'IRIS', quem: 'YOUR PLUS-ONE', diz: 'Wait. Was I supposed to bring new bills? Mine are old!', ini: 'Yes, you were …', ops: [['Yes, you were supposed to bring new ones.', 'ok'], ['Yes, you are supposed bring new ones.', 'semto'], ['Yes, you suppose to bring new ones.', 'suppose']] },
  { k: 'CEDAR', quem: 'EMMA, THE BRIDE', diz: 'Tell me the truth. Was everything OK?', ini: 'It was perfect! Well … the cake …', ops: [['Well, the cake wasn’t supposed to fall.', 'ok'], ['Well, the cake isn’t supposed to fall.', 'tempo'], ['Well, the cake didn’t suppose to fall.', 'suppose']] }
];

var MANHA = [
  { ela: 'So? How was the wedding? Did Emma love the coffee machine?', voce: ['Well … I wasn’t supposed to bring a gift box.'], resp: 'No way! So what were you supposed to bring?' },
  { ela: 'OK, so what are guests supposed to bring?', voce: ['We’re supposed to bring money in a special envelope …'], resp: 'New bills? OK, I’ll go to the bank first.' },
  { ela: 'What about the speeches? Were they short?', voce: ['They were supposed to be short, but …'], resp: 'Ha! Every wedding has one Mr. Sato.' },
  { ela: 'My wedding is in Osaka. What should I ask the couple?', voce: ['Ask them: Are we supposed to …?', 'What time are guests expected to …?'], resp: 'Good idea. “Are we supposed to dance?” I hope not!' }
];

var QUIZ = [
  { a: '', b: ' we supposed to bring a gift?', op: ['Are', 'Is', 'Do'], w: 'A question: BE first, with the person. <b>Are we</b> …?' },
  { a: 'Guests are expected ', b: ' early.', op: ['to arrive', 'arrive', 'arriving'], w: '<b>expected to</b> + the verb.' },
  { a: 'You ', b: ' wear white. Only the bride wears white.', op: ['aren’t supposed to', 'don’t have to', 'aren’t suppose to'], w: 'The etiquette says no: <b>not supposed to</b>.' },
  { a: 'The speech ', b: ' be short, but it was twenty minutes!', op: ['was supposed to', 'is supposed to', 'supposed to'], w: 'The plan failed, in the past: <b>was supposed to</b>.' },
  { a: 'I’m ', b: ' to bring new bills.', op: ['supposed', 'suppose', 'supposedly'], w: '<b>supposed</b>, with a D. supposedly = people say.' },
  { a: 'The hotel is ', b: ' the best in Kyoto. That’s what people say.', op: ['supposedly', 'supposed to', 'suppose'], w: '“People say, maybe it’s true”: <b>supposedly</b>.' }
];

var REGRAS_V = [
  { k: 'BIRTHDAYS', q: 'At a birthday party in your country, what are guests supposed to bring?', fup: 'And what do they really bring?', st: ['We’re supposed to …'], ex: 'We’re supposed to bring a small gift, and we’re expected to sing!' },
  { k: '8 PM', q: 'A party starts at 8 PM. What time are you really supposed to arrive?', fup: 'Who arrives first?', st: ['It’s supposed to start at …, but …'], ex: 'It’s supposed to start at 8, but nobody arrives before 9!' },
  { k: 'WORK', q: 'What are you expected to do at work or school that nobody writes down?', fup: 'Do you agree with it?', st: ['We’re expected to …'], ex: 'We’re expected to answer messages at night.' },
  { k: 'YOUR HOME', q: 'At your home, what aren’t guests supposed to do?', fup: 'Why?', st: ['They aren’t supposed to …'], ex: 'They aren’t supposed to wear shoes in the bedroom.' },
  { k: 'LAST WEEK', q: 'What were you supposed to do last week, but didn’t?', fup: 'What happened?', st: ['I was supposed to …, but …'], ex: 'I was supposed to go to the gym. I stayed home.' },
  { k: 'FAMILY', q: 'At family lunches, what are you expected to do?', fup: 'Do you like it?', st: ['I’m expected to …'], ex: 'I’m expected to bring dessert. Always.' },
  { k: 'A WEDDING', q: 'Think of a wedding you went to. Was something supposed to happen, and didn’t?', fup: 'What happened instead?', st: ['… was supposed to …, but …'], ex: 'The band was supposed to play at 10, but they arrived at midnight.' },
  { k: 'VISITORS', q: 'A friend from abroad visits your city. What are they supposed to know?', fup: 'What surprises visitors most?', st: ['They’re supposed to know that …'], ex: 'They’re supposed to know that dinner is late, at 9 or 10 PM.' }
];

var S = { i: 0, faixa: 1, fala: {}, resp: {}, armas: {},
  fs: { n: 0, lado: '' }, cv: { sel: -1, esc: {} }, rg: { abre: {} }, ms: { sel: 0, esc: {} }, mh: { n: 0, resp: 0 }, qz: { n: 0, esc: -1 }, rv: { sel: -1, foi: {} } };

/* o convite: oito selos de cera; os abertos racham e mostram a linha */
function convite(abertos, sel) {
  return '<div class="kg-convite"><div class="kg-borda"><small>EMMA &amp; KENJI · KYOTO</small><b>Guest Guide</b></div><div class="kg-selos">' + SELOS.map(function (s, i) {
    var ok = abertos[i] === 'ok';
    return '<button type="button" class="kg-selo' + (ok ? ' aberto' : '') + (sel === i ? ' on' : '') + '" data-a="cv" data-n="' + i + '"><svg viewBox="0 0 80 80" aria-hidden="true"><circle cx="40" cy="40" r="30" class="cera"/><circle cx="40" cy="40" r="20" class="miolo"/>' + (ok ? '<path class="racha" d="M30 14 L38 30 L32 40 L42 54 L38 66 M38 30 L52 26 M42 54 L56 58"/>' : '<text x="40" y="45" text-anchor="middle">' + (i + 1) + '</text>') + '</svg><span>' + s.k + '</span></button>';
  }).join('') + '</div></div>';
}
/* o mapa de mesas: oito mesas redondas em arco */
function salao(feitas, sel, baixo) {
  return '<div class="kg-salao' + (baixo ? ' baixo' : '') + '"><svg viewBox="0 0 800 230" aria-hidden="true"><path class="kg-arco" d="M60 200 Q400 -40 740 200"/>' + MESAS.map(function (m, i) {
    var t = i / 7, x = 60 + t * 680, y = 200 - Math.sin(Math.PI * t) * 150, ok = feitas[i] === 'ok';
    return '<g class="kg-mesa' + (ok ? ' feita' : '') + (sel === i ? ' on' : '') + '" data-a="ms" data-n="' + i + '"><circle cx="' + x + '" cy="' + y + '" r="30"/><text x="' + x + '" y="' + (y + 4) + '" text-anchor="middle">' + m.k + '</text></g>';
  }).join('') + '</svg></div>';
}
function frases(acao, ops, esc, semente) {
  return '<div class="kg-ops">' + ordem(ops.map(function (o, i) { return [o[0], o[1]]; }), semente).map(function (o) { return '<button type="button" class="versao' + (esc === o[1] ? (o[1] === 'ok' ? ' certo' : ' errado') : '') + '" data-a="' + acao + '" data-v="' + o[1] + '">' + o[0] + '</button>'; }).join('') + '</div>';
}

var R = {};
R.capa = function () {
  return '<div class="capa"><div><span class="kick">MAIN SERIES · B1 · A WEDDING IN KYOTO</span><h1>You’re Supposed <b>to Bring a Gift</b></h1>'
    + '<p class="sub">You bought the perfect gift. Then the invitation arrived … and you’re <b>not supposed to</b> bring it.</p>'
    + '<div class="chipsx"><span class="pilula">be supposed to</span><span class="pilula">be expected to</span><span class="pilula">not supposed to · was supposed to</span><span class="pilula">Live Class · W·O·L·F</span></div>'
    + '<button type="button" class="btn cheio" data-a="ir" data-n="1">Open the invitation</button>' + faixaLive() + '</div>'
    + '<div class="capa-r">' + convite({ 0: 'ok', 3: 'ok' }, -1) + '</div></div>';
};

R.festas = function (c) {
  var e = S.fs, n = Math.min(e.n, FESTAS.length - 1), fim = e.n >= FESTAS.length, x = FESTAS[n];
  if (fim) return cab(c) + '<div class="foco"><div class="kg-envelope vd"><small>A BLACK ENVELOPE FROM JAPAN</small><b>Gold letters. A gold seal. Your friend Emma is getting married … in Kyoto.</b></div></div>';
  return cab(c) + trilha(FESTAS, e.n) + '<div class="foco"><div class="kg-isso">' + [['a', x.a], ['b', x.b]].map(function (o) { return '<button type="button" class="kg-lado' + (e.lado === o[0] ? ' on' : '') + '" data-a="fs" data-v="' + o[0] + '">' + o[1] + '</button>'; }).join('<span class="kg-ou">OR</span>') + '</div>'
    + (e.lado ? '<div class="pergunta vd ja"><h2>' + x.q + '</h2></div>' + mostra('fs' + n, x.h, 1) + '<div style="text-align:center"><button type="button" class="btn" data-a="fs-prox">Next</button></div>' : '<p class="dica-aluno" style="text-align:center">Choose fast.</p>') + '</div>';
};

R.convite = function (c) {
  var e = S.cv, feitos = SELOS.filter(function (_, i) { return e.esc[i] === 'ok'; }).length;
  if (e.sel < 0) return cab(c) + convite(e.esc, -1) + '<p class="dica-aluno" style="text-align:center">Open any seal.</p>';
  var x = SELOS[e.sel], esc = e.esc[e.sel], ok = esc === 'ok';
  return cab(c) + '<div class="mesa-c"><div class="lado-l">' + convite(e.esc, e.sel) + '</div>'
    + '<div class="lado-l"><div class="kg-linha vd"><small>' + x.k + ' · THE GUEST GUIDE SAYS</small><p>“' + x.diz + '”</p></div><div class="pergunta vd ja"><h2>' + x.q + '</h2></div><h5 class="so-prof rot-ouve">TAP THE VERSION YOU HEARD</h5>' + frases('cv-v', x.ops, esc, e.sel + 1)
    + (ok ? '<p class="aprova">' + (feitos >= 8 ? 'Eight seals open, and the coffee machine stays in the hotel. Now the rule.' : 'The seal breaks. And in your country? Are guests supposed to …?') + '</p>' : esc ? '<p class="recusa">' + NOTA[esc] + ' Say it again.</p>' : '') + '</div></div>';
};

R.regra = function (c) {
  var e = S.rg;
  return cab(c) + '<div class="kg-fato vd"><b>be supposed to</b> + verb: the rule, the plan, what people expect. <b>be expected to</b>: the same, more formal. <b>not supposed to</b>: the etiquette says no. <b>was / were supposed to</b>: the plan, and then it didn’t happen.</div>'
    + '<div class="kg-caminhos">' + CAMINHOS.map(function (x, i) { var ab = e.abre[i]; return '<div class="kg-caminho vd' + (ab ? ' aberto' : '') + '"><small>' + x.k + '</small><p class="antes"><s>' + x.antes + '</s></p>' + (ab ? '<p class="depois">' + x.depois + '</p><p class="nota">' + x.nota + '</p>' : '<button type="button" class="btn" data-a="rg" data-n="' + i + '">Show me</button>') + '</div>'; }).join('') + '</div>'
    + armas([['BE', 'We supposed to arrive early.', 'We’re supposed to arrive early.', 'a person + BE'], ['TO', 'I’m supposed bring money.', 'I’m supposed to bring money.', 'supposed TO'], ['NOT SUPPOSEDLY', 'Supposedly we bring an envelope.', 'We’re supposed to bring an envelope.', 'supposedly = people say'], ['EXPECTED TO', 'Guests are expected bring new bills.', 'Guests are expected to bring new bills.', 'expected TO']], 'FOUR MORE TRAPS · TAP TO FIX');
};

R.mesas = function (c) {
  var e = S.ms, x = MESAS[e.sel], esc = e.esc[e.sel], ok = esc === 'ok', feitas = MESAS.filter(function (_, i) { return e.esc[i] === 'ok'; }).length;
  return cab(c) + salao(e.esc, e.sel, 1) 
    + '<div class="mesa-c"><div class="lado-l"><div class="kg-linha vd"><small>' + x.k + ' · ' + x.quem + ' · YOUR TEACHER READS IT</small><p>“' + x.diz + '”</p></div><p class="pista">Start: ' + x.ini + '</p></div>'
    + '<div class="lado-l"><h5 class="so-prof rot-ouve">TAP THE VERSION YOU HEARD</h5>' + frases('ms-v', x.ops, esc, e.sel + 2)
    + (ok ? '<p class="aprova">' + (feitas >= 8 ? 'Eight tables, eight answers. Everybody is where they’re supposed to be. And the cake? Still delicious, from the floor.' : 'The table lights up. Pick the next one.') + '</p>' : esc ? '<p class="recusa">' + NOTA[esc] + ' Say it again.</p>' : '') + '</div></div>';
};

R.manha = function (c) {
  var e = S.mh, n = Math.min(e.n, MANHA.length - 1), fim = e.n >= MANHA.length, x = MANHA[n];
  if (fim) return cab(c) + '<div class="foco"><div class="pergunta vd"><small>LEO IS READY FOR OSAKA</small><h2>Now one custom from your own country: “At a wedding in my city, guests are expected to …”</h2></div></div>';
  return cab(c) + trilha(MANHA, e.n) + '<div class="mesa-c"><div class="lado-l"><div class="kg-tel vd"><small>LEO · YOUR FRIEND BACK HOME</small><p>“' + x.ela + '”</p></div>' + (e.resp ? '<div class="balao vd ok-b"><small>LEO</small><p>“' + x.resp + '”</p></div>' : '') + '</div>'
    + '<div class="lado-l">' + fala('mh' + n, x.voce, []) + (e.resp ? '<div><button type="button" class="btn" data-a="mh-prox">Next</button></div>' : '<div><button type="button" class="btn so-prof" data-a="mh-r">Answered · Leo replies</button></div><p class="dica-aluno">Tell Leo. From memory.</p>') + '</div></div>';
};

R.quiz = function (c) {
  var e = S.qz, n = e.n, fim = n >= QUIZ.length;
  if (fim) return cab(c) + trilha(QUIZ, n) + '<div class="foco"><div class="pergunta vd"><small>SIX OF SIX</small><h2>A rule? A plan that failed? People say? Now change one into a real sentence about your week.</h2></div></div>';
  var x = QUIZ[n], ok = e.esc === 0;
  return cab(c) + trilha(QUIZ, n) + '<div class="foco"><div class="balao vd"><p>' + x.a + '<u>' + (ok ? x.op[0] : '_____') + '</u>' + x.b + '</p></div><div class="kg-ops linha">'
    + ordem(x.op.map(function (o, i) { return [o, i]; }), n + 1).map(function (o) { return '<button type="button" class="versao' + (e.esc === o[1] ? (o[1] === 0 ? ' certo' : ' errado') : '') + '" data-a="qz" data-n="' + o[1] + '">' + o[0] + '</button>'; }).join('') + '</div>'
    + (ok ? '<p class="aprova" style="text-align:center">' + x.w + '</p><div style="text-align:center"><button type="button" class="btn" data-a="qz-prox">Next</button></div>' : e.esc > 0 ? '<p class="recusa" style="text-align:center">A rule? A plan that failed? People say?</p>' : '') + '</div>';
};

R.regras = function (c) { return cartasPessoais(c, REGRAS_V, S.rv, 'rv', ['Because …', 'Nobody really …', 'Yes, but …']); };

R.fim = function (c) {
  return cab(c) + '<div class="fim">' + escritaFinal('fim', (S.txt || {}).fim || '', (S.salvo || {}).fim, 'At a party in my city, you’re supposed to …\nYou’re expected to …\nYou’re not supposed to …\nLast time, … was supposed to …, but …', 'Your guest guide',
    ['you’re supposed to', 'you’re expected to', 'you’re not supposed to', 'was supposed to', 'but nobody does'], ['THE GUEST GUIDE FOR YOUR CITY', 'What guests are supposed to do, what they’re not supposed to do, and one plan that failed.'])
    + '<div class="lado-fim">' + salao({ 0: 'ok', 1: 'ok', 2: 'ok', 3: 'ok', 4: 'ok', 5: 'ok', 6: 'ok', 7: 'ok' }, -1)
    + '<div class="grande vd"><span>a person + <u>be supposed to</u> + verb</span><span><u>not supposed to</u> · the etiquette says no</span><span><u>was supposed to</u> · the plan failed</span><span>not <s>Is to bring?</s>, not <s>we supposed to</s></span></div>'
    + mostra('fim', 'At a party in my city, you’re supposed to bring a dessert.<br>You’re not supposed to arrive on time. Nobody does!<br>Last month, the party was supposed to end at midnight, but it ended at four.', 1)
    + '<p class="hw"><a class="pilula" href="HW/" target="_blank" rel="noopener">Homework for the student →</a></p></div></div>';
};

TOQUES.fs = function (b, n, v) { S.fs.lado = v; };
TOQUES['fs-prox'] = function () { S.fs = { n: S.fs.n + 1, lado: '' }; };
TOQUES.cv = function (b, n) { S.cv.sel = n; };
TOQUES['cv-v'] = function (b, n, v) { S.cv.esc[S.cv.sel] = v; };
TOQUES.rg = function (b, n) { S.rg.abre[n] = 1; };
TOQUES.ms = function (b, n) { S.ms.sel = n; };
TOQUES['ms-v'] = function (b, n, v) { S.ms.esc[S.ms.sel] = v; };
TOQUES['mh-r'] = function () { S.mh.resp = 1; };
TOQUES['mh-prox'] = function () { S.mh = { n: S.mh.n + 1, resp: 0 }; };
TOQUES.qz = function (b, n) { S.qz.esc = n; };
TOQUES['qz-prox'] = function () { S.qz = { n: S.qz.n + 1, esc: -1 }; };
