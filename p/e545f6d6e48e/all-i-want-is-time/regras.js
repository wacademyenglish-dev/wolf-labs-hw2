/* As regras do corretor da revisão All I Want Is Time. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b(all what)\b/gi, m, 1, "All I want… (no what)."));
  out = out.concat(A(/\b(the reason (?:why )?(?:\w+ )*?(?:is|was) because)\b/gi, m, 1, "The reason is that… (not because)."));
  out = out.concat(A(/\b((?:all|the only thing) (?:I|you|we|they|he|she) (?:want|need|miss|have) (?:are|were))\b/gi, m, 1, "All / The only thing … IS."));
  out = out.concat(A(/\b(the only thing what)\b/gi, m, 1, "The only thing (that)…"));
  return out;
};
