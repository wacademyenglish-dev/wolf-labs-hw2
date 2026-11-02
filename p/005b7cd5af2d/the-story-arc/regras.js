/* As regras do corretor da revisão The Story Arc. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b(turned out what)\b/gi, m, 1, "It turned out THAT…"));
  out = out.concat(A(/\b(at the end,)/gi, m, 1, "Finally: IN the end, …"));
  out = out.concat(A(/\b(fast forward,)/gi, m, 1, "Fast forward TO today / to 2025: …"));
  return out;
};
