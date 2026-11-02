/* As regras do corretor desta aula (nível 2): should / shouldn't. should / shouldn't + to, shoulds, should + verbo com -s, should + passado, should + -ing, don't / doesn't / didn't should, Do I should…?, pergunta sem inversão (I should share…? / We should order…?). O corretor separa as frases com espaço na frente. A aula e a lição de casa Live usam este arquivo. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b((?:should|shouldn't|shouldn’t|should not) to \w+)/g, m, 1, 'After should / shouldn’t: no to.'));
  out = out.concat(A(/\b(shoulds)\b/g, m, 1, 'Should never changes: he should.'));
  out = out.concat(A(/\b((?:should|shouldn't|shouldn’t|should not) (?:takes|gives|puts|shares|eats|makes|goes|relaxes|orders|shouts|stops|asks|says|finishes|tells|calls|talks|watches|has|does|is))\b/g, m, 1, 'After should: the base verb, no -s. should take.'));
  out = out.concat(A(/\b((?:should|shouldn't|shouldn’t|should not) (?:took|gave|put on|shared|ate|made|went|relaxed|ordered|shouted|stopped|asked|said|finished|told|called|talked|watched|had|did|was|were))\b/g, m, 1, 'After should: the base verb. should give.'));
  out = out.concat(A(/\b((?:should|shouldn't|shouldn’t) \w+ing)\b/g, m, 1, 'After should: the base verb (no -ing).', function (x) { return !/\b(?:should|shouldn't|shouldn’t) (?:bring|sing|ring|swing|bring)\b/.test(x[1]); }));
  out = out.concat(A(/\b((?:don't|don’t|doesn't|doesn’t|didn't|didn’t|do not|does not) should)\b/g, m, 1, 'The negative is shouldn’t.'));
  out = out.concat(A(/\b((?:do|does|did) (?:i|you|we|they|he|she|joey|ross|monica) should)\b/g, m, 1, 'Questions: Should I…? (no do).'));
  out = out.concat(A(/^\s*((?:i|you|we|they|he|she|joey|ross|monica|rachel|phoebe|chandler) should [^?.!]*\?)/g, m, 1, 'Questions: Should comes first. Should we…?'));
  return out;
};
