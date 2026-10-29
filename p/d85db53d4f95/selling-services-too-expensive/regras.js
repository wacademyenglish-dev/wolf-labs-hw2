/* As regras do corretor · Selling Services 19 · It’s Too Expensive. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b((?:it|he|she|this|that|the \w+) don[’']t (?:is|are))\b/gi, m, 1, "With be, the negative is not: it isn’t, he isn’t. Never “don’t is”."));
  out = out.concat(A(/\b((?:we|you|they) don[’']t are)\b/gi, m, 1, "With be: we aren’t, they aren’t."));
  out = out.concat(A(/\b(i don[’']t am|i no am)\b/gi, m, 1, "I’m not."));
  out = out.concat(A(/\b(\w+ no (?:is|are))\b/gi, m, 1, "Negative of be: isn’t / aren’t."));
  out = out.concat(A(/\b(too much (?:expensive|cheap|long|short|slow|fast|high|big|small))\b/gi, m, 1, "too + adjective: too expensive (no “much”)."));
  out = out.concat(A(/\b(but is (?:a|good|cheap|expensive|fast|safe|the))\b/gi, m, 1, "Subject: but it’s…"));
  out = out.concat(A(/,\s*(then) (?:you|we|your|the|our)\b/gi, m, 1, "A result: so (not “then”)."));
  return out;
};
