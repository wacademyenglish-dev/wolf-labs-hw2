/* As regras do corretor desta aula (nível 2): too × either, neither sem not, so/neither com o verbinho na ordem certa. A aula e a lição de casa Live usam este arquivo. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b(?:don't|doesn't|didn't|can't|won't|isn't|aren't|wasn't|haven't|not)\b[^.!?]*?\b(too)(?=\s*(?:[.!?,]|$))/g, m, 1, 'A NO echoes with either: I don’t like it either.'));
  out = out.concat(A(/\b(neither (?:don't|doesn't|didn't|can't|am not|isn't|haven't))\b/g, m, 1, 'neither already has the NOT: Neither do I.'));
  out = out.concat(A(/\b(me neither not|me either)\b/g, m, 1, 'Informal: Me neither.'));
  out = out.concat(A(/\b((?:so|neither) i (?:do|am|can|did|have))\b/g, m, 1, 'The little verb comes first: So do I · Neither am I.'));
  out = out.concat(A(/\b(i too|i also too)\b(?!\s+\w)/g, m, 1, 'Me too. / So do I.'));
  return out;
};
