/* As regras do corretor da revisão Write About the Photo. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b(in (?:this|the) (?:photo|picture) (?:have|has))\b/gi, m, 1, "Use: In this photo, there is / there are."));
  out = out.concat(A(/\b(near of)\b/gi, m, 1, "near + place (no “of”)."));
  out = out.concat(A(/\b(there is (?:two|three|four|many|some) \w+s)\b/gi, m, 1, "Plural: there are."));
  out = out.concat(A(/\b(very much (?:dark|big|small|beautiful|quiet))\b/gi, m, 1, "very + adjective."));
  out = out.concat(A(/\b(must to)\b/gi, m, 1, "must + base verb."));
  return out;
};
