/* As regras do corretor desta aula (nível 3): looks / sounds / seems (like). like + adjetivo (looks like expensive), verbo + substantivo sem like (sounds a glass, looks a trap), like + substantivo sem artigo (looks like trap), advérbio (sounds calmly), concordância (it look, he seem, you looks), sounds + frase sem like (it sounds it's raining), like + frase sem be (seems like he lying). O corretor separa as frases com espaço na frente. A aula e a lição de casa Live usam este arquivo. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b((?:looks?|sounds?|seems?|looked|sounded|seemed) like (?:very |so |really )?(?:expensive|cheap|calm|nervous|tired|happy|sad|angry|dangerous|friendly|honest|rich|old|new|cold|hot|good|bad|great|nice|delicious|strange|scared|busy|beautiful))\b(?! (?:man|woman|guy|person|place|city|restaurant|room|house|car|day|idea))/g, m, 1, 'Adjective: no like. It looks expensive.'));
  out = out.concat(A(/\b((?:looks?|sounds?|seems?|looked|sounded) (?:a|an) (?:\w+))\b/g, m, 1, 'A noun: like. It looks like a trap.'));
  out = out.concat(A(/\b((?:looks?|sounds?|seems?) like (?:trap|glass|joke|game|lie|cat|dog|party|movie|film|storm|bomb|door|plan))\b/g, m, 1, 'Like + a / an + noun: like a trap.'));
  out = out.concat(A(/\b((?:looks?|sounds?|seems?) (?:calmly|nervously|happily|sadly|angrily|beautifully|honestly|strangely|badly))\b/g, m, 1, 'After look / sound / seem: an adjective (calm), not an adverb.'));
  out = out.concat(A(/\b((?:it|he|she|the \w+|that|this|his \w+|her \w+) (?:look|sound|seem) (?:like|very|so|\w+))\b/g, m, 1, 'He / she / it: -s. It looks, he seems.', function (x) { return !/\b(?:does|doesn't|doesn’t|did|didn't|didn’t|can|can't|will|to|may|might)\s*$/i.test(m.slice(0, m.indexOf(x[1]))) && !/^(?:the \w+s|his \w+s|her \w+s) /.test(x[1]); }));
  out = out.concat(A(/\b(you (?:looks|sounds|seems))\b/g, m, 1, 'You: look, sound, seem (no -s).'));
  out = out.concat(A(/\b((?:looks?|sounds?|seems?) (?:it'?s|it’s|he'?s|he’s|she'?s|she’s|they'?re|they’re|we'?re|we’re|there'?s|there’s) \w+)/g, m, 1, 'A full sentence: like. It sounds like it’s raining.'));
  out = out.concat(A(/\b((?:looks?|sounds?|seems?) like (?:he|she|they|it|you|we|i) (?:lying|raining|coming|working|crying|waiting|going|playing|hiding))\b/g, m, 1, 'Like + a full sentence: he is lying.'));
  return out;
};
