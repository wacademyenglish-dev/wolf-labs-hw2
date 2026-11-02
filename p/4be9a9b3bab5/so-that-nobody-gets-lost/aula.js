/* ============================================================
   SO THAT NOBODY GETS LOST · B2 · UNIT 8 (LINKING, CONTRASTING, EXPLAINING) · LIVE CLASS  16/10/2026
   Aula nova do livro B2 (no lugar de uma WOLFAITH), no motor do kit/revisao (REV.tipo = 'aula').
   Alvo: finalidade (so that + sujeito + can / will / won't; in order to / so as to + verbo; in order not to)
   × causa (because + oração; because of / due to + substantivo); as to = para.
   O mundo: a guarda-florestal Ana explica por que a trilha nova do parque tem cada placa, lanterna e marco;
   depois o aluno desenha a trilha de um lugar que ele conhece.
   ============================================================ */
var REV = { tipo: 'aula', nivel: 'B2', unidade: 8, titulo: ['So That Nobody', 'Gets Lost'], tema: 'Purpose and reason: so that, in order to, because.',
  sub: 'A new night trail opens in Pine Ridge Park, and every sign, lantern and marker has a reason. Read the ranger’s notes, separate purpose from reason, and design a trail of your own.',
  placa: 'PINE RIDGE · NIGHT TRAIL', lugarConversa: 'THE RANGER STATION', cor: '#f5a3d6', cor2: '#fbd6eb',
  chips: ['so that…', 'in order (not) to…', 'because × because of'], botao: 'Start the lesson', nota: 'Purpose (para quê?): so that, in order to. Reason (por quê?): because, because of.' };
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'leitura', est: 'l', min: 10, img: 'conversa', rot: 'I · The Ranger’s Notes', t: 'Why every marker is there.', p: 'Read the notes out loud with your teacher. Then look closer.' },
  { k: 'separa', est: 'f', min: 9, img: 'capa', rot: 'II · Purpose or Reason?', t: 'What for? Or why?', p: 'Read each sentence. Is it PURPOSE (para quê?) or REASON (por quê?)? Say why, then tap.' },
  { k: 'transforma', est: 'f', min: 8, img: 'conversa', rot: 'III · Join the Ideas', t: 'Two sentences become one.', p: 'Read the two ideas. Use the clue. Say one sentence.' },
  { k: 'cartao', est: 'w', min: 10, img: 'capa', rot: 'IV · Your Trail', t: 'Design a trail in a place you know.', p: 'Five lines: what you put there, and what for.' }
];
var PORTAS = [];

var LEITURA = { rot: 'RANGER ANA’S NOTES · NEW NIGHT TRAIL', tipo: 'nota',
  antes: { q: 'Have you ever been lost on a trail, in a city or in a big building? What happened?', h: 'Yes, in a shopping mall! The signs were terrible.' },
  texto: 'We put a lantern every 200 meters {so that} nobody gets lost after dark.\nThe markers are painted orange {in order to} be visible with a flashlight.\nThere’s no music at the camp after 10 p.m. {because} the owls nest here.\nWe closed the river path {because of} the floods last spring.\nThe map shows the exits in red {so that} families {can} leave quickly.\nVisitors should stay on the trail {in order not to} damage the young trees.\nWe chose wood, not plastic, {so as to} keep the forest natural.',
  perguntas: [
    { q: 'Why is there a lantern every 200 meters?', h: 'So that nobody gets lost after dark.' },
    { q: 'Why are the markers orange?', h: 'To be visible with a flashlight.' },
    { q: 'Why is the river path closed?', h: 'Because of the floods last spring.' },
    { q: 'Why must visitors stay on the trail?', h: 'In order not to damage the young trees.' }],
  olha: 'Find the sentences that answer “what for?” and the ones that answer “why?”. What comes after so that? And after in order to?' };

var SEPARA = { rot: 'PURPOSE OR REASON?', a: 'PURPOSE (WHAT FOR?)', b: 'REASON (WHY?)', fim: 'Purpose: so that + subject + verb, in order to / so as to + verb. Reason: because + sentence, because of / due to + noun.', itens: [
  ['We put lanterns so that nobody gets lost.', 'a', 'What for? So that nobody gets lost.'],
  ['The path is closed because of the floods.', 'b', 'Why? The floods (a noun).'],
  ['The markers are orange in order to be visible.', 'a', 'What for? To be visible.'],
  ['There’s no music because the owls nest here.', 'b', 'Why? A fact: the owls nest here.'],
  ['Stay on the trail in order not to damage the trees.', 'a', 'Negative purpose: in order not to.'],
  ['The trail opens late due to the rain.', 'b', 'due to + noun: a reason.'],
  ['We used wood so as to keep it natural.', 'a', 'so as to = in order to.'],
  ['Families leave early because it gets cold.', 'b', 'Why? because + sentence.']] };

var TRANSFORMA = { rot: 'JOIN THE IDEAS', fim: 'Six clear explanations: three purposes, three reasons.',
  itens: [
    { de: 'We added benches. Older visitors can rest.', pista: 'so that … can …', para: 'We added benches so that older visitors can rest.' },
    { de: 'We printed big maps. We want to help tourists.', pista: 'in order to …', para: 'We printed big maps in order to help tourists.' },
    { de: 'Dogs must be on a leash. They mustn’t scare the deer.', pista: 'so that … won’t …', para: 'Dogs must be on a leash so that they won’t scare the deer.' },
    { de: 'Speak quietly. Don’t wake the birds.', pista: 'in order not to …', para: 'Speak quietly in order not to wake the birds.' },
    { de: 'The bridge is closed. There was a storm.', pista: 'because of …', para: 'The bridge is closed because of the storm.' },
    { de: 'The café closes at six. Nobody comes after dark.', pista: 'because …', para: 'The café closes at six because nobody comes after dark.' }] };

var CARTAO = { ph: 'MY TRAIL · THE BEACH WALK IN UBATUBA\nWe’ll put a sign at the start so that people know the distance.\nThere’ll be water stations every two kilometers in order to keep people safe.\nThe path will be wooden so as not to damage the dunes.\nThe last part closes at 6 p.m. because of the tide.', rot: 'My trail',
  chips: ['so that people can ', 'so that nobody ', 'in order to ', 'in order not to ', 'so as to ', 'because ', 'because of the ', 'due to '],
  perg: ['YOUR TRAIL', 'A walk, a trail or a tour in a place you know. What will you put there, and what for? What is closed, and why?'],
  exemploRot: 'MY PLAN', exemplo: [['SIGN', 'so that people know'], ['WATER', 'to keep people safe'], ['WOOD PATH', 'not to damage the dunes'], ['CLOSES AT 6', 'because of the tide']],
  modelo: 'We’ll put a sign at the start so that people know the distance.<br>There’ll be water stations in order to keep people safe.<br>The path will be wooden so as not to damage the dunes.<br>The last part closes at 6 p.m. because of the tide.' };

var PODE = [];

/* MECÂNICAS VARIADAS */
/* B2 · So That Nobody Gets Lost: leitura · separa · transforma · cartao */
