/* As regras do corretor da revisão Red Flags. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b(send (?:you |them )?(?:money|my passport))\b/gi, m, 1, "Never send money or documents to a family."));
  return out;
};
