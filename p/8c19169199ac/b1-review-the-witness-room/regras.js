/* As regras do corretor da revisão The Witness Room. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b((?:was|were) (?:check|walk|cook|look|put|watch|work|sleep|wait|talk|run|eat|read|drive))\b/gi, m, 1, "Past continuous: was / were + -ing."));
  out = out.concat(A(/\b((?:have|has|’ve|'ve) (?:seen|done|been|gone|met|lost|bought|eaten|talked|visited) [^.]*\b(?:yesterday|last \w+|ago|in 20\d\d))\b/gi, m, 1, "Finished time (yesterday, last…, ago): past simple."));
  out = out.concat(A(/\b((?:have|has) went)\b/gi, m, 1, "have gone / have been."));
  out = out.concat(A(/\b(since (?:two|three|four|five|six|ten|\d+) (?:years|months|weeks|days|hours))\b/gi, m, 1, "A period: for two years. A point: since 2020."));
  return out;
};
