/* As regras do corretor desta aula (nível 3): causa e efeito. due to / owing to / because of + FRASE; "owning to"; "due the"; ", as a result" / ", consequently" colados por vírgula; "as a result the" sem OF; "as consequence"; "consequent,"; "led to + verbo conjugado". A aula e a lição de casa Live usam este arquivo. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  var SUJ = '(?:i|you|he|she|it|we|they|there|the \\w+|my \\w+|our \\w+|its \\w+|deep \\w+)';
  out = out.concat(A(new RegExp('\\b((?:due to|owing to|because of) ' + SUJ + ' (?:was|were|is|are|had|has|have|did|got|spins|rises|melted|froze|went|came|sank|turned|moved)\\b)', 'g'), m, 1, 'DUE TO / OWING TO / BECAUSE OF + a NOUN. A whole sentence: BECAUSE.'));
  out = out.concat(A(/\b(owning to)\b/g, m, 1, 'The linker is OWING TO.'));
  out = out.concat(A(/(?:^|[.!?]\s*)(due (?!to\b)\w+)/g, m, 1, 'DUE TO, with TO.'));
  out = out.concat(A(/(\w, (?:as a result|consequently) (?!of\b)\w+)/g, m, 1, 'AS A RESULT / CONSEQUENTLY start a NEW sentence: a period before, a comma after.'));
  out = out.concat(A(/\b(as a result (?:the|a|an|my|his|her|their|our) \w+)/g, m, 1, 'AS A RESULT OF + noun = the cause.'));
  out = out.concat(A(/\b(as (?:consequence|result)(?: of)?\b)/g, m, 1, 'AS A RESULT / AS A CONSEQUENCE, with A.'));
  out = out.concat(A(/(?:^|[.!?]\s*)(consequent,)/g, m, 1, 'The linker is CONSEQUENTLY.'));
  out = out.concat(A(/\b((?:led|leads|lead|leading) to (?:\w+ ){1,4}?(?:fell|entered|travels|went|sank|was|were|got|moved|came|turned|melted|grew|died))\b/g, m, 1, 'LED TO + a noun or -ING, never a full sentence.'));
  return out;
};
