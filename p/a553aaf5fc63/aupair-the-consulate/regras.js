/* As regras do corretor da revisão The Consulate. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b(the purpose of my trip is to do au pair)\b/gi, m, 1, "I’m going as an au pair / to work as an au pair."));
  return out;
};
