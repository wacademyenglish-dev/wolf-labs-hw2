/* As regras do corretor · Selling Services 13 · We’re Going to Start in March. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b((?:it|he|she|this|that|the \w+) don[’']t (?:is|are))\b/gi, m, 1, "With be, the negative is not: it isn’t, he isn’t. Never “don’t is”."));
  out = out.concat(A(/\b((?:we|you|they) don[’']t are)\b/gi, m, 1, "With be: we aren’t, they aren’t."));
  out = out.concat(A(/\b(i don[’']t am|i no am)\b/gi, m, 1, "I’m not."));
  out = out.concat(A(/\b(\w+ no (?:is|are))\b/gi, m, 1, "Negative of be: isn’t / aren’t."));
  out = out.concat(A(/\b((?:we|i|they) go to (?:start|begin|test|connect|send|map|call|sign|change))\b/gi, m, 1, "A plan: we’re going to start."));
  out = out.concat(A(/\b(going (?:start|begin|test|connect|send|map|call|do|change|have|be))\b/gi, m, 1, "Don’t forget to: going to start."));
  out = out.concat(A(/\b(going to (?:started|tested|connected|sent|changed|mapped|called|began|finished))\b/gi, m, 1, "After going to: the simple verb (going to start)."));
  return out;
};
