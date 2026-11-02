/* As regras do corretor desta aula (nível 3): inversão. Começo com never/rarely/seldom/hardly/scarcely/little/not only/no sooner/only later seguido de sujeito (alvo: auxiliar antes do sujeito); "did/does/do + sujeito + verbo no passado ou com -s" depois dessas palavras; "no sooner … when" (alvo: than); "If had I" (alvo: Had I). Never no meio da frase (I have never …) passa. A aula e a lição de casa Live usam este arquivo. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/^\s*((?:never|rarely|seldom|hardly|scarcely|little|not only|no sooner|only later|under no circumstances|at no time) (?:i|you|he|she|we|they|it|the \w+|my \w+) \w+)/g, m, 1, 'Negative first, then the HELPER before the subject: Never HAVE I seen …'));
  out = out.concat(A(/^\s*((?:never|rarely|seldom|little|not only|only later) (?:did|does|do) (?:i|you|he|she|we|they|it) (?:\w+(?:ed|s)|knew|went|saw|took|lost|made|had|was|were|came|got|thought|told|said)\b)/g, m, 1, 'After DID / DOES: the plain verb (did she finish).'));
  out = out.concat(A(/\b(no sooner\b[^.!?]*?\bwhen)\b/g, m, 1, 'NO SOONER … THAN.'));
  out = out.concat(A(/^\s*(if had (?:i|you|he|she|we|they))\b/g, m, 1, 'Drop IF: Had I known …'));
  out = out.concat(A(/^\s*(had (?:i|you|he|she|we|they) (?:knew|went|saw|took|ate|wrote|spoke|gave))\b/g, m, 1, 'Had I + participle: Had I known, had I gone.'));
  return out;
};
