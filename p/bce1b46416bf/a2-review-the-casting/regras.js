/* As regras do corretor da revisão The Casting. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b((?:have|has|’ve|'ve|’s|'s) (?:\w+ )?(?:went|saw|ate|flew|wrote|took|did|was|were|came|drank|spoke|broke))\b/gi, m, 1, "have / has + participle: gone, seen, eaten, flown, written."));
  out = out.concat(A(/\b((?:have|has|’ve|'ve) \w+ (?:in \d{4}|last (?:year|month|week)|yesterday|ago))\b/gi, m, 1, "A finished time: past simple. I went there in 2019."));
  out = out.concat(A(/\b((?:I|we|they|you|he|she) (?:live|lives|work|works|know|knows) (?:here |there )?(?:since|for) )/gi, m, 1, "How long until now: I’ve lived here since…"));
  out = out.concat(A(/\b((?:haven’t|haven't|hasn’t|hasn't) never)\b/gi, m, 1, "never alone: I’ve never…"));
  return out;
};
