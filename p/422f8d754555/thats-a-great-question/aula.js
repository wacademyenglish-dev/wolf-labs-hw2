/* ============================================================
   THAT’S A GREAT QUESTION · C1 · UNIT 10 (THE TALK) · LIVE CLASS  15/10/2026
   Aula nova do C1 no motor do kit/revisao (REV.tipo = 'aula').
   Alvo: o momento das perguntas: ganhar tempo (That’s a great question. Let me think about that for
   a second.), checar (If I understand you correctly, you’re asking…), admitir que não sabe (I don’t
   have the figures with me, but…; I’d have to check), adiar (Can I come back to that at the end?),
   desviar com elegância (That’s a bit outside the scope of today’s talk, but…), responder pergunta
   hostil (I can see why you’d think that. However, …) e fechar (Does that answer your question?).
   Armadilha: “Good question” repetido 10 vezes; inventar resposta; “I don’t know.” seco.
   O mundo: o Q&A depois de uma palestra sobre abelhas na cidade (inventada).
   ============================================================ */
var REV = { tipo: 'aula', nivel: 'C1', unidade: 10, titulo: ['That’s a Great', 'Question'], tema: 'Questions from the audience, without panic.',
  sub: 'The talk went well. Then a hand goes up. Learn the phrases that give you time, check the question, admit what you don’t know, and handle even a hostile question, calmly.',
  placa: 'Q&A · 10 MINUTES', lugarConversa: 'THE LECTERN', cor: '#9cb8d8', cor2: '#cedcec',
  chips: ['Let me think about that', 'If I understand you correctly', 'Can I come back to that?'], botao: 'Start the lesson', nota: 'Nobody knows everything. The best speakers know what to say when they don’t.' };
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'leitura', est: 'l', min: 10, img: 'capa', rot: 'I · The Q&A', t: 'Four questions after a talk about city bees.', p: 'Read the Q&A out loud with your teacher. Then look closer.' },
  { k: 'descobre', est: 'f', min: 9, img: 'conversa', rot: 'II · Panic or Professional?', t: 'Two ways to answer the same question.', p: 'Compare A and B. Which speaker keeps control?' },
  { k: 'transforma', est: 'f', min: 7, img: 'capa', rot: 'III · Keep Calm', t: 'Panic → professional.', p: 'Read the weak answer. Use the clue. Say the professional version.' },
  { k: 'tabuleiro', est: 'o', min: 15, img: 'capa', rot: 'IV · Questions from the Floor', t: 'Roll, move, answer the question.', p: 'Your teacher rolls and asks a question about YOUR topic. Handle it like a pro.' }
];
var PORTAS = [];

var LEITURA = { rot: 'CITY BEES · Q&A AFTER THE TALK', tipo: 'chat',
  antes: { q: 'What’s the scariest part of giving a presentation: the talk or the questions? Why?', h: 'The questions! You can prepare the talk, but you can’t control the questions.' },
  texto: 'MAN: How many bees are there in this city?\nDR. OKO: {That’s a great question}. {I don’t have the exact figures with me}, but our last count was around two million. {I’d be happy to send you} the report.\nWOMAN: So, you’re saying bees are dangerous for children?\nDR. OKO: {If I understand you correctly}, you’re asking about schools with hives? {I can see why you’d think that}. {However}, city bees are very calm, and no school has had a problem.\nSTUDENT: What about climate change and the economy and politics?\nDR. OKO: {That’s a bit outside the scope of today’s talk}, but I’ll say one thing: bees need flowers, and flowers need rain. {Can I come back to} the climate part {at the end}?\nMAN: Why do you get public money for this?\nDR. OKO: {Let me think about that for a second}. … Because every third bite you eat needs a bee. {Does that answer your question}?',
  perguntas: [
    { q: 'How does Dr. Oko answer when she doesn’t know the exact number?', h: 'She says she doesn’t have the figures with her, gives an estimate, and offers to send the report.' },
    { q: 'What does she do with the question about children?', h: 'She checks the question, accepts the worry, and then explains calmly.' },
    { q: 'What does she do with the huge question about climate and politics?', h: 'She says it’s outside the topic, answers one small part, and offers to come back later.' },
    { q: 'How does she handle the hostile question about public money?', h: 'She takes a second to think, answers briefly, and checks if it answered the question.' }],
  olha: 'Find the phrases for: buying time, checking, not knowing, a difficult person, a question that is too big, and closing.' };

var DESCOBRE = {
  pares: [
    { a: 'I don’t know.', b: '{I don’t have the exact figures with me}, but it’s around two million. {I’d be happy to send you} the report.', q: 'Both admit not knowing. Which one keeps the audience’s trust?', r: 'B: it’s honest, gives what you DO know, and offers a next step. A ends the conversation and sounds unprepared.' },
    { a: 'You’re wrong, bees are not dangerous.', b: '{I can see why you’d think that}. {However}, city bees are very calm.', q: 'The question was a bit aggressive. Which answer calms the room?', r: 'B: it accepts the feeling, then gives the facts. A starts a fight in front of everybody.' },
    { a: 'Uh… um… so… well…', b: '{Let me think about that for a second}.', q: 'Both buy time. Which one sounds confident?', r: 'B. Saying you need a second is professional. Silence for three seconds is OK!' },
    { a: 'Good question. Good question. Good question.', b: '{That’s a great question}. / {Thanks for asking that}. / {I’m glad you asked}.', q: 'What’s the problem with A?', r: 'Repeating “good question” to everyone sounds automatic. Vary it, or skip it and just answer.' }],
  regra: [['BUY TIME · CHECK', 'Let me think about that for a second. · If I understand you correctly, you’re asking…'], ['NOT KNOWING', 'I don’t have the figures with me, but… · I’d have to check. · I’d be happy to send you…'], ['DIFFICULT / TOO BIG', 'I can see why you’d think that. However, … · That’s a bit outside the scope of today’s talk.'], ['PARK AND CLOSE', 'Can I come back to that at the end? · Does that answer your question?']],
  armas: [
    ['DRY', 'I don’t know.', 'I <b>don’t have that information with me</b>, but I can find out.', 'Admit it, then offer something.'],
    ['FIGHT', 'Your question is stupid.', '<b>I can see why you’d think that.</b> However, …', 'Calm first, facts second.'],
    ['INVENT', 'Er… it’s exactly 2,347,112.', 'It’s <b>around</b> two million, <b>if I remember correctly</b>.', 'Never invent precise numbers.'],
    ['SCOPE', 'That has nothing to do with my talk.', 'That’s <b>a bit outside the scope</b> of today’s talk.', 'Polite way to stay on topic.']] };

var TRANSFORMA = { rot: 'PANIC → PROFESSIONAL', fim: 'Six calm answers. You control the room.',
  itens: [
    { de: 'I don’t know.', pista: 'I’d have to check …', para: 'I’d have to check, but I can send you the answer tomorrow.' },
    { de: 'Uh… um… wait…', pista: 'Let me think …', para: 'Let me think about that for a second.' },
    { de: 'What? I don’t understand your question.', pista: 'If I understand you correctly …', para: 'If I understand you correctly, you’re asking about the costs?' },
    { de: 'That’s not my topic.', pista: 'outside the scope …', para: 'That’s a bit outside the scope of today’s talk, but…' },
    { de: 'No, you’re wrong.', pista: 'I can see why …', para: 'I can see why you’d think that. However, the data shows…' },
    { de: 'OK, next question.', pista: 'Does that …', para: 'Does that answer your question?' }] };

var PODE = [];

/* MECÂNICAS VARIADAS */
/* C1 · That’s a Great Question: leitura · descobre · transforma · tabuleiro */
var TABULEIRO = { rot: 'QUESTIONS FROM THE FLOOR', centro: 'Your teacher asks about YOUR talk topic. Stay calm.', casas: [
  { k: 'THE NUMBER', t: 'Someone asks for an exact number you don’t know.', ex: 'I don’t have the exact figures with me, but I’d be happy to send them to you.' },
  { k: 'THE UNCLEAR', t: 'A very confusing question.', ex: 'If I understand you correctly, you’re asking about the price?' },
  { k: 'THE HOSTILE', t: '“That’s a ridiculous idea.”', ex: 'I can see why you’d think that. However, the results were very positive.' },
  { k: 'THE GIANT', t: 'A question about everything in the world.', ex: 'That’s a bit outside the scope of today’s talk, but I’ll say one thing…' },
  { k: 'THE HARD ONE', t: 'A question you need time to think about.', ex: 'Let me think about that for a second.' },
  { k: 'THE FAN', t: '“I loved your talk! Can you tell us more about the beginning?”', ex: 'Thank you, I’m glad you asked. It all started when…' },
  { k: 'THE LONG ONE', t: 'Someone talks for two minutes before asking.', ex: 'Thanks. So, if I understand correctly, your question is…?' },
  { k: 'LATER', t: 'A good question, but not now.', ex: 'Great point. Can I come back to that at the end?' },
  { k: 'THE EXPERT', t: 'Someone who knows more than you.', ex: 'You clearly know more about that than I do. I’d love to hear your view after the talk.' },
  { k: 'THE MISTAKE', t: 'Someone finds a mistake in your slides.', ex: 'You’re absolutely right, thanks for catching that.' },
  { k: 'THE CHECK', t: 'Finish an answer and check.', ex: 'Does that answer your question?' },
  { k: 'THE CLOSE', t: 'Time’s up. Close the Q&A.', ex: 'I’m afraid that’s all we have time for. Thank you for your great questions!' }] };
