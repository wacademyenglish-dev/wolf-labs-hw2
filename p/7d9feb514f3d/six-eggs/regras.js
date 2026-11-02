/* As regras do corretor desta aula (nível 1): and / but / so / because numa frase só. A aula e a lição de casa Live usam este arquivo.
   Esta usa a frase ORIGINAL (com maiúsculas) para ver a letra depois da vírgula e o começo da frase. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/^\s*(and|but|so)\b/g, frase, 1, 'One sentence: a comma before and, but, so, not a full stop.'));
  out = out.concat(A(/,\s+(And|But|So|Because)\b/g, frase, 1, 'A small letter after the comma: , and · , but · , so.'));
  out = out.concat(A(/^\s*(because)\s*[.!?]?\s*$/g, m, 1, 'Keep it one sentence: I stayed home because it was cold.'));
  out = out.concat(A(/\b(because of)\s+(?:i|you|he|she|it|we|they)\s+\w+/g, m, 1, 'Before a sentence: because (no of). Because it was cold.'));
  out = out.concat(A(/\b(so that because|because so|but because|and but|but and)\b/g, m, 1, 'One joining word at a time.'));
  out = out.concat(A(/\b(becouse|beacause|becuase|becaus)\b/g, m, 1, 'Spelling: because.'));
  return out;
};
