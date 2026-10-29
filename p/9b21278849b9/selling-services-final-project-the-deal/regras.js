/* As regras do corretor · Selling Services 30 · Final Project: The Deal. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b((?:it|he|she|this|that|the \w+) don[’']t (?:is|are))\b/gi, m, 1, "With be, the negative is not: it isn’t, he isn’t. Never “don’t is”."));
  out = out.concat(A(/\b((?:we|you|they) don[’']t are)\b/gi, m, 1, "With be: we aren’t, they aren’t."));
  out = out.concat(A(/\b(i don[’']t am|i no am)\b/gi, m, 1, "I’m not."));
  out = out.concat(A(/\b(\w+ no (?:is|are))\b/gi, m, 1, "Negative of be: isn’t / aren’t."));
  out = out.concat(A(/\b((?:we|i|they) go to (?:start|begin|send|sign|test|connect|call))\b/gi, m, 1, "A plan: we’re going to start."));
  out = out.concat(A(/\b(last (?:year|month|week) (?:we|i|they) (?:save|work|start|finish|help|send))\b/gi, m, 1, "Past: last year we saved."));
  return out;
};
