/* As regras do corretor desta aula (nível 4): may not be able to, far + comparativo, consequência. may not to be able, may not can, maybe not able, be able sem to, very + comparativo, far more + adjetivo curto, more far, fewer com adjetivo / incontável, will depois de if / unless, unless + not, will must, must to. O corretor separa as frases com espaço na frente. A aula e a lição de casa Live usam este arquivo. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b(may not to be able|may to be able)\b/g, m, 1, 'May not be able TO + verb (no to after may).'));
  out = out.concat(A(/\b((?:may|might|will) (?:not )?can)\b/g, m, 1, 'May and can don’t go together: may not be able to.'));
  out = out.concat(A(/\b(maybe not able)\b/g, m, 1, 'May not be able to (maybe is an adverb).'));
  out = out.concat(A(/\b(be able (?!to\b)(?:stop|come|win|go|do|finish|help|see|save|leave|pay))\b/g, m, 1, 'Don’t forget to: be able to + verb.'));
  out = out.concat(A(/\b(very (?:stronger|weaker|better|worse|harder|easier|bigger|faster|less|more|smaller|older|calmer|scarier))\b/g, m, 1, 'Comparative: far / much + -er (far stronger). Very goes with the simple adjective.'));
  out = out.concat(A(/\b((?:far|much) more (?:strong|hard|easy|big|fast|weak|small|old|calm|scary|good|bad)(?:er)?)\b/g, m, 1, 'Short adjectives take -er: far stronger, far harder.'));
  out = out.concat(A(/\b(more far)\b/g, m, 1, 'Far + comparative: far harder.'));
  out = out.concat(A(/\b(fewer (?:scary|dangerous|strong|fear|time|money|water|important))\b/g, m, 1, 'Less with adjectives and uncountables; fewer with plural nouns.'));
  out = out.concat(A(/\b((?:if|unless) (?:\w+ ){1,2}?(?:will|won't) \w+)/g, m, 1, 'After if / unless: present (if we don’t, unless we find).', function (x) { return !/(?:know|wonder|ask|sure) $/.test(x.input.slice(0, x.index)); }));
  out = out.concat(A(/\b(unless (?:\w+ ){1,2}?(?:don't|doesn't|do not|does not) \w+)/g, m, 1, 'Unless already means if … not: unless we find help.'));
  out = out.concat(A(/\b(will must|will can)\b/g, m, 1, 'Will and must don’t go together: we must hurry.'));
  out = out.concat(A(/\b(must to \w+)/g, m, 1, 'Must + verb, no to.'));
  out = out.concat(A(/\b(if (?:\w+ ){1,2}?not (?:stand|stay|help|come|go|fight))\b/g, m, 1, 'The negative: don’t stand.'));
  return out;
};
