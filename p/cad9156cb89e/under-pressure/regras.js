/* As regras do corretor desta aula (nível 3): causa, efeito e propósito. "because of" + frase ("because of I was nervous"); "because" + coisa sem verbo ("because the traffic"); "leads to / results in" + verbo puro ("leads to lose"); "for" + verbo de propósito ("for learn", "for not fail"); "in order to don't"; "so that" + verbo sem sujeito. A aula e a lição de casa Live usam este arquivo. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b(because of (?:i|you|he|she|we|they|it|there) (?:was|were|am|is|are|had|have|did|didn't|didn’t|couldn't|couldn’t|can't|can’t|felt|got|thought|lost|forgot)\b)/g, m, 1, 'A sentence after: BECAUSE. because I was nervous.'));
  out = out.concat(A(/\b(because (?:the|my|his|her|their|our|a|one) (?:traffic|noise|clock|time|rain|crowd|pressure|weather|man|voice|score|exam|test|camera))\b(?! (?:was|were|is|are|had|has|didn't|didn’t|wasn't|wasn’t|kept|made|went|got|started|stopped|took|felt|seemed))/g, m, 1, 'A thing after: BECAUSE OF. because of the traffic.'));
  out = out.concat(A(/\b((?:lead|leads|led|leading|result|results|resulted) (?:to|in) (?:lose|make|forget|fail|win|miss|think|feel|stop|panic|freeze|get|go|take|do|be))\b/g, m, 1, 'After LEADS TO / RESULTS IN: a thing or -ING. leads to losing.'));
  out = out.concat(A(/\b(for (?:not )?(?:learn|fail|win|practice|study|improve|relax|stop|save|help|calm|pass|get|make|be|do|speak|understand|remember))\b/g, m, 1, 'A verb takes TO, not FOR: to learn · in order not to fail.'));
  out = out.concat(A(/\b(in order to (?:don't|don’t|not to|doesn't|doesn’t)\b)/g, m, 1, 'The negative: in order NOT to fail.'));
  out = out.concat(A(/\b(so that (?:can|could|will|would|may)\b)/g, m, 1, 'SO THAT + a subject: so that they can.'));
  return out;
};
