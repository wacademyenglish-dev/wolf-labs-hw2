/* ============================================================
   FIFTY TO EIGHTY · ROOTS AND CROWN · LIVE CLASS  06/10/2026
   Main series B2 · condicionais mistas: if + had + particípio (passado
   fechado) → would + verbo (o resultado AINDA hoje); if + passado
   (sempre verdade sobre você) → would have + particípio (resultado já
   acabado). O RESULTADO decide o tempo da sua metade. Erros: "If I had
   studied, I would have been rich now", "If I was braver" (alvo: were),
   "If she didn't miss … now", "would get … last year", "If we would
   have left".
   O MUNDO (da aula velha): um estudo que acompanhou 724 homens por 75
   anos, desde 1938 (universitários e rapazes de bairros pobres): o que
   previu a saúde aos oitenta não foi colesterol nem dinheiro aos
   cinquenta, foi a satisfação nas relações. Quatro gravações mantidas
   (m1–m4: dois homens compostos, uma pesquisadora, uma esposa),
   conferidas no faster-whisper em 06/10: batem (a voz diz "Harvard
   men", a transcrição segue a voz). O vídeo da palestra do diretor do
   estudo (8KkKuTCFvzI, 6:03–8:35), selado. Nenhum nome de canal ou de
   palestrante na tela.
   A CARA: o CARVALHO em SVG — a raiz embaixo da linha da terra é o
   passado fechado, a copa é o hoje; cada frase certa faz crescer um
   galho com folhas. E os DOIS RELÓGIOS da frase: THEN na raiz, NOW na
   copa (ou o contrário na outra direção).
   Fila: FILA-LIVE-386.md · 120.
   23/10/2026 · OS FORMATOS NOVOS (kit/formatos.js + formatos2.js), mesmas
   páginas, nada de escolher entre três frases quase iguais. II = seis frases,
   certa ou errada, e se errada o aluno diz o conserto; cada acerto cresce um
   galho (FM.verdadeOuMentira); III = separar seis frases pelo RESULTADO,
   "ainda vale hoje" ou "já acabou" (FM.separa); IV = depois de ouvir, tocar o
   que a voz diz, com sentidos diferentes, e dizer a frase (FM.escolhe);
   VII = antes do play duas previsões, durante cinco verdadeiro-ou-mentira com
   ▶ no minuto, depois as pistas até "I know it!" (escolhe, VoM, revela);
   X = as três perguntas da amiga em cartas + 60 s no relógio (FM.cartas,
   FM.cronometro; deixa de ser EXTRA, é fala); XI = achar a parte errada em
   CINCO frases (FM.erro). I, V, VI, VIII, IX e XII ficam.
   ============================================================ */
var L = [
  { k: 'capa', est: null, img: 'carvalho' },
  { k: 'decisao', est: 'o', min: 7, img: 'caminho', rot: 'I · An Old Decision', t: 'Think of a decision from years ago that still shapes your life today.', p: 'Tap what it was about. Then answer three questions out loud.' },
  { k: 'arvore', est: 'f', min: 6, img: 'carvalho', rot: 'II · Roots and Crown', t: 'The root is a closed past. The crown is today. The result decides its own tense.', p: 'Is each sentence right? If it is wrong, say the fix. Every right answer grows a branch.' },
  { k: 'outra', est: 'f', min: 6, img: 'carvalho', rot: 'III · The Other Direction', t: 'Now the root is something always true about you. The result happened in the past.', p: 'Tap a sentence, then its box. Is the result still true today, or finished? Then say it.' },
  { k: 'vozes', est: 'l', min: 7, img: 'domingo', rot: 'IV · Two Men, 1938', t: 'Two men entered the study in the same year. Then a researcher, and a wife.', p: 'Play each voice. Tap what it says. Then say the sentence.' },
  { k: 'tabela', est: 'o', min: 7, extra: 1, img: 'arquivo', rot: 'V · At Fifty, At Eighty', t: 'Five things they measured at fifty. Which ones predicted health at eighty?', p: 'Guess out loud. Then tap PREDICTED or DIDN’T.' },
  { k: 'palavras', est: 'l', img: 'arquivo', rot: 'VI · The Words', t: 'Five words from the video.', p: 'Learn the words before you watch. Then listen for them: they turn yellow in the video.' },
  { k: 'video', est: 'l', min: 10, img: 'arquivo', rot: 'VII · The Talk', t: 'The director of the study. Two and a half minutes: the clearest message.', p: 'Tap your guess first. Then watch and tap true or lie. Then say what the study found.' },
  { k: 'falas', est: 'l', extra: 1, img: 'arquivo', rot: 'VIII · Line by Line', t: 'Every line of the video, one by one.', p: 'Tap a line. Hear it again. The lines with yellow words open the explanation.' },
  { k: 'longe', est: 'f', min: 6, extra: 1, img: 'arquivo', rot: 'IX · Too Far', t: 'Four write-ups of the study. Some claim more than it found.', p: 'Read it out loud. Tap THE STUDY or TOO FAR, and say why.' },
  { k: 'explica', est: 'o', min: 7, img: 'carvalho', rot: 'X · Explain It', t: 'A friend has never heard of the study. Explain it, with roots and crowns.', p: 'Your teacher is the friend. Tap a card. Answer out loud in one minute.' },
  { k: 'erros', est: 'f', min: 6, extra: 1, img: 'domingo', rot: 'XI · Rich Now', t: 'Five sentences have a problem.', p: 'Find the problem in each line. Say the fix. Then tap Check.' },
  { k: 'fim', est: 'w', min: 6, img: 'caminho', rot: 'XII · Your Decision, Again', t: 'Your decision from scene I, with a root in the past and a crown today.', p: 'Write it, and one sentence the other way. It goes to your My notes.' }
];

var TR = {
  'm1.mp3': 'I worked in the same plant for thirty-one years, and I hated most of it. But I never let a Sunday go by without the family, and my brother and I spoke every week until he died. I am eighty-six, and I still walk to the shops.',
  'm2.mp3': 'I made money early, and I made a great deal of it. I was in the office six days a week for most of my forties. My marriage was cold for a long time, and I told myself it did not matter. I am eighty-four, and there is nobody in the house.',
  'm3.mp3': 'People assume the Harvard men did better. They did not, on the whole. What separated the two files was not where they started. It was who they still had at fifty.',
  'm4.mp3': 'They studied him for forty years before anybody thought to ask me anything. When they finally did, I said it was about time.'
};

var YT = '8KkKuTCFvzI';

var TEMAS = ['where I studied', 'a job I took', 'a job I said no to', 'a city I moved to', 'a language I learned', 'a person I met'];
var ABRE = [
  { q: 'When was it, and what did you decide?', fup: 'Was it hard?', st: ['In …, I decided to …'], ex: 'In 2015, I decided to move to Curitiba.' },
  { q: 'What is different in your life today because of it?', fup: 'And what is the same?', st: ['Because of it, today I …'], ex: 'Because of it, today I work in design.' },
  { q: 'What would your life look like now if you had decided the other way?', fup: 'Would you be happier?', st: ['If I had …, I …'], ex: 'If I hadn’t moved, I would still be in my hometown.' }
];

var ARVORE_VM = { formato: 'verdadeOuMentira', rotulos: ['Right', 'Wrong'], titulo: 'Right or wrong? If it is wrong, say the fix.', itens: [
  { f: 'If I had taken that job in Lisbon, I would be living by the sea now.', t: 1 },
  { f: 'If she hadn’t learned English at school, she wouldn’t have had this job today.', t: 0, c: 'Fix: <i>she wouldn’t have this job today.</i>' },
  { f: 'If they had kept their friends at fifty, they would have been healthier now.', t: 0, c: 'Fix: <i>they would be healthier now.</i>' },
  { f: 'If I had gone to bed earlier last night, I wouldn’t be so tired now.', t: 1 },
  { f: 'If we hadn’t moved to this city, we won’t know each other.', t: 0, c: 'Fix: <i>we wouldn’t know each other.</i>' },
  { f: 'If he had saved some money in his twenties, he would own a house today.', t: 1 }
] };

var SEPARA_OUTRA = { formato: 'separa', titulo: 'Is the result still true today, or finished? Tap a sentence, then its box.', caixas: ['TODAY · would + verb', 'FINISHED · would have + 3rd form'], itens: [
  { t: 'If she had said yes, she would be in Paris now.', c: 0 },
  { t: 'If I were braver, I would have said yes to that trip.', c: 1 },
  { t: 'If I had learned Spanish at school, I would speak it today.', c: 0 },
  { t: 'If he weren’t so shy, he would have spoken at the meeting yesterday.', c: 1 },
  { t: 'If we had left earlier, we would be home now.', c: 0 },
  { t: 'If they were more careful, they wouldn’t have lost the keys again.', c: 1 }
] };
var PLACA_OUTRA = 'The <b>result</b> decides its own tense.<br>Still true today: <b>would + verb</b>.<br>Finished: <b>would have + 3rd form</b>.<br>The IF half: <b>had + 3rd form</b> (a closed past) or <b>past / were</b> (always true).';

var VOZES = [
  { au: 'm1.mp3', quem: 'ENTERED AT NINETEEN · A POOR CITY NEIGHBORHOOD', p: 'What is still true for him today?', o: ['He still works at the plant.', 'He still walks to the shops.', 'He still lives with his brother.'], c: 1, w: 'If he hadn’t kept those Sundays, he wouldn’t be walking to the shops at eighty-six.' },
  { au: 'm2.mp3', quem: 'ENTERED AT NINETEEN · A TOP UNIVERSITY', p: 'What is still true for him today?', o: ['He still goes to the office every day.', 'He sees his family every Sunday.', 'He is alone in the house.'], c: 2, w: 'If he had worked less in his forties, he wouldn’t be alone now.' },
  { au: 'm3.mp3', quem: 'A RESEARCHER', p: 'What separated the two files?', o: ['Where they started.', 'Who they still had at fifty.', 'How much money they made.'], c: 1, w: 'If the university men had done better, the study wouldn’t be so surprising.' },
  { au: 'm4.mp3', quem: 'A WIFE', p: 'What does she say?', o: ['They never asked the wives.', 'They asked the wives only after forty years.', 'They asked the wives first.'], c: 1, w: 'If they had asked the wives earlier, the study would be different today.' }
];

var TABELA = [['cholesterol at fifty', 'nao'], ['how satisfied they were in their relationships', 'sim'], ['income at fifty', 'nao'], ['being married (good marriage or not)', 'nao'], ['feeling they could count on somebody', 'sim']];

var DEPOIS = [
  { q: 'What is the clearest message? Say it without his words.', h: 'Good relationships keep us happier and healthier.' },
  { q: 'What did they look at, at fifty, to predict eighty?', h: 'Not cholesterol: how satisfied they were in their relationships.' },
  { q: 'Say the finding as a mixed conditional.', h: 'If they hadn’t been satisfied at fifty, they wouldn’t be as healthy now.' }
];

var LONGE = [
  { t: 'If their cholesterol had been lower at fifty, they would be healthier now.', d: 'longe', por: 'Cholesterol at fifty didn’t predict it.' },
  { t: 'If they had been satisfied at fifty, they would be healthier now.', d: 'estudo', por: 'Closed past, present result, and what the study supports.' },
  { t: 'If you are satisfied at fifty, you will definitely be healthy at eighty.', d: 'longe', por: 'A finding about 724 men isn’t a promise about you.' },
  { t: 'If they hadn’t had people to count on, they wouldn’t be as healthy today.', d: 'estudo', por: 'Careful, and supported.' }
];

var CARTAS_EXPLICA = { formato: 'cartas', titulo: 'Your friend asks · tap a card', fechada: 'Tap to open', cartas: [
  ['Question 1', '“Seventy-five years? What were they even looking for?”<br><em style="color:var(--ac2)">Start with: They wanted to know … If they hadn’t …, we wouldn’t … today.</em>'],
  ['Question 2', '“So rich people ended up healthier, right?”<br><em style="color:var(--ac2)">Say no. Start with: If money had been the key, …</em>'],
  ['Question 3', '“Okay. So what should I do with that?”<br><em style="color:var(--ac2)">Give advice. Start with: Call someone this week. If I had …, I would … now.</em>']
] };
var CRONO_EXPLICA = { formato: 'cronometro', segundos: 60, titulo: 'Answer your friend · 60 seconds', texto: 'Use at least one mixed conditional. Then change roles.' };

var ERROS = [
  { f: 'If I had studied more, I <u>would have been</u> rich now.', r: 'would be' },
  { f: 'If I <u>was</u> braver, I would have said yes.', r: 'were' },
  { f: 'If she <u>didn’t miss</u> the flight, she would be here now.', r: 'hadn’t missed' },
  { f: 'If he spoke Spanish, he <u>would get</u> the job last year.', r: 'would have gotten' },
  { f: 'If we <u>would have left</u> earlier, we would be home now.', r: 'had left' }
];
var PLACA_ERROS = 'The <b>result</b> decides its tense.<br>Still today: <b>would + verb</b>.<br>Finished: <b>would have + 3rd form</b>.<br>IF + <b>had + 3rd form</b>, or IF + <b>were</b>.<br>No WOULD after IF.';
var ANTES_VIDEO = { formato: 'escolhe', titulo: 'Before you watch. Tap what you think. There is no wrong answer yet.', itens: [
  { p: 'The clearest message of the study is …', o: ['money and hard work', 'good relationships', 'a healthy diet'], c: -1, d: 'Keep your guess. The video answers it.' },
  { p: 'At fifty, they looked at …', o: ['cholesterol', 'income', 'how satisfied they were in their relationships'], c: -1, d: 'Listen for it.' }
] };
var VM_VIDEO = { formato: 'verdadeOuMentira', rotulos: ['True', 'Lie'], titulo: 'True or lie? Tap the time, listen, then tap. If it is a lie, say the truth.', itens: [
  { f: 'The lessons are about wealth and fame.', t: 0, tm: '6:03', c: 'The lessons aren’t about wealth or fame.' },
  { f: 'Good relationships keep us happier and healthier.', t: 1, tm: '6:16' },
  { f: 'Loneliness is good for us.', t: 0, tm: '6:31', c: 'Loneliness kills.' },
  { f: 'People who are more isolated than they want to be are less happy.', t: 1, tm: '6:52' },
  { f: 'Cholesterol at fifty predicted who grew old healthy.', t: 0, tm: '8:17', c: 'It was how satisfied they were in their relationships.' }
] };
var REVELA_VIDEO = { formato: 'revela', titulo: 'What did the study find? Say it as a mixed conditional.', pistas: ['724 men.', '75 years.', 'Not cholesterol. Not money.', 'At fifty: how satisfied they were in their relationships.', 'At eighty: the most satisfied were the healthiest.'], mais: 'Next clue', botao: 'I know it! Show', resposta: 'If they hadn’t been satisfied at fifty, they wouldn’t be as healthy now.' };

var S = { i: 0, faixa: 1, fala: {}, resp: {}, armas: {}, q: {},
  dc: { tema: '', n: 0, foi: {} }, vz: { n: 0, esc: -1 }, tb: {}, video: { p: 0 }, lg: { n: 0, esc: '' } };

/* o carvalho: raiz (passado) embaixo da terra, galhos (hoje) em cima */
function carvalho(galhos, raizes, mini) {
  var G = [['M200 210 C180 170 150 150 110 140', 95, 130], ['M200 200 C220 160 260 140 300 132', 305, 122], ['M200 170 C190 130 170 100 140 80', 130, 70], ['M200 165 C215 120 240 95 270 78', 275, 68], ['M200 150 C198 110 196 80 200 40', 200, 30], ['M200 190 C160 180 120 185 80 190', 70, 182]];
  var R = [['M200 250 C180 270 150 280 120 300'], ['M200 250 C220 272 255 282 285 300'], ['M200 252 C198 280 196 300 200 320'], ['M200 250 C170 262 130 262 95 268'], ['M200 250 C232 262 268 262 305 268'], ['M200 252 C185 285 165 305 150 320']];
  return '<div class="lf-arvore' + (mini ? ' mini' : '') + '"><svg viewBox="0 0 400 330" aria-hidden="true">'
    + '<text x="12" y="20" class="lf-rot now">THE CROWN · NOW</text><text x="12" y="322" class="lf-rot then">THE ROOT · THEN</text>'
    + '<path class="lf-terra" d="M0 250 H400"/>'
    + R.map(function (r, i) { return '<path class="lf-raiz' + (i < raizes ? ' viva' : '') + '" d="' + r[0] + '"/>'; }).join('')
    + '<path class="lf-tronco" d="M190 252 C192 220 194 190 196 150 L204 150 C206 190 208 220 210 252Z"/>'
    + G.map(function (g, i) { var v = i < galhos; return '<path class="lf-galho' + (v ? ' vivo' : '') + '" d="' + g[0] + '"/>' + (v ? '<g class="lf-folhas"><circle cx="' + g[1] + '" cy="' + g[2] + '" r="22"/><circle cx="' + (g[1] + 16) + '" cy="' + (g[2] + 10) + '" r="15"/><circle cx="' + (g[1] - 14) + '" cy="' + (g[2] + 12) + '" r="14"/></g>' : ''); }).join('')
    + '</svg></div>';
}
/* os dois relógios: cada metade tem o seu tempo */
function relogios(a, b, okA, okB) {
  return '<div class="lf-relogios"><div class="lf-rel' + (okA ? ' ok' : '') + '"><i></i><small>' + a[0] + '</small><b>' + a[1] + '</b></div><span>→</span><div class="lf-rel' + (okB ? ' ok' : '') + '"><i></i><small>' + b[0] + '</small><b>' + b[1] + '</b></div></div>';
}
function tres(acao, ops, esc, semente, classe) {
  return '<div class="lf-ops' + (classe ? ' ' + classe : '') + '">' + ordem(ops.map(function (o, i) { return [o, i]; }), semente).map(function (o) { return '<button type="button" class="versao' + (esc === o[1] ? (o[1] === 0 ? ' certo' : ' errado') : '') + '" data-a="' + acao + '" data-n="' + o[1] + '">' + o[0] + '</button>'; }).join('') + '</div>';
}

var R = {};
R.capa = function () {
  return '<div class="capa"><div><span class="kick">MAIN SERIES · B2 · ROOTS AND CROWN</span><h1>Fifty <b>to Eighty</b></h1>'
    + '<p class="sub">Seventy-five years, 724 men. <b>If they hadn’t kept their friends at fifty, they wouldn’t be healthy at eighty.</b> The root is closed. The crown is still growing.</p>'
    + '<div class="chipsx"><span class="pilula">if + had done → would be now</span><span class="pilula">if + were → would have done</span><span class="pilula">each half, its own clock</span><span class="pilula">Live Class · W·O·L·F</span></div>'
    + '<button type="button" class="btn cheio" data-a="ir" data-n="1">Plant the tree</button>' + faixaLive() + '</div>'
    + '<div class="capa-r">' + carvalho(5, 4) + '</div></div>';
};

R.decisao = function (c) {
  var e = S.dc;
  var chips = '<div class="lf-temas">' + TEMAS.map(function (t) { return '<button type="button" class="pilula' + (e.tema === t ? ' on' : '') + '" data-a="dc-t" data-v="' + h(t) + '">' + t + '</button>'; }).join('') + '</div>';
  if (!e.tema) return cab(c) + chips + '<p class="dica-aluno" style="text-align:center">Choose how much to share. It’s about a decision, not your private life.</p>';
  return cab(c) + chips + sequencia({ est: 'o', rot: '', t: '', p: '' }, ABRE, e, 'dc', 'Keep your last answer. At the end of the hour it grows into one exact sentence.').replace(/<div class="cab[\s\S]*?<\/p><\/div>/, '')
    + '<p class="so-prof dica-aluno" style="text-align:center">Write the third answer exactly. Expect “I would have been … now”. Don’t correct yet.</p>';
};

R.arvore = function (c) {
  var e = (S.fq && S.fq.av && S.fq.av.r) || {}, ok = 0, n = 0;
  ARVORE_VM.itens.forEach(function (x, i) { if (e[i] != null) { n++; if ((e[i] === 't') === !!x.t) ok++; } });
  return cab(c) + '<div class="mesa-c"><div class="lado-l">' + carvalho(ok, Math.min(n + 1, 6), 1) + relogios(['THE ROOT', 'THEN · had + participle'], ['THE CROWN', 'NOW · would + verb'], 1, ok > 0)
    + (n === ARVORE_VM.itens.length ? '<p class="aprova">' + ok + ' branches. Now a true root and crown from your own life.</p>' : '') + '</div><div class="lado-l">' + FM.ex('av', ARVORE_VM) + '</div></div>';
};

R.outra = function (c) {
  var em = (S.fq && S.fq.ou && S.fq.ou.em) || {}, pronta = SEPARA_OUTRA.itens.every(function (x, i) { return em[i] === x.c; });
  return cab(c) + '<div class="fm-com-regra"><div class="fm-mio">' + FM.ex('ou', SEPARA_OUTRA)
    + (pronta ? '<p class="aprova" style="text-align:center">Say each sentence out loud. The result decides the tense. Now one true sentence about your own personality.</p>' : '<p class="so-prof dica-aluno" style="text-align:center">“If I was braver” is common in speech; WERE is the target.</p>') + '</div>' + FM.regra(PLACA_OUTRA) + '</div>';
};

R.vozes = function (c) {
  var e = S.vz, n = Math.min(e.n, VOZES.length - 1), fim = e.n >= VOZES.length, x = VOZES[n], ouviu = (S.ouviu || {})[x.au];
  if (fim) return cab(c) + '<div class="foco"><div class="pergunta vd"><small>FOUR VOICES</small><h2>Every one: a closed past, a present still running. What would each man be doing today with the other man’s fifties?</h2></div></div>';
  var fq = S.fq && S.fq['vz' + n], resp = fq && fq.r && fq.r[0] != null;
  return cab(c) + trilha(VOZES, e.n) + '<div class="mesa-c"><div class="lado-l"><div class="ouve-c vd"><div class="toca-linha">' + tocar(x.au) + '<b>' + x.quem + '</b></div>' + transcricao(x.au, TR[x.au]) + '</div><p class="so-prof dica-aluno">The two men are composites, not real people.</p></div>'
    + '<div class="lado-l">' + (ouviu ? FM.ex('vz' + n, { formato: 'escolhe', titulo: 'Tap what the voice says. Then say the sentence.', itens: [{ p: x.p, o: x.o, c: x.c, d: 'Say it: <b>' + x.w + '</b>' }] }) + (resp ? '<div><button type="button" class="btn" data-a="vz-prox">Next voice</button></div>' : '') : '<p class="dica-aluno">Play the voice first.</p>') + '</div></div>';
};

R.tabela = function (c) {
  var e = S.tb, todos = TABELA.every(function (x, i) { return e[i] === x[1]; });
  return cab(c) + '<div class="lf-tabela">' + TABELA.map(function (x, i) { var foi = e[i], ok = foi === x[1]; return '<div class="lf-linha vd' + (foi ? (ok ? ' certo' : ' errado') : '') + '"><span>' + x[0] + '</span><div class="lf-fs">' + [['sim', 'PREDICTED'], ['nao', 'DIDN’T']].map(function (o) { return '<button type="button" class="pilula' + (foi === o[0] ? (ok ? ' certo' : ' errado') : '') + '" data-a="tb" data-n="' + i + '" data-v="' + o[0] + '">' + o[1] + '</button>'; }).join('') + '</div>' + (foi && !ok ? '<small>' + (x[1] === 'sim' ? 'It did: one of the strongest predictors.' : 'Surprising, but no: this one didn’t predict health at eighty.') + '</small>' : '') + '</div>'; }).join('') + '</div>'
    + (todos ? '<div class="foco"><div class="balao vd ok-b"><small>THE FINDING · SAY IT</small><p>If they hadn’t been satisfied at fifty, they wouldn’t be as healthy now.</p></div><p class="aprova" style="text-align:center">Two out of five, and neither is the one people check.</p></div>' : '');
};

R.video = function (c) {
  var e = S.video, corpo;
  if (e.p === 0) corpo = '<div class="mesa-c"><div class="lado-l">' + FM.ex('vp', ANTES_VIDEO) + '</div>'
    + '<div class="lado-l"><div class="selo-v vd"><b>SEALED</b><small>Two and a half minutes. It opens after your guess.</small></div><div><button type="button" class="btn cheio" data-a="vd-p" data-n="1">Watch</button></div></div></div>';
  else if (e.p === 1) corpo = '<div class="mesa-video"><div class="video-col">' + iframe(YT, 'A good life', '&start=363&end=515') + '<small class="cred">6:03 to 8:35 · it stops by itself</small></div><div class="lado-video">' + FM.ex('vq', VM_VIDEO) + '<div><button type="button" class="btn" data-a="vd-p" data-n="2">After the video</button></div></div></div>';
  else corpo = FM.ex('vr', REVELA_VIDEO);
  return cab(c) + '<div class="tres-tempos">' + tempos3(e.p) + '</div>' + corpo;
};

R.longe = function (c) {
  var e = S.lg, n = e.n, fim = n >= LONGE.length;
  if (fim) return cab(c) + trilha(LONGE, n) + '<div class="foco"><div class="pergunta vd"><small>FOUR WRITE-UPS</small><h2>Two lines are the study. Two are perfect English and claim too much. Fix the two that go too far.</h2></div></div>';
  var x = LONGE[n], ok = e.esc === x.d;
  return cab(c) + trilha(LONGE, n) + '<div class="foco"><div class="balao vd"><small>WRITE-UP ' + (n + 1) + ' OF 4</small><p>“' + x.t + '”</p></div><div class="lf-dois">' + [['estudo', 'THE STUDY'], ['longe', 'TOO FAR']].map(function (o) { return '<button type="button" class="versao grande-v' + (e.esc === o[0] ? (ok ? ' certo' : ' errado') : '') + '" data-a="lg" data-v="' + o[0] + '">' + o[1] + '</button>'; }).join('') + '</div>'
    + (ok ? '<p class="aprova" style="text-align:center">' + x.por + '</p><div style="text-align:center"><button type="button" class="btn" data-a="lg-prox">Next</button></div>' : e.esc ? '<p class="recusa" style="text-align:center">What did the study actually measure, and about whom?</p>' : '') + '</div>';
};

R.explica = function (c) {
  return cab(c) + '<div class="mesa-c"><div class="lado-l">' + FM.ex('xp', CARTAS_EXPLICA) + '</div><div class="lado-l">' + FM.ex('xr', CRONO_EXPLICA)
    + '<p class="so-prof dica-aluno">Push once after each answer: “Really? How do you know?” Models: What keeps people healthy. If they hadn’t followed the men for so long, we wouldn’t know the answer today. / No. If money had been the key, the university men would be the healthy ones. / Call someone. If I had called my friends more at thirty, I would have more of them now.</p></div></div>';
};

R.erros = function (c) {
  return cab(c) + '<div class="kh-um">' + FM.ex('er', { formato: 'erro', titulo: 'Five sentences have a problem. Find it. Say the fix.', itens: ERROS, regra: PLACA_ERROS }) + '</div>';
};

R.fim = function (c) {
  return cab(c) + '<div class="fim">' + escritaFinal('fim', (S.txt || {}).fim || '', (S.salvo || {}).fim, 'If I hadn’t …, I wouldn’t … now.\nIf I were more …, I would have …\nThis week, I’ll call …', 'Roots and crown',
    ['If I had', 'If I hadn’t', 'I would be', 'I wouldn’t', 'If I were', 'I would have'], ['YOUR DECISION, ROOT AND CROWN', 'One mixed conditional about your decision, one the other way, and who you would call this week.'])
    + '<div class="lado-fim">' + carvalho(6, 6, 1)
    + '<div class="grande vd"><span>if + <u>had done</u> (then) → <u>would be</u> (now)</span><span>if + <u>were</u> (always) → <u>would have done</u> (finished)</span><span>no WOULD in the IF half</span><span>not <s>I would have been rich now</s></span></div>'
    + mostra('fim', 'If I hadn’t moved to Curitiba, I wouldn’t work in design now.<br>If I were braver, I would have said yes to that trip.<br>This week, I’ll call my brother.', 1)
    + '<p class="hw"><a class="pilula" href="HW/" target="_blank" rel="noopener">Homework for the student →</a></p></div></div>';
};

TOQUES['dc-t'] = function (b, n, v) { S.dc.tema = v; };
TOQUES.vz = function (b, n) { S.vz.esc = n; };
TOQUES['vz-prox'] = function () { S.vz = { n: S.vz.n + 1, esc: -1 }; };
TOQUES.tb = function (b, n, v) { S.tb[n] = v; };
TOQUES['vd-p'] = function (b, n) { S.video.p = n; };
TOQUES.lg = function (b, n, v) { S.lg.esc = v; };
TOQUES['lg-prox'] = function () { S.lg = { n: S.lg.n + 1, esc: '' }; };
