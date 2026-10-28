/* As regras do corretor da revisão Speak About the Photo. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b(there is (?:many|some|two|three|lots of) \w+s)\b/gi, m, 1, "Plural: there are."));
  out = out.concat(A(/\b(on the background)\b/gi, m, 1, "in the background."));
  out = out.concat(A(/\b(might (?:is|are|was))\b/gi, m, 1, "might + base verb: might be."));
  return out;
};
