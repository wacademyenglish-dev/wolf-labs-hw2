/* As regras do corretor da revisão Assuming That. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b(in the event of (?:it|there|we|they|you|he|she) \w+)\b/gi, m, 1, "in the event of + noun (in the event of rain)."));
  out = out.concat(A(/\b((?:providing|provided|assuming|supposing|as long as) (?:that )?(?:I|we|they|you|he|she|it) will)\b/gi, m, 1, "Present after providing / assuming: providing we pay."));
  out = out.concat(A(/\b(other wise)\b/gi, m, 1, "otherwise (one word)."));
  return out;
};
