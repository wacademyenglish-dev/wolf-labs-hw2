/* As regras do corretor desta aula (nível 1): too + adjetivo, it's hot, I am cold. too much + adjetivo, Is hot / Is cold no começo (sem it), I have cold / hunger / hot, I'm with cold / hunger, too + adjetivo + for + verbo, adjetivo + too + to (ordem), too good / too nice / too beautiful (é very), sem be (The lava too hot). O corretor separa as frases com espaço na frente. A aula e a lição de casa Live usam este arquivo. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b(too much (?:hot|cold|big|small|thin|thick|heavy|expensive|difficult|easy|good|tired|fast|slow|young|old|far|high|long|short|dangerous|noisy|cheap))\b/g, m, 1, 'Too + adjective, no much: too hot, too thin.'));
  out = out.concat(A(/^\s*((?:is|was) (?:hot|cold|warm|sunny|rainy|windy|cloudy|snowing|raining)\b)/g, m, 1, 'Weather starts with it: It’s hot today.'));
  out = out.concat(A(/\b((?:i|you|we|they) (?:have|had) (?:cold|hunger|hot|thirst|fear|sleep))\b/g, m, 1, 'In English you ARE cold / hungry: I am cold.'));
  out = out.concat(A(/\b((?:i'm|i’m|i am|you are|we are|he is|she is) with (?:cold|hunger|hot|thirst|fear|sleep))\b/g, m, 1, 'No with: I am cold. I am hungry.'));
  out = out.concat(A(/\b(too \w+ for (?:walk|go|swim|eat|drink|touch|play|run|carry|sleep|fight|see|cross|wear))\b/g, m, 1, 'Too + adjective + to + verb: too thin to walk.'));
  out = out.concat(A(/\b((?:hot|cold|big|small|thin|heavy|difficult|tired|far) too to)\b/g, m, 1, 'Too comes before the adjective: too cold to swim.'));
  out = out.concat(A(/\b((?:is|are|was|so) too (?:good|nice|beautiful|delicious|great|wonderful|amazing|perfect|kind|cute|fun|happy))\b/g, m, 1, 'Too means a problem. For a good thing: very good.'));
  out = out.concat(A(/\b((?:the \w+|it|he|she|they|manny|sid|diego) too (?:hot|cold|big|small|thin|heavy|close|dangerous))\b/g, m, 1, 'Use be: The lava is too hot.', function (x) { return !/\b(?:is|are|was|were|am|'s|’s|'re|’re|looks?|feels?|seems?)\s+$/.test(frase.slice(0, frase.toLowerCase().indexOf(x[1].toLowerCase()))); }));
  out = out.concat(A(/\b(very (?:big|small|hot|cold|thin|heavy) to (?:go|walk|swim|touch|eat|drink|carry|wear))\b/g, m, 1, 'A problem: too, not very. too big to go.'));
  return out;
};
