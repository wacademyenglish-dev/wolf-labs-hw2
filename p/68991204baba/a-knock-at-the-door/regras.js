/* As regras do corretor da revisão A Knock at the Door. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b((?:I|you|we|they) (?:love|like|hate) the (?:music|mysteries|coffee|movies|books|cats|dogs))\b/gi, m, 1, "In general, no article: I love music."));
  out = out.concat(A(/\b((?:is|am|are|I’m|I'm|she’s|she's|he’s|he's) (?:musician|teacher|doctor|engineer|student|nurse|designer))\b/gi, m, 1, "A job needs a / an: she is a musician."));
  out = out.concat(A(/\b(a (?:old|orange|apple|hour|umbrella|egg|artist|actor))\b/gi, m, 1, "A vowel sound: an."));
  return out;
};
