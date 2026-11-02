/* ============================================================
   DUE TO, AS A RESULT · THE DRIFT MAP · LIVE CLASS  06/10/2026
   Main series B2 · causa e efeito: due to / owing to / because of +
   SUBSTANTIVO (a causa); because + frase; As a result, / Consequently,
   começam FRASE NOVA (o efeito); , which led to + substantivo ou -ing
   (o próximo elo); as a result OF + substantivo. Erros: due to + frase,
   because of + frase, because + substantivo, ", as a result" colado,
   "as a result the storm" sem OF, "led to + verbo conjugado", "owning
   to", "due the", "consequent", "as consequence".
   O MUNDO (da aula velha): 1992, um navio perde contêineres numa
   tempestade no Pacífico Norte e milhares de patinhos de borracha caem
   no mar; o aluno é o assistente do turno da noite do Drift Lab
   (inventado), em Sitka; o vídeo sobre correntes (p4pWafuvdrY, 4:34,
   selado em quatro capítulos: 0–62–130–205–274, minutagem A CONFERIR
   como na velha); a esteira profunda; a June, que acha um patinho
   branco. Sem áudio além do vídeo. Nenhum nome de canal na tela.
   A CARA: o MAPA DA DERIVA — o giro do Pacífico Norte em SVG, seis
   estações, e o patinho amarelo que avança de estação em estação e vai
   desbotando; e a ESTEIRA PROFUNDA em corte: um laço de oito trechos
   (quente em cima, frio embaixo) que acendem um a um.
   Fila: FILA-LIVE-386.md · 119.
   ============================================================ */
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'voce', est: 'o', min: 7, img: 'praia', rot: 'I · You and the Sea', t: 'Before the ocean: you, the sea, and the things that get lost.', p: 'Tap a card. Answer out loud. Then your teacher answers too.' },
  { k: 'palavras', est: 'l', img: 'navio', rot: 'II · The Words', t: 'Five words from the video.', p: 'Learn the words before you watch. Then listen for them: they turn yellow in the video.' },
  { k: 'video', est: 'l', min: 10, img: 'navio', rot: 'III · The Explainer', t: 'How do ocean currents work?', p: 'The video is locked. Answer first, then it plays in four short chapters. Then True or Lie.' },
  { k: 'falas', est: 'l', extra: 1, img: 'navio', rot: 'IV · Line by Line', t: 'Every line of the video, one by one.', p: 'Tap a line. Hear it again. The lines with yellow words open the explanation.' },
  { k: 'deriva', est: 'o', min: 7, img: 'mapa', rot: 'V · The Drift Map', t: 'The Drift Lab, night shift. Six stations on the map, six links in the chain.', p: 'Tap a station. Read the log out loud. Answer, then join the cause and the effect in one sentence.' },
  { k: 'regra', est: 'f', min: 6, img: 'laboratorio', rot: 'VI · The Rule', t: 'What comes after the linker? A noun, or a whole sentence?', p: 'Say each wrong line the right way out loud. Then tap SHOW ME.' },
  { k: 'esteira', est: 'o', min: 7, img: 'abismo', rot: 'VII · The Deep Conveyor', t: 'Eight links, one loop. Build each link fast, with the linker on the card.', p: 'Your teacher reads the fact and the linker. Build the sentence at once.' },
  { k: 'roda', est: 'o', min: 7, extra: 1, img: 'farol', rot: 'VIII · Your Chain Reactions', t: 'Your life is a chain of causes and effects too.', p: 'Tap any four. Answer in two links: the cause, then the effect.' },
  { k: 'june', est: 'o', min: 7, extra: 1, img: 'praia', rot: 'IX · The Beachcomber Calls', t: '2 AM at the Drift Lab. June found an old duck on the beach.', p: 'Your teacher is June. Explain the duck’s journey, with a linker in every answer.' },
  { k: 'quiz', est: 'f', min: 6, extra: 1, img: 'mapa', rot: 'X · Quick Check', t: 'Five quick lines from the lab log.', p: 'Say the whole sentence. Then tap the words.' },
  { k: 'fim', est: 'w', min: 6, img: 'capa', rot: 'XI · End of the Shift', t: 'What small thing in your life led to something big?', p: 'Write your own chain reaction, four links long. It goes to your My notes.' }
];

var YT = 'p4pWafuvdrY';

var VOCE = [
  { k: 'THE SEA', q: 'When did you last see the ocean? Where were you, and what was the water like?', fup: 'Did you go in?', st: ['Last …, in …', 'The water was …'], ex: 'Last summer, in the south. The water was freezing, so I only went in to my knees.' },
  { k: 'THE BEACH', q: 'What is the strangest thing you have ever found on a beach?', fup: 'Where do you think it came from?', st: ['I once found …'], ex: 'A single shoe. I always wonder where the other one is.' },
  { k: 'LOST AND FOUND', q: 'Have you ever lost something and found it much later, or very far away?', fup: 'How did it get there?', st: ['I lost …, and …'], ex: 'I lost my sunglasses on a boat, and a friend found them a year later.' },
  { k: 'WHY?', q: 'Are you a “why” person? Do you like to know why things happen, or only what happens?', fup: 'Give me an example.', st: ['Why, always.', 'Only what happens.'], ex: 'Why, always. I watch science videos before I go to sleep.' },
  { k: 'ONE THING', q: 'Think of a small thing that changed your day today: the traffic, the weather, a message. What happened?', fup: 'And then?', st: ['It …, so …, and …'], ex: 'It rained, so the bus was late, and I missed my first meeting.' }
];

var ANTES = [
  { q: 'Imagine you drop a toy duck into the ocean near Japan. Where do you think it will end up? Guess.', h: 'Maybe in California? Or it just goes around in circles.' },
  { q: 'What do you think moves ocean water? Say two things: the wind, the Moon, the sun, the salt …', h: 'The wind, for sure. And maybe the temperature.' }
];
var CAPS = [
  { k: 'THE DUCKS', ini: 0, fim: 62, q: 'What happened in 1992? What happened to the ducks after that?', h: 'A ship lost its containers in a storm, and the toys ended up on beaches all over the world.' },
  { k: 'THE WIND', ini: 62, fim: 130, q: 'What moves the water at the surface? And what does the spin of the Earth do to the currents?', h: 'The wind pushes the surface water, and the Earth’s spin turns the currents into giant circles.' },
  { k: 'DEEP DOWN', ini: 130, fim: 205, q: 'What moves the water deep down? Why does cold, salty water go down?', h: 'Differences in temperature and salt. Cold, salty water is heavier, so it sinks.' },
  { k: 'WHY IT MATTERS', ini: 205, fim: 274, q: 'Why are currents important for the climate and for sea life? What is changing now?', h: 'They carry heat around the planet and bring food up for fish. Warmer seas are changing them.' }
];
var DEB_VM = { formato: "verdadeOuMentira", titulo: "True or Lie? If it’s a lie, say the true line.", itens: [
  {"f": "In 1992, a ship with bath toys was caught in a storm.", "t": true, "tm": "0:06"},
  {"f": "Only a few ducks fell into the sea.", "t": false, "tm": "0:14", "c": "No. The waves swept 28,000 rubber ducks and other toys into the North Pacific."},
  {"f": "There are two main kinds of ocean currents: surface and deep.", "t": true, "tm": "0:52"},
  {"f": "In the open ocean, the tides are the major force behind surface currents.", "t": false, "tm": "1:24", "c": "No. In the open ocean, wind is the major force."},
  {"f": "Cold, salty water floats on top of the ocean.", "t": false, "tm": "3:05", "c": "No. It is more dense, so it sinks."},
  {"f": "It could take a drop of water a thousand years to make the full trip.", "t": true, "tm": "3:44"}
] };
var DEB_GO = {
  "formato": "reacao",
  "titulo": "Last call · June has one more question",
  "quem": "June",
  "fala": "June: “Why is my old duck almost white? Tell me the chain.”",
  "reacoes": [
    [
      "The sun",
      "Due to years in the sun and the salt water, it turned white.",
      "“Of course. Years at sea will do that.”"
    ],
    [
      "The salt",
      "It spent years in the salt water. As a result, it lost its color.",
      "“Poor duck. It looks so tired.”"
    ],
    [
      "The trip",
      "It traveled for years, which led to a very pale duck.",
      "“A long trip, a pale duck. It makes sense.”"
    ]
  ]
};

var NOTA = {
  oracao: 'DUE TO / OWING TO / BECAUSE OF + a NOUN. A whole sentence: BECAUSE.', direcao: 'The cause comes after DUE TO: due to the storm.', owing: 'The linker is OWING TO.', semto: 'DUE TO, with TO.',
  virgula: 'AS A RESULT / CONSEQUENTLY start a NEW sentence: a period before, a comma after.', resultof: 'AS A RESULT OF + noun = the cause. AS A RESULT, + sentence = the effect.',
  becauseof: 'BECAUSE OF + a noun (the Earth’s spin). A sentence: BECAUSE.', because: 'A noun after it: BECAUSE OF.', ledto: 'LED TO + a noun or -ING, never a full sentence.', what: 'The next link: , WHICH led to.', artigo: 'AS A RESULT / AS A CONSEQUENCE, with A.', consequent: 'The linker is CONSEQUENTLY.'
};

var ESTACOES = [
  { k: 'THE STORM', data: 'JAN 1992', lugar: 'NORTH PACIFIC', x: 120, y: 150, log: 'A winter storm hit a cargo ship. Huge waves broke the containers open. Thousands of plastic bath toys went into the sea: ducks, frogs, turtles and beavers.', q: 'What was the very first cause of the whole story?', ops: [['Due to a winter storm, containers fell off the ship.', 'ok'], ['Due to there was a winter storm, containers fell off the ship.', 'oracao'], ['Due to the containers, there was a winter storm.', 'direcao']] },
  { k: 'THE WIND', data: 'SPRING 1992', lugar: 'OPEN SEA', x: 300, y: 110, log: 'The toys were light and floated high on the water. Strong winds pushed the surface water east, and the ducks went with it, faster than the ships around them.', q: 'Why did the ducks move faster than the water around them?', ops: [['Owing to the strong winds, the ducks moved fast.', 'ok'], ['Owing to the winds were strong, the ducks moved fast.', 'oracao'], ['Owning to the strong winds, the ducks moved fast.', 'owing']] },
  { k: 'ALASKA', data: 'NOV 1992', lugar: 'SITKA, ALASKA', x: 520, y: 60, log: 'Ten months after the storm, the first ducks landed on the beaches near Sitka. A beachcomber called the lab: “There are toy ducks everywhere!”', q: 'How long did the trip to Alaska take? What carried them?', ops: [['A current carried them north. As a result, they landed in Alaska.', 'ok'], ['A current carried them north, as a result they landed in Alaska.', 'virgula'], ['As a result of a current carried them north, they landed in Alaska.', 'resultof']] },
  { k: 'THE GYRE', data: '1993–1995', lugar: 'THE BIG CIRCLE', x: 560, y: 200, log: 'Many ducks never landed. The spin of the Earth bends the currents into a giant circle, the North Pacific gyre. The ducks went around it, again and again: about three years for one lap.', q: 'Why do the currents turn in a circle and not in a straight line?', ops: [['Because of the Earth’s spin, the currents turn in a circle.', 'ok'], ['Because of the Earth spins, the currents turn in a circle.', 'becauseof'], ['Because the Earth’s spin, the currents turn in a circle.', 'because']] },
  { k: 'THE ICE', data: '1995–2000', lugar: 'THE ARCTIC', x: 360, y: 30, log: 'Some ducks went north, through the Bering Strait, into the Arctic. The sea froze around them. For years, they moved only as fast as the ice.', q: 'What was different for the ducks in the Arctic?', ops: [['Some ducks went into the Arctic, which led to years in the ice.', 'ok'], ['Some ducks went into the Arctic, which led to they were trapped in the ice.', 'ledto'], ['Some ducks went into the Arctic, what led to years in the ice.', 'what']] },
  { k: 'THE COLOR', data: 'YEARS LATER', lugar: 'FAR-AWAY BEACHES', x: 690, y: 120, log: 'When beachcombers found the ducks years later, they were not yellow anymore. Years of sun and salt water had turned them almost white.', q: 'Why were the old ducks white?', ops: [['They spent years in the sun and salt water. Consequently, they turned white.', 'ok'], ['They spent years in the sun and salt water, consequently they turned white.', 'virgula'], ['They spent years in the sun and salt water. As consequence, they turned white.', 'artigo']] }
];

var FITAS = [['+ NOUN · THE CAUSE', 'due to the storm · owing to the wind · because of the ice'], ['+ SENTENCE · THE CAUSE', 'because the wind was strong'], ['NEW SENTENCE · THE EFFECT', '…. As a result, … · …. Consequently, …'], ['THE NEXT LINK', '…, which led to + noun / -ing']];
var CAMINHOS = [
  { k: 'A NOUN, NOT A SENTENCE', antes: 'Due to the wind was strong, the ducks moved fast.', depois: '<b>Due to the strong wind</b>, the ducks moved fast. / <b>Because</b> the wind was strong, …', nota: 'due to, owing to, because of: a noun. A whole sentence: because.' },
  { k: 'A NEW SENTENCE', antes: 'The water got colder, as a result it sank.', depois: 'The water got colder<b>. As a result,</b> it sank.', nota: 'As a result and consequently start a new sentence: a period before, a comma after.' },
  { k: 'LED TO WHAT?', antes: 'The storm hit, which led to the containers fell.', depois: 'The storm hit<b>, which led to</b> the containers falling.', nota: 'LEAD TO + a noun, or -ing. Never a full sentence after it.' },
  { k: 'OF, OR A COMMA?', antes: 'As a result the storm, the ship lost its cargo.', depois: '<b>As a result of</b> the storm, the ship lost its cargo.', nota: 'As a result OF + noun = the cause. As a result, + sentence = the effect.' }
];

var ELOS = [
  { k: 'THE SUN', fato: 'The sun heats the equator much more than the poles. The water near the equator is warm.', usa: 'Due to', ops: [['Due to the strong sun, the water near the equator is warm.', 'ok'], ['Due to the sun is strong, the water is warm.', 'oracao'], ['Due the strong sun, the water is warm.', 'semto']] },
  { k: 'THE WIND', fato: 'Winds push warm surface water across the ocean. Warm water travels toward the poles.', usa: 'which leads to', ops: [['Winds push warm water across the ocean, which leads to warm water traveling north.', 'ok'], ['Winds push warm water across the ocean, which leads to warm water travels north.', 'ledto'], ['Winds push warm water across the ocean, what leads to warm water traveling north.', 'what']] },
  { k: 'THE ICE', fato: 'Near the poles, sea water freezes. The salt stays in the water below the ice.', usa: 'As a result,', ops: [['Sea water freezes. As a result, the water below gets saltier.', 'ok'], ['Sea water freezes, as a result the water below gets saltier.', 'virgula'], ['Sea water freezes. As a result of, the water gets saltier.', 'resultof']] },
  { k: 'THE SINK', fato: 'Cold, salty water is very heavy for its size. It sinks to the bottom of the ocean.', usa: 'Owing to', ops: [['Owing to its high density, the cold water sinks.', 'ok'], ['Owing to it is very dense, the cold water sinks.', 'oracao'], ['Owning to its high density, the cold water sinks.', 'owing']] },
  { k: 'THE FLOOR', fato: 'The water sinks in the North Atlantic. Deep water starts to flow south, along the ocean floor.', usa: 'Consequently,', ops: [['The water sinks in the North Atlantic. Consequently, deep water flows south.', 'ok'], ['The water sinks in the North Atlantic, consequently deep water flows south.', 'virgula'], ['The water sinks in the North Atlantic. Consequent, deep water flows south.', 'consequent']] },
  { k: 'THE RISE', fato: 'Far away, deep water rises to the surface. It brings up food for sea life.', usa: 'Because of', ops: [['Because of upwelling, cold water full of food comes up.', 'ok'], ['Because of deep water rises, food comes up.', 'becauseof'], ['Because upwelling, cold water full of food comes up.', 'because']] },
  { k: 'THE FISH', fato: 'The nutrients reach the surface. Plankton grows, and big schools of fish follow.', usa: 'As a result of', ops: [['As a result of the nutrients, plankton grows and fish follow.', 'ok'], ['As a result the nutrients, plankton grows.', 'resultof'], ['As result of the nutrients, plankton grows.', 'artigo']] },
  { k: 'THE MELT', fato: 'In recent decades, the Arctic ice melted faster. More fresh water went into the North Atlantic.', usa: 'which led to', ops: [['The Arctic ice melted faster, which led to more fresh water in the sea.', 'ok'], ['The Arctic ice melted faster, which led to more fresh water entered the sea.', 'ledto'], ['The Arctic ice melted faster, that led to more fresh water in the sea.', 'what']] }
];

var RODA = [
  { k: 'ONE DECISION', q: 'Tell me about one decision that changed your life. What did it lead to?', fup: 'And then?', st: ['I …, which led to …'], ex: 'I changed jobs in 2020, which led to a new city and new friends.' },
  { k: 'LATE AGAIN', q: 'What usually makes you late? Say it with due to.', fup: 'Can you fix it?', st: ['I’m usually late due to …'], ex: 'I’m usually late due to the traffic on the bridge.' },
  { k: 'A BAD NIGHT', q: 'What happens the day after you sleep badly?', fup: 'What helps?', st: ['I sleep badly. As a result, …'], ex: 'I sleep badly. As a result, I drink four cups of coffee.' },
  { k: 'A NEW HABIT', q: 'What is a habit you started recently? What changed as a result?', fup: 'Will you keep it?', st: ['I started … Consequently, …'], ex: 'I started walking every morning. Consequently, I sleep much better.' },
  { k: 'YOUR CITY', q: 'What is one problem in your city? What causes it?', fup: 'Who could fix it?', st: ['… because of …'], ex: 'The streets flood every summer because of the heavy rain.' },
  { k: 'THE CLIMATE', q: 'What is one change in the weather where you live? What is it leading to?', fup: 'Are you worried?', st: ['…, which is leading to …'], ex: 'Summers are hotter, which is leading to more fires.' }
];

var JUNE = [
  { ela: 'I found a plastic duck on the beach this morning! But it’s almost white. Is it one of yours?', voce: ['It spent years in the sun. As a result, …', 'Due to the sun and salt, …'], resp: 'Years at sea! No wonder it looks so tired.' },
  { ela: 'But how did it get to Alaska? The ship was in the middle of the ocean!', voce: ['Owing to the …, …', '…, which led to …'], resp: 'So the wind and the currents did all the work. Clever duck.' },
  { ela: 'My neighbor says some ducks went around and around for years. Why?', voce: ['Because of the Earth’s spin, …', '…. Consequently, …'], resp: 'A giant merry-go-round in the sea. I love it.' },
  { ela: 'Last question. Why should anybody care about ocean currents?', voce: ['Currents carry heat …. As a result, …'], resp: 'Okay, I’m convinced. I’m keeping the duck, though.' }
];

var QUIZ = [
  { a: 'The ship lost its containers ', b: ' the storm.', op: ['due to', 'because', 'as a result'], w: 'The cause is a noun: <b>due to</b>.' },
  { a: '', b: ' the wind was strong, the ducks moved fast.', op: ['Because', 'Because of', 'Due to'], w: 'A whole sentence: <b>because</b>.' },
  { a: 'The water froze. ', b: ', the water below got saltier.', op: ['As a result', 'As a result of', 'Due to'], w: 'A new sentence, the effect: <b>As a result,</b>' },
  { a: 'The ice melted, which led to ', b: '.', op: ['more fresh water in the sea', 'more fresh water entered the sea', 'enter more fresh water'], w: '<b>led to</b> + a noun or -ing.' },
  { a: '', b: ' to the heavy rain, the beach was closed.', op: ['Owing', 'Owning', 'Owe'], w: 'The linker is <b>owing to</b>.' }
];

var S = { i: 0, faixa: 1, fala: {}, resp: {}, armas: {},
  voce: { sel: -1, foi: {} }, video: { p: 0, cap: 0, viu: {} }, dv: { sel: 0, esc: {} }, rg: { abre: {} }, et: { n: 0, esc: '' }, roda: { sel: -1, foi: {} }, ju: { n: 0, resp: 0 }, qz: { n: 0, esc: -1 } };

/* o mapa da deriva: o giro, seis estações, o patinho que desbota */
function deriva(esc, sel, mini) {
  var feitas = ESTACOES.filter(function (_, i) { return esc[i] === 'ok'; }).length, ult = -1;
  ESTACOES.forEach(function (_, i) { if (esc[i] === 'ok') ult = i; });
  var pato = ult >= 0 ? ESTACOES[ult] : { x: 70, y: 170 }, cor = ['#ffd84a', '#ffd84a', '#f6dd75', '#efe19a', '#ece6be', '#f2f0e6'][Math.max(0, ult)];
  return '<div class="dk-mapa' + (mini ? ' mini' : '') + '"><svg viewBox="0 0 800 260" aria-hidden="true">'
    + '<path class="dk-costa" d="M760 0 C720 40 700 60 720 100 C740 140 700 170 720 210 L800 260 L800 0Z"/><path class="dk-costa" d="M0 0 L80 0 C60 40 40 70 30 110 L0 140Z"/>'
    + '<ellipse class="dk-giro" cx="420" cy="150" rx="300" ry="80"/><ellipse class="dk-giro b" cx="420" cy="150" rx="230" ry="55"/>'
    + '<text x="420" y="155" text-anchor="middle" class="dk-rot-g">THE NORTH PACIFIC GYRE</text>'
    + ESTACOES.map(function (s, i) { var ok = esc[i] === 'ok'; return '<g class="dk-est' + (ok ? ' ok' : '') + (sel === i ? ' on' : '') + '" data-a="dv" data-n="' + i + '"><circle cx="' + s.x + '" cy="' + s.y + '" r="16"/><text x="' + s.x + '" y="' + (s.y + 5) + '" text-anchor="middle">' + (i + 1) + '</text></g>'; }).join('')
    + '<g class="dk-pato" style="transform:translate(' + pato.x + 'px,' + (pato.y - 30) + 'px)"><ellipse cx="0" cy="8" rx="13" ry="8" fill="' + cor + '"/><circle cx="7" cy="-2" r="6" fill="' + cor + '"/><path d="M12 -2 L19 0 L12 2Z" fill="#f08a3a"/></g>'
    + '</svg><small class="dk-leg">' + feitas + ' OF 6 LINKS · THE DUCK FADES AS THE YEARS GO BY</small></div>';
}
/* a esteira profunda: um laço de oito trechos */
function esteira(acesos) {
  var trechos = ['M60 50 H260', 'M260 50 H460', 'M460 50 H660', 'M660 50 C720 50 740 90 740 130', 'M740 130 C740 170 720 200 660 200', 'M660 200 H400', 'M400 200 H140', 'M140 200 C80 200 60 160 60 120 C60 80 60 50 60 50'];
  return '<div class="dk-esteira"><svg viewBox="0 0 800 250" aria-hidden="true"><text x="790" y="18" text-anchor="end" class="dk-cam q">SURFACE · WARM</text><text x="790" y="246" text-anchor="end" class="dk-cam f">DEEP · COLD AND SALTY</text>'
    + trechos.map(function (d, i) { return '<path class="dk-trecho' + (i < acesos ? ' on' : '') + (i < 4 ? ' q' : ' f') + '" d="' + d + '"/>'; }).join('')
    + ELOS.map(function (e, i) { var px = [160, 360, 560, 700, 690, 530, 270, 110][i], py = [50, 50, 50, 118, 170, 200, 200, 128][i]; return '<text x="' + px + '" y="' + (py + (py < 120 ? -12 : 26)) + '" text-anchor="middle" class="dk-elo' + (i < acesos ? ' on' : '') + '">' + e.k + '</text>'; }).join('')
    + '</svg><small class="dk-leg">ABOUT A THOUSAND YEARS FOR ONE LOOP</small></div>';
}
function frases(acao, ops, esc, semente) {
  return '<div class="dk-ops">' + ordem(ops, semente).map(function (o) { return '<button type="button" class="versao' + (esc === o[1] ? (o[1] === 'ok' ? ' certo' : ' errado') : '') + '" data-a="' + acao + '" data-v="' + o[1] + '">' + o[0] + '</button>'; }).join('') + '</div>';
}

var R = {};
R.capa = function () {
  return '<div class="capa"><div><span class="kick">MAIN SERIES · B2 · THE GREAT DUCK DRIFT</span><h1>Due to, <b>As a Result</b></h1>'
    + '<p class="sub"><b>Due to</b> a storm, thousands of toy ducks fell into the sea. <b>As a result</b>, they traveled the world.</p>'
    + '<div class="chipsx"><span class="pilula">due to + noun</span><span class="pilula">because + sentence</span><span class="pilula">. As a result,</span><span class="pilula">, which led to</span><span class="pilula">Live Class · W·O·L·F</span></div>'
    + '<button type="button" class="btn cheio" data-a="ir" data-n="1">Start the night shift</button>' + faixaLive() + '</div>'
    + '<div class="capa-r">' + deriva({ 0: 'ok', 1: 'ok', 2: 'ok' }, -1) + '</div></div>';
};

R.voce = function (c) { return cartasPessoais(c, VOCE, S.voce, 'voce') + '<p class="so-prof dica-aluno" style="text-align:center">The last card is a chain: listen for “so” and “because” only. Don’t correct yet.</p>'; };

/* 23/10/2026 · AFTER numa tela só (pedido do dono: o Show answer cansa; ele quer uma tela dinâmica): vídeo na tela + True or Lie com ▶ + o mapa da deriva da aula, em que o patinho avança uma estação por acerto + uma pergunta final de um toque */
function depVideo() { return iframe(YT, 'Ocean currents', '&start=0&end=274'); }
var debAcesa = {};
function debEstado() {
  var e = (S.fq && S.fq.deb_vm && S.fq.deb_vm.r) || {}, ok = 0, feitas = 0, st = [];
  DEB_VM.itens.forEach(function (x, i) {
    var r = e[i]; if (r == null) { st.push(0); return; }
    feitas++; if ((r === 't') === !!x.t) { ok++; st.push(1); } else st.push(-1);
  });
  return { ok: ok, feitas: feitas, st: st };
}
function debTopo(d, rot, titulo) {
  var n = DEB_VM.itens.length;
  return '<div class="deb-topo"><div><small>' + rot + ' · ' + d.feitas + ' OF ' + n + ' ANSWERED</small><h3>' + titulo + ' <b>' + d.ok + '</b> / ' + n + '</h3></div></div>';
}
function debNave() {
  var d = debEstado(), n = DEB_VM.itens.length;
  var esc = {}; d.st.forEach(function (s, i) { if (s === 1) esc[i] = 'ok'; });
  return debTopo(d, 'THE DRIFT MAP', 'Links found') + deriva(esc, -1, 1);
}
function debDir() {
  var d = debEstado();
  return FM.ex('deb_vm', DEB_VM) + (d.feitas === DEB_VM.itens.length ? FM.ex('deb_go', DEB_GO) : '<p class="fm-nota deb-dica">Answer all six lines. Then ' + DEB_GO.quem + ' has one last question.</p>');
}
function debPinta() {
  var a = document.getElementById('deb-nave'), b = document.getElementById('deb-dir');
  if (a) a.innerHTML = debNave(); if (b) b.innerHTML = debDir();
}
R.video = function (c) {
  var e = S.video, corpo;
  if (e.p === 0) corpo = '<div class="mesa-c"><div class="lado-l">' + ANTES.map(function (a, i) { return '<div class="pergunta vd ja"><small>BEFORE YOU WATCH · ' + (i + 1) + '</small><h2>' + a.q + '</h2></div>' + mostra('va' + i, a.h, 1); }).join('') + '</div>'
    + '<div class="lado-l"><div class="selo-v vd"><b>SEALED</b><small>Four short chapters. It opens after your answers.</small></div><div><button type="button" class="btn cheio" data-a="vd-p" data-n="1">Watch, chapter by chapter</button></div></div></div>';
  else if (e.p === 1) {
    var k = CAPS[e.cap];
    corpo = '<div class="mesa-video"><div class="video-col">' + iframe(YT, 'Ocean currents', '&start=' + k.ini + '&end=' + k.fim) + '<small class="cred">Chapter ' + (e.cap + 1) + ' of 4 · it stops by itself</small></div><div class="lado-video"><div class="caps">'
      + CAPS.map(function (x, i) { return '<button type="button" class="chip' + (e.cap === i ? ' on' : '') + (e.viu[i] ? ' feito' : '') + '" data-a="vd-c" data-n="' + i + '">' + x.k + '</button>'; }).join('') + '</div>'
      + '<div class="pergunta vd ja"><small>' + k.k + '</small><h2>' + k.q + '</h2></div>' + mostra('vd' + e.cap, k.h, 1)
      + '<div>' + (e.cap < CAPS.length - 1 ? '<button type="button" class="btn" data-a="vd-c" data-n="' + (e.cap + 1) + '">Next chapter</button>' : '<button type="button" class="btn" data-a="vd-p" data-n="2">After the video</button>') + '</div></div></div>';
  } else corpo = '<div class="deb"><div class="deb-esq">' + depVideo() + '<small class="deb-cred">Tap a time to hear that moment again.</small><div id="deb-nave">' + debNave() + '</div></div><div class="deb-dir" id="deb-dir">' + debDir() + '</div></div>';
  return cab(c) + '<div class="tres-tempos">' + tempos3(e.p) + '</div>' + corpo;
};

R.deriva = function (c) {
  var e = S.dv, x = ESTACOES[e.sel], esc = e.esc[e.sel], ok = esc === 'ok', feitas = ESTACOES.filter(function (_, i) { return e.esc[i] === 'ok'; }).length;
  return cab(c) + '<div class="mesa-c"><div class="lado-l">' + deriva(e.esc, e.sel, 1) + '<div class="dk-log vd"><small>LAB LOG · ' + x.data + ' · ' + x.lugar + '</small><p>' + x.log + '</p></div></div>'
    + '<div class="lado-l"><div class="pergunta vd ja"><small>STATION ' + (e.sel + 1) + ' · ' + x.k + '</small><h2>' + x.q + '</h2></div><h5 class="so-prof rot-ouve">ONE SENTENCE, CAUSE AND EFFECT · TAP WHAT YOU HEARD</h5>' + frases('dv-v', x.ops, esc, e.sel + 1)
    + (ok ? '<p class="aprova">' + (feitas >= 6 ? 'Six stations, one long chain. How does English hold a chain like that together? The rule is next.' : 'The duck moves on. Now the same link a second way: start with the effect.') + '</p>' : esc ? '<p class="recusa">' + NOTA[esc] + '</p>' : '<p class="so-prof dica-aluno">Before the rule, “because” and “so” are fine: accept them and move on.</p>') + '</div></div>';
};

R.regra = function (c) {
  var e = S.rg;
  return cab(c) + '<div class="dk-fitas">' + FITAS.map(function (f) { return '<div class="dk-fita vd"><small>' + f[0] + '</small><p>' + f[1] + '</p></div>'; }).join('') + '</div>'
    + '<div class="dk-caminhos">' + CAMINHOS.map(function (x, i) { var ab = e.abre[i]; return '<div class="dk-caminho vd' + (ab ? ' aberto' : '') + '"><small>' + x.k + '</small><p class="antes"><s>' + x.antes + '</s></p>' + (ab ? '<p class="depois">' + x.depois + '</p><p class="nota">' + x.nota + '</p>' : '<button type="button" class="btn" data-a="rg" data-n="' + i + '">Show me</button>') + '</div>'; }).join('') + '</div>';
};

R.esteira = function (c) {
  var e = S.et, n = Math.min(e.n, ELOS.length - 1), fim = e.n >= ELOS.length, x = ELOS[n], ok = e.esc === 'ok';
  if (fim) return cab(c) + esteira(8) + '<div class="foco"><div class="pergunta vd"><small>EIGHT LINKS, ONE LOOP</small><h2>A drop of water takes about a thousand years to go all the way around, and every stretch is a cause and an effect.</h2></div></div>';
  return cab(c) + '<div class="mesa-c"><div class="lado-l">' + esteira(e.n + (ok ? 1 : 0)) + '<div class="dk-log vd"><small>LINK ' + (n + 1) + ' OF 8 · ' + x.k + ' · YOUR TEACHER READS IT</small><p>' + x.fato + '</p></div><div class="dk-usa vd"><small>THE LINKER ON THE CARD</small><b>' + x.usa + '</b></div></div>'
    + '<div class="lado-l"><h5 class="so-prof rot-ouve">TAP WHAT YOU HEARD</h5>' + frases('et', x.ops, e.esc, n + 2)
    + (ok ? '<div><button type="button" class="btn" data-a="et-prox">Next link</button></div>' : e.esc ? '<p class="recusa">' + NOTA[e.esc] + '</p>' : '') + '</div></div>';
};

R.roda = function (c) { return cartasPessoais(c, RODA, S.roda, 'roda', ['…, which led to …', 'As a result, …', 'Due to …']); };

R.june = function (c) {
  var e = S.ju, n = Math.min(e.n, JUNE.length - 1), fim = e.n >= JUNE.length, x = JUNE[n];
  if (fim) return cab(c) + '<div class="foco"><div class="pergunta vd"><small>JUNE HANGS UP</small><h2>The duck is going on her shelf. Now tell June’s story back: one cause, one effect, one next link.</h2></div></div>';
  return cab(c) + trilha(JUNE, e.n) + '<div class="mesa-c"><div class="lado-l"><div class="dk-tel vd"><small>JUNE · A BEACHCOMBER IN SITKA</small><p>“' + x.ela + '”</p></div>' + (e.resp ? '<div class="balao vd ok-b"><small>JUNE</small><p>“' + x.resp + '”</p></div>' : '') + '</div>'
    + '<div class="lado-l">' + fala('ju' + n, x.voce, []) + (e.resp ? '<div><button type="button" class="btn" data-a="ju-prox">Next</button></div>' : '<div><button type="button" class="btn so-prof" data-a="ju-r">Answered · June replies</button></div><p class="dica-aluno">Use a different linker in each answer.</p>') + '</div></div>';
};

R.quiz = function (c) {
  var e = S.qz, n = e.n, fim = n >= QUIZ.length;
  if (fim) return cab(c) + trilha(QUIZ, n) + '<div class="foco"><div class="pergunta vd"><small>FIVE OF FIVE</small><h2>The sun is coming up over Sitka. Now rewrite item 2 with “because of”.</h2></div></div>';
  var x = QUIZ[n], ok = e.esc === 0;
  return cab(c) + trilha(QUIZ, n) + '<div class="foco"><div class="balao vd"><p>' + x.a + '<u>' + (ok ? x.op[0] : '_____') + '</u>' + x.b + '</p></div><div class="dk-ops linha">'
    + ordem(x.op.map(function (o, i) { return [o, i]; }), n + 1).map(function (o) { return '<button type="button" class="versao' + (e.esc === o[1] ? (o[1] === 0 ? ' certo' : ' errado') : '') + '" data-a="qz" data-n="' + o[1] + '">' + o[0] + '</button>'; }).join('') + '</div>'
    + (ok ? '<p class="aprova" style="text-align:center">' + x.w + '</p><div style="text-align:center"><button type="button" class="btn" data-a="qz-prox">Next</button></div>' : e.esc > 0 ? '<p class="recusa" style="text-align:center">Is the next thing a noun or a sentence?</p>' : '') + '</div>';
};

R.fim = function (c) {
  return cab(c) + '<div class="fim">' + escritaFinal('fim', (S.txt || {}).fim || '', (S.salvo || {}).fim, 'Due to …, I …\nAs a result, …\n…, which led to …\nConsequently, …', 'Your chain reaction',
    ['Due to', 'Owing to', 'Because of', 'As a result,', 'Consequently,', ', which led to'], ['WHAT SMALL THING LED TO SOMETHING BIG?', 'Your chain, four links long. A noun after due to, a new sentence after the effect.'])
    + '<div class="lado-fim">' + deriva({ 0: 'ok', 1: 'ok', 2: 'ok', 3: 'ok', 4: 'ok', 5: 'ok' }, -1, 1)
    + '<div class="grande vd"><span><u>due to / owing to / because of</u> + noun</span><span><u>because</u> + sentence</span><span>new sentence: <u>As a result,</u> · <u>Consequently,</u></span><span>not <s>due to the wind was strong</s>, not <s>, as a result they</s></span></div>'
    + mostra('fim', 'Due to a friend’s message, I went to a concert alone.<br>As a result, I met my best friend there.<br>We started a band, which led to our first show.<br>Consequently, I never miss a message now.', 1)
    + '<p class="hw"><a class="pilula" href="HW/" target="_blank" rel="noopener">Homework for the student →</a></p></div></div>';
};

/* 23/10/2026 · no AFTER, True/Lie e a pergunta final não repintam a página (o vídeo segue tocando): só o contador e as linhas */
window.addEventListener('load', function () {
  ['fq2-tf', 'fq2-rea'].forEach(function (k) {
    var f = TOQUES[k]; if (!f) return;
    TOQUES[k] = function (b, n, v, c) { var r = f(b, n, v, c); if (document.getElementById('deb-dir')) { debPinta(); return false; } return r; };
  });
});
TOQUES['vd-p'] = function (b, n) { S.video.p = n; };
TOQUES['vd-c'] = function (b, n) { S.video.viu[S.video.cap] = 1; S.video.cap = n; };
TOQUES.dv = function (b, n) { S.dv.sel = n; };
TOQUES['dv-v'] = function (b, n, v) { S.dv.esc[S.dv.sel] = v; };
TOQUES.rg = function (b, n) { S.rg.abre[n] = 1; };
TOQUES.et = function (b, n, v) { S.et.esc = v; };
TOQUES['et-prox'] = function () { S.et = { n: S.et.n + 1, esc: '' }; };
TOQUES['ju-r'] = function () { S.ju.resp = 1; };
TOQUES['ju-prox'] = function () { S.ju = { n: S.ju.n + 1, resp: 0 }; };
TOQUES.qz = function (b, n) { S.qz.esc = n; };
TOQUES['qz-prox'] = function () { S.qz = { n: S.qz.n + 1, esc: -1 }; };
