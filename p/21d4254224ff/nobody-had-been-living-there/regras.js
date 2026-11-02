/* As regras do corretor desta aula (nível 2): past perfect continuous (had been + -ing) contra was/were + since, have been numa história passada, had been + verbo puro, had been knowing, since + período. A aula e a lição de casa Live usam este arquivo. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b((?:was|were)\s+(?:\w+ing|empty|closed|open|there|alone|here))(?:\s+\w+){0,2}?\s+since\b/g, m, 1, 'Up to a moment in the past: had been … since.'));
  out = out.concat(A(/\bhad been\s+((?!been|being|empty|alone|open|closed|there|here|a|an|the|very|so|in|on|at|home|away|tired|happy|sad|sick|busy|dead|married|asleep|awake|afraid|ready|right|wrong|missing|lost|quiet|dark|cold|hot)[a-z]+(?<!ing|ed|en|wn|ght|ne|own|ung))\b/g, m, 1, 'had been + verb-ING: had been living, had been waiting.'));
  out = out.concat(A(/\bhad been\s+(knowing|believing|owning|wanting|needing|liking|loving|hating|understanding|belonging)\b/g, m, 1, 'A state verb: had + past participle (had known, had wanted).'));
  out = out.concat(A(/\b(since)\s+(?:two|three|four|five|six|seven|eight|nine|ten|many|several|\d+)\s+(?:hours|days|weeks|months|years|minutes)\b/g, m, 1, 'A period takes for: for two hours. since + a point: since 1989.'));
  out = out.concat(A(/\bin\s+(?:19|20)\d\d,?\s+\w+(?:\s+\w+)?\s+(has been|have been)\s+\w+ing\b/g, m, 1, 'A story about the past: had been, not have been.'));
  return out;
};
