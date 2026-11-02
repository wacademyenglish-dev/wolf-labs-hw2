/* As regras do corretor da revisão The Press Conference. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b(said (?:me|him|her|us|them))\b/gi, m, 1, "said that… / told me that…"));
  out = out.concat(A(/\b((?:tell|told) (?:me|us) (?:where|why|what|when|how) (?:is|are|does|do|did|was|were) )/gi, m, 1, "Indirect question: where the station IS (subject + verb)."));
  out = out.concat(A(/\b((?:could|can) you tell me (?:where|why|what|when|how) (?:is|are|does|do|did|was|were) )/gi, m, 1, "Indirect question: where the station IS (subject + verb)."));
  out = out.concat(A(/\b(asked (?:me |him |her |us |them )?(?:are|is|do|does|did) (?:you|he|she|they|I))\b/gi, m, 1, "Reported question: asked if I was…"));
  return out;
};
