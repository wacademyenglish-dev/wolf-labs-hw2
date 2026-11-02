/* ============================================================
   WHAT I REALLY MEANT · C1 · UNIT 3 (EMPHASIS) · LIVE CLASS  16/10/2026
   Aula nova do livro C1 (no lugar de uma WOLFAITH), no motor do kit/revisao (REV.tipo = 'aula').
   Alvo: clivadas para CORRIGIR um mal-entendido: It wasn't X that…, it was Y; What I meant was…;
   What I didn't say was…; The thing I regret is…; All I said was…; It's not that…, it's that…
   O mundo: a apresentadora do podcast "Slow Kitchen" grava um episódio de correção depois que uma frase
   dela viralizou fora de contexto; o aluno ajuda a gravar e depois se corrige ele mesmo.
   ============================================================ */
var REV = { tipo: 'aula', nivel: 'C1', unidade: 3, titulo: ['What I', 'Really Meant'], tema: 'Cleft sentences to correct a misunderstanding.',
  sub: 'One sentence from the “Slow Kitchen” podcast went viral, completely out of context. Read the correction episode, notice how cleft sentences put the spotlight exactly where you want it, and set the record straight yourself.',
  placa: 'SLOW KITCHEN · EP. 112', lugarConversa: 'THE RECORDING BOOTH', cor: '#f2c14e', cor2: '#f8e2a6',
  chips: ['What I meant was…', 'It wasn’t… that…', 'Set the record straight'], botao: 'Start the lesson', nota: 'A cleft sentence moves the spotlight: It was the SALT that ruined it, not the recipe.' };
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'leitura', est: 'l', min: 10, img: 'conversa', rot: 'I · The Correction Episode', t: 'Episode 112: “About last week…”', p: 'Read the transcript out loud with your teacher. Then look closer.' },
  { k: 'descobre', est: 'f', min: 9, img: 'capa', rot: 'II · Where Is the Spotlight?', t: 'Same facts, different focus.', p: 'Compare A and B. What does B put in the spotlight? How does it sound?' },
  { k: 'transforma', est: 'f', min: 8, img: 'conversa', rot: 'III · Set It Straight', t: 'A misunderstanding → a clear correction.', p: 'Read the wrong idea. Use the clue. Say the cleft sentence.' },
  { k: 'cadeira', est: 'o', min: 10, img: 'capa', rot: 'IV · The Interview', t: 'Your teacher is a journalist. Correct them.', p: 'The journalist gets your words wrong. Correct each one with a cleft sentence.' }
];
var PORTAS = [];

var LEITURA = { rot: 'SLOW KITCHEN · EP. 112 · TRANSCRIPT', tipo: 'nota',
  antes: { q: 'Has anybody ever repeated something you said, but out of context? What happened?', h: 'Yes! I said “I hate Mondays” and my boss heard “I hate my job”.' },
  texto: 'Last week I said, “Italian grandmothers are overrated.” Two million views later, here we are.\n{It wasn’t grandmothers that} I was criticizing. {It was the idea that} only one person can cook a “real” recipe.\n{What I meant was} this: good cooking belongs to everybody.\n{What I didn’t say} — and I’ve read this in a thousand comments — {was} that my own grandmother was a bad cook. She was magnificent.\n{All I said was} one badly chosen sentence, and {the thing I regret} most {is} the word “overrated”.\n{It’s not that} I don’t respect tradition. {It’s that} I don’t want tradition to scare people away from the kitchen.\nSo: apologies to the nonnas. Next week, my grandmother’s lasagna.',
  perguntas: [
    { q: 'What sentence went viral?', h: '“Italian grandmothers are overrated.”' },
    { q: 'What was she really criticizing?', h: 'The idea that only one person can cook a “real” recipe.' },
    { q: 'What did people think she said about her own grandmother?', h: 'That she was a bad cook. She wasn’t: she was magnificent.' },
    { q: 'What does she regret most?', h: 'The word “overrated”.' }],
  olha: 'Find six sentences that start with It, What, All or The thing. What do they put in the spotlight?' };

var DESCOBRE = {
  pares: [
    { a: 'I wasn’t criticizing grandmothers.', b: '{It wasn’t grandmothers that} I was criticizing.', q: 'Same fact. What does B do?', r: 'B puts <b>grandmothers</b> in the spotlight and prepares a contrast: …it was the idea that… Perfect for correcting.' },
    { a: 'I meant that good cooking belongs to everybody.', b: '{What I meant was} that good cooking belongs to everybody.', q: 'Why is B better in a correction?', r: '<b>What I meant was…</b> announces the real message. The listener waits for it.' },
    { a: 'I only said one sentence.', b: '{All I said was} one sentence.', q: 'What does “all” add?', r: '<b>All I said was…</b> = only this, nothing more. It makes the problem look small.' },
    { a: 'I don’t want to scare people.', b: '{It’s not that} I don’t respect tradition. {It’s that} I don’t want…', q: 'What does the pair “It’s not that… it’s that…” do?', r: 'It rejects the wrong interpretation first, then gives the right one. Very useful in a disagreement.' }],
  regra: [['IT-CLEFT', 'It was the salt that ruined it. It wasn’t me who said it.'], ['WHAT-CLEFT', 'What I meant was… · What I need is…'], ['ALL / THE THING', 'All I said was… · The thing I regret is…'], ['NOT THAT… THAT', 'It’s not that I…, it’s that I…']],
  armas: [['WHAT', 'What I meant it was…', 'What I meant <b>was</b>…', 'no extra it'], ['WHO', 'It was Leo which said it', 'It was Leo <b>who</b> said it', 'people: who / that'], ['ALL', 'All what I said', '<b>All I said</b>', 'no what after all'], ['VERB', 'What I need are a break', 'What I need <b>is</b> a break', 'what-clause: usually is']] };

var TRANSFORMA = { rot: 'SET IT STRAIGHT', fim: 'Six corrections. Calm, clear and impossible to misread.',
  itens: [
    { de: 'People think: you hate Italian food.', pista: 'It isn’t … that I …, it’s …', para: 'It isn’t Italian food that I hate, it’s the idea of one “correct” recipe.' },
    { de: 'People think: the restaurant was bad.', pista: 'What I said was …', para: 'What I said was that the service was slow, not that the restaurant was bad.' },
    { de: 'They say: you insulted the chef.', pista: 'All I did was …', para: 'All I did was ask for less salt.' },
    { de: 'They think: you don’t like cooking for others.', pista: 'It’s not that …, it’s that …', para: 'It’s not that I don’t like cooking for others, it’s that I get nervous.' },
    { de: 'They say: Leo wrote the post.', pista: 'It wasn’t … who …, it was …', para: 'It wasn’t Leo who wrote the post, it was me.' },
    { de: 'You regret one thing: the title of the episode.', pista: 'The thing I regret is …', para: 'The thing I regret is the title of the episode.' }] };

var CADEIRA = { itens: [
  { alvo: 'The journalist says you hate traditions. Correct them.', dica: 'It’s not that I hate traditions. It’s that…', resp: 'So what DO you think about them?' },
  { alvo: 'Say what you really meant.', dica: 'What I meant was that…', resp: 'Then why did you say “overrated”?' },
  { alvo: 'Make the problem small.', dica: 'All I said was one sentence…', resp: 'But two million people saw it.' },
  { alvo: 'Say what you regret.', dica: 'The thing I regret is…', resp: 'And your grandmother? Some people say she was a bad cook.' },
  { alvo: 'Correct that, with an it-cleft.', dica: 'It wasn’t my grandmother that I was talking about. It was…', resp: 'Will you change the way you talk on the podcast?' },
  { alvo: 'End with what you need now.', dica: 'What I need now is…', resp: 'Thank you. That was very clear.' }] };

var PODE = [];

/* MECÂNICAS VARIADAS */
/* C1 · What I Really Meant: leitura · descobre · transforma · cadeira */
