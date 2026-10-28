/* As regras do corretor da revisão My Case Study. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b(responsible to)\b/gi, m, 1, "responsible FOR + -ing / noun."));
  out = out.concat(A(/\b(if i did it again,? i will)\b/gi, m, 1, "Second conditional: If I did it again, I would…"));
  return out;
};
