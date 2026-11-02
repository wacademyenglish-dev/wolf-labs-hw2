/* As regras do corretor desta aula (B1): comparativos. "more better", "more calm/happy/busy" (palavra curta com more), "as … than", "two times more", "the double", "more … that". A aula e a lição de casa Live usam este arquivo. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b(more (?:better|worse|bigger|smaller|calmer|happier|easier|faster|longer|shorter))\b/g, m, 1, 'It’s already a comparative: better, not more better.'));
  out = out.concat(A(/\b(more (?:good|bad|calm|happy|busy|easy|fast|long|short|big|small|cheap|old|young))\b/g, m, 1, 'Short word: -er (calmer, happier, busier), not more.'));
  out = out.concat(A(/\b(as \w+ than)\b/g, m, 1, 'as … as, never as … than: as good as.'));
  out = out.concat(A(/\b(two times (?:more|less|as))\b/g, m, 1, 'Say twice: twice as much, twice as many.'));
  out = out.concat(A(/\b(the double)\b/g, m, 1, 'Not “the double”: twice as much / twice as many.'));
  out = out.concat(A(/\b((?:better|worse|bigger|smaller|calmer|happier|busier|easier|faster|longer|shorter|cheaper|more \w+|less \w+) that)\b/g, m, 1, 'Comparative + than, not that: calmer than.'));
  return out;
};
