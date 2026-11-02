/* As regras do corretor da revisão She Would Say That. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b(would (?:live|have|be|know|own|believe|love|like) (?:in|a|an|the|my|our|his|her))\b/gi, m, 1, "Past states: used to live / used to have (would is for actions)."));
  out = out.concat(A(/\b((?:was|were) going to say that)\b/gi, m, 1, "Typical of that person: would say that."));
  out = out.concat(A(/\b(always will \w+)\b/gi, m, 1, "Annoying habit: he WILL leave… (stress will)."));
  return out;
};
