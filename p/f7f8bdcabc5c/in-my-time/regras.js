/* As regras do corretor desta aula (nível 3): orações relativas B1. what como relativo (the shield what, everything what), who para coisa, which para pessoa, who / which + possessivo (who his cloak: é whose), which no lugar de where com lugar, objeto repetido depois do relativo (that he carried it), sujeito repetido (who they died), where … there. O corretor separa as frases com espaço na frente. A aula e a lição de casa Live usam este arquivo. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b((?:everything|anything|something|nothing|all|the \w+) what (?!a |an |the )\w+)/g, m, 1, 'What is not a relative pronoun: that / which / who.', function (x) { return !/^the (?:question|problem|idea|thing is) what/.test(x[1]); }));
  out = out.concat(A(/\b((?:the|a|an) (?:shield|hammer|thing|stone|ring|book|film|movie|phone|car|table|object|decision|idea|song|gift|cloak|sword) who)\b/g, m, 1, 'A thing: which / that.'));
  out = out.concat(A(/\b((?:the|a|an) (?:warriors?|heroes|hero|man|woman|people|person|teacher|friend|neighbor|doctor|boy|girl|players?|soldiers?) which)\b/g, m, 1, 'People: who / that.'));
  out = out.concat(A(/\b((?:who|which|that) (?:his|her|their|its) \w+)/g, m, 1, 'The owner: whose + noun.'));
  out = out.concat(A(/\b((?:the|a|an) (?:man|woman|person|neighbor|friend|cousin|teacher) which (?!is|was|are|were|has|had|lives|works)\w+ (?:can|is|was|has|flies|works))/g, m, 1, 'The owner: whose + noun.'));
  out = out.concat(A(/\b((?:the|a|an) (?:country|city|place|house|room|town|beach|kitchen|street|school|restaurant|café|park) which (?:i|you|we|they|he|she|the \w+|people|my \w+) (?:meet|met|live|lived|grew|feel|felt|work|worked|play|played|swim|swam|ate|eat|was born|were born))/g, m, 1, 'A place + a full sentence: where.'));
  out = out.concat(A(/\b((?:that|which|who) (?:i|you|we|they|he|she|steve|thor|everybody|everyone|only \w+) (?:\w+ )?(?:carried|carry|lift|can lift|sacrificed|have to make|fears|fear|used to carry|love|loved|saw|bought|wrote|made|gave|need|needed) (?:it|him|her|them))\b/g, m, 1, 'Don’t repeat it / him: that already means it.'));
  out = out.concat(A(/\b((?:everything|the decision|the thing|the film|the book) (?:i|you|we|they|he|she) (?:\w+ )?(?:sacrificed|have to make|need|saw|bought|love|made|wrote) it)\b/g, m, 1, 'Don’t repeat it: the decision we have to make.'));
  out = out.concat(A(/\b(who (?:they|he|she|we|i) (?:died|live|lived|work|worked|came|were|was|are|is|fought|helped))\b/g, m, 1, 'Who is already the subject: who died.'));
  out = out.concat(A(/\b(where [^.!?]*? there)\b/g, m, 1, 'Don’t repeat the place: where already means there.', function (x) { return !/\bwhere (?:is|are) there\b/.test(x[1]) && !/^where (?:there|is there|are there)/.test(x[1]); }));
  return out;
};
