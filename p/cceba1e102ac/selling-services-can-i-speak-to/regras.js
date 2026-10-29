/* As regras do corretor · Selling Services 17 · Can I Speak to Mr. Duarte?. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b((?:it|he|she|this|that|the \w+) don[’']t (?:is|are))\b/gi, m, 1, "With be, the negative is not: it isn’t, he isn’t. Never “don’t is”."));
  out = out.concat(A(/\b((?:we|you|they) don[’']t are)\b/gi, m, 1, "With be: we aren’t, they aren’t."));
  out = out.concat(A(/\b(i don[’']t am|i no am)\b/gi, m, 1, "I’m not."));
  out = out.concat(A(/\b(\w+ no (?:is|are))\b/gi, m, 1, "Negative of be: isn’t / aren’t."));
  out = out.concat(A(/\b(here is (?:leo|\w+) (?:from|speaking))\b/gi, m, 1, "On the phone: This is Leo, from…"));
  out = out.concat(A(/\b(calling for (?:the|our|your) \w+)\b/gi, m, 1, "The reason: I’m calling about…"));
  out = out.concat(A(/\b(talk with (?:mr|mrs|ms|the|your))\b/gi, m, 1, "Ask for a person: Can I speak to…?"));
  return out;
};
