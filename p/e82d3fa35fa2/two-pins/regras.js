/* As regras do corretor desta aula (nível 1): I'm from / I live in / I was born in, on my own, Where are you from? / Where do you live? A aula e a lição de casa Live usam este arquivo. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b(?:live|lives|living)\s+(from|at)\s+(?!home\b)[a-z]/g, m, 1, 'live takes in: I live in …'));
  out = out.concat(A(/\b(?:i|he|she|we|they)\s+(born)\s+in\b/g, m, 1, 'Born is in the past: I was born in …'));
  out = out.concat(A(/\b(?:i am|i'm|he is|she is|he's|she's)\s+(born)\b/g, m, 1, 'Born is in the past: I was born in …'));
  out = out.concat(A(/\b(borned)\b/g, m, 1, 'was born'));
  out = out.concat(A(/\b(?:was|were)\s+born\s+(from)\b/g, m, 1, 'born in a place: I was born in …'));
  out = out.concat(A(/\b(with my own)\b/g, m, 1, 'Alone: on my own.'));
  out = out.concat(A(/\bwhere\s+(do you from|you from|are you live|you live)\b/g, m, 1, 'Where are you from? / Where do you live?'));
  out = out.concat(A(/\b(?:he|she|my \w+)\s+(live)\s+in\b/g, m, 1, 'He / she lives in …'));
  return out;
};
