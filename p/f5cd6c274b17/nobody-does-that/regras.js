/* As regras do corretor desta aula (nível 2): used to + verbo puro; com did, use to (sem d); "I use to" no presente vira usually. A aula e a lição de casa Live usam este arquivo. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b(?:didn't|did not|did (?:you|he|she|they|we|i|your \w+|my \w+))\s+(used to)\b/g, m, 1, 'With did, no D: didn’t use to · did you use to.'));
  out = out.concat(A(/(?<!\bdid\s)(?<!\bdidn't\s)(?<!\bdid not\s)\b(?:i|you|we|they)\s+(use to)\s+\w+/g, m, 1, 'For the past: I used to. For now: I usually.'));
  out = out.concat(A(/\b(?:he|she|it)\s+(uses to)\b/g, m, 1, 'For now: he usually … For the past: he used to.'));
  out = out.concat(A(/\bused to\s+(\w+(?:ed|ing))\b/g, m, 1, 'After used to, the plain verb: used to play.'));
  out = out.concat(A(/\bused to\s+(went|ate|saw|had|was|were|did|took|drove|came|got|made|ran|swam|rode|sang|wrote)\b/g, m, 1, 'After used to, the plain verb: used to go.'));
  out = out.concat(A(/\b(used to \w+(?:\s+\w+){0,4}\s+in (?:19|20)\d\d)\b/g, m, 1, 'One time, with a date? Simple past: I went in 2019.'));
  out = out.concat(A(/\b(where|what|how|when|who) (you|he|she|they) (used to)\b/g, m, 3, 'Question: where did you use to …?'));
  return out;
};
