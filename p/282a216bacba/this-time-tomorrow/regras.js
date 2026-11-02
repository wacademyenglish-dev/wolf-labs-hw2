/* As regras do corretor desta aula (nível 3): future continuous. will + -ing sem be (will reading), will be + verbo base (will be read), won't + -ing, pergunta sem inversão (You will be using…?), verbo de estado no contínuo (will be knowing), presente com this time tomorrow. O corretor separa as frases com espaço na frente. A aula e a lição de casa Live usam este arquivo. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  var BASE = '(?:read|watch|work|sleep|wait|use|talk|think|drive|eat|study|play|run|sit|make|do|have|go|live|teach|drink|cook|travel|fly|write|listen|look|wear|stay)';
  out = out.concat(A(/\b((?:will|won't|'ll) (?!be\b)\w+ing)\b/g, m, 1, 'Don’t forget be: will be + -ing.', function (x) { return !/\b(?:will|won't|'ll) (?:bring|sing|ring|swing|thing)$/.test(x[1]); }));
  out = out.concat(A(new RegExp("\\b((?:will|won't|'ll) be " + BASE + ")\\b(?!ing)", 'g'), m, 1, 'After will be: verb-ing (will be reading).'));
  out = out.concat(A(/\b((?:will|won't|'ll) be (?:knowing|believing|wanting|loving|understanding|liking|needing|owning|hating))\b/g, m, 1, 'Know, believe, love, want: no -ing. will know.'));
  out = out.concat(A(/^\s*((?:you|he|she|they|we) will be \w+ing\b[^?]*\?)/g, m, 1, 'The question: Will you be using…? (will before the subject)'));
  out = out.concat(A(/^\s*(will (?:you|he|she|they|we) \w+ing)\b/g, m, 1, 'The question: Will you be using…?'));
  out = out.concat(A(/\b((?:i'm|i am|you are|he is|she is|it is|we are|they are|is|are) \w+ing\b[^.!?]*this time tomorrow)/g, m, 1, 'It is tomorrow: will be + -ing.'));
  out = out.concat(A(/(this time tomorrow,? (?:i|you|he|she|it|we|they|the \w+|people|everybody) (?:am|is|are) \w+ing)\b/g, m, 1, 'It is tomorrow: will be + -ing.'));
  return out;
};
