/* As regras do corretor da revisão Not Until Midnight. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b(not (?:until|once|since) [^,.]*?\b(?:I|we|they|he|she|it|you) (?:arrived|stopped|realized|realised|understood|looked|said|knew|saw|ate|went|has|have|had))\b/gi, m, 1, "After Not until / Not once / Not since: did / has + subject (inversion)."));
  out = out.concat(A(/\b(nowhere (?:I|we|they|he|she|you) (?:have|has|had|did))\b/gi, m, 1, "Nowhere HAVE I seen…"));
  return out;
};
