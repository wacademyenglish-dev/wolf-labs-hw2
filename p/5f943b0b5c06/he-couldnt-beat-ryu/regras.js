/* As regras do corretor desta aula (nível 2): could / couldn't / was able to. could / couldn't + to, coulds, could + verbo com -s, could + passado, could + -ing, didn't / don't could, Did you could…?, pergunta sem inversão (You could see…?), can / can't com marca de passado (as a child, when I was), was / were able sem to, he / she were able. O corretor separa as frases com espaço na frente. A aula e a lição de casa Live usam este arquivo. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b((?:could|couldn't|couldn’t|could not) to \w+)/g, m, 1, 'After could / couldn’t: no to.'));
  out = out.concat(A(/\b(coulds)\b/g, m, 1, 'Could never changes: she could.'));
  out = out.concat(A(/\b((?:could|couldn't|couldn’t|could not) (?:fights|kicks|beats|sleeps|runs|swims|does|plays|sings|wins|sees|controls|goes|rides|cooks|speaks|stays))\b/g, m, 1, 'After could: the base verb, no -s.'));
  out = out.concat(A(/\b((?:could|couldn't|couldn’t|could not) (?:fought|kicked|beat him|slept|ran|swam|did|played|sang|won|saw|controlled|went|rode|cooked|spoke|stayed|was|were|had))\b/g, m, 1, 'Could is already the past: could + the base verb.'));
  out = out.concat(A(/\b((?:could|couldn't|couldn’t) \w+ing)\b/g, m, 1, 'After could: the base verb (no -ing).', function (x) { return !/\b(?:could|couldn't|couldn’t) (?:bring|sing|swing|ring)\b/.test(x[1]); }));
  out = out.concat(A(/\b((?:didn't|didn’t|don't|don’t|doesn't|doesn’t|did not|do not) could)\b/g, m, 1, 'The negative is couldn’t.'));
  out = out.concat(A(/\b((?:did|do|does) (?:i|you|we|they|he|she|ryu|ken) could)\b/g, m, 1, 'Questions: Could you…? (no did).'));
  out = out.concat(A(/^\s*((?:i|you|we|they|he|she|ryu|ken) could [^?.!]*\?)/g, m, 1, 'Questions: Could comes first. Could you…?'));
  out = out.concat(A(/\b((?:as a (?:child|kid|boy|girl)|when (?:i|he|she|we|they) (?:was|were) (?:young|a child|a kid|little|small|ten|five))[^.!?]*\b(?:can't|can’t|cannot|can) \w+)/g, m, 1, 'In the past: could / couldn’t.'));
  out = out.concat(A(/\b((?:was|were|wasn't|wasn’t|weren't|weren’t) able (?!to\b)\w+)/g, m, 1, 'Was able to: don’t forget the to.'));
  out = out.concat(A(/\b((?:he|she|it|ryu|ken|chun-li|i) were able)\b/g, m, 1, 'I / he / she: was able to.'));
  return out;
};
