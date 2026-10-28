/* As regras do corretor da revisão Before You Fly. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b(the passport (?:in|into) the (?:big )?suitcase)\b/gi, m, 1, "The passport stays with you, in the carry-on."));
  return out;
};
