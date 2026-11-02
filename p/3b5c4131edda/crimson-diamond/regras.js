/* As regras do corretor desta aula (nível 2): past continuous — was/were + -ing; ordem da pergunta; was × were. A aula e a lição de casa Live usam este arquivo. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b(?:i|he|she|it|you|we|they)\s+(?:was|were|wasn't|weren't)\s+(sleep|work|watch|walk|talk|read|cook|drive|eat|drink|study|play|listen|run|look|wait|clean|wash|make|get|go|do)\b/g, m, 1, 'The second piece: -ing (sleeping, working).'));
  out = out.concat(A(/\b((?:what|where|who|why|how)\s+(?:you|he|she|they|we|i)\s+(?:was|were))\b/g, m, 1, 'A question: the helper jumps first. What were you doing?'));
  out = out.concat(A(/\b(?:he|she|it|i)\s+(were)\s+\w+ing\b/g, m, 1, 'he / she / I: was.'));
  out = out.concat(A(/\b(?:you|we|they)\s+(was)\s+\w+ing\b/g, m, 1, 'you / we / they: were.'));
  out = out.concat(A(/(?:^|[.!?]\s*)((?:i|he|she|they|we|you)\s+(?:not\s+)?(?:working|sleeping|watching|walking|talking|reading|cooking|driving|eating|studying|playing|running|waiting))\b/g, m, 1, 'The first piece: was / were (I was working).'));
  return out;
};
