/* ============================================================
   REVIEW · A1 · UNIT 7 · THE EXCHANGE CLUB · LIVE CLASS  15/10/2026
   Só os dados: o motor é o kit/revisao/revisao.js.
   Unidade 7 (Do que eu gosto): like / love / hate + -ing, like it / them, doesn't like;
   pronomes objeto depois do verbo e da preposição (call her, with him, for them), o IT que não cai.
   A missão: um clube de conversação forma duplas. Três sócios contam do que gostam; no fim o aluno
   escolhe uma dupla para si: “Ana loves cooking, and I love it too. Let’s cook with her!”
   ============================================================ */
var REV = { nivel: 'A1', unidade: 7, titulo: ['The Exchange', 'Club'], tema: 'What I like', placa: 'CLUB NIGHT', lugarConversa: 'THE CAFÉ', cor: '#e6a3c9', cor2: '#f6cfe4',
  sub: 'Unit 7 review. You run the club night at a conversation club. Six doors, three new members, and one perfect partner for you.' };
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'bingo', est: 'f', min: 8, img: 'conversa', rot: 'I · Bingo', t: 'Nine squares. Make a line!', p: 'Pick a square and do it out loud. Three in a line, across, down or diagonal, is a BINGO.' },
  { k: 'missao', est: 'o', min: 15, img: 'capa', rot: 'II · The Exchange Club', t: 'Three new members. Find out what they like.', p: 'Ask each member five questions. Your teacher is the member. Then choose your partner.' },
  { k: 'erros', est: 'f', min: 7, img: 'conversa', rot: 'III · Find the Mistakes', t: 'Something is wrong here.', p: 'Read it. Find the mistakes, say the right form, then tap.' },
  { k: 'escolha', est: 'o', min: 7, img: 'capa', rot: 'IV · Would You Rather?', t: 'A or B? Choose one.', p: 'Choose one. Then say it with the sentence.' },
  { k: 'pode', est: 'f', min: 4, img: 'capa', rot: 'V · I Can', t: 'Unit 7: what can you do now?', p: 'Read each line out loud. Tap the ones you can do. Your teacher confirms.' }
];

var PORTAS = [
  { k: 'I LOVE', tema: 'love / like / hate + -ing', t: 'One thing you love doing, one you like doing, one you hate doing.', ex: 'I love dancing. I like reading. I hate cleaning the house.', trap: 'love + -ing: “I love dance” → I love dancing.' },
  { k: 'SHE LIKES', tema: 'he / she likes + -ing', t: 'What does your best friend like doing? And hate doing?', ex: 'He likes playing football. He hates getting up early.', trap: 'he likes (with -s) + playing (with -ing).' },
  { k: 'LIKE IT', tema: 'like it / like them', t: 'Your teacher says a thing. Answer: I like it / I love them / I hate it.', ex: 'Pizza? I love it! Cats? I like them. Rain? I hate it.', trap: 'Don’t drop it: “Yes, I like” → Yes, I like it.' },
  { k: 'CALL HER', tema: 'object pronouns after the verb', t: 'Who do you call, help and visit? Use him, her, them.', ex: 'I call my mom every day. I call her at night. I help my brothers. I help them with homework.', trap: '“I call she” → I call HER.' },
  { k: 'WITH ME', tema: 'pronouns after with / for / to', t: 'Who do you go out with? Who do you cook for?', ex: 'I go out with my friends. I go out with them. I cook for my son. I cook for him.', trap: '“with I” → with ME; “for he” → for HIM.' },
  { k: 'CALL ME', tema: 'call (no to)', t: 'Ask your teacher to call you, and say when.', ex: 'Call me tomorrow, please. Call me at six.', trap: '“Call to me” → Call me. No to.' }
];

var MISSAO = { pede: 'NEW MEMBER · ASK FIVE QUESTIONS', quem: 'member', depois: 'Choose your partner',
  campos: [
    { c: 'ama', r: 'LOVES', q: 'What do you love doing?', f: 'You love…?' },
    { c: 'odeia', r: 'HATES', q: 'What do you hate doing?', f: 'You hate…?' },
    { c: 'musica', r: 'MUSIC', q: 'Do you like rock music?', f: 'Rock: yes or no?' },
    { c: 'comida', r: 'FOOD', q: 'Do you like vegetables?', f: 'Vegetables?' },
    { c: 'fala', r: 'TALKS TO', q: 'Who do you talk to every day?', f: 'Every day: who?' }],
  itens: [
    { k: 'MEMBER 1', tag: 'ANA', ele: 'She', v: { ama: 'cooking', odeia: 'running', musica: 'loves it', comida: 'likes them', fala: 'her sister: calls her' }, diz: '“I love cooking.” · “I hate running!” · “Rock? I love it.” · “Vegetables? Yes, I like them.” · “My sister. I call her every day.”' },
    { k: 'MEMBER 2', tag: 'JOE', ele: 'He', v: { ama: 'playing video games', odeia: 'cooking', musica: 'hates it', comida: 'hates them', fala: 'his friends: plays with them' }, diz: '“I love playing video games.” · “I hate cooking.” · “Rock? No, I hate it.” · “Vegetables? I hate them!” · “My friends. I play online with them.”' },
    { k: 'MEMBER 3', tag: 'MEI', ele: 'She', v: { ama: 'reading and walking', odeia: 'shopping', musica: 'likes it', comida: 'loves them', fala: 'her grandma: visits her' }, diz: '“I love reading and walking.” · “I hate shopping.” · “Rock? I like it.” · “I love them! I’m vegetarian.” · “My grandma. I visit her every day.”' }],
  relato: { titulo: 'THE CLUB · CHOOSE YOUR PARTNER',
    pede: function (x) { return 'Is ' + x.tag.charAt(0) + x.tag.slice(1).toLowerCase() + ' a good partner for you?'; },
    chips: function (x) { return [x.ele + ' loves …ing.', x.ele + ' hates …ing.', 'I love it too!', 'I don’t like it.', 'Let’s … with ' + (x.ele === 'He' ? 'him' : 'her') + '!']; },
    modelo: function (x) { var p = x.ele === 'He' ? 'him' : 'her'; return x.ele + ' loves ' + x.v.ama + ', and I love it too! ' + x.ele + ' hates ' + x.v.odeia + '. I hate it too! I want to practice with ' + p + '.'; } },
  nao: { ing: '“She loves cook” → she loves COOKING.', obj: '“I call she” → I call HER.', it: '“Yes, I like” → Yes, I like IT.' },
  fim: 'Three members, one perfect partner. love + -ing, like it / them and him / her / them: all of Unit 7 in one club night.' };

var CARTAO = { ph: 'I love watching movies.\nI like walking in the park.\nI hate washing the dishes.\nI talk to my best friend every day. I call him at night.', rot: 'My member card',
  chips: ['I love ', 'I like ', 'I hate ', 'I don’t like ', 'ing', 'I call ', ' him', ' her', ' them', ' it'],
  perg: ['YOUR MEMBER CARD', 'What do you love, like and hate doing? Who do you talk to?'],
  exemploRot: 'MEMBER 4 · YOU', exemplo: [['LOVES', 'watching movies'], ['HATES', 'washing the dishes'], ['MUSIC', 'pop: loves it'], ['FOOD', 'fruit: likes it'], ['TALKS TO', 'best friend: calls him']],
  modelo: 'I love watching movies. I like walking in the park.<br>I hate washing the dishes.<br>I talk to my best friend every day. I call him at night.' };

var CONVERSA = [
  { q: 'What do you love doing on the weekend?', f: 'Weekend: you love…?', voce: ['I love …ing.', 'I like …ing.'], ex: 'I love sleeping late and having a big breakfast.' },
  { q: 'Is there a song you love right now?', f: 'A song you love?', voce: ['I love …', 'I listen to it …'], ex: 'Yes! I listen to it every morning.' },
  { q: 'What does your family hate doing?', f: 'Your family hates…?', voce: ['My … hates …ing.', 'They hate …'], ex: 'My kids hate getting up early. They hate it!' },
  { q: 'Who do you call when you have a problem?', f: 'A problem: who?', voce: ['I call my …', 'I call him / her.'], ex: 'My sister. I call her and we talk for hours.' },
  { q: 'Do you like learning English? What part do you love?', f: 'English: like it?', voce: ['Yes, I like it.', 'I love …ing.'], ex: 'Yes, I like it. I love watching series in English.' }
];

var PODE = [
  'I can say what I love, like and hate doing: I love cooking.',
  'I can talk about another person: she likes reading.',
  'I can say I like it / I love them (with it and them).',
  'I can use him, her, them after a verb: I call her.',
  'I can use me, him, her after with and for: with me, for them.'
];

/* MECÂNICAS VARIADAS */
var BINGO = [['Something you love doing', 'I love dancing.'], ['Pizza? (it)', 'I love it!'], ['Your friend + likes + -ing', 'She likes reading.'], ['Vegetables? (them)', 'I hate them.'], ['Call ___ (your mom)', 'I call her.'], ['Something you hate doing', 'I hate ironing.'], ['with ___ (you, me)', 'Come with me!'], ['Your family + hates', 'My son hates getting up early.'], ['for ___ (your kids)', 'I cook for them.']];
var ERROS = { tipo: 'chat', rot: 'A MESSAGE FROM A NEW CLUB MEMBER', partes: ['Hi! I’m Mei. I love ', ['read', 'reading', 'love + -ing.'], ' and walking. I hate ', ['shop', 'shopping', 'hate + -ing.'], '. Rock music? I ', ['like!', 'like it!', 'Don’t drop it: I like it.'], ' My grandma is great. I visit ', ['she', 'her', 'After a verb: her.'], ' every day. Do you want to walk with ', ['I', 'me', 'After with: me.'], '?'] };
var ESCOLHA = [{ a: 'cooking for friends', b: 'eating out with friends', chips: ['I like …ing', 'I love it.'], ex: 'Cooking for friends. I love it.' }, { a: 'a concert', b: 'a soccer game', chips: ['I want a …', 'I love …ing.'], ex: 'A concert. I love dancing.' }, { a: 'call your mom', b: 'text your mom', chips: ['I call her.', 'I text her.'], ex: 'Call her. She loves talking.' }, { a: 'reading a book', b: 'watching a movie', chips: ['I like …ing', 'I hate …ing.'], ex: 'Watching a movie. I hate reading at night.' }];
