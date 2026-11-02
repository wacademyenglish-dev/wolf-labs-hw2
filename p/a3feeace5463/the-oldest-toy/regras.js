/* As regras do corretor desta aula (nível 2): superlativos. the most + adjetivo curto (the most old, the most big), the + comparativo no lugar do superlativo (the older toy, the more modern), y → -iest esquecido (the shinyest, the funnyest), -est em adjetivo longo (the nervousest, the usefulest), the most + -est (the most modernest), superlativo sem the (is most nervous), the goodest / the most good / the baddest / the most bad, superlativo + of + lugar (the funniest toy of the house: é in). O corretor separa as frases com espaço na frente. A aula e a lição de casa Live usam este arquivo. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b(the most (?:old|big|small|new|young|tall|short|fast|slow|cheap|long|nice|cold|hot|happy|funny|shiny|easy|busy|tired|good|bad))\b/g, m, 1, 'Short adjectives: the + -est. the oldest, the funniest, the best.', function (x) { return !/the most tired\b/.test(x[1]); }));
  out = out.concat(A(/\b(the (?:older|bigger|smaller|newer|younger|taller|faster|funnier|shinier|better|worse|more (?:modern|useful|nervous|important|beautiful|expensive|interesting|famous)) (?:toy|thing|kid|person|day|man|woman|restaurant|app|city|place|one|in|on|of))\b/g, m, 1, 'The top of many: the + -est / the most. the oldest, the most modern.'));
  out = out.concat(A(/\b(shinyest|funnyest|happyest|easyest|busyest|prettyest)\b/g, m, 1, 'Adjective ending in y: y → -iest. the shiniest, the funniest.'));
  out = out.concat(A(/\b(nervousest|usefulest|modernest|beautifulest|expensivest|importantest|interestingest|famousest)\b/g, m, 1, 'Long adjectives: the most. the most nervous, the most useful.'));
  out = out.concat(A(/\b(most \w+est)\b/g, m, 1, 'Only one: the most modern / the oldest (not both).'));
  out = out.concat(A(/\b((?:is|are|was|were|'s|’s) most (?:nervous|useful|modern|important|beautiful|expensive|interesting|famous) \w+)/g, m, 1, 'Superlatives need the: the most nervous toy.'));
  out = out.concat(A(/\b(goodest|baddest)\b/g, m, 1, 'Irregular: the best, the worst.'));
  out = out.concat(A(/\b(the most (?:good|bad))\b/g, m, 1, 'Irregular: the best, the worst.'));
  out = out.concat(A(/\b((?:the \w+est|the most \w+|the best|the worst) (?:\w+ )?of (?:the )?(?:house|box|kitchen|room|city|world|school|country|shop|shelf))\b/g, m, 1, 'A place: in. in the house, in the world.'));
  return out;
};
