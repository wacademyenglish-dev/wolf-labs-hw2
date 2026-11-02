/* As regras do corretor da revisão The Local Paper. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b((?:didn’t|didn't|did not|did (?:you|he|she|they|we|I)) (?:went|saw|ate|had|came|bought|took|made|called|found|climbed|heard|met))\b/gi, m, 1, "After did / didn’t: the base verb. didn’t go."));
  out = out.concat(A(/\b(who did (?:call|see|find|help|save|take) (?:the|a|an|him|her|them))\b/gi, m, 1, "Who is the subject: no did. Who called the police?"));
  out = out.concat(A(/\b(goed|buyed|eated|seed|taked|maked|comed|meeted|finded|telled|haved)\b/gi, m, 1, "Irregular: went, bought, ate, saw, took, made, came, met, found, told, had."));
  out = out.concat(A(/^(after,)/gi, m, 1, "Alone at the start: after that."));
  return out;
};
