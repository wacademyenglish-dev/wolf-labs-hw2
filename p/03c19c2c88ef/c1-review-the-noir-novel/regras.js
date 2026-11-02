/* As regras do corretor da revisão The Noir Novel. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b(no sooner (?:I|we|they|he|she|you) had)\b/gi, m, 1, "No sooner HAD she arrived…"));
  out = out.concat(A(/\b(little (?:I|we|they|he|she|you) (?:knew|know))\b/gi, m, 1, "Little DID she know…"));
  out = out.concat(A(/\b(if had (?:I|we|they|he|she|you))\b/gi, m, 1, "Inverted conditional: Had she known… (no if)."));
  out = out.concat(A(/\b(hardly had [^.]* than)\b/gi, m, 1, "Hardly … WHEN (No sooner … than)."));
  return out;
};
