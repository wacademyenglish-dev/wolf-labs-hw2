/* ============================================================
   REVIEW · A2 · UNIT 8 · THE CASTING · LIVE CLASS  15/10/2026
   Só os dados: o motor é o kit/revisao/revisao.js. Mecânicas: dado · missao · memoria · cadeira · pode.
   Unidade 8 (Já fiz, ainda não): present perfect de experiência (Have you ever…? never, once, twice)
   e o detalhe no passado (I went in 2018); o particípio certo; already / yet / just; since / for;
   present perfect × past simple com tempo terminado.
   A missão: o teste de elenco de um programa de viagens na TV. O aluno é o produtor; três candidatos;
   no fim ele recomenda um para a diretora.
   ============================================================ */
var REV = { nivel: 'A2', unidade: 8, titulo: ['The', 'Casting'], tema: 'Done, not yet', placa: 'CASTING TODAY', lugarConversa: 'THE WORLD MAP', cor: '#f5a3a3', cor2: '#fad1d1',
  sub: 'Unit 8 review. A TV show is looking for a new travel host. You are the producer at the casting. Who has the best stories?' };
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'dado', est: 'f', min: 8, img: 'conversa', rot: 'I · The Die', t: 'Roll the die. The number chooses.', p: 'Your teacher rolls. Do the challenge out loud, from memory.' },
  { k: 'missao', est: 'o', min: 14, img: 'capa', rot: 'II · The Casting', t: 'Three people want to be the new host.', p: 'Ask each person five questions. Your teacher is the person. Then tell the director who is the best.' },
  { k: 'memoria', est: 'l', min: 8, img: 'conversa', rot: 'III · Memory', t: 'Find the pairs.', p: 'Open two cards. Find the pair. Then make a sentence with it.' },
  { k: 'cadeira', est: 'o', min: 8, img: 'capa', rot: 'IV · The Hot Seat', t: 'Now YOU ask the questions.', p: 'Your teacher sits in the hot seat. Ask, listen, react.' },
  { k: 'pode', est: 'f', min: 4, img: 'capa', rot: 'V · I Can', t: 'Unit 8: what can you do now?', p: 'Read each line out loud. Tap the ones you can do. Your teacher confirms.' }
];

var PORTAS = [
  { k: 'EVER?', tema: 'Have you ever…?', t: 'Ask your teacher three “Have you ever…?” questions.', ex: 'Have you ever eaten sushi? Have you ever seen snow? Have you ever lost your passport?', trap: 'Have you ever + participle: eaten, seen, lost (not “ate”).' },
  { k: 'WHEN?', tema: 'the detail in the past', t: 'Something you have done. Then say when, with the past simple.', ex: 'I’ve been to Chile. I went there in 2019, with my sister.', trap: 'A finished time (in 2019, last year): past simple.' },
  { k: 'PARTICIPLES', tema: 'the right participle', t: 'Say the participle: go, see, eat, fly, write, take.', ex: 'gone / been, seen, eaten, flown, written, taken.', trap: '“have saw”, “have went” → have seen, have gone.' },
  { k: 'ALREADY, YET', tema: 'already / yet / just', t: 'Today: something you’ve already done, something you haven’t done yet, something you’ve just done.', ex: 'I’ve already had lunch. I haven’t done my homework yet. I’ve just arrived.', trap: 'already in the middle, yet at the end.' },
  { k: 'SINCE, FOR', tema: 'since / for', t: 'How long have you lived in your home? Worked in your job? Known your best friend?', ex: 'I’ve lived here for five years. I’ve known Ana since 2010.', trap: 'for + time (five years); since + a point (2010, March).' },
  { k: 'NEVER', tema: 'never, once, twice', t: 'Three things: one you’ve never done, one once, one many times.', ex: 'I’ve never flown. I’ve been to Rio once. I’ve seen that film five times!', trap: 'never = not ever: “I haven’t never” → I’ve never.' }
];

var MISSAO = { pede: 'THE CASTING · ASK FIVE QUESTIONS', quem: 'candidate', depois: 'Talk to the director',
  campos: [
    { c: 'ja', r: 'HAVE YOU EVER', q: 'Have you ever traveled alone?', f: 'Traveled alone? Ever?' },
    { c: 'quando', r: 'WHEN', q: 'When was that? Where did you go?', f: 'When? Where?' },
    { c: 'tempo', r: 'HOW LONG', q: 'How long have you lived in your city?', f: 'Your city: how long?' },
    { c: 'tv', r: 'ON TV?', q: 'Have you ever been on TV?', f: 'TV: yes or no?' },
    { c: 'ainda', r: 'NOT YET', q: 'Is there a place you haven’t visited yet?', f: 'Not yet: where?' }],
  itens: [
    { k: 'CANDIDATE 1', tag: 'LUANA', resumo: 'Luana has traveled alone many times. She went to Japan in 2022. She has lived in Lisbon for six years, and she has already been on TV.', ele: 'She', v: { ja: 'yes, many times', quando: 'in 2022, to Japan', tempo: 'for six years', tv: 'yes, once, on a cooking show', ainda: 'Antarctica, not yet' }, diz: '“Yes, I have. Many times!” · “The best trip was in 2022. I went to Japan.” · “I’ve lived in Lisbon for six years.” · “Yes, once! I was on a cooking show.” · “I haven’t been to Antarctica yet.”' },
    { k: 'CANDIDATE 2', tag: 'OMAR', resumo: 'Omar has never traveled alone, and he has never been on TV. He has lived in Cairo since he was born. He hasn’t left his country yet, and that’s why he wants the job.', ele: 'He', v: { ja: 'no, never', quando: '—', tempo: 'since he was born', tv: 'no, never', ainda: 'every place! he hasn’t left his country' }, diz: '“No, I’ve never traveled alone.” · “I haven’t traveled, so… never!” · “I’ve lived in Cairo since I was born.” · “No, never.” · “Every place! I haven’t left my country yet. That’s why I want this job!”' },
    { k: 'CANDIDATE 3', tag: 'SAM', resumo: 'Sam has traveled alone twice. He went to Peru last year. He has lived in Toronto since 2020, and he has just finished a TV series.', ele: 'He', v: { ja: 'yes, twice', quando: 'last year, to Peru', tempo: 'since 2020', tv: 'yes, he’s just finished a TV series', ainda: 'India, not yet' }, diz: '“Yes, twice.” · “The last time was last year. I went to Peru and walked to Machu Picchu.” · “I’ve lived in Toronto since 2020.” · “Yes! I’ve just finished a TV series.” · “I haven’t been to India yet.”' }],
  relato: { titulo: 'THE DIRECTOR CALLS · WHO IS THE BEST HOST?',
    pede: function (x) { return 'What about ' + x.tag.charAt(0) + x.tag.slice(1).toLowerCase() + '? Tell me about ' + (x.ele === 'She' ? 'her' : 'him') + '.'; },
    chips: function (x) { return [x.ele + ' has traveled …', x.ele + ' went to … in …', x.ele + ' has lived in … for / since …', x.ele + ' has never …', x.ele + ' hasn’t … yet.']; },
    modelo: function (x) { return x.resumo; } },
  nao: { ago: '“I have gone to Japan in 2022” → I WENT to Japan in 2022.', part: '“I have saw it” → I have SEEN it.', for: '“I live here since 2020” → I’VE LIVED here since 2020.' },
  fim: 'Three candidates, one new host. ever, already / yet, for / since and the finished past: all of Unit 8 in one casting.' };

var PODE = [
  'I can ask “Have you ever…?” and say never, once, twice.',
  'I can give the details in the past: I went there in 2019.',
  'I can use the right participle: seen, gone, eaten, flown.',
  'I can use already, yet and just.',
  'I can say how long: for five years, since 2020.'
];

/* MECÂNICAS VARIADAS */
/* A2 R8: dado · missao · memoria · cadeira */
var PARES = [
  ['go', 'gone', 'I’ve never gone on a cruise.'], ['see', 'seen', 'Have you ever seen the northern lights?'], ['eat', 'eaten', 'I’ve eaten sushi twice.'],
  ['fly', 'flown', 'She has flown to Japan.'], ['write', 'written', 'He has written a book about his trips.'], ['since', '2020', 'I’ve lived here since 2020.']];
var CADEIRA = { itens: [
  { alvo: 'Ask me if I’ve ever been to another country.', dica: 'Have you ever been to …?', resp: 'Yes, I have. I’ve been to Argentina.' },
  { alvo: 'Ask me when I went there.', dica: 'When did you go?', resp: 'I went in 2017.' },
  { alvo: 'Ask me how long I’ve been a teacher.', dica: 'How long have you been a teacher?', resp: 'For ten years.' },
  { alvo: 'Ask me about something I haven’t done yet.', dica: 'Is there something you haven’t done yet?', resp: 'I haven’t seen the ocean in Asia yet.' },
  { alvo: 'Ask me what I’ve just done.', dica: 'What have you just done?', resp: 'I’ve just had a coffee!' }] };
