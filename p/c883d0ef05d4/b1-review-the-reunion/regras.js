/* As regras do corretor da revisão The Reunion. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b(I (?:live|work|study|am living|am working) (?:here |there )?since)\b/gi, m, 1, "From then until now: I’ve lived / I’ve been living since…"));
  out = out.concat(A(/\b((?:am|’m|'m|is|’s|are|’re|get|got|getting) used to (?:wake|work|live|drive|speak|eat|sleep|get|go|cook|travel))\b/gi, m, 1, "be / get used to + -ing: used to waking."));
  out = out.concat(A(/\b((?:should|could|would) (?:learned|called|started|told|gone|went|done|did|said|opened|brought))\b/gi, m, 1, "Regret: should HAVE + participle."));
  out = out.concat(A(/\b(since (?:two|three|four|five|six|ten|\d+) (?:years|months|weeks|days|hours))\b/gi, m, 1, "A period: for two years. A point: since 2020."));
  return out;
};
