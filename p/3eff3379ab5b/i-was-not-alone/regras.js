/* As regras do corretor desta aula (nível 1): was / were, there was / there were, a pergunta invertida, I was scared. A aula e a lição de casa Live usam este arquivo. */
var PLURAL_N = '(?:two|three|four|five|six|seven|eight|nine|ten|many|some|a lot of|lots of)';
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b(?:they|we|you)\s+(was|wasn['’]?t)\b/g, m, 1, 'They, we, you: WERE.'));
  out = out.concat(A(/\b(?<!(?:wish|if)\s)(?:i|he|she|it)\s+(were|weren['’]?t)\b(?!\s+(?:to|you|i)\b)/g, m, 1, 'I, he, she, it: WAS.'));
  out = out.concat(A(new RegExp('\\bthere\\s+(was|wasn[\'’]?t)\\s+(?:' + PLURAL_N + ')\\b', 'g'), m, 1, 'More than one: THERE WERE.'));
  out = out.concat(A(/\bthe\s+(?:cups|windows|towels|lights|doors|kids|dogs|plates|chairs|neighbors|neighbours|books|keys)\s+(was|wasn['’]?t)\b/g, m, 1, 'More than one: WERE.'));
  out = out.concat(A(/(?:^\s*|[.!]\s+)((?:you|it|he|she|they|the\s+\w+)\s+(?:was|were))\s+[^.!?]*\?/g, m, 1, 'A question: the verb first. Were you alone?'));
  out = out.concat(A(/\b(was|were)\s+(with\s+(?:fear|cold|hunger|sleep))\b/g, m, 2, 'A feeling is one word: I was scared, cold, hungry, sleepy.'));
  out = out.concat(A(/\b(?:it|he|she|i|they|we|dog|door|window|cup|cups|windows|towels)\s+(not\s+(?:was|were))\b/g, m, 1, 'The no: wasn’t / weren’t.'));
  return out;
};
