/* As regras do corretor desta aula (nível 3): passiva de relato. "sujeito + is/are said/thought/believed/reported/known that" (alvo: X is said TO …, ou It is said that …); "is said to + passado simples" (to tried, to left, to went); "says/said to be" sem passiva (the rule says to be); "It is said X to have" (mistura de portas). A aula e a lição de casa Live usam este arquivo. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b((?:he|she|they|we|you|i|(?!it\b)[a-z]+) (?:is|are|was|were) (?:said|thought|believed|reported|known|considered) that)\b/g, m, 1, 'After a name: is said TO … (or start with IT: It is said that …).'));
  out = out.concat(A(/\b((?:said|thought|believed|reported|known|considered) to (?:tried|left|went|failed|refused|wrote|took|saw|knew|lived|played|started|died|won|lost|made))\b/g, m, 1, 'The past goes inside: to HAVE tried, to have left.'));
  out = out.concat(A(/(?<!\b(?:is|are|was|were|been|be) )\b((?:says|said) to be)\b/g, m, 1, 'Passive: IS SAID to be.'));
  out = out.concat(A(/\b(it is (?:said|thought|believed|known|reported) (?!that\b)\w+ (?:to have|to be))\b/g, m, 1, 'Pick one door: It is said that X … or X is said to …'));
  out = out.concat(A(/\b((?:said|thought|believed|reported|known) (?:being|having))\b/g, m, 1, 'IS SAID TO be, not being.'));
  return out;
};
