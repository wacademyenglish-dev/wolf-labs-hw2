/* ============================================================
   REVIEW · A1 · UNIT 6 · THE FLATMATE · LIVE CLASS  15/10/2026
   Só os dados: o motor é o kit/revisao/revisao.js.
   Unidade 6 (Meu dia): I like / I don't like e as respostas curtas; o -s da 3ª pessoa;
   don't / doesn't, Do / Does…?; as horas; datas e ordinais; advérbios de frequência.
   A missão: o aluno procura alguém para dividir o apartamento. Três candidatos; no fim ele
   conta para a dona do apartamento quem é o melhor: “She gets up at seven. She never smokes.”
   ============================================================ */
var REV = { nivel: 'A1', unidade: 6, titulo: ['The', 'Flatmate'], tema: 'My day', placa: 'ROOM TO RENT', lugarConversa: 'THE LIVING ROOM', cor: '#9db7f0', cor2: '#cbdaf8',
  sub: 'Unit 6 review. There is a free room in your apartment. Six doors, three people who want it, and you choose a flatmate.' };
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'memoria', est: 'l', min: 8, img: 'conversa', rot: 'I · Memory', t: 'Find the pairs.', p: 'Open two cards. Find the pair. Then make a sentence with it.' },
  { k: 'missao', est: 'o', min: 15, img: 'capa', rot: 'II · The Flatmate', t: 'Three people want the room. Interview them.', p: 'Ask each person five questions. Your teacher is the person. Then tell the owner who is good.' },
  { k: 'cartao', est: 'w', min: 6, img: 'conversa', rot: 'III · Your Day', t: 'Now you want a room. Write about your day.', p: 'Four short lines: when you get up, what you do, how often, your birthday.' },
  { k: 'cadeira', est: 'o', min: 8, img: 'capa', rot: 'IV · The Hot Seat', t: 'Now YOU ask the questions.', p: 'Your teacher sits in the hot seat. Ask, listen, react.' },
  { k: 'gx', est: 'f', min: 4, img: 'conversa', rot: 'V · The Flatmate Rule', t: 'Four lines about the flatmates. You find the rule.', p: 'Read the four sentences out loud. Look at the lit words. Choose the rule. Then say your own.' },
  { k: 'pode', est: 'f', min: 4, img: 'capa', rot: 'VI · I Can', t: 'Unit 6: what can you do now?', p: 'Read each line out loud. Tap the ones you can do. Your teacher confirms.' }
];

var PORTAS = [
  { k: 'DO YOU LIKE?', tema: 'like / don’t like, Do you like…?', t: 'Ask your teacher three “Do you like…?” questions. Answer theirs with a short answer.', ex: 'Do you like coffee? — Yes, I do. Do you like rain? — No, I don’t.', trap: 'Short answer: Yes, I do / No, I don’t (not “Yes, I like”).' },
  { k: 'HE WORKS', tema: 'he / she + -s', t: 'Tell me about a person in your family: three things he or she does every day.', ex: 'My mother gets up at six. She works in a bank. She watches TV at night.', trap: 'he / she: works, watches, goes. One S only.' },
  { k: 'DOESN’T', tema: 'don’t / doesn’t, Does…?', t: 'Two things your best friend doesn’t do. Then ask your teacher one “Does…?” question.', ex: 'He doesn’t smoke. He doesn’t drive. Does your sister live here?', trap: 'doesn’t + verb with NO -s: he doesn’t works → doesn’t work.' },
  { k: 'WHAT TIME?', tema: 'telling the time', t: 'What time do you get up, have lunch and go to bed?', ex: 'At seven o’clock. At half past twelve. At eleven fifteen.', trap: 'at + time. half past twelve = 12:30.' },
  { k: 'WHEN?', tema: 'dates and ordinals', t: 'When is your birthday? And your mother’s?', ex: 'My birthday is on March third. My mother’s is on May twenty-first.', trap: 'on + date; first, second, third, twenty-first.' },
  { k: 'HOW OFTEN?', tema: 'always / usually / never', t: 'How often do you cook, run and read? Use always, sometimes, never.', ex: 'I always cook. I sometimes run. I never read at night.', trap: 'before the verb: I never cook. After be: I am always late.' }
];

var MISSAO = { pede: 'THE INTERVIEW · ASK FIVE QUESTIONS', quem: 'person', depois: 'Talk to the owner',
  campos: [
    { c: 'levanta', r: 'GETS UP', q: 'What time do you get up?', f: 'Your time: up?' },
    { c: 'trabalho', r: 'WORK', q: 'What do you do? Do you work at home?', f: 'Your job?' },
    { c: 'cozinha', r: 'COOKS', q: 'How often do you cook?', f: 'Cook: often?' },
    { c: 'gosta', r: 'LIKES', q: 'Do you like music? Do you play it loud?', f: 'Music? Loud?' },
    { c: 'niver', r: 'BIRTHDAY', q: 'When is your birthday?', f: 'Your birthday?' }],
  itens: [
    { k: 'PERSON 1', tag: 'SOFIA', ele: 'She', v: { levanta: 'at seven', trabalho: 'a nurse, works at night', cozinha: 'always', gosta: 'quiet music', niver: 'on April 2nd' }, diz: '“I get up at seven o’clock.” · “I’m a nurse. I work at the hospital at night.” · “I always cook.” · “Yes, I like music, but I never play it loud.” · “On April second.”' },
    { k: 'PERSON 2', tag: 'MARCUS', ele: 'He', v: { levanta: 'at eleven', trabalho: 'a DJ, works at home', cozinha: 'never', gosta: 'loud music', niver: 'on July 21st' }, diz: '“I get up at eleven.” · “I’m a DJ. I work at home.” · “I never cook. I eat pizza.” · “Yes! I love music. I always play it loud.” · “On July twenty-first.”' },
    { k: 'PERSON 3', tag: 'HANA', ele: 'She', v: { levanta: 'at half past six', trabalho: 'a teacher, works at a school', cozinha: 'sometimes', gosta: 'jazz, not loud', niver: 'on December 3rd' }, diz: '“I get up at half past six.” · “I’m a teacher. I work at a school.” · “I sometimes cook.” · “I like jazz, but I don’t play it loud.” · “On December third.”' }],
  relato: { titulo: 'THE OWNER CALLS · WHO IS A GOOD FLATMATE?',
    pede: function (x) { return 'So, tell me about ' + x.tag.charAt(0) + x.tag.slice(1).toLowerCase() + '. Is ' + x.ele.toLowerCase() + ' a good flatmate?'; },
    chips: function (x) { return [x.ele + ' gets up at …', x.ele + ' works …', x.ele + ' always / never cooks.', x.ele + ' doesn’t …', x.ele + ' likes …']; },
    modelo: function (x) { var v = x.v, e = x.ele; return e + ' gets up ' + v.levanta + '. ' + e + ' is ' + v.trabalho.replace(', works', ' and works') + '. ' + e + ' ' + v.cozinha + ' cooks, and ' + e.toLowerCase() + ' likes ' + v.gosta + '.'; } },
  nao: { s: '“She work at night” → she WORKS. he / she + -s.', doesnt: '“He doesn’t cooks” → he doesn’t COOK.', never: '“She don’t never cook” → she NEVER cooks.' },
  fim: 'Three people, one good flatmate. -s, doesn’t, the time, dates and how often: all of Unit 6 in one interview.' };

var CARTAO = { ph: 'I get up at seven.\nI work in an office, but on Fridays I work at home.\nI usually cook dinner. I never smoke.\nMy birthday is on May 5th.', rot: 'My day',
  chips: ['I get up at ', 'I work ', 'I usually ', 'I always ', 'I never ', 'I sometimes ', 'I don’t ', 'My birthday is on '],
  perg: ['YOUR DAY', 'When do you get up? What do you do? How often? Your birthday?'],
  exemploRot: 'ME, AS A FLATMATE', exemplo: [['GETS UP', 'at seven'], ['WORK', 'an office, Fridays at home'], ['COOKS', 'usually'], ['LIKES', 'podcasts'], ['BIRTHDAY', 'on May 5th']],
  modelo: 'I get up at seven. I work in an office, but on Fridays I work at home.<br>I usually cook dinner. I never smoke.<br>My birthday is on May fifth.' };

var CONVERSA = [
  { q: 'What time do you usually get up on Sundays?', f: 'Sundays: what time?', voce: ['I usually get up at …', 'At …'], ex: 'At ten! I never get up early on Sundays.' },
  { q: 'What does your best friend do?', f: 'Your friend’s job?', voce: ['He / She works …', 'He / She is a …'], ex: 'She is a cook. She works in a restaurant.' },
  { q: 'How often do you see your family?', f: 'Your family: how often?', voce: ['I always / often / sometimes …', 'Every …'], ex: 'I see my parents every Sunday.' },
  { q: 'Is there something you never do? Why not?', f: 'Something you never do?', voce: ['I never …', 'Because …'], ex: 'I never drink coffee at night. I don’t sleep!' },
  { q: 'When is your favorite day of the year?', f: 'Your favorite date?', voce: ['It’s on …', 'My favorite day is …'], ex: 'December 31st. I love the fireworks.' }
];

var PODE = [
  'I can ask “Do you like…?” and answer “Yes, I do / No, I don’t.”',
  'I can talk about another person with -s: she works, he goes.',
  'I can say doesn’t + verb and ask Does…?',
  'I can say the time and dates: at seven, on May 5th.',
  'I can say how often: always, usually, sometimes, never.'
];

/* MECÂNICAS VARIADAS */
var PARES = [['7:30', 'half past seven'], ['always', 'every day'], ['never', 'not one day'], ['May 1st', 'the first of May'], ['he work', 'he works'], ['she don’t', 'she doesn’t']];
PARES = PARES.map(function (p, i) { return [p[0], p[1], ['I get up at half past seven.', 'I always drink coffee: every day!', 'I never smoke.', 'My birthday is on May first.', 'My father works in a bank.', 'She doesn’t like rain.'][i]]; });
var CADEIRA = { itens: [{ alvo: 'Ask what time I get up.', dica: 'What time do you get up?', resp: 'At six thirty.' }, { alvo: 'Ask if I like my job.', dica: 'Do you like your job?', resp: 'Yes, I do!' }, { alvo: 'Ask how often I cook.', dica: 'How often do you cook?', resp: 'I usually cook on weekends.' }, { alvo: 'Ask about my best friend’s job.', dica: 'What does your best friend do?', resp: 'She teaches music.' }, { alvo: 'Ask when my birthday is.', dica: 'When is your birthday?', resp: 'On November tenth.' }] };

/* 10/11/2026 · AS EXPLICAÇÕES (kit/formatos3.js) · G10 · uma cena curta nova (k: gx) antes de pode.
   Explicação 100% em inglês: see → notice → use (o aluno fala ou escreve uma frase dele no fim). */
var GX_EXPLICA = { formato: 'achaRegra', titulo: 'Four sentences. Find the rule yourself.', exemplos: ['She <b>works</b> at night.', 'He <b>watches</b> TV every day.', 'She <b>doesn’t</b> <u>work</u> on Sundays.', 'He <b>doesn’t</b> <u>cook</u> at home.'], pergunta: 'With he or she, the S goes …', opcoes: ['on the verb in a yes sentence: works. After doesn’t: no S', 'on every verb, even after doesn’t: doesn’t works', 'nowhere: she work'], c: 0, nao: 'Not that one. Look at the verbs after doesn’t: is there an S?', regra: 'With he or she: <b>works</b>, <b>watches</b>. With <b>doesn’t</b>, the S goes into doesn’t and the verb is clean: she doesn’t <b>work</b>. One S only.', uso: { p: 'Your turn. Tell the flat owner about a person you know: one thing he or she does, and one thing he or she doesn’t do.', molde: ['She … every day.', 'He doesn’t …'], ex: 'My friend gets up at six. He doesn’t eat breakfast.' } };
var R = R || {};
R.gx = function (c) { return cab(c) + FM.ex('gx_regra', GX_EXPLICA); };
