/* ============================================================
   THREE PEOPLE, FIVE DAYS · THE DEPARTURES BOARD · LIVE CLASS  05/10/2026
   Main series A1 · I'm + name / age · the tens to 100 (thirteen × thirty) ·
   the days in order · prices (How much is it? It's thirty pounds.)
   O MUNDO: três viajantes, cem libras, cinco dias, Londres a Edimburgo.
   A cara: um PAINEL DE PARTIDAS escuro de estação, com plaquinhas que
   viram (split-flap, CSS). Cada número, dia ou preço dito certo vira a
   plaquinha. O vídeo (O43nLSRMqHU) ficou, em três trechos.
   ÁUDIOS: faster-whisper confere com a transcrição velha (todas certas).
   A cena da rota (I'm from) saiu: o alvo é da Two Pins. Fotos com gente
   (Fran, Bob, Paula, as mãos com o dinheiro) não entram: as três
   cidades fazem as vezes dos rostos. Fila: FILA-LIVE-386.md · 033.
   ============================================================ */
var YT = 'O43nLSRMqHU';
var L = [
  { k: 'capa', est: null, img: 'york' },
  { k: 'abre', est: 'o', min: 7, img: 'york', rot: 'I · Your Ticket', t: 'Before the three travelers, your own ticket.', p: 'Pick a card. Nobody is corrected here. Your teacher taps what you used.' },
  { k: 'corrida', est: 'l', min: 7, img: 'york', rot: 'II · The Race', t: 'Three people, one hundred pounds, five days.', p: 'Five words matter. The rest can pass.' },
  { k: 'ola', est: 'l', min: 7, img: 'cambridge', rot: 'III · Three Travelers', t: 'Three travelers say hello.', p: 'Listen first. Say it three times. Then see the words.' },
  { k: 'dezenas', est: 'f', min: 6, img: 'york', rot: 'IV · The Tens', t: 'The board shows a number. Say it, then tap it.', p: 'Careful: thirTEEN and THIRty are two different numbers.' },
  { k: 'dias', est: 'f', min: 6, img: 'rochester', rot: 'V · Seven Days', t: 'Seven days on the board. Put them in order, out loud.', p: 'Say the next day first. Then tap it.' },
  { k: 'dinheiro', est: 'l', min: 7, img: 'york', rot: 'VI · The Money', t: 'Before they leave, they get three things.', p: 'Count on your fingers.' },
  { k: 'preco', est: 'f', min: 6, extra: 1, img: 'cambridge', rot: 'VII · One Hundred Pounds', t: 'Every price costs money, if you say it right.', p: 'Ask: How much is it? Say the price, then tap it.' },
  { k: 'quem', est: 'l', min: 7, extra: 1, img: 'cambridge', rot: 'VIII · Who Is Who', t: 'Each traveler says it all at once. Fill their card.', p: 'Play the card. Tap the name and the age you heard. If somebody never says it, tap ?.' },
  { k: 'viagem', est: 'o', min: 7, extra: 1, img: 'rochester', rot: 'IX · Plan the Trip', t: 'Your trip. Five days, one hundred pounds.', p: 'Each day: the day, the thing and the price. Your teacher is the travel agent.' },
  { k: 'voce', est: 'o', min: 7, extra: 1, img: 'cambridge', rot: 'X · About You', t: 'Your numbers, your days.', p: 'Four questions. The last one, you ask.' },
  { k: 'fim', est: 'w', min: 6, img: 'york', rot: 'XI · Arrival', t: 'Write your own ticket.', p: 'Your name, your age, your week and a price. The red line watches the numbers. It goes to your My notes.' }
];

var TR = {
  'a-hi.mp3': 'Hi!', 'a-hello.mp3': 'Hello!', 'a-fran.mp3': 'I’m Fran.', 'a-bob.mp3': 'I’m Bob.', 'a-paula.mp3': 'I’m Paula.', 'a-25.mp3': 'I’m 25.', 'a-20.mp3': 'I’m 20.',
  'a-fran-all.mp3': 'Hi, I’m Fran. I’m 25 and I’m from Cambridge.',
  'a-bob-all.mp3': 'Hello, I’m Bob. I’m 20 and I’m from York.',
  'a-paula-all.mp3': 'Hi, I’m Paula and I’m from Rochester.'
};

var ABRE = [
  { k: 'NAME', q: 'What’s your name?', fup: 'Is it a long name or a short name?', st: ['I’m …', 'My name is …'], ex: 'I’m Carla. My name is Carla.' },
  { k: 'AGE', q: 'How old are you?', fup: 'And your best friend?', st: ['I’m … (a number)'], ex: 'I’m thirty-two.' },
  { k: 'DAY', q: 'What’s your favorite day of the week? Why?', fup: 'And a bad day?', st: ['My favorite day is …', '… because …'], ex: 'My favorite day is Saturday, because I sleep late.' }
];
var FORMAS = [{ k: 'im', t: 'I’M + AGE' }, { k: 'dia', t: 'A DAY' }, { k: 'have', t: 'I HAVE 25', erro: 1 }, { k: 'teen', t: 'THIRTEEN × THIRTY', erro: 1 }];

var VIDEOS = {
  corrida: { ini: 0, fim: 36, cred: 'Video: from 0:00 to 0:36', au: 'v-open.mp3', antes: 'Where does the race go? How many people? How much money? Guess before you watch.', pal: ['London', 'Edinburgh', 'three', 'one hundred', 'five'], trans: 'London to Edinburgh. Three people, 100 pounds, five days. This is the London to Edinburgh Challenge.', q: 'Say the five words back, without looking. Then one sentence.', st: ['London to Edinburgh …', '… people, … pounds, … days.'], ex: 'London to Edinburgh: three people, one hundred pounds, five days.', fecho: 'Three numbers already: three, one hundred, five.' },
  dinheiro: { ini: 104, fim: 170, cred: 'Video: from 1:44 to 2:50', au: 'v-money.mp3', antes: 'A trip for five days. What three things do you need?', pal: ['phones', 'money', 'maps', 'one hundred', 'five days'], trans: 'Welcome to London and the BBC. Here are your phones. Here is your money. 100 pounds. 10, 20, 30, 40, 50, 60, 70, 80, 90, 100. And here are your maps. You have 100 pounds. You have five days. Good luck.', q: 'What three things do they get? Count the money with the video: ten, twenty …', st: ['They get …', 'ten, twenty, thirty …'], ex: 'They get phones, maps and one hundred pounds. Ten, twenty, thirty … one hundred.', fecho: 'The tens from scene IV, counted on camera.' }
};

var OLA = ['a-hi.mp3', 'a-hello.mp3', 'a-fran.mp3', 'a-bob.mp3', 'a-paula.mp3', 'a-25.mp3', 'a-20.mp3'];

var DEZ = [
  { n: '10', ok: 'ten', o: ['ten', 'twelve', 'twenty'] },
  { n: '20', ok: 'twenty', o: ['twenty', 'twelve', 'two'] },
  { n: '30', ok: 'thirty', o: ['thirty', 'thirteen', 'three'] },
  { n: '13', ok: 'thirteen', o: ['thirteen', 'thirty', 'three'] },
  { n: '40', ok: 'forty', o: ['forty', 'fourteen', 'four'] },
  { n: '50', ok: 'fifty', o: ['fifty', 'fifteen', 'five'] },
  { n: '15', ok: 'fifteen', o: ['fifteen', 'fifty', 'five'] },
  { n: '70', ok: 'seventy', o: ['seventy', 'seventeen', 'seven'] },
  { n: '90', ok: 'ninety', o: ['ninety', 'nineteen', 'nine'] },
  { n: '100', ok: 'one hundred', o: ['one hundred', 'ten', 'one thousand'] }
];

var DIAS = ['MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY', 'SUNDAY'];

var PRECO = [
  { coisa: 'A TRAIN TICKET', ic: '🚆', p: 30, ok: 'thirty pounds', o: ['thirty pounds', 'thirteen pounds', 'thirty pound'] },
  { coisa: 'A BED FOR ONE NIGHT', ic: '🛏️', p: 40, ok: 'forty pounds', o: ['forty pounds', 'fourteen pounds', 'four pounds'] },
  { coisa: 'A SANDWICH', ic: '🥪', p: 5, ok: 'five pounds', o: ['five pounds', 'fifty pounds', 'five pound'] },
  { coisa: 'A MUSEUM TICKET', ic: '🏛️', p: 15, ok: 'fifteen pounds', o: ['fifteen pounds', 'fifty pounds', 'fifteen pound'] },
  { coisa: 'A BUS TICKET', ic: '🚌', p: 10, ok: 'ten pounds', o: ['ten pounds', 'twenty pounds', 'ten pound'] }
];
var NAO_PR = { teen: 'Listen to the stress again: -TEEN or -TY?', pound: 'More than one pound: pounds, with an s.', _: 'Look at the tag again and say the number first.' };

var QUEM = [
  { au: 'a-fran-all.mp3', nome: 'FRAN', idade: '25', img: 'cambridge', frase: 'She’s Fran. She’s 25.' },
  { au: 'a-bob-all.mp3', nome: 'BOB', idade: '20', img: 'york', frase: 'He’s Bob. He’s 20.' },
  { au: 'a-paula-all.mp3', nome: 'PAULA', idade: '?', img: 'rochester', frase: 'She’s Paula. She never says her age!' }
];

var OPCOES = [{ t: 'TRAIN', ic: '🚆', p: 30 }, { t: 'BED', ic: '🛏️', p: 40 }, { t: 'MUSEUM', ic: '🏛️', p: 15 }, { t: 'SANDWICH', ic: '🥪', p: 5 }, { t: 'BUS', ic: '🚌', p: 10 }, { t: 'WALK', ic: '🥾', p: 0 }];
var VERBO = { TRAIN: 'take the train', BED: 'sleep in a bed', MUSEUM: 'go to a museum', SANDWICH: 'eat a sandwich', BUS: 'take the bus', WALK: 'walk' };
var EXTENSO = { 0: 'zero', 5: 'five', 10: 'ten', 15: 'fifteen', 30: 'thirty', 40: 'forty' };

var VOCE = [
  { q: 'How old is someone in your family?', fup: 'How old is your mother? And your father?', st: ['My brother is …', 'My mother is …'], ex: 'My sister is nineteen. My father is fifty-three.' },
  { q: 'How much is a coffee in your city?', fup: 'And a bus ticket?', st: ['A coffee is …', 'It’s …'], ex: 'A coffee is about three dollars. A bus ticket is two.' },
  { q: 'What do you do on Saturday? And on Sunday?', fup: 'Which one is better?', st: ['On Saturday I …', 'On Sunday I …'], ex: 'On Saturday I go to the gym. On Sunday I sleep.' },
  { q: 'Your turn. Ask me two questions: How old…? How much…?', fup: 'Now ask me about my favorite day.', st: ['How old is …?', 'How much is …?'], ex: 'How old is your cat? How much is a pizza here?' }
];

var S = { i: 0, faixa: 1, fala: {}, resp: {}, armas: {},
  abre: { sel: -1, foi: {}, formas: {} }, corrida: { p: 0, ouviu: {} }, dinheiro: { p: 0, ouviu: {} }, ola: { viu: {} },
  dez: { n: 0, esc: '' }, dias: { feitos: 0, erro: '' }, preco: { n: 0, esc: '' }, quem: { nome: {}, idade: {}, viu: 0 },
  viagem: { d: 0, esc: {}, partes: {} }, voce: { n: 0, foi: {} } };

/* o painel: plaquinhas que viram */
function placa(txt, cls, vira) {
  return '<span class="placa' + (cls ? ' ' + cls : '') + '">' + String(txt).split('').map(function (ch, i) { return '<i' + (vira ? ' class="flip" style="--d:' + (i * 45) + 'ms"' : '') + '>' + (ch === ' ' ? '&nbsp;' : ch) + '</i>'; }).join('') + '</span>';
}
function linhaPainel(a, b, c, cls) { return '<div class="linha-p' + (cls ? ' ' + cls : '') + '">' + placa(a, 'hora') + placa(b, 'dest') + placa(c, 'st') + '</div>'; }
function gasto() { var t = 0; for (var d in S.viagem.esc) { var o = OPCOES[S.viagem.esc[d]]; if (o) t += o.p; } return t; }

var R = {};
R.capa = function () {
  return '<div class="capa"><div class="lado-a"><span class="kick">MAIN SERIES · A1</span><h1>Three People, <b>Five Days</b></h1>'
    + '<p class="sub">London to Edinburgh. Three travelers, one hundred pounds, and the numbers you say every day.</p>'
    + '<div class="chipsx"><span class="pilula">ages</span><span class="pilula">10 to 100</span><span class="pilula">days</span><span class="pilula">prices</span><span class="pilula">Live Class · W·O·L·F</span></div>'
    + '<button type="button" class="btn cheio" data-a="ir" data-n="1">Board the train</button>' + faixaLive() + '</div>'
    + '<div class="painel vd"><div class="topo-p"><span>DEPARTURES</span><small>LONDON KING’S CROSS</small></div>'
    + linhaPainel('09:00', 'CAMBRIDGE', 'ON TIME') + linhaPainel('11:30', 'YORK', 'ON TIME') + linhaPainel('14:15', 'EDINBURGH', '£100', 'ouro')
    + '<p class="sussurro">Five days. One hundred pounds. Every tile flips when you say it right.</p></div></div>';
};

R.abre = function (c) {
  return cartasPessoais(c, ABRE, S.abre, 'abre') + '<div class="partes so-prof"><h5>WHAT YOU HEAR · DON’T CORRECT</h5>' + FORMAS.map(function (f) { return '<button type="button" class="chip frase' + (f.erro ? ' erro-ouvido' : '') + (S.abre.formas[f.k] ? ' on' : '') + '" data-a="ab-f" data-v="' + f.k + '">' + f.t + '</button>'; }).join('') + '</div>';
};

function cenaVideo(c, chave) {
  var v = VIDEOS[chave], e = S[chave], tudo = v.pal.every(function (w) { return e.ouviu[w]; });
  var passos = '<div class="tres-tempos">' + tempos3(e.p) + '</div>', corpo;
  if (e.p === 0) corpo = '<div class="foco"><div class="pergunta vd"><small>BEFORE YOU WATCH</small><h2>' + v.antes + '</h2></div>' + fala(chave + 'a', ['I think …', 'Maybe …'], v.pal) + '<div style="text-align:center"><button type="button" class="btn cheio" data-a="vid-p" data-c="' + chave + '" data-n="1">Watch</button></div></div>';
  else if (e.p === 1) corpo = '<div class="mesa-video"><div class="video-col">' + iframe(YT, 'London to Edinburgh', '&start=' + v.ini + '&end=' + v.fim) + '<small class="cred">' + v.cred + '</small></div><div class="lado-video"><h5>TAP WHEN YOU HEAR IT</h5><div class="ouvidos">'
    + v.pal.map(function (w) { return '<button type="button" class="ouvido' + (e.ouviu[w] ? ' on' : '') + '" data-a="vid-w" data-c="' + chave + '" data-v="' + h(w) + '">' + w + '</button>'; }).join('') + '</div>'
    + (tudo ? '<p class="aprova">GOT IT. All five.</p>' : '<p class="dica-aluno">Nobody has to understand the rest.</p>') + '<div class="toca-linha vd">' + tocar(v.au) + '<span>The sound only, again</span></div><div><button type="button" class="btn" data-a="vid-p" data-c="' + chave + '" data-n="2">After the video</button></div></div></div>';
  else corpo = '<div class="foco"><div class="pergunta vd ja"><small>AFTER</small><h2>' + v.q + '</h2></div>' + fala(chave + 'b', v.st, []) + mostra(chave + 'q', v.ex) + ((S.trans || {})[chave + 't'] ? '<div class="post-trans vd"><small>WHAT THEY SAY IN THE VIDEO</small><p class="transcricao">' + v.trans + '</p></div>' : '<div class="resp-btn"><button type="button" class="pilula" data-a="trans" data-c="' + chave + 't">Show transcript</button></div>') + '<p class="aprova" style="text-align:center">' + v.fecho + '</p></div>';
  return cab(c) + passos + corpo;
}
R.corrida = function (c) { return cenaVideo(c, 'corrida'); };
R.dinheiro = function (c) { return cenaVideo(c, 'dinheiro'); };

R.ola = function (c) {
  var v = S.ola.viu;
  return cab(c) + '<div class="escutas">' + OLA.map(function (au, i) {
    var ouviu = (S.ouviu || {})[au];
    return '<div class="toca-linha vd' + (v[i] ? ' feito' : '') + '"><span class="num">' + (i + 1) + '</span>' + tocar(au) + '<div class="ola-l">' + (v[i] ? placa(TR[au].replace(/[’]/g, '\'').toUpperCase(), 'fala-p', 1) : ouviu ? '<button type="button" class="pilula" data-a="ola" data-n="' + i + '">Said it three times · show it</button>' : '<span class="transcricao vazia">Listen first. The words come after.</span>') + '</div></div>';
  }).join('') + '</div>' + (Object.keys(v).length >= 7 ? '<p class="aprova" style="text-align:center">I’m + a name. I’m + an age. The same small sound: never I have 25.</p>' : '');
};

R.dezenas = function (c) {
  var e = S.dez, n = e.n;
  if (n >= DEZ.length) return cab(c) + trilha(DEZ, n) + '<div class="foco"><div class="painel mini vd">' + linhaPainel('-TY', 'A TEN', '30') + linhaPainel('-TEEN', 'A TEEN', '13') + '</div><div class="pergunta vd"><small>DONE</small><h2>Ten tiles flipped. THIRty is a ten; thirTEEN is a teen. Count with me: ten, twenty … one hundred.</h2></div></div>';
  var x = DEZ[n], ok = e.esc === x.ok, ops = ordem(x.o, n + 1);
  return cab(c) + trilha(DEZ, n) + '<div class="foco"><div class="painel vd numero">' + placa(ok ? x.ok.toUpperCase() : x.n, 'grande', ok) + '</div>'
    + '<div class="tres-b centro">' + ops.map(function (o) { return '<button type="button" class="pilula grande' + (e.esc === o ? (ok ? ' certo' : ' errado') : '') + '" data-a="dz" data-v="' + h(o) + '">' + o + '</button>'; }).join('') + '</div>'
    + (e.esc && !ok ? '<p class="recusa" style="text-align:center">' + (/teen$/.test(e.esc) || /ty$/.test(e.esc) ? 'Look again: -teen is 13 to 19. -ty is the tens. Say it with the stress.' : 'Say the number out loud first, then find it.') + '</p>' : '')
    + (ok ? '<p class="aprova" style="text-align:center">GOT IT. ' + x.n + ': ' + x.ok + '. Say it again, with the stress.</p><div style="text-align:center"><button type="button" class="btn" data-a="dz-prox">Next</button></div>' : '') + '</div>';
};

R.dias = function (c) {
  var e = S.dias, f = e.feitos, todos = f >= 7, ops = ordem(DIAS.map(function (d, i) { return [d, i]; }), 3);
  var painel = '<div class="painel vd semana">' + DIAS.map(function (d, i) { return '<div class="linha-p">' + placa(String(i + 1), 'hora') + placa(i < f ? d : '·········', 'dest' + (i < 5 ? '' : ' fds'), i === f - 1) + '</div>'; }).join('') + '</div>';
  var lado = todos ? follow('NOW SAY IT', 'What day is it today? And tomorrow? What days do you work or study?', ['Today is …', 'Tomorrow is …', 'From Monday to Friday …'], [], 'dias', mostra('dias', 'Today is Monday. Tomorrow is Tuesday. I work from Monday to Friday.', 1))
    : '<div class="ouvidos">' + ops.map(function (o) { return '<button type="button" class="ouvido' + (o[1] < f ? ' on' : '') + (e.erro === o[0] ? ' errado' : '') + '" data-a="di" data-n="' + o[1] + '"' + (o[1] < f ? ' disabled' : '') + '>' + o[0].charAt(0) + o[0].slice(1).toLowerCase() + '</button>'; }).join('') + '</div>'
      + (e.erro ? '<p class="recusa">Not yet. Say the days from Monday, out loud, and find the next one.</p>' : '<p class="dica-aluno">Wednesday has a silent d: WENZ-day.</p>');
  return cab(c) + '<div class="mesa-dias">' + painel + '<div class="lado-l">' + lado + '</div></div>';
};

R.preco = function (c) {
  var e = S.preco, n = e.n, gastou = 0; for (var k = 0; k < Math.min(n, PRECO.length); k++) gastou += PRECO[k].p;
  var saldo = '<div class="painel mini vd">' + linhaPainel('£', 'BUDGET', String(100 - gastou)) + '</div>';
  if (n >= PRECO.length) return cab(c) + trilha(PRECO, n) + '<div class="foco">' + saldo + '<div class="pergunta vd"><small>DONE</small><h2>£100 − £100 = £0. Every pound, said out loud, with an s.</h2></div></div>';
  var x = PRECO[n], ok = e.esc === x.ok, ops = ordem(x.o, n + 2), por = e.esc && !ok ? (/pound$/.test(e.esc) ? NAO_PR.pound : /(teen|ty) pounds$/.test(e.esc) ? NAO_PR.teen : NAO_PR._) : '';
  return cab(c) + trilha(PRECO, n) + '<div class="mesa-preco"><div class="etiqueta vd"><span class="ic">' + x.ic + '</span><b>' + x.coisa + '</b>' + placa('£' + x.p, 'grande') + '<small>How much is it?</small></div>'
    + '<div class="lado-l">' + saldo + '<div class="tres-b">' + ops.map(function (o) { return '<button type="button" class="pilula grande' + (e.esc === o ? (ok ? ' certo' : ' errado') : '') + '" data-a="pr" data-v="' + h(o) + '">It’s ' + o + '.</button>'; }).join('') + '</div>'
    + (por ? '<p class="recusa">' + por + '</p>' : '') + (ok ? '<p class="aprova">GOT IT. It’s ' + x.ok + '. The budget goes down.</p><div><button type="button" class="btn" data-a="pr-prox">Next</button></div>' : '') + '</div></div>';
};

R.quem = function (c) {
  var e = S.quem;
  var cartas = '<div class="fichas' + (e.viu ? ' sem-foto' : '') + '">' + QUEM.map(function (x, i) {
    var ouviu = (S.ouviu || {})[x.au], nOk = e.nome[i] === x.nome, iOk = e.idade[i] === x.idade, feito = nOk && iOk;
    return '<div class="ficha vd' + (feito ? ' feito' : '') + '"><div class="ficha-foto" style="background-image:url(' + img(x.img) + ')"><span>TRAVELER ' + (i + 1) + '</span></div><div class="toca-linha">' + tocar(x.au) + '</div>'
      + (ouviu ? '<div class="campo-f"><small>NAME</small>' + ['FRAN', 'BOB', 'PAULA'].map(function (nm) { return '<button type="button" class="mini-b' + (e.nome[i] === nm ? (nm === x.nome ? ' certo' : ' errado') : '') + '" data-a="qn" data-n="' + i + '" data-v="' + nm + '">' + nm + '</button>'; }).join('') + '</div>'
        + '<div class="campo-f"><small>AGE</small>' + ['20', '25', '?'].map(function (a) { return '<button type="button" class="mini-b' + (e.idade[i] === a ? (a === x.idade ? ' certo' : ' errado') : '') + '" data-a="qi" data-n="' + i + '" data-v="' + a + '">' + a + '</button>'; }).join('') + '</div>'
        + (feito ? '<p class="aprova">' + x.frase + '</p>' + transcricao(x.au, TR[x.au]) : '') : '<p class="transcricao vazia">Listen first.</p>') + '</div>';
  }).join('') + '</div>';
  var video = e.viu ? '<div class="video-quem">' + iframe(YT, 'The three travelers', '&start=36&end=104') + '<small class="cred">Video: from 0:36 to 1:44 · the three travelers</small></div>' : '<div style="text-align:center"><button type="button" class="pilula so-prof" data-a="q-vid">Watch the three first (video)</button></div>';
  return cab(c) + (e.viu ? '<div class="quem-v">' + video + cartas + '</div>' : video + cartas);
};

R.viagem = function (c) {
  var e = S.viagem, d = e.d, fim = d >= 5, g = gasto(), saldo = 100 - g;
  var painel = '<div class="painel vd semana">' + DIAS.slice(0, 5).map(function (dia, i) { var o = OPCOES[e.esc[i]]; return '<div class="linha-p' + (i === d ? ' agora' : '') + '">' + placa(dia.slice(0, 3), 'hora') + placa(o ? o.t : '·······', 'dest', o && i === d) + placa(o ? '£' + o.p : '', 'st') + '</div>'; }).join('')
    + '<div class="linha-p ouro">' + placa('£', 'hora') + placa('LEFT', 'dest') + placa(String(saldo), 'st' + (saldo < 0 ? ' neg' : '')) + '</div></div>';
  if (fim) return cab(c) + '<div class="mesa-dias">' + painel + '<div class="lado-l">' + follow('THE WHOLE TRIP', 'Tell me your plan from Monday to Friday. How much is it, all together?', ['On Monday I …', 'It’s … pounds, all together.'], [], 'vg-fim', mostra('vg-fim', 'On Monday I take the train. It’s thirty pounds. On Tuesday I walk … All together it’s ninety pounds. I have ten pounds left.', 1)) + (saldo < 0 ? '<p class="recusa">Below zero! What can you change?</p>' : '') + '</div></div>';
  var esc = OPCOES[e.esc[d]], p = e.partes[d] || {};
  var lado = '<div class="ouvidos">' + OPCOES.map(function (o, i) { return '<button type="button" class="ouvido' + (e.esc[d] === i ? ' on' : '') + '" data-a="vg" data-n="' + i + '">' + o.ic + ' ' + o.t + ' · £' + o.p + '</button>'; }).join('') + '</div>'
    + (esc ? '<div class="frase-dia vd">On <u>' + DIAS[d].charAt(0) + DIAS[d].slice(1).toLowerCase() + '</u> I <u>' + VERBO[esc.t] + '</u>. It’s <u>' + EXTENSO[esc.p] + ' pounds</u>.</div>'
      + '<div class="partes so-prof"><h5>TAP WHAT YOU HEAR</h5>' + [['dia', 'THE DAY'], ['coisa', 'THE THING'], ['preco', 'THE PRICE']].map(function (k) { return '<button type="button" class="chip frase' + (p[k[0]] ? ' on' : '') + '" data-a="vg-p" data-v="' + k[0] + '">' + k[1] + '</button>'; }).join('') + '</div>'
      + (p.dia && p.coisa && p.preco ? '<div><button type="button" class="btn" data-a="vg-prox">Next day</button></div>' : '<p class="dica-aluno">Say the whole sentence: the day, the thing, the price.</p>') : '<p class="dica-aluno">Pick one thing for ' + DIAS[d].charAt(0) + DIAS[d].slice(1).toLowerCase() + '.</p>');
  return cab(c) + '<div class="mesa-dias">' + painel + '<div class="lado-l">' + lado + '</div></div>';
};

R.voce = function (c) { return sequencia(c, VOCE, S.voce, 'voce', 'Real numbers from your life.'); };

R.fim = function (c) {
  var f = S.abre.formas, lembra = FORMAS.filter(function (x) { return f[x.k]; }).map(function (x) { return x.t; });
  return cab(c) + '<div class="fim">' + escritaFinal('fim', (S.txt || {}).fim || '', (S.salvo || {}).fim, 'I’m … I’m … (age).\nMy favorite day is …\nA coffee is … pounds.', 'Your ticket',
    ['I’m ', 'My favorite day is ', 'On Saturday I ', 'It’s ', ' pounds', 'from Monday to Friday'], ['YOUR TICKET, AGAIN', lembra.length ? 'In scene I your teacher heard: ' + lembra.join(', ') + '. Now write it, every number right.' : 'Your name, your age, your week and one price.'])
    + '<div class="lado-fim"><div class="painel mini vd">' + linhaPainel('FRI', 'EDINBURGH', 'ARRIVED', 'ouro') + '</div><div class="grande vd"><span>age: <u>I’m 25</u>, never I have 25</span><span><u>THIR</u>ty is a ten, thir<u>TEEN</u> is a teen</span><span>prices: <u>thirty pounds</u>, with an s</span><span>days: a <u>C</u>apital letter</span></div>'
    + mostra('fim', 'I’m Carla. I’m thirty-two.<br>My favorite day is Saturday.<br>From Monday to Friday I work.<br>A coffee is three pounds here.', 1)
    + '<p class="hw"><a class="pilula" href="HW/" target="_blank" rel="noopener">Homework for the student →</a></p></div></div>';
};

TOQUES['ab-f'] = function (b, n, v) { S.abre.formas[v] = !S.abre.formas[v]; };
TOQUES['vid-p'] = function (b, n, v, c) { S[c].p = n; };
TOQUES['vid-w'] = function (b, n, v, c) { S[c].ouviu[v] = !S[c].ouviu[v]; };
TOQUES.ola = function (b, n) { S.ola.viu[n] = 1; };
TOQUES.dz = function (b, n, v) { S.dez.esc = v; };
TOQUES['dz-prox'] = function () { S.dez = { n: S.dez.n + 1, esc: '' }; };
TOQUES.di = function (b, n) { if (n === S.dias.feitos) { S.dias.feitos++; S.dias.erro = ''; } else S.dias.erro = DIAS[n]; };
TOQUES.pr = function (b, n, v) { S.preco.esc = v; };
TOQUES['pr-prox'] = function () { S.preco = { n: S.preco.n + 1, esc: '' }; };
TOQUES.qn = function (b, n, v) { S.quem.nome[n] = v; };
TOQUES.qi = function (b, n, v) { S.quem.idade[n] = v; };
TOQUES['q-vid'] = function () { S.quem.viu = 1; };
TOQUES.vg = function (b, n) { S.viagem.esc[S.viagem.d] = n; S.viagem.partes[S.viagem.d] = {}; };
TOQUES['vg-p'] = function (b, n, v) { var p = S.viagem.partes[S.viagem.d] = S.viagem.partes[S.viagem.d] || {}; p[v] = !p[v]; };
TOQUES['vg-prox'] = function () { S.viagem.d++; };
