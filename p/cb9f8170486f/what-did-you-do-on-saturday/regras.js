/* As regras do corretor desta aula (nível 1): perguntas no passado — did + verbo base, a ordem (Where did you go?), respostas curtas. A aula e a lição de casa Live usam este arquivo. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  var PAST = '(went|ate|saw|made|got|had|bought|slept|drank|came|took|met|read|wrote|rode|played|watched|cooked|visited|stayed|worked|walked|liked|danced|studied)';
  out = out.concat(A(new RegExp("\\b(?:did|didn't|didnt)\\s+(?:you|i|he|she|we|they|it)?\\s*" + PAST + '\\b', 'g'), m, 1, 'did is already the past. After it, the base verb: go, eat, see.'));
  out = out.concat(A(new RegExp('\\b(?:where|what|who|when|how many \\w+|what time)\\s+(?:you|he|she|they|we)\\s+' + PAST + '\\b', 'g'), m, 1, 'Question word, then did, then you, then the verb: Where did you go?'));
  out = out.concat(A(new RegExp('\\b(?:yes|no),\\s*(?:i|he|she|we|they)\\s+' + PAST + '\\s*[.!]?\\s*$', 'g'), m, 1, 'Short answer: Yes, I did. / No, I didn’t.'));
  out = out.concat(A(/\b(do)\s+(?:you|they|we)\s+\w+[^.?!]*\blast\s+(?:saturday|sunday|weekend|night|week)\b/g, m, 1, 'Last Saturday is over: Did you …?'));
  out = out.concat(A(/\b(?:no),\s*(?:he|she|it)\s+(don't|doesn't)\s*[.!]?\s*$/g, m, 1, 'In the past: No, she didn’t.'));
  return out;
};
