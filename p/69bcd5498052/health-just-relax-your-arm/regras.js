/* As regras do corretor da revisão Just Relax Your Arm. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b(don[’']t move)\b/gi, m, 1, "Gentler: Try to keep still for me."));
  out = out.concat(A(/\b(stay quiet)\b/gi, m, 1, "Keep still (not moving) / keep quiet (not talking)."));
  return out;
};
