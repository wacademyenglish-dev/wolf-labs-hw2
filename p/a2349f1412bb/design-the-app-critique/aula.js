/* ============================================================
   ENGLISH FOR DESIGNERS · MODULE 4 · LESSON 11 OF 12 · THE APP CRITIQUE · LIVE CLASS  15/10/2026
   Só os dados: o motor é o kit/revisao/revisao.js. Curso Inglês para Designers (B1+).
   A crítica de app na entrevista: visão geral, usuários e fluxo, visual e hierarquia, oportunidades e trade-offs.
   Vídeo chunbuns (3:24–6:23). Apps FICTÍCIOS.
   ============================================================ */
var REV = { tipo: 'aula', nivel: 'B1+', unidade: 11, kick: 'ENGLISH FOR DESIGNERS · MODULE 4 · LESSON 11 OF 12', titulo: ['The App', 'Critique'], tema: 'Critiquing a product out loud in an interview', placa: 'LESSON 11',
  lugarConversa: 'THE INTERVIEW ROOM', cor: '#e9a8ff', cor2: '#f6dcff',
  sub: '“Pick an app on your phone and critique it.” You have no time to prepare, and everyone is watching. Today you learn a structure that works for any app, and the language to think out loud.',
  chips: ['A structure for any app', 'Strong or weak comment?', 'Critique it live'], botao: 'Start the lesson',
  nota: 'Thinking out loud is the job here. “Let me think for a second” is a good sentence to use in an interview.' };
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'video', est: 'l', min: 9, img: 'conversa', rot: 'I · A Structure for Any App', t: 'A product designer’s three steps.', p: 'One question before, then the video, then the questions.' },
  { k: 'separa', est: 'f', min: 9, img: 'capa', rot: 'II · Strong or Weak?', t: 'Which comments show real critical thinking?', p: 'Read each comment out loud. Is it strong or weak?' },
  { k: 'prova', est: 'o', min: 18, img: 'conversa', rot: 'III · Critique It Live', t: 'Two apps. Two minutes each.', p: 'Read the card, prepare, start the clock, critique out loud.' },
  { k: 'pode', est: 'f', min: 4, img: 'capa', rot: 'IV · I Can', t: 'Lesson 11: what can you do now?', p: 'Read each line out loud. Tap the ones you can do. Your teacher confirms.' }
];

var VIDEO = { yt: 'EtJzi6jmyFM', titulo: 'How to ACE Your Design App Critique in Interviews', fonte: 'CHUNBUNS · 3:24–6:23', inicio: 204, fim: 383,
  antes: { q: 'Think of an app you use every day. What problem does it solve for you?', h: 'For example: a map app helps me get from A to B without printing directions.' },
  ouvir: 'Listen: What are the steps of the critique structure?',
  perguntas: [
    { q: 'What is step one?', h: 'A brief overview: what the app is, what problem it solves and how it solves it.' },
    { q: 'What is step two?', h: 'Talk about the users (who they are, their needs and goals) and pick a specific user flow with a task.' },
    { q: 'What visual and UI things should you comment on?', h: 'Patterns, inconsistencies, color, typography, icons, affordances and discoverability.' },
    { q: 'What does she say about hierarchy?', h: 'How information is displayed on a screen, grouped and ordered.' },
    { q: 'What can you add at the end?', h: 'Opportunities for the product to grow, short- and long-term strategies, and their trade-offs.' }],
  fecho: 'Overview → users and one flow → visual, UI and hierarchy → opportunities and trade-offs. With a structure, any app is fine.' };

var SEPARA = { rot: 'STRONG OR WEAK?', a: 'STRONG', b: 'WEAK', fim: 'Strong comments name the user, the element and the effect. Weak ones are only taste.', itens: [
  ['“I like the colors.”', 'b', 'Only taste: why, and for whom?'],
  ['“For a busy parent ordering groceries, the ‘Reorder’ button saves a lot of time.”', 'a', 'User + element + effect.'],
  ['“The icons are inconsistent: some are outlined and some are filled, so it’s hard to tell which ones are active.”', 'a', 'Specific problem and its effect.'],
  ['“It’s a good app. Everybody uses it.”', 'b', 'Popularity is not a critique.'],
  ['“The search bar is hidden in the menu, so new users might not discover it.”', 'a', 'Discoverability, clearly explained.'],
  ['“I would change everything.”', 'b', 'No direction, no reason.'],
  ['“One trade-off is that adding more filters makes it powerful, but more complex for first-time users.”', 'a', 'Shows product thinking.'],
  ['“The font is weird.”', 'b', 'Vague: which font, where, what effect?']] };

var PROVA = { rot: 'CRITIQUE IT LIVE', tarefas: [
  { k: 'APP 1 · A FOOD DELIVERY APP (FICTIONAL)', tipo: 'fala', prep: 60, seg: 120, enun: 'Read the card. Critique the app out loud with the structure.',
    texto: '<b>“Hungrr”</b>. Home screen: a huge banner with offers, then 40 restaurant cards. The search icon is small, top right. Filters (price, delivery time, vegetarian) are on a second screen. Checkout: one page, phone wallet and cards, a clear total. Order tracking: a live map with the driver.',
    chips: ['This app helps… to…', 'The main users are probably…', 'Let me walk through one flow:', 'What works well is…', 'One problem is that…, so…', 'One opportunity could be…', 'The trade-off is…'],
    criterios: ['Overview: problem and solution', 'Named a user and a flow', 'Specific visual / UI comments with effects', 'Mentioned an opportunity or trade-off', 'Thought out loud with structure'],
    modelo: 'This app helps people order food from local restaurants quickly. The main users are probably busy young professionals ordering dinner after work. Let me walk through one flow: I want a vegetarian dinner under thirty minutes. On the home screen, the banner takes a lot of space, and the search icon is small, so it’s not easy to find. The filters I need are on a second screen, which adds steps. What works well is the checkout: one page, a clear total, and quick payment. The live map also reduces anxiety while you wait. One opportunity could be showing the filters directly on the home screen. The trade-off is less space for offers, which the business probably wants.' },
  { k: 'APP 2 · A HABIT TRACKER (FICTIONAL)', tipo: 'fala', prep: 60, seg: 120, enun: 'Read the card. Critique the app out loud with the structure.',
    texto: '<b>“Stride”</b>. You add habits (water, reading, running) and tap a circle every day. Streaks with a flame icon. All text is light gray on white. Settings have 25 options on one long page. Reminders are off by default. Premium: $9.99 a month for charts.',
    chips: ['The purpose of the app is…', 'A typical user might be…', 'Let’s say I want to…', 'The … is a bit…, so…', 'I wonder if…', 'In the long term, they could…'],
    criterios: ['Overview: purpose', 'User + a specific task', 'Accessibility / contrast mentioned', 'At least one positive and one problem', 'An opportunity with a trade-off'],
    modelo: 'The purpose of the app is to help people build small daily habits. A typical user might be someone who wants to drink more water and read every day. Let’s say I want to add a reading habit: it’s fast, and tapping the circle every day feels satisfying; the streak flame is motivating. But the light gray text on white is a bit low in contrast, so it might be hard to read outside or for older users. Reminders are off by default, and I wonder if new users forget the app in the first week. Settings also feel overwhelming with 25 options on one page. In the long term, they could turn reminders on during onboarding; the trade-off is that some users find notifications annoying.' }] };

var PODE = [
  'I can give an overview of an app: purpose, problem, solution.',
  'I can talk about users and walk through one flow.',
  'I can make strong comments: user + element + effect.',
  'I can think out loud and mention opportunities and trade-offs.'
];

/* MECÂNICAS VARIADAS */
/* DESIGN 11: video · separa · prova (os dados estão no topo do aula.js) */
