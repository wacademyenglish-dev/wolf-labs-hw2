/* As regras do corretor da revisão The Annual Report. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b(having (?:review|check|finish|complete|analyse|analyze|read))\b/gi, m, 1, "Having + participle: having reviewed."));
  out = out.concat(A(/\b(in light to)\b/gi, m, 1, "in light OF."));
  out = out.concat(A(/\b(notwithstanding of)\b/gi, m, 1, "notwithstanding + noun (no of)."));
  out = out.concat(A(/\b(though (?:was|were|is|are) \w+)\b/gi, m, 1, "Verbless clause: Though tired, …"));
  return out;
};
