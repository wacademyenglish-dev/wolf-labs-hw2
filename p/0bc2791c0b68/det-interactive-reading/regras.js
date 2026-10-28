/* As regras do corretor da revisão Interactive Reading. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b(lend (?:a|the) book from)\b/gi, m, 1, "You borrow FROM the library; the library lends TO you."));
  return out;
};
