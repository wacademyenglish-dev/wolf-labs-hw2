/* As regras do corretor da revisão Tell Me About Yourself. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b(i have \d+ years)\b/gi, m, 1, "Age: I’m 28. But in an interview, start with your profession."));
  out = out.concat(A(/\b(i work (?:here|there|at \w+) since)\b/gi, m, 1, "Since + present perfect: I’ve worked here since…"));
  return out;
};
