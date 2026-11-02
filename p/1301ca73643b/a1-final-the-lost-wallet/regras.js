/* As regras do corretor da REVISÃO A1 · UNIDADE 10 (a final do A1): didn't / did + passado, they / we / you was,
   sujeito + going to sem be, os irregulares com -ed (goed, eated, buyed, haved), had + coisa para "existia". */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b((?:didn’t|didn't|did not|did (?:you|he|she|they|we)) (?:went|saw|ate|had|drank|came|bought|took|made|was|did|worked|watched|played|called))\b/gi, m, 1, 'After did / didn’t: the base verb. didn’t see, did you go.'));
  out = out.concat(A(/\b((?:they|we|you) was)\b/gi, m, 1, 'they / we / you WERE.'));
  out = out.concat(A(/\b((?:I|he|she|they|we|you) going to)\b/g, m, 1, 'be + going to: I’m going to, she’s going to.'));
  out = out.concat(A(/\b(goed|eated|buyed|haved|drinked|seed|taked|maked|comed|swimmed)\b/gi, m, 1, 'Irregular: went, ate, bought, had, drank, saw, took, made, came, swam.'));
  return out;
};