/* As regras do corretor · Selling Services 21 · I’d Like to Connect. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b((?:it|he|she|this|that|the \w+) don[’']t (?:is|are))\b/gi, m, 1, "With be, the negative is not: it isn’t, he isn’t. Never “don’t is”."));
  out = out.concat(A(/\b((?:we|you|they) don[’']t are)\b/gi, m, 1, "With be: we aren’t, they aren’t."));
  out = out.concat(A(/\b(i don[’']t am|i no am)\b/gi, m, 1, "I’m not."));
  out = out.concat(A(/\b(\w+ no (?:is|are))\b/gi, m, 1, "Negative of be: isn’t / aren’t."));
  out = out.concat(A(/\b((?:i|we)(?:[’']d| would) like (?:connect|meet|show|send|talk|have|invite|present|schedule))\b/gi, m, 1, "would like + to: I’d like to connect."));
  out = out.concat(A(/\b(do you would)\b/gi, m, 1, "Invitation: Would you like to…? (no “do”)."));
  out = out.concat(A(/\b(would you like (?:meet|have|talk|see|join|connect|read))\b/gi, m, 1, "Would you like + to + verb."));
  return out;
};
