/* As regras do corretor desta aula (nível 2): where × which; there / it repetidos no fim; which para gente; what depois de nome; where + preposição no fim. A aula e a lição de casa Live usam este arquivo. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\bwhere\s+(?:i|you|we|they|he|she)\s+(loved?|like[ds]?|visited|visit|crossed|cross|bought|buy|read|ate|eat|found|find|recommend(?:ed)?)\b/g, m, 1, 'We loved IT: which (or that), not where.'));
  out = out.concat(A(/\bwhere\s+[^.,!?]+?\b(there)\s*(?:[.,!?]|$)/g, m, 1, 'where already means there. Say it once.'));
  out = out.concat(A(/\b(?:which|that)\s+(?:i|you|we|they|he|she)\s+\w+(?:ed)?\s+(it|them)\b/g, m, 1, 'which already means it. Say it once.'));
  out = out.concat(A(/\b(?:man|woman|person|boy|girl|friend|waiter|teacher|owner|people)\s+(which)\b/g, m, 1, 'People: who.'));
  out = out.concat(A(/\b(?:the|a)\s+(?:book|café|cafe|map|song|bridge|bench|thing|place|street|park)\s+(what)\s+\w+/g, m, 1, 'Never what after a noun: which / that.'));
  out = out.concat(A(/\bwhere\s+(?:i|you|we|they|he|she)\s+(?:sat|sit|danced|dance|lived|live|stayed|stay)\s+(on|to|in|at)\b/g, m, 1, 'Not both: the bench where we sat, or the bench we sat on.'));
  out = out.concat(A(/\b(?:song|music)\s+(?:that\s+|which\s+)?(?:i|you|we|they)\s+(danced|listened)\b(?!\s+(?:to|on)\b)/g, m, 1, 'The little word stays: the song we danced TO.'));
  return out;
};
