/* As regras do corretor da revisão What Is the Test?. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b(sorry for my english)\b/gi, m, 1, "In the test, never apologize: just answer."));
  return out;
};
