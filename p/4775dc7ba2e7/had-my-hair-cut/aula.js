/* ============================================================
   I HAD MY HAIR CUT · THE CLAIM TAGS · LIVE CLASS  06/10/2026
   Main series B1 · have / get + a coisa + particípio (alguém fez por
   você) · só o have muda de tempo · get = mais informal. Erro
   universal: "I cut my hair" (= EU segurei a tesoura) quando foi o
   salão; "had her car wash"; "had washed her car" (ordem). Sem áudio.
   O MUNDO (da aula velha): a semana do casamento da Lena — ela não faz
   nada sozinha; Marco, o cerimonialista, liga para conferir tudo; e a
   pergunta grande: fazer você mesmo ou pagar alguém?
   A CARA: as ETIQUETAS DE RETIRADA — cada serviço é um canhoto
   numerado pendurado num trilho de loja (como na lavanderia); a foto
   do serviço está apagada e cinza; a frase certa carimba READY e a
   foto acende. "She cut her hair" não é inglês errado — é outra
   história (ela mesma fez!), e a etiqueta diz isso. Fila: 090.
   ============================================================ */
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'voce', est: 'o', min: 7, img: 'cabelo', rot: 'I · Your Services', t: 'Who does things for you?', p: 'Pick a card. Answer out loud. Then your teacher answers too.' },
  { k: 'trilho', est: 'o', min: 7, img: 'capa', rot: 'II · The Claim Tags', t: 'Lena’s wedding week. Eight jobs. She did none of them herself.', p: 'Pick a tag. Say what Lena had done. Your teacher taps what you said. The right sentence stamps it READY.' },
  { k: 'gx', est: 'f', min: 4, img: 'cabelo', rot: 'III · Lena’s Week in Blocks', t: 'Who did the work? Look at the blocks.', p: 'Read the blocks out loud. Notice who holds the scissors. Then build a sentence and say your own.' },
  { k: 'regra', est: 'f', min: 6, img: 'vestido', rot: 'IV · Who Held the Scissors?', t: 'Somebody else did the work.', p: 'Read the three parts out loud. Then fix the four mistakes.' },
  { k: 'semana', est: 'o', min: 7, img: 'telefone', rot: 'V · The Wedding Week', t: 'The planner is calling. Every day, one question.', p: 'Your teacher asks. Answer with the right tense of HAVE. Fast.' },
  { k: 'diy', est: 'o', min: 7, img: 'jardim', rot: 'VI · DIY or Pay?', t: 'Do it yourself, or have it done?', p: 'Pick a card. Choose a side and defend it. Your teacher takes the other side.' },
  { k: 'marco', est: 'o', min: 7, extra: 1, img: 'telefone', rot: 'VII · The Planner Calls', t: 'Marco, the wedding planner, is checking everything. You are Lena.', p: 'Your teacher is Marco. Answer with have / get something done, and ask him one question back.' },
  { k: 'quiz', est: 'f', min: 6, extra: 1, img: 'sapatos', rot: 'VIII · Quick Check', t: 'Six quick sentences from the wedding week.', p: 'Say the whole sentence out loud. Then tap the word.' },
  { k: 'fim', est: 'w', min: 6, img: 'capa', rot: 'IX · The Big Day', t: 'Is it better to do things yourself, or to pay someone?', p: 'Write about you: the last thing you had done, and one thing you need to have done. It goes to your My notes.' }
];

var VOCE = [
  { k: 'Hair', q: 'Who cuts your hair? When was the last time, and were you happy with it?', fup: 'Too short?', st: ['I have it cut at … / A friend …'], ex: 'A friend of mine cuts it. The last time was a month ago. It was too short!' },
  { k: 'Phone', q: 'Has your phone or computer ever broken? Did you fix it yourself or take it somewhere?', fup: 'How much was it?', st: ['I had it fixed at … / I fixed it …'], ex: 'My screen broke last year. I had it fixed at a shop near my house.' },
  { k: 'Home', q: 'Is there anything in your home that needs fixing right now?', fup: 'Who will fix it?', st: ['Yes, the … I need to have it …'], ex: 'Yes, the kitchen light. I need to have it fixed.' },
  { k: 'Clothes', q: 'Do you ever take clothes to a tailor or a dry cleaner? What for?', fup: 'The last time?', st: ['I have my … cleaned / shortened …'], ex: 'I have my suit cleaned before weddings.' },
  { k: 'DIY', q: 'Do you do things yourself, or pay someone for everything?', fup: 'What went wrong?', st: ['I try to … / I always have it …'], ex: 'I try to do it myself, but I usually break something!' }
];

var TAGS = [
  { k: 'cabelo', n: '041', rot: 'HAIR · SALON', pista: 'hair · cut · Monday', ops: [['She had her hair cut on Monday.', 'ok'], ['She cut her hair on Monday.', 'ela'], ['She had her hair cutted on Monday.', 'irreg']] },
  { k: 'vestido', n: '042', rot: 'DRESS · TAILOR', pista: 'dress · shorten · Tuesday', ops: [['She had her dress shortened on Tuesday.', 'ok'], ['She had shortened her dress on Tuesday.', 'ordem'], ['She shortened her dress on Tuesday.', 'ela']] },
  { k: 'carro', n: '043', rot: 'CAR · GARAGE', pista: 'car · wash · Wednesday', ops: [['She had her car washed on Wednesday.', 'ok'], ['She had washed her car on Wednesday.', 'ordem'], ['She had her car wash on Wednesday.', 'part']] },
  { k: 'parede', n: '044', rot: 'LIVING ROOM · PAINTER', pista: 'living room · paint · last week', ops: [['She had her living room painted last week.', 'ok'], ['She painted her living room last week.', 'ela'], ['She had painted her living room last week.', 'ordem']] },
  { k: 'bolo', n: '045', rot: 'CAKE · BAKERY', pista: 'cake · make · a famous baker', ops: [['She had the cake made by a famous baker.', 'ok'], ['She had the cake maked by a famous baker.', 'irreg'], ['She made the cake.', 'ela']] },
  { k: 'sapatos', n: '046', rot: 'SHOES · SHOE REPAIR', pista: 'shoes · fix · yesterday · GET', ops: [['She got her shoes fixed yesterday.', 'ok'], ['She got fixed her shoes yesterday.', 'ordem'], ['She got her shoes fix yesterday.', 'part']] },
  { k: 'jardim', n: '047', rot: 'GARDEN · GARDENER', pista: 'garden · tidy · Thursday', ops: [['She had the garden tidied on Thursday.', 'ok'], ['She tidied the garden on Thursday.', 'ela'], ['She had tidied the garden on Thursday.', 'ordem']] },
  { k: 'fotos', n: '048', rot: 'PHOTOS · PHOTOGRAPHER', pista: 'photos · take · on Saturday (future plan)', ops: [['She is having the photos taken on Saturday.', 'ok'], ['She is taking the photos on Saturday.', 'ela'], ['She is having the photos took on Saturday.', 'irreg']] }
];
var NAO = {
  ela: 'That’s a different story: she did it HERSELF! For the salon, the tailor, the garage: had it done.',
  part: 'After the thing: the participle. washed, fixed, printed.',
  ordem: 'The thing goes in the MIDDLE: had her car washed. (had washed her car = she washed it.)',
  irreg: 'An irregular participle: cut, made, taken, done.'
};

var FITAS = [['HAVE / HAD / HAVING', 'only HAVE changes tense', 'h'], ['+ THE THING', 'her hair · my car · the cake', 't'], ['+ PARTICIPLE', 'cut · washed · made · taken', 'p']];
var ARMAS = [
  ['WHO HELD THE SCISSORS?', 'I cut my hair at the salon.', 'I had my hair cut at the salon.', 'I cut my hair = you did it yourself.'],
  ['THE PARTICIPLE', 'She had her car wash.', 'She had her car washed.', 'have + the thing + participle.'],
  ['THE ORDER', 'We had painted the house last week.', 'We had the house painted last week.', 'The thing goes in the middle.'],
  ['GET', 'I got fixed my phone.', 'I got my phone fixed.', 'get + the thing + participle. More informal, same idea.']
];

var SEMANA = [
  { k: 'MON', q: 'It’s Monday. What is Lena doing about her nails?', ops: [['She is having her nails done today.', 'ok'], ['She is doing her nails today.', 'ela'], ['She is having done her nails today.', 'ordem']] },
  { k: 'MON', q: 'Did she have the invitations printed last month?', ops: [['Yes, she had them printed in August.', 'ok'], ['Yes, she printed them in August.', 'ela'], ['Yes, she had them print in August.', 'part']] },
  { k: 'TUE', q: 'The dress is too long! What does she need to do?', ops: [['She needs to have it shortened.', 'ok'], ['She needs to shorten it.', 'ela'], ['She needs to have shortened it.', 'ordem']] },
  { k: 'WED', q: 'The car is dirty. When is she having it washed?', ops: [['She is having it washed tomorrow morning.', 'ok'], ['She is washing it tomorrow morning.', 'ela'], ['She is having it wash tomorrow morning.', 'part']] },
  { k: 'THU', q: 'How often does Lena have her hair colored?', ops: [['She has it colored every two months.', 'ok'], ['She colors it every two months.', 'ela'], ['She has colored it every two months.', 'ordem']] },
  { k: 'FRI', q: 'The groom’s suit! Has he had it cleaned yet?', ops: [['Yes, he has had it cleaned already.', 'ok'], ['Yes, he has cleaned it already.', 'ela'], ['Yes, he has had it clean already.', 'part']] },
  { k: 'SAT', q: 'Saturday morning. What will Lena have done before the ceremony?', ops: [['She will have her makeup done at eight.', 'ok'], ['She will do her makeup at eight.', 'ela'], ['She will have done her makeup at eight.', 'ordem']] },
  { k: 'SUN', q: 'And after the party? Something about the photos?', ops: [['She will have the photos printed next week.', 'ok'], ['She will print the photos next week.', 'ela'], ['She will have the photos print next week.', 'part']] }
];

var DIY = [
  { k: 'Hair', q: 'Would you ever cut your own hair? Or do you always have it cut?', fup: 'Have you ever tried?', st: ['I always have it cut. / I would cut it …'], ex: 'I always have it cut. I tried once, and it was a disaster!' },
  { k: 'Paint', q: 'Your bedroom needs painting. Do it yourself, or have it painted?', fup: 'What color?', st: ['I would have it painted. / I would paint it …'], ex: 'I would have it painted. I have no patience.' },
  { k: 'Cake', q: 'A birthday cake for someone you love: make it, or have it made?', fup: 'Can you bake?', st: ['I would make it … / I would have it made …'], ex: 'I would make it myself. It means more.' },
  { k: 'Phone', q: 'Your phone screen breaks. Fix it at home with a video, or get it fixed?', fup: 'Is it expensive?', st: ['I would get it fixed …'], ex: 'I would get it fixed. Those videos are scary.' },
  { k: 'Car', q: 'Wash your car on Sunday, or have it washed?', fup: 'How often?', st: ['I have it washed … / I wash it …'], ex: 'I have it washed. Sunday is for resting.' },
  { k: 'Party', q: 'A big party: organize it all, or have it organized?', fup: 'What’s the hardest part?', st: ['I would have it organized …'], ex: 'I would have it organized. I want to enjoy the party too.' },
  { k: 'Jeans', q: 'Your jeans are too long. Fix them, or have them shortened?', fup: 'Can you sew?', st: ['I would have them shortened …'], ex: 'I would have them shortened. I can’t sew.' },
  { k: 'House', q: 'Clean the whole house, or have it cleaned once a month?', fup: 'And the kitchen?', st: ['I would love to have it cleaned …'], ex: 'I would love to have it cleaned every week!' }
];

var MARCO = [
  { ele: 'Lena, darling! The flowers. Have you had them delivered?', voce: 'Yes, I’ve had them … / No, I’m having them … And the chairs?', resp: 'The chairs are being delivered at noon. Don’t worry!' },
  { ele: 'Your hair looks amazing in the photo you sent. Where did you have it done?', voce: 'I had it done at … Do you have your hair cut there too?', resp: 'Me? I cut it myself. Can’t you tell?' },
  { ele: 'The rings! Did you get them engraved?', voce: 'Yes, we got them … How long does it take to have rings engraved?', resp: 'About a week. You’re lucky!' },
  { ele: 'Last thing: the music. Are you having a band, or a DJ?', voce: 'We’re having … What do most couples have?', resp: 'A DJ. But a band is more fun. Good choice!' }
];

var QUIZ = [
  { f: 'I went to the salon and ___ my hair cut.', op: ['had', 'cut', 'made'], nao: 'The salon did it: had my hair cut.' },
  { f: 'She had her car ___ at the garage.', op: ['washed', 'wash', 'washing'], nao: 'After the thing: the participle, washed.' },
  { f: 'We’re having the house ___ next month.', op: ['painted', 'paint', 'to paint'], nao: 'The participle: painted.' },
  { f: 'I need to ___ my phone fixed. The screen is broken.', op: ['get', 'do', 'make'], nao: 'get something done (or have).' },
  { f: 'They had ___ made by a famous baker.', op: ['the cake', 'made the cake', 'to make the cake'], nao: 'The thing goes in the middle: had the cake made.' },
  { f: 'How often do you have your nails ___?', op: ['done', 'do', 'did'], nao: 'The participle of do: done.' }
];

var S = { i: 0, faixa: 1, fala: {}, resp: {}, armas: {},
  voce: { sel: -1, foi: {} }, tr: { sel: 0, esc: {} }, se: { n: 0, esc: '' }, diy: { sel: -1, foi: {} }, lado: {}, mc: { n: 0 }, qz: { n: 0, esc: -1 } };

function etiqueta(t, pronta, esc) {
  return '<div class="tag' + (pronta ? ' pronta' : '') + '"><span class="furo"></span><small>CLAIM Nº ' + t.n + '</small><b>' + t.rot + '</b><i>' + t.pista + '</i>'
    + (pronta ? '<span class="carimbo">READY</span>' : esc === 'ela' ? '<span class="carimbo diy">DIY?</span>' : '') + '</div>';
}

var R = {};
R.capa = function () {
  return '<div class="capa"><div><span class="kick">MAIN SERIES · B1 · THE WEDDING WEEK</span><h1>I Had My <b>Hair Cut</b></h1>'
    + '<p class="sub">Saturday is the wedding. Lena won’t lift a finger. She’ll <b>have everything done</b>.</p>'
    + '<div class="chipsx"><span class="pilula">I had my hair cut</span><span class="pilula">I got my phone fixed</span><span class="pilula">Live Class · W·O·L·F</span></div>'
    + '<button type="button" class="btn cheio" data-a="ir" data-n="1">Open Lena’s week</button>' + faixaLive() + '</div>'
    + '<div class="capa-r"><div class="trilho-c">' + [TAGS[0], TAGS[2], TAGS[4]].map(function (t, i) { return etiqueta(t, i !== 1); }).join('') + '</div></div></div>';
};

R.voce = function (c) { return cartasPessoais(c, VOCE, S.voce, 'voce'); };

R.trilho = function (c) {
  var e = S.tr, x = TAGS[e.sel], esc = e.esc[e.sel], ok = esc === 'ok', feitas = TAGS.filter(function (t, i) { return e.esc[i] === 'ok'; }).length;
  return cab(c) + '<div class="rail">' + TAGS.map(function (t, i) { return '<button type="button" class="mini-tag' + (e.sel === i ? ' on' : '') + (e.esc[i] === 'ok' ? ' feita' : '') + '" data-a="tr" data-n="' + i + '"><small>Nº ' + t.n + '</small>' + t.rot.split(' · ')[0] + '</button>'; }).join('') + '</div>'
    + '<div class="mesa-c"><div class="lado-l"><div class="foto' + (ok ? ' viva' : '') + '"><div class="fundo" style="background-image:url(' + img(x.k) + ')"></div>' + etiqueta(x, ok, esc) + '</div></div>'
    + '<div class="lado-l">' + (ok ? '<div class="balao vd ok-b"><small>READY</small><p>' + x.ops[0][0] + '</p></div><p class="aprova">' + (feitas >= 8 ? 'Eight jobs, and Lena lifted zero fingers. How does that sentence work?' : 'Somebody else did it. Next tag.') + '</p>'
      : '<h5 class="so-prof rot-ouve">TAP THE VERSION YOU HEARD</h5><div class="versoes">' + ordem(x.ops, e.sel + 3).map(function (o) { return '<button type="button" class="versao' + (esc === o[1] ? ' errado' : '') + '" data-a="tr-v" data-v="' + o[1] + '">' + o[0] + '</button>'; }).join('') + '</div>' + (esc ? '<p class="recusa">' + NAO[esc] + '</p>' : ''))
    + '<p class="dica-aluno">' + feitas + ' of 8 ready for pickup.</p></div></div>';
};

R.regra = function (c) {
  return cab(c) + '<div class="fitas3">' + FITAS.map(function (f) { return '<div class="fita3 ' + f[2] + '"><small>' + f[0] + '</small><b>' + f[1] + '</b></div>'; }).join('') + '</div>'
    + '<p class="exemplo-r">She <b class="h">had</b> <b class="t">her hair</b> <b class="p">cut</b>. · I’m <b class="h">having</b> <b class="t">it</b> <b class="p">done</b>. · I <b class="h">got</b> <b class="t">my phone</b> <b class="p">fixed</b>.</p>'
    + armas(ARMAS, 'THE TRAPS · SAY IT RIGHT, THEN TAP');
};

R.semana = function (c) {
  var e = S.se, n = e.n;
  var dias = '<div class="dias">' + SEMANA.map(function (d, i) { return '<span class="' + (i === n ? 'on' : i < n ? 'foi' : '') + '">' + d.k + '</span>'; }).join('') + '</div>';
  if (n >= SEMANA.length) return cab(c) + dias + '<div class="foco"><div class="pergunta vd"><small>THE WHOLE WEEK</small><h2>Every tense, one structure. Only HAVE changed. Lena is ready. Are you a Lena?</h2></div></div>';
  var x = SEMANA[n], esc = e.esc, ok = esc === 'ok';
  return cab(c) + dias + '<div class="mesa-c"><div class="lado-l"><div class="pede vd"><small>THE PLANNER · ' + x.k + '</small><b>“' + x.q + '”</b></div>' + (ok ? '' : '<div class="aberta vd" style="background-image:url(' + img('telefone') + ')"><span>MARCO IS CALLING · ' + x.k + '</span></div>') + (ok ? '<div class="balao vd ok-b"><p>' + x.ops[0][0] + '</p></div><div><button type="button" class="btn" data-a="se-prox">Next day</button></div>' : '') + '</div>'
    + '<div class="lado-l">' + (ok ? '<p class="aprova">Which HAVE was it? Say the tense out loud.</p>' : '<h5 class="so-prof rot-ouve">TAP THE VERSION YOU HEARD</h5><div class="versoes">' + ordem(x.ops, n + 6).map(function (o) { return '<button type="button" class="versao' + (esc === o[1] ? ' errado' : '') + '" data-a="se" data-v="' + o[1] + '">' + o[0] + '</button>'; }).join('') + '</div>' + (esc ? '<p class="recusa">' + NAO[esc] + '</p>' : '')) + '</div></div>';
};

R.diy = function (c) {
  var lados = DIY.filter(function (d, i) { return S.lado[i]; }), diy = lados.length ? DIY.filter(function (d, i) { return S.lado[i] === 'diy'; }).length : 0;
  var x = S.diy.sel >= 0 ? S.diy.sel : -1;
  var lb = x >= 0 ? '<div class="lados"><button type="button" class="lado-b' + (S.lado[x] === 'diy' ? ' on' : '') + '" data-a="lado" data-n="' + x + '" data-v="diy">I’D DO IT MYSELF</button><span class="placar">' + diy + ' DIY · ' + (lados.length - diy) + ' PAY</span><button type="button" class="lado-b pay' + (S.lado[x] === 'pay' ? ' on' : '') + '" data-a="lado" data-n="' + x + '" data-v="pay">I’D HAVE IT DONE</button></div>' : '';
  return cartasPessoais(c, DIY, S.diy, 'diy').replace('</h2></div>', '</h2></div>' + lb);
};

R.marco = function (c) {
  var e = S.mc, n = Math.min(e.n, MARCO.length - 1), x = MARCO[n];
  return cab(c) + trilha(MARCO, e.n) + '<div class="mesa-c"><div class="lado-l"><div class="aberta vd" style="background-image:url(' + img('telefone') + ')"><span>MARCO · THE WEDDING PLANNER</span></div></div>'
    + '<div class="lado-l"><div class="pede vd"><small>MARCO</small><b>“' + x.ele + '”</b></div>' + fala('mc' + n, [x.voce], ['had', 'got', 'having', 'delivered', 'done', 'engraved']) + '<p class="so-prof dica-aluno">Marco answers: “' + x.resp + '”</p>'
    + (n < MARCO.length - 1 ? '<div><button type="button" class="btn" data-a="mc-prox">Next</button></div>' : '<p class="aprova">Everything is done, by other people.</p>') + '</div></div>';
};

R.quiz = function (c) {
  var e = S.qz, n = e.n, fim = n >= QUIZ.length;
  if (fim) return cab(c) + trilha(QUIZ, n) + '<div class="foco"><div class="pergunta vd"><small>SIX OF SIX</small><h2>have + the thing + participle. The wedding is tomorrow.</h2></div></div>';
  var x = QUIZ[n], ok = e.esc === 0;
  return cab(c) + trilha(QUIZ, n) + '<div class="foco"><div class="balao vd"><p>' + x.f.replace('___', ok ? '<u>' + x.op[0] + '</u>' : '<span class="lacuna-q">___</span>') + '</p></div><div class="tres-b centro">'
    + ordem(x.op.map(function (o, i) { return [o, i]; }), n + 4).map(function (o) { return '<button type="button" class="pilula grande-p' + (e.esc === o[1] ? (o[1] === 0 ? ' certo' : ' errado') : '') + '" data-a="qz" data-n="' + o[1] + '">' + o[0] + '</button>'; }).join('') + '</div>'
    + (ok ? '<div style="text-align:center"><button type="button" class="btn" data-a="qz-prox">Next</button></div>' : e.esc > 0 ? '<p class="recusa" style="text-align:center">' + x.nao + '</p>' : '') + '</div>';
};

R.fim = function (c) {
  return cab(c) + '<div class="fim">' + escritaFinal('fim', (S.txt || {}).fim || '', (S.salvo || {}).fim, 'The last thing I had done was …\nThis month I need to have … done.\nI will never pay someone to … because …', 'Your services',
    ['I had my ', 'I got my ', 'I need to have my ', ' done', ' fixed'], ['DO IT YOURSELF, OR PAY SOMEONE?', 'The last thing you had done, one thing you need to have done, and one thing you will never pay for.'])
    + '<div class="lado-fim"><div class="trilho-c mini">' + etiqueta({ n: '049', rot: 'YOU · THIS MONTH', pista: 'what · who · when' }, 1) + '</div><div class="grande vd"><span><u>have</u> + the thing + <u>participle</u></span><span>I <u>had</u> my hair <u>cut</u> · I <u>got</u> my phone <u>fixed</u></span><span>I <u>cut</u> my hair = you held the scissors!</span></div>'
    + mostra('fim', 'The last thing I had done was my glasses. I had them fixed at the mall.<br>This month I need to have my bike checked.<br>I will never pay someone to cook for me, because I love cooking.', 1)
    + '<p class="hw"><a class="pilula" href="HW/" target="_blank" rel="noopener">Homework for the student →</a></p></div></div>';
};

TOQUES.tr = function (b, n) { S.tr.sel = n; };
TOQUES['tr-v'] = function (b, n, v) { S.tr.esc[S.tr.sel] = v; };
TOQUES.se = function (b, n, v) { S.se.esc = v; };
TOQUES['se-prox'] = function () { S.se = { n: S.se.n + 1, esc: '' }; };
TOQUES.lado = function (b, n, v) { S.lado[n] = v; };
TOQUES['mc-prox'] = function () { S.mc.n++; };
TOQUES.qz = function (b, n) { S.qz.esc = n; };
TOQUES['qz-prox'] = function () { S.qz = { n: S.qz.n + 1, esc: -1 }; };

/* 10/11/2026 · AS EXPLICAÇÕES (kit/formatos3.js) · G1 · uma cena curta nova (k: gx) antes de regra.
   Explicação 100% em inglês: see → notice → use (o aluno fala ou escreve uma frase dele no fim). */
var GX_EXPLICA = { formato: 'blocos', titulo: 'Lena’s wedding week, in blocks. Each block has a job.',
  frases: [
    { b: [['Lena', 'WHO'], ['cut', 'ACTION'], ['her hair', 'WHAT']], d: 'Lena herself held the scissors.' },
    { b: [['Lena', 'WHO'], ['had', 'HAVE', 'aux'], ['her hair', 'WHAT'], ['cut', 'DONE', 'acao']], d: 'Somebody else cut it. had + thing + done.' },
    { b: [['She', 'WHO'], ['is getting', 'GET', 'aux'], ['her dress', 'WHAT'], ['fixed', 'DONE', 'acao']], d: 'get is more informal. Same order.' }
  ],
  nota: 'Someone else did the work: <b>have / get</b> + the thing + <b>past participle</b>. She <b>had</b> her hair <b>cut</b>. Only have changes tense: she has her car washed, she will have it washed. Order matters: not “had washed her car”.',
  monta: { p: 'Build the next line. Then say it.', pecas: [['her car', 'WHAT'], ['washed', 'DONE', 'acao'], ['Lena', 'WHO'], ['had', 'HAVE', 'aux']], ordem: [2, 3, 0, 1], outras: [[2, 3, 1, 0]] },
  uso: { p: 'Now you. What did somebody do for you recently? Say two sentences.', molde: ['I had my … …ed', 'I got my … …ed'], ex: 'I had my laptop fixed. I got my hair cut last week.' },
  prof: 'Read the blocks with the student. Ask: who held the scissors? Point at the done word.' };
R.gx = function (c) { return cab(c) + FM.ex('gx_blocos', GX_EXPLICA); };
