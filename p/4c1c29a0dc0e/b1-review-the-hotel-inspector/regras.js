/* As regras do corretor da revisão The Hotel Inspector. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b(too much (?:people|towels|rules|stairs|mosquitoes|things|cars|chairs|friends|questions))\b/gi, m, 1, "Things you can count: too many."));
  out = out.concat(A(/\b(too many (?:noise|water|money|time|food|traffic|work|information|rain))\b/gi, m, 1, "Things you can’t count: too much."));
  out = out.concat(A(/\b(very (?:exhausted|huge|tiny|amazing|terrible|delicious|freezing|boiling|furious))\b/gi, m, 1, "Strong adjectives: absolutely / really exhausted."));
  out = out.concat(A(/\b(a little (?:friends|towels|people|chairs|days))\b/gi, m, 1, "Countable: a few friends."));
  return out;
};
