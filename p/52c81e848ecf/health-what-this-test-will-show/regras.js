/* As regras do corretor da revisão What This Test Will Show. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b(did you understand\?)/gi, m, 1, "Kinder: Does that make sense?"));
  out = out.concat(A(/\b(will feel nothing)\b/gi, m, 1, "You won’t feel anything."));
  return out;
};
