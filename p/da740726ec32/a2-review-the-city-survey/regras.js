/* As regras do corretor da revisão The City Survey. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b((?:I|you|we|they) am|(?:he|she) (?:works|lives|takes) now)\b/gi, m, 1, "Now: be + -ing. She is working now."));
  out = out.concat(A(/\b((?:he|she|it|I|we|they) (?:buying|working|reading|studying|playing|going|having|watching|cooking|sitting))\b/gi, m, 1, "be + -ing: he is buying."));
  out = out.concat(A(/\b((?:usually|always|never|often) (?:am|is|are) \w+ing)\b/gi, m, 1, "Habits: simple. She usually works."));
  out = out.concat(A(/\b(I am agree|I’m agree|I'm agree)\b/gi, m, 1, "agree is a verb: I agree."));
  out = out.concat(A(/\b(neither I do|me either too)\b/gi, m, 1, "Neither do I / Me neither."));
  return out;
};
