/* ============================================================
   SUCH A SMALL ROOM · THE NIGHT BLUEPRINT · LIVE CLASS  06/10/2026
   Main series B1 · so + adjetivo (sem substantivo depois) · such a /
   such an + adjetivo + substantivo · such sem A com plural e incontável
   · so / such … that + o resultado. Erros: "so small room", "such
   small", "such a loud music", "such a noisy people", "such a ugly".
   O MUNDO (da aula velha): o quarto 34 de um hotel barato, colado numa
   festa; 22 gravações mantidas (q1–q6 a/b, sx-v1–v4, t1–t6),
   conferidas no faster-whisper em 06/10: batem (uma diz "queue",
   britânico para line; fica porque é a gravação); a ligação para a
   recepção às 2h.
   A CARA: a PLANTA NOTURNA — a planta baixa do quarto 34 em linhas
   ciano sobre azul-marinho; cada reclamação certa acende o problema no
   lugar dele; o "um degrau acima" é um medidor de quatro barras. A
   planta clara da aula velha saiu. Fila: FILA-LIVE-386.md · 099.
   ============================================================ */
var L = [
  { k: 'capa', est: null, img: 'quarto' },
  { k: 'abre', est: 'o', min: 7, img: 'corredor', rot: 'I · A Place You Stayed', t: 'Think of a place you stayed in. Was it amazing, or terrible?', p: 'Tap one. Answer the three questions out loud. Keep your big sentence: it comes back.' },
  { k: 'maior', est: 'l', min: 7, img: 'festa', rot: 'II · Whose Version Is Bigger?', t: 'Two guests stayed on the same floor. Same facts, different stories.', p: 'Read the fact. Play both versions. Tap the one that makes the night sound bigger, then read it out loud.' },
  { k: 'degrau', est: 'o', min: 7, img: 'quarto', rot: 'III · One Step Up', t: 'The same night, told four times. Each time, one step bigger.', p: 'Say the sentence. Press the button. Say the new one. Four steps, four times.' },
  { k: 'regra', est: 'f', min: 6, img: 'quarto', rot: 'IV · What Comes After?', t: 'One question decides it: is there a noun after the adjective?', p: 'Choose the word. Then say the sentence.' },
  { k: 'vozes', est: 'l', min: 7, img: 'janela', rot: 'V · Four Versions', t: 'Four guests describe the same room.', p: 'Play all four. Then tap them in order, from the smallest version to the biggest.' },
  { k: 'planta', est: 'o', min: 7, extra: 1, img: 'quarto', rot: 'VI · Room 34', t: 'Room 34. Every correct complaint lights up a problem in its place.', p: 'Say the complaint like an angry guest. Your teacher taps what you said.' },
  { k: 'that', est: 'l', min: 7, extra: 1, img: 'manha', rot: 'VII · That Is Why', t: 'THAT opens the result. Six sentences from the guests.', p: 'Choose the ending. Play it to check. Say the whole sentence.' },
  { k: 'ligacao', est: 'o', min: 7, extra: 1, img: 'sino', rot: 'VIII · Call the Front Desk', t: 'It’s 2 AM. You call the front desk. Your teacher is the night manager.', p: 'Say your complaint. Your teacher taps what you said, answers, and you push for something better.' },
  { k: 'erros', est: 'f', min: 6, extra: 1, img: 'quarto', rot: 'IX · Checkout', t: 'At checkout, Room 34 writes a review. Five sentences have a problem.', p: 'Choose the fix. Then say the whole sentence.' },
  { k: 'fim', est: 'w', min: 6, img: 'quarto', rot: 'X · Your Place, Again', t: 'Your place from scene I comes back.', p: 'Write a review of your place: one line with so, one with such, one with that. It goes to your My notes.' }
];

var TR = {
  'sx-v1.mp3': 'It was such a small room that nobody could sit down.', 'sx-v2.mp3': 'The room was small.', 'sx-v3.mp3': 'It was such a small room.', 'sx-v4.mp3': 'The room was so small.',
  'q1a.mp3': 'The room was small.', 'q1b.mp3': 'It was such a small room.', 'q2a.mp3': 'It was so crowded.', 'q2b.mp3': 'It was a bit crowded.',
  'q3a.mp3': 'It was a long night.', 'q3b.mp3': 'It was such a long night.', 'q4a.mp3': 'The line was so long!', 'q4b.mp3': 'There was a queue.',
  'q5a.mp3': 'The music was loud.', 'q5b.mp3': 'The music was so loud.', 'q6a.mp3': 'It was such a full room.', 'q6b.mp3': 'The room was full.',
  't1.mp3': 'It was such a small room that nobody could sit down.', 't2.mp3': 'The music was so loud that the neighbor came up at two.', 't3.mp3': 'It was such a long night that we saw the sun come up.',
  't4.mp3': 'The line was so long that two people went home.', 't5.mp3': 'She is such a good cook that we finished everything.', 't6.mp3': 'The street was so quiet that we could hear the fridge.'
};

var PERG = ['Where was it, and when did you go?', 'What was the best or worst thing about it?', 'Describe it in one big sentence.'];

var MAIOR = [
  { fato: 'Room 34 is 12 square meters.', a: 'q1a.mp3', b: 'q1b.mp3', maior: 1 },
  { fato: 'Twelve people were at the party next door.', a: 'q2a.mp3', b: 'q2b.mp3', maior: 0 },
  { fato: 'The party ended at four in the morning.', a: 'q3a.mp3', b: 'q3b.mp3', maior: 1 },
  { fato: 'There was one elevator for six floors.', a: 'q4a.mp3', b: 'q4b.mp3', maior: 0 },
  { fato: 'The neighbor knocked at two.', a: 'q5a.mp3', b: 'q5b.mp3', maior: 1 },
  { fato: 'Nobody could sit down.', a: 'q6a.mp3', b: 'q6b.mp3', maior: 0 }
];

var DEGRAUS = [
  { suj: 'The room', adj: 'small', art: 'a', noun: 'room', cons: 'nobody could sit down' },
  { suj: 'The night', adj: 'long', art: 'a', noun: 'night', cons: 'we saw the sun come up' },
  { suj: 'The music', adj: 'loud', art: '', noun: 'music', cons: 'the neighbor knocked at two' },
  { suj: 'The line', adj: 'long', art: 'a', noun: 'line', cons: 'two people gave up and went home' }
];
function passo(x, k) {
  var verbo = 'was', it = 'It was ';
  return [x.suj + ' ' + verbo + ' ' + x.adj + '.', x.suj + ' ' + verbo + ' <b>so</b> ' + x.adj + '.', it + '<b>such ' + (x.art ? x.art + ' ' : '') + '</b>' + x.adj + ' <u>' + x.noun + '</u>.', it + '<b>such ' + (x.art ? x.art + ' ' : '') + '</b>' + x.adj + ' <u>' + x.noun + '</u> <b>that</b> ' + x.cons + '.'][k];
}

var PALAVRAS = ['so', 'such', 'such a', 'such an'];
var REGRA = [
  { f: 'The bed is ___ hard.', a: 'so' }, { f: 'It’s ___ hard bed.', a: 'such a' }, { f: 'It’s ___ loud music.', a: 'such' }, { f: 'They’re ___ noisy guests.', a: 'such' },
  { f: 'The view is ___ ugly.', a: 'so' }, { f: 'It was ___ long night.', a: 'such a' }, { f: 'The towels are ___ dirty.', a: 'so' }, { f: 'It’s ___ old hotel.', a: 'such an' }
];

var VOZES = ['sx-v2.mp3', 'sx-v4.mp3', 'sx-v3.mp3', 'sx-v1.mp3'];

var QUEIXAS = [
  { ic: 'TINY', rot: 'THE ROOM', x: 50, y: 50, ops: [['It’s such a small room.', 'ok'], ['It’s so small room.', 'sonoun'], ['It’s such small room.', 'semA']] },
  { ic: '♪♪', rot: 'THE WALL', x: 95, y: 20, ops: [['The music next door is so loud.', 'ok'], ['The music next door is such loud.', 'suchadj'], ['It’s such a loud music.', 'aunc']] },
  { ic: '❄', rot: 'THE AIR CONDITIONING', x: 12, y: 18, ops: [['The air conditioning is so cold.', 'ok'], ['The air conditioning is such cold.', 'suchadj'], ['It’s so a cold room.', 'soa']] },
  { ic: 'HARD', rot: 'THE BED', x: 30, y: 70, ops: [['It’s such a hard bed.', 'ok'], ['It’s a so hard bed.', 'aso'], ['It’s such hard bed.', 'semA']] },
  { ic: 'SLOW', rot: 'THE WI-FI', x: 75, y: 78, ops: [['The Wi-Fi is so slow.', 'ok'], ['The Wi-Fi is such slow.', 'suchadj'], ['The Wi-Fi is so a slow.', 'soa']] },
  { ic: 'NOISY', rot: 'NEXT DOOR', x: 95, y: 55, ops: [['They’re such noisy people.', 'ok'], ['They’re such a noisy people.', 'aplural'], ['They’re so noisy people.', 'sonoun']] },
  { ic: 'DIRTY', rot: 'THE BATHROOM', x: 80, y: 40, ops: [['These are such dirty towels.', 'ok'], ['These are such a dirty towels.', 'aplural'], ['These are so dirty towels.', 'sonoun']] },
  { ic: 'UGLY', rot: 'THE WINDOW', x: 10, y: 50, ops: [['It’s such an ugly view.', 'ok'], ['It’s so ugly view.', 'sonoun'], ['It’s such a ugly view.', 'an']] }
];
var NAO = {
  sonoun: 'A noun after the adjective: SUCH (A), not so.', semA: 'One countable thing: SUCH A.', suchadj: 'No noun after it: SO.',
  aunc: 'music has no A: such loud music.', soa: 'No noun after it: just SO cold.', aso: 'such a hard bed. Never a so.',
  aplural: 'Plural: such, no A. such noisy people.', an: 'A vowel sound: such AN ugly view.', that: 'The result: THAT.'
};

var THAT = [
  { au: 't1.mp3', ini: 'It was such a small room that…', ops: ['nobody could sit down.', 'we saw the sun come up.', 'we had a lot of space.'] },
  { au: 't2.mp3', ini: 'The music was so loud that…', ops: ['the neighbor came up at two.', 'we finished everything.', 'two people went home.'] },
  { au: 't3.mp3', ini: 'It was such a long night that…', ops: ['we saw the sun come up.', 'nobody could sit down.', 'we finished everything.'] },
  { au: 't4.mp3', ini: 'The line was so long that…', ops: ['two people went home.', 'we could hear the fridge.', 'the neighbor came up.'] },
  { au: 't5.mp3', ini: 'She is such a good cook that…', ops: ['we finished everything.', 'two people went home.', 'nobody could sit down.'] },
  { au: 't6.mp3', ini: 'The street was so quiet that…', ops: ['we could hear the fridge.', 'we saw the sun come up.', 'the neighbor came up.'] }
];

var LIGA = [
  { rec: 'Good evening, front desk. How can I help you?', ops: [['The music next door is so loud that I can’t sleep.', 'ok'], ['The music next door is such loud that I can’t sleep.', 'suchadj'], ['It’s so loud music that I can’t sleep.', 'sonoun']], resp: 'I’m so sorry. I’ll call Room 35 right away.', push: 'What if they don’t stop?' },
  { rec: 'Is there anything else wrong with the room?', ops: [['It’s such a small room that my suitcase doesn’t fit.', 'ok'], ['It’s so small room that my suitcase doesn’t fit.', 'sonoun'], ['It’s such small room that my suitcase doesn’t fit.', 'semA']], resp: 'I understand. All our rooms are quite small, I’m afraid.', push: 'Ask for a bigger room anyway.' },
  { rec: 'We have one bigger room, but it’s on the first floor, next to the elevator.', ops: [['The elevator was so slow that I took the stairs.', 'ok'], ['The elevator was such slow that I took the stairs.', 'suchadj'], ['It was so a slow elevator.', 'soa']], resp: 'That’s fair. What would you like me to do?', push: 'Ask for something for free.' },
  { rec: 'I can offer you breakfast for free tomorrow.', ops: [['That’s such a kind offer. Thank you.', 'ok'], ['That’s so kind offer. Thank you.', 'sonoun'], ['That’s such kind offer. Thank you.', 'semA']], resp: 'You’re welcome. Good night, and I’m sorry again.', push: 'Say goodbye, and one last complaint.' }
];

var ERROS = [
  { f: 'It was <s>so small room</s>.', ops: ['such a small room', 'so a small room', 'such small room'], w: 'A noun: such a.' },
  { f: 'The bed was <s>such hard</s>.', ops: ['so hard', 'such a hard', 'so a hard'], w: 'No noun: so.' },
  { f: 'They were <s>such a noisy people</s>.', ops: ['such noisy people', 'so noisy people', 'a such noisy people'], w: 'Plural: such, no A.' },
  { f: 'It was <s>such a ugly view</s>.', ops: ['such an ugly view', 'so ugly view', 'such ugly a view'], w: 'AN before a vowel sound.' },
  { f: 'It was such a long night <s>so</s> we saw the sun come up.', ops: ['that', 'than', 'what'], w: 'The result: that.' },
  { f: 'The staff were so kind that I’d go back.', ops: ['Nothing: it’s right', 'such kind', 'so kind staff'], w: 'Five problems and one good sentence.' }
];

var S = { i: 0, faixa: 1, fala: {}, resp: {}, armas: {},
  ab: { lado: '' }, mr: { n: 0, esc: -1 }, dg: { n: 0, k: 0 }, rg: { n: 0, esc: '' }, vz: { ord: [], erro: 0 }, pl: { n: 0, esc: '' }, th: { n: 0, esc: -1 }, lg: { n: 0, esc: '' }, er: { n: 0, esc: -1 } };

/* a planta: problemas acesos = até n */
function planta(n, mini) {
  var s = '<svg class="planta' + (mini ? ' mini' : '') + '" viewBox="0 0 400 260" role="img" aria-label="Room 34 floor plan"><rect class="fundo-p" width="400" height="260" rx="12"/>'
    + [40, 80, 120, 160, 200, 240].map(function (y) { return '<line class="grade-p" x1="0" y1="' + y + '" x2="400" y2="' + y + '"/>'; }).join('') + [50, 100, 150, 200, 250, 300, 350].map(function (x) { return '<line class="grade-p" x1="' + x + '" y1="0" x2="' + x + '" y2="260"/>'; }).join('')
    + '<rect class="parede" x="30" y="25" width="340" height="210"/><line class="parede" x1="290" y1="25" x2="290" y2="140"/><rect class="movel" x="70" y="150" width="110" height="70"/><text class="cota" x="125" y="212">BED</text>'
    + '<rect class="movel" x="300" y="35" width="60" height="95"/><text class="cota" x="330" y="86">BATH</text><path class="porta-p" d="M200 235 A40 40 0 0 1 240 195"/><line class="janela-p" x1="30" y1="90" x2="30" y2="170"/>'
    + '<text class="cota grande" x="170" y="60">ROOM 34 · 12 m²</text>';
  QUEIXAS.forEach(function (q, i) { var on = i < n, x = 30 + q.x * 3.4, y = 25 + q.y * 2.1; s += '<g class="prob' + (on ? ' on' : '') + '" transform="translate(' + x.toFixed(0) + ' ' + y.toFixed(0) + ')"><circle r="' + (on ? 15 : 5) + '"/>' + (on ? '<text y="4">' + q.ic + '</text>' : '') + '</g>'; });
  return s + '</svg>';
}
function medidor(k) { return '<div class="medidor">' + [1, 2, 3, 4].map(function (i) { return '<span class="' + (i <= k + 1 ? 'on' : '') + '" style="height:' + (20 + i * 18) + 'px"></span>'; }).join('') + '</div>'; }

var R = {};
R.capa = function () {
  return '<div class="capa"><div><span class="kick">MAIN SERIES · B1 · ROOM 34</span><h1>Such a <b>Small Room</b></h1>'
    + '<p class="sub">The room is <b>so</b> small. It’s <b>such a</b> small room. Same room, and the noun decides the word.</p>'
    + '<div class="chipsx"><span class="pilula">so + adjective</span><span class="pilula">such a + adjective + noun</span><span class="pilula">Live Class · W·O·L·F</span></div>'
    + '<button type="button" class="btn cheio" data-a="ir" data-n="1">Check in</button>' + faixaLive() + '</div>'
    + '<div class="capa-r">' + planta(5) + '</div></div>';
};

R.abre = function (c) {
  var e = S.ab;
  return cab(c) + '<div class="tres-b centro">' + [['IT WAS GREAT', 'bom'], ['IT WAS TERRIBLE', 'mau']].map(function (o) { return '<button type="button" class="pilula grande-p lado-' + o[1] + (e.lado === o[1] ? ' on' : '') + '" data-a="ab" data-v="' + o[1] + '">' + o[0] + '</button>'; }).join('') + '</div>'
    + (e.lado ? '<div class="mesa-c"><div class="lado-l">' + PERG.map(function (p, i) { return '<div class="pede vd"><small>' + (i + 1) + '</small><b>' + p + '</b></div>'; }).join('') + '</div><div class="lado-l">' + fala('ab', ['It was in … , in …', 'The ' + (e.lado === 'bom' ? 'best' : 'worst') + ' thing was …', 'It was …'], ['so', 'such', 'that']) + '<p class="so-prof dica-aluno">Write down the big sentence exactly, mistakes included. “It was so good place” comes back in scene X.</p></div></div>' : '<div class="aberta vd" style="background-image:url(' + img('corredor') + ')"><span>A PLACE YOU STAYED</span></div>');
};

R.maior = function (c) {
  var e = S.mr, n = e.n, fim = n >= MAIOR.length;
  if (fim) return cab(c) + trilha(MAIOR, n) + '<div class="foco"><div class="pergunta vd"><small>SIX FACTS</small><h2>Six bigger versions. Which little words made them bigger?</h2></div>' + fala('mr', ['The words … made it bigger.'], ['so', 'such', 'such a']) + '</div>';
  var x = MAIOR[n], ouviu = (S.ouviu || {})[x.a] && (S.ouviu || {})[x.b], ok = e.esc === x.maior;
  return cab(c) + trilha(MAIOR, n) + '<div class="foco"><div class="pede vd fato"><small>THE FACT</small><b>' + x.fato + '</b></div><div class="duas-vers">'
    + [x.a, x.b].map(function (au, i) { return '<div class="versao-c vd' + (e.esc === i ? (ok ? ' certo' : ' errado') : '') + '"><small>' + ['SAM', 'JO'][i] + '</small><div class="toca-linha">' + tocar(au) + '</div>' + (ouviu ? '<p>' + TR[au] + '</p>' : '<p class="vazia">Listen first.</p>') + '<button type="button" class="pilula" data-a="mr" data-n="' + i + '"' + (ouviu ? '' : ' disabled') + '>BIGGER</button></div>'; }).join('') + '</div>'
    + (ok ? '<div class="linha-ok"><p class="aprova">Now read it out loud, like it was a terrible night.</p><button type="button" class="btn" data-a="mr-prox">Next fact</button></div>' : e.esc >= 0 ? '<p class="recusa" style="text-align:center">Play both again, back to back. Which one is bigger?</p>' : '') + '</div>';
};

R.degrau = function (c) {
  var e = S.dg, n = e.n, fim = n >= DEGRAUS.length;
  if (fim) return cab(c) + '<div class="foco"><div class="pergunta vd"><small>FOUR NIGHTS, FOUR STEPS</small><h2>Something came back into the sentence at step three. What was it?</h2></div><p class="aprova" style="text-align:center">The noun. And SUCH is the only step with room for it. So + adjective. Such (a) + adjective + noun.</p></div>';
  var x = DEGRAUS[n];
  return cab(c) + trilha(DEGRAUS, n) + '<div class="mesa-c"><div class="lado-l centro">' + medidor(e.k) + '<p class="legenda-m">STEP ' + (e.k + 1) + ' OF 4</p></div><div class="lado-l"><div class="degraus-l">'
    + [0, 1, 2, 3].map(function (k) { return k <= e.k ? '<p class="deg d' + k + (k === e.k ? ' on' : '') + '">' + passo(x, k) + '</p>' : ''; }).join('') + '</div>'
    + (e.k < 3 ? '<div><button type="button" class="btn" data-a="dg-k">One step up</button></div>' : '<div><button type="button" class="btn" data-a="dg-prox">Next night</button></div>') + '</div></div>';
};

R.regra = function (c) {
  var e = S.rg, n = e.n, fim = n >= REGRA.length;
  var lei = '<div class="lei"><span><b>no noun</b> → so</span><span><b>one countable thing</b> → such a / such an</span><span><b>plural or uncountable</b> → such</span></div>';
  if (fim) return cab(c) + lei + '<div class="foco"><div class="pergunta vd"><small>EIGHT OF EIGHT</small><h2>No noun: SO. A noun: SUCH, with A or AN only for one countable thing.</h2></div></div>';
  var x = REGRA[n], ok = e.esc === x.a;
  return cab(c) + lei + trilha(REGRA, n) + '<div class="foco"><div class="balao vd"><p>' + x.f.replace('___', ok ? '<u>' + x.a + '</u>' : '<span class="lacuna-q">___</span>') + '</p></div><div class="tres-b centro">'
    + PALAVRAS.map(function (w) { return '<button type="button" class="pilula grande-p' + (e.esc === w ? (ok ? ' certo' : ' errado') : '') + '" data-a="rg" data-v="' + w + '">' + w + '</button>'; }).join('') + '</div>'
    + (ok ? '<div style="text-align:center"><button type="button" class="btn" data-a="rg-prox">Next</button></div>' : e.esc ? '<p class="recusa" style="text-align:center">A noun after it? Singular? Plural or uncountable? No noun at all?</p>' : '') + '</div>';
};

R.vozes = function (c) {
  var e = S.vz, todos = VOZES.every(function (v) { return (S.ouviu || {})[v]; }), fim = e.ord.length >= 4;
  var cartas = ordem(VOZES.map(function (v, i) { return [v, i]; }), 3).map(function (o) { var p = e.ord.indexOf(o[1]); return '<div class="voz-c vd' + (p >= 0 ? ' certo' : '') + '"><div class="toca-linha">' + tocar(o[0]) + (p >= 0 ? '<i>' + (p + 1) + '</i>' : '') + '</div>' + (p >= 0 ? '<p>' + TR[o[0]] + '</p>' : '') + '<button type="button" class="pilula" data-a="vz" data-n="' + o[1] + '"' + (todos && p < 0 ? '' : ' disabled') + '>NEXT IN SIZE</button></div>'; }).join('');
  return cab(c) + '<div class="quatro-v">' + cartas + '</div>'
    + (!todos ? '<p class="dica-aluno" style="text-align:center">Play all four first.</p>' : e.erro ? '<p class="recusa" style="text-align:center">Not that one yet. Which one is smaller?</p>' : '')
    + (fim ? '<div class="foco"><div class="pergunta vd"><small>FOUR VERSIONS</small><h2>The biggest one had SUCH and THAT. Which version would you use to complain to the hotel?</h2></div></div>' : '');
};

R.planta = function (c) {
  var e = S.pl, n = e.n, fim = n >= QUEIXAS.length, ok = e.esc === 'ok';
  if (fim) return cab(c) + '<div class="mesa-c"><div class="lado-l centro">' + planta(8) + '</div><div class="lado-l"><div class="pergunta vd"><small>EIGHT PROBLEMS</small><h2>Room 34 is a disaster, and every complaint was right. Now each one the other way: so ↔ such.</h2></div></div></div>';
  var x = QUEIXAS[n];
  return cab(c) + trilha(QUEIXAS, n) + '<div class="mesa-c"><div class="lado-l centro">' + planta(n + (ok ? 1 : 0)) + '</div><div class="lado-l"><div class="pede vd"><small>COMPLAIN ABOUT</small><b>' + x.rot + '</b></div>'
    + (ok ? '<div class="balao vd ok-b"><p>' + x.ops[0][0] + '</p></div><div><button type="button" class="btn" data-a="pl-prox">Next problem</button></div>'
      : '<h5 class="so-prof rot-ouve">TAP THE COMPLAINT YOU HEARD</h5><div class="versoes">' + ordem(x.ops, n + 5).map(function (o) { return '<button type="button" class="versao' + (e.esc === o[1] ? ' errado' : '') + '" data-a="pl" data-v="' + o[1] + '">' + o[0] + '</button>'; }).join('') + '</div>' + (e.esc ? '<p class="recusa">' + NAO[e.esc] + '</p>' : '')) + '</div></div>';
};

R.that = function (c) {
  var e = S.th, n = e.n, fim = n >= THAT.length;
  if (fim) return cab(c) + trilha(THAT, n) + '<div class="foco"><div class="pergunta vd"><small>SIX RESULTS</small><h2>THAT is where the story pays off. Give each first half a new result.</h2></div></div>';
  var x = THAT[n], ok = e.esc === 0;
  return cab(c) + trilha(THAT, n) + '<div class="mesa-c"><div class="lado-l"><div class="balao vd"><p>' + x.ini + (ok ? ' <u>' + x.ops[0] + '</u>' : '') + '</p></div>' + (ok ? '<div class="ouve-c vd"><div class="toca-linha">' + tocar(x.au) + '<b>PLAY IT TO CHECK</b></div>' + transcricao(x.au, TR[x.au]) + '</div>' : '') + '</div>'
    + '<div class="lado-l">' + (ok ? '<div><button type="button" class="btn" data-a="th-prox">Next</button></div>' : '<div class="versoes">' + ordem(x.ops.map(function (o, i) { return [o, i]; }), n + 3).map(function (o) { return '<button type="button" class="versao' + (e.esc === o[1] ? ' errado' : '') + '" data-a="th" data-n="' + o[1] + '">' + o[0] + '</button>'; }).join('') + '</div>' + (e.esc > 0 ? '<p class="recusa">Which result makes sense? Read the first half again.</p>' : '')) + '</div></div>';
};

R.ligacao = function (c) {
  var e = S.lg, n = e.n, fim = n >= LIGA.length;
  if (fim) return cab(c) + '<div class="mesa-c"><div class="lado-l"><div class="aberta vd" style="background-image:url(' + img('sino') + ')"><span>FRONT DESK · 2:14 AM</span></div></div><div class="lado-l"><div class="pergunta vd"><small>ONE CALL</small><h2>Four complaints, and free breakfast. Now swap: you’re the manager.</h2></div></div></div>';
  var x = LIGA[n], ok = e.esc === 'ok';
  return cab(c) + trilha(LIGA, n) + '<div class="mesa-c"><div class="lado-l"><div class="aberta vd" style="background-image:url(' + img('sino') + ')"><span>FRONT DESK · 2:0' + (n * 3 + 2) + ' AM</span></div><div class="pede vd"><small>THE NIGHT MANAGER</small><b>“' + x.rec + '”</b></div></div>'
    + '<div class="lado-l">' + (ok ? '<div class="balao vd ok-b"><p>' + x.ops[0][0] + '</p></div><p class="so-prof dica-aluno">The manager answers: “' + x.resp + '” Then your student pushes: ' + x.push + '</p><div><button type="button" class="btn" data-a="lg-prox">Next</button></div>'
      : '<h5 class="so-prof rot-ouve">TAP THE COMPLAINT YOU HEARD</h5><div class="versoes">' + ordem(x.ops, n + 7).map(function (o) { return '<button type="button" class="versao' + (e.esc === o[1] ? ' errado' : '') + '" data-a="lg" data-v="' + o[1] + '">' + o[0] + '</button>'; }).join('') + '</div>' + (e.esc ? '<p class="recusa">' + NAO[e.esc] + '</p>' : '')) + '</div></div>';
};

R.erros = function (c) {
  var e = S.er, n = e.n, fim = n >= ERROS.length;
  if (fim) return cab(c) + trilha(ERROS, n) + '<div class="foco"><div class="pergunta vd"><small>CHECKED OUT</small><h2>Six sentences. Now a one-star and a five-star review, out loud.</h2></div></div>';
  var x = ERROS[n], ok = e.esc === 0;
  return cab(c) + trilha(ERROS, n) + '<div class="foco"><div class="balao vd"><p>' + x.f + '</p></div><div class="tres-b centro">'
    + ordem(x.ops.map(function (o, i) { return [o, i]; }), n + 2).map(function (o) { return '<button type="button" class="pilula grande-p' + (e.esc === o[1] ? (o[1] === 0 ? ' certo' : ' errado') : '') + '" data-a="er" data-n="' + o[1] + '">' + o[0] + '</button>'; }).join('') + '</div>'
    + (ok ? '<p class="aprova" style="text-align:center">' + x.w + '</p><div style="text-align:center"><button type="button" class="btn" data-a="er-prox">Next</button></div>' : e.esc > 0 ? '<p class="recusa" style="text-align:center">What comes after the adjective?</p>' : '') + '</div>';
};

R.fim = function (c) {
  return cab(c) + '<div class="fim">' + escritaFinal('fim', (S.txt || {}).fim || '', (S.salvo || {}).fim, 'The … was so …\nIt was such a … …\nIt was so … that …', 'Your review',
    ['so ', 'such a ', 'such an ', 'such ', ' that '], ['YOUR PLACE FROM SCENE I', 'One line with so, one with such (a), and one result with that.'])
    + '<div class="lado-fim">' + planta(8, 1) + '<div class="grande vd"><span>The room is <u>so</u> small</span><span>It’s <u>such a</u> small <u>room</u> · <u>such</u> loud music</span><span><u>such a</u> long night <u>that</u> we saw the sun come up</span></div>'
    + mostra('fim', 'The hostel in Lisbon was so cheap.<br>It was such a friendly place that I stayed two more nights.<br>The breakfast was so good that I still think about it.', 1)
    + '<p class="hw"><a class="pilula" href="HW/" target="_blank" rel="noopener">Homework for the student →</a></p></div></div>';
};

TOQUES.ab = function (b, n, v) { S.ab.lado = v; };
TOQUES.mr = function (b, n) { S.mr.esc = n; };
TOQUES['mr-prox'] = function () { S.mr = { n: S.mr.n + 1, esc: -1 }; };
TOQUES['dg-k'] = function () { S.dg.k++; };
TOQUES['dg-prox'] = function () { S.dg = { n: S.dg.n + 1, k: 0 }; };
TOQUES.rg = function (b, n, v) { S.rg.esc = v; };
TOQUES['rg-prox'] = function () { S.rg = { n: S.rg.n + 1, esc: '' }; };
TOQUES.vz = function (b, n) { var e = S.vz; if (e.ord.indexOf(n) >= 0) return; if (n === e.ord.length) { e.ord.push(n); e.erro = 0; } else e.erro = 1; };
TOQUES.pl = function (b, n, v) { S.pl.esc = v; };
TOQUES['pl-prox'] = function () { S.pl = { n: S.pl.n + 1, esc: '' }; };
TOQUES.th = function (b, n) { S.th.esc = n; };
TOQUES['th-prox'] = function () { S.th = { n: S.th.n + 1, esc: -1 }; };
TOQUES.lg = function (b, n, v) { S.lg.esc = v; };
TOQUES['lg-prox'] = function () { S.lg = { n: S.lg.n + 1, esc: '' }; };
TOQUES.er = function (b, n) { S.er.esc = n; };
TOQUES['er-prox'] = function () { S.er = { n: S.er.n + 1, esc: -1 }; };
