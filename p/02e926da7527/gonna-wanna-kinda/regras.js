/* As regras do corretor da revisão Gonna, Wanna, Kinda. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b(gonna to|wanna to|gotta to)\b/gi, m, 1, "gonna / wanna / gotta already include “to”."));
  out = out.concat(A(/\b(wanna (?:you|him|her|them|us|me) to)\b/gi, m, 1, "With a person: want you to (no wanna)."));
  out = out.concat(A(/\b(Dear [^,\n]+,[^]*?\b(?:gonna|wanna|gotta|kinda)\b)/gi, m, 1, "Formal email: going to / want to / have to."));
  return out;
};
