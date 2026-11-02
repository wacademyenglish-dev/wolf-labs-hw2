/* As regras do corretor desta aula (nível 2): zero conditional — if + presente, presente; sem will na metade do if; o -s de he/she/it. A aula e a lição de casa Live usam este arquivo. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\bif\s+[^,.!?]*?\b(will|'ll)\s+\w+[^,.!?]*,/g, m, 1, 'In the if half: present, no will.'));
  out = out.concat(A(/\b(?:if|when)\s+(?:he|she|it|my (?:brother|sister|mom|dad|son|daughter|wife|husband|baby|cat|dog))\s+(drink|sleep|run|read|look|take|go|eat|wake|work|drive|play|feel|watch|stay|get)\b(?!s)/g, m, 1, 'he, she, it: the -s (drinks, sleeps, runs…).'));
  out = out.concat(A(/,\s*(?:he|she|it)\s+(sleep|stay|wake|feel|fall|lie|get|go|drink|look)\b(?!s)/g, m, 1, 'he, she, it: the -s (sleeps, stays, wakes…).'));
  out = out.concat(A(/\b(?:i|you|we|they)\s+(doesn't|gets|sleeps|wakes|feels|drinks)\b/g, m, 1, 'The -s is only for he, she, it.'));
  return out;
};
