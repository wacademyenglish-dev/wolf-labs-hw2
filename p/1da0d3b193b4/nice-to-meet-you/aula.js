/* ============================================================
   NICE TO MEET YOU · THE WELCOME DESK · LIVE CLASS  05/10/2026
   Main series A1 · hello · I'm / My name's · How do you spell it? · his / her
   O MUNDO: a mesa de boas-vindas de um evento à noite. O CRACHÁ do aluno
   (escuro) se preenche letra a letra quando ele soletra; quatro estranhos
   esperam na porta; cada um que diz hello, nome e nice to meet you ganha
   crachá e entra. As letras moram em famílias de som (A H J K · B C D E…).
   Mantidos: o vídeo (I_tRSrPru94, 0:00–0:52 e 0:56–1:58) e os 13 áudios
   (conferidos no faster-whisper; Sian se diz “Shan”; w-bye diz só Goodbye).
   Fila: FILA-LIVE-386.md · 016.
   ============================================================ */
var YT = 'I_tRSrPru94';
var L = [
  { k: 'capa', est: null, img: 'porta' },
  { k: 'meu', est: 'o', min: 7, img: 'crachas', rot: 'I · Your Badge', t: 'Tim is at the desk. He says hello and asks your name.', p: 'Listen to Tim. Answer him. Then spell your name: your teacher taps the letters.' },
  { k: 'eco', est: 'l', min: 7, img: 'porta', rot: 'II · Six Sounds at the Door', t: 'Hear it, say it three times, then choose.', p: 'Sound first. The words come last.' },
  { k: 'video1', est: 'l', min: 7, img: 'porta', rot: 'III · Four People', t: 'Four people meet for the first time.', p: 'Don’t worry about every word. Catch the names.' },
  { k: 'fila', est: 'o', min: 7, extra: 1, img: 'porta', rot: 'IV · The Queue', t: 'Four guests in the queue. Answer each one.', p: 'Play the guest. Answer with three things: hello, your name, nice to meet you. The guest gets a badge and goes in.' },
  { k: 'soletra', est: 'f', min: 6, img: 'crachas', rot: 'V · Spell It', t: 'The badge printer needs the letters.', p: 'Spell each name out loud. Your teacher taps the letters. Letters that sound alike live in the same family.' },
  { k: 'gx', est: 'f', min: 4, img: 'crachas', rot: 'VI · Find the Rule', t: 'Four badges. His or her?', p: 'Read the four sentences out loud. Look at the lit words. Choose the rule. Then say your own.' },
  { k: 'hisher', est: 'l', min: 7, img: 'crachas', rot: 'VII · His or Her', t: 'Sian has a list, and one name is missing.', p: 'Watch, listen for HIS and HER. Then help Sian: choose, and say the whole sentence.' },
  { k: 'momentos', est: 'o', min: 7, extra: 1, img: 'cafe', rot: 'VIII · Five Moments', t: 'Someone arrives. What do you say?', p: 'Choose. Then say it to your teacher, who plays the person.' },
  { k: 'monta', est: 'f', min: 6, extra: 1, img: 'cafe', rot: 'IX · Build It', t: 'Four sentences for every day.', p: 'Tap the words in order. Then say the sentence out loud.' },
  { k: 'festa', est: 'o', min: 7, extra: 1, img: 'cafe', rot: 'X · The Welcome Party', t: 'Three new guests. You start every conversation.', p: 'Your teacher plays the guest. Say all five things, and the guest joins your circle.' },
  { k: 'gente', est: 'o', min: 7, extra: 1, img: 'cafe', rot: 'XI · Your People', t: 'Now real people from your life.', p: 'Your teacher asks. You answer, with his and her.' },
  { k: 'fim', est: 'w', min: 6, img: 'porta', rot: 'XII · Goodbye', t: 'Tim says goodbye. Write your first conversation.', p: 'Hello, your name, the spelling, a question, nice to meet you. The red line watches the little words. It goes to your My notes.' }
];

var ABC = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
var FAMILIAS = [['A', 'H', 'J', 'K'], ['B', 'C', 'D', 'E', 'G', 'P', 'T', 'V', 'Z'], ['F', 'L', 'M', 'N', 'S', 'X'], ['I', 'Y'], ['O'], ['Q', 'U', 'W'], ['R']];
var TR = {
  'c-tim.mp3': 'Hello. My name’s Tim. What’s your name?', 'c-sian.mp3': 'Hi. I’m Sian. Nice to meet you.',
  'c-georgie.mp3': 'Hey! My name’s Georgie. Great to meet you.', 'c-buli.mp3': 'Hiya. I’m Buli. Lovely to meet you.',
  'c-sian2.mp3': 'Sorry, what’s her name?', 'c-tim2.mp3': 'Bye! Nice to meet you.',
  'c-hisher.mp3': 'His name’s Tim. Her name’s Sian. Her name’s Georgie.',
  'v-dialogue.mp3': '“Hello, what’s your name?” “Hi, I’m Sian. What’s your name?” “My name’s Tim.” “Nice to meet you.” “Nice to meet you, too.” “Hey, my name’s Georgie.” “Hiya, I’m Buli.” “So, his name’s Tim, and her name’s Sian.” “And what’s her name?” “Her name’s Georgie.” “Bye, everyone.” “Goodbye.” “Bye.”'
};

var ECO = [
  { au: 'w-hello.mp3', o: ['Hello', 'Yellow', 'Hollow'], uso: 'Hello. My name’s …' },
  { au: 'w-hi.mp3', o: ['High', 'Hi', 'He'], uso: 'Hi. I’m …' },
  { au: 'w-hey.mp3', o: ['Hay', 'Hair', 'Hey'], uso: 'Hey! I’m …' },
  { au: 'w-hiya.mp3', o: ['Hiya', 'Higher', 'Here'], uso: 'Hiya. I’m …' },
  { au: 'w-nice.mp3', o: ['Nice to eat you', 'Nice to meet you', 'Ice to meet you'], uso: 'Nice to meet you, too.' },
  { au: 'w-bye.mp3', o: ['Good boy', 'Go by', 'Goodbye'], uso: 'Goodbye! See you.' }
];
var CERTO_ECO = ['Hello', 'Hi', 'Hey', 'Hiya', 'Nice to meet you', 'Goodbye'];

var CONV = [
  { n: 'TIM', cor: '#E07A2F', au: 'c-tim.mp3' }, { n: 'SIAN', cor: '#C7475B', au: 'c-sian.mp3' },
  { n: 'GEORGIE', cor: '#2E8F6A', au: 'c-georgie.mp3' }, { n: 'BULI', cor: '#2F6FDB', au: 'c-buli.mp3' }
];
var PARTES = [{ k: 'oi', t: 'HELLO / HI' }, { k: 'nome', t: 'I’M … / MY NAME’S …' }, { k: 'prazer', t: 'NICE TO MEET YOU' }];

var NOMES = ['TIM', 'SIAN', 'BULI', 'GEORGIE', 'LONDON'];

var LISTA = [
  { n: 'Tim', g: 'man', a: 'His' }, { n: 'Sian', g: 'woman', a: 'Her' }, { n: 'Georgie', g: 'woman', a: 'Her' }, { n: 'Buli', g: 'man', a: 'His' },
  { n: 'Omar', g: 'man', a: 'His' }, { n: 'Mei', g: 'woman', a: 'Her' }, { n: 'Lucas', g: 'man', a: 'His' }, { n: 'Nadia', g: 'woman', a: 'Her' }
];

var MOMENTOS = [
  { hora: '8:00 AM', q: 'You arrive at work. Your boss is there.', o: ['Hiya!', 'Hello. Good morning.', 'Hey!'], a: 1, por: 'Hello is safe with everybody. Hey is for friends.' },
  { hora: '1:00 PM', q: 'A friend calls you.', o: ['Hey! Hi!', 'Goodbye, my friend.', 'Good night.'], a: 0, por: 'With a friend, short is normal.' },
  { hora: '3:00 PM', q: 'A colleague you see every day walks by.', o: ['Hi!', 'Nice to meet you.', 'Goodbye.'], a: 0, por: 'Nice to meet you is only for the first time.' },
  { hora: '7:00 PM', q: 'You meet your friend’s mother for the first time.', o: ['Hey.', 'Hello. Nice to meet you.', 'Hiya, Mom.'], a: 1, por: 'First time: Nice to meet you.' },
  { hora: '10:00 PM', q: 'The party is over. Say goodbye.', o: ['Bye! See you!', 'Hello!', 'Nice to meet you.'], a: 0, por: 'Bye for friends. Goodbye is a little more formal.' }
];

var MONTA = [
  { pede: 'Ask somebody their name.', w: ['What’s', 'your', 'name', '?'] },
  { pede: 'Answer with your name.', w: ['My', 'name’s', '__NOME__', '.'] },
  { pede: 'Ask how to spell it.', w: ['How', 'do', 'you', 'spell', 'it', '?'] },
  { pede: 'Ask about a woman.', w: ['What’s', 'her', 'name', '?'] }
];
var NAO_MONTA = ['is', 'you', 'his'];

var FESTA = [
  { n: 'PRIYA', info: 'from Mumbai · P-R-I-Y-A', cor: '#C7475B' },
  { n: 'JOAQUÍN', info: 'from Madrid · J-O-A-Q-U-I-N', cor: '#2E8F6A' },
  { n: 'KOFI', info: 'from Accra · K-O-F-I', cor: '#E07A2F' }
];
var PASSOS = [{ k: 'oi', t: 'HELLO / HI' }, { k: 'nome', t: 'MY NAME’S …' }, { k: 'pergunta', t: 'WHAT’S YOUR NAME?' }, { k: 'soletra', t: 'HOW DO YOU SPELL IT?' }, { k: 'prazer', t: 'NICE TO MEET YOU' }];

var GENTE = [
  { q: 'What’s your best friend’s name? How do you spell it?', fup: 'Say it again with his or her: His name’s … / Her name’s …', st: ['My best friend’s name is …', 'It’s spelled …'], ex: 'My best friend’s name is Bruna. B-R-U-N-A.' },
  { q: 'Who is in your family? Say two names.', fup: 'And one more person?', st: ['My mother’s name is …', 'His name’s … / Her name’s …'], ex: 'My father’s name is Paulo. My sister’s name is Lia.' },
  { q: 'What’s the name of your city? Spell it.', fup: 'Say it slowly, letter by letter.', st: ['My city is …', 'It’s spelled …'], ex: 'My city is Recife. R-E-C-I-F-E.' },
  { q: 'Your turn. Ask me: What’s your name? How do you spell it?', fup: 'Now ask about someone in my family.', st: ['What’s your name?', 'How do you spell it?'], ex: 'What’s your name? How do you spell it?' }
];

var S = { i: 0, faixa: 1, fala: {}, resp: {}, armas: {},
  meu: { letras: '', impresso: 0 }, eco: { n: 0, vezes: 0, esc: '' }, video1: { p: 0, ouviu: {} },
  fila: { n: 0, partes: {}, erro: 0 }, sol: { n: 0, pos: 0, err: '' }, hisher: { esc: {}, viu: 0 },
  mom: { n: 0, esc: -1 }, monta: { n: 0, usados: [], err: -1 }, festa: { n: 0, partes: {} }, gente: { n: 0, foi: {} } };

function nomeAluno() { return S.meu.impresso && S.meu.letras ? S.meu.letras.charAt(0) + S.meu.letras.slice(1).toLowerCase() : 'Ana'; }
function cracha(nome, cor, extra) {
  return '<div class="cracha' + (extra || '') + '" style="--cc:' + (cor || 'var(--ac)') + '"><span class="furo"></span><small>HELLO · MY NAME IS</small><b>' + (nome || '<i class="cursor">_</i>') + '</b><span class="faixa-c"></span></div>';
}

var R = {};
R.capa = function () {
  return '<div class="capa"><div class="lado-a"><span class="kick">MAIN SERIES · A1</span><h1>Nice to <b>Meet You</b></h1>'
    + '<p class="sub">Your name in English, on a badge. Then four strangers at the door.</p>'
    + '<div class="chipsx"><span class="pilula">Hello · Hi · Hey</span><span class="pilula">How do you spell it?</span><span class="pilula">his · her</span><span class="pilula">Live Class · W·O·L·F</span></div>'
    + '<button type="button" class="btn cheio" data-a="ir" data-n="1">Open the door</button>' + faixaLive() + '</div>'
    + '<div class="foto"><img src="' + img('porta') + '" alt="An open double door with a welcome desk and name badges">' + cracha('YOU', '#e6a23c', ' capa-c') + '</div></div>';
};

R.meu = function (c) {
  var m = S.meu, ouviu = (S.ouviu || {})['c-tim.mp3'];
  var teclado = '<div class="teclado so-prof">' + ABC.map(function (l) { return '<button type="button" class="tecla" data-a="mt" data-v="' + l + '">' + l + '</button>'; }).join('')
    + '<button type="button" class="tecla larga" data-a="mt-apaga">⌫</button></div>';
  return cab(c) + '<div class="mesa-meu"><div class="lado-tim"><div class="toca-linha vd"><span class="av" style="--cc:#E07A2F">T</span>' + tocar('c-tim.mp3') + '<div>' + transcricao('c-tim.mp3', TR['c-tim.mp3']) + '</div></div>'
    + (ouviu ? fala('meu', ['I’m …', 'My name’s …'], []) : '') + '<div class="pergunta vd ja"><small>THEN TIM ASKS</small><h2>How do you spell it?</h2></div></div>'
    + '<div class="lado-cracha">' + cracha(m.letras, '#e6a23c', m.impresso ? ' impresso' : '') + (m.impresso ? '<p class="aprova">Printed. It comes back at the end.</p>' : teclado + '<button type="button" class="btn cheio so-prof" data-a="mt-imprime"' + (m.letras ? '' : ' disabled') + '>Print the badge</button><p class="dica-aluno">Spell your name out loud, letter by letter.</p>') + '</div></div>';
};

R.eco = function (c) {
  var e = S.eco, n = e.n, fim = n >= ECO.length, x = ECO[Math.min(n, ECO.length - 1)];
  if (fim) return cab(c) + trilha(ECO, n) + '<div class="portas">' + CERTO_ECO.map(function (w) { return '<span>' + w + '</span>'; }).join('') + '</div><div class="foco"><div class="pergunta vd"><small>SIX SOUNDS</small><h2>Four ways to say hello, one way to meet, one way to leave.</h2></div>'
    + follow('BOSS OR FRIEND?', 'Which hello is for a boss? Which is for a friend?', ['Hello is for …', 'Hey is for …'], [], 'ecof') + '</div>';
  var ouviu = (S.ouviu || {})[x.au], ok = e.esc === CERTO_ECO[n];
  return cab(c) + trilha(ECO, n) + '<div class="foco"><div class="toca-linha vd centro">' + tocar(x.au) + '<span>' + (ouviu ? 'Say it three times.' : 'Play it. Ears only.') + '</span></div>'
    + '<div class="vezes">' + [1, 2, 3].map(function (k) { return '<button type="button" class="vez' + (e.vezes >= k ? ' on' : '') + '" data-a="ec-vez" data-n="' + k + '">' + k + '</button>'; }).join('') + '</div>'
    + (e.vezes >= 3 || ok ? '<div class="tres-b centro">' + x.o.map(function (o) { return '<button type="button" class="pilula grande' + (e.esc === o ? (ok ? ' certo' : ' errado') : '') + '" data-a="ec" data-v="' + h(o) + '">' + o + '</button>'; }).join('') + '</div>' : '<p class="dica-aluno" style="text-align:center">After three times, the words appear.</p>')
    + (e.esc && !ok ? '<p class="recusa" style="text-align:center">Listen again. That one sounds close, but it is a different word.</p>' : '')
    + (ok ? '<div class="pergunta vd ja"><small>NOW USE IT</small><h2>' + x.uso + '</h2></div><div style="text-align:center"><button type="button" class="btn" data-a="ec-prox">Next sound</button></div>' : '') + '</div>';
};

R.video1 = function (c) {
  var e = S.video1, pal = ['Tim', 'Sian', 'Georgie', 'Buli', 'Hello', 'Nice to meet you'], tudo = pal.every(function (w) { return e.ouviu[w]; }), corpo;
  if (e.p === 0) corpo = '<div class="foco"><div class="pergunta vd"><small>BEFORE YOU WATCH</small><h2>How do you say hello to a person you don’t know? Say it.</h2></div>' + fala('v1a', ['Hello. I’m …', 'Hi. My name’s …'], []) + '<div style="text-align:center"><button type="button" class="btn cheio" data-a="vid-p" data-n="1">Watch</button></div></div>';
  else if (e.p === 1) corpo = '<div class="mesa-video"><div class="video-col">' + iframe(YT, 'Four people say hello', '&start=0&end=52') + '<small class="cred">Video: from 0:00 to 0:52</small></div><div class="lado-video"><h5>TAP WHEN YOU HEAR IT</h5><div class="ouvidos">'
    + pal.map(function (w) { return '<button type="button" class="ouvido' + (e.ouviu[w] ? ' on' : '') + '" data-a="vid-w" data-v="' + h(w) + '">' + w + '</button>'; }).join('') + '</div>'
    + (tudo ? '<p class="aprova">GOT IT. Four names, and the hello.</p>' : '<p class="dica-aluno">A name is a word. Catch the names.</p>') + '<div><button type="button" class="btn" data-a="vid-p" data-n="2">After the video</button></div></div></div>';
  else corpo = '<div class="foco"><div class="pergunta vd ja"><small>AFTER</small><h2>How many people say a name? Say the names.</h2></div>' + fala('v1b', ['Tim, …', 'The first name is …'], [])
    + '<div class="post-trans vd"><small>THE SAME CONVERSATION, SLOWER · LISTEN FIRST</small><div class="toca-linha">' + tocar('v-dialogue.mp3') + '</div>' + transcricao('v-dialogue.mp3', TR['v-dialogue.mp3']) + '</div></div>';
  return cab(c) + '<div class="tres-tempos">' + tempos3(e.p, 'vid-p') + '</div>' + corpo;
};

R.fila = function (c) {
  var f = S.fila, n = f.n, fim = n >= CONV.length, x = CONV[Math.min(n, CONV.length - 1)], pt = f.partes[n] || {};
  var porta = '<div class="porta-fila">' + CONV.map(function (g, i) { return '<div class="na-fila' + (i < n ? ' entrou' : i === n ? ' vez' : '') + '">' + (i < n ? cracha(g.n, g.cor, ' mini') : '<span class="av grande" style="--cc:' + g.cor + '">' + g.n.charAt(0) + '</span><small>' + (i === n ? 'next' : 'waiting') + '</small>') + '</div>'; }).join('') + '</div>';
  if (fim) return cab(c) + porta + '<p class="aprova" style="text-align:center">Four guests inside. Every one of them knows your name.</p>';
  var tudo = PARTES.every(function (p) { return pt[p.k]; });
  return cab(c) + porta + '<div class="mesa-fila"><div class="toca-linha vd"><span class="av" style="--cc:' + x.cor + '">' + x.n.charAt(0) + '</span>' + tocar(x.au) + '<div>' + transcricao(x.au, TR[x.au]) + '</div></div>'
    + '<div class="partes"><h5>WHAT YOU HEAR</h5>' + PARTES.map(function (p) { return '<button type="button" class="chip frase' + (pt[p.k] ? ' on' : '') + '" data-a="fl-p" data-v="' + p.k + '">' + p.t + '</button>'; }).join('')
    + '<button type="button" class="chip frase erro-ouvido' + (f.erro ? ' on' : '') + '" data-a="fl-e">MISTAKE HEARD: MY NAME’S IS …</button></div>'
    + (f.erro ? '<p class="recusa">name’s already has is inside: My name’s Ana, or My name is Ana.</p>' : '')
    + '<div>' + (tudo ? '<button type="button" class="btn cheio" data-a="fl-prox">Badge for ' + x.n + ' · next guest</button>' : '<p class="dica-aluno">Hello, your name, nice to meet you. All three open the door.</p>') + '</div></div>';
};

R.soletra = function (c) {
  var s = S.sol, n = s.n, fim = n >= NOMES.length, alvo = NOMES[Math.min(n, NOMES.length - 1)];
  var fam = '<div class="familias">' + FAMILIAS.map(function (f) { return '<div class="familia">' + f.map(function (l) { return '<button type="button" class="tecla' + (s.err === l ? ' errada' : '') + '" data-a="sl" data-v="' + l + '">' + l + '</button>'; }).join('') + '</div>'; }).join('') + '</div>';
  if (fim) return cab(c) + trilha(NOMES, n) + '<div class="crachas-f">' + NOMES.map(function (x) { return cracha(x, '#e6a23c', ' mini'); }).join('') + '</div><p class="aprova" style="text-align:center">Five names spelled. G and J, E and I: that’s where English tricks you.</p>' + fam;
  return cab(c) + trilha(NOMES, n) + '<div class="mesa-sol"><div><div class="pergunta vd"><small>HOW DO YOU SPELL IT?</small><h2>' + alvo.charAt(0) + alvo.slice(1).toLowerCase() + '</h2></div>'
    + cracha(alvo.slice(0, s.pos) + (s.pos < alvo.length ? '<i class="cursor">_</i>' : ''), '#e6a23c', s.pos >= alvo.length ? ' impresso' : '') + '</div><div>' + fam
    + (s.err ? '<p class="recusa">Not ' + s.err + '. Find the family: which letters sound like it?</p>' : '')
    + (s.pos >= alvo.length ? '<div style="text-align:center"><button type="button" class="btn" data-a="sl-prox">Next name</button></div>' : '<p class="dica-aluno">Spell it out loud. Your teacher taps.</p>') + '</div></div>';
};

R.hisher = function (c) {
  var e = S.hisher, tudo = LISTA.every(function (x, i) { return e.esc[i] === x.a; });
  var topo = e.viu ? '' : '<div class="mesa-video"><div class="video-col">' + iframe(YT, 'His name and her name', '&start=56&end=118') + '<small class="cred">Video: from 0:56 to 1:58 · listen for HIS and HER</small></div><div class="lado-video">'
    + '<div class="toca-linha vd">' + tocar('c-hisher.mp3') + '<div>' + transcricao('c-hisher.mp3', TR['c-hisher.mp3']) + '</div></div><button type="button" class="btn cheio" data-a="hs-viu">Open Sian’s list</button></div></div>';
  if (!e.viu) return cab(c) + topo;
  return cab(c) + '<div class="toca-linha vd centro"><span class="av" style="--cc:#C7475B">S</span>' + tocar('c-sian2.mp3') + '<div>' + transcricao('c-sian2.mp3', TR['c-sian2.mp3']) + '</div></div>'
    + '<div class="lista-g">' + LISTA.map(function (x, i) {
      var esc = e.esc[i], ok = esc === x.a;
      return '<div class="linha-g vd' + (ok ? ' feita' : '') + '"><span class="tag-g">' + x.g + '</span><p>' + (ok ? '<b>' + x.a + '</b> name’s ' + x.n + '.' : '<span class="vaga">___</span> name’s ' + x.n + '.') + '</p>'
        + (ok ? '' : '<div class="tres-b">' + ['His', 'Her'].map(function (o) { return '<button type="button" class="pilula' + (esc === o ? ' errado' : '') + '" data-a="hs" data-n="' + i + '" data-v="' + o + '">' + o + '</button>'; }).join('') + '</div>') + '</div>';
    }).join('') + '</div>' + (tudo ? '<p class="aprova" style="text-align:center">His for a man, her for a woman, every time.</p>' : '');
};

R.momentos = function (c) {
  var m = S.mom, n = m.n, fim = n >= MOMENTOS.length, x = MOMENTOS[Math.min(n, MOMENTOS.length - 1)];
  if (fim) return cab(c) + trilha(MOMENTOS, n) + '<div class="foco">' + follow('YOUR WEEK', 'A sixth moment from your real week: who, and what do you say?', ['On Monday I see …', 'I say …'], [], 'mm6') + '</div>';
  var ok = m.esc === x.a;
  return cab(c) + trilha(MOMENTOS, n) + '<div class="mesa-mom"><div class="relogio vd"><b>' + x.hora + '</b></div><div class="lado-mom"><div class="pergunta vd"><small>THE MOMENT</small><h2>' + x.q + '</h2></div>'
    + '<div class="tres-b">' + x.o.map(function (o, i) { return '<button type="button" class="pilula grande' + (m.esc === i ? (ok ? ' certo' : ' errado') : '') + '" data-a="mm" data-n="' + i + '">' + o + '</button>'; }).join('') + '</div>'
    + (m.esc >= 0 && !ok ? '<p class="recusa">Think: is it the first time? A friend, or a boss?</p>' : '')
    + (ok ? '<p class="aprova">' + x.por + ' Now say it to your teacher.</p><div><button type="button" class="btn" data-a="mm-prox">Next moment</button></div>' : '') + '</div></div>';
};

R.monta = function (c) {
  var m = S.monta, n = m.n, fim = n >= MONTA.length;
  if (fim) return cab(c) + trilha(MONTA, n) + '<div class="foco"><div class="pergunta vd"><small>FOUR SENTENCES</small><h2>Two questions and two answers. That is a whole first conversation.</h2></div></div>';
  var x = MONTA[n], alvo = alvoMonta(n), pecas = pecasMonta(n), feitas = m.usados.map(function (i) { return pecas[i]; });
  var ok = feitas.length === alvo.length;
  return cab(c) + trilha(MONTA, n) + '<div class="foco"><div class="pergunta vd"><small>' + x.pede.toUpperCase() + '</small><h2 class="montada">' + (feitas.length ? feitas.join(' ').replace(/ ([?.])/g, '$1') : '<span class="vaga">tap the words</span>') + '</h2></div>'
    + (ok ? '<p class="aprova" style="text-align:center">Now say it out loud.</p><div style="text-align:center"><button type="button" class="btn" data-a="mo-prox">Next sentence</button></div>'
      : '<div class="pecas">' + pecas.map(function (w, i) { var usado = m.usados.indexOf(i) >= 0; return '<button type="button" class="peca' + (usado ? ' usada' : '') + (m.err === i ? ' errado' : '') + '" data-a="mo" data-n="' + i + '"' + (usado ? ' disabled' : '') + '>' + w + '</button>'; }).join('') + '</div>'
      + (m.err >= 0 ? '<p class="recusa" style="text-align:center">Not that one yet. Read what you have, out loud.</p>' : '') + '<div style="text-align:center"><button type="button" class="pilula" data-a="mo-zera">Start again</button></div>') + '</div>';
};
function alvoMonta(n) { return MONTA[n].w.map(function (w) { return w === '__NOME__' ? nomeAluno() : w; }); }
function pecasMonta(n) { return ordem(alvoMonta(n).concat(NAO_MONTA.slice(0, 1 + n % 2)), n + 2); }

R.festa = function (c) {
  var f = S.festa, n = f.n, fim = n >= FESTA.length, pt = f.partes[n] || {};
  var circulo = '<div class="circulo">' + cracha(nomeAluno().toUpperCase(), '#e6a23c', ' mini') + FESTA.map(function (g, i) { return i < n ? cracha(g.n, g.cor, ' mini') : ''; }).join('') + '</div>';
  if (fim) return cab(c) + circulo + '<div class="foco">' + follow('THE PARTY IS OVER', 'Say goodbye to all three, and tell me their names.', ['Bye, Priya!', 'His name’s …', 'Her name’s …'], [], 'fsf', mostra('fsf', 'Bye, Priya! Bye, Kofi! Her name’s Priya. His name’s Kofi. His name’s Joaquín.')) + '</div>';
  var x = FESTA[n], tudo = PASSOS.every(function (p) { return pt[p.k]; });
  return cab(c) + trilha(FESTA, n) + '<div class="mesa-festa"><div class="convidado vd" style="--cc:' + x.cor + '"><span class="av grande" style="--cc:' + x.cor + '">' + x.n.charAt(0) + '</span><b>' + x.n + '</b><small class="so-prof">' + x.info + '</small><p class="dica-aluno">Start the conversation. Don’t wait.</p></div>'
    + '<div class="lado-festa"><div class="passos-f">' + PASSOS.map(function (p, i) { return '<button type="button" class="passo-f' + (pt[p.k] ? ' on' : '') + '" data-a="fs-p" data-v="' + p.k + '"><span>' + (i + 1) + '</span>' + p.t + '</button>'; }).join('') + '</div>'
    + (tudo ? '<button type="button" class="btn cheio" data-a="fs-prox">' + x.n + ' joins your circle</button>' : '') + circulo + '</div></div>';
};

R.gente = function (c) { return sequencia(c, GENTE, S.gente, 'gente', 'Real names, real people, in English.'); };

R.fim = function (c) {
  var nome = nomeAluno();
  return cab(c) + '<div class="fim">' + escritaFinal('fim', (S.txt || {}).fim || '', (S.salvo || {}).fim, 'Hello! My name’s ' + nome + '. …', 'Your first conversation',
    ['Hello! ', 'My name’s ', 'What’s your name? ', 'How do you spell it? ', 'Nice to meet you. ', 'Her name’s ', 'His name’s '], ['FIRST CONVERSATION', 'Someone is at the door. Write: hello, your name and its spelling, a question, nice to meet you.'])
    + '<div class="lado-fim"><div class="toca-linha vd"><span class="av" style="--cc:#E07A2F">T</span>' + tocar('c-tim2.mp3') + '<div>' + transcricao('c-tim2.mp3', TR['c-tim2.mp3']) + '</div></div>' + cracha(S.meu.impresso ? S.meu.letras : 'YOU', '#e6a23c', ' impresso')
    + mostra('fim', 'Hello! My name’s ' + nome + '. It’s spelled ' + nome.toUpperCase().split('').join('-') + '. What’s your name? Nice to meet you!', 1)
    + '<p class="hw"><a class="pilula" href="HW/" target="_blank" rel="noopener">Homework for the student →</a></p></div></div>';
};

TOQUES.mt = function (b, n, v) { if (S.meu.letras.length < 12) S.meu.letras += v; };
TOQUES['mt-apaga'] = function () { S.meu.letras = S.meu.letras.slice(0, -1); };
TOQUES['mt-imprime'] = function () { if (!S.meu.letras) return false; S.meu.impresso = 1; };
TOQUES['ec-vez'] = function (b, n) { S.eco.vezes = n; };
TOQUES.ec = function (b, n, v) { S.eco.esc = v; };
TOQUES['ec-prox'] = function () { S.eco = { n: S.eco.n + 1, vezes: 0, esc: '' }; };
TOQUES['vid-p'] = function (b, n) { S.video1.p = n; };
TOQUES['vid-w'] = function (b, n, v) { S.video1.ouviu[v] = !S.video1.ouviu[v]; };
TOQUES['fl-p'] = function (b, n, v) { var f = S.fila; f.partes[f.n] = f.partes[f.n] || {}; f.partes[f.n][v] = !f.partes[f.n][v]; };
TOQUES['fl-e'] = function () { S.fila.erro = !S.fila.erro; };
TOQUES['fl-prox'] = function () { S.fila.n++; S.fila.erro = 0; };
TOQUES.sl = function (b, n, v) { var s = S.sol, alvo = NOMES[s.n]; if (!alvo || s.pos >= alvo.length) return false; if (alvo.charAt(s.pos) === v) { s.pos++; s.err = ''; } else s.err = v; };
TOQUES['sl-prox'] = function () { S.sol = { n: S.sol.n + 1, pos: 0, err: '' }; };
TOQUES['hs-viu'] = function () { S.hisher.viu = 1; };
TOQUES.hs = function (b, n, v) { S.hisher.esc[n] = v; };
TOQUES.mm = function (b, n) { S.mom.esc = n; };
TOQUES['mm-prox'] = function () { S.mom = { n: S.mom.n + 1, esc: -1 }; };
TOQUES.mo = function (b, n) {
  var m = S.monta; if (m.n >= MONTA.length) return false;
  var alvo = alvoMonta(m.n), pecas = pecasMonta(m.n);
  if (pecas[n] === alvo[m.usados.length]) { m.usados.push(n); m.err = -1; } else m.err = n;
};
TOQUES['mo-zera'] = function () { S.monta.usados = []; S.monta.err = -1; };
TOQUES['mo-prox'] = function () { S.monta = { n: S.monta.n + 1, usados: [], err: -1 }; };
TOQUES['fs-p'] = function (b, n, v) { var f = S.festa; f.partes[f.n] = f.partes[f.n] || {}; f.partes[f.n][v] = !f.partes[f.n][v]; };
TOQUES['fs-prox'] = function () { S.festa.n++; };

/* 10/11/2026 · AS EXPLICAÇÕES (kit/formatos3.js) · G10 · uma cena curta nova (k: gx) antes de hisher.
   Explicação 100% em inglês: see → notice → use (o aluno fala ou escreve uma frase dele no fim). */
var GX_EXPLICA = { formato: 'achaRegra', titulo: 'Four badges. Find the rule yourself.',
  exemplos: [
    'Tim is a man. <b>His</b> name is Tim.',
    'Sian is a woman. <b>Her</b> name is Sian.',
    'Paul is at the desk. <b>His</b> badge is blue.',
    'Ana is at the door. <b>Her</b> badge is green.'
  ],
  pergunta: 'We say his or her. How do we choose?',
  opcoes: ['his = a man, her = a woman', 'his = a woman, her = a man', 'his = my, her = your'], c: 0,
  nao: 'Not that one. Look at the person in each sentence again: Tim, Sian, Paul, Ana.',
  regra: '<b>His</b> = the person is a man. <b>Her</b> = the person is a woman. His name is Tim. Her name is Sian.',
  uso: { p: 'Your turn. Say the name of a man and a woman you know. Use his and her.', molde: ['His name is …', 'Her name is …'], ex: 'His name is Pedro. Her name is Clara.' } };
R.gx = function (c) { return cab(c) + FM.ex('gx_regra', GX_EXPLICA); };
