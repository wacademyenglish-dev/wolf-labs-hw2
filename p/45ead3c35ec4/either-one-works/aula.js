/* ============================================================
   EITHER ONE WORKS · TWO KEYS · LIVE CLASS  06/10/2026
   Main series B1 · both (os dois, sim) · either (um ou outro, tanto faz)
   · neither (nem um nem outro) · both… and / either… or / neither… nor
   · both / either / neither of them · uma negação só.
   Erros universais (a armadilha do português): "the both", "none of the
   two", "any of the two", "I don't like neither", "Neither of them don't
   allow", "neither… or", "either apartments".
   O MUNDO (da aula velha): Nico tem duas propostas (Denver e Portland),
   um apartamento em cada cidade, um contrato para assinar até sexta 18h;
   tudo igual… e o cachorro Biscuit, que nenhum dos dois aceita — até o
   dono de Portland mudar de ideia. Sem áudio.
   A CARA: DUAS CHAVES — dois chaveiros grandes, DENVER e PORTLAND; cada
   linha comparada carimba os dois: ✓✓ (both), ✓/✓ à escolha (either),
   ✗✗ (neither). Na pressão, a moeda de cara ou coroa gira a cada
   resposta. Fila: FILA-LIVE-386.md · 085.
   ============================================================ */
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'voce', est: 'o', min: 7, img: 'janela', rot: 'I · You and Big Choices', t: 'Before Nico calls: you, your home and your big choices.', p: 'Pick a card. Answer out loud. Then your teacher answers too.' },
  { k: 'duas', est: 'o', min: 7, img: 'chaves', rot: 'II · Two Keys', t: 'Denver on the left, Portland on the right. Compare every line.', p: 'Pick a line. Compare the two sides in one sentence. Your teacher taps the version you said: a right one stamps both keys.' },
  { k: 'gx', est: 'f', min: 4, img: 'chaves', rot: 'III · Both, Either, Neither', t: 'Two keys, three ways to talk about them.', p: 'Look at the three ways. Tap the right one for each sentence. Then say three of your own.' },
  { k: 'regra', est: 'f', min: 6, img: 'caixas', rot: 'IV · The Rule', t: 'Yes to the two, one or the other, or no to the two?', p: 'Read the three keys out loud. Then fix the four mistakes.' },
  { k: 'moeda', est: 'o', min: 7, img: 'moeda', rot: 'V · Heads or Tails', t: 'Friday, 5 PM. One hour left. Nico wants to flip a coin.', p: 'Your teacher reads Nico’s message and the first words. Finish at once.' },
  { k: 'nico', est: 'o', min: 7, img: 'janela', rot: 'VI · Nico Calls Back', t: 'Twenty minutes before 6 PM. Nico calls you to decide, together.', p: 'Your teacher is Nico. Answer with both, either, neither.' },
  { k: 'quiz', est: 'f', min: 6, extra: 1, img: 'caixas', rot: 'VII · Quick Check', t: 'Six quick lines from Nico’s week.', p: 'Say the whole sentence out loud. Then tap the word.' },
  { k: 'opcoes', est: 'o', min: 7, extra: 1, img: 'estrada', rot: 'VIII · Your Two Options', t: 'Your life: two options, side by side.', p: 'Pick five cards. Answer with both, either or neither.' },
  { k: 'fim', est: 'w', min: 6, img: 'estrada', rot: 'IX · Either One Works', t: 'March 1. Nico and Biscuit drive to Portland.', p: 'Write your own two options: what both have, what neither has, and if either one works. It goes to My notes.' }
];

var VOCE = [
  { k: 'Moving', q: 'Have you ever moved to a new home or a new city? How was it?', fup: 'What was the hardest part?', st: ['Yes, …'], ex: 'Yes, twice. The second time was easier, because I knew the city.' },
  { k: 'Choosing', q: 'Are you fast or slow when you have to choose something?', fup: 'Give me an example.', st: ['I’m …'], ex: 'Very slow. I compare everything for days.' },
  { k: 'Your home', q: 'What matters most to you in a home: space, light, location or price?', fup: 'And your home now?', st: ['… matters most.'], ex: 'Location. I hate long trips to work.' },
  { k: 'Pets', q: 'Do you have a pet? Is it easy to rent a home with a pet where you live?', fup: 'Why?', st: ['I have …'], ex: 'I have a cat. Some buildings say no, so it’s not easy.' },
  { k: 'Advice', q: 'When your friends have a big choice to make, do they ask you for advice?', fup: 'Do they follow it?', st: ['They …'], ex: 'All the time. But they never follow it!' }
];

var LINHAS = [
  { k: 'SALARY', a: '$62,000 a year', b: '$62,000 a year', tag: 'both', ini: 'Both jobs…', ops: [['Both jobs pay $62,000 a year.', 'ok'], ['The both jobs pay $62,000 a year.', 'the'], ['Both jobs pays $62,000 a year.', 'verbo']] },
  { k: 'WORK FROM HOME', a: 'no, the office every day', b: 'no, the office every day', tag: 'neither', ini: 'Neither job…', ops: [['Neither job lets him work from home.', 'ok'], ['Neither job doesn’t let him work from home.', 'duplo'], ['Neither jobs let him work from home.', 'plural']] },
  { k: 'BALCONY', a: 'a small balcony', b: 'a small balcony', tag: 'both', ini: 'Both apartments…', ops: [['Both apartments have a balcony.', 'ok'], ['Both of apartments have a balcony.', 'of'], ['Both apartments has a balcony.', 'verbo']] },
  { k: 'RENT', a: '$1,450 a month', b: '$1,450 a month', tag: 'either', ini: 'His budget is $1,500. Either…', ops: [['Either apartment is fine for his budget.', 'ok'], ['Any of the two apartments is fine.', 'any'], ['Either apartments are fine for his budget.', 'plural']] },
  { k: 'THE OCEAN', a: 'no, 1,000 miles away', b: 'no, 80 miles away', tag: 'neither', ini: 'Neither Denver…', ops: [['Neither Denver nor Portland is on the ocean.', 'ok'], ['Neither Denver or Portland is on the ocean.', 'par'], ['Neither Denver nor Portland isn’t on the ocean.', 'duplo']] },
  { k: 'MOUNTAINS', a: 'the Rockies, 1 hour', b: 'Mount Hood, 90 minutes', tag: 'both', ini: 'Both Denver…', ops: [['Both Denver and Portland are close to the mountains.', 'ok'], ['Both Denver or Portland are close to the mountains.', 'par'], ['The both cities are close to the mountains.', 'the']] },
  { k: 'START DATE', a: 'March 1 or March 15', b: 'March 1 or March 15', tag: 'either', ini: 'He can start either…', ops: [['He can start either on March 1 or on March 15.', 'ok'], ['He can start either on March 1 nor on March 15.', 'par'], ['He can start both on March 1 or on March 15.', 'sentido']] },
  { k: 'DOGS', a: 'no pets', b: 'no pets', tag: 'neither', ini: 'Nico has a dog, Biscuit. Neither of them…', ops: [['Neither of them allows dogs.', 'ok'], ['Neither of them don’t allow dogs.', 'duplo'], ['None of the two allows dogs.', 'none']] }
];
var NAO = {
  the: 'No the before both: both jobs, both of the jobs.', verbo: 'Both = two: a plural verb (pay, have).', duplo: 'Neither is already the negative. One negative only.',
  plural: 'After either / neither: ONE thing, singular (neither job, either apartment).', of: 'both apartments, or both OF THE apartments.', any: 'With two things, English says either.',
  par: 'Always in pairs: both… and · either… or · neither… nor.', sentido: 'One or the other date: either… or.', none: 'With two things, English says neither.', pron: 'both of THEM.'
};

var CHAVES = [['both', 'BOTH · THE TWO, YES', 'both jobs pay · both Denver and Portland · both of them'], ['either', 'EITHER · ONE OR THE OTHER', 'either apartment works · either on March 1 or on March 15'], ['neither', 'NEITHER · NOT ONE, NOT THE OTHER', 'neither job lets him · neither Denver nor Portland · neither of them has']];
var ARMAS = [
  ['ONE NEGATIVE ONLY', 'Neither of them don’t allow dogs.', 'Neither of them allows dogs. / Biscuit can’t live in either apartment.', 'Neither is the negative. With don’t / can’t, use either.'],
  ['ONE THING AFTER EITHER / NEITHER', 'Neither apartments have parking.', 'Neither apartment has parking.', 'Either / neither + one noun, singular. With of: of the apartments.'],
  ['NO THE BEFORE BOTH', 'The both cities are close to the mountains.', 'Both cities are close to the mountains.', 'Both comes first: both cities, both of them.'],
  ['THE RIGHT PARTNER', 'Neither Denver or Portland is on the ocean.', 'Neither Denver nor Portland is on the ocean.', 'both… and · either… or · neither… nor.']
];

var MOEDA = [
  { k: 'THE COFFEE', diz: 'The Denver office has free coffee. The Portland office has free coffee too.', ini: 'Both offices…', ops: [['Both offices have free coffee.', 'ok'], ['Both offices has free coffee.', 'verbo'], ['The both offices have free coffee.', 'the']] },
  { k: 'THE PARKING', diz: 'No parking in Denver. No parking in Portland.', ini: 'Neither office…', ops: [['Neither office has parking.', 'ok'], ['Neither office doesn’t have parking.', 'duplo'], ['Neither offices have parking.', 'plural']] },
  { k: 'THE BOSSES', diz: 'I met the two bosses on video. I liked the Denver boss, and I liked the Portland boss.', ini: 'So you liked…', ops: [['So you liked both of them.', 'ok'], ['So you liked the both.', 'the'], ['So you liked both of they.', 'pron']] },
  { k: 'BISCUIT', diz: 'Denver: no dogs. Portland: no dogs. What about Biscuit?', ini: 'Biscuit can’t live in…', ops: [['Biscuit can’t live in either apartment.', 'ok'], ['Biscuit can’t live in neither apartment.', 'duplo'], ['Biscuit can’t live in any of the two.', 'any']] },
  { k: 'THE COMMUTE', diz: 'Denver: 20 minutes by train. Portland: 20 minutes by bike. I don’t mind.', ini: 'Train or bike…', ops: [['Train or bike, either one is fine.', 'ok'], ['Train or bike, any of the two is fine.', 'any'], ['Train or bike, either ones are fine.', 'plural']] },
  { k: 'THE WEATHER', diz: 'Denver has cold, snowy winters. Portland has rainy, gray winters. I hate snow, and I hate rain.', ini: 'You like neither…', ops: [['You like neither the snow nor the rain.', 'ok'], ['You don’t like neither the snow nor the rain.', 'duplo'], ['You like neither the snow or the rain.', 'par']] },
  { k: 'THE FRIENDS', diz: 'I don’t know anybody in Denver. I don’t know anybody in Portland.', ini: 'You don’t know anybody in…', ops: [['You don’t know anybody in either city.', 'ok'], ['You don’t know anybody in neither city.', 'duplo'], ['You don’t know anybody in either cities.', 'plural']] },
  { k: 'THE LANDLORD', diz: 'WAIT! The Portland landlord says dogs are OK. Denver still says no. So are both OK now?', ini: 'No, not both of them. Only…', ops: [['No, not both of them. Only the one in Portland.', 'ok'], ['No, not the both. Only Portland.', 'the'], ['No, neither of them isn’t.', 'duplo']] }
];

var NICO = [
  { ela: 'OK, twenty minutes. Both jobs are great, right?', voce: 'Yes, both jobs… / Either job…', resp: 'Right. Same money, same hours. That doesn’t help me!' },
  { ela: 'And the apartments? Did you like either of them?', voce: 'I liked both of them… / Neither of them…', resp: 'Me too. Those balconies! But Biscuit…' },
  { ela: 'Denver still says no dogs. Portland says yes. So?', voce: 'Only… / Denver doesn’t… either…', resp: 'Portland, then. Biscuit says thank you.' },
  { ela: 'Last thing: will you visit me? Spring or summer?', voce: 'Either one works! / I can come either in… or in…', resp: 'Both! Come in spring AND in summer.' }
];

var QUIZ = [
  { f: '___ jobs pay $62,000 a year.', op: ['Both', 'The both', 'Either'], nao: 'Yes to the two: both + plural. Never the both.' },
  { f: 'Neither apartment ___ dogs.', op: ['allows', 'allow', 'doesn’t allow'], nao: 'Neither + one noun + a positive, singular verb.' },
  { f: 'Biscuit can’t live in ___ apartment.', op: ['either', 'neither', 'both'], nao: 'After can’t: either. One negative only.' },
  { f: 'Neither Denver ___ Portland is on the ocean.', op: ['nor', 'or', 'and'], nao: 'The partner of neither is nor.' },
  { f: 'Train or bike? ___ is fine.', op: ['Either one', 'Any of the two', 'Both one'], nao: 'One or the other, it doesn’t matter: either one.' },
  { f: 'He met the two bosses and liked both ___.', op: ['of them', 'of they', 'of the them'], nao: 'both of them: the object pronoun.' }
];

var OPCOES = [
  { k: 'Two cities', q: 'Think of two cities you know well. What do both of them have?', fup: 'And what does neither have?', st: ['Both of them …'], ex: 'Both of them have great food and terrible traffic.' },
  { k: 'Never', q: 'Name two jobs you would never do. Why not?', fup: 'Why?', st: ['Neither of them …'], ex: 'Pilot and dentist. Neither of them is for me.' },
  { k: 'I don’t mind', q: 'Coffee or tea? Beach or mountains? When do you say “either one works”?', fup: 'And when do you say “neither”?', st: ['… or …? Either one …'], ex: 'Beach or mountains? Either one works for me.' },
  { k: 'Your homes', q: 'Compare your home now with your last home. What do both have? What does neither have?', fup: 'Which one do you prefer?', st: ['Both of them … and neither of them …'], ex: 'Both of them are small, and neither of them has a balcony.' },
  { k: 'Family', q: 'Talk about two people in your family. What do they both like?', fup: 'What does neither of them like?', st: ['My … and my … both …'], ex: 'My mom and my sister both love old movies.' },
  { k: 'The weekend', q: 'Saturday or Sunday: when can you study or relax?', fup: 'Is either day busy?', st: ['I can … either on … or on …'], ex: 'I can study either on Saturday or on Sunday. I don’t mind.' },
  { k: 'No, thanks', q: 'Two foods you don’t like at all?', fup: 'Since when?', st: ['I like neither … nor …'], ex: 'I like neither olives nor mushrooms.' },
  { k: 'A big choice', q: 'Tell me about a time you had two good options. How did you choose?', fup: 'Was it the right choice?', st: ['Both of them were … so I …'], ex: 'I had two job offers. Both of them were good, so I chose the one near home.' }
];

var S = { i: 0, faixa: 1, fala: {}, resp: {}, armas: {},
  voce: { sel: -1, foi: {} }, du: { sel: 0, esc: {} }, mo: { n: 0, esc: '' }, ni: { n: 0 }, qz: { n: 0, esc: -1 }, op: { sel: -1, foi: {} } };

function chave(nome, carimbos, lado) {
  return '<div class="chave-c ' + lado + '"><div class="argola"></div><div class="etiqueta"><small>APARTMENT KEY</small><b>' + nome + '</b><div class="carimbos-c">' + carimbos.map(function (t) {
    var s = t === 'both' ? '✓' : t === 'neither' ? '✗' : '↔';
    return '<span class="cb ' + t + '">' + s + '</span>';
  }).join('') + '</div></div></div>';
}
function moeda(lado, gira) {
  return '<div class="moeda-c' + (gira ? ' gira' : '') + '"><div class="face"><b>' + (lado || '?') + '</b><small>' + (lado === 'PORTLAND' ? 'TAILS' : lado === 'DENVER' ? 'HEADS' : 'FLIP') + '</small></div></div>';
}

var R = {};
R.capa = function () {
  return '<div class="capa"><div class="lado-a"><span class="kick">MAIN SERIES · B1 · TWO OF EVERYTHING</span><h1>Either One <b>Works</b></h1>'
    + '<p class="sub">Two jobs, two cities, two apartments. <b>Both</b> are great, and <b>either one works</b>… or does it?</p>'
    + '<div class="chipsx"><span class="pilula">both… and</span><span class="pilula">either… or</span><span class="pilula">neither… nor</span><span class="pilula">Live Class · W·O·L·F</span></div>'
    + '<button type="button" class="btn cheio" data-a="ir" data-n="1">Help Nico choose</button>' + faixaLive() + '</div>'
    + '<div class="capa-d"><div class="duas-chaves">' + chave('DENVER', ['both', 'neither', 'either'], 'esq') + chave('PORTLAND', ['both', 'neither', 'either'], 'dir') + '</div></div></div>';
};

R.voce = function (c) { return cartasPessoais(c, VOCE, S.voce, 'voce'); };

R.duas = function (c) {
  var e = S.du, x = LINHAS[e.sel], esc = e.esc[e.sel], ok = esc === 'ok', feitos = LINHAS.filter(function (l, i) { return e.esc[i] === 'ok'; }).map(function (l) { return l.tag; });
  return cab(c) + '<div class="mesa-c"><div class="lado-l"><div class="duas-chaves mini">' + chave('DENVER', feitos, 'esq') + chave('PORTLAND', feitos, 'dir') + '</div>'
    + '<div class="tabela">' + LINHAS.map(function (l, i) { var f = e.esc[i] === 'ok'; return '<button type="button" class="linha-c' + (e.sel === i ? ' on' : '') + (f ? ' feita ' + l.tag : '') + '" data-a="du" data-n="' + i + '"><small>' + l.k + '</small><span>' + l.a + '</span><span>' + l.b + '</span>' + (f ? '<i>' + l.tag.toUpperCase() + '</i>' : '') + '</button>'; }).join('') + '</div></div>'
    + '<div class="lado-l"><div class="pede vd"><small>' + x.k + ' · DENVER | PORTLAND</small><b>' + x.a + ' | ' + x.b + '</b></div><div class="balao vd"><small>START WITH</small><p>' + x.ini + '</p></div>'
    + (ok ? '<div class="balao vd ok-b"><p>' + x.ops[0][0] + '</p></div><p class="aprova">Both keys stamped: ' + x.tag.toUpperCase() + '.</p>' : '<h5 class="so-prof rot-ouve">TAP THE VERSION YOU HEARD</h5><div class="versoes">' + ordem(x.ops, e.sel + 2).map(function (o) { return '<button type="button" class="versao' + (esc === o[1] ? ' errado' : '') + '" data-a="du-v" data-v="' + o[1] + '">' + o[0] + '</button>'; }).join('') + '</div>' + (esc ? '<p class="recusa">' + NAO[esc] + '</p>' : ''))
    + (feitos.length >= 8 ? '<p class="aprova">Eight lines, and Nico keeps saying “either one works!” But for Biscuit, neither one works.</p>' : '') + '</div></div>';
};

R.regra = function (c) {
  return cab(c) + '<div class="tres-chaves">' + CHAVES.map(function (k) { return '<div class="regra-k ' + k[0] + '"><span class="cb ' + k[0] + '">' + (k[0] === 'both' ? '✓✓' : k[0] === 'neither' ? '✗✗' : '↔') + '</span><small>' + k[1] + '</small><b>' + k[2] + '</b></div>'; }).join('') + '</div>' + armas(ARMAS, 'THE TRAPS · SAY IT RIGHT, THEN TAP');
};

R.moeda = function (c) {
  var e = S.mo, n = e.n, fim = n >= MOEDA.length;
  if (fim) return cab(c) + trilha(MOEDA, n) + '<div class="mesa-c"><div class="lado-l">' + moeda('PORTLAND', 0) + '</div><div class="lado-l"><div class="pergunta vd"><small>NO COIN NEEDED</small><h2>It’s not “either one” anymore: only one apartment works for Biscuit.</h2></div></div></div>';
  var x = MOEDA[n], esc = e.esc, ok = esc === 'ok';
  return cab(c) + trilha(MOEDA, n) + '<div class="mesa-c"><div class="lado-l">' + moeda(ok ? (n % 2 ? 'PORTLAND' : 'DENVER') : '', ok) + '<div class="pede vd"><small>NICO · 5:' + (10 + n * 6) + ' PM · ' + x.k + '</small><b>“' + x.diz + '”</b></div></div>'
    + '<div class="lado-l"><div class="balao vd"><small>FINISH IT</small><p>' + x.ini + '</p></div>' + (ok ? '<div class="balao vd ok-b"><p>' + x.ops[0][0] + '</p></div><div><button type="button" class="btn" data-a="mo-prox">Next message</button></div>'
      : '<h5 class="so-prof rot-ouve">TAP THE VERSION YOU HEARD</h5><div class="versoes">' + ordem(x.ops, n + 5).map(function (o) { return '<button type="button" class="versao' + (esc === o[1] ? ' errado' : '') + '" data-a="mo" data-v="' + o[1] + '">' + o[0] + '</button>'; }).join('') + '</div>' + (esc ? '<p class="recusa">' + NAO[esc] + '</p>' : '')) + '</div></div>';
};

R.nico = function (c) {
  var e = S.ni, n = Math.min(e.n, NICO.length - 1), x = NICO[n];
  return cab(c) + trilha(NICO, e.n) + '<div class="mesa-c"><div class="lado-l"><div class="aberta vd" style="background-image:url(' + img('janela') + ')"><span>NICO · FRIDAY, 5:40 PM</span></div></div>'
    + '<div class="lado-l"><div class="pede vd"><small>NICO</small><b>“' + x.ela + '”</b></div>' + fala('ni' + n, [x.voce], ['both', 'either', 'neither', 'both of them', 'either… or']) + '<p class="so-prof dica-aluno">Nico answers: “' + x.resp + '”</p>'
    + (n < NICO.length - 1 ? '<div><button type="button" class="btn" data-a="ni-prox">Next</button></div>' : '<p class="aprova">5:58 PM. Nico signs the lease in Portland.</p>') + '</div></div>';
};

R.quiz = function (c) {
  var e = S.qz, n = e.n, fim = n >= QUIZ.length;
  if (fim) return cab(c) + trilha(QUIZ, n) + '<div class="foco"><div class="pergunta vd"><small>SIX OF SIX</small><h2>Both: the two. Either: one or the other. Neither: no to the two, with one negative only.</h2></div></div>';
  var x = QUIZ[n], ok = e.esc === 0;
  return cab(c) + trilha(QUIZ, n) + '<div class="foco"><div class="balao vd"><p>' + x.f.replace('___', ok ? '<u>' + x.op[0] + '</u>' : '<span class="lacuna-q">___</span>') + '</p></div><div class="tres-b centro">'
    + ordem(x.op.map(function (o, i) { return [o, i]; }), n + 3).map(function (o) { return '<button type="button" class="pilula grande-p' + (e.esc === o[1] ? (o[1] === 0 ? ' certo' : ' errado') : '') + '" data-a="qz" data-n="' + o[1] + '">' + o[0] + '</button>'; }).join('') + '</div>'
    + (ok ? '<div style="text-align:center"><button type="button" class="btn" data-a="qz-prox">Next</button></div>' : e.esc > 0 ? '<p class="recusa" style="text-align:center">' + x.nao + '</p>' : '') + '</div>';
};

R.opcoes = function (c) { return cartasPessoais(c, OPCOES, S.op, 'op'); };

R.fim = function (c) {
  return cab(c) + '<div class="fim">' + escritaFinal('fim', (S.txt || {}).fim || '', (S.salvo || {}).fim, 'My two options are … and …\nBoth of them …\nNeither of them …\nEither one …', 'Your two options',
    ['Both of them ', 'Neither of them ', 'Either one ', ' both… and ', ' neither… nor '], ['WHEN TWO OPTIONS ARE BOTH GOOD, HOW DO YOU CHOOSE?', 'Your own two options (a trip, a job, a course): what both have, what neither has, and if either one works.'])
    + '<div class="lado-fim"><div class="duas-chaves mini">' + chave('DENVER', ['both', 'neither'], 'esq') + chave('PORTLAND', ['both', 'either'], 'dir') + '</div><div class="grande vd"><span><u>both</u> jobs pay well</span><span><u>either</u> city is fine</span><span><u>neither</u> apartment allowed dogs… until one did</span></div>'
    + mostra('fim', 'My two options are a course in English and a course in Spanish.<br>Both of them are online, and neither of them is expensive.<br>Either one works for my schedule, but only the English one helps my job.', 1)
    + '<p class="hw"><a class="pilula" href="HW/" target="_blank" rel="noopener">Homework for the student →</a></p></div></div>';
};

TOQUES.du = function (b, n) { S.du.sel = n; };
TOQUES['du-v'] = function (b, n, v) { S.du.esc[S.du.sel] = v; };
TOQUES.mo = function (b, n, v) { S.mo.esc = v; };
TOQUES['mo-prox'] = function () { S.mo = { n: S.mo.n + 1, esc: '' }; };
TOQUES['ni-prox'] = function () { S.ni.n++; };
TOQUES.qz = function (b, n) { S.qz.esc = n; };
TOQUES['qz-prox'] = function () { S.qz = { n: S.qz.n + 1, esc: -1 }; };

/* 10/11/2026 · AS EXPLICAÇÕES (kit/formatos3.js) · G4 · uma cena curta nova (k: gx) antes de regra.
   Explicação 100% em inglês: see → notice → use (o aluno fala ou escreve uma frase dele no fim). */
var GX_EXPLICA = { formato: 'tresUsos', titulo: 'Denver and Portland. Three ways to talk about two things.',
  usos: [
    { t: 'BOTH', f: 'Both apartments have a balcony.', d: 'Yes to the two. Denver: yes. Portland: yes.', img: 'chaves' },
    { t: 'EITHER', f: 'Either apartment works for me.', d: 'One or the other. It doesn’t matter which.', img: 'moeda' },
    { t: 'NEITHER', f: 'Neither apartment allows dogs.', d: 'No to the two. Denver: no. Portland: no.', img: 'caixas' }
  ],
  pergunta: 'Both, either or neither?',
  itens: [
    { f: 'Denver has a balcony. Portland has a balcony.', c: 0 },
    { f: 'It is Friday, 5:50 PM. Nico can sign any contract. It doesn’t matter which.', c: 1 },
    { f: 'Denver doesn’t allow Biscuit. Portland doesn’t allow Biscuit.', c: 2 },
    { f: 'The two keys open the front door.', c: 0 },
    { f: 'The coin says heads or tails. Nico is happy with the two answers.', c: 1 },
    { f: 'Denver isn’t cheap. Portland isn’t cheap.', c: 2 }
  ],
  nota: '<b>Both</b> = yes to the two. <b>Either</b> = one or the other, you choose. <b>Neither</b> = no to the two, and the verb has no not: neither apartment <b>allows</b> dogs.',
  uso: { p: 'Your turn. Two things in your life, like two jobs or two cities. Say one sentence with both, one with either and one with neither.', molde: ['Both … are …', 'Either … works.', 'Neither … is …'], ex: 'Both my phones are old. Either one works for calls. Neither one has a good camera.' } };
R.gx = function (c) { return cab(c) + FM.ex('gx_tres', GX_EXPLICA); };
