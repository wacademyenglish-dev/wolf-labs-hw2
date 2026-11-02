/* As regras do corretor da revisão The Embassy Dinner. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b(it is proven that)\b/gi, m, 1, "Hedge: the evidence suggests that…"));
  out = out.concat(A(/\b(not my problem)\b/gi, m, 1, "Diplomatic: I’m afraid I can’t…, but…"));
  out = out.concat(A(/\b(you(?:’re|'re| are) wrong)\b/gi, m, 1, "Diplomatic: I take your point, but…"));
  out = out.concat(A(/\b(neither [^.]* nor not)\b/gi, m, 1, "neither … nor (no extra not)."));
  return out;
};
