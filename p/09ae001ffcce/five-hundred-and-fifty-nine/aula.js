/* ============================================================
   TURN IT ON · THE DARK APARTMENT · LIVE CLASS  06/10/2026
   Main series A2 · phrasal verbs: a palavrinha É o verbo (look / look up);
   com substantivo, dos dois lados (turn on the light / turn the light on);
   com it / them / him / her / me, só no meio (turn it on); alguns nunca
   abrem (look for it, deal with it).
   Erros universais: "turn on it", "pick up her", "looking it for".
   O MUNDO (da aula velha): seis perguntas, o número (100 formas, 559
   sentidos), TAKE com quatro palavrinhas, seis famílias, quatro vozes
   (v1–v4: o whisper ouviu frases MAIS LONGAS que a transcrição antiga;
   vale o áudio), a ligação para a loja. A fonte acadêmica do número saiu
   da tela (nada de citar ninguém).
   A CARA: o APARTAMENTO NO ESCURO — planta em SVG vista de cima, seis
   cômodos apagados; cada pronome no lugar certo acende a luz de um cômodo.
   Fila: FILA-LIVE-386.md · 075.
   ============================================================ */
var L = [
  { k: 'capa', est: null, img: 'painel' },
  { k: 'abre', est: 'o', min: 7, img: 'painel', rot: 'I · Six, Out Loud', t: 'Six fast questions. Whole sentences.', p: 'Pick a card. Answer out loud. Mistakes are OK here.' },
  { k: 'numero', est: 'f', min: 6, img: 'painel', rot: 'II · The Number', t: 'Why a list of phrasal verbs doesn’t work.', p: 'Guess first, out loud. Then tap.' },
  { k: 'take', est: 'o', min: 7, img: 'painel', rot: 'III · One Verb, Four Switches', t: 'Same verb, TAKE. Four small words. Four different verbs.', p: 'Guess the meaning out loud first. Then flip the switch.' },
  { k: 'familias', est: 'f', min: 6, img: 'painel', rot: 'IV · Six Small Words', t: 'Twelve verbs. Six small words. Each small word has an idea.', p: 'Tap a verb, say why, then tap the small word it belongs to.' },
  { k: 'gx', est: 'f', min: 4, img: 'sala', rot: 'V · The Small Word Ladder', t: 'One phrasal verb, five steps.', p: 'Read each step out loud, then go one step up. Notice where the small word goes. Then climb with your own verb.' },
  { k: 'passos', est: 'f', min: 6, img: 'painel', rot: 'VI · Three Steps', t: 'Three questions. The third one is the hour.', p: 'Pick. Then read the right one out loud.' },
  { k: 'vozes', est: 'l', min: 7, img: 'telefone', rot: 'VII · Four Voices', t: 'Four real sentences. Catch the small word.', p: 'Play it. Pick what you heard. The text opens after.' },
  { k: 'casa', est: 'f', min: 6, extra: 1, img: 'painel', rot: 'VIII · The Dark Apartment', t: 'Six rooms, all dark. Six instructions.', p: 'Say each one again with a pronoun. Put the pronoun in the right place, and the room lights up.' },
  { k: 'nunca', est: 'f', min: 6, extra: 1, img: 'painel', rot: 'IX · Five That Never Open', t: 'Some verbs never split. The object waits at the end, even IT.', p: 'Say it with IT out loud. Then pick.' },
  { k: 'ligacao', est: 'o', min: 7, extra: 1, img: 'telefone', rot: 'X · The Broken One', t: 'Something arrived broken. You call the store.', p: 'Your teacher is the store. Answer out loud, then open the model.' },
  { k: 'fim', est: 'w', min: 6, img: 'painel', rot: 'XI · Your Six, Again', t: 'Your six from scene I come back.', p: 'Write four instructions for your home, with it or them. It goes to My notes.' }
];

var TR = {
  'v1.mp3': 'I couldn’t remember her name, so I looked it up on the way there.',
  'v2.mp3': 'The meeting was at nine, but they called it off an hour before.',
  'v3.mp3': 'If you don’t want it, take it back. They gave me a receipt.',
  'v4.mp3': 'He kept the book for a year and never gave it back.'
};

var ABRE = [
  { k: 'The phone', q: 'Your phone rings and you don’t know the number. Do you pick it up?', fup: 'Why not?', st: ['No, I don’t pick it …'], ex: 'No, I don’t pick it up. I wait for a message.' },
  { k: 'A word', q: 'You don’t know a word in English. Where do you look it up?', fup: 'How often?', st: ['I look it …'], ex: 'I look it up on my phone.' },
  { k: 'The light', q: 'The light is on and you’re leaving the room. Who turns it off?', fup: 'Always?', st: ['I turn it …'], ex: 'I turn it off. My brother never does!' },
  { k: 'Money', q: 'A friend borrowed money and never paid it back. Did you ask?', fup: 'What happened?', st: ['He never paid it …'], ex: 'He never paid it back, and I never asked.' },
  { k: 'Gave up', q: 'What is one thing you gave up this year?', fup: 'Was it hard?', st: ['I gave up …'], ex: 'I gave up sugar in my coffee.' },
  { k: 'A message', q: 'Somebody left you a message today. Will you call them back?', fup: 'When?', st: ['Yes, I’ll call them …'], ex: 'Yes, I’ll call them back after class.' }
];
var FORMAS = [{ k: 'meio', t: 'PICK IT UP' }, { k: 'nome', t: 'PICK UP THE PHONE' }, { k: 'fim', t: 'PICK UP IT', erro: 1 }, { k: 'sem', t: 'NO SMALL WORD', erro: 1 }];

var NUM = [['About 100, one each', 0], ['About 250', 0], ['559', 1], ['More than 1,400', 0]];

var TAKE = [
  { p: 'OFF', sig: 'A plane leaves the ground. Or you remove clothes.', ex: 'The plane took off. · Take your coat off.' },
  { p: 'UP', sig: 'You start a new hobby.', ex: 'I took up running in January.' },
  { p: 'BACK', sig: 'You return it to the store.', ex: 'The shirt was too small, so I took it back.' },
  { p: 'OUT', sig: 'You remove it from inside something.', ex: 'Take the trash out. · I took some money out.' }
];

var FAMILIAS = [['up', 'UP', 'all the way, until it’s finished'], ['out', 'OUT', 'out of somewhere, or into the light'], ['on', 'ON', 'keep going'], ['off', 'OFF', 'stop it, or separate it'], ['down', 'DOWN', 'write it, or make it less'], ['back', 'BACK', 'return it']];
var CARTAS = [
  { t: 'eat up', k: 'up', n: 'Finish the plate. Nothing left.' }, { t: 'find out', k: 'out', n: 'What nobody knew comes into the light.' },
  { t: 'go on', k: 'on', n: 'Keep going. Don’t stop.' }, { t: 'turn off', k: 'off', n: 'Cut the power. It stops.' },
  { t: 'write down', k: 'down', n: 'Put it on paper.' }, { t: 'give back', k: 'back', n: 'It was hers. It goes to her.' },
  { t: 'use up', k: 'up', n: 'Spend it until there’s none.' }, { t: 'throw out', k: 'out', n: 'Out of the house, into the trash.' },
  { t: 'call off', k: 'off', n: 'Cancel it.' }, { t: 'slow down', k: 'down', n: 'Less speed.' },
  { t: 'call back', k: 'back', n: 'Return the call.' }, { t: 'hold on', k: 'on', n: 'Keep waiting. Don’t hang up.' }
];

var PASSOS = [
  { q: 'Which one is English?', op: [['I looked the word in the dictionary.', 0], ['I looked up the word in the dictionary.', 1]], rev: 'look is your eyes. look up is searching. Two different verbs.' },
  { q: '“Turn on the light.” · “Turn the light on.” Are both of these English?', op: [['Yes, both.', 1], ['Only the first one.', 0], ['Only the second one.', 0]], rev: 'With a noun, the object can go on either side.' },
  { q: 'Last one. Which is English?', op: [['Turn on it.', 0], ['Turn it on.', 1]], rev: 'With it, them, him, her there is only one place: the middle.' }
];

var VOZES = [
  { au: 'v1.mp3', quem: 'ON THE WAY THERE', op: ['I looked it up', 'I looked up it', 'I looked at it'], nota: 'looked it up: IT in the middle.' },
  { au: 'v2.mp3', quem: 'AN HOUR BEFORE', op: ['they called it off', 'they called off it', 'they called it back'], nota: 'called it off: canceled. Same shape.' },
  { au: 'v3.mp3', quem: 'AT THE STORE', op: ['take it back', 'take back it', 'take it out'], nota: 'take it back: return it.' },
  { au: 'v4.mp3', quem: 'A YEAR LATER', op: ['never gave it back', 'never gave back it', 'never gave it up'], nota: 'gave it back: “the book” could go either side; “it” couldn’t.' }
];

var COMODOS = [['KITCHEN', 20, 20, 200, 130], ['LIVING ROOM', 230, 20, 260, 130], ['OFFICE', 500, 20, 180, 130], ['BEDROOM', 20, 160, 200, 140], ['HALL', 230, 160, 150, 140], ['BATH', 390, 160, 290, 140]];
var CASA = [
  { de: 'Pick up the phone.', v: 'Pick', p: 'up', pr: 'it' },
  { de: 'Turn off the light.', v: 'Turn', p: 'off', pr: 'it' },
  { de: 'Write down the number.', v: 'Write', p: 'down', pr: 'it' },
  { de: 'Give back the keys.', v: 'Give', p: 'back', pr: 'them' },
  { de: 'Throw out the boxes.', v: 'Throw', p: 'out', pr: 'them' },
  { de: 'Call back your sister.', v: 'Call', p: 'back', pr: 'her' }
];

var NUNCA = [
  { f: 'look for', k: 'f', cert: 'I’m looking for it.', err: 'I’m looking it for.' },
  { f: 'pick up', k: 'a', cert: 'Pick it up.', err: 'Pick up it.' },
  { f: 'look after', k: 'f', cert: 'She looks after them.', err: 'She looks them after.' },
  { f: 'turn down', k: 'a', cert: 'They turned it down.', err: 'They turned down it.' },
  { f: 'deal with', k: 'f', cert: 'I’ll deal with it.', err: 'I’ll deal it with.' },
  { f: 'run into', k: 'f', cert: 'I ran into him at the store.', err: 'I ran him into at the store.' }
];

var LIGA = [
  { loja: 'Good morning, how can I help?', alvo: 'It arrived broken. I want to send it back.', n: 'send it back: IT in the middle.' },
  { loja: 'Do you have the order number?', alvo: 'I don’t have it. Can you look it up?', n: 'look it up: search.' },
  { loja: 'One moment, I’ll check the system.', alvo: 'Sure. I’ll hold on.', n: 'hold on: no object, nothing in the middle.' },
  { loja: 'We’ll send a new one on Monday.', alvo: 'Thank you. Will somebody call me back?', n: 'call me back: ME is a pronoun too.' },
  { loja: 'Of course. What about the broken one?', alvo: 'I’ll throw the box out.', n: 'throw the box out: a noun, so either side works.' }
];

var S = { i: 0, faixa: 1, fala: {}, resp: {}, armas: {},
  abre: { sel: -1, foi: {}, formas: {} }, nu: -1, tk: {}, fm: { sel: -1, pos: {}, err: '' }, ps: { n: 0, esc: -1 }, vz: { esc: {} }, cs: { n: 0, esc: '' }, nc: { n: 0, esc: '' }, lg: { n: 0 } };

function planta(acesos, alvo) {
  return '<svg class="planta" viewBox="0 0 700 320" role="img" aria-label="The apartment"><rect x="6" y="6" width="688" height="308" rx="12" class="parede-p"/>'
    + COMODOS.map(function (c, i) {
      var on = acesos[i], cx = c[1] + c[3] / 2, cy = c[2] + c[4] / 2;
      return '<g class="comodo' + (on ? ' aceso' : '') + (alvo === i ? ' alvo' : '') + '"><rect x="' + c[1] + '" y="' + c[2] + '" width="' + c[3] + '" height="' + c[4] + '" rx="6"/>'
        + (on ? '<circle cx="' + cx + '" cy="' + (cy - 8) + '" r="' + Math.min(c[3], c[4]) * .42 + '" class="halo"/>' : '')
        + '<circle cx="' + cx + '" cy="' + (cy - 8) + '" r="7" class="lampada"/><text x="' + cx + '" y="' + (c[2] + c[4] - 14) + '" text-anchor="middle">' + c[0] + '</text></g>';
    }).join('') + '</svg>';
}

var R = {};
R.capa = function () {
  return '<div class="capa"><div class="lado-a"><span class="kick">MAIN SERIES · A2 · SIX ROOMS · ONE PLACE FOR IT</span><h1>Turn It <b>On</b></h1>'
    + '<p class="sub">The small word is the verb. And <b>it</b> has only one place to go.</p>'
    + '<div class="chipsx"><span class="pilula">turn it on</span><span class="pilula">pick them up</span><span class="pilula">look for it</span><span class="pilula">Live Class · W·O·L·F</span></div>'
    + '<button type="button" class="btn cheio" data-a="ir" data-n="1">Flip the first switch</button>' + faixaLive() + '</div>'
    + '<div class="capa-d">' + planta({ 1: 1, 3: 1 }, -1) + '</div></div>';
};

R.abre = function (c) {
  return cartasPessoais(c, ABRE, S.abre, 'abre') + '<div class="partes so-prof"><h5>WHAT YOU HEAR · DON’T CORRECT</h5>' + FORMAS.map(function (f) { return '<button type="button" class="chip frase' + (f.erro ? ' erro-ouvido' : '') + (S.abre.formas[f.k] ? ' on' : '') + '" data-a="ab-f" data-v="' + f.k + '">' + f.t + '</button>'; }).join('') + '</div>';
};

R.numero = function (c) {
  var e = S.nu, ok = e >= 0 && NUM[e][1];
  return cab(c) + '<div class="foco"><div class="pergunta vd ja"><small>GUESS FIRST</small><h2>The 100 most common phrasal verbs in English. How many different meanings do they carry between them?</h2></div>'
    + '<div class="tres-b centro">' + NUM.map(function (o, i) { return '<button type="button" class="pilula grande-p' + (e === i ? (o[1] ? ' certo' : ' errado') : '') + '" data-a="nu" data-n="' + i + '">' + o[0] + '</button>'; }).join('') + '</div>'
    + (ok ? '<div class="barras"><div class="barra"><span style="width:18%"></span><b>100 FORMS</b></div><div class="barra"><span style="width:100%"></span><b>559 MEANINGS</b></div><div class="barra"><span style="width:2%"></span><b>6 SMALL WORDS</b></div></div><p class="aprova" style="text-align:center">You can’t memorize a hundred verbs with 559 meanings. You CAN learn six small words. That’s the hour.</p>'
      : e >= 0 ? '<p class="recusa" style="text-align:center">Not that one. Higher or lower?</p>' : '') + '</div>';
};

R.take = function (c) {
  return cab(c) + '<div class="take"><div class="verbo-t">TAKE</div><div class="chaves-t">' + TAKE.map(function (x, i) {
    var on = S.tk[i];
    return '<div class="chave-t vd' + (on ? ' ligada' : '') + '"><button type="button" class="interruptor' + (on ? ' on-i' : '') + '" data-a="tk" data-n="' + i + '" aria-label="take ' + x.p.toLowerCase() + '"><i></i></button><b>take ' + x.p.toLowerCase() + '</b>'
      + (on ? '<p>' + x.sig + '</p><em>' + x.ex + '</em>' : '<p class="dica-aluno">Guess the meaning out loud.</p>') + '</div>';
  }).join('') + '</div></div>';
};

R.familias = function (c) {
  var e = S.fm, feitos = Object.keys(e.pos).length, x = e.sel >= 0 ? CARTAS[e.sel] : null;
  return cab(c) + '<div class="fam-g"><div class="tomadas">' + FAMILIAS.map(function (f) {
    var dentro = CARTAS.filter(function (cc, i) { return e.pos[i] === f[0]; });
    return '<button type="button" class="tomada' + (x ? ' pronta' : '') + '" data-a="fm-t" data-v="' + f[0] + '"><b>' + f[1] + '</b><small>' + f[2] + '</small><span>' + dentro.map(function (d) { return '<i>' + d.t + '</i>'; }).join('') + '</span></button>';
  }).join('') + '</div>'
    + '<div class="lado-l"><h5 class="rot-ouve">' + feitos + ' OF 12 · TAP A VERB</h5><div class="fios">' + CARTAS.map(function (cc, i) { if (e.pos[i]) return ''; return '<button type="button" class="pilula' + (e.sel === i ? ' sel-f' : '') + '" data-a="fm" data-n="' + i + '">' + cc.t + '</button>'; }).join('') + '</div>'
    + (x ? '<div class="pede vd"><small>' + x.t.toUpperCase() + '</small><b>' + x.n + '</b></div>' : '') + (e.err ? '<p class="recusa">' + e.err + '</p>' : '') + (feitos >= 12 ? '<p class="aprova">Twelve verbs sorted by the small word, not by memory.</p>' : '') + '</div></div>';
};

R.passos = function (c) {
  var e = S.ps, n = e.n, fim = n >= PASSOS.length;
  if (fim) return cab(c) + trilha(PASSOS, n) + '<div class="foco"><div class="pergunta vd"><small>THREE STEPS</small><h2>A noun: either side. IT: the middle, always.</h2></div><div class="grande vd"><span>turn on <u>the light</u> · turn <u>the light</u> on</span><span>turn <u>it</u> on · never <s>turn on it</s></span></div></div>';
  var x = PASSOS[n], ok = e.esc >= 0 && x.op[e.esc][1];
  return cab(c) + trilha(PASSOS, n) + '<div class="foco"><div class="pergunta vd ja"><small>STEP ' + (n + 1) + ' OF 3</small><h2>' + x.q + '</h2></div><div class="versoes duas-v">' + x.op.map(function (o, i) { return '<button type="button" class="versao' + (e.esc === i ? (o[1] ? ' certo' : ' errado') : '') + '" data-a="ps" data-n="' + i + '">' + o[0] + '</button>'; }).join('') + '</div>'
    + (ok ? '<p class="aprova" style="text-align:center">' + x.rev + '</p><div style="text-align:center"><button type="button" class="btn" data-a="ps-prox">Next step</button></div>' : e.esc >= 0 ? '<p class="recusa" style="text-align:center">Not that one. Read them all again, out loud.</p>' : '') + '</div>';
};

R.vozes = function (c) {
  var e = S.vz;
  return cab(c) + '<div class="ouve-g">' + VOZES.map(function (x, i) {
    var ouviu = (S.ouviu || {})[x.au], esc = e.esc[i], ok = esc === 0;
    return '<div class="ouve-c vd"><div class="toca-linha">' + tocar(x.au) + '<b>' + x.quem + '</b></div>'
      + (ouviu ? '<div class="tres-b">' + ordem(x.op.map(function (o, j) { return [o, j]; }), i + 3).map(function (o) { return '<button type="button" class="pilula' + (esc === o[1] ? (o[1] === 0 ? ' certo' : ' errado') : '') + '" data-a="vz" data-n="' + i + '" data-v="' + o[1] + '">' + o[0] + '</button>'; }).join('') + '</div>' : '<p class="transcricao vazia">Play it first.</p>')
      + (ok ? '<p class="aprova">' + x.nota + '</p>' + transcricao(x.au, TR[x.au], 'vz' + i) : esc > 0 ? '<p class="recusa">Play it again. Where is IT?</p>' : '') + '</div>';
  }).join('') + '</div>';
};

R.casa = function (c) {
  var e = S.cs, n = e.n, acesos = {};
  for (var k = 0; k < Math.min(n, 6); k++) acesos[k] = 1;
  if (n >= CASA.length) return cab(c) + trilha(CASA, n) + '<div class="mesa-c"><div class="lado-l">' + planta(acesos, -1) + '</div><div class="lado-l"><div class="pergunta vd"><small>SIX ROOMS</small><h2>Every light is on. Every pronoun went in the middle.</h2></div></div></div>';
  var x = CASA[n], ok = e.esc === 'meio';
  if (ok) acesos[n] = 1;
  function slot(lado) { var cheio = e.esc === lado; return '<button type="button" class="slot' + (cheio ? (ok ? ' certo' : ' errado') : '') + '" data-a="cs" data-v="' + lado + '">' + (cheio ? x.pr : '+') + '</button>'; }
  return cab(c) + trilha(CASA, n) + '<div class="mesa-c"><div class="lado-l">' + planta(acesos, n) + '</div><div class="lado-l"><div class="pede vd"><small>THE INSTRUCTION</small><b>' + x.de + '</b></div><h5 class="rot-ouve">SAY IT WITH “' + x.pr.toUpperCase() + '”. TAP WHERE IT GOES.</h5>'
    + '<div class="frase-s"><span>' + x.v + '</span>' + slot('meio') + '<span>' + x.p + '</span>' + slot('fim') + '<span>.</span></div>'
    + (ok ? '<p class="aprova">Say it twice: “' + x.v + ' ' + x.pr + ' ' + x.p + '.” The room lights up.</p><div><button type="button" class="btn" data-a="cs-prox">Next room</button></div>' : e.esc ? '<p class="recusa">The light stays off. With a pronoun, there is only one place.</p>' : '') + '</div></div>';
};

R.nunca = function (c) {
  var e = S.nc, n = e.n, fim = n >= NUNCA.length;
  if (fim) return cab(c) + trilha(NUNCA, n) + '<div class="foco"><div class="pergunta vd"><small>SIX VERBS</small><h2>No rule tells you which is which. Learn these few by heart: look for, look after, deal with, run into.</h2></div></div>';
  var x = NUNCA[n], ok = e.esc === x.k;
  return cab(c) + trilha(NUNCA, n) + '<div class="foco"><div class="balao vd"><small>SAY IT WITH IT</small><p>' + x.f + '</p></div><div class="dois-l">'
    + '<button type="button" class="lado-btn' + (e.esc === 'a' ? (ok ? ' certo' : ' errado') : '') + '" data-a="nc" data-v="a"><b>IT OPENS</b><small>it goes in the middle</small></button>'
    + '<button type="button" class="lado-btn' + (e.esc === 'f' ? (ok ? ' certo' : ' errado') : '') + '" data-a="nc" data-v="f"><b>NEVER OPENS</b><small>it waits at the end</small></button></div>'
    + (ok ? '<p class="aprova" style="text-align:center">“' + x.cert + '” · never <s>' + x.err + '</s></p><div style="text-align:center"><button type="button" class="btn" data-a="nc-prox">Next verb</button></div>' : e.esc ? '<p class="recusa" style="text-align:center">Not that side. Say the sentence with IT again, slowly.</p>' : '') + '</div>';
};

R.ligacao = function (c) {
  var e = S.lg, n = Math.min(e.n, LIGA.length - 1), x = LIGA[n];
  return cab(c) + trilha(LIGA, e.n) + '<div class="mesa-c"><div class="lado-l"><div class="aberta vd" style="background-image:url(' + img('telefone') + ')"><span>THE STORE · ON THE LINE</span></div></div>'
    + '<div class="lado-l"><div class="pede vd"><small>THE STORE SAYS</small><b>“' + x.loja + '”</b></div>' + fala('lg' + n, ['I want to … / Can you …? / I’ll …'], ['send it back', 'look it up', 'hold on', 'call me back', 'throw … out']) + mostra('lg' + n, x.alvo + '<br><small>' + x.n + '</small>', 1)
    + (n < LIGA.length - 1 ? '<div><button type="button" class="btn" data-a="lg-prox">Next line</button></div>' : '<p class="aprova">A whole phone call, every object in its place.</p>') + '</div></div>';
};

R.fim = function (c) {
  var f = S.abre.formas, lembra = FORMAS.filter(function (x) { return f[x.k]; }).map(function (x) { return x.t; });
  return cab(c) + '<div class="fim">' + escritaFinal('fim', (S.txt || {}).fim || '', (S.salvo || {}).fim, 'Turn it off before you leave.\nPick them up, please.\n…', 'Your home instructions',
    ['Turn it off', 'Pick them up', 'Throw it out', 'Put it away', 'Call me back', 'I’m looking for it'], ['FOUR INSTRUCTIONS FOR YOUR HOME', lembra.length ? 'In scene I your teacher heard: ' + lembra.join(', ') + '. Now with the pronoun in the middle.' : 'Four instructions with it or them, in the middle.'])
    + '<div class="lado-fim">' + planta({ 0: 1, 1: 1, 2: 1, 3: 1, 4: 1, 5: 1 }, -1) + '<div class="grande vd"><span>turn <u>it</u> on · pick <u>them</u> up</span><span>turn on <u>the light</u> · turn <u>the light</u> on</span><span>look for <u>it</u> · deal with <u>it</u></span></div>'
    + mostra('fim', 'Turn it off before you leave.<br>Your shoes are in the hall. Pick them up, please.<br>The milk is old. Throw it out.<br>I’m looking for my keys. Have you seen them?', 1)
    + '<p class="hw"><a class="pilula" href="HW/" target="_blank" rel="noopener">Homework for the student →</a></p></div></div>';
};

TOQUES['ab-f'] = function (b, n, v) { S.abre.formas[v] = !S.abre.formas[v]; };
TOQUES.nu = function (b, n) { S.nu = n; };
TOQUES.tk = function (b, n) { S.tk[n] = !S.tk[n]; };
TOQUES.fm = function (b, n) { S.fm.sel = n; S.fm.err = ''; };
TOQUES['fm-t'] = function (b, n, v) {
  var e = S.fm; if (e.sel < 0) { e.err = 'Tap a verb first.'; return; }
  var x = CARTAS[e.sel]; if (x.k === v) { e.pos[e.sel] = v; e.sel = -1; e.err = ''; } else e.err = 'Not that small word. Read the meaning again: ' + x.n;
};
TOQUES.ps = function (b, n) { S.ps.esc = n; };
TOQUES['ps-prox'] = function () { S.ps = { n: S.ps.n + 1, esc: -1 }; };
TOQUES.vz = function (b, n, v) { S.vz.esc[n] = +v; };
TOQUES.cs = function (b, n, v) { S.cs.esc = v; };
TOQUES['cs-prox'] = function () { S.cs = { n: S.cs.n + 1, esc: '' }; };
TOQUES.nc = function (b, n, v) { S.nc.esc = v; };
TOQUES['nc-prox'] = function () { S.nc = { n: S.nc.n + 1, esc: '' }; };
TOQUES['lg-prox'] = function () { S.lg.n++; };

/* 10/11/2026 · AS EXPLICAÇÕES (kit/formatos3.js) · G6 · uma cena curta nova (k: gx) antes de passos.
   Explicação 100% em inglês: see → notice → use (o aluno fala ou escreve uma frase dele no fim). */
var GX_EXPLICA = { formato: 'escada', titulo: 'One phrasal verb. Climb it one step at a time.',
  degraus: [
    { r: 'verb', f: 'Turn <b>on</b> the light.', d: 'The small word is part of the verb. With a noun, it can go before it.' },
    { r: 'noun', f: 'Turn the light <b>on</b>.', d: 'Or after the noun. Both work.' },
    { r: 'it', f: 'Turn <b>it</b> on.', d: 'With it, them, him, her, me: only the middle.' },
    { r: 'them', f: 'Pick <b>them</b> up.', d: 'Same with them. The pronoun goes in the middle.' },
    { r: 'never opens', f: 'Look <b>for</b> it.', d: 'Some never open: look for it, deal with it.' }
  ],
  nota: 'With a noun, two ways: turn <b>on the light</b> or turn <b>the light on</b>. With a pronoun, only the middle: turn <b>it</b> on. Some phrasal verbs never open: look <b>for</b> it, deal <b>with</b> it.',
  uso: { p: 'Your turn. You enter a dark apartment. Say three sentences with turn on, pick up or look for.', molde: ['Turn on the …', 'Turn the … on.', 'Turn it on.'], ex: 'Turn on the light. Pick the box up. Look for it under the bed.' } };
R.gx = function (c) { return cab(c) + FM.ex('gx_escada', GX_EXPLICA); };
