/* As regras do corretor · Selling Services 9 · Is Tuesday at 10 Good for You?. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b((?:it|he|she|this|that|the \w+) don[’']t (?:is|are))\b/gi, m, 1, "With be, the negative is not: it isn’t, he isn’t. Never “don’t is”."));
  out = out.concat(A(/\b((?:we|you|they) don[’']t are)\b/gi, m, 1, "With be: we aren’t, they aren’t."));
  out = out.concat(A(/\b(i don[’']t am|i no am)\b/gi, m, 1, "I’m not."));
  out = out.concat(A(/\b(\w+ no (?:is|are))\b/gi, m, 1, "Negative of be: isn’t / aren’t."));
  out = out.concat(A(/\b(in (?:monday|tuesday|wednesday|thursday|friday|saturday|sunday)s?)\b/gi, m, 1, "Days: on Monday, on Friday."));
  out = out.concat(A(/\b(at the (?:morning|afternoon|evening))\b/gi, m, 1, "Part of the day: in the morning / in the afternoon."));
  out = out.concat(A(/\b((?:on|in) \d{1,2}(?::\d\d)? ?(?:a\.?m|p\.?m)|(?:1[3-9]|2[0-3])h(?:\d\d)?)\b/gi, m, 1, "Clock time: at + 1–12 + a.m. / p.m. (at 3 p.m.)."));
  return out;
};
