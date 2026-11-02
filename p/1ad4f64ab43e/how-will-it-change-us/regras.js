/* As regras do corretor desta aula (nível 2): will / won't. will / won't + to, will + verbo com -s, will + passado, will + -ing, wills, don't / doesn't will, no will, Do they will…?, pergunta sem inversão (They will come?), there will have / there will are, verbo antes de will (people buy will). O corretor separa as frases com espaço na frente. A aula e a lição de casa Live usam este arquivo. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b((?:will|won't|won’t|will not) to \w+)/g, m, 1, 'After will / won’t: no to.'));
  out = out.concat(A(/\b(wills)\b/g, m, 1, 'Will never changes: she will.'));
  out = out.concat(A(/\b((?:will|won't|won’t|will not) (?:goes|changes|closes|comes|believes|knows|buys|says|makes|stays|lives|gets|happens|travels|speaks|studies|works|does|has|is))\b/g, m, 1, 'After will: the base verb, no -s.'));
  out = out.concat(A(/\b((?:will|won't|won’t|will not) (?:went|changed|closed|came|believed|knew|bought|said|made|stayed|lived|got|happened|traveled|travelled|spoke|studied|worked|did|had|was|were))\b/g, m, 1, 'After will / won’t: the base verb.'));
  out = out.concat(A(/\b((?:will|won't|won’t) \w+ing)\b/g, m, 1, 'After will: the base verb (no -ing).', function (x) { return !/\b(?:will|won't|won’t) (?:bring|sing|ring|swing)\b/.test(x[1]); }));
  out = out.concat(A(/\b((?:don't|don’t|doesn't|doesn’t|didn't|didn’t|do not|does not|no) will)\b/g, m, 1, 'The negative is won’t (will not).'));
  out = out.concat(A(/\b((?:do|does|did) (?:i|you|we|they|he|she|it|people|the aliens|aliens) will)\b/g, m, 1, 'Questions: Will they…? (no do).'));
  out = out.concat(A(/^\s*((?:i|you|we|they|he|she|it|people|the aliens|aliens|schools) will [^?.!]*\?)/g, m, 1, 'Questions: Will comes first. Will they…?'));
  out = out.concat(A(/\b(there (?:will have|will are|will is|won't have|won’t have))\b/g, m, 1, 'There will be / there won’t be.'));
  out = out.concat(A(/\b((?:people|they|we|i|you) (?:buy|go|come|know|change|stay) will)\b/g, m, 1, 'Will goes before the verb: people will buy.'));
  return out;
};
