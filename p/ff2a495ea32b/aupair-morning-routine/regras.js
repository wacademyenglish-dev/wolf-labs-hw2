/* As regras do corretor da revisão Morning Routine. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b(he|she) don[’']t\b/gi, m, 1, "he / she doesn’t"));
  out = out.concat(A(/\b(hurry up!)/gi, m, 1, "Kinder: We have five minutes. Backpack on, please!"));
  return out;
};
