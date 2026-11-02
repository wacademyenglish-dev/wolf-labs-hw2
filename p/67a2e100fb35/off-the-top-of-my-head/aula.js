/* ============================================================
   OFF THE TOP OF MY HEAD · THE GALLERY · LIVE CLASS  06/10/2026
   Main series C1 · expressões idiomáticas em contexto: as palavras são
   fixas (todo the, todo -s, toda preposição); só o verbo e o possessivo
   mudam (she spilled the beans · off the top of her head); nunca
   traduzir palavra por palavra (cost an arm and a leg, the last straw,
   drop the ball). E "kick the bucket" = morrer.
   Erros: spilled the bean · an elephant in the room · from the top of
   my head · a piece of pie · two rabbits · stepped on the ball · the
   eyes of the face · the last drop · the chip fell · in a roll.
   O MUNDO (da aula velha): um clube pequeno de histórias em Chicago,
   sexta à noite; a palestra de uma professora veterana (SFnMTHhKdkw,
   7:48) SELADA em quatro capítulos com o quadro da caçada (quatro
   expressões lidas na legenda: case closed, a bunch of hooey, on a
   roll, sucks all the life out of you); a parede famosa com oito
   quadros AO PÉ DA LETRA (as imagens da pasta); o microfone aberto.
   Sem nome da palestrante nem do evento na tela.
   A CARA (nova; a velha era galeria + marquise em cartões): a GALERIA
   DE VELUDO — cada quadro numa moldura com placa de latão que só se
   grava quando a expressão sai certa; o CADEADO: as palavras fixas
   trancadas e só o verbo solto; a placa OPEN MIC com lâmpadas na borda.
   Fila: FILA-LIVE-386.md · 144. Pasta piloto-head (conferida: não existia).
   22/10/2026 · OS FORMATOS NOVOS (kit/formatos.js + formatos2.js), mesmas 10
   páginas. A auditoria: 16 rodadas de escolher entre três frases quase iguais
   (V e VII), as armadilhas de tocar e o vídeo com pergunta aberta + Show
   answer. Agora: III palpite antes, tarefa de toque por capítulo (a caçada
   virou "que palavras ela usou?", conferida) e, depois, o motivo + a palavra
   errada, tudo com ▶ no minuto da legenda; V seis quadros falados + Check, a
   placa de latão se grava (FM.fala); VI as notas da anfitriã → a regra
   (FM.carta); VII o microfone: a expressão quebrada em cada história, dizer
   a certa (FM.erro). VIII deixa de ser EXTRA. Atenção: a legenda escreve
   "on the road" onde a palestrante diz "on a roll"; a aula não usa esse
   trecho como tarefa.
   ============================================================ */
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'voce', est: 'o', min: 7, img: 'clube', rot: 'I · You and Stories', t: 'Before the show: you, stories, and the expressions you grew up with.', p: 'Tap a card. The student answers; then the teacher answers too.' },
  { k: 'palavras', est: 'l', img: 'palco', rot: 'II · The Words', t: 'Five words from the video.', p: 'Learn the words before you watch. Then listen for them: they turn yellow in the video.' },
  { k: 'video', est: 'l', min: 10, img: 'palco', rot: 'III · The Hunt', t: 'A veteran teacher’s talk: every kid needs a champion. Hunt the expressions.', p: 'Guess first. Then four chapters: read the task, play, tap your answers. Tap ▶ to hear a moment again.' },
  { k: 'falas', est: 'l', extra: 1, img: 'palco', rot: 'IV · Line by Line', t: 'Every line of the video, one by one.', p: 'Tap a line. Hear it again. The lines with yellow words open the explanation.' },
  { k: 'parede', est: 'o', min: 7, img: 'clube', rot: 'V · The Wall', t: 'The club’s famous wall: six idioms, painted literally.', p: 'Describe the painting and guess the idiom. Read what happened. Say it with the idiom, then tap Check.' },
  { k: 'regra', est: 'f', min: 7, img: 'palco', rot: 'VI · The Host’s Notes', t: 'Friday night. The host writes down the best moments.', p: 'Read the notes out loud. Tap every idiom. Then finish the rule.' },
  { k: 'mic', est: 'o', min: 7, img: 'palco', rot: 'VII · The Open Mic', t: 'Six stories at the mic. Each one ends with a broken idiom.', p: 'Tell each story out loud with the right idiom. Then tap Check. Then tell one from your own life.' },
  { k: 'roda', est: 'o', min: 7, img: 'clube', rot: 'VIII · Off the Top of Your Head', t: 'Your life, with no time to prepare.', p: 'Tap a card. Answer fast, with the idiom on it, about your real life.' },
  { k: 'fim', est: 'w', min: 6, img: 'capa', rot: 'IX · Last Call', t: 'Do idioms make you sound more natural, or can you overdo it?', p: 'A short story from your week with two idioms from tonight. It goes to your My notes.' }
];

var YT = 'SFnMTHhKdkw';

var VOCE = [
  { k: 'STORYTELLERS', q: 'Who tells the best stories among your family and friends? Why?', fup: 'Tell me one of their stories.', st: ['My …'], ex: 'My uncle. He can make a trip to the supermarket sound like an adventure.' },
  { k: 'TALKS', q: 'Do you watch talks, podcasts or stand-up in English? Which ones do you remember?', fup: 'Do you get every joke?', st: ['I watch …'], ex: 'I listen to a comedy podcast on the bus. I don’t get every joke, but I laugh anyway.' },
  { k: 'THE FAMILY SAYING', q: 'Is there an expression your parents or grandparents always say? What does it mean?', fup: 'Is there an English one like it?', st: ['My grandma always says …'], ex: 'My grandma always says that the early bird catches the worm. She wakes up at five.' },
  { k: 'ON THE SPOT', q: 'How do you feel when you speak with no time to prepare?', fup: 'When did it last happen?', st: ['Terrible …', 'Fine …'], ex: 'Terrible. My mind goes blank, and then I remember everything in the shower.' },
  { k: 'LOST IN TRANSLATION', q: 'Have you ever translated an expression into English, and nobody understood?', fup: 'What did you say?', st: ['Yes! …'], ex: 'Yes! I translated an expression word for word, and my colleague just stared at me.' }
];

/* 22/10/2026 · III nos formatos novos: palpite antes, tarefa de toque por capítulo (a caçada conferida),
   depois o motivo + a palavra errada. Minutos da legenda (legenda-dados.js). */
var ANTES = { formato: 'escolhe', titulo: 'Guess first.', itens: [
  { p: 'The talk is called “Every kid needs a champion”. What kind of champion?', o: ['a sports star', 'an adult who believes in the kid', 'the best student'], c: -1, d: 'Chapter 4 tells you.' },
  { p: 'A student gets 18 of 20 questions wrong. What does she write on his paper?', o: ['−18', '+2', 'a big F'], c: -1, d: 'Chapter 3 tells you.' }
] };
var CAPS = [
  { k: 'HER LIFE', ini: 0, fim: 95, ex: { formato: 'escolhe', titulo: 'Tap the answer.', itens: [
    { p: 'Who in her family were educators?', tm: '0:24', o: ['only her mother', 'her parents and grandparents', 'nobody'], c: 1 },
    { p: 'How long has she worked in schools?', tm: '0:29', o: ['40 years', '20 years', '60 years'], c: 0 }
  ] } },
  { k: 'THE COLLEAGUE', ini: 95, fim: 190, ex: { formato: 'escolhe', titulo: 'The hunt: which words did they use?', itens: [
    { p: 'The colleague: “They don’t pay me to … the kids.”', tm: '1:36', o: ['help', 'like', 'know'], c: 1 },
    { p: '<i>End of discussion.</i> The colleague says:', tm: '1:43', o: ['game over', 'that’s all', 'case closed'], c: 2 },
    { p: '<i>Nonsense, not true at all.</i> The colleague says:', tm: '2:00', o: ['a bunch of hooey', 'a piece of cake', 'a lot of noise'], c: 0 }
  ] } },
  { k: 'PLUS TWO', ini: 190, fim: 320, ex: { formato: 'escolhe', titulo: 'The hunt: tap what you hear.', itens: [
    { p: 'What did she put on his paper?', tm: '4:34', o: ['−18 and an F', '+2 and a smiley face', 'nothing'], c: 1 },
    { p: '<i>Takes away all your energy and hope.</i> She says: minus 18 …', tm: '5:01', o: ['sucks all the life out of you', 'breaks the ice', 'costs an arm and a leg'], c: 0 }
  ] } },
  { k: 'A CHAMPION', ini: 320, fim: 468, ex: { formato: 'verdadeOuMentira', rotulos: ['True', 'False'], titulo: 'True or false? If it’s false, say the truth.', itens: [
    { f: 'Her mother kept food and soap in her desk for the kids.', t: true, tm: '5:22' },
    { f: 'She says teachers will like all their children.', t: false, tm: '6:18', c: '“Will you like all your children? Of course not.”' },
    { f: 'A champion is an adult who never gives up on a kid.', t: true, tm: '7:15' }
  ] } }
];
var MOTIVO = { formato: 'escolhe', titulo: 'Why?', itens: [
  { p: 'Why does she say “case closed” and “a bunch of hooey”, not formal words?', o: ['It is more polite.', 'It sounds like a real conversation.', 'They are new words.'], c: 1, d: 'The audience feels close to her. Nobody explained the idioms: the story did.' }
] };
var ERRO = [
  { f: 'Kids don’t learn from people they don’t <u>know</u>.', r: 'like', t: '1:48' },
  { f: 'I taught the whole lesson <u>right</u>.', r: 'wrong', t: '2:42' },
  { f: 'Every child deserves a <u>teacher</u>.', r: 'champion', t: '7:11' },
  { f: 'We’re born to make <u>money</u>.', r: 'a difference', t: '7:33' }
];

/* a parede: im = imagem, exp = a expressão, sig = o sentido */
var PAREDE = [
  { im: 'i-feijao', ver: 'A glass jar on its side. Beans all over a dark wooden table.', exp: 'spill the beans', sig: 'tell a secret', sit: 'Maya planned a surprise party for Sam. On Thursday, her little brother told Sam everything.', resp: 'Her little brother <b>spilled the beans</b>.', depois: 'Have you ever spilled the beans?' },
  { im: 'i-gelo', ver: 'A frozen lake at night, with one long crack across the ice.', exp: 'break the ice', sig: 'make people relax and start talking', sit: 'First day of a new class. Nobody said a word, so Leo told a funny story about his dog.', resp: 'Leo <b>broke the ice</b> with a funny story.', depois: 'How do you break the ice at a party?' },
  { im: 'i-elefante', ver: 'A small gray elephant standing quietly next to a sofa.', exp: 'the elephant in the room', sig: 'the big problem nobody talks about', sit: 'At dinner, everybody talked about the weather. Nobody mentioned Dad’s new job in another country.', resp: 'Dad’s new job was <b>the elephant in the room</b>.', depois: 'Is there an elephant in the room at your work?' },
  { im: 'i-bolo', ver: 'One slice of chocolate cake on a dark plate.', exp: 'a piece of cake', sig: 'very easy', sit: 'Ana studied three weeks for her driving test. It took twenty minutes, and she didn’t make one mistake.', resp: 'For Ana, the test was <b>a piece of cake</b>.', depois: 'What was a piece of cake for you this year?' },
  { im: 'i-lua', ver: 'A huge blue moon over dark hills.', exp: 'once in a blue moon', sig: 'very rarely', sit: 'Ray’s brother lives in Japan. They see each other maybe once every three years.', resp: 'Ray sees his brother <b>once in a blue moon</b>.', depois: 'Who do you see once in a blue moon?' },
  { im: 'i-bola', ver: 'One red ball on an empty wooden stage, under a single spotlight.', exp: 'drop the ball', sig: 'fail to do your part', sit: 'Nina was in charge of the concert tickets. She forgot to buy them.', resp: 'Nina <b>dropped the ball</b>.', depois: 'When did someone drop the ball on you?' }
];

/* VI · as notas da anfitriã do clube (texto nosso) → a regra */
var CARTA = { de: 'Friday · the story club · the host’s notes',
  txt: 'What a night! First, Maya [[spilled the beans]] about her new job. Then Leo [[broke the ice]] with his dog story, as always. Ray sees his brother only [[once in a blue moon]], so his story was sad. Nina [[dropped the ball]] with the tickets again. And Priya, [[off the top of her head]], told a perfect story about her grandma. The rent here [[costs an arm and a leg]], but I love this place.',
  assina: 'Dee, the host' };
var REGRA = [
  { a: 'Every word is fixed, even the -s: Maya spilled the ', par: ['beans', 'bean'], c: 0 },
  { a: 'Only the verb moves: yesterday Leo ', par: ['break', 'broke'], c: 1, b: ' the ice.' },
  { a: 'The possessive follows the person: off the top of ', par: ['her', 'the'], c: 0, b: ' head' },
  { a: 'The article is fixed: ', par: ['an elephant', 'the elephant'], c: 1, b: ' in the room' },
  { a: 'The English picture: it costs ', par: ['the eyes of the face', 'an arm and a leg'], c: 1 },
  { a: 'To give up: ', par: ['throw in the towel', 'kick the bucket'], c: 0, b: ' (kick the bucket = to die!)' }
];
var PRESA = 'Every word is <b>fixed</b>: the beans, the ice<br>Only the <b>verb</b> moves: she spilled<br>The <b>possessive</b> follows the person: her head<br>Use the <b>English picture</b>; don’t translate';

/* VII · o microfone: cada história termina com a expressão quebrada (os erros de tradução) */
var MIC = [
  { f: 'THE QUIZ · How many countries? I don’t check. <u>From</u> the top of my head, about twelve.', r: 'Off' },
  { f: 'THE ACTOR · I know his name! It’s on the <u>point</u> of my tongue.', r: 'tip' },
  { f: 'THE FINAL · Front-row tickets: they cost <u>the eyes of the face</u>.', r: 'an arm and a leg' },
  { f: 'THE PRINTER · After six hours, Carl <u>kicked the bucket</u> and bought a new one.', r: 'threw in the towel' },
  { f: 'THE JOKE · I got it two hours later, in the shower. The <u>chip</u> finally dropped.', r: 'penny' },
  { f: 'THE WORST DAY · Rain, then my phone, then the bus left without me. That was the last <u>drop</u>.', r: 'straw' }
];

var RODA = [
  { k: 'A PIECE OF CAKE', q: 'What is a piece of cake for you, but hard for others?', fup: 'Why is it easy for you?', st: ['… is a piece of cake for me.'], ex: 'Parallel parking is a piece of cake for me. My friends hate it.' },
  { k: 'ONCE IN A BLUE MOON', q: 'What do you do only once in a blue moon?', fup: 'Would you like to do it more?', st: ['I … once in a blue moon.'], ex: 'I go to the movies once in a blue moon. I watch everything at home.' },
  { k: 'AN ARM AND A LEG', q: 'What costs an arm and a leg where you live?', fup: 'Do you pay it anyway?', st: ['… costs an arm and a leg.'], ex: 'Rent costs an arm and a leg in my city.' },
  { k: 'DROPPED THE BALL', q: 'Tell me about a time you dropped the ball.', fup: 'How did you fix it?', st: ['I dropped the ball when …'], ex: 'I dropped the ball on my best friend’s birthday. I forgot it completely.' },
  { k: 'THE LAST STRAW', q: 'What was the last straw on your worst day this year?', fup: 'What did you do next?', st: ['… That was the last straw.'], ex: 'The elevator broke, and I live on the tenth floor. That was the last straw.' },
  { k: 'BREAK THE ICE', q: 'How do you break the ice with new people?', fup: 'Does it always work?', st: ['I break the ice by …'], ex: 'I ask about their weekend. It always works.' }
];

var S = { i: 0, faixa: 1, fala: {}, resp: {}, armas: {},
  voce: { sel: -1, foi: {} }, video: { p: 0, cap: 0, viu: {} }, ro: { sel: -1, foi: {} } };

/* a moldura com a placa de latão */
function quadro(x, gravada, mini) {
  return '<figure class="ot-moldura vd' + (mini ? ' mini' : '') + '"><div class="ot-tela"><img src="' + img(x.im) + '" alt="' + h(x.ver) + '"></div>'
    + '<figcaption class="ot-placa' + (gravada ? ' gravada' : '') + '">' + (gravada ? '<b>' + x.exp + '</b><small>' + x.sig + '</small>' : '<b>· · ·</b><small>what is the idiom?</small>') + '</figcaption></figure>';
}
/* o cadeado: palavras fixas trancadas, só o verbo solto */
function cadeado(pal, verbo, forma) {
  return '<div class="ot-trava vd"><small>FIXED WORDS ARE LOCKED · ONLY THE VERB MOVES</small><div>' + pal.map(function (p, i) {
    return i === verbo ? '<span class="ot-solta"><s>' + p + '</s> <b>' + forma + '</b></span>' : '<span class="ot-presa">' + p + '</span>';
  }).join('') + '</div></div>';
}
/* a placa OPEN MIC com lâmpadas na borda */
function placa(n) {
  var l = ''; for (var i = 0; i < MIC.length; i++) l += '<i class="' + (i < n ? 'acesa' : '') + '"></i>';
  return '<div class="ot-mic"><div class="ot-lamp">' + l + '</div><b>OPEN MIC</b><small>' + n + ' / ' + MIC.length + ' STORIES</small><div class="ot-lamp">' + l + '</div></div>';
}

var R = {};
R.capa = function () {
  return '<div class="capa"><div><span class="kick">MAIN SERIES · C1 · IDIOMS IN CONTEXT</span><h1>Off the Top <b>of My Head</b></h1>'
    + '<p class="sub">The ticket <b>cost an arm and a leg</b>. The first story was <b>a piece of cake</b>. And that actor’s name? <b>It’s on the tip of my tongue.</b> Keep every word; move only the verb.</p>'
    + '<div class="chipsx"><span class="pilula">spill the beans</span><span class="pilula">break the ice</span><span class="pilula">the last straw</span><span class="pilula">Live Class · W·O·L·F</span></div>'
    + '<button type="button" class="btn cheio" data-a="ir" data-n="1">Take a seat</button>' + faixaLive() + '</div>'
    + '<div class="capa-r">' + quadro(PAREDE[0], 1) + '</div></div>';
};

R.voce = function (c) { return cartasPessoais(c, VOCE, S.voce, 'voce', ['My grandma always says …', 'Yes! …', 'Terrible …']); };

R.video = function (c) {
  var e = S.video, corpo;
  if (e.p === 0) corpo = '<div class="mesa-c"><div class="lado-l">' + FM.ex('antes', ANTES) + '</div>'
    + '<div class="lado-l"><div class="selo-v vd"><b>SEALED</b><small>About eight minutes, in four chapters. Every chapter has a short task. It opens after your guesses.</small></div><div><button type="button" class="btn cheio" data-a="vd-p" data-n="1">Watch, chapter by chapter</button></div></div></div>';
  else if (e.p === 1) {
    var k = CAPS[e.cap];
    corpo = '<div class="mesa-video"><div class="video-col">' + iframe(YT, 'Every kid needs a champion', '&start=' + k.ini + '&end=' + k.fim) + '<small class="cred">Chapter ' + (e.cap + 1) + ' of 4 · read the task, then play · it stops by itself</small></div><div class="lado-video"><div class="caps">'
      + CAPS.map(function (x, i) { return '<button type="button" class="chip' + (e.cap === i ? ' on' : '') + (e.viu[i] ? ' feito' : '') + '" data-a="vd-c" data-n="' + i + '">' + x.k + '</button>'; }).join('') + '</div>'
      + FM.ex('cap' + e.cap, k.ex)
      + '<div>' + (e.cap < CAPS.length - 1 ? '<button type="button" class="btn" data-a="vd-c" data-n="' + (e.cap + 1) + '">Next chapter</button>' : '<button type="button" class="btn" data-a="vd-p" data-n="2">After the video</button>') + '</div></div></div>';
  } else corpo = '<div class="mesa-video"><div class="video-col">' + iframe(YT, 'Every kid needs a champion') + '<small class="cred">The whole talk · tap ▶ to hear a moment again</small></div><div class="lado-video">'
    + FM.ex('motivo', MOTIVO) + FM.erro('erro', ERRO) + '</div></div>';
  return cab(c) + '<div class="tres-tempos">' + tempos3(e.p) + '</div>' + corpo;
};

/* V · a parede: a frase dita e conferida grava a placa de latão */
R.parede = function (c) {
  return cab(c) + FM.fala('parede', PAREDE.map(function (x) { return { pista: x.sit, resp: x.resp, depois: x.depois }; }), {
    rotulo: 'Painting', prox: 'Next painting', diga: 'Say it with the idiom first',
    lado: function (feitas, atual, nova) {
      if (atual < 0) return '<div class="ot-galeria" style="grid-template-columns:repeat(3,1fr);max-width:900px">' + PAREDE.map(function (x) { return quadro(x, 1, 1); }).join('') + '</div>';
      var x = PAREDE[atual];
      return '<div class="mesa-c" style="align-items:center"><div class="lado-l" style="width:min(330px,100%);justify-self:end">' + quadro(x, nova) + '</div><div class="lado-l"><div class="ot-ver vd"><small>DESCRIBE IT AND GUESS THE IDIOM</small><p>' + x.ver + '</p></div></div></div>';
    },
    fim: 'Six brass plates. Walk the teacher along the wall: say each idiom and what it means.'
  });
};

/* VI · as notas da anfitriã → a regra */
R.regra = function (c) {
  return cab(c) + FM.carta('carta', CARTA, REGRA, { toque: 'Tap every idiom', pronta: 'The rule is ready. It stays in the corner of the Open Mic.' });
};

/* VII · o microfone: dizer a expressão certa; o Check acende as lâmpadas */
R.mic = function (c) {
  var feito = S.fq && S.fq.mic && S.fq.mic.ver;
  return cab(c) + placa(feito ? MIC.length : 0) + FM.erro('mic', MIC, { titulo: 'One idiom is broken in each story. Say it right.', regra: PRESA })
    + (feito ? '<div class="foco"><div class="pergunta vd"><small>THE HOST CALLS YOUR NAME</small><h2>Now tell one of these stories from your own life, with the idiom.</h2></div></div>' : '');
};

R.roda = function (c) { return cartasPessoais(c, RODA, S.ro, 'ro', ['… a piece of cake …', '… the last straw.', 'I dropped the ball …']); };

R.fim = function (c) {
  return cab(c) + '<div class="fim">' + escritaFinal('fim', (S.txt || {}).fim || '', (S.salvo || {}).fim, 'This week …', 'Your story',
    ['a piece of cake', 'the last straw', 'dropped the ball', 'on a roll', 'once in a blue moon', 'off the top of my head'], ['LAST CALL', 'A short story from your week, off the top of your head, with two idioms from tonight.'])
    + '<div class="lado-fim"><div class="ot-galeria fim-g">' + PAREDE.slice(0, 4).map(function (x) { return quadro(x, 1, 1); }).join('') + '</div>'
    + '<div class="grande vd"><span><u>every word is fixed</u> · the -s, the article, the preposition</span><span><u>only the verb and the possessive move</u> · she spilled · her head</span><span><u>the English picture</u> · an arm and a leg, the last straw, drop the ball</span><span>not <s>the bean</s>, not <s>the eyes of the face</s>, not <s>kicked the bucket</s> for giving up</span></div>'
    + mostra('fim', 'On Monday I dropped the ball: I forgot my sister’s birthday. On Tuesday the rain was the last straw. But by Friday I was on a roll.', 1)
    + '<p class="hw"><a class="pilula" href="HW/" target="_blank" rel="noopener">Homework for the student →</a></p></div></div>';
};

TOQUES['vd-p'] = function (b, n) { S.video.p = n; };
TOQUES['vd-c'] = function (b, n) { S.video.viu[S.video.cap] = 1; S.video.cap = n; };
