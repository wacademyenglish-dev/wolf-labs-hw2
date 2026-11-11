/* ============================================================
   SLOWLY, CAREFULLY, BADLY · THE KITCHEN GRAND PRIX · LIVE CLASS 06/10/2026
   Main series A2 · advérbios de modo: adjetivo + -ly (slowly, carefully,
   noisily), os quatro irregulares (well · fast · hard · late), a posição
   (depois do objeto: speaks English well) e look / feel / be + ADJETIVO.
   Erros universais: "runs fastly", "plays good", "works hardly", "arrived
   lately", "speaks very well English", "looks sadly".
   O MUNDO (da aula velha): um curta SEM FALA (só música) sobre uma
   geladeira antiga que foge da cozinha; o vídeo antigo fica (P7k2MkVYLDE,
   220 s), selado em quatro capítulos. Créditos e canal não aparecem na
   tela. Depois, o Grande Prêmio da Cozinha: oito eletrodomésticos numa
   pista oval, e o aluno é o narrador.
   A CARA: a CABINE DE TRANSMISSÃO — pista oval em SVG (asfalto escuro,
   zebra vermelha), os corredores como fichas; o APLAUSÔMETRO em meia-lua.
   Fila: FILA-LIVE-386.md · 065.
   ============================================================ */
var YT = 'P7k2MkVYLDE';
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'abre', est: 'o', min: 7, img: 'cabine', rot: 'I · You and How You Do Things', t: 'Before the race: you, and how you do things.', p: 'Pick a card. Answer about your real life. Nobody is corrected here.' },
  { k: 'palavras', est: 'l', img: 'cozinha', rot: 'II · The Words', t: 'Five words from the video.', p: 'Learn the words before you watch. Then listen for them: they turn yellow in the video.' },
  { k: 'video', est: 'l', min: 10, img: 'cozinha', rot: 'III · The Film', t: 'A short film with no words: an old fridge and the man who loves it.', p: 'Answer first. Then it plays in four short chapters. No words, only music: you tell the story, and HOW.' },
  { k: 'falas', est: 'l', extra: 1, img: 'cozinha', rot: 'IV · Line by Line', t: 'Every line of the video, one by one.', p: 'Tap a line. Hear it again. The lines with yellow words open the explanation.' },
  { k: 'pista', est: 'o', min: 7, img: 'pista', rot: 'V · The Grand Prix', t: 'Eight racers, one track. You are the commentator.', p: 'Tap a racer. Say the line live, with the clue word. A right answer moves the racer to the finish.' },
  { k: 'gx', est: 'f', min: 4, img: 'cabine', rot: 'VI · Find the Rule', t: 'Four pairs from the Grand Prix. One rule.', p: 'Read the four pairs out loud. Look at the lit words. Choose the rule. Then say your own.' },
  { k: 'regra', est: 'f', min: 6, img: 'cabine', rot: 'VII · The Rule', t: 'How? Adjective + -ly. Four words break the rule.', p: 'Say each wrong line the right way, out loud. Then tap it.' },
  { k: 'aovivo', est: 'o', min: 7, img: 'estadio', rot: 'VIII · Live on Air', t: 'Live on air: eight replays from the race.', p: 'Your teacher reads the replay. Say it in one sentence, at once. Every good line fills the applause meter.' },
  { k: 'roda', est: 'o', min: 7, extra: 1, img: 'trofeu', rot: 'IX · How Do You Do It?', t: 'Your life: how do you do things?', p: 'Spin. Answer with an adverb: -ly, well, fast, hard or late.' },
  { k: 'radio', est: 'o', min: 7, extra: 1, img: 'trofeu', rot: 'X · The Radio Interview', t: 'After the race, the radio interviews you, the commentator.', p: 'Your teacher is the reporter. Answer with an adverb of manner.' },
  { k: 'quiz', est: 'f', min: 6, extra: 1, img: 'pista', rot: 'XI · Quick Check', t: 'Six quick lines from the booth.', p: 'Say the whole sentence. Then tap the word.' },
  { k: 'fim', est: 'w', min: 6, img: 'capa', rot: 'XII · After the Race', t: 'Is it better to do things fast, or to do them well?', p: 'Write how you do three real things: one fast, one well, one badly. It goes to your My notes.' }
];

var ABRE = [
  { k: 'EATING', q: 'Do you eat fast or slowly? What about your family?', fup: 'Who eats slowest at home?', st: ['I eat …', 'My … eats …'], ex: 'I eat very fast. My mother eats slowly.' },
  { k: 'DRIVING', q: 'Do you drive? Do you drive carefully? Who drives badly in your family?', fup: 'Who drives best?', st: ['I drive …'], ex: 'I drive carefully. My brother drives badly!' },
  { k: 'GOOD AT IT', q: 'What do you do well? Tell me one thing.', fup: 'Who taught you?', st: ['I … well.'], ex: 'I cook well. My pasta is famous.' },
  { k: 'THE MORNING', q: 'Do you wake up happily or slowly? What do you do first?', fup: 'And on Sundays?', st: ['I wake up …'], ex: 'Slowly! I drink coffee first.' },
  { k: 'SPORTS', q: 'Do you watch sports on TV? Who talks loudly when there’s a game?', fup: 'Do you shout too?', st: ['My … talks …'], ex: 'Yes, soccer. My dad shouts loudly at the TV.' }
];
var FORMAS = [{ k: 'ly', t: 'ADJECTIVE + -LY' }, { k: 'irr', t: 'WELL · FAST · HARD · LATE' }, { k: 'adj', t: 'RUNS QUICK / PLAYS GOOD', erro: 1 }, { k: 'pos', t: 'SPEAKS VERY WELL ENGLISH', erro: 1 }];

var CAPS = [
  { k: 'HOME', ini: 0, fim: 50, q: 'Meet the man and his old fridge. How does he treat it?', h: 'He treats it kindly. They look happy together.' },
  { k: 'THE SAD DAY', ini: 50, fim: 105, q: 'Something sad happens. What does the fridge think? How does it feel?', h: 'It thinks he wants a new fridge. It feels very sad.' },
  { k: 'THE RUN', ini: 105, fim: 165, q: 'The fridge runs away. How does it move? Fast? Slowly? Carefully?', h: 'It leaves the kitchen quietly. Then it runs away fast.' },
  { k: 'THE END', ini: 165, fim: 220, q: 'How does the story end? How do they feel now?', h: 'They are together again. They look happy.' }
];

var NOTA = { adj: 'How? Not the adjective: adjective + -ly.', pos: 'Verb + object + adverb. Nothing between the verb and its object.', fastly: 'fast doesn’t change. fastly doesn’t exist.', good: 'The adverb of good is well.', hardly: 'hard doesn’t change. hardly means almost not.', lately: 'late doesn’t change. lately means recently.', look: 'After look / feel / be: the adjective (sad).' };

var RACERS = [
  { k: 'THE TOASTER', cor: '#e8794a', dica: 'fast', ops: [['The toaster takes the first curve fast.', 'ok'], ['The toaster takes the first curve fastly.', 'fastly'], ['The toaster takes fast the first curve.', 'pos']] },
  { k: 'THE KETTLE', cor: '#6fb6e8', dica: 'slow', ops: [['The kettle climbs the hill slowly.', 'ok'], ['The kettle climbs the hill slow.', 'adj'], ['The kettle climbs slowly the hill.', 'pos']] },
  { k: 'THE VACUUM', cor: '#b69cff', dica: 'noisy', ops: [['The vacuum passes the kettle noisily.', 'ok'], ['The vacuum passes the kettle noisy.', 'adj'], ['The vacuum passes noisily the kettle.', 'pos']] },
  { k: 'THE WASHER', cor: '#8fd9a2', dica: 'bad', ops: [['The washer jumps the wall badly.', 'ok'], ['The washer jumps the wall bad.', 'adj'], ['The washer jumps badly the wall.', 'pos']] },
  { k: 'THE LAMP', cor: '#f0c060', dica: 'good', ops: [['The lamp takes the corner well.', 'ok'], ['The lamp takes the corner good.', 'good'], ['The lamp takes well the corner.', 'pos']] },
  { k: 'THE BLENDER', cor: '#ec6a8a', dica: 'hard', ops: [['The blender pushes the vacuum hard.', 'ok'], ['The blender pushes the vacuum hardly.', 'hardly'], ['The blender pushes hard the vacuum.', 'pos']] },
  { k: 'THE OLD CLOCK', cor: '#d9b56a', dica: 'careful', ops: [['The old clock crosses the bridge carefully.', 'ok'], ['The old clock crosses the bridge careful.', 'adj'], ['The old clock crosses carefully the bridge.', 'pos']] },
  { k: 'THE MICROWAVE', cor: '#7fd0d0', dica: 'late', ops: [['The microwave finishes the race late.', 'ok'], ['The microwave finishes the race lately.', 'lately'], ['The microwave finishes late the race.', 'pos']] }
];

var FITAS = [['+ LY', 'slowly · carefully · badly · quietly'], ['Y → ILY', 'noisy → noisily · happy → happily'], ['THE FOUR', 'good → well · fast · hard · late'], ['WHERE?', 'verb + object + adverb · look + adjective']];
var ARMAS = [
  ['NOT THE ADJECTIVE', 'The kettle climbs the hill slow.', 'The kettle climbs the hill slowly.', 'How does it climb? slowly. slow goes with a noun: a slow kettle.'],
  ['GOOD OR WELL?', 'The lamp drives very good.', 'The lamp drives very well.', 'good goes with a noun. How does it drive? well.'],
  ['AFTER THE OBJECT', 'The clock speaks very well English.', 'The clock speaks English very well.', 'Verb + object + adverb.'],
  ['LOOK + ADJECTIVE', 'The fridge looks sadly.', 'The fridge looks sad.', 'After be, look, feel: the adjective.'],
  ['FAST', 'She runs fastly.', 'She runs fast.', 'fast doesn’t change.'],
  ['HARD', 'He works hardly every day.', 'He works hard every day.', 'hardly means almost not.']
];

var REPLAYS = [
  { k: 'REPLAY 1', diz: 'The kettle was so slow on the hill. Everybody waited.', ini: 'The kettle climbed the hill very…', ops: [['The kettle climbed the hill very slowly.', 'ok'], ['The kettle climbed very slowly the hill.', 'pos'], ['The kettle climbed the hill very slow.', 'adj']] },
  { k: 'REPLAY 2', diz: 'The lamp is a very good driver. Look at that corner!', ini: 'The lamp drives very…', ops: [['The lamp drives very well.', 'ok'], ['The lamp drives very good.', 'good'], ['The lamp drives very goodly.', 'good2']] },
  { k: 'REPLAY 3', diz: 'The blender is a hard worker. It trained every day this year.', ini: 'The blender worked…', ops: [['The blender worked hard every day.', 'ok'], ['The blender worked hardly every day.', 'hardly'], ['The blender worked very hardly.', 'hardly2']] },
  { k: 'REPLAY 4', diz: 'The vacuum is a fast runner. Look at that last lap!', ini: 'The vacuum ran the last lap…', ops: [['The vacuum ran the last lap fast.', 'ok'], ['The vacuum ran the last lap fastly.', 'fastly'], ['The vacuum ran fast the last lap.', 'pos']] },
  { k: 'REPLAY 5', diz: 'The washer fell on the wall. Now it’s alone in the rain.', ini: 'The washer looks…', ops: [['The washer looks sad.', 'ok'], ['The washer looks sadly.', 'look'], ['The washer looks very sadly.', 'look2']] },
  { k: 'REPLAY 6', diz: 'The old clock talks to the reporters. In English! Very good English.', ini: 'The old clock speaks…', ops: [['The old clock speaks English very well.', 'ok'], ['The old clock speaks very well English.', 'pos'], ['The old clock speaks English very good.', 'good']] },
  { k: 'REPLAY 7', diz: 'The race ended at 10 PM. The toaster came in at 11.', ini: 'The toaster arrived…', ops: [['The toaster arrived very late.', 'ok'], ['The toaster arrived very lately.', 'lately'], ['The toaster very late arrived.', 'pos']] },
  { k: 'REPLAY 8', diz: 'The microwave opens the trophy box. Careful: it’s glass!', ini: 'The microwave opens the box…', ops: [['The microwave opens the box carefully.', 'ok'], ['The microwave opens carefully the box.', 'pos'], ['The microwave opens the box careful.', 'adj']] }
];
NOTA.good2 = NOTA.good; NOTA.hardly2 = NOTA.hardly; NOTA.look2 = NOTA.look;

var FATIAS = [
  { k: 'COOKING', q: 'Do you cook well or badly? What do you cook best?', h: 'I cook well. I make rice and beans very well.' },
  { k: 'WORK', q: 'When do you work hard? When do you work slowly?', h: 'I work hard on Mondays. On Fridays I work slowly!' },
  { k: 'SLEEP', q: 'How do you sleep? Well? Badly? Late?', h: 'I go to bed late, and I sleep badly.' },
  { k: 'ENGLISH', q: 'Which part of English do you do well? Which part badly?', h: 'I read English well, but I speak it slowly.' },
  { k: 'TYPING', q: 'Do you type fast or slowly on your phone?', h: 'I type very fast, but badly!' },
  { k: 'LOUD', q: 'Who talks loudly in your family? Who talks quietly?', h: 'My uncle talks very loudly. My sister talks quietly.' },
  { k: 'MONEY', q: 'Do you spend money carefully?', h: 'Not really. I spend it quickly!' },
  { k: 'SINGING', q: 'Do you sing well? Where do you sing?', h: 'I sing badly, but happily, in the shower.' }
];
var CORES_R = ['#3a1e22', '#1c2a3a', '#2c2616', '#1f3024', '#2e1c30', '#16282c', '#33241a', '#22223a'];
var GIROS = ordem(FATIAS.map(function (_, i) { return i; }), 9);

var RADIO = [
  { ela: 'What a race! How did the lamp drive tonight?', pede: 'The lamp drove… (well / fast / carefully)', resp: 'I agree. That last corner was beautiful.' },
  { ela: 'And the poor washer? What happened on the wall?', pede: 'It jumped… and now it looks…', resp: 'Poor thing. Maybe next year.' },
  { ela: 'You talk fast in the booth! How do you practice?', pede: 'I practice… (hard / every day / slowly first)', resp: 'That’s the secret, then.' },
  { ela: 'Last question: what do YOU do really well?', pede: 'I … really well. (your life)', resp: 'Great! Thanks for talking to us.' }
];

var QUIZ = [
  { a: 'The kettle climbs the hill ', b: '.', op: ['slowly', 'slow', 'slowlily'], nao: 'How does it climb? Adjective + -ly: slowly.' },
  { a: 'She plays the piano very ', b: '.', op: ['well', 'good', 'goodly'], nao: 'The adverb of good is well.' },
  { a: 'He works ', b: '. He never stops.', op: ['hard', 'hardly', 'hardy'], nao: 'hard doesn’t change. hardly means almost not.' },
  { a: 'I speak ', b: '.', op: ['English well', 'well English', 'English good'], nao: 'Verb + object + adverb: English well.' },
  { a: 'The fridge looks ', b: ' after the sad day.', op: ['sad', 'sadly', 'sadness'], nao: 'After look, the adjective: sad.' },
  { a: 'The bus came ', b: ', so I missed the start.', op: ['late', 'lately', 'latly'], nao: 'late doesn’t change. lately means recently.' }
];

var S = { i: 0, faixa: 1, fala: {}, resp: {}, armas: {},
  abre: { sel: -1, foi: {}, formas: {} }, video: { p: 0, cap: 0, viu: {} }, pista: { sel: -1, esc: {} }, av: { n: 0, esc: '' }, roda: { g: 0, anim: 0 }, radio: { n: 0, viu: {} }, quiz: { esc: {} } };

function pistaSVG(chegaram, sel) {
  var pos = RACERS.map(function (r, i) {
    var a = (i / RACERS.length) * Math.PI * 2 - Math.PI / 2, x = 300 + 230 * Math.cos(a), y = 150 + 105 * Math.sin(a);
    if (chegaram[i]) { x = 170 + (i % 4) * 30; y = 132 + Math.floor(i / 4) * 32; }
    return '<g class="carro' + (chegaram[i] ? ' chegou' : '') + (sel === i ? ' sel' : '') + '"><circle cx="' + x.toFixed(1) + '" cy="' + y.toFixed(1) + '" r="13" fill="' + r.cor + '"/><text x="' + x.toFixed(1) + '" y="' + (y + 4).toFixed(1) + '" text-anchor="middle">' + (i + 1) + '</text></g>';
  }).join('');
  return '<svg class="pista" viewBox="0 0 600 300" role="img" aria-label="The track"><ellipse cx="300" cy="150" rx="270" ry="135" class="zebra"/><ellipse cx="300" cy="150" rx="262" ry="127" class="asfalto"/><ellipse cx="300" cy="150" rx="198" ry="83" class="grama"/>'
    + '<ellipse cx="300" cy="150" rx="230" ry="105" class="faixa-p"/><rect x="110" y="110" width="8" height="80" class="largada"/><text x="390" y="155" text-anchor="middle" class="nome-p">THE KITCHEN GRAND PRIX</text>' + pos + '</svg>';
}
function aplausometro(n, total) {
  var g = '';
  for (var i = 0; i < total; i++) {
    var a0 = Math.PI * (1 - i / total), a1 = Math.PI * (1 - (i + 1) / total) + .03, r0 = 70, r1 = 120;
    var p = function (r, a) { return (150 + r * Math.cos(a)).toFixed(1) + ' ' + (140 - r * Math.sin(a)).toFixed(1); };
    g += '<path d="M' + p(r0, a0) + ' L' + p(r1, a0) + ' A' + r1 + ' ' + r1 + ' 0 0 1 ' + p(r1, a1) + ' L' + p(r0, a1) + ' A' + r0 + ' ' + r0 + ' 0 0 0 ' + p(r0, a0) + ' Z" class="gomo' + (i < n ? ' on' : '') + '" style="--h:' + (10 + i * 14) + '"/>';
  }
  return '<svg class="aplauso" viewBox="0 0 300 160" role="img" aria-label="Applause meter">' + g + '<text x="150" y="132" text-anchor="middle" class="ap-n">' + n + ' / ' + total + '</text><text x="150" y="154" text-anchor="middle" class="ap-t">APPLAUSE</text></svg>';
}
function roda(sel, anim) {
  var fat = FATIAS.map(function (f, i) {
    var a0 = (i * 45 - 90) * Math.PI / 180, a1 = ((i + 1) * 45 - 90) * Math.PI / 180, am = ((i + 0.5) * 45 - 90) * Math.PI / 180;
    var x0 = 100 + 96 * Math.cos(a0), y0 = 100 + 96 * Math.sin(a0), x1 = 100 + 96 * Math.cos(a1), y1 = 100 + 96 * Math.sin(a1);
    var tx = 100 + 62 * Math.cos(am), ty = 100 + 62 * Math.sin(am);
    return '<path d="M100 100 L' + x0.toFixed(1) + ' ' + y0.toFixed(1) + ' A96 96 0 0 1 ' + x1.toFixed(1) + ' ' + y1.toFixed(1) + ' Z" fill="' + CORES_R[i] + '" stroke="#0a0d14" stroke-width="2"/>'
      + '<text x="' + tx.toFixed(1) + '" y="' + ty.toFixed(1) + '" transform="rotate(' + ((i + 0.5) * 45) + ' ' + tx.toFixed(1) + ' ' + ty.toFixed(1) + ')" text-anchor="middle" dominant-baseline="middle">' + f.k + '</text>';
  }).join('');
  var fim = sel < 0 ? 0 : -((sel + 0.5) * 45);
  return '<div class="roda-box"><span class="ponteiro"></span><svg class="roda' + (anim ? ' gira' : '') + '" viewBox="0 0 200 200" style="--ate:' + fim + 'deg;transform:rotate(' + fim + 'deg)" role="img" aria-label="How do you do it wheel">' + fat + '<circle cx="100" cy="100" r="16" fill="#0a0d14" stroke="#e8463c" stroke-width="2"/></svg></div>';
}

var R = {};
R.capa = function () {
  return '<div class="capa"><div class="lado-a"><span class="kick">MAIN SERIES · A2 · THE KITCHEN GRAND PRIX</span><h1>Slowly, Carefully, <b>Badly</b></h1>'
    + '<p class="sub">An old fridge leaves the kitchen <b>quietly</b>, then runs <b>fast</b>. Tell us <b>how</b>.</p>'
    + '<div class="chipsx"><span class="pilula">adjective + -ly</span><span class="pilula">well · fast · hard · late</span><span class="pilula">speaks English well</span><span class="pilula">Live Class · W·O·L·F</span></div>'
    + '<button type="button" class="btn cheio" data-a="ir" data-n="1">Enter the booth</button>' + faixaLive() + '</div>'
    + '<div class="capa-d"><div class="cabine-p">' + pistaSVG({}, -1) + '</div></div></div>';
};

R.abre = function (c) {
  return cartasPessoais(c, ABRE, S.abre, 'abre') + '<div class="partes so-prof"><h5>WHAT YOU HEAR · DON’T CORRECT</h5>' + FORMAS.map(function (f) { return '<button type="button" class="chip frase' + (f.erro ? ' erro-ouvido' : '') + (S.abre.formas[f.k] ? ' on' : '') + '" data-a="ab-f" data-v="' + f.k + '">' + f.t + '</button>'; }).join('') + '</div>';
};

R.video = function (c) {
  var e = S.video, passos = '<div class="tres-tempos">' + tempos3(e.p) + '</div>', corpo;
  if (e.p === 0) corpo = '<div class="foco"><div class="pergunta vd"><small>BEFORE YOU WATCH</small><h2>The film is about a runaway. What can run away from home? And with no words, how can we tell the story?</h2></div>' + fala('va', ['A dog, a cat, …', 'We say what they do, and how.'], []) + mostra('va', 'A dog, a cat, a child… maybe a fridge? We say what they do, and how they do it.', 1) + '<div style="text-align:center"><button type="button" class="btn cheio" data-a="vd-p" data-n="1">Watch, chapter by chapter</button></div></div>';
  else if (e.p === 1) {
    var k = CAPS[e.cap];
    corpo = '<div class="mesa-video"><div class="video-col">' + iframe(YT, 'A short film with no words', '&start=' + k.ini + '&end=' + k.fim) + '<small class="cred">Chapter ' + (e.cap + 1) + ' of 4 · it stops by itself · music only</small></div><div class="lado-video"><div class="caps">'
      + CAPS.map(function (x, i) { return '<button type="button" class="chip' + (e.cap === i ? ' on' : '') + (e.viu[i] ? ' feito' : '') + '" data-a="vd-c" data-n="' + i + '">' + x.k + '</button>'; }).join('') + '</div>'
      + '<div class="pergunta vd ja"><small>' + k.k + '</small><h2>' + k.q + '</h2></div>' + mostra('vd' + e.cap, k.h, 1)
      + '<div>' + (e.cap < 3 ? '<button type="button" class="btn" data-a="vd-c" data-n="' + (e.cap + 1) + '">Next chapter</button>' : '<button type="button" class="btn" data-a="vd-p" data-n="2">After the film</button>') + '</div></div></div>';
  } else corpo = '<div class="foco"><div class="pergunta vd ja"><small>AFTER</small><h2>Tell the whole story in four sentences. Say HOW they do things. Which moment did you like best?</h2></div>' + fala('vb', ['He treats it …', 'It leaves …', 'It runs …', 'In the end, they …'], ['kindly', 'sadly', 'quietly', 'fast', 'happily']) + mostra('vb', 'He treats his fridge kindly. One day it leaves sadly and quietly. Then it runs fast. In the end, they smile happily.', 1) + '</div>';
  return cab(c) + passos + corpo;
};

R.pista = function (c) {
  var e = S.pista, x = e.sel >= 0 ? RACERS[e.sel] : null, cheg = {}, n = 0;
  RACERS.forEach(function (_, i) { if (e.esc[i] === 'ok') { cheg[i] = 1; n++; } });
  var lista = '<div class="grid-r">' + RACERS.map(function (r, i) { return '<button type="button" class="racer' + (e.sel === i ? ' on' : '') + (cheg[i] ? ' feito' : '') + '" data-a="ps" data-n="' + i + '" style="--c:' + r.cor + '"><i>' + (i + 1) + '</i><b>' + r.k + '</b><small>' + r.dica + '</small></button>'; }).join('') + '</div>';
  var lado;
  if (!x) lado = '<div class="pergunta vd"><small>' + n + ' OF 8 ACROSS THE LINE</small><h2>' + (n === 8 ? 'Eight racers across the line. Why slowly and carefully, but fast and well? The rule is next.' : 'Tap a racer. Say the line live, with the clue word.') + '</h2></div>';
  else {
    var esc = e.esc[e.sel], ok = esc === 'ok';
    lado = '<div class="pede vd"><small>' + x.k + ' · CLUE WORD</small><b>' + x.dica + '</b></div>'
      + (ok ? '<div class="balao vd"><small>THE COMMENTATOR</small><p>' + x.ops[0][0] + '</p></div>' : '<h5 class="so-prof rot-ouve">TAP THE VERSION YOU HEARD</h5><div class="versoes">' + ordem(x.ops, e.sel + 2).map(function (o) { return '<button type="button" class="versao' + (esc === o[1] ? ' errado' : '') + '" data-a="ps-v" data-v="' + o[1] + '">' + o[0] + '</button>'; }).join('') + '</div>' + (esc ? '<p class="recusa">' + NOTA[esc] + '</p>' : ''));
  }
  return cab(c) + '<div class="mesa-p"><div class="lado-l">' + pistaSVG(cheg, e.sel) + lista + '</div><div class="lado-l">' + lado + '</div></div>';
};

R.regra = function (c) {
  return cab(c) + '<div class="fitas">' + FITAS.map(function (f) { return '<div class="fita vd"><small>' + f[0] + '</small><b>' + f[1] + '</b></div>'; }).join('') + '</div>' + armas(ARMAS, 'THE TRAPS · SAY IT RIGHT, THEN TAP');
};

R.aovivo = function (c) {
  var e = S.av, n = e.n, fim = n >= REPLAYS.length, feitos = n + (!fim && e.esc === 'ok' ? 1 : 0);
  var lado;
  if (fim) lado = '<div class="pergunta vd"><small>ON AIR</small><h2>Eight replays, and the applause meter is full. That’s all from the booth tonight!</h2></div>';
  else {
    var x = REPLAYS[n], ok = e.esc === 'ok';
    lado = '<div class="pede vd"><small>' + x.k + ' · YOUR CO-HOST</small><b>“' + x.diz + '”</b></div>' + (ok ? '<div class="balao vd"><small>YOU, ON AIR</small><p>' + x.ops[0][0] + '</p></div><div><button type="button" class="btn" data-a="av-prox">Next replay</button></div>'
      : '<p class="ini">' + x.ini + '</p><h5 class="so-prof rot-ouve">TAP WHAT YOU HEARD</h5><div class="versoes">' + ordem(x.ops, n + 5).map(function (o) { return '<button type="button" class="versao' + (e.esc === o[1] ? ' errado' : '') + '" data-a="av" data-v="' + o[1] + '">' + o[0] + '</button>'; }).join('') + '</div>' + (e.esc ? '<p class="recusa">' + NOTA[e.esc] + '</p>' : ''));
  }
  return cab(c) + trilha(REPLAYS, n) + '<div class="mesa-p"><div class="vd quadro-a"><span class="no-ar">● LIVE</span>' + aplausometro(feitos, 8) + '</div><div class="lado-l">' + lado + '</div></div>';
};

R.roda = function (c) {
  var e = S.roda, sel = e.g > 0 ? GIROS[(e.g - 1) % 8] : -1, x = sel >= 0 ? FATIAS[sel] : null;
  var lado = x ? '<div class="pergunta vd ja"><small>' + x.k + ' · HOW?</small><h2>' + x.q + '</h2></div>' + fala('rd' + sel, ['I … well / badly.', 'I … fast / slowly.'], ['well', 'badly', 'fast', 'slowly', 'carefully', 'hard', 'late']) + mostra('rd' + sel, x.h, 1) + '<p class="dica-aluno">Your teacher answers too.</p>'
    : '<div class="pergunta vd"><small>HOW DO YOU DO IT?</small><h2>Spin the wheel. Answer about your real life. Say how.</h2></div>';
  return cab(c) + '<div class="mesa-c"><div class="lado-l centro">' + roda(sel, e.anim) + '<button type="button" class="btn cheio" data-a="rd">' + (e.g ? 'Spin again' : 'Spin') + '</button></div><div class="lado-l">' + lado + '</div></div>';
};

R.radio = function (c) {
  var e = S.radio, n = e.n, fim = n >= RADIO.length;
  var foto = '<div class="aberta vd" style="background-image:url(' + img('trofeu') + ')"><span class="rec">● ON AIR</span><span>RADIO SPORTS · AFTER THE RACE</span></div>';
  if (fim) return cab(c) + '<div class="mesa-c">' + foto + '<div class="lado-l"><div class="pergunta vd"><small>THE INTERVIEW IS OVER</small><h2>A quick check before the lights go off.</h2></div></div></div>';
  var x = RADIO[n], viu = e.viu[n];
  return cab(c) + '<div class="mesa-c">' + foto + '<div class="lado-l">' + trilha(RADIO, n) + '<div class="balao vd"><small>THE REPORTER</small><p>“' + x.ela + '”</p></div><div class="pede vd"><small>YOUR TURN</small><b>' + x.pede + '</b></div>'
    + (viu ? '<div class="balao vd"><small>THE REPORTER</small><p>“' + x.resp + '”</p></div><div><button type="button" class="btn" data-a="ra-prox">Next</button></div>' : '<div><button type="button" class="btn so-prof" data-a="ra-viu">Answered · the reporter replies</button></div>') + '</div></div>';
};

R.quiz = function (c) {
  var e = S.quiz, todos = QUIZ.every(function (_, i) { return e.esc[i] === 0; });
  return cab(c) + '<div class="quiz">' + QUIZ.map(function (x, i) {
    var esc = e.esc[i], ok = esc === 0;
    return '<div class="q-linha vd' + (ok ? ' feito' : '') + '"><p>' + x.a + '<span class="gap">' + (ok ? x.op[0] : '___') + '</span>' + x.b + '</p><div class="tres-b">' + ordem(x.op.map(function (o, k) { return [o, k]; }), i + 1).map(function (o) {
      return '<button type="button" class="pilula' + (esc === o[1] ? (ok ? ' certo' : ' errado') : '') + '" data-a="qz" data-n="' + i + '" data-v="' + o[1] + '"' + (ok ? ' disabled' : '') + '>' + o[0] + '</button>'; }).join('') + '</div>' + (esc > 0 ? '<p class="recusa">' + x.nao + '</p>' : '') + '</div>';
  }).join('') + '</div>' + (todos ? '<p class="aprova" style="text-align:center">Six out of six. One last question for you.</p>' : '');
};

R.fim = function (c) {
  var f = S.abre.formas, lembra = FORMAS.filter(function (x) { return f[x.k]; }).map(function (x) { return x.t; });
  return cab(c) + '<div class="fim">' + escritaFinal('fim', (S.txt || {}).fim || '', (S.salvo || {}).fim, 'I … fast.\nI … well.\nI … badly.', 'How you do it',
    [' fast', ' well', ' badly', ' slowly', ' carefully', ' hard'], ['FAST, OR WELL?', lembra.length ? 'In scene I your teacher heard: ' + lembra.join(', ') + '. Now: one thing you do fast, one well, one badly.' : 'One thing you do fast, one thing you do well, one thing you do badly.'])
    + '<div class="lado-fim">' + aplausometro(8, 8) + '<div class="grande vd"><span>how? adjective + <u>-ly</u></span><span>the four: <u>well</u> · <u>fast</u> · <u>hard</u> · <u>late</u></span><span>speaks <u>English well</u></span><span>looks <u>sad</u> (adjective)</span></div>'
    + mostra('fim', 'I type very fast, but badly.<br>I cook rice and beans very well.<br>I sing badly, but happily, in the shower.', 1)
    + '<p class="hw"><a class="pilula" href="HW/" target="_blank" rel="noopener">Homework for the student →</a></p></div></div>';
};

TOQUES['ab-f'] = function (b, n, v) { S.abre.formas[v] = !S.abre.formas[v]; };
TOQUES['vd-p'] = function (b, n) { S.video.p = n; };
TOQUES['vd-c'] = function (b, n) { S.video.viu[S.video.cap] = 1; S.video.cap = n; };
TOQUES.ps = function (b, n) { S.pista.sel = n; };
TOQUES['ps-v'] = function (b, n, v) { S.pista.esc[S.pista.sel] = v; };
TOQUES.av = function (b, n, v) { S.av.esc = v; };
TOQUES['av-prox'] = function () { S.av = { n: S.av.n + 1, esc: '' }; };
TOQUES.rd = function () { S.roda.g++; S.roda.anim = 1; setTimeout(function () { S.roda.anim = 0; }, 1300); };
TOQUES['ra-viu'] = function () { S.radio.viu[S.radio.n] = 1; };
TOQUES['ra-prox'] = function () { S.radio.n++; };
TOQUES.qz = function (b, n, v) { S.quiz.esc[n] = +v; };

/* 10/11/2026 · AS EXPLICAÇÕES (kit/formatos3.js) · G10 · uma cena curta nova (k: gx) antes de regra.
   Explicação 100% em inglês: see → notice → use (o aluno fala ou escreve uma frase dele no fim). */
var GX_EXPLICA = { formato: 'achaRegra', titulo: 'Four pairs from the race. Find the rule yourself.',
  exemplos: [
    'The fridge is <b>slow</b>. It moves <u>slowly</u>.',
    'The man is <b>careful</b>. He opens the door <u>carefully</u>.',
    'The toaster is <b>fast</b>. It runs <u>fast</u>.',
    'The blender is <b>good</b>. It races <u>well</u>.'
  ],
  pergunta: 'To say HOW someone does something, we …',
  opcoes: ['add -ly to the adjective, but four words are different', 'always use the adjective: runs slow, speaks careful', 'always add -ly: runs fastly, plays goodly'], c: 0,
  nao: 'Not that one. Read the four lit pairs again: slow, slowly · fast, fast · good, well.',
  regra: 'HOW? <b>Adjective + -ly</b>: slowly, carefully, noisily. Four words break the rule: <b>well</b>, <b>fast</b>, <b>hard</b>, <b>late</b>. After <b>be</b>, <b>look</b> and <b>feel</b>, use the adjective: the fridge looks sad.',
  uso: { p: 'Your turn. One thing you do slowly, one thing you do carefully, and one thing you do well.', molde: ['I … slowly.', 'I … carefully.', 'I … well.'], ex: 'I walk slowly. I drive carefully. I cook well.' } };
R.gx = function (c) { return cab(c) + FM.ex('gx_regra', GX_EXPLICA); };
