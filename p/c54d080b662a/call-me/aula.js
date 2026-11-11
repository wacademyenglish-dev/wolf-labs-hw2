/* ============================================================
   CALL ME · THE CONTACT BOOK · LIVE CLASS  05/10/2026
   Main series A1 · pronomes objeto: me · you · him · her · it · us · them
   (depois do verbo e depois de with / for / to / about)
   O MUNDO: o aniversário da Lia é sábado e a festa é surpresa. O aluno
   organiza tudo pelo telefone. A agenda tem oito contatos; cada fio só
   liga no quadro da festa com o pronome certo. Na sexta à noite o
   telefone não para de tocar (o professor faz as vozes) e a lista da
   festa vai se completando.
   Sem áudio gravado (como na aula antiga): o professor é o áudio.
   Mantido: a história, as oito notas, as sete rodadas "I saw he", o
   "call-im / tell-er" e as cinco ligações. Fila: FILA-LIVE-386.md · 004.
   ============================================================ */
var L = [
  { k: 'capa', est: null, img: 'festa' },
  { k: 'noticia', est: 'o', min: 7, img: 'festa', rot: 'I · Good News', t: 'Before the party: your people.', p: 'Pick a card. Answer out loud with a full sentence. Then the follow-up comes.' },
  { k: 'gx', est: 'f', min: 3, img: 'festa', rot: 'II · The Pocket Rule', t: 'Four lines. Keep them in the corner.', p: 'Read one line at a time. Then keep the rule in the corner for the party scenes.' },
  { k: 'times', est: 'f', min: 6, img: 'festa', rot: 'III · Two Teams', t: 'English has two teams of pronouns.', p: 'Pick a word. Say the short sentence. Then send it: does it START a sentence, or FOLLOW the verb?' },
  { k: 'agenda', est: 'f', min: 6, img: 'festa', rot: 'IV · The Contact Book', t: 'Eight contacts. Each wire needs one word.', p: 'Pick a contact. Read the note out loud with the right word. Then plug the wire in.' },
  { k: 'viele', est: 'f', min: 6, img: 'festa', rot: 'V · I See He', t: 'The wrong one sounds right. Choose anyway.', p: 'Read both out loud. Tap the right one. Say it again.' },
  { k: 'som', est: 'o', min: 7, img: 'festa', rot: 'VI · Say It Fast', t: 'You write HIM. You say IM.', p: 'Your teacher says both. Repeat four times: the fourth one counts.' },
  { k: 'ordem', est: 'f', min: 6, img: 'festa', rot: 'VII · Two in One Line', t: 'Two people in one line. The order is the test.', p: 'Tap the pieces in order. Then read the line out loud.' },
  { k: 'festa', est: 'o', min: 7, extra: 1, img: 'festa', rot: 'VIII · The Phone Keeps Ringing', t: 'Friday night. Everybody calls you with a question.', p: 'Answer the call. Your teacher is the caller. Answer with a person or a thing after the verb.' },
  { k: 'quem', est: 'o', min: 7, extra: 1, img: 'festa', rot: 'IX · Who Are You Talking About?', t: 'The situation and the pieces. You build the sentence.', p: 'Say the whole sentence first. Then check it.' },
  { k: 'contatos', est: 'o', min: 7, extra: 1, img: 'festa', rot: 'X · Your Own Contacts', t: 'Now your real people.', p: 'Answer out loud. Every answer ends with a person or a thing.' },
  { k: 'fim', est: 'w', min: 6, img: 'festa', rot: 'XI · The Group Chat', t: 'Saturday morning. Write to the party group.', p: 'Five messages: who brings what, who picks up who. A person or a thing after every verb. The red line watches the pronouns. It goes to your My notes.' }
];

/* I · boas notícias */
var NOTICIA = [
  { k: 'GOOD NEWS', q: 'Who do you call first with good news?', fup: 'Do you call him or her every day?', st: ['I call my …', 'I call him / her first.'], ex: 'I call my sister. I call her first, every time.' },
  { k: 'THE MOST', q: 'Who calls you the most?', fup: 'Do you always answer them?', st: ['My … calls me …', 'He / She calls me every …'], ex: 'My mother calls me every day. I don’t always answer her!' },
  { k: 'A PARTY', q: 'Who do you always invite to a party?', fup: 'What do they bring?', st: ['I always invite …', 'They bring …'], ex: 'I always invite my cousins. They bring the music.' },
  { k: 'A SECRET', q: 'Who do you tell your secrets to?', fup: 'Do they keep them?', st: ['I tell my secrets to …', 'He / She keeps them.'], ex: 'I tell my secrets to my best friend. She keeps them.' }
];

/* II · dois times */
var FICHAS = [
  { w: 'I', k: 'a', fr: 'I call.' }, { w: 'me', k: 'd', fr: 'Call me.' }, { w: 'he', k: 'a', fr: 'He calls.' }, { w: 'him', k: 'd', fr: 'Call him.' },
  { w: 'she', k: 'a', fr: 'She calls.' }, { w: 'her', k: 'd', fr: 'Call her.' }, { w: 'we', k: 'a', fr: 'We call.' }, { w: 'us', k: 'd', fr: 'Call us.' },
  { w: 'they', k: 'a', fr: 'They call.' }, { w: 'them', k: 'd', fr: 'Call them.' }, { w: 'you', k: 'x', fr: 'You call. · Call you.' }, { w: 'it', k: 'x', fr: 'It rings. · Answer it.' }
];

/* III · a agenda: o[0] é a certa; o[1] é a forma de sujeito */
var CONTATOS = [
  { n: 'Lia', s: 'birthday girl', c: 'L', a: 'The surprise', f: 'It’s a surprise. Don’t tell ___ !', o: ['her', 'she', 'him', 'it'] },
  { n: 'Tom', s: 'has a car', c: 'T', a: 'The ride', f: 'Tom has a car. Call ___ first.', o: ['him', 'he', 'her', 'them'] },
  { n: 'Ana & Ben', s: 'the twins', c: 'AB', a: 'The music', f: 'The twins have speakers. Ask ___ for music.', o: ['them', 'they', 'him', 'us'] },
  { n: 'Mrs. Kim', s: 'next door', c: 'K', a: 'The neighbor', f: 'Mrs. Kim hears everything. Invite ___ too.', o: ['her', 'she', 'them', 'it'] },
  { n: 'The cake', s: 'at the bakery', c: '🎂', a: 'The cake', f: 'The cake is ready at six. Please get ___ .', o: ['it', 'its', 'him', 'her'] },
  { n: 'Sara', s: 'Lia’s sister', c: 'S', a: 'The address', f: 'Sara says: “Send ___ the address.”', o: ['me', 'I', 'her', 'you'] },
  { n: 'Sara & you', s: 'the team', c: 'US', a: 'The team', f: 'Tom says: “I take ___ both.”', o: ['us', 'we', 'them', 'you'] },
  { n: 'The band', s: 'plays at nine', c: '♪', a: 'The band', f: 'The band wants the money. Pay ___ on Saturday.', o: ['them', 'they', 'it', 'him'] }
];

/* IV · eu vi ele */
var VIELE = [
  { ok: 'I see him every day.', mau: 'I see he every day.', nota: 'He starts a sentence. After a verb it becomes him.' },
  { ok: 'I talk to her.', mau: 'I talk to she.', nota: 'After to, with, for too: to her.' },
  { ok: 'She works with them.', mau: 'She works with they.', nota: 'With them. Same rule, same place.' },
  { ok: 'He calls us on Monday.', mau: 'He calls we on Monday.', nota: 'We starts. Us follows.' },
  { ok: 'Call me tonight.', mau: 'Call to me tonight.', nota: 'Call + person. No TO in the middle.' },
  { ok: 'I go with him.', mau: 'I go with he.', nota: 'After a verb or a little word like with, it changes.' },
  { ok: 'They know her very well.', mau: 'They know she very well.', nota: 'They starts and her follows. Both in one line.' }
];

/* V · diga rápido */
var SOM = [{ e: 'Call him.', f: 'CALL-im' }, { e: 'Tell her.', f: 'TELL-er' }, { e: 'I see him.', f: 'I SEE-im' }, { e: 'Give her the cake.', f: 'GIVE-er the cake' }];

/* VI · dois na mesma linha */
var LINHAS = [
  ['Send', 'it', 'to', 'me'], ['Tell', 'her', 'about', 'us'], ['He', 'shows', 'them', 'the', 'photos'],
  ['We', 'call', 'her', 'every', 'week'], ['They', 'ask', 'him', 'for', 'it'], ['Give', 'me', 'your', 'number']
];

/* VII · as ligações */
var CHAMADAS = [
  { n: 'Tom', c: 'T', p: 'Do I pick up Lia at seven?', m: 'No! Don’t pick her up. Pick up the cake. Get it at six.', t: 'cake' },
  { n: 'Ana', c: 'AB', p: 'Do you want the speakers? Ben has them.', m: 'Yes, bring them, please. Ask him to come early.', t: 'music' },
  { n: 'Mrs. Kim', c: 'K', p: 'I have a dog. Do I bring him?', m: 'Of course, bring him! But keep him quiet.', t: 'guests' },
  { n: 'Sara', c: 'S', p: 'Lia is asking about Saturday. What do I tell her?', m: 'Tell her we have dinner at my place. Don’t tell her about the party!', t: 'secret' },
  { n: 'The band', c: '♪', p: 'Where do we send the bill?', m: 'Send it to me. I pay you on Saturday.', t: 'band' }
];
var LISTA = { cake: 'The cake', music: 'The music', guests: 'The guests', secret: 'The secret', band: 'The band' };
var PARTES = [{ k: 'depois', t: 'PRONOUN AFTER THE VERB' }, { k: 'pessoa', t: 'THE RIGHT PERSON (HIM / HER / THEM / IT)' }];

/* VIII · de quem falamos */
var CASOS = [
  { sit: 'Your sister is outside.', pista: ['tell', 'one woman', 'to come in'], r: 'Tell her to come in.' },
  { sit: 'The clients want the new prices.', pista: ['send', 'more than one person', 'the list'], r: 'Send them the list.' },
  { sit: 'Your phone rings on the table.', pista: ['answer', 'a thing'], r: 'Answer it.' },
  { sit: 'Your brother’s keys are at your house.', pista: ['call', 'one man', 'now'], r: 'Call him now.' },
  { sit: 'Two friends ask about the class.', pista: ['explain', 'a thing', 'to', 'two people'], r: 'Explain it to them.' },
  { sit: 'Your friend wants to see your new photos.', pista: ['show', 'one woman', 'the photos'], r: 'Show her the photos.' }
];

/* IX · seus contatos */
var MEUS = [
  { q: 'Who do you call when you need help?', fup: 'What does he or she do for you?', st: ['I call my …', 'I call him / her because …'], ex: 'I call my brother. He always helps me with my car.' },
  { q: 'Who do you text every day?', fup: 'What do you text them about?', st: ['I text …', 'I text them about …'], ex: 'I text my friends. I text them about football.' },
  { q: 'Who do you never call?', fup: 'Do you send them messages?', st: ['I never call …', 'I send them …'], ex: 'I never call my boss. I send her emails.' },
  { q: 'What do you do with old photos on your phone?', fup: 'Do you print any?', st: ['I keep them.', 'I delete them.'], ex: 'I keep them all. I never delete them!' },
  { q: 'Who do you tell a secret to?', fup: 'Do you trust them?', st: ['I tell it to …'], ex: 'I tell it to my grandmother. She never tells anybody.' }
];

/* ---------- o estado ---------- */
var S = { i: 0, faixa: 1, fala: {}, resp: {}, armas: {},
  noticia: { sel: -1, foi: {} }, times: { sel: -1, feitos: {}, err: '' },
  agenda: { sel: -1, ligados: {}, err: '' }, viele: { n: 0, esc: -1 }, som: { n: 0, vezes: 0, viu: 0 },
  ordem: { n: 0, poe: [], err: '' }, festa: { n: 0, atendeu: 0, foi: {}, partes: {}, erro: {} },
  quem: { n: 0 }, contatos: { n: 0, foi: {} } };

/* ---------- as cenas ---------- */
var R = {};
function avatar(c, on) { return '<span class="avatar' + (on ? ' on' : '') + '">' + c + '</span>'; }
R.capa = function () {
  return '<div class="capa"><div class="lado-a"><span class="kick">MAIN SERIES · THE CONTACT BOOK · A1</span><h1>Call <b>Me</b></h1>'
    + '<p class="sub">It’s Lia’s birthday on Saturday. Don’t tell her. Call everybody else.</p>'
    + '<div class="chipsx"><span class="pilula">me · him · her · it</span><span class="pilula">us · them</span><span class="pilula">call him, not call to him</span><span class="pilula">Live Class · W·O·L·F</span></div>'
    + '<button type="button" class="btn cheio" data-a="ir" data-n="1">Open the contacts</button>' + faixaLive() + '</div>'
    + '<div class="foto"><img src="' + img('festa') + '" alt="A living room ready for a surprise party, with balloons and a cake"><div class="placa-capa"><small>SATURDAY · 8 PM</small><b>SURPRISE!</b><span>DON’T TELL HER</span></div></div></div>';
};
R.noticia = function (c) { return cartasPessoais(c, NOTICIA, S.noticia, 'noticia'); };

R.times = function (c) {
  var e = S.times, x = e.sel >= 0 ? FICHAS[e.sel] : null;
  var fichas = '<div class="fichas">' + FICHAS.map(function (f, i) { return '<button type="button" class="ficha' + (e.sel === i ? ' on' : '') + (e.feitos[i] ? ' feito' : '') + '" data-a="tm-sel" data-n="' + i + '"' + (e.feitos[i] ? ' disabled' : '') + '>' + f.w + '</button>'; }).join('') + '</div>';
  var lista = function (k) { return FICHAS.filter(function (f, i) { return e.feitos[i] && (f.k === k || f.k === 'x'); }).map(function (f) { return '<span>' + f.w + '</span>'; }).join(''); };
  var caixas = '<div class="times-cx">' + [['a', 'IT STARTS', 'He calls.'], ['d', 'IT FOLLOWS', 'Call him.']].map(function (b) {
    return '<button type="button" class="time' + (x && e.err === b[0] ? ' errado' : '') + '" data-a="tm" data-v="' + b[0] + '"' + (x && !e.feitos[e.sel] ? '' : ' disabled') + '><small>' + b[1] + '</small><em>' + b[2] + '</em><div class="dentro">' + (lista(b[0]) || '<i>empty</i>') + '</div></button>';
  }).join('') + '</div>';
  var meio = x ? (e.feitos[e.sel] ? '<p class="aprova">GOT IT. ' + (x.k === 'x' ? '<b>' + x.w + '</b> is the same on both teams.' : '“' + x.fr + '”') + '</p>'
    : '<div class="pergunta vd"><small>SAY IT</small><h2>' + x.fr + '</h2></div>' + (e.err ? '<p class="recusa">' + (x.k === 'a' ? 'Do we say “Call ' + x.w + '”? No: this one starts a sentence.' : 'Do we say “' + x.w.charAt(0).toUpperCase() + x.w.slice(1) + ' calls”? No: this one follows the verb.') + '</p>' : ''))
    : '<p class="dica-aluno" style="text-align:center">Pick a word.</p>';
  var fim = Object.keys(e.feitos).length === FICHAS.length ? '<p class="aprova" style="text-align:center">Five pairs change. YOU and IT never do.</p>' : '';
  return cab(c) + fichas + '<div class="foco">' + meio + '</div>' + caixas + fim;
};

R.agenda = function (c) {
  var e = S.agenda, x = e.sel >= 0 ? CONTATOS[e.sel] : null, n = Object.keys(e.ligados).length;
  var lista = '<div class="contatos vd"><div class="topo-tel"><b>Contacts</b><small>' + n + ' / 8 connected</small></div>' + CONTATOS.map(function (k, i) {
    return '<button type="button" class="contato' + (e.sel === i ? ' on' : '') + (e.ligados[i] ? ' ligado' : '') + '" data-a="ag-sel" data-n="' + i + '">' + avatar(k.c, e.ligados[i]) + '<span><b>' + k.n + '</b><small>' + k.s + '</small></span><i class="plug">' + (e.ligados[i] ? k.o[0] : '') + '</i></button>';
  }).join('') + '</div>';
  var quadro = '<div class="quadro-festa vd"><small>THE PARTY BOARD</small><div class="tomadas">' + CONTATOS.map(function (k, i) { return '<span class="tomada' + (e.ligados[i] ? ' on' : '') + '"><i></i>' + k.a + '</span>'; }).join('') + '</div>';
  if (x) {
    var ops = ordem(x.o.map(function (t, i) { return [t, i]; }), e.sel + 1), feito = e.ligados[e.sel];
    quadro += '<div class="nota vd' + (feito ? ' feita' : '') + '"><small>NOTE · ' + x.n.toUpperCase() + '</small><p>' + x.f.replace('___', feito ? '<b>' + x.o[0] + '</b>' : '<span class="vaga">___</span>') + '</p></div>'
      + (feito ? '<p class="aprova">GOT IT. The wire is in. Read it again out loud.</p>'
        : '<div class="plugs">' + ops.map(function (o) { return '<button type="button" class="plug-b' + (e.err === o[0] ? ' errado' : '') + '" data-a="ag" data-v="' + o[0] + '">' + o[0] + '</button>'; }).join('') + '</div>'
          + (e.err ? '<p class="recusa">' + (e.err === x.o[1] ? '<b>' + x.o[1] + '</b> starts a sentence. After the verb, it’s a different word.' : 'Wrong person. Look at the contact: one woman, one man, a thing, or more than one?') + '</p>' + mostra('ag' + e.sel, x.f.replace('___', '<b>' + x.o[0] + '</b>')) : '<p class="dica-aluno">Read the note out loud with the word. Then plug it in.</p>'));
  } else quadro += '<p class="dica-aluno">Pick a contact.</p>';
  quadro += (n === 8 ? '<p class="aprova">Eight wires, eight words, and every one is after the verb.</p>' : '') + '</div>';
  return cab(c) + '<div class="mesa-agenda">' + lista + quadro + '</div>';
};

R.viele = function (c) {
  var v = S.viele, n = v.n, fim = n >= VIELE.length, x = VIELE[Math.min(n, VIELE.length - 1)];
  if (fim) return cab(c) + trilha(VIELE, n) + '<div class="foco"><div class="pergunta vd"><small>SEVEN SENTENCES</small><h2>And the wrong one sounded fine every time. Now you know where it goes: after the verb.</h2></div></div>';
  var certo = v.esc === 0, ops = ordem([[x.ok, 0], [x.mau, 1]], n);
  return cab(c) + trilha(VIELE, n) + '<div class="foco"><div class="duas-msg">' + ops.map(function (o) {
    return '<button type="button" class="msg-b' + (v.esc === o[1] ? (o[1] === 0 ? ' certo' : ' errado') : '') + '" data-a="vl" data-n="' + o[1] + '"' + (certo ? ' disabled' : '') + '><span class="balao">' + o[0] + '</span></button>';
  }).join('') + '</div>'
    + (certo ? '<p class="aprova">GOT IT. ' + x.nota + ' Say it again: <b>' + x.ok + '</b></p><div style="text-align:center"><button type="button" class="btn" data-a="vl-prox">Next</button></div>'
      : (v.esc === 1 ? '<p class="recusa">It sounds fine, but no. ' + x.nota + '</p>' : '<p class="dica-aluno" style="text-align:center">Read both out loud. Then tap one.</p>')) + '</div>';
};

R.som = function (c) {
  var s = S.som, n = s.n, fim = n >= SOM.length, x = SOM[Math.min(n, SOM.length - 1)];
  if (fim) return cab(c) + trilha(SOM, n) + '<div class="foco"><div class="pergunta vd"><small>FOUR LINES</small><h2>You write HIM and HER. You say IM and ER.</h2></div>' + follow('NOW YOURS', 'Say a sentence of your own, the fast way.', ['Call him …', 'Tell her …', 'Ask them …'], [], 'somsua') + '</div>';
  return cab(c) + trilha(SOM, n) + '<div class="foco"><div class="dois-jeitos"><div class="jeito vd"><small>YOU WRITE</small><b>' + x.e + '</b></div><div class="jeito falado vd' + (s.viu ? ' on' : '') + '"><small>YOU SAY</small><b>' + (s.viu ? x.f : '· · ·') + '</b></div></div>'
    + '<p class="so-prof diga-prof">Say the written one, then the spoken one, twice. Then hand it over.</p>'
    + '<div class="vezes">' + [1, 2, 3, 4].map(function (k) { return '<button type="button" class="vez' + (s.vezes >= k ? ' on' : '') + (k === 4 ? ' conta' : '') + '" data-a="sm-vez" data-n="' + k + '">' + (k === 4 ? '4 · this one counts' : k) + '</button>'; }).join('') + '</div>'
    + '<div style="text-align:center">' + (s.viu ? '<button type="button" class="btn" data-a="sm-prox">Next line</button>' : '<button type="button" class="btn cheio" data-a="sm-viu">Show how it sounds</button>') + '</div></div>';
};

R.ordem = function (c) {
  var o = S.ordem, n = o.n, fim = n >= LINHAS.length, x = LINHAS[Math.min(n, LINHAS.length - 1)];
  if (fim) return cab(c) + trilha(LINHAS, n) + '<div class="foco"><div class="pergunta vd"><small>SIX LINES</small><h2>Two people in every line, and no pronoun jumped the verb.</h2></div></div>';
  var pronto = o.poe.length === x.length;
  var soltas = ordem(x.map(function (w, i) { return [w, i]; }), n + 2).filter(function (p) { return o.poe.indexOf(p[1]) < 0; });
  return cab(c) + trilha(LINHAS, n) + '<div class="foco"><div class="msg-montada vd' + (pronto ? ' pronta' : '') + '"><span class="balao">' + (o.poe.length ? o.poe.map(function (i) { return x[i]; }).join(' ') + (pronto ? '.' : '') : '…') + '</span></div>'
    + (pronto ? '<p class="aprova">GOT IT. Read it out loud: <b>' + x.join(' ') + '.</b></p><div style="text-align:center"><button type="button" class="btn" data-a="or-prox">Next line</button></div>'
      : '<div class="pecas-o">' + soltas.map(function (p) { return '<button type="button" class="peca-o' + (o.err === p[0] ? ' treme' : '') + '" data-a="or" data-n="' + p[1] + '">' + p[0] + '</button>'; }).join('') + '</div>'
        + (o.err ? '<p class="recusa">Not that one yet. What comes right after the verb?</p>' + mostra('or' + n, x.join(' ') + '.') : '')) + '</div>';
};

R.festa = function (c) {
  var f = S.festa, n = f.n, fim = n >= CHAMADAS.length, x = CHAMADAS[Math.min(n, CHAMADAS.length - 1)];
  var lista = '<div class="lista-festa vd"><small>SATURDAY · THE LIST</small>' + Object.keys(LISTA).map(function (k) { return '<p class="' + (f.foi[k] ? 'ok' : '') + '"><i>' + (f.foi[k] ? '✓' : '') + '</i>' + LISTA[k] + '</p>'; }).join('') + '</div>';
  if (fim) return cab(c) + '<div class="mesa-festa"><div class="foco"><div class="pergunta vd"><small>FIVE CALLS</small><h2>Five answers, and the party is ready. Surprise, Lia.</h2></div></div>' + lista + '</div>';
  var pt = f.partes[n] || {}, err = f.erro[n];
  var tel = '<div class="celular vd' + (f.atendeu ? '' : ' toca') + '"><small>' + (f.atendeu ? 'ON THE PHONE' : 'INCOMING CALL') + '</small>' + avatar(x.c, f.atendeu) + '<b>' + x.n + '</b>'
    + (f.atendeu ? '<p class="fala-tel">“' + x.p + '”</p><p class="so-prof" style="margin:0;color:var(--t3);font-size:14px">Read it in ' + x.n + '’s voice.</p>' : '<div class="botoes-tel"><button type="button" class="atender" data-a="fs-atende" aria-label="Answer">📞</button></div>') + '</div>';
  var lado = f.atendeu ? '<div class="lado-festa">' + fala('fs' + n, ['… him / her / them / it.', 'Tell her …', 'Bring them …', 'Send it to me.'], ['call', 'tell', 'bring', 'get', 'send', 'ask', 'pick up'])
    + '<div class="partes"><h5>WHAT YOU HEAR</h5>' + PARTES.map(function (p) { return '<button type="button" class="chip frase' + (pt[p.k] ? ' on' : '') + '" data-a="fs-parte" data-v="' + p.k + '">' + p.t + '</button>'; }).join('')
    + '<button type="button" class="chip frase erro-ouvido' + (err ? ' on' : '') + '" data-a="fs-erro">MISTAKE HEARD: call to him / tell she</button></div>'
    + (err ? '<p class="recusa">Call him, no TO. And after the verb: tell her.</p>' : '')
    + mostra('fs' + n, x.m, 1) + '<div><button type="button" class="btn" data-a="fs-prox">Hang up · next call</button></div></div>'
    : '<div class="lado-festa"><p class="dica-aluno">The phone is ringing. Answer it!</p></div>';
  return cab(c) + trilha(CHAMADAS, n) + '<div class="mesa-festa">' + tel + lado + lista + '</div>';
};

R.quem = function (c) {
  var q = S.quem, n = q.n, fim = n >= CASOS.length, x = CASOS[Math.min(n, CASOS.length - 1)];
  if (fim) return cab(c) + trilha(CASOS, n) + '<div class="foco"><div class="pergunta vd"><small>SIX SITUATIONS</small><h2>Every answer had a person or a thing in it, after the verb.</h2></div></div>';
  return cab(c) + trilha(CASOS, n) + '<div class="foco"><div class="pergunta vd"><small>THE SITUATION</small><h2>' + x.sit + '</h2></div><div class="pistas">' + x.pista.map(function (p) { return '<span class="pista">' + p + '</span>'; }).join('<i>·</i>') + '</div>'
    + '<p class="dica-aluno" style="text-align:center">Say the whole sentence. A pronoun alone doesn’t count.</p>' + mostra('qm' + n, x.r) + '<div style="text-align:center"><button type="button" class="btn" data-a="qm-prox">Next situation</button></div></div>';
};

R.contatos = function (c) { return sequencia(c, MEUS, S.contatos, 'contatos', 'Five real answers, and a real person in every one.'); };

R.fim = function (c) {
  return cab(c) + '<div class="fim">' + escritaFinal('fim', (S.txt || {}).fim || '', (S.salvo || {}).fim, 'Tom, please pick up the cake. Get it at six.\nSara, don’t tell her!', 'Your messages',
    ['Call him', 'Tell her', 'Ask them', 'Get it', 'Send it to me', 'with us', 'Don’t tell her!'], ['THE PARTY GROUP', 'Five messages. Who brings what? Who picks up who?'])
    + '<div class="lado-fim"><div class="grande vd"><span>I → <u>me</u> · he → <u>him</u> · she → <u>her</u></span><span>we → <u>us</u> · they → <u>them</u> · you, it: the same</span><small>After the verb, and after with, for, to, about. And CALL takes no TO: call him.</small></div>'
    + mostra('fim', 'Tom, please pick up the cake. Get it at six.<br>Ana, bring the speakers. Ben has them.<br>Mrs. Kim, bring your dog! We love him.<br>Sara, don’t tell her about the party!<br>Everybody: send the photos to me. Surprise!', 1)
    + '<p class="hw"><a class="pilula" href="HW/" target="_blank" rel="noopener">Homework for the student →</a></p></div></div>';
};

/* ---------- os toques desta aula ---------- */
TOQUES['tm-sel'] = function (b, n) { S.times.sel = n; S.times.err = ''; };
TOQUES.tm = function (b, n, v) { var e = S.times, x = FICHAS[e.sel]; if (!x || e.feitos[e.sel]) return false; if (x.k === 'x' || x.k === v) { e.feitos[e.sel] = 1; e.err = ''; } else e.err = v; };
TOQUES['ag-sel'] = function (b, n) { S.agenda.sel = n; S.agenda.err = ''; };
TOQUES.ag = function (b, n, v) { var e = S.agenda, x = CONTATOS[e.sel]; if (!x || e.ligados[e.sel]) return false; if (v === x.o[0]) { e.ligados[e.sel] = 1; e.err = ''; } else e.err = v; };
TOQUES.vl = function (b, n) { if (S.viele.esc === 0) return false; S.viele.esc = n; };
TOQUES['vl-prox'] = function () { S.viele = { n: S.viele.n + 1, esc: -1 }; };
TOQUES['sm-vez'] = function (b, n) { S.som.vezes = n; };
TOQUES['sm-viu'] = function () { S.som.viu = 1; };
TOQUES['sm-prox'] = function () { S.som = { n: S.som.n + 1, vezes: 0, viu: 0 }; };
TOQUES.or = function (b, n) { var o = S.ordem, x = LINHAS[o.n]; if (!x) return false; if (n === o.poe.length || x[n] === x[o.poe.length]) { o.poe.push(n === o.poe.length ? n : o.poe.length); o.err = ''; } else o.err = x[n]; };
TOQUES['or-prox'] = function () { S.ordem = { n: S.ordem.n + 1, poe: [], err: '' }; };
TOQUES['fs-atende'] = function () { S.festa.atendeu = 1; };
TOQUES['fs-parte'] = function (b, n, v) { var f = S.festa; f.partes[f.n] = f.partes[f.n] || {}; f.partes[f.n][v] = !f.partes[f.n][v]; };
TOQUES['fs-erro'] = function () { var f = S.festa; f.erro[f.n] = !f.erro[f.n]; };
TOQUES['fs-prox'] = function () { var f = S.festa, x = CHAMADAS[f.n]; if (x) f.foi[x.t] = 1; f.n++; f.atendeu = 0; };
TOQUES['qm-prox'] = function () { S.quem.n++; };

/* 10/11/2026 · AS EXPLICAÇÕES (kit/formatos3.js) · G13 · uma cena curta nova (k: gx) antes de times.
   Explicação 100% em inglês: see → notice → use (o aluno fala ou escreve uma frase dele no fim). */
var GX_EXPLICA = { formato: 'regraBolso', titulo: 'Four lines to keep in your pocket.', rotulo: 'Two teams',
  linhas: [
    '<b>I · you · he · she · we · they</b> start the sentence',
    '<b>me · you · him · her · it · us · them</b> come after the verb',
    'with · for · to · about + <b>her</b>, <b>them</b>, <b>me</b>',
    'a person: <b>him / her</b> · a thing: <b>it</b> · more than one: <b>them</b>'
  ],
  uso: { p: 'Your turn. Two people from your life. One sentence about what they do, one about what you do for them.', molde: ['They … me.', 'I … them.'], ex: 'My parents call me every Sunday. I always cook for them on holidays.' } };
R.gx = function (c) { return cab(c) + FM.ex('gx_bolso', GX_EXPLICA); };
