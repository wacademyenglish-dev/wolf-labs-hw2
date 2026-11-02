/* As regras do corretor da revisão The Town Hall. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b(despite of)\b/gi, m, 1, "despite + noun (no of); in spite of has of."));
  out = out.concat(A(/\b((?:although|even though) of)\b/gi, m, 1, "although + sentence; despite + noun."));
  out = out.concat(A(/\b((?:due to|owing to) (?:it|the \w+|they|we) (?:was|were|is|are|had|has|rained))\b/gi, m, 1, "due to + noun: due to the rain."));
  out = out.concat(A(/\b(in order to (?:people|children|we|they|everyone|kids))\b/gi, m, 1, "in order to + verb; so that + subject + can."));
  return out;
};
