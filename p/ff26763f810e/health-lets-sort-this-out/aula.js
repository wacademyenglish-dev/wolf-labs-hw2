/* ============================================================
   ENGLISH FOR HEALTHCARE · MODULE 3 · LESSON 12 OF 16 · LET'S SORT THIS OUT · LIVE CLASS  15/10/2026
   Só os dados: o motor é o kit/revisao/revisao.js. Curso Inglês para a Saúde (B1+).
   O paciente irritado: acalmar sem dizer "calm down" (ouvir, reconhecer, pedir desculpas pela experiência, explicar,
   oferecer uma saída, e um limite claro se houver agressão). Sem vídeo; áudios de pacientes irritados (edge-tts).
   ============================================================ */
var REV = { tipo: 'aula', nivel: 'B1+', unidade: 12, kick: 'ENGLISH FOR HEALTHCARE · MODULE 3 · LESSON 12 OF 16', titulo: ['Let’s Sort', 'This Out'], tema: 'The angry patient', placa: 'LESSON 12',
  lugarConversa: 'THE RECEPTION DESK', cor: '#7cc6e8', cor2: '#cde9f6',
  sub: 'Long waits, pain, fear: anger is common in healthcare. Today you learn to bring the temperature down without saying “calm down”, and to set a limit when it is needed.',
  chips: ['Words that help', 'Helps or makes it worse?', 'Four angry patients'], botao: 'Start the lesson',
  nota: 'Listen first. Then: I can see… I’m sorry that… Here’s what I can do… And if someone becomes abusive: a calm, clear limit.' };
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'descobre', est: 'f', min: 10, img: 'conversa', rot: 'I · Words That Help', t: 'Two answers to the same angry patient.', p: 'Compare A and B. Which one lowers the temperature?' },
  { k: 'separa', est: 'f', min: 10, img: 'capa', rot: 'II · Helps or Makes It Worse?', t: 'Twelve reactions.', p: 'Choose A or B and say why.' },
  { k: 'prova', est: 'o', min: 14, img: 'conversa', rot: 'III · Four Angry Patients', t: 'Listen. Answer calmly.', p: 'Play the patient, start the clock, answer in about 30 seconds.' },
  { k: 'pode', est: 'f', min: 4, img: 'capa', rot: 'IV · I Can', t: 'Lesson 12: what can you do now?', p: 'Read each line out loud. Tap the ones you can do. Your teacher confirms.' }
];

var DESCOBRE = {
  pares: [
    { a: '“{Calm down, please.}”', b: '“{I can see you’re really frustrated.} Tell me what happened.”', q: 'Which one lowers the temperature?', r: 'B. “Calm down” sounds like “your feelings are wrong”. <b>Naming the feeling</b> and <b>listening</b> work better.' },
    { a: '“{I’m sorry that you’ve had such a long wait.}”', b: '“{It’s not my fault, I just started my shift.}”', q: 'Which one helps?', r: 'A. Apologize for the <b>experience</b> (I’m sorry that…) without blaming anyone or defending yourself.' },
    { a: '“{There’s nothing I can do.}”', b: '“{Here’s what I can do:} I’ll check with the doctor and update you in fifteen minutes.”', q: 'Which one gives a way forward?', r: 'B. Always offer <b>something you CAN do</b>, with a time.' },
    { a: '“{I want to help you, but I can’t continue if you shout at me.}”', b: '“{Stop shouting or get out!}”', q: 'A patient becomes abusive. Which one sets a limit professionally?', r: 'A. A <b>calm, clear limit</b>. If you feel unsafe, leave and call security, following your workplace’s policy.' }],
  regra: [['LISTEN', 'Tell me what happened. / Go on.'], ['NAME + SORRY', 'I can see you’re frustrated. I’m sorry that…'], ['WHAT I CAN DO', 'Here’s what I can do… in … minutes.'], ['A LIMIT', 'I want to help you, but I can’t continue if…']],
  armas: [['CALM DOWN', 'Calm down!', 'I can see you’re really upset.', 'name it'], ['DEFENSIVE', 'It’s not my fault.', 'I’m sorry that you’ve had to wait.', 'sorry for the experience'], ['NO WAY OUT', 'There’s nothing I can do.', 'Here’s what I can do…', 'an option'], ['AGGRESSIVE', 'Stop shouting or leave!', 'I can’t continue if you shout at me.', 'a calm limit']] };

var SEPARA = { rot: 'HELPS OR MAKES IT WORSE?', a: 'HELPS', b: 'MAKES IT WORSE', fim: 'Listen, name it, sorry for the experience, an option with a time, and a calm limit if needed.', itens: [
  ['Letting the patient finish without interrupting.', 'a', 'People calm down when they feel heard.'],
  ['“Calm down.”', 'b', 'It invalidates the feeling.'],
  ['“I can see why you’re frustrated.”', 'a', 'Naming and validating.'],
  ['“That’s hospital policy.” (and nothing else)', 'b', 'A rule without an explanation or option sounds cold.'],
  ['Speaking a little slower and lower than the patient.', 'a', 'Your voice can lower the temperature.'],
  ['Crossing your arms and looking at the computer.', 'b', 'Body language says “I’m not listening”.'],
  ['“I’m sorry that you’ve had such a difficult morning.”', 'a', 'Sorry for the experience, no blame.'],
  ['“You’re not the only patient here.”', 'b', 'True, but it escalates.'],
  ['“Here’s what I can do: I’ll find out and come back in ten minutes.”', 'a', 'An action and a time.'],
  ['Arguing about who is right.', 'b', 'You can be right and still lose the patient.'],
  ['Offering a quieter place to talk.', 'a', 'Less audience, less tension.'],
  ['Staying in the room when you feel physically unsafe.', 'b', 'Your safety first: leave and get help, following your workplace’s policy.']] };

var PROVA = { rot: 'FOUR ANGRY PATIENTS', tarefas: [
  { k: 'PATIENT 1', tipo: 'fala', seg: 30, audio: 'ag1.mp3', ouve: 'This is ridiculous! I’ve been waiting two hours, and my appointment was at nine!', enun: 'Listen. Answer calmly in about 30 seconds.',
    criterios: ['Named the feeling', 'Apologized for the experience', 'Gave information or an option with a time', 'Calm, slow voice'],
    modelo: 'I can see you’re really frustrated, and I’m sorry you’ve had to wait so long. Let me check exactly where you are on the list, and I’ll come back to you in five minutes with a time.' },
  { k: 'PATIENT 2', tipo: 'fala', seg: 30, audio: 'ag2.mp3', ouve: 'You people never listen! I told the other doctor about my pain three times!', enun: 'Listen. Answer calmly.',
    criterios: ['Didn’t defend the colleague or argue', 'Showed you are listening now', 'Invited the patient to explain', 'Calm voice'],
    modelo: 'I’m sorry you feel you haven’t been heard. That must be really frustrating. I’m listening now: can you tell me about the pain from the beginning, and I’ll write it all down.' },
  { k: 'PATIENT 3', tipo: 'fala', seg: 30, audio: 'ag3.mp3', ouve: 'Why can’t you just give me the antibiotics? I know what I need!', enun: 'Listen. Answer calmly and explain.',
    criterios: ['Acknowledged the wish', 'Explained the reason in plain words', 'Offered what you CAN do', 'No condescending tone'],
    modelo: 'I understand you want to feel better quickly. The test shows this is a viral infection, so antibiotics won’t help and can cause side effects. Here’s what I can do: I’ll give you something for the pain and fever, and if you’re not better in three days, come back and we’ll check again.' },
  { k: 'PATIENT 4', tipo: 'fala', seg: 30, audio: 'ag4.mp3', ouve: 'I want to speak to your manager. Right now.', enun: 'Listen. Answer calmly.',
    criterios: ['Didn’t take it personally', 'Agreed to escalate or explained how', 'Offered to help meanwhile', 'Calm, polite tone'],
    modelo: 'Of course, you have every right to speak to the manager. I’ll call her now. While we wait, is there anything I can do to help with the problem?' }] };

var PODE = [
  'I can lower the temperature without saying “calm down”.',
  'I can apologize for the experience without blaming anyone.',
  'I can offer what I CAN do, with a time.',
  'I can set a calm limit and protect my safety.'
];

/* MECÂNICAS VARIADAS */
/* SAUDE 12: descobre · separa · prova (áudio) (os dados estão no topo do aula.js) */
