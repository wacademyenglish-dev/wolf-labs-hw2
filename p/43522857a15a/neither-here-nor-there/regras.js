/* As regras do corretor da revisão Neither Here Nor There. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b((?:I’m|I'm|I am|we are|we’re) agree)\b/gi, m, 1, "agree is a verb: I agree."));
  out = out.concat(A(/\b(in two minds (?:of|on))\b/gi, m, 1, "in two minds ABOUT."));
  out = out.concat(A(/\b(cup of coffee)\b(?= ?[.!])/gi, m, 1, "The idiom: not my cup of TEA."));
  out = out.concat(A(/\b(in the fence)\b/gi, m, 1, "ON the fence."));
  return out;
};
