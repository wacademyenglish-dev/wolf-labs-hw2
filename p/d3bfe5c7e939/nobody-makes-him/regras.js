/* As regras do corretor desta aula (nível 2): have to como verbo normal (do/does/did), must sem to e sem passado, he has to, doesn't have to. A aula e a lição de casa Live usam este arquivo. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b(must to)\s+\w+/g, m, 1, 'No TO after must. Everyday form: have to.'));
  out = out.concat(A(/\b((?:don't|doesn't|didn't|do not|does not) must)\b/g, m, 1, 'Not necessary: don’t have to.'));
  out = out.concat(A(/\b((?:haven't|hasn't|hadn't) to)\s+\w+/g, m, 1, 'have to is a normal verb: don’t have to.'));
  out = out.concat(A(/\b(?:he|she|it|my (?:mom|dad|mother|father|boss|brother|sister|son|daughter|husband|wife))\s+(have to)\b/g, m, 1, 'The S sits on has: he has to.'));
  out = out.concat(A(/\b((?:doesn't|does not|didn't|did not) has to)\b/g, m, 1, 'After doesn’t / didn’t: have to.'));
  out = out.concat(A(/\b(?:^|[.!?]\s*)(have (?:you|they|we) to)\s+\w+/g, m, 1, 'Questions take do: Do you have to …?'));
  out = out.concat(A(/\b(musted|had must)\b/g, m, 1, 'must has no past: had to.'));
  return out;
};
