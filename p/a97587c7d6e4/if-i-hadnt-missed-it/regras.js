/* As regras do corretor da revisão If I Hadn’t Missed It. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b(if (?:I|you|he|she|we|they|it) (?:wouldn’t|wouldn't|would) have)\b/gi, m, 1, "In the if part: had / hadn’t + past participle. If I hadn’t missed…"));
  out = out.concat(A(/\b(would (?:met|went|gone|saw|seen|did|done|got|moved|sat))\b/gi, m, 1, "Past result: would have + past participle (would have met)."));
  out = out.concat(A(/\b(had (?:knew|went|saw|took|ate|wrote|spoke|did))\b/gi, m, 1, "had + past participle: had known, had gone, had seen."));
  out = out.concat(A(/\b(wouldn’t have been (?:here|there) now|wouldn't have been (?:here|there) now)\b/gi, m, 1, "Result now (mixed): I wouldn’t be here now."));
  return out;
};
