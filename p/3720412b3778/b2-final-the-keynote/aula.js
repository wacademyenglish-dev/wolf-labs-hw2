/* ============================================================
   REVIEW · B2 · UNIT 10 · THE KEYNOTE · THE B2 FINAL · LIVE CLASS  15/10/2026
   Só os dados: o motor é o kit/revisao/revisao.js. Mecânicas: dado · tabuleiro · cartao · escolha · pode · ponte.
   Unidade 10 (Falar como quem domina): hedge, concede, disagree; hedging (seem to, appear to, tend to,
   it could be argued, arguably); discourse markers (actually, anyway, mind you, by the way);
   ellipsis e substitution (I hope so, I don’t think so, so do I, neither have I); signposting
   (moving on, to sum up, what this means is).
   É a ÚLTIMA revisão do livro B2: o aluno fecha uma conferência; o tabuleiro são as perguntas da
   plateia; a cena VI mostra o livro C1.
   ============================================================ */
var REV = { nivel: 'B2', unidade: 10, titulo: ['The', 'Keynote'], tema: 'Closing Book B2', placa: 'THE B2 FINAL', lugarConversa: 'THE ROAD TO C1', cor: '#c6f36b', cor2: '#e2fab5',
  sub: 'The last review of Book B2. You are the closing speaker at a conference on the future of work. The talk went well. Now the audience has questions.' };
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'dado', est: 'f', min: 8, img: 'conversa', rot: 'I · The Die', t: 'Roll the die. The number chooses.', p: 'Your teacher rolls. Do the challenge out loud, from memory.' },
  { k: 'tabuleiro', est: 'o', min: 15, img: 'capa', rot: 'II · Questions from the Floor', t: 'Roll, move, answer the audience.', p: 'Your teacher rolls the die and asks as that person. Hedge, concede, disagree, and stay calm.' },
  { k: 'cartao', est: 'w', min: 7, img: 'conversa', rot: 'III · Your Closing Words', t: 'Write the last minute of your talk.', p: 'Four lines: moving on…, it could be argued…, what this means is…, to sum up…' },
  { k: 'escolha', est: 'o', min: 7, img: 'capa', rot: 'IV · Would You Rather?', t: 'A or B? Choose and say why.', p: 'Choose one. Then say why, with because.' },
  { k: 'gx', est: 'f', min: 4, img: 'conversa', rot: 'V · The Keynote Rule', t: 'Four lines from the keynote. You find the rule.', p: 'Read the four sentences out loud. Look at the lit words. Choose the rule. Then say your own.' },
  { k: 'pode', est: 'f', min: 3, img: 'capa', rot: 'VI · I Can', t: 'Unit 10: what can you do now?', p: 'Read each line out loud. Tap the ones you can do. Your teacher confirms.' },
  { k: 'ponte', est: 'l', min: 3, img: 'conversa', rot: 'VII · The Next Book', t: 'Book B2 is done. Here is Book C1.', p: 'Read the three cards out loud. Which one do you want first?' }
];

var PORTAS = [
  { k: 'I SEE YOUR POINT', tema: 'hedge, concede, disagree', t: 'Your teacher says: “Working from home is always better.” Hedge, concede, then disagree.', ex: 'I see your point, and that’s true for some jobs. Having said that, I’m not sure it works for everyone.', trap: 'Concede before you disagree; avoid a flat “You’re wrong”.' },
  { k: 'IT SEEMS', tema: 'hedging: seem to, appear to, tend to', t: 'Three soft statements about people in your city.', ex: 'People here seem to work very long hours. They tend to eat late, and the traffic appears to be getting worse.', trap: 'seem / appear / tend + to + verb.' },
  { k: 'ARGUABLY', tema: 'it could be argued, arguably, to some extent', t: 'An opinion about technology, said carefully.', ex: 'It could be argued that phones have made us lonelier. Arguably, they have also connected families.', trap: 'Hedging makes strong ideas easier to accept.' },
  { k: 'ACTUALLY', tema: 'discourse markers: actually, anyway, mind you, by the way', t: 'Tell a short story about your week using all four.', ex: 'I thought the meeting was cancelled. Actually, it wasn’t! Anyway, it went fine. Mind you, it was long. By the way, did you get my email?', trap: 'actually = in fact (not “currently”).' },
  { k: 'SO DO I', tema: 'ellipsis and substitution', t: 'Your teacher says four things. React short: so do I, neither have I, I hope so, I don’t think so.', ex: 'I love coffee. — So do I! / I’ve never been to Asia. — Neither have I. / Will it rain? — I hope not.', trap: 'Don’t repeat the sentence: “I don’t think it will rain” → I don’t think so.' },
  { k: 'TO SUM UP', tema: 'signposting: moving on, what this means is, to sum up', t: 'Explain your job or course in thirty seconds, like a presentation.', ex: 'First, I’ll tell you what I do. Moving on to the challenges… What this means is long days. To sum up, I love it.', trap: 'Signposts tell the listener where they are.' }
];

var CARTAO = { ph: 'Moving on to my last point: offices won’t disappear.\nIt could be argued that people tend to work better at home. To some extent, that’s true.\nWhat this means is that companies need both spaces.\nTo sum up, the future of work seems to be flexible. Thank you!', rot: 'My closing words',
  chips: ['Moving on to ', 'It could be argued that ', 'Arguably, ', 'To some extent, ', 'seem to ', 'tend to ', 'Having said that, ', 'What this means is ', 'To sum up, ', 'Actually, '],
  perg: ['YOUR CLOSING WORDS', 'Your last point, a careful opinion, what it means, and a summary.'],
  exemploRot: 'THE CONFERENCE', exemplo: [['TOPIC', 'the future of work'], ['SPEAKER', 'you'], ['TIME', 'one minute left'], ['AUDIENCE', '300 people'], ['NEXT', 'questions from the floor']],
  modelo: 'Moving on to my last point: offices won’t disappear. It could be argued that people tend to work better at home. To some extent, that’s true.<br>What this means is that companies need both spaces.<br>To sum up, the future of work seems to be flexible. Thank you!' };

var PODE = [
  'I can disagree politely: I see your point; having said that…',
  'I can hedge: it seems to, people tend to, it could be argued that…',
  'I can use discourse markers: actually, anyway, mind you, by the way.',
  'I can answer short: so do I, neither have I, I hope so, I don’t think so.',
  'I can guide a presentation: moving on, what this means is, to sum up.'
];

var PONTE = { nivel: 'C1', titulo: 'Book 5 · Nuance, precision, style',
  itens: [
    ['NUANCE', 'Not until I moved abroad did I realize how much I missed home.', 'Advanced emphasis: say exactly how strongly you feel.'],
    ['PRECISION', 'Were it not for her help, we would have failed.', 'Formal structures for reports, negotiations and debates.'],
    ['STYLE', 'The data would seem to suggest otherwise.', 'Sound natural, confident and careful at the same time.']],
  fim: 'Book B2 is complete. Congratulations! Book C1 takes you from fluent to precise.' };

/* MECÂNICAS VARIADAS */
/* B2 R10: dado · tabuleiro · cartao · escolha · ponte */
var TABULEIRO = { rot: 'QUESTIONS FROM THE FLOOR', centro: 'Hedge, concede, disagree. Stay calm.', casas: [
  { k: 'THE CEO', t: '“Offices are dead. Agree?” Hedge and concede.', ex: 'To some extent, yes. Having said that, many people seem to miss the office.' },
  { k: 'THE STUDENT', t: '“Will robots take my job?” Answer carefully.', ex: 'It could be argued that some jobs will change. Arguably, new ones will appear too.' },
  { k: 'THE SKEPTIC', t: '“Your numbers are wrong!” Disagree politely.', ex: 'I see why you might think so. Actually, the numbers come from three studies.' },
  { k: 'THE FRIEND', t: '“I love working from home.” React short.', ex: 'So do I! Mind you, I miss the coffee breaks.' },
  { k: 'THE MANAGER', t: '“Do people work less at home?” Use tend to.', ex: 'People tend to work longer hours at home, actually.' },
  { k: 'SIGNPOST', t: 'Someone is lost. Remind them where you are in the talk.', ex: 'Let me go back for a moment. What this means is that teams need clear rules.' },
  { k: 'THE JOKER', t: '“Have you ever worked in pajamas?” React and move on.', ex: 'Haven’t we all? Anyway, moving on to the next question.' },
  { k: 'THE WORRIED', t: '“Will it get worse?” Use I hope not / I don’t think so.', ex: 'I don’t think so. Well, I hope not!' },
  { k: 'THE EXPERT', t: '“Isn’t it more complicated?” Concede and add.', ex: 'Absolutely, it is. Having said that, the main idea seems to be clear.' },
  { k: 'BY THE WAY', t: 'You forgot to mention something. Add it naturally.', ex: 'By the way, I forgot to say: all the slides are online.' },
  { k: 'THE HOST', t: '“Can you stay five more minutes? I’d love to hear more.” Answer short.', ex: 'I’d be happy to. And I hope everyone else can too!' },
  { k: 'TO SUM UP', t: 'Close the session in three sentences.', ex: 'To sum up, work is changing. It could be argued that it’s for the better. Thank you, everyone!' }] };
var ESCOLHA = [
  { a: 'give a keynote to 1,000 people', b: 'answer 20 hard questions from five experts', chips: ['Arguably, …', 'I’d rather …'], ex: 'The keynote. Experts tend to ask tricky questions!' },
  { a: 'always say exactly what you think', b: 'always hedge and stay diplomatic', chips: ['It could be argued that …', 'Having said that, …'], ex: 'Hedge. Having said that, sometimes you need to be direct.' },
  { a: 'work four days in the office', b: 'work five days at home', chips: ['People tend to …', 'Mind you, …'], ex: 'Four in the office. Mind you, I’d want a short commute.' },
  { a: 'a job you love with an average salary', b: 'a job you don’t mind with a great salary', chips: ['What this means is …', 'Actually, …'], ex: 'The job I love. Actually, money tends to matter less than people think.' }];

/* 10/11/2026 · AS EXPLICAÇÕES (kit/formatos3.js) · G10 · uma cena curta nova (k: gx) antes de pode.
   Explicação 100% em inglês: see → notice → use (o aluno fala ou escreve uma frase dele no fim). */
var GX_EXPLICA = { formato: 'achaRegra', titulo: 'Four sentences. Find the rule yourself.', exemplos: ['People <b>tend to</b> <u>forget</u> the details.', 'It <b>seems to</b> <u>work</u> well.', 'She <b>appears to</b> <u>agree</u>.', 'Customers <b>tend to</b> <u>buy</u> more in the morning.'], pergunta: 'After seem to, appear to and tend to, the verb is …', opcoes: ['clean: tend to forget', 'with -ing: tend to forgetting', 'in the past: tend to forgot'], c: 0, nao: 'Not that one. Look at the lit verbs: is there an -ing? an -ed?', regra: '<b>seem / appear / tend + to + clean verb</b>: It seems to work. Hedging makes a strong idea softer: <b>it could be argued that</b>, <b>arguably</b>.', uso: { p: 'Your turn. Make a strong idea softer. Use one hedge, then add a concession.', molde: ['It seems to …', 'People tend to …', 'I see your point; having said that, …'], ex: 'People tend to prefer short talks. I see your point; having said that, long talks can be better.' } };
var R = R || {};
R.gx = function (c) { return cab(c) + FM.ex('gx_regra', GX_EXPLICA); };
