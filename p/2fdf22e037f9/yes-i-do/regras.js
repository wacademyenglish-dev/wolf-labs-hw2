/* As regras do corretor desta aula (nível 1): I like / I don't like, Do you like …?, respostas curtas com do. A aula e a lição de casa Live usam este arquivo. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b(?:yes|no),\s*i\s+((?:don't\s+)?like)\s*[.!]?\s*$/g, m, 1, 'Short answer: Yes, I do. / No, I don’t.'));
  out = out.concat(A(/\bi\s+(no|not)\s+like\b/g, m, 1, 'The no: I don’t like …'));
  out = out.concat(A(/\b(?:like|likes)\s+(of)\s+\w/g, m, 1, 'No of: I like soup.'));
  out = out.concat(A(/(?:^|[.!?]\s*)(you|they|he|she)\s+(?:like|likes)\s+[^.?!]*\?/g, m, 1, 'A question needs Do: Do you like …?'));
  out = out.concat(A(/\bdo\s+you\s+(likes)\b/g, m, 1, 'After do: like (no s).'));
  return out;
};
