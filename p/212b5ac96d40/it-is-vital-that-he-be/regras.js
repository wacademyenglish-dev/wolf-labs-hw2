/* As regras do corretor desta aula (nível 3): o subjuntivo formal. Depois de vital/essential/crucial/important/imperative/necessary/recommend/request/propose/require/demand/urge + that: is/are/was/will/would/doesn't/don't/won't/isn't e o -s da terceira pessoa (forma base); depois de insist/suggest/ask + that: só will/would/doesn't/don't/won't (porque "insisted that he was" pode ser fato); "suggest/recommend + pessoa + to"; "that X not to"; a passiva sem be ("that the budget approved") e "be + forma base" ("be approve"). A aula e a lição de casa Live usam este arquivo. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  var FORTE = '(?:vital|essential|crucial|important|imperative|necessary|recommend(?:s|ed)?|request(?:s|ed)?|propose(?:s|d)?|require(?:s|d)?|demand(?:s|ed)?|urge(?:s|d)?)';
  var FRACO = '(?:insist(?:s|ed)?|suggest(?:s|ed)?|ask(?:s|ed)?)';
  var SUJ = '(?:(?:the|every|each|our|his|her|their|my|its) \\w+|no one|everyone|everybody|nobody|i|you|he|she|it|we|they|[a-z]+)';
  out = out.concat(A(new RegExp('\\b' + FORTE + ' that ' + SUJ + ' ((?:is|are|was|were|will|would|doesn\'t|don\'t|won\'t|isn\'t|aren\'t|has to)\\b)', 'g'), m, 1, 'A demand: THAT + the bare verb. that he BE, that she TAKE, that he NOT sign.'));
  out = out.concat(A(new RegExp('\\b' + FRACO + ' that ' + SUJ + ' ((?:will|would|doesn\'t|don\'t|won\'t)\\b)', 'g'), m, 1, 'A demand: THAT + the bare verb (no will, no doesn’t): that he NOT sign.'));
  out = out.concat(A(new RegExp('\\b' + FORTE + ' that (?:(?:the|every|each|our|his|her|their|my|its) \\w+|no one|everyone|everybody|nobody|he|she|it|[a-z]+) ((?!is\\b|was\\b|has\\b|does\\b|this\\b|always\\b|unless\\b|pass\\b|access\\b|discuss\\b|address\\b)[a-z]*[^s\\W]s)\\b', 'g'), m, 1, 'No -s: the same bare verb for every person. that she TAKE.'));
  out = out.concat(A(/\b((?:suggest|recommend|propose)(?:s|ed)? (?:him|her|them|me|us|you|the \w+|dr\.? \w+|[a-z]+) to \w+)/g, m, 1, 'Never a person + TO: suggest THAT he wait, recommend THAT you read.'));
  out = out.concat(A(/(?:^\s*|\bthat )(?:[a-z.]+ ){1,2}(not to \w+)\b/g, m, 1, 'The negative is NOT + bare verb, no TO: that he not be present.'));
  out = out.concat(A(new RegExp('\\b' + FORTE + ' that (?:the|every|each|our|its|their) \\w+ ((?:approved|checked|locked|sent|kept|taken|sold|protected|fixed|signed|done|made))\\b', 'g'), m, 1, 'The passive: BE + participle. that the budget BE approved.'));
  out = out.concat(A(/\b(be (?:approve|lock|check|keep|send|take|sell|protect|fix|sign|make|do))\b/g, m, 1, 'The passive: BE + participle. be approvED, be kePT, be takEN.'));
  return out;
};
