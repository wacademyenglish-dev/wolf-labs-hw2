/* As regras do corretor da revisão The Time Capsule. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b((?:kept|keep|keeps|ended up|end up|ends up) to \w+)\b/gi, m, 1, "kept / ended up + -ing."));
  out = out.concat(A(/\b((?:was|were) go to)\b/gi, m, 1, "A past plan: was going to."));
  out = out.concat(A(/\b(will (?:flying|living|working|doing|teaching|traveling|travelling|sleeping))\b/gi, m, 1, "Future in progress: will BE + -ing."));
  out = out.concat(A(/\b(when I (?:arrived|got there|came in), (?:the|it|they) (?:already )?(?:started|finished|left|ended|closed))\b/gi, m, 1, "The earlier action: had already started."));
  return out;
};
