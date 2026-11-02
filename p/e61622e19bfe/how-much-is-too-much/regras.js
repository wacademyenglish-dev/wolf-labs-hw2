/* As regras do corretor desta aula (nível 3): too much (não contável) × too many (contável); enough antes do substantivo, depois do adjetivo; too + adjetivo; I don't have enough. A aula e a lição de casa Live usam este arquivo. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b((?:too much|so much|how much)\s+(?:people|hours|cups|messages|apps|tabs|times|friends|things|days|minutes|glasses|chairs|emails|calls|videos))\b/g, m, 1, 'You can count them: too MANY.'));
  out = out.concat(A(/\b((?:too many|so many|how many)\s+(?:coffee|time|sleep|work|water|noise|money|information|homework|stress|traffic|food|milk|sugar|tea))\b/g, m, 1, 'You can’t count it: too MUCH (or count the cups: too many cups).'));
  out = out.concat(A(/\b(enough\s+(?:big|small|good|quiet|fast|old|tall|strong|warm|cold|long|early|late|clean|cheap|easy|hard|close|far))\b/g, m, 1, 'Adjective first: big enough.'));
  out = out.concat(A(/\b((?:i|you|we|they) have not enough|(?:he|she|it) has not enough|(?:i|you|we|they) haven't enough)\b/g, m, 1, 'I don’t have enough…'));
  out = out.concat(A(/\b(too (?:much|many)\s+(?:tired|busy|small|big|hot|cold|late|early|expensive|difficult|easy|loud|slow|fast|young|old))\b/g, m, 1, 'Before an adjective: just too (too tired).'));
  out = out.concat(A(/\b((?:time|money|sleep|chairs|people|water|space) enough)\b/g, m, 1, 'enough comes BEFORE the noun: enough time.'));
  return out;
};
