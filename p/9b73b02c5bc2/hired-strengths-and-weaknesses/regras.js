/* As regras do corretor da revisão Strengths and Weaknesses. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b(working in my)\b/gi, m, 1, "Improving something: working ON my…"));
  out = out.concat(A(/\b(organizated)\b/gi, m, 1, "The word is organized."));
  return out;
};
