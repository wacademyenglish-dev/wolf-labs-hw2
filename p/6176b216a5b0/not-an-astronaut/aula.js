/* ============================================================
   I'M NOT AN ASTRONAUT · MISSION CONTROL · LIVE CLASS  05/10/2026
   WOLFLIX A2 · somebody / anybody / nobody (+ something / anything /
   nothing) · uma negação por frase.
   O MUNDO: a sala de controle da missão Hail Mary. A tripulação sumiu
   do radar. O aluno é o controlador: varre as seis salas da nave, monta
   o relatório peça por peça ("Nobody is in the lab. Somebody left the
   microscope on."), atende a Terra no rádio e escreve o relatório final.
   Motor da Stressed Out (contrato com o fio 05-sala.js): S.i é a cena,
   vai(n) troca, botões do professor em footer.foot, .zm e .so-prof; o
   mesmo estado gera o mesmo DOM dos dois lados (rodízio fixo); texto
   digitado passa ao outro lado sozinho.
   Mantido da aula antiga (24/09): o trailer oficial (m08TxIsFTRI) e as
   falas reais lidas da legenda manual, as perguntas da lanchonete, as
   recusas no telefone com a Eva e as perguntas pessoais.
   ============================================================ */
window.__wlModoAlunoProprio = true;
var ALUNO = /(^|[?&])papel=aluno/.test(location.search) || document.documentElement.classList.contains('wl-sala-aluno');
var NA_SALA = /(^|[?&])sala=/.test(location.search) && window.parent !== window;

/* ---------- o roteiro ---------- */
var EST = { w: 'Write', o: 'Out loud', l: 'Listen', f: 'Focus' };
var L = [
  { k: 'capa', est: null, img: 'controle' },
  { k: 'mundo', est: 'o', min: 8, img: 'controle', rot: 'I · Warm-up and The Interview', t: 'Before the transmission: you, then a man who wakes up alone.', p: 'Answer three questions about your life. Then ask your teacher questions and find out who he is.' },
  { k: 'palavras', est: 'l', img: 'estrelas', rot: 'II · The Words', t: 'Five words from the video.', p: 'Learn the words before you watch. Then listen for them: they turn yellow in the video.' },
  { k: 'trailer', est: 'l', min: 10, img: 'estrelas', rot: 'III · Incoming Transmission', t: 'A man wakes up alone on a spaceship.', p: 'First guess. Then watch. Then True or Lie: find the crew.' },
  { k: 'falas', est: 'l', extra: 1, img: 'estrelas', rot: 'IV · Line by Line', t: 'Every line of the video, one by one.', p: 'Tap a line. Hear it again. The lines with yellow words open the explanation.' },
  { k: 'sinal', est: 'f', min: 6, img: 'ponte', rot: 'V · Decode the Signal', t: 'Six lines from the transmission. One word is missing in each.', p: 'Say the whole line out loud. Then tap the missing word.' },
  { k: 'regra', est: 'f', min: 6, img: 'controle', rot: 'VI · One No Is Enough', t: 'English says no only once in a sentence.', p: 'Read the four cards out loud. Then fix the three mistakes.' },
  { k: 'scan', est: 'f', min: 6, img: 'controle', rot: 'VII · Scan the Ship', t: 'The crew is off the radar. Scan every room.', p: 'Pick a room. Build each report line with the pieces, check it, then say it out loud.' },
  { k: 'radio', est: 'o', min: 7, extra: 1, img: 'ponte', rot: 'VIII · Earth Is Calling', t: 'There is one seat left on the ship. Eva wants you in it.', p: 'Say no four times, in different ways. Then say yes, and say why.' },
  { k: 'voce', est: 'o', min: 7, extra: 1, img: 'estrelas', rot: 'IX · Off the Record', t: 'No spaceship now. Just you.', p: 'Answer out loud. Then you get another question.' },
  { k: 'fim', est: 'w', min: 6, img: 'lab', rot: 'X · The Mission Report', t: 'Your last report to Earth.', p: 'Write three lines: who is on the ship, who isn’t, and one strange thing. It goes to your My notes.' }
];

/* I · seis pessoas da vida do aluno (da lanchonete da aula antiga) */
var CREW = [
  { k: 'ALWAYS SAYS YES', q: 'Who in your life always says yes?', fup: 'What did they say yes to last time?', st: ['My … always says yes.', 'Last time, she said yes to …'] },
  { k: 'NEVER ANSWERS', q: 'Who never answers your messages?', fup: 'What do you do when nobody answers?', st: ['… never answers.', 'When nobody answers, I …'] },
  { k: 'KNOWS EVERYBODY', q: 'Who knows everybody in your family or your city?', fup: 'Is there anybody they don’t know?', st: ['Everybody knows …', 'There isn’t anybody they don’t know.'] },
  { k: 'NOBODY SAYS THANKS', q: 'Who does a lot of work, and nobody says thank you?', fup: 'Say thank you now. What do you say?', st: ['Nobody thanks …', 'Thank you for …'] },
  { k: 'KNOWS SOMEBODY', q: 'Who always knows somebody who can help?', fup: 'When did they help you?', st: ['… always knows somebody who …'] },
  { k: 'THE 2 A.M. CALL', q: 'It’s 2 A.M. and you have a problem. Who do you call?', fup: 'And who do you never call at 2 A.M.? Why not?', st: ['I call … because …', 'I never call …'] }
];
var CREW_EX = ['My mom always says yes. Last time, she said yes to a trip to the beach.', 'My brother never answers my messages. When nobody answers, I call him.', 'My aunt knows everybody in my city. There isn’t anybody she doesn’t know.', 'My mother does a lot of work, and nobody says thank you. Thank you, Mom!', 'My uncle always knows somebody who can help. He helped me find a job.', 'I call my best friend, because she always answers. I never call my boss at 2 A.M.!'];
var VEREDITO = [['familia', 'FAMILY'], ['amigo', 'A FRIEND'], ['trabalho', 'WORK'], ['ninguem', 'NOBODY!']];

/* II · o trailer oficial (Amazon MGM) */
var YT = 'm08TxIsFTRI';
var ANTES = ['A man wakes up alone on a spaceship. Is he an astronaut?', 'Is anybody on the ship with him?', 'Far from home, does he find somebody, or nothing?'];
var OUVIR = ['astronaut', 'nothing', 'anything', 'alien'];
/* 23/10/2026 · AFTER numa tela só (o dono: "mais dinâmico e divertido, tudo de uma vez"): Mission debrief.
   Seis linhas True or Lie (fatos do trailer, ▶ no tempo da legenda); cada acerto acende uma sala da nave; no fim, uma pergunta de um toque. */
var DEB_VM = { formato: 'verdadeOuMentira', titulo: 'True or Lie? If it’s a lie, say the true line.', itens: [
  { f: 'He says “I’m not an astronaut” three times.', t: true, tm: '0:12' },
  { f: 'Grace is an astronaut.', t: false, tm: '0:34', c: 'No. “I’m just a teacher.”' },
  { f: 'He is several light years from his apartment.', t: true, tm: '0:10' },
  { f: 'He says he did many space walks.', t: false, tm: '1:21', c: '“I’ve never done a space walk.”' },
  { f: 'Eva says Grace is the only scientist who might know.', t: true, tm: '0:30' },
  { f: 'At the end, he is still alone.', t: false, tm: '2:28', c: 'No. “So, I met an alien.” He calls it Rocky.' }
] };
var DEB_GO = { formato: 'reacao', titulo: 'Last call · Would YOU go on this mission?', quem: 'Eva', fala: 'Eva: “The seat is still empty. Are you coming?”', reacoes: [
  ['Yes, I’d go!', 'I would go, because somebody has to help.', '“Welcome to Project Hail Mary.”'],
  ['No way.', 'I wouldn’t go. I don’t know anybody on that ship.', '“There isn’t anybody else. There is only you.”'],
  ['Maybe…', 'Maybe. Is anybody going with me?', '“Somebody is waiting for you up there.”']
] };

/* III · as falas reais (legenda manual, lida em 24/09); a primeira opção é a certa */
var SINAL = [
  { tc: '0:12', quem: 'GRACE', f: '“I’m not an ___.”', ops: ['astronaut', 'alien'], nao: 'He is a human on a spaceship, but not the job you think.', sim: '“I’m not an astronaut.” Three times, louder every time.' },
  { tc: '0:31', quem: 'EVA', f: '“You are the ___ scientist who might know what this is.”', ops: ['only', 'best'], nao: 'There is nobody else who knows.', sim: '“the only scientist”: only = nobody else.' },
  { tc: '1:03', quem: 'GRACE', f: '“Who on earth is gonna ___ up for this?”', ops: ['sign', 'give'], nao: 'You do it on a form, with your name.', sim: '“Who on earth is gonna sign up for this?” = nobody would!' },
  { tc: '1:08', quem: 'EVA', f: '“If we do ___, everything on this planet will go extinct.”', ops: ['nothing', 'anything'], nao: 'The verb is positive (we do), so the word has to carry the no.', sim: '“If we do nothing…”: one no, and it is in the word.' },
  { tc: '1:20', quem: 'GRACE', f: '“I’ve never done ___.”', ops: ['anything', 'nothing'], nao: 'NEVER already says no. One no is enough.', sim: '“I’ve never done anything.” The line of the hour.' },
  { tc: '2:28', quem: 'GRACE', f: '“So, I met an ___.”', ops: ['alien', 'astronaut'], nao: 'Not a human.', sim: '“So, I met an alien.” Somebody was out there.' }
];

/* IV · as armadilhas */
var ARMAS = [
  { k: 'THE DOUBLE NO', no: 'I didn’t see nobody.', si: 'I didn’t see anybody. / I saw nobody.', nota: 'One no per sentence: in the verb OR in the word.' },
  { k: 'NOBODY + DIDN’T', no: 'Nobody didn’t come.', si: 'Nobody came.', nota: 'NOBODY already says no. The verb stays positive.' },
  { k: 'ANYBODY IN A YES LINE', no: 'I saw anybody in the lab.', si: 'I saw somebody in the lab.', nota: 'ANYBODY needs not or a question. Yes sentences: SOMEBODY.' }
];

/* V · as seis salas: duas linhas de relatório cada (peças + uma peça a mais que é a armadilha) */
var SALAS = [
  { k: 'THE LAB', img: 'lab', leit: ['CREW · 0', 'A notebook is floating', 'The microscope is on'], linhas: [
    { ok: 'Nobody is in the lab.', t: ['Nobody', 'is', 'in the lab.'], x: ['isn’t'], help: 'Start with the word that already says no.' },
    { ok: 'Somebody left the microscope on.', t: ['Somebody', 'left', 'the microscope', 'on.'], x: ['Anybody'], help: 'This is a yes sentence: somebody did it.' }] },
  { k: 'THE AIRLOCK', img: 'escotilha', leit: ['CREW · 0', 'The hatch is open', 'Frost on the door'], linhas: [
    { ok: 'There isn’t anybody in the airlock.', t: ['There', 'isn’t', 'anybody', 'in the airlock.'], x: ['nobody'], help: 'The no is already in the verb (isn’t).' },
    { ok: 'Somebody left the hatch open.', t: ['Somebody', 'left', 'the hatch', 'open.'], x: ['Nobody'], help: 'The hatch is open, so a person opened it.', trap: { 'Nobody left the hatch open.': 'The hatch IS open, so somebody opened it. A yes sentence: somebody.' } }] },
  { k: 'THE GALLEY', img: 'cozinha', leit: ['CREW · 0', 'A meal is half eaten', 'A mug is floating'], linhas: [
    { ok: 'I can’t see anybody in the galley.', t: ['I', 'can’t', 'see', 'anybody', 'in the galley.'], x: ['nobody'], help: 'Can’t already says no.' },
    { ok: 'Somebody didn’t finish their dinner.', t: ['Somebody', 'didn’t', 'finish', 'their dinner.'], x: ['Nobody'], help: 'A person was here and left food on the plate.' }] },
  { k: 'THE SLEEP PODS', img: 'capsulas', leit: ['PODS 1 AND 2 · EMPTY', 'POD 3 · CLOSED', 'Frost on the glass'], linhas: [
    { ok: 'Nobody is sleeping in pods 1 and 2.', t: ['Nobody', 'is', 'sleeping', 'in pods 1 and 2.'], x: ['isn’t'], help: 'Start with the word that already says no.' },
    { ok: 'Is anybody in pod 3?', t: ['Is', 'anybody', 'in pod 3?'], x: ['nobody'], help: 'You don’t know: it is a question.' }] },
  { k: 'THE ENGINE ROOM', img: 'motor', leit: ['CREW · 0', 'The reactor is on', 'A wrench on the floor'], linhas: [
    { ok: 'I didn’t find anybody in the engine room.', t: ['I', 'didn’t', 'find', 'anybody', 'in the engine room.'], x: ['nobody'], help: 'Didn’t already says no.' },
    { ok: 'Somebody forgot a wrench on the floor.', t: ['Somebody', 'forgot', 'a wrench', 'on the floor.'], x: ['Anybody'], help: 'A yes sentence: a person forgot it.' }] },
  { k: 'THE BRIDGE', img: 'ponte', leit: ['CREW · 0', 'The pilot seat is empty', 'A dying sun outside'], linhas: [
    { ok: 'Nobody is flying the ship.', t: ['Nobody', 'is', 'flying', 'the ship.'], x: ['isn’t'], help: 'Start with the word that already says no.' },
    { ok: 'There’s nothing between us and the sun.', t: ['There’s', 'nothing', 'between us', 'and the sun.'], x: ['anything'], help: 'The verb is positive (there’s), so the word carries the no.' }] }
];

/* VI · o rádio com a Terra: quatro recusas e um sim */
var RADIO = [
  { says: 'The sun is dying, and we need you on that ship.', task: 'Say no, and give a reason.', st: ['No, sorry. I can’t, because …', 'Not me. I’m just a teacher.'], back: '“That is what everybody says.”' },
  { says: 'You are the only scientist who might know what this is.', task: 'Say no again, a DIFFERENT way. Use “I’m not…”.', st: ['I’m not an astronaut.', 'I’m not the only one. Somebody else knows.'], back: '“Nobody else knows. We checked.”' },
  { says: 'If we do nothing, everything on this planet will go extinct.', task: 'Say no a third way. Name somebody else who can go.', st: ['Somebody else can go. Why not …?', 'Send somebody younger.'], back: '“There isn’t anybody else. There is only you.”' },
  { says: 'There is nobody else. There is only you.', task: 'The hardest no. Use nobody or anybody.', st: ['Nobody can ask me to do this.', 'I don’t know anybody on that ship.'], back: '(silence on the line)' },
  { says: 'The seat is still empty. It’s yours until tomorrow morning.', task: 'Now say YES, and say what changed your mind.', st: ['All right. I’ll go, because …', 'OK. Somebody has to go, and …'], back: '“Welcome to Project Hail Mary.”' }
];

var RADIO_EX = ['No, sorry. I can’t, because I have a family here.', 'I’m not an astronaut. I’m just a teacher.', 'Somebody else can go. Why not a real astronaut?', 'I don’t know anybody on that ship. Nobody can ask me to do this.', 'All right. I’ll go, because somebody has to save the sun.'];
/* VII · fora do ar */
var VOCE = [
  { q: 'What is something nobody knows about you?', fup: 'Is there anybody you want to tell?', st: ['Nobody knows that I …'] },
  { q: 'Did anybody call you today? Who?', fup: 'Who do you want to call tonight?', st: ['Yes, my … called.', 'No, nobody called.'] },
  { q: 'Is there anything you never leave home without?', fup: 'What happens when you forget it?', st: ['I never leave home without …'] },
  { q: 'When did you last need somebody, and there was nobody?', fup: 'What did you do?', st: ['It was when …', 'There wasn’t anybody, so I …'] }
];

var VOCE_EX = ['Nobody knows that I sing in the shower.', 'Yes, my sister called. (Or: No, nobody called today.)', 'I never leave home without my phone.', 'It was when my car broke down. There wasn’t anybody, so I walked.', 'I would never steal anything, even for a lot of money.', 'Is there anybody in your family who speaks English? Did anybody call you today?'];
/* ---------- o corretor (nível 1: a regra desta aula) ---------- */
var NEG = '(?:not|never|cannot|\\w+n\'t)';
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  var temNeg = new RegExp('\\b' + NEG + '\\b|\\b(?:nobody|nothing|no one|nowhere|without|hardly)\\b').test(m);
  var perg = /\?\s*$/.test(frase);
  out = out.concat(A(/\b(some|any|no|every)\s(body|thing)\b/g, m, 0, 'One word: somebody, anything, nobody…'));
  out = out.concat(A(/\b(?:nobody|nothing|no one)\s+(?:\w+\s+)?(don't|doesn't|didn't|isn't|aren't|wasn't|weren't|can't|won't|haven't|hasn't|couldn't|wouldn't)\b/g, m, 1, 'Nobody already says no. The verb stays positive: Nobody came.'));
  out = out.concat(A(new RegExp('\\b' + NEG + '\\b.*?\\b(nobody|nothing|no one|nowhere)\\b', 'g'), m, 1, 'One no is enough: didn’t … anybody, or … nobody.'));
  if (perg) out = out.concat(A(/^\s*(?:is|are|was|were|do|does|did|have|has|can|will|could)\b.*?\b(nobody|nothing|no one)\b/g, m, 1, 'In a question: anybody, anything. Is anybody there?'));
  if (!temNeg && !perg && !/\bif\b|\b(?:can|could)\b/.test(m)) out = out.concat(A(/\b(anybody|anything|anyone|anywhere)\b/g, m, 1, 'In a yes sentence: somebody, something. Anybody needs not or a question.'));
  out = out.concat(A(/\b(?:nobody|somebody|anybody|everybody|nothing|something|everything|no one)\s+(are|were|have)\b/g, m, 1, 'Nobody is one word, singular: nobody is, nobody has.'));
  return out;
};

/* ---------- o estado (o mesmo dos dois lados) ---------- */
var S = { i: 0, faixa: 1, fala: {}, crew: { sel: -1, res: {} }, tr: { passo: 0, antes: {}, depois: {}, ouviu: {} },
  sinal: { n: 0, ok: 0, err: -1 }, armas: {}, scan: { sel: -1, feitas: {}, mont: [], err: '', ajuda: 0, ultima: '' },
  radio: { n: 0, disse: 0, repetiu: 0 }, voce: { n: 0, foi: {} }, fim: { txt: '', salvo: 0 }, resp: {} };

/* ---------- utilitários ---------- */
function h(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;'); }
function ordem(lista, semente) { var a = lista.slice(), n = a.length; var r = semente % n; return a.slice(r).concat(a.slice(0, r)); }   /* rodízio fixo, sem sorteio */
function img(n) { return (window.__WL_IMG && window.__WL_IMG[n]) || 'img/live-' + n + '.webp'; }   /* __WL_IMG: o HTML de teste, tudo num arquivo */
function cab(c) { return '<div class="cab st-' + c.est + '"><span class="rot"><b>' + c.est.toUpperCase() + '</b>' + EST[c.est] + ' · ' + c.rot + '</span><h1>' + c.t + '</h1><p>' + c.p + '</p></div>'; }
function fala(chave, frases, palavras) {
  var on = S.fala[chave] || {};
  return '<div class="diz"><h5>SAY IT WITH</h5><div class="chips">' + frases.map(function (f, i) { return '<button type="button" class="chip frase' + (on['f' + i] ? ' on' : '') + '" data-a="fala" data-c="' + chave + '" data-x="f' + i + '">' + f + '</button>'; }).join('') + '</div>'
    + (palavras && palavras.length ? '<h5>WORDS YOU CAN USE</h5><div class="chips">' + palavras.map(function (w) { return '<span class="chip palavra">' + w + '</span>'; }).join('') + '</div>' : '') + '</div>';
}
function follow(rot, q, frases, palavras, chave) { return '<div class="follow"><small>' + rot + '</small><p class="q">' + q + '</p>' + fala(chave, frases, palavras) + '</div>'; }
/* 05/10 · o Carlos: "toda pergunta tem que ter a resposta, com um botão Show answer pro aluno saber se respondeu certo".
   Pergunta pessoal mostra uma resposta-modelo (EXAMPLE ANSWER). O toque passa ao outro lado como qualquer botão. */
function mostra(chave, texto, modelo) {
  if (S.resp[chave]) return '<div class="resposta"><b>' + (modelo ? 'EXAMPLE ANSWER' : 'ANSWER') + '</b><span>' + texto + '</span></div>';
  return '<div class="resp-btn"><button type="button" class="pilula" data-a="resp" data-c="' + chave + '">Show answer</button></div>';
}
/* abas dos passos (23/10/2026, a aluna caiu da chamada e voltou presa no BEFORE): cada aba é um BOTÃO que vai direto ao
   passo e NUNCA trava, para quem cai voltar para onde a aula está. acao = o toque que o botão "próximo" da aula já usa;
   ns = o n de cada aba (padrão 0,1,2); ch = o data-c, se o toque da aula usa; acao false = aba parada. A aba atual leva aria-current. */
function abasPrepara() {
  if (abasPrepara.ok) return; abasPrepara.ok = 1;
  try {
    var st = document.createElement('style'); st.id = 'wl-abas-css';
    st.textContent = '.tempos button{appearance:none;-webkit-appearance:none;display:inline-flex;align-items:center;min-height:34px;padding:0 13px;border-radius:999px;font:700 13px var(--ui);color:var(--t3);background:transparent;border:1px solid var(--fio);cursor:pointer;transition:color .15s,border-color .15s,background-color .15s}'
      + '.tempos button.on{color:#fff;background:var(--ac);border-color:var(--ac)}'
      + '.tempos.tres button.on{background:var(--l);border-color:var(--l);color:#0b1a24}'
      + '.tempos button.foi{color:var(--ok);border-color:rgba(134,217,166,.45)}'
      + '.tempos button:not(.on):hover{color:var(--t1,#fff);border-color:var(--fio2,currentColor)}'
      + '.tempos button:focus-visible{outline:2px solid var(--bt2,var(--l,#fff));outline-offset:3px}';
    var hd = document.head || document.documentElement; hd.insertBefore(st, hd.firstChild);   /* primeiro da fila: o CSS da aula, que vem depois, ainda manda */
  } catch (e) { /* sem o estilo extra, as abas seguem funcionando */ }
  /* a cena se repinta no clique: o foco volta para a aba que acabou de ser tocada (teclado) */
  document.addEventListener('click', function (ev) {
    var b = ev.target.closest && ev.target.closest('.tempos button[data-a]'); if (!b) return;
    var a = b.getAttribute('data-a'), n = b.getAttribute('data-n');
    setTimeout(function () {
      var nb = document.querySelector('.tempos button[data-a="' + a + '"][data-n="' + n + '"]');
      if (nb && nb !== document.activeElement) { try { nb.focus({ preventScroll: true }); } catch (e) { /* segue */ } }
    }, 0);
  }, true);
}
function abas3(rot, passo, acao, ns, ch) {
  abasPrepara();
  return '<div class="tempos tres" role="group" aria-label="Steps">' + rot.map(function (t, i) {
    var cl = i === passo ? 'on' : i < passo ? 'foi' : '';
    if (acao === false) return '<span class="' + cl + '">' + t + '</span>';
    return '<button type="button" class="' + cl + '" data-a="' + acao + '" data-n="' + (ns ? ns[i] : i) + '"' + (ch != null ? ' data-c="' + ch + '"' : '') + (i === passo ? ' aria-current="step"' : '') + '>' + t + '</button>';
  }).join('') + '</div>';
}
function trilha(lista, n) { return '<div class="tempos">' + lista.map(function (_, i) { return '<span class="' + (i === n ? 'on' : i < n ? 'foi' : '') + '">' + (i + 1) + '</span>'; }).join('') + '</div>'; }
function feitasSala(i) { return S.scan.feitas[i] || 0; }
function salasFeitas() { return SALAS.filter(function (_, i) { return feitasSala(i) >= 2; }).length; }
function pecas(i) { var li = feitasSala(i), x = SALAS[i].linhas[li]; return ordem(x.t.concat(x.x), i * 2 + li + 1); }

/* ---------- as cenas ---------- */
/* 09/10/2026 · os toques das peças do kit (The Words, Line by Line): o chassi antigo não tinha TOQUES */
var TOQUES = {};
var R = {};
R.capa = function () {
  var faixa = (!NA_SALA && S.faixa) ? '<div class="faixa"><span class="live">LIVE</span><div><b>This lesson is made for Live Lesson</b><small>Open it with your student from the platform: they tap, write and decide on their own screen. Sharing your screen also works: every button is on your side.</small></div><button type="button" class="x" data-a="faixa" aria-label="Close">×</button></div>' : '';
  return '<div class="capa"><div class="lado-a"><span class="kick">WOLFLIX · PROJECT HAIL MARY · A2</span><h1>I’m Not an <b>Astronaut</b></h1>'
    + '<div class="alerta"><span class="pisca"></span><b>SIGNAL LOST</b><small>The crew of the Hail Mary is off the radar. You are the controller on duty.</small></div>'
    + '<div class="chipsx"><span class="pilula">somebody · anybody · nobody</span><span class="pilula">one no per sentence</span><span class="pilula">Live Class · W·O·L·F</span></div>'
    + '<button type="button" class="btn cheio" data-a="ir" data-n="1">Take the controller’s seat</button>' + faixa + '</div>'
    + '<div class="foto"><img src="' + img('controle') + '" alt="An empty mission control room with a radar on the big screen"><div class="radar" aria-hidden="true"><i></i><b></b></div><span class="tag">HAIL MARY · CREW 0 / 3</span></div></div>';
};
R.crew = function (c) {
  var q = S.crew;
  var grade = '<div class="fichas' + (q.sel >= 0 ? ' mini' : '') + '">' + CREW.map(function (x, i) {
    var r = q.res[i], rot = r ? VEREDITO.filter(function (v) { return v[0] === r; })[0][1] : '';
    return '<button type="button" class="ficha' + (q.sel === i ? ' on' : '') + (r ? ' feita' : '') + '" data-a="crew" data-n="' + i + '"><small>FILE 0' + (i + 1) + '</small><b>' + x.k.charAt(0) + x.k.slice(1).toLowerCase() + '</b>' + (rot ? '<em>' + rot + '</em>' : '') + '</button>';
  }).join('') + '</div>';
  if (q.sel < 0) return cab(c) + grade + '<p class="dica-aluno" style="text-align:center">Tap a file.</p>';
  var x = CREW[q.sel], r = q.res[q.sel];
  var corpo = '<div class="foco"><div class="pergunta vd' + (r ? ' ja' : '') + '"><small>FILE 0' + (q.sel + 1) + ' · ' + x.k + '</small><h2>' + x.q + '</h2></div>' + mostra('cr' + q.sel, CREW_EX[q.sel], 1)
    + (r ? follow('FOLLOW-UP', x.fup, x.st, [], 'cr' + q.sel)
      : fala('cr' + q.sel + 'a', [x.st[0], 'Nobody!'], []) + '<div class="veredito so-prof"><small class="quem">TEACHER · WHO DID THEY NAME?</small>' + VEREDITO.map(function (v) { return '<button type="button" class="btn" data-a="crew-v" data-v="' + v[0] + '">' + v[1] + '</button>'; }).join('') + '</div><p class="dica-aluno" style="text-align:center">Answer out loud: the name, then why.</p>')
    + '</div>';
  return cab(c) + grade + corpo;
};
/* 23/10/2026 · o vídeo é o mesmo nos passos 2 e 3 (enablejsapi: o ▶ das linhas e a legenda mandam nele) */
function trVideo() {
  var api = '&enablejsapi=1' + (/^https?:$/.test(location.protocol) ? '&origin=' + encodeURIComponent(location.origin) : '');
  return '<div class="video"><iframe src="https://www.youtube-nocookie.com/embed/' + YT + '?start=0&end=178&rel=0&modestbranding=1&playsinline=1' + api + '" title="Project Hail Mary · official trailer · Amazon MGM Studios" allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowfullscreen loading="lazy"></iframe></div>';
}
/* o debrief: o estado fica em S.fq.deb_vm (kit); a nave e as linhas repintam sozinhas, o vídeo não recarrega */
var debAcesa = {};
function debEstado() {
  var e = (S.fq && S.fq.deb_vm && S.fq.deb_vm.r) || {}, ok = 0, feitas = 0, st = [];
  DEB_VM.itens.forEach(function (x, i) {
    var r = e[i]; if (r == null) { st.push(0); return; }
    feitas++; if ((r === 't') === !!x.t) { ok++; st.push(1); } else st.push(-1);
  });
  return { ok: ok, feitas: feitas, st: st };
}
function debNave() {
  var d = debEstado(), n = DEB_VM.itens.length;
  var salas = SALAS.slice(0, n).map(function (x, i) {
    var s = d.st[i], nova = s === 1 && !debAcesa[i]; if (s === 1) debAcesa[i] = 1;
    return '<div class="sala deb-sala' + (s === 1 ? ' feita' : s === -1 ? ' perdida' : '') + (nova ? ' nova' : '') + '" style="background-image:url(' + img(x.img) + ')"><span><b>' + x.k.replace('THE ', '') + '</b><em>' + (s === 1 ? 'CREW FOUND' : s === -1 ? 'SIGNAL LOST' : 'OFF THE RADAR') + '</em></span></div>';
  }).join('');
  return '<div class="deb-topo"><div class="radar' + (d.ok === n ? ' todos' : '') + '" style="--p:' + (d.ok / n) + '" aria-hidden="true"><i></i><b></b></div><div><small>MISSION DEBRIEF · ' + d.feitas + ' OF ' + n + ' ANSWERED</small><h3>Crew found <b>' + d.ok + '</b> / ' + n + '</h3></div></div><div class="planta deb-planta">' + salas + '</div>';
}
function debDir() {
  var d = debEstado();
  return FM.ex('deb_vm', DEB_VM) + (d.feitas === DEB_VM.itens.length ? '<div id="deb-go">' + FM.ex('deb_go', DEB_GO) + '</div>' : '<p class="fm-nota deb-dica">Answer all six lines. Then Eva has one last question.</p>');
}
function debPinta() {
  var a = document.getElementById('deb-nave'), b = document.getElementById('deb-dir');
  if (a) a.innerHTML = debNave(); if (b) b.innerHTML = debDir();
  /* a pergunta final abre embaixo: desce até ela uma vez */
  var g = document.getElementById('deb-go'); if (g && !debPinta.desceu) { debPinta.desceu = 1; setTimeout(function () { try { g.scrollIntoView({ behavior: 'smooth', block: 'end' }); } catch (e) { /* segue */ } }, 250); }
}
R.trailer = function (c) {
  var v = S.tr, passo = v.passo;
  var tempos = abas3(['1 · BEFORE', '2 · WATCH', '3 · AFTER'], passo, 'tr-passo');
  function viras(lista, chave, resps) {
    return '<div class="viras">' + lista.map(function (q, i) { return '<div class="vira-col"><button type="button" class="vira' + (v[chave][i] ? ' on' : '') + '" data-a="vira" data-c="' + chave + '" data-n="' + i + '"><span class="face frente">' + (chave === 'antes' ? 'GUESS' : 'CHECK') + '<b>' + (i + 1) + '</b></span><span class="face verso">' + q + '</span></button>'
      + (resps && v[chave][i] ? mostra('tr' + chave + i, resps[i]) : '') + '</div>'; }).join('') + '</div>';
  }
  var corpo;
  if (passo === 0) corpo = viras(ANTES, 'antes') + (ANTES.every(function (_, i) { return v.antes[i]; }) ? '<div style="text-align:center"><button type="button" class="btn cheio" style="--c:var(--l)" data-a="tr-passo" data-n="1">Watch the transmission now</button></div>' : '<p class="dica-aluno" style="text-align:center">Tap a card. Guess out loud, with a reason.</p>');
  else if (passo === 1) corpo = trVideo()
    + '<div class="ouvir"><div class="diz"><h5>LISTEN FOR · TAP WHEN YOU HEAR IT</h5><div class="chips">' + OUVIR.map(function (w, i) { return '<button type="button" class="chip' + (v.ouviu[i] ? ' on' : '') + '" data-a="ouvir" data-n="' + i + '">' + w + '</button>'; }).join('') + '</div></div>'
    + '<button type="button" class="btn cheio" style="--c:var(--l)" data-a="tr-passo" data-n="2">After the trailer</button></div>';
  /* 23/10/2026 · AFTER = Mission debrief, uma tela só: vídeo + True or Lie (▶ no tempo) + nave que acende + pergunta final de um toque */
  else corpo = '<div class="deb"><div class="deb-esq">' + trVideo() + '<small class="deb-cred">Tap a time to hear that moment again.</small><div id="deb-nave">' + debNave() + '</div></div><div class="deb-dir" id="deb-dir">' + debDir() + '</div></div>';
  return cab(c) + tempos + corpo;
};
R.sinal = function (c) {
  var s = S.sinal, n = s.n, fim = n >= SINAL.length, x = SINAL[Math.min(n, SINAL.length - 1)];
  var onda = '<div class="onda" aria-hidden="true">' + Array.apply(null, Array(36)).map(function (_, i) { return '<i style="--h:' + (18 + ((i * 37 + n * 11) % 70)) + '%"></i>'; }).join('') + '</div>';
  if (fim) return cab(c) + trilha(SINAL, n) + '<div class="foco"><div class="pergunta vd"><small>SIGNAL DECODED</small><h2>Two of these lines are the grammar of the hour: “If we do <em class="sinal">nothing</em>” and “I’ve never done <em class="sinal">anything</em>.”</h2></div></div>';
  var ops = ordem(x.ops.map(function (t, i) { return [t, i]; }), n);
  var linha = x.f.replace('___', '<span class="gap' + (s.ok ? ' cheio' : '') + '">' + (s.ok ? x.ops[0] : '&nbsp;') + '</span>');
  var corpo = '<div class="foco"><div class="transmissao vd"><div class="tt"><span class="pisca"></span>' + x.tc + ' · ' + x.quem + '</div>' + onda + '<h2>' + linha + '</h2></div>'
    + (s.ok ? '<p class="aprova" style="text-align:center">GOT IT. ' + x.sim + '</p><div style="text-align:center"><button type="button" class="btn" data-a="sinal-prox">Next line</button></div>'
      : '<div class="veredito">' + ops.map(function (o) { return '<button type="button" class="btn' + (s.err === o[1] ? ' errado' : '') + '" data-a="sinal" data-n="' + o[1] + '">' + o[0] + '</button>'; }).join('') + '</div>'
        + (s.err > 0 ? '<p class="recusa" style="text-align:center">' + x.nao + '</p>' + mostra('si' + n, x.f.replace('___', x.ops[0])) : '<p class="dica-aluno" style="text-align:center">Say the whole line first. Then tap.</p>'))
    + '</div>';
  return cab(c) + trilha(SINAL, n) + corpo;
};
R.regra = function (c) {
  var topo = '<div class="fonte vd"><small>FROM THE TRAILER · 1:20 · RYLAND GRACE</small><p>“I’ve <u>never</u> done <u>anything</u>.” <span>=</span> “I’ve done <u>nothing</u>.”</p></div>';
  var cartoes = '<div class="cartoes">'
    + '<div class="cr vd"><small>1 · THE NO IN THE VERB</small><h3>didn’t · isn’t · never + <em>any</em></h3><div class="ex"><span>I <u>didn’t</u> see <u>anybody</u>.</span><span>There <u>isn’t</u> <u>anything</u>.</span></div></div>'
    + '<div class="cr vd"><small>2 · THE NO IN THE WORD</small><h3>a yes verb + <em>no</em></h3><div class="ex"><span>I saw <u>nobody</u>.</span><span><u>Nobody</u> came.</span></div></div>'
    + '<div class="cr vd"><small>3 · QUESTIONS</small><h3>Use <em>any</em></h3><div class="ex"><span>Is <u>anybody</u> there?</span><span>Did you see <u>anything</u>?</span></div></div>'
    + '<div class="cr vd"><small>4 · YES SENTENCES</small><h3>Use <em>some</em></h3><div class="ex"><span><u>Somebody</u> is there!</span><span>I heard <u>something</u>.</span></div></div></div>';
  var armas = '<div class="cab st-f"><span class="rot">THE THREE TRAPS · TAP TO FIX</span></div><div class="armas">' + ARMAS.map(function (a, i) {
    return '<button type="button" class="arma' + (S.armas[i] ? ' on' : '') + '" data-a="arma" data-n="' + i + '"><small>' + a.k + '</small><s>' + a.no + '</s><span class="certa">' + a.si + '</span><span class="nota">' + a.nota + '</span><span class="toque">Tap to fix it</span></button>';
  }).join('') + '</div>';
  return cab(c) + topo + cartoes + armas;
};
R.scan = function (c) {
  var s = S.scan, total = salasFeitas();
  var planta = '<div class="planta">' + SALAS.map(function (x, i) {
    var f = feitasSala(i), cls = f >= 2 ? ' feita' : s.sel === i ? ' on' : '';
    return '<button type="button" class="sala' + cls + '" data-a="sala" data-n="' + i + '" style="background-image:url(' + img(x.img) + ')"><span><b>' + x.k.replace('THE ', '') + '</b><em>' + (f >= 2 ? 'SCANNED' : f === 1 ? '1 / 2' : 'SCAN') + '</em></span></button>';
  }).join('') + '</div>';
  var log = '<div class="log vd"><small>MISSION LOG · ' + total + ' / 6 ROOMS</small><ul>' + SALAS.map(function (x, i) {
    return x.linhas.slice(0, feitasSala(i)).map(function (l) { return '<li>' + l.ok + '</li>'; }).join('');
  }).join('') + (total === 0 && !Object.keys(s.feitas).length ? '<li class="vazio">Nothing reported yet.</li>' : '') + '</ul></div>';
  var painel;
  if (total === 6) painel = '<div class="revela vd"><div class="rfoto" style="background-image:url(' + img('capsulas') + ')"></div><div><small>ALL ROOMS SCANNED · POD 3 IS OPENING</small><h2>Somebody is waking up in pod 3. He looks around. Nobody is there. He says:</h2><p class="citacao">“I’m not an astronaut.”</p></div></div>';
  else if (s.sel < 0) painel = '<div class="sala-painel vd vazio"><small>SHIP SCAN</small><h3>Pick a room on the ship.</h3><p>Every room gives you two report lines. Build them, check them, say them to Earth.</p></div>';
  else {
    var x = SALAS[s.sel], li = feitasSala(s.sel);
    if (li >= 2) painel = '<div class="sala-painel vd"><small>' + x.k + ' · SCANNED</small><h3>Room report sent. Pick another room.</h3></div>';
    else {
      var lin = x.linhas[li], pc = pecas(s.sel);
      var monta = s.mont.map(function (k, j) { return '<button type="button" class="peca na" data-a="tira" data-n="' + j + '">' + pc[k] + '</button>'; }).join('');
      var banco = pc.map(function (p, k) { var usada = s.mont.indexOf(k) >= 0; return '<button type="button" class="peca' + (usada ? ' usada' : '') + '" data-a="poe-peca" data-n="' + k + '"' + (usada ? ' disabled' : '') + '>' + p + '</button>'; }).join('');
      painel = '<div class="sala-painel vd"><div class="sfoto" style="background-image:url(' + img(x.img) + ')"><div class="leitura">' + x.leit.map(function (t, j) { return '<span' + (j === 0 ? ' class="zero"' : '') + '>' + t + '</span>'; }).join('') + '</div></div>'
        + '<small>' + x.k + ' · REPORT LINE ' + (li + 1) + ' OF 2</small>'
        + '<div class="linha-monta">' + (monta || '<span class="vazia">Tap the pieces in order</span>') + '</div>'
        + '<div class="banco">' + banco + '</div>'
        + '<div class="acoes"><button type="button" class="btn cheio" data-a="confere"' + (s.mont.length ? '' : ' disabled') + '>Check the report</button><button type="button" class="pilula" data-a="limpa">Clear</button>' + (s.ajuda ? '' : '<button type="button" class="pilula" data-a="ajuda">Help</button>') + '</div>'
        + (s.ajuda ? '<p class="ajuda"><b>HELP</b>' + lin.help + '</p>' : '')
        + (s.err ? '<p class="recusa">' + s.err + '</p>' + mostra('sc' + s.sel + '_' + li, lin.ok) : '')
        + (s.ultima ? '<p class="aprova">GOT IT. Say it to Earth: “' + s.ultima + '”</p>' : '')
        + '</div>';
    }
  }
  return cab(c) + '<div class="mesa-scan"><div class="lado-planta">' + planta + log + '</div>' + painel + '</div>';
};
R.radio = function (c) {
  var r = S.radio, n = r.n, fim = n >= RADIO.length, x = RADIO[Math.min(n, RADIO.length - 1)];
  var tr = '<div class="tempos">' + RADIO.map(function (_, i) { return '<span class="' + (i === n ? 'on' : i < n ? 'foi' : '') + '">' + (i < 4 ? 'NO ' + (i + 1) : 'YES') + '</span>'; }).join('') + '</div>';
  if (fim) return cab(c) + tr + '<div class="foco"><div class="pergunta vd"><small>LINE 1 · CALL ENDED</small><h2>Four noes, never the same way, and one yes. “Welcome to Project Hail Mary.”</h2></div></div>';
  var corpo = '<div class="foco"><div class="chamada vd"><div class="tt"><span class="pisca"></span>MISSION CONTROL · LINE 1 · EVA</div><h2>“' + x.says + '”</h2><p class="tarefa"><b>YOUR TURN</b>' + x.task + '</p></div>';
  if (r.disse) corpo += follow('EVA ANSWERS', x.back + ' Answer her, one more line.', ['But …', 'I’m sorry, but …', 'OK, but nobody …'], [], 'rd' + n) + '<div style="text-align:center"><button type="button" class="btn" data-a="radio-prox">' + (n < 4 ? 'Next call' : 'End the call') + '</button></div>';
  else corpo += fala('ra' + n, x.st, []) + (r.repetiu ? '<p class="recusa" style="text-align:center">You said that already. Another way.</p>' : '')
    + mostra('rd' + n, RADIO_EX[n], 1) + '<div class="veredito so-prof"><button type="button" class="btn" data-a="radio-disse">Said it · Eva answers</button><button type="button" class="btn" data-a="radio-repete">Same no again</button></div><p class="dica-aluno" style="text-align:center">Say it out loud. Never the same no twice.</p>';
  return cab(c) + tr + corpo + '</div>';
};
R.voce = function (c) {
  var f = S.voce, n = f.n, fim = n >= VOCE.length, x = VOCE[Math.min(n, VOCE.length - 1)];
  if (fim) return cab(c) + trilha(VOCE, n) + '<div class="foco"><div class="pergunta vd"><h2>Twelve answers about you. Somebody, anybody, nobody: about your own life.</h2></div></div>';
  var corpo = '<div class="foco"><div class="pergunta vd' + (f.foi[n] ? ' ja' : '') + '"><small>QUESTION ' + (n + 1) + ' OF 6</small><h2>' + x.q + '</h2></div>'
    + (f.foi[n] ? follow('FOLLOW-UP', x.fup, x.st, [], 'vc' + n) + '<div style="text-align:center"><button type="button" class="btn" data-a="voce-prox">Next question</button></div>'
      : '<div class="acoes-fup" style="display:flex;flex-wrap:wrap;gap:10px;justify-content:center;align-items:center">' + mostra('vc' + n, VOCE_EX[n], 1) + '<button type="button" class="btn so-prof" data-a="voce-foi">Answered · show the follow-up</button></div>' + fala('vc' + n + 'a', x.st, []) + '<p class="dica-aluno" style="text-align:center">Answer out loud.</p>') + '</div>';
  return cab(c) + trilha(VOCE, n) + corpo;
};
R.fim = function (c) {
  var f = S.fim, ninguem = CREW.filter(function (_, i) { return S.crew.res[i] === 'ninguem'; }).map(function (x) { return x.k.toLowerCase(); });
  var volta = ninguem.length ? 'At the start, about “' + ninguem[0] + '”, you said: NOBODY! Say it the other way: “There isn’t anybody who…”' : 'Say one thing about your week with nobody in it. Then say it the other way: “There isn’t anybody…”';
  return cab(c) + '<div class="fim"><div class="escrita">'
    + WolfCorretor.papel('fim', f.txt, 'Nobody is in the …\nSomebody left …\nIs anybody …?', 'Your mission report')
    + '<div class="pe"><span class="dica-aluno">Your teacher sees what you write.</span><span class="so-prof" style="color:var(--t3);font-size:14px">You see what the student writes, and the same red lines.</span>'
    + (f.salvo ? '<span class="salvo">Sent to Earth · saved to My notes</span>' : '<button type="button" class="btn cheio" style="--c:var(--w)" data-a="salva-fim">Send to Earth · My notes</button>') + '</div>'
    + '<div class="diz"><h5>TAP TO ADD</h5><div class="chips">' + ['Nobody is in the ', 'There isn’t anybody in the ', 'Somebody left ', 'I didn’t find anything in the ', 'Is anybody '].map(function (x) { return '<button type="button" class="chip frase" data-a="poe" data-x="' + h(x) + '">' + x.trim() + '</button>'; }).join('')
    + '</div><h5>WORDS YOU CAN USE</h5><div class="chips">' + ['lab', 'airlock', 'galley', 'pod 3', 'engine room', 'bridge', 'the sun'].map(function (w) { return '<button type="button" class="chip palavra" data-a="poe" data-x="' + h(w) + ' ">' + w + '</button>'; }).join('') + '</div></div>'
    + mostra('fim', 'Nobody is in the lab. Somebody left the microscope on.<br>There isn’t anybody in the airlock.<br>Is anybody in pod 3?', 1) + '</div>'
    + '<div class="lado-fim">' + follow('THE CREW FILES COME BACK', volta, ['There isn’t anybody who …', 'Nobody …'], [], 'fimv') + mostra('fimv', 'There isn’t anybody who answers my messages at night.', 1)
    + '<div class="grande vd"><span>“I’ve never done <b>anything</b>.”</span><small>One no per sentence: <b>I didn’t see anybody</b> = <b>I saw nobody</b>. <b>Nobody came</b>, never <i>nobody didn’t</i>. Questions: <b>anybody</b>. Yes sentences: <b>somebody</b>.</small></div></div>'
    + '<p class="hw"><a class="pilula" href="HW/" target="_blank" rel="noopener">Homework for the student →</a></p></div>';
};

/* ---------- desenhar ---------- */
function pinta() {
  var c = L[S.i], palco = document.getElementById('palco');
  var nova = pinta.ultima !== S.i; pinta.ultima = S.i;
  var rolou = palco.scrollTop, rolouJ = window.scrollY;
  palco.innerHTML = '<section class="cena c-' + c.k + (nova ? ' nova' : '') + '" data-cena="' + S.i + '">' + R[c.k](c) + '</section>';
  if (!nova) { palco.scrollTop = rolou; window.scrollTo(0, rolouJ); }
  WolfCorretor.liga(palco);
  document.getElementById('fundo').style.backgroundImage = 'url(' + img(c.img) + ')';
  var vistas = {}; for (var i = 0; i < S.i; i++) if (L[i].est) vistas[L[i].est] = 1;
  [].forEach.call(document.querySelectorAll('.wolf span'), function (sp) { var k = sp.getAttribute('data-k'); sp.classList.toggle('agora', k === c.est); sp.classList.toggle('feita', !!vistas[k] && k !== c.est); });
  document.getElementById('trilho').innerHTML = L.map(function (x, i) { return '<i class="' + (i === S.i ? 'agora' : i < S.i ? 'feita' : '') + '" style="--c:var(--' + (x.est || 'o') + ')"></i>'; }).join('');
  document.getElementById('conta').textContent = S.i + ' / ' + (L.length - 1);
  document.getElementById('ant').disabled = S.i === 0; document.getElementById('prox').disabled = S.i === L.length - 1;
}
function vai(n) { if (n < 0 || n >= L.length) return; S.i = n; pinta(); document.getElementById('palco').scrollTop = 0; window.scrollTo(0, 0); }
window.vai = vai;

/* a conferência do relatório: igual à frase certa, ou a dica da armadilha (o corretor da aula diz qual) */
function confere() {
  var s = S.scan, x = SALAS[s.sel], li = feitasSala(s.sel), lin = x.linhas[li], pc = pecas(s.sel);
  var feita = s.mont.map(function (k) { return pc[k]; }).join(' ');
  if (feita === lin.ok) { s.feitas[s.sel] = li + 1; s.mont = []; s.err = ''; s.ajuda = 0; s.ultima = lin.ok; return; }
  s.ultima = '';
  if (lin.trap && lin.trap[feita]) { s.err = lin.trap[feita]; return; }
  var achados = WolfCorretor.confere(feita);
  s.err = achados.length ? achados[0].msg : (s.mont.length < lin.t.length ? 'Not finished yet. Every piece of the line, in order.' : 'Not yet. Read it out loud: does it sound right?');
}

/* ---------- os toques ---------- */
document.addEventListener('click', function (ev) {
  var b = ev.target.closest('[data-a]'); if (!b) return;
  var a = b.getAttribute('data-a'), n = +b.getAttribute('data-n'), v = b.getAttribute('data-v'), refaz = true, s = S.scan;
  switch (a) {
    case 'ir': vai(n); return;
    case 'faixa': S.faixa = 0; break;
    case 'resp': S.resp[b.getAttribute('data-c')] = 1; break;
    case 'fala': var ch = b.getAttribute('data-c'), x = b.getAttribute('data-x'); S.fala[ch] = S.fala[ch] || {}; S.fala[ch][x] = !S.fala[ch][x]; break;
    case 'crew': S.crew.sel = n; break;
    case 'crew-v': S.crew.res[S.crew.sel] = v; break;
    case 'vira': S.tr[b.getAttribute('data-c')][n] = 1; break;
    case 'tr-passo': S.tr.passo = n; break;
    case 'ouvir': S.tr.ouviu[n] = !S.tr.ouviu[n]; b.classList.toggle('on', !!S.tr.ouviu[n]); refaz = false; break;   /* sem repintar: o trailer não recarrega */
    case 'sinal': if (S.sinal.ok) return; if (n === 0) { S.sinal.ok = 1; S.sinal.err = -1; } else S.sinal.err = n; break;
    case 'sinal-prox': S.sinal = { n: S.sinal.n + 1, ok: 0, err: -1 }; break;
    case 'arma': S.armas[n] = 1; break;
    case 'sala': if (s.sel !== n) { s.sel = n; s.mont = []; s.err = ''; s.ajuda = 0; s.ultima = ''; } break;
    case 'poe-peca': if (s.mont.indexOf(n) < 0) { s.mont.push(n); s.err = ''; s.ultima = ''; } break;
    case 'tira': s.mont.splice(n, 1); s.err = ''; break;
    case 'limpa': s.mont = []; s.err = ''; break;
    case 'ajuda': s.ajuda = 1; break;
    case 'confere': if (s.sel >= 0 && s.mont.length) confere(); break;
    case 'radio-disse': S.radio.disse = 1; S.radio.repetiu = 0; break;
    case 'radio-repete': S.radio.repetiu = 1; break;
    case 'radio-prox': S.radio = { n: S.radio.n + 1, disse: 0, repetiu: 0 }; break;
    case 'voce-foi': S.voce.foi[S.voce.n] = 1; break;
    case 'voce-prox': S.voce.n++; break;
    case 'poe': var ta = document.querySelector('[data-papel] textarea'); if (ta) { var t = b.getAttribute('data-x'), antes = ta.value; var sep = antes && !/\s$/.test(antes) ? (/[.?!]$/.test(antes) ? '\n' : ' ') : ''; ta.value = antes + sep + t; ta.dispatchEvent(new Event('input', { bubbles: true })); ta.focus(); } refaz = false; break;
    case 'salva-fim': var tf = S.fim.txt.trim(); if (!tf) return; try { if (window.__wlSalaNota) window.__wlSalaNota(tf); } catch (e) { /* segue */ } S.fim.salvo = 1; break;
    default: if (TOQUES[a]) refaz = TOQUES[a](b, n, v, b.getAttribute('data-c')) !== false; else refaz = false;
  }
  if (refaz) pinta();
});
/* 23/10/2026 · no debrief, True/Lie e a pergunta final não repintam a página (o trailer não recarrega) */
window.addEventListener('load', function () {
  ['fq2-tf', 'fq2-rea'].forEach(function (k) {
    var f = TOQUES[k]; if (!f) return;
    TOQUES[k] = function (b, n, v, c) { var r = f(b, n, v, c); if (document.getElementById('deb-dir')) { debPinta(); return false; } return r; };
  });
});
/* o texto digitado fica no estado (o fio leva o mesmo texto ao outro lado) */
document.addEventListener('input', function (ev) {
  var t = ev.target; if (!t.matches || !t.matches('[data-campo]')) return;
  if (t.getAttribute('data-campo') === 'fim') S.fim.txt = t.value;
});
document.addEventListener('keydown', function (ev) {
  if (ALUNO || /^(TEXTAREA|INPUT)$/.test((ev.target.tagName || ''))) return;
  if (ev.key === 'ArrowRight') vai(S.i + 1); else if (ev.key === 'ArrowLeft') vai(S.i - 1);
  else if (ev.key === 'g' || ev.key === 'G') guia(true); else if (ev.key === 'Escape') guia(false);
});
function guia(abre) { document.getElementById('guia').hidden = !abre; }
document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('prox').onclick = function () { vai(S.i + 1); };
  document.getElementById('ant').onclick = function () { vai(S.i - 1); };
  document.getElementById('bguia').onclick = function () { guia(true); };
  document.getElementById('fguia').onclick = function () { guia(false); };
  document.getElementById('bzoom').onclick = function () { var z = (parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--zoom')) || 1); z = z >= 1.2 ? 1 : +(z + .1).toFixed(1); document.documentElement.style.setProperty('--zoom', z); };
  document.getElementById('btela').onclick = function () { if (!document.fullscreenElement) document.documentElement.requestFullscreen().catch(function () {}); else document.exitFullscreen(); };
  pinta();
});
