/* ============================================================
   REPORTEDLY · C1 · UNIT 8 (EXPLAIN AND REPORT) · LIVE CLASS  15/10/2026
   Aula nova do C1 no motor do kit/revisao (REV.tipo = 'aula').
   Alvo: fonte e distância: reportedly (dizem os relatos), allegedly (é acusado, não provado),
   according to + fonte, apparently (pelo que parece / ouvi dizer), supposedly (supostamente, com
   dúvida), seemingly; sources say; rumour has it that.
   Armadilha do português: according to me (→ in my opinion); "supostamente" × "aparentemente";
   allegedly para coisas boas (é para acusação).
   O mundo: a estátua de bronze do fundador da cidade (inventada) sumiu da praça; o aluno checa as fontes.
   ============================================================ */
var REV = { tipo: 'aula', nivel: 'C1', unidade: 8, titulo: ['Reportedly,', 'Allegedly'], tema: 'Say where it came from, and how sure you are.',
  sub: 'Good journalists never say “The mayor stole the statue.” They say “The mayor allegedly…”, “According to a witness…”. Check the sources of a very strange story, then write the news.',
  placa: 'CITY RADIO · NEWSDESK', lugarConversa: 'THE CITY AT NIGHT', cor: '#e09a7a', cor2: '#f0cdbd',
  chips: ['reportedly', 'allegedly', 'according to'], botao: 'Start the lesson', nota: 'One adverb can protect you from a lawsuit.' };
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'leitura', est: 'l', min: 10, img: 'capa', rot: 'I · Breaking News', t: 'The statue has gone.', p: 'Read the news out loud, like a radio presenter. Then look closer.' },
  { k: 'gx', est: 'f', min: 5, img: 'conversa', rot: 'II · Three Distances', t: 'One story, three distances.', p: 'Look at the three words. Tap the word each sentence needs. Then say three of your own.' },
  { k: 'descobre', est: 'f', min: 9, img: 'conversa', rot: 'III · How Sure Is the Reporter?', t: 'Fact, claim, or rumour?', p: 'Compare A and B. Which one could get the reporter in trouble?' },
  { k: 'transforma', est: 'f', min: 7, img: 'capa', rot: 'IV · Protect Yourself', t: 'Fact → careful news.', p: 'Read the sentence. Use the clue. Say it like a careful journalist.' },
  { k: 'missao', est: 'o', min: 14, img: 'capa', rot: 'V · Check the Sources', t: 'Three sources. One strange story.', p: 'Ask each source five questions. Your teacher is the source. Then write the news line.' },
  { k: 'conversa', est: 'o', min: 6, img: 'conversa', rot: 'VI · What Have You Heard?', t: 'News, rumours and gossip.', p: 'Answer with apparently, supposedly, according to… Then ask back.' }
];
var PORTAS = [];

var LEITURA = { rot: 'CITY RADIO · 8 AM NEWS', tipo: 'fala',
  antes: { q: 'When you hear a surprising story, how do you decide if it’s true?', h: 'I check who said it, if other sites report it, and if there are photos or videos.' },
  texto: 'PRESENTER: The bronze statue of our town’s founder has disappeared from Central Square. The statue {reportedly} vanished between two and four in the morning.\nPRESENTER: {According to} a night bus driver, a white truck stopped in the square at around three.\nPRESENTER: Two men have been arrested. They {allegedly} tried to sell the statue to a scrap yard.\nPRESENTER: {Apparently}, the statue weighs over a tonne. It was {supposedly} protected by cameras, but the cameras {seemingly} weren’t working.\nPRESENTER: {Sources say} the museum knew about the cameras for months. And {rumour has it that} the statue was a copy all along.',
  perguntas: [
    { q: 'What happened, and when?', h: 'The founder’s bronze statue disappeared from the square, probably between 2 and 4 AM.' },
    { q: 'What did the bus driver see?', h: 'A white truck stopping in the square at about three.' },
    { q: 'What are the two men accused of?', h: 'Trying to sell the statue to a scrap yard. It is not proven.' },
    { q: 'What’s the rumour at the end?', h: 'That the statue was a copy all along.' }],
  olha: 'Find eight words that show where the information came from or how sure the reporter is. Which one is the least sure?' };

var DESCOBRE = {
  pares: [
    { a: 'The two men tried to sell the statue.', b: 'The two men {allegedly} tried to sell the statue.', q: 'Which sentence could get the radio in legal trouble? Why?', r: 'A: it states a crime as fact before a trial. allegedly = they are accused, not proven guilty.' },
    { a: 'The statue {reportedly} vanished at three.', b: 'The statue vanished at three, {according to} a bus driver.', q: 'Both give distance. What does B add?', r: 'B names the source. reportedly = many reports say so, no specific source.' },
    { a: '{Apparently}, it weighs a tonne.', b: 'It was {supposedly} protected by cameras.', q: 'One sounds neutral, one sounds doubtful. Which is which?', r: 'apparently = I’ve heard / it seems (neutral). supposedly = people say so, but I doubt it (and here the cameras didn’t work!).' },
    { a: '{According to me}, the museum is guilty.', b: '{In my opinion}, the museum is guilty.', q: 'One is a classic mistake. Which one?', r: 'A. according to is for OTHER sources. For yourself: in my opinion / in my view.' }],
  regra: [['REPORTEDLY · SOURCES SAY', 'many reports say, no single source'], ['ACCORDING TO + SOURCE', 'According to the police / a witness… (never according to me)'], ['ALLEGEDLY · IT IS ALLEGED THAT', 'accused, not proven: for crimes and bad acts'], ['APPARENTLY · SUPPOSEDLY · SEEMINGLY · RUMOUR HAS IT', 'I heard / it seems · with doubt · it looks like · a rumour']],
  armas: [
    ['OPINION', 'According to me, it was a copy.', '<b>In my opinion</b>, it was a copy.', 'according to = other people.'],
    ['ACCUSE', 'He stole the statue (no trial yet).', 'He <b>allegedly</b> stole the statue.', 'Not proven: allegedly.'],
    ['GOOD NEWS', 'She allegedly won the prize.', 'She <b>reportedly</b> won the prize.', 'allegedly is for accusations.'],
    ['DOUBT', 'The cameras apparently protected it, but they were broken.', 'The cameras <b>supposedly</b> protected it, but they were broken.', 'supposedly = what people claim, with doubt.']] };

var TRANSFORMA = { rot: 'FACT → CAREFUL NEWS', fim: 'Six careful news lines. No lawsuits today.',
  itens: [
    { de: 'The singer is getting married in June.', pista: 'reportedly', para: 'The singer is reportedly getting married in June.' },
    { de: 'The manager took the money.', pista: 'allegedly', para: 'The manager allegedly took the money.' },
    { de: 'The police say the road will reopen tomorrow.', pista: 'According to …', para: 'According to the police, the road will reopen tomorrow.' },
    { de: 'I heard the café is closing.', pista: 'Apparently, …', para: 'Apparently, the café is closing.' },
    { de: 'This cream makes you look ten years younger (I doubt it).', pista: 'supposedly', para: 'This cream supposedly makes you look ten years younger.' },
    { de: 'People are saying the coach will resign.', pista: 'Rumour has it …', para: 'Rumour has it that the coach will resign.' }] };

var MISSAO = { pede: 'THE NEWSDESK · ASK FIVE QUESTIONS', quem: 'source', depois: 'Write the news line',
  campos: [
    { c: 'diz', r: 'THE CLAIM', q: 'What exactly are you saying happened?', f: 'What happened?' },
    { c: 'como', r: 'HOW YOU KNOW', q: 'How do you know that?', f: 'How do you know?' },
    { c: 'certeza', r: 'HOW SURE', q: 'How sure are you?', f: 'How sure?' },
    { c: 'prova', r: 'PROOF', q: 'Is there any proof?', f: 'Proof?' },
    { c: 'nega', r: 'DENIED?', q: 'Has anyone denied it?', f: 'Denied?' }],
  itens: [
    { k: 'SOURCE 1', tag: 'THE NIGHT BUS DRIVER', ele: 'He', linha: 'According to a night bus driver, a white truck stopped in Central Square at around 3 AM. He apparently saw two men, but his photo is too dark to identify them.', v: { diz: 'a white truck stopped in the square at three', como: 'he drives past every night', certeza: 'very sure about the truck, not about the faces', prova: 'a dark photo on his phone', nega: 'nobody: he is the only witness' }, diz: '“A white truck stopped in the square at three.” · “I drive past every night.” · “Sure about the truck. Not about the faces.” · “I took a photo, but it’s very dark.” · “Nobody. I’m the only one who saw it.”' },
    { k: 'SOURCE 2', tag: 'THE MUSEUM DIRECTOR', ele: 'She', linha: 'The museum director insists the statue was real. She denies that the cameras were broken, although sources say they had not worked for months.', v: { diz: 'the statue was the real bronze, not a copy', como: 'she has the documents from 1952', certeza: 'completely sure', prova: 'the certificate of the artist', nega: 'she denies that the cameras were broken' }, diz: '“The statue was real bronze. Not a copy.” · “We have the documents from 1952.” · “Completely sure.” · “The artist’s certificate.” · “And the cameras were NOT broken. Whatever people say.”' },
    { k: 'SOURCE 3', tag: 'A TEENAGER WITH A VIDEO', ele: 'She', linha: 'A teenager has reportedly filmed the statue being loaded onto a truck. Rumour has it that the statue was a copy, but this has not been confirmed.', v: { diz: 'she filmed the statue going onto a truck', como: 'she was walking her dog at 3 AM', certeza: 'sure, it’s on video', prova: 'a 20-second video, a bit shaky', nega: 'the museum says the video is fake' }, diz: '“I filmed it going onto a truck!” · “I was walking my dog at three. Don’t ask.” · “Sure. It’s on video.” · “Twenty seconds. A bit shaky.” · “The museum says my video is fake. It isn’t!”' }],
  relato: { titulo: 'THE NEWS LINE · ON AIR IN TWO MINUTES',
    pede: function (x) { return 'What do we say about ' + x.tag.toLowerCase() + '? Careful with the words!'; },
    chips: function () { return ['According to …', '… reportedly …', '… allegedly …', 'Apparently, …', 'Sources say …', '… denies that …', 'This has not been confirmed.']; },
    modelo: function (x) { return x.linha; } },
  nao: { me: '“According to me…” → IN MY OPINION…', fact: '“The men stole it” → the men ALLEGEDLY stole it.', good: '“She allegedly won” → she REPORTEDLY won.' },
  fim: 'The news is out, with every source named and nothing said that isn’t proven. That’s responsible English.' };

var CONVERSA = [
  { q: 'What’s the strangest news story you’ve heard recently?', f: 'Strange news?', voce: ['Apparently, …', 'According to …'], ex: 'Apparently, a city in Japan has a cat as its station master.' },
  { q: 'Is there a product or diet that supposedly works miracles?', f: 'A “miracle” product?', voce: ['It supposedly …', 'Supposedly, …, but …'], ex: 'There’s a tea that supposedly burns fat. I don’t believe it.' },
  { q: 'What does rumour say about your city, school or company?', f: 'A rumour?', voce: ['Rumour has it that …', 'Sources say …'], ex: 'Rumour has it that our office is moving next year.' }
];

var PODE = [];

/* MECÂNICAS VARIADAS */
/* C1 · Reportedly: leitura · descobre · transforma · missao · conversa */

/* 10/11/2026 · AS EXPLICAÇÕES (kit/formatos3.js) · G4 · uma cena curta nova (k: gx) antes de descobre.
   Explicação 100% em inglês: see → notice → use (o aluno fala ou escreve uma frase dele no fim). */
var GX_EXPLICA = { formato: 'tresUsos', titulo: 'The statue is gone. How close are you to the facts?', usos: [{ t: 'REPORTEDLY', f: 'The statue has reportedly disappeared from the square.', d: 'Many sources say it. You pass it on, with a little distance.' }, { t: 'ALLEGEDLY', f: 'A man has allegedly taken the statue at night.', d: 'A claim against someone, not proven. Use it for accusations only.' }, { t: 'SUPPOSEDLY', f: 'The guard was supposedly asleep.', d: 'It is said, but you doubt it.' }], pergunta: 'Which word fits?', itens: [{ f: 'Police say a woman took it, but nothing is proven: she ___ stole it.', c: 1 }, { f: 'Five newspapers say the mayor will resign: he will ___ leave next week.', c: 0 }, { f: 'The cameras were ___ working, but they filmed nothing.', c: 2 }, { f: 'The thief ___ used a blue van.', c: 1 }, { f: 'The statue ___ weighs two tons, according to the museum.', c: 0 }, { f: 'The alarm was ___ on, yet nobody heard it.', c: 2 }], nota: '<b>Reportedly</b> = sources say so. <b>Allegedly</b> = an accusation without proof (never for good news). <b>Supposedly</b> = it is said, and I doubt it. <b>According to</b> + a source, not me: <b>in my opinion</b>.', uso: { p: 'Your turn. You are a journalist. Say three lines about a news story: one from a source, one accusation, one doubt.', molde: ['According to …, …', '… allegedly …', '… supposedly …'], ex: 'According to the mayor, the park will open in May. The builder allegedly used bad cement. The inspector was supposedly on holiday.' } };
var R = R || {};
R.gx = function (c) { return cab(c) + FM.ex('gx_tres', GX_EXPLICA); };
