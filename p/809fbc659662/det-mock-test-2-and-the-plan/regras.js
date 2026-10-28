/* As regras do corretor da revisão Mock Test 2 and the Plan. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b(gonna|wanna)\b/gi, m, 1, "Written English: going to / want to."));
  out = out.concat(A(/\b(tell me where is)\b/gi, m, 1, "Indirect question: tell me where the pharmacy IS (verb at the end)."));
  return out;
};
