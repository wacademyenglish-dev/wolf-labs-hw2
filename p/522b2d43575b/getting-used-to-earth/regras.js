/* As regras do corretor desta aula (nível 4): used to / be used to / get used to. was used to + verbo base (hábito antigo), use sem -d depois de be / get, be / get used to + verbo base, get used with, Do you used to, didn't used to, doesn't used to. O corretor separa as frases com espaço na frente. A aula e a lição de casa Live usam este arquivo. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b((?:was|were|wasn't|weren't) used to (?:live|have|go|play|eat|watch|be|work|see|sleep|walk|visit|drink|take))\b/g, m, 1, 'A past habit, now over: used to + verb (used to live). No was.'));
  out = out.concat(A(/\b((?:is|are|am|was|were|be|been|being|get|gets|getting|got|isn't|aren't|wasn't|'m|'s|'re) use to)\b/g, m, 1, 'Used, with -d: be used to, get used to.'));
  out = out.concat(A(/\b((?:is|are|am|isn't|aren't|'m|'s|'re|be|been|get|gets|getting|got) used to (?:live|eat|fly|wake|work|drive|speak|sleep|take|be|have|do|go|see|hear|think|call|pay|answer))\b/g, m, 1, 'After be / get used to: -ing or a noun (used to eating, used to flying).'));
  out = out.concat(A(/\b(used with)\b/g, m, 1, 'Get used TO something.'));
  out = out.concat(A(/^\s*((?:do|does) (?:you|he|she|they|we|i) used to)\b/g, m, 1, 'Now: Are you used to…? The past habit: Did you use to…?'));
  out = out.concat(A(/\b((?:didn't|did not|did (?:you|he|she|they|we|i)) used to)\b/g, m, 1, 'After did / didn’t: use to (no -d).'));
  out = out.concat(A(/\b((?:doesn't|don't|does not|do not) used to)\b/g, m, 1, 'Normal now: isn’t used to / aren’t used to.'));
  out = out.concat(A(/\b((?:krypto|she|he|it|they|we|i|clark|kara) used to (?:flying|living|eating|being|working|waking))\b/g, m, 1, 'Normal now: be used to + -ing (Krypto is used to flying).'));
  out = out.concat(A(/\b((?:she|he|i|they|we|you|kara|clark) use to \w+)/g, m, 1, 'A past habit: used to, with -d (she used to live).', function (x) { return !/(?:did|didn't|not) $/.test(x.input.slice(0, x.index)); }));
  out = out.concat(A(/\b((?:are|is|am|were|was) (?:you|he|she|they|we|i) used to (?:live|eat|fly|wake|work|drive|speak|sleep|take|be|have|do|go))\b/g, m, 1, 'After be used to: -ing (Are you used to living…?).'));
  return out;
};
