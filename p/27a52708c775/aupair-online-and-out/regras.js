/* As regras do corretor da revisão Online and Out. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b(can I post (?:this|the) photo\?)/gi, m, 1, "Even better: Can I share this photo, or would you prefer I didn’t?"));
  return out;
};
