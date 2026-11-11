/* ============================================================
   BEAR THAT IN MIND · C1 · UNIT 1 (PRECISION) · LIVE CLASS  15/10/2026
   Aula nova do C1 no motor do kit/revisao (REV.tipo = 'aula').
   Alvo: colocações formais verbo + substantivo: bear in mind, take into account, raise a concern,
   draw a conclusion, reach an agreement, meet a deadline, address an issue, pose a risk,
   carry out a review, make a recommendation.
   Armadilha do português: "fazer uma revisão" → do a review (fraco), "levantar uma preocupação" →
   lift a concern, "alcançar o prazo" → reach the deadline, "tirar conclusões" → take conclusions.
   O mundo: o e-mail da gerente antes da reunião de projeto; depois, a reunião.
   ============================================================ */
var REV = { tipo: 'aula', nivel: 'C1', unidade: 1, titulo: ['Bear That', 'in Mind'], tema: 'Formal word partners.',
  sub: 'In a meeting, you don’t “do” a review or “take” conclusions. You carry out a review and draw conclusions. Read the email, notice the verbs, then run the meeting.',
  placa: 'PROJECT REVIEW · 9 AM', lugarConversa: 'THE READING ROOM', cor: '#9fc2e8', cor2: '#cfe0f4',
  chips: ['raise a concern', 'draw a conclusion', 'meet a deadline'], botao: 'Start the lesson', nota: 'Formal English is not about long words. It is about the right verb with the right noun.' };
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'leitura', est: 'l', min: 10, img: 'capa', rot: 'I · The Email', t: 'An email before the big meeting.', p: 'Read it out loud. Answer the questions. Then find the verb + noun pairs.' },
  { k: 'gx', est: 'f', min: 4, img: 'conversa', rot: 'II · In the Boardroom', t: 'The manager and you, before the meeting. Some partners are lit.', p: 'Read it together. Tap the lit words: why this verb? Then use two of them yourself.' },
  { k: 'descobre', est: 'f', min: 9, img: 'conversa', rot: 'III · Which Verb?', t: 'Same noun, different verb. Only one is right.', p: 'Compare A and B. Which verb goes with the noun?' },
  { k: 'transforma', est: 'f', min: 7, img: 'capa', rot: 'IV · Make It Formal', t: 'From the kitchen to the boardroom.', p: 'Read the informal sentence. Use the clue. Say the formal version.' },
  { k: 'erros', est: 'f', min: 7, img: 'capa', rot: 'V · Find the Mistakes', t: 'Something is wrong here.', p: 'Read it. Find the mistakes, say the right form, then tap.' },
  { k: 'missao', est: 'o', min: 15, img: 'capa', rot: 'VI · The Meeting', t: 'You chair the meeting. Three teams report.', p: 'Ask each team five questions. Your teacher is the team. Then sum up for the director.' }
];
var PORTAS = [];

var LEITURA = { rot: 'FROM: ANA REYES · SUBJECT: TOMORROW’S REVIEW', tipo: 'nota',
  antes: { q: 'Before an important meeting, what do you usually send or read?', h: 'An agenda, a short summary, the numbers. Something so that nobody arrives unprepared.' },
  texto: 'Dear all,\nAhead of tomorrow’s meeting, please {bear in mind} that we will {carry out a full review} of the Atlas project.\nEach team should be ready to {raise any concerns} and to {address the issues} we discussed last month. Please {take into account} the new budget: the delay in Asia {poses a real risk} to our launch.\nI would like us to {draw conclusions} on the timeline and, ideally, {reach an agreement} on next steps. If we cannot {meet the deadline} of 1 March, I will {make a recommendation} to the board.\nBest regards,\nAna',
  perguntas: [
    { q: 'What will happen at tomorrow’s meeting?', h: 'They will review the whole Atlas project.' },
    { q: 'What is the main problem with the launch?', h: 'A delay in Asia, and a new budget.' },
    { q: 'What two results does Ana want from the meeting?', h: 'Conclusions on the timeline and an agreement on next steps.' },
    { q: 'What will Ana do if the deadline is impossible?', h: 'She will make a recommendation to the board.' }],
  olha: 'Find ten verb + noun pairs. Which verbs would you NOT have guessed from Portuguese?' };

var DESCOBRE = {
  pares: [
    { a: 'We will {do a review} of the project.', b: 'We will {carry out a review} of the project.', q: 'Both are understandable. Which one belongs in a formal email?', r: 'B. carry out a review / a survey / an investigation. do is too informal and too general here.' },
    { a: 'Each team should {lift any concerns}.', b: 'Each team should {raise any concerns}.', q: 'Which verb goes with concerns?', r: 'B. raise a concern, raise a question, raise an issue. “levantar” in Portuguese, but raise in English, not lift.' },
    { a: 'Let’s {take conclusions} on the timeline.', b: 'Let’s {draw conclusions} on the timeline.', q: 'What do you do with a conclusion in English?', r: 'B. You draw a conclusion (like drawing a line from the facts). take conclusions is a direct translation.' },
    { a: 'We can’t {reach the deadline}.', b: 'We can’t {meet the deadline}.', q: 'Which verb goes with deadline? And with agreement?', r: 'B. meet a deadline. But reach an agreement. Each noun has its own partner.' }],
  regra: [['CARRY OUT', 'a review · a survey · an investigation · tests'], ['RAISE / ADDRESS', 'raise a concern / a question · address an issue / a problem'], ['DRAW / REACH', 'draw a conclusion · reach an agreement / a decision'], ['MEET / POSE / TAKE', 'meet a deadline · pose a risk / a threat · take into account']],
  armas: [
    ['CONCLUSION', 'We took some conclusions.', 'We <b>drew</b> some conclusions.', 'You draw a conclusion.'],
    ['DEADLINE', 'We reached the deadline.', 'We <b>met</b> the deadline.', 'meet a deadline; reach an agreement.'],
    ['ACCOUNT', 'Please take in consideration the budget.', 'Please <b>take into account</b> the budget.', 'take into account / take into consideration.'],
    ['MIND', 'Please have in mind that…', 'Please <b>bear in mind</b> that…', 'bear in mind (keep in mind is fine too).']] };

var TRANSFORMA = { rot: 'INFORMAL → FORMAL', fim: 'Six sentences ready for the boardroom.',
  itens: [
    { de: 'Don’t forget that the budget is smaller.', pista: 'bear …', para: 'Please bear in mind that the budget is smaller.' },
    { de: 'We’ll check everything carefully next week.', pista: 'carry out …', para: 'We will carry out a full review next week.' },
    { de: 'Does anyone have a problem with this?', pista: 'raise …', para: 'Would anyone like to raise a concern?' },
    { de: 'We finished on time.', pista: 'meet …', para: 'We met the deadline.' },
    { de: 'The delay could be dangerous for the launch.', pista: 'pose …', para: 'The delay poses a risk to the launch.' },
    { de: 'We finally all said yes.', pista: 'reach …', para: 'We finally reached an agreement.' }] };

var MISSAO = { pede: 'THE ATLAS REVIEW · ASK FIVE QUESTIONS', quem: 'team', depois: 'Sum up for the director',
  campos: [
    { c: 'prazo', r: 'DEADLINE', q: 'Will your team meet the deadline?', f: 'On time?' },
    { c: 'risco', r: 'RISK', q: 'Does anything pose a risk to the launch?', f: 'Any risk?' },
    { c: 'preoc', r: 'CONCERN', q: 'Would you like to raise any concerns?', f: 'Any concern?' },
    { c: 'conc', r: 'CONCLUSION', q: 'What conclusions have you drawn so far?', f: 'Your conclusion?' },
    { c: 'rec', r: 'RECOMMENDATION', q: 'What would you recommend?', f: 'Your recommendation?' }],
  itens: [
    { k: 'TEAM 1', tag: 'FINANCE · CARLA', ele: 'She', v: { prazo: 'yes, Finance will meet it', risco: 'the new budget poses a risk if prices rise', preoc: 'she raised a concern about travel costs', conc: 'she has drawn the conclusion that Asia is too expensive', rec: 'she recommends carrying out a cost review in December' }, diz: '“Yes, we’ll meet the deadline.” · “The new budget poses a risk if prices rise.” · “I’d like to raise a concern about travel costs.” · “We’ve drawn the conclusion that Asia is too expensive right now.” · “I’d recommend carrying out a cost review in December.”' },
    { k: 'TEAM 2', tag: 'ENGINEERING · DEV', ele: 'He', v: { prazo: 'no, not without two more engineers', risco: 'the delay in Asia poses a serious risk', preoc: 'he raised a concern about the testing time', conc: 'he has concluded that March is unrealistic', rec: 'he recommends moving the launch to April' }, diz: '“Honestly? Not without two more engineers.” · “The delay in Asia poses a serious risk.” · “I want to raise a concern about the testing time.” · “We’ve drawn one conclusion: March is unrealistic.” · “I’d recommend moving the launch to April.”' },
    { k: 'TEAM 3', tag: 'MARKETING · SAM', ele: 'He', v: { prazo: 'yes, the campaign is ready', risco: 'a late launch poses a risk to the campaign', preoc: 'no concerns, but he wants the date fixed', conc: 'he has drawn the conclusion that customers are waiting', rec: 'he recommends that they reach an agreement on the date today' }, diz: '“Yes. The campaign is ready.” · “A late launch poses a risk to the whole campaign.” · “No concerns. I just want the date fixed.” · “We’ve drawn the conclusion that customers are waiting for it.” · “I’d recommend that we reach an agreement on the date today.”' }],
  relato: { titulo: 'THE DIRECTOR · TWO-MINUTE SUMMARY',
    pede: function (x) { return 'So, what did ' + x.tag.split(' · ')[0].toLowerCase() + ' say?'; },
    chips: function (x) { return [x.ele + ' will / won’t meet the deadline', '… poses a risk to …', x.ele + ' raised a concern about …', x.ele + ' has drawn the conclusion that …', x.ele + ' recommends …']; },
    modelo: function (x) { var v = x.v, e = x.ele; return e + ' says: ' + v.prazo + '. ' + v.risco.charAt(0).toUpperCase() + v.risco.slice(1) + '. ' + e + ' recommends ' + v.rec.replace(/^(?:he|she) recommends /, '') + '.'; } },
  nao: { take: '“We took conclusions” → we DREW conclusions.', reach: '“We reached the deadline” → we MET the deadline.', lift: '“I want to lift a concern” → RAISE a concern.' },
  fim: 'Decision: launch in April, with a cost review in December. carry out, raise, address, draw, reach, meet and pose: the verbs of every serious meeting.' };

var PODE = [];

/* MECÂNICAS VARIADAS */
/* C1 · Bear That in Mind: leitura · descobre · transforma · erros · missao */
var ERROS = { tipo: 'nota', rot: 'DRAFT MINUTES · NOT SENT YET', partes: ['Minutes of the Atlas review. First, we ', ['did a full review', 'carried out a full review', 'carry out a review.'], ' of the project. Dev ', ['lifted a concern', 'raised a concern', 'raise a concern.'], ' about testing. Carla ', ['took the conclusion', 'drew the conclusion', 'draw a conclusion.'], ' that Asia is too expensive. We could not ', ['reach the deadline', 'meet the deadline', 'meet a deadline.'], ' of 1 March, so we ', ['arrived at an agreement on', 'reached an agreement on', 'reach an agreement.'], ' April. Please ', ['have in mind', 'bear in mind', 'bear in mind.'], ' that the budget will change.'] };

/* 10/11/2026 · AS EXPLICAÇÕES (kit/formatos3.js) · G9 · uma cena curta nova (k: gx) antes de descobre.
   Explicação 100% em inglês: see → notice → use (o aluno fala ou escreve uma frase dele no fim). */
var GX_EXPLICA = { formato: 'dialogoAceso', titulo: 'Ten minutes before the meeting. Tap the lit words.', falas: [{ q: 'Manager', f: 'Before we start, please [[bear in mind]] the budget.' }, { q: 'You', f: 'Of course. I will [[take into account]] the new costs.' }, { q: 'Manager', f: 'The client may [[raise a concern]] about the date.' }, { q: 'You', f: 'Then we must [[meet the deadline]] and [[address the issue]] early.' }, { q: 'Manager', f: 'Good. Afterwards, [[carry out a review]] and [[make a recommendation]].' }, { q: 'You', f: 'I think we can [[reach an agreement]] by Friday.' }], porques: ['A formal pair: bear + in mind. Not “have in mind”.', 'Take + into account: to consider a fact. Not “put in account”.', 'Raise a concern: you bring it up. Not “lift” a concern.', 'Meet a deadline: arrive on time. Not “reach” the deadline.', 'Address an issue: deal with it. Not “do” an issue.', 'Carry out a review: a formal job. “Do a review” is plain.', 'Make a recommendation: you make it, you do not “do” it.', 'Reach an agreement: you get to it together. Not “arrive to” an agreement.'], nota: 'Formal English likes fixed partners: <b>bear in mind, take into account, raise a concern, meet a deadline, address an issue, reach an agreement</b>. A literal translation (do a review, lift a concern) sounds plain or odd.', uso: { p: 'Your turn. You chair a meeting at work. Say three sentences with the partners above: a warning, a deadline, and a next step.', molde: ['Please bear in mind …', 'We must meet the deadline …', 'I will make a recommendation …'], ex: 'Please bear in mind that the client is in Tokyo. We must meet the deadline on Friday. I will make a recommendation after the review.' } };
var R = R || {};
R.gx = function (c) { return cab(c) + FM.ex('gx_aceso', GX_EXPLICA); };
