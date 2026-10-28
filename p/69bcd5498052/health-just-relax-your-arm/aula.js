/* ============================================================
   ENGLISH FOR HEALTHCARE · MODULE 2 · LESSON 5 OF 16 · JUST RELAX YOUR ARM · LIVE CLASS  15/10/2026
   Só os dados: o motor é o kit/revisao/revisao.js. Curso Inglês para a Saúde (B1+).
   Instruções gentis durante o exame: Could you…, I'm just going to…, for me, You may feel…, Let me know if…
   Exemplos por profissão (médico, enfermagem, dentista, fisio, farmácia). Sem vídeo (aula de prática).
   ============================================================ */
var REV = { tipo: 'aula', nivel: 'B1+', unidade: 5, kick: 'ENGLISH FOR HEALTHCARE · MODULE 2 · LESSON 5 OF 16', titulo: ['Just Relax', 'Your Arm'], tema: 'Gentle instructions during an exam', placa: 'LESSON 05',
  lugarConversa: 'THE TREATMENT ROOM', cor: '#7cc6e8', cor2: '#cde9f6',
  sub: '“Open your mouth!” sounds like an order. “Could you open wide for me?” sounds kind. Today you learn the small words that make instructions gentle.',
  chips: ['Bossy or gentle?', 'By profession', 'Speed round'], botao: 'Start the lesson',
  nota: 'Four small tools: Could you…? · for me · just · Let me know if…' };
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'descobre', est: 'f', min: 10, img: 'conversa', rot: 'I · Bossy or Gentle?', t: 'Same instruction, two ways.', p: 'Compare A and B. What makes one gentler?' },
  { k: 'transforma', est: 'o', min: 12, img: 'capa', rot: 'II · By Profession', t: 'Make it gentle.', p: 'Read the bossy instruction and the clue. Say it the gentle way.' },
  { k: 'rapido', est: 'o', min: 7, img: 'conversa', rot: 'III · Speed Round', t: 'Sixty seconds of instructions.', p: 'Your teacher says the action. You say the gentle instruction. Fast!' },
  { k: 'pode', est: 'f', min: 4, img: 'capa', rot: 'IV · I Can', t: 'Lesson 5: what can you do now?', p: 'Read each line out loud. Tap the ones you can do. Your teacher confirms.' }
];

var DESCOBRE = {
  pares: [
    { a: '{Open your mouth.}', b: '{Could you open wide for me?}', q: 'Which one would you prefer to hear in a dental chair?', r: 'B. <b>Could you…?</b> + <b>for me</b> turn an order into a request.' },
    { a: '{I’m going to touch your stomach.}', b: '{I’m just going to press gently on your tummy.}', q: 'What do “just” and “gently” do?', r: '<b>just</b> makes it sound small and quick; <b>gently</b> prepares the patient. Many clinicians also say “tummy” with patients.' },
    { a: '{Tell me if it hurts.}', b: '{Let me know if anything feels uncomfortable, and I’ll stop.}', q: 'Which one gives the patient control?', r: 'B: <b>Let me know if…, and I’ll stop.</b>' },
    { a: '{Don’t move.}', b: '{Try to keep as still as you can.}', q: 'How do we soften a negative order?', r: 'Say what TO do: <b>Try to keep still.</b>' }],
  regra: [['REQUEST', 'Could you…? / Can you…?'], ['SOFTENERS', 'for me · just · gently · a little'], ['CONTROL', 'Let me know if…, and I’ll stop.'], ['WARNING', 'You may feel a little… / This might be cold.']],
  armas: [['ORDER', 'Breathe!', 'Could you take a deep breath for me?', 'a request'], ['NEGATIVE', 'Don’t move!', 'Try to keep still for me.', 'say what to do'], ['SURPRISE', '(touch without warning)', 'This might feel a bit cold.', 'warn first'], ['CONTROL', 'Wait.', 'Let me know if you need a break.', 'patient control']] };

var TRANSFORMA = { rot: 'BY PROFESSION', fim: 'Could you…? · for me · just · Let me know if…: four tools, every profession.', itens: [
  { de: 'DENTIST: Bite!', pista: 'Could you… for me?', para: 'Could you bite down gently for me?' },
  { de: 'DOCTOR: Breathe in. Breathe out.', pista: 'Take a deep breath… and…', para: 'Could you take a deep breath in for me… and slowly out?' },
  { de: 'NURSE: Arm. Now.', pista: 'I’m just going to… Could you…?', para: 'I’m just going to check your blood pressure. Could you rest your arm on the table?' },
  { de: 'PHYSIO: Lift your leg more!', pista: 'as high as is comfortable', para: 'Could you lift your leg as high as is comfortable for you?' },
  { de: 'DOCTOR: Lie down.', pista: 'Could you… on your back?', para: 'Could you lie on your back for me, please?' },
  { de: 'NURSE: Don’t move your arm!', pista: 'Try to keep… for a moment', para: 'Try to keep your arm still for just a moment.' },
  { de: 'PHARMACIST: Show me how you use the inhaler.', pista: 'Could you show me…?', para: 'Could you show me how you usually use your inhaler?' },
  { de: 'DENTIST: Does it hurt?', pista: 'Raise your hand if…', para: 'If anything feels uncomfortable, just raise your hand and I’ll stop.' }] };

var RAPIDO = { seg: 60, itens: [
  ['(dentist) open', 'Could you open wide for me?'], ['(dentist) close a little', 'Could you close a little for me?'], ['(doctor) cough', 'Could you give a little cough for me?'],
  ['(doctor) say “ah”', 'Could you say “ah” for me?'], ['(physio) bend your knee', 'Could you bend your knee for me?'], ['(physio) turn your head left', 'Could you turn your head to the left?'],
  ['(nurse) roll up sleeve', 'Could you roll up your sleeve for me?'], ['(nurse) make a fist', 'Could you make a fist for me?'], ['(doctor) lie on your side', 'Could you lie on your side for me?'],
  ['(any) warn: cold', 'This might feel a bit cold.'], ['(any) give control', 'Let me know if you need a break.'], ['(any) finish', 'That’s it, all done. You did really well.']] };

var PODE = [
  'I can turn orders into gentle requests: Could you… for me?',
  'I can use just, gently and a little to sound calm.',
  'I can warn before I touch: This might feel cold.',
  'I can give the patient control: Let me know if…, and I’ll stop.'
];

/* MECÂNICAS VARIADAS */
/* SAUDE 05: descobre · transforma · rapido (os dados estão no topo do aula.js) */
