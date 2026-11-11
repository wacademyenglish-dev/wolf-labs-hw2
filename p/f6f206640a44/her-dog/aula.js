/* ============================================================
   HER DOG · THE WAITING ROOM · LIVE CLASS  05/10/2026
   Main series A1 · Easy Reader · his / her / their / its: quem escolhe
   a palavra é o DONO, nunca a coisa · sem S (her books) · its sem
   apóstrofo · quando não se sabe o dono, pergunta-se: Whose is it?
   O MUNDO: a história refeita do zero em 23/09 (a pedido do Carlos) fica
   inteira: terça, 9:10, a sala de espera do veterinário, uma mulher
   segurando a guia do Bruno, a sala inteira dizendo "her dog". No
   capítulo cinco o veterinário chama HUGO SALAS. O título é a frase
   errada. No Live: o aluno faz a aposta e ela volta no capítulo cinco;
   a ficha do paciente se preenche na tela; a plaquinha vira com o dedo.
   Sem áudio. Fila: FILA-LIVE-386.md · 009.
   ============================================================ */
var L = [
  { k: 'capa', est: null, img: 'sala' },
  { k: 'gente', est: 'o', min: 7, img: 'sala', rot: 'I · Your People', t: 'Before the story: people in your life.', p: 'Pick a card. Answer out loud. Nobody corrects you yet.' },
  { k: 'cap1', est: 'o', min: 7, img: 'sala', rot: 'II · Chapter One', t: 'The waiting room.', p: 'Read it out loud, one line at a time. Then answer the questions.' },
  { k: 'aposta', est: 'o', min: 7, img: 'bruno', rot: 'III · Whose Dog?', t: 'Make a bet. Chapter five pays it.', p: 'Pick one. Then say why, out loud.' },
  { k: 'cap2', est: 'o', min: 7, img: 'caixas', rot: 'IV · Chapter Two', t: 'The card.', p: 'Read it out loud, one line at a time. Watch the card fill in.' },
  { k: 'gx', est: 'f', min: 4, img: 'sala', rot: 'V · Who Owns It?', t: 'Two moments in the waiting room. Two kinds of owner.', p: 'Read A and B out loud. Say what is different, then check. Then choose for four new moments.' },
  { k: 'dono', est: 'f', min: 6, img: 'caixas', rot: 'VI · Find the Owner First', t: 'Tap the owner. Then the word appears.', p: 'In each sentence, tap the person, animal or place that HAS the thing.' },
  { k: 'fichas', est: 'f', min: 6, img: 'caixas', rot: 'VII · Eight Cards', t: 'Read the OWNER line out loud. The owner chooses the word.', p: 'Say the sentence first. Then tap his, her, their or its.' },
  { k: 'cap3', est: 'o', min: 7, extra: 1, img: 'caixas', rot: 'VIII · Chapter Three', t: 'The others.', p: 'Read it out loud, one line at a time. Then answer the questions.' },
  { k: 'conserta', est: 'f', min: 6, extra: 1, img: 'bruno', rot: 'IX · The Animal Doesn’t Decide', t: 'People in the room say these lines. One word is wrong.', p: 'Read it out loud. Tap the wrong word. Then say the line right.' },
  { k: 'cap4', est: 'o', min: 7, extra: 1, img: 'tag', rot: 'X · Chapter Four', t: 'The tag.', p: 'Read it out loud. Then turn the tag over with your finger.' },
  { k: 'saber', est: 'f', min: 6, extra: 1, img: 'sala', rot: 'XI · You Have to Know First', t: 'Can you say the sentence? Or do you ask first?', p: 'Read the situation. Tap SAY IT or ASK FIRST. Then say the sentence.' },
  { k: 'cap5', est: 'o', min: 7, extra: 1, img: 'porta', rot: 'XII · Chapter Five', t: 'The door.', p: 'Read it out loud, one line at a time. Then look at your bet.' },
  { k: 'fim', est: 'w', min: 6, img: 'casa', rot: 'XIII · Six of Your Own', t: 'Six words, six real people.', p: 'One sentence for each word: his, her, their, its, my, our. Owner first. The red line watches the owner. It goes to your My notes.' }
];

var GENTE = [
  { k: 'A MAN', q: 'Think of a man in your family. What is his name?', fup: 'What is his job?', st: ['His name is …', 'His job is …'], ex: 'His name is Paulo. He’s my uncle. His job is in a bank.' },
  { k: 'A WOMAN', q: 'Now a woman you know well. What is her favorite food?', fup: 'Can she cook it?', st: ['Her favorite food is …'], ex: 'My grandmother. Her favorite food is fish.' },
  { k: 'TWO FRIENDS', q: 'Think of two friends. Where is their favorite place?', fup: 'Do you go there with them?', st: ['Their favorite place is …'], ex: 'Ana and Bia. Their favorite place is a café near the beach.' },
  { k: 'A PET', q: 'Do you, or a neighbor, have a pet? What is its name?', fup: 'How old is it?', st: ['Its name is …', 'My neighbor has a …'], ex: 'My neighbor has a cat. Its name is Pipoca.' }
];

/* os capítulos */
var CAP = {
  cap1: { num: 1, hora: 'TUESDAY · 9:10 AM', img: 'sala', tit: 'The Waiting Room', linhas: ['It is Tuesday, ten past nine. The sky is dark and gray.', 'The vet’s waiting room is small. Six chairs, four people, four animals.', 'A woman sits by the window with a big dog.', 'The dog is old and very quiet. She holds the leash with two hands.', 'Everybody looks at the dog. Everybody thinks the same thing.', '<b>Her dog.</b>'], perg: ['What day is it? What time is it?', 'How many people are in the room? How many animals?', 'Look at the last line. Do you agree?'], ex: 'It’s Tuesday, ten past nine. Four people and four animals. Yes… it’s her dog. She has the leash!' },
  cap2: { num: 2, hora: 'TUESDAY · 9:14 AM', img: 'caixas', tit: 'The Card', linhas: ['A nurse comes in with eight cards.', 'Every card is the same. The animal goes at the top. The owner goes at the bottom.', 'The woman takes a card. She writes the name of the dog: <b>Bruno</b>.', 'Then she stops.', 'The line at the bottom says <b>OWNER</b>.', 'She does not write her name.'], perg: ['What does she write on the top line?', 'What does she write on the bottom line?', 'Why do you think she stops?'], ex: 'She writes Bruno on the top line. Nothing on the bottom line. Maybe it isn’t her dog!' },
  cap3: { num: 3, hora: 'TUESDAY · 9:22 AM', img: 'caixas', tit: 'The Others', linhas: ['A boy has a box. Inside the box there is a cat. The cat is Nina.', '“Nina is not my cat,” he says. “She is my sister’s cat.”', 'Two children have a rabbit. It is <b>their</b> rabbit.', 'A man has a turtle in a bag. On the card he writes: <b>THE SCHOOL</b>.', 'Four cards, and the word changes four times.', 'The animals do not change at all.'], perg: ['Is Nina the boy’s cat? Whose cat is she? Say it with HER.', 'Who owns the rabbit? And the turtle?', 'Say the last two lines in your own words.'], ex: 'No. She is his sister’s cat: her cat. The rabbit is their rabbit, and the turtle is the school’s: its turtle.' },
  cap4: { num: 4, hora: 'TUESDAY · 9:26 AM', img: 'tag', tit: 'The Tag', linhas: ['The dog has a small metal tag on its collar.', '<b>Its</b> name is on the front: Bruno.', 'On the back there is a street.', 'It is not <b>her</b> street.', 'The woman reads it again. She says nothing.', 'Nobody else in the room sees the tag.'], perg: ['What is on the front of the tag? And on the back?', 'Why do we say ITS name?', 'The street is not hers. Why does she say nothing?'], ex: 'The dog’s name is on the front. A street is on the back. ITS name: the name belongs to the dog. Maybe she is shy!' },
  cap5: { num: 5, hora: 'TUESDAY · 9:30 AM', img: 'porta', tit: 'The Door', linhas: ['At half past nine the door opens.', 'The vet takes the first card and reads the name out loud.', '“<b>Hugo Salas.</b>”', 'The woman stands up.', '“I am the neighbor,” she says. “Hugo is in the hospital.”', '“It is <b>his</b> dog.”'], perg: ['Whose dog is Bruno?', 'Who is the woman? Say it in one word.', 'Chapter one says “Her dog.” Is it right? Say the true sentence.'], ex: 'Bruno is Hugo’s dog: his dog. She is the neighbor. So it’s his dog, not her dog!' }
};

var APOSTA = ['It is her dog.', 'It is her husband’s dog.', 'It is her daughter’s dog.', 'Nobody in this room knows yet.'];

/* V · ache o dono: d = índices das palavras do dono */
var DONO = [
  { p: 'Marta has a big dog called Bruno.', d: [0], fr: 'It is <b>her</b> dog.' },
  { p: 'Paulo has a cat called Nina.', d: [0], fr: 'It is <b>his</b> cat.' },
  { p: 'Elena and Marco have a rabbit.', d: [0, 1, 2], fr: 'It is <b>their</b> rabbit.' },
  { p: 'The dog has a name: Bruno.', d: [0, 1], fr: '<b>Its</b> name is Bruno.' },
  { p: 'Ana has two brothers.', d: [0], fr: 'They are <b>her</b> brothers.' },
  { p: 'The clinic has a small garden.', d: [0, 1], fr: '<b>Its</b> garden is small.' }
];

var FICHAS = [
  { ani: 'a dog · Bruno (a boy)', dono: 'Marta', fr: 'It is ? dog.', ok: 'her', fb: 'Marta is a woman: HER. Bruno is a boy, but Bruno does not decide.' },
  { ani: 'a cat · Nina (a girl)', dono: 'Paulo', fr: 'It is ? cat.', ok: 'his', fb: 'Nina is the cat, not the owner. Paulo: HIS.' },
  { ani: 'a rabbit · Pepe', dono: 'Elena and Marco', fr: 'It is ? rabbit.', ok: 'their', fb: 'Two owners, one word: THEIR.' },
  { ani: 'a turtle · Tico', dono: 'the school', fr: 'It is ? turtle.', ok: 'its', fb: 'A school is a place, and a place takes ITS. No apostrophe.' },
  { ani: 'a bird · Rex (a boy)', dono: 'Sofia', fr: 'It is ? bird.', ok: 'her', fb: 'Rex is the bird. Sofia is the owner: HER.' },
  { ani: 'two fish', dono: 'Daniel', fr: 'They are ? fish.', ok: 'his', fb: 'Two fish, and the word is still HIS. The word never takes an S.' },
  { ani: 'a cat · Mia', dono: 'the clinic', fr: 'It is ? cat.', ok: 'its', fb: 'The clinic owns the cat: ITS cat.' },
  { ani: 'a parrot · Kiko', dono: 'the Silva family', fr: 'It is ? parrot.', ok: 'their', fb: 'A family is many people: THEIR.' }
];

/* VIII · a palavra errada: a = índice da palavra errada */
var CONS = [
  { p: 'Marta has a dog, Bruno. It is his dog.', a: 7, fix: 'her', why: 'Bruno is the dog, not the owner. Marta is a woman: HER dog.' },
  { p: 'Paulo has a cat, Nina. It is her cat.', a: 7, fix: 'his', why: 'Nina is the cat. Paulo is the owner: HIS cat.' },
  { p: 'Ana has two brothers. They are hers brothers.', a: 6, fix: 'her', why: 'No S on the word, ever: HER brothers.' },
  { p: 'The dog is old. It’s name is Bruno.', a: 4, fix: 'Its', why: 'ITS has no apostrophe. The name belongs to the dog.' },
  { p: 'Tomas has a wife, Marta. She is her wife.', a: 7, fix: 'his', why: 'The wife is a woman, but Tomas is the owner: HIS wife.' },
  { p: 'Elena and Marco have a car. It is his car.', a: 8, fix: 'their', why: 'Two owners: THEIR car.' }
];

var SABER = [
  { sit: 'A phone is on a chair. Nobody is next to it.', ok: 'ask', fr: 'Whose phone is this?', fb: 'You cannot choose HIS or HER yet.' },
  { sit: 'Marta is holding a bag. She says: “This is mine.”', ok: 'say', fr: 'It is her bag.', fb: 'She owns it. You can speak.' },
  { sit: 'A dog is waiting by the door. Nobody is with it.', ok: 'ask', fr: 'Whose dog is this?', fb: 'A door tells you nothing about the owner.' },
  { sit: 'A boy says: “This is my sister’s cat.”', ok: 'say', fr: 'It is her cat.', fb: 'He names the owner. A sister is a woman.' },
  { sit: 'Two coats are on the same chair.', ok: 'ask', fr: 'Whose coats are these?', fb: 'One owner or two? Ask first.' },
  { sit: 'A woman is holding a leash. That is all you know.', ok: 'ask', fr: 'Whose dog is this?', fb: 'The whole hour in one line. Holding is not owning.' }
];

var S = { i: 0, faixa: 1, fala: {}, resp: {}, armas: {},
  gente: { sel: -1, foi: {} }, ler: {}, aposta: -1, dono: { n: 0, toc: {}, err: -1 }, fichas: { n: 0, esc: '' },
  cons: { n: 0, toc: -1 }, tag: 0, saber: { n: 0, esc: '' } };

/* os capítulos: linha por linha */
function capitulo(c, chave, extra) {
  var x = CAP[chave], n = S.ler[chave] || 0, todas = n >= x.linhas.length;
  var livro = '<div class="livro vd"><div class="topo-livro"><small>CHAPTER ' + x.num + '</small><b>' + x.tit + '</b><span>' + x.hora + '</span></div><ol class="linhas-l">'
    + x.linhas.map(function (l, i) { return i < n ? '<li class="' + (i === n - 1 ? 'nova' : '') + '">' + l + '</li>' : ''; }).join('') + '</ol>'
    + (todas ? '' : '<button type="button" class="btn" data-a="ler" data-c="' + chave + '">' + (n ? 'Next line' : 'Read the first line') + '</button>') + '</div>';
  var lado = '<div class="lado-livro"><div class="foto-livro" style="background-image:url(' + img(x.img) + ')"></div>' + (extra || '')
    + (todas ? '<div class="perguntas-l vd"><h5>AFTER THE CHAPTER</h5><ol>' + x.perg.map(function (q) { return '<li>' + q + '</li>'; }).join('') + '</ol>' + mostra('l' + chave, x.ex, 1) + '</div>' : '') + '</div>';
  return cab(c) + '<div class="mesa-livro">' + livro + lado + '</div>';
}

var R = {};
R.capa = function () {
  return '<div class="capa"><div class="lado-a"><span class="kick">MAIN SERIES · EASY READER · A1</span><h1>Her <b>Dog</b></h1>'
    + '<p class="sub">A dark Tuesday morning at the vet. A woman holds the leash of a big old dog, and everybody in the room says the same two words.</p>'
    + '<div class="chipsx"><span class="pilula">his · her</span><span class="pilula">their · its</span><span class="pilula">Whose is it?</span><span class="pilula">Live Class · W·O·L·F</span></div>'
    + '<button type="button" class="btn cheio" data-a="ir" data-n="1">Open the waiting room</button>' + faixaLive() + '</div>'
    + '<div class="foto"><img src="' + img('sala') + '" alt="An empty vet waiting room before sunrise, a dog sleeping on the floor"><div class="placa-capa"><small>PATIENT CARD</small><b>BRUNO</b><span>OWNER: ________</span></div></div></div>';
};
R.gente = function (c) { return cartasPessoais(c, GENTE, S.gente, 'gente'); };
R.cap1 = function (c) { return capitulo(c, 'cap1'); };

R.aposta = function (c) {
  return cab(c) + '<div class="mesa-aposta"><div class="foto-aposta vd" style="background-image:url(' + img('bruno') + ')"><span>She holds the leash. But whose dog is it?</span></div><div class="lado-aposta"><div class="fichas-aposta">'
    + APOSTA.map(function (a, i) { return '<button type="button" class="ficha-aposta' + (S.aposta === i ? ' on' : '') + '" data-a="ap" data-n="' + i + '"><i>' + (i + 1) + '</i>' + a + '</button>'; }).join('') + '</div>'
    + (S.aposta >= 0 ? '<p class="aprova">Bet made: “' + APOSTA[S.aposta] + '” Chapter five pays it.</p>' + fala('apf', ['I think it is … because …', 'She holds the leash, but …', 'I am not sure. Maybe …'], []) : '<p class="dica-aluno">Pick one bet.</p>') + '</div></div>';
};

R.cap2 = function (c) {
  var n = S.ler.cap2 || 0;
  var ficha = '<div class="ficha-pac vd"><small>PATIENT CARD · NORTH STREET VET</small><p><span>ANIMAL</span><b class="' + (n >= 3 ? 'escrito' : '') + '">' + (n >= 3 ? 'Bruno' : '') + '</b></p><p><span>OWNER</span><b class="vazio' + (n >= 6 ? ' pisca' : '') + '"></b></p></div>';
  return capitulo(c, 'cap2', ficha);
};

R.dono = function (c) {
  var e = S.dono, n = e.n, fim = n >= DONO.length, x = DONO[Math.min(n, DONO.length - 1)];
  var regra = '<div class="regra-dono vd"><b>OWNER FIRST, WORD SECOND</b><span><em>a man</em> → his</span><span><em>a woman</em> → her</span><span><em>two or more</em> → their</span><span><em>an animal, a thing, a place</em> → its</span></div>';
  if (fim) return cab(c) + trilha(DONO, n) + regra + '<div class="foco"><div class="pergunta vd"><small>SIX SENTENCES</small><h2>Owner first, word second. That is the whole rule.</h2></div></div>';
  var ws = x.p.split(' '), todos = x.d.every(function (i) { return e.toc[i]; });
  return cab(c) + trilha(DONO, n) + '<div class="foco"><div class="frase-dono vd">' + ws.map(function (w, i) {
    var cls = e.toc[i] ? ' certo' : (e.err === i ? ' errado' : '');
    return '<button type="button" class="pal' + cls + '" data-a="dn" data-n="' + i + '"' + (todos ? ' disabled' : '') + '>' + w + '</button>';
  }).join('') + '</div>' + (todos ? '<div class="pergunta vd ja"><small>THE WORD APPEARS</small><h2>' + x.fr + '</h2></div><div style="text-align:center"><button type="button" class="btn" data-a="dn-prox">Next sentence</button></div>'
    : (e.err >= 0 ? '<p class="recusa" style="text-align:center">That is the thing, not the owner. Find the person, the animal or the place that HAS it.</p>' : '<p class="dica-aluno" style="text-align:center">Tap the owner. All of it, if it is two words.</p>')) + '</div>' + regra;
};

R.fichas = function (c) {
  var f = S.fichas, n = f.n, fim = n >= FICHAS.length, x = FICHAS[Math.min(n, FICHAS.length - 1)];
  if (fim) return cab(c) + trilha(FICHAS, n) + '<div class="foco"><div class="pergunta vd"><small>EIGHT CARDS</small><h2>Four words, and the animals never decide.</h2></div></div>';
  var certo = f.esc === x.ok;
  return cab(c) + trilha(FICHAS, n) + '<div class="mesa-ficha"><div class="ficha-pac grande vd"><small>PATIENT CARD ' + (n + 1) + ' OF 8</small><p><span>ANIMAL</span><b class="escrito">' + x.ani + '</b></p><p><span>OWNER</span><b class="escrito dono">' + x.dono + '</b></p>'
    + '<div class="frase-ficha">' + x.fr.replace('?', certo ? '<u>' + x.ok + '</u>' : '<i>___</i>') + '</div></div>'
    + '<div class="lado-ficha"><div class="quatro">' + ['his', 'her', 'their', 'its'].map(function (w) { return '<button type="button" class="palavra-b' + (f.esc === w ? (w === x.ok ? ' certo' : ' errado') : '') + '" data-a="fc" data-v="' + w + '"' + (certo ? ' disabled' : '') + '>' + w + '</button>'; }).join('') + '</div>'
    + (certo ? '<p class="aprova">GOT IT. ' + x.fb + '</p><div><button type="button" class="btn" data-a="fc-prox">Next card</button></div>' : (f.esc ? '<p class="recusa">Look at the OWNER line, not the animal.</p>' + mostra('fc' + n, x.fr.replace('?', x.ok) + ' ' + x.fb) : '<p class="dica-aluno">Read the owner line out loud. Then say the sentence.</p>')) + '</div></div>';
};

R.cap3 = function (c) { return capitulo(c, 'cap3'); };

R.conserta = function (c) {
  var e = S.cons, n = e.n, fim = n >= CONS.length, x = CONS[Math.min(n, CONS.length - 1)];
  if (fim) return cab(c) + trilha(CONS, n) + '<div class="foco"><div class="pergunta vd"><small>SIX LINES FIXED</small><h2>Every wrong word looked at the thing, not the owner.</h2></div></div>';
  var certo = e.toc === x.a, ws = x.p.split(' ');
  return cab(c) + trilha(CONS, n) + '<div class="foco"><div class="balao-sala vd"><small>SOMEBODY IN THE ROOM SAYS</small><div class="pals">' + ws.map(function (w, i) {
    if (certo && i === x.a) return '<span class="pal certo"><s>' + w.replace(/[.,]/g, '') + '</s> ' + x.fix + '</span>';
    return '<button type="button" class="pal' + (e.toc === i ? ' errado' : '') + '" data-a="cs" data-n="' + i + '"' + (certo ? ' disabled' : '') + '>' + w + '</button>';
  }).join('') + '</div></div>'
    + (certo ? '<p class="aprova">GOT IT. ' + x.why + ' Say the whole line right.</p><div style="text-align:center"><button type="button" class="btn" data-a="cs-prox">Next line</button></div>'
      : (e.toc >= 0 ? '<p class="recusa" style="text-align:center">That word is fine. Look at the small word in front of the thing.</p>' + mostra('cs' + n, x.p.split(' ').map(function (w, i) { return i === x.a ? '<b>' + x.fix + '</b>' : w; }).join(' ')) : '<p class="dica-aluno" style="text-align:center">Read it out loud. Tap the wrong word.</p>')) + '</div>';
};

R.cap4 = function (c) {
  var tag = '<button type="button" class="plaquinha' + (S.tag ? ' virada' : '') + '" data-a="tag" aria-label="Turn the tag"><span class="frente"><small>NAME</small><b>BRUNO</b></span><span class="verso"><small>HOME</small><b>14 Hill Street</b><em>Hugo S.</em></span></button><p class="dica-aluno" style="text-align:center">Tap the tag to turn it.</p>';
  return capitulo(c, 'cap4', (S.ler.cap4 || 0) >= 3 ? tag : '');
};

R.saber = function (c) {
  var e = S.saber, n = e.n, fim = n >= SABER.length, x = SABER[Math.min(n, SABER.length - 1)];
  if (fim) return cab(c) + trilha(SABER, n) + '<div class="foco"><div class="pergunta vd"><small>SIX SITUATIONS</small><h2>Four questions from you. In English that is not shy. It is grammar.</h2></div></div>';
  var certo = e.esc === x.ok;
  return cab(c) + trilha(SABER, n) + '<div class="foco"><div class="pergunta vd"><small>THE SITUATION</small><h2>' + x.sit + '</h2></div><div class="dois-b">'
    + [['say', 'SAY IT'], ['ask', 'ASK FIRST']].map(function (o) { return '<button type="button" class="escolha-b' + (e.esc === o[0] ? (certo ? ' certo' : ' errado') : '') + '" data-a="sb" data-v="' + o[0] + '"' + (certo ? ' disabled' : '') + '>' + o[1] + '</button>'; }).join('') + '</div>'
    + (certo ? '<p class="aprova" style="text-align:center">GOT IT. ' + x.fb + ' Say it: <b>' + x.fr + '</b></p><div style="text-align:center"><button type="button" class="btn" data-a="sb-prox">Next</button></div>'
      : (e.esc ? '<p class="recusa" style="text-align:center">' + (x.ok === 'ask' ? 'Do you really know who the owner is? If not, you cannot choose his or her.' : 'The owner is in the situation. You can speak.') + '</p>' : '')) + '</div>';
};

R.cap5 = function (c) {
  var n = S.ler.cap5 || 0, extra = '';
  if (n >= 6) extra = '<div class="resultado vd"><small>YOUR BET</small><p>' + (S.aposta >= 0 ? '“' + APOSTA[S.aposta] + '”' : 'No bet.') + '</p><b>' + (S.aposta === 3 ? 'You won! Nobody in the room knew.' : 'The room is wrong. It is HIS dog.') + '</b><span class="titulo-errado">This lesson is called <s>Her Dog</s>. It is <u>his</u>.</span></div>';
  return capitulo(c, 'cap5', extra);
};

R.fim = function (c) {
  return cab(c) + '<div class="fim">' + escritaFinal('fim', (S.txt || {}).fim || '', (S.salvo || {}).fim, 'My uncle Paulo has a car. His car is red.\nMy grandmother … Her …', 'Six of your own',
    ['His ', 'Her ', 'Their ', 'Its ', 'My ', 'Our ', ' name is '], ['SIX OF YOUR OWN', 'His, her, their, its, my, our: one sentence each, about real people. Owner first.'])
    + '<div class="lado-fim"><div class="grande vd"><span>Marta’s dog? No: <u>his</u> dog.</span><span><u>her</u> books · <u>its</u> name</span><small>The owner decides, never the thing. No S on the word, no apostrophe on ITS. And if you don’t know the owner, ask: Whose is it?</small></div>'
    + mostra('fim', 'My uncle Paulo has a car. His car is red.<br>My grandmother lives in Recife. Her house is near the beach.<br>My neighbors have a dog. Their dog is very loud.<br>My cat is old. Its name is Mel.<br>My bike is blue. Our house is small.', 1)
    + '<p class="hw"><a class="pilula" href="HW/" target="_blank" rel="noopener">Homework for the student →</a></p></div></div>';
};

TOQUES.ler = function (b, n, v, c) { S.ler[c] = (S.ler[c] || 0) + 1; };
TOQUES.ap = function (b, n) { S.aposta = n; };
TOQUES.dn = function (b, n) { var e = S.dono, x = DONO[e.n]; if (!x) return false; if (x.d.indexOf(n) >= 0) { e.toc[n] = 1; e.err = -1; } else e.err = n; };
TOQUES['dn-prox'] = function () { S.dono = { n: S.dono.n + 1, toc: {}, err: -1 }; };
TOQUES.fc = function (b, n, v) { S.fichas.esc = v; };
TOQUES['fc-prox'] = function () { S.fichas = { n: S.fichas.n + 1, esc: '' }; };
TOQUES.cs = function (b, n) { var x = CONS[S.cons.n]; if (!x || S.cons.toc === x.a) return false; S.cons.toc = n; };
TOQUES['cs-prox'] = function () { S.cons = { n: S.cons.n + 1, toc: -1 }; };
TOQUES.tag = function () { S.tag = S.tag ? 0 : 1; };
TOQUES.sb = function (b, n, v) { S.saber.esc = v; };
TOQUES['sb-prox'] = function () { S.saber = { n: S.saber.n + 1, esc: '' }; };

/* 10/11/2026 · AS EXPLICAÇÕES (kit/formatos3.js) · G5 · uma cena curta nova (k: gx) antes de dono.
   Explicação 100% em inglês: see → notice → use (o aluno fala ou escreve uma frase dele no fim). */
var GX_EXPLICA = { formato: 'contraste', titulo: 'This or that? Two moments at the vet.',
  a: { t: 'A person', falas: [['Nurse', 'Whose bag is on the chair?'], ['You', 'It’s Paulo’s. It’s <mark>his</mark> bag.']], d: 'The owner is a person: <b>his, her or their</b>. Look at who it is.' },
  b: { t: 'A thing', falas: [['Nurse', 'Is the garden big?'], ['You', 'No. <mark>Its</mark> trees are small.']], d: 'The owner is a place, a thing or an animal: <b>its</b>. No apostrophe.' },
  pergunta: 'Same idea, two words. What is different about the owner?',
  pergunta2: 'Now you. Which one fits?',
  itens: [
    { p: 'Paulo has a cat. You say:', o: ['It is his cat.', 'It is her cat.'], c: 0, d: 'Paulo is a man: his.' },
    { p: 'The clinic has a small garden. You say:', o: ['Her garden is small.', 'Its garden is small.'], c: 1, d: 'A place: its.' },
    { p: 'Elena and Marco have a rabbit. You say:', o: ['It is their rabbit.', 'It is his rabbit.'], c: 0, d: 'Two owners: their.' },
    { p: 'The waiting room has a big clock. You say:', o: ['Their clock is big.', 'Its clock is big.'], c: 1, d: 'One room, one thing: its.' }
  ],
  nota: 'No rule to learn by heart. Look at the owner: a <b>man</b> is his, a <b>woman</b> is her, <b>two or more</b> are their, an <b>animal, a thing or a place</b> is its.',
  uso: { p: 'Your turn. Look at the people and things around you. Say two sentences about what they have.', molde: ['It is his / her …', 'Its … is …'], ex: 'My uncle has a car. It is his car. Its color is blue.' } };
R.gx = function (c) { return cab(c) + FM.ex('gx_isso', GX_EXPLICA); };
