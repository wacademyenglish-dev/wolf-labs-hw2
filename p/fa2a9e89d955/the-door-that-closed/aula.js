/* ============================================================
   THE OTHER TRACK · THE RAILWAY SWITCH · LIVE CLASS  06/10/2026
   Main series B1 · third conditional: if + had + particípio, would
   have + particípio. Um passado que não aconteceu: as duas metades
   voltam. Porta aberta (ainda dá: segunda condicional) × porta
   fechada (o momento passou: terceira). Erros: "If I would have
   known", "would have went", "If I had know", "would pass last year".
   Na fala, HAD e WOULD viram o mesmo 'd: o HAD fica ao lado do IF.
   O MUNDO (da aula velha): escolhas que mudaram a vida; a estação, o
   trem perdido; cinco histórias no trilho principal. Quatro gravações
   mantidas (d1–d4), conferidas no faster-whisper em 06/10: batem.
   A CARA: o MAPA DE TRILHOS em SVG — o trilho principal (o que
   aconteceu) e o ramal (o que teria acontecido). A agulha muda quando
   as duas metades estão certas, e o trem desce o outro ramal até o
   destino que não existiu.
   Fila: FILA-LIVE-386.md · 107.
   ============================================================ */
var L = [
  { k: 'capa', est: null, img: 'agulha' },
  { k: 'escolha', est: 'o', min: 7, img: 'estacao', rot: 'I · A Choice That Changed Things', t: 'Think of a choice that changed your life, big or small.', p: 'Tap what kind of choice it was. Then answer three questions out loud.' },
  { k: 'portas', est: 'f', min: 6, img: 'porta', rot: 'II · Open or Shut?', t: 'The tense follows the door, not the feeling. Can it still happen?', p: 'Read the situation. Say why. Then tap OPEN or SHUT.' },
  { k: 'agulha', est: 'o', min: 7, img: 'agulha', rot: 'III · Flip the Switch', t: 'Five stories on the main track. Flip the switch, and the train takes the other one.', p: 'Build it in two taps: the IF half, then the WOULD HAVE half. Then say the whole sentence.' },
  { k: 'gx', est: 'f', min: 4, img: 'agulha', rot: 'IV · The Ladder Back', t: 'One missed train, five steps back in time.', p: 'Read each step out loud, then go one step up. Notice both halves. Then climb with your own story.' },
  { k: 'regra', est: 'f', min: 6, img: 'agulha', rot: 'V · Both Halves Move Back', t: 'Say the whole sentence before you tap.', p: 'Choose the form. One of them is an open door on purpose.' },
  { k: 'voz', est: 'l', min: 7, img: 'alavanca', rot: 'VI · Two ’d, Two Words', t: 'Two apostrophes, one sound, two different words.', p: 'Play the line. Tap what each ’d means. Then say it at normal speed.' },
  { k: 'erros', est: 'f', min: 6, img: 'alavanca', rot: 'VII · If I Would Have', t: 'Five sentences have a problem. One is right.', p: 'Choose the fix. Then say the whole sentence.' },
  { k: 'semif', est: 'o', min: 7, extra: 1, img: 'estacao', rot: 'VIII · No IF Needed', t: 'Sometimes the IF is only in the situation.', p: 'Read it. Answer out loud with “I would have …” or “I wouldn’t have …”, and say why.' },
  { k: 'tres', est: 'o', min: 7, extra: 1, img: 'agulha', rot: 'IX · Three of Your Choices', t: 'Three of your own choices. Flip the switch, and keep going down the other track.', p: 'Choose the right frame and say your sentence. Your teacher asks: “And then what would have happened?”' },
  { k: 'cartas', est: 'o', min: 7, extra: 1, img: 'alavanca', rot: 'X · Quick Switches', t: 'Five quick switches. No thinking time.', p: 'One full sentence for each card. Fast.' },
  { k: 'fim', est: 'w', min: 6, img: 'estacao', rot: 'XI · Back to Your Choice', t: 'Your choice from scene I comes back, on the other track.', p: 'Write your choice, and the other track, in three sentences. It goes to your My notes.' }
];

var TR = {
  'd1.mp3': 'If I’d known, I’d have told you.',
  'd2.mp3': 'She’d have come if she’d had the time.',
  'd3.mp3': 'They’d have paid if we’d asked.',
  'd4.mp3': 'If we’d left at six, we’d have made it.'
};

var TIPOS = ['a city I moved to', 'a job I took', 'a course I chose', 'a person I met', 'a trip I made', 'something I said no to'];
var ESCOLHA = [
  { q: 'What was the choice, and when did you make it?', fup: 'Was it hard to decide?', st: ['I decided to …', 'In …, I chose …'], ex: 'In 2019 I decided to move to Curitiba.' },
  { q: 'What happened because of it?', fup: 'Who else did it change?', st: ['Because of that, I …', 'That’s how I …'], ex: 'That’s how I met my best friend.' },
  { q: 'Imagine you had chosen differently. What would be different?', fup: 'Would you be happier, or not?', st: ['If I …, I …', 'I think I …'], ex: 'I wouldn’t have met her.' }
];

var PORTAS = [
  { t: 'I don’t speak German. There’s a job in Berlin next year.', z: 'aberta' },
  { t: 'I didn’t speak German. They gave the Berlin job to someone else.', z: 'fechada' },
  { t: 'The ticket sale ends on Friday, and I still have the money.', z: 'aberta' },
  { t: 'We missed the last train on Saturday.', z: 'fechada' },
  { t: 'She hasn’t replied yet. I could still call her.', z: 'aberta' },
  { t: 'She moved away in June and left no address.', z: 'fechada' }
];
var MODELO = { aberta: 'If I spoke German, I would apply.', fechada: 'If I had spoken German, I would have gotten the job.' };

var AGULHA = [
  { fato: 'I left home late, so I missed the train.', curto: 'MISSED THE TRAIN', se: ['If I had left on time,', 'If I would have left on time,', 'If I left on time,'], res: ['I would have caught it.', 'I would catch it.', 'I had caught it.'], ramal: 'ON THE TRAIN' },
  { fato: 'She took the job in Lisbon, and she met her husband there.', curto: 'LISBON · MARRIED', se: ['If she hadn’t taken the job,', 'If she didn’t take the job,', 'If she wouldn’t have taken the job,'], res: ['she wouldn’t have met him.', 'she won’t meet him.', 'she wouldn’t met him.'], ramal: 'NO LISBON · NO HUSBAND' },
  { fato: 'We didn’t check the weather, and we got wet.', curto: 'SOAKED', se: ['If we had checked the weather,', 'If we checked the weather,', 'If we have checked the weather,'], res: ['we would have taken umbrellas.', 'we will take umbrellas.', 'we would have took umbrellas.'], ramal: 'DRY' },
  { fato: 'He didn’t know about the party, so he didn’t go.', curto: 'HOME ALONE', se: ['If he had known about it,', 'If he would have known about it,', 'If he knew about it,'], res: ['he would have gone.', 'he would have went.', 'he would go.'], ramal: 'AT THE PARTY' },
  { fato: 'I said yes to the course, and I found my career.', curto: 'MY CAREER', se: ['If I had said no,', 'If I said no,', 'If I would say no,'], res: ['I wouldn’t have found it.', 'I didn’t find it.', 'I wouldn’t have find it.'], ramal: 'A DIFFERENT CAREER' }
];

var REGRA = [
  { a: 'If I ', b: ' earlier, I would have seen her.', ops: ['had arrived', 'would have arrived', 'arrived'], nota: 'IF + <b>had</b> + third form.' },
  { a: 'If you had asked me, I ', b: ' you.', ops: ['would have helped', 'would help', 'had helped'], nota: '<b>would have</b> + third form.' },
  { a: 'She ', b: ' if she had had the time.', ops: ['would have come', 'would have came', 'will come'], nota: 'come · came · <b>come</b>.' },
  { a: 'If they hadn’t lost the map, they ', b: ' lost.', ops: ['wouldn’t have gotten', 'didn’t get', 'won’t get'], nota: 'Negative: <b>wouldn’t have</b>.' },
  { a: 'I don’t have time now. If I ', b: ' time, I would help.', ops: ['had', 'had had', 'would have had'], nota: 'NOW: an open door. Second conditional.' },
  { a: 'We ', b: ' the match if we had trained more.', ops: ['might have won', 'might won', 'had won'], nota: '<b>might have / could have</b> work, too.' }
];

var VOZ = [
  { au: 'd1.mp3', p: ['If I', ' known, I', ' have told you.'], r: ['had', 'would'] },
  { au: 'd2.mp3', p: ['She', ' have come if she', ' had the time.'], r: ['would', 'had'] },
  { au: 'd3.mp3', p: ['They', ' have paid if we', ' asked.'], r: ['would', 'had'] },
  { au: 'd4.mp3', p: ['If we', ' left at six, we', ' have made it.'], r: ['had', 'would'] }
];

var ERROS = [
  { f: '<s>If I would have known</s>, I would have called.', ops: ['If I had known', 'If I knew', 'If I have known'], w: 'No WOULD in the IF half.' },
  { f: 'If I had <s>know</s>, I would have called.', ops: ['known', 'knew', 'knowing'], w: 'Third form: <b>known</b>.' },
  { f: 'If we had left earlier, we <s>would have went</s>.', ops: ['would have gone', 'would went', 'had went'], w: '<b>would have gone</b>.' },
  { f: 'If she had studied, she <s>would pass</s> last year.', ops: ['would have passed', 'will pass', 'had passed'], w: 'LAST YEAR is a shut door.' },
  { f: 'If they <s>didn’t forget</s> the tickets, they would have gotten in.', ops: ['hadn’t forgotten', 'wouldn’t forget', 'don’t forget'], w: '<b>hadn’t forgotten</b>.' },
  { f: 'If you had told me, I would have helped.', ops: ['Nothing. It’s right.', 'would helped', 'had helped'], w: 'Five problems and one good sentence.' }
];

var SEMIF = [
  { q: 'Your friend missed the last train and slept at the station. What would you have done?', fup: 'Why?', st: ['I would have …', 'I wouldn’t have …'], ex: 'I would have called a taxi.' },
  { q: 'A colleague sent an angry email to the whole company. What would you have done?', fup: 'Would you have said sorry?', st: ['I would have …', 'I wouldn’t have …'], ex: 'I wouldn’t have sent it at all.' },
  { q: 'Someone found $500 in a taxi and kept it. What would you have done?', fup: 'Be honest.', st: ['I would have …', 'I wouldn’t have …'], ex: 'I would have given it to the driver.' },
  { q: 'Your neighbor didn’t go to her best friend’s wedding because of work. What would you have done?', fup: 'What would your boss have said?', st: ['I would have …', 'I wouldn’t have …'], ex: 'I would have gone anyway.' }
];

var TRES = [
  { q: 'A place you chose to live, study or work.', ops: ['If I hadn’t moved to …, I wouldn’t have …', 'If I didn’t move to …, I wouldn’t …', 'If I wouldn’t have moved to …, I …'] },
  { q: 'Something you almost didn’t do.', ops: ['If I had said no, I would have missed …', 'If I would said no, I would miss …', 'If I say no, I would have missed …'] },
  { q: 'A small decision that became a big one.', ops: ['If I hadn’t … that day, I would never have …', 'If I didn’t … that day, I never …', 'If I haven’t …, I would never have …'] }
];

var CARTAS = [
  { q: 'If you had been born 100 years ago, what would you have done for a living?', fup: 'Would you have liked it?', st: ['I would have been a …', 'I would have worked …'], ex: 'I would have been a train driver.' },
  { q: 'If you had studied something else, what would it have been?', fup: 'Why didn’t you?', st: ['I would have studied …'], ex: 'I would have studied music.' },
  { q: 'If you hadn’t come to class today, what would you have done?', fup: 'Really?', st: ['I would have …'], ex: 'I would have slept for another hour.' },
  { q: 'If you had had one more hour yesterday, how would you have used it?', fup: 'And the hour after that?', st: ['I would have …'], ex: 'I would have called my grandmother.' },
  { q: 'If you had met yourself at 15, what would you have said?', fup: 'Would you have listened?', st: ['I would have told myself …'], ex: 'I would have told myself to relax.' }
];

var S = { i: 0, faixa: 1, fala: {}, resp: {}, armas: {},
  es: { tipo: '', n: 0, foi: {} }, po: { n: 0, esc: '' }, ag: { n: 0, se: -1, res: -1 }, rg: { n: 0, esc: -1 }, vz: { n: 0, a: '', b: '' },
  er: { n: 0, esc: -1 }, sf: { n: 0, foi: {} }, tr: { n: 0, esc: -1, elos: 0 }, ca: { n: 0, foi: {} } };

/* o mapa de trilhos: o principal (o que aconteceu) e o ramal (o que teria acontecido) */
function trilhos(ramal, real, outro, chave, elos) {
  var vai = ramal ? 'M20 150 H190 C260 150 280 56 360 56 H' + (elos ? 360 + Math.min(elos, 4) * 55 : 580) : 'M20 150 H580';
  return '<div class="tc-mapa"><svg viewBox="0 0 600 200" aria-hidden="true">'
    + '<path class="tc-dorm" d="M20 150 H580"/><path class="tc-dorm r' + (ramal ? ' viva' : '') + '" d="M190 150 C260 150 280 56 360 56 H580"/>'
    + '<path class="tc-trilho" d="M20 150 H580"/><path class="tc-trilho r' + (ramal ? ' viva' : '') + '" d="M190 150 C260 150 280 56 360 56 H580"/>'
    + '<g class="tc-agulha' + (ramal ? ' vira' : '') + '"><circle cx="190" cy="150" r="9"/><path d="M190 150 L' + (ramal ? '212 128' : '220 150') + '"/></g>'
    + (elos ? Array.apply(null, Array(Math.min(elos, 4))).map(function (_, i) { return '<circle class="tc-estacao" cx="' + (415 + i * 55) + '" cy="56" r="6"/>'; }).join('') : '')
    + '<text x="580" y="182" text-anchor="end" class="tc-rot' + (ramal ? ' apaga' : '') + '">' + (real || '') + '</text>'
    + '<text x="580" y="36" text-anchor="end" class="tc-rot r' + (ramal ? ' acende' : '') + '">' + (outro || '') + '</text>'
    + '<circle class="tc-trem" r="10"><animateMotion dur="1.6s" fill="freeze" path="' + vai + '" key="' + (chave || '') + '"/></circle>'
    + '</svg></div>';
}
/* três opções, a certa na posição 0 da lista */
function tres(acao, ops, esc, semente, extra) {
  return '<div class="tc-ops">' + ordem(ops.map(function (o, i) { return [o, i]; }), semente).map(function (o) { return '<button type="button" class="versao' + (esc === o[1] ? (o[1] === 0 ? ' certo' : ' errado') : '') + '" data-a="' + acao + '" data-n="' + o[1] + '"' + (extra || '') + '>' + o[0] + '</button>'; }).join('') + '</div>';
}

var R = {};
R.capa = function () {
  return '<div class="capa"><div><span class="kick">MAIN SERIES · B1 · THE RAILWAY SWITCH</span><h1>The Other <b>Track</b></h1>'
    + '<p class="sub">I missed the train. <b>If I had left</b> at six, <b>I would have made</b> it. Both halves go back.</p>'
    + '<div class="chipsx"><span class="pilula">if + had + known</span><span class="pilula">would have + gone</span><span class="pilula">I’d · I’d</span><span class="pilula">Live Class · W·O·L·F</span></div>'
    + '<button type="button" class="btn cheio" data-a="ir" data-n="1">Go to the switch</button>' + faixaLive() + '</div>'
    + '<div class="capa-r">' + trilhos(1, 'I MISSED THE TRAIN', 'I WOULD HAVE MADE IT', 'capa') + '<p class="tc-legenda"><b>If I had left at six,</b> I would have made it.</p></div></div>';
};

R.escolha = function (c) {
  var e = S.es;
  var chips = '<div class="tc-tipos">' + TIPOS.map(function (t) { return '<button type="button" class="pilula' + (e.tipo === t ? ' on' : '') + '" data-a="es-tipo" data-v="' + h(t) + '">' + t + '</button>'; }).join('') + '</div>';
  if (!e.tipo) return cab(c) + chips + '<p class="dica-aluno" style="text-align:center">Tap one. Big or small.</p>';
  return cab(c) + chips + sequencia({ est: 'o', rot: '', t: '', p: '' }, ESCOLHA, e, 'es', 'Keep your last sentence. You’ll say it again at the end, on the other track.').replace(/<div class="cab[\s\S]*?<\/p><\/div>/, '')
    + '<p class="so-prof dica-aluno" style="text-align:center">Write the third answer word for word. Don’t correct it yet.</p>';
};

R.portas = function (c) {
  var e = S.po, n = e.n, fim = n >= PORTAS.length;
  if (fim) return cab(c) + trilha(PORTAS, n) + '<div class="foco"><div class="pergunta vd"><small>SIX DOORS</small><h2>Open door: If I knew, I would … Shut door: If I had known, I would have … Now one of each from your own week.</h2></div></div>';
  var x = PORTAS[n], ok = e.esc === x.z;
  return cab(c) + trilha(PORTAS, n) + '<div class="mesa-c"><div class="lado-l"><div class="pede vd"><small>SITUATION ' + (n + 1) + ' OF 6</small><b>' + x.t + '</b></div>'
    + '<div class="tc-portas">' + [['aberta', 'OPEN', 'it can still change'], ['fechada', 'SHUT', 'the moment is gone']].map(function (o) { return '<button type="button" class="tc-porta ' + o[0] + (e.esc === o[0] ? (ok ? ' certo' : ' errado') : '') + '" data-a="po" data-v="' + o[0] + '"><span class="tc-folha"></span><b>' + o[1] + '</b><small>' + o[2] + '</small></button>'; }).join('') + '</div></div>'
    + '<div class="lado-l">' + (ok ? '<div class="balao vd ok-b"><small>' + (x.z === 'aberta' ? 'OPEN DOOR · SECOND CONDITIONAL' : 'SHUT DOOR · THIRD CONDITIONAL') + '</small><p>' + MODELO[x.z] + '</p></div><p class="aprova">Now make one about this situation.</p><div><button type="button" class="btn" data-a="po-prox">Next</button></div>' : e.esc ? '<p class="recusa">Ask one question: can it still change?</p>' : '<p class="dica-aluno">Say why before you tap.</p>') + '</div></div>';
};

R.agulha = function (c) {
  var e = S.ag, n = e.n, fim = n >= AGULHA.length;
  if (fim) return cab(c) + trilha(AGULHA, n) + '<div class="foco">' + trilhos(1, 'WHAT HAPPENED', 'WHAT WOULD HAVE HAPPENED', 'fim') + '<div class="pergunta vd"><small>FIVE SWITCHES</small><h2>Every time, both halves went back. Now a second switch: “And if that had happened, what would have happened next?”</h2></div></div>';
  var x = AGULHA[n], okSe = e.se === 0, okRes = e.res === 0, vira = okSe && okRes;
  return cab(c) + trilha(AGULHA, n) + '<div class="mesa-c tc-mesa"><div class="lado-l"><div class="pede vd"><small>THE MAIN TRACK · WHAT HAPPENED</small><b>' + x.fato + '</b></div>' + trilhos(vira, x.curto, vira ? x.ramal : '?', 'ag' + n)
    + (vira ? '<div class="balao vd ok-b"><small>THE OTHER TRACK · SAY IT TWICE, THE SECOND TIME WITH ’D</small><p>' + x.se[0] + ' ' + x.res[0] + '</p></div>' : '') + '</div>'
    + '<div class="lado-l"><h5 class="rot-ouve">1 · THE IF HALF</h5>' + tres('ag-se', x.se, e.se, n + 1)
    + (okSe ? '<h5 class="rot-ouve">2 · THE WOULD HAVE HALF</h5>' + tres('ag-res', x.res, e.res, n + 2) : '')
    + ((e.se > 0 || e.res > 0) ? '<p class="recusa">IF + had + third form. Then would have + third form.</p>' : '') + (vira ? '<div><button type="button" class="btn" data-a="ag-prox">Next story</button></div>' : '') + '</div></div>';
};

R.regra = function (c) {
  var e = S.rg, n = e.n, fim = n >= REGRA.length;
  if (fim) return cab(c) + trilha(REGRA, n) + '<div class="foco"><div class="pergunta vd"><small>SIX SENTENCES</small><h2>HAD in the IF half, WOULD HAVE in the other. And item 5 was an open door. Now say each one the other way round.</h2></div></div>';
  var x = REGRA[n], ok = e.esc === 0;
  return cab(c) + trilha(REGRA, n) + '<div class="foco"><div class="balao vd"><p>' + x.a + '<u>' + (ok ? x.ops[0] : '_____') + '</u>' + x.b + '</p></div><div class="tres-c">' + tres('rg', x.ops, e.esc, n + 1) + '</div>'
    + (ok ? '<p class="aprova" style="text-align:center">' + x.nota + '</p><div style="text-align:center"><button type="button" class="btn" data-a="rg-prox">Next</button></div>' : e.esc > 0 ? '<p class="recusa" style="text-align:center">Is the door shut? Then both halves move back.</p>' : '<p class="dica-aluno" style="text-align:center">Say the whole sentence before you tap.</p>') + '</div>';
};

R.voz = function (c) {
  var e = S.vz, n = Math.min(e.n, VOZ.length - 1), fim = e.n >= VOZ.length, x = VOZ[n], ouviu = (S.ouviu || {})[x.au];
  if (fim) return cab(c) + trilha(VOZ, e.n) + '<div class="foco"><div class="pergunta vd"><small>FOUR LINES, EIGHT ’D</small><h2>The IF told you which was which every time. Now say all four fast.</h2></div></div>';
  var okA = e.a === x.r[0], okB = e.b === x.r[1], tudo = okA && okB;
  function sel(lado, esc, certo) { return '<span class="tc-d">’d<span class="tc-dd">' + ['had', 'would'].map(function (w) { return '<button type="button" class="pilula' + (esc === w ? (w === certo ? ' certo' : ' errado') : '') + '" data-a="vz" data-c="' + lado + '" data-v="' + w + '">' + w.toUpperCase() + '</button>'; }).join('') + '</span></span>'; }
  return cab(c) + trilha(VOZ, e.n) + '<div class="foco"><div class="ouve-c vd tc-ouve"><div class="toca-linha">' + tocar(x.au) + '<b>LINE ' + (n + 1) + ' OF 4</b></div>' + transcricao(x.au, TR[x.au]) + '</div>'
    + (ouviu ? '<div class="balao vd tc-linha"><p>' + x.p[0] + sel('a', e.a, x.r[0]) + x.p[1] + sel('b', e.b, x.r[1]) + x.p[2] + '</p></div>'
      + (tudo ? '<p class="aprova" style="text-align:center">' + x.p[0] + ' <b>' + x.r[0] + '</b>' + x.p[1] + ' <b>' + x.r[1] + '</b>' + x.p[2] + ' Now say it yourself, at normal speed.</p><div style="text-align:center"><button type="button" class="btn" data-a="vz-prox">Next line</button></div>' : (e.a && !okA) || (e.b && !okB) ? '<p class="recusa" style="text-align:center">Which one is next to IF?</p>' : '')
      : '<p class="dica-aluno" style="text-align:center">Play the line first.</p>') + '</div>';
};

R.erros = function (c) {
  var e = S.er, n = e.n, fim = n >= ERROS.length;
  if (fim) return cab(c) + trilha(ERROS, n) + '<div class="foco"><div class="pergunta vd"><small>SIX SENTENCES</small><h2>Both halves back, every time. Now a true version of each one.</h2></div></div>';
  var x = ERROS[n], ok = e.esc === 0;
  return cab(c) + trilha(ERROS, n) + '<div class="foco"><div class="balao vd"><p>' + x.f + '</p></div><div class="tres-c">' + tres('er', x.ops, e.esc, n + 2) + '</div>'
    + (ok ? '<p class="aprova" style="text-align:center">' + x.w + ' Say the whole sentence.</p><div style="text-align:center"><button type="button" class="btn" data-a="er-prox">Next</button></div>' : e.esc > 0 ? '<p class="recusa" style="text-align:center">IF + had + third form. WOULD HAVE + third form.</p>' : '') + '</div>';
};

R.semif = function (c) { return sequencia(c, SEMIF, S.sf, 'sf', 'Four answers, and not one IF. Everybody heard it anyway.'); };

R.tres = function (c) {
  var e = S.tr, n = Math.min(e.n, TRES.length - 1), fim = e.n >= TRES.length, x = TRES[n], ok = e.esc === 0;
  if (fim) return cab(c) + trilha(TRES, e.n) + '<div class="foco">' + trilhos(1, 'YOUR LIFE', 'A WHOLE OTHER LIFE', 'tres-fim', 4) + '<div class="pergunta vd"><small>THREE CHOICES</small><h2>Three other tracks, and a whole other life in the conditional. Are you glad about the real track?</h2></div></div>';
  return cab(c) + trilha(TRES, e.n) + '<div class="mesa-c"><div class="lado-l"><div class="pergunta vd ja"><small>CHOICE ' + (n + 1) + ' OF 3</small><h2>' + x.q + '</h2></div>' + (ok ? trilhos(1, 'WHAT YOU CHOSE', e.elos ? e.elos + ' STOP' + (e.elos > 1 ? 'S' : '') + ' DOWN THE OTHER TRACK' : 'THE OTHER TRACK', 'tr' + n + '-' + e.elos, e.elos) : '') + '</div>'
    + '<div class="lado-l"><h5 class="rot-ouve">CHOOSE THE FRAME</h5>' + tres('tr', x.ops, e.esc, n + 1)
    + (ok ? '<div class="balao vd tc-chefe"><small>YOUR TEACHER ASKS</small><p>“And then what would have happened?”</p></div><div class="tres-b"><button type="button" class="btn so-prof" data-a="tr-elo">One more stop</button><button type="button" class="btn" data-a="tr-prox">Next choice</button></div><p class="so-prof dica-aluno">The chain drifts into the simple past. Pull it back to would have.</p>' : e.esc > 0 ? '<p class="recusa">IF + had / hadn’t. Then would have.</p>' : '') + '</div></div>';
};

R.cartas = function (c) { return sequencia(c, CARTAS, S.ca, 'ca', 'Five fast switches, and the shape is starting to feel automatic.'); };

R.fim = function (c) {
  return cab(c) + '<div class="fim">' + escritaFinal('fim', (S.txt || {}).fim || '', (S.salvo || {}).fim, 'In …, I decided to …\nIf I hadn’t …, I wouldn’t have …\nI’m glad / I’m not sure, because …', 'The other track',
    ['If I had', 'If I hadn’t', 'I would have', 'I wouldn’t have', 'known', 'met', 'gone'], ['YOUR CHOICE, ON THE OTHER TRACK', 'What you chose, what would have happened if you hadn’t, and how you feel about it.'])
    + '<div class="lado-fim">' + trilhos(1, 'WHAT HAPPENED', 'WHAT WOULD HAVE', 'fim-w')
    + '<div class="grande vd"><span><u>if + had</u> + third form</span><span><u>would have</u> + third form</span><span>’d next to IF = had · ’d in the other half = would</span><span>not <s>if I would have</s></span></div>'
    + mostra('fim', 'In 2019, I decided to move to Curitiba.<br>If I hadn’t moved, I wouldn’t have met my best friend.<br>I’m glad, because she changed everything.', 1)
    + '<p class="hw"><a class="pilula" href="HW/" target="_blank" rel="noopener">Homework for the student →</a></p></div></div>';
};

TOQUES['es-tipo'] = function (b, n, v) { S.es.tipo = v; };
TOQUES.po = function (b, n, v) { S.po.esc = v; };
TOQUES['po-prox'] = function () { S.po = { n: S.po.n + 1, esc: '' }; };
TOQUES['ag-se'] = function (b, n) { S.ag.se = n; if (n !== 0) S.ag.res = -1; };
TOQUES['ag-res'] = function (b, n) { S.ag.res = n; };
TOQUES['ag-prox'] = function () { S.ag = { n: S.ag.n + 1, se: -1, res: -1 }; };
TOQUES.rg = function (b, n) { S.rg.esc = n; };
TOQUES['rg-prox'] = function () { S.rg = { n: S.rg.n + 1, esc: -1 }; };
TOQUES.vz = function (b, n, v, c) { S.vz[c] = v; };
TOQUES['vz-prox'] = function () { S.vz = { n: S.vz.n + 1, a: '', b: '' }; };
TOQUES.er = function (b, n) { S.er.esc = n; };
TOQUES['er-prox'] = function () { S.er = { n: S.er.n + 1, esc: -1 }; };
TOQUES.tr = function (b, n) { S.tr.esc = n; };
TOQUES['tr-elo'] = function () { S.tr.elos = Math.min(S.tr.elos + 1, 4); };
TOQUES['tr-prox'] = function () { S.tr = { n: S.tr.n + 1, esc: -1, elos: 0 }; };

/* 10/11/2026 · AS EXPLICAÇÕES (kit/formatos3.js) · G6 · uma cena curta nova (k: gx) antes de regra.
   Explicação 100% em inglês: see → notice → use (o aluno fala ou escreve uma frase dele no fim). */
var GX_EXPLICA = { formato: 'escada', titulo: 'One missed train. Climb back one step at a time.',
  degraus: [
    { r: 'past', f: 'I <b>missed</b> the train.', d: 'The real story. It is finished.' },
    { r: 'if', f: 'If I <b>had caught</b> the train…', d: 'The other track: had + participle after if.' },
    { r: 'result', f: 'If I had caught the train, I <b>would have met</b> her.', d: 'The result: would have + participle.' },
    { r: 'not', f: 'If I <b>hadn’t missed</b> it, I <b>wouldn’t have changed</b> jobs.', d: 'The sign flips in the half you need.' },
    { r: '?', f: 'What <b>would</b> you <b>have done</b> if you <b>had missed</b> it?', d: 'Would goes first, then have + participle.' }
  ],
  nota: 'Both halves step back: <b>if + had + participle</b> and <b>would have + participle</b>. A past that did not happen.',
  uso: { p: 'Your turn. One thing you did not do, and what would have happened. Climb the ladder.', molde: ['If I had …, I would have …', 'If I hadn’t …'], ex: 'If I had studied more, I would have passed. If I hadn’t missed the bus, I would have arrived on time.' } };
R.gx = function (c) { return cab(c) + FM.ex('gx_escada', GX_EXPLICA); };
