/* As regras do corretor desta aula (nível 1): direções com o verbo, turn AT, on your left, next to, between, opposite. A aula e a lição de casa Live usam este arquivo. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\bgo\s+(to)\s+straight\b/g, m, 1, 'Directions start with the verb alone: Go straight.'));
  out = out.concat(A(/\bturn\s+(?:left|right)\s+(in)\s+the\b/g, m, 1, 'You turn AT a place: turn left at the bakery.'));
  out = out.concat(A(/\bturn\s+(to)\s+(?:the\s+)?(?:left|right)\b/g, m, 1, 'Turn left / turn right. No to.'));
  out = out.concat(A(/\b(in)\s+your\s+(?:left|right)\b/g, m, 1, 'Your side: ON your left.'));
  out = out.concat(A(/\b(next of|near of|beside of|between of|opposite of|past of)\b/g, m, 1, 'No of here: next to, near, between, opposite, go past.'));
  out = out.concat(A(/\b(traverse)\b/g, m, 1, 'The everyday word is cross.'));
  out = out.concat(A(/\b(pass for)\b/g, m, 1, 'Go past the bank.'));
  out = out.concat(A(/\b(?:take|get)\s+the\s+(?:first|second|third)\s+(at)\s+(?:left|right)\b/g, m, 1, 'Take the first right. No at.'));
  out = out.concat(A(/\b(in the half)\s+of\b/g, m, 1, 'The center: in the middle of.'));
  out = out.concat(A(/\bhow\s+(i go|can i go|i get)\s+to\b/g, m, 1, 'The question: How do I get to …?'));
  return out;
};
