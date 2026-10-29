/* As regras do corretor · Selling Services 16 · Before the Meeting Starts. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b((?:it|he|she|this|that|the \w+) don[’']t (?:is|are))\b/gi, m, 1, "With be, the negative is not: it isn’t, he isn’t. Never “don’t is”."));
  out = out.concat(A(/\b((?:we|you|they) don[’']t are)\b/gi, m, 1, "With be: we aren’t, they aren’t."));
  out = out.concat(A(/\b(i don[’']t am|i no am)\b/gi, m, 1, "I’m not."));
  out = out.concat(A(/\b(\w+ no (?:is|are))\b/gi, m, 1, "Negative of be: isn’t / aren’t."));
  out = out.concat(A(/\b((?:like|love|hate) (?:play|cook|watch|run|travel|read|swim|drive|ride|walk|dance))\b/gi, m, 1, "After like / love: verb + -ing (I like playing)."));
  out = out.concat(A(/\b(did (?:you|he|she|they|we|i) (?:went|played|watched|had|saw|did|made|was))\b/gi, m, 1, "After did: the simple verb (Did you go?)."));
  out = out.concat(A(/\b(what (?:you|he|she|they) did)\b/gi, m, 1, "Question: What did you do?"));
  return out;
};
