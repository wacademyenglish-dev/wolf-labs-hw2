/* As regras do corretor desta aula (nível 2): as … as (nunca as … than), the same as, different from, twice as … as, nada de so … as afirmativo. A aula e a lição de casa Live usam este arquivo. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\bas\s+(?:\w+\s+){1,2}?(than)\b/g, m, 1, 'If AS opens it, AS closes it: as good AS.'));
  out = out.concat(A(/\b(the same (?:that|than|of|like))\b/g, m, 1, 'Identical: the same AS.'));
  out = out.concat(A(/\b(different (?:of|that))\b/g, m, 1, 'Not the same: different FROM.'));
  out = out.concat(A(/\b((?:twice|half|three times|two times)\s+more\s+\w+\s+than)\b/g, m, 1, 'A number goes in front: twice AS expensive AS.'));
  out = out.concat(A(/(?:^|[.!?]\s*)(?:[\w']+\s+){1,4}?(?:is|are|was|were)\s+(so)\s+\w+\s+as\b/g, m, 1, 'Equal: AS … as (so … as only after not).'));
  return out;
};
