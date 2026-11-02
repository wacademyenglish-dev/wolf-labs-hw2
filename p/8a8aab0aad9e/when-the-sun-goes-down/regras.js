/* As regras do corretor desta aula (nível 3): zero conditional. Sem -s com he / she / it / the sun / someone / everybody depois de if / when, will depois de if / when, passado no if de uma regra (if you opened, they come), -s com they / you, don't can, contínuo numa regra (is staying), you doesn't, not sem don't, What does happen. O corretor separa as frases com espaço na frente. A aula e a lição de casa Live usam este arquivo. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b((?:if|when|as soon as) (?:the sun|it|he|she|someone|somebody|everybody|everyone|the road|my \w+) (?:go|get|leave|come|open|break|rain|stay|bring|do|have|make|want|need|feel))\b/g, m, 1, 'He / she / it / the sun / someone: verb + s (goes, gets, leaves).'));
  out = out.concat(A(/,\s*((?:everybody|everyone|the road|the sun|it|he|she|someone|the town|my \w+) (?:stay|bring|go|get|come|feel|make|take))\b/g, m, 1, 'He / she / it / everybody: verb + s (stays, brings).'));
  out = out.concat(A(/\b((?:if|when|as soon as) (?:\w+ ){1,2}?(?:will|'ll) \w+)/g, m, 1, 'A rule that is always true: if / when + present. No will.', function (x) { return !/(?:know|wonder|ask|asked|sure|idea) $/.test(x.input.slice(0, x.index)); }));
  out = out.concat(A(/\b(if (?:you|they|we|i|someone) (?:opened|broke|left|hung|went|came|got|did|had|drank)\b[^,]*, (?:\w+ ){0,2}?(?:come|comes|get|gets|can't|bring|brings|is|are|feel|stay|stays))\b/g, m, 1, 'A rule that is always true: present on both sides.'));
  out = out.concat(A(/\b((?:when|if) (?:i|you|we|they) (?:get|come|go|arrive|open|wake) [^,]*, (?:i|you|we|they) (?:locked|took|went|stayed|felt|got|made|had|did|ate|drank))\b/g, m, 1, 'A rule that is always true: present on both sides.'));
  out = out.concat(A(/\b((?:they|you|we|i|the creatures|people) (?:comes|gets|goes|breaks|opens|stays|brings|takes|feels))\b/g, m, 1, 'Check the -s: they come, you break.'));
  out = out.concat(A(/\b((?:don't|doesn't) can)\b/g, m, 1, 'The negative of can: can’t.'));
  out = out.concat(A(/,\s*((?:everybody|everyone|he|she|it|they|we|you|i) (?:is|are|am) (?:staying|coming|going|getting))\b/g, m, 1, 'A rule, always true: simple present (stays).'));
  out = out.concat(A(/\b((?:if|when) you doesn't)\b/g, m, 1, 'You: don’t (if you don’t nail).'));
  out = out.concat(A(/\b((?:if|when) (?:you|i|we|they|he|she|it) not \w+)/g, m, 1, 'The negative: don’t / doesn’t + verb.'));
  out = out.concat(A(/^\s*(what does happen)\b/g, m, 1, 'What is the subject: What happens…? (no does)'));
  return out;
};
