/* As regras do corretor desta aula (nível 3): discordar com cuidado. "I'm not agree" → I don't agree; "Is not it" → Isn't it; "Would not it be" → Wouldn't it be; "I don't agree you" → agree WITH; "I'm not sure that it work" → it works; "I see what you mean, and…" → but. "You're wrong" não é marcado: é inglês certo (a aula é sobre a temperatura). A aula e a lição de casa Live usam este arquivo. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b((?:i'm|i’m|i am|we're|we’re|we are|she's|she’s|he's|he’s|they're|they’re) not agree)\b/g, m, 1, 'agree is a verb: I don’t agree.'));
  out = out.concat(A(/\b(is not it)\b/g, m, 1, 'Isn’t it…?'));
  out = out.concat(A(/\b(would not it(?: be)?|would it not to be)\b/g, m, 1, 'Wouldn’t it be…?'));
  out = out.concat(A(/\b((?:don't|don’t|do not|doesn't|doesn’t) agree (?:you|him|her|them|me|us))\b/g, m, 1, 'agree WITH: I don’t agree with you.'));
  out = out.concat(A(/\b(not sure (?:that )?(?:it|this|that|the plan) (?:work|make|help|fit))\b/g, m, 1, 'it works / it makes…'));
  out = out.concat(A(/\b(i see what you mean, and)\b/g, m, 1, 'I see what you mean, BUT…'));
  return out;
};
