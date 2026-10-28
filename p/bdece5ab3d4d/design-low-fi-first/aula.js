/* ============================================================
   ENGLISH FOR DESIGNERS · MODULE 2 · LESSON 6 OF 12 · LOW-FI FIRST · LIVE CLASS  15/10/2026
   Só os dados: o motor é o kit/revisao/revisao.js. Curso Inglês para Designers (B1+).
   Apresentar trabalho em andamento: This is still rough, This might change, What we’re testing is…, We’ll…
   Vídeo Nielsen Norman Group (0:00–1:22). Projeto FICTÍCIO.
   ============================================================ */
var REV = { tipo: 'aula', nivel: 'B1+', unidade: 6, kick: 'ENGLISH FOR DESIGNERS · MODULE 2 · LESSON 6 OF 12', titulo: ['Low-Fi', 'First'], tema: 'Presenting work in progress and what will change', placa: 'LESSON 6',
  lugarConversa: 'THE SKETCH WALL', cor: '#e9a8ff', cor2: '#f6dcff',
  sub: 'A sketch, a wireframe, a floor plan in pencil. Showing unfinished work is scary, but it saves weeks. Today you learn to present it so people give the right kind of feedback.',
  chips: ['Rough on purpose', 'Will, might, going to', 'Present a wireframe'], botao: 'Start the lesson',
  nota: 'Before you show a sketch, say what kind of feedback you want: “Ignore the colors for now. Does the order make sense?”' };
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'video', est: 'l', min: 6, img: 'conversa', rot: 'I · Is It Too Early?', t: 'Should you show sketches to your boss?', p: 'One question before, then the video, then the questions.' },
  { k: 'transforma', est: 'f', min: 12, img: 'capa', rot: 'II · Final or Not Yet?', t: 'Make it clear what is finished and what may change.', p: 'Read the line and the clue. Say it the work-in-progress way.' },
  { k: 'prova', est: 'o', min: 16, img: 'conversa', rot: 'III · Present the Sketch', t: 'Two early designs. You present them.', p: 'Read the card, prepare, start the clock, present.' },
  { k: 'pode', est: 'f', min: 4, img: 'capa', rot: 'IV · I Can', t: 'Lesson 6: what can you do now?', p: 'Read each line out loud. Tap the ones you can do. Your teacher confirms.' }
];

var VIDEO = { yt: 'k63MiRRszLk', titulo: 'Presenting Low-Fidelity Prototypes to Stakeholders', fonte: 'NIELSEN NORMAN GROUP · 0:00–1:22', inicio: 0, fim: 82,
  antes: { q: 'Do you show early sketches to clients, or only finished designs? Why?', h: 'Many designers only show finished work, because they feel pressure to impress.' },
  ouvir: 'Listen: Are low-fidelity sketches good to share with managers? How?',
  perguntas: [
    { q: 'What pressure do many designers feel?', h: 'To present full visual designs even at very early stages.' },
    { q: 'What are wireframes and paper sketches for?', h: 'To work through a problem: layout, hierarchy, information architecture.' },
    { q: 'What does she suggest you do with stakeholders?', h: 'Invite them to a workshop, give everyone paper and pencils, and have them sketch ideas.' },
    { q: 'Is it “design by committee”? Who decides?', h: 'No. It’s your job to sort the ideas, test the good ones and iterate.' },
    { q: 'How can you “sell” this meeting to stakeholders?', h: 'As a way to share knowledge: you learn from what they know.' }],
  fecho: 'Low-fi is not “not ready”. It’s a tool to think together, and you still lead the process.' };

var TRANSFORMA = { rot: 'FINAL OR NOT YET?', fim: 'still · for now · might · will · we’re going to: the words of work in progress.', itens: [
  { de: 'This is the menu.', pista: 'This is still a rough version of…', para: 'This is still a rough version of the menu.' },
  { de: 'The colors are gray.', pista: 'Please ignore… for now. We’ll…', para: 'Please ignore the colors for now. We’ll add them in the next version.' },
  { de: 'The sofa goes here.', pista: 'The sofa might… depending on…', para: 'The sofa might go here, depending on where the light comes in.' },
  { de: 'Test the order of the steps.', pista: 'What we’re testing here is…', para: 'What we’re testing here is the order of the steps, not the visual design.' },
  { de: 'Users will love the new search.', pista: 'We’re going to test… with… next week.', para: 'We’re going to test the new search with five users next week.' },
  { de: 'Do you like it?', pista: 'Does … make sense? What’s missing?', para: 'Does the order of the sections make sense? What’s missing?' }] };

var PROVA = { rot: 'PRESENT THE SKETCH', tarefas: [
  { k: 'SKETCH 1 · UX OR GRAPHIC', tipo: 'fala', prep: 45, seg: 75, enun: 'Read the card. Present the wireframe to your manager.',
    texto: '<b>A wireframe for a pet clinic website (fictional).</b> Gray boxes only. Top: a big “Book a visit” button. Middle: three services. Bottom: opening hours and a map. Not decided yet: the photos and the colors. Next week: a test with five pet owners.',
    chips: ['This is still a rough version of…', 'Please ignore … for now.', 'The idea is to…', 'What we’re testing here is…', 'Next week, we’re going to…', 'Does … make sense?'],
    criterios: ['Said it’s work in progress', 'Said what to ignore', 'Explained the main idea', 'Asked for specific feedback'],
    modelo: 'This is still a rough version of the homepage, so please ignore the gray boxes and the lack of color for now. The idea is to make booking the first thing people see, so the “Book a visit” button is at the top. Then we have the three main services, and the hours and the map at the bottom. What we’re testing here is the order. Next week, we’re going to test it with five pet owners. Does this order make sense to you?' },
  { k: 'SKETCH 2 · INTERIORS', tipo: 'fala', prep: 45, seg: 75, enun: 'Read the card. Present the first floor plan to your client.',
    texto: '<b>A pencil floor plan for a small apartment (fictional).</b> The kitchen is open to the living room. A desk might go by the window. The sofa position isn’t decided. Materials and colors come later. The client works from home.',
    chips: ['This is just a first sketch.', 'We haven’t chosen … yet.', '… might go…', 'We’ll decide … after…', 'What do you think about…?'],
    criterios: ['Made clear it’s a first sketch', 'Used might / will / going to', 'Connected it to the client’s life', 'Asked a question at the end'],
    modelo: 'This is just a first sketch, so we haven’t chosen any materials or colors yet. The main idea is to open the kitchen to the living room, so the space feels bigger. Since you work from home, the desk might go by the window, for the natural light. We’ll decide the sofa position after we measure the wall again. What do you think about the open kitchen?' }] };

var PODE = [
  'I can present work in progress and say it’s still rough.',
  'I can say what may change with might, will and going to.',
  'I can tell people what kind of feedback I need.',
  'I can present a sketch, wireframe or floor plan with confidence.'
];

/* MECÂNICAS VARIADAS */
/* DESIGN 06: video · transforma · prova (os dados estão no topo do aula.js) */
