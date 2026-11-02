/* As regras do corretor desta aula (nível 2): would só para ação repetida; estado com used to; uma vez = past simple. A aula e a lição de casa Live usam este arquivo.
   Frase com IF fica de fora da regra do estado (é condicional: I would be there). */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  if (!/\bif\b/.test(m)) out = out.concat(A(/\b((?:would|'d)\s+(?:always\s+)?(?:have|be|love(?!\s+to\b)|hate|live|know|own|believe|smell|seem))\b/g, m, 1, 'A state can’t be filmed: used to have, used to be.'));
  out = out.concat(A(/\b(would\s+(?!like\b|love\s+to\b)\w+)\b[^.!?]*\b(?:one last time|one more time|once(?!\s+(?:a|an|every)\b)|that spring|that summer|that year|in \d{4})\b/g, m, 1, 'It happened once: past simple (she sold it, we drove down one more time).'));
  out = out.concat(A(/\b(?:that spring|that summer|that year|one day),?\s+(?:\w+\s+){0,2}?(would\s+(?!like\b)\w+)/g, m, 1, 'It happened once: past simple (that summer she sold it).'));
  out = out.concat(A(/\b(use to)\s+\w+/g, m, 1, 'In the past: used to.'));
  out = out.concat(A(/\b(used\s+(?!to\b)(?:have|be|go|live|play|swim|drive|make|eat))\b/g, m, 1, 'used TO + verb.'));
  return out;
};
