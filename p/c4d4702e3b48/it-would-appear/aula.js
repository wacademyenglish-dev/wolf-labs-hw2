/* ============================================================
   IT WOULD APPEAR THAT… · THE NIGHT DESK · LIVE CLASS  06/10/2026
   Main series B2 · cautela escrita: appear to / it would appear that ·
   it could be argued that · may / might / could have + particípio (may
   have been caused by) · verbos cautelosos: suggest × prove, indicate ×
   show, is linked to × causes. Erros: o IT vazio some (Would appear
   that), can have been, may have caused by (sem been), appear being,
   suggests to, may had.
   ⚠ Colisão decidida pelo Carlos: tend to / seem to / arguably / to some
   extent são de outra B2 no ar; aqui não são alvo.
   O MUNDO (da aula velha): o aluno é o EDITOR DA NOITE de um site de
   notícias que transformou uma palestra sobre o "eu do futuro" em
   manchetes exageradas. Vídeo mantido (XNbaR54Gpj4), selado em cinco
   capítulos: 0–50 · 50–104 · 104–182 · 182–267 · 267–400. Nenhum nome de
   palestrante, palco ou universidade na tela.
   A CARA (nova; a velha era a primeira página + o artigo com margem): o
   MEDIDOR DE AFIRMAÇÃO — cada manchete tem um ponteiro de "quanto ela
   afirma" e uma marca de "quanto a evidência sustenta"; a versão
   cuidadosa desce o ponteiro até a marca. E a CHAPA DA GRÁFICA: as oito
   linhas do artigo viram tipos de chumbo um a um enquanto o rolo avança.
   Fila: FILA-LIVE-386.md · 126.
   22/10/2026 · OS FORMATOS NOVOS (kit/formatos.js + formatos2.js), mesmas
   páginas. III: antes do play duas réguas (você mudou? vai mudar?); por
   capítulo, uma escolha por sentido ou certo/errado com ▶ no minuto; depois,
   "provou ou sugeriu?". V: o medidor em fala primeiro (a agulha desce no
   Check). VI: o recado do editor da noite → completar a regra (FM.carta).
   VII: a chapa em seis linhas: dizer com a ferramenta da margem e tocar a
   ferramenta (FM.usa). VIII: cartas de pauta + dado de ferramentas. IX: a
   repórter liga: como você responde? (FM.reacao, 4 cenas). X: achar a palavra
   errada (FM.erro). VIII e IX deixam de ser EXTRAS.
   ============================================================ */
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'voce', est: 'o', min: 7, img: 'janela', rot: 'I · You and the News', t: 'Before the newsroom: you, the news you read, and the person you were.', p: 'Tap a card. Answer out loud. Then your teacher answers too.' },
  { k: 'palavras', est: 'l', img: 'palco', rot: 'II · The Words', t: 'Five words from the video.', p: 'Learn the words before you watch. Then listen for them: they turn yellow in the video.' },
  { k: 'video', est: 'l', min: 10, img: 'palco', rot: 'III · The Talk', t: 'A psychologist says we all think we are finished. We are not.', p: 'Answer first. Then the talk plays in five short chapters. Read the two lines before you press play.' },
  { k: 'falas', est: 'l', extra: 1, img: 'palco', rot: 'IV · Line by Line', t: 'Every line of the video, one by one.', p: 'Tap a line. Hear it again. The lines with yellow words open the explanation.' },
  { k: 'manchetes', est: 'o', min: 7, img: 'mesa', rot: 'V · The Claim Meter', t: 'Tomorrow’s front page. Six headlines claim more than the evidence.', p: 'Read the headline and what the study found. Say it again, carefully, out loud. Then tap Check: the needle comes down.' },
  { k: 'regra', est: 'f', min: 7, img: 'arquivo', rot: 'VI · The Rule', t: 'An editor never prints more than the evidence. Four careful tools.', p: 'Read the editor’s note out loud. Tap the careful tools. Then finish the rule.' },
  { k: 'chapa', est: 'f', min: 6, img: 'prensa', rot: 'VII · The Press', t: 'The article goes to print in minutes. Six sentences go too far.', p: 'Say each line again out loud, with the tool in the margin. Then tap the tool: the line is set in lead.' },
  { k: 'pauta', est: 'o', min: 7, extra: 1, img: 'janela', rot: 'VIII · Your Headlines', t: 'Your life, your news.', p: 'Tap a story card. Roll the dice. Answer with at least one of the three tools. Your teacher pushes back: “Is that proven?”' },
  { k: 'reporter', est: 'o', min: 7, img: 'mesa', rot: 'IX · The Reporter Calls', t: 'The reporter wrote the article. You changed six sentences.', p: 'Your teacher is the reporter. Pick how you answer. Say it out loud. See what she says.' },
  { k: 'quiz', est: 'f', min: 6, extra: 1, img: 'arquivo', rot: 'X · Quick Check', t: 'Six quick lines from tomorrow’s paper.', p: 'One word in each line is wrong. Say the right one. Then tap Check.' },
  { k: 'fim', est: 'w', min: 6, img: 'capa', rot: 'XI · To Print', t: 'Will you be the same person in ten years?', p: 'Write three careful headlines about your own life. They go to your My notes.' }
];

var YT = 'XNbaR54Gpj4';

var VOCE = [
  { k: 'YOUR NEWS', q: 'Where do you read the news? A site, an app, social media, TV?', fup: 'Do you read past the headline?', st: ['Mostly on …'], ex: 'Mostly on my phone. I read the headline and not much more.' },
  { k: 'THE BIG TITLE', q: 'Think of a headline that made you click. What did it promise?', fup: 'Was it true?', st: ['It said …'], ex: '“This food will change your life.” It didn’t change anything.' },
  { k: 'TEN YEARS AGO', q: 'Who were you ten years ago? Where did you live, what did you love?', fup: 'What would that person think of you now?', st: ['Ten years ago, I …'], ex: 'I lived with my parents and I loved rock music.' },
  { k: 'YOU CHANGED', q: 'What is one big way you have changed since then?', fup: 'Did you expect it?', st: ['I’m more … now.'], ex: 'I’m calmer. And I like cooking now, which is a surprise.' },
  { k: 'YOUR WORK', q: 'In your work or studies, do people say things are “proven” too fast?', fup: 'Give me an example.', st: ['All the time. …'], ex: 'All the time. One good month and my boss says the new plan works.' }
];

/* 22/10/2026 · OS FORMATOS NOVOS (kit/formatos.js) */
/* III · antes do play: duas réguas */
var ANTES_R1 = { formato: 'regua', titulo: 'Before you watch · 1', frase: 'Ten years ago I was a very different person.', esquerda: 'Not at all', direita: 'Completely', depois: 'Say one thing that changed.' };
var ANTES_R2 = { formato: 'regua', titulo: 'Before you watch · 2', frase: 'In the next ten years I will change a lot.', esquerda: 'Not at all', direita: 'A lot', depois: 'Say why. Start with: I think … / I’m not sure …' };
/* por capítulo: duas linhas com ▶ no minuto da legenda-dados.js */
var CAPS = [
  { k: 'REGRETS', ini: 0, fim: 50, tarefa: { formato: 'escolhe', titulo: 'Regrets · tap the word', itens: [
    { p: 'Young people pay good money to remove …', o: ['tattoos', 'piercings', 'scars'], c: 0, tm: '0:24', d: 'Tattoos that teenagers paid good money to get.' },
    { p: 'Middle-aged people rush to … the people young adults rushed to marry.', o: ['divorce', 'visit', 'forget'], c: 0, tm: '0:31', d: 'They rush to divorce them.' }
  ] } },
  { k: 'THE ILLUSION', ini: 50, fim: 104, tarefa: { formato: 'escolhe', titulo: 'The illusion · tap the word', itens: [
    { p: 'When does change slow down? For most people: …', o: ['in the teenage years', 'in middle age', 'now'], c: 2, tm: '1:20', d: 'Now. Wherever now happens to be.' },
    { p: 'We are all walking around with an …', o: ['illusion', 'invitation', 'allergy'], c: 0, tm: '1:30', d: 'The illusion that our history has just come to an end.' }
  ] } },
  { k: 'THE DATA', ini: 104, fim: 182, tarefa: { formato: 'verdadeOuMentira', rotulos: ['Right', 'Wrong'], titulo: 'The data · right or wrong?', itens: [
    { f: 'Change does slow down as we age, but not as much as we think.', t: true, tm: '2:28' },
    { f: '18-year-olds expected much more change than 50-year-olds really have.', t: false, tm: '2:56', c: 'They expected only as much change as 50-year-olds actually have.' }
  ] } },
  { k: 'TASTES', ini: 182, fim: 267, tarefa: { formato: 'verdadeOuMentira', rotulos: ['Right', 'Wrong'], titulo: 'Tastes · right or wrong?', itens: [
    { f: 'They asked only about values, never about music or friends.', t: false, tm: '3:52', c: 'They also asked about the best friend, the favorite vacation, hobby and music.' },
    { f: 'People predict the friend they have now is the friend they will have in ten years.', t: true, tm: '4:13' }
  ] } },
  { k: 'THE TICKET', ini: 267, fim: 400, tarefa: { formato: 'verdadeOuMentira', rotulos: ['Right', 'Wrong'], titulo: 'The ticket · right or wrong?', itens: [
    { f: 'People said they would pay $129 to see their favorite musician in ten years.', t: true, tm: '5:00' },
    { f: 'They said they would pay more to see the old favorite today.', t: false, tm: '5:11', c: 'Only $80 for the old favorite, and $129 for the new one.' },
    { f: 'The speaker is completely sure why this happens.', t: false, tm: '5:25', c: 'He is not entirely sure: it probably has to do with memory.' }
  ] } }
];
/* III · depois do vídeo: provou ou sugeriu? */
var DEPOIS_ESC = { formato: 'escolhe', titulo: 'After the talk', itens: [
  { p: 'He says: “We’re not entirely sure, but it probably has to do with memory.” Is he proving the reason, or suggesting it?', o: ['proving it', 'suggesting it'], c: 1, tm: '5:25', d: 'Suggesting it. He is careful: probably, not entirely sure.' },
  { p: 'A news site writes: SCIENCE PROVES YOU WILL NEVER CHANGE. What is wrong with the headline?', o: ['It says more than the study found', 'It is too long', 'It uses the word “science”'], c: 0, d: 'The study suggests the opposite, and one study doesn’t prove anything. Say it carefully: A study suggests that we keep changing.' }
] };

/* afirma: quanto a manchete afirma (0–100); evid: quanto a evidência sustenta */
var MANCHETES = [
  { k: 'LEAD STORY', h: 'Science Proves Your Personality Is Finished', achou: 'Thousands of people, from 18 to 68, predicted less change than people their age really had.', afirma: 98, evid: 55, ops: ['A study suggests that we change more than we expect.', 'A study proves that we change more than we expect.', 'A study suggests us to expect more change.'], por: ['', 'One study doesn’t PROVE. It suggests.', 'SUGGEST + THAT + a sentence.'] },
  { k: 'HEALTH', h: 'Social Media Causes Loneliness', achou: 'Lonely people used social media more. Nobody knows which came first.', afirma: 95, evid: 40, ops: ['Heavy social media use is linked to loneliness.', 'Heavy social media use links to loneliness.', 'Heavy social media use causes loneliness.'], por: ['', 'Passive: IS LINKED TO.', 'Nobody knows which came first: a link, not a cause.'] },
  { k: 'SCIENCE', h: 'Heat Wave Killed the City’s Bees', achou: 'The bees died in July, the hottest July on record. A new pesticide arrived the same month.', afirma: 92, evid: 45, ops: ['The bees may have been killed by the heat wave.', 'The bees may have killed by the heat wave.', 'The bees can have been killed by the heat wave.'], por: ['', 'Without BEEN, the bees did the killing.', 'A possible past: MAY have, not can have.'] },
  { k: 'PETS', h: 'Dog Owners Live Longer', achou: 'Dog owners in the study lived a little longer. They also walked much more.', afirma: 90, evid: 60, ops: ['Dog owners appear to live a little longer.', 'Dog owners appear live a little longer.', 'Dog owners appear living a little longer.'], por: ['', 'APPEAR TO + verb.', 'APPEAR TO + verb, not -ing.'] },
  { k: 'HISTORY', h: 'Ancient Town Destroyed by Flood', achou: 'Archaeologists found a thick layer of river mud over the whole town.', afirma: 94, evid: 70, ops: ['It would appear that the town was destroyed by a flood.', 'Would appear that the town was destroyed by a flood.', 'It would appear what the town was destroyed by a flood.'], por: ['', 'The empty IT opens the sentence.', 'IT WOULD APPEAR THAT, not what.'] },
  { k: 'OPINION', h: 'Teenagers Ruin Their Own Future', achou: 'Young people make big choices for a future self they can’t imagine well. That is an idea, not a measurement.', afirma: 96, evid: 35, ops: ['It could be argued that teenagers choose for a stranger.', 'Could be argued that teenagers choose for a stranger.', 'It could be argue that teenagers choose for a stranger.'], por: ['', 'The empty IT opens the sentence.', 'After BE: the participle, ARGUED.'] }
];

/* VI · o recado do editor da noite (texto nosso) → completar a regra */
var CARTA = { de: 'The night desk · 11:40 p.m. · note to the team',
  txt: 'Tomorrow’s page. [[It would appear that]] the bees died because of the heat. The fire [[may have been caused by]] a candle. Dog owners [[appear to]] live a little longer. [[It could be argued that]] teenagers choose for a stranger. The study [[suggests]] that we change more than we expect, it never proves it. Poor sleep [[is linked to]] health problems. Do not write that it proves or causes anything.',
  assina: 'The Night Editor' };
var REGRA = [
  { a: 'The empty subject opens the sentence: ', par: ['It', 'Nothing'], c: 0, b: ' would appear that the town was destroyed.' },
  { a: 'A possible past: the fire ', par: ['may', 'can'], c: 0, b: ' have been caused by a candle.' },
  { a: 'Keep the passive: the bees may have ', par: ['been', 'nothing'], c: 0, b: ' killed by the heat.' },
  { a: 'One study doesn’t prove. It ', par: ['suggests', 'proves'], c: 0, b: ' that coffee is linked to stress.' },
  { a: 'A link is not a cause: poor sleep ', par: ['is linked to', 'causes'], c: 0, b: ' many health problems.' }
];
var PRESA = '<b>It would appear that</b> …<br>X <b>appears to</b> + verb<br><b>It could be argued that</b> …<br>may / might / could <b>have been</b> caused by<br><b>suggests</b>, not proves<br><b>is linked to</b>, not causes';

var CHAPA = [
  { fato: 'People never know who they will become.', tool: 'It would appear that', ops: ['It would appear that people underestimate change.'] },
  { fato: 'The study proves that we never stop changing.', tool: 'suggests', ops: ['The study suggests that we keep changing all our lives.'] },
  { fato: 'Our memory causes the illusion.', tool: 'is linked to', ops: ['The illusion is linked to how easy it is to remember.'] },
  { fato: 'Old regrets were caused by bad choices at 18.', tool: 'may have been caused by', ops: ['Some regrets may have been caused by choices at 18.'] },
  { fato: 'Teenagers are terrible at planning.', tool: 'It could be argued that', ops: ['It could be argued that teenagers plan for a stranger.'] },
  { fato: 'Personality stops changing at 30.', tool: 'appear to', ops: ['Older adults appear to change more slowly.'] }
];

var PAUTA = ordem([
  { k: 'THIS WEEK', q: 'What news story did you read this week? Tell it carefully.', h: 'It would appear that prices are going up again, but the reports don’t agree.' },
  { k: 'AT 18', q: 'What did you believe at 18 that you don’t believe now?', h: 'I thought I would live abroad. It could be argued that I was just bored at home.' },
  { k: 'YOUR MUSIC', q: 'Has your favorite music changed? What might have caused it?', h: 'Yes. My taste might have been influenced by my friends at work.' },
  { k: 'CLICKBAIT', q: 'Do loud headlines make you click? Why?', h: 'They appear to work on me, which is a little embarrassing.' },
  { k: 'FALSE NEWS', q: 'Did you ever believe a story that wasn’t true? What happened?', h: 'Yes. The photo may have been edited, but I shared it anyway.' },
  { k: 'IN TEN YEARS', q: 'How will you be different in ten years?', h: 'It would appear that I’ll change more than I think.' },
  { k: 'AT WORK', q: 'At work, what do people say “causes” problems? Is it really the cause?', h: 'They say remote work causes delays. It’s linked to delays, maybe, but it isn’t the only reason.' },
  { k: 'A HEALTH STUDY', q: 'Coffee, chocolate, red wine: do you remember a study about one of them? Did it prove anything?', h: 'A study suggested that chocolate helps memory. It didn’t prove it.' }
], 17);

/* VIII · cartas + dado */
var PAUTA_CARTAS = { formato: 'cartas', titulo: 'Your headlines · tap a story', fechada: 'Pull a story', cartas: PAUTA.slice(0, 6).map(function (x) { return [x.k, x.q]; }) };
var DADO = { formato: 'sorteio', tipo: 'dado', titulo: 'Roll the tools · use at least one', botao: 'Roll', opcoes: ['It would appear that', 'appear to', 'may have been caused by', 'It could be argued that', 'suggests', 'is linked to'] };
/* IX · a repórter liga: como você responde? */
var CENAS = [
  { fala: '“You killed my headline! ‘Science proves you’ll never change’ was great.”', reacoes: [
    ['Explain what the study suggests', 'The study suggests that we keep changing. It doesn’t prove that we never change.', 'Okay, “suggests” is less exciting, but I get it.'],
    ['Say the headline was fine', 'You’re right. It proves that we never change.', 'See? Print it! (The author of the study is going to be furious.)'],
    ['Say nothing and hang up', '…', 'Hello? Are you there? The page goes to print in ten minutes!']] },
  { fala: '“But memory causes the illusion. He said so!”', reacoes: [
    ['Quote his careful words', 'He said it probably has to do with memory. He wasn’t entirely sure.', 'Right, “not entirely sure”. I missed that part.'],
    ['Agree: memory causes it', 'Yes. Memory causes the illusion. It’s proven.', 'Great! Print: MEMORY CAUSES THE ILLUSION. (He never said that.)'],
    ['Change the subject', 'Did you see the weather today?', 'The weather? We have a page to fix!']] },
  { fala: '“And the bees story? The heat wave killed them. Everybody knows that.”', reacoes: [
    ['Mention the pesticide, carefully', 'The bees may have been killed by the heat, but a new pesticide arrived the same month.', 'The pesticide. I forgot the pesticide.'],
    ['Agree: the heat wave killed them', 'Yes. The heat wave killed them.', 'Exactly! Next week the pesticide company calls our lawyer.'],
    ['Blame the reporter', 'It’s your fault. You never check anything.', 'My fault?! I wrote what the press release said!']] },
  { fala: '“So what do we print? Give me one headline.”', reacoes: [
    ['Offer a careful headline', 'People appear to underestimate how much they will change.', 'Fine. It’s careful, and it’s still good. Send it.'],
    ['Offer a loud headline', 'SCIENCE PROVES YOUR FUTURE SELF IS A STRANGER!', 'Too loud. The evidence doesn’t say that.'],
    ['Offer no headline', 'I don’t know. Print the old one.', 'The old one proves everything. No way.']] }
].map(function (x, i) { return { formato: 'reacao', titulo: 'The reporter calls · ' + (i + 1), fala: x.fala, quem: 'The reporter', reacoes: x.reacoes }; });

var QUIZ_ERRO = [
  { f: '<u>Would appear</u> that the report was wrong.', r: 'It would appear' },
  { f: 'The fire may have <u>caused</u> by a candle.', r: 'been caused' },
  { f: 'The results <u>prove</u> that the drug helps some patients.', r: 'suggest' },
  { f: 'Young voters appear <u>being</u> more interested this year.', r: 'to be' },
  { f: 'The crash <u>can</u> have been caused by the rain.', r: 'might' },
  { f: 'Poor sleep <u>links</u> to many health problems.', r: 'is linked' }
];

var S = { i: 0, faixa: 1, fala: {}, resp: {}, armas: {},
  voce: { sel: -1, foi: {} }, video: { p: 0, cap: 0, viu: {} } };

/* o medidor: o ponteiro da afirmação e a marca da evidência */
function medidor(afirma, evid, baixou) {
  var v = baixou ? evid : afirma, ang = -90 + v * 1.8, ange = -90 + evid * 1.8;
  function p(a, r) { var rad = (a - 90) * Math.PI / 180; return [(150 + r * Math.cos(rad)).toFixed(1), (150 + r * Math.sin(rad)).toFixed(1)]; }
  var e1 = p(ange, 100), e2 = p(ange, 132), n1 = p(ang, 118);
  return '<div class="ap-medidor' + (baixou ? ' ok' : '') + '"><svg viewBox="0 0 300 170" aria-hidden="true">'
    + '<path class="ap-arco" d="M30 150 A120 120 0 0 1 270 150"/><path class="ap-arco quente" d="M' + p(ange, 120).join(' ') + ' A120 120 0 0 1 270 150"/>'
    + '<line class="ap-marca" x1="' + e1[0] + '" y1="' + e1[1] + '" x2="' + e2[0] + '" y2="' + e2[1] + '"/>'
    + '<line class="ap-ponteiro" x1="150" y1="150" x2="' + n1[0] + '" y2="' + n1[1] + '"/><circle cx="150" cy="150" r="8" class="ap-eixo"/>'
    + '<text x="30" y="168" class="ap-t">CAREFUL</text><text x="270" y="168" text-anchor="end" class="ap-t">LOUD</text></svg>'
    + '<div class="ap-leg"><span><i class="c"></i>THE CLAIM · ' + v + '</span><span><i class="e"></i>THE EVIDENCE · ' + evid + '</span></div></div>';
}

var R = {};
R.capa = function () {
  return '<div class="capa"><div><span class="kick">MAIN SERIES · B2 · WRITTEN HEDGING</span><h1>It Would Appear <b>That…</b></h1>'
    + '<p class="sub">The study <b>suggests</b> that we change more than we think. It doesn’t <b>prove</b> it. Tonight you are the night editor, and nothing goes to print louder than the evidence.</p>'
    + '<div class="chipsx"><span class="pilula">appear to · it would appear that</span><span class="pilula">it could be argued that</span><span class="pilula">may have been caused by</span><span class="pilula">Live Class · W·O·L·F</span></div>'
    + '<button type="button" class="btn cheio" data-a="ir" data-n="1">Open the newsroom</button>' + faixaLive() + '</div>'
    + '<div class="capa-r"><div class="ap-manch vd"><small>TOMORROW · FRONT PAGE</small><b>Science Proves Your Personality Is Finished</b></div>' + medidor(98, 55, 0) + '</div></div>';
};

R.voce = function (c) { return cartasPessoais(c, VOCE, S.voce, 'voce', ['Yes, because …', 'Not really, …', 'I think …']); };

R.video = function (c) {
  var e = S.video, corpo;
  if (e.p === 0) corpo = '<div class="mesa-c"><div class="lado-l">' + FM.ex('ant1', ANTES_R1) + FM.ex('ant2', ANTES_R2) + '</div>'
    + '<div class="lado-l"><div class="selo-v vd"><b>SEALED</b><small>About seven minutes, in five short chapters. It opens after your answers.</small></div><div><button type="button" class="btn cheio" data-a="vd-p" data-n="1">Watch, chapter by chapter</button></div></div></div>';
  else if (e.p === 1) {
    var k = CAPS[e.cap];
    corpo = '<div class="mesa-video"><div class="video-col">' + iframe(YT, 'Your future self', '&start=' + k.ini + '&end=' + k.fim) + '<small class="cred">Chapter ' + (e.cap + 1) + ' of 5 · it stops by itself · tap a time to hear a line again</small></div><div class="lado-video"><div class="caps">'
      + CAPS.map(function (x, i) { return '<button type="button" class="chip' + (e.cap === i ? ' on' : '') + (e.viu[i] ? ' feito' : '') + '" data-a="vd-c" data-n="' + i + '">' + x.k + '</button>'; }).join('') + '</div>'
      + FM.ex('vc' + e.cap, k.tarefa)
      + '<div>' + (e.cap < CAPS.length - 1 ? '<button type="button" class="btn" data-a="vd-c" data-n="' + (e.cap + 1) + '">Next chapter</button>' : '<button type="button" class="btn" data-a="vd-p" data-n="2">After the talk</button>') + '</div></div></div>';
  } else corpo = '<div class="mesa-video"><div class="video-col">' + iframe(YT, 'Your future self', '&start=267&end=400') + '<small class="cred">The last chapter again · tap a time to hear a line</small></div><div class="lado-video">' + FM.ex('dep', DEPOIS_ESC)
    + '<p class="aprova" style="text-align:center">The scientist was careful. The headline wasn’t. Tonight, you are the editor.</p></div></div>';
  return cab(c) + '<div class="tres-tempos">' + tempos3(e.p) + '</div>' + corpo;
};

/* V · o medidor em fala primeiro: a agulha desce no Check */
R.manchetes = function (c) {
  return cab(c) + FM.fala('mc', MANCHETES.map(function (m) {
    return { pista: '<span class="ano">' + m.k + '</span>' + m.h, resp: m.ops[0].replace(/(suggests|is linked to|may have been killed by|appear to|It would appear that|It could be argued that)/, '<b>$1</b>') };
  }), {
    rotulo: 'Headline', prox: 'Next headline', diga: 'Say it carefully out loud first',
    lado: function (feitas, atual, ver) {
      if (atual < 0) return '<div class="mesa-c ap-dupla"><div class="ap-achou vd"><small>SIX HEADLINES · DOWN TO THE EVIDENCE</small><p>What is the machine behind the careful versions? The rule is next.</p></div>' + medidor(98, 55, 1) + '</div>';
      var x = MANCHETES[atual];
      return '<div class="mesa-c ap-dupla"><div class="ap-achou vd"><small>WHAT THE STUDY FOUND</small><p>' + x.achou + '</p></div>' + medidor(x.afirma, x.evid, !!ver) + '</div>';
    },
    fim: 'Six headlines down to the evidence. Read the careful ones again, out loud.'
  });
};

/* VI · o recado do editor → a regra */
R.regra = function (c) {
  return cab(c) + FM.carta('carta', CARTA, REGRA, { toque: 'Tap the careful tools', pronta: 'The rule is ready. It stays in the corner on the next pages.' });
};

/* VII · a chapa: dizer com a ferramenta da margem e tocar a ferramenta */
R.chapa = function (c) {
  var e = (S.fq || {}).ch || { u: {} }, u = e.u || {}, feitas = Object.keys(u).length;
  var col = '<div class="ap-coluna"><div class="ap-col-cab"><b>Why Your Future Self Will Surprise You</b><small>SCIENCE · PAGE 1 · GOING TO PRINT</small></div>' + CHAPA.map(function (l, i) {
    return '<p class="' + (u[i] ? 'tipo' : '') + '"><span class="ap-nota">' + l.tool + '</span>' + (u[i] ? l.ops[0] : '<s>' + l.fato + '</s>') + '</p>';
  }).join('') + '<div class="ap-rolo"><i style="width:' + Math.round(feitas / CHAPA.length * 100) + '%"></i></div></div>';
  return cab(c) + '<div class="mesa-c"><div class="lado-l">' + col + '</div><div class="lado-l">' + FM.ex('ch', { formato: 'usa', titulo: 'Say each line again, with its tool. Tap the tool when you used it.', palavras: CHAPA.map(function (l) { return l.tool; }), fim: 'Six lines, six tools. The article says what the evidence says. Send it to print.' }) + '</div></div>';
};

/* VIII · cartas de pauta + o dado de ferramentas */
R.pauta = function (c) {
  return cab(c) + '<div class="mesa-c"><div class="lado-l">' + FM.ex('pa', PAUTA_CARTAS) + '</div><div class="lado-l">' + FM.ex('dd', DADO) + '<p class="so-prof dica-aluno">Take the other side and push back: “Is that proven?”</p></div></div>';
};

/* IX · a repórter liga: como você responde? */
R.reporter = function (c) {
  return cab(c) + '<div class="ap-quatro">' + CENAS.map(function (x, i) { return FM.ex('rp' + i, x); }).join('') + '</div>';
};

/* X · achar a palavra errada */
R.quiz = function (c) {
  return cab(c) + '<div class="ap-um">' + FM.erro('qz', QUIZ_ERRO, { titulo: 'One word in each line is wrong. Say the right one.' }) + '</div>';
};

R.fim = function (c) {
  return cab(c) + '<div class="fim">' + escritaFinal('fim', (S.txt || {}).fim || '', (S.salvo || {}).fim, 'It would appear that I …\nI may have been influenced by …\nIt could be argued that in ten years …', 'Your headlines',
    ['It would appear that', 'appear to', 'may have been', 'It could be argued that', 'suggests'], ['THREE CAREFUL HEADLINES ABOUT YOU', 'Ten years ago, today, and ten years from now. Nothing louder than the evidence.'])
    + '<div class="lado-fim">' + medidor(98, 55, 1)
    + '<div class="grande vd"><span><u>appear to</u> · it would appear that</span><span><u>it could be argued that</u> · an opinion</span><span><u>may have been caused by</u> · a possible past</span><span><u>suggests</u>, not proves · <u>is linked to</u>, not causes</span><span>not <s>Would appear that</s>, not <s>can have been</s></span></div>'
    + mostra('fim', 'It would appear that I was a very different person ten years ago.<br>My taste in music may have been influenced by my friends.<br>It could be argued that I’ll change more than I expect.', 1)
    + '<p class="hw"><a class="pilula" href="HW/" target="_blank" rel="noopener">Homework for the student →</a></p></div></div>';
};

TOQUES['vd-p'] = function (b, n) { S.video.p = n; };
TOQUES['vd-c'] = function (b, n) { S.video.viu[S.video.cap] = 1; S.video.cap = n; };
