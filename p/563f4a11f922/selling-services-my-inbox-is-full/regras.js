/* As regras do corretor · Selling Services 23 · My Inbox Is Full. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b((?:it|he|she|this|that|the \w+) don[’']t (?:is|are))\b/gi, m, 1, "With be, the negative is not: it isn’t, he isn’t. Never “don’t is”."));
  out = out.concat(A(/\b((?:we|you|they) don[’']t are)\b/gi, m, 1, "With be: we aren’t, they aren’t."));
  out = out.concat(A(/\b(i don[’']t am|i no am)\b/gi, m, 1, "I’m not."));
  out = out.concat(A(/\b(\w+ no (?:is|are))\b/gi, m, 1, "Negative of be: isn’t / aren’t."));
  out = out.concat(A(/\b(needs? (?:send|call|answer|check|talk|confirm|sign|approve|see|meet|change|prepare|finish))\b/gi, m, 1, "need to + verb: I need to send."));
  out = out.concat(A(/\b(ha(?:ve|s) that (?:send|call|answer|check|talk|confirm|sign|go|do|pay|meet|finish))\b/gi, m, 1, "Necessary: have to (I have to call)."));
  out = out.concat(A(/(?:^|[.!?]\s+)((?:he|she|it) have to)\b/gi, m, 1, "He / she / it: has to."));
  return out;
};
