/* As regras do corretor desta aula (nível 3): past continuous de fundo (was/were + -ing) e o evento no past simple; while + a ação longa; a pergunta. A aula e a lição de casa Live usam este arquivo. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b(?:i|he|she|it|you|we|they|ana|someone|somebody|the \w+)\s+(?:was|were|wasn't|weren't)\s+(walk|drive|sit|look|write|sleep|laugh|play|wait|watch|read|cook|talk|listen|rain|fall|hold|try|turn)\b/g, m, 1, 'The long track needs -ing: was walking, were sitting.'));
  out = out.concat(A(/\b(?:you|we|they)\s+(was)\s+\w+ing\b/g, m, 1, 'you / we / they: were.'));
  out = out.concat(A(/\b(?:i|he|she|it)\s+(were)\s+\w+ing\b/g, m, 1, 'I / he / she / it: was.'));
  out = out.concat(A(/\b(while\s+(?:the\s+)?\w+\s+(?:stopped|knocked|opened|came|arrived|started|rang|called|heard|found|turned|broke|fell))\b/g, m, 1, 'While goes with the long track: while we were driving. The short event takes when.'));
  out = out.concat(A(/(?:^|[.!?])\s*((?:what|where|who)\s+(?:you|he|she|they|we|i)\s+(?:was|were))\b/g, m, 1, 'A question: the helper jumps first. What were you doing?'));
  out = out.concat(A(/\b(did\s+(?:you|he|she|they|we|i)\s+\w+ing)\b/g, m, 1, 'With did, the plain verb: What did you do?'));
  out = out.concat(A(/\b(it rained)\s+when\b/g, m, 1, 'The background was already there: it was raining when…'));
  return out;
};
