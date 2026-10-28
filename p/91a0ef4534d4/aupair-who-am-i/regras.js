/* As regras do corretor da revisão Who Am I?. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b(I have \d+ years)\b/gi, m, 1, "Age: I am 22 (years old)."));
  out = out.concat(A(/\b(can to)\b/gi, m, 1, "can + verb (no “to”)."));
  out = out.concat(A(/\b(I love (?:play|cook|read|dance|swim|draw))\b/gi, m, 1, "love + -ing: I love playing."));
  return out;
};
