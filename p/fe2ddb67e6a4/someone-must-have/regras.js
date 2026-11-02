/* As regras do corretor da revisão Someone Must Have. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b((?:must|might|could|may|should|can’t|can't|couldn’t|couldn't) (?:saw|went|did|ate|took|came|forgot|made|was|were))\b/gi, m, 1, "modal + have + past participle: must have seen."));
  out = out.concat(A(/\b(mustn’t have|mustn't have|must not have)\b/gi, m, 1, "Impossible in the past: can’t have."));
  out = out.concat(A(/\b((?:must|might|could|may|should) have (?:went|ate|took|saw|did|came|forgot|wrote|spoke))\b/gi, m, 1, "Use the past participle: gone, eaten, taken, seen, done, come."));
  out = out.concat(A(/\b((?:must|might|could|should|would) had)\b/gi, m, 1, "modal + have (not had): could have."));
  return out;
};
