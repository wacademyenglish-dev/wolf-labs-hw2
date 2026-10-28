/* As regras do corretor da revisão Mock Test 1. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b(gonna|wanna)\b/gi, m, 1, "Written English: going to / want to."));
  out = out.concat(A(/\b(there is (?:many|some|two|three) \w+s)\b/gi, m, 1, "Plural: there are."));
  return out;
};
