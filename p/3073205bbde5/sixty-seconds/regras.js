/* As regras do corretor desta aula (nível 2): conectores — and then, and then; so e because na ordem; after that. Pega também a resposta sem nenhum conector. A aula e a lição de casa Live usam este arquivo. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b(and then)\b[^.!?]*\b(?:and then)\b/g, m, 1, 'Not and then, and then: try after that, so, because.'));
  out = out.concat(A(/\b(after this)\s*,/g, m, 1, 'For the next step: After that, …'));
  out = out.concat(A(/\b(because of)\s+(?:i|you|he|she|we|they)\s+\w+/g, m, 1, 'Before a sentence: because (I wanted…). because of + a thing.'));
  out = out.concat(A(/^\s*(because)\s+[^,]+$/g, m, 1, 'Because alone is half a sentence. Join it: I left because …'));
  out = out.concat(A(/\b(so that's why)\b/g, m, 1, 'Simpler: so … / that’s why …'));
  return out;
};
