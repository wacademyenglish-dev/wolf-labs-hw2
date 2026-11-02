/* ============================================================
   WHAT THEY SAID · THE TIN-CAN CHAIN · LIVE CLASS  06/10/2026
   Main series B1 · discurso indireto: said (sem pessoa) × told me (com
   pessoa); um passo atrás (am → was, will → would, can → could, did →
   had done), a não ser que ainda seja verdade; perguntas sem DID e na
   ordem de afirmação; IF para sim/não; TOLD ME (NOT) TO para ordens.
   Erros: "she said me", fugir do WOULD, "asked did I", "asked me where
   did I live".
   O MUNDO (da aula velha): uma corrente de quatro pessoas (Maya, Leo,
   Priya, você); "ainda é verdade?"; as promessas que mudaram; três
   recados do escritório (Karen, Mr. Okafor, Sam). Sem áudio, como a
   velha: a voz é do professor.
   A CARA: a CORRENTE DE LATAS — quatro latas-telefone ligadas por
   barbante em SVG. Um relato certo acende o trecho do fio até a
   próxima lata; um errado deixa o trecho vermelho, partido. E as
   ASPAS que caem: a citação perde as aspas quando vira relato.
   Fila: FILA-LIVE-386.md · 114.
   22/10/2026 · OS FORMATOS NOVOS (kit/formatos.js + formatos2.js), mesmas 11
   páginas. A auditoria: 28 rodadas de escolher entre duas ou três frases
   quase iguais (III, V, VII), regras só para tocar (II) e "abrir o modelo"
   (VI, VIII). Agora: II as notas da Priya depois da reunião → a regra
   (FM.carta); III seis recados passados de lata em lata, falados + Check,
   o fio acende e as aspas caem (FM.fala); IV "ainda é verdade?" por sentido
   (FM.escolhe); V achar a pergunta que esqueceu de virar relato (FM.erro);
   VI montar o relato da pergunta de sim/não (FM.pergunta); VII promessas
   certas ou erradas, dizer certo (FM.verdadeOuMentira); VIII três recados
   passados ao colega, falados + Check; IX um minuto com cronômetro e
   contador. VII, VIII e IX deixam de ser EXTRAS.
   ============================================================ */
var L = [
  { k: 'capa', est: null, img: 'telefones' },
  { k: 'abre', est: 'o', min: 7, img: 'fita', rot: 'I · It Stuck', t: 'Three questions about things people said to you.', p: 'Answer out loud. Report what they said. Nothing gets corrected yet.' },
  { k: 'regra', est: 'f', min: 7, img: 'telefones', rot: 'II · The Meeting Notes', t: 'Priya writes down what everybody said in Monday’s meeting.', p: 'Read the notes out loud. Tap the words that report. Then finish the rule.' },
  { k: 'corrente', est: 'o', min: 7, img: 'telefones', rot: 'III · The Chain', t: 'Six messages. Each one passes to the next person.', p: 'Read what was said. Say how the next person reports it out loud. Then tap Check: the string lights up.' },
  { k: 'passo', est: 'o', min: 7, img: 'sala', rot: 'IV · Still True?', t: 'Reporting is not a table. One question decides how far back it goes.', p: 'Is it still true? Tap your answer. Then say the report out loud.' },
  { k: 'pergunta', est: 'f', min: 6, img: 'fita', rot: 'V · The Question That Forgot', t: 'A reported question isn’t a question anymore.', p: 'Read each report. Find the question order and say it flat. Then tap Check.' },
  { k: 'simnao', est: 'o', min: 7, img: 'fita', rot: 'VI · Yes or No', t: 'Questions with no question word take IF.', p: 'Build each report out loud. Then tap Check.' },
  { k: 'would', est: 'f', min: 6, extra: 1, img: 'sala', rot: 'VII · The Promise That Moved', t: 'Promises are about the future. Reported later, WILL becomes WOULD.', p: 'Right or wrong? The promise is old. If it’s wrong, say it right.' },
  { k: 'recados', est: 'o', min: 7, extra: 1, img: 'escritorio', rot: 'VIII · Pass It On', t: 'Three messages came in while your colleague was out.', p: 'Read the message. Tell your teacher (the colleague) what it said, out loud. Then tap Check.' },
  { k: 'vida', est: 'o', min: 7, extra: 1, img: 'sala', rot: 'IX · Your Own Words', t: 'Three things somebody actually said to you.', p: 'One minute. Say the exact words first. Then report them. Count your reports.' },
  { k: 'fim', est: 'w', min: 6, img: 'telefones', rot: 'X · Back to the Start', t: 'Your three reports from scene I come back.', p: 'Write them again: told me, asked if, said they would. It goes to your My notes.' }
];

var ABRE = [
  { q: 'What did somebody tell you this week that you still remember?', fup: 'Who was it?', st: ['My … told me (that) …', 'Somebody said …'], ex: 'My sister told me she was moving to Lisbon.' },
  { q: 'What did somebody ask you recently that surprised you?', fup: 'What did you answer?', st: ['… asked me if …', '… asked me why …'], ex: 'My boss asked me if I wanted a new project.' },
  { q: 'Did anybody promise you something this month? What did they say?', fup: 'Did they keep it?', st: ['… said they would …'], ex: 'My friend said he would call me on Sunday.' }
];

/* 22/10/2026 · OS FORMATOS NOVOS (kit/formatos.js) */
/* II · as notas da Priya depois da reunião (texto nosso) → a regra */
var CARTA = { de: 'Monday meeting · notes · Priya',
  txt: 'Karen [[said]] she was sorry about Wednesday. Mr. Okafor [[told me]] he was not happy with the price. Sam [[asked me if]] I had seen the printer. Leo [[asked me where]] I put the files. Karen [[told me not to]] forget the client. The team [[said they would]] finish by Friday.',
  assina: 'Priya' };
var REGRA = [
  { a: 'SAY has no person: Karen ', par: ['said', 'said me'], c: 0, b: ' she was sorry.' },
  { a: 'TELL needs a person: Mr. Okafor ', par: ['told me', 'told'], c: 0, b: ' he was not happy.' },
  { a: 'One step back: “I will finish” → they said they ', par: ['would', 'will'], c: 0, b: ' finish.' },
  { a: 'Questions lose DID: Leo asked me where I ', par: ['put', 'did put'], c: 0, b: ' the files.' },
  { a: 'Yes/no questions take ', par: ['IF', 'DID'], c: 0, b: ': Sam asked me if I had seen it.' },
  { a: 'Orders take TO: Karen told me ', par: ['not to forget', 'don’t forget'], c: 0, b: ' the client.' }
];
var PRESA = 'she <b>said</b> (no person)<br>she <b>told me</b> (a person)<br>one step back: will → <b>would</b><br>asked me <b>where I lived</b> (no DID)<br>asked <b>if</b> · told me <b>not to</b>';

var PESSOAS = ['MAYA', 'LEO', 'PRIYA', 'YOU'];
var NOMES = ['Maya', 'Leo', 'Priya', 'You'];
var MSGS = [
  { de: 0, f: 'I’m really tired.', rel: 'She said she was really tired.', resp: 'She <b>said</b> she <b>was</b> really tired.' },
  { de: 1, f: 'I’ll call you tonight.', rel: 'He told me he would call me that night.', resp: 'He <b>told me</b> he <b>would</b> call me <b>that night</b>.' },
  { de: 2, f: 'Did you finish the report?', rel: 'She asked if I had finished the report.', resp: 'She asked <b>if</b> I <b>had finished</b> the report.' },
  { de: 0, f: 'We can’t come on Friday.', rel: 'She said they couldn’t come on Friday.', resp: 'She said <b>they couldn’t</b> come on Friday.' },
  { de: 1, f: 'Where do you live?', rel: 'He asked me where I lived.', resp: 'He asked me where I <b>lived</b>.' },
  { de: 2, f: 'Don’t be late.', rel: 'She told me not to be late.', resp: 'She <b>told me not to</b> be late.' }
];
var MITENS = MSGS.map(function (x) {
  var prox = Math.min(x.de + 1, 3);
  return { pista: '<span class="ano">' + NOMES[prox] + '</span>' + (prox === 3 ? 'report' : 'reports') + ' what ' + NOMES[x.de] + ' said', resp: x.resp };
});

var PASSO = [
  { f: '“There’s no milk.” And somebody went shopping.', k: 'nao', cheia: 'She told me there was no milk.', w: 'It’s over, so it goes back.' },
  { f: '“I’m not finished.” And she’s still working.', k: 'sim', cheia: 'She says she isn’t finished.', w: 'Still true right now, so the present stays.' },
  { f: '“They picked somebody else.” Last March.', k: 'nao', cheia: 'He told me they had picked somebody else.', w: 'Finished long ago: two steps back.' },
  { f: '“I’m always here on Fridays.” And she still is.', k: 'sim', cheia: 'She says she’s always here on Fridays.', w: 'A habit that hasn’t stopped.' },
  { f: '“You never listen to me.” In an argument last year.', k: 'nao', cheia: 'He told me I never listened to him.', w: 'The argument is over.' }
];
var STILL = { formato: 'escolhe', titulo: 'Is it still true? Tap. Then say the report out loud.', itens: PASSO.map(function (x) {
  return { p: x.f, o: ['Still true: keep it', 'Over: step back'], c: x.k === 'sim' ? 0 : 1, d: 'Say it: <b>' + x.cheia + '</b> ' + x.w };
}) };

var ERRO = [
  { f: 'She asked me where <u>did I learn</u> that.', r: 'I had learned' },
  { f: 'He asked me <u>who did tell</u> me that.', r: 'who had told' },
  { f: 'She asked me why <u>was I</u> still there.', r: 'I was' },
  { f: 'He asked me <u>what did I actually want</u>.', r: 'what I actually wanted' },
  { f: 'She asked me when <u>were they</u> going to tell me.', r: 'they were' },
  { f: 'He asked me how long <u>had I</u> lived there.', r: 'I had' }
];

var IFS = [
  { p: '“Are you coming back?” (she · ask me · if · I · come back)', r: 'She asked me <b>if</b> I <b>was coming</b> back.' },
  { p: '“Are you going to send it?” (he · ask me · if · I · go to send it)', r: 'He asked me <b>if</b> I <b>was going</b> to send it.' },
  { p: '“Do you really believe that?” (she · ask me · if · I · really believe that)', r: 'She asked me <b>if</b> I really <b>believed</b> that.' },
  { p: '“Have you told anybody?” (he · ask me · if · I · tell anybody)', r: 'He asked me <b>if</b> I <b>had told</b> anybody.' },
  { p: '“Will you be there on Monday?” (she · ask me · if · I · be there on Monday)', r: 'She asked me <b>if</b> I <b>would be</b> there on Monday.' }
];

var PROMESSAS = { formato: 'verdadeOuMentira', rotulos: ['Right', 'Wrong'], titulo: 'Right or wrong? The promise is old. If it’s wrong, say it right.', itens: [
  { f: '“I’ll be here on Monday.” → She said she <b>will</b> be there on Monday. <small>(said last week · Monday is over)</small>', t: false, c: 'She said she <b>would</b> be there on Monday.' },
  { f: '“I’ll stop when you finish.” → He said he <b>would</b> stop when I finished. <small>(said yesterday · it’s all over now)</small>', t: true },
  { f: '“Nobody will notice.” → She said nobody <b>will</b> notice. <small>(said at last year’s party)</small>', t: false, c: 'She said nobody <b>would</b> notice.' },
  { f: '“You’ll thank me later.” → He said I <b>would</b> thank him later. <small>(said years ago)</small>', t: true },
  { f: '“I won’t say it again.” → She said she <b>won’t</b> say it again. <small>(said last month)</small>', t: false, c: 'She said she <b>wouldn’t</b> say it again.' }
] };

var RECADOS = [
  { de: 'KAREN · YOUR BOSS · VOICEMAIL', quem: 'Karen', msg: 'Hi, it’s Karen. The meeting is moving to Thursday. I can’t come on Wednesday. Can you tell the team?', modelo: 'Karen called. She <b>said</b> the meeting <b>was</b> moving to Thursday because she <b>couldn’t</b> make Wednesday, and she <b>asked me to</b> tell the team.', fup: 'Did she say why?' },
  { de: 'MR. OKAFOR · A CLIENT · EMAIL', quem: 'Mr. Okafor', msg: 'We aren’t happy with the price. Will you send us a new offer by Friday?', modelo: 'Mr. Okafor wrote. He <b>said</b> they <b>weren’t</b> happy with the price and <b>asked if</b> we <b>would</b> send a new offer by Friday.', fup: 'Did he say how much?' },
  { de: 'SAM · IT · NOTE ON YOUR DESK', quem: 'Sam', msg: 'The printer is broken. Don’t use it until I fix it.', modelo: 'Sam left a note. He <b>said</b> the printer <b>was</b> broken and <b>told us not to</b> use it until he <b>fixed</b> it.', fup: 'Did he say when?' }
];
var RITENS = RECADOS.map(function (x) { return { pista: '<span class="ano">' + x.quem + '</span>Pass it on to your colleague.', resp: x.modelo, depois: x.fup }; });
var UM_MINUTO = { formato: 'cronometro', segundos: 60, titulo: 'One minute · your own words', texto: 'Say the exact words. Then report them: they told me … · they asked me if … · they said they would …' };
var CONTA = { formato: 'contador', titulo: 'Count your reports', botao: 'One more report', revelar: 'Show the goal', resposta: 'Aim for three: one with told me, one with asked me if, and one with said they would.' };


var S = { i: 0, faixa: 1, fala: {}, resp: {}, armas: {},
  ab: { n: 0, foi: {} } };

/* a corrente de latas: 4 latas, 3 trechos de barbante; vivo / partido / apagado */
function latas(ate, partido, quem, mini) {
  var xs = [60, 260, 460, 660];
  var fios = [0, 1, 2].map(function (i) { var cls = i < ate ? 'vivo' : partido === i ? 'partido' : ''; return '<path class="lt-fio ' + cls + '" d="M' + (xs[i] + 28) + ' 70 Q' + (xs[i] + 100) + ' ' + (cls === 'partido' ? 120 : 98) + ' ' + (xs[i + 1] - 28) + ' 70"/>'; }).join('');
  var cans = xs.map(function (x, i) { var on = i === quem; return '<g class="lt-lata' + (on ? ' on' : '') + (i <= ate ? ' chegou' : '') + '"><rect x="' + (x - 26) + '" y="44" width="52" height="56" rx="6"/><ellipse cx="' + x + '" cy="44" rx="26" ry="8"/><text x="' + x + '" y="128" text-anchor="middle">' + PESSOAS[i] + '</text></g>'; }).join('');
  return '<div class="lt-corrente' + (mini ? ' mini' : '') + '"><svg viewBox="0 0 720 140" aria-hidden="true">' + fios + cans + '</svg></div>';
}
/* a citação que perde as aspas */
function citacao(quote, relato, caiu) {
  return '<div class="lt-cit vd' + (caiu ? ' caiu' : '') + '"><span class="lt-aspas a">“</span><p class="lt-q">' + quote + '</p><span class="lt-aspas b">”</span>' + (caiu ? '<p class="lt-rel">' + relato + '</p>' : '') + '</div>';
}

var R = {};
R.capa = function () {
  return '<div class="capa"><div><span class="kick">MAIN SERIES · B1 · REPORTED SPEECH</span><h1>What They <b>Said</b></h1>'
    + '<p class="sub">“I’ll call you.” Four people later, it has to arrive as: she <b>said</b> she <b>would</b> call.</p>'
    + '<div class="chipsx"><span class="pilula">said · told me</span><span class="pilula">will → would</span><span class="pilula">asked if · no DID</span><span class="pilula">Live Class · W·O·L·F</span></div>'
    + '<button type="button" class="btn cheio" data-a="ir" data-n="1">Start the chain</button>' + faixaLive() + '</div>'
    + '<div class="capa-r">' + latas(2, 2, 2) + citacao('I’ll call you.', 'She said she would call.', 1) + '</div></div>';
};

R.abre = function (c) { return sequencia(c, ABRE, S.ab, 'ab', 'Your three reports are on the board. They come back at the end.') + '<p class="so-prof dica-aluno" style="text-align:center">Write them down. Listen for “she said me” and “he said he will”. Don’t correct.</p>'; };

/* II · as notas da Priya → a regra */
R.regra = function (c) {
  return cab(c) + FM.carta('carta', CARTA, REGRA, { toque: 'Tap the words that report', pronta: 'The rule is ready. It stays in the corner on the next pages.' });
};

/* III · a corrente: o fio acende e a citação perde as aspas no Check */
R.corrente = function (c) {
  return cab(c) + FM.fala('ch', MITENS, {
    rotulo: 'Message', prox: 'Next message', regra: PRESA, diga: 'Say the report out loud first',
    lado: function (feitas, atual, ver) {
      if (atual < 0) return latas(3, -1, 3, 1);
      var x = MSGS[atual], prox = Math.min(x.de + 1, 3);
      return latas(ver ? prox : x.de, -1, ver ? prox : x.de, 1) + '<div class="lt-cen">' + citacao(x.f, x.rel, !!ver) + '</div>';
    },
    fim: 'Six messages arrived intact. Now pass the last one to a fifth person.'
  });
};

/* IV · ainda é verdade? */
R.passo = function (c) {
  return cab(c) + '<div class="fm-com-regra"><div class="fm-mio">' + FM.ex('passo', STILL) + '</div>' + FM.regra('Would the person say the same thing <b>right now</b>?<br>Yes → the present stays<br>No → one step back') + '</div>';
};

/* V · a pergunta que esqueceu de virar relato */
R.pergunta = function (c) {
  return cab(c) + FM.erro('pg', ERRO, { regra: PRESA, titulo: 'These reports still sound like questions. Fix the order. Say it flat.' });
};

/* VI · montar o relato da pergunta de sim/não */
R.simnao = function (c) {
  return cab(c) + FM.pergunta('fi', IFS, { regra: PRESA, titulo: 'Report the question. Say it out loud.', depoisRot: 'IF did the job every time', depois: ['asked me if', 'asked if', 'WHETHER is more formal'] });
};

/* VII · promessas: certo ou errado, dizer certo */
R.would = function (c) {
  return cab(c) + '<div class="fm-com-regra"><div class="fm-mio">' + FM.ex('wd', PROMESSAS) + '</div>' + FM.regra('The promise is old:<br>will → <b>would</b><br>won’t → <b>wouldn’t</b><br>Still in the future? <i>She says she’ll be here</i> is fine.') + '</div>';
};

/* VIII · três recados passados ao colega */
R.recados = function (c) {
  return cab(c) + FM.fala('rc', RITENS, {
    rotulo: 'Message', prox: 'Next message', regra: PRESA, diga: 'Pass it on out loud first',
    lado: function (feitas, atual) {
      var x = RECADOS[atual >= 0 ? atual : RECADOS.length - 1];
      return '<div class="lt-recado vd"><small>' + x.de + '</small><p>“' + x.msg + '”</p></div>';
    },
    fim: 'Nobody had to call back to check. Now invent a fourth message and pass it on.'
  });
};

/* IX · um minuto: as suas próprias palavras */
R.vida = function (c) {
  return cab(c) + '<div class="mesa-c"><div class="lado-l">' + FM.ex('um', UM_MINUTO) + '</div><div class="lado-l">' + FM.ex('conta', CONTA) + '</div></div>';
};

R.fim = function (c) {
  return cab(c) + '<div class="fim">' + escritaFinal('fim', (S.txt || {}).fim || '', (S.salvo || {}).fim, 'My … told me (that) …\n… asked me if …\n… said they would …', 'What they said',
    ['told me', 'said', 'asked me if', 'asked me where', 'would', 'could', 'not to'], ['YOUR THREE REPORTS', 'Something somebody told you, something somebody asked you, and a promise.'])
    + '<div class="lado-fim">' + latas(3, -1, 3, 1)
    + '<div class="grande vd"><span><u>said</u> (no person) · <u>told me</u> (a person)</span><span>one step back: will → <u>would</u> · can → <u>could</u></span><span>asked <u>if</u> · no DID · statement order</span><span>not <s>she said me</s>, not <s>asked where did I</s></span></div>'
    + mostra('fim', 'My sister told me she was moving to Lisbon.<br>My boss asked me if I wanted a new project.<br>My friend said he would call me on Sunday. He didn’t.', 1)
    + '<p class="hw"><a class="pilula" href="HW/" target="_blank" rel="noopener">Homework for the student →</a></p></div></div>';
};

