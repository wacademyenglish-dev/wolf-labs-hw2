/* As regras do corretor da revisão It Needn’t Be Perfect. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b(needn’t to|needn't to|need not to)\b/gi, m, 1, "needn’t + verb (no to)."));
  out = out.concat(A(/\b((?:don’t|don't|doesn’t|doesn't) must)\b/gi, m, 1, "mustn’t (must has no don’t)."));
  out = out.concat(A(/\b((?:don’t|don't|doesn’t|doesn't) need (?:bring|pay|come|call|worry|clean|do|go))\b/gi, m, 1, "don’t need TO + verb."));
  out = out.concat(A(/\b(no need (?:bring|pay|come|call|worry|clean))\b/gi, m, 1, "there’s no need TO + verb."));
  out = out.concat(A(/\b((?:don’t|don't|doesn’t|doesn't) allowed)\b/gi, m, 1, "aren’t / isn’t allowed to."));
  return out;
};
