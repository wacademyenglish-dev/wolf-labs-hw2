/* As regras do corretor da revisão Plain English, Please. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b(did you understand\?)/gi, m, 1, "Teach-back: Can you tell me in your own words…?"));
  return out;
};
