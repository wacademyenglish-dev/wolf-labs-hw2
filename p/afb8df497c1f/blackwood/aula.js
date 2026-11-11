/* ============================================================
   BLACKWOOD · THE RECORDER · LIVE CLASS  06/10/2026
   Main series B1 · past continuous de fundo (trilha longa) + past simple
   do evento (o pino) · while + longa · when + curta · What were you
   doing when…? / What did you do?
   Erros universais: "It rained when we arrived" (fundo no simples),
   "while the engine stopped" (while + curta), "I was walk", "they was",
   "What you were doing?", "What did you doing?".
   O MUNDO (da aula velha, mantido inteiro): a rádio da madrugada de
   Blackwood, o gravador deixado numa cabana vazia, Ana, a coisa que
   COPIA O QUE OUVE e NÃO ABRE PORTA, o caderno de Halloran (1961), os
   quatro homens, as ligações da cidade, a última ligação na porta do
   estúdio. 18 vozes conferidas no whisper em 06/10: batem (v-11 conferida
   no modelo maior: "a night"); "torch" fica porque é o áudio. Os 6 sons
   têm descrição em vez de transcrição.
   A CARA: o GRAVADOR do caminhante — fita cassete com dois rolos que
   giram quando algo toca, contador de fita, e a FITA DE DUAS TRILHAS: a
   trilha longa azul (was -ing) e o pino vermelho (o evento) que cai
   dentro dela. Fria, verde-floresta e cinza-chuva.
   Fila: FILA-LIVE-386.md · 083.
   ============================================================ */
var L = [
  { k: 'capa', est: null, img: 'cabana' },
  { k: 'velas', est: 'o', min: 7, img: 'sala', rot: 'I · Four Candles', t: 'Before the tapes: four candles, four questions about your own nights.', p: 'Answer out loud. Your teacher taps your kind of answer, then asks the follow-up.' },
  { k: 'fita1', est: 'l', min: 7, img: 'estrada', rot: 'II · Tape 1 · The Road', t: 'A hiker left a recorder at the radio station. It was found in an empty cabin in the forest.', p: 'Play the tape, track by track. Then tell it back with the six words.' },
  { k: 'gx', est: 'f', min: 4, img: 'estrada', rot: 'III · Long Track, Red Pin', t: 'Where does each sentence live on the tape?', p: 'Tap a sentence, then its place on the line. Notice the verbs. Then say two lines about you.' },
  { k: 'duas', est: 'f', min: 6, img: 'estrada', rot: 'IV · Two Tracks', t: 'Three sentences from Tape 1. Which part is the long track, and which is the red pin?', p: 'Read each sentence out loud. Then answer.' },
  { k: 'regra', est: 'f', min: 6, img: 'portacab', rot: 'V · The Rule on the Door', t: 'Someone carved two rules into the cabin door.', p: 'Play the door. Read our rule out loud. Then fix the four traps.' },
  { k: 'pinos', est: 'o', min: 7, img: 'estrada', rot: 'VI · The Tape', t: 'Five moments from the tapes and from tonight. Say each one with two tracks.', p: 'Say the sentence. Your teacher taps what you said, the pin drops, and you say it again starting with While.' },
  { k: 'homens', est: 'l', min: 7, img: 'caderno', rot: 'VII · Tape 2 · Four Men', t: 'A metal box in the cabin, and a notebook from 1961.', p: 'Play each man. Say what he was doing when it happened. Then guess: did he open the door?' },
  { k: 'linhas', est: 'o', min: 7, extra: 1, img: 'rua', rot: 'VIII · The Call Board', t: 'The tapes are on air, and the phones start ringing.', p: 'Your teacher is the caller. Ask two questions: what they were doing, and what they did.' },
  { k: 'fita3', est: 'l', min: 7, extra: 1, img: 'sala', rot: 'IX · Tape 3 · The Voice', t: 'The last tape from the cabin. Recorded at four in the morning.', p: 'Play the six tracks in order. Then tell what happened, with two tracks.' },
  { k: 'ultima', est: 'o', min: 7, extra: 1, img: 'estudio', rot: 'X · The Last Call', t: '5:40 AM. Line 6 has no name.', p: 'Your teacher reads each part slowly. Answer the question after each one. Then decide.' },
  { k: 'seu', est: 'o', min: 7, extra: 1, img: 'telefone', rot: 'XI · Your Strangest Night', t: 'Now you are the caller. Pick a night from your own life and tell it.', p: 'Your story needs three things: a long track, a pin with when, and a while.' },
  { k: 'fala', est: 'o', min: 7, extra: 1, img: 'amanhecer', rot: 'XII · On Air', t: 'The sun is up. Four last messages from the listeners.', p: 'Answer each one. The last one is a swap: you ask your teacher.' },
  { k: 'fim', est: 'w', min: 6, img: 'amanhecer', rot: 'XIII · Sign Off', t: '6:00 AM. Write the next call to Blackwood Night Radio.', p: 'Your own strange night, with two tracks. It goes to your My notes.' }
];

var TR = {
  'v-01.mp3': 'We were driving north. It was Friday night and the rain was falling hard when the engine stopped.',
  'v-02.mp3': 'We found dry wood and made a fire. For half an hour it was warm, and it was almost funny. Ana was laughing at her phone. “You have to see this!”',
  'v-03.mp3': 'Someone carved words into the wood, years ago. Copies what it hears. Cannot open a door. Two rules, cut with a knife.',
  'v-04.mp3': 'The metal box was not locked. Inside: a watch, two photographs, and a notebook. The man who wrote it was called Halloran.',
  'v-10.mp3': 'Halloran wrote down what the others said before they left.',
  'v-05a.mp3': 'The fire was out and the room was black. I was looking for the torch when I heard Ana call my name from outside.',
  'v-05b.mp3': 'I turned. Ana was asleep on the floor, next to me.',
  'v-06.mp3': 'The calling stopped at 5:40. Then a new sound. Someone was turning the handle. Slowly. It cannot open a door. Someone must open it.',
  'v-07.mp3': 'The handle stopped at 5:52. Eight minutes later, the sky turned gray.',
  'v-08.mp3': 'The sun came up. The door was closed. But something in the cabin felt used.',
  'v-09.mp3': 'At 5:51 it stopped asking. It waited. Then it spoke again, and it was your voice.',
  'v-11.mp3': 'You survived a night that never happened. Halloran never existed. The cabin is not there.',
  'v-ana-real.mp3': 'You have to see this!', 'v-ana.mp3': 'Come outside. I found the road.',
  'v-bell.mp3': 'It was my brother. I know his voice.', 'v-dunn.mp3': 'Somebody out there is hurt. We cannot just sit here.',
  'v-marquez.mp3': 'I am not going out. Not for anyone. Not for anything.', 'v-halloran.mp3': 'I nailed the door shut, and I am writing this down.',
  'sfx-knock.mp3': '[sound] Three slow, heavy knocks on the door, from the outside.',
  'sfx-steps-near.mp3': '[sound] Slow footsteps on wet gravel outside the cabin. Heavy rain.',
  'sfx-window.mp3': '[sound] The footsteps stop. Breath, very close to the window glass.',
  'sfx-steps-away.mp3': '[sound] The same footsteps, moving away into the rain.',
  'sfx-handle.mp3': '[sound] An old handle turning very slowly from the outside. It never opens.'
};

var VELAS = [
  { q: 'When did you last hear a sound at night that you couldn’t explain?', ops: ['RECENTLY', 'YEARS AGO', 'NEVER'], fup: ['What were you doing when you heard it?', 'Where were you living at that time?', 'What were you doing last night at midnight?'] },
  { q: 'Have you ever been lost somewhere at night?', ops: ['YES', 'ALMOST', 'NO'], fup: ['Where were you going when you got lost?', 'What were you doing when you realized?', 'What do you do when your phone has no signal?'] },
  { q: 'Do you listen to the radio or to podcasts at night?', ops: ['YES', 'SOMETIMES', 'NO'], fup: ['What were you listening to last time?', 'Where were you when you last listened?', 'What do you listen to when you can’t sleep?'] },
  { q: 'Are you a person who gets scared easily?', ops: ['YES', 'IT DEPENDS', 'NOT AT ALL'], fup: ['What were you watching the last time you got really scared?', 'What scares you at night, but not during the day?', 'What were you doing the last time your heart was beating fast?'] }
];

var FITA1 = { faixas: [['v-01.mp3', 'TRACK 1 · THE ROAD'], ['v-02.mp3', 'TRACK 2 · THE FIRE'], ['v-ana-real.mp3', 'TRACK 3 · ANA'], ['sfx-knock.mp3', 'TRACK 4 · ???']], pistas: ['driving north', 'the rain', 'the engine', 'a fire', 'Ana’s phone', 'three knocks'],
  perguntas: [['What were they doing when the engine stopped?', 'And what was the weather doing?'], ['What was Ana doing when the knocks came?', 'Say it with while: While Ana was…'], ['Who knocks on a door in a forest, at night, in the rain?', 'What would you do?']] };
var FITA3 = { faixas: [['v-05a.mp3', 'TRACK 1 · THE DARK'], ['v-ana.mp3', 'TRACK 2 · OUTSIDE'], ['sfx-steps-near.mp3', 'TRACK 3 · ???'], ['sfx-window.mp3', 'TRACK 4 · ???'], ['sfx-steps-away.mp3', 'TRACK 5 · ???'], ['v-05b.mp3', 'TRACK 6 · INSIDE']], pistas: ['the fire was out', 'the torch', 'Ana’s voice', 'footsteps', 'the window', 'Ana on the floor'],
  perguntas: [['What was he doing when he heard Ana outside?', 'Say it with when.'], ['Where was Ana while the voice was calling?', 'Say it with while.'], ['What was happening outside while he was listening?', 'Why didn’t the thing come in?']] };

var DUAS = [
  { f: 'We were driving north when the engine stopped.', q: 'Which part is the long action?', op: ['we were driving north', 'the engine stopped'], nao: 'The engine stopped in one second. The drive took hours: that is the long track.', sim: 'We were driving north is the long track. The engine stopped is the pin.' },
  { f: 'While Ana was laughing at her phone, somebody knocked.', q: 'What comes right after while?', op: ['the long action', 'the short event'], nao: 'Look again: while Ana was laughing. The knock is the short one.', sim: 'While opens the long track.' },
  { f: 'The rain was falling when we found the cabin.', q: 'What comes right after when?', op: ['the short event', 'the long action'], nao: 'Look again: when we found. Finding the cabin happened at one moment.', sim: 'When goes with the pin.' }
];

var ARMAS = [
  ['THE BACKGROUND IS LONG', 'It rained when we found the cabin.', 'It was raining when we found the cabin.', 'The rain was already there: the long track.'],
  ['WHILE + THE LONG ONE', 'While the engine stopped, we were driving.', 'While we were driving, the engine stopped.', 'The engine is a pin. While goes with the track.'],
  ['THE WHOLE FORM', 'They was sit by the fire.', 'They were sitting by the fire.', 'were for they / we / you, and -ing on the verb.'],
  ['THE QUESTION', 'What you were doing?', 'What were you doing?', 'The helper jumps first. And then: What did you do?']
];

var PINOS = [
  { quem: 'TAPE 1 · FRIDAY, 11 PM', longa: 'we / drive north', curta: 'the engine / stop', ok: 'We were driving north when the engine stopped.', vira: 'While we were driving north, the engine stopped.', trap: [['We drove north when the engine was stopping.', 'trocou'], ['We was driving north when the engine stopped.', 'eram']] },
  { quem: 'TAPE 1 · MIDNIGHT', longa: 'Ana / laugh at her phone', curta: 'somebody / knock three times', ok: 'Ana was laughing at her phone when somebody knocked three times.', vira: 'While Ana was laughing at her phone, somebody knocked three times.', trap: [['Ana laughed at her phone when somebody was knocking three times.', 'trocou'], ['Ana was laugh at her phone when somebody knocked three times.', 'forma']] },
  { quem: 'HALLORAN · 1961', longa: 'Halloran / write in his notebook', curta: 'Bell / open the door', ok: 'Halloran was writing in his notebook when Bell opened the door.', vira: 'While Halloran was writing in his notebook, Bell opened the door.', trap: [['Halloran wrote in his notebook when Bell opened the door.', 'simples'], ['Halloran was writing in his notebook while Bell opened the door.', 'whilepin']] },
  { quem: 'TAPE 3 · 4:11 AM', longa: 'Ana / sleep next to me', curta: 'the voice / call my name', ok: 'Ana was sleeping next to me when the voice called my name.', vira: 'While Ana was sleeping next to me, the voice called my name.', trap: [['Ana slept next to me when the voice called my name.', 'simples'], ['Ana were sleeping next to me when the voice called my name.', 'eram']] },
  { quem: 'YOU · 3:07 AM TONIGHT', longa: 'you / play the tapes on air', curta: 'the phone lines / light up', ok: 'You were playing the tapes on air when the phone lines lit up.', vira: 'While you were playing the tapes on air, the phone lines lit up.', trap: [['You played the tapes on air when the phone lines were lighting up.', 'trocou'], ['You was playing the tapes on air when the phone lines lit up.', 'eram']] }
];
var NOTA = { trocou: 'The tracks are swapped: the long one is -ing, the pin is the past simple.', eram: 'was for I / he / she / it; were for we / you / they.', simples: 'The background was already happening: was / were + -ing.', whilepin: 'While goes with the long track. The pin takes when.', forma: 'The whole form: was + verb-ING.' };

var HOMENS = [
  { nome: 'BELL', au: 'v-bell.mp3', longa: 'Bell / sit by the fire', curta: 'he / hear his brother outside', ok: 'Bell was sitting by the fire when he heard his brother outside.', fez: 'fora', fim: 'He opened the door. He never came back.' },
  { nome: 'DUNN', au: 'v-dunn.mp3', longa: 'Dunn / watch the window', curta: 'he / hear someone crying', ok: 'Dunn was watching the window when he heard someone crying.', fez: 'fora', fim: 'He went out to help. He never came back.' },
  { nome: 'MARQUEZ', au: 'v-marquez.mp3', longa: 'Marquez / hold the door', curta: 'the voices / start', ok: 'Marquez was holding the door when the voices started.', fez: 'dentro', fim: 'He stayed inside. He was there in the morning.' },
  { nome: 'HALLORAN', au: 'v-halloran.mp3', longa: 'Halloran / write in his notebook', curta: 'the others / leave', ok: 'Halloran was writing in his notebook when the others left.', fez: 'dentro', fim: 'He nailed the door shut and wrote everything down.' }
];

var LINHAS = [
  { n: 'LINE 2', quem: 'A TAXI DRIVER', onde: 'THE OLD BRIDGE · 3:12 AM', fato: 'heard my wife calling from the river', ideia: 'I was waiting for a customer on the bridge when I heard my wife calling my name from the river. I called her on the phone. She was sleeping at home.' },
  { n: 'LINE 3', quem: 'A NURSE', onde: 'BLACKWOOD HOSPITAL · 3:16 AM', fato: 'heard three knocks from an empty room', ideia: 'I was writing my notes when the old radio in room 9 turned on. It was playing your show. Then somebody knocked three times on the door of room 9. Room 9 is empty.' },
  { n: 'LINE 4', quem: 'A HOTEL GUEST', onde: 'THE PINE HOTEL · 3:20 AM', fato: 'heard my mother at my door', ideia: 'I was trying to sleep when someone knocked and said my name in my mother’s voice. My mother lives in another country. I didn’t open the door.' },
  { n: 'LINE 5', quem: 'A MAN AT THE BUS STOP', onde: 'OUTSIDE THE STATION · 3:24 AM', fato: 'saw someone at your studio door', ideia: 'I was waiting for the night bus when I looked up at your window. You were sitting at the microphone. And somebody was standing at your door, very close, listening.' }
];

var ULTIMA = [
  { rot: 'THE STAIRS', au: [], txt: 'Good evening, Blackwood. I heard your show tonight. I heard every tape. While you were playing them, I was walking up the stairs of your building.', q: 'Where was the caller while you were playing the tapes?' },
  { rot: 'THE DOOR', au: ['sfx-handle.mp3', 'v-06.mp3'], txt: 'A handle turns, very slowly, at the studio door.', q: 'What was happening at your door while the tape was playing?' },
  { rot: 'THE VOICE', au: ['v-09.mp3'], txt: 'Teacher, in your student’s voice: “It’s me. Open the door.”', q: 'Whose voice was it? What were you doing when you heard it?' }
];
var FINAIS = {
  a: { rot: 'OPEN THE DOOR', au: [], txt: 'You opened the door. The corridor was empty. You went back to the microphone. From that night on, Blackwood Night Radio had a new voice, and it sounded exactly like you.' },
  b: { rot: 'KEEP IT CLOSED', au: ['v-07.mp3', 'v-08.mp3'], txt: 'The handle stopped at 5:52. Eight minutes later the sky turned gray. The sun came up. The door was closed. But something in the studio felt used.' }
};

var TEMAS = [['A POWER CUT', 'Tell us about a time the lights went out. What were you doing?'], ['A NOISE AT NIGHT', 'Tell us about a sound you heard at night. Where were you?'], ['LOST SOMEWHERE', 'Tell us about a time you got lost. Where were you going?'], ['A STRANGE COINCIDENCE', 'Tell us about a strange coincidence. What were you doing when it happened?']];
var PARTES = [['longa', 'A LONG TRACK · WAS -ING'], ['when', 'A PIN WITH WHEN'], ['while', 'A WHILE']];
var FALA = [
  ['Would you open the door of a cabin at night, if you heard a friend’s voice?', 'What were you thinking when you decided?'],
  ['Do you prefer scary stories on the radio, in a book, or in a film?', 'Why?'],
  ['What were you doing when you heard some big news?', 'Who told you?'],
  ['Swap. Call your teacher’s show and ask two questions: What were you doing when…?', 'Now one with while.']
];

var S = { i: 0, faixa: 1, fala: {}, resp: {}, armas: {},
  vl: { n: 0, esc: {} }, d: { n: 0, esc: -1 }, pn: { n: 0, esc: '', vira: 0 }, hm: { n: 0, falou: {}, palpite: {} }, ln: { sel: 0, partes: {} }, ul: { n: 0, fim: '' }, seu: { tema: -1, partes: {} }, fl: { n: 0 } };

function gravador(contador, toca) {
  var roda = function (cx) { return '<g class="rolo' + (toca ? ' gira' : '') + '" style="transform-origin:' + cx + 'px 112px"><circle cx="' + cx + '" cy="112" r="38" class="rolo-f"/><circle cx="' + cx + '" cy="112" r="12" class="rolo-c"/>' + [0, 60, 120, 180, 240, 300].map(function (a) { var r = a * Math.PI / 180; return '<line x1="' + cx + '" y1="112" x2="' + (cx + Math.cos(r) * 12).toFixed(1) + '" y2="' + (112 + Math.sin(r) * 12).toFixed(1) + '" class="raio"/>'; }).join('') + '</g>'; };
  return '<svg class="gravador" viewBox="0 0 420 240" role="img" aria-label="The recorder"><rect x="10" y="20" width="400" height="200" rx="18" class="corpo-g"/><rect x="40" y="52" width="340" height="120" rx="10" class="janela-g"/>'
    + '<path d="M120 150 L300 150" class="fita-g"/>' + roda(130) + roda(290)
    + '<rect x="160" y="182" width="100" height="26" rx="4" class="contador"/><text x="210" y="201" text-anchor="middle" class="contador-t">' + contador + '</text>'
    + '<circle cx="372" cy="194" r="7" class="led-g' + (toca ? ' on' : '') + '"/><text x="44" y="42" class="marca-g">FOUND IN AN EMPTY CABIN</text></svg>';
}
function duasTrilhas(longa, curta, caiu) {
  return '<div class="duas-trilhas"><div class="trilha-l"><span>' + longa + '</span>' + (caiu ? '<i class="pino caiu"><b>' + curta + '</b></i>' : '') + '</div>' + (caiu ? '' : '<div class="pino solto"><b>' + curta + '</b></div>') + '</div>';
}
function faixas(lista) {
  return '<div class="faixas">' + lista.map(function (f, i) { return '<div class="faixa-t vd"><div class="toca-linha">' + tocar(f[0]) + '<b>' + f[1] + '</b></div>' + transcricao(f[0], TR[f[0]]) + '</div>'; }).join('') + '</div>';
}
function algumTocando() { try { for (var k in SONS) if (SONS[k] && !SONS[k].paused) return true; } catch (e) {} return false; }

var R = {};
R.capa = function () {
  return '<div class="capa"><div class="lado-a"><span class="kick">MAIN SERIES · B1 · BLACKWOOD NIGHT RADIO · 88.1 · 3:07 AM</span><h1>Black<b>wood</b></h1>'
    + '<p class="sub">“We <u>were driving</u> north <u>when</u> the engine <u>stopped</u>.”</p>'
    + '<div class="chipsx"><span class="pilula">was / were + -ing</span><span class="pilula">when + the pin</span><span class="pilula">while + the long track</span><span class="pilula">Live Class · W·O·L·F</span></div>'
    + '<button type="button" class="btn cheio" data-a="ir" data-n="1">Press play</button>' + faixaLive() + '</div>'
    + '<div class="capa-d">' + gravador('03:07', 1) + '</div></div>';
};

R.velas = function (c) {
  var e = S.vl, n = Math.min(e.n, VELAS.length - 1), x = VELAS[n], esc = e.esc[n];
  return cab(c) + '<div class="mesa-c"><div class="lado-l"><div class="velas">' + VELAS.map(function (v, i) { var apagada = e.esc[i] !== undefined; return '<div class="vela' + (apagada ? ' apagada' : '') + (i === n ? ' agora' : '') + '"><i class="chama"></i><span></span><small>' + (i + 1) + '</small></div>'; }).join('') + '</div></div>'
    + '<div class="lado-l"><div class="pergunta vd ja"><small>CANDLE ' + (n + 1) + ' OF 4</small><h2>' + x.q + '</h2></div><div class="tres-b so-prof">' + x.ops.map(function (o, i) { return '<button type="button" class="chip' + (esc === i ? ' on' : '') + '" data-a="vl" data-n="' + i + '">' + o + '</button>'; }).join('') + '</div>'
    + (esc !== undefined ? '<div class="pede vd"><small>FOLLOW-UP</small><b>' + x.fup[esc] + '</b></div>' + fala('vl' + n, ['I was … when …'], ['I was …-ing', 'when', 'while']) : '')
    + (esc !== undefined ? (n < VELAS.length - 1 ? '<div><button type="button" class="btn" data-a="vl-prox">Blow out the candle</button></div>' : '<p class="aprova">Four candles out. The studio is dark. The red light comes on.</p>') : '') + '</div></div>';
};

function rFita(c, F, nome) {
  return cab(c) + '<div class="mesa-c"><div class="lado-l">' + (F.faixas.length < 5 ? gravador('11:00', algumTocando()) : '') + faixas(F.faixas) + '</div>'
    + '<div class="lado-l"><h5 class="rot-ouve">TELL IT BACK WITH THESE SIX</h5><div class="tres-b">' + F.pistas.map(function (p) { return '<span class="pilula">' + p + '</span>'; }).join('') + '</div>'
    + F.perguntas.map(function (q, i) { return '<div class="pede vd"><small>QUESTION ' + (i + 1) + '</small><b>' + q[0] + '</b><em>' + q[1] + '</em></div>'; }).join('') + '</div></div>';
}
R.fita1 = function (c) { return rFita(c, FITA1, 'fita1'); };
R.fita3 = function (c) { return rFita(c, FITA3, 'fita3'); };

R.duas = function (c) {
  var e = S.d, n = e.n, fim = n >= DUAS.length;
  if (fim) return cab(c) + trilha(DUAS, n) + '<div class="foco">' + duasTrilhas('was / were + -ing', 'the past simple', 1) + '<div class="pergunta vd"><small>THE SHAPE</small><h2>While + the long track. When + the pin.</h2></div></div>';
  var x = DUAS[n], ok = e.esc === 0;
  return cab(c) + trilha(DUAS, n) + '<div class="foco"><div class="balao vd"><p>' + x.f + '</p></div><div class="pergunta vd ja"><h2>' + x.q + '</h2></div><div class="tres-b centro">'
    + x.op.map(function (o, i) { return '<button type="button" class="pilula grande-p' + (e.esc === i ? (ok ? ' certo' : ' errado') : '') + '" data-a="d" data-n="' + i + '">' + o + '</button>'; }).join('') + '</div>'
    + (ok ? '<p class="aprova" style="text-align:center">' + x.sim + '</p><div style="text-align:center"><button type="button" class="btn" data-a="d-prox">Next sentence</button></div>' : e.esc === 1 ? '<p class="recusa" style="text-align:center">' + x.nao + '</p>' : '') + '</div>';
};

R.regra = function (c) {
  return cab(c) + '<div class="mesa-c"><div class="lado-l"><div class="porta-g vd"><div class="toca-linha">' + tocar('v-03.mp3') + '<b>THE CABIN DOOR</b></div><p class="entalhe">COPIES WHAT IT HEARS.<br>CANNOT OPEN A DOOR.</p>' + transcricao('v-03.mp3', TR['v-03.mp3']) + '</div></div>'
    + '<div class="lado-l">' + duasTrilhas('the long track: was / were + -ing', 'the pin: past simple', 1) + '<p class="dica-aluno">While + the track · when + the pin. The question too: What were you doing when…? What did you do?</p></div></div>'
    + armas(ARMAS, 'THE TRAPS · SAY IT RIGHT, THEN TAP');
};

R.pinos = function (c) {
  var e = S.pn, n = e.n, fim = n >= PINOS.length;
  if (fim) return cab(c) + trilha(PINOS, n) + '<div class="foco"><div class="pergunta vd"><small>FIVE MOMENTS</small><h2>Every pin is inside a track, and the last one is inside your studio.</h2></div></div>';
  var x = PINOS[n], esc = e.esc, ok = esc === 'ok', ops = ordem([[x.ok, 'ok'], [x.trap[0][0], x.trap[0][1]], [x.trap[1][0], x.trap[1][1]]], n + 5);
  return cab(c) + trilha(PINOS, n) + '<div class="mesa-c"><div class="lado-l"><div class="pede vd"><small>' + x.quem + '</small><b>' + x.longa + ' · ' + x.curta + '</b></div>' + duasTrilhas(x.longa, x.curta, ok) + '</div>'
    + '<div class="lado-l"><h5 class="so-prof rot-ouve">TAP THE VERSION YOU HEARD</h5>' + (ok ? '<div class="balao vd"><p>' + x.ok + '</p></div>' + (e.vira ? '<div class="balao vd while-b"><small>NOW WITH WHILE</small><p>' + x.vira + '</p></div><div><button type="button" class="btn" data-a="pn-prox">Next moment</button></div>' : '<div><button type="button" class="btn cheio" data-a="pn-vira">Say it again with While</button></div>')
      : '<div class="versoes">' + ops.map(function (o) { return '<button type="button" class="versao' + (esc === o[1] ? ' errado' : '') + '" data-a="pn" data-v="' + o[1] + '">' + o[0] + '</button>'; }).join('') + '</div>' + (esc ? '<p class="recusa">' + NOTA[esc] + '</p>' : '')) + '</div></div>';
};

R.homens = function (c) {
  var e = S.hm, n = Math.min(e.n, HOMENS.length - 1), x = HOMENS[n], falou = e.falou[n], pal = e.palpite[n];
  return cab(c) + trilha(HOMENS, e.n) + '<div class="mesa-c"><div class="lado-l"><div class="pede vd"><small>HALLORAN’S NOTEBOOK · 1961</small><b>Four men stayed in the cabin. Two opened the door.</b></div>' + faixas([['v-04.mp3', 'THE METAL BOX'], ['v-10.mp3', 'THE NOTEBOOK']]) + '<div class="homens-l">' + HOMENS.map(function (h, i) { var p = e.palpite[i]; return '<span class="' + (p ? (h.fez === 'fora' ? 'fora' : 'dentro') : '') + (i === n ? ' agora' : '') + '">' + h.nome + (p ? (h.fez === 'fora' ? ' · OPENED' : ' · STAYED') : '') + '</span>'; }).join('') + '</div></div>'
    + '<div class="lado-l"><div class="homem vd"><div class="toca-linha">' + tocar(x.au) + '<b>' + x.nome + '</b></div>' + transcricao(x.au, TR[x.au]) + '</div><div class="pede vd"><small>SAY IT WITH TWO TRACKS</small><b>' + x.longa + ' · ' + x.curta + '</b></div>'
    + (falou ? '<div class="balao vd"><p>' + x.ok + '</p></div><h5 class="rot-ouve">GUESS: DID HE OPEN THE DOOR?</h5><div class="tres-b">' + [['fora', 'HE OPENED THE DOOR'], ['dentro', 'HE STAYED INSIDE']].map(function (o) { return '<button type="button" class="pilula grande-p' + (pal === o[0] ? (pal === x.fez ? ' certo' : ' errado') : '') + '" data-a="hm-p" data-v="' + o[0] + '">' + o[1] + '</button>'; }).join('') + '</div>' : '<div><button type="button" class="chip so-prof" data-a="hm-f">Answered</button></div>')
    + (pal ? '<p class="' + (pal === x.fez ? 'aprova' : 'recusa') + '">The notebook says: ' + x.fim + '</p>' + (n < HOMENS.length - 1 ? '<div><button type="button" class="btn" data-a="hm-prox">Next man</button></div>' : '<p class="aprova">Two men opened the door and never came back. It cannot open a door. Someone must open it.</p>') : '') + '</div></div>';
};

R.linhas = function (c) {
  var e = S.ln, x = LINHAS[e.sel], p = e.partes[e.sel] || {};
  return cab(c) + '<div class="mesa-c"><div class="lado-l"><div class="painel-l">' + LINHAS.map(function (l, i) { var f = (e.partes[i] || {}); return '<button type="button" class="linha-b' + (e.sel === i ? ' on' : '') + (f.w && f.d ? ' feita' : '') + '" data-a="ln" data-n="' + i + '"><i></i><b>' + l.n + '</b><small>' + l.quem + '</small></button>'; }).join('') + '</div></div>'
    + '<div class="lado-l"><div class="pede vd"><small>' + x.n + ' · ' + x.onde + '</small><b>“I ' + x.fato + '.”</b></div>' + fala('ln' + e.sel, ['What were you doing when …?', 'What did you do?'], ['What were you doing…?', 'What did you do?', 'while'])
    + '<h5 class="so-prof rot-ouve">WHAT YOU HEARD</h5><div class="tres-b so-prof"><button type="button" class="chip' + (p.w ? ' on' : '') + '" data-a="ln-p" data-v="w">WHAT WERE YOU DOING?</button><button type="button" class="chip' + (p.d ? ' on' : '') + '" data-a="ln-p" data-v="d">WHAT DID YOU DO?</button></div>'
    + '<p class="so-prof dica-aluno">The caller answers: “' + x.ideia + '”</p></div></div>';
};

R.ultima = function (c) {
  var e = S.ul, n = e.n;
  if (n < ULTIMA.length) {
    var x = ULTIMA[n];
    return cab(c) + trilha(ULTIMA.concat([{}]), n) + '<div class="mesa-c"><div class="lado-l"><div class="aberta vd escura" style="background-image:url(' + img('estudio') + ')"><span>LINE 6 · NO NAME · 5:40 AM</span></div>' + (x.au.length ? faixas(x.au.map(function (a) { return [a, a.indexOf('sfx') === 0 ? 'THE SOUND' : 'THE TAPE']; })) : '') + '</div>'
      + '<div class="lado-l"><div class="parte-u vd"><small>PART ' + (n + 1) + ' · ' + x.rot + '</small><p>' + x.txt + '</p></div>'
      + '<div class="pergunta vd ja"><h2>' + x.q + '</h2></div>' + fala('ul' + n, ['I was …-ing when …'], ['while', 'when', 'was -ing']) + '<div><button type="button" class="btn" data-a="ul-prox">Next part</button></div></div></div>';
  }
  var f = e.fim ? FINAIS[e.fim] : null;
  return cab(c) + trilha(ULTIMA.concat([{}]), n) + '<div class="mesa-c"><div class="lado-l"><div class="aberta vd escura" style="background-image:url(' + img('estudio') + ')"><span>THE CHAIR · YOU ARE LIVE ON AIR</span></div>' + (f ? (f.au.length ? faixas(f.au.map(function (a) { return [a, 'THE TAPE']; })) : '') + faixas([['v-11.mp3', 'THE LAST TRACK ON THE RECORDER']]) : '') + '</div>'
    + '<div class="lado-l"><div class="pergunta vd ja"><small>PART 4 · THE CHAIR</small><h2>Do you open the studio door?</h2></div>'
    + (f ? '<div class="parte-u vd"><small>' + f.rot + '</small><p>' + f.txt + '</p></div><p class="aprova">6:00 AM. Blackwood Night Radio is off air.</p>'
      : '<div class="dois-l"><button type="button" class="lado-btn" data-a="ul-f" data-v="a"><b>OPEN THE DOOR</b></button><button type="button" class="lado-btn" data-a="ul-f" data-v="b"><b>KEEP IT CLOSED</b></button></div>') + '</div></div>';
};

R.seu = function (c) {
  var e = S.seu, todas = PARTES.every(function (p) { return e.partes[p[0]]; });
  return cab(c) + '<div class="mesa-c"><div class="lado-l"><h5 class="rot-ouve">PICK A NIGHT</h5><div class="versoes">' + TEMAS.map(function (t, i) { return '<button type="button" class="versao' + (e.tema === i ? ' certo' : '') + '" data-a="se-t" data-n="' + i + '"><b>' + t[0] + '</b> · ' + t[1] + '</button>'; }).join('') + '</div></div>'
    + '<div class="lado-l">' + fala('seu', ['I was …-ing when …', 'While I was …, …'], ['was / were + -ing', 'when', 'while', 'What did you do?'])
    + '<h5 class="so-prof rot-ouve">TAP WHAT YOU HEAR · THE TAPE NEEDS ALL THREE</h5><div class="tres-b so-prof">' + PARTES.map(function (p) { return '<button type="button" class="chip' + (e.partes[p[0]] ? ' on' : '') + '" data-a="se-p" data-v="' + p[0] + '">' + p[1] + '</button>'; }).join('') + '</div>'
    + '<div class="pecas-g">' + PARTES.map(function (p) { return '<span class="' + (e.partes[p[0]] ? 'on' : '') + '">' + p[1] + '</span>'; }).join('') + '</div>' + (todas ? '<p class="aprova">A true story, on air. Blackwood is listening.</p>' : '') + '</div></div>';
};

R.fala = function (c) {
  var e = S.fl, n = Math.min(e.n, FALA.length - 1), x = FALA[n];
  return cab(c) + trilha(FALA, e.n) + '<div class="mesa-c"><div class="lado-l"><div class="aberta vd" style="background-image:url(' + img('amanhecer') + ')"><span>LISTENERS’ MESSAGES · THE TOWN WAKES UP</span></div></div>'
    + '<div class="lado-l"><div class="pergunta vd ja"><small>MESSAGE ' + (n + 1) + ' OF 4</small><h2>' + x[0] + '</h2></div>' + fala('fl' + n, ['I was … when …'], ['was / were + -ing', 'when', 'while']) + '<p class="dica-aluno">Follow-up: ' + x[1] + '</p>'
    + (n < FALA.length - 1 ? '<div><button type="button" class="btn" data-a="fl-prox">Next message</button></div>' : '<p class="aprova">The listeners know you now.</p>') + '</div></div>';
};

R.fim = function (c) {
  return cab(c) + '<div class="fim">' + escritaFinal('fim', (S.txt || {}).fim || '', (S.salvo || {}).fim, 'Hello, Blackwood. Last night I was … when …\nWhile I was …, …', 'Your call to Blackwood',
    ['I was ', ' when ', 'While I was ', 'were ', 'What did you do?'], ['THE NEXT CALL TO BLACKWOOD NIGHT RADIO', 'Your strangest night: a long track, a pin with when, and a while.'])
    + '<div class="lado-fim">' + gravador('06:00', 0) + '<div class="grande vd"><span>I <u>was reading</u> the last message</span><span><u>when</u> the sun <u>came up</u>.</span><span><u>While</u> + the long track · <u>when</u> + the pin</span></div>'
    + mostra('fim', 'Hello, Blackwood. Last winter I was walking home from work when all the lights in my street went out.<br>While I was looking for my phone, somebody said my name behind me. I turned around. Nobody was there.', 1)
    + '<p class="hw"><a class="pilula" href="HW/" target="_blank" rel="noopener">Homework for the student →</a></p></div></div>';
};

TOQUES.vl = function (b, n) { S.vl.esc[Math.min(S.vl.n, VELAS.length - 1)] = n; };
TOQUES['vl-prox'] = function () { S.vl.n++; };
TOQUES.d = function (b, n) { S.d.esc = n; };
TOQUES['d-prox'] = function () { S.d = { n: S.d.n + 1, esc: -1 }; };
TOQUES.pn = function (b, n, v) { S.pn.esc = v; };
TOQUES['pn-vira'] = function () { S.pn.vira = 1; };
TOQUES['pn-prox'] = function () { S.pn = { n: S.pn.n + 1, esc: '', vira: 0 }; };
TOQUES['hm-f'] = function () { S.hm.falou[Math.min(S.hm.n, HOMENS.length - 1)] = 1; };
TOQUES['hm-p'] = function (b, n, v) { S.hm.palpite[Math.min(S.hm.n, HOMENS.length - 1)] = v; };
TOQUES['hm-prox'] = function () { S.hm.n++; };
TOQUES.ln = function (b, n) { S.ln.sel = n; };
TOQUES['ln-p'] = function (b, n, v) { var p = S.ln.partes[S.ln.sel] = S.ln.partes[S.ln.sel] || {}; p[v] = !p[v]; };
TOQUES['ul-prox'] = function () { S.ul.n++; };
TOQUES['ul-f'] = function (b, n, v) { S.ul.fim = v; };
TOQUES['se-t'] = function (b, n) { S.seu.tema = n; };
TOQUES['se-p'] = function (b, n, v) { S.seu.partes[v] = !S.seu.partes[v]; };
TOQUES['fl-prox'] = function () { S.fl.n++; };

/* 10/11/2026 · AS EXPLICAÇÕES (kit/formatos3.js) · G2 · uma cena curta nova (k: gx) antes de duas.
   Explicação 100% em inglês: see → notice → use (o aluno fala ou escreve uma frase dele no fim). */
var GX_EXPLICA = { formato: 'linhaTempo', titulo: 'The tape from the cabin. Where does each sentence go?',
  marcos: [{ t: 'THE LONG TRACK', s: 'it was going on' }, { t: 'THE RED PIN', s: 'it happened' }],
  frases: [
    { f: 'Ana was walking through the forest.', c: 0, d: 'was walking · a long track' },
    { f: 'The rain was falling all night.', c: 0, d: 'was falling · a long track' },
    { f: 'The men were sleeping in the cabin.', c: 0, d: 'were sleeping · a long track' },
    { f: 'The recorder fell on the floor.', c: 1, d: 'fell · the red pin' },
    { f: 'Someone knocked on the door.', c: 1, d: 'knocked · the red pin' },
    { f: 'The tape stopped.', c: 1, d: 'stopped · the red pin' }
  ],
  nota: 'The long track: <b>was / were + -ing</b> (it was raining). The red pin: the past simple (the tape stopped). Put them together: <b>while</b> + the long track, or <b>when</b> + the pin. While Ana was walking, the recorder fell. Ana was walking when the recorder fell.',
  uso: { p: 'Your turn. A strange night in your life: what were you doing (the long track), and what happened (the red pin)?', molde: ['I was … when …', 'While I was …, …'], ex: 'I was cooking when the lights went out. While I was looking for a candle, my phone rang.' } };
R.gx = function (c) { return cab(c) + FM.ex('gx_tempo', GX_EXPLICA); };
