/* As regras do corretor desta aula (nível 1): like / love / hate + -ing, like it / them, doesn't like. A aula e a lição de casa Live usam este arquivo. */
var VB = '(?:watch|cook|run|play|swim|talk|wait|dance|read|walk|go|eat|drink|sing|travel|study|work|sleep|write|listen|drive|take|get|ride|shop|clean|wash)';
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(new RegExp("\\b(?:like|likes|love|loves|hate|hates|enjoy|enjoys)\\s+(" + VB + ")\\b(?!\\s+(?:it|them)\\b)", 'g'), m, 1, 'After like, love, hate: the -ING form. I like watching.'));
  out = out.concat(A(/\b(?:like|likes|love|loves|hate|hates)\s+(of)\b/g, m, 1, 'No OF after like: I like cooking.'));
  out = out.concat(A(/\b(?:yes|no),?\s+(?:i|you|we|they|he|she)\s+(?:like|love|likes|loves|don't like|doesn't like)\s*([.!]|$)/g, m, 1, 'Say what: Yes, I like it.'));
  out = out.concat(A(/\b(?:he|she|it)\s+(don't like|don't love)\b/g, m, 1, 'She: DOESN’T like.'));
  out = out.concat(A(/\b(?:doesn't|does not)\s+(likes|loves|hates)\b/g, m, 1, 'One S only: she doesn’t like.'));
  out = out.concat(A(/\b(runing|swiming|danceing|writeing|takeing|shoping|geting|siting)\b/g, m, 1, 'Spelling: running, swimming, dancing, writing.'));
  return out;
};
