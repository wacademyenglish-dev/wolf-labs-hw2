/* As regras do corretor da revisão The Case Presentation. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b(was (?:admit|treat|refer|discharge|diagnose))\b/gi, m, 1, "Passive: was + participle (was admitted)."));
  out = out.concat(A(/\b(the exams? showed)\b/gi, m, 1, "In English: the tests showed."));
  return out;
};
