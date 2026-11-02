/* As regras do corretor da REVISÃO A1 · UNIDADE 3: have / has (she have, it have), the X of person,
   resposta curta com got, it’s my no fim (mine). */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b((?:he|she|it) have)\b/gi, m, 1, 'he / she / it HAS. It has big ears.'));
  out = out.concat(A(/\b(I has|you has|we has|they has)\b/gi, m, 1, 'I / you / we / they HAVE.'));
  out = out.concat(A(/\b(the (?:dog|cat|car|house|name|phone|bag|book|room) of (?:my|[A-Z][a-z]+))\b/g, m, 1, 'Use ’s: Maria’s dog, my brother’s car.'));
  out = out.concat(A(/\b(yes, (?:I|we) have got)\b/gi, m, 1, 'Short answer: Yes, I have.'));
  out = out.concat(A(/\b(it’s my\.|it's my\.|it is my\.)/gi, m, 1, 'At the end: mine. It’s mine.'));
  return out;
};