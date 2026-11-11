/* ============================================================
   SINCE MARCH · KEYS AND A CONTRACT · LIVE CLASS  06/10/2026
   Main series A2 · present perfect com for / since (começou no passado e
   continua verdade): have / has + particípio · since + um ponto · for + um
   tamanho · com data (in March, on Tuesday) volta o passado. Erros
   universais: "I live here since March", "since three years", "I know him
   since…".
   O MUNDO (da aula velha): o apartamento 4B — dois meses sem aluguel, a
   senhoria com a chave; cada pista é uma frase que começou e não parou. No
   fim, o hospital: a mãe dele está internada desde março. Sem áudio.
   A CARA: o CONTRATO de aluguel escuro (papel grafite, carimbo, chave) e a
   RÉGUA com a âncora NOW: SINCE crava um pino; FOR estica até NOW.
   Fila: FILA-LIVE-386.md · 063.
   ============================================================ */
var L = [
  { k: 'capa', est: null, img: 'porta' },
  { k: 'abre', est: 'o', min: 7, img: 'porta', rot: 'I · At the Door', t: 'Before she gives you the key, the landlady asks about you.', p: 'Pick a card. Answer in ONE sentence. Nobody is corrected here.' },
  { k: 'gx', est: 'f', min: 4, img: 'sala', rot: 'II · Since or For?', t: 'Two scenes in apartment 4B.', p: 'Read A and B out loud. Say what is different, then check. Then choose for four new moments.' },
  { k: 'dois', est: 'f', min: 6, img: 'sala', rot: 'III · Two Kinds of Fact', t: 'Eight facts from the landlady. Did it stop?', p: 'Read it out loud. Then choose: FINISHED or STILL TRUE.' },
  { k: 'arm', est: 'f', min: 6, img: 'sala', rot: 'IV · I Live Here Since…', t: 'Every word in the wrong one is correct. The shape is not.', p: 'Read the situation. Say the right one twice. Then tap it.' },
  { k: 'regua', est: 'f', min: 6, img: 'sala', rot: 'V · The Ruler', t: 'Both words end at NOW. They start differently.', p: 'A point or a length? Say the sentence. Then tap SINCE or FOR.' },
  { k: 'geladeira', est: 'o', min: 7, img: 'geladeira', rot: 'VI · The Fridge', t: 'Today is June 23. The fridge is running. Somebody is paying that bill.', p: 'Read the date. Older or newer than March? Then say how long it has been here.' },
  { k: 'regra', est: 'f', min: 6, img: 'sala', rot: 'VII · The Rule', t: 'This one is not about the past. It is about now.', p: 'Say each wrong line the right way, out loud. Then tap it.' },
  { k: 'cal', est: 'f', min: 6, extra: 1, img: 'sala', rot: 'VIII · The Calendar', t: 'March, on the bedroom wall. Crossed out up to the 13th. Then nothing.', p: 'Say the sentence for the next day. Tap the verb. The day gets crossed.' },
  { k: 'contra', est: 'f', min: 6, extra: 1, img: 'porta', rot: 'IX · The Contradiction', t: 'Two sentences. Sometimes they live together. Sometimes one is a lie.', p: 'Read one out loud. Open two. Then decide.' },
  { k: 'entrevista', est: 'o', min: 7, extra: 1, img: 'sala', rot: 'X · The Room Interview', t: 'Now you want the room. The landlady interviews you.', p: 'Answer out loud first. Then check the model.' },
  { k: 'fim', est: 'w', min: 6, img: 'hospital', rot: 'XI · Since March', t: 'One chair by the door. A folded jacket on the seat.', p: 'Write your own answers to the landlady: have / has + since or for. It goes to your My notes.' }
];

var ABRE = [
  { k: 'YOUR HOME', q: 'How long have you lived where you live now?', fup: 'And before that?', st: ['I …', 'since …', 'for …'], ex: 'I have lived there for five years.' },
  { k: 'WORK OR SCHOOL', q: 'And your job or your school: how long?', fup: 'Do you like it?', st: ['I …', 'since …'], ex: 'I have worked there since 2021.' },
  { k: 'THE TENANT', q: 'The man in 4B took the apartment in 2020. It’s 2026. How long has he been my tenant?', fup: 'And how long has the rent been late?', st: ['He …', 'for …'], ex: 'He has been your tenant for six years.' }
];
var FORMAS = [{ k: 'pp', t: 'HAVE LIVED / HAVE WORKED' }, { k: 'sf', t: 'SINCE + POINT · FOR + LENGTH' }, { k: 'pres', t: 'I LIVE HERE SINCE …', erro: 1 }, { k: 's3', t: 'SINCE THREE YEARS', erro: 1 }];

var FATOS = [
  { f: 'He left the bank in March.', k: 'fim', w: 'March ended, and the job with it.' },
  { f: 'He has lived here for six years.', k: 'vale', w: 'Six years, and today is one of them.' },
  { f: 'He paid the rent in April.', k: 'fim', w: 'April is closed.' },
  { f: 'The rent has been late since May.', k: 'vale', w: 'It started in May and it is late right now.' },
  { f: 'She called him on Tuesday.', k: 'fim', w: 'One call, one day, gone.' },
  { f: 'Nobody has seen him for three months.', k: 'vale', w: 'And nobody has seen him today either.' },
  { f: 'He signed the contract in 2020.', k: 'fim', w: 'He signed it once.' },
  { f: 'He has had the same key since 2020.', k: 'vale', w: 'The key is still his.' }
];

var ARM = [
  { sit: 'He came here in 2020. He is still here.', ok: 'He has lived here since 2020.', mau: 'He lives here since 2020.' },
  { sit: 'The rent was late in May. It is late today.', ok: 'The rent has been late for two months.', mau: 'The rent is late for two months.' },
  { sit: 'She started at the bank ten years ago. She is still there.', ok: 'She has worked there for ten years.', mau: 'She works there for ten years.' },
  { sit: 'You met him in March. You still know him.', ok: 'I have known him since March.', mau: 'I know him since March.' },
  { sit: 'He came three years ago. He is still here.', ok: 'He has been here for three years.', mau: 'He has been here since three years.' },
  { sit: 'He got the key in 2020. He still has it.', ok: 'He has had the key since 2020.', mau: 'He has the key since 2020.' }
];

var ESCALAS = { anos: ['2020', '2021', '2022', '2023', '2024', '2025', '2026'], meses: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN'], dias: ['JUN 1', 'JUN 8', 'JUN 15', 'JUN 22'] };
var REGUA = [
  { w: '2020', k: 'since', esc: 'anos', pos: 2, diz: 'He has lived here since 2020.', por: '2020 is a point. You can mark it on a calendar.' },
  { w: 'three weeks', k: 'for', esc: 'dias', pos: 6, diz: 'The milk has been here for three weeks.', por: 'Three weeks is a length. You count back from now.' },
  { w: 'March', k: 'since', esc: 'meses', pos: 36, diz: 'He has been away since March.', por: 'March is a point. The line starts there.' },
  { w: 'two months', k: 'for', esc: 'meses', pos: 62, diz: 'The rent has been late for two months.', por: 'A length.' },
  { w: 'Friday', k: 'since', esc: 'dias', pos: 84, diz: 'Nobody has opened the mail since Friday.', por: 'Friday is a point.' },
  { w: 'six years', k: 'for', esc: 'anos', pos: 2, diz: 'He has had this key for six years.', por: 'Six years is a length: the same line as since 2020.' }
];

var GELADEIRA = [
  { coisa: 'a milk carton', data: 'June 2', novo: 1, diz: 'The milk has been here for three weeks.' },
  { coisa: 'the power bill', data: 'March 3', novo: 0, diz: 'The bill has been here since March.' },
  { coisa: 'a pharmacy receipt', data: 'June 8', novo: 1, diz: 'The receipt has been here for two weeks.' },
  { coisa: 'a bank letter', data: 'March 13', novo: 0, diz: 'The letter has been here for three months.' },
  { coisa: 'a bus ticket', data: 'June 19', novo: 1, diz: 'The ticket has been here for four days.' }
];

var FITAS = [['STILL TRUE', 'have / has + third form'], ['SINCE', 'a point: since March · since 2020'], ['FOR', 'a length: for two months · for six years'], ['A DATE?', 'in March · on Tuesday → the past']];
var ARMAS = [
  ['NOT THE PRESENT', 'I live here since March.', 'I have lived here since March.', 'Started before, still true: have + third form.'],
  ['FOR A LENGTH', 'He has been here since three years.', 'He has been here for three years.', 'Three years is a length: for.'],
  ['SINCE A POINT', 'The rent has been late for May.', 'The rent has been late since May.', 'May is a point: since.'],
  ['KNOW', 'I know him since school.', 'I have known him since school.', 'Still true: have known.'],
  ['A DATE CLOSES IT', 'He has left the bank in March.', 'He left the bank in March.', 'With a date (in March): the past.'],
  ['HAS', 'She have worked there for ten years.', 'She has worked there for ten years.', 'he / she: has.']
];

var CAL = [
  { d: 9, ev: 'dentist', op: [['went', 'ok'], ['has gone', 'pp']], diz: 'He went to the dentist on the 9th.' },
  { d: 10, ev: 'rent', op: [['paid', 'ok'], ['has paid', 'pp']], diz: 'He paid the rent on the 10th.' },
  { d: 11, ev: 'mother', op: [['called', 'ok'], ['has called', 'pp']], diz: 'He called his mother on the 11th.' },
  { d: 12, ev: 'bank', op: [['went', 'ok'], ['has gone', 'pp']], diz: 'He went to the bank on the 12th.' },
  { d: 13, ev: 'last day', op: [['left', 'ok'], ['has left', 'pp']], diz: 'He left the bank on the 13th.' }
];

var CONTRA = [
  { a: 'He left in March.', b: 'Somebody has bought milk this week.', k: 0, w: 'March is closed; this week is open. Either he is still here, or somebody else is.' },
  { a: 'He paid the rent in April.', b: 'The rent has been late since May.', k: 1, w: 'April finished, then May started. Both true.' },
  { a: 'She called him on Tuesday.', b: 'Nobody has seen him for three months.', k: 1, w: 'A phone call is not a face.' },
  { a: 'He worked at the bank for ten years.', b: 'He has worked at the bank for ten years.', k: 0, w: 'Same ten years, one tense apart. The first says he is gone; the second says he is still there.' }
];

var ENTREVISTA = [
  { q: 'How long have you lived in this city?', ok: 'I have lived here for twelve years.' },
  { q: 'How long have you worked or studied where you are now?', ok: 'I have worked there since 2021.' },
  { q: 'How long have you known your best friend?', ok: 'I have known her since school.' },
  { q: 'How long have you had your phone?', ok: 'I have had it for two years.' },
  { q: 'How long have you studied English?', ok: 'I have studied English for three years.' },
  { q: 'Do you have a pet? How long have you had it?', ok: 'I have had my cat since 2022.' }
];
var FINAL = [
  ['His mother has been in this hospital since March.', 'Since March. The same month the calendar stops.'],
  ['He has slept in that chair every night.', 'The folded jacket is the folded blanket on the sofa.'],
  ['He hasn’t left. He has been somewhere else.', 'That is the tense: it carries the past all the way to now.']
];

var S = { i: 0, faixa: 1, fala: {}, resp: {}, armas: {},
  abre: { sel: -1, foi: {}, formas: {} }, dois: {}, arm: { n: 0, esc: '' }, rg: { n: 0, esc: '' }, gel: {}, cal: { n: 0, esc: '' }, ct: { n: 0, b: 0, esc: -1 }, ent: { n: 0 }, fin: 0 };

function regua(esc, pos, tipo, cls) {
  var marcas = ESCALAS[esc], x0 = 40, x1 = 520, xp = x0 + (x1 - x0) * pos / 100;
  var tiques = marcas.map(function (m, i) { var x = x0 + (x1 - x0) * i / (marcas.length - 1) * .92; return '<line x1="' + x + '" y1="70" x2="' + x + '" y2="82"/><text x="' + x + '" y="100" text-anchor="middle">' + m + '</text>'; }).join('');
  var marca = '';
  if (tipo === 'since') marca = '<line x1="' + xp + '" y1="76" x2="' + (x1 + 10) + '" y2="76" class="faixa"/><circle cx="' + xp + '" cy="76" r="9" class="pino"/><line x1="' + xp + '" y1="40" x2="' + xp + '" y2="70" class="haste"/><text x="' + xp + '" y="32" text-anchor="middle" class="rot-p">SINCE</text>';
  if (tipo === 'for') marca = '<line x1="' + xp + '" y1="76" x2="' + (x1 + 10) + '" y2="76" class="faixa"/><path d="M' + xp + ' 52 L' + xp + ' 44 L' + (x1 + 10) + ' 44 L' + (x1 + 10) + ' 52" class="chave"/><text x="' + ((xp + x1 + 10) / 2) + '" y="34" text-anchor="middle" class="rot-p">FOR</text>';
  return '<svg class="regua' + (cls ? ' ' + cls : '') + '" viewBox="0 0 600 120" role="img" aria-label="Time ruler"><line x1="20" y1="76" x2="540" y2="76" class="base"/>' + tiques + marca
    + '<rect x="530" y="56" width="58" height="40" rx="8" class="now"/><text x="559" y="81" text-anchor="middle" class="now-t">NOW</text></svg>';
}
function contrato(cls) {
  return '<div class="contrato' + (cls ? ' ' + cls : '') + '"><small>RENTAL AGREEMENT · APARTMENT 4B</small><div class="linha-c"><span>TENANT</span><b>████████</b></div><div class="linha-c"><span>START</span><b>MARCH 2020</b></div><div class="linha-c"><span>RENT</span><b class="atraso">LATE · 2 MONTHS</b></div><span class="carimbo-c">STILL VALID</span><span class="chave-c">⚿</span></div>';
}

var R = {};
R.capa = function () {
  return '<div class="capa"><div class="lado-a"><span class="kick">MAIN SERIES · A2 · APARTMENT 4B · ONE KEY</span><h1>Since <b>March</b></h1>'
    + '<p class="sub">Nobody has seen the tenant for three months. The landlady has the key. Every clue <b>started in the past</b>, and <b>hasn’t stopped</b>.</p>'
    + '<div class="chipsx"><span class="pilula">have lived</span><span class="pilula">since + a point</span><span class="pilula">for + a length</span><span class="pilula">Live Class · W·O·L·F</span></div>'
    + '<button type="button" class="btn cheio" data-a="ir" data-n="1">Knock on the door</button>' + faixaLive() + '</div>'
    + '<div class="capa-d">' + contrato() + regua('anos', 2, 'since') + '</div></div>';
};

R.abre = function (c) {
  return cartasPessoais(c, ABRE, S.abre, 'abre') + '<div class="partes so-prof"><h5>WHAT YOU HEAR · DON’T CORRECT · THEY COME BACK AT THE END</h5>' + FORMAS.map(function (f) { return '<button type="button" class="chip frase' + (f.erro ? ' erro-ouvido' : '') + (S.abre.formas[f.k] ? ' on' : '') + '" data-a="ab-f" data-v="' + f.k + '">' + f.t + '</button>'; }).join('') + '</div>';
};

R.dois = function (c) {
  var n = 0; FATOS.forEach(function (x, i) { if (S.dois[i] === x.k) n++; });
  return cab(c) + '<div class="fatos compacto">' + FATOS.map(function (x, i) {
    var esc = S.dois[i], ok = esc === x.k;
    return '<div class="q-linha vd' + (ok ? ' feito ' + x.k : '') + '"><p>' + x.f + '</p><div class="tres-b">' + [['fim', 'FINISHED'], ['vale', 'STILL TRUE']].map(function (o) { return '<button type="button" class="pilula' + (esc === o[0] ? (ok ? ' certo' : ' errado') : '') + '" data-a="ds" data-n="' + i + '" data-v="' + o[0] + '"' + (ok ? ' disabled' : '') + '>' + o[1] + '</button>'; }).join('') + '</div>' + (ok ? '<p class="aprova">' + x.w + '</p>' : esc ? '<p class="recusa">Is it over, or is it still true today?</p>' : '') + '</div>';
  }).join('') + '</div>' + (n === 8 ? '<p class="aprova" style="text-align:center">Look at the STILL TRUE ones: everything started in the past and didn’t stop. That is the whole tense.</p>' : '');
};

R.arm = function (c) {
  var e = S.arm, n = e.n, fim = n >= ARM.length;
  if (fim) return cab(c) + trilha(ARM, n) + '<div class="foco"><div class="pergunta vd"><small>SIX SHAPES</small><h2>The pieces were never the problem. Started before, still true: have / has + third form.</h2></div></div>';
  var x = ARM[n], ok = e.esc === 'ok';
  return cab(c) + trilha(ARM, n) + '<div class="foco"><div class="sit vd"><small>THE SITUATION</small><b>' + x.sit + '</b></div>'
    + (ok ? contratoLinha(x.ok) + '<div style="text-align:center"><button type="button" class="btn" data-a="ar-prox">Next</button></div>'
      : '<div class="versoes dois-v">' + ordem([[x.ok, 'ok'], [x.mau, 'mau']], n + 1).map(function (o) { return '<button type="button" class="versao' + (e.esc === o[1] ? ' errado' : '') + '" data-a="ar" data-v="' + o[1] + '">' + o[0] + '</button>'; }).join('') + '</div>' + (e.esc ? '<p class="recusa" style="text-align:center">It started before and it is still true. Which shape carries both?</p>' : '')) + '</div>';
};
function contratoLinha(t) { return '<div class="clausula vd"><small>THE CONTRACT SAYS</small><b>' + t + '</b></div>'; }

R.regua = function (c) {
  var e = S.rg, n = e.n, fim = n >= REGUA.length;
  if (fim) return cab(c) + trilha(REGUA, n) + '<div class="foco">' + regua('anos', 2, 'since') + regua('anos', 2, 'for') + '<div class="pergunta vd"><small>SAME LINE, TWO WAYS IN</small><h2>A pin (SINCE) or a length (FOR). Both end at NOW.</h2></div></div>';
  var x = REGUA[n], ok = e.esc === x.k;
  return cab(c) + trilha(REGUA, n) + '<div class="foco"><div class="quadro-r vd">' + regua(x.esc, x.pos, ok ? x.k : (e.esc && e.esc !== x.k ? '' : '')) + '</div><div class="palavra-r vd"><small>THE WORD</small><b>' + x.w + '</b></div>'
    + (ok ? '<div class="clausula vd"><small>SAY IT</small><b>' + x.diz + '</b><em>' + x.por + '</em></div><div style="text-align:center"><button type="button" class="btn" data-a="rg-prox">Next</button></div>'
      : '<div class="tres-b centro">' + [['since', 'SINCE · A POINT'], ['for', 'FOR · A LENGTH']].map(function (o) { return '<button type="button" class="pilula grande-p' + (e.esc === o[0] ? ' errado' : '') + '" data-a="rg" data-v="' + o[0] + '">' + o[1] + '</button>'; }).join('') + '</div>' + (e.esc ? '<p class="recusa" style="text-align:center">Can you put a pin in it? Pin: SINCE. Length: FOR.</p>' : '')) + '</div>';
};

R.geladeira = function (c) {
  var n = 0; GELADEIRA.forEach(function (x, i) { if (S.gel[i] === x.novo) n++; });
  return cab(c) + '<div class="mesa-c mesa-g"><div class="aberta vd" style="background-image:url(' + img('geladeira') + ')"><span>TODAY · JUNE 23</span></div><div class="lado-l compacto">' + GELADEIRA.map(function (x, i) {
    var esc = S.gel[i], ok = esc === x.novo;
    return '<div class="q-linha vd' + (ok ? ' feito' : '') + '"><p><span class="etiqueta">' + x.data + '</span> ' + x.coisa + '</p>' + (ok ? '<p class="aprova">' + x.diz + '</p>' : '<div class="tres-b">' + [[0, 'OLDER · MARCH'], [1, 'NEWER · AFTER MARCH']].map(function (o) { return '<button type="button" class="pilula' + (esc === o[0] ? ' errado' : '') + '" data-a="gl" data-n="' + i + '" data-v="' + o[0] + '">' + o[1] + '</button>'; }).join('') + '</div>' + (esc !== undefined ? '<p class="recusa">Look at the month again.</p>' : '')) + '</div>';
  }).join('') + (n === 5 ? '<p class="aprova">Three things are newer than March. Somebody has been in this kitchen.</p>' : '') + '</div></div>';
};

R.regra = function (c) {
  return cab(c) + '<div class="fitas">' + FITAS.map(function (f) { return '<div class="fita vd"><small>' + f[0] + '</small><b>' + f[1] + '</b></div>'; }).join('') + '</div>' + armas(ARMAS, 'THE TRAPS · SAY IT RIGHT, THEN TAP');
};

R.cal = function (c) {
  var e = S.cal, n = e.n, fim = n >= CAL.length, x = fim ? null : CAL[n], ok = x && e.esc === 'ok';
  var riscado = function (d) { if (d < 9) return true; var idx = d - 9; return idx < n || (idx === n && ok); };
  var grade = '<div class="calendario"><div class="mes">MARCH</div><div class="semana-c">' + ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'].map(function (d) { return '<span>' + d + '</span>'; }).join('') + '</div><div class="dias-c">'
    + Array.apply(null, Array(31)).map(function (_, i) { var d = i + 1, ev = CAL.filter(function (k) { return k.d === d; })[0]; return '<span class="dia' + (d <= 13 && riscado(d) ? ' x' : '') + (x && d === x.d ? ' hoje' : '') + '"><b>' + d + '</b>' + (ev ? '<small>' + ev.ev + '</small>' : '') + '</span>'; }).join('') + '</div></div>';
  var lado = fim ? '<div class="pergunta vd"><small>FIVE CROSSES</small><h2>Five crosses and then nothing. Every one was finished, with a date.</h2></div>'
    : '<div class="sit vd"><small>MARCH ' + x.d + ' · ' + x.ev.toUpperCase() + '</small><b>There is a date. Say the sentence.</b></div>' + (ok ? contratoLinha(x.diz) + '<div><button type="button" class="btn" data-a="cl-prox">Next day</button></div>'
      : '<div class="tres-b">' + ordem(x.op, n + 2).map(function (o) { return '<button type="button" class="pilula grande-p' + (e.esc === o[1] ? ' errado' : '') + '" data-a="cl" data-v="' + o[1] + '">' + o[0] + '</button>'; }).join('') + '</div>' + (e.esc ? '<p class="recusa">There is a date. A date closes the door: past.</p>' : ''));
  return cab(c) + '<div class="mesa-c">' + grade + '<div class="lado-l">' + lado + '</div></div>';
};

R.contra = function (c) {
  var e = S.ct, n = e.n, fim = n >= CONTRA.length;
  if (fim) return cab(c) + trilha(CONTRA, n) + '<div class="foco"><div class="pergunta vd"><small>THE LAST PAIR</small><h2>The same sentence twice, and it says two opposite things. That is the tense.</h2></div></div>';
  var x = CONTRA[n], ok = e.esc === x.k;
  return cab(c) + trilha(CONTRA, n) + '<div class="foco"><div class="par-c"><div class="clausula vd"><small>ONE</small><b>' + x.a + '</b></div>' + (e.b ? '<div class="clausula vd"><small>TWO</small><b>' + x.b + '</b></div>' : '<button type="button" class="btn" data-a="ct-b">Open two</button>') + '</div>'
    + (e.b ? (ok ? '<p class="aprova" style="text-align:center">' + x.w + '</p><div style="text-align:center"><button type="button" class="btn" data-a="ct-prox">Next pair</button></div>'
      : '<div class="tres-b centro">' + [[1, 'BOTH CAN BE TRUE'], [0, 'ONE IS A LIE']].map(function (o) { return '<button type="button" class="pilula grande-p' + (e.esc === o[0] ? ' errado' : '') + '" data-a="ct" data-v="' + o[0] + '">' + o[1] + '</button>'; }).join('') + '</div>' + (e.esc >= 0 ? '<p class="recusa" style="text-align:center">Think about today. Can both be true right now?</p>' : '')) : '') + '</div>';
};

R.entrevista = function (c) {
  var e = S.ent, n = Math.min(e.n, ENTREVISTA.length - 1), x = ENTREVISTA[n];
  return cab(c) + trilha(ENTREVISTA, e.n) + '<div class="mesa-c">' + contrato('vazio') + '<div class="lado-l"><div class="pergunta vd ja"><small>THE LANDLADY · QUESTION ' + (n + 1) + ' OF 6</small><h2>' + x.q + '</h2></div>'
    + fala('en' + n, ['I have … for …', 'I have … since …'], ['lived', 'worked', 'known', 'had', 'studied']) + mostra('en' + n, x.ok, 1) + (n < ENTREVISTA.length - 1 ? '<div><button type="button" class="btn" data-a="en-prox">Next question</button></div>' : '<p class="aprova">None of that happened in apartment 4B. The room is yours.</p>') + '</div></div>';
};

R.fim = function (c) {
  var f = S.abre.formas, lembra = FORMAS.filter(function (x) { return f[x.k]; }).map(function (x) { return x.t; });
  var fimTodo = S.fin >= FINAL.length;
  return cab(c) + (fimTodo ? '<div class="clausula vd recap"><b>His mother has been in this hospital since March. He hasn’t left. He has been somewhere else.</b></div>' : '<div class="fim-s"><div class="aberta vd hospital" style="background-image:url(' + img('hospital') + ')"><span>THE HOSPITAL · NIGHT</span></div><div class="lado-l">'
    + FINAL.map(function (l, i) { return i < S.fin ? '<div class="clausula vd"><b>' + l[0] + '</b><em>' + l[1] + '</em></div>' : ''; }).join('')
    + (S.fin < FINAL.length ? '<div><button type="button" class="btn" data-a="fn">' + (S.fin ? 'Next line' : 'Read the answer') + '</button></div>' : '') + '</div></div>')
    + (S.fin >= FINAL.length ? '<div class="fim">' + escritaFinal('fim', (S.txt || {}).fim || '', (S.salvo || {}).fim, 'I have lived in … for …\nI have known … since …', 'Your answers',
      ['I have lived in ', 'I have worked ', 'I have known ', ' since ', ' for '], ['THE LANDLADY’S QUESTIONS, AGAIN', lembra.length ? 'At the door your teacher heard: ' + lembra.join(', ') + '. Now answer again, with have / has.' : 'Answer the landlady again: how long have you lived, worked, known…?'])
      + '<div class="lado-fim"><div class="grande vd"><span>still true: <u>have / has + third form</u></span><span><u>since</u> + a point · <u>for</u> + a length</span><span>a date closes it: <u>the past</u></span></div>' + mostra('fim', 'I have lived in Recife for twelve years.<br>I have worked at the school since 2021.<br>I have known my best friend since we were six.', 1)
      + '<p class="hw"><a class="pilula" href="HW/" target="_blank" rel="noopener">Homework for the student →</a></p></div></div>' : '');
};

TOQUES['ab-f'] = function (b, n, v) { S.abre.formas[v] = !S.abre.formas[v]; };
TOQUES.ds = function (b, n, v) { S.dois[n] = v; };
TOQUES.ar = function (b, n, v) { S.arm.esc = v; };
TOQUES['ar-prox'] = function () { S.arm = { n: S.arm.n + 1, esc: '' }; };
TOQUES.rg = function (b, n, v) { S.rg.esc = v; };
TOQUES['rg-prox'] = function () { S.rg = { n: S.rg.n + 1, esc: '' }; };
TOQUES.gl = function (b, n, v) { S.gel[n] = +v; };
TOQUES.cl = function (b, n, v) { S.cal.esc = v; };
TOQUES['cl-prox'] = function () { S.cal = { n: S.cal.n + 1, esc: '' }; };
TOQUES['ct-b'] = function () { S.ct.b = 1; };
TOQUES.ct = function (b, n, v) { S.ct.esc = +v; };
TOQUES['ct-prox'] = function () { S.ct = { n: S.ct.n + 1, b: 0, esc: -1 }; };
TOQUES['en-prox'] = function () { S.ent.n++; };
TOQUES.fn = function () { S.fin++; };

/* 10/11/2026 · AS EXPLICAÇÕES (kit/formatos3.js) · G5 · uma cena curta nova (k: gx) antes de dois.
   Explicação 100% em inglês: see → notice → use (o aluno fala ou escreve uma frase dele no fim). */
var GX_EXPLICA = { formato: 'contraste', titulo: 'This or that? Two scenes in apartment 4B.',
  a: { t: 'A starting point', falas: [['The landlady', 'How long have you lived here?'], ['You', 'I’ve lived here <mark>since</mark> March.']], d: 'March is a point on the calendar. That is <b>since</b>.' },
  b: { t: 'A length of time', falas: [['The landlady', 'And the rent?'], ['You', 'I haven’t paid it <mark>for</mark> two months.']], d: 'Two months is a length. That is <b>for</b>.' },
  pergunta: 'Same idea, two words. What is different?',
  pergunta2: 'Now you. Which one fits?',
  itens: [
    { p: 'The fridge broke on Tuesday. Today is Friday:', o: ['It’s been broken since Tuesday.', 'It’s been broken for Tuesday.'], c: 0, d: 'Tuesday is a point.' },
    { p: 'You got the key two months ago:', o: ['I’ve had the key since two months.', 'I’ve had the key for two months.'], c: 1, d: 'Two months is a length.' },
    { p: 'The landlady asks: How long have you been here?', o: ['Since six weeks.', 'For six weeks.'], c: 1, d: 'Six weeks is a length.' },
    { p: 'The last payment was in March:', o: ['I haven’t paid since March.', 'I haven’t paid for March.'], c: 0, d: 'March is a point.' }
  ],
  nota: 'Both words go with <b>have / has + participle</b>. <b>Since</b> + a point (March, Tuesday, 2020). <b>For</b> + a length (two months, three weeks).',
  uso: { p: 'Your turn. Something that is still true about you. Say it with since, and again with for.', molde: ['I’ve lived here since …', 'I’ve worked here for …'], ex: 'I’ve lived in this apartment since 2022. I’ve worked here for three years.' } };
R.gx = function (c) { return cab(c) + FM.ex('gx_isso', GX_EXPLICA); };
