/* As regras do corretor da revisão Speaking Sample. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b(two years ago,? I (?:start|move|decide|begin|have))\b/gi, m, 1, "A past story: started, moved, decided."));
  return out;
};
