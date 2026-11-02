/* As regras do corretor da revisão First Day at Camp. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b((?:must|should|mustn’t|mustn't|shouldn’t|shouldn't) to \w+)\b/gi, m, 1, "must / should + verb, no to."));
  out = out.concat(A(/\b((?:don’t|don't|doesn’t|doesn't) must)\b/gi, m, 1, "Not allowed: mustn’t. Not necessary: don’t have to."));
  out = out.concat(A(/\b((?:he|she|it|everybody|every \w+) have to)\b/gi, m, 1, "he / she: has to."));
  out = out.concat(A(/\b((?:haven’t|haven't|hasn’t|hasn't) to)\b/gi, m, 1, "Not necessary: don’t have to / doesn’t have to."));
  out = out.concat(A(/\b((?:yesterday|last \w+)[^.]*\bmust)\b/gi, m, 1, "must has no past: had to."));
  return out;
};
