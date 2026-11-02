/* As regras do corretor da revisão Whose Idea Was It?. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b((?:deny|denied|denies|admit|admitted|admits|suggest|suggested|suggests|avoid|avoided) to \w+)\b/gi, m, 1, "deny / admit / suggest + -ing."));
  out = out.concat(A(/\b(suggested (?:me|us|him|her|them) to)\b/gi, m, 1, "suggest + -ing, or suggest that we…"));
  out = out.concat(A(/\b((?:insist|insisted|insists) (?:to|in) \w+)\b/gi, m, 1, "insist ON + -ing."));
  out = out.concat(A(/\b(very (?:exhausted|furious|terrified|delighted|starving|enormous|tiny|awful|chaotic))\b/gi, m, 1, "Strong adjectives: absolutely / really."));
  out = out.concat(A(/\b((?:a|an) (?:two|three|four|five|six|ten|twelve|\d+)-(?:hours|days|years|weeks|minutes) )/gi, m, 1, "Compound adjective, singular: a ten-hour flight."));
  return out;
};
