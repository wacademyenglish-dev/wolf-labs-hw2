/* As regras do corretor · Selling Services 26 · Can You Hear Me?. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b((?:it|he|she|this|that|the \w+) don[’']t (?:is|are))\b/gi, m, 1, "With be, the negative is not: it isn’t, he isn’t. Never “don’t is”."));
  out = out.concat(A(/\b((?:we|you|they) don[’']t are)\b/gi, m, 1, "With be: we aren’t, they aren’t."));
  out = out.concat(A(/\b(i don[’']t am|i no am)\b/gi, m, 1, "I’m not."));
  out = out.concat(A(/\b(\w+ no (?:is|are))\b/gi, m, 1, "Negative of be: isn’t / aren’t."));
  out = out.concat(A(/\b(you breaking up)\b/gi, m, 1, "Don’t forget be: you’re breaking up."));
  out = out.concat(A(/\b((?:i[’']m|i am|we[’']re|we are) (?:share|wait|move|send|call|use|try))\b/gi, m, 1, "be + -ing: I’m sharing, I’m waiting."));
  out = out.concat(A(/\b(are you hearing me)\b/gi, m, 1, "On a call: Can you hear me?"));
  return out;
};
