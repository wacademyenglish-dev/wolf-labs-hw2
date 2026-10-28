/* As regras do corretor da revisão Behind the Wheel. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b(should to)\b/gi, m, 1, "should + verb (no “to”)."));
  out = out.concat(A(/\b(don[’']t should)\b/gi, m, 1, "shouldn’t"));
  return out;
};
