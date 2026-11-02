/* As regras do corretor da revisão The Essay. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b(in my opinion,? I think)\b/gi, m, 1, "One opinion frame only, or an impersonal thesis: This essay will argue that…"));
  out = out.concat(A(/\b(in conclusion,? to conclude)\b/gi, m, 1, "One conclusion phrase."));
  out = out.concat(A(/\b(they are wrong)\b/gi, m, 1, "Refute with a reason: However, this view overlooks…"));
  return out;
};
