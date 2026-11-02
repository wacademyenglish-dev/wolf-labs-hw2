/* As regras do corretor da revisão Little Did They Know. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b(little (?:I|we|they|he|she|you|the \w+) (?:knew|know|realized|realised|thought|expected))\b/gi, m, 1, "Little DID they know…"));
  out = out.concat(A(/\b((?:under no circumstances|on no account|at no time|in no way|never before) (?:I|we|they|he|she|you|it|visitors|the \w+) (?:should|must|did|was|were|had|have|has|is|are|can|could|would|said|left|knew))\b/gi, m, 1, "After a negative opening: auxiliary + subject (should you, did he, had I)."));
  return out;
};
