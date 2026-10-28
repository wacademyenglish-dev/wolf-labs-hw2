/* As regras do corretor da revisão Tell Me About a Time. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b(was work)\b/gi, m, 1, "Past continuous: was working."));
  return out;
};
