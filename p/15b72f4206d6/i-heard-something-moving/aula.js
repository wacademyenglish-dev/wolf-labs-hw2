/* ============================================================
   I HEARD SOMETHING MOVING · NIGHT CALLS · LIVE 08/10/2026
   Main series B1 · Halloween · verbos de percepção: hear / see /
   watch / feel + alguém + -ING (um pedaço da ação, ela continuava) ×
   + VERBO PURO (a ação inteira, do começo ao fim). Sem to, sem that,
   sem -s, sem -ed depois da pessoa; him / her / them, nunca he / she.
   listen precisa de to (I listened to someone crying); hear não.
   Erros universais: "I heard someone to walk", "I saw he closing",
   "She saw her opens", "We heard the dog barked", "I listened someone".
   O MUNDO: "Night Calls", um programa de rádio de madrugada na semana
   do Halloween. Ouvintes ligam para contar o que ouviram e viram; o
   aluno é o locutor e depois liga ele mesmo. Terror sem susto: toda
   história tem uma explicação boba (o gato, o vento, o rádio ligado).
   O VÍDEO: A Quiet Place (2018), trailer oficial da Paramount
   (WR7cc5t7tv8, 1:56, conferido 08/10: incorporável, sem limite de
   idade). Quase sem fala: primeiro só o SOM (a imagem tapada), depois
   com a imagem. Falas: 0:30 "I'll be right back." · 1:30 "Who are we
   if we can't protect them?".
   V é o "History Minute": a origem do feriado (pedido do Carlos).
   A CARA: o estúdio de rádio à meia-noite. Mesa de som, a placa ON AIR
   (vermelho pequeno), as linhas de telefone e a onda do som. Fundo
   azul-noite; nada de campo claro.
   23/10/2026 · OS FORMATOS NOVOS (kit/formatos.js + formatos2.js), mesmas
   páginas, nada de escolher entre frases quase iguais. II = antes do play
   uma reação e uma régua; só o som: duas falas do trailer com ▶ (0:30 e
   1:30, as únicas com fala); com a imagem: verdadeiro ou mentira; depois:
   ouvi ou vi? (FM.reacao, FM.regua, FM.som, FM.verdadeOuMentira,
   FM.separa). III = achar a parte quebrada de seis linhas (FM.erro, a
   placa no canto); IV e V = verdadeiro ou mentira depois da ligação e do
   minuto de história; VII = o que a frase quer dizer: tudo ou uma parte
   (FM.escolhe, sem a barra); VIII = certo ou errado. I, VI e IX ficam.
   ============================================================ */
var YT = 'WR7cc5t7tv8';
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'abre', est: 'o', min: 7, img: 'estudio', rot: 'I · Night Noises', t: 'Before the show: your nights, your noises.', p: 'Pick a card. Real life. Nobody is corrected here.' },
  { k: 'video', est: 'l', min: 10, img: 'estrada', rot: 'II · Only the Sound', t: 'A movie where nobody can make a sound.', p: 'Tap your answers first. Then listen with no picture, then watch: tap again. ▶ plays a line again.' },
  { k: 'regra', est: 'f', min: 7, img: 'estudio', rot: 'III · The Rule', t: 'I heard someone walking. I saw him close the door.', p: 'A part of it: -ing. All of it: the base verb. Find the broken part of six lines and say the fix.' },
  { k: 'linhas', est: 'l', min: 7, img: 'casa', rot: 'IV · Night Calls', t: 'Three listeners are on the line.', p: 'Your teacher reads the call. Listen. Then tap True or Lie, and say what the caller heard and saw.' },
  { k: 'historia', est: 'l', min: 7, img: 'fogueira', rot: 'V · The History Minute', t: 'Station break: where does Halloween come from?', p: 'Your teacher reads the history minute. Then tap True or Lie: the sentences use today’s grammar too.' },
  { k: 'ligue', est: 'o', min: 7, extra: 1, img: 'janela', rot: 'VI · You’re On Air', t: 'Now you call the show.', p: 'Pick a card and tell your story. Start with I heard… or I saw…' },
  { k: 'porta', est: 'f', min: 6, extra: 1, img: 'casa', rot: 'VII · Open or Opening?', t: 'Did they see all of it, or only a part?', p: 'Read the sentence. Did they see all of it, or only a part? Tap, then say why.' },
  { k: 'quiz', est: 'f', min: 6, extra: 1, img: 'estudio', rot: 'VIII · Quick Check', t: 'Six quick ones before the show ends.', p: 'Tap Right or Wrong. If it is wrong, say the fix.' },
  { k: 'fim', est: 'w', min: 6, img: 'estrada', rot: 'IX · The Last Call', t: 'Write your call for tomorrow’s show.', p: 'About 80 words: what you heard, what you saw, and what it really was. It goes to your My notes.' }
];

var ABRE = [
  { k: 'NOISES', q: 'What noises can you hear from your bed at night?', fup: 'Which one do you hate?', st: ['I can hear …', 'Sometimes I hear …'], ex: 'I can hear cars going by and my neighbor’s TV.' },
  { k: 'SCARY MOVIES', q: 'Do you watch scary movies? With the sound on or off?', fup: 'What’s the scariest one you’ve seen?', st: ['I love them …', 'I never …'], ex: 'I watch them, but I turn the sound down in the scary parts!' },
  { k: 'HALLOWEEN', q: 'Is Halloween a big thing where you live?', fup: 'What do people do?', st: ['Not really …', 'Yes, people …'], ex: 'Not really. Some schools have parties, and kids wear costumes.' },
  { k: 'RADIO', q: 'Do you listen to the radio or to podcasts? When?', fup: 'Which one do you like?', st: ['I listen to … when I …'], ex: 'I listen to podcasts when I’m driving to work.' },
  { k: 'SILENCE', q: 'Could you spend one whole day in total silence?', fup: 'What would be the hardest part?', st: ['I couldn’t, because …', 'Maybe, but …'], ex: 'I couldn’t. I always have music on.' }
];
var FORMAS = [{ k: 'ing', t: 'HEARD SOMEONE + -ING' }, { k: 'base', t: 'SAW HIM + VERB' }, { k: 'to', t: 'HEARD SOMEONE TO …', erro: 1 }, { k: 'ele', t: 'SAW HE / SHE …', erro: 1 }];

/* II · antes do play: uma reação e uma régua (tudo por toque) */
var REACAO_H = { formato: 'reacao', titulo: 'It’s 3 AM. What do you do?', fala: 'The movie is called A Quiet Place: a family can’t make a sound. Imagine you live there, and in the night you hear something moving in the kitchen.', quem: 'The house', reacoes: [
  ['Freeze and listen', 'I heard something moving in the kitchen, so I froze and listened.', 'Silence. Then you hear the steps again, slow.'],
  ['Look through the door', 'I saw a shadow crossing the room.', 'It stops. Did it hear you?'],
  ['Wake up your brother', 'I touched my brother. We both heard it walking.', 'Everybody holds their breath.']
] };
var REGUA_H = { formato: 'regua', titulo: 'Before you listen', frase: 'You could live a whole week without making a single noise.', esquerda: 'Disagree', direita: 'Agree', depois: 'Say why. Start with: I think I could / couldn’t because …' };
/* só o som: as duas únicas falas do trailer, com ▶ no minuto */
var SOM_H = { formato: 'som', titulo: 'Only the sound: which word did you hear?', itens: [
  { a: 'Someone says: “I’ll be right ', par: ['back', 'black'], c: 0, b: '.”', t: '0:30' },
  { a: 'Someone asks: “Who are we if we can’t ', par: ['protect', 'project'], c: 0, b: ' them?”', t: '1:30' }
] };
/* com a imagem: verdadeiro ou mentira */
var TF_IMG = { formato: 'verdadeOuMentira', titulo: 'Now with the picture · true or lie?', itens: [
  { f: 'The family walks very slowly, with no shoes on.', t: true },
  { f: 'The little boy is holding a teddy bear.', t: false, c: 'A toy: a little rocket.' },
  { f: 'The family runs fast, in big boots.', t: false, c: 'They walk very slowly, with no shoes on.' },
  { f: 'A man is talking on the radio.', t: true }
] };
/* depois: ouvi ou vi? (FM.separa) */
var SEPARA_H = { formato: 'separa', titulo: 'Tap a thing, then its box. Did you hear it, or see it?', caixas: ['I HEARD it', 'I SAW it'], itens: [
  { t: 'a man talking on the radio', c: 0 },
  { t: 'the wind in the trees', c: 0 },
  { t: 'the family walking on the road', c: 1 },
  { t: 'the boy holding a toy rocket', c: 1 },
  { t: 'a question: “Who are we if we can’t protect them?”', c: 0 }
] };

var FITAS = [['A PART OF IT', 'I heard someone walking. (it was still going on)'], ['ALL OF IT', 'I saw him close the door. (from start to finish)'], ['NOTHING IN THE MIDDLE', 'heard someone walk · no to, no -s, no -ed'], ['HIM, HER, THEM', 'I saw her leave. · not she']];
/* III · achar a parte quebrada (FM.erro) · a placa no canto */
var ERRO_H = [
  { f: 'I heard somebody <u>to scream</u>.', r: 'scream' },
  { f: 'I saw <u>he</u> closing the door.', r: 'him' },
  { f: 'I saw her <u>opens</u> the window.', r: 'open' },
  { f: 'We heard the dog <u>barked</u>.', r: 'barking' },
  { f: 'I <u>listened</u> someone crying.', r: 'listened to' },
  { f: 'I <u>could to hear</u> the rain.', r: 'could hear' }
];
var PRESA_H = 'A part (still going on): <b>heard someone walking</b><br>All of it: <b>saw him close</b> the door<br>No to · no -s · no -ed after the person<br><b>him, her, them</b> · <b>listen to</b> · <b>could hear</b>';
var NOTA = {
  to: 'After hear / see + person: no to.', ele: 'After hear / see: him, her, them. Not he, she, they.', s: 'After the person: the base verb. No -s.',
  ed: 'The past is already in heard / saw. Then -ing or the base verb.', listen: 'listen needs to: I listened to… Or just: I heard…'
};

var LINHAS = [
  { k: 'LINE 1', quem: 'RITA', hora: '2:14 AM', onde: 'a farmhouse, alone',
    txt: 'Hi, Night Calls? I live alone on a farm. Last night I woke up at two. I heard somebody walking on the porch, slow steps, again and again. Then I heard the front door open, the whole thing: creak… bang. I went downstairs with a flashlight, and I saw my cat sitting on the kitchen table, eating my birthday cake. I forgot to close the door!',
    qs: [{ q: 'What did Rita hear on the porch?', ops: [['She heard somebody walking on the porch.', 'ok'], ['She heard somebody to walk on the porch.', 'to'], ['She heard somebody walked on the porch.', 'ed']] },
      { q: 'What did she see in the kitchen?', ops: [['She saw her cat eating her cake.', 'ok'], ['She saw her cat eats her cake.', 's'], ['She saw her cat to eat her cake.', 'to']] }] },
  { k: 'LINE 2', quem: 'DEV', hora: '3:02 AM', onde: 'a truck on Route 9',
    txt: 'Hey, it’s Dev. I drive a truck at night. On Route 9, I saw a woman standing by the road in a white dress. I stopped, I looked again, and nobody was there. Then I heard someone laughing in the back of my truck. I almost cried. It was the radio. I left it on in the back. Your show, actually!',
    qs: [{ q: 'What did Dev see by the road?', ops: [['He saw a woman standing by the road.', 'ok'], ['He saw a woman stands by the road.', 's'], ['He saw a woman stood by the road.', 'ed']] },
      { q: 'What did he hear in the truck?', ops: [['He heard someone laughing.', 'ok'], ['He listened someone laughing.', 'listen'], ['He heard someone to laugh.', 'to']] }] },
  { k: 'LINE 3', quem: 'MAYA', hora: '3:40 AM', onde: 'babysitting on Halloween',
    txt: 'Hi… I’m babysitting tonight. The kids are asleep. Ten minutes ago I heard the phone ring, three times, and then it stopped. And just now I saw the curtain move, all the way, from one side to the other. I watched it for a minute. Oh. The window is open. It’s the wind, right? It’s the wind.',
    qs: [{ q: 'What did Maya hear ten minutes ago?', ops: [['She heard the phone ring three times.', 'ok'], ['She heard the phone rang three times.', 'ed'], ['She heard the phone to ring three times.', 'to']] },
      { q: 'What did she see in the living room?', ops: [['She saw the curtain move.', 'ok'], ['She saw the curtain moves.', 's'], ['She saw the curtain to move.', 'to']] }] }
];

/* V: a origem do feriado (pedido do Carlos, 08/10). Samhain celta (fim da colheita, 31/10 a 1/11), fogueiras e
   disfarces; All Hallows' Eve, a véspera do Dia de Todos os Santos; os irlandeses levaram a tradição aos EUA no
   século XIX, e o nabo entalhado virou abóbora. */
var LN_TF = [
  { formato: 'verdadeOuMentira', titulo: 'Rita · true or lie? Say it again with the right form.', itens: [
    { f: 'She heard somebody walking on the porch.', t: true },
    { f: 'She heard the front door close: bang.', t: false, c: 'She heard the front door open: creak… bang.' },
    { f: 'She saw her cat eating her birthday cake.', t: true }
  ] },
  { formato: 'verdadeOuMentira', titulo: 'Dev · true or lie? Say it again with the right form.', itens: [
    { f: 'He saw a woman standing by the road.', t: true },
    { f: 'He heard someone crying in the back of his truck.', t: false, c: 'He heard someone laughing.' },
    { f: 'The laughing came from the radio.', t: true }
  ] },
  { formato: 'verdadeOuMentira', titulo: 'Maya · true or lie? Say it again with the right form.', itens: [
    { f: 'She heard the phone ring three times.', t: true },
    { f: 'She saw the dog run across the room.', t: false, c: 'She saw the curtain move, from one side to the other.' },
    { f: 'In the end, it was the wind.', t: true }
  ] }
];
var HIST_TF = { formato: 'verdadeOuMentira', titulo: 'The history minute · true or lie?', itens: [
  { f: 'People believed they could hear the dead walking among the living.', t: true },
  { f: 'The Celts celebrated Samhain in the middle of the summer.', t: false, c: 'On October 31st, when the summer was over.' },
  { f: 'Families watched the bonfires burning on the hills.', t: true },
  { f: 'The word Halloween comes from All Hallows’ Eve.', t: true },
  { f: 'In Ireland, families carved pumpkins at home.', t: false, c: 'They carved turnips. They found pumpkins in America.' }
] };
var HIST = {
  txt: 'More than two thousand years ago, in Ireland and Scotland, the Celts celebrated Samhain on the night of October 31st. The summer was over and the dark winter was coming. People believed that on that one night they could hear the dead walking among the living. Families watched the bonfires burning on the hills, and they wore masks so the spirits didn’t recognize them. Many years later, November 1st became All Saints’ Day, or All Hallows’ Day, and the night before it was All Hallows’ Eve: Halloween. In the 1800s, Irish families took the tradition to America. At home they carved faces in turnips; in America they found something bigger and easier to carve: the pumpkin.',
  qs: [
    { q: 'On the night of Samhain, what did people believe they could hear?', h: 'They believed they could hear the dead walking among the living.' },
    { q: 'What did families watch on the hills?', h: 'They watched the bonfires burning on the hills.' },
    { q: 'Where does the word Halloween come from?', h: 'From All Hallows’ Eve, the night before All Saints’ Day.' },
    { q: 'What did Irish families carve before the pumpkin?', h: 'Turnips. In America, pumpkins were bigger and easier to carve.' }
  ]
};

var LIGUE = [
  { k: 'A NOISE AT NIGHT', q: 'You’re on air! Tell us about a noise you heard at night.', fup: 'And what was it, really?', st: ['I heard something …-ing', 'I heard somebody …'], ex: 'Last week I heard something scratching my window. It was a branch.' },
  { k: 'FROM THE WINDOW', q: 'What did you see from your window this week?', fup: 'What time was it?', st: ['I saw … -ing', 'I saw someone …'], ex: 'I saw two kids riding their bikes in the rain.' },
  { k: 'A STRANGE THING', q: 'Did you ever see something you couldn’t explain?', fup: 'Did anybody else see it?', st: ['Once I saw …', 'I could see …'], ex: 'Once I saw a light moving over the sea. Nobody knows what it was.' },
  { k: 'A MOVIE SCENE', q: 'Tell us a scene from a scary movie or series.', fup: 'Would you watch it again?', st: ['You see … -ing', 'You hear …'], ex: 'In Stranger Things, you see the kids riding their bikes in the dark, and you hear the lights buzzing.' },
  { k: 'HALLOWEEN NIGHT', q: 'Imagine Halloween night in your street. What can you hear and see?', fup: 'Would you open your door?', st: ['I can hear …', 'I can see …'], ex: 'I can hear kids laughing, and I can see someone knocking on every door.' }
];

/* VI: a barra é a ação inteira; o trecho aceso é o que a testemunha viu ou ouviu (de, até, em %) */
var PORTA = [
  { k: 'TOM', txt: 'Tom watched the old door from the start to the end: it opened slowly, all the way.', de: 0, ate: 100, ops: ['Tom saw the door open.', 'Tom saw the door opening.'], certo: 0, por: 'He saw all of it, from start to finish: the base verb.' },
  { k: 'ANA', txt: 'Ana saw the door start to move, and she ran away before it stopped.', de: 0, ate: 30, ops: ['Ana saw the door open.', 'Ana saw the door opening.'], certo: 1, por: 'Only a part: the door was still moving when she left. -ing.' },
  { k: 'LEO', txt: 'Leo walked past the basement. Music was playing down there, and it was still playing when he left.', de: 40, ate: 60, ops: ['Leo heard the radio play.', 'Leo heard the radio playing.'], certo: 1, por: 'A piece in the middle, and it went on after him: -ing.' },
  { k: 'MIA', txt: 'Mia heard the mayor’s whole speech, from “Good evening” to “Happy Halloween”.', de: 0, ate: 100, ops: ['Mia heard the mayor give the speech.', 'Mia heard the mayor giving the speech.'], certo: 0, por: 'The whole speech, start to end: the base verb.' },
  { k: 'SAM', txt: 'Sam saw a man cross the street, from one side to the other, and get into a black car.', de: 0, ate: 100, ops: ['Sam saw a man cross the street.', 'Sam saw a man crossing the street.'], certo: 0, por: 'The whole action, both sides of the street: the base verb.' },
  { k: 'KAI', txt: 'Kai looked out of the window for one second. A car was going past.', de: 45, ate: 55, ops: ['Kai saw a car go past.', 'Kai saw a car going past.'], certo: 1, por: 'One second of something that was going on: -ing.' }
];

/* VIII · certo ou errado (FM.verdadeOuMentira) */
var TF_Q = { formato: 'verdadeOuMentira', rotulos: ['Right', 'Wrong'], titulo: 'Right or wrong? If it is wrong, say the fix.', itens: [
  { f: 'I heard someone to knock on the door.', t: false, c: 'I heard someone knocking (or knock) on the door.' },
  { f: 'We saw him leave the house.', t: true },
  { f: 'She listened the radio all night.', t: false, c: 'She listened to the radio all night.' },
  { f: 'We watched the sun go down.', t: true },
  { f: 'From my bed I could to hear the rain.', t: false, c: 'From my bed I could hear the rain.' },
  { f: 'Did you see the cat to jump through the window?', t: false, c: 'Did you see the cat jump through the window?' }
] };

var S = { i: 0, faixa: 1, fala: {}, resp: {}, armas: {},
  abre: { sel: -1, foi: {}, formas: {} }, ligue: { sel: -1, foi: {} },
  video: { p: 0, olho: 0 }, hist: { ouviu: 0 }, ln: { n: 0, q: 0, ouviu: 0, esc: {} } };

/* a onda do som (SVG): alturas fixas, iguais nos dois lados da sala */
var ONDA = [18, 34, 52, 28, 64, 40, 22, 58, 76, 44, 30, 62, 50, 24, 70, 36, 54, 20, 46, 66, 32, 56, 26, 48];
function onda(viva) {
  return '<svg class="onda' + (viva ? ' viva' : '') + '" viewBox="0 0 240 80" aria-hidden="true">' + ONDA.map(function (a, i) {
    return '<rect x="' + (i * 10 + 2) + '" y="' + (40 - a / 2) + '" width="6" height="' + a + '" rx="3" style="--d:' + (i % 6) * 0.12 + 's"/>'; }).join('') + '</svg>';
}
function mesa() {
  return '<div class="mesa-som vd"><div class="onair"><i></i>ON AIR</div><div class="vu">' + onda(1) + '</div>'
    + '<div class="faders">' + [62, 40, 78, 30, 55].map(function (v, i) { return '<span class="fd"><i style="bottom:' + v + '%"></i><small>' + ['MIC', 'L1', 'L2', 'L3', 'FX'][i] + '</small></span>'; }).join('') + '</div>'
    + '<div class="relogio"><b>3:33</b><small>AM · NIGHT CALLS</small></div></div>';
}
function linhasTel(n) {
  return '<div class="tel">' + LINHAS.map(function (x, i) { return '<span class="' + (i === n ? 'on' : i < n ? 'foi' : '') + '"><i></i>' + x.k + '<b>' + x.quem + '</b></span>'; }).join('') + '</div>';
}
function barra(x, mostrou) {
  return '<div class="barra-acao" aria-label="The bright part is what they saw"><span class="b-tudo"></span><span class="b-viu" style="left:' + x.de + '%;width:' + (x.ate - x.de) + '%"></span>'
    + '<small class="b-ini">START</small><small class="b-fim">END</small>' + (mostrou ? '<em class="b-rot">' + (x.ate - x.de === 100 ? 'ALL OF IT' : 'A PART OF IT') + '</em>' : '') + '</div>';
}

var R = {};
R.capa = function () {
  return '<div class="capa"><div><span class="kick">MAIN SERIES · B1 · NIGHT CALLS · HALLOWEEN</span><h1>I Heard Something <b>Moving</b></h1>'
    + '<p class="sub">It’s 3 AM, and the phone lines are open. <b>What did you hear?</b> What did you <b>see</b>?</p>'
    + '<div class="chipsx"><span class="pilula">heard someone walking</span><span class="pilula">saw him close the door</span><span class="pilula">no to, no that</span><span class="pilula">Live Class · W·O·L·F</span></div>'
    + '<button type="button" class="btn cheio" data-a="ir" data-n="1">Go on air</button>' + faixaLive() + '</div>'
    + '<div class="capa-d">' + mesa() + '</div></div>';
};

R.abre = function (c) {
  return cartasPessoais(c, ABRE, S.abre, 'abre') + '<div class="partes so-prof"><h5>WHAT YOU HEAR · DON’T CORRECT</h5>' + FORMAS.map(function (f) { return '<button type="button" class="chip frase' + (f.erro ? ' erro-ouvido' : '') + (S.abre.formas[f.k] ? ' on' : '') + '" data-a="ab-f" data-v="' + f.k + '">' + f.t + '</button>'; }).join('') + '</div>';
};

R.video = function (c) {
  var e = S.video, corpo;
  if (e.p === 0) corpo = '<div class="mesa-c"><div class="lado-l">' + FM.ex('va1', REACAO_H) + FM.ex('va2', REGUA_H) + '</div>'
    + '<div class="lado-l"><div class="selo-v vd"><b>SOUND FIRST</b><small>The picture stays covered. Close your eyes if you want. Then you watch it again with the picture.</small></div><div><button type="button" class="btn cheio" data-a="vd-p" data-n="1">Play: only the sound</button></div></div></div>';
  else if (e.p === 1) {
    corpo = '<div class="mesa-video"><div class="video-col"><div class="tampa-box' + (e.olho ? '' : ' tampada') + '">' + iframe(YT, 'A Quiet Place · official trailer')
      + (e.olho ? '' : '<div class="tampa" aria-hidden="true">' + onda(1) + '<b>LISTEN ONLY</b><small>Press play. The picture comes next.</small></div>') + '</div>'
      + '<small class="cred">A Quiet Place (2018) · official trailer · Paramount Pictures · tap ▶ to hear a line again</small></div><div class="lado-video">'
      + (e.olho ? FM.ex('vp', TF_IMG) + '<div><button type="button" class="btn" data-a="vd-p" data-n="2">After the video</button></div>'
        : FM.ex('vs', SOM_H) + fala('vdsom', ['I heard someone …-ing', 'I could hear …', 'It sounds like …'], ['the wind', 'footsteps', 'a radio', 'a whisper', 'a train']) + '<div><button type="button" class="btn" data-a="vd-olho">Now watch with the picture</button></div>')
      + '</div></div>';
  } else corpo = '<div class="pd-um">' + FM.ex('vl', SEPARA_H) + '</div><p class="aprova" style="text-align:center">You just used the rule of today’s lesson: I heard <b>someone talking</b>. I saw <b>them walking</b>. Now let’s look at it.</p>';
  return cab(c) + '<div class="tres-tempos">' + tempos3(e.p) + '</div>' + corpo;
};

R.regra = function (c) {
  return cab(c) + '<div class="fitas">' + FITAS.map(function (f) { return '<div class="fita vd"><small>' + f[0] + '</small><b>' + f[1] + '</b></div>'; }).join('') + '</div>'
    + FM.ex('rg', { formato: 'erro', titulo: 'Six lines are broken. Find the broken part. Say the fix.', itens: ERRO_H, regra: PRESA_H });
};

R.linhas = function (c) {
  var e = S.ln, n = e.n, fim = n >= LINHAS.length;
  if (fim) return cab(c) + linhasTel(n) + '<div class="foco"><div class="pergunta vd"><small>THREE CALLS</small><h2>A cat, a radio and the wind. Three scary nights, three silly answers. Your turn to call.</h2></div></div>';
  var x = LINHAS[n];
  var chamada = '<div class="ligacao vd"><div class="quem"><span class="led"></span><b>' + x.quem + '</b><small>' + x.hora + ' · ' + x.onde + '</small></div>'
    + (e.ouviu ? '<p class="fala-ouvinte">' + x.txt + '</p>' : '<p class="so-prof fala-ouvinte">' + x.txt + '</p><p class="dica-aluno escuta">' + onda(1) + '<span>Listen to the caller. Your teacher reads the call.</span></p><div class="so-prof"><button type="button" class="btn" data-a="ln-ouviu">Read it · show the call to the student</button></div>') + '</div>';
  var lado = e.ouviu ? FM.ex('ln' + n, LN_TF[n]) + '<div><button type="button" class="btn" data-a="ln-prox">' + (n < LINHAS.length - 1 ? 'Next caller' : 'End of the calls') + '</button></div>' : '<p class="dica-aluno">Listen to the call first.</p>';
  return cab(c) + linhasTel(n) + '<div class="mesa-c"><div class="lado-l">' + chamada + '</div><div class="lado-l">' + lado + '</div></div>';
};

R.historia = function (c) {
  var e = S.hist, texto = e.ouviu ? '<p class="fala-ouvinte">' + HIST.txt + '</p>'
    : '<p class="so-prof fala-ouvinte">' + HIST.txt + '</p><p class="dica-aluno escuta">' + onda(1) + '<span>Listen. Your teacher is the host now.</span></p><div class="so-prof"><button type="button" class="btn" data-a="hs-ouviu">Read it · show the text to the student</button></div>';
  return cab(c) + '<div class="mesa-c"><div class="lado-l"><div class="ligacao vd minuto"><div class="quem"><span class="led"></span><b>THE HISTORY MINUTE</b><small>STATION BREAK · 3:45 AM</small></div>' + texto + '</div></div>'
    + '<div class="lado-l hist-q">' + (e.ouviu ? FM.ex('hs', HIST_TF) : '<p class="dica-aluno">Listen first.</p>') + '</div></div>';
};

R.ligue = function (c) { return cartasPessoais(c, LIGUE, S.ligue, 'ligue', ['It was …', 'Yes, because …', 'No, I …']); };

R.porta = function (c) {
  return cab(c) + FM.ex('pt', { formato: 'escolhe', titulo: 'Read the sentence. Did the witness see all of it, or only a part?', itens: PORTA.map(function (x) {
    return { p: '<b>' + x.k + ':</b> “' + x.ops[x.certo] + '”', o: ['ALL of it · start to finish', 'A PART of it · still going on'], c: x.ate - x.de === 100 ? 0 : 1, d: x.por };
  }) });
};

R.quiz = function (c) {
  return cab(c) + '<div class="fm-com-regra"><div class="fm-mio">' + FM.ex('qz', TF_Q) + '</div>' + FM.regra(PRESA_H) + '</div>';
};

R.fim = function (c) {
  var f = S.abre.formas, lembra = FORMAS.filter(function (x) { return f[x.k]; }).map(function (x) { return x.t; });
  return cab(c) + '<div class="fim">' + escritaFinal('fim', (S.txt || {}).fim || '', (S.salvo || {}).fim, 'One night, I heard …\nThen I saw …\nIt was just …', 'Your call to Night Calls',
    ['I heard somebody ', 'I heard something ', 'I saw someone ', 'I could hear ', 'I watched ', 'It was just '], ['TOMORROW’S SHOW', lembra.length ? 'In scene I your teacher heard: ' + lembra.join(', ') + '. Now write your call: what you heard, what you saw, and what it really was.' : 'What you heard, what you saw, and what it really was. About 80 words.'])
    + '<div class="lado-fim">' + mesa() + '<div class="grande vd"><span>a part: <u>heard someone walking</u></span><span>all of it: <u>saw him close the door</u></span><span>never <s>to</s> · <s>he</s> · <s>-s</s> after the person</span></div>'
    + mostra('fim', 'One night last winter, I heard something moving in the kitchen. I could hear plates falling. I took my phone and I saw a shadow jump onto the fridge. I turned on the light and I saw my neighbor’s cat eating my dinner. It came in through the window!', 1)
    + '<p class="hw"><a class="pilula" href="HW/" target="_blank" rel="noopener">Homework for the student →</a></p></div></div>';
};

TOQUES['ab-f'] = function (b, n, v) { S.abre.formas[v] = !S.abre.formas[v]; };
TOQUES['vd-p'] = function (b, n) { S.video.p = n; };
TOQUES['vd-olho'] = function () { S.video.olho = 1; };
TOQUES['ln-ouviu'] = function () { S.ln.ouviu = 1; };
TOQUES['ln-prox'] = function () { S.ln = { n: S.ln.n + 1, q: 0, ouviu: 0, esc: S.ln.esc }; };
TOQUES['hs-ouviu'] = function () { S.hist.ouviu = 1; };
