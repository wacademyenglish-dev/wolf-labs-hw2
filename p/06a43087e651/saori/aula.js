/* ============================================================
   BEFORE YOU · THE CLOTHESLINE · LIVE CLASS  05/10/2026
   Main series A2 · before / after / when + frase inteira (ou -ing), nunca
   TO · sem will depois do nó · when com os dois lados no mesmo tempo
   O MUNDO (da aula velha): um dia real de um cão de abrigo, o Meaty (vídeo
   8J4k32LhTNw); o aluno pendura as seis fotos do dia num VARAL e amarra
   cada par com before, after ou when. A CARA: o varal com POLAROIDS de
   moldura grafite (escuras), pregadores e corda.
   ⚠ A CENA DA SAORI fica intacta (memória homenagem-saori): foto real,
   sem corte, sem cor, sem brilho (convertida em webp SEM PERDA), em
   círculo, nome, datas, a linha, botão "Thank you, Saori". Não é
   exercício. Penúltima cena. Nunca vira vitrine.
   ÁUDIOS (faster-whisper): o historia.mp3 diz "He drove him home, showed
   him a bowl and a garden" — a transcrição velha estava diferente.
   Fila: FILA-LIVE-386.md · 047.
   ============================================================ */
var YT = '8J4k32LhTNw';
var L = [
  { k: 'capa', est: null, img: 'd5' },
  { k: 'abre', est: 'o', min: 7, img: 'antes', rot: 'I · Before You Sleep', t: 'Your own day, before anything else.', p: 'Pick a card. Nobody is corrected here. Your teacher taps what you used.' },
  { k: 'video', est: 'l', min: 10, img: 'd1', rot: 'II · One Day, Filmed', t: 'This really happened.', p: 'Watch the whole video. Then three questions.' },
  { k: 'varal', est: 'o', min: 7, img: 'd3', rot: 'III · Hang the Day', t: 'Six photos on the table. One line.', p: 'Say the sentence for the photo that comes next. Then tap it: it goes on the line.' },
  { k: 'nos', est: 'f', min: 6, img: 'd4', rot: 'IV · Tie the Knots', t: 'Two photos, one knot. Before, after or when?', p: 'Choose the knot. Then say the whole sentence.' },
  { k: 'armadilha', est: 'f', min: 6, img: 'd2', rot: 'V · Before To, After Will', t: 'Two shapes that don’t exist.', p: 'Read both. Tap the one that exists. Say it twice.' },
  { k: 'duas', est: 'o', min: 7, extra: 1, img: 'd5', rot: 'VI · Two Ways, Both Right', t: 'A whole sentence, or -ing. Both open.', p: 'Say both out loud. Then open the note.' },
  { k: 'outro', est: 'o', min: 7, extra: 1, img: 'd6', rot: 'VII · The Other End', t: 'Same facts. The other word.', p: 'Read it. Say it with the other word. Then check.' },
  { k: 'dia', est: 'o', min: 7, extra: 1, img: 'antes', rot: 'VIII · The Day That Divides', t: 'Every life has a day like Meaty’s.', p: 'Open three cards. Say your before, then your after.' },
  { k: 'conta', est: 'o', min: 7, extra: 1, img: 'd3', rot: 'IX · How You Met', t: 'Somebody important. How did you meet?', p: 'Five steps, in order. Before, when, after.' },
  { k: 'saori', est: null, img: 'antes' },
  { k: 'fim', est: 'w', min: 6, img: 'd6', rot: 'X · The Whole Line', t: 'Write a day that divides your life.', p: 'Before, after, when, with a whole sentence after every knot. It goes to your My notes.' }
];

var TR = {
  'historia.mp3': 'A dog waited in a shelter. One morning, a man came for him. He drove him home, showed him a bowl and a garden, and he fell asleep on the sofa.',
  'seis.mp3': 'He waited in a shelter. One morning somebody came for him. They drove away together. He saw his new house. He ran in the garden. He fell asleep on the sofa.'
};

var ABRE = [
  { k: 'BEFORE BED', q: 'What do you do before you go to bed?', fup: 'Every night?', st: ['Before I go to bed, I …', 'Before sleeping, I …'], ex: 'Before I go to bed, I read a little.' },
  { k: 'AFTER YOU WAKE UP', q: 'What do you do after you wake up?', fup: 'And before breakfast?', st: ['After I wake up, I …'], ex: 'After I wake up, I make coffee.' },
  { k: 'AFTER THIS CLASS', q: 'What will you do after this class?', fup: 'And when you get home tonight?', st: ['After this class, I’ll …'], ex: 'After this class, I’ll have lunch.' }
];
var FORMAS = [{ k: 'frase', t: 'BEFORE / AFTER + SENTENCE' }, { k: 'ing', t: 'BEFORE / AFTER + -ING' }, { k: 'to', t: 'BEFORE TO GO', erro: 1 }, { k: 'will', t: 'AFTER I WILL …', erro: 1 }];

var FOTOS = [
  { img: 'd1', fr: 'He waited in a shelter.' }, { img: 'd2', fr: 'One morning somebody came for him.' }, { img: 'd3', fr: 'They drove away together.' },
  { img: 'd4', fr: 'He saw his new house.' }, { img: 'd5', fr: 'He ran in the garden.' }, { img: 'd6', fr: 'He fell asleep on the sofa.' }
];
var NOS = [
  { a: 0, b: 1, f: 'He waited in a shelter for months ___ somebody came for him.', k: 'before', w: 'The waiting came first.' },
  { a: 1, b: 2, f: '___ somebody opened the door, he stood up.', k: 'when', w: 'The exact moment: when.' },
  { a: 2, b: 3, f: '___ they drove home, he saw his new house.', k: 'after', w: 'The drive came first, then the house.' },
  { a: 3, b: 4, f: 'He ate from his new bowl ___ he ran in the garden.', k: 'before', w: 'Bowl first, garden second.' },
  { a: 4, b: 5, f: '___ he played all afternoon, he fell asleep on the sofa.', k: 'after', w: 'After + a whole sentence.' },
  { a: 5, b: 0, f: '___ he closed his eyes, the shelter was far away.', k: 'when', w: 'One moment, and a whole life behind it.' }
];
var ARMAD = [
  { ok: 'Before he went out, he ate.', mau: 'Before to go out, he ate.', w: 'A whole sentence after before. No to.' },
  { ok: 'After she arrived, the house was noisy.', mau: 'After to arrive, the house was noisy.', w: 'Who arrived? She. The person is in the sentence.' },
  { ok: 'I’ll call you after I get home.', mau: 'I’ll call you after I will get home.', w: 'The future is in the other half. After the knot: present.' },
  { ok: 'When I arrive, I’ll text you.', mau: 'When I will arrive, I’ll text you.', w: 'Same rule for when.' },
  { ok: 'When I was a child, we had a dog.', mau: 'When I am a child, we had a dog.', w: 'A story in the past: both halves in the past.' },
  { ok: 'When the car stopped, she jumped out.', mau: 'When stopped the car, she jumped out.', w: 'Person first, then the verb.' }
];
var DUAS = [
  { a: 'Before he went out, he ate.', b: 'Before going out, he ate.', w: 'Same meaning. Both correct.' },
  { a: 'After she arrived, she changed the house.', b: 'After arriving, she changed the house.', w: 'With -ing, the person is in the other half: she.' },
  { a: 'Before I sleep, I read.', b: 'Before sleeping, I read.', w: 'Present too.' },
  { a: 'After they ate, they walked.', b: 'After eating, they walked.', w: 'The -ing one is shorter.' },
  { a: 'Before you sign, read it.', b: 'Before signing, read it.', w: 'Instructions love -ing.' }
];
var OUTRO = [
  { dado: 'After I ate, I went out.', ok: 'Before I went out, I ate.', w: 'The facts didn’t move. Only the word did.' },
  { dado: 'He called before he slept.', ok: 'He slept after he called.', w: 'Both halves swapped.' },
  { dado: 'Before she arrived, the house was quiet.', ok: 'After she arrived, the house wasn’t quiet.', w: 'This one needs a change of meaning.' },
  { dado: 'After they moved, they were happier.', ok: 'Before they moved, they were less happy.', w: 'Happier became less happy.' },
  { dado: 'He was a puppy before he was a dog.', ok: 'He was a dog after he was a puppy.', w: 'Word order is not fact order.' }
];
var DIA = [
  { q: 'the day you moved house', ini: 'Before I moved, I lived …' }, { q: 'the day you started your job', ini: 'Before I started, I was …' }, { q: 'the day an animal came home', ini: 'Before it came, the house was …' },
  { q: 'the day somebody was born', ini: 'After she was born, everything …' }, { q: 'the day you left your city', ini: 'Before I left, I never …' }, { q: 'a day you still think about', ini: 'Before that day, I …' }
];
var CONTA = [
  { q: 'Who is the person? Before you met, where were you?', fup: 'What was your life like then?', st: ['Before I met her, I was …'], ex: 'My best friend, Ana. Before I met her, I was new in the city.' },
  { q: 'When did you first see them? What happened?', fup: 'What did you think?', st: ['When I first saw him, …'], ex: 'When I first saw her, she was reading on the bus.' },
  { q: 'What did you do after that first day?', fup: 'Who spoke first?', st: ['After that, we …'], ex: 'After that, we took the same bus every day.' },
  { q: 'What changed after you met?', fup: 'Is it better now?', st: ['After we met, I started …'], ex: 'After we met, I started going out more.' },
  { q: 'What will you do the next time you see them?', fup: 'When is that?', st: ['When I see her, I’ll …'], ex: 'When I see her, I’ll give her a book.' }
];

var S = { i: 0, faixa: 1, fala: {}, resp: {}, armas: {},
  abre: { sel: -1, foi: {}, formas: {} }, video: { p: 0 }, varal: { n: 0, erro: -1 }, nos: { n: 0, esc: '' }, arm: { esc: {} }, duas: {}, outro: {}, dia: {}, conta: { n: 0, foi: {} }, saori: 0 };

function polaroid(f, i, cls, toque) {
  return '<' + (toque ? 'button type="button" data-a="' + toque + '" data-n="' + i + '"' : 'div') + ' class="polaroid' + (cls ? ' ' + cls : '') + '" style="--r:' + ((i * 47) % 10 - 5) + 'deg"><i class="pregador"></i><span class="foto" style="background-image:url(' + img(f.img) + ')"></span><small>' + (cls && cls.indexOf('pendurada') >= 0 ? f.fr : '&nbsp;') + '</small></' + (toque ? 'button' : 'div') + '>';
}
function varal(n, cls) {
  return '<div class="varal' + (cls ? ' ' + cls : '') + '"><div class="corda"></div><div class="fotos-v">' + FOTOS.map(function (f, i) { return i < n ? polaroid(f, i, 'pendurada') : '<div class="vaga"></div>'; }).join('') + '</div></div>';
}

var R = {};
R.capa = function () {
  return '<div class="capa"><div class="lado-a"><span class="kick">MAIN SERIES · A2 · THE CLOTHESLINE</span><h1>Before <b>You</b></h1>'
    + '<p class="sub">One real day, six photos, one line. Hang the day in order, then tie it together: before, after, when.</p>'
    + '<div class="chipsx"><span class="pilula">before I went</span><span class="pilula">after arriving</span><span class="pilula">when I get home</span><span class="pilula">Live Class · W·O·L·F</span></div>'
    + '<button type="button" class="btn cheio" data-a="ir" data-n="1">Open the line</button>' + faixaLive() + '</div>'
    + '<div class="vd capa-v">' + varal(3) + '</div></div>';
};

R.abre = function (c) {
  return cartasPessoais(c, ABRE, S.abre, 'abre') + '<div class="partes so-prof"><h5>WHAT YOU HEAR · DON’T CORRECT</h5>' + FORMAS.map(function (f) { return '<button type="button" class="chip frase' + (f.erro ? ' erro-ouvido' : '') + (S.abre.formas[f.k] ? ' on' : '') + '" data-a="ab-f" data-v="' + f.k + '">' + f.t + '</button>'; }).join('') + '</div>';
};

R.video = function (c) {
  var e = S.video, passos = '<div class="tres-tempos">' + tempos3(e.p) + '</div>', corpo;
  if (e.p === 0) corpo = '<div class="foco"><div class="pergunta vd"><small>BEFORE YOU WATCH</small><h2>A dog in a shelter. What can happen to him in one day?</h2></div>' + fala('va', ['Maybe somebody …', 'I think he …'], ['shelter', 'home', 'garden', 'sofa']) + '<div style="text-align:center"><button type="button" class="btn cheio" data-a="vd-p" data-n="1">Watch</button></div></div>';
  else if (e.p === 1) corpo = '<div class="mesa-video"><div class="video-col">' + iframe(YT, 'A shelter dog', '') + '<small class="cred">A shelter dog called Meaty · 2013</small></div><div class="lado-video"><h5 class="rot-ouve">IF THE VIDEO DOESN’T PLAY, LISTEN TO THE STORY</h5><div class="toca-linha vd">' + tocar('historia.mp3') + '<div>' + transcricao('historia.mp3', TR['historia.mp3']) + '</div></div><div><button type="button" class="btn" data-a="vd-p" data-n="2">After the video</button></div></div></div>';
  else corpo = '<div class="foco"><div class="pergunta vd ja"><small>AFTER</small><h2>Where did his day start, and where did it end? Say three things that happened. What was different after that day?</h2></div>' + fala('vb', ['It started in …', 'After that day, he …'], []) + mostra('vb', 'It started in a shelter and ended on a sofa. Somebody came for him, they drove home, he ran in the garden. After that day, he had a home.') + '<p class="aprova" style="text-align:center">One day, from a cage to a sofa. Now hang it on the line.</p></div>';
  return cab(c) + passos + corpo;
};

R.varal = function (c) {
  var e = S.varal, n = e.n, mesa = ordem(FOTOS.map(function (f, i) { return i; }), 4);
  var soltas = '<div class="mesa-f">' + mesa.map(function (i) { return i < n ? '' : polaroid(FOTOS[i], i, e.erro === i ? 'errada' : '', 'vr'); }).join('') + '</div>';
  return cab(c) + varal(n, 'grande') + (n < 6 ? soltas + (e.erro >= 0 ? '<p class="recusa" style="text-align:center">Not yet. Which of these happened first?</p>' : '<p class="dica-aluno" style="text-align:center">Say the sentence first, then tap the photo.</p>')
    : '<div class="toca-linha vd centro">' + tocar('seis.mp3') + '<div>' + transcricao('seis.mp3', TR['seis.mp3']) + '</div></div><p class="aprova" style="text-align:center">Six photos in order. The day only goes forward now.</p>');
};

R.nos = function (c) {
  var e = S.nos, n = e.n;
  if (n >= NOS.length) return cab(c) + trilha(NOS, n) + '<div class="foco"><div class="pergunta vd"><small>SIX KNOTS</small><h2>Every one had a whole sentence after it.</h2></div></div>';
  var x = NOS[n], ok = e.esc === x.k;
  return cab(c) + trilha(NOS, n) + '<div class="foco"><div class="par-n">' + polaroid(FOTOS[x.a], x.a, 'pendurada') + '<span class="no">' + (ok ? x.k : '?') + '</span>' + polaroid(FOTOS[x.b], x.b, 'pendurada') + '</div>'
    + '<div class="frase-n vd">' + x.f.replace('___', '<span class="gap">' + (ok ? x.k : '___') + '</span>') + '</div><div class="tres-b centro">' + ['before', 'after', 'when'].map(function (o) { return '<button type="button" class="pilula grande' + (e.esc === o ? (ok ? ' certo' : ' errado') : '') + '" data-a="nn" data-v="' + o + '">' + o + '</button>'; }).join('') + '</div>'
    + (e.esc && !ok ? '<p class="recusa" style="text-align:center">Which photo is first on the line?</p>' : '') + (ok ? '<p class="aprova" style="text-align:center">GOT IT. ' + x.w + ' Say the whole sentence.</p><div style="text-align:center"><button type="button" class="btn" data-a="nn-prox">Next knot</button></div>' : '') + '</div>';
};

R.armadilha = function (c) {
  var e = S.arm.esc;
  return cab(c) + '<div class="armad">' + ARMAD.map(function (x, i) {
    var ops = ordem([[x.ok, 1], [x.mau, 0]], i), esc = e[i];
    return '<div class="q-linha vd' + (esc === 1 ? ' feito' : '') + '"><div class="versoes">' + ops.map(function (o) { return '<button type="button" class="versao' + (esc === o[1] ? (o[1] ? ' certo' : ' errado') : '') + '" data-a="am" data-n="' + i + '" data-v="' + o[1] + '">' + o[0] + '</button>'; }).join('') + '</div>' + (esc === 1 ? '<p class="aprova">' + x.w + '</p>' : esc === 0 ? '<p class="recusa">Look after the knot word. Is there a person and a verb? Is there a will?</p>' : '') + '</div>';
  }).join('') + '</div>';
};

R.duas = function (c) {
  return cab(c) + '<div class="duas">' + DUAS.map(function (x, i) { return '<button type="button" class="carta-d vd' + (S.duas[i] ? ' aberta-d' : '') + '" data-a="du" data-n="' + i + '"><span>' + x.a + '</span><span class="ou">or</span><span>' + x.b + '</span>' + (S.duas[i] ? '<small>' + x.w + '</small>' : '<small class="toque">Said both · open the note</small>') + '</button>'; }).join('') + '</div>';
};

R.outro = function (c) {
  return cab(c) + '<div class="duas">' + OUTRO.map(function (x, i) { return '<button type="button" class="carta-d vd' + (S.outro[i] ? ' aberta-d' : '') + '" data-a="ot" data-n="' + i + '"><span>' + x.dado + '</span><span class="ou">→ the other word</span>' + (S.outro[i] ? '<span class="ok">' + x.ok + '</span><small>' + x.w + '</small>' : '<small class="toque">Said it · check</small>') + '</button>'; }).join('') + '</div>';
};

R.dia = function (c) {
  var abertos = Object.keys(S.dia).length;
  return cab(c) + '<div class="cartoes-c tres">' + DIA.map(function (x, i) { return '<button type="button" class="cartao-c' + (S.dia[i] ? ' on' : '') + '" data-a="di" data-n="' + i + '"><small>0' + (i + 1) + '</small><b>' + x.q + '</b>' + (S.dia[i] ? '<em>' + x.ini + '</em>' : '') + '</button>'; }).join('') + '</div>'
    + (abertos >= 3 ? follow('AND AFTER THAT DAY?', 'What is the smallest thing that changed?', ['After that day, I …', 'Before, I …; after, I …'], [], 'dia', mostra('dia', 'After my dog came home, I started walking every morning.', 1)) : '<p class="dica-aluno" style="text-align:center">Open three cards. ' + abertos + ' / 3</p>');
};

R.conta = function (c) { return sequencia(c, CONTA, S.conta, 'conta', 'A whole story, tied with the three knots.'); };

R.saori = function () {
  return '<div class="saori"><div class="saori-foto"><img src="' + img('saori') + '" alt="Saori"></div><p class="saori-pre">This lesson belongs to a dog called Saori.</p><h2>SAORI</h2><p class="saori-datas">2013 — 2026</p>'
    + '<p class="saori-linha">For every animal that made someone a better person.</p><p class="saori-passo">Read the line out loud, once.</p>'
    + (S.saori ? '<p class="saori-feito">Thirteen years of days like that one.</p>' : '<button type="button" class="btn" data-a="sa">Thank you, Saori</button>') + '</div>';
};

R.fim = function (c) {
  var f = S.abre.formas, lembra = FORMAS.filter(function (x) { return f[x.k]; }).map(function (x) { return x.t; });
  return cab(c) + '<div class="fim">' + escritaFinal('fim', (S.txt || {}).fim || '', (S.salvo || {}).fim, 'Before I moved, I lived …\nWhen I arrived, …\nAfter that day, …', 'A day that divides',
    ['Before I ', 'After I ', 'When I ', 'Before going ', 'After that day, '], ['YOUR DAY, AGAIN', lembra.length ? 'In scene I your teacher heard: ' + lembra.join(', ') + '. Now a whole sentence after every knot.' : 'Your own day that divides, in four or five sentences.'])
    + '<div class="lado-fim">' + varal(6, 'mini') + '<div class="grande vd"><span><u>before I went</u> · <u>before going</u> (no to)</span><span><u>after I get</u> home (no will)</span><span><u>when I was</u> a child, we <u>had</u></span></div>'
    + mostra('fim', 'Before I moved to this city, I lived with my parents.<br>When I arrived, I didn’t know anybody.<br>After I found a job, everything changed.', 1)
    + '<p class="hw"><a class="pilula" href="HW/" target="_blank" rel="noopener">Homework for the student →</a></p></div></div>';
};

TOQUES['ab-f'] = function (b, n, v) { S.abre.formas[v] = !S.abre.formas[v]; };
TOQUES['vd-p'] = function (b, n) { S.video.p = n; };
TOQUES.vr = function (b, n) { if (n === S.varal.n) { S.varal.n++; S.varal.erro = -1; } else S.varal.erro = n; };
TOQUES.nn = function (b, n, v) { S.nos.esc = v; };
TOQUES['nn-prox'] = function () { S.nos = { n: S.nos.n + 1, esc: '' }; };
TOQUES.am = function (b, n, v) { S.arm.esc[n] = +v; };
TOQUES.du = function (b, n) { S.duas[n] = 1; };
TOQUES.ot = function (b, n) { S.outro[n] = 1; };
TOQUES.di = function (b, n) { S.dia[n] = 1; };
TOQUES.sa = function () { S.saori = 1; };
