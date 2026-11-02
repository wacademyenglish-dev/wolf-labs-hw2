/* As regras do corretor da revisão The Debate Night. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b(despite of)\b/gi, m, 1, "despite + noun (no of). in spite of has of."));
  out = out.concat(A(/\b(despite (?:it|I|we|they|he|she|the \w+) (?:was|were|is|are|had|didn’t|didn't))\b/gi, m, 1, "despite + noun / -ing. With a full sentence: even though."));
  out = out.concat(A(/\b(so that to \w+)\b/gi, m, 1, "so that + subject + verb; or just to + verb."));
  out = out.concat(A(/\b(even though of)\b/gi, m, 1, "even though + sentence. because of / despite + noun."));
  out = out.concat(A(/\b((?:do|does) (?:went|did|called|saw|made|said))\b/gi, m, 1, "The past: I DID go (did + verb)."));
  return out;
};
