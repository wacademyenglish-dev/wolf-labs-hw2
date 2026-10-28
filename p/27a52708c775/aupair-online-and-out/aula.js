/* ============================================================
   AU PAIR · MODULE 4 · LESSON 16 OF 24 · ONLINE AND OUT · LIVE CLASS  15/10/2026
   Só os dados: o motor é o kit/revisao/revisao.js. Curso Au Pair (A2+/B1).
   Segurança fora de casa e na internet: nada de foto das crianças sem permissão, localização desligada, o endereço da casa
   fica privado, carona por app (conferir placa e nome), sair à noite (avisar alguém, celular carregado, combinar a volta).
   Vídeo: TODAY, "Why You Should Rethink Posting Photos Of Your Children On Social Media" (4:47), trecho 1:03–3:50
   (a abertura menciona um site impróprio; o trecho começa depois). Legenda conferida em 15/10.
   ============================================================ */
var REV = { tipo: 'aula', nivel: 'B1', unidade: 16, kick: 'AU PAIR · MODULE 4 · LESSON 16 OF 24', titulo: ['Online and', 'Out'], tema: 'Safe online, safe outside', placa: 'LESSON 16',
  lugarConversa: 'THE CITY AT NIGHT', cor: '#ffb38a', cor2: '#ffd9c2',
  sub: 'You will want to share everything, and go out to see everything. Today you learn how to protect the kids online, and yourself in the city.',
  chips: ['What a post can show', 'Safe or not safe?', 'Ask before you post'], botao: 'Start the lesson',
  nota: 'The kids’ photos belong to their parents. Ask first, every time.' };
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'video', est: 'l', min: 10, img: 'conversa', rot: 'I · What a Post Can Show', t: 'A safety expert reads a family’s posts.', p: 'One question before, then the video, then the questions.' },
  { k: 'separa', est: 'f', min: 12, img: 'capa', rot: 'II · Safe or Not Safe?', t: 'Twelve situations, online and out.', p: 'Choose the side. Say why.' },
  { k: 'transforma', est: 'o', min: 8, img: 'conversa', rot: 'III · Ask Politely', t: 'Ask before you post, tell before you go.', p: 'Read the idea and the clue. Say it the polite way.' },
  { k: 'pode', est: 'f', min: 4, img: 'capa', rot: 'IV · I Can', t: 'Lesson 16: what can you do now?', p: 'Read each line out loud. Tap the ones you can do. Your teacher confirms.' }
];

var VIDEO = { yt: 'hsm8TP-01-M', titulo: 'Why You Should Rethink Posting Photos Of Your Children On Social Media', fonte: 'TODAY · 1:03–3:50', inicio: 63, fim: 230,
  antes: { q: 'What can a stranger learn from one photo of a child at school?', h: 'The child’s name, the school, the city, the time they leave…' },
  ouvir: 'Listen: What did the expert find? What settings should you change?',
  perguntas: [
    { q: 'What did the expert find on the mom’s Facebook?', h: 'The husband’s and the children’s names, ages, dates of birth, the school, the teacher, the playgrounds and the way to school.' },
    { q: 'What is hidden inside some photos?', h: 'A location tag: anyone can see where the photo was taken.' },
    { q: 'Why is this dangerous? Give the example.', h: 'A stranger can use details to sound familiar: “I was the nurse when you broke your leg, come with me.”' },
    { q: 'What settings do they recommend?', h: 'Private profile, friends only, separate groups for people you trust, location OFF for the camera, never kids in profile or cover photos.' }],
  fecho: 'If parents need these rules for their own kids, an au pair needs them even more: ask before you post.' };

var SEPARA = { rot: 'SAFE OR NOT SAFE?', a: 'SAFE', b: 'NOT SAFE', fim: 'Online: ask first, location off, no addresses. Out: tell someone, check the ride, keep your phone charged.', itens: [
  ['Posting a photo of the kids at their school, without asking the parents.', 'b', 'The photos are the parents’ decision, and the school shows where the kids are.'],
  ['Asking the parents: “Can I share this photo, or would you prefer I didn’t?”', 'a', 'Respectful and safe.'],
  ['Leaving the location on in your camera.', 'b', 'Photos can show exactly where the house is.'],
  ['Posting a photo of the beach with no kids and no house.', 'a', 'Your life, without the family’s private details.'],
  ['Sharing the family’s address in a group of au pairs on social media.', 'b', 'Addresses stay private.'],
  ['Checking the plate and the driver’s name before getting into a ride-share car.', 'a', 'Always match plate, car and name.'],
  ['Going out at night without telling anyone where you are going.', 'b', 'Tell a friend or the family where you go and when you will be back.'],
  ['Keeping your phone charged and some money for a ride home.', 'a', 'Your plan B.'],
  ['Accepting a drink from a stranger and leaving it on the table.', 'b', 'Keep your drink with you.'],
  ['Meeting a new friend for the first time in a public place.', 'a', 'Public and busy is safer.'],
  ['Telling a stranger online which bus stop you use every day.', 'b', 'Routines can be dangerous to share.'],
  ['Using the agency’s group and your cluster meetings to make friends.', 'a', 'Safe way to build a network.']] };

var TRANSFORMA = { rot: 'ASK POLITELY', fim: 'Asking shows respect. Families trust au pairs who ask.', itens: [
  { de: 'I want to post this photo of Emma.', pista: 'Can I…, or would you prefer…?', para: 'Can I share this photo of Emma, or would you prefer I didn’t?' },
  { de: 'I’m going out tonight.', pista: 'Just so you know…', para: 'Just so you know, I’m going to a café downtown tonight. I’ll be back by eleven.' },
  { de: 'I’ll be late.', pista: 'I’m running late…', para: 'I’m running late, sorry! I’ll be home around midnight.' },
  { de: 'Where is my ride?', pista: 'Is this…? Can you tell me…?', para: 'Hi, is this the ride for Ana? Can you tell me my name, please?' },
  { de: 'No photos of my face, please.', pista: 'I’d rather…', para: 'I’d rather not be in photos online, if that’s OK.' },
  { de: 'Delete that photo.', pista: 'Could you please…?', para: 'Could you please take that photo down? I’m not comfortable with it online.' }] };

var PODE = [
  'I can explain what a photo can show: names, school, location.',
  'I can ask before I post a photo of the kids.',
  'I can make safe choices outside: ride-share, nights out, new friends.',
  'I can say politely: Just so you know… / I’d rather not…'
];

/* MECÂNICAS VARIADAS */
/* AU PAIR 16: video · separa · transforma (os dados estão no topo do aula.js) */
