/* ============================================================
   AFTER THE JOURNEY · FRIEREN · LIVE CLASS            05/10/2026
   WOLFLIX B1 · a duração na frente do nome: a ten-year journey.
   O MUNDO: o mapa da jornada e o diário da cronista. A aluna refaz a
   rota (cada parada abre a duração daquele trecho da história), corrige
   a cópia do aprendiz, e escreve o próprio diário com o corretor.
   O erro vem ANTES da regra (o catálogo: "a regra aparece antes do erro
   dela" era o problema da aula antiga).
   Motor da Stressed Out (contrato com o fio 05-sala.js): S.i é a cena,
   vai(n) troca, botões do professor em footer.foot, .zm e .so-prof; o
   mesmo estado gera o mesmo DOM dos dois lados (rodízio fixo); texto
   digitado passa ao outro lado sozinho.
   Mantido da aula antiga: as falas reais do trailer (lidas do quadro em
   24/09), a cópia do aprendiz, o rascunho do grimório, os casos dos
   meteoros e as imagens (ComfyUI).
   23/10/2026 · OS FORMATOS NOVOS (kit/formatos.js + formatos2.js), mesmas
   páginas, nada de escolher entre "ten-year / ten-years / ten years".
   III trailer: antes = três toques; durante = verdadeiro ou mentira com ▶
   nos tempos da legenda; depois = dois toques + régua. IV = a carta do
   Heiter (tocar o tempo na frente do nome → completar a regra). V = o
   diário: verdadeiro ou mentira; fato por fato o aluno FALA a etiqueta e
   toca Check; recontar tocando cada etiqueta. VI = achar a palavra errada
   (FM.erro, a placa no canto). VII = 6 meteoros (era 7): fala + Check.
   Motor velho: TOQUES + mantemVideo aqui dentro. I, II, VIII e IX ficam.
   ============================================================ */
window.__wlModoAlunoProprio = true;
var ALUNO = /(^|[?&])papel=aluno/.test(location.search) || document.documentElement.classList.contains('wl-sala-aluno');
var NA_SALA = /(^|[?&])sala=/.test(location.search) && window.parent !== window;

/* ---------- o roteiro ---------- */
var EST = { w: 'Write', o: 'Out loud', l: 'Listen', f: 'Focus' };
var L = [
  { k: 'capa', est: null, img: 'meteoros' },
  { k: 'tempo', est: 'o', min: 6, img: 'estrada', rot: 'I · Your Longest Journey', t: 'Before the elf: time in your life.', p: 'Pick a card. Answer out loud. Then the follow-up comes.' },
  { k: 'mapa', est: 'o', min: 5, img: 'mapa', rot: 'II · The Journey Map', t: 'Three stops. Every stop is a piece of the story.', p: 'Tap the next stop on the map. Read the page, then answer the question.' },
{ k: 'trailer', est: 'l', min: 10, img: 'meteoros', rot: 'III · The Trailer', t: 'Japanese voices, English subtitles in the picture.', p: 'Tap an answer first. Watch the trailer: tap ▶ to see any moment again. Then two more taps.' },
{ k: 'regra', est: 'f', min: 6, img: 'diario', rot: 'IV · The Label', t: 'It lasted ten years. It was a ten-year journey.', p: 'Read Heiter’s letter out loud. Tap the time in front of a noun. Then finish the rule.' },
{ k: 'diario', est: 'l', min: 6, img: 'estrada', rot: 'V · The Chronicle', t: 'Two apprentices read the diary of the road.', p: 'Listen once for the story. Then fact by fact: hear it, say the label out loud, then tap Check.' },
{ k: 'copia', est: 'f', min: 5, img: 'diario', rot: 'VI · The Apprentice’s Copy', t: 'The apprentice’s copy: one wrong word in each line.', p: 'Read each line out loud. One word is wrong. Say the fix. Then tap Check.' },
{ k: 'meteoros', est: 'o', min: 6, img: 'chuva', rot: 'VII · Before the Meteors Fall', t: 'Six facts from the journey. Name each one with the time in front.', p: 'Say the fact back. Then say the name: a ten-year journey. Tap Check: every Check lights a meteor.' },
{ k: 'cronica', est: 'w', min: 6, extra: 1, img: 'diario', rot: 'VIII · Your Chronicle', t: 'Now you are the chronicler. Three lines about your own life.', p: 'Pick a page. Write it with the time in front of a noun. Then read it out loud.' },
{ k: 'fim', est: 'o', min: 6, img: 'outono', rot: 'IX · Shall We Go?', t: 'The trailer ends with “Shall we go?”', p: 'Your answer from the start, again. Then the last questions.' }
];

/* I · o tempo na sua vida */
var TEMPO = [
  { k: 'THE LONGEST TRIP', q: 'What is the longest trip you have ever taken? How long was it?', fup: 'Now name it with the time in front.', st: ['It took … hours / days.', 'It was a …-hour trip to …'], pal: ['by car', 'by bus', 'by plane', 'with my family'] },
  { k: 'EVERY DAY', q: 'What do you do every day that takes five or ten minutes?', fup: 'Would you miss it? Name it with the time in front.', st: ['Every morning I …', 'I have a ten-minute … every day.'], pal: ['coffee', 'walk', 'shower', 'prayer', 'scrolling'] },
  { k: 'AT WORK', q: 'How long have you been in your job or your course?', fup: 'Was it worth it? Say it with the time in front.', st: ['I have worked there for … years.', 'It has been a …-year …'], pal: ['job', 'course', 'contract', 'career'] },
  { k: 'WAITING', q: 'What is the longest you have ever waited for something?', fup: 'Was the wait worth it?', st: ['I waited … for …', 'It was a …-month wait.'], pal: ['a result', 'a letter', 'a visa', 'a person'] },
  { k: 'TEN YEARS', q: 'Ten years ago, where were you?', fup: 'Does ten years feel long or short to you?', st: ['Ten years ago, I was …', 'Ten years feels …'], pal: ['school', 'another city', 'a kid', 'single'] }
];

/* II · o mapa: cinco paradas da história, na ordem da rota */
var PARADAS = [
  { k: 'THE DEMON KING’S CASTLE', dur: 'TEN YEARS', x: 22, y: 30, img: 'castelo', h: 'The story starts where others end', t: 'A hero and his party travel for ten years and defeat the Demon King. Parades, statues, peace. In most stories, that is the last page. Here, it is the first: the story is about what happens after.', q: 'Why do most stories stop when the hero wins? What would you want to see after?', st: ['I think they stop because …', 'After, I would want to see …'] },
  { k: 'THE BLUE FLOWER FIELD', dur: 'A THOUSAND YEARS', x: 50, y: 66, img: 'flores', h: 'A thousand years is a long time', t: 'Frieren has lived for more than a thousand years, and she will live a thousand more. For her, a ten-year journey is a short trip. A human life is a very short visit.', q: 'If you knew you would live a thousand years, what would you stop worrying about?', st: ['I would stop …', 'But I would still …'] },
  { k: 'THE HILL', dur: 'FIFTY YEARS LATER', x: 78, y: 44, img: 'chuva', h: 'Fifty years later', t: 'The party meets again after fifty years to watch a meteor shower, as they promised. Himmel is old now. Soon after, he dies. At his funeral, Frieren cries and cannot explain it: she knew him for ten years, and she never really tried to know him.', q: 'Is there someone you wish you had asked more questions? (Or a teacher, a friend you lost touch with.)', st: ['I wish I had asked … about …'] }
];

/* III · o trailer (oficial, áudio japonês, legenda em inglês no quadro) */
var YT = 'Iwr1aLEDpe4';
/* 23/10/2026 · OS FORMATOS NOVOS (kit/formatos.js) */
var PRESA = 'a ten-<b>year</b> journey<br>it lasted ten <b>years</b><br>a thousand-<b>year-old</b> elf<br><b>an</b> eight-hour sleep';
/* III · antes do play: três toques (o 3º é opinião) */
var TR_ANTES = { formato: 'escolhe', titulo: 'Before you watch · tap an answer', itens: [
  { p: 'The trailer starts with a crowd. What do they say to the party?', o: ['Thank you for defeating the Demon King.', 'Go away!', 'Who are you?'], c: 0, d: '“Thank you for defeating the Demon King.”' },
  { p: 'The journey took ten years. Will Frieren call it long, or short?', o: ['long', 'short'], c: 1, d: 'Short! “It was a mere ten-year adventure.”' },
  { p: 'When you watch anime, how do you watch it?', o: ['with subtitles', 'dubbed', 'both'], c: -1, d: 'Say why: I watch it … because …' }
] };
/* III · durante: verdadeiro ou mentira, com ▶ nos tempos das falas (lidos da legenda na imagem em 24/09) */
var TR_VER = { formato: 'verdadeOuMentira', titulo: 'Watch, then tap · true or lie?', itens: [
  { f: 'Himmel asks if it has really been ten years.', t: true, tm: '0:23' },
  { f: 'Frieren says the journey was a long, hard adventure.', t: false, tm: '0:29', c: 'She says it was a mere ten-year adventure: for her, short.' },
  { f: 'The narrator says fifty years are a trifling thing to her.', t: true, tm: '0:34' },
  { f: 'Heiter says her life will be shorter than ours.', t: false, tm: '0:47', c: 'Much longer than we can imagine.' },
  { f: 'Frieren says she knew human lives were short.', t: true, tm: '1:05' }
] };
/* III · depois: dois toques de sentido + uma régua */
var TR_DEPOIS = { formato: 'escolhe', titulo: 'After the trailer · tap the meaning', itens: [
  { p: '“Fifty or even a hundred years are a trifling thing.” What does trifling mean here?', o: ['very small, not important', 'very big', 'very loud'], c: 0, d: 'Small, not important. For her, fifty years is a short time.' },
  { p: 'The last question: “Why didn’t I think to learn more about them?” Who is she talking about?', o: ['the Demon King', 'Himmel and the party', 'her teacher'], c: 1, d: 'Himmel and the party. She never tried to know them.' }
] };
var TR_REG = { formato: 'regua', titulo: 'Is ten years a short time?', frase: 'Ten years is a short time.', esquerda: 'Disagree', direita: 'Agree', depois: 'Say why. Start with: For Frieren, … / For me, … Use the label: a ten-year …' };
/* IV · a carta do Heiter: o tempo na frente do nome → a regra */
var CARTA = { de: 'Heiter · to Frieren, from the road',
  txt: 'Dear Frieren, our trip lasted ten years, and for you it was only [[a ten-year journey]]. The next one is shorter: [[a three-day walk]] to the village, then [[a two-month trip]] north. You are [[a thousand-year-old elf]], and you are still late for breakfast! Please sleep less. [[An eight-hour sleep]] is enough, even for you. The meteors come back in fifty years. Will you wait for us?',
  assina: 'Heiter' };
var REGRA = [
  { a: 'In front of a noun: a ten-', par: ['year', 'years'], c: 0, b: ' journey. No S, and a hyphen.' },
  { a: 'Time is the noun: our trip lasted ten ', par: ['year', 'years'], c: 1, b: '. Keep the S.' },
  { a: 'Age in front of a noun: a thousand-', par: ['year-old', 'years-old'], c: 0, b: ' elf.' },
  { a: 'The sound decides: ', par: ['a', 'an'], c: 1, b: ' eight-hour sleep.' }
];



/* V · O DIÁRIO (2.0, 20/10/2026): dois aprendizes leem o diário da estrada (edge-tts, audio/diario.mp3 e diario-NN.mp3).
   Fala por fala: o aluno ouve o fato, diz a etiqueta (o tempo na frente do nome) e toca para conferir. */
var DIARIO = [
  ['FERN', 'Day one. Frieren says we have a long road ahead. The walk to the next town takes three days.'],
  ['STARK', 'Three days? And she calls that short.'],
  ['FERN', 'For her, it is. She waited fifty years to see the meteors with her old friends.'],
  ['STARK', 'Fifty years. My village is only twenty years old!'],
  ['FERN', 'Tonight we stop at an inn. We sleep for eight hours, and then we walk again.'],
  ['STARK', 'Eisen trained me for five years. Five long years.'],
  ['FERN', 'The old party traveled for ten years. Now we walk the same road.'],
  ['STARK', 'And the trip north takes two months on foot.'],
  ['FERN', 'Two months. Then she can talk to Himmel one more time.']
];
/* V · depois de ouvir a história: verdadeiro ou mentira */
var DG_TF = { formato: 'verdadeOuMentira', titulo: 'After you listen · true or lie?', itens: [
  { f: 'Stark thinks three days is a short walk.', t: false, c: 'Stark thinks it is long. Frieren thinks it is short.' },
  { f: 'Frieren waited fifty years to see the meteors with her old friends.', t: true },
  { f: 'They sleep for twelve hours at the inn.', t: false, c: 'Eight hours.' },
  { f: 'Frieren is going north to talk to Himmel one more time.', t: true }
] };
/* V · fato por fato (6): o aluno ouve, FALA a etiqueta e toca Check · i = a fala do diário */
var ROTULOS = [
  { i: 0, r: 'a three-day walk' },
  { i: 2, r: 'a fifty-year wait' },
  { i: 3, r: 'a twenty-year-old village' },
  { i: 4, r: 'an eight-hour sleep' },
  { i: 6, r: 'a ten-year journey' },
  { i: 7, r: 'a two-month trip' }
];
var DIARIO_DEPOIS = [
  { q: 'Which label from the diary is also true in your life? Say it with your own numbers.', r: 'I had a four-year apprenticeship as an electrician.' },
  { q: 'Stark thinks three days is long. What is long for you, and short for someone you know?', r: 'For me, a two-hour drive is long. For my father, it is a short trip.' }
];

/* VI · a cópia do aprendiz: uma palavra errada em cada linha (FM.erro, a placa no canto) */
var COPIA_ERRO = [
  { f: 'It was a mere <u>ten-years</u> adventure.', r: 'ten-year' },
  { f: 'It’s been ten <u>year</u>, huh?', r: 'years' },
  { f: 'To her, fifty or even a hundred years <u>is</u> a trifling thing.', r: 'are' },
  { f: 'Frieren, the life ahead of you will be <u>very</u> longer than we can imagine.', r: 'much' },
  { f: 'I knew human <u>lifes</u> were short, but', r: 'lives' }
];


/* VII · os meteoros (sem relógio: cada frase boa acende um meteoro) */
var METEOROS = [
  { cue: 'The party walked for ten years to reach the Demon King.', frame: 'It was a …', r: 'It was a ten-year journey.' },
  { cue: 'The meteor shower comes back every fifty years.', frame: 'It is a …', r: 'It is a fifty-year meteor shower.' },
  { cue: 'Frieren slept for three days after a big battle.', frame: 'She had a …', r: 'She had a three-day sleep.' },
  { cue: 'Fern studied magic with Heiter for eight years.', frame: 'She had an …', r: 'She had an eight-year apprenticeship. (AN: eight starts with a vowel sound.)' },
  { cue: 'The road north takes about two months on foot.', frame: 'It is a …', r: 'It is a two-month walk.' },
  { cue: 'The last one is yours: something in your life that lasted a long time.', frame: 'I had a …', r: 'Your own line: the time in front, no S.' }
];

/* VIII · a crônica dela */
var CRONICA = [
  { k: 'MY LONGEST JOURNEY', q: 'Your longest trip: where, how long, and one thing you remember.', pal: ['trip', 'drive', 'flight', 'journey', 'bus ride'] },
  { k: 'MY LONGEST WAIT', q: 'The longest you ever waited for something, and how it ended.', pal: ['wait', 'line', 'result', 'answer'] },
  { k: 'MY OLD FRIENDSHIP', q: 'A friend you have known for a long time, and what you did together.', pal: ['friendship', 'promise', 'trip', 'call'] },
  { k: 'MY DAILY HABIT', q: 'A short habit you have every day, and why you keep it.', pal: ['walk', 'break', 'prayer', 'coffee', 'workout'] }
];
var ESCREVE = ['It was a ', 'I had a ', 'an eight-', '-year ', '-month ', '-day ', '-hour ', '-year-old '];

var FIM_Q = ['One line: what is Frieren about, for someone who never watched anime?', 'Would you watch it? Is a slow story about time for you?', 'Frieren learned too late. What is one thing you want to learn about someone close to you this year?'];

/* as respostas (Show answer) · pedido do Carlos 05/10 */
var TEMPO_EX = ['It took twelve hours. It was a twelve-hour bus trip to Bahia.', 'I have a ten-minute coffee every morning. Yes, I would miss it!', 'I have worked there for six years. It has been a six-year job, and it was worth it.', 'I waited three months for my visa. It was a three-month wait.', 'Ten years ago, I was in college. Ten years feels short to me.'];
var PARADA_EX = ['I think they stop because the hero wins. After, I would want to see their normal life.', 'I would stop worrying about time. But I would still call my family every day.', 'I wish I had asked my grandfather about his childhood.'];
var CRONICA_EX = ['Last summer I took a twelve-hour bus trip to Salvador. I remember the sea at night.', 'I had a three-month wait for my visa. In the end, it arrived on my birthday!', 'I have a twenty-year friendship with Ana. We had a ten-day trip to Chile together.', 'I have a ten-minute walk every morning. It clears my head.'];
var FIM_R = ['It is about an elf who learns, too late, to know the people she loves.', 'I would watch it, because I like slow stories about time.', 'I want to ask my grandmother about her life when she was young.'];

/* ---------- o corretor (nível 1: a regra desta aula) ---------- */
var NUMS = 'one|two|three|four|five|six|seven|eight|nine|ten|eleven|twelve|thirteen|fourteen|fifteen|sixteen|seventeen|eighteen|nineteen|twenty|thirty|forty|fifty|sixty|seventy|eighty|ninety|hundred|thousand|million|\\d+';
var N = '(?:(?:' + NUMS + ')(?:[-\\s](?:' + NUMS + '))*)';
var UNI = 'year|month|week|day|hour|minute';
var NOMES = 'journey|adventure|trip|wait|walk|course|job|friendship|break|holiday|vacation|drive|flight|promise|apprenticeship|sleep|life|war|relationship|contract|project|program|class|lesson|meeting|movie|film|series|commute|ride|habit|plan|career|marriage|shower|delay|line|story|road|elf|dwarf|man|woman|boy|girl|house|tree|dog|cat|car|city|friend|mage|hero|book|castle|church|statue|baby|kid|child|building|company';
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  var semS = 'In front of a noun, the time has no S: a ten-year journey.';
  out = out.concat(A(new RegExp('\\b' + N + '-(?:' + UNI + ')s(?:-old)?\\b', 'g'), m, 0, semS));
  out = out.concat(A(new RegExp('\\b(?:a|an)\\s+(' + N + '\\s+(?:' + UNI + ')s)\\s+(?:' + NOMES + ')\\b', 'g'), m, 1, 'In front of a noun: a hyphen, and no S. A ten-year journey.'));
  out = out.concat(A(new RegExp('\\b(?:a|an)\\s+(' + N + '\\s+(?:' + UNI + '))\\s+(?:old\\s+)?(?:' + NOMES + ')\\b', 'g'), m, 1, 'Join them with a hyphen: a ten-year journey.'));
  out = out.concat(A(new RegExp('\\b(?:a|an)\\s+(' + N + '[\\s-](?:' + UNI + ')s?[\\s-]old)\\s+(?:' + NOMES + ')\\b', 'g'), m, 1, 'Age in front of a noun: a thousand-year-old elf. Hyphens, no S.', function (x) { return !/^[a-z0-9-]+-(?:year|month|week|day)-old$/.test(x[1]); }));
  out = out.concat(A(new RegExp('\\b(?:' + NOMES + ')\\s+(of\\s+' + N + '\\s+(?:' + UNI + ')s)\\b', 'g'), m, 1, 'English puts the time in front: a ten-year journey.'));
  out = out.concat(A(/\b(a)\s+(?:eight|eighteen|eighty|eleven|8|11|18|80)\b/g, m, 1, 'Eight and eleven start with a vowel sound: AN eight-year …'));
  return out;
};

/* ---------- o estado (o mesmo dos dois lados) ---------- */
var TOQUES = {};   /* 23/10/2026 · os formatos novos (formatos.js) penduram os toques aqui */
var S = { i: 0, faixa: 1, fala: {}, tempo: { sel: -1, foi: {} }, mapa: { n: 0, aberta: -1 }, tr: { passo: 0 },
  cr: { sel: -1, txt: {}, salvo: {} }, fim: { vira: {} }, resp: {}, dg: { p: 0 }, ouviu: {}, trans: {}, lento: false };

/* ---------- utilitários ---------- */
function h(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;'); }
function ordem(lista, semente) { var a = lista.slice(), n = a.length; var r = semente % n; return a.slice(r).concat(a.slice(0, r)); }   /* rodízio fixo, sem sorteio */
function img(n) { return (window.__WL_IMG && window.__WL_IMG[n]) || 'img/live-' + n + '.webp'; }   /* __WL_IMG: o HTML de teste, tudo num arquivo */
function cab(c) { return '<div class="cab st-' + c.est + '"><span class="rot"><b>' + c.est.toUpperCase() + '</b>' + EST[c.est] + ' · ' + c.rot + '</span><h1>' + c.t + '</h1><p>' + c.p + '</p></div>'; }
function fala(chave, frases, palavras) {
  var on = S.fala[chave] || {};
  return '<div class="diz"><h5>SAY IT WITH</h5><div class="chips">' + frases.map(function (f, i) { return '<button type="button" class="chip frase' + (on['f' + i] ? ' on' : '') + '" data-a="fala" data-c="' + chave + '" data-x="f' + i + '">' + f + '</button>'; }).join('') + '</div>'
    + (palavras && palavras.length ? '<h5>WORDS YOU CAN USE</h5><div class="chips">' + palavras.map(function (w) { return '<span class="chip palavra">' + w + '</span>'; }).join('') + '</div>' : '') + '</div>';
}
function follow(rot, q, frases, palavras, chave, extra) { return '<div class="follow"><small>' + rot + '</small><p class="q">' + q + '</p>' + fala(chave, frases, palavras) + (extra || '') + '</div>'; }
/* 05/10 · o Carlos: "toda pergunta tem que ter a resposta, com um botão Show answer pro aluno saber se respondeu certo".
   Pergunta pessoal mostra uma resposta-modelo (EXAMPLE ANSWER). O toque passa ao outro lado como qualquer botão. */
function mostra(chave, texto, modelo) {
  if (S.resp[chave]) return '<div class="resposta"><b>' + (modelo ? 'EXAMPLE ANSWER' : 'ANSWER') + '</b><span>' + texto + '</span></div>';
  return '<div class="resp-btn"><button type="button" class="pilula" data-a="resp" data-c="' + chave + '">Show answer</button></div>';
}
/* 23/10/2026 · o quadro com enablejsapi (o ▶ dos formatos precisa mandar o vídeo pular) */
var YT_API = '&enablejsapi=1' + (/^https?:$/.test(location.protocol) ? '&origin=' + encodeURIComponent(location.origin) : '');
function iframe(yt, titulo) { return '<div class="video"><iframe src="https://www.youtube-nocookie.com/embed/' + yt + '?rel=0&modestbranding=1&playsinline=1' + YT_API + '" title="' + h(titulo) + '" allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowfullscreen loading="lazy"></iframe></div>'; }
/* abas dos passos (23/10/2026, a aluna caiu da chamada e voltou presa no BEFORE): cada aba é um BOTÃO que vai direto ao
   passo e NUNCA trava, para quem cai voltar para onde a aula está. acao = o toque que o botão "próximo" da aula já usa;
   ns = o n de cada aba (padrão 0,1,2); ch = o data-c, se o toque da aula usa; acao false = aba parada. A aba atual leva aria-current. */
function abasPrepara() {
  if (abasPrepara.ok) return; abasPrepara.ok = 1;
  try {
    var st = document.createElement('style'); st.id = 'wl-abas-css';
    st.textContent = '.tempos button{appearance:none;-webkit-appearance:none;display:inline-flex;align-items:center;min-height:34px;padding:0 13px;border-radius:999px;font:700 13px var(--ui);color:var(--t3);background:transparent;border:1px solid var(--fio);cursor:pointer;transition:color .15s,border-color .15s,background-color .15s}'
      + '.tempos button.on{color:#fff;background:var(--ac);border-color:var(--ac)}'
      + '.tempos.tres button.on{background:var(--l);border-color:var(--l);color:#0b1a24}'
      + '.tempos button.foi{color:var(--ok);border-color:rgba(134,217,166,.45)}'
      + '.tempos button:not(.on):hover{color:var(--t1,#fff);border-color:var(--fio2,currentColor)}'
      + '.tempos button:focus-visible{outline:2px solid var(--bt2,var(--l,#fff));outline-offset:3px}';
    var hd = document.head || document.documentElement; hd.insertBefore(st, hd.firstChild);   /* primeiro da fila: o CSS da aula, que vem depois, ainda manda */
  } catch (e) { /* sem o estilo extra, as abas seguem funcionando */ }
  /* a cena se repinta no clique: o foco volta para a aba que acabou de ser tocada (teclado) */
  document.addEventListener('click', function (ev) {
    var b = ev.target.closest && ev.target.closest('.tempos button[data-a]'); if (!b) return;
    var a = b.getAttribute('data-a'), n = b.getAttribute('data-n');
    setTimeout(function () {
      var nb = document.querySelector('.tempos button[data-a="' + a + '"][data-n="' + n + '"]');
      if (nb && nb !== document.activeElement) { try { nb.focus({ preventScroll: true }); } catch (e) { /* segue */ } }
    }, 0);
  }, true);
}
function abas3(rot, passo, acao, ns, ch) {
  abasPrepara();
  return '<div class="tempos tres" role="group" aria-label="Steps">' + rot.map(function (t, i) {
    var cl = i === passo ? 'on' : i < passo ? 'foi' : '';
    if (acao === false) return '<span class="' + cl + '">' + t + '</span>';
    return '<button type="button" class="' + cl + '" data-a="' + acao + '" data-n="' + (ns ? ns[i] : i) + '"' + (ch != null ? ' data-c="' + ch + '"' : '') + (i === passo ? ' aria-current="step"' : '') + '>' + t + '</button>';
  }).join('') + '</div>';
}
function trilha(lista, n) { return '<div class="tempos">' + lista.map(function (_, i) { return '<span class="' + (i === n ? 'on' : i < n ? 'foi' : '') + '">' + (i + 1) + '</span>'; }).join('') + '</div>'; }

/* ---------- as cenas ---------- */
var R = {};
R.capa = function () {
  var faixa = (!NA_SALA && S.faixa) ? '<div class="faixa"><span class="live">LIVE</span><div><b>This lesson is made for Live Lesson</b><small>Open it with your student from the platform: they tap, write and decide on their own screen. Sharing your screen also works: every button is on your side.</small></div><button type="button" class="x" data-a="faixa" aria-label="Close">×</button></div>' : '';
  return '<div class="capa"><div class="lado-a"><span class="kick">WOLFLIX · FRIEREN: BEYOND JOURNEY’S END · B1</span><h1>After the <b>Journey</b></h1>'
    + '<p class="citacao">“It was a mere <em>ten-year</em> adventure.”<small>Frieren, the elf mage · 0:29</small></p>'
    + '<div class="chipsx"><span class="pilula">a ten-year journey</span><span class="pilula">it lasted ten years</span><span class="pilula">a thousand-year-old elf</span><span class="pilula">Live Class · W·O·L·F</span></div>'
    + '<button type="button" class="btn cheio" data-a="ir" data-n="1">Open the map</button>' + faixa + '</div>'
    + '<div class="foto"><img src="' + img('meteoros') + '" alt="A meteor shower over a hill with blue flowers"><div class="selo"><span>10</span><small>YEARS ON THE ROAD</small></div></div></div>';
};
R.tempo = function (c) {
  var t = S.tempo;
  var grade = '<div class="cartas' + (t.sel >= 0 ? ' mini' : '') + '">' + TEMPO.map(function (x, i) {
    return '<button type="button" class="carta' + (t.sel === i ? ' on' : '') + (t.foi[i] ? ' feita' : '') + '" data-a="tempo" data-n="' + i + '"><small>0' + (i + 1) + '</small><b>' + x.k.charAt(0) + x.k.slice(1).toLowerCase() + '</b></button>';
  }).join('') + '</div>';
  if (t.sel < 0) return cab(c) + grade + '<p class="dica-aluno" style="text-align:center">Tap a card.</p>';
  var x = TEMPO[t.sel];
  var corpo = '<div class="foco"><div class="pergunta vd' + (t.foi[t.sel] ? ' ja' : '') + '"><small>' + x.k + '</small><h2>' + x.q + '</h2></div>' + mostra('tp' + t.sel, TEMPO_EX[t.sel], 1);
  if (t.foi[t.sel]) corpo += follow('FOLLOW-UP', x.fup, x.st, [], 'tp' + t.sel);
  else corpo += '<div class="acoes-fup" style="display:flex;flex-wrap:wrap;gap:10px;justify-content:center;align-items:center"><button type="button" class="btn so-prof" data-a="tempo-foi">Answered · show the follow-up</button></div>' + fala('tp' + t.sel + 'a', [x.st[0]], x.pal) + '<p class="dica-aluno" style="text-align:center">Answer out loud.</p>';
  return cab(c) + grade + corpo + '</div>';
};
R.mapa = function (c) {
  var m = S.mapa, n = m.n;
  var pontos = PARADAS.map(function (p) { return p.x + ',' + p.y; }).join(' ');
  var feitos = PARADAS.slice(0, Math.max(1, Math.min(n + 1, PARADAS.length))).map(function (p) { return p.x + ',' + p.y; }).join(' ');
  var pinos = PARADAS.map(function (p, i) {
    var cls = i < n ? ' feito' : i === n ? ' vez' : '';
    return '<button type="button" class="pino' + cls + (m.aberta === i ? ' aberto' : '') + '" style="left:' + p.x + '%;top:' + p.y + '%" data-a="parada" data-n="' + i + '"' + (i > n ? ' disabled' : '') + '><i>' + (i + 1) + '</i><span>' + p.k.charAt(0) + p.k.slice(1).toLowerCase() + (i <= n ? '<em>' + p.dur + '</em>' : '') + '</span></button>';
  }).join('');
  var mapa = '<div class="mapa vd"><img src="' + img('mapa') + '" alt="A dark map of the continent"><svg viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true"><polyline class="rota" points="' + pontos + '"/><polyline class="rota feita" points="' + feitos + '"/></svg>' + pinos + '</div>';
  var lado;
  if (m.aberta < 0) lado = '<div class="pagina vd vazia"><small>THE CHRONICLER’S MAP</small><h3>' + (n >= PARADAS.length ? 'The whole route, from the castle to the hill.' : 'Tap stop ' + (n + 1) + ' on the map.') + '</h3><p>' + (n >= PARADAS.length ? 'Ten years on the road, a thousand years of life, fifty years of waiting. Now the trailer.' : 'Every stop opens one page of the story.') + '</p></div>';
  else {
    var p = PARADAS[m.aberta];
    var anda = m.aberta === n && n < PARADAS.length ? '<button type="button" class="btn anda" data-a="parada-prox">' + (n === PARADAS.length - 1 ? 'Close the map' : 'Walk to the next stop') + '</button>' : '';
    lado = '<div class="pagina vd"><div class="pfoto" style="background-image:url(' + img(p.img) + ')"><span class="dur">' + p.dur + '</span>' + anda + '</div><small>STOP ' + (m.aberta + 1) + ' · ' + p.k + '</small><h3>' + p.h + '</h3><p>' + p.t + '</p></div>'
      + follow('YOUR TURN', p.q, p.st, [], 'mp' + m.aberta, mostra('mp' + m.aberta, PARADA_EX[m.aberta], 1));
  }
  return cab(c) + '<div class="mesa-mapa">' + mapa + '<div class="lado-mapa">' + lado + '</div></div>';
};
R.trailer = function (c) {
  var v = S.tr, passo = v.passo;
  var tempos = abas3(['1 · BEFORE', '2 · WATCH', '3 · AFTER'], passo, 'tr-passo');
  var corpo;
  if (passo === 0) corpo = '<div class="fr-par"><div class="fr-col">' + FM.ex('tra', TR_ANTES) + '</div><div class="fr-col"><div class="fr-selo vd"><small>WOLFLIX · THE OFFICIAL TRAILER</small><b>Frieren: Beyond Journey’s End</b><span>Japanese voices, English subtitles in the picture. Read them.</span></div><div style="text-align:center"><button type="button" class="btn cheio" style="--c:var(--l)" data-a="tr-passo" data-n="1">Watch the trailer now</button></div></div></div>';
  else if (passo === 1) corpo = '<div class="fr-par"><div class="fr-col">' + iframe(YT, 'Frieren: Beyond Journey’s End · official trailer') + '<small class="fr-cred">Frieren: Beyond Journey’s End · official trailer · read the English subtitles · tap a time to see it again</small></div><div class="fr-col">' + FM.ex('trv', TR_VER) + '<div style="text-align:center"><button type="button" class="btn cheio" style="--c:var(--l)" data-a="tr-passo" data-n="2">After the trailer</button></div></div></div>';
  else corpo = '<div class="fr-par"><div class="fr-col">' + FM.ex('trd', TR_DEPOIS) + '</div><div class="fr-col">' + FM.ex('trr', TR_REG) + follow('FOLLOW-UP', 'What is the longest journey of your life? Not a trip: a journey. A school, a job, a city, a person.', ['It was a …-year …', 'It took me … years to …'], [], 'trf', mostra('trf', 'It was a four-year course at university. It took me four years to finish it.', 1)) + '</div></div>';
  return cab(c) + tempos + corpo;
};

/* ---------- o som (2.0): um player por arquivo, com pausa e 0.75× ---------- */
var SONS = {};
function aud(n) { return (window.__WL_AUD && window.__WL_AUD[n]) || 'audio/' + n; }
function marcaTocando(nome, on) { [].forEach.call(document.querySelectorAll('.play[data-x="' + nome + '"]'), function (b) { b.classList.toggle('on', on); }); }
function som(nome) {
  if (!SONS[nome]) {
    var a = SONS[nome] = new Audio(aud(nome)); a.preload = 'auto';
    a.addEventListener('play', function () { marcaTocando(nome, true); });
    a.addEventListener('pause', function () { marcaTocando(nome, false); });
    a.addEventListener('ended', function () { marcaTocando(nome, false); if (!S.ouviu[nome]) { S.ouviu[nome] = 1; pinta(); } });
  }
  return SONS[nome];
}
function tocar(nome, mini) {
  var on = SONS[nome] && !SONS[nome].paused;
  return '<span class="player' + (mini ? ' mini' : '') + '"><button type="button" class="play' + (on ? ' on' : '') + '" data-a="toca" data-x="' + nome + '" aria-label="Play"><span></span></button>'
    + (mini ? '' : '<button type="button" class="lento' + (S.lento ? ' on' : '') + '" data-a="lento" title="Slower">0.75×</button>') + '</span>';
}
R.diario = function (c) {
  var e = S.dg, passos = abas3(['1 · THE STORY', '2 · FACT BY FACT', '3 · TALK'], e.p, 'dg-p');
  if (e.p === 0) {
    var tx = DIARIO.map(function (f) { return '<b>' + f[0] + ':</b> ' + f[1]; }).join('<br>');
    var tr = S.trans.dg ? '<p class="dg-trans">' + tx + '</p>' : S.ouviu['diario.mp3'] ? '<div class="resp-btn" style="justify-content:flex-start"><button type="button" class="pilula" data-a="trans" data-c="dg">Show transcript</button></div>' : '<p class="dica-aluno" style="display:block">Listen first. The transcript comes after.</p>';
    return cab(c) + passos + '<div class="dg-mesa"><div class="dg-col"><div class="dg-ouvir vd"><small>THE CHRONICLE · 0:55</small><p>Fern and Stark walk north with Frieren. At night they read the diary of the road.</p>' + tocar('diario.mp3') + '</div>' + tr + '</div>'
      + '<div class="dg-col">' + FM.ex('dgq', DG_TF) + '<div><button type="button" class="btn" data-a="dg-p" data-n="1">Now fact by fact</button></div></div></div>';
  }
  if (e.p === 1) {
    var q = (S.fq || {}).dgl, fim = !!q && q.n >= ROTULOS.length;
    return cab(c) + passos + FM.ex('dgl', { formato: 'fala', rotulo: 'Fact', prox: 'Next fact', diga: 'Say the label out loud first', regra: PRESA, fim: 'Six labels. Now tell the chronicle again, in your own words.',
      itens: ROTULOS.map(function (x, k) { return { pista: tocar('diario-' + ('0' + x.i).slice(-2) + '.mp3', true) + ' <span class="fr-quem">' + DIARIO[x.i][0] + '</span> Listen to the fact, then name it.', resp: x.r }; }) })
      + (fim ? '<div style="text-align:center"><button type="button" class="btn" data-a="dg-p" data-n="2">Now talk</button></div>' : '');
  }
  return cab(c) + passos + '<div class="dg-mesa"><div class="dg-col">' + FM.ex('dgu', { formato: 'usa', titulo: 'Tell the chronicle again. Tap each label when you use it.', palavras: ROTULOS.map(function (x) { return x.r; }), fim: 'All six labels. Great chronicle!' }) + '</div>'
    + '<div class="dg-col">' + follow('TALK', DIARIO_DEPOIS[0].q, ['I had a …-year …', 'It was a …-hour …'], [], 'dgt', mostra('dgt', DIARIO_DEPOIS[0].r, 1)) + '</div></div>';
};
R.copia = function (c) {
  return cab(c) + FM.ex('cpe', { formato: 'erro', titulo: 'One word is wrong in each line. Say the right one.', itens: COPIA_ERRO, regra: PRESA });
};
R.regra = function (c) {
  return cab(c) + FM.carta('carta', CARTA, REGRA, { toque: 'Tap the time in front of a noun', pronta: 'The rule is ready. It stays in the corner on the next pages.' });
};
function ceuFM(feitas) {
  return '<div class="noite curta vd"><div class="ceu" aria-hidden="true">' + METEOROS.map(function (_, i) { return '<i class="met' + (i < feitas ? ' on' : '') + '" style="--x:' + (6 + i * 15) + '%;--y:' + (22 + (i % 3) * 22) + '%;--d:' + (i * 0.15) + 's"></i>'; }).join('') + '<span class="conta-met">' + feitas + ' / ' + METEOROS.length + ' METEORS</span></div></div>';
}
R.meteoros = function (c) {
  return cab(c) + FM.ex('met', { formato: 'fala', rotulo: 'Page', prox: 'Next page', diga: 'Say the fact back, then the name', regra: PRESA, fim: 'Six meteors. Every fact is in the grimoire.',
    lado: function (feitas) { return ceuFM(feitas); },
    itens: METEOROS.map(function (x) { return { pista: x.cue + ' <b>' + x.frame + '</b>', resp: x.r }; }) });
};
R.cronica = function (c) {
  var s = S.cr, grade = '<div class="cartas' + (s.sel >= 0 ? ' mini' : '') + '">' + CRONICA.map(function (x, i) { return '<button type="button" class="carta' + (s.sel === i ? ' on' : '') + (s.salvo[i] ? ' feita' : '') + '" style="--o:var(--w)" data-a="cr" data-n="' + i + '"><small>PAGE 0' + (i + 1) + '</small><b>' + x.k.charAt(0) + x.k.slice(1).toLowerCase() + '</b></button>'; }).join('') + '</div>';
  if (s.sel < 0) return cab(c) + grade;
  var x = CRONICA[s.sel];
  var esc = '<div class="escrita"><div class="pergunta vd ja"><small>' + x.k + '</small><h2>' + x.q + '</h2></div>'
    + WolfCorretor.papel('cr' + s.sel, s.txt[s.sel] || '', 'It was a three-day trip to …', 'Your chronicle')
    + '<div class="diz"><h5>TAP TO ADD</h5><div class="chips">' + ESCREVE.map(function (f) { return '<button type="button" class="chip frase" data-a="poe" data-x="' + h(f) + '">' + f.trim() + '</button>'; }).join('') + '</div><h5>WORDS YOU CAN USE</h5><div class="chips">'
    + x.pal.map(function (w) { return '<button type="button" class="chip palavra" data-a="poe" data-x="' + h(w) + ' ">' + w + '</button>'; }).join('') + '</div></div>'
    + mostra('cr' + s.sel, CRONICA_EX[s.sel], 1)
    + '<div class="pe"><span class="dica-aluno">Your teacher sees what you write.</span><span class="so-prof" style="color:var(--t3);font-size:14px">You see what the student writes, and the same red lines.</span>'
    + (s.salvo[s.sel] ? '<span class="salvo">Saved to My notes</span>' : '<button type="button" class="btn cheio" style="--c:var(--w)" data-a="salva-cr">Save to My notes</button>') + '</div></div>';
  return cab(c) + grade + esc;
};
R.fim = function (c) {
  var volta = S.tempo.foi[4] ? 'At the start you told me where you were ten years ago. Say it again, now with the time in front of a noun.' : 'Ten years ago, where were you? Say it with the time in front of a noun.';
  return cab(c) + '<div class="fim">' + follow('THE START COMES BACK', volta, ['Those were ten years of …', 'It was a ten-year …'], [], 'fim', mostra('fimv', 'Ten years ago, I was in college. Those were ten great years: a ten-year adventure!', 1))
    + '<div class="viras">' + FIM_Q.map(function (q, i) { return '<div class="vira-col"><button type="button" class="vira' + (S.fim.vira[i] ? ' on' : '') + '" data-a="fim-vira" data-n="' + i + '"><span class="face frente">LAST<b>' + (i + 1) + '</b></span><span class="face verso">' + q + '</span></button>' + (S.fim.vira[i] ? mostra('fq' + i, FIM_R[i], 1) : '') + '</div>'; }).join('') + '</div>'
    + '<div class="grande vd"><div><span>It lasted ten <b>years</b>.</span><span>A ten-<b>year</b> journey.</span><small>Time as a noun keeps the S. In front of a noun, a hyphen and no S: a <b>fifty-year</b> wait, a <b>thousand-year-old</b> elf, <b>an</b> eight-year apprenticeship.</small></div></div>'
    + '<p style="text-align:center;margin:0"><a class="pilula" href="HW/" target="_blank" rel="noopener">Homework for the student →</a></p></div>';
};

/* ---------- desenhar ---------- */
/* 23/10/2026 · o vídeo não recomeça: se a cena repinta com o MESMO vídeo, troca tudo em volta e deixa o iframe velho no lugar
   (copiado do kit/motor.js; tirar um iframe do documento recarrega o YouTube do zero) */
function mantemVideo(palco, html) {
  var velho = palco.querySelector('section.cena'), ov = velho && velho.querySelector('.video iframe'); if (!ov) return false;
  var tmp = document.createElement('div'); tmp.innerHTML = html;
  var novo = tmp.firstElementChild, nv = novo.querySelector('.video iframe');
  if (!nv || nv.getAttribute('src') !== ov.getAttribute('src')) return false;
  (function troca(a, b) {
    if (a === ov) return;
    [].slice.call(a.attributes).forEach(function (t) { if (!b.hasAttribute(t.name)) a.removeAttribute(t.name); });
    [].slice.call(b.attributes).forEach(function (t) { a.setAttribute(t.name, t.value); });
    var ia = [].indexOf.call(a.childNodes, [].filter.call(a.childNodes, function (n) { return n === ov || (n.contains && n.contains(ov)); })[0]);
    var ib = [].indexOf.call(b.childNodes, [].filter.call(b.childNodes, function (n) { return n === nv || (n.contains && n.contains(nv)); })[0]);
    var ca = a.childNodes[ia], cb = b.childNodes[ib];
    while (a.firstChild !== ca) a.removeChild(a.firstChild);
    while (ca.nextSibling) a.removeChild(ca.nextSibling);
    while (b.firstChild !== cb) a.insertBefore(b.firstChild, ca);
    while (cb.nextSibling) a.appendChild(cb.nextSibling);
    troca(ca, cb);
  })(velho, novo);
  return true;
}
function pinta() {
  var c = L[S.i], palco = document.getElementById('palco');
  var nova = pinta.ultima !== S.i; pinta.ultima = S.i;
  var rolou = palco.scrollTop, rolouJ = window.scrollY;
  var html = '<section class="cena c-' + c.k + (nova ? ' nova' : '') + '" data-cena="' + S.i + '">' + R[c.k](c) + '</section>';
  if (nova || !mantemVideo(palco, html)) palco.innerHTML = html;
  if (!nova) { palco.scrollTop = rolou; window.scrollTo(0, rolouJ); }
  WolfCorretor.liga(palco);
  document.getElementById('fundo').style.backgroundImage = 'url(' + img(c.img) + ')';
  var vistas = {}; for (var i = 0; i < S.i; i++) if (L[i].est) vistas[L[i].est] = 1;
  [].forEach.call(document.querySelectorAll('.wolf span'), function (sp) { var k = sp.getAttribute('data-k'); sp.classList.toggle('agora', k === c.est); sp.classList.toggle('feita', !!vistas[k] && k !== c.est); });
  document.getElementById('trilho').innerHTML = L.map(function (x, i) { return '<i class="' + (i === S.i ? 'agora' : i < S.i ? 'feita' : '') + '" style="--c:var(--' + (x.est || 'o') + ')"></i>'; }).join('');
  document.getElementById('conta').textContent = S.i + ' / ' + (L.length - 1);
  document.getElementById('ant').disabled = S.i === 0; document.getElementById('prox').disabled = S.i === L.length - 1;
}
function vai(n) { if (n < 0 || n >= L.length) return; Object.keys(SONS).forEach(function (k) { if (!SONS[k].paused) SONS[k].pause(); }); S.i = n; pinta(); document.getElementById('palco').scrollTop = 0; window.scrollTo(0, 0); }
window.vai = vai;

/* ---------- os toques ---------- */
document.addEventListener('click', function (ev) {
  var b = ev.target.closest('[data-a]'); if (!b) return;
  var a = b.getAttribute('data-a'), n = +b.getAttribute('data-n'), v = b.getAttribute('data-v'), refaz = true;
  switch (a) {
    case 'ir': vai(n); return;
    case 'faixa': S.faixa = 0; break;
    case 'resp': S.resp[b.getAttribute('data-c')] = 1; break;
    case 'fala': var ch = b.getAttribute('data-c'), x = b.getAttribute('data-x'); S.fala[ch] = S.fala[ch] || {}; S.fala[ch][x] = !S.fala[ch][x]; break;
    case 'tempo': S.tempo.sel = n; break;
    case 'tempo-foi': S.tempo.foi[S.tempo.sel] = 1; break;
    case 'parada': if (n <= S.mapa.n) S.mapa.aberta = n; break;
    case 'parada-prox': S.mapa.n++; S.mapa.aberta = -1; break;
    case 'tr-passo': S.tr.passo = n; break;
    case 'toca': var au = som(b.getAttribute('data-x'));
      if (!au.paused) { au.pause(); refaz = false; break; }
      try { Object.keys(SONS).forEach(function (k) { if (SONS[k] !== au && !SONS[k].paused) SONS[k].pause(); }); if (au.ended || au.currentTime >= (au.duration || 1e9) - .05) au.currentTime = 0; au.playbackRate = S.lento ? .75 : 1; var pr = au.play(); if (pr && pr.catch) pr.catch(function () {}); } catch (e) { /* segue */ }
      refaz = false; break;
    case 'lento': S.lento = !S.lento; Object.keys(SONS).forEach(function (k) { SONS[k].playbackRate = S.lento ? .75 : 1; }); break;
    case 'trans': S.trans[b.getAttribute('data-c')] = 1; break;
    case 'dg-p': S.dg.p = n; break;
    case 'cr': S.cr.sel = n; break;
    case 'poe': var ta = document.querySelector('[data-papel] textarea'); if (ta) { var t = b.getAttribute('data-x'), antes = ta.value; var sep = antes && !/[\s-]$/.test(antes) && t.charAt(0) !== '-' ? ' ' : ''; ta.value = antes + sep + t; ta.dispatchEvent(new Event('input', { bubbles: true })); ta.focus(); } refaz = false; break;
    case 'salva-cr': var txt = (S.cr.txt[S.cr.sel] || '').trim(); if (!txt) return; try { if (window.__wlSalaNota) window.__wlSalaNota(txt); } catch (e) { /* segue */ } S.cr.salvo[S.cr.sel] = 1; break;
    case 'fim-vira': S.fim.vira[n] = 1; break;
    default: if (TOQUES[a]) refaz = TOQUES[a](b, n, v, b.getAttribute('data-c')) !== false; else refaz = false;
  }
  if (refaz) pinta();
});
/* o texto digitado fica no estado (o fio leva o mesmo texto ao outro lado) */
document.addEventListener('input', function (ev) {
  var ta = ev.target; if (!ta.matches || !ta.matches('textarea[data-campo]')) return;
  var cp = ta.getAttribute('data-campo'); if (/^cr\d$/.test(cp)) S.cr.txt[+cp.slice(2)] = ta.value;
});
document.addEventListener('keydown', function (ev) {
  if (ALUNO || /^(TEXTAREA|INPUT)$/.test((ev.target.tagName || ''))) return;
  if (ev.key === 'ArrowRight') vai(S.i + 1); else if (ev.key === 'ArrowLeft') vai(S.i - 1);
  else if (ev.key === 'g' || ev.key === 'G') guia(true); else if (ev.key === 'Escape') guia(false);
});
function guia(abre) { document.getElementById('guia').hidden = !abre; }
document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('prox').onclick = function () { vai(S.i + 1); };
  document.getElementById('ant').onclick = function () { vai(S.i - 1); };
  document.getElementById('bguia').onclick = function () { guia(true); };
  document.getElementById('fguia').onclick = function () { guia(false); };
  document.getElementById('bzoom').onclick = function () { var z = (parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--zoom')) || 1); z = z >= 1.2 ? 1 : +(z + .1).toFixed(1); document.documentElement.style.setProperty('--zoom', z); };
  document.getElementById('btela').onclick = function () { if (!document.fullscreenElement) document.documentElement.requestFullscreen().catch(function () {}); else document.exitFullscreen(); };
  pinta();
});
