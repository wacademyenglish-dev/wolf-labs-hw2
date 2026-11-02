/* ============================================================
   CRACK TWO EGGS · THE SILENT KITCHEN · LIVE CLASS  05/10/2026
   Main series A1 · imperativo para instrução: o verbo sozinho
   (Crack two eggs.) · Don't + verbo · first, then, next, finally · please
   O MUNDO: um vídeo famoso de panqueca (Tasty, T-08QfbETRE) NÃO TEM VOZ:
   só mãos, tigela e frigideira. O aluno é a voz do chef. Primeiro as
   oito fichas de receita (cada ordem certa vai para o cartão da receita),
   depois a regra, depois o vídeo em seis capítulos (o aluno narra), os
   perigos da cozinha (cada aviso certo pendura uma placa), a roleta das
   regras da casa e o Sam, que não sabe cozinhar.
   Sem áudio gravado (como na aula antiga). Mantidos: o vídeo e os seis
   capítulos, as onze fotos, as oito fichas, os cinco perigos, o Sam e o
   quiz. Fila: FILA-LIVE-386.md · 005.
   ============================================================ */
var YT = 'T-08QfbETRE';
var L = [
  { k: 'capa', est: null, img: 'panquecas' },
  { k: 'voce', est: 'o', min: 7, img: 'geladeira', rot: 'I · Your Kitchen', t: 'Do you cook?', p: 'Pick a card. Answer out loud. Then the follow-up comes.' },
  { k: 'fichas', est: 'o', min: 7, img: 'capa', rot: 'II · The Recipe Cards', t: 'Eight recipe cards. Look at the picture. Say the order.', p: 'Pick a card. Say the order out loud. Then tap your sentence: a right one goes on the recipe.' },
  { k: 'regra', est: 'f', min: 6, img: 'mistura', rot: 'III · The Rule', t: 'An order is the verb alone.', p: 'Read the three cards out loud. Then fix the four traps.' },
  { k: 'video', est: 'l', min: 10, img: 'panquecas', rot: 'IV · The Silent Video', t: 'The video has no voice. You are the chef.', p: 'Play a chapter. Then give the orders out loud, like a TV chef. Then tap your sentence.' },
  { k: 'perigo', est: 'o', min: 7, img: 'fogo', rot: 'V · Kitchen Dangers', t: 'Five dangers in the kitchen. Warn your friend.', p: 'Pick a danger. Say the warning with DON’T. A right one puts up the sign.' },
  { k: 'roda', est: 'o', min: 7, extra: 1, img: 'cafe', rot: 'VI · House Rules', t: 'Every house has rules.', p: 'Spin the wheel. Say one DO and one DON’T. Then your teacher says theirs.' },
  { k: 'sam', est: 'o', min: 7, extra: 1, img: 'ovos', rot: 'VII · Sam Can’t Cook', t: 'Your friend Sam has a date tonight. He can’t cook.', p: 'Your teacher is Sam. Give him the orders. Then ask him a question back.' },
  { k: 'quiz', est: 'f', min: 6, extra: 1, img: 'panquecas', rot: 'VIII · Quick Check', t: 'Six quick orders from the kitchen.', p: 'Say the whole sentence first. Then tap the word.' },
  { k: 'fim', est: 'w', min: 6, img: 'panquecas', rot: 'IX · Your Recipe', t: 'Your favorite easy recipe, on a card.', p: 'Write the orders: First… Then… Next… Finally… And one Don’t. The red line watches the verbs. It goes to your My notes.' }
];

/* I · a sua cozinha */
var VOCE = [
  { k: 'BREAKFAST', q: 'What do you eat for breakfast?', fup: 'Who makes it?', st: ['I eat …', 'I drink …'], ex: 'I eat bread and eggs. I drink coffee. I make it.' },
  { k: 'COOKING', q: 'Do you cook? What do you make?', fup: 'What is your best dish?', st: ['I make …', 'I can’t cook!'], ex: 'I make rice and eggs. That’s all!' },
  { k: 'YOUR FRIDGE', q: 'What is in your fridge right now?', fup: 'What do you need to buy?', st: ['There is …', 'There are …'], ex: 'Milk, eggs, cheese and some old pizza.' },
  { k: 'VIDEOS', q: 'Do you watch cooking videos? Where?', fup: 'Do you try the recipes?', st: ['Yes, on …', 'No, I …'], ex: 'Yes, on my phone. Short videos. I never try them!' },
  { k: 'A FAVORITE', q: 'What is your favorite food? Who makes it?', fup: 'When do you eat it?', st: ['My favorite food is …', '… makes it.'], ex: 'My mother’s cake. She makes it on Sundays.' }
];

/* II · as fichas (ops[0] é a certa) */
var FICHAS = [
  { img: 'ovos', v: 'crack', o: 'two eggs', ok: 'Crack two eggs.', ops: [['Crack two eggs.', 'ok'], ['You crack two eggs.', 'you'], ['Cracking two eggs.', 'ing']] },
  { img: 'leite', v: 'pour', o: 'the milk', ok: 'Pour the milk.', ops: [['Pour the milk.', 'ok'], ['To pour the milk.', 'to'], ['You pour the milk.', 'you']] },
  { img: 'mistura', v: 'mix', o: 'it well', ok: 'Mix it well.', ops: [['Mix it well.', 'ok'], ['Mixing it well.', 'ing'], ['You mix it well.', 'you']] },
  { img: 'fogo', v: 'heat', o: 'the pan', ok: 'Heat the pan.', ops: [['Heat the pan.', 'ok'], ['Heats the pan.', 's'], ['To heat the pan.', 'to']] },
  { img: 'frigideira', v: 'flip', o: 'the pancake', ok: 'Flip the pancake.', ops: [['Flip the pancake.', 'ok'], ['Flips the pancake.', 's'], ['Flipping the pancake.', 'ing']] },
  { img: 'faca', v: 'cut', o: 'the strawberries', ok: 'Cut the strawberries.', ops: [['Cut the strawberries.', 'ok'], ['You cut the strawberries.', 'you'], ['To cut the strawberries.', 'to']] },
  { img: 'pia', v: 'wash', o: 'your hands', ok: 'Wash your hands.', ops: [['Wash your hands.', 'ok'], ['Washing your hands.', 'ing'], ['Washes your hands.', 's']] },
  { img: 'panquecas', v: 'eat', o: 'and enjoy!', ok: 'Eat and enjoy!', ops: [['Eat and enjoy!', 'ok'], ['You eat and enjoy!', 'you'], ['Eating and enjoying!', 'ing']] }
];
var POR = { you: 'An order starts with the verb. No YOU.', ing: 'No -ING. The simple verb, like in the dictionary.', to: 'No TO. Just the verb.', s: 'No -S. The verb alone.', dont: 'NO is DON’T + verb: Don’t touch.', dontto: 'After DON’T: the verb alone. No TO.' };

/* IV · os seis capítulos do vídeo */
var CAPS = [
  { k: 'THE DRY BOWL', ini: 5, fim: 12, q: 'The flour, the baking powder, mix.', ops: [['Put the flour in a bowl. Add the baking powder. Mix.', 'ok'], ['You put the flour in a bowl. You add the baking powder.', 'you'], ['Putting the flour in a bowl. Adding the baking powder.', 'ing']] },
  { k: 'THE WET BOWL', ini: 11, fim: 21, q: 'The milk, the egg yolks, the butter.', ops: [['Pour the milk. Add the egg yolks and the butter. Whisk.', 'ok'], ['Pours the milk. Adds the egg yolks.', 's'], ['To pour the milk. To add the butter.', 'to']] },
  { k: 'THE WHITES', ini: 21, fim: 29, q: 'The egg whites. And one DON’T!', ops: [['Beat the egg whites. Don’t stop!', 'ok'], ['Beat the egg whites. No stop!', 'dont'], ['Beat the egg whites. Not stop!', 'dont']] },
  { k: 'MIX IT ALL', ini: 29, fim: 45, q: 'The flour, the whites, gently.', ops: [['Add the flour. Then add the whites. Don’t mix too much.', 'ok'], ['Add the flour. Don’t to mix too much.', 'dontto'], ['Adding the flour. No mix too much.', 'dont']] },
  { k: 'THE PAN', ini: 45, fim: 60, q: 'Pour, cover, low heat, flip.', ops: [['Pour the batter. Cover the pan. Cook on low heat. Flip it.', 'ok'], ['You pour the batter. You cover the pan.', 'you'], ['Pour the batter. Covering the pan.', 'ing']] },
  { k: 'THE STACK', ini: 60, fim: 79, q: 'Stack, butter, syrup, cut, eat!', ops: [['Stack the pancakes. Add butter and syrup. Cut a piece. Eat!', 'ok'], ['Stacks the pancakes. Adds butter.', 's'], ['To stack the pancakes. To eat.', 'to']] }
];

/* V · perigos */
var PERIGOS = [
  { k: 'HOT', img: 'frigideira', ops: [['Don’t touch the pan! It’s hot.', 'ok'], ['No touch the pan!', 'dont'], ['Don’t to touch the pan!', 'dontto']] },
  { k: 'SHARP', img: 'faca', ops: [['Don’t play with the knife.', 'ok'], ['Not play with the knife.', 'dont'], ['Don’t playing with the knife.', 'ing']] },
  { k: 'FIRE', img: 'fogo', ops: [['Don’t leave the stove on.', 'ok'], ['You don’t leave the stove on.', 'you'], ['No leave the stove on.', 'dont']] },
  { k: 'COLD', img: 'geladeira', ops: [['Don’t leave the fridge open.', 'ok'], ['Don’t to leave the fridge open.', 'dontto'], ['Not leave the fridge open.', 'dont']] },
  { k: 'WET', img: 'pia', ops: [['Be careful! Don’t run. The floor is wet.', 'ok'], ['Careful you! No run.', 'dont'], ['Being careful! Don’t run.', 'ing']] }
];

/* VI · a roleta (gira em ordem fixa: 3 casas por giro, sem sorteio) */
var FATIAS = [
  { k: 'KITCHEN', q: 'Rules for the kitchen.', h: 'Wash the dishes. Don’t eat my cake!' },
  { k: 'BATHROOM', q: 'Rules for the bathroom.', h: 'Close the door. Don’t use my towel.' },
  { k: 'CLASS', q: 'Rules for an English class.', h: 'Speak English. Don’t sleep!' },
  { k: 'PHONE', q: 'Rules for phones at dinner.', h: 'Put your phone away. Don’t answer calls.' },
  { k: 'GUESTS', q: 'Rules for guests in your home.', h: 'Take off your shoes. Don’t open the fridge.' },
  { k: 'PETS', q: 'Rules for your dog or cat.', h: 'Sit! Don’t eat the sofa!' },
  { k: 'MORNING', q: 'Rules for your mornings.', h: 'Drink water. Don’t look at your phone.' },
  { k: 'WORK', q: 'Rules for your work or school.', h: 'Be on time. Don’t forget your ID.' }
];

/* VII · o Sam */
var SAM = [
  { ele: 'Help! I want to make eggs. What do I do first?', voce: 'First, crack two eggs into a bowl. Do you have a pan?', resp: 'A pan? Yes… I think it’s a pan.' },
  { ele: 'OK, the eggs are in the bowl. Now what?', voce: 'Mix them. Then add some salt. Do you have salt?', resp: 'Salt, yes. Sugar, yes. Which one?!' },
  { ele: 'The pan is very hot. Can I touch it?', voce: 'No! Don’t touch it! Are you OK?', resp: 'Yes, I’m OK. Thanks!' },
  { ele: 'The eggs are ready. What now?', voce: 'Put them on a plate. Don’t forget the bread! What time is your date?', resp: 'In ten minutes! Wish me luck!' }
];

/* VIII · quiz */
var QUIZ = [
  { f: '___ two eggs into the bowl.', op: ['Crack', 'You crack', 'Cracking'], nao: 'The verb alone: Crack.' },
  { f: '___ touch the pan! It’s hot.', op: ['Don’t', 'No', 'Not'], nao: 'NO = Don’t + verb.' },
  { f: 'Don’t ___ the fridge open.', op: ['leave', 'to leave', 'leaving'], nao: 'After Don’t: the verb alone.' },
  { f: '___, mix the flour and the milk.', op: ['First', 'Firstly you', 'One'], nao: 'Steps: First, then, next, finally.' },
  { f: '___ the pancake after two minutes.', op: ['Flip', 'Flips', 'Flipped'], nao: 'The verb alone, no -S.' },
  { f: '___ pass the salt.', op: ['Please', 'You', 'Do'], nao: 'For a person, not a recipe: Please.' }
];

/* ---------- o estado ---------- */
var S = { i: 0, faixa: 1, fala: {}, resp: {}, armas: {},
  voce: { sel: -1, foi: {} }, fichas: { sel: -1, esc: {}, feitas: {} },
  video: { p: 0, cap: 0, viu: {}, esc: {} }, perigo: { sel: -1, esc: {}, placas: {} },
  roda: { giros: 0, foi: {} }, sam: { n: 0, foi: {} }, quiz: { n: 0, esc: -1 } };

/* ---------- as cenas ---------- */
var R = {};
R.capa = function () {
  return '<div class="capa"><div class="lado-a"><span class="kick">MAIN SERIES · THE SILENT KITCHEN · A1</span><h1>Crack <b>Two Eggs</b></h1>'
    + '<p class="sub">A famous recipe video has no voice. You are the chef: crack, mix, pour, flip.</p>'
    + '<div class="chipsx"><span class="pilula">the verb alone</span><span class="pilula">Don’t + verb</span><span class="pilula">first · then · finally</span><span class="pilula">Live Class · W·O·L·F</span></div>'
    + '<button type="button" class="btn cheio" data-a="ir" data-n="1">Open the kitchen</button>' + faixaLive() + '</div>'
    + '<div class="foto"><img src="' + img('panquecas') + '" alt="A stack of pancakes with strawberries and syrup"><div class="placa-capa"><small>RECIPE Nº 1</small><b>Pancakes</b><span>NO VOICE · YOU TALK</span></div></div></div>';
};
R.voce = function (c) { return cartasPessoais(c, VOCE, S.voce, 'voce'); };

function opcoes(lista, esc, acao, n, sem) {
  return '<div class="versoes">' + ordem(lista.map(function (o, i) { return [o, i]; }), n + 1).map(function (o) {
    return '<button type="button" class="versao' + (esc === o[1] ? (o[1] === 0 ? ' certo' : ' errado') : '') + '" data-a="' + acao + '" data-n="' + n + '" data-v="' + o[1] + '"' + (esc === 0 || sem ? ' disabled' : '') + '>' + o[0][0] + '</button>';
  }).join('') + '</div>';
}

R.fichas = function (c) {
  var e = S.fichas, x = e.sel >= 0 ? FICHAS[e.sel] : null, feitas = FICHAS.filter(function (_, i) { return e.feitas[i]; });
  var grade = '<div class="fichas-g">' + FICHAS.map(function (f, i) {
    return '<button type="button" class="ficha-r' + (e.sel === i ? ' on' : '') + (e.feitas[i] ? ' feita' : '') + '" data-a="fc-sel" data-n="' + i + '" style="background-image:url(' + img(f.img) + ')"><span>' + (e.feitas[i] ? f.v : '?') + '</span></button>';
  }).join('') + '</div>';
  var cartao = '<div class="cartao-receita"><small>RECIPE CARD · PANCAKES</small><ol>' + (feitas.length ? feitas.map(function (f) { return '<li>' + f.ok + '</li>'; }).join('') : '<li class="vazio">Every right order goes here.</li>') + '</ol></div>';
  var meio = x ? '<div class="pergunta vd' + (e.feitas[e.sel] ? ' ja' : '') + '"><small>THE PICTURE · ' + x.v.toUpperCase() + ' · ' + x.o + '</small><h2>Say the order.</h2></div>' + opcoes(x.ops, e.esc[e.sel], 'fc', e.sel)
    + (e.feitas[e.sel] ? '<p class="aprova">GOT IT. The verb alone: <b>' + x.ok + '</b></p>' : (e.esc[e.sel] > 0 ? '<p class="recusa">' + POR[x.ops[e.esc[e.sel]][1]] + '</p>' : '<p class="dica-aluno">Say it out loud first. Then tap your sentence.</p>'))
    : '<p class="dica-aluno">Pick a card.</p>';
  return cab(c) + '<div class="mesa-fichas">' + grade + '<div class="lado-fichas">' + meio + cartao + '</div></div>';
};

R.regra = function (c) {
  var cartoes = '<div class="cartoes">'
    + '<div class="cr vd"><small>1 · DO IT</small><h3>The <em>verb alone</em></h3><div class="ex"><span><u>Crack</u> two eggs.</span><span><u>Mix</u>.</span></div></div>'
    + '<div class="cr vd"><small>2 · DON’T DO IT</small><h3><em>Don’t</em> + verb</h3><div class="ex"><span><u>Don’t touch</u> the pan!</span></div></div>'
    + '<div class="cr vd"><small>3 · THE STEPS</small><h3><em>First, then, next, finally</em></h3><div class="ex"><span><u>First</u>, crack the eggs. <u>Then</u> mix.</span></div></div></div>';
  return cab(c) + cartoes + armas([
    ['NO YOU', 'You pour the milk.', 'Pour the milk.', 'Start with the verb.'],
    ['NO, NOT', 'No touch the pan!', 'Don’t touch the pan!', 'NO = Don’t + verb.'],
    ['DON’T TO', 'Don’t to open the oven.', 'Don’t open the oven.', 'After Don’t: the verb alone.'],
    ['NO -S', 'Flips the pancake.', 'Flip the pancake.', 'The verb alone, no -S.']], 'THE FOUR TRAPS · TAP TO FIX');
};

R.video = function (c) {
  var v = S.video, cap = CAPS[v.cap], todos = CAPS.every(function (_, i) { return v.esc[i] === 0; });
  var passos = '<div class="tres-tempos">' + tempos3(v.p) + '</div>';
  if (v.p === 0) return cab(c) + passos + '<div class="foco"><div class="pergunta vd"><small>BEFORE YOU WATCH</small><h2>Look at the photo. What do we make today? What do we need?</h2></div>'
    + fala('vda', ['I think we make …', 'We need …'], ['eggs', 'milk', 'flour', 'butter', 'sugar', 'a pan']) + mostra('vda', 'I think we make pancakes! We need eggs, milk, flour, butter and sugar.', 1)
    + '<div style="text-align:center"><button type="button" class="btn cheio" data-a="vd-p" data-n="1">Open the video</button></div></div>';
  if (v.p === 2) return cab(c) + passos + '<div class="foco"><div class="pergunta vd ja"><small>AFTER · THE WHOLE RECIPE</small><h2>Now say the whole recipe, from the start: first, then, next, finally.</h2></div>'
    + fala('vdb', ['First, put the flour in a bowl.', 'Then …', 'Next, …', 'Finally, eat!'], []) + mostra('vdb', 'First, put the flour in a bowl and mix. Then pour the milk and add the yolks. Next, beat the whites; don’t stop! Finally, cook, flip and eat!', 1)
    + follow('FOLLOW-UP', 'Do you want to make these pancakes? Why, or why not?', ['Yes, because …', 'No, because …'], [], 'vdc') + '</div>';
  var capitulos = '<div class="capitulos">' + CAPS.map(function (k, i) {
    return '<button type="button" class="capitulo' + (v.cap === i ? ' on' : '') + (v.esc[i] === 0 ? ' feito' : '') + '" data-a="vd-cap" data-n="' + i + '"><small>' + (i + 1) + '</small>' + k.k + '</button>';
  }).join('') + '</div>';
  var lado = '<div class="lado-video"><div class="pergunta vd' + (v.esc[v.cap] === 0 ? ' ja' : '') + '"><small>CHAPTER ' + (v.cap + 1) + ' · ' + cap.k + '</small><h2>' + cap.q + '</h2></div>'
    + (v.viu[v.cap] ? opcoes(cap.ops, v.esc[v.cap], 'vd', v.cap) + (v.esc[v.cap] === 0 ? '<p class="aprova">GOT IT. Like a TV chef.</p>' : (v.esc[v.cap] > 0 ? '<p class="recusa">' + POR[cap.ops[v.esc[v.cap]][1]] + '</p>' : '<p class="dica-aluno">Say the orders out loud. Then tap what you said.</p>'))
      : '<p class="dica-aluno">Play the chapter. It stops by itself.</p><div><button type="button" class="btn so-prof" data-a="vd-viu">Watched · show the options</button></div>')
    + (todos ? '<div><button type="button" class="btn cheio" data-a="vd-p" data-n="2">After the video</button></div>' : '') + '</div>';
  return cab(c) + passos + capitulos + '<div class="mesa-video"><div class="video-col">' + iframe(YT, 'Perfect Fluffy Pancakes, a recipe video with no voice', '&start=' + cap.ini + '&end=' + cap.fim) + '<small class="cred">Video: Tasty · chapter ' + (v.cap + 1) + ' of 6 · no voice: you are the chef</small></div>' + lado + '</div>';
};

R.perigo = function (c) {
  var e = S.perigo, x = e.sel >= 0 ? PERIGOS[e.sel] : null;
  var parede = '<div class="parede">' + PERIGOS.map(function (p, i) {
    return '<button type="button" class="perigo-c' + (e.sel === i ? ' on' : '') + '" data-a="pg-sel" data-n="' + i + '" style="background-image:url(' + img(p.img) + ')"><small>' + p.k + '</small>' + (e.placas[i] ? '<span class="placa"><b>!</b>' + p.ops[0][0].split(/[.!]/)[0] + '!</span>' : '') + '</button>';
  }).join('') + '</div>';
  var lado = x ? '<div class="pergunta vd"><small>DANGER · ' + x.k + '</small><h2>Warn your friend.</h2></div>' + opcoes(x.ops, e.esc[e.sel], 'pg', e.sel)
    + (e.placas[e.sel] ? '<p class="aprova">GOT IT. The sign goes up: <b>' + x.ops[0][0] + '</b></p>' : (e.esc[e.sel] > 0 ? '<p class="recusa">' + POR[x.ops[e.esc[e.sel]][1]] + '</p>' : '<p class="dica-aluno">Say the warning first. Then tap your sentence.</p>'))
    : '<p class="dica-aluno">Pick a danger.</p>';
  return cab(c) + '<div class="mesa-perigo">' + parede + '<div class="lado-perigo">' + lado + '</div></div>';
};

R.roda = function (c) {
  var r = S.roda, atual = r.giros ? (r.giros * 3 - 3) % FATIAS.length : -1, x = atual >= 0 ? FATIAS[atual] : null, ang = r.giros ? ((r.giros * 3 - 3) % FATIAS.length) * 45 + r.giros * 360 : 0;   /* a fatia da vez para embaixo do ponteiro; a ordem é fixa (sem sorteio) */
  var fatias = FATIAS.map(function (f, i) {
    var a0 = (i * 45 - 90 - 22.5) * Math.PI / 180, a1 = ((i + 1) * 45 - 90 - 22.5) * Math.PI / 180, x0 = 100 + 92 * Math.cos(a0), y0 = 100 + 92 * Math.sin(a0), x1 = 100 + 92 * Math.cos(a1), y1 = 100 + 92 * Math.sin(a1);
    var am = (i * 45 - 90) * Math.PI / 180;
    return '<path d="M100 100 L' + x0.toFixed(1) + ' ' + y0.toFixed(1) + ' A92 92 0 0 1 ' + x1.toFixed(1) + ' ' + y1.toFixed(1) + ' Z" class="fatia f' + (i % 2) + (r.foi[i] ? ' feita' : '') + '"/>'
      + '<text x="' + (100 + 58 * Math.cos(am)).toFixed(1) + '" y="' + (100 + 58 * Math.sin(am) + 3).toFixed(1) + '" transform="rotate(' + (i * 45) + ' ' + (100 + 58 * Math.cos(am)).toFixed(1) + ' ' + (100 + 58 * Math.sin(am)).toFixed(1) + ')">' + f.k + '</text>';
  }).join('');
  var roda = '<div class="roda-box vd"><div class="ponteiro"></div><svg class="roda-svg" viewBox="0 0 200 200" style="transform:rotate(' + (-ang) + 'deg)">' + fatias + '<circle cx="100" cy="100" r="16" class="eixo"/></svg><button type="button" class="btn cheio" data-a="rd-gira">Spin</button></div>';
  var lado = x ? '<div class="pergunta vd"><small>' + x.k + '</small><h2>' + x.q + '</h2></div>' + fala('rd' + atual, ['DO: …', 'DON’T: Don’t …'], ['wash', 'close', 'put', 'take off', 'be', 'speak']) + mostra('rd' + atual, x.h, 1)
    + (r.foi[atual] ? '' : '<div><button type="button" class="btn so-prof" data-a="rd-foi">Said both · your turn, teacher</button></div>')
    : '<p class="dica-aluno">Spin the wheel.</p>';
  return cab(c) + '<div class="mesa-roda">' + roda + '<div class="lado-roda">' + lado + '</div></div>';
};

R.sam = function (c) {
  var s = S.sam, n = s.n, fim = n >= SAM.length, x = SAM[Math.min(n, SAM.length - 1)];
  if (fim) return cab(c) + trilha(SAM, n) + '<div class="foco"><div class="pergunta vd"><small>SAM’S EGGS ARE READY</small><h2>Four calls, and every one had an order and a question back.</h2></div></div>';
  return cab(c) + trilha(SAM, n) + '<div class="conversa-sam"><div class="msg-sam vd"><small>SAM · YOUR FRIEND</small><p>“' + x.ele + '”</p><p class="so-prof" style="margin:0;color:var(--t3);font-size:14px">Read it in Sam’s voice. A little panicked.</p></div>'
    + '<div class="lado-sam">' + fala('sm' + n, ['First, …', 'Then …', 'Don’t …!', 'Do you have …?'], []) + mostra('sm' + n, x.voce, 1)
    + (s.foi[n] ? '<div class="msg-sam resp vd"><small>SAM</small><p>“' + x.resp + '”</p></div><div><button type="button" class="btn" data-a="seq-prox" data-c="sam">Next</button></div>'
      : '<div><button type="button" class="btn so-prof" data-a="seq-foi" data-c="sam">Answered · Sam replies</button></div>') + '</div></div>';
};

R.quiz = function (c) {
  var q = S.quiz, n = q.n, fim = n >= QUIZ.length, x = QUIZ[Math.min(n, QUIZ.length - 1)];
  if (fim) return cab(c) + trilha(QUIZ, n) + '<div class="foco"><div class="pergunta vd"><small>SIX OUT OF SIX</small><h2>The kitchen is clean. The verb alone, and Don’t.</h2></div></div>';
  var certo = q.esc === 0;
  return cab(c) + trilha(QUIZ, n) + '<div class="foco"><div class="pergunta vd' + (certo ? ' ja' : '') + '"><small>ORDER ' + (n + 1) + '</small><h2>' + x.f.replace('___', certo ? '<b>' + x.op[0] + '</b>' : '<span class="vaga">___</span>') + '</h2></div>'
    + '<div class="versoes linha">' + ordem(x.op.map(function (o, i) { return [o, i]; }), n).map(function (o) { return '<button type="button" class="versao' + (q.esc === o[1] ? (o[1] === 0 ? ' certo' : ' errado') : '') + '" data-a="qz" data-n="' + o[1] + '"' + (certo ? ' disabled' : '') + '>' + o[0] + '</button>'; }).join('') + '</div>'
    + (certo ? '<p class="aprova" style="text-align:center">GOT IT. Say it again.</p><div style="text-align:center"><button type="button" class="btn" data-a="qz-prox">Next</button></div>' : (q.esc > 0 ? '<p class="recusa">' + x.nao + '</p>' : '')) + '</div>';
};

R.fim = function (c) {
  return cab(c) + '<div class="fim">' + escritaFinal('fim', (S.txt || {}).fim || '', (S.salvo || {}).fim, 'MY EASY RECIPE: …\nFirst, …\nThen …', 'Your recipe',
    ['First, ', 'Then ', 'Next, ', 'Finally, ', 'Don’t ', 'put ', 'add ', 'mix ', 'cook '], ['YOUR RECIPE CARD', 'Your favorite easy recipe: coffee, eggs, a sandwich, anything. Give the orders.'])
    + '<div class="lado-fim"><div class="grande vd"><span><u>Crack</u> two eggs. <u>Mix</u>. <u>Pour</u>.</span><span><u>Don’t touch</u> the pan!</span><small>The verb alone: no you, no -ing, no to, no -s. NO is Don’t + verb.</small></div>'
    + mostra('fim', 'MY EASY RECIPE: COFFEE<br>First, boil some water.<br>Then put two spoons of coffee in the filter.<br>Next, pour the water slowly.<br>Don’t add sugar! Finally, drink it hot.', 1)
    + '<p class="hw"><a class="pilula" href="HW/" target="_blank" rel="noopener">Homework for the student →</a></p></div></div>';
};

/* ---------- os toques desta aula ---------- */
TOQUES['fc-sel'] = function (b, n) { S.fichas.sel = n; };
TOQUES.fc = function (b, n, v) { var e = S.fichas; if (e.esc[n] === 0) return false; e.esc[n] = +v; if (+v === 0) e.feitas[n] = 1; };
TOQUES['vd-p'] = function (b, n) { S.video.p = n; };
TOQUES['vd-cap'] = function (b, n) { S.video.cap = n; };
TOQUES['vd-viu'] = function () { S.video.viu[S.video.cap] = 1; };
TOQUES.vd = function (b, n, v) { var e = S.video; if (e.esc[n] === 0) return false; e.esc[n] = +v; };
TOQUES['pg-sel'] = function (b, n) { S.perigo.sel = n; };
TOQUES.pg = function (b, n, v) { var e = S.perigo; if (e.esc[n] === 0) return false; e.esc[n] = +v; if (+v === 0) e.placas[n] = 1; };
TOQUES['rd-gira'] = function () { S.roda.giros++; };
TOQUES['rd-foi'] = function () { var r = S.roda; r.foi[(r.giros * 3 - 3) % FATIAS.length] = 1; };
TOQUES.qz = function (b, n) { if (S.quiz.esc === 0) return false; S.quiz.esc = n; };
TOQUES['qz-prox'] = function () { S.quiz = { n: S.quiz.n + 1, esc: -1 }; };
