/* As regras do corretor desta aula (nível 1): still / already / not … yet, e o lugar de cada uma. A aula e a lição de casa Live usam este arquivo. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b(?:not|n't)\s+(already)\b/g, m, 1, 'A no never takes already: not … yet.'));
  out = out.concat(A(/\b(?:is|are|am|isn't|aren't|do|does|don't|doesn't)\s+\w+(?:\s+\w+)?\s+(already)\s*\?/g, m, 1, 'In a question you are waiting: yet. Is he home yet?'));
  out = out.concat(A(/\b(?:i|you|we|they|he|she|it)\s+(?:am|is|are|['’]m|['’]s|['’]re)\s+(?!not\b)[^.?!,]*\b(yet)\b/g, m, 1, 'A yes never takes yet. Use already.', function (x) { return !/\b(not|n't|never|no)\b/.test(x[0]); }));
  out = out.concat(A(/\b(yet)\s+not\b|\bnot\s+(?=yet\s+\w)/g, m, 0, 'Yet goes at the end: not home yet.'));
  out = out.concat(A(/\b((?:is|are|am|['’]s|['’]re|['’]m)\s+not\s+still|does\s+not\s+still|doesn['’]t\s+still|do\s+not\s+still|don['’]t\s+still)\b/g, m, 1, 'Still goes in front of the not: he is still not home.'));
  out = out.concat(A(/\b(still)\s*[.!]?\s*$/g, m, 1, 'Still never sits at the end. Put it in the middle.'));
  out = out.concat(A(/\b(?:know|knows|have|has|want|wants|read|reads|like|likes)\s+(already|still)\b/g, m, 1, 'With a normal verb, the word goes in front of it: he already knows.'));
  return out;
};
