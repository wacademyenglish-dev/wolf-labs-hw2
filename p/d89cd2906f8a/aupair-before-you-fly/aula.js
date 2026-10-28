/* ============================================================
   AU PAIR · MODULE 2 · LESSON 8 OF 24 · BEFORE YOU FLY · LIVE CLASS  15/10/2026
   Só os dados: o motor é o kit/revisao/revisao.js. Curso Au Pair (A2+/B1).
   A lista da viagem: o que vai na mala de mão (passaporte, DS-2019, contatos em papel, remédios) e o que vai na mala
   grande; cópias dos documentos separadas dos originais. Vídeo: Au Pair in America, "Life with APiA | Libby's 1st vlog",
   trecho 0:00–2:16 (a mala com excesso de peso, a chegada e a orientação, onde ela entrega passaporte, DS-2019 e
   a permissão internacional para dirigir). Legenda conferida em 15/10.
   ============================================================ */
var REV = { tipo: 'aula', nivel: 'A2+', unidade: 8, kick: 'AU PAIR · MODULE 2 · LESSON 8 OF 24', titulo: ['Before You', 'Fly'], tema: 'Your travel list', placa: 'LESSON 08',
  lugarConversa: 'THE AIRPORT GATE', cor: '#ffb38a', cor2: '#ffd9c2',
  sub: 'The suitcases are almost ready. Today you follow a real au pair from her front door to orientation. You also pack the smart way: what stays with you, and what goes in the big bag.',
  chips: ['Libby’s first vlog', 'Carry-on or suitcase?', 'My before-you-fly list'], botao: 'Start the lesson',
  nota: 'Keep originals with you and copies in another place. Also keep important phone numbers on paper: phones can die or get lost.' };
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'video', est: 'l', min: 9, img: 'conversa', rot: 'I · Libby Takes Off', t: 'A real au pair, from home to orientation.', p: 'First one question, then the video, then more questions.' },
  { k: 'separa', est: 'f', min: 10, img: 'capa', rot: 'II · Carry-On or Suitcase?', t: 'Where does it go?', p: 'Choose the bag and say why.' },
  { k: 'cartao', est: 'w', min: 12, img: 'conversa', rot: 'III · My Before-You-Fly List', t: 'Write your own list.', p: 'Documents, contacts, health, money, the first day.' },
  { k: 'pode', est: 'f', min: 4, img: 'capa', rot: 'IV · I Can', t: 'Lesson 8: what can you do now?', p: 'Read each line out loud. Tap the ones you can do. Your teacher confirms.' }
];

var VIDEO = { yt: 'g9FUBsn9e2k', titulo: 'Life with APiA | Libby’s 1st vlog', fonte: 'AU PAIR IN AMERICA · 0:00–2:16', inicio: 0, fim: 136,
  antes: { q: 'What are the three most important things to carry on the day you fly?', h: 'Passport, the DS-2019 form, the host family’s contacts… and snacks!' },
  ouvir: 'Listen: Which cities does she fly through? What problem does she have with her bag?',
  perguntas: [
    { q: 'Where does Libby fly from, and through which cities?', h: 'From Jersey to London, and then from London to New York.' },
    { q: 'What problem did she have at Heathrow?', h: 'Her big bag was about 2 kg overweight, so she repacked it (she did not want to pay).' },
    { q: 'What else went wrong?', h: 'Her flight to New York was delayed.' },
    { q: 'How did she get to the hotel?', h: 'The AirTrain to a station, then the shuttle to the hotel.' },
    { q: 'What three documents did she hand in at orientation?', h: 'Her international driving license, her passport and her DS-2019.' }],
  fecho: 'Weigh your bag at home, keep your documents in your hand luggage, and expect a delay or two.' };

var SEPARA = { rot: 'WHERE DOES IT GO?', a: 'CARRY-ON (WITH ME)', b: 'BIG SUITCASE', fim: 'Rule of thumb: if you can’t live one day without it, it flies with you.', itens: [
  ['My passport, with the visa', 'a', 'You show it at the airport and at immigration. Never in the big bag.'],
  ['The DS-2019 form', 'a', 'Immigration and your orientation need it. Keep it with the passport.'],
  ['A copy of my passport and visa', 'b', 'Copies go in another place: if you lose the originals, the copy helps.'],
  ['The host family’s address and phone numbers, on paper', 'a', 'Phones die. Paper doesn’t.'],
  ['My winter coat', 'b', 'You don’t need it on the plane (wear a light jacket).'],
  ['Medicine I take every day', 'a', 'Bags get delayed; keep some days of medicine with you, with the prescription.'],
  ['Gifts for the host family', 'b', 'Nice, but not urgent.'],
  ['My international driving permit and Brazilian license', 'a', 'Orientation may ask for it, like in the video.'],
  ['Extra shoes', 'b', 'Heavy and not urgent.'],
  ['Phone charger and a power adapter', 'a', 'You will need your phone as soon as you land.']] };

var CARTAO = { ph: 'Documents: …\nContacts on paper: …\nHealth: …\nMoney: …\nThe first day: …', rot: 'My before-you-fly list',
  chips: ['passport + visa', 'DS-2019', 'copies in the suitcase', 'host family address on paper', 'coordinator’s number', 'medicine + prescription', 'some US dollars', 'charger + adapter', 'weigh my bag'],
  perg: ['YOUR LIST', 'Five lines: documents, contacts, health, money, the first day.'],
  exemploRot: 'THE FIVE GROUPS', exemplo: [['DOCUMENTS', 'passport, visa, DS-2019, copies'], ['CONTACTS', 'family, coordinator, agency, on paper'], ['HEALTH', 'medicine, prescription, insurance card'], ['MONEY', 'some dollars, a card that works abroad'], ['FIRST DAY', 'charger, adapter, a change of clothes']],
  modelo: 'Documents: passport with visa and DS-2019 in my handbag; copies in the suitcase.<br>Contacts on paper: the host family, my coordinator and the agency.<br>Health: my medicine for 5 days and the prescription.<br>Money: 100 dollars and a card that works abroad.<br>The first day: charger, adapter and a change of clothes in my carry-on.' };

var PODE = [
  'I can understand a short travel vlog in real English.',
  'I can decide what goes in my carry-on and what goes in the suitcase.',
  'I can say why: originals with me, copies in another place.',
  'I can write my own before-you-fly list.'
];

/* MECÂNICAS VARIADAS */
/* AU PAIR 08: video · separa · cartao (os dados estão no topo do aula.js) */
