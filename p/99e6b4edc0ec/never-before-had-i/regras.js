/* As regras do corretor da revisão Never Before Had I. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b(never before (?:I|we|she|he|they) had)\b/gi, m, 1, "Inversion: Never before had I…"));
  out = out.concat(A(/\b(not once (?:I|we|she|he|they|anybody|anyone|nobody) )/gi, m, 1, "Inversion: Not once did anybody…"));
  out = out.concat(A(/\b(little (?:I|we|she|he|they) (?:knew|know))\b/gi, m, 1, "Inversion: Little did I know…"));
  out = out.concat(A(/\b(hardly had [^.]{3,40} then)\b/gi, m, 1, "Hardly had… WHEN…"));
  out = out.concat(A(/\b(only later (?:I|we|she|he|they) )/gi, m, 1, "Inversion: Only later did I…"));
  return out;
};
