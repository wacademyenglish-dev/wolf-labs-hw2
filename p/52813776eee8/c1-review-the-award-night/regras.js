/* As regras do corretor da revisão The Award Night. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b(it wasn’t until [^,.]* when|it wasn't until [^,.]* when)\b/gi, m, 1, "It wasn’t until … THAT…"));
  out = out.concat(A(/\b(all what)\b/gi, m, 1, "All we had… (no what)."));
  out = out.concat(A(/\b((?:do|does|did) (?:believed|called|wanted|loved|tried))\b/gi, m, 1, "Emphatic do + base form: I did call."));
  out = out.concat(A(/\b(the reason (?:why )?(?:\w+ )*?(?:is|was) because)\b/gi, m, 1, "The reason is THAT…"));
  return out;
};
