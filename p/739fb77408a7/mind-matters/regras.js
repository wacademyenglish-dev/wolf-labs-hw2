/* As regras do corretor desta aula (nível 2): must / might / can't + verbo puro; can't be (não must not be) para o impossível; have to não é dedução de sentimento. A aula e a lição de casa Live usam este arquivo. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b((?:must|might|can't|cannot|may) to)\s+be\b/g, m, 1, 'No TO: must be, might be, can’t be.'));
  out = out.concat(A(/\b(musts|mights)\b/g, m, 1, 'must never changes: she must be.'));
  out = out.concat(A(/\b(?:must|might|can't)\s+(is|are|was|being|been)\b/g, m, 1, 'After must, might, can’t: be.'));
  out = out.concat(A(/\b(must not be|mustn't be)\b/g, m, 1, 'For impossible, English says can’t be.'));
  out = out.concat(A(/\b((?:has|have) to be)\s+(?:very\s+|so\s+|really\s+)?(?:tired|nervous|exhausted|anxious|sad|happy|hungry|worried|sick|married|angry|bored|stressed)\b/g, m, 1, 'A guess from proof: must be. have to is a rule.'));
  return out;
};
