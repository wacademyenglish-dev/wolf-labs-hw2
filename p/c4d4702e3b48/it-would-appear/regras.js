/* As regras do corretor desta aula (nível 3): cautela escrita. "Would appear / could be argued / may be argued" no começo sem IT; "can have been / can have + particípio" (alvo: may / might / could have); "may/might/could have + particípio + by" sem been (alvo: may have been caused by); "may/might/could had"; "appear(s) being / appear(s) + verbo base sem to"; "suggest(s|ed) to + verbo" (alvo: suggests that …); "could be argue". A aula e a lição de casa Live usam este arquivo. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/^\s*((?:would|could|may|might) (?:appear|seem|be argued|be said) that)\b/g, m, 1, 'The empty IT opens the sentence: IT would appear that …'));
  out = out.concat(A(/\b(can(?:not|'t|’t)? have (?:been )?\w+(?:ed|en|t))\b/g, m, 1, 'A possible past: MAY / MIGHT / COULD have, not can have.'));
  out = out.concat(A(/\b((?:may|might|could) have (?:caused|killed|destroyed|influenced|changed|edited|damaged|started|made|written|built) by)\b/g, m, 1, 'Passive: may have BEEN caused by.'));
  out = out.concat(A(/\b((?:may|might|could|must) had)\b/g, m, 1, 'After may / might / could: HAVE, not had.'));
  out = out.concat(A(/\b(appears? (?:being|be|live|living|change|changing|work|working|have|having)\b)/g, m, 1, 'APPEAR TO + base verb: appear to be, appear to live.'));
  out = out.concat(A(/\b((?:suggest|suggests|suggested|indicate|indicates|indicated) (?:us |people |them |you )?to \w+)/g, m, 1, 'SUGGEST THAT + a sentence: the study suggests that we should …'));
  out = out.concat(A(/\b(be argue)\b/g, m, 1, 'It could be ARGUED that …'));
  return out;
};
