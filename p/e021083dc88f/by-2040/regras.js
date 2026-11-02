/* As regras do corretor desta aula (nível 3): future perfect × future continuous. "by 2040 … will + verbo" (acabado antes: will HAVE); "will have + forma base" ("will have finish"); "will has"; "will be + forma base"; "until + ano/mês" com will have (prazo: BY); "by the time … will". A aula e a lição de casa Live usam este arquivo. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b(by (?:20\d\d|19\d\d|then|the end of (?:the )?(?:year|month|week|century)|next (?:year|month|week)|(?:january|february|march|april|may|june|july|august|september|october|november|december)),? (?:\w+ ){1,4}?will (?!have\b|be\b|still\b|not\b|probably\b)\w+)/g, m, 1, 'BY = finished before then: WILL HAVE + participle.'));
  out = out.concat(A(/\b(will have (?:finish|build|turn|move|replace|change|learn|buy|stop|pay|become|make|take|go|see|do|write|get|open|close|grow|start|travel|keep|forget|find|eat|live|work))\b/g, m, 1, 'After WILL HAVE: the participle (finished, built, changed).'));
  out = out.concat(A(/\b(will has)\b/g, m, 1, 'WILL HAVE, never will has.'));
  out = out.concat(A(/\b(will be (?:grow|work|live|carry|swim|sit|drink|run|fight|travel|use|eat|study|teach|drive|wait|play|read|do|make))\b(?! (?:of|from|able)\b)/g, m, 1, 'WILL BE + verb-ING.'));
  out = out.concat(A(/\b(will have \w+(?: \w+){0,5} until (?:20\d\d|19\d\d|then|(?:january|february|march|april|may|june|july|august|september|october|november|december)))\b/g, m, 1, 'A deadline: BY. Until = the whole time.'));
  out = out.concat(A(/\b(until (?:20\d\d|19\d\d),? (?:\w+ ){1,4}?will have)\b/g, m, 1, 'A deadline: BY 2040.'));
  out = out.concat(A(/\b(by the time (?:i|you|he|she|we|they|it|\w+) will)\b/g, m, 1, 'After BY THE TIME: the present simple.'));
  return out;
};
