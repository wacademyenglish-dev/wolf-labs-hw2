/* ============================================================
   YOU NEEDN'T HAVE BOTHERED · DID YOU DO IT? · LIVE CLASS  06/10/2026
   Main series C1 · needn't have + particípio (FEZ, à toa) × didn't need
   to + verbo (não precisou, e em geral não fez) × could have + particípio
   / would have been able to (a chance que passou).
   Erros: didn't need to HAVE bought · needn't TO · needn't have bring ·
   needn't HAD · mustn't have (sentido) · needn't have para o que NÃO foi
   feito · could buy · would be able to no passado irreal.
   O MUNDO (da aula velha): quatro amigos sobem para uma cabana na
   montanha em 28 de dezembro; o carro cheio do que não precisava, e
   ficaram as correntes de neve e os fósforos. Sem áudio, sem vídeo.
   Ajuste: na aula velha, "didn't need to pack twelve blankets" falava de
   algo que eles FIZERAM; aqui as linhas de "didn't need to" são coisas
   que ninguém fez (o lanche, o bagageiro).
   A CARA (nova): UMA pergunta vira o painel — "Did you do it?". Cada
   frase certa cai numa de três raias: à esquerda, âmbar como a janela
   da cabana, o que FIZERAM à toa; à direita, branco de neve, o que não
   precisou; embaixo, tracejada, a chance que passou. O resto é quieto:
   noite de pinheiro, Young Serif nos títulos, rótulos em caixa normal.
   Fila: FILA-LIVE-386.md · 151. Pasta piloto-needn (conferida).
   22/10/2026 · OS FORMATOS NOVOS (kit/formatos.js), mesmas 8 páginas:
   nada de escolher entre três frases quase iguais (eram 16 rodadas).
   II a mensagem da Priya (carta → regra; cada forma achada cai na sua
   raia); III as armadilhas viram a palavra errada (FM.erro); IV a noite
   na neve em fala primeiro + Check (6 momentos, não 8).
   ============================================================ */
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'voce', est: 'o', min: 7, img: 'lareira', rot: 'I · You and Your Bags', t: 'Before the trip: you, your bags, and the things you never use.', p: 'Tap a card. The student answers; then the teacher answers too.' },
  { k: 'mala', est: 'f', min: 7, img: 'portamalas', rot: 'II · The Unpacking', t: 'Priya writes to her sister from the cabin. What did they bring for nothing?', p: 'Read Priya’s message out loud. Tap the six verb phrases. Then finish the rule.' },
  { k: 'regra', est: 'f', min: 6, img: 'cozinha', rot: 'III · Six Traps', t: 'Six lines from the trip. Each one fell into a trap.', p: 'Say each line the right way out loud. Then tap Check. Ask: did they do it?' },
  { k: 'neve', est: 'o', min: 7, img: 'estrada', rot: 'IV · Snowed In', t: 'The snowed-in night. Six moments around the cabin. Finish each one fast.', p: 'Read the moment. The student finishes it out loud, then taps Check. Watch which lane it lands in.' },
  { k: 'roda', est: 'o', min: 7, img: 'janela', rot: 'V · What For?', t: 'Your life: the things you did for nothing, and the chances you missed.', p: 'Tap a card. Answer about your real life.' },
  { k: 'dona', est: 'o', min: 7, img: 'lareira', rot: 'VI · The Owner Calls', t: 'January 1st. The cabin owner calls to wish you a happy New Year.', p: 'The teacher is the owner. Answer with needn’t have, didn’t need to, could have.' },
  { k: 'fim', est: 'w', min: 6, img: 'capa', rot: 'VII · Traveling Light', t: 'Is it better to overprepare, or to travel light?', p: 'Your last trip, in three lines. They go to your My notes.' }
];

var VOCE = [
  { k: 'Packing', q: 'Are you a heavy packer or a light packer? What always goes in your bag?', fup: 'Do you use it?', st: ['Heavy. I always …', 'Light. I only …'], ex: 'Heavy. I always take clothes I never wear, just in case.' },
  { k: 'December', q: 'How do you usually spend the last days of the year?', fup: 'What do you prepare?', st: ['At … with …'], ex: 'At the beach with my family. We always cook far too much food.' },
  { k: 'The mountains', q: 'Have you ever stayed in a cabin, or anywhere with snow?', fup: 'What was it like?', st: ['Never with snow …', 'Once, in …'], ex: 'Never with snow. Only a small cabin by a lake, and it rained all week.' },
  { k: 'Forgotten', q: 'What is the most important thing you ever forgot on a trip?', fup: 'What did you do?', st: ['My …'], ex: 'My charger. I spent five days with a dead phone.' },
  { k: 'For nothing', q: 'Have you ever prepared a lot for something that turned out to be easy?', fup: 'Was it worth it?', st: ['Yes. I … and …'], ex: 'Yes. I studied all weekend, and the test was canceled.' }
];

/* r = a raia: fez (did it, for nothing) · nao (didn't, no need) · chance (could have) */
/* 22/10/2026 · OS FORMATOS NOVOS (kit/formatos.js) */
/* II · a mensagem da Priya (texto nosso, no mundo da aula) → a regra; a forma i cai na raia de MALA[i] */
var CARTA = { de: 'Priya · to my sister · Dec 28, 11 PM',
  txt: 'We’re here! Funny story. We [[needn’t have brought]] three camping stoves: the cabin has a gas stove with six burners. Leo [[needn’t have carried]] his generator up the hill, and we [[needn’t have bought]] forty cans of beans. We almost stopped for snacks on the way, but we [[didn’t need to stop]]: the cabin had everything. The bad news? The snow chains are still in the garage. We [[could have bought]] some in town, but we drove right past the store. With chains, we [[would have been able to]] drive up. We walked the last two miles!',
  assina: 'Priya' };
var MALA = [
  { r: 'fez', f: 'We needn’t have brought three camping stoves.' },
  { r: 'fez', f: 'Leo needn’t have carried his generator up the hill.' },
  { r: 'fez', f: 'We needn’t have bought forty cans of beans.' },
  { r: 'nao', f: 'We didn’t need to stop for snacks.' },
  { r: 'chance', f: 'We could have bought chains in town.' },
  { r: 'chance', f: 'With chains, we would have been able to drive up.' }
];
var REGRA = [
  { a: 'We needn’t have brought three stoves. Did they bring them? ', par: ['Yes', 'No'], c: 0, b: ' They did it, for nothing.' },
  { a: 'We didn’t need to stop. Did they stop? ', par: ['Yes', 'No'], c: 1, b: ' No need, so they didn’t.' },
  { a: 'needn’t have + ', par: ['participle', 'base verb'], c: 0, b: ': needn’t have carried.' },
  { a: 'didn’t need to + ', par: ['base verb', 'have + participle'], c: 0, b: ': didn’t need to stop.' },
  { a: 'We could have bought chains. Did they buy them? ', par: ['Yes', 'No'], c: 1, b: ' A chance they missed.' }
];
var PRESA = '<b>needn’t have</b> + participle<br>= you did it, for nothing<br><b>didn’t need to</b> + verb<br>= no need, so you didn’t<br><b>could have</b> + participle<br><b>would have been able to</b><br>= the chance you missed';

/* III · as armadilhas: a parte errada, o aluno diz a certa */
var TRAPS = [
  { f: 'We <u>didn’t need to have</u> bought forty cans.', r: 'needn’t have' },
  { f: 'The ranger cleared the road, so we <u>needn’t have shoveled</u>.', r: 'didn’t need to shovel' },
  { f: 'With chains, we <u>would be able to</u> drive up last night.', r: 'would have been able to' },
  { f: 'We <u>mustn’t</u> have packed so much.', r: 'needn’t' },
  { f: 'Sam needn’t <u>to wrap</u> all those glasses.', r: 'have wrapped' },
  { f: 'Leo needn’t have <u>bring</u> nine board games.', r: 'brought' }
];

/* IV · a noite na neve: o momento, o começo, a frase falada */
var NEVE = [
  { diz: 'We left the snow chains in the garage. We walked the last two miles in the snow.', ini: 'If we had brought them, we …', r: 'chance', f: 'If we had brought them, we <b>would have been able to</b> drive up.', depois: 'What would you have been able to do with more time last week?' },
  { diz: 'The ranger cleared the road at 8 AM. Nobody touched the shovel.', ini: 'We didn’t …', r: 'nao', f: 'We <b>didn’t need to shovel</b> the road.', depois: 'Did they shovel? So why not NEEDN’T HAVE?' },
  { diz: 'The GPS died on the mountain. There was a paper map in the glove box the whole time.', ini: 'We could …', r: 'chance', f: 'We <b>could have used</b> the paper map.', depois: 'Did they use it?' },
  { diz: 'Priya drove back to town in the snow for bread. The pantry already had four loaves.', ini: 'She needn’t …', r: 'fez', f: 'She <b>needn’t have driven</b> back to town.', depois: 'Did she drive? Yes, for nothing.' },
  { diz: 'We didn’t reserve the sleigh ride. There was nobody in line.', ini: 'We didn’t …', r: 'nao', f: 'We <b>didn’t need to reserve</b> the sleigh ride.', depois: 'What didn’t you need to do this week?' },
  { diz: 'Your mom called nine times that night. Everybody was fine.', ini: 'Mom, you …', r: 'fez', f: 'Mom, you <b>needn’t have worried</b>. We were fine.', depois: 'Who worries about you for nothing?' }
];

var RODA = [
  { k: 'The suitcase', q: 'What did you pack on your last trip that you never used?', fup: 'Why did you pack it?', st: ['I needn’t have packed …'], ex: 'I needn’t have packed three jackets. It was hot every day.' },
  { k: 'The worry', q: 'Tell me about something you worried about for nothing.', fup: 'What happened in the end?', st: ['I needn’t have worried about …'], ex: 'I needn’t have worried about the interview. They offered me the job on the spot.' },
  { k: 'Lucky', q: 'Something you expected to do, but in the end you didn’t need to?', fup: 'Why not?', st: ['I didn’t need to …'], ex: 'I didn’t need to take the bus. A friend gave me a ride.' },
  { k: 'The chance', q: 'What is a chance you had and didn’t take?', fup: 'Do you regret it?', st: ['I could have …, but …'], ex: 'I could have studied in Canada, but I stayed here.' },
  { k: 'More time', q: 'With more time last year, what would you have been able to do?', fup: 'And this year?', st: ['I would have been able to …'], ex: 'I would have been able to finish my course.' },
  { k: 'Year end', q: 'At the end of the year, what do you always prepare too much of?', fup: 'Who eats it all?', st: ['… We needn’t have made so much.'], ex: 'Food! We needn’t have made so much last year.' }
];

var DONA = [
  { q: '“Happy New Year! Did you find the snow chains in the garage? Everybody forgets them.”', fup: 'The owner says: “Oh no! They were right by the door.”', st: ['No … we could have … / we would have been able to …'], ex: 'No! With them, we would have been able to drive up.' },
  { q: '“I hope you didn’t bring any food. The pantry was full.”', fup: 'The owner says: “Forty cans! Leave a few for the next guests.”', st: ['We needn’t have …'], ex: 'We needn’t have brought forty cans of beans.' },
  { q: '“Did you have to cut any firewood?”', fup: 'The owner says: “Good. That shed is always full.”', st: ['No, we didn’t need to … / There was no need to …'], ex: 'No, we didn’t need to cut any. The shed was full.' },
  { q: '“So, next December, what will you pack?”', fup: 'The owner says: “Smart. See you next winter!”', st: ['Just the chains and some matches. We needn’t have …'], ex: 'Just the chains and matches. We needn’t have brought anything else.' }
];

var S = { i: 0, faixa: 1, fala: {}, resp: {}, armas: {},
  voce: { sel: -1, foi: {} }, ro: { sel: -1, foi: {} }, do: { n: 0, foi: {} } };

/* o painel das raias */
var RAIAS = { fez: ['We did it, for nothing', 'needn’t have + participle'], nao: ['We didn’t: no need', 'didn’t need to + verb'], chance: ['The chance we missed', 'could have / would have been able to'] };
function raias(lista, nova, comChance) {
  var por = { fez: [], nao: [], chance: [] };
  lista.forEach(function (x, i) { por[x.r].push('<li class="' + (i === nova ? 'chega' : '') + '">' + String(x.f).replace(/<\/?b>/g, '') + '</li>'); });
  var raia = function (k) { return '<section class="nd-raia ' + k + '"><h3>' + RAIAS[k][0] + '</h3><p>' + RAIAS[k][1] + '</p><ul>' + (por[k].join('') || '<li class="vazio">nothing yet</li>') + '</ul></section>'; };
  return '<div class="nd-painel vd"><div class="nd-topo">Did you do it?</div><div class="nd-duas' + (comChance ? ' tres' : '') + '">' + raia('fez') + raia('nao') + (comChance ? raia('chance') : '') + '</div></div>';
}

var R = {};
R.capa = function () {
  return '<div class="capa"><div><span class="kick">MAIN SERIES · C1 · NEEDN’T HAVE</span><h1>You Needn’t Have Bothered</h1>'
    + '<p class="sub">Three stoves, forty cans of beans, a generator: the cabin already had all of it. And the two things that mattered, the snow chains and the matches, stayed in a garage two hundred miles away.</p>'
    + '<div class="chipsx"><span class="pilula">needn’t have brought</span><span class="pilula">didn’t need to shovel</span><span class="pilula">could have bought</span><span class="pilula">Live Class · W·O·L·F</span></div>'
    + '<button type="button" class="btn cheio" data-a="ir" data-n="1">Open the trunk</button>' + faixaLive() + '</div>'
    + '<div class="capa-r">' + raias([MALA[0], MALA[3], NEVE[2]], -1, 1) + '</div></div>';
};

R.voce = function (c) { return cartasPessoais(c, VOCE, S.voce, 'voce', ['I always take …', 'I forgot …', 'It wasn’t necessary to …']); };

R.mala = function (c) {
  var e = (S.fq || {}).carta || { v: {} }, achadas = MALA.filter(function (x, i) { return e.v && e.v[i]; });
  return cab(c) + FM.carta('carta', CARTA, REGRA, { toque: 'Tap the six verb phrases', pronta: 'The rule is ready. It stays in the corner on the next pages.' })
    + '<div class="nd-sob">' + raias(achadas, -1, 1) + '</div>';
};

R.regra = function (c) {
  return cab(c) + FM.erro('traps', TRAPS, { titulo: 'Each line has a trap. Say the right words.', regra: PRESA });
};

R.neve = function (c) {
  return cab(c) + FM.fala('neve', NEVE.map(function (x) { return { pista: '<span class="ano">Start with</span>' + x.ini, resp: x.f, depois: x.depois }; }), {
    rotulo: 'Moment', prox: 'Next moment', regra: PRESA,
    lado: function (feitas, atual, nova) {
      return '<div class="nd-lado">' + (atual >= 0 ? '<div class="nd-momento vd"><p>' + NEVE[atual].diz + '</p></div>' : '<div class="nd-momento vd"><p>The snow stops at dawn, and the road is clear.</p></div>')
        + raias(NEVE.slice(0, feitas), nova && atual >= 0 ? atual : -1, 1) + '</div>';
    },
    fim: 'Six moments, three lanes. Now one of your own: a night when something went wrong. What did you do for nothing? What could you have done?'
  });
};
R.roda = function (c) { return cartasPessoais(c, RODA, S.ro, 'ro', ['I needn’t have …', 'I didn’t need to …', 'I could have …']); };

R.dona = function (c) {
  return cab(c) + '<div class="nd-fone vd"><b>The cabin owner is calling</b><span>January 1st, 10 AM</span></div>'
    + sequencia({ est: 'o', rot: '', t: '', p: '' }, DONA, S.do, 'do', 'The chains will stay in the car next year.').replace(/<div class="cab[\s\S]*?<\/p><\/div>/, '');
};

R.fim = function (c) {
  return cab(c) + '<div class="fim">' + escritaFinal('fim', (S.txt || {}).fim || '', (S.salvo || {}).fim, 'I needn’t have …\nI didn’t need to …\nI could have …', 'Your trip',
    ['needn’t have', 'didn’t need to', 'there was no need to', 'could have', 'would have been able to'], ['Traveling light', 'Your last trip or big event: something you did for nothing, something you didn’t need to do, a chance you missed.'])
    + '<div class="lado-fim">' + raias([MALA[0], MALA[3], NEVE[2]], -1, 1)
    + '<div class="grande vd"><span><u>needn’t have brought</u> · you did it, for nothing</span><span><u>didn’t need to shovel</u> · not necessary, so you didn’t</span><span><u>could have bought · would have been able to</u> · the missed chance</span><span>not <s>didn’t need to have bought</s>, not <s>needn’t to</s>, not <s>mustn’t have</s></span></div>'
    + mostra('fim', 'I needn’t have packed three jackets: it was hot every day.<br>I didn’t need to rent a car; the hotel had a shuttle.<br>I could have stayed two more days, but I didn’t.', 1)
    + '<p class="hw"><a class="pilula" href="HW/" target="_blank" rel="noopener">Homework for the student →</a></p></div></div>';
};

