/* ============================================================
   THEY MIGHT HAVE LEFT BY BOAT · THE SEARCH CHART · LIVE CLASS 06/10/2026
   Main series B2 · especular sobre o passado: must have (quase certeza)
   · may / might / could have (possível) · can't / couldn't have
   (impossível) + particípio. Erros: must to have · might have went /
   saw / took · mustn't have (para impossível) · had to leave (obrigação)
   no lugar de must have left · may left · might has.
   O MUNDO (da aula velha): a colônia perdida de Roanoke (vídeo mantido,
   6RVrVV-rgdo, selado em quatro capítulos: 0–31 · 31–77 · 77–125 ·
   125–202; nenhum nome de canal na tela) e Kestrel Rock, ilha inventada
   no Maine: Nora Vance, pesquisadora de aves, some numa noite de neblina;
   no fim, todos vivos em Gannet Island. Sem áudio.
   A CARA (nova; a velha era o mapa com marcadores + o quadro de cortiça):
   a CARTA NÁUTICA DE BUSCA — a foto da ilha com sete boias numeradas
   (pistas) que acendem quando o aluno arrisca a teoria; e as TRÊS
   BANDEIRAS DE SINAL (CERTAIN verde · POSSIBLE âmbar · IMPOSSIBLE
   vermelha), onde cada evidência é hasteada.
   Fila: FILA-LIVE-386.md · 135. Pasta piloto-boat (conferida: não existia).
   23/10/2026 · OS FORMATOS NOVOS (kit/formatos.js + formatos2.js), mesmas
   páginas, nada de escolher entre "might have went / might have gone / might
   to have". III = antes uma reação (governador, FM.reacao); em cada capítulo
   verdadeiro ou mentira com ▶ nos tempos reais das falas; depois dois
   toques + régua. V = 6 boias (era 7): ler a pista, FALAR a teoria e
   MONTAR a frase (FM.pergunta, a boia acende no Check). VI = seis linhas
   quebradas: achar a parte quebrada e falar a certa (FM.erro). VII = 6
   evidências (era 8): qual bandeira? (FM.escolhe, a bandeira sobe).
   IX = certo ou errado (FM.verdadeOuMentira). I, II, IV, VIII, X, XI ficam.
   ============================================================ */
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'voce', est: 'o', min: 7, img: 'cabana', rot: 'I · You and the Unknown', t: 'Before the island: you, lost things, and quiet places.', p: 'Tap a card. Answer out loud. Then your teacher answers too.' },
  { k: 'palavras', est: 'l', img: 'bussola', rot: 'II · The Words', t: 'Five words from the video.', p: 'Learn the words before you watch. Then listen for them: they turn yellow in the video.' },
  { k: 'video', est: 'l', min: 10, img: 'bussola', rot: 'III · The Lost Colony', t: 'What happened to the lost colony of Roanoke?', p: 'Pick a reaction first. The video plays in four short chapters: tap True or Lie, and ▶ plays any moment again.' },
  { k: 'falas', est: 'l', extra: 1, img: 'bussola', rot: 'IV · Line by Line', t: 'Every line of the video, one by one.', p: 'Tap a line. Hear it again. The lines with yellow words open the explanation.' },
  { k: 'carta', est: 'o', min: 7, img: 'farol', rot: 'V · Kestrel Rock', t: 'October 14, 9:10 AM. The supply boat arrives at Kestrel Rock. Nora Vance is gone.', p: 'Tap a marker on the chart. Read the clue. Say your theory out loud. Then build it and tap Check.' },
  { k: 'regra', est: 'f', min: 6, img: 'farol', rot: 'VI · The Rule', t: 'How sure are you? Modal + have + past participle.', p: 'Read the three flags. Then find the broken part of six lines and say the fix.' },
  { k: 'bandeiras', est: 'f', min: 6, img: 'tempestade', rot: 'VII · The Signal Flags', t: 'Six pieces of evidence. How sure are you? Raise the right flag.', p: 'Your teacher reads the evidence. Tap the flag: CERTAIN, POSSIBLE or IMPOSSIBLE. Then say the theory out loud.' },
  { k: 'guarda', est: 'o', min: 7, extra: 1, img: 'barco', rot: 'VIII · The Coast Guard Calls', t: '11 AM. The Coast Guard calls. Share your theories.', p: 'Your teacher is the officer. Answer with must have, might have and can’t have.' },
  { k: 'quiz', est: 'f', min: 6, extra: 1, img: 'farol', rot: 'IX · Quick Check', t: 'Six quick lines from the case file.', p: 'Tap Right or Wrong. If it is wrong, say the fix.' },
  { k: 'mist', est: 'o', min: 7, extra: 1, img: 'fogueira', rot: 'X · Your Mysteries', t: 'Small mysteries from your own life.', p: 'Light a flare. Answer with a guess about the past. Your teacher adds another theory.' },
  { k: 'fim', est: 'w', min: 6, img: 'amanhecer', rot: 'XI · The Last Page of the Log', t: 'What really happened to the people of Roanoke?', p: 'Three sentences: must have, might have, can’t have. They go to your My notes.' }
];

var YT = '6RVrVV-rgdo';

var VOCE = [
  { k: 'ISLANDS', q: 'Have you ever been to an island? Where was it, and what was it like at night?', fup: 'Would you go back?', st: ['Yes, once, …', 'Never, but …'], ex: 'Yes, once, on vacation. It was very quiet at night, and very dark.' },
  { k: 'ALONE', q: 'Could you live alone on a small island for three months? What would you miss most?', fup: 'What would you take?', st: ['Maybe for …'], ex: 'Maybe for one month. I would miss my friends and good coffee.' },
  { k: 'NO SIGNAL', q: 'When was the last time you had no phone signal? How did it feel?', fup: 'What did you do instead?', st: ['Last …'], ex: 'Last year, in the mountains. It was strange at first, then nice.' },
  { k: 'LOST', q: 'Think of something you lost and never found. What was it, and when?', fup: 'So where do you think it is now?', st: ['I lost …'], ex: 'A silver ring from my grandmother, about five years ago.' },
  { k: 'MYSTERIES', q: 'Do you like mystery stories, detective shows or true stories about disappearances?', fup: 'Do you guess the ending?', st: ['I love …', 'Not really, …'], ex: 'I love detective shows. I always try to guess the ending.' }
];

/* 23/10/2026 · OS FORMATOS NOVOS (kit/formatos.js) */
var PRESA = '<b>must have</b> + left · seen · gone: almost sure<br><b>may · might · could have</b> + participle: possible<br><b>can’t · couldn’t have</b> + participle: impossible<br>No TO · no has · not <s>mustn’t</s>';
/* III · antes do play: o governador volta e a ilha está vazia (a reação usa a gramática antes da regra) */
var REACAO_B = { formato: 'reacao', titulo: 'It is 1590. You are Governor White.', quem: 'The island', fala: 'You come back to Roanoke after three years. The houses are empty. There is nobody on the beach. What do you do first?', reacoes: [
  ['Look for graves', 'They can’t have died in a battle. I don’t see any graves.', 'You dig all afternoon. Nothing.'],
  ['Check the boats', 'They might have left by boat. The small boats are gone.', 'It is true: the small boats are gone. The big boat is still there.'],
  ['Look at the trees', 'They must have left a message. Let me look at the trees.', 'On one tree, you see carved letters.']
] };
var CAPS = [
  { k: 'THE QUESTION', ini: 0, fim: 31, q: 'Where was the colony? What theories does the narrator ask about?', h: 'Off North Carolina. They might have joined a friendly tribe, they could have died of disease, or they might have been attacked.' },
  { k: 'THE FIRST TRY', ini: 31, fim: 77, q: 'What went wrong in 1585? How did most of those men leave?', h: 'They looked for metals instead of farming. Most of them left on another ship.' },
  { k: 'THE FAMILIES', ini: 77, fim: 125, q: 'Why did the governor go back to England? What did the settlers promise him?', h: 'He went for supplies. They promised to carve their new location on a tree or a door.' },
  { k: 'ONE WORD', ini: 125, fim: 202, q: 'What did he find in 1590? What do many historians believe today?', h: 'An empty colony and the word CROATOAN on a tree. They believe the settlers joined the people there.' }
];
/* III · um toque de cada vez em cada capítulo: verdadeiro ou mentira, ▶ nos tempos reais das falas (legenda-dados.js) */
var CAP_TF = [
  { formato: 'verdadeOuMentira', titulo: 'The question · true or lie?', itens: [
    { f: 'The colony was on an island off North Carolina.', t: true, tm: '0:06' },
    { f: 'The narrator asks if the settlers joined a friendly tribe.', t: true, tm: '0:16' },
    { f: 'He says the mystery is only a few years old.', t: false, tm: '0:26', c: 'It has captivated historians for centuries.' }
  ] },
  { formato: 'verdadeOuMentira', titulo: 'The first try · true or lie?', itens: [
    { f: 'Many of the men wanted to farm.', t: false, tm: '1:03', c: 'They wanted precious metals more than farming.' },
    { f: 'Most of those settlers left on a passing ship.', t: true, tm: '1:11' },
    { f: 'The ship was captained by Sir Francis Drake.', t: true, tm: '1:13' }
  ] },
  { formato: 'verdadeOuMentira', titulo: 'The families · true or lie?', itens: [
    { f: 'Entire families made the ten-week voyage.', t: true, tm: '1:21' },
    { f: 'They arrived early, in time to plant crops.', t: false, tm: '1:27', c: 'They arrived too late in the season.' },
    { f: 'White went back to England for supplies.', t: true, tm: '1:40' },
    { f: 'The settlers said they would write their new location on a tree or a door.', t: true, tm: '1:50' }
  ] },
  { formato: 'verdadeOuMentira', titulo: 'One word · true or lie?', itens: [
    { f: 'White found an empty colony.', t: true, tm: '2:05' },
    { f: 'The only clue was the word Croatoan on a tree.', t: true, tm: '2:08' },
    { f: 'Later searches found many graves.', t: false, tm: '2:36', c: 'They found no graves.' },
    { f: 'Many historians think the settlers joined Manteo’s tribe.', t: true, tm: '2:44' }
  ] }
];
var DEPOIS_ESC = { formato: 'escolhe', titulo: 'After the video · tap, then say why', itens: [
  { p: 'The narrator says the word “may have been” a reference to Croatoan Island. How sure is he?', o: ['almost 100% sure', 'about 50% sure', 'sure it is impossible'], c: 1, d: 'About 50%. It’s a possibility, not a fact.' },
  { p: 'There were no graves at the colony. So where do you think they went?', o: ['they moved to another island', 'they sailed back to England', 'they went into the forest'], c: -1, d: 'Say it: They can’t have died there. They might have …' }
] };
var DEPOIS_REG = { formato: 'regua', titulo: 'Your theory', frase: 'The settlers left Roanoke on purpose.', esquerda: 'Disagree', direita: 'Agree', depois: 'Say why. Start with: They must have … / They might have … / They can’t have …' };

/* x, y: posição da boia na foto (%) */
var PISTAS = [
  { k: 'THE DOCK', x: 72, y: 70, pista: 'The rowboat is gone. The rope is still tied to the dock, but the other end is loose in the water.', q: 'What do you think happened here?', molde: '(she · might · leave · in the rowboat)', certa: 'She <b>might have left</b> in the rowboat.' },
  { k: 'THE CABIN', x: 46, y: 54, pista: 'The kerosene lamp is still on. There is warm tea in a mug on the table.', q: 'Did she plan to leave? What does the lamp tell you?', molde: '(she · must · leave · in a hurry)', certa: 'She <b>must have left</b> in a hurry.' },
  { k: 'THE TABLE', x: 60, y: 46, pista: 'There are two mugs on the table, not one. The second one has coffee in it.', q: 'Nora lives alone. So what about the second mug?', molde: '(someone · must · visit · her that night)', certa: 'Someone <b>must have visited</b> her that night.' },
  { k: 'THE HOOK', x: 30, y: 64, pista: 'Her heavy wool coat is still on the hook. It was 38 degrees that night.', q: 'Where could she go without a coat?', molde: '(she · can’t · go · far without her coat)', certa: 'She <b>can’t have gone</b> far without her coat.' },
  { k: 'THE LOG', x: 28, y: 42, pista: 'Her last log entry, 1:50 AM: “Fog again. Lights on the water, very low. Someone signaling?”', q: 'What did she see? What did she do next?', molde: '(she · might · see · a boat in trouble)', certa: 'She <b>might have seen</b> a boat in trouble.' },
  { k: 'THE LIGHTHOUSE', x: 18, y: 22, pista: 'The lighthouse lamp is on the emergency setting: one long flash every ten seconds.', q: 'Why would she change the light?', molde: '(she · may · try · to guide a boat to the island)', certa: 'She <b>may have tried</b> to guide a boat to the island.' }
];

var FLAGS = { c: ['CERTAIN', 'must have'], p: ['POSSIBLE', 'may · might · could have'], i: ['IMPOSSIBLE', 'can’t · couldn’t have'] };
/* VI · seis linhas quebradas (FM.erro): achar a parte quebrada e falar a certa */
var ERRO_B = [
  { f: 'She <u>must to have</u> left early.', r: 'must have' },
  { f: 'They might have <u>went</u> by boat.', r: 'gone' },
  { f: 'She <u>mustn’t have</u> swum nine miles.', r: 'can’t have' },
  { f: 'The lamp is on. She <u>had to leave</u> in a hurry.', r: 'must have left' },
  { f: 'The Petrel <u>might had</u> engine trouble.', r: 'might have had' },
  { f: 'Someone <u>could have came</u> to the cabin.', r: 'could have come' }
];

var CARTAS = [
  { col: 'c', fato: 'A fisherman on the mainland saw a green flare over the sea at 2:10 AM.', ops: ['Someone must have been in trouble at sea.'] },
  { col: 'i', fato: 'Nora is afraid of deep water. She never swims, not even in summer.', ops: ['She can’t have swum to the mainland.'] },
  { col: 'p', fato: 'The fishing boat Petrel did not come back to port that night.', ops: ['The Petrel might have had engine trouble.'] },
  { col: 'i', fato: 'The mainland is nine miles away. That night it was dark, cold and full of fog.', ops: ['She couldn’t have rowed nine miles in that fog.'] },
  { col: 'c', fato: 'Wet footprints of two people go from the cabin down to the dock.', ops: ['Two people must have walked to the dock together.'] },
  { col: 'p', fato: 'Gannet Island is four miles south. The storm wind blew south all night.', ops: ['The wind may have pushed them to Gannet Island.'] }
];

var TROCAS = [
  { ela: 'This is Officer Diaz. You were first on the island. What do you think happened to Ms. Vance?', st: ['She must have …', 'She might have …'], resp: 'That matches what we have. There are fresh marks on the dock: a boat left from there.' },
  { ela: 'Her rowboat is small. Could she have rowed to the mainland in that fog?', st: ['No, she can’t have …', 'She couldn’t have …'], resp: 'Agreed. Nine miles, at night, in October? Impossible.' },
  { ela: 'A fishing boat, the Petrel, sent a message about engine trouble near Kestrel Rock at 1:40 AM.', st: ['So the lights on the water must have been …'], resp: 'That’s exactly what I think.' },
  { ela: 'Good news! Nora and two fishermen were found this morning on Gannet Island, cold but safe. How do you think they got there?', st: ['The storm may have …', 'They might have …'], resp: 'Right. She rowed out to help, the storm pushed both boats south, and they spent the night in an old shed. Everybody is fine.' }
];

var TF_Q = { formato: 'verdadeOuMentira', rotulos: ['Right', 'Wrong'], titulo: 'Right or wrong? If it is wrong, say the fix.', itens: [
  { f: 'The rowboat is gone. She must to have left by boat.', t: false, c: 'She must have left by boat.' },
  { f: 'He might have left the key in the car.', t: true },
  { f: 'She never swims. She mustn’t have swum nine miles.', t: false, c: 'She can’t have swum nine miles.' },
  { f: 'I’m not sure where Sam is. He might have gone home.', t: true },
  { f: 'The fog was very thick. They couldn’t have seen the lighthouse.', t: true },
  { f: 'The lamp is still on. She had to leave in a hurry.', t: false, c: 'She must have left in a hurry. (A conclusion, not an order.)' }
] };

var MIST = ordem([
  { k: 'THE LOST THING', q: 'The thing you lost and never found: where might it have gone?', h: 'I might have left it in a hotel. Or someone could have taken it.' },
  { k: 'AN OLD FRIEND', q: 'Think of a school friend you lost contact with. What might they have done with their life?', h: 'She might have become a doctor. She loved biology.' },
  { k: 'YOUR FIRST PHONE', q: 'Where could your first cell phone be now?', h: 'My mom must have given it away. She gives everything away.' },
  { k: 'A NOISE', q: 'Have you ever heard a strange noise at night? What could it have been?', h: 'It must have been the neighbor’s cat. It can’t have been a ghost!' },
  { k: 'THE FRIDGE', q: 'Food has disappeared from a fridge at home or at work. Who must have taken it?', h: 'It must have been my brother. It can’t have been the dog: he can’t open doors.' },
  { k: 'AN OLD HOUSE', q: 'The house where you grew up: who might have lived there since?', h: 'A young family might have moved in. They could have painted it.' },
  { k: 'A HISTORY MYSTERY', q: 'Think of a mystery from history. What do you think happened?', h: 'The pyramids? They must have used ramps.' },
  { k: 'A MISSED CALL', q: 'Think of a call that never came. Why might it not have come?', h: 'He might have lost my number. Or he could have been too shy.' }
], 19);

var S = { i: 0, faixa: 1, fala: {}, resp: {}, armas: {},
  voce: { sel: -1, foi: {} }, video: { p: 0, cap: 0, viu: {} }, ct: { sel: -1, esc: {} }, bd: { n: 0, esc: -1, hasteadas: {} }, gd: { n: 0 }, qz: { n: 0, esc: -1 }, mi: { n: 0 } };

/* a carta náutica: a foto da ilha com as boias */
function carta(sel, esc, clicavel) {
  return '<div class="bt-carta"><img src="' + img('ilha') + '" alt=""><div class="bt-grade"></div><span class="bt-rosa">N</span>' + PISTAS.map(function (p, i) {
    var feita = esc[i] === 0, at = clicavel ? ' data-a="ct" data-n="' + i + '"' : '';
    return '<' + (clicavel ? 'button type="button"' : 'span') + ' class="bt-boia' + (sel === i ? ' on' : '') + (feita ? ' acesa' : '') + '" style="left:' + p.x + '%;top:' + p.y + '%"' + at + '><b>' + (i + 1) + '</b><small>' + p.k + '</small></' + (clicavel ? 'button' : 'span') + '>';
  }).join('') + '</div>';
}
/* as três bandeiras */
function bandeiras(hasteadas, atual) {
  return '<div class="bt-mastros">' + ['c', 'p', 'i'].map(function (k) {
    var lista = Object.keys(hasteadas).filter(function (i) { return CARTAS[i].col === k; });
    return '<div class="bt-mastro ' + k + (atual === k ? ' on' : '') + '"><div class="bt-flag"><b>' + FLAGS[k][0] + '</b><small>' + FLAGS[k][1] + '</small></div><div class="bt-cartoes">' + lista.map(function (i) { return '<span>' + CARTAS[i].ops[0] + '</span>'; }).join('') + '</div></div>';
  }).join('') + '</div>';
}
function tres(acao, ops, esc, semente, classe) {
  return '<div class="bt-ops' + (classe ? ' ' + classe : '') + '">' + ordem(ops.map(function (o, i) { return [o, i]; }), semente).map(function (o) { return '<button type="button" class="versao' + (esc === o[1] ? (o[1] === 0 ? ' certo' : ' errado') : '') + '" data-a="' + acao + '" data-n="' + o[1] + '">' + o[0] + '</button>'; }).join('') + '</div>';
}

var R = {};
R.capa = function () {
  return '<div class="capa"><div><span class="kick">MAIN SERIES · B2 · SPECULATING ABOUT THE PAST</span><h1>They Might Have <b>Left by Boat</b></h1>'
    + '<p class="sub">The lamp was still on. The rowboat was gone. She <b>must have left</b> in a hurry. Two island mysteries, and a chart full of clues.</p>'
    + '<div class="chipsx"><span class="pilula">must have</span><span class="pilula">might have</span><span class="pilula">can’t have</span><span class="pilula">Live Class · W·O·L·F</span></div>'
    + '<button type="button" class="btn cheio" data-a="ir" data-n="1">Open the case</button>' + faixaLive() + '</div>'
    + '<div class="capa-r">' + carta(-1, { 0: 0, 3: 0 }, 0) + '</div></div>';
};

R.voce = function (c) { return cartasPessoais(c, VOCE, S.voce, 'voce', ['Yes, because …', 'Maybe …', 'I think …']); };

R.video = function (c) {
  var e = S.video, corpo;
  if (e.p === 0) corpo = '<div class="mesa-c"><div class="lado-l">' + FM.ex('va', REACAO_B) + '</div>'
    + '<div class="lado-l"><div class="selo-v vd"><b>SEALED</b><small>About three minutes, in four short chapters. It opens after your reaction.</small></div><div><button type="button" class="btn cheio" data-a="vd-p" data-n="1">Watch, chapter by chapter</button></div></div></div>';
  else if (e.p === 1) {
    var k = CAPS[e.cap];
    corpo = '<div class="mesa-video"><div class="video-col">' + iframe(YT, 'The lost colony', '&start=' + k.ini + '&end=' + k.fim) + '<small class="cred">Chapter ' + (e.cap + 1) + ' of 4 · it stops by itself · tap ▶ to see a moment again</small></div><div class="lado-video"><div class="caps">'
      + CAPS.map(function (x, i) { return '<button type="button" class="chip' + (e.cap === i ? ' on' : '') + (e.viu[i] ? ' feito' : '') + '" data-a="vd-c" data-n="' + i + '">' + x.k + '</button>'; }).join('') + '</div>'
      + FM.ex('vc' + e.cap, CAP_TF[e.cap])
      + '<div>' + (e.cap < CAPS.length - 1 ? '<button type="button" class="btn" data-a="vd-c" data-n="' + (e.cap + 1) + '">Next chapter</button>' : '<button type="button" class="btn" data-a="vd-p" data-n="2">After the video</button>') + '</div></div></div>';
  } else corpo = '<div class="mesa-c"><div class="lado-l">' + FM.ex('vd1', DEPOIS_ESC) + '</div><div class="lado-l">' + FM.ex('vd2', DEPOIS_REG) + '</div></div><p class="aprova" style="text-align:center">Modal + have + participle: a guess about the past. Now a newer mystery, on a smaller island.</p>';
  return cab(c) + '<div class="tres-tempos">' + tempos3(e.p) + '</div>' + corpo;
};

R.carta = function (c) {
  var e = S.ct, sel = e.sel, esc = {}, feitas = 0;
  PISTAS.forEach(function (p, i) { var q = (S.fq || {})['cq' + i]; if (q && q.ver && q.ver[0]) { esc[i] = 0; feitas++; } });
  var x = sel >= 0 ? PISTAS[sel] : null;
  var dir = !x ? '<div class="pergunta vd"><small>THE SEARCH CHART</small><h2>Six buoys, six clues. Tap one.</h2></div>'
    : '<div class="bt-pista vd"><small>BUOY ' + (sel + 1) + ' · ' + x.k + '</small><p>' + x.pista + '</p><h3>' + x.q + '</h3></div>'
      + FM.ex('cq' + sel, { formato: 'pergunta', titulo: 'Say your theory out loud. Then build it and tap Check.', itens: [{ p: x.molde, r: x.certa }] })
      + (esc[sel] === 0 ? '<p class="aprova">' + (feitas >= PISTAS.length ? 'Six clues, six guesses. How sure were you each time? The rule is next.' : 'The buoy is lit. Tap another one.') + '</p>' : '');
  return cab(c) + '<div class="mesa-c"><div class="lado-l">' + carta(sel, esc, 1) + '</div><div class="lado-l">' + dir + '</div></div>';
};

R.regra = function (c) {
  return cab(c) + '<div class="bt-tres">' + ['c', 'p', 'i'].map(function (k) { return '<div class="bt-tipo ' + k + ' vd"><small>' + FLAGS[k][0] + '</small><p>' + FLAGS[k][1] + ' + left / seen / gone</p></div>'; }).join('') + '</div>'
    + '<p class="bt-lei">A guess about the PAST: modal + <b>have</b> + past participle. Always HAVE, never has or to.</p>'
    + FM.ex('rg', { formato: 'erro', titulo: 'Six lines are broken. Find the broken part. Say the fix.', itens: ERRO_B });
};

R.bandeiras = function (c) {
  var r = ((S.fq || {}).bd || {}).r || {}, has = {}, certas = 0;
  CARTAS.forEach(function (x, i) { if (r[i] === 'cpi'.indexOf(x.col)) { has[i] = 1; certas++; } });
  var itens = CARTAS.map(function (x) { var k = 'cpi'.indexOf(x.col); return { p: x.fato, o: ['CERTAIN', 'POSSIBLE', 'IMPOSSIBLE'], c: k, d: '<b>' + FLAGS[x.col][0] + '</b> · ' + x.ops[0] + ' Say it.' }; });
  return cab(c) + '<div class="mesa-c"><div class="lado-l">' + bandeiras(has, '') + FM.regra(PRESA) + (certas >= CARTAS.length ? '<div class="pergunta vd"><small>SIX FLAGS UP</small><h2>Two certain, two possible, two impossible. The fog is clearing. The radio rings.</h2></div>' : '') + '</div>'
    + '<div class="lado-l">' + FM.ex('bd', { formato: 'escolhe', titulo: 'How sure are you? Tap the flag. Then say the theory.', itens: itens }) + '</div></div>';
};

R.guarda = function (c) {
  var e = S.gd, n = e.n, fim = n >= TROCAS.length;
  if (fim) return cab(c) + trilha(TROCAS, n) + '<div class="foco"><div class="pergunta vd"><small>CASE CLOSED</small><h2>They left by boat, and they came back. Everybody is fine. A quick check before your own mysteries.</h2></div></div>';
  var x = TROCAS[n], aberto = S.resp['gd' + n];
  return cab(c) + trilha(TROCAS, n) + '<div class="mesa-c"><div class="lado-l"><div class="bt-radio vd"><small>OFFICER DIAZ · COAST GUARD · CH 16</small><p>“' + x.ela + '”</p></div>' + fala('gd' + n, x.st, ['the rowboat', 'the fog', 'the Petrel', 'the storm']) + '</div>'
    + '<div class="lado-l">' + (aberto ? '<div class="balao vd"><small>OFFICER DIAZ</small><p>' + x.resp + '</p></div><div><button type="button" class="btn" data-a="gd-prox">Next</button></div>' : '<div class="resp-btn"><button type="button" class="pilula" data-a="resp" data-c="gd' + n + '">The officer answers</button></div><p class="so-prof dica-aluno">Read with a radio voice. Wait for a modal in every answer.</p>') + '</div></div>';
};

R.quiz = function (c) {
  return cab(c) + '<div class="fm-com-regra"><div class="fm-mio">' + FM.ex('qz', TF_Q) + '</div>' + FM.regra(PRESA) + '</div>';
};

R.mist = function (c) {
  var n = S.mi.n, x = n ? MIST[(n - 1) % MIST.length] : null;
  return cab(c) + '<div class="mesa-c"><div class="lado-l"><div class="bt-sinal vd"><small>FLARES LEFT</small><b>' + Math.max(0, 5 - n) + ' / 5</b><button type="button" class="btn cheio" data-a="mi"' + (n >= 5 ? ' disabled' : '') + '>' + (n >= 5 ? 'Five mysteries' : 'Light a flare') + '</button>'
    + '<div class="bt-feitos">' + MIST.slice(0, Math.min(n, 5)).map(function (f, i) { return '<span class="pilula' + (i === n - 1 ? ' on' : '') + '">' + f.k + '</span>'; }).join('') + '</div></div><p class="so-prof dica-aluno">Add a different theory with a different modal.</p></div>'
    + '<div class="lado-l">' + (x ? '<div class="bt-pista vd"><small>' + x.k + '</small><h3>' + x.q + '</h3></div>' + mostra('mi' + n, x.h, 1) : '<div class="bt-pista vd"><small>THE SKY IS DARK</small><h3>must have · might have · can’t have</h3></div>') + '</div></div>';
};

R.fim = function (c) {
  return cab(c) + '<div class="fim">' + escritaFinal('fim', (S.txt || {}).fim || '', (S.salvo || {}).fim, 'They must have …\nThey might have …\nThey can’t have …', 'Your theory',
    ['must have', 'might have', 'could have', 'can’t have', 'couldn’t have'], ['YOUR THEORY ABOUT ROANOKE', 'No graves, one word on a tree, a friendly island nearby. One certain, one possible, one impossible.'])
    + '<div class="lado-fim">' + bandeiras({ 0: 1, 2: 1, 1: 1 }, '')
    + '<div class="grande vd"><span><u>must have</u> · almost sure</span><span><u>may / might / could have</u> · possible</span><span><u>can’t / couldn’t have</u> · impossible</span><span>not <s>must to have</s>, not <s>have went</s>, not <s>mustn’t have</s></span></div>'
    + mostra('fim', 'They must have left the island on purpose: there were no graves.<br>They might have joined the people on Croatoan Island.<br>They can’t have disappeared without a trace.', 1)
    + '<p class="hw"><a class="pilula" href="HW/" target="_blank" rel="noopener">Homework for the student →</a></p></div></div>';
};

TOQUES['vd-p'] = function (b, n) { S.video.p = n; };
TOQUES['vd-c'] = function (b, n) { S.video.viu[S.video.cap] = 1; S.video.cap = n; };
TOQUES.ct = function (b, n) { S.ct.sel = n; };
TOQUES['gd-prox'] = function () { S.gd.n++; };
TOQUES.mi = function () { if (S.mi.n < 5) S.mi.n++; };
