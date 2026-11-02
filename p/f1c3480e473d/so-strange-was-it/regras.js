/* As regras do corretor da revisão So Strange Was It. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b(so (?:\w+) (?:the|a|my|his|her|their|our) \w+ (?:was|were|is|are) that)\b/gi, m, 1, "Inversion: So bright WAS THE LIGHT that…"));
  out = out.concat(A(/\b(such (?:the|her|his|their|my) \w+ (?:was|were) that)\b/gi, m, 1, "Such WAS the noise that…"));
  out = out.concat(A(/\b(such was an? \w+)\b/gi, m, 1, "Such was THE noise / HER anger (not a)."));
  return out;
};
