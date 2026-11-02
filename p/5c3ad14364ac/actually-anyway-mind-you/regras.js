/* As regras do corretor desta aula (nível 3): discourse markers. "in the way" como marcador; "to be honestly"; "to be sincere"; "mind," sem YOU no começo; "as I said you"; "as I was said". O "actually = agora" fica com o professor: a forma é a mesma da correção. A aula e a lição de casa Live usam este arquivo. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/^\s*(in the way,)/g, m, 1, 'The marker is BY THE WAY.'));
  out = out.concat(A(/\b(to be honestly)\b/g, m, 1, 'The fixed phrase: TO BE HONEST.'));
  out = out.concat(A(/\b(to be sincere,)/g, m, 1, 'In English: TO BE HONEST.'));
  out = out.concat(A(/^\s*(mind,)/g, m, 1, 'Two words: MIND YOU.'));
  out = out.concat(A(/\b(as i said you)\b/g, m, 1, 'Back to your sentence: AS I WAS SAYING.'));
  out = out.concat(A(/\b(as i was said)\b/g, m, 1, 'AS I WAS SAYING, with -ING.'));
  return out;
};
