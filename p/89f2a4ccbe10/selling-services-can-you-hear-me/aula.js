/* ============================================================
   SELLING SERVICES · BUSINESS · SOB MEDIDA · LESSON 26 · CAN YOU HEAR ME? · LIVE CLASS  28/10/2026
   Só os dados: o motor é o kit/revisao/revisao.js (+ dialogo.js e cliente.js do curso). A1+.
   Alvo: present continuous na videochamada (You’re breaking up · I’m sharing my screen · My camera isn’t working)
   + Can you hear me? / Can you see…? (hear e see não vão para -ing).
   Armadilhas: “You breaking up” (sem be), “I’m share my screen”, “Are you hearing me?”, “My camera don’t working”.
   Situação: videochamada com problemas. Formatos: múltipla com ÁUDIO (6 momentos de chamada, audios.json),
   debate leve (câmera ligada × desligada), cadeira (o professor é o cliente numa chamada ruim),
   EASY READER · CHAPTER 7 de “Leo’s First Big Client”. Produto: kit de frases de videochamada.
   Empresas FICTÍCIAS (Bluepeak Services, Costa Retail, Orla Beverages).
   ============================================================ */
var REV = { tipo: 'aula', nivel: 'A1+', unidade: 26, kick: 'SELLING SERVICES · LESSON 26', titulo: ['Can You', 'Hear Me?'], tema: 'present continuous on video calls', placa: 'LESSON 26',
  lugarConversa: 'THE VIDEO CALL', cor: '#7fd1b9', cor2: '#c9f0e3',
  sub: 'The client is on the screen… frozen. Your audio has an echo, and you’re sharing the wrong screen. Today you learn the phrases that save a video call.',
  chips: ['A video call with problems', 'What’s happening?', 'Your video call kit'], botao: 'Start the lesson',
  nota: 'On the call, now: am / is / are + -ing. You’re breaking up. But: Can you hear me? (not “Are you hearing me?”)' };
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'conversa', est: 'o', min: 5, img: 'conversa', rot: 'I · Your Video Calls', t: 'How many video calls do you have this week?', p: 'Answer, then ask your teacher: “And you?”' },
  { k: 'dialogo', est: 'l', min: 8, img: 'mesa', rot: 'II · “You’re Breaking Up!”', t: 'Leo presents the proposal to Mark on video. Problems!', p: 'One question before. Listen. Then the questions.' },
  { k: 'multipla', est: 'l', min: 7, img: 'conversa', rot: 'III · What’s Happening?', t: 'Six moments from real video calls.', p: 'Listen. Choose the best answer. Then say it out loud.' },
  { k: 'descobre', est: 'f', min: 8, img: 'capa', rot: 'IV · You’re Breaking Up, Not “You Breaking Up”', t: 'Two sentences. Which one is English?', p: 'Compare. Say the difference. Then see the rule.' },
  { k: 'escolha', est: 'o', min: 6, img: 'conversa', rot: 'V · The Debate: Camera On or Off?', t: 'Three small debates about video calls.', p: 'Choose a side and say why. Your teacher takes the other side.' },
  { k: 'leitura', est: 'l', min: 6, img: 'mesa', rot: 'VI · Easy Reader: The Airport Call', t: 'Leo’s First Big Client · Chapter 7.', p: 'Read it out loud. Then answer the questions.' },
  { k: 'cadeira', est: 'o', min: 7, img: 'conversa', rot: 'VII · Save the Call', t: 'Your teacher is the client on a bad call.', p: 'Do each task. Say what’s happening, and fix it.' },
  { k: 'cartao', est: 'w', min: 8, img: 'capa', rot: 'VIII · Your Video Call Kit', t: 'The phrases you need on your real calls.', p: 'Start, problems, fix, end. Then read your kit out loud.' },
  { k: 'pode', est: 'f', min: 3, img: 'capa', rot: 'IX · I Can', t: 'Lesson 26: what can you do now?', p: 'Read each line out loud. Tap the ones you can do. Your teacher confirms.' }
];

var CONVERSA = [
  { q: 'How many video calls do you have this week?', f: 'Teams, Zoom, Meet?', voce: ['I have about … calls.', 'We use …'], ex: 'I have about eight calls. We use Teams.' },
  { q: 'Where are you right now? What’s happening around you?', f: 'Home? Office? Quiet?', voce: ['I’m at … Right now, people are …', 'It’s quiet. Nobody is …'], ex: 'I’m at the office. Right now, my colleagues are having lunch.' },
  { q: 'What’s a common problem on your calls?', f: 'Audio? Internet? Camera?', voce: ['My internet is …', 'The client’s camera …'], ex: 'The client’s camera is always off!' },
  { q: 'What are you working on this week?', f: 'A proposal? A big client?', voce: ['This week, I’m working on …'], ex: 'This week, I’m working on a big proposal for a retail company.' }
];

var DIALOGO = { rot: 'VIDEO CALL · COSTA RETAIL (FICTIONAL)', audio: 'dialogo',
  antes: { q: 'On a video call, the client’s audio is bad. What do you say?', h: 'Sorry, you’re breaking up. / Can you hear me?' },
  ouvir: 'Listen: what problems do they have? How do they fix them?',
  falas: [
    ['Leo', 'Hi Mark! {Can} you {hear} me?'],
    ['Mark', 'Hi Leo… Sorry, {you’re breaking up}.'],
    ['Leo', 'Sorry. {I’m moving} to another room. Is it better now?'],
    ['Mark', 'Yes, much better. I can hear you now.'],
    ['Leo', 'Great. {I’m sharing} my screen. Can you see the proposal?'],
    ['Mark', 'No. I can see your e-mail, not the proposal!'],
    ['Leo', 'Oops! One second… And now?'],
    ['Mark', 'Now I can see it. Page one.'],
    ['Leo', 'OK. On this page, {we’re comparing} two options.'],
    ['Mark', 'Sorry, Leo. Someone {is calling} me on the other phone.'],
    ['Leo', 'No problem. {I’m waiting}.'],
    ['Mark', 'I’m back. Sorry! My boss {is asking} for the price.'],
    ['Leo', 'Perfect timing. It’s on page two!']],
  voz: { Leo: 'en-US-AndrewNeural', Mark: 'en-US-ChristopherNeural' },
  perguntas: [
    { q: 'What’s the first problem?', h: 'Leo is breaking up. Mark can’t hear him well.' },
    { q: 'How does Leo fix it?', h: 'He moves to another room.' },
    { q: 'What can Mark see on the screen first?', h: 'Leo’s e-mail, not the proposal.' },
    { q: 'Why does Mark stop?', h: 'Someone is calling him on the other phone.' },
    { q: 'What is Mark’s boss asking for? Where is it?', h: 'The price. It’s on page two.' }],
  fim: 'On the call, now: You’re breaking up · I’m sharing my screen · I’m waiting. But: Can you hear me? Can you see it?' };

var MULTIPLA = { rot: 'VIDEO CALL MOMENTS · LISTEN', fim: 'On a call, say what’s happening now: I’m turning it on, I’m sharing it, I’m moving.', itens: [
  { audio: 'vc1.mp3', ouve: 'Hello? I can’t hear you. I think your microphone is off.', q: 'What do you say?', ops: ['Sorry! I turn on now.', 'Sorry! I’m turning it on now.', 'Sorry! You are hearing me?'], c: 1, por: 'An action now: I’m turning it on.' },
  { audio: 'vc2.mp3', ouve: 'Sorry, your video is frozen. I can only hear you.', q: 'What’s the problem?', ops: ['The video isn’t moving.', 'The audio is off.', 'The client is leaving.'], c: 0, por: 'Frozen = the video isn’t moving. The audio is OK.' },
  { audio: 'vc3.mp3', ouve: 'Wait, there’s an echo. I can hear my voice two times.', q: 'What do you say?', ops: ['Sorry, I use speakers always.', 'Can you repeat the echo?', 'Sorry, I’m putting on my headphones. Better?'], c: 2, por: 'Say what you’re doing now: I’m putting on my headphones.' },
  { audio: 'vc4.mp3', ouve: 'Are you sharing your screen? I can only see a black screen.', q: 'What do you say?', ops: ['Yes, I sharing it.', 'Yes, I’m sharing it. Can you see it now?', 'Yes, I share it now?'], c: 1, por: 'be + -ing: I’m sharing it. To check: Can you see it?' },
  { audio: 'vc5.mp3', ouve: 'Sorry, someone is knocking on my door. Can you wait a minute?', q: 'What’s happening?', ops: ['The client’s internet is slow.', 'Someone is at the client’s door.', 'The client is leaving the company.'], c: 1, por: 'Someone is knocking = someone is at the door.' },
  { audio: 'vc6.mp3', ouve: 'You’re breaking up, Leo. I can hear only some words.', q: 'What do you say?', ops: ['Sorry. I’m moving closer to my router. Can you hear me now?', 'Sorry. Are you hearing me now?', 'Sorry. I move to router.'], c: 0, por: 'Not “Are you hearing me?”. Say: Can you hear me now?' }] };

var DESCOBRE = {
  pares: [
    { a: '{You’re breaking up}.', b: '{You breaking up}.', q: 'Which one is English?', r: 'Now: <b>am / is / are</b> + -ing. Don’t forget it: you<b>’re</b> breaking up.' },
    { a: '{I’m sharing} my screen.', b: '{I’m share} my screen.', q: 'What is missing?', r: 'be + verb<b>-ing</b>: sharing, waiting, moving.' },
    { a: '{Can you hear} me?', b: '{Are you hearing} me?', q: 'Which one do we say on a call?', r: 'Hear and see are different: <b>Can you hear me? Can you see my screen?</b>' },
    { a: 'My camera {isn’t working}.', b: 'My camera {don’t working}.', q: 'How do we say no?', r: 'Negative: <b>isn’t / aren’t</b> + -ing. Not “don’t working”.' }],
  regra: [['YOU', 'You’re breaking up · You’re freezing'], ['I', 'I’m sharing my screen · I’m moving'], ['NO', 'My camera isn’t working.'], ['HEAR · SEE', 'Can you hear me? I can’t see it.']],
  armas: [['ARE', 'You breaking up.', 'You’re breaking up.', 'be + -ing'], ['-ING', 'I’m share my screen.', 'I’m sharing my screen.', '-ing'], ['HEAR', 'Are you hearing me?', 'Can you hear me?', 'Can you hear…?'], ['ISN’T', 'My camera don’t working.', 'My camera isn’t working.', 'isn’t + -ing']] };

var ESCOLHA = [
  { a: 'Camera on', b: 'Camera off', chips: ['I think … is better because …', 'I agree / I don’t agree because …', 'The client is … · People are …'], ex: 'I think camera on is better because the client is seeing my face. It’s more personal.' },
  { a: 'A video call for the first meeting', b: 'A visit to the client’s office', chips: ['I think … is better because …', 'I agree / I don’t agree because …', 'It’s faster · It’s more personal'], ex: 'I don’t agree with video. I think a visit is better because the client is meeting a real person.' },
  { a: 'Stop the call when the internet is bad', b: 'Continue with audio only', chips: ['I think … is better because …', 'I agree / I don’t agree because …', 'The client is waiting …'], ex: 'I think audio only is better because the client is waiting. Don’t stop!' }];
var ESCOLHA_FIM = 'A debate: one side, one reason. Teacher: always take the other side, and make the student answer you.';

var LEITURA = { rot: 'EASY READER · CHAPTER 7 · LEO’S FIRST BIG CLIENT (FICTION)', tipo: 'nota',
  antes: { q: 'Before: Mr. Duarte, the CEO of Orla Beverages, has to choose: Bluepeak or Kestrel Partners. Leo has three printed slides and five minutes. The meeting is at the airport coffee shop, before a flight. What can go wrong?', h: 'Free answer: the flight is early, Leo is late, there’s a lot of noise…' },
  texto: 'THE AIRPORT CALL\nThursday, 9 a.m. Leo is at the airport coffee shop with his three printed slides. Mr. Duarte isn’t there.\nHis phone rings. It’s a video call from Nina.\n“Leo, sorry! The flight is early. Mr. Duarte {is boarding} now. Can you present on video?”\n“Sure!” Leo opens his laptop. Mr. Duarte appears on the screen. {He’s walking} to the plane with his phone.\n“Hi Leo. {I’m listening}. Five minutes. Go!”\nLeo starts. “Slide one: the problem. Your team {is using} forty spreadsheets…”\n“Sorry, {you’re breaking up}!”\nLeo moves to a quiet corner. A baby {is crying} next to him. A voice {is calling} a flight on the speakers.\n“Can you hear me now?”\n“Yes. Go on.”\nLeo shows slide two, the price, and slide three, the Brava Foods story with three numbers.\nMr. Duarte is quiet. Then he laughs. “Leo, the people next to me {are reading} your slides on my screen. And they’re asking questions!”\n“Are they interested too?”\n“Maybe! OK, Leo, I like it. But I have one question…”\nThe screen goes black. The plane door is closed.\nLeo looks at his phone. Four minutes and thirty seconds. And one question.',
  perguntas: [
    { q: 'Why is the presentation on video?', h: 'The flight is early. Mr. Duarte is boarding.' },
    { q: 'What problems does Leo have?', h: 'He’s breaking up. A baby is crying, and a voice is calling a flight.' },
    { q: 'What are the people next to Mr. Duarte doing?', h: 'They’re reading Leo’s slides on his screen, and they’re asking questions.' },
    { q: 'What is the surprise at the end?', h: 'Mr. Duarte has one question, but the screen goes black.' }],
  olha: 'Look at the highlighted words. Are they actions at that moment, or every day? How do we make them: am / is / are + …?' };

var CADEIRA = { itens: [
  { alvo: 'Start the call. Check the audio.', dica: 'Hi …! Can you hear me?', resp: 'Hello? … Sorry, you’re breaking up.' },
  { alvo: 'Fix it. Say what you’re doing.', dica: 'Sorry, I’m moving to another room. Is it better now?', resp: 'Yes, much better.' },
  { alvo: 'Share your screen. Check it.', dica: 'I’m sharing my screen. Can you see the proposal?', resp: 'No, I can see your e-mail…' },
  { alvo: 'The client talks, but you can’t hear (teacher: move your lips, no sound!).', dica: 'Sorry, you’re on mute.', resp: '(unmutes) Oops! Sorry. Can you hear me now?' },
  { alvo: 'The client’s video is frozen. Tell him politely.', dica: 'Sorry, your video is frozen. I can hear you, but I can’t see you.', resp: 'My internet is slow today. Let’s continue with audio only.' },
  { alvo: 'Close the call with a next step.', dica: 'No problem. I’m sending you the proposal now. Can we talk on Friday?', resp: 'Perfect. Thanks, bye!' }] };

var CARTAO = { ph: 'START: Can you hear me? …\nPROBLEMS: You’re … / My … isn’t …\nFIX: I’m … Is it better now?\nEND: I’m sending you … Can we talk on …?', rot: 'My video call kit',
  chips: ['Can you hear me?', 'Can you see my screen?', 'You’re breaking up.', 'You’re on mute.', 'Your video is frozen.', 'I’m sharing my screen.', 'I’m moving to another room.', 'My camera isn’t working.', 'Is it better now?', 'Let’s continue with audio only.'],
  perg: ['YOUR VIDEO CALL KIT', 'Eight phrases you need on your real calls: to start, for problems, to fix them, to end.'],
  exemploRot: 'MY CALLS · THIS WEEK', exemplo: [['TOOL', 'Microsoft Teams'], ['CALLS', '8 this week'], ['CLIENT PROBLEM', 'slow internet'], ['MY PROBLEM', 'echo on my speakers']],
  modelo: 'START: Hi! Can you hear me? Can you see my screen?<br>PROBLEMS: Sorry, you’re breaking up. You’re on mute. Your video is frozen.<br>FIX: I’m moving to another room. I’m putting on my headphones. Is it better now?<br>END: I’m sending you the slides now. Can we talk on Friday?' };

var PODE = [
  'I can check a call: Can you hear me? Can you see my screen?',
  'I can say what’s happening now: You’re breaking up. I’m sharing my screen.',
  'I can fix a problem politely on a video call.',
  'I can use my own video call kit.'
];
