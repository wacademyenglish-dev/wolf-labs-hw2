/* As regras do corretor desta aula (nível 2): should + verbo puro (sem to, sem s, sem do); What should I do? pedindo conselho. A aula e a lição de casa Live usam este arquivo. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b((?:should|shouldn't|should not)\s+to)\s+[a-z]+/g, m, 1, 'No TO after should: you should go.'));
  out = out.concat(A(/\b(shoulds)\b/g, m, 1, 'Should never takes S: she should.'));
  out = out.concat(A(/\b((?:don't|doesn't|do not|does not)\s+should)\b/g, m, 1, 'No DO with should: you shouldn’t.'));
  out = out.concat(A(/\b(?:should|shouldn't)\s+(\w+(?:s|ing))\b/g, m, 1, 'The verb after should never changes: should sleep.', function (x) { return !/^(?:always|never|just|also|really|still|probably|this|tennis|chess|bus|news|yes|us|his|its|class|glass|dress|pass|guess|kiss|miss|cross|bless|less|discuss|focus|bring|sing)$/.test(x[1]); }));
  out = out.concat(A(/(?:^|[.!?,])\s*((?:what|where|who|when|how)\s+(?:i|you|we|he|she|they)\s+should)\b(?=[^.!]*\?)/g, m, 1, 'A question: should jumps first. What should I do?'));
  return out;
};
