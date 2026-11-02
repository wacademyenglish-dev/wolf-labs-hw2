/* As regras do corretor desta aula (nível 2): must / mustn't / have to / don't have to / had to. must / mustn't + to, musts, don't / doesn't must, he / she have to, has / have sem to antes do verbo, Have I to…? / Must I to…?, must + passado (musted, must trained), must yesterday (o passado é had to). O corretor separa as frases com espaço na frente. A aula e a lição de casa Live usam este arquivo. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b((?:must|mustn't|mustn’t|must not) to \w+)/g, m, 1, 'After must / mustn’t: no to. (But have TO.)'));
  out = out.concat(A(/\b(must (?:i|you|we|they|he|she) to \w+)/g, m, 1, 'After must: no to. Better: Do I have to…?'));
  out = out.concat(A(/\b(musts|musted)\b/g, m, 1, 'Must never changes: he must. In the past: had to.'));
  out = out.concat(A(/\b((?:don't|don’t|doesn't|doesn’t|didn't|didn’t|do not|does not) must)\b/g, m, 1, 'The negative of must is mustn’t. (Or: don’t have to.)'));
  out = out.concat(A(/\b((?:he|she|it|tanjiro|nezuko|zenitsu|inosuke|my \w+|the \w+) have to)\b/g, m, 1, 'He / she: has to.', function (x) { return !/\b(?:do|does|did|don't|don’t|doesn't|doesn’t|didn't|didn’t|will|would|not)\s*$/i.test(frase.slice(0, frase.toLowerCase().indexOf(x[1].toLowerCase()))) && !/^(?:the corps|the slayers|my parents|my friends|the kids|the children)/.test(x[1]); }));
  out = out.concat(A(/\b((?:i|you|we|they) has to)\b/g, m, 1, 'I / you / we / they: have to.'));
  out = out.concat(A(/\b((?:has|have|had) (?:carry|train|go|wear|survive|protect|work|study|wake|do|be|kill|eat|fight|sell|learn|take|wash|stay|help))\b/g, m, 1, 'Have to / has to: don’t forget the to.'));
  out = out.concat(A(/^\s*((?:have|has) (?:i|you|we|they|he|she) to)\b/g, m, 1, 'Questions: Do I have to…? Does she have to…?'));
  out = out.concat(A(/\b(must (?:trained|went|carried|wore|survived|protected|worked|studied|did|was|were|had|learned|sold|fought))\b/g, m, 1, 'In the past: had to + verb. Must has no past.'));
  out = out.concat(A(/\b(must [^.!?]*\b(?:yesterday|last (?:year|week|month|night)|when i was))\b/g, m, 1, 'In the past: had to.'));
  return out;
};
