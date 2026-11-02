/* ============================================================
   REVIEW · C1 · UNIT 5 · THE EMBASSY DINNER · LIVE CLASS  15/10/2026
   Só os dados: o motor é o kit/revisao/revisao.js. Mecânicas: escada · missao · transforma · cadeira · pode.
   Unidade 5 (Distância e diplomacia): hedging acadêmico (the evidence suggests, it would appear),
   linguagem diplomática (I was wondering whether we might…), linguagem de crise (mistakes were made,
   voz passiva sem agente), notícias difíceis com empatia (I’m afraid…, it’s essential that…) e
   discordar com diplomacia (I take your point, but…).
   A missão: um jantar numa embaixada (inventada); o aluno é o anfitrião e responde, com diplomacia,
   a três convidados com pedidos delicados.
   ============================================================ */
var REV = { nivel: 'C1', unidade: 5, titulo: ['The Embassy', 'Dinner'], tema: 'Distance and diplomacy', placa: 'A DINNER FOR TWELVE', lugarConversa: 'THE TERRACE', cor: '#c4a6e0', cor2: '#e1d3f0',
  sub: 'Unit 5 review. You are hosting a dinner at an embassy. The food is perfect; the guests are not. Every answer must be careful, kind and clear.' };
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'escada', est: 'f', min: 8, img: 'conversa', rot: 'I · The Ladder', t: 'Climb from easy to hard.', p: 'One step at a time. A good answer, and you go up.' },
  { k: 'missao', est: 'o', min: 15, img: 'capa', rot: 'II · Three Delicate Guests', t: 'Each guest has a problem. Listen first.', p: 'Ask each guest five questions. Your teacher is the guest. Then answer, diplomatically.' },
  { k: 'transforma', est: 'f', min: 7, img: 'conversa', rot: 'III · Say It the New Way', t: 'Change the sentence.', p: 'Read the sentence and the clue. Say it the new way, out loud.' },
  { k: 'cadeira', est: 'o', min: 8, img: 'conversa', rot: 'IV · Delicate Questions', t: 'Now YOU ask me difficult things, nicely.', p: 'Ask your teacher delicate questions with distance and softeners.' },
  { k: 'pode', est: 'f', min: 4, img: 'capa', rot: 'V · I Can', t: 'Unit 5: what can you do now?', p: 'Read each line out loud. Tap the ones you can do. Your teacher confirms.' }
];

var PORTAS = [
  { k: 'IT WOULD APPEAR', tema: 'academic hedging', t: 'Say something careful about a study or a trend, without overclaiming.', ex: 'The evidence suggests that remote work increases productivity, although it would appear to depend on the job.', trap: 'Avoid “It is proven that…” unless it really is.' },
  { k: 'I WAS WONDERING', tema: 'diplomatic requests', t: 'Ask your manager for a day off, as diplomatically as possible.', ex: 'I was wondering whether we might discuss Friday. Would it be at all possible for me to take the day off?', trap: 'Past forms make it softer: I was wondering, I wanted to ask.' },
  { k: 'MISTAKES WERE MADE', tema: 'crisis language: agentless passive', t: 'A company sent 1,000 wrong orders. Write its public statement.', ex: 'Mistakes were made in our system, and some orders were sent incorrectly. We are taking steps to make sure it doesn’t happen again.', trap: 'No agent: “mistakes were made”, not “we made mistakes” (if you want distance).' },
  { k: 'I’M AFRAID', tema: 'difficult news with empathy', t: 'Tell a colleague their project has been cancelled.', ex: 'I’m afraid I have some difficult news. The project has been cancelled. It’s essential that we find you a new team quickly.', trap: 'Prepare the listener: I’m afraid…, Unfortunately…' },
  { k: 'I TAKE YOUR POINT', tema: 'diplomatic disagreement', t: 'Your teacher says: “Meetings are a waste of time.” Disagree diplomatically.', ex: 'I take your point, but I see it slightly differently: short meetings can save hours of emails.', trap: 'Recognize first, then disagree.' },
  { k: 'NEITHER… NOR', tema: 'passive without agent + neither… nor', t: 'Describe a problem without blaming anybody.', ex: 'The report was neither checked nor approved before it was sent.', trap: 'neither … nor (no double negative).' }
];

var MISSAO = { pede: 'THE DINNER · ASK FIVE QUESTIONS', quem: 'guest', depois: 'Answer diplomatically',
  campos: [
    { c: 'quem', r: 'WHO', q: 'May I ask what brings you here tonight?', f: 'Why are you here?' },
    { c: 'problema', r: 'THE PROBLEM', q: 'I sense something is wrong. Is there anything I can help with?', f: 'A problem?' },
    { c: 'quer', r: 'THE WISH', q: 'What would you ideally like to happen?', f: 'What do you want?' },
    { c: 'aceita', r: 'FLEXIBLE?', q: 'Would there be any flexibility on your side?', f: 'Flexible?' },
    { c: 'medo', r: 'THE WORRY', q: 'What concerns you most?', f: 'Your worry?' }],
  itens: [
    { k: 'GUEST 1', tag: 'THE AMBASSADOR’S WIFE', ele: 'She', resposta: 'I’m terribly sorry about the seating. It would appear that mistakes were made with the plan. I was wondering whether you might prefer the seat by the window, next to the minister?', v: { quem: 'her husband is the guest of honour', problema: 'she was seated next to the kitchen door', quer: 'a seat near the minister', aceita: 'she would accept the window seat', medo: 'that people will think she is not important' }, diz: '“My husband is the guest of honour.” · “I’ve been seated next to the kitchen door.” · “Ideally, a seat near the minister.” · “The window seat would be acceptable, I suppose.” · “That people will think I’m not important.”' },
    { k: 'GUEST 2', tag: 'THE JOURNALIST', ele: 'He', resposta: 'I take your point, and I understand why you’re asking. However, I’m afraid I can’t comment on the trade deal tonight. Should you wish, I’d be happy to arrange an interview next week.', v: { quem: 'he is writing a story about the trade deal', problema: 'nobody will answer his questions', quer: 'one comment, on the record', aceita: 'an interview next week would be fine', medo: 'that his editor will kill the story' }, diz: '“I’m writing about the trade deal.” · “Nobody will answer my questions.” · “One comment. On the record.” · “An interview next week? That could work.” · “That my editor will kill the story.”' },
    { k: 'GUEST 3', tag: 'THE YOUNG CHEF', ele: 'She', resposta: 'I’m afraid there was a misunderstanding, and the dessert was served without your name on the menu. It’s essential that we fix this: I was wondering whether you might say a few words before coffee?', v: { quem: 'she cooked tonight’s dessert', problema: 'her name was not on the menu', quer: 'recognition for her work', aceita: 'a short mention would be enough', medo: 'that nobody will remember her' }, diz: '“I cooked tonight’s dessert.” · “My name isn’t on the menu.” · “Some recognition for my work.” · “A short mention would be enough.” · “That nobody will remember me.”' }],
  relato: { titulo: 'THE HOST · YOUR DIPLOMATIC ANSWER',
    pede: function (x) { return x.tag.charAt(0) + x.tag.slice(1).toLowerCase() + ' is waiting for your answer.'; },
    chips: function () { return ['I’m terribly sorry about …', 'It would appear that …', 'Mistakes were made …', 'I was wondering whether you might …', 'I take your point, but …', 'I’m afraid …', 'Should you wish, …']; },
    modelo: function (x) { return x.resposta; } },
  nao: { blunt: '“That’s not my problem” → I’M AFRAID I can’t…, but…', wonder: '“I wonder if you can” → I WAS WONDERING WHETHER you MIGHT…', blame: '“The waiter made a mistake” → MISTAKES WERE MADE.' },
  fim: 'Dinner saved: a better seat, an interview next week and a speech before coffee. Distance, softeners and empathy: all of Unit 5 at one table.' };

var TRANSFORMA = { rot: 'BLUNT → DIPLOMATIC', fim: 'Six answers fit for an embassy.',
  itens: [
    { de: 'Your seat is wrong. Move.', pista: 'I was wondering whether …', para: 'I was wondering whether you might prefer another seat.' },
    { de: 'The waiter forgot your order.', pista: 'Mistakes …', para: 'I’m afraid mistakes were made with your order.' },
    { de: 'The study proves that coffee is good.', pista: 'The evidence suggests …', para: 'The evidence suggests that coffee may have some benefits.' },
    { de: 'No comment. Go away.', pista: 'I’m afraid … Should you wish …', para: 'I’m afraid I can’t comment tonight. Should you wish, we could talk next week.' },
    { de: 'You’re wrong about the deal.', pista: 'I take your point, but …', para: 'I take your point, but I see the deal slightly differently.' },
    { de: 'Nobody checked the report, and nobody approved it.', pista: 'neither … nor', para: 'The report was neither checked nor approved.' }] };

var PODE = [
  'I can hedge a claim: the evidence suggests, it would appear that…',
  'I can make diplomatic requests: I was wondering whether we might…',
  'I can use crisis language without blaming: mistakes were made.',
  'I can give difficult news with empathy: I’m afraid…, it’s essential that…',
  'I can disagree diplomatically: I take your point, but…'
];

/* MECÂNICAS VARIADAS */
/* C1 R5: escada · missao · transforma · cadeira */
var CADEIRA = { itens: [
  { alvo: 'Ask me, delicately, about my salary.', dica: 'I was wondering, if you don’t mind me asking, whether teaching pays well?', resp: 'Ha! It would appear that it pays… enough.' },
  { alvo: 'Ask me to change our class time, diplomatically.', dica: 'I was wondering whether we might move our class to Thursday?', resp: 'That might be possible. Let me check.' },
  { alvo: 'Tell me some bad news about the homework, with empathy.', dica: 'I’m afraid I haven’t finished the homework…', resp: 'Thank you for telling me. It’s essential that we find time.' },
  { alvo: 'Disagree with me: I say grammar is the most important thing.', dica: 'I take your point, but…', resp: 'Fair enough. You might be right!' },
  { alvo: 'Ask me about a mistake in my career, without blaming me.', dica: 'Were there ever times when mistakes were made?', resp: 'Of course. Mistakes were made, and I learned a lot.' }] };
