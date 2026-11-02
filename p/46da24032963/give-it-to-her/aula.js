/* ============================================================
   GIVE IT TO HER · THE BIRTHDAY TABLE · LIVE CLASS  05/10/2026
   Main series A1 · pronomes objeto (me, you, him, her, it, us, them)
   depois do verbo e de to / for / with · não largar o IT (I like it)
   O MUNDO: o aniversário de 80 anos da Grandma Rosa. A mesa está pronta,
   mas toda etiqueta de presente está trocada. O aluno arruma a mesa
   (cada frase certa VIRA a etiqueta para o nome certo), depois atende a
   porta: oito convidados, oito respostas rápidas. Depois a roleta dos
   presentes e a ligação da avó no dia seguinte.
   Sem áudio (como na aula antiga): o professor faz as vozes.
   COLISÃO conferida: Call Me (A1) tem o mesmo alvo; mundo, mecânicas e
   frases diferentes = reforço (regra da casa). Fila: FILA-LIVE-386.md · 007.
   ============================================================ */
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'voce', est: 'o', min: 7, img: 'presentes', rot: 'I · You and Presents', t: 'Before the party: you and presents.', p: 'Pick a card. Answer out loud. Then the follow-up comes.' },
  { k: 'mesa', est: 'o', min: 7, img: 'capa', rot: 'II · The Wrong Tags', t: 'Six presents, six wrong tags.', p: 'Pick a present. Say who it’s for, with a pronoun. Then tap your sentence: a right one turns the tag.' },
  { k: 'regra', est: 'f', min: 6, img: 'bolo', rot: 'III · The Rule', t: 'Two lists: before the verb, and after it.', p: 'Read the three cards out loud. Then fix the four traps.' },
  { k: 'porta', est: 'o', min: 7, img: 'porta', rot: 'IV · Ding Dong!', t: 'Eight guests at the door. Answer fast, with a pronoun.', p: 'Open the door. Your teacher is the guest. Answer at once, then tap your sentence.' },
  { k: 'roda', est: 'o', min: 7, img: 'presentes', rot: 'V · Presents for Everyone', t: 'A present for everybody in your life.', p: 'Spin the wheel. What do you give this person? I give her… I buy him…' },
  { k: 'avo', est: 'o', min: 7, extra: 1, img: 'bolo', rot: 'VI · Thank You, Dear', t: 'The next day, Grandma calls you.', p: 'Your teacher is Grandma. Answer with pronouns. Then she replies.' },
  { k: 'quiz', est: 'f', min: 6, extra: 1, img: 'capa', rot: 'VII · Quick Check', t: 'Six quick lines from the party.', p: 'Say the whole sentence first. Then tap the word.' },
  { k: 'fim', est: 'w', min: 6, img: 'sala', rot: 'VIII · Thank-You Notes', t: 'The party is over. Write the thank-you notes.', p: 'Five notes: a present, who it is from, and what you think of it. A pronoun in every line. The red line watches them. It goes to your My notes.' }
];

var VOCE = [
  { k: 'BIRTHDAYS', q: 'When is your birthday? Do you have a party?', fup: 'Who comes to your party?', st: ['My birthday is in …', 'I have …'], ex: 'In May. I have a small dinner with my family.' },
  { k: 'PRESENTS', q: 'What is a good present for you?', fup: 'Who gives it to you?', st: ['A good present for me is …'], ex: 'A good book. My sister always gives me one.' },
  { k: 'GIVING', q: 'Who do you give presents to?', fup: 'What do you give them?', st: ['I give presents to …', 'I give her / him …'], ex: 'I give presents to my mother and my best friend. I give her flowers.' },
  { k: 'GRANDMA', q: 'Do you have a grandmother? Tell me about her.', fup: 'What do you love about her?', st: ['Yes, she is …', 'I love her …'], ex: 'Yes. She is 85 and she makes great cakes. I love her!' }
];

/* II · a mesa: ops[0] é a certa; tag errada → para quem é */
var PRES = [
  { k: 'THE SCARF', cor: '#b85c8c', ic: '🧣', para: 'GRANDMA ROSA', tag: 'TOM', pista: 'A soft red scarf. Grandma is always cold.', ops: [['Give it to her.', 'ok'], ['Give it to she.', 'sujeito'], ['Give to her.', 'semit']] },
  { k: 'THE FOOTBALL', cor: '#e0a93b', ic: '⚽', para: 'UNCLE TOM', tag: 'GRANDMA', pista: 'A new football. Uncle Tom plays every Sunday.', ops: [['Give it to him.', 'ok'], ['Give it to he.', 'sujeito'], ['Give it to her.', 'genero']] },
  { k: 'TWO KITES', cor: '#5fa8d3', ic: '🪁', para: 'THE TWINS', tag: 'ME', pista: 'Two small kites, one blue and one green. For Mia and Leo.', ops: [['Give them to them.', 'ok'], ['Give it to they.', 'sujeito'], ['Give them to they.', 'sujeito']] },
  { k: 'THE BOOK', cor: '#8c6bc8', ic: '📕', para: 'ME', tag: 'THE TWINS', pista: 'A book about travel. You love travel books!', ops: [['Give it to me, please.', 'ok'], ['Give it to I, please.', 'sujeito'], ['Give it to my, please.', 'poss']] },
  { k: 'THE CARD', cor: '#d9795b', ic: '💌', para: 'YOU · TEACHER', tag: 'UNCLE TOM', pista: 'A card with a flower. It’s for the teacher.', ops: [['This card is for you.', 'ok'], ['This card is for your.', 'poss'], ['This card is for to you.', 'dobro']] },
  { k: 'THE CAKE', cor: '#7cb38a', ic: '🎂', para: 'ALL OF US', tag: 'GRANDMA', pista: 'A big chocolate cake. It’s for everybody.', ops: [['The cake is for us!', 'ok'], ['The cake is for we!', 'sujeito'], ['The cake is for our!', 'poss']] }
];
var POR = { sujeito: 'That word starts a sentence. After to, for, with or a verb, it changes: me, him, her, us, them.', semit: 'Don’t drop the thing: give IT to her.', genero: 'Look at the person: one man is HIM, one woman is HER.', poss: 'MY, YOUR, OUR go before a thing (my book). Alone, after for: me, you, us.', dobro: 'One little word is enough: for you.', coisa: 'A thing is IT, not him or her.' };

/* IV · a porta */
var CONV = [
  { k: 'AUNT SUE', diz: 'Hi! I have flowers for Grandma. Where is she?', ops: [['She’s in the garden. Give them to her.', 'ok'], ['Give them to she.', 'sujeito'], ['Give to her.', 'semit']] },
  { k: 'MR. KIM', diz: 'Do you like my hat?', ops: [['Yes, I love it!', 'ok'], ['Yes, I love!', 'semit'], ['Yes, I love him!', 'coisa']] },
  { k: 'THE TWINS', diz: 'Can you play with us?', ops: [['Sure, I can play with you.', 'ok'], ['Sure, I can play with your.', 'poss'], ['Sure, I can play with they.', 'sujeito']] },
  { k: 'UNCLE TOM', diz: 'Where are the balloons? I need them.', ops: [['Here they are. Take them!', 'ok'], ['Here they are. Take!', 'semit'], ['Here they are. Take it them!', 'dobro']] },
  { k: 'THE NEIGHBOR', diz: 'I have a present for you and your sister.', ops: [['Thank you! Is it for us?', 'ok'], ['Thank you! Is it for we?', 'sujeito'], ['Thank you! Is it for our?', 'poss']] },
  { k: 'GRANDPA JOE', diz: 'Do you know my wife? I love her!', ops: [['Yes, I know her. She’s great!', 'ok'], ['Yes, I know she.', 'sujeito'], ['Yes, I know him.', 'genero']] },
  { k: 'THE BAKER', diz: 'Here is the second cake. Where do I put it?', ops: [['Put it on the table, please.', 'ok'], ['Put on the table, please.', 'semit'], ['Put him on the table, please.', 'coisa']] },
  { k: 'GRANDMA ROSA', diz: 'Oh my! Is all this for me?', ops: [['Yes, Grandma! It’s all for you!', 'ok'], ['Yes, Grandma! It’s all for your!', 'poss'], ['Yes, Grandma! It’s all for she!', 'sujeito']] }
];

/* V · a roleta (ordem fixa, sem sorteio) */
var FATIAS = [
  { k: 'MOTHER', q: 'A present for your mother?', h: 'I give her flowers. She loves them.' },
  { k: 'FATHER', q: 'A present for your father?', h: 'I buy him a book.' },
  { k: 'FRIENDS', q: 'A present for your friends?', h: 'I cook dinner for them.' },
  { k: 'TEACHER', q: 'A present for your teacher?', h: 'I give you a card!' },
  { k: 'SISTER', q: 'A present for your sister or brother?', h: 'I buy her a T-shirt.' },
  { k: 'BOSS', q: 'A present for your boss?', h: 'I give him coffee.' },
  { k: 'A CHILD', q: 'A present for a child in your family?', h: 'I give her a toy.' },
  { k: 'YOUR PET', q: 'A present for your pet?', h: 'I give it a new ball.' }
];

/* VI · a avó ao telefone */
var AVO = [
  { q: 'Hello, dear! Thank you for the party. The red scarf: who is it from?', ex: 'It’s from Uncle Tom. He loves you, Grandma.', resp: 'Oh, Tom! I love it. It’s so warm.' },
  { q: 'And the twins? Do they like the kites?', ex: 'Yes, they love them!', resp: 'Wonderful. Say hello to them for me.' },
  { q: 'Do you have my cake plate? I can’t find it.', ex: 'Yes, I have it. I can bring it to you on Sunday.', resp: 'Thank you, dear. Bring it on Sunday.' },
  { q: 'And you? Do you like your book?', ex: 'Yes, I love it! Thank you, Grandma.', resp: 'Perfect! Come and see me soon.' }
];

var QUIZ = [
  { f: 'This scarf is for Grandma. Give it to ___.', op: ['her', 'she', 'hers'], nao: 'After TO: her.' },
  { f: 'Do you like the cake? Yes, I like ___.', op: ['it', '(nothing)', 'him'], nao: 'Say the thing: it.' },
  { f: 'The kites are for the twins. Give them to ___.', op: ['them', 'they', 'their'], nao: 'After TO: them.' },
  { f: 'Uncle Tom is here. Can you help ___?', op: ['him', 'he', 'his'], nao: 'After a verb: him.' },
  { f: 'The cake is for ___!', op: ['us', 'we', 'our'], nao: 'After FOR: us.' },
  { f: 'Call ___ tomorrow, OK?', op: ['me', 'I', 'my'], nao: 'After a verb: me.' }
];

/* ---------- o estado ---------- */
var S = { i: 0, faixa: 1, fala: {}, resp: {}, armas: {},
  voce: { sel: -1, foi: {} }, mesa: { sel: -1, esc: {} }, porta: { n: 0, aberta: 0, esc: -1 },
  roda: { giros: 0, foi: {} }, avo: { n: 0, foi: {} }, quiz: { n: 0, esc: -1 } };

function opcoes(lista, esc, acao, n) {
  return '<div class="versoes">' + ordem(lista.map(function (o, i) { return [o, i]; }), n + 1).map(function (o) {
    return '<button type="button" class="versao' + (esc === o[1] ? (o[1] === 0 ? ' certo' : ' errado') : '') + '" data-a="' + acao + '" data-n="' + n + '" data-v="' + o[1] + '"' + (esc === 0 ? ' disabled' : '') + '>' + o[0][0] + '</button>';
  }).join('') + '</div>';
}

var R = {};
R.capa = function () {
  return '<div class="capa"><div class="lado-a"><span class="kick">MAIN SERIES · THE BIRTHDAY TABLE · A1</span><h1>Give It <b>to Her</b></h1>'
    + '<p class="sub">Grandma Rosa is 80 today. The table is ready, but every name tag is wrong.</p>'
    + '<div class="chipsx"><span class="pilula">me · him · her · it</span><span class="pilula">us · them</span><span class="pilula">to · for · with</span><span class="pilula">Live Class · W·O·L·F</span></div>'
    + '<button type="button" class="btn cheio" data-a="ir" data-n="1">Open the party</button>' + faixaLive() + '</div>'
    + '<div class="foto"><img src="' + img('capa') + '" alt="A long birthday table with presents and candles"><div class="placa-capa"><small>HAPPY BIRTHDAY</small><b>Grandma Rosa</b><span>80 TODAY</span></div></div></div>';
};
R.voce = function (c) { return cartasPessoais(c, VOCE, S.voce, 'voce'); };

R.mesa = function (c) {
  var e = S.mesa, x = e.sel >= 0 ? PRES[e.sel] : null, feitos = PRES.filter(function (_, i) { return e.esc[i] === 0; }).length;
  var mesa = '<div class="mesa-festa vd">' + PRES.map(function (p, i) {
    var ok = e.esc[i] === 0;
    return '<button type="button" class="presente' + (e.sel === i ? ' on' : '') + (ok ? ' certo' : '') + '" data-a="ms-sel" data-n="' + i + '" style="--cor:' + p.cor + '"><span class="caixa"><i class="laco"></i><em>' + p.ic + '</em></span><span class="etiqueta' + (ok ? ' virou' : '') + '"><small>FOR</small>' + (ok ? p.para : '<s>' + p.tag + '</s>') + '</span></button>';
  }).join('') + '</div>';
  var lado = x ? '<div class="pergunta vd' + (e.esc[e.sel] === 0 ? ' ja' : '') + '"><small>' + x.k + '</small><h2>' + x.pista + '</h2></div>' + opcoes(x.ops, e.esc[e.sel], 'ms', e.sel)
    + (e.esc[e.sel] === 0 ? '<p class="aprova">GOT IT. The tag turns: for ' + x.para.toLowerCase() + '.</p>' : (e.esc[e.sel] > 0 ? '<p class="recusa">' + POR[x.ops[e.esc[e.sel]][1]] + '</p>' : '<p class="dica-aluno">Say who it’s for first. Then tap what you said.</p>'))
    : '<p class="dica-aluno">Pick a present.</p>';
  return cab(c) + '<div class="mesa-pres">' + mesa + '<div class="lado-pres">' + lado + (feitos === PRES.length ? '<p class="aprova">Six presents, six right tags. How does English do it?</p>' : '') + '</div></div>';
};

R.regra = function (c) {
  return cab(c) + '<div class="cartoes">'
    + '<div class="cr vd"><small>1 · BEFORE THE VERB</small><h3><em>I · he · she · we · they</em></h3><div class="ex"><span><u>She</u> loves cake.</span></div></div>'
    + '<div class="cr vd"><small>2 · AFTER A VERB, TO, FOR, WITH</small><h3><em>me · him · her · us · them</em></h3><div class="ex"><span>Give it to <u>her</u>.</span><span>This is for <u>us</u>.</span></div></div>'
    + '<div class="cr vd"><small>3 · A THING</small><h3><em>it</em> (one) · <em>them</em> (two or more)</h3><div class="ex"><span>I love <u>it</u>. Take <u>them</u>!</span></div></div></div>'
    + armas([['AFTER TO', 'Give it to she.', 'Give it to her.', 'After to, for, with: her.'], ['DON’T DROP IT', 'Yes, I like.', 'Yes, I like it.', 'English always says the thing.'], ['A THING', 'I love this scarf. I love him.', 'I love it.', 'A thing is IT.'], ['AFTER A VERB', 'I see they every day.', 'I see them every day.', 'After the verb: them.']], 'THE FOUR TRAPS · TAP TO FIX');
};

R.porta = function (c) {
  var p = S.porta, n = p.n, fim = n >= CONV.length, x = CONV[Math.min(n, CONV.length - 1)];
  if (fim) return cab(c) + trilha(CONV, n) + '<div class="foco"><div class="pergunta vd"><small>EIGHT GUESTS</small><h2>Eight right answers. Grandma is smiling. Happy birthday, Grandma Rosa!</h2></div></div>';
  var porta = '<div class="porta-box' + (p.aberta ? ' aberta' : '') + '" style="background-image:url(' + img('porta') + ')"><div class="folha"></div>' + (p.aberta ? '<div class="visita vd"><small>' + x.k + '</small><p>“' + x.diz + '”</p><span class="so-prof">Say it in ' + x.k.toLowerCase().replace(/\b\w/g, function (l) { return l.toUpperCase(); }) + '’s voice.</span></div>' : '<button type="button" class="campainha" data-a="pt-abre">🔔 Ding dong! Open the door</button>') + '</div>';
  var lado = p.aberta ? opcoes(x.ops, p.esc, 'pt', n) + (p.esc === 0 ? '<p class="aprova">GOT IT.</p><div><button type="button" class="btn" data-a="pt-prox">Next guest</button></div>' : (p.esc > 0 ? '<p class="recusa">' + POR[x.ops[p.esc][1]] + '</p>' : '<p class="dica-aluno">Answer at once, out loud. Then tap what you said.</p>')) : '<p class="dica-aluno">Somebody is at the door.</p>';
  return cab(c) + trilha(CONV, n) + '<div class="mesa-porta">' + porta + '<div class="lado-porta">' + lado + '</div></div>';
};

R.roda = function (c) {
  var r = S.roda, atual = r.giros ? (r.giros * 3 - 3) % FATIAS.length : -1, x = atual >= 0 ? FATIAS[atual] : null, ang = r.giros ? atual * 45 + r.giros * 360 : 0;
  var fatias = FATIAS.map(function (f, i) {
    var a0 = (i * 45 - 112.5) * Math.PI / 180, a1 = (i * 45 - 67.5) * Math.PI / 180, am = (i * 45 - 90) * Math.PI / 180, tx = 100 + 58 * Math.cos(am), ty = 100 + 58 * Math.sin(am);
    return '<path d="M100 100 L' + (100 + 92 * Math.cos(a0)).toFixed(1) + ' ' + (100 + 92 * Math.sin(a0)).toFixed(1) + ' A92 92 0 0 1 ' + (100 + 92 * Math.cos(a1)).toFixed(1) + ' ' + (100 + 92 * Math.sin(a1)).toFixed(1) + ' Z" class="fatia f' + (i % 2) + (r.foi[i] ? ' feita' : '') + '"/>'
      + '<text x="' + tx.toFixed(1) + '" y="' + (ty + 3).toFixed(1) + '" transform="rotate(' + (i * 45) + ' ' + tx.toFixed(1) + ' ' + ty.toFixed(1) + ')">' + f.k + '</text>';
  }).join('');
  var roda = '<div class="roda-box vd"><div class="ponteiro"></div><svg class="roda-svg" viewBox="0 0 200 200" style="transform:rotate(' + (-ang) + 'deg)">' + fatias + '<circle cx="100" cy="100" r="16" class="eixo"/></svg><button type="button" class="btn cheio" data-a="rd-gira">Spin</button></div>';
  var lado = x ? '<div class="pergunta vd"><small>' + x.k + '</small><h2>' + x.q + '</h2></div>' + fala('rd' + atual, ['I give her …', 'I buy him …', 'I cook for them.'], ['flowers', 'a book', 'a card', 'chocolate', 'a toy']) + mostra('rd' + atual, x.h, 1)
    + (r.foi[atual] ? '' : '<div><button type="button" class="btn so-prof" data-a="rd-foi">Said it · your turn, teacher</button></div>') : '<p class="dica-aluno">Spin the wheel.</p>';
  return cab(c) + '<div class="mesa-roda">' + roda + '<div class="lado-roda">' + lado + '</div></div>';
};

R.avo = function (c) {
  var a = S.avo, n = a.n, fim = n >= AVO.length, x = AVO[Math.min(n, AVO.length - 1)];
  if (fim) return cab(c) + trilha(AVO, n) + '<div class="foco"><div class="pergunta vd"><small>GRANDMA IS HAPPY</small><h2>Four answers, and a pronoun in every one.</h2></div></div>';
  return cab(c) + trilha(AVO, n) + '<div class="ligacao"><div class="tel-avo vd"><small>GRANDMA ROSA · THE NEXT DAY</small><span class="avatar">R</span><p>“' + x.q + '”</p></div><div class="lado-avo">'
    + fala('av' + n, ['… it’s from …', 'They love them.', 'I have it.', 'I love it!'], []) + mostra('av' + n, x.ex, 1)
    + (a.foi[n] ? '<div class="tel-avo resp vd"><small>GRANDMA</small><p>“' + x.resp + '”</p></div><div><button type="button" class="btn" data-a="seq-prox" data-c="avo">Next</button></div>' : '<div><button type="button" class="btn so-prof" data-a="seq-foi" data-c="avo">Answered · Grandma replies</button></div>') + '</div></div>';
};

R.quiz = function (c) {
  var q = S.quiz, n = q.n, fim = n >= QUIZ.length, x = QUIZ[Math.min(n, QUIZ.length - 1)];
  if (fim) return cab(c) + trilha(QUIZ, n) + '<div class="foco"><div class="pergunta vd"><small>SIX OUT OF SIX</small><h2>Before the verb: I, she, they. After it: me, her, them.</h2></div></div>';
  var certo = q.esc === 0;
  return cab(c) + trilha(QUIZ, n) + '<div class="foco"><div class="pergunta vd' + (certo ? ' ja' : '') + '"><small>LINE ' + (n + 1) + '</small><h2>' + x.f.replace('___', certo ? '<b>' + x.op[0] + '</b>' : '<span class="vaga">___</span>') + '</h2></div>'
    + '<div class="versoes linha">' + ordem(x.op.map(function (o, i) { return [o, i]; }), n).map(function (o) { return '<button type="button" class="versao' + (q.esc === o[1] ? (o[1] === 0 ? ' certo' : ' errado') : '') + '" data-a="qz" data-n="' + o[1] + '"' + (certo ? ' disabled' : '') + '>' + o[0] + '</button>'; }).join('') + '</div>'
    + (certo ? '<p class="aprova" style="text-align:center">GOT IT. Say it again.</p><div style="text-align:center"><button type="button" class="btn" data-a="qz-prox">Next</button></div>' : (q.esc > 0 ? '<p class="recusa">' + x.nao + '</p>' : '')) + '</div>';
};

R.fim = function (c) {
  return cab(c) + '<div class="fim">' + escritaFinal('fim', (S.txt || {}).fim || '', (S.salvo || {}).fim, 'Dear Aunt Sue, thank you for the flowers. I love them!\nDear Tom, …', 'Thank-you notes',
    ['Thank you for ', 'I love it!', 'I love them!', 'Give it to ', 'for me', 'for us', 'with you'], ['THANK-YOU NOTES', 'Your birthday party. Presents from your family! Five short notes.'])
    + '<div class="lado-fim"><div class="grande vd"><span>Give it to <u>her</u>. This is for <u>him</u>.</span><span>I love <u>it</u>. Take <u>them</u>!</span><small>After a verb or to, for, with: me, you, him, her, it, us, them. And never drop IT.</small></div>'
    + mostra('fim', 'Dear Aunt Sue, thank you for the flowers. I love them!<br>Dear Tom, the football is great. I play with it every day.<br>Dear twins, thank you for the card. I love you both!<br>Dear Grandma, the cake is for us, and we love it!', 1)
    + '<p class="hw"><a class="pilula" href="HW/" target="_blank" rel="noopener">Homework for the student →</a></p></div></div>';
};

TOQUES['ms-sel'] = function (b, n) { S.mesa.sel = n; };
TOQUES.ms = function (b, n, v) { if (S.mesa.esc[n] === 0) return false; S.mesa.esc[n] = +v; };
TOQUES['pt-abre'] = function () { S.porta.aberta = 1; };
TOQUES.pt = function (b, n, v) { if (S.porta.esc === 0) return false; S.porta.esc = +v; };
TOQUES['pt-prox'] = function () { S.porta = { n: S.porta.n + 1, aberta: 0, esc: -1 }; };
TOQUES['rd-gira'] = function () { S.roda.giros++; };
TOQUES['rd-foi'] = function () { var r = S.roda; r.foi[(r.giros * 3 - 3) % FATIAS.length] = 1; };
TOQUES.qz = function (b, n) { if (S.quiz.esc === 0) return false; S.quiz.esc = n; };
TOQUES['qz-prox'] = function () { S.quiz = { n: S.quiz.n + 1, esc: -1 }; };
