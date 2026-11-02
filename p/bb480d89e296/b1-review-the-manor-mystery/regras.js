/* As regras do corretor da revisão The Manor Mystery. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b((?:must|might|can’t|can't|could|may) (?:broke|opened|went|was|did|saw|heard|took|left|forgot))\b/gi, m, 1, "The past: must / might / can’t HAVE + participle."));
  out = out.concat(A(/\b(should to \w+)\b/gi, m, 1, "should + verb, no to."));
  out = out.concat(A(/\b((?:am|’m|'m|is|’s|'s|are|’re|'re|was|were) suppose to)\b/gi, m, 1, "be supposed to (with -d)."));
  out = out.concat(A(/\b((?:it|that|he|she|they) mustn’t be|(?:it|that|he|she) mustn't be)\b/gi, m, 1, "Impossible: can’t be."));
  return out;
};
