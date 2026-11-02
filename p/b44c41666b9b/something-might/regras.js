/* As regras do corretor desta aula (nível 2): might / may + verbo puro; might not; can não é palpite; maybe + might dobrado. A aula e a lição de casa Live usam este arquivo. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b(?:it|this|that|he|she|they|somebody|someone)\s+(can be)\s+(?:a|an|the|my|your|his|her|our|their)\b/g, m, 1, 'For a guess about now: might be / may be.'));
  out = out.concat(A(/\b(mights|mays)\b/g, m, 1, 'might / may never change: no -s.'));
  out = out.concat(A(/\b(?:might|may)\s+(?:not\s+)?(is|are|was|being|wants|goes|has|to\s+\w+)\b/g, m, 1, 'After might / may: the base verb (be, want, go). No to.'));
  out = out.concat(A(/\b((?:might|may) (?:don't|doesn't|no))\b/g, m, 1, 'Negative: might not / may not.'));
  out = out.concat(A(/\b(not might|not may|no may|no might)\b/g, m, 1, 'Negative: might not / may not.'));
  out = out.concat(A(/\b(maybe\s+(?:\w+\s+){0,2}?(?:might|may))\b/g, m, 1, 'One is enough: It might be… or Maybe it’s…'));
  out = out.concat(A(/\bit (can rain|can snow)\b/g, m, 1, 'A guess about the weather: it might rain.'));
  return out;
};
