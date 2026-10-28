/* As regras do corretor da revisão First Contact. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b(make an exam|make the exam)\b/gi, m, 1, "In English: examine you / do an examination."));
  out = out.concat(A(/\b(more or less)\b/gi, m, 1, "More natural: about ten minutes."));
  return out;
};
