/* As regras do corretor da revisão It Has Been Suggested. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b((?:it )?(?:was|has been|is) (?:suggested|proposed|recommended) to)\b/gi, m, 1, "suggest / propose + THAT (never + to)."));
  out = out.concat(A(/\b(it (?:agreed|decided|suggested|proposed) that)\b/gi, m, 1, "Passive: it WAS agreed that…"));
  out = out.concat(A(/\b(our attentions)\b/gi, m, 1, "attention (singular)."));
  out = out.concat(A(/\b(should to)\b/gi, m, 1, "should + verb (no to)."));
  return out;
};
