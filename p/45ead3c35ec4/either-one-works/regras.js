/* As regras do corretor desta aula (nível 3): both / either / neither, os pares, e uma negação só. A aula e a lição de casa Live usam este arquivo. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b(the both)\b/g, m, 1, 'No the before both: both cities, both of the cities.'));
  out = out.concat(A(/\b((?:don't|doesn't|didn't|can't|won't|isn't|aren't|wasn't|weren't|not)\b[^.!?]{0,30}?\bneither)\b/g, m, 1, 'One negative only: I don’t like EITHER (or: I like neither).'));
  out = out.concat(A(/\b(neither\b[^.!?]{0,40}?\b(?:don't|doesn't|didn't|isn't|aren't|can't|won't))\b/g, m, 1, 'Neither is already the negative: neither of them ALLOWS.'));
  out = out.concat(A(/\b(none of the two|any of the two)\b/g, m, 1, 'With two things, English says neither / either.'));
  out = out.concat(A(/\b(neither\s+\w+\s+or)\b/g, m, 1, 'The partner of neither is nor.'));
  out = out.concat(A(/\b(either\s+\w+\s+nor)\b/g, m, 1, 'The partner of either is or.'));
  out = out.concat(A(/\b((?:either|neither)\s+(?:jobs|apartments|cities|offices|options|days|people|ones))\b/g, m, 1, 'After either / neither: ONE thing, singular.'));
  out = out.concat(A(/\b(both of (?!the\b|them\b|us\b|you\b|my\b|your\b|his\b|her\b|our\b|their\b|these\b|those\b)\w+)/g, m, 1, 'both of THE apartments, or just both apartments.'));
  out = out.concat(A(/\b(both of they|either of they|neither of they)\b/g, m, 1, 'of THEM: both of them.'));
  return out;
};
