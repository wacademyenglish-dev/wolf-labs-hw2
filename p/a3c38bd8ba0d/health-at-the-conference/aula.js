/* ============================================================
   ENGLISH FOR HEALTHCARE · MODULE 4 · LESSON 15 OF 16 · AT THE CONFERENCE · LIVE CLASS  15/10/2026
   Só os dados: o motor é o kit/revisao/revisao.js. Curso Inglês para a Saúde (B1+).
   Apresentar um pôster ou trabalho curto e responder perguntas: sinalização (Our aim was…, We found…), cautela
   (suggests, may, in our sample) e respostas a perguntas difíceis. Estudo FICTÍCIO. Áudios: plateia (edge-tts).
   ============================================================ */
var REV = { tipo: 'aula', nivel: 'B1+', unidade: 15, kick: 'ENGLISH FOR HEALTHCARE · MODULE 4 · LESSON 15 OF 16', titulo: ['At the', 'Conference'], tema: 'Presenting your work and answering questions', placa: 'LESSON 15',
  lugarConversa: 'THE POSTER HALL', cor: '#7cc6e8', cor2: '#cde9f6',
  sub: 'A poster, five minutes on stage, and then the questions. Today you learn how to organize a short presentation, use careful scientific language, and answer any question calmly.',
  chips: ['A one-minute pitch', 'Proves or suggests?', 'Questions from the audience'], botao: 'Start the lesson',
  nota: 'You don’t need to know everything. “That’s a great question. In our sample… but we didn’t look at…” is a perfect answer.' };
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'leitura', est: 'l', min: 9, img: 'conversa', rot: 'I · A One-Minute Pitch', t: 'A physiotherapist presents a poster.', p: 'Read it out loud like a presenter. Then answer the questions.' },
  { k: 'transforma', est: 'f', min: 9, img: 'capa', rot: 'II · Proves or Suggests?', t: 'Make the claim careful and accurate.', p: 'Read the strong claim and the clue. Say it in a careful, scientific way.' },
  { k: 'prova', est: 'o', min: 16, img: 'conversa', rot: 'III · Questions From the Audience', t: 'Four questions after your talk.', p: 'Play the question, start the clock, and answer in about 40 seconds.' },
  { k: 'pode', est: 'f', min: 4, img: 'capa', rot: 'IV · I Can', t: 'Lesson 15: what can you do now?', p: 'Read each line out loud. Tap the ones you can do. Your teacher confirms.' }
];

var LEITURA = { rot: 'POSTER PITCH · TEXT REMINDERS AND MISSED PHYSIO APPOINTMENTS (FICTIONAL STUDY)', tipo: 'fala',
  antes: { q: 'What do people want to know in the first 30 seconds of a poster pitch?', h: 'The problem, what you did, what you found, and why it matters.' },
  texto: 'PRESENTER: Hi, thanks for stopping by. {Our aim was} to reduce missed physiotherapy appointments.\nPRESENTER: {We studied} 120 patients at one outpatient clinic over three months. Half received a text reminder the day before; half didn’t.\nPRESENTER: {We found that} missed appointments fell from 22% to 9% in the reminder group.\nPRESENTER: {This suggests that} a simple, cheap reminder {may} improve attendance.\nPRESENTER: {However}, it was one clinic and a short period, so {more research is needed}.\nPRESENTER: {Happy to take any questions.}',
  perguntas: [
    { q: 'What was the aim?', h: 'To reduce missed physiotherapy appointments.' },
    { q: 'What did they do, with how many patients?', h: '120 patients at one clinic, three months; half got a text reminder the day before.' },
    { q: 'What did they find?', h: 'Missed appointments fell from 22% to 9% with reminders.' },
    { q: 'What are the limitations?', h: 'One clinic and a short period: more research is needed.' }],
  olha: 'The highlighted words are the pitch skeleton: Our aim was · We studied · We found that · This suggests that · may · However · more research is needed. Notice: “suggests” and “may”, never “proves”.' };

var TRANSFORMA = { rot: 'PROVES OR SUGGESTS?', fim: 'Careful verbs (suggest, may, appear) make you MORE credible, not less.', itens: [
  { de: 'This proves that reminders work.', pista: 'suggests that… may…', para: 'This suggests that reminders may improve attendance.' },
  { de: 'All patients prefer text messages.', pista: 'Most patients in our sample…', para: 'Most patients in our sample preferred text messages.' },
  { de: 'The new technique is better.', pista: 'appeared to be… in this group', para: 'The new technique appeared to be more effective in this group.' },
  { de: 'This will work in every hospital.', pista: 'may also apply… more research…', para: 'The results may also apply to other settings, but more research is needed.' },
  { de: 'There was no problem with the study.', pista: 'One limitation was…', para: 'One limitation was the small sample size.' },
  { de: 'I don’t know.', pista: 'That’s a great question. We didn’t… but…', para: 'That’s a great question. We didn’t look at that in this study, but it would be interesting to explore.' }] };

var PROVA = { rot: 'QUESTIONS FROM THE AUDIENCE', tarefas: [
  { k: 'QUESTION 1', tipo: 'fala', seg: 40, audio: 'cf1.mp3', ouve: 'Thank you for your talk. How did you choose the patients for the study?', enun: 'Listen. Answer about the fictional study, in about 40 seconds.',
    criterios: ['Thanked the person', 'Answered directly', 'Gave a detail (one clinic, three months)', 'Calm, clear voice'],
    modelo: 'Thank you for the question. We included all new adult patients at our outpatient clinic over three months, 120 in total, and we divided them into two groups: one with reminders and one without.' },
  { k: 'QUESTION 2', tipo: 'fala', seg: 40, audio: 'cf2.mp3', ouve: 'Did you find any differences between younger and older patients?', enun: 'Listen. You didn’t analyze this. Answer honestly.',
    criterios: ['Admitted you didn’t analyze it', 'Didn’t invent results', 'Turned it into a future idea'],
    modelo: 'That’s a great question. We didn’t analyze the results by age in this study, so I can’t say. It would be a really interesting next step, because older patients may use text messages differently.' },
  { k: 'QUESTION 3', tipo: 'fala', seg: 40, audio: 'cf3.mp3', ouve: 'Could these results apply to other hospitals?', enun: 'Listen. Answer carefully.',
    criterios: ['Used careful language (may, possibly)', 'Mentioned the limitation (one clinic)', 'Suggested what is needed'],
    modelo: 'Possibly. Text reminders are cheap and easy, so they may work in other settings. But our study was in one clinic and over a short period, so we’d need larger studies in different hospitals to be sure.' },
  { k: 'QUESTION 4', tipo: 'fala', seg: 40, audio: 'cf4.mp3', ouve: 'What would you do differently next time?', enun: 'Listen. Reflect and answer.',
    criterios: ['Named a limitation honestly', 'Proposed a concrete improvement', 'Ended positively'],
    modelo: 'Good question. Next time, I would follow patients for longer, maybe a year, and include more than one clinic. I’d also like to ask patients what they think of the reminders. But overall, we were very happy with such a simple intervention.' }] };

var PODE = [
  'I can pitch my work in one minute: aim, method, findings, meaning, limitation.',
  'I can use careful scientific language: suggests, may, in our sample.',
  'I can admit what I didn’t study without losing confidence.',
  'I can answer audience questions calmly and clearly.'
];

/* MECÂNICAS VARIADAS */
/* SAUDE 15: leitura · transforma · prova (áudio) (os dados estão no topo do aula.js) */
