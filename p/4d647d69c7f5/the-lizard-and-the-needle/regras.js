/* As regras do corretor desta aula (nível 3): make / let + pessoa + verbo (sem to, sem -ing); stop + pessoa + FROM + -ing; help + pessoa + (to) verbo, nunca -ing; "letted". A aula e a lição de casa Live usam este arquivo. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [], P = '(?:me|you|him|her|us|them|people|everyone|everybody|myself|yourself|the \\w+|my \\w+|your \\w+|our \\w+|his \\w+|her \\w+)';
  var NAO_ING = '(?!(?:thing|nothing|something|anything|everything|morning|evening|king|ring|spring|bring|sing|building|wedding|ceiling|meeting|feeling|living|clothing)\\b)';
  out = out.concat(A(new RegExp('\\b((?:make|makes|made|making|let|lets|letting) ' + P + ' to (?!the\\b|a\\b|an\\b|my\\b|your\\b|school\\b|work\\b|bed\\b)\\w+)', 'g'), m, 1, 'make / let + person + verb, with no TO: makes me feel.'));
  out = out.concat(A(new RegExp('\\b((?:make|makes|made|let|lets) ' + P + ' ' + NAO_ING + '\\w+ing)\\b', 'g'), m, 1, 'make / let + person + verb, not -ing: lets me eat.'));
  out = out.concat(A(new RegExp('\\b((?:stop|stops|stopped|stopping) ' + P + ' to (?!the\\b|a\\b|an\\b|my\\b|your\\b)\\w+)', 'g'), m, 1, 'stop + person + FROM + -ing: stops me from eating.'));
  out = out.concat(A(/\b((?:stop|stops|stopped|stopping|prevent|prevents|prevented|keep|keeps|kept) (?:\w+ ){1,2}from (?:eat|work|think|buy|snack|use|last|go|be|have|do|make|take|get|pay|feel|sleep|listen|absorb|cut|look|drink|sell|lose|come|play|try|read))\b/g, m, 1, 'After FROM, the verb takes -ing: from eating.'));
  out = out.concat(A(new RegExp('\\b((?:help|helps|helped|helping) ' + P + ' ' + NAO_ING + '\\w+ing)\\b', 'g'), m, 1, 'help + person + (to) verb, not -ing: helps me eat.'));
  out = out.concat(A(/\b(letted)\b/g, m, 1, 'The past of LET is LET.'));
  return out;
};
