/* ============================================================
   REVIEW · B2 · UNIT 3 · THE JURY ROOM · LIVE CLASS  15/10/2026
   Só os dados: o motor é o kit/revisao/revisao.js. Mecânicas: dado · missao · erros · cadeira · pode.
   Unidade 3 (Condicionais: o que não aconteceu): third conditional; mixed conditionals (if I had
   moved, I would be there now / if I weren’t so shy, I would have asked); should have, could have.
   A missão: o caso do bolo de casamento que chegou três horas atrasado. O aluno é o presidente do
   júri, ouve três testemunhas (a confeiteira, o motorista, o estagiário) e dá o veredito.
   ============================================================ */
var REV = { nivel: 'B2', unidade: 3, titulo: ['The Jury', 'Room'], tema: 'The past that didn’t happen', placa: 'CASE 2291 · THE LATE CAKE', lugarConversa: 'THE COURTHOUSE CORRIDOR', cor: '#a8b8e8', cor2: '#d3dcf4',
  sub: 'Unit 3 review. A wedding cake arrived three hours late, and the couple went to court. You lead the jury. Three witnesses. Who should have done what?' };
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'dado', est: 'f', min: 8, img: 'conversa', rot: 'I · The Die', t: 'Roll the die. The number chooses.', p: 'Your teacher rolls. Do the challenge out loud, from memory.' },
  { k: 'missao', est: 'o', min: 15, img: 'capa', rot: 'II · The Witnesses', t: 'Three witnesses. One very late cake.', p: 'Ask each witness five questions. Your teacher is the witness. Then give the jury’s verdict.' },
  { k: 'erros', est: 'f', min: 7, img: 'conversa', rot: 'III · Find the Mistakes', t: 'Something is wrong here.', p: 'Read it. Find the mistakes, say the right form, then tap.' },
  { k: 'cadeira', est: 'o', min: 8, img: 'capa', rot: 'IV · The Hot Seat', t: 'Now YOU ask the questions.', p: 'Your teacher sits in the hot seat. Ask, listen, react.' },
  { k: 'gx', est: 'f', min: 4, img: 'conversa', rot: 'V · The Jury Rule', t: 'Four lines from the jury room. You find the rule.', p: 'Read the four sentences out loud. Look at the lit words. Choose the rule. Then say your own.' },
  { k: 'pode', est: 'f', min: 4, img: 'capa', rot: 'VI · I Can', t: 'Unit 3: what can you do now?', p: 'Read each line out loud. Tap the ones you can do. Your teacher confirms.' }
];

var PORTAS = [
  { k: 'IF I HAD…', tema: 'third conditional', t: 'A small decision that changed your day last week. What would have happened otherwise?', ex: 'If I hadn’t taken an umbrella, I would have got soaked on the way home.', trap: 'if + had done, would have done. No would in the if part.' },
  { k: 'THEN → NOW', tema: 'mixed conditional: past cause, present result', t: 'A choice from years ago. How would your life be different now?', ex: 'If I had moved to Lisbon in 2015, I would be speaking Portuguese with an accent now!', trap: 'Past cause (had done) + present result (would be).' },
  { k: 'NOW → THEN', tema: 'mixed conditional: present fact, past result', t: 'Something about your personality. What would you have done differently because of it?', ex: 'If I weren’t so shy, I would have spoken at my sister’s wedding.', trap: 'Present fact (were / weren’t) + past result (would have done).' },
  { k: 'SHOULD HAVE', tema: 'should have: criticism and regret', t: 'Three things you should have done this year, and one you shouldn’t have done.', ex: 'I should have slept more, saved more and called my grandmother more. I shouldn’t have bought that sofa.', trap: 'should have + participle, not “should had”.' },
  { k: 'COULD HAVE', tema: 'could have: missed possibilities', t: 'Someone didn’t ask you for help. What could they have done?', ex: 'You could have called me! I could have driven you there.', trap: 'A possibility nobody used: could have + participle.' },
  { k: 'WOULDN’T BE HERE', tema: 'turning points', t: 'Tell one turning point in your life with “If …, I wouldn’t be … now.”', ex: 'If I hadn’t met my English teacher, I wouldn’t be doing this job now.', trap: 'If it hadn’t happened (past), I wouldn’t be (now).' }
];

var MISSAO = { pede: 'CASE 2291 · ASK FIVE QUESTIONS', quem: 'witness', depois: 'Give the verdict',
  campos: [
    { c: 'erro', r: 'WHAT WENT WRONG', q: 'In your own words, what went wrong that day?', f: 'What went wrong?' },
    { c: 'se', r: 'IF YOU HAD…', q: 'What would have happened if you had done something differently?', f: 'If you had…?' },
    { c: 'devia', r: 'SHOULD HAVE', q: 'What should you have done?', f: 'Should have…?' },
    { c: 'outro', r: 'COULD HAVE', q: 'What could the others have done?', f: 'The others could have…?' },
    { c: 'agora', r: 'NOW', q: 'If none of this had happened, where would you be today?', f: 'Today, where?' }],
  itens: [
    { k: 'WITNESS 1', tag: 'THE BAKER', ele: 'She', veredito: 'The baker is not guilty. If she hadn’t been working all night, the cake wouldn’t exist at all! But she should have checked the address.', v: { erro: 'she finished the cake at 4 AM, so she was exhausted', se: 'if she had started a day earlier, the cake would have been ready on time', devia: 'checked the address on the order', outro: 'the driver could have called her', agora: 'on holiday in Bahia, if she weren’t so busy with the court' }, diz: '“I finished the cake at four in the morning. I was exhausted.” · “If I had started a day earlier, it would have been ready on time.” · “I should have checked the address on the order.” · “The driver could have called me!” · “Today? If I weren’t stuck in this court, I’d be on holiday in Bahia.”' },
    { k: 'WITNESS 2', tag: 'THE DRIVER', ele: 'He', veredito: 'The driver is partly guilty. He should have used the GPS. If he had called the bakery, he would have found the right church in ten minutes.', v: { erro: 'he went to the wrong church: there are two with the same name', se: 'if he had used the GPS, he would have arrived on time', devia: 'called the bakery when he was lost', outro: 'the intern could have written the full address', agora: 'still working at the bakery, if he hadn’t been fired' }, diz: '“I went to the wrong church. There are two with the same name!” · “If I had used the GPS, I would have arrived on time.” · “I should have called the bakery when I got lost.” · “The intern could have written the full address.” · “If they hadn’t fired me, I’d still be working there.”' },
    { k: 'WITNESS 3', tag: 'THE INTERN', ele: 'He', veredito: 'The intern made the first mistake: he wrote only half the address. If he weren’t so new, he would have asked. Nobody should have left him alone with the orders.', v: { erro: 'he wrote only the name of the church, not the street', se: 'if he had written the street, the driver wouldn’t have got lost', devia: 'asked his boss', outro: 'the baker could have trained him better', agora: 'more careful today: he wouldn’t be so careful if this hadn’t happened' }, diz: '“I wrote only the name of the church. Not the street.” · “If I had written the street, the driver wouldn’t have got lost.” · “I should have asked my boss. I was too shy.” · “The baker could have trained me better. It was my second day!” · “If this hadn’t happened, I wouldn’t be so careful today.”' }],
  relato: { titulo: 'THE COURT · THE JURY’S VERDICT',
    pede: function (x) { return 'Has the jury reached a verdict about ' + x.tag.toLowerCase() + '?'; },
    chips: function (x) { return [x.ele + ' is (not) guilty.', 'If ' + x.ele.toLowerCase() + ' had …, … would have …', x.ele + ' should have …', 'Someone could have …', 'If …, ' + x.ele.toLowerCase() + ' would be … now.']; },
    modelo: function (x) { return x.veredito; } },
  nao: { would: '“If he would have called…” → If he HAD called…', shouldhad: '“She should had checked” → she should HAVE checked.', mixed: '“If I had moved, I would have been there now” → I WOULD BE there now.' },
  fim: 'Case closed: the couple got a free cake for their first anniversary! had done / would have done, mixed conditionals, should have and could have: all of Unit 3 in one courtroom.' };

var PODE = [
  'I can imagine a different past: If I had known, I would have come.',
  'I can connect a past cause to the present: If I had moved, I’d be there now.',
  'I can connect a present fact to the past: If I weren’t shy, I would have asked.',
  'I can criticize and regret: You should have called. I shouldn’t have said that.',
  'I can talk about missed chances: You could have asked me!'
];

/* MECÂNICAS VARIADAS */
/* B2 R3: dado · missao · erros · cadeira */
var ERROS = { tipo: 'nota', rot: 'THE COUPLE’S COMPLAINT · EXHIBIT A', partes: ['Our wedding was perfect until 7 PM. If the cake ', ['would have arrived', 'had arrived', 'No would after if.'], ' on time, we ', ['would cut', 'would have cut', 'The past: would have cut.'], ' it with our guests. The bakery ', ['should had', 'should have', 'should have + participle.'], ' checked the address. The driver ', ['could called', 'could have called', 'could have + participle.'], ' us! Honestly, if we ', ['didn’t choose', 'hadn’t chosen', 'The past that didn’t happen: hadn’t chosen.'], ' that bakery, we ', ['would have been', 'would be', 'The result now: would be.'], ' much happier today.'] };
var CADEIRA = { itens: [
  { alvo: 'Ask me about a decision that changed my life.', dica: 'What decision changed your life?', resp: 'Moving to Curitiba. If I hadn’t moved, I wouldn’t have met my wife.' },
  { alvo: 'Ask me what I should have done differently at school.', dica: 'What should you have done differently at school?', resp: 'I should have studied more math!' },
  { alvo: 'Ask me where I would be now if I had chosen another job.', dica: 'If you had chosen another job, where would you be now?', resp: 'I’d probably be a lawyer in São Paulo.' },
  { alvo: 'Ask me about something I could have done but didn’t.', dica: 'What could you have done, but didn’t?', resp: 'I could have lived in Canada. I said no.' },
  { alvo: 'Ask me about my personality and a past result.', dica: 'If you weren’t so…, would you have…?', resp: 'If I weren’t so stubborn, I would have listened to my dad.' }] };

/* 10/11/2026 · AS EXPLICAÇÕES (kit/formatos3.js) · G10 · uma cena curta nova (k: gx) antes de pode.
   Explicação 100% em inglês: see → notice → use (o aluno fala ou escreve uma frase dele no fim). */
var GX_EXPLICA = { formato: 'achaRegra', titulo: 'Four sentences. Find the rule yourself.', exemplos: ['If he <b>had called</b>, I <u>would have come</u>.', 'If she <b>had known</b>, she <u>would have left</u>.', 'If they <b>had checked</b> the oven, the cake <u>would have been</u> on time.', 'If we <b>hadn’t waited</b>, we <u>would have won</u>.'], pergunta: 'In the if part of the third conditional, we use …', opcoes: ['had + participle, never would', 'would have + participle', 'the past simple'], c: 0, nao: 'Not that one. Look at the lit words after if: is there a would?', regra: '<b>If + had + participle</b>, <b>would have + participle</b>: If he had called, I would have come. Never would in the if part.', uso: { p: 'Your turn. You are the jury president. Say what would have happened if the driver had left earlier.', molde: ['If the driver had …, the cake would have …', 'If the baker hadn’t …'], ex: 'If the driver had left earlier, the cake would have arrived on time.' } };
var R = R || {};
R.gx = function (c) { return cab(c) + FM.ex('gx_regra', GX_EXPLICA); };
