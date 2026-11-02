/* As regras do corretor desta aula (nível 3): ", which" para comentar a frase inteira. ", what is/means…" e ", that means/is why…" (use which); "which it means"; ", so which"; ", which mean/make/show…" (uma ideia = um verbo no singular); sem vírgula antes de "which is why/which means"; ", this/it means…" (duas frases coladas com vírgula). A aula e a lição de casa Live usam este arquivo. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/(, what (?:is|was|means|meant|explains|explained|made|makes|surprised|surprises|shows|showed|worries))\b/g, m, 1, 'For the whole idea, after a comma: WHICH, never what.'));
  out = out.concat(A(/(, that (?:is why|was why|means|meant|explains|explained|made|surprised|shows|showed))\b/g, m, 1, 'THAT can’t follow the comma here: …, which means / which is why.'));
  out = out.concat(A(/\b(which it (?:is|was|means|meant|explains|made|makes|shows))\b/g, m, 1, 'WHICH is already the subject: no IT.'));
  out = out.concat(A(/(, so which)\b/g, m, 1, 'Just “, which”: no SO.'));
  out = out.concat(A(/(, which (?:mean|make|show|explain|surprise|worry))\b/g, m, 1, 'One idea is one thing: which MEANS, which MAKES, which SHOWS.'));
  out = out.concat(A(/\b((?!word\b|one\b|thing\b|sign\b)[a-z0-9’']+ which (?:is why|was why|means|meant|explains|explained))\b/g, m, 1, 'A comment on the whole idea needs a comma: …, which is why …'));
  out = out.concat(A(/(, (?:this|it) (?:is why|was why|means|meant|explains|explained))\b/g, m, 1, 'Two sentences glued with a comma: use “, which …” or a period.'));
  out = out.concat(A(/(, which is why that)\b/g, m, 1, 'No THAT after “which is why”.'));
  return out;
};
