/* As regras do corretor · Selling Services 20 · Who Signs the Contract?. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b((?:it|he|she|this|that|the \w+) don[’']t (?:is|are))\b/gi, m, 1, "With be, the negative is not: it isn’t, he isn’t. Never “don’t is”."));
  out = out.concat(A(/\b((?:we|you|they) don[’']t are)\b/gi, m, 1, "With be: we aren’t, they aren’t."));
  out = out.concat(A(/\b(i don[’']t am|i no am)\b/gi, m, 1, "I’m not."));
  out = out.concat(A(/\b(\w+ no (?:is|are))\b/gi, m, 1, "Negative of be: isn’t / aren’t."));
  out = out.concat(A(/\b(who (?:does|do) (?:sign|decide|approve|have))\b/gi, m, 1, "Who is the subject: Who signs? Who decides?"));
  out = out.concat(A(/(?:^|[.!?]\s+|\b(?:and|but|so|because) )((?:he|she) have)\b/gim, m, 1, "He / she / it has."));
  out = out.concat(A(/\b(does (?:he|she|it) has)\b/gi, m, 1, "After does: have (Does she have…?)."));
  return out;
};
