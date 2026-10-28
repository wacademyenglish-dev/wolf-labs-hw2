/* As regras do corretor da revisão Why Us?. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b(called my attention)\b/gi, m, 1, "In English: caught my attention / drew me to."));
  out = out.concat(A(/\b(i always was interested)\b/gi, m, 1, "I’ve always been interested in…"));
  return out;
};
