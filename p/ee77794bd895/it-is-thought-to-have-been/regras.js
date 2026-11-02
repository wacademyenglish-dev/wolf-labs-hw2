/* As regras do corretor desta aula (nível 3): passiva avançada. "is/are thought|said|believed|known to be + particípio + marca de passado (ago, in 19xx, BC, years ago, last …)" (alvo: to have been); "is/are said|thought|believed that" com sujeito (alvo: It is said that … / X is said to …); "to have being"; "is/are being + verbo base" (alvo: particípio); "had dated / had cleaned / had fixed the …" depois de we/I com objeto depois (alvo: had the X dated) fica com o professor, ambíguo com o past perfect; "the site/trench/tower is excavating|building|cleaning" (alvo: is being excavated). A aula e a lição de casa Live usam este arquivo. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b((?:is|are|was|were) (?:thought|said|believed|known|reported) to be \w+(?:ed|en|t)\b[^.!?]*?\b(?:ago|bc|in 1\d\d\d|in the \d+s|last (?:year|century|month)|long ago|centuries ago))\b/g, m, 1, 'Before now: TO HAVE BEEN + participle (is thought to have been built).'));
  out = out.concat(A(/\b((?:the |this |that |my |our )\w+ (?:is|are) (?:said|thought|believed) that)\b/g, m, 1, 'Choose one: “It is said that …” or “The tower is said to …”.'));
  out = out.concat(A(/\b(to have being)\b/g, m, 1, 'Before now: to have BEEN.'));
  out = out.concat(A(/\b((?:is|are|was|were) being (?:clean|build|excavate|photograph|paint|fix|restore|scan|date|study|repair|close|open|use|make|do))\b(?!ed|ing|s\b)/g, m, 1, 'In progress: IS BEING + participle (is being cleaned).'));
  out = out.concat(A(/\b((?:the )?(?:site|trench|tower|hill|bridge|road|house|building|wall|jar|kitchen|museum)(?: \w)? (?:is|are) (?:excavating|building|cleaning|photographing|painting|restoring|repairing|scanning))\b/g, m, 1, 'The site isn’t digging. People are digging it: IS BEING excavated.'));
  return out;
};
