/* As regras do corretor da revisão That’s a Great Question. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b(that(?:’s|'s| is) not my (?:topic|subject|problem))\b/gi, m, 1, "Polite: That’s a bit outside the scope of today’s talk."));
  out = out.concat(A(/\b(you(?:’re|'re| are) wrong)\b/gi, m, 1, "Calmer: I can see why you’d think that. However, …"));
  return out;
};
