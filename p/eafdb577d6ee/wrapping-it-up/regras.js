/* As regras do corretor desta aula (nível 3): elipse e substituição. "think/hope/suppose/guess/afraid/believe + yes/no" (so / not); "I don't hope so" (I hope not); "So I do / So I am" no começo (So do I); "Neither + auxiliar negativo"; "I also don't/can't/didn't" (Neither … I); "I'd love / I'd like / I want" no fim (+ to); "Yes, I'm." (sem contração no fim); "the gold." / "the smalls" (one / ones). A aula e a lição de casa Live usam este arquivo. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b((?:think|hope|suppose|guess|afraid|believe) (?:yes|no))\b/g, m, 1, 'After think, hope, suppose, be afraid: SO or NOT. I think so. I hope not.'));
  out = out.concat(A(/\b(i don[’']t hope so)\b/g, m, 1, 'With hope, NOT goes at the end: I hope not.'));
  out = out.concat(A(/(?:^\s*|[.!?—–-]\s*)(so (?:i|we) (?:do|am|have|can|did|will))\b/g, m, 1, 'Auxiliary first: So DO I. So AM I.'));
  out = out.concat(A(/\b((?:neither|nor) (?:can[’']t|don[’']t|didn[’']t|haven[’']t|won[’']t|isn[’']t|aren[’']t|doesn[’']t|wasn[’']t))\b/g, m, 1, 'Neither is already negative: Neither CAN I, Neither DID I.'));
  out = out.concat(A(/\b(i also (?:can[’']t|don[’']t|didn[’']t|haven[’']t|won[’']t|cannot|do not))\b/g, m, 1, 'Agree with a negative the short way: Neither can I. Nor have I.'));
  out = out.concat(A(/\b(i[’']d (?:love|like)|i want)(?=[.!?]|$)/g, m, 1, 'Drop the verb, keep TO: I’d love to. I want to.'));
  out = out.concat(A(/\b((?:i|you|we|they)[’'](?:m|re))(?=[.!?]|$)/g, m, 1, 'No contraction at the end: Yes, I AM. Yes, they ARE.'));
  out = out.concat(A(/\b(the (?:gold|green|red|blue|white|black|big|small|tall|short|new|old))(?=[.,!?]|$)/g, m, 1, 'Keep the thing: the gold ONE, the small ONES.'));
  out = out.concat(A(/\b(the (?:golds|greens|reds|blues|bigs|smalls|talls))\b/g, m, 1, 'Adjectives have no plural: the small ONES.'));
  return out;
};
