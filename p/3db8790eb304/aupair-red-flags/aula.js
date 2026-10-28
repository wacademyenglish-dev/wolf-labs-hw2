/* ============================================================
   AU PAIR · MODULE 4 · LESSON 14 OF 24 · RED FLAGS · LIVE CLASS  15/10/2026
   Só os dados: o motor é o kit/revisao/revisao.js. Curso Au Pair (A2+/B1).
   Sinais de alerta: antes (golpe de "família" fora da agência, pedir dinheiro, sem quarto privado) e na casa (pedir o
   passaporte, horas a mais, serviço que não é das crianças, isolamento, toque ou comentário fora de lugar, pedir segredo).
   Vídeo: AuPairWorld, "5 red flags when looking for a host family" (3:47). Atenção, dito no guia: o vídeo é de uma
   plataforma europeia; nos EUA, horas acima de 45 NÃO são permitidas nem com pagamento extra.
   ============================================================ */
var REV = { tipo: 'aula', nivel: 'B1', unidade: 14, kick: 'AU PAIR · MODULE 4 · LESSON 14 OF 24', titulo: ['Red', 'Flags'], tema: 'Warning signs, before and after you arrive', placa: 'LESSON 14',
  lugarConversa: 'TRUST YOUR INSTINCTS', cor: '#ffb38a', cor2: '#ffd9c2',
  sub: 'Most families are wonderful. But some signs mean “stop and ask for help”. Today you learn to see them early, before the match and in the house.',
  chips: ['Five red flags', 'OK or red flag?', 'Spot the scam'], botao: 'Start the lesson',
  nota: 'A red flag is not a reason to panic. It is a reason to talk to your coordinator. Trust your feelings.' };
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'video', est: 'l', min: 9, img: 'conversa', rot: 'I · Five Red Flags', t: 'Warning signs when you look for a family.', p: 'One question before, then the video, then the questions.' },
  { k: 'separa', est: 'f', min: 14, img: 'capa', rot: 'II · OK or Red Flag?', t: 'Twelve situations, before and after you arrive.', p: 'Choose the side. Say why.' },
  { k: 'erros', est: 'f', min: 8, img: 'conversa', rot: 'III · Spot the Scam', t: 'A message from a “family”. Find the red flags.', p: 'Tap every red flag and say why it is dangerous.' },
  { k: 'pode', est: 'f', min: 4, img: 'capa', rot: 'IV · I Can', t: 'Lesson 14: what can you do now?', p: 'Read each line out loud. Tap the ones you can do. Your teacher confirms.' }
];

var VIDEO = { yt: 'OvFelSVNTcw', titulo: '5 red flags when looking for a host family', fonte: 'AUPAIRWORLD · 4 MIN',
  antes: { q: 'What is a “red flag”? Give one example in a relationship or a job.', h: 'A warning sign that something is wrong. For example, someone asks you to keep a secret.' },
  ouvir: 'Listen for the five red flags.',
  perguntas: [
    { q: 'Red flag 1: what about the contract?', h: 'The family doesn’t want to sign a placement agreement.' },
    { q: 'Red flag 2: what about the room?', h: 'No private room for the au pair.' },
    { q: 'Red flag 3: what about contact details?', h: 'A family that puts a personal phone or email in the profile: very likely a scam. Keep the first contact on the platform.' },
    { q: 'Red flag 4: what about money?', h: 'They ask you to pay something in advance (visa, insurance). Never send money.' },
    { q: 'Red flag 5: what about expectations?', h: 'Too many hours or big tasks that are not childcare.' }],
  fecho: 'Careful: this video is from a European platform. In the USA, more than 45 hours a week is NOT allowed, even with extra pay.' };

var SEPARA = { rot: 'OK OR RED FLAG?', a: 'OK', b: 'RED FLAG', fim: 'A red flag = talk to your coordinator. More than one = talk today.', itens: [
  ['The family wants the first calls on the agency’s platform.', 'a', 'That protects both sides.'],
  ['A “family” sends you a message from a personal email, outside any agency.', 'b', 'Very common scam. Real matches happen through an agency.'],
  ['They ask you to pay for your visa or a ticket in advance, to them.', 'b', 'Never send money to a family.'],
  ['They show you your private bedroom on the video call.', 'a', 'A private room is a program rule.'],
  ['On arrival, the host dad asks for your passport “to keep it safe”.', 'b', 'Your passport stays with you. Say: “I’d like to keep it with me.”'],
  ['The family writes your weekly schedule with you.', 'a', 'Great practice: no surprises.'],
  ['They ask you to clean the whole house and cook for the adults every day.', 'b', 'Your job is about the children.'],
  ['They say: “Don’t talk to the other au pairs or your coordinator about us.”', 'b', 'Isolation is a serious red flag. You can always talk to your coordinator.'],
  ['They have a rule: no phone while driving the kids.', 'a', 'A safety rule. Fair.'],
  ['An adult in the house makes comments about your body or touches you in a way you don’t like.', 'b', 'Never OK. Leave the situation, and call your coordinator or the help line. It is not your fault.'],
  ['They have a curfew when you use the family car.', 'a', 'A house rule a family can have.'],
  ['They say you can’t have a day off this month “because they are busy”.', 'b', 'Time off is a program rule, not a favor.']] };

var ERROS = { rot: 'A MESSAGE FROM A “FAMILY” (A SCAM)', tipo: 'nota', rotulo: 'RED FLAGS', pede: 'Find the red flags. Say why each one is dangerous, then tap it.', fim: 'Five red flags in one message. Don’t answer it, and tell your agency.', dica: 'The student says WHY each line is dangerous before tapping it.', partes: [
  'Hi sweetie! We saw your profile and we LOVE you. ', ['Don’t tell the agency, they are too slow.', '⚠ RED FLAG', 'Real families work with the agency. Secrets are a warning.'],
  ' ', ['Write to us at our private email.', '⚠ RED FLAG', 'Contact outside the platform = probably a scam.'],
  ' We pay $900 a week, ', ['much more than other families!', '⚠ RED FLAG', 'A promise that sounds too good is often a scam.'],
  ' ', ['Just send us $350 for the visa fee and we will do everything.', '⚠ RED FLAG', 'Never send money to a family.'],
  ' ', ['Please send a photo of your passport today.', '⚠ RED FLAG', 'Never send your documents to people outside your agency.'],
  ' Kisses, The Smith Family'] };

var PODE = [
  'I can name red flags before the match: secrets, private contacts, money, no private room.',
  'I can name red flags in the house: passport, extra hours, isolation, inappropriate comments or touching.',
  'I can say “I’d like to keep my passport with me.”',
  'I can say what I do with a red flag: talk to my coordinator.'
];

/* MECÂNICAS VARIADAS */
/* AU PAIR 14: video · separa · erros (os dados estão no topo do aula.js) */
