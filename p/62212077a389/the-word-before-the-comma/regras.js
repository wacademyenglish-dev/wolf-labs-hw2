/* As regras do corretor desta aula (nível 3): first conditional. Sem WILL depois de if / when / unless / as soon as / until / in case; unless sem dupla negação; will + verbo puro. A aula e a lição de casa Live usam este arquivo. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/(?<!\b(?:know|wonder|sure|ask|asked|idea|tell me|see|check) )\b((?:if|when|unless|as soon as|until|in case|before|after) (?:it|i|you|he|she|we|they|there|the \w+|everyone|somebody|someone) (?:will|'ll|’ll|won't|won’t) \w+)/g, m, 1, 'After the door word: present, no WILL. If it rains…'));
  out = out.concat(A(/\b(unless (?:it|i|you|he|she|we|they|there|the \w+) (?:doesn't|doesn’t|don't|don’t|isn't|isn’t|aren't|aren’t))\b/g, m, 1, 'unless is already negative: unless it rains.'));
  out = out.concat(A(/\b((?:will|'ll|’ll|won't|won’t)(?: still| also| just)? to \w+)/g, m, 1, 'will + the plain verb, no to.'));
  out = out.concat(A(/\b((?:will|'ll|’ll) (?:went|ate|stayed|ordered|watched|moved|started|visited|wore|took|gone|watching|having|going))\b/g, m, 1, 'will + the plain verb: I’ll go, we’ll stay.'));
  out = out.concat(A(/\b(if (?:she|he|it) (?:call|rain|get|come|see|want|go|miss|study|work))\b(?!\w)/g, m, 1, 'she / he / it: the -S. If she calls…'));
  return out;
};
