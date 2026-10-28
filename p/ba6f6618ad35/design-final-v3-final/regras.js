/* As regras do corretor da revisão Final_v3_FINAL. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b(will have (?:finish|send|do|make|write|design))\b/gi, m, 1, "will have + PARTICIPLE: will have finished / sent / done."));
  out = out.concat(A(/\b(once you will)\b/gi, m, 1, "After once / when: present simple (Once you sign off)."));
  return out;
};
