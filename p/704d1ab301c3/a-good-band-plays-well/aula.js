/* ============================================================
   A GOOD BAND PLAYS WELL · THE MIXING DESK · LIVE CLASS  05/10/2026
   Main series A1 · good (adjetivo) × well (advérbio) · -ly · fast/hard
   O MUNDO: uma loja de discos num sábado; uma banda toca no canto. A
   tela é uma mesa de som com dois canais: THE THING (o adjetivo: quem
   ou o quê) e THE DOING (o advérbio: como). O aluno SOBE O FADER com o
   dedo: só o canal certo leva a palavra para a frase.
   Mantido da aula antiga: os 34 áudios com transcrição, as seis fotos
   (sem gente), a máquina do -LY, as seis frases erradas, o show de
   talentos e a pergunta do balcão. Fila: FILA-LIVE-386.md · 001.
   ============================================================ */
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'voce', est: 'o', min: 7, img: 'loja', rot: 'I · What Do You Do Well?', t: 'Before the music: you.', p: 'Pick a card. Answer out loud. Then the follow-up comes.' },
  { k: 'loja', est: 'l', min: 7, img: 'caixas', rot: 'II · The Shop', t: 'Saturday, four in the afternoon.', p: 'Listen to each card first. Then read the transcript out loud and answer. Then find the two words that do the job.' },
  { k: 'gx', est: 'f', min: 4, img: 'mesa', rot: 'III · Good or Well?', t: 'Two moments in the record shop.', p: 'Read A and B out loud. Say what is different, then check. Then choose for four new moments.' },
  { k: 'fader', est: 'f', min: 6, img: 'mesa', rot: 'IV · Two Faders', t: 'Two channels. Each word only moves its own fader.', p: 'Push the right fader all the way up. The word goes into the sentence. Then play it and say it.' },
  { k: 'decide', est: 'l', min: 7, img: 'mesa', rot: 'V · Listen and Decide', t: 'Hear it. Say it. Then send it to a channel.', p: 'Is the word about the thing, or about the doing?' },
  { k: 'maquina', est: 'f', min: 6, img: 'vitrola', rot: 'VI · The -LY Machine', t: 'A thing-word goes in. A doing-word comes out.', p: 'Pick a word. Say the new form. Then choose the bin it falls into.' },
  { k: 'erro', est: 'f', min: 6, img: 'mesa', rot: 'VII · Feedback!', t: 'Six sentences, and each one squeals.', p: 'Tap the word on the wrong channel. Then play the clean sentence and say it.' },
  { k: 'nove', est: 'o', min: 7, extra: 1, img: 'palco', rot: 'VIII · Nine Pads', t: 'One word on each pad. A whole sentence from your mouth.', p: 'Tap a pad. Say a full sentence with good or well. Then check.' },
  { k: 'balcao', est: 'o', min: 7, extra: 1, img: 'vitrola', rot: 'IX · The Counter', t: 'Closing time. The owner has three questions.', p: 'Play the question. Answer out loud. Then the follow-up comes.' },
  { k: 'show', est: 'o', min: 7, extra: 1, img: 'palco', rot: 'X · The Talent Show', t: 'You and your teacher are the judges.', p: 'Look at the scores. Say what the person is like, and how they do it.' },
  { k: 'fim', est: 'w', min: 6, img: 'capa', rot: 'XI · Your Review', t: 'Write a short review of a band or a singer you know.', p: 'Five lines: what they are like (good) and how they do it (well, -ly). The red line watches the channels. It goes to your My notes.' }
];

/* I · você */
var VOCE = [
  { k: 'WELL', q: 'What do you do well?', fup: 'Who cooks well in your family?', st: ['I … well.', 'I can … very well.'], ex: 'I cook well. My grandmother cooks very well too.' },
  { k: 'A GOOD THING', q: 'What is a good thing you have?', fup: 'Why is it good?', st: ['I have a good …', 'My … is good.'], ex: 'I have a good bike. It’s old, but it’s fast.' },
  { k: 'BADLY', q: 'What do you do badly, but love?', fup: 'When do you do it?', st: ['I … badly, but I love it.'], ex: 'I sing badly, but I love it. I sing in the shower.' },
  { k: 'A BAND', q: 'Who is a good band or singer for you?', fup: 'What do they do well?', st: ['… is a good band.', 'She sings …', 'They play …'], ex: 'Coldplay is a good band. They play very well live.' }
];

/* II · a loja */
/* as transcrições são as do ÁUDIO (faster-whisper, 05/10): o texto antigo da tela era só um pedaço */
var LOJA = [
  { n: 'VINYL', s: 'Vinyl is not dead. In the US, people buy 47.9 million records in one year. And the number is bigger every year.', au: 's-comeback.mp3', img: 'vitrola', q: 'Is vinyl dead?', ops: ['No. People buy more every year.', 'Yes. Nobody buys records now.'] },
  { n: 'THE SHOP', s: 'More than 4 in 10 come from small shops, not from big stores, from shops like this one, with one room and one counter.', au: 's-shops.mp3', img: 'caixas', q: 'Where do many records come from?', ops: ['From small shops like this one.', 'From big stores.'] },
  { n: 'THE CORNER', s: 'On Saturdays, a band plays in the corner. They are not famous, they are good, and they play well.', au: 's-band.mp3', img: 'palco', q: 'Is the band famous?', ops: ['No, but they are good.', 'Yes, very famous.'] }
];
var FATO = ['They', 'are', 'not', 'famous,', 'they', 'are', 'good,', 'and', 'they', 'play', 'well.'];
var FATO_OK = { 6: 'good', 10: 'well' };

/* III · os faders: k 0 = THE THING (good), 1 = THE DOING (well) */
var FD = [
  { a: 'The band is', b: '.', k: 0, au: 'o-band1.mp3', pq: 'Is the band good? The band is a thing: GOOD.' },
  { a: 'They play', b: '.', k: 1, au: 'o-band2.mp3', pq: 'How do they play? A doing: WELL.' },
  { a: 'She is a', b: 'singer.', k: 0, au: 'o-sing1.mp3', pq: 'Before a noun (singer): GOOD.' },
  { a: 'She sings', b: '.', k: 1, au: 'o-sing2.mp3', pq: 'How does she sing? WELL.' },
  { a: 'His English is', b: '.', k: 0, au: 'o-eng1.mp3', pq: 'His English is a thing: GOOD.' },
  { a: 'He speaks English', b: '.', k: 1, au: 'o-eng2.mp3', pq: 'How does he speak? WELL. This one lasts for years: never “speaks English good”.' }
];
var CANAL = [{ k: 'THE THING', w: 'good', d: 'who or what' }, { k: 'THE DOING', w: 'well', d: 'how' }];

/* IV · ouvir e decidir */
var DC = [
  { au: 'w-sings.mp3', en: 'She sings well.', k: 1 },
  { au: 'o-band1.mp3', en: 'The band is good.', k: 0 },
  { au: 'w-plays.mp3', en: 'They play very well.', k: 1 },
  { au: 'w-singer.mp3', en: 'She is a good singer.', k: 0 },
  { au: 'w-slow.mp3', en: 'He plays slowly.', k: 1 }
];

/* V · a máquina: o = TAKES -LY, s = STAYS THE SAME, t = BECOMES ANOTHER WORD */
var MQ = [
  { e: 'slow', s: 'slowly', b: 'o', f: 'He plays slowly.', au: 'm-slow.mp3' },
  { e: 'quiet', s: 'quietly', b: 'o', f: 'She sings quietly.', au: 'm-quiet.mp3' },
  { e: 'bad', s: 'badly', b: 'o', f: 'I sing badly.', au: 'm-bad.mp3' },
  { e: 'loud', s: 'loudly', b: 'o', f: 'They play loudly.', au: 'm-loud.mp3' },
  { e: 'careful', s: 'carefully', b: 'o', f: 'He holds it carefully.', au: 'm-careful.mp3' },
  { e: 'fast', s: 'fast', b: 's', f: 'She plays fast.', au: 'm-fast.mp3', nota: 'Nothing changes: fast does both jobs. Never “fastly”.' },
  { e: 'hard', s: 'hard', b: 's', f: 'They work hard.', au: 'm-hard.mp3', nota: 'Same again. “Hardly” means almost not!' },
  { e: 'good', s: 'well', b: 't', f: 'She sings well.', au: 'm-good.mp3', nota: 'A different word: good → well. Never “goodly”.' }
];
var BINS = { o: 'TAKES -LY', s: 'STAYS THE SAME', t: 'BECOMES ANOTHER WORD' };

/* VI · microfonia: w = índice da palavra errada */
var ER = [
  { f: 'She sings good.', w: 2, ok: 'well', au: 'e-sings.mp3', diz: 'She sings well.' },
  { f: 'He speaks English good.', w: 3, ok: 'well', au: 'e-english.mp3', diz: 'He speaks English well.' },
  { f: 'They play bad.', w: 2, ok: 'badly', au: 'e-played.mp3', diz: 'They played badly last night.' },
  { f: 'Drive careful.', w: 1, ok: 'carefully', au: 'e-drive.mp3', diz: 'Drive carefully.' },
  { f: 'She is a well singer.', w: 3, ok: 'good', au: 'e-singer.mp3', diz: 'She is a good singer.', nota: 'This one goes the other way: before a noun, it’s GOOD.' },
  { f: 'He plays the guitar very good.', w: 5, ok: 'well', au: 'e-guitar.mp3', diz: 'He plays the guitar very well.' }
];

/* VII · nove pads */
var PADS = [
  { n: 'sing', diz: 'She sings well.' }, { n: 'singer', diz: 'She is a good singer.' }, { n: 'play', diz: 'They play well.' },
  { n: 'band', diz: 'It is a good band.' }, { n: 'drive', diz: 'He drives carefully.' }, { n: 'driver', diz: 'He is a careful driver.' },
  { n: 'speak', diz: 'She speaks English well.' }, { n: 'English', diz: 'Her English is good.' }, { n: 'cook', diz: 'I cook badly, but I love it.' }
];

/* VIII · o balcão */
var BALCAO = [
  { tag: 'THE BAND', au: 'c-band.mp3', slow: 'c-band-slow.mp3', q: 'So, do you like the band?', st: ['They’re good.', 'They play well.', 'They play …'], ex: 'They’re good. They play really well.', fup: 'And the drummer? How does he play?', fst: ['He plays …', 'He’s a … drummer.'], fex: 'He plays fast and loudly. He’s a good drummer.' },
  { tag: 'THE SINGER', au: 'c-singer.mp3', slow: 'c-singer-slow.mp3', q: 'And the singer? Can she really sing?', st: ['Yes. She sings …', 'She’s a … singer.'], ex: 'Yes. She sings very well. She’s a good singer.', fup: 'Who sings well in your family?', fst: ['My … sings …', 'Nobody! We all sing …'], fex: 'My sister sings well. I sing badly!' },
  { tag: 'YOU', au: 'c-you.mp3', slow: 'c-you-slow.mp3', q: 'Do you play anything yourself?', st: ['A little. I play …', 'No, but I …'], ex: 'A little. I play the guitar badly, but I love it.', fup: 'What do you want to play well one day?', fst: ['One day I want to play … well.'], fex: 'One day I want to play the piano well.' }
];

/* IX · o show de talentos */
var ATOS = [
  { n: 'ACT 1 · THE SINGER', quem: 'she', voz: 5, danca: 2, ex: 'She’s a good singer. She sings beautifully, but she dances badly.' },
  { n: 'ACT 2 · THE DANCER', quem: 'he', voz: 1, danca: 5, ex: 'He’s a bad singer, but he’s a great dancer. He dances really well.' },
  { n: 'ACT 3 · THE MAGICIAN', quem: 'she', voz: 3, danca: 3, ex: 'She sings OK and dances OK. But she does her magic slowly and carefully. She’s a good magician!' }
];
var PARTES = [{ k: 'good', t: 'A GOOD … / A BAD …' }, { k: 'well', t: '… WELL / BADLY' }, { k: 'ly', t: '… SLOWLY / LOUDLY / BEAUTIFULLY' }];

/* ---------- o estado (o mesmo dos dois lados) ---------- */
var S = { i: 0, faixa: 1, fala: {}, resp: {}, armas: {},
  voce: { sel: -1, foi: {} }, loja: { ouviu: {}, esc: {}, toc: {}, err: -1 },
  fd: { n: 0, esc: -1, err: -1 }, dc: { n: 0, esc: -1 },
  mq: { sel: -1, feitos: {}, bin: '' }, er: { n: 0, toc: -1 },
  pads: { sel: -1, foi: {} }, balcao: { n: 0, foi: {} }, show: { n: 0, partes: {}, erro: {} } };

/* ---------- pecinhas desta aula ---------- */
function leds(on, cor) { var t = ''; for (var i = 0; i < 10; i++) t += '<i class="' + (i < on ? 'on' + (i >= 8 ? ' pico' : '') : '') + '"></i>'; return '<span class="vu" style="--cor:' + cor + '">' + t + '</span>'; }
function estrelas(n) { var t = ''; for (var i = 0; i < 5; i++) t += '<i class="' + (i < n ? 'on' : '') + '">★</i>'; return '<span class="estrelas">' + t + '</span>'; }

/* ---------- as cenas ---------- */
var R = {};
R.capa = function () {
  return '<div class="capa"><div class="lado-a"><span class="kick">MAIN SERIES · THE MIXING DESK · A1</span><h1>A Good Band <b>Plays Well</b></h1>'
    + '<p class="sub">Same band, same fact, and two different words. One for the thing, one for the doing.</p>'
    + '<div class="chipsx"><span class="pilula">good · well</span><span class="pilula">slow → slowly</span><span class="pilula">fast · hard</span><span class="pilula">Live Class · W·O·L·F</span></div>'
    + '<button type="button" class="btn cheio" data-a="ir" data-n="1">Turn on the desk</button>' + faixaLive() + '</div>'
    + '<div class="foto"><img src="' + img('capa') + '" alt="A guitar in its case in a record shop"><div class="placa-capa"><small>CH 1 · THE THING</small><b>GOOD</b><small>CH 2 · THE DOING</small><b class="b2">WELL</b></div></div></div>';
};
R.voce = function (c) { return cartasPessoais(c, VOCE, S.voce, 'voce'); };

R.loja = function (c) {
  var l = S.loja, todos = LOJA.every(function (_, i) { return l.esc[i] === 0; }), achou = l.toc[6] && l.toc[10];
  var cartas = '<div class="lojas">' + LOJA.map(function (x, i) {
    var esc = l.esc[i], certo = esc === 0, ops = ordem(x.ops.map(function (t, k) { return [t, k]; }), i + 1);
    return '<div class="loja-card vd' + (certo ? ' on' : '') + '"><div class="lc-foto" style="background-image:url(' + img(x.img) + ')"></div><div class="lc-txt"><small>' + (i + 1) + ' · ' + x.n + '</small>'
      + '<span class="toca-linha">' + tocar(x.au) + '</span>' + transcricao(x.au, x.s)
      + '<p class="q">' + x.q + '</p><div class="versoes">' + ops.map(function (o) { return '<button type="button" class="versao' + (esc === o[1] ? (o[1] === 0 ? ' certo' : ' errado') : '') + '" data-a="lj" data-n="' + i + '" data-v="' + o[1] + '"' + (certo ? ' disabled' : '') + '>' + o[0] + '</button>'; }).join('') + '</div>'
      + (esc > 0 ? '<p class="recusa">Play it again. Listen for the answer.</p>' : '') + '</div></div>';
  }).join('') + '</div>';
  var achar = '';
  if (todos) {
    achar = '<div class="foco"><div class="pergunta vd' + (achou ? ' ja' : '') + '"><small>CARD THREE SAYS IT TWO WAYS</small><h2>Which two words do the job: one about the band, one about the playing?</h2></div>'
      + '<div class="fato vd">' + FATO.map(function (w, i) {
        var cls = l.toc[i] ? ' certo' : (l.err === i ? ' errado' : '');
        return '<button type="button" class="pal' + cls + '" data-a="fato" data-n="' + i + '">' + w + '</button>';
      }).join('') + '</div>'
      + (achou ? '<p class="aprova">GOT IT. <b>good</b> is about the band (the thing). <b>well</b> is about the playing (the doing). The desk takes them apart.</p>'
        : (l.err >= 0 ? '<p class="recusa">That word is in the sentence, but it isn’t the one. Look for a word that says something about the band, and one about the playing.</p>' + mostra('loja', '<b>good</b> (the band) and <b>well</b> (the playing).') : '<p class="dica-aluno" style="text-align:center">Tap the two words.</p>'))
      + '</div>';
  }
  return cab(c) + cartas + achar;
};

R.fader = function (c) {
  var f = S.fd, n = f.n, fim = n >= FD.length, x = FD[Math.min(n, FD.length - 1)];
  var campo = '<input type="hidden" data-campo="fd" value="' + n + ':' + f.esc + ':' + f.err + '">';
  if (fim) return cab(c) + trilha(FD, n) + '<div class="foco"><div class="pergunta vd"><small>SIX SENTENCES MIXED</small><h2>Three pairs. GOOD rides the thing channel. WELL rides the doing channel. They never swap.</h2></div></div>';
  var certo = f.esc === x.k;
  var lcd = '<div class="lcd vd"><small>NOW PLAYING · ' + (n + 1) + ' OF ' + FD.length + '</small><p>' + x.a + ' <span class="vaga' + (certo ? ' cheia' : '') + '">' + (certo ? CANAL[x.k].w : '_____') + '</span> ' + x.b + '</p></div>';
  var tiras = CANAL.map(function (ch, k) {
    var nivel = certo && k === x.k ? 1 : 0, errou = f.err === k;
    return '<div class="tira' + (errou ? ' errou' : '') + (nivel ? ' alto' : '') + '" data-ch="' + k + '" style="--cor:var(--ch' + k + ')"><small>CH ' + (k + 1) + '</small><b>' + ch.k + '</b><em>' + ch.d + '</em>'
      + '<div class="trilho-f"><div class="marcas"></div>' + leds(nivel ? 9 : 0, 'var(--ch' + k + ')') + '<button type="button" class="knob" data-k="' + k + '" style="--n:' + nivel + '" aria-label="Fader ' + ch.k + '"' + (certo ? ' disabled' : '') + '><span>' + ch.w + '</span></button></div>'
      + '<button type="button" class="pilula sobe" data-a="fd" data-n="' + k + '"' + (certo ? ' disabled' : '') + '>Push up ▲</button></div>';
  }).join('');
  var lado = certo
    ? '<p class="aprova">GOT IT. ' + x.pq + '</p><div class="toca-linha vd">' + tocar(x.au) + '<span>Play it. Say it: <b>' + x.a + ' ' + CANAL[x.k].w + (x.b === '.' ? '' : ' ') + x.b + '</b></span></div><div><button type="button" class="btn" data-a="fd-prox">Next sentence</button></div>'
    : (f.err >= 0 ? '<p class="recusa">Wrong channel: <b>' + CANAL[f.err].w + '</b> is about ' + (f.err ? 'the doing' : 'the thing') + '. Is this sentence about <b>' + (f.err ? 'who or what' : 'how') + '</b>?</p>' + mostra('fd' + n, x.a + ' <b>' + CANAL[x.k].w + '</b> ' + x.b + ' ' + x.pq) : '<p class="dica-aluno">Read the sentence out loud. Then push one fader all the way up.</p>');
  return cab(c) + trilha(FD, n) + '<div class="estudio"><div class="mesa-som">' + tiras + '</div><div class="lado-mesa">' + lcd + lado + '</div></div>' + campo;
};

R.decide = function (c) {
  var d = S.dc, n = d.n, fim = n >= DC.length, x = DC[Math.min(n, DC.length - 1)];
  if (fim) return cab(c) + trilha(DC, n) + '<div class="foco"><div class="pergunta vd"><small>FIVE SENTENCES</small><h2>Decided before you see them. Slowly goes to the doing channel too: every -ly word does.</h2></div></div>';
  var certo = d.esc === x.k;
  var botoes = '<div class="canais">' + CANAL.map(function (ch, k) {
    var cls = d.esc === k ? (k === x.k ? ' certo' : ' errado') : '';
    return '<button type="button" class="canal' + cls + '" data-a="dc" data-n="' + k + '" style="--cor:var(--ch' + k + ')"' + (certo ? ' disabled' : '') + '><small>CH ' + (k + 1) + '</small><b>' + ch.k + '</b><span>' + ch.d + '</span>' + leds(d.esc === k && certo ? 9 : 0, 'var(--ch' + k + ')') + '</button>';
  }).join('') + '</div>';
  return cab(c) + trilha(DC, n) + '<div class="foco"><div class="toca-linha vd centro">' + tocar(x.au) + '<span>' + (certo ? '“' + x.en + '”' : 'Play it. Say it out loud. Then pick the channel.') + '</span></div>' + botoes
    + (certo ? '<p class="aprova">GOT IT. ' + (x.k ? 'It says HOW: the doing channel.' : 'It says WHO or WHAT: the thing channel.') + '</p><div style="text-align:center"><button type="button" class="btn" data-a="dc-prox">Next sentence</button></div>'
      : (d.esc >= 0 ? '<p class="recusa">Listen again: is there a doing? How does it happen?</p>' + mostra('dc' + n, '“' + x.en + '” → ' + CANAL[x.k].k) : ''))
    + '</div>';
};

R.maquina = function (c) {
  var m = S.mq, feitos = Object.keys(m.feitos).length, x = m.sel >= 0 ? MQ[m.sel] : null;
  var fita = '<div class="fita-mq">' + MQ.map(function (p, i) {
    return '<button type="button" class="ent' + (m.sel === i ? ' on' : '') + (m.feitos[i] ? ' feito' : '') + '" data-a="mq-sel" data-n="' + i + '"' + (m.feitos[i] ? ' disabled' : '') + '>' + p.e + '</button>';
  }).join('') + '</div>';
  var bins = '<div class="bins">' + ['o', 's', 't'].map(function (b) {
    var dentro = MQ.filter(function (p, i) { return m.feitos[i] && p.b === b; }).map(function (p) { return '<span>' + p.e + ' → <b>' + p.s + '</b></span>'; }).join('');
    var cls = x && m.bin === b ? (b === x.b ? ' certo' : ' errado') : '';
    return '<button type="button" class="bin' + cls + '" data-a="mq-bin" data-v="' + b + '"' + (x && !m.feitos[m.sel] ? '' : ' disabled') + '><small>' + BINS[b] + '</small><div class="dentro">' + (dentro || '<em>empty</em>') + '</div></button>';
  }).join('') + '</div>';
  var meio;
  if (feitos === MQ.length) meio = '<div class="pergunta vd"><small>THE MACHINE IS EMPTY</small><h2>Five take -ly. Two stay the same. One becomes another word: good → well.</h2></div>';
  else if (!x) meio = '<div class="boca vd"><b>-LY</b><p class="dica-aluno">Pick a word from the shelf.</p><p class="so-prof" style="margin:0">The student picks a word and says the doing-form first.</p></div>';
  else if (m.feitos[m.sel]) meio = '<div class="boca vd sai"><span class="e">' + x.e + '</span><i>→</i><b>' + x.s + '</b></div><p class="aprova">GOT IT. ' + (x.nota || x.e + ' + ly = ' + x.s + '.') + '</p><div class="toca-linha vd centro">' + tocar(x.au) + '<span>Say it: <b>' + x.f + '</b></span></div>';
  else meio = '<div class="boca vd"><span class="e">' + x.e + '</span><i>→</i><b>?</b></div><p class="dica-aluno" style="text-align:center">Say the new form out loud. Then pick the bin it falls into.</p>'
    + (m.bin ? '<p class="recusa">Not that bin. ' + (x.b === 'o' ? 'Most words just add -ly.' : x.b === 's' ? 'Some words don’t change at all.' : 'One word changes completely.') + '</p>' + mostra('mq' + m.sel, x.e + ' → <b>' + x.s + '</b> · ' + BINS[x.b]) : '');
  return cab(c) + fita + '<div class="maq">' + meio + '</div>' + bins;
};

R.erro = function (c) {
  var e = S.er, n = e.n, fim = n >= ER.length, x = ER[Math.min(n, ER.length - 1)];
  if (fim) return cab(c) + trilha(ER, n) + '<div class="foco"><div class="pergunta vd"><small>THE SPEAKERS ARE QUIET</small><h2>Six fixed. Five go from the thing to the doing. Number five goes the other way: a good singer.</h2></div></div>';
  var certo = e.toc === x.w, ws = x.f.split(' ');
  var frase = '<div class="frase-er vd' + (certo ? ' limpa' : ' chia') + '"><span class="caixa-som">' + (certo ? '🔈' : '🔊') + '</span><div class="pals">' + ws.map(function (w, i) {
    if (certo && i === x.w) { var pont = w.replace(/[a-z]+/i, ''); return '<span class="pal certo"><s>' + w.replace(/[.,]/g, '') + '</s> ' + x.ok + pont + '</span>'; }
    return '<button type="button" class="pal' + (e.toc === i ? ' errado' : '') + '" data-a="er" data-n="' + i + '"' + (certo ? ' disabled' : '') + '>' + w + '</button>';
  }).join('') + '</div></div>';
  return cab(c) + trilha(ER, n) + '<div class="foco">' + frase
    + (certo ? '<p class="aprova">GOT IT. ' + (x.nota || 'A doing needs the doing-word: <b>' + x.ok + '</b>.') + '</p><div class="toca-linha vd centro">' + tocar(x.au) + '<span>Play the clean sentence. Say it: <b>' + x.diz + '</b></span></div><div style="text-align:center"><button type="button" class="btn" data-a="er-prox">Next sentence</button></div>'
      : (e.toc >= 0 ? '<p class="recusa">That word is fine. Look for the one on the wrong channel. Ask: who, or how?</p>' + mostra('er' + n, x.diz) : '<p class="dica-aluno" style="text-align:center">Read it out loud. Tap the word that squeals.</p>'))
    + '</div>';
};

R.nove = function (c) {
  var p = S.pads, x = p.sel >= 0 ? PADS[p.sel] : null, todos = Object.keys(p.foi).length === PADS.length;
  var grade = '<div class="pads">' + PADS.map(function (q, i) {
    return '<button type="button" class="pad' + (p.sel === i ? ' on' : '') + (p.foi[i] ? ' feito' : '') + '" data-a="pad" data-n="' + i + '"><small>PAD ' + (i + 1) + '</small><b>' + q.n + '</b></button>';
  }).join('') + '</div>';
  var lado = x ? '<div class="pergunta vd' + (p.foi[p.sel] ? ' ja' : '') + '"><small>PAD ' + (p.sel + 1) + '</small><h2>' + x.n + '</h2></div><p class="dica-aluno">A whole sentence with <b>good</b> or <b>well</b> (or -ly). Out loud.</p>'
    + mostra('pad' + p.sel, x.diz) + (p.foi[p.sel] ? '' : '<div><button type="button" class="btn so-prof" data-a="pad-foi">Said it · light the pad</button></div>')
    : '<div class="pergunta vd"><small>NINE PADS</small><h2>' + (todos ? 'Nine sentences, from one word each.' : 'Tap any pad.') + '</h2></div>';
  return cab(c) + '<div class="mesa-pads">' + grade + '<div class="lado-pads">' + lado + '</div></div>';
};

R.balcao = function (c) {
  var b = S.balcao, n = b.n, fim = n >= BALCAO.length, x = BALCAO[Math.min(n, BALCAO.length - 1)];
  if (fim) return cab(c) + trilha(BALCAO, n) + '<div class="foco"><div class="pergunta vd"><small>THE SHOP IS CLOSED</small><h2>One fact, two ways, and now about you: good for the thing, well for the doing.</h2></div></div>';
  var corpo = '<div class="balcao"><div class="dono vd" style="background-image:url(' + img('vitrola') + ')"><small>THE OWNER · ' + x.tag + '</small><div class="toca-linha">' + tocar(x.au) + '<span>normal</span>' + tocar(x.slow, 1) + '<span>slow</span></div></div>'
    + '<div class="foco"><div class="pergunta vd' + (b.foi[n] ? ' ja' : '') + '"><small>QUESTION ' + (n + 1) + ' OF ' + BALCAO.length + '</small>' + ((S.ouviu || {})[x.slow] && !(S.ouviu || {})[x.au] ? transcricao(x.slow, '<b>' + x.q + '</b>', 'bcq' + n) : transcricao(x.au, '<b>' + x.q + '</b>', 'bcq' + n)) + '</div>'
    + (b.foi[n] ? follow('FOLLOW-UP', x.fup, x.fst, [], 'bc' + n, mostra('bcf' + n, x.fex, 1)) + '<div style="text-align:center"><button type="button" class="btn" data-a="seq-prox" data-c="balcao">Next question</button></div>'
      : '<div class="acoes-fup" style="display:flex;flex-wrap:wrap;gap:10px;justify-content:center;align-items:center">' + mostra('bc' + n, x.ex, 1) + '<button type="button" class="btn so-prof" data-a="seq-foi" data-c="balcao">Answered · show the follow-up</button></div>' + fala('bc' + n + 'a', x.st, []) + '<p class="dica-aluno" style="text-align:center">Play the question. Answer out loud.</p>')
    + '</div></div>';
  return cab(c) + trilha(BALCAO, n) + corpo;
};

R.show = function (c) {
  var s = S.show, n = s.n, fim = n >= ATOS.length, x = ATOS[Math.min(n, ATOS.length - 1)];
  if (fim) return cab(c) + trilha(ATOS, n) + '<div class="foco"><div class="pergunta vd"><small>THREE ACTS JUDGED</small><h2>Who wins the show? Say why: what they are like, and how they do it.</h2></div>'
    + follow('THE VERDICT', 'The winner is …', ['The winner is … because …', '… sings / dances …', '… is a good …'], [], 'veredito', mostra('veredito', 'The winner is the magician. She isn’t a great singer, but she does her magic beautifully, and she’s a good dancer too.', 1)) + '</div>';
  var pt = s.partes[n] || {}, err = s.erro[n];
  var palco = '<div class="palco-show vd" style="background-image:url(' + img('palco') + ')"><small>' + x.n + '</small><div class="notas"><span><em>VOICE</em>' + estrelas(x.voz) + '</span><span><em>DANCE</em>' + estrelas(x.danca) + '</span></div></div>';
  var marca = '<div class="partes"><h5>WHAT YOU HEAR</h5>' + PARTES.map(function (p) { return '<button type="button" class="chip frase' + (pt[p.k] ? ' on' : '') + '" data-a="sh-parte" data-v="' + p.k + '">' + p.t + '</button>'; }).join('')
    + '<button type="button" class="chip frase erro-ouvido' + (err ? ' on' : '') + '" data-a="sh-erro">MISTAKE HEARD: sings good / a well singer</button></div>';
  return cab(c) + trilha(ATOS, n) + '<div class="show">' + palco + '<div class="lado-show"><div class="pergunta vd"><small>JUDGE ' + (x.quem === 'she' ? 'HER' : 'HIM') + '</small><h2>What is ' + x.quem + ' like? How does ' + x.quem + ' sing and dance?</h2></div>'
    + fala('sh' + n, [x.quem.charAt(0).toUpperCase() + x.quem.slice(1) + '’s a good / bad …', x.quem.charAt(0).toUpperCase() + x.quem.slice(1) + ' sings …', 'but ' + x.quem + ' dances …'], ['well', 'badly', 'beautifully', 'slowly', 'loudly', 'really'])
    + (err ? '<p class="recusa">Fix it together: the doing is <b>sings well</b>; the thing is <b>a good singer</b>.</p>' : '')
    + mostra('sh' + n, x.ex, 1) + marca + '<div><button type="button" class="btn" data-a="sh-prox">Next act</button></div></div></div>';
};

R.fim = function (c) {
  return cab(c) + '<div class="fim">' + escritaFinal('fim', (S.txt || {}).fim || '', (S.salvo || {}).fim, 'My favorite band is … They are a good band.\nThe singer sings …', 'Your review',
    ['is a good ', ' sings ', ' plays ', 'well', 'badly', 'beautifully', 'loudly', 'very '], ['YOUR REVIEW', 'A band or a singer you know. What are they like? How do they play and sing?'])
    + '<div class="lado-fim"><div class="grande vd"><span><b>THE THING</b> · a <u>good</u> band · the band is <u>good</u></span><span><b>THE DOING</b> · they play <u>well</u> · she sings <u>beautifully</u></span><small>Most words add -ly: slow → slowly. Fast and hard stay the same. Good becomes well.</small></div>'
    + mostra('fim', 'My favorite band is Coldplay. They are a good band.<br>The singer sings beautifully, and the drummer plays really fast.<br>Live, they play loudly, but the songs are quiet and sad.<br>I sing their songs badly, but happily!', 1)
    + '<p class="hw"><a class="pilula" href="HW/" target="_blank" rel="noopener">Homework for the student →</a></p></div></div>';
};

/* ---------- o fader que sobe com o dedo ---------- */
var ARR = null;
function sincroniza() { var inp = document.querySelector('[data-campo="fd"]'); if (inp) { inp.value = S.fd.n + ':' + S.fd.esc + ':' + S.fd.err; inp.dispatchEvent(new Event('input', { bubbles: true })); } }
function escolhe(k) {
  var f = S.fd, x = FD[f.n]; if (!x || f.esc === x.k) return;
  if (k === x.k) { f.esc = k; f.err = -1; } else { f.err = k; f.esc = -1; }
  sincroniza(); pinta();
}
document.addEventListener('pointerdown', function (ev) {
  var k = ev.target.closest && ev.target.closest('.knob'); if (!k || k.disabled) return;
  ev.preventDefault(); ARR = { b: k, tr: k.closest('.trilho-f'), k: +k.getAttribute('data-k') }; k.classList.add('mexe');
  try { k.setPointerCapture(ev.pointerId); } catch (e) { /* segue */ }
});
document.addEventListener('pointermove', function (ev) {
  if (!ARR) return; ev.preventDefault();
  var r = ARR.tr.getBoundingClientRect(), v = Math.max(0, Math.min(1, (r.bottom - ev.clientY) / r.height));
  ARR.v = v; ARR.b.style.setProperty('--n', v);
});
function solta() {
  if (!ARR) return; var a = ARR; ARR = null; a.b.classList.remove('mexe');
  if ((a.v || 0) > .7) escolhe(a.k); else a.b.style.setProperty('--n', 0);
}
document.addEventListener('pointerup', solta); document.addEventListener('pointercancel', solta);
CAMPOS.fd = function (v) {
  var p = String(v).split(':').map(Number); if (p.length < 3 || p[0] !== S.fd.n) return;
  if (p[1] !== S.fd.esc || p[2] !== S.fd.err) { S.fd.esc = p[1]; S.fd.err = p[2]; pinta(); }
};

/* ---------- os toques desta aula ---------- */
TOQUES.lj = function (b, n, v) { if (S.loja.esc[n] === 0) return false; S.loja.esc[n] = +v; };
TOQUES.fato = function (b, n) { var l = S.loja; if (l.toc[6] && l.toc[10]) return false; if (FATO_OK[n]) { l.toc[n] = 1; l.err = -1; } else l.err = n; };
TOQUES.fd = function (b, n) { escolhe(n); return false; };
TOQUES['fd-prox'] = function () { S.fd = { n: S.fd.n + 1, esc: -1, err: -1 }; sincroniza(); };
TOQUES.dc = function (b, n) { var x = DC[S.dc.n]; if (!x || S.dc.esc === x.k) return false; S.dc.esc = n; };
TOQUES['dc-prox'] = function () { S.dc = { n: S.dc.n + 1, esc: -1 }; };
TOQUES['mq-sel'] = function (b, n) { S.mq.sel = n; S.mq.bin = ''; };
TOQUES['mq-bin'] = function (b, n, v) { var m = S.mq, x = MQ[m.sel]; if (!x || m.feitos[m.sel]) return false; m.bin = v; if (v === x.b) m.feitos[m.sel] = 1; };
TOQUES.er = function (b, n) { var x = ER[S.er.n]; if (!x || S.er.toc === x.w) return false; S.er.toc = n; };
TOQUES['er-prox'] = function () { S.er = { n: S.er.n + 1, toc: -1 }; };
TOQUES.pad = function (b, n) { S.pads.sel = n; };
TOQUES['pad-foi'] = function () { S.pads.foi[S.pads.sel] = 1; };
TOQUES['sh-parte'] = function (b, n, v) { var s = S.show; s.partes[s.n] = s.partes[s.n] || {}; s.partes[s.n][v] = !s.partes[s.n][v]; };
TOQUES['sh-erro'] = function () { var s = S.show; s.erro[s.n] = !s.erro[s.n]; };
TOQUES['sh-prox'] = function () { S.show.n++; };

/* 10/11/2026 · AS EXPLICAÇÕES (kit/formatos3.js) · G5 · uma cena curta nova (k: gx) antes de fader.
   Explicação 100% em inglês: see → notice → use (o aluno fala ou escreve uma frase dele no fim). */
var GX_EXPLICA = { formato: 'contraste', titulo: 'This or that? Two moments in the shop.',
  a: { t: 'The thing', falas: [['Owner', 'Do you like the band?'], ['You', 'Yes. The singer is <mark>good</mark>.']], d: 'You talk about a person or a thing: the singer, the band, the guitar. That is <b>good</b>.' },
  b: { t: 'The doing', falas: [['Owner', 'How does the drummer play?'], ['You', 'He plays <mark>well</mark>.']], d: 'You talk about how someone does it: plays, sings, runs. That is <b>well</b>.' },
  pergunta: 'Good and well. What is different in the situation?',
  pergunta2: 'Now you. Which one fits?',
  itens: [
    { p: 'About the guitar player:', o: ['She is a good guitar player.', 'She is a well guitar player.'], c: 0, d: 'A person: good.' },
    { p: 'About the singer. How does she sing?', o: ['She sings good.', 'She sings well.'], c: 1, d: 'How she does it: well.' },
    { p: 'About the new song:', o: ['It’s a good song.', 'It’s a well song.'], c: 0, d: 'A thing: good.' },
    { p: 'About the drummer. How does he play?', o: ['He plays well.', 'He plays good.'], c: 0, d: 'How he does it: well.' }
  ],
  nota: 'Who or what: <b>good</b> (a good band). How someone does it: <b>well</b> (plays well). Not “plays good”.',
  uso: { p: 'Your turn. One band or one singer you know. Say what is good, and how they play or sing.', molde: ['… is a good …', '… sings well.'], ex: 'My favorite band has a good drummer. He plays really well.' } };
R.gx = function (c) { return cab(c) + FM.ex('gx_isso', GX_EXPLICA); };
