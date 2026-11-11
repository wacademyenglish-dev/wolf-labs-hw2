/* ============================================================
   A TEN-HOUR FLIGHT · THE BOARDING PASS · LIVE CLASS  06/10/2026
   Main series B2 · compound adjectives: número + substantivo (a ten-
   hour flight), well + particípio (a well-known hotel), substantivo +
   -ing (an Italian-speaking guide, a mouth-watering breakfast),
   substantivo + particípio (hand-made bread), adjetivo + substantivo +
   -ed (open-minded). Tudo vira UM adjetivo, com hífen, ANTES do
   substantivo, sem plural. Erros: "a ten-hours flight", "a flight of
   ten hours", "a view five-star", "a very known hotel", "well-knowed",
   -ed × -ing trocados, "blue-eyes", "open-mind".
   O MUNDO (da aula velha): a blogueira Tess Rivera, The Carry-On
   Diaries; o editor diz que os títulos são longos demais; os oito
   cartões de embarque (quatro piores viagens, quatro melhores); o
   blog no ar com os comentários; o podcast. Sem áudio, como a velha.
   A CARA: o CARTÃO DE EMBARQUE com picote — a nota longa da Tess no
   corpo, e o canhoto que se destaca quando a manchete curta sai certa,
   com o adjetivo composto em letra grande. E o BLOG: as manchetes vão
   entrando no ar uma por uma.
   Fila: FILA-LIVE-386.md · 116.
   ============================================================ */
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'voce', est: 'o', min: 7, img: 'janela', rot: 'I · You and Your Trips', t: 'Before the trip: you, your bags and your worst journey ever.', p: 'Tap a card. Answer out loud. Then your teacher answers too.' },
  { k: 'passes', est: 'o', min: 7, img: 'portao', rot: 'II · Five Boarding Passes', t: 'Tess’s worst trips and best trips, one boarding pass each.', p: 'Tap a pass. Read Tess’s long note out loud. Then say it as one short headline.' },
  { k: 'gx', est: 'f', min: 4, img: 'mala', rot: 'III · Headlines in Blocks', t: 'One long description, one short adjective.', p: 'Read the blocks out loud. Notice the hyphen. Then build a headline and say your own.' },
  { k: 'regra', est: 'f', min: 6, img: 'mala', rot: 'IV · The Rule', t: 'The whole description becomes one adjective, and it goes first.', p: 'Say each wrong line the right way out loud. Then tap SHOW ME.' },
  { k: 'blog', est: 'o', min: 7, img: 'mesa', rot: 'V · The Blog Goes Live', t: 'The Carry-On Diaries is live. The readers want answers, fast.', p: 'Your teacher reads each comment. Answer at once as Tess, with a compound adjective. Every right answer publishes a post.' },
  { k: 'roda', est: 'o', min: 7, img: 'vista', rot: 'VI · Your Trips in Headlines', t: 'Your real trips, as short headlines.', p: 'Tap any five. Answer with one compound adjective, then add one detail.' },
  { k: 'podcast', est: 'o', min: 7, extra: 1, img: 'estudio', rot: 'VII · On the Podcast', t: 'Tess is a guest on a travel podcast. The host has questions.', p: 'Your teacher is the host. Answer as Tess, from memory. Then Tess asks back.' },
  { k: 'quiz', est: 'f', min: 6, extra: 1, img: 'janela', rot: 'VIII · Quick Check', t: 'Five quick lines from the blog.', p: 'Say the whole sentence. Then tap the words.' },
  { k: 'fim', est: 'w', min: 6, img: 'capa', rot: 'IX · Your Worst, Your Best', t: 'Was your worst trip secretly your best?', p: 'Tell it as three blog headlines. It goes to your My notes.' }
];

var VOCE = [
  { k: 'THE LONGEST', q: 'What is the longest trip you have ever taken, by plane, bus, car or boat? How long was it?', fup: 'What did you do the whole time?', st: ['It was a …-hour …', 'It took …'], ex: 'A bus across the country. It took thirty hours.' },
  { k: 'THE WORST', q: 'Tell me about a trip that went wrong. What happened?', fup: 'What did you learn?', st: ['My flight was …', 'Everything went wrong when …'], ex: 'My flight was canceled and I slept at the airport.' },
  { k: 'YOUR BAG', q: 'Are you a carry-on person, or do you take a big suitcase?', fup: 'What’s always in it?', st: ['I’m a carry-on person.', 'I always take …'], ex: 'A huge suitcase. I always pack for every kind of weather.' },
  { k: 'THE HOTEL', q: 'What makes a hotel good for you: the view, the bed, the breakfast, the price?', fup: 'Tell me about a good one.', st: ['For me, it’s the …'], ex: 'The breakfast. I don’t care about the view.' },
  { k: 'BLOGS', q: 'Do you read travel blogs or watch travel videos before a trip? Which ones do you trust?', fup: 'Why those?', st: ['I watch …', 'I never read …'], ex: 'I watch short videos. I never read long posts.' }
];

var NOTA = {
  plural: 'The number part is an adjective: no -S. Red cars, not reds cars.', de: 'The description jumps BEFORE the noun, in one piece.', ordem: 'Compound adjectives go BEFORE the noun.',
  very: 'WELL + past participle: well-known.', part: 'The past participle of KNOW is KNOWN.', ing: 'It does something (makes your mouth water, speaks Italian): -ING.', ed: 'Somebody did it to the thing (made by hand, cooked at home): past participle.', eyes: 'Adjective + noun + -ED: open-minded, blue-eyed.', eyes2: 'No plural inside: open-minded.'
};

var PASSES = [
  { k: 'TR 101', rota: 'MIA → LIM', lado: 'WORST', nota: 'The flight took ten hours. The screen on my seat was broken, the man in front of me slept with his seat all the way back, and my bag went to Bogotá.', q: 'What went wrong on this flight? Say three things.', longo: 'a flight that took ten hours', tag: 'TEN-HOUR', ops: [['It was a ten-hour flight.', 'ok'], ['It was a ten-hours flight.', 'plural'], ['It was a flight of ten hours.', 'de']] },
  { k: 'TR 214', rota: 'LIM → CUZ', lado: 'WORST', nota: 'Everybody knows this hotel. It’s on every website, in every guidebook. My room had no window and a bed that sang every time I moved.', q: 'Would you stay there? Why is it famous, do you think?', longo: 'a hotel that everybody knows', tag: 'WELL-KNOWN', ops: [['It was a well-known hotel with no window.', 'ok'], ['It was a very known hotel with no window.', 'very'], ['It was a hotel well-known with no window.', 'ordem']] },
  { k: 'TR 330', rota: 'ROM → NAP', lado: 'WORST', nota: 'Our guide in Pompeii spoke only Italian. Very fast, very passionate. We understood the word “pizza” and nothing else.', q: 'What did the group do, do you think?', longo: 'a guide who spoke only Italian', tag: 'ITALIAN-SPEAKING', ops: [['We had an Italian-speaking guide.', 'ok'], ['We had an Italian-spoken guide.', 'ing'], ['We had a guide Italian-speaking.', 'ordem']] },
  { k: 'TR 447', rota: 'NYC → BOS', lado: 'WORST', nota: 'My suitcase weighed fifty pounds. The train station had no elevator, and the stairs had no end.', q: 'What was in the suitcase, do you think?', longo: 'a suitcase that weighed fifty pounds', tag: 'FIFTY-POUND', ops: [['I carried a fifty-pound suitcase up the stairs.', 'ok'], ['I carried a fifty-pounds suitcase up the stairs.', 'plural'], ['I carried a suitcase of fifty pounds up the stairs.', 'de']] },
  { k: 'TR 512', rota: 'CUZ → AQP', lado: 'BEST', nota: 'Because of that lost bag, I missed my bus and stayed one more night. From the little guesthouse on the hill, the view of the mountains was worth five stars.', q: 'How did the worst trip turn into a good one?', longo: 'a view that deserved five stars', tag: 'FIVE-STAR', ops: [['It was a five-star view.', 'ok'], ['It was a five-stars view.', 'plural'], ['It was a view five-star.', 'ordem']] }
];

var FITAS = [['NUMBER + NOUN', 'a ten-hour flight · a five-star view'], ['WELL + PARTICIPLE', 'a well-known hotel · a well-paid job'], ['NOUN + -ING', 'an Italian-speaking guide · a mouth-watering breakfast'], ['NOUN + PARTICIPLE', 'hand-made bread · home-cooked food'], ['ADJ + NOUN + -ED', 'an open-minded host · a blue-eyed cat']];
var CAMINHOS = [
  { k: 'NO -S', antes: 'It was a ten-hours flight.', depois: 'It was a <b>ten-hour</b> flight.', nota: 'The number part is an adjective now. Adjectives never take -S: red cars, not reds cars.' },
  { k: 'BEFORE THE NOUN', antes: 'It was a flight of ten hours with a view five-star.', depois: 'It was a <b>ten-hour</b> flight with a <b>five-star</b> view.', nota: 'The description jumps before the noun, in one piece.' },
  { k: 'WELL, NOT VERY', antes: 'We stayed in a very known hotel.', depois: 'We stayed in a <b>well-known</b> hotel.', nota: 'WELL + past participle: well-known, well-paid, well-organized.' },
  { k: '-ING OR -ED?', antes: 'It was a mouth-watered breakfast with hand-making bread.', depois: 'It was a <b>mouth-watering</b> breakfast with <b>hand-made</b> bread.', nota: 'It makes your mouth water: -ING. Somebody made it by hand: past participle.' }
];

var POSTS = [
  { k: '@RAILFAN_MARCO', com: 'How long was the train from Rome to Paris?', ini: 'It was an …', tit: 'An Eleven-Hour Train Ride', ops: [['It was an eleven-hour train ride.', 'ok'], ['It was an eleven-hours train ride.', 'plural'], ['It was a train ride of eleven hours.', 'de']] },
  { k: '@LISBON.LOVER', com: 'Is the hostel in Lisbon famous? I think I saw it on TV.', ini: 'Yes, it’s a …', tit: 'A Well-Known Hostel', ops: [['Yes, it’s a well-known hostel.', 'ok'], ['Yes, it’s a very known hostel.', 'very'], ['Yes, it’s a well-knowed hostel.', 'part']] },
  { k: '@BUDGET_BEA', com: 'How much was the boat tour? I have almost no money.', ini: 'It was a …', tit: 'A Twenty-Dollar Tour', ops: [['It was a twenty-dollar tour.', 'ok'], ['It was a twenty-dollars tour.', 'plural'], ['It was a tour twenty-dollar.', 'ordem']] },
  { k: '@HIGH_PLACES', com: 'And the view from the old tower? Worth the climb?', ini: 'Totally. It was a …', tit: 'A Jaw-Dropping View', ops: [['Totally. It was a jaw-dropping view.', 'ok'], ['Totally. It was a jaw-dropped view.', 'ing'], ['Totally. It was a view jaw-dropping.', 'ordem']] },
  { k: '@HISTORY.NERD', com: 'How old is the castle? It looks ancient.', ini: 'It’s a …', tit: 'A Six-Hundred-Year-Old Castle', ops: [['It’s a six-hundred-year-old castle.', 'ok'], ['It’s a six-hundred-years-old castle.', 'plural'], ['It’s a castle of six hundred years.', 'de']] },
  { k: '@HUNGRY_HUGO', com: 'Where did you eat in Oaxaca? Restaurants?', ini: 'No, at the guesthouse. It was …', tit: 'Home-Cooked Food in Oaxaca', ops: [['It was home-cooked food, the best of the trip.', 'ok'], ['It was home-cooking food, the best of the trip.', 'ed'], ['It was food home-cooked, the best of the trip.', 'ordem']] }
];

var RODA = [
  { k: 'THE LONGEST RIDE', q: 'What is the longest bus, car or plane ride you remember?', fup: 'What did you do on it?', st: ['It was a …-hour …'], ex: 'A fourteen-hour bus ride to the north. I watched six movies.' },
  { k: 'A FAMOUS PLACE', q: 'Tell me about a well-known place you visited. Was it worth it?', fup: 'Would you go back?', st: ['A well-known …'], ex: 'A well-known beach in Rio. Too many people, but beautiful.' },
  { k: 'THE BEST MEAL', q: 'The best meal of a trip: what was it?', fup: 'Who cooked it?', st: ['A mouth-watering …'], ex: 'A mouth-watering fish stew in Bahia.' },
  { k: 'THE BAG', q: 'Describe the bag you take on a weekend trip.', fup: 'What’s always in it?', st: ['A small …-pound …'], ex: 'A small ten-pound backpack. That’s all.' },
  { k: 'A PERSON', q: 'Describe someone you met on a trip.', fup: 'Are you still in touch?', st: ['An easy-going …', 'A …-speaking …'], ex: 'An easy-going old man who showed us the city.' },
  { k: 'THE DREAM', q: 'Your dream trip: how long, and where?', fup: 'Why there?', st: ['A …-month trip to …'], ex: 'A two-month trip around Japan.' }
];

var PODCAST = [
  { ela: 'Tess, welcome! Your post “A Ten-Hour Flight” went viral. Tell us about that flight.', voce: ['It was a ten-hour flight, and …', 'What was your longest flight?'], resp: 'A sixteen-hour flight to Sydney. I watched the same movie three times.' },
  { ela: 'And that hotel with no window. Was it cheap, at least?', voce: ['It was a well-known hotel, but …', 'Do you choose well-known hotels, or small places?'], resp: 'Small places, always. Well-known hotels are full of tour groups.' },
  { ela: 'The lost bag sent you to the guesthouse on the hill. What was it like?', voce: ['It had a five-star view and …', 'Have you ever been to Peru?'], resp: 'Never. After this, it’s on my list.' },
  { ela: 'Last question: any advice for a first-time traveler?', voce: ['Take a …', 'Never book a …'], resp: 'Great advice. Pack a carry-on and a lot of patience.' }
];

var QUIZ = [
  { a: 'It was a ', b: ' flight, and my bag went to Bogotá.', op: ['ten-hour', 'ten-hours', 'hours-ten'], w: 'The number part is an adjective: no <b>-s</b>.' },
  { a: 'We stayed in a ', b: ' hotel near the square.', op: ['well-known', 'very known', 'well-knowed'], w: '<b>well</b> + past participle: <b>well-known</b>.' },
  { a: 'The guesthouse had a ', b: ' view.', op: ['five-star', 'five-stars', 'star-five'], w: 'Singular, and the number comes first: <b>five-star</b>.' },
  { a: 'It was a ', b: ' breakfast: mango, corn cakes, coffee.', op: ['mouth-watering', 'mouth-watered', 'mouth-water'], w: 'It makes your mouth water: <b>-ing</b>.' },
  { a: 'The grandmother served ', b: ' bread every morning.', op: ['hand-made', 'hand-making', 'hands-made'], w: 'Somebody made it by hand: <b>past participle</b>, no -s.' }
];

var S = { i: 0, faixa: 1, fala: {}, resp: {}, armas: {},
  voce: { sel: -1, foi: {} }, ps: { sel: 0, esc: {} }, rg: { abre: {} }, bl: { n: 0, esc: '' }, roda: { sel: -1, foi: {} }, pc: { n: 0, resp: 0 }, qz: { n: 0, esc: -1 } };

/* o cartão de embarque com picote; o canhoto destaca quando acerta */
function cartao(x, ok) {
  return '<div class="tf-pass' + (ok ? ' destacou' : '') + (x.lado === 'BEST' ? ' best' : '') + '"><div class="tf-corpo"><div class="tf-topo"><b>' + x.k + '</b><span>' + x.rota + '</span><i>' + x.lado + '</i></div><p class="tf-nota">' + x.nota + '</p><p class="tf-longo">' + (ok ? '<s>' + x.longo + '</s>' : x.longo) + '</p></div>'
    + '<div class="tf-canhoto"><small>HEADLINE</small><b>' + (ok ? x.tag : '— — —') + '</b><span class="tf-barras"></span></div></div>';
}
function blog(publicados) {
  return '<div class="tf-blog vd"><div class="tf-blog-topo"><b>The Carry-On Diaries</b><small>' + publicados.length + ' NEW POSTS</small></div><div class="tf-posts">' + (publicados.length ? publicados.map(function (t) { return '<span>' + t + '</span>'; }).join('') : '<em>Nothing published yet.</em>') + '</div></div>';
}
function frases(acao, ops, esc, semente) {
  return '<div class="tf-ops">' + ordem(ops, semente).map(function (o) { return '<button type="button" class="versao' + (esc === o[1] && esc === 'ok' ? ' certo' : esc && o[1] === esc && esc !== 'ok' ? ' errado' : '') + '" data-a="' + acao + '" data-v="' + o[1] + '">' + o[0] + '</button>'; }).join('') + '</div>';
}

var R = {};
R.capa = function () {
  return '<div class="capa"><div><span class="kick">MAIN SERIES · B2 · THE CARRY-ON DIARIES</span><h1>A Ten-Hour <b>Flight</b></h1>'
    + '<p class="sub"><b>A ten-hour flight</b>, a lost bag, <b>a well-known hotel</b> with no window … and then <b>a five-star view</b>.</p>'
    + '<div class="chipsx"><span class="pilula">a ten-hour flight</span><span class="pilula">a well-known hotel</span><span class="pilula">a mouth-watering breakfast</span><span class="pilula">Live Class · W·O·L·F</span></div>'
    + '<button type="button" class="btn cheio" data-a="ir" data-n="1">Board now</button>' + faixaLive() + '</div>'
    + '<div class="capa-r">' + cartao(PASSES[0], 1) + '</div></div>';
};

R.voce = function (c) { return cartasPessoais(c, VOCE, S.voce, 'voce') + '<p class="so-prof dica-aluno" style="text-align:center">Listen for “a trip of thirty hours”, “a hotel very famous”. Don’t correct yet.</p>'; };

R.passes = function (c) {
  var e = S.ps, x = PASSES[e.sel], esc = e.esc[e.sel], ok = esc === 'ok', feitos = PASSES.filter(function (_, i) { return e.esc[i] === 'ok'; }).length;
  return cab(c) + '<div class="tf-fila">' + PASSES.map(function (p, i) { return '<button type="button" class="tf-mini' + (e.sel === i ? ' on' : '') + (e.esc[i] === 'ok' ? ' feito' : '') + (p.lado === 'BEST' ? ' best' : '') + '" data-a="ps" data-n="' + i + '"><b>' + p.k + '</b><small>' + p.lado + '</small></button>'; }).join('') + '</div>'
    + '<div class="mesa-c"><div class="lado-l">' + cartao(x, ok) + '<div class="pergunta vd ja"><h2>' + x.q + '</h2></div></div>'
    + '<div class="lado-l"><h5 class="so-prof rot-ouve">ONE SHORT HEADLINE · TAP WHAT YOU HEARD</h5>' + frases('ps-v', x.ops, esc, e.sel + 1)
    + (ok ? '<p class="aprova">' + (feitos >= 5 ? 'Five passes, five headlines. Why does “ten hours” lose its S, and why does it jump before the noun? The rule is next.' : 'The stub tears off. Now a second headline for the same pass.') + '</p>' : esc ? '<p class="recusa">' + NOTA[esc] + ' Say it again.</p>' : '<p class="dica-aluno">Read the note out loud first.</p>') + '</div></div>';
};

R.regra = function (c) {
  var e = S.rg;
  return cab(c) + '<div class="tf-fitas">' + FITAS.map(function (f) { return '<div class="tf-fita vd"><small>' + f[0] + '</small><p>' + f[1] + '</p></div>'; }).join('') + '</div>'
    + '<div class="tf-caminhos">' + CAMINHOS.map(function (x, i) { var ab = e.abre[i]; return '<div class="tf-caminho vd' + (ab ? ' aberto' : '') + '"><small>' + x.k + '</small><p class="antes"><s>' + x.antes + '</s></p>' + (ab ? '<p class="depois">' + x.depois + '</p><p class="nota">' + x.nota + '</p>' : '<button type="button" class="btn" data-a="rg" data-n="' + i + '">Show me</button>') + '</div>'; }).join('') + '</div>';
};

R.blog = function (c) {
  var e = S.bl, n = Math.min(e.n, POSTS.length - 1), fim = e.n >= POSTS.length, x = POSTS[n], ok = e.esc === 'ok';
  var publicados = POSTS.slice(0, e.n + (ok ? 1 : 0)).map(function (p) { return p.tit; });
  if (fim) return cab(c) + '<div class="mesa-c"><div class="lado-l">' + blog(POSTS.map(function (p) { return p.tit; })) + '</div><div class="lado-l"><div class="pergunta vd"><small>THE EDITOR WRITES BACK</small><h2>“Now people are reading.” And the most-read post of the month? A Ten-Hour Flight.</h2></div></div></div>';
  return cab(c) + trilha(POSTS, e.n) + '<div class="mesa-c"><div class="lado-l"><div class="tf-com vd"><small>' + x.k + ' · YOUR TEACHER READS IT</small><p>“' + x.com + '”</p></div><p class="pista">Start: ' + x.ini + '</p>' + blog(publicados) + '</div>'
    + '<div class="lado-l"><h5 class="so-prof rot-ouve">TAP WHAT YOU HEARD</h5>' + frases('bl', x.ops, e.esc, n + 2)
    + (ok ? '<p class="aprova">Published: <b>' + x.tit + '</b>. Now one more compound about the same place.</p><div><button type="button" class="btn" data-a="bl-prox">Next comment</button></div>' : e.esc ? '<p class="recusa">' + NOTA[e.esc] + ' Say it again.</p>' : '') + '</div></div>';
};

R.roda = function (c) { return cartasPessoais(c, RODA, S.roda, 'roda', ['It was …', 'Because …', 'Yes, but …']); };

R.podcast = function (c) {
  var e = S.pc, n = Math.min(e.n, PODCAST.length - 1), fim = e.n >= PODCAST.length, x = PODCAST[n];
  if (fim) return cab(c) + '<div class="foco"><div class="tf-onair vd"><small>OFF AIR</small><b>The recording light goes off.</b></div><div class="pergunta vd"><h2>Now tell the whole trip again in four sentences, with four compound adjectives.</h2></div></div>';
  return cab(c) + trilha(PODCAST, e.n) + '<div class="mesa-c"><div class="lado-l"><div class="tf-onair vd on"><small>● ON AIR · JONAH, THE HOST</small><p>“' + x.ela + '”</p></div>' + (e.resp ? '<div class="balao vd ok-b"><small>JONAH ANSWERS</small><p>“' + x.resp + '”</p></div>' : '') + '</div>'
    + '<div class="lado-l">' + fala('pc' + n, x.voce, []) + (e.resp ? '<div><button type="button" class="btn" data-a="pc-prox">Next question</button></div>' : '<div><button type="button" class="btn so-prof" data-a="pc-r">Tess answered and asked · Jonah replies</button></div><p class="dica-aluno">Answer as Tess, then ask Jonah.</p>') + '</div></div>';
};

R.quiz = function (c) {
  var e = S.qz, n = e.n, fim = n >= QUIZ.length;
  if (fim) return cab(c) + trilha(QUIZ, n) + '<div class="foco"><div class="pergunta vd"><small>FIVE OF FIVE</small><h2>Now change one: a different number, a different noun. “And for three days?”</h2></div></div>';
  var x = QUIZ[n], ok = e.esc === 0;
  return cab(c) + trilha(QUIZ, n) + '<div class="foco"><div class="balao vd"><p>' + x.a + '<u>' + (ok ? x.op[0] : '_____') + '</u>' + x.b + '</p></div><div class="tf-ops linha">'
    + ordem(x.op.map(function (o, i) { return [o, i]; }), n + 1).map(function (o) { return '<button type="button" class="versao' + (e.esc === o[1] ? (o[1] === 0 ? ' certo' : ' errado') : '') + '" data-a="qz" data-n="' + o[1] + '">' + o[0] + '</button>'; }).join('') + '</div>'
    + (ok ? '<p class="aprova" style="text-align:center">' + x.w + '</p><div style="text-align:center"><button type="button" class="btn" data-a="qz-prox">Next</button></div>' : e.esc > 0 ? '<p class="recusa" style="text-align:center">Does it go before the noun? Does it need an -s?</p>' : '') + '</div>';
};

R.fim = function (c) {
  return cab(c) + '<div class="fim">' + escritaFinal('fim', (S.txt || {}).fim || '', (S.salvo || {}).fim, 'A …-hour …\nA well-… …\nA …-ing …', 'Three headlines',
    ['-hour', '-minute', '-week', 'well-known', '-ing', '-made', '-star'], ['WAS YOUR WORST TRIP SECRETLY YOUR BEST?', 'Your trip as three blog headlines. Then one sentence: why?'])
    + '<div class="lado-fim">' + blog(['A Ten-Hour Flight', 'A Well-Known Hotel', 'A Five-Star View'])
    + '<div class="grande vd"><span>one adjective, a <u>hyphen</u>, before the noun</span><span><u>no -s</u>: a ten-hour flight</span><span><u>well</u>-known · mouth-<u>watering</u> · hand-<u>made</u></span><span>not <s>a ten-hours flight</s>, not <s>a very known hotel</s></span></div>'
    + mostra('fim', 'A Twelve-Hour Bus Ride<br>A Well-Known Beach With No Sand<br>A Mouth-Watering Fish Stew<br>It was the worst ride of my life, and the best stew.', 1)
    + '<p class="hw"><a class="pilula" href="HW/" target="_blank" rel="noopener">Homework for the student →</a></p></div></div>';
};

TOQUES.ps = function (b, n) { S.ps.sel = n; };
TOQUES['ps-v'] = function (b, n, v) { S.ps.esc[S.ps.sel] = v; };
TOQUES.rg = function (b, n) { S.rg.abre[n] = 1; };
TOQUES.bl = function (b, n, v) { S.bl.esc = v; };
TOQUES['bl-prox'] = function () { S.bl = { n: S.bl.n + 1, esc: '' }; };
TOQUES['pc-r'] = function () { S.pc.resp = 1; };
TOQUES['pc-prox'] = function () { S.pc = { n: S.pc.n + 1, resp: 0 }; };
TOQUES.qz = function (b, n) { S.qz.esc = n; };
TOQUES['qz-prox'] = function () { S.qz = { n: S.qz.n + 1, esc: -1 }; };

/* 10/11/2026 · AS EXPLICAÇÕES (kit/formatos3.js) · G1 · uma cena curta nova (k: gx) antes de regra.
   Explicação 100% em inglês: see → notice → use (o aluno fala ou escreve uma frase dele no fim). */
var GX_EXPLICA = { formato: 'blocos', titulo: 'Tess’s headlines, in blocks. Each block has a job.',
  frases: [
    { b: [['Tess took', 'ACTION', 'acao'], ['a ten-hour', 'ONE ADJECTIVE', 'aux'], ['flight', 'THING', 'o']], d: 'ten + hour = one adjective. No -s on hour.' },
    { b: [['She stayed at', 'ACTION', 'acao'], ['a well-known', 'ONE ADJECTIVE', 'aux'], ['hotel', 'THING', 'o']], d: 'well + known: the -ed form joins the adverb.' },
    { b: [['She met', 'ACTION', 'acao'], ['an Italian-speaking', 'ONE ADJECTIVE', 'aux'], ['guide', 'THING', 'o']], d: 'noun + -ing: speaking Italian becomes Italian-speaking.' },
    { b: [['The cafe sold', 'ACTION', 'acao'], ['hand-made', 'ONE ADJECTIVE', 'aux'], ['bread', 'THING', 'o']], d: 'noun + -ed: made by hand becomes hand-made.' }
  ],
  nota: 'The long description becomes <b>one adjective</b> with a hyphen, and it goes <b>before</b> the thing. The first part never takes -s: a ten-<b>hour</b> flight, not “a ten-hours flight”.',
  monta: { p: 'Build Tess’s next headline. Then say it.', pecas: [['flight', 'THING', 'o'], ['a five-hour', 'ONE ADJECTIVE', 'aux'], ['Tess hated', 'ACTION', 'acao']], ordem: [2, 1, 0] },
  uso: { p: 'Now a real trip. Describe one trip or one place you know, with a compound adjective.', molde: ['I took a … -hour …', 'We stayed at a well-… …'], ex: 'I took a six-hour bus ride. We stayed at a well-known hotel.' },
  prof: 'Read the blocks with the student, top to bottom. Point at the hyphen and at the missing -s.' };
R.gx = function (c) { return cab(c) + FM.ex('gx_blocos', GX_EXPLICA); };
