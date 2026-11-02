/* ============================================================
   THE HOLLYWOOD FIXER · THE SPOTLIGHT · LIVE CLASS  06/10/2026
   Main series A2 · want / ask / tell + PERSON + to · a lacuna vazia
   devolve o verbo ao sujeito · say não leva pessoa.
   Erros universais: "wants that you go", "told me do", "said me".
   O MUNDO (da aula velha): o aluno é o fixer de um set; uma foto da
   estrela (Nadia) vazou às 23h; quatro recados de voz (Theo, Margo, Dan,
   Theo). Os quatro áudios abriam com uma palavra de direção de voz lida
   em voz alta ("Tired", "Serious"…): cortada em 06/10 (originais em
   _audio-original/); a transcrição é o que sobrou, conferida no whisper.
   22/10/2026 · OS FORMATOS NOVOS (kit/formatos.js + formatos2.js), mesmas
   páginas. A auditoria: três versões quase iguais do bilhete (V), "escolha
   todos os verbos" (VI), dois lados de pergunta (III). Agora: III liga cada
   linha à pessoa que faz o segundo verbo, os pares ficam lado a lado
   (FM.liga); V monta o bilhete passado adiante e confere (FM.pergunta); VI
   certo ou errado, dizer a frase certa (FM.verdadeOuMentira). II, IV e VII
   (por sentido, com o holofote e o recibo) ficam. VIII: três crises com o
   cartão da reviravolta (FM.twist), e deixa de ser EXTRA.
   A CARA: o TAPETE VERMELHO à noite com quatro placas de nome no chão e
   um HOLOFOTE em SVG que varre até quem a frase manda; bilhete errado
   volta rasgado; o recibo do celular em CSS. Fila: FILA-LIVE-386.md · 072.
   ============================================================ */
var L = [
  { k: 'capa', est: null, img: 'fundo' },
  { k: 'abre', est: 'o', min: 7, img: 'mesa', rot: 'I · The Desk', t: 'Nine at night. You fix problems for famous people.', p: 'Pick a card. Answer out loud. Any answer is OK. Nobody corrects you.' },
  { k: 'recados', est: 'l', min: 7, img: 'fundo', rot: 'II · Four Voicemails', t: 'The photo leaked at eleven. Four messages are the whole evening.', p: 'Play one. Then say who DID the thing, not who is speaking.' },
  { k: 'falta', est: 'f', min: 6, img: 'fundo', rot: 'III · The Missing Person', t: 'Same words. One person of difference.', p: 'Read each line out loud. Tap a line, then tap the person who does the second verb.' },
  { k: 'holofote', est: 'f', min: 6, img: 'fundo', rot: 'IV · The Spotlight', t: 'The light goes where the sentence sends it.', p: 'Read the clue. Put a person in the gap, or leave it empty. Watch the light. Say the line.' },
  { k: 'bilhetes', est: 'o', min: 7, img: 'mesa', rot: 'V · Set Notes', t: 'Six notes. You pass them on, one by one.', p: 'Read the note. Build how you pass it on, out loud. Tap Check. Then say it to your teacher, as if they were the person.' },
  { k: 'say', est: 'f', min: 6, img: 'fundo', rot: 'VI · Say Takes Nobody', t: 'Four verbs. Three carry a person. One never does.', p: 'Right or wrong? If it is wrong, say the line right.' },
  { k: 'culpa', est: 'f', min: 6, extra: 1, img: 'garagem', rot: 'VII · Who Asked Who', t: 'Eleven twenty. The studio is about to blame Nadia.', p: 'Read the message. Read the receipt. Then answer, one step at a time.' },
  { k: 'crises', est: 'o', min: 7, img: 'espera', rot: 'VIII · Three Crises', t: 'You are the fixer. Three crises on set.', p: 'Your teacher plays everybody else. Solve each crisis out loud, with a person in every gap. Then tap the twist.' },
  { k: 'fim', est: 'w', min: 6, img: 'fundo', rot: 'IX · That’s a Wrap', t: 'The official note goes out. Your sentences from scene I come back.', p: 'Write three notes to pass on: one want, one ask, one tell. It goes to your My notes.' }
];

var TR = {
  '01-theo-carro.mp3': 'Hi, it’s Theo. Nadia asked me to move the car. I moved it at nine. She was still inside.',
  '02-margo-nada.mp3': 'It’s Margo, from the studio. The studio wants her to say nothing tonight. Tell her not to post anything.',
  '03-dan-esperar.mp3': 'Dan here. Nobody told me to wait. I went home at 10:30.',
  '04-theo-apagar.mp3': 'Theo again. She asked to delete the photos. It’s done.'
};

var ABRE = [
  { k: 'Family', q: 'What does your family want you to do this year?', fup: 'And do you want to do it?', st: ['My family wants me …'], ex: 'My mom wants me to visit her more.' },
  { k: 'Work', q: 'Who asked you to do something this week? What was it?', fup: 'Did you do it?', st: ['My boss asked me …'], ex: 'My boss asked me to finish a report.' },
  { k: 'You', q: 'What do you tell people to do all the time?', fup: 'Do they listen?', st: ['I always tell …'], ex: 'I always tell my brother to call Grandma.' }
];
var FORMAS = [{ k: 'gap', t: 'PERSON + TO' }, { k: 'that', t: 'WANTS THAT YOU …', erro: 1 }, { k: 'semto', t: 'TOLD ME DO', erro: 1 }, { k: 'said', t: 'SAID ME', erro: 1 }];

var RECADOS = [
  { quem: 'THEO', papel: 'THE ASSISTANT', hora: '9:40 PM', au: '01-theo-carro.mp3', q: 'Who moved the car?', op: ['Theo moved it.', 'Nadia moved it.'], k: 0, w: 'Asked ME to move: the person in the gap does it.' },
  { quem: 'MARGO', papel: 'THE STUDIO', hora: '10:15 PM', au: '02-margo-nada.mp3', q: 'Who says nothing tonight?', op: ['The studio.', 'Nadia.'], k: 1, w: 'The studio wants. Nadia stays quiet.' },
  { quem: 'DAN', papel: 'THE DRIVER', hora: '10:50 PM', au: '03-dan-esperar.mp3', q: 'Who waited?', op: ['Nobody waited.', 'Dan waited.'], k: 0, w: 'Nobody put him in the gap, so he went home.' },
  { quem: 'THEO', papel: 'THE ASSISTANT', hora: '11:20 PM', au: '04-theo-apagar.mp3', q: 'Who deleted the photos, in this sentence?', op: ['Theo deleted them.', 'Nadia deleted them.'], k: 1, w: 'Nobody in the gap: the sentence says SHE deleted them. Remember this one.' }
];

/* 22/10/2026 · OS FORMATOS NOVOS (kit/formatos.js) */
/* III · ligar: os pares mínimos lado a lado */
var FALTA = { formato: 'liga', titulo: 'Who does the second verb? Tap a line, then the person.', pares: [
  ['She wants to sign it.', 'She signs it'],
  ['She wants you to sign it.', 'You sign it'],
  ['I asked to wait outside.', 'I wait'],
  ['I asked them to wait outside.', 'They wait'],
  ['He asked to move the car.', 'He moves it'],
  ['He asked me to move the car.', 'I move it']
], ordemDireita: [3, 5, 1, 0, 4, 2] };

var PESSOAS = ['NADIA', 'THEO', 'MARGO', 'DAN'];
var HOLO = [
  { s: 'Nadia', v: 'asked', a: 'move the car', alvo: 'THEO', pista: 'Theo moves the car.', f: 'Nadia asked Theo to move the car.' },
  { s: 'The studio', v: 'wants', a: 'say nothing', alvo: 'NADIA', pista: 'Nadia says nothing.', f: 'The studio wants Nadia to say nothing.' },
  { s: 'Nadia', v: 'told', a: 'wait outside', alvo: 'DAN', pista: 'Dan waits outside.', f: 'Nadia told Dan to wait outside.' },
  { s: 'Margo', v: 'asked', a: 'delete the photos', alvo: '', quem: 'MARGO', pista: 'Margo deletes them herself.', f: 'Margo asked to delete the photos.' },
  { s: 'Theo', v: 'wants', a: 'go home', alvo: '', quem: 'THEO', pista: 'Theo goes home.', f: 'Theo wants to go home.' },
  { s: 'Dan', v: 'told', a: 'call the studio', alvo: 'MARGO', pista: 'Margo calls the studio.', f: 'Dan told Margo to call the studio.' }
];

/* V · montar o bilhete passado adiante */
var BILHETES = [
  { p: '<b>The director → Nadia:</b> “Be on set at 6 AM.”<br>(the director · want · you · be on set · 6 AM)', r: 'The director <b>wants you to be</b> on set at 6 AM.' },
  { p: '<b>Margo → the driver:</b> “Please pick me up at 5 AM.”<br>(Margo · ask · you · pick her up · 5 AM)', r: 'Margo <b>asked you to pick</b> her up at 5 AM.' },
  { p: '<b>Nadia → Theo:</b> “Bring the black coat.”<br>(Nadia · tell · you · bring the black coat)', r: 'Nadia <b>told you to bring</b> the black coat.' },
  { p: '<b>The studio → everybody:</b> “Sign the new paper.”<br>(the studio · want · everybody · sign the new paper)', r: 'The studio <b>wants everybody to sign</b> the new paper.' },
  { p: '<b>Theo → the lawyer:</b> “Can you read it first?”<br>(Theo · ask · you · read it first)', r: 'Theo <b>asked you to read</b> it first.' },
  { p: '<b>The director → the press:</b> “Don’t come before 8 AM.”<br>(the director · tell · you · not come before 8 AM)', r: 'The director <b>told you not to come</b> before 8 AM.' }
];
var PRESA = 'want + <b>person</b> + to<br>ask + <b>person</b> + to<br>tell + <b>person</b> + to<br>no person after the verb? <b>She</b> does it<br><b>say</b> never takes a person';

/* VI · certo ou errado, dizer a frase certa */
var SAY = { formato: 'verdadeOuMentira', rotulos: ['Right', 'Wrong'], titulo: 'Right or wrong? If it is wrong, say it right.', itens: [
  { f: 'She said me to wait outside.', t: false, c: 'She <b>told me</b> to wait outside. SAY takes nobody.' },
  { f: 'They said nothing all night.', t: true },
  { f: 'Margo told me she was leaving.', t: true },
  { f: 'Nobody said me to stay.', t: false, c: 'Nobody <b>told me</b> to stay.' },
  { f: 'He said that the photos were gone.', t: true },
  { f: 'The studio said Nadia to be quiet.', t: false, c: 'The studio <b>told Nadia</b> to be quiet. Or: The studio <b>wants Nadia</b> to be quiet.' }
] };

var PASSOS = [
  { q: 'The message says SHE ASKED TO DELETE. Who deletes, in that sentence?', op: ['Nadia.', 'Theo.'], k: 0, w: 'Nothing in the gap: the sentence sends it back to her.' },
  { q: 'The receipt says the phone was T. MARSH. Who really deleted them?', op: ['Nadia.', 'Theo.'], k: 1, w: 'Theo. The message and the receipt don’t agree.' },
  { q: 'What did Theo mean to write?', op: ['She asked me to delete the photos.', 'She said to delete the photos.'], k: 0, w: 'One word. It was never in the message.' },
  { q: 'Did Theo lie?', op: ['Yes. He blamed her.', 'No. He left a person out.'], k: 1, w: 'Nobody lied. A person fell out of the gap.' },
  { q: 'Say the true sentence, whole.', op: ['Nadia deleted the photos.', 'Nadia asked Theo to delete the photos.'], k: 1, w: 'That’s the line that goes to the studio tonight.' }
];

/* VIII · três crises, cada uma com a sua reviravolta */
var CRISES = [
  { t: 'THE RAIN', sit: 'It’s raining. The outdoor scene can’t happen. The director is angry.', pr: 'What does the director want everybody to do? What do you tell the crew to do? What do you ask the studio to do?', twist: 'Twist! The director shouts: “I want YOU to tell the actors!” Say it: I tell the actors to …' },
  { t: 'THE LATE STAR', sit: 'Nadia is two hours late. The actors are waiting.', pr: 'What do the actors want you to do? What do you tell Theo to do? What do you ask Nadia to do next time?', twist: 'Twist! Nadia calls: “Tell Theo to bring the black coat!” Pass it on: Nadia wants Theo to …' },
  { t: 'THE REPORTER', sit: 'A reporter is at the gate with a camera.', pr: 'What does the reporter want Nadia to do? What do you tell security to do? What do you ask the reporter to do?', twist: 'Twist! The reporter says: “Please ask Nadia to answer one question.” Pass it on: The reporter asked me to …' }
].map(function (x, i) {
  return { formato: 'twist', titulo: 'Crisis ' + (i + 1) + ' · ' + x.t, cartoes: [['THE SITUATION', x.sit], ['SAY ALL THREE', x.pr]], twist: x.twist, botao: 'Reveal the twist' };
});

var S = { i: 0, faixa: 1, fala: {}, resp: {}, armas: {},
  abre: { sel: -1, foi: {}, formas: {} }, rc: { sel: 0, esc: {} }, ho: { n: 0, esc: null }, cu: { n: 0, esc: -1 } };

function tapete(luz, ok) {
  var xs = { NADIA: 120, THEO: 270, MARGO: 420, DAN: 570 }, x = luz && xs[luz] ? xs[luz] : 345;
  return '<svg class="tapete" viewBox="0 0 690 260" role="img" aria-label="The red carpet"><defs><radialGradient id="ch" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#ffe9b0" stop-opacity=".55"/><stop offset="1" stop-color="#ffe9b0" stop-opacity="0"/></radialGradient><linearGradient id="cone" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffe9b0" stop-opacity=".02"/><stop offset="1" stop-color="#ffe9b0" stop-opacity=".22"/></linearGradient></defs>'
    + '<rect width="690" height="260" class="ceu"/><path d="M40 260 L250 120 L440 120 L650 260 Z" class="carpete"/>'
    + '<g class="faixa-c">' + [0, 1, 2, 3, 4, 5].map(function (i) { return '<line x1="' + (60 + i * 114) + '" y1="20" x2="' + (60 + i * 114) + '" y2="100"/>'; }).join('') + '<path d="M40 40 Q345 70 650 40"/></g>'
    + '<g class="luz' + (ok ? ' ok' : '') + '" transform="translate(' + (x - 345) + ' 0)">' + (luz ? '<animateTransform attributeName="transform" type="translate" from="0 0" to="' + (x - 345) + ' 0" dur="0.9s" fill="freeze"/>' : '') + '<path d="M335 0 L355 0 L385 215 L305 215 Z" fill="url(#cone)"/><ellipse cx="345" cy="215" rx="70" ry="18" fill="url(#ch)"/></g>'
    + PESSOAS.map(function (p) { return '<g class="placa' + (luz === p ? ' acesa' : '') + '"><rect x="' + (xs[p] - 48) + '" y="200" width="96" height="30" rx="4"/><text x="' + xs[p] + '" y="220" text-anchor="middle">' + p + '</text></g>'; }).join('')
    + '</svg>';
}

var R = {};
R.capa = function () {
  return '<div class="capa"><div class="lado-a"><span class="kick">MAIN SERIES · A2 · SCENE 44 · TAKE 1</span><h1>The Hollywood <b>Fixer</b></h1>'
    + '<p class="sub">A photo leaked at eleven. Every message tonight has <b>a person in the gap</b>, or doesn’t.</p>'
    + '<div class="chipsx"><span class="pilula">want + person + to</span><span class="pilula">asked me to</span><span class="pilula">told him to</span><span class="pilula">Live Class · W·O·L·F</span></div>'
    + '<button type="button" class="btn cheio" data-a="ir" data-n="1">Action</button>' + faixaLive() + '</div>'
    + '<div class="capa-d">' + tapete('THEO', 1) + '</div></div>';
};

R.abre = function (c) {
  return cartasPessoais(c, ABRE, S.abre, 'abre') + '<div class="partes so-prof"><h5>WHAT YOU HEAR · DON’T CORRECT</h5>' + FORMAS.map(function (f) { return '<button type="button" class="chip frase' + (f.erro ? ' erro-ouvido' : '') + (S.abre.formas[f.k] ? ' on' : '') + '" data-a="ab-f" data-v="' + f.k + '">' + f.t + '</button>'; }).join('') + '</div>';
};

R.recados = function (c) {
  var e = S.rc, x = RECADOS[e.sel], esc = e.esc[e.sel], ouviu = (S.ouviu || {})[x.au];
  var lista = '<div class="caixa-voz"><h5>VOICEMAIL · 4 NEW</h5>' + RECADOS.map(function (r, i) { var feito = e.esc[i] === r.k; return '<button type="button" class="vm' + (e.sel === i ? ' on' : '') + (feito ? ' feito' : '') + '" data-a="rc" data-n="' + i + '"><b>' + r.quem + '</b><small>' + r.papel + '</small><em>' + r.hora + '</em></button>'; }).join('') + '</div>';
  var lado = '<div class="pede vd"><small>' + x.hora + ' · ' + x.quem + ', ' + x.papel + '</small><div class="toca-linha">' + tocar(x.au) + '<div>' + transcricao(x.au, TR[x.au]) + '</div></div></div>'
    + (ouviu ? '<div class="pergunta vd ja"><small>WHO DID IT?</small><h2>' + x.q + '</h2></div><div class="tres-b">' + x.op.map(function (o, i) { return '<button type="button" class="pilula grande-p' + (esc === i ? (i === x.k ? ' certo' : ' errado') : '') + '" data-a="rc-v" data-n="' + i + '">' + o + '</button>'; }).join('') + '</div>'
      + (esc === x.k ? '<p class="aprova">' + x.w + '</p>' : esc !== undefined ? '<p class="recusa">Listen again. Who is in the middle of the sentence?</p>' : '') : '<p class="dica-aluno">Play it first. The question comes after.</p>');
  return cab(c) + '<div class="mesa-c"><div class="lado-l">' + lista + '</div><div class="lado-l">' + lado + '</div></div>';
};

R.falta = function (c) {
  return cab(c) + '<div class="hw-um">' + FM.ex('fa', FALTA) + '</div>';
};

R.holofote = function (c) {
  var e = S.ho, n = e.n, fim = n >= HOLO.length;
  if (fim) return cab(c) + trilha(HOLO, n) + '<div class="mesa-c"><div class="lado-l">' + tapete(null) + '</div><div class="lado-l"><div class="pergunta vd"><small>SIX LINES</small><h2>The light goes where you send it. An empty gap sends it back.</h2></div></div></div>';
  var x = HOLO[n], esc = e.esc, ok = esc !== null && esc === x.alvo, luz = esc === null ? null : esc === '' ? (x.quem || null) : esc;
  var frase = x.s + ' ' + x.v + ' <span class="lacuna-h' + (esc !== null ? ' cheia' : '') + '">' + (esc === null ? '___' : esc === '' ? '∅' : esc.charAt(0) + esc.slice(1).toLowerCase()) + '</span> to ' + x.a + '.';
  return cab(c) + trilha(HOLO, n) + '<div class="mesa-c"><div class="lado-l">' + tapete(luz, ok) + '</div><div class="lado-l"><div class="pede vd"><small>THE CLUE</small><b>' + x.pista + '</b></div><div class="balao vd"><p>' + frase + '</p></div>'
    + (ok ? '<p class="aprova">Say it: “' + x.f + '”</p><div><button type="button" class="btn" data-a="ho-prox">Next line</button></div>'
      : '<div class="tres-b">' + PESSOAS.map(function (p) { return '<button type="button" class="pilula grande-p' + (esc === p ? ' errado' : '') + '" data-a="ho" data-v="' + p + '">' + p + '</button>'; }).join('') + '<button type="button" class="pilula grande-p' + (esc === '' ? ' errado' : '') + '" data-a="ho" data-v="">EMPTY GAP</button></div>'
        + (esc !== null ? '<p class="recusa">The light stopped on the wrong person. Who does the second verb in the clue?</p>' : '')) + '</div></div>';
};

R.bilhetes = function (c) {
  return cab(c) + FM.pergunta('bi', BILHETES, { regra: PRESA, titulo: 'Build the note. Say it to your teacher.', depoisRot: 'Then', depois: ['Do it!', 'Right away!', 'Who? Me?'] });
};

R.say = function (c) {
  return cab(c) + '<div class="fm-com-regra"><div class="fm-mio">' + FM.ex('sy', SAY) + '</div>' + FM.regra('want + <b>person</b> + to<br>ask + <b>person</b> + to<br>tell + <b>person</b> + to<br><b>say</b> takes nobody:<br>He said <b>that</b> …<br>They said nothing.') + '</div>';
};

R.culpa = function (c) {
  var e = S.cu, n = Math.min(e.n, PASSOS.length - 1), x = PASSOS[n], ok = e.esc === x.k, fim = e.n >= PASSOS.length;
  var provas = '<div class="lado-l"><div class="msg-c"><small>THEO · 11:20 PM</small><p>She asked to delete the photos. It’s done.</p></div><div class="recibo"><small>PHONE LOG</small><b>PHOTOS DELETED</b><span>11:18 PM</span><span class="dev' + (e.n >= 1 ? ' marca-r' : '') + '">DEVICE: T. MARSH</span></div></div>';
  if (fim) return cab(c) + trilha(PASSOS, e.n) + '<div class="mesa-c">' + provas + '<div class="lado-l"><div class="pergunta vd"><small>CASE CLOSED</small><h2>Nobody lied. One person fell out of one gap, and it almost cost somebody her name.</h2></div><p class="aprova">Nadia asked Theo to delete the photos.</p></div></div>';
  return cab(c) + trilha(PASSOS, e.n) + '<div class="mesa-c">' + provas + '<div class="lado-l"><div class="pergunta vd ja"><small>STEP ' + (n + 1) + ' OF 5</small><h2>' + x.q + '</h2></div><div class="versoes">' + x.op.map(function (o, i) { return '<button type="button" class="versao' + (e.esc === i ? (ok ? ' certo' : ' errado') : '') + '" data-a="cu" data-n="' + i + '">' + o + '</button>'; }).join('') + '</div>'
    + (ok ? '<p class="aprova">' + x.w + '</p><div><button type="button" class="btn" data-a="cu-prox">' + (n < PASSOS.length - 1 ? 'Next step' : 'Close the case') + '</button></div>' : e.esc >= 0 ? '<p class="recusa">Read the message and the receipt again.</p>' : '') + '</div></div>';
};

R.crises = function (c) {
  return cab(c) + '<div class="hw-tres">' + CRISES.map(function (x, i) { return FM.ex('cr' + i, x); }).join('') + '</div>';
};

R.fim = function (c) {
  var f = S.abre.formas, lembra = FORMAS.filter(function (x) { return f[x.k]; }).map(function (x) { return x.t; });
  return cab(c) + '<div class="fim">' + escritaFinal('fim', (S.txt || {}).fim || '', (S.salvo || {}).fim, 'My family wants me to …\nI asked … to …\nI always tell … to …', 'Your three notes',
    ['My family wants me to ', 'I asked my ', 'I told ', ' not to ', 'wants us to '], ['THREE NOTES TO PASS ON', lembra.length ? 'In scene I your teacher heard: ' + lembra.join(', ') + '. Now with a person in every gap.' : 'One want, one ask, one tell. A person in every gap.'])
    + '<div class="lado-fim"><div class="msg-c oficial"><small>THE OFFICIAL NOTE</small><p>Nadia asked her assistant to delete the photos. The studio wants everybody to respect her privacy.</p></div><div class="grande vd"><span>want <u>you to</u> go</span><span>asked <u>me to</u> wait · told <u>him to</u> stay</span><span>he <u>told me</u> · never <s>said me</s></span></div>'
    + mostra('fim', 'My family wants me to study more.<br>I asked my friend to help me move.<br>I always tell my sister not to worry.', 1)
    + '<p class="hw"><a class="pilula" href="HW/" target="_blank" rel="noopener">Homework for the student →</a></p></div></div>';
};

TOQUES['ab-f'] = function (b, n, v) { S.abre.formas[v] = !S.abre.formas[v]; };
TOQUES.rc = function (b, n) { S.rc.sel = n; };
TOQUES['rc-v'] = function (b, n) { S.rc.esc[S.rc.sel] = n; };
TOQUES.ho = function (b, n, v) { S.ho.esc = v || ''; };
TOQUES['ho-prox'] = function () { S.ho = { n: S.ho.n + 1, esc: null }; };
TOQUES.cu = function (b, n) { S.cu.esc = n; };
TOQUES['cu-prox'] = function () { S.cu = { n: S.cu.n + 1, esc: -1 }; };
