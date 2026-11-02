/* As regras do corretor desta aula (nível 2): who / that / where; nunca what como relativo; place where; who para gente; where sem there no fim. A aula e a lição de casa Live usam este arquivo. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b(?:the|a|an|this|my|your|his|her)\s+(?:book|thing|gift|movie|film|story|song|series|game|place|bag|phone|car|house)\s+(what)\s+(?:i|you|he|she|we|they|my|your|his|her|somebody)\b/g, m, 1, 'WHAT doesn’t join a noun: the book THAT I keep.'));
  out = out.concat(A(/\b(?:the|a)\s+(?:place|city|town|house|café|cafe|street|station|room|school|restaurant|shop|country|park)\s+(that|which)\s+(?:i|you|he|she|we|they)\s+(?:live|lived|met|work|worked|studied|study|grew up|said goodbye|go|went)\b(?!\s+(?:in|at|to|from)\b)/g, m, 1, 'A place where something happens: WHERE.'));
  out = out.concat(A(/\b(?:man|woman|person|boy|girl|friend|teacher|writer|people|guy|lady|doctor)\s+(which)\b/g, m, 1, 'People take WHO.'));
  out = out.concat(A(/\bwhere\s+[^.,!?]+\b(there)\s*(?:[.,!?]|$)/g, m, 1, 'WHERE already means there.'));
  return out;
};
