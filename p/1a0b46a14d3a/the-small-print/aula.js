/* ============================================================
   THE SMALL PRINT · C1 · UNIT 9 (REGISTER AND STYLE) · LIVE CLASS  15/10/2026
   Aula nova do C1 no motor do kit/revisao (REV.tipo = 'aula').
   Alvo: ler (e explicar em inglês simples) a linguagem de contrato: shall (= must / will, obrigação),
   shall not, hereby, subject to, in accordance with, prior to, upon + -ing / noun, terminate, be liable
   for, the Tenant / the Party, notwithstanding, provided that, herein.
   Objetivo real: entender o contrato e TRADUZIR para o inglês do dia a dia (plain English).
   Armadilha: shall lido como futuro ("vai") quando é obrigação; subject to lido como "sujeito a" =
   "talvez"; prior to + verbo sem -ing.
   O mundo: três contratos curtos (academia, apartamento, celular); o aluno explica aos clientes.
   Nada de contrato real: tudo inventado.
   ============================================================ */
var REV = { tipo: 'aula', nivel: 'C1', unidade: 9, titulo: ['The Small', 'Print'], tema: 'Read a contract, explain it simply.',
  sub: 'Contracts use a strange kind of English: “The Tenant shall…”, “subject to…”, “prior to…”. Learn to read the small print, and to explain it to an ordinary person.',
  placa: 'CLAUSE 7.2', lugarConversa: 'THE WAITING ROOM', cor: '#b0a088', cor2: '#d8cfc2',
  chips: ['shall', 'subject to', 'prior to'], botao: 'Start the lesson', nota: 'Read like a lawyer. Explain like a friend.' };
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'leitura', est: 'l', min: 11, img: 'capa', rot: 'I · The Contract', t: 'A flat rental agreement, clause by clause.', p: 'Read the clauses out loud. Answer the questions in plain English. Then look closer.' },
  { k: 'descobre', est: 'f', min: 9, img: 'conversa', rot: 'II · Contract or Plain English?', t: 'What does it REALLY mean?', p: 'Compare A and B. Do they say the same thing?' },
  { k: 'rapido', est: 'f', min: 6, img: 'conversa', rot: 'III · Speed Round', t: 'Sixty seconds. How many can you do?', p: 'Answer fast. Your teacher taps Right or Pass. Then try to beat your score.' },
  { k: 'missao', est: 'o', min: 15, img: 'capa', rot: 'IV · Three Worried Clients', t: 'They signed. Now they have questions.', p: 'Ask each client five questions. Your teacher is the client. Then explain their contract in plain English.' }
];
var PORTAS = [];

var LEITURA = { rot: 'RESIDENTIAL LEASE · CLAUSES 4–7', tipo: 'nota',
  antes: { q: 'Do you read every line of a contract before you sign? Be honest!', h: 'Not really. I read the price and the dates, and then I sign. And sometimes I regret it.' },
  texto: '4.1 The Tenant {shall} pay the rent {prior to} the 5th day of each month.\n4.2 The Tenant {shall not} keep pets {without} the written consent of the Landlord.\n5.1 Repairs {shall} be carried out {in accordance with} Schedule B.\n5.2 The Landlord {shall not be liable for} damage caused by the Tenant.\n6.1 This agreement may be {terminated} by either party {upon giving} two months’ written notice.\n6.2 The deposit {shall} be returned within 30 days, {subject to} a final inspection.\n7.2 {Notwithstanding} clause 6.1, the Tenant may leave early {provided that} a new tenant is found.\nThe parties {hereby} agree to the terms set out {herein}.',
  perguntas: [
    { q: 'When must the tenant pay the rent?', h: 'Before the 5th of every month.' },
    { q: 'Can the tenant have a cat?', h: 'Only with written permission from the landlord.' },
    { q: 'How can the contract end?', h: 'Either side can end it by giving two months’ notice in writing.' },
    { q: 'Will the tenant get the deposit back for sure?', h: 'Not for sure: only after a final inspection of the flat.' }],
  olha: 'Find the contract words. Which ones mean must? before? if? Which tiny word changes everything in 6.2?' };

var DESCOBRE = {
  pares: [
    { a: 'The Tenant {shall} pay the rent.', b: 'The Tenant {must} pay the rent.', q: 'Is shall the future here?', r: 'No! In contracts, shall = must (an obligation). shall not = must not. Brazilians often read it as “vai pagar”.' },
    { a: 'The deposit will be returned, {subject to} an inspection.', b: 'The deposit will be returned {only if the flat passes} an inspection.', q: 'Same meaning?', r: 'Yes. subject to = it depends on. It is a condition, not a promise. Read it carefully!' },
    { a: '{Prior to} signing, read clause 7.', b: '{Prior to} sign, read clause 7.', q: 'One of them is wrong. Which one?', r: 'B. prior to (= before) is a preposition: + noun or -ing. Prior to signing / prior to the meeting.' },
    { a: 'The Landlord {shall not be liable for} damage.', b: 'The landlord {won’t pay for} damage you cause.', q: 'Which version would you use to explain it to a friend?', r: 'B: plain English. A is the legal version. A C1 user reads A and explains with B.' }],
  regra: [['SHALL / SHALL NOT', 'must / must not (an obligation, not the future)'], ['PRIOR TO · UPON', 'before (+ noun / -ing) · when, as soon as (upon signing)'], ['SUBJECT TO · PROVIDED THAT', 'it depends on · only if'], ['LIABLE FOR · TERMINATE · NOTWITHSTANDING · HEREBY', 'responsible to pay · end · despite · with this document']],
  armas: [
    ['SHALL', 'The Tenant shall pay = the tenant will maybe pay.', 'The Tenant shall pay = the tenant <b>must</b> pay.', 'shall = obligation.'],
    ['PRIOR', 'Prior to sign the contract…', 'Prior to <b>signing</b> the contract…', 'prior to + -ing / noun.'],
    ['SUBJECT', 'Subject to an inspection = no conditions.', 'Subject to an inspection = <b>only if it passes</b>.', 'subject to = a condition.'],
    ['LIABLE', 'The landlord is liable to the damage.', 'The landlord is liable <b>for</b> the damage.', 'liable for.']] };

var MISSAO = { pede: 'THE CLIENTS · ASK FIVE QUESTIONS', quem: 'client', depois: 'Explain it in plain English',
  campos: [
    { c: 'contrato', r: 'THE CONTRACT', q: 'What did you sign?', f: 'What contract?' },
    { c: 'clausula', r: 'THE CLAUSE', q: 'What does the clause say, exactly?', f: 'The words?' },
    { c: 'preocupa', r: 'THE WORRY', q: 'What are you worried about?', f: 'Your worry?' },
    { c: 'quer', r: 'WHAT YOU WANT', q: 'What would you like to do now?', f: 'What do you want?' },
    { c: 'prazo', r: 'DATES', q: 'Are there any dates or deadlines?', f: 'Any dates?' }],
  itens: [
    { k: 'CLIENT 1', tag: 'THE GYM MEMBER', ele: 'He', plano: 'Don’t worry: you can cancel, but you must tell them 30 days before. Write to them today, and you’ll pay only one more month.', v: { contrato: 'a 12-month gym membership', clausula: '“The Member shall give 30 days’ written notice prior to cancellation.”', preocupa: 'he thinks he can’t cancel at all', quer: 'cancel because he is moving to another city', prazo: 'he moves in three weeks' }, diz: '“A 12-month gym membership.” · “It says: The Member shall give 30 days’ written notice prior to cancellation.” · “I think I can’t cancel at all!” · “Cancel. I’m moving to another city.” · “I move in three weeks.”' },
    { k: 'CLIENT 2', tag: 'THE TENANT', ele: 'She', plano: 'You will probably get your deposit back, but only if the flat passes the final inspection. Clean everything and take photos before you leave.', v: { contrato: 'a flat rental agreement', clausula: '“The deposit shall be returned within 30 days, subject to a final inspection.”', preocupa: 'that she won’t get her deposit back', quer: 'get all her money back', prazo: 'she leaves on the 30th' }, diz: '“A rental agreement for my flat.” · “The deposit shall be returned within 30 days, subject to a final inspection.” · “That I won’t get my deposit back!” · “All my money back, please.” · “I leave on the 30th.”' },
    { k: 'CLIENT 3', tag: 'THE PHONE CUSTOMER', ele: 'He', plano: 'The company isn’t responsible if you break the phone yourself. But the screen problem started on its own, so ask them to repair it under the warranty.', v: { contrato: 'a phone plan with a new phone', clausula: '“The Company shall not be liable for damage caused by the Customer.”', preocupa: 'that he will pay for the broken screen', quer: 'a free repair: the screen broke by itself', prazo: 'the warranty ends next month' }, diz: '“A phone plan, with a new phone.” · “The Company shall not be liable for damage caused by the Customer.” · “That I’ll pay for the broken screen.” · “A free repair. It broke by itself, I promise!” · “The warranty ends next month.”' }],
  relato: { titulo: 'PLAIN ENGLISH · EXPLAIN IT TO YOUR CLIENT',
    pede: function (x) { return 'So, what does my contract really mean?'; },
    chips: function () { return ['“Shall” means you must …', '“Subject to” means it depends on …', '“Prior to” means before …', 'They’re not liable for …', 'My advice: …']; },
    modelo: function (x) { return x.plano; } },
  nao: { shall: '“shall pay = will maybe pay” → shall = MUST.', subject: '“subject to = no conditions” → subject to = ONLY IF.', prior: '“prior to sign” → prior to SIGNING.' },
  fim: 'Three clients, three contracts, and no panic. You read like a lawyer and explained like a friend.' };

var PODE = [];

/* MECÂNICAS VARIADAS */
/* C1 · The Small Print: leitura · descobre · rapido · missao */
var RAPIDO = { seg: 60, itens: [['shall (in a contract) = ?', 'must'], ['shall not = ?', 'must not'], ['prior to = ?', 'before'], ['subject to = ?', 'it depends on / only if'], ['Prior to ___ (sign)…', 'signing'], ['liable ___ damage', 'for'], ['terminate = ?', 'end'], ['upon signing = ?', 'when you sign'], ['notwithstanding = ?', 'despite'], ['provided that = ?', 'only if']] };
