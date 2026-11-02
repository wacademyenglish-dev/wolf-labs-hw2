/* As regras do corretor da revisão Tone It Down. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b(a bit of (?:problem|challenge|stretch|surprise))\b/gi, m, 1, "a bit of A problem."));
  out = out.concat(A(/\b(was (?:terrible|horrible|awful|stupid))\b/gi, m, 1, "Softer: could have been better / wasn’t exactly great."));
  return out;
};
