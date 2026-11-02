/* ============================================================
   FIFTY POINT FOUR · THE PHONE AND THE DRAWER · LIVE CLASS  06/10/2026
   Main series B1 · present perfect sem tempo terminado (Have you ever
   deleted an app?) × past simple quando o tempo aparece (When did you
   delete it? I deleted it last year).
   Erros universais: "I have seen it yesterday", "When have you started…?",
   "I saw never", "Have you ever went…?".
   O MUNDO (da aula velha): o feed infinito; um estudo de 2023 com 23 mil
   pessoas (50,4% do que viam vinha de fontes que já concordavam com
   elas); um estudo de 2015 com dez milhões; três vozes (o engenheiro, a
   equipe que desligou o ranking por três meses, a autora do estudo),
   conferidas no whisper em 06/10: batem. Os nomes das revistas saíram da
   tela (nada de citar marca); ficam o ano e o tamanho do estudo.
   A CARA: O CELULAR E A GAVETA — à esquerda um celular com o feed (o
   que não tem tempo terminado fica nele); à direita a gaveta de arquivo
   com abas de data (YESTERDAY, 2019, LAST CHRISTMAS): o post com tempo
   terminado cai na gaveta. Fila: FILA-LIVE-386.md · 086.
   22/10/2026 · OS FORMATOS NOVOS (kit/formatos.js + formatos2.js), mesmas
   páginas. A auditoria: escolher entre "I've deleted" e "I deleted" (II),
   três perguntas quase iguais (V, VIII) e três correções (IX). Agora:
   II separa as seis frases entre o celular e a gaveta (FM.separa) e o
   celular e a gaveta se enchem; V monta a pergunta de seguimento e pergunta
   ao professor (FM.pergunta); VIII a roleta sorteia a pergunta "Have you
   ever…?" e o contador conta os seguimentos no passado; IX certo ou errado,
   dizer a frase certa (FM.verdadeOuMentira). VIII e IX deixam de ser EXTRAS.
   ============================================================ */
var L = [
  { k: 'capa', est: null, img: 'feed' },
  { k: 'hoje', est: 'o', min: 7, img: 'feed', rot: 'I · Today, on Your Phone', t: 'What have you seen on your phone today? And when did you see it?', p: 'Tap what you’ve seen and say it. Then tap when, and say it again.' },
  { k: 'feed', est: 'f', min: 6, img: 'feed', rot: 'II · The Phone and the Drawer', t: 'No finished time? It stays on the phone. A finished time? It goes to the drawer.', p: 'Tap a post. Then tap the phone or the drawer. Then read each one out loud.' },
  { k: 'numeros', est: 'l', min: 7, img: 'tela', rot: 'III · Fifty Point Four', t: 'A big study in 2023: 23,000 people let researchers measure their whole feed for three months.', p: 'Guess out loud, then tap. At the end, the author speaks.' },
  { k: 'aprende', est: 'l', min: 7, img: 'feed', rot: 'IV · How It Learns', t: 'An engineer explains how a feed learns what you want.', p: 'Listen once. Then tap the four steps in the order they happen.' },
  { k: 'ever', est: 'f', min: 6, img: 'feed', rot: 'V · Have You Ever…?', t: 'The question is in the present perfect. The follow-up goes to a finished time.', p: 'Read the question and the answer. Build the follow-up out loud. Then tap Check.' },
  { k: 'mao', est: 'f', min: 6, img: 'espera', rot: 'VI · Who Did the Filtering?', t: 'A study of ten million people, 2015.', p: 'Read the card out loud. Was it the machine, your own hand, or did nobody measure it?' },
  { k: 'desligou', est: 'l', min: 7, extra: 1, img: 'tela', rot: 'VII · They Turned It Off', t: 'No ranking, only time order, for three months.', p: 'Listen once. Then answer four questions.' },
  { k: 'conversa', est: 'o', min: 7, extra: 1, img: 'espera', rot: 'VIII · Have You Ever Asked?', t: 'Five cards. Ask your teacher. Follow up in the past simple. Then answer it yourself.', p: 'Spin the wheel. Ask your teacher the question. Follow up, and tap the counter for each follow-up.' },
  { k: 'erros', est: 'f', min: 6, extra: 1, img: 'feed', rot: 'IX · I Have Seen It Yesterday', t: 'Five sentences have a problem. One is right.', p: 'Right or wrong? If it is wrong, say the whole sentence right.' },
  { k: 'fim', est: 'w', min: 6, img: 'feed', rot: 'X · Your Feed, Again', t: 'Your two sentences from scene I come back.', p: 'Write about your feed: three things you’ve done, and when you did them. It goes to your My notes.' }
];

var TR = {
  'a1.mp3': 'People think we ask them what they want. We have never had to ask. You scroll, and somewhere in that scroll your thumb slows down. Half a second, sometimes less. We measure that. We measure it far more carefully than we measure the like button, because the like button is what you would like to be seen liking, and the pause is just what happened. Then we send you three more of that. And the room is not infinite: every one of those three took the place of something else that would have arrived instead. Nothing was banned. It simply stopped coming.',
  'a2.mp3': 'We did the thing everybody asks for. We took the ranking away from tens of thousands of accounts and gave them the feed in plain time order, newest first, for three whole months. Four things happened. They saw a lot more political content. They saw a great deal more from untrustworthy sources. Not less, more, and that surprised us. They saw much less uncivil language. And they spent far less time on the platform, which tells you what the ranking was for. Then we measured what they believed, and what they knew, and how they felt about the other side. Nothing had moved.',
  'a3.mp3': 'My paper has been in about four hundred newspapers now, and I have stopped recognizing it. What we found was this: half of what people saw came from sources that already agreed with them. And when we cut that by a third and held it there for three months, nothing measurable changed. That is a much smaller sentence than the one you have read. It does not say the feed is harmless. It says three months was not enough to move a grown adult, which is not the same thing at all. And it certainly does not say you should stop worrying about what you never get shown.'
};

var COISAS = ['a video', 'the news', 'a friend’s photo', 'a recipe', 'an ad', 'a message from work'];
var QUANDO = ['this morning in bed', 'on the way here', 'an hour ago', 'at lunch', 'five minutes ago'];

/* 22/10/2026 · OS FORMATOS NOVOS (kit/formatos.js) */
/* II · separar: sem tempo terminado fica no celular, com tempo terminado vai para a gaveta */
var POSTS = [
  { t: 'I’ve deleted that app three times.', c: 0, txt: 'I’ve deleted that app three times.' },
  { t: 'I deleted it again yesterday.', c: 1, aba: 'YESTERDAY', txt: 'I deleted it again yesterday.' },
  { t: 'Have you ever seen a video with a million likes?', c: 0, txt: 'Have you ever seen a video with a million likes?' },
  { t: 'We met online in 2019.', c: 1, aba: '2019', txt: 'We met online in 2019.' },
  { t: 'She’s never posted a photo of her food.', c: 0, txt: 'She’s never posted a photo of her food.' },
  { t: 'He blocked his cousin last Christmas.', c: 1, aba: 'LAST CHRISTMAS', txt: 'He blocked his cousin last Christmas.' }
];
var SEPARA = { formato: 'separa', titulo: 'Tap a post. Then tap the phone or the drawer.', caixas: ['PHONE · no finished time', 'DRAWER · a finished time'], itens: POSTS.map(function (p) { return { t: p.t, c: p.c }; }) };

var NUMEROS = [
  { q: 'How much of what they saw came from sources that already agreed with them?', op: ['about 20%', 'about 35%', 'about 50%', 'about 80%'], a: 2, val: '50.4%' },
  { q: 'And from sources that disagreed with them?', op: ['about 15%', 'about 40%', 'about 50%', 'almost none'], a: 0, val: '14.7%' },
  { q: 'They cut the agreeing half for three months. What changed in what people believed?', op: ['nothing measurable', 'everything', 'people got angrier', 'people changed sides'], a: 0, val: 'NOTHING' }
];
var AUTORA = { q: 'What does her study NOT say?', op: [['that the feed is harmless', 1], ['that half came from agreeing sources', 0], ['that three months changed nothing measurable', 0]] };

var PASSOS = ['your thumb slows down for half a second', 'they measure the pause', 'they send you three more of that', 'something else stops arriving'];

/* V · montar a pergunta de seguimento */
var EVER = [
  { p: '<b>“Have you ever deleted a social media app?”</b> “Yes, I have.”<br>Follow up: (when · delete · it)?', r: 'When <b>did</b> you delete it?' },
  { p: '<b>“Have you ever posted something you regretted?”</b> “Yes, once.”<br>Follow up: (what · post)?', r: 'What <b>did</b> you post?' },
  { p: '<b>“Have you ever gone a whole day without your phone?”</b> “Yes, last summer.”<br>Follow up: (how · feel)?', r: 'How <b>did</b> it feel?' },
  { p: '<b>“Have you ever met a friend online?”</b> “Yes, I have.”<br>Follow up: (where · meet)?', r: 'Where <b>did</b> you meet?' },
  { p: '<b>“Have you ever blocked someone?”</b> “Yes, two years ago.”<br>Follow up: (why · block · them)?', r: 'Why <b>did</b> you block them?' },
  { p: '<b>“Have you ever stayed up all night scrolling?”</b> “No, never.”<br>After NO there is no finished moment. Follow up: (ever · come close)?', r: '<b>Have</b> you ever <b>come</b> close?' }
];
var PRESA = '<b>Have you ever…?</b><br>no finished time: present perfect<br><b>When / What / Where / Why did you…?</b><br>a finished moment: past simple<br>After NO: no finished moment';

var COLUNAS = ['THE MACHINE DID THIS', 'YOUR OWN HAND DID THIS', 'NOBODY MEASURED THIS'];
var FICHAS = [
  { t: 'it put the posts you slow down for at the top', c: 0 }, { t: 'about 15% of posts from the other side were removed', c: 0 },
  { t: '70% of posts from the other side that arrived were never clicked', c: 1 }, { t: 'the people you chose to follow in the first place', c: 1 },
  { t: 'whether anybody was better off', c: 2 }
];

var DESLIGOU = [
  { q: 'What did they change, and for how long?', op: ['time order, newest first, for three months', 'they deleted the app for a week', 'they showed people the other side for a year'] },
  { q: 'Untrustworthy sources went…', op: ['up, a lot', 'down', 'nowhere'] },
  { q: 'What went down?', op: ['uncivil language, and time on the platform', 'nothing', 'the number of friends'] },
  { q: 'After three months, what had changed in what people believed?', op: ['nothing measurable', 'everything', 'they had all changed sides'] }
];

/* VIII · a roleta sorteia a pergunta; o contador conta os seguimentos */
var ROLETA = { formato: 'sorteio', tipo: 'roda', titulo: 'Spin. Ask your teacher the question.', botao: 'Spin', opcoes: [
  'Have you ever turned off your notifications for a whole week?',
  'Have you ever read something online that changed your mind?',
  'Have you ever lost your phone?',
  'Have you ever argued with a stranger online?',
  'Have you ever bought something because of an ad?'
] };
var SEGUIMENTOS = { formato: 'contador', titulo: 'Follow-ups in the past simple', botao: 'I followed up', revelar: 'Show the goal', resposta: 'Aim for five. What did you…? Where did you…? When did you…? Why did you…?' };

/* IX · certo ou errado, dizer a frase certa */
var ERROS = { formato: 'verdadeOuMentira', rotulos: ['Right', 'Wrong'], titulo: 'Right or wrong? If it is wrong, say the whole sentence right.', itens: [
  { f: 'I have seen it yesterday.', t: false, c: 'I <b>saw</b> it yesterday. Yesterday is finished.' },
  { f: 'I’ve never deleted an app.', t: true },
  { f: 'When have you started using it?', t: false, c: 'When <b>did you start</b> using it? WHEN asks for a finished time.' },
  { f: 'I saw never that show.', t: false, c: 'I <b>have never seen</b> that show.' },
  { f: 'Have you ever went a day without your phone?', t: false, c: 'Have you ever <b>gone</b> a day without your phone?' },
  { f: 'I have posted it last week.', t: false, c: 'I <b>posted</b> it last week.' }
] };

var S = { i: 0, faixa: 1, fala: {}, resp: {}, armas: {},
  hj: { coisa: -1, quando: -1 }, nu: { n: 0, esc: -1, autora: -1 }, ap: { pick: [], err: 0 }, mo: { sel: -1, pos: {}, err: '' }, dl: { esc: {} } };

function celular(posts, novo) {
  return '<div class="celular"><div class="notch"></div><div class="tela-c">' + (posts.length ? posts.map(function (p, i) { return '<div class="post' + (i === novo ? ' novo' : '') + '"><i></i><span>' + p + '</span></div>'; }).join('') : '<div class="post vazio"><span>the feed is waiting…</span></div>') + '</div></div>';
}
function gaveta(itens, novo) {
  return '<div class="gaveta"><div class="frente-g"><b>ARCHIVE</b><span class="puxador"></span></div><div class="fichas-g">' + (itens.length ? itens.map(function (x, i) { return '<div class="ficha-g' + (i === novo ? ' novo' : '') + '"><small>' + x[0] + '</small><span>' + x[1] + '</span></div>'; }).join('') : '<div class="ficha-g vazio"><small>FINISHED TIME</small><span>empty</span></div>') + '</div></div>';
}

var R = {};
R.capa = function () {
  return '<div class="capa"><div class="lado-a"><span class="kick">MAIN SERIES · B1 · THE INFINITE FEED</span><h1>Fifty Point <b>Four</b></h1>'
    + '<p class="sub">Have you <b>ever</b> scrolled past something you disagreed with? Yes. <b>When did</b> you last do it?</p>'
    + '<div class="chipsx"><span class="pilula">Have you ever…?</span><span class="pilula">When did you…?</span><span class="pilula">not: I have seen it yesterday</span><span class="pilula">Live Class · W·O·L·F</span></div>'
    + '<button type="button" class="btn cheio" data-a="ir" data-n="1">Start scrolling</button>' + faixaLive() + '</div>'
    + '<div class="capa-d"><div class="par-cg">' + celular(['I’ve deleted that app three times.', 'Have you ever seen a video like this?', 'She’s never posted a photo of her food.'], -1) + gaveta([['YESTERDAY', 'I deleted it again yesterday.'], ['2019', 'We met online in 2019.']], -1) + '</div></div></div>';
};

R.hoje = function (c) {
  var e = S.hj, coisa = e.coisa >= 0 ? COISAS[e.coisa] : null, quando = e.quando >= 0 ? QUANDO[e.quando] : null;
  return cab(c) + '<div class="mesa-c"><div class="lado-l"><h5 class="rot-ouve">WHAT HAVE YOU SEEN TODAY?</h5><div class="tres-b">' + COISAS.map(function (x, i) { return '<button type="button" class="chip' + (e.coisa === i ? ' on' : '') + '" data-a="hj-c" data-n="' + i + '">' + x + '</button>'; }).join('') + '</div>'
    + (coisa ? '<div class="balao vd"><small>NO TIME · IT STAYS ON THE PHONE</small><p>I’ve seen ' + coisa + ' today.</p></div><h5 class="rot-ouve">WHEN?</h5><div class="tres-b">' + QUANDO.map(function (x, i) { return '<button type="button" class="chip' + (e.quando === i ? ' on' : '') + '" data-a="hj-q" data-n="' + i + '">' + x + '</button>'; }).join('') + '</div>' : '')
    + (quando ? '<div class="balao vd arq-b"><small>A FINISHED TIME · IT GOES TO THE DRAWER</small><p>I saw it ' + quando + '.</p></div><p class="aprova">Two sentences, one thing. Say both again: which one had a time?</p>' : '') + '</div>'
    + '<div class="lado-l"><div class="par-cg">' + celular(coisa ? ['I’ve seen ' + coisa + ' today.'] : [], 0) + gaveta(quando ? [[quando.toUpperCase(), 'I saw it ' + quando + '.']] : [], 0) + '</div></div></div>';
};

R.feed = function (c) {
  var e = (S.fq || {}).sep || { em: {} }, em = e.em || {}, noCel = [], naGav = [], feitas = 0;
  POSTS.forEach(function (p, i) { if (em[i] === p.c) { feitas++; if (p.c === 0) noCel.push(p.txt); else naGav.push([p.aba, p.txt]); } });
  return cab(c) + '<div class="mesa-c"><div class="lado-l"><div class="par-cg">' + celular(noCel, -1) + gaveta(naGav, -1) + '</div>'
    + (feitas === POSTS.length ? '<p class="aprova">Three on the phone, three in the drawer. The time word decided every one. Now read them all out loud.</p>' : '') + '</div>'
    + '<div class="lado-l">' + FM.ex('sep', SEPARA) + '</div></div>';
};

R.numeros = function (c) {
  var e = S.nu, n = e.n, ouviu = (S.ouviu || {})['a3.mp3'];
  var placar = '<div class="placar-n">' + NUMEROS.map(function (x, i) { return '<div class="' + (i < n ? 'on' : '') + '"><small>' + ['AGREEING', 'DISAGREEING', 'BELIEF'][i] + '</small><b>' + (i < n ? x.val : '?') + '</b></div>'; }).join('') + '</div>';
  if (n < NUMEROS.length) {
    var x = NUMEROS[n], ok = e.esc === x.a;
    return cab(c) + '<div class="mesa-c"><div class="lado-l">' + placar + '<div class="aberta vd" style="background-image:url(' + img('tela') + ')"><span>23,000 PEOPLE · THREE MONTHS</span></div></div>'
      + '<div class="lado-l"><div class="pergunta vd ja"><small>GUESS FIRST · ' + (n + 1) + ' OF 3</small><h2>' + x.q + '</h2></div><div class="tres-b">' + x.op.map(function (o, i) { return '<button type="button" class="pilula grande-p' + (e.esc === i ? (ok ? ' certo' : ' errado') : '') + '" data-a="nu" data-n="' + i + '">' + o + '</button>'; }).join('') + '</div>'
      + (ok ? '<p class="aprova">' + x.val + '.</p><div><button type="button" class="btn" data-a="nu-prox">Next number</button></div>' : e.esc >= 0 ? '<p class="recusa">Not that one. Higher or lower?</p>' : '') + '</div></div>';
  }
  var okA = e.autora === 0;
  return cab(c) + '<div class="mesa-c"><div class="lado-l">' + placar + '<div class="ouve-c vd"><div class="toca-linha">' + tocar('a3.mp3') + '<b>THE AUTHOR</b></div>' + transcricao('a3.mp3', TR['a3.mp3']) + '</div></div>'
    + '<div class="lado-l"><div class="pergunta vd ja"><small>HER STUDY HAS BEEN IN 400 NEWSPAPERS</small><h2>' + AUTORA.q + '</h2></div>' + (ouviu ? '<div class="versoes">' + AUTORA.op.map(function (o, i) { return '<button type="button" class="versao' + (e.autora === i ? (o[1] ? ' certo' : ' errado') : '') + '" data-a="nu-a" data-n="' + i + '">' + o[0] + '</button>'; }).join('') + '</div>' : '<p class="dica-aluno">Play her first.</p>')
    + (okA ? '<p class="aprova">Fifty point four. And a much smaller sentence than the headlines.</p>' : e.autora > 0 ? '<p class="recusa">She did say that. Which sentence goes further than she did?</p>' : '') + '</div></div>';
};

R.aprende = function (c) {
  var e = S.ap, ouviu = (S.ouviu || {})['a1.mp3'], pronto = e.pick.length === PASSOS.length, emb = ordem(PASSOS.map(function (p, i) { return [p, i]; }), 7);
  return cab(c) + '<div class="mesa-c"><div class="lado-l"><div class="ouve-c vd"><div class="toca-linha">' + tocar('a1.mp3') + '<b>THE ENGINEER</b></div>' + transcricao('a1.mp3', TR['a1.mp3']) + '</div>'
    + '<div class="passos-l">' + PASSOS.map(function (p, i) { return '<div class="passo-l' + (i < e.pick.length ? ' on' : '') + '"><i>' + (i + 1) + '</i><span>' + (i < e.pick.length ? p : '…') + '</span></div>'; }).join('') + '</div></div>'
    + '<div class="lado-l">' + (ouviu ? (pronto ? '<p class="aprova">“We have never had to ask.” No finished time: present perfect.</p><div class="pede vd"><small>YOUR TURN</small><b>What has your feed shown you most this week? Why, do you think?</b></div>' + fala('ap', ['My feed has shown me …'], ['has shown', 'have seen', 'I watched … yesterday'])
      : '<h5 class="rot-ouve">TAP THE STEPS IN ORDER</h5><div class="versoes">' + emb.map(function (o) { return '<button type="button" class="versao" data-a="ap" data-n="' + o[1] + '"' + (e.pick.indexOf(o[1]) >= 0 ? ' disabled' : '') + '>' + o[0] + '</button>'; }).join('') + '</div>' + (e.err ? '<p class="recusa">Not yet. Play it again: what happens first?</p>' : ''))
      : '<p class="dica-aluno">Play the engineer first. Listen once.</p>') + '</div></div>';
};

R.ever = function (c) {
  return cab(c) + FM.pergunta('ev', EVER, { regra: PRESA, titulo: 'Build the follow-up. Ask your teacher.', depoisRot: 'Then answer it yourself', depois: ['Yes, I have. I … (when?)', 'No, I haven’t.'] });
};

R.mao = function (c) {
  var e = S.mo, x = e.sel >= 0 ? FICHAS[e.sel] : null, feitas = Object.keys(e.pos).length;
  return cab(c) + '<div class="colunas-m">' + COLUNAS.map(function (col, ci) { var dentro = FICHAS.filter(function (f, i) { return e.pos[i] === ci; }); return '<button type="button" class="coluna-m c' + ci + (x ? ' pronta' : '') + '" data-a="mo-c" data-n="' + ci + '"><b>' + col + '</b>' + dentro.map(function (f) { return '<span>' + f.t + '</span>'; }).join('') + '</button>'; }).join('') + '</div>'
    + '<div class="fichas-m">' + FICHAS.map(function (f, i) { if (e.pos[i] !== undefined) return ''; return '<button type="button" class="ficha-m' + (e.sel === i ? ' on' : '') + '" data-a="mo" data-n="' + i + '">' + f.t + '</button>'; }).join('') + '</div>'
    + (e.err ? '<p class="recusa" style="text-align:center">' + e.err + '</p>' : '') + (feitas >= 5 ? '<p class="aprova" style="text-align:center">The machine removed about fifteen percent. The hand went past seventy. Now: who has been filtering your feed?</p>' : '');
};

R.desligou = function (c) {
  var e = S.dl, ouviu = (S.ouviu || {})['a2.mp3'], todas = DESLIGOU.every(function (d, i) { return e.esc[i] === 0; });
  return cab(c) + '<div class="mesa-c"><div class="lado-l"><div class="ouve-c vd"><div class="toca-linha">' + tocar('a2.mp3') + '<b>THE TEAM</b></div>' + transcricao('a2.mp3', TR['a2.mp3']) + '</div>'
    + (todas ? '<div class="pede vd"><small>YOUR TURN</small><b>Have you ever tried a time-order feed? Why did you try it, or why haven’t you?</b></div>' + fala('dl', ['I’ve never … / I tried it …'], ['have tried', 'tried', 'haven’t']) : '') + '</div>'
    + '<div class="lado-l">' + (ouviu ? DESLIGOU.map(function (d, i) { var esc = e.esc[i]; return '<div class="q-dl vd"><b>' + d.q + '</b><div class="tres-b">' + ordem(d.op.map(function (o, j) { return [o, j]; }), i + 2).map(function (o) { return '<button type="button" class="pilula' + (esc === o[1] ? (o[1] === 0 ? ' certo' : ' errado') : '') + '" data-a="dl" data-n="' + i + '" data-v="' + o[1] + '">' + o[0] + '</button>'; }).join('') + '</div></div>'; }).join('') : '<p class="dica-aluno">Play the team first. Listen once.</p>')
    + (todas ? '<p class="aprova">More politics, more junk, less abuse, less time, and no change in belief.</p>' : '') + '</div></div>';
};

R.conversa = function (c) {
  return cab(c) + '<div class="mesa-c"><div class="lado-l">' + FM.ex('rol', ROLETA) + '</div>'
    + '<div class="lado-l">' + FM.ex('seg', SEGUIMENTOS) + '<p class="dica-aluno">Your teacher answers for real. Then you follow up in the past simple. Then your teacher asks you the same card.</p></div></div>';
};

R.erros = function (c) {
  return cab(c) + '<div class="fm-solo">' + FM.ex('er', ERROS) + '</div>';
};

R.fim = function (c) {
  var e = S.hj, coisa = e.coisa >= 0 ? COISAS[e.coisa] : 'a video', quando = e.quando >= 0 ? QUANDO[e.quando] : 'this morning in bed';
  return cab(c) + '<div class="fim">' + escritaFinal('fim', (S.txt || {}).fim || '', (S.salvo || {}).fim, 'I’ve … (no time)\nI … (when?)', 'Your feed',
    ['I’ve never ', 'I’ve ', 'Have you ever ', 'yesterday', 'last week', 'When did you '], ['YOUR FEED, AGAIN', 'Scene I: “I’ve seen ' + coisa + ' today.” · “I saw it ' + quando + '.” Now three things you’ve done online, and when you did them.'])
    + '<div class="lado-fim"><div class="par-cg">' + celular(['I’ve seen ' + coisa + ' today.'], -1) + gaveta([[quando.toUpperCase(), 'I saw it ' + quando + '.']], -1) + '</div><div class="grande vd"><span><u>Have you ever</u> …? (no time)</span><span><u>When did you</u> …? (a finished time)</span><span>never <s>I have seen it yesterday</s></span></div>'
    + mostra('fim', 'I’ve deleted three apps this year.<br>I deleted the last one in August.<br>I’ve never posted a photo of my food.<br>Have you ever turned off your notifications?', 1)
    + '<p class="hw"><a class="pilula" href="HW/" target="_blank" rel="noopener">Homework for the student →</a></p></div></div>';
};

TOQUES['hj-c'] = function (b, n) { S.hj.coisa = n; };
TOQUES['hj-q'] = function (b, n) { S.hj.quando = n; };
TOQUES.nu = function (b, n) { S.nu.esc = n; };
TOQUES['nu-prox'] = function () { S.nu.n++; S.nu.esc = -1; };
TOQUES['nu-a'] = function (b, n) { S.nu.autora = n; };
TOQUES.ap = function (b, n) { var e = S.ap; if (n === e.pick.length) { e.pick.push(n); e.err = 0; } else e.err = 1; };
TOQUES.mo = function (b, n) { S.mo.sel = n; S.mo.err = ''; };
TOQUES['mo-c'] = function (b, n) { var e = S.mo; if (e.sel < 0) { e.err = 'Tap a card first.'; return; } if (FICHAS[e.sel].c === n) { e.pos[e.sel] = n; e.sel = -1; e.err = ''; } else e.err = 'Did the post arrive? If it did, it wasn’t the machine.'; };
TOQUES.dl = function (b, n, v) { S.dl.esc[n] = +v; };
