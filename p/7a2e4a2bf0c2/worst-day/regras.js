/* As regras do corretor desta aula (nível 1): didn't + verbo puro, Did…?, wasn't, because / so. A aula e a lição de casa Live usam este arquivo. */
var PASSADOS = '(?:went|saw|took|had|woke|rang|came|ate|got|made|left|lost|found|bought|said|told|knew|thought|wrote|drove|ran|forgot|slept|missed|walked|called|played|watched|worked|liked|wanted|needed|arrived|checked|died|rained|opened|closed|paid|sent|met|gave|did)';
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(new RegExp("\\b(?:didn't|did not)\\s+(" + PASSADOS + ")\\b", 'g'), m, 1, 'The past is already in didn’t: the verb goes plain. didn’t go.'));
  out = out.concat(A(new RegExp("\\bdid\\s+(?:i|you|he|she|it|we|they|\\w+)\\s+(" + PASSADOS + ")\\b", 'g'), m, 1, 'One past only: Did you see?'));
  out = out.concat(A(/\b(didn't was|didn't were|didn't be|did not was)\b/g, m, 1, 'The verb be doesn’t use did: wasn’t, weren’t.'));
  out = out.concat(A(/\b(?:i|you|he|she|it|we|they)\s+(not)\s+(?:went|saw|took|had|go|see|take|have|ring|rang|wake)\b/g, m, 1, 'In the past, the no is didn’t: I didn’t go.'));
  out = out.concat(A(/\b(?:where|what|when|why|how)\s+(?:you|he|she|they|we|i)\s+(went|saw|did|took|go|see)\b/g, m, 1, 'Question word + did + subject: Where did you go?', function (x) { return !/\bdid\b/.test(x[0].split(' ')[0]); }));
  return out;
};
