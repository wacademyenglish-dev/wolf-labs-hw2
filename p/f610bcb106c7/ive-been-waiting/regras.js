/* As regras do corretor da revisão I’ve Been Waiting. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b(since (?:\w+ )?(?:hours|minutes|days|weeks|months|years))\b/gi, m, 1, "A length of time: for three hours. since + the start: since nine."));
  out = out.concat(A(/\b(how long (?:are|is|do|does) (?:you|he|she|they|we))\b/gi, m, 1, "How long have you been…?"));
  out = out.concat(A(/\b((?:I|you|we|they|he|she)(?:’ve|'ve| have| has|’s|'s) been knowing)\b/gi, m, 1, "know: no -ing. I’ve known."));
  out = out.concat(A(/\b((?:I|we|they) (?:am|are|wait|work|live) (?:\w+ )?(?:since|for) (?:\d|nine|ten|three|two|four|five|six|years|months|hours|monday|yesterday))\b/gi, m, 1, "Still going on: I’ve been waiting since… / I’ve lived here for…"));
  return out;
};
