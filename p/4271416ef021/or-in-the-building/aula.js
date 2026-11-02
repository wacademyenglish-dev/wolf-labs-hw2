/* ============================================================
   OR IN THE BUILDING · THE CITY MAP · LIVE CLASS      05/10/2026
   Main series A2 · artigo zero: at school × at the school · in bed ×
   in the bed · at work, at home, go home, by bus (nunca com THE).
   O MUNDO: o mapa da cidade e os recados de voz. Ninguém diz onde está;
   o aluno ouve e crava o alfinete: DENTRO (one of them, sem THE: o
   aluno, o paciente, o preso) ou NA PORTA (only there, com THE: quem
   visita, quem espera). As placas da estação pedem ∅ ou THE.
   Motor comum: kit/motor.js (contrato com o fio da sala). Aqui só o
   roteiro, as cenas e os toques próprios.
   Mantido da aula antiga (16/09): os nove áudios (a1–a9, voz britânica
   de propósito), as duas mensagens, a porta errada e as perguntas.
   ============================================================ */
var L = [
  { k: 'capa', est: null, img: 'mapa' },
  { k: 'agora', est: 'o', min: 7, img: 'mensagem', rot: 'I · Where Are They Now?', t: 'Before the map: where are your people right now?', p: 'Pick a card. Answer out loud. Then you get another question.' },
  { k: 'duas', est: 'f', min: 6, img: 'mensagem', rot: 'II · Two Messages', t: 'The same girl, the same time, one week apart.', p: 'Read both messages out loud. Then decide what changed.' },
  { k: 'mapa', est: 'l', min: 7, img: 'mapa', rot: 'III · The Map', t: 'Nine voice messages. Nobody says where they are.', p: 'Play a message. Then drop the pin: inside, as one of them, or at the door, only there.' },
  { k: 'regra', est: 'f', min: 6, img: 'escola', rot: 'IV · The Person Decides', t: 'The article isn’t about the place. It’s about the person.', p: 'Read the cards out loud. Then fix the four mistakes.' },
  { k: 'placas', est: 'f', min: 6, img: 'mapa', rot: 'V · Station Signs', t: 'Eight signs in the station. Some need THE. Some never do.', p: 'Read the sign. Tap ∅ or THE. Then read it out loud.' },
  { k: 'porta', est: 'f', min: 6, img: 'corredor', rot: 'VI · The Wrong Door', t: 'Nothing here is wrong English. Somebody still went to the wrong place.', p: 'Tap the line with the mistake. Then say the right sentence.' },
  { k: 'vida', est: 'o', min: 7, extra: 1, img: 'escola', rot: 'VII · Monday, 8 AM', t: 'No map now. Your places.', p: 'Answer out loud. Then you get another question.' },
  { k: 'fim', est: 'w', min: 6, img: 'corredor', rot: 'VIII · Your Week', t: 'Where are you this week?', p: 'Write four lines about your week. The red line checks the article. It goes to your My notes.' }
];

/* I · onde estão agora */
var AGORA = [
  { k: 'YOUR FAMILY', q: 'Where is somebody in your family right now?', fup: 'What are they doing there?', st: ['My … is at work.', 'My … is at home.', 'My … is at school.'], ex: 'My son is at school. He is in class now.' },
  { k: 'GETTING THERE', q: 'How do you get to work or school?', fup: 'How long does it take?', st: ['I go by bus.', 'I go by car.', 'I walk.'], ex: 'I go to work by bus. It takes forty minutes.' },
  { k: 'LAST NIGHT', q: 'Where were you at eight o’clock last night?', fup: 'Who was with you?', st: ['I was at home.', 'I was at work.', 'I was at the gym.'], ex: 'I was at home, on the sofa, with my wife.' },
  { k: 'BEDTIME', q: 'What time do you usually go to bed?', fup: 'What do you do in bed before you sleep?', st: ['I go to bed at …', 'Usually at …'], ex: 'I go to bed at eleven. I read in bed for ten minutes.' }
];

/* II · duas mensagens */
var DUAS_OPS = ['The first: she’s a student in class. The second: she’s only at the building.', 'They mean exactly the same thing.', 'The second one is wrong English.'];

/* III · o mapa: cinco lugares, cada um com DENTRO e NA PORTA */
var LUGARES = [
  { k: 'hospital', nome: 'HOSPITAL', x: 20, y: 28, dentro: 'a patient', porta: 'a visitor' },
  { k: 'school', nome: 'SCHOOL', x: 52, y: 22, dentro: 'a student', porta: 'a parent at the gate' },
  { k: 'home', nome: 'HOME', x: 80, y: 34, dentro: 'a person in bed', porta: 'a thing in the bed' },
  { k: 'prison', nome: 'PRISON', x: 30, y: 72, dentro: 'a prisoner', porta: 'a visitor' },
  { k: 'work', nome: 'WORK', x: 70, y: 74, dentro: 'a worker', porta: '' }
];
var RECADOS = [
  { au: 'a3.mp3', t: 'She’s still at school. She finishes at four.', lugar: 'school', lado: 'dentro', pq: 'At school, no THE: she’s a student, in class.' },
  { au: 'a4.mp3', t: 'I’m at the school. I’m waiting by the gate.', lugar: 'school', lado: 'porta', pq: 'At THE school: a parent at the gate, only at the building.' },
  { au: 'a2.mp3', t: 'I’m at the hospital now. I’ll call you later.', lugar: 'hospital', lado: 'porta', pq: 'At THE hospital: she’s waiting, not a patient.' },
  { au: 'a1.mp3', t: 'He’s in hospital. They kept him in overnight.', lugar: 'hospital', lado: 'dentro', pq: 'He’s the patient. British English says “in hospital”. In the US: “in the hospital”.' },
  { au: 'a5.mp3', t: 'Dad’s in bed. He isn’t well today.', lugar: 'home', lado: 'dentro', pq: 'In bed, no THE: he is sick, sleeping.' },
  { au: 'a6.mp3', t: 'Your keys were in the bed. I found them this morning.', lugar: 'home', lado: 'porta', pq: 'In THE bed: not a person at all. Keys, in the furniture.' },
  { au: 'a7.mp3', t: 'He’s been in prison since March.', lugar: 'prison', lado: 'dentro', pq: 'In prison, no THE: he’s the prisoner.' },
  { au: 'a8.mp3', t: 'I was at the prison all afternoon. It took hours.', lugar: 'prison', lado: 'porta', pq: 'At THE prison: she was visiting.' },
  { au: 'a9.mp3', t: 'I’ll be at work until six. Call me after that.', lugar: 'work', lado: 'dentro', pq: 'At work: never THE.' }
];

/* V · as placas: a primeira opção é a certa */
var PLACAS = [
  { a: 'Visitors: wait at', b: 'school gate.', ok: 'the', pq: 'Visitors are only at the building: THE.' },
  { a: 'Students go to', b: 'school by bus 12.', ok: '∅', pq: 'Students are part of the school: no THE.' },
  { a: 'Last train home. Go', b: 'home safely.', ok: '∅', pq: 'Go home: never THE, never TO.' },
  { a: 'Hospital visitors: park at', b: 'hospital, level 2.', ok: 'the', pq: 'Visitors park at THE building.' },
  { a: 'Late for work? Take', b: 'bus 40.', ok: 'the', pq: 'One specific bus: THE bus 40. But “I go by bus”: no THE.' },
  { a: 'Get to work faster by', b: 'train.', ok: '∅', pq: 'How you travel: by train, no THE.' },
  { a: 'Too tired? Go to', b: 'bed early tonight.', ok: '∅', pq: 'Go to bed: no THE.' },
  { a: 'Lost and found: a phone was left on', b: 'train.', ok: 'the', pq: 'A specific train, a thing on it: THE.' }
];

/* VI · a porta errada */
var PORTA = [
  { t: 'Mom is at the hospital with him.', ok: 0, pq: 'Clear: she’s at the building, with him.' },
  { t: 'Dad is in bed. He isn’t coming.', ok: 0, pq: 'Clear: in bed, and he’s sick.' },
  { t: 'I’m at school until four. Come and get me.', ok: 1, pq: 'HERE. She meant the building: come to the gate. But “at school” says she’s in class. He waited outside her classroom; she waited at the gate for an hour.' },
  { t: 'Then we can all go home together.', ok: 0, pq: 'Clear: go home, no article.' }
];

/* VII · segunda, 8 da manhã */
var VIDA = [
  { q: 'Where are you on Monday at 8 AM?', fup: 'How do you get there?', st: ['I’m at work.', 'I’m at home.', 'I’m at school.'], ex: 'I’m at work. I go by car.' },
  { q: 'Who in your family is at school or in college now?', fup: 'How do they get there?', st: ['My … is at school.', 'Nobody, now.'], ex: 'My daughter is in college. She goes by train.' },
  { q: 'Tell me about a building you go to, but you aren’t part of it.', fup: 'What do you do there?', st: ['I go to the …', 'I wait at the …'], ex: 'I go to the school to get my son. I wait at the gate.' },
  { q: 'Do you ever work at home?', fup: 'Where do you prefer: at work or at home?', st: ['Yes, I work at home on …', 'No, never.'], ex: 'Yes, on Fridays. I prefer to work at home.' },
  { q: 'Your turn: ask me where I was yesterday afternoon.', fup: 'Now ask me how I got there.', st: ['Where were you …?', 'How did you get there?'], ex: 'Where were you yesterday afternoon? How did you get there?' }
];

/* ---------- o corretor (nível 1: a regra desta aula) ---------- */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b(at|from) (the) (work)\b/g, m, 2, 'At work: never THE.'));
  out = out.concat(A(/\b(at|from) (the) (home)\b/g, m, 2, 'At home: never THE. (The home = a building for old people.)'));
  out = out.concat(A(/\b(?:go|goes|went|going|come|comes|came|coming|get|gets|got|walk|walks|drive|drives)\s+(to (?:the )?)home\b/g, m, 1, 'Go home: no TO, no THE.'));
  out = out.concat(A(/\bby (the) (bus|car|train|plane|bike|subway|taxi|boat)\b/g, m, 1, 'How you travel: by bus, no THE.'));
  out = out.concat(A(/\b(?:go|goes|went|going)\s+to (the) bed\b/g, m, 1, 'Go to bed: no THE.'));
  out = out.concat(A(/\b(?:i|you|we|they|he|she)(?:'m|'re|'s| am| are| is| was| were)?\s+(?:at|in) (the) (?:work)\b/g, m, 1, 'At work: never THE.'));
  return out;
};

/* ---------- o estado (o mesmo dos dois lados) ---------- */
var S = { i: 0, faixa: 1, fala: {}, resp: {}, agora: { sel: -1, foi: {} }, duas: { esc: -1 },
  mapa: { n: 0, ouviu: 0, pin: '', err: '', fixos: {} }, armas: {}, pl: { n: 0, esc: '' }, porta: { esc: -1 }, vida: { n: 0, foi: {} } };

/* ---------- as cenas ---------- */
var R = {};
R.capa = function () {
  return '<div class="capa"><div class="lado-a"><span class="kick">MAIN SERIES · THE CITY MAP · A2</span><h1>Or in the <b>Building</b></h1>'
    + '<p class="sub">She wrote “I’m at school.” She meant the gate. One small word cost an afternoon.</p>'
    + '<div class="chipsx"><span class="pilula">at school · at the school</span><span class="pilula">in bed · in the bed</span><span class="pilula">at work · by bus</span><span class="pilula">Live Class · W·O·L·F</span></div>'
    + '<button type="button" class="btn cheio" data-a="ir" data-n="1">Open the map</button>' + faixaLive() + '</div>'
    + '<div class="foto mapa-capa"><img src="' + img('mapa') + '" alt="A dark city map with subway lines"><div class="sinal um"><small>ONE OF THEM</small><b>at school</b></div><div class="sinal dois"><small>ONLY THERE</small><b>at the school</b></div></div></div>';
};
R.agora = function (c) { return cartasPessoais(c, AGORA, S.agora, 'agora'); };
R.duas = function (c) {
  var d = S.duas, certo = d.esc === 0;
  var ops = ordem(DUAS_OPS.map(function (t, i) { return [t, i]; }), 1);
  return cab(c) + '<div class="foco"><div class="msgs"><div class="msg vd"><small>TUESDAY · 2 PM</small><span>I’m at school.</span></div><div class="msg vd"><small>THE NEXT TUESDAY · 2 PM</small><span>I’m at <u>the</u> school.</span></div></div>'
    + '<div class="pergunta vd ja"><h2>What’s the difference?</h2></div><div class="versoes">' + ops.map(function (o) { var cls = d.esc === o[1] ? (o[1] === 0 ? ' certo' : ' errado') : ''; return '<button type="button" class="versao' + cls + '" data-a="duas" data-n="' + o[1] + '">' + o[0] + '</button>'; }).join('') + '</div>'
    + (certo ? '<p class="aprova">GOT IT. At school = a student, in class. At the school = anybody at the building. A week later she had graduated: she was picking up her little brother.</p>'
      : (d.esc > 0 ? '<p class="recusa">Read them again. Who is she in each one?</p>' + mostra('duas', DUAS_OPS[0]) : '')) + '</div>';
};
R.mapa = function (c) {
  var m = S.mapa, n = m.n, fim = n >= RECADOS.length, x = RECADOS[Math.min(n, RECADOS.length - 1)];
  var pinos = LUGARES.map(function (p) {
    var lados = ['dentro', 'porta'].filter(function (l) { return p[l]; });
    return '<div class="lugar" style="left:' + p.x + '%;top:' + p.y + '%"><b>' + p.nome + '</b><div class="lados">' + lados.map(function (l) {
      var fixos = RECADOS.filter(function (r, i) { return m.fixos[i] && r.lugar === p.k && r.lado === l; }).length;
      var marcado = m.pin === p.k + ':' + l;
      return '<button type="button" class="alvo ' + l + (marcado ? (m.err ? ' errado' : ' certo') : '') + '" data-a="pin" data-v="' + p.k + ':' + l + '"' + (fim ? ' disabled' : '') + '><small>' + (l === 'dentro' ? 'INSIDE · NO THE' : 'AT THE DOOR · THE') + '</small><span>' + p[l] + '</span>' + (fixos ? '<em>' + fixos + '</em>' : '') + '</button>';
    }).join('') + '</div></div>';
  }).join('');
  var mapa = '<div class="mapa vd"><img src="' + img('mapa') + '" alt="">' + pinos + '</div>';
  var lado;
  if (fim) lado = '<div class="recado vd"><small>NINE PINS ON THE MAP</small><h3>Only one message was about furniture: the keys in the bed.</h3><p>Inside, one of them: no THE. At the door, only there: THE. And at work, never THE.</p></div>';
  else {
    var certo = m.pin && !m.err;
    lado = '<div class="recado vd"><small>VOICE MESSAGE ' + (n + 1) + ' OF ' + RECADOS.length + '</small><div class="toca-linha">' + tocar(x.au) + '<span>' + (m.ouviu || certo ? '“' + x.t + '”' : 'Play it. Where is the person?') + '</span></div>'
      + (certo ? '<p class="aprova">GOT IT. ' + x.pq + '</p><div><button type="button" class="btn" data-a="pin-prox">Next message</button></div>'
        : (m.err ? '<p class="recusa">' + m.err + '</p>' + mostra('mp' + n, x.t + ' → ' + x.lugar.toUpperCase() + ', ' + (x.lado === 'dentro' ? 'inside (no THE)' : 'at the door (THE)') + '. ' + x.pq) : '<p class="dica-aluno">Play it, then tap the pin on the map.</p>'))
      + (!certo && !m.ouviu ? '<button type="button" class="pilula" data-a="mostra-texto">Show the words</button>' : '') + '</div>';
  }
  return cab(c) + '<div class="mesa-mapa">' + mapa + '<div class="lado-mapa">' + lado + trilha(RECADOS, n) + '</div></div>';
};
R.regra = function (c) {
  var cartoes = '<div class="cartoes">'
    + '<div class="cr vd"><small>1 · ONE OF THEM</small><h3>The person is part of it: <em>no THE</em></h3><div class="ex"><span>She’s <u>at school</u>.</span><span>He’s <u>in prison</u>.</span><span>Dad’s <u>in bed</u>.</span></div></div>'
    + '<div class="cr vd"><small>2 · ONLY THERE</small><h3>A visitor, a thing: <em>THE</em></h3><div class="ex"><span>I’m <u>at the school</u>, by the gate.</span><span>Keys <u>in the bed</u>.</span></div></div>'
    + '<div class="cr vd"><small>3 · NEVER THE</small><h3>These <em>never</em> take it</h3><div class="ex"><span><u>at work</u> · <u>at home</u></span><span><u>go home</u> · <u>go to bed</u></span></div></div>'
    + '<div class="cr vd"><small>4 · HOW YOU TRAVEL</small><h3><em>by</em> + no THE</h3><div class="ex"><span><u>by bus</u> · <u>by car</u></span><span><u>by train</u> · <u>on foot</u></span></div></div></div>';
  return cab(c) + cartoes + armas([['AT THE WORK', 'I’m at the work.', 'I’m at work.', 'Work never takes THE.'], ['GO TO HOME', 'Let’s go to home.', 'Let’s go home.', 'Go home: no TO, no THE.'], ['BY THE BUS', 'I go by the bus.', 'I go by bus.', 'How you travel: no THE.'], ['THE WRONG PERSON', 'I’m at school, by the gate.', 'I’m at the school, by the gate.', 'At the gate you are only there: THE.']], 'THE FOUR TRAPS · TAP TO FIX');
};
R.placas = function (c) {
  var p = S.pl, n = p.n, fim = n >= PLACAS.length, x = PLACAS[Math.min(n, PLACAS.length - 1)];
  if (fim) return cab(c) + trilha(PLACAS, n) + '<div class="foco"><div class="pergunta vd"><small>EIGHT SIGNS READ</small><h2>A specific bus: the bus 40. How you travel: by bus.</h2></div></div>';
  var certo = p.esc === x.ok;
  var corpo = '<div class="foco"><div class="placa-azul"><small>STATION SIGN · ' + (n + 1) + ' OF ' + PLACAS.length + '</small><p>' + x.a + ' <span class="gap' + (certo ? ' cheio' : '') + '">' + (certo ? (x.ok === '∅' ? '·' : 'the') : '___') + '</span> ' + x.b + '</p></div>'
    + (certo ? '<p class="aprova">GOT IT. ' + x.pq + ' Now read the sign out loud.</p><div style="text-align:center"><button type="button" class="btn" data-a="pl-prox">Next sign</button></div>'
      : '<div class="veredito">' + ['∅', 'the'].map(function (o) { return '<button type="button" class="btn placa-op' + (p.esc === o ? ' errado' : '') + '" data-a="pl" data-v="' + o + '">' + (o === '∅' ? '∅ no word' : 'THE') + '</button>'; }).join('') + '</div>'
        + (p.esc ? '<p class="recusa">Who is it about? A person who is part of it, a thing, or how you travel?</p>' + mostra('pl' + n, x.a + ' ' + (x.ok === '∅' ? '' : 'the ') + x.b + ' ' + x.pq) : ''))
    + '</div>';
  return cab(c) + trilha(PLACAS, n) + corpo;
};
R.porta = function (c) {
  var p = S.porta, certo = p.esc >= 0 && PORTA[p.esc].ok;
  return cab(c) + '<div class="foco"><div class="conversa vd">' + PORTA.map(function (x, i) {
    var cls = p.esc === i ? (x.ok ? ' certo' : ' errado') : (certo && i === 2 ? ' certo' : '');
    return '<button type="button" class="bolha-linha' + cls + '" data-a="porta" data-n="' + i + '">' + x.t + '</button>';
  }).join('') + '</div>'
    + (certo ? '<p class="aprova">GOT IT. ' + PORTA[2].pq + '</p>' + follow('SAY THE FIX', 'Say the message she should have sent.', ['I’m at the school until four.', 'Come and get me at the gate.'], [], 'porta', mostra('portaf', 'I’m at the school until four. Come and get me at the gate.'))
      : (p.esc >= 0 ? '<p class="recusa">' + PORTA[p.esc].pq + ' Look for the line that says the wrong thing.</p>' + mostra('porta', 'Line 3: “I’m at school until four.” She meant the building: “I’m at the school.”') : '<p class="dica-aluno" style="text-align:center">Tap the line that sent him to the wrong door.</p>')) + '</div>';
};
R.vida = function (c) { return sequencia(c, VIDA, S.vida, 'vida', 'Five answers, and the article was doing work in every one.'); };
R.fim = function (c) {
  return cab(c) + '<div class="fim">' + escritaFinal('fim', (S.txt || {}).fim || '', (S.salvo || {}).fim, 'On Monday at 8 AM I’m at work.\nI go there by bus.\nOn Friday I wait at the school for my son.', 'Your week',
    ['I’m at work ', 'I’m at home ', 'by bus', 'by car', 'I go home at ', 'I go to bed at ', 'at the school ', 'at the gym '], ['YOUR WEEK', 'Four lines: where you are, how you get there, and one building you only visit.'])
    + '<div class="lado-fim"><div class="grande vd"><span><b>at school</b> · one of them</span><span><b>at the school</b> · only there</span><small>No THE when you are part of it: at school, in bed, in prison. THE when you only visit, or it’s a thing: at the school, in the bed. Never THE: at work, at home, go home, by bus.</small></div>'
    + mostra('fim', 'On Monday at 8 AM I’m at work. I go there by bus.<br>On Friday I wait at the school for my son.<br>I go home at six and I go to bed at eleven.', 1)
    + '<p class="hw"><a class="pilula" href="HW/" target="_blank" rel="noopener">Homework for the student →</a></p></div></div>';
};

/* ---------- os toques desta aula ---------- */
TOQUES.duas = function (b, n) { if (S.duas.esc === 0) return false; S.duas.esc = n; };
TOQUES.toca = function () { S.mapa.ouviu = S.mapa.ouviu; return false; };
TOQUES['mostra-texto'] = function () { S.mapa.ouviu = 1; };
TOQUES.pin = function (b, n, v) {
  var m = S.mapa, x = RECADOS[m.n]; if (!x || (m.pin && !m.err)) return false;
  var p = v.split(':'); m.pin = v;
  if (p[0] !== x.lugar) m.err = 'Listen again. Where is the person: which place on the map?';
  else if (p[1] !== x.lado) m.err = 'Right place! Now: is the person ONE OF THEM (inside, no THE), or ONLY THERE (at the door, THE)? Listen for “the”.';
  else { m.err = ''; m.fixos[m.n] = 1; }
};
TOQUES['pin-prox'] = function () { S.mapa = { n: S.mapa.n + 1, ouviu: 0, pin: '', err: '', fixos: S.mapa.fixos }; };
TOQUES.pl = function (b, n, v) { S.pl.esc = v; };
TOQUES['pl-prox'] = function () { S.pl = { n: S.pl.n + 1, esc: '' }; };
TOQUES.porta = function (b, n) { if (S.porta.esc >= 0 && PORTA[S.porta.esc].ok) return false; S.porta.esc = n; };
