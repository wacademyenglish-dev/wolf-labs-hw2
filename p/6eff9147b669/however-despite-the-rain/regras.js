/* As regras do corretor desta aula (nível 3): despite sem of; despite / in spite of + substantivo ou -ing (nunca sujeito + verbo); although / even though + sujeito + verbo; although OU but; However começa frase nova. A aula e a lição de casa Live usam este arquivo. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b(despite of)\b/g, m, 1, 'despite: no of (despite the rain). Or in spite of.'));
  out = out.concat(A(/\b(in spite (?!of\b)\w+)/g, m, 1, 'in spite OF: three words.'));
  out = out.concat(A(/\b((?:despite|in spite of) (?:i|you|he|she|it|we|they|there) (?:was|were|is|are|am|had|have|has|did|do|does|lost|got|went|came|rained|felt|didn't|don't|doesn't|wasn't|weren't|couldn't|can't)\b)/g, m, 1, 'Subject + verb? Use although / even though. Or despite + a noun / -ing.'));
  out = out.concat(A(/\b((?:despite|in spite of) (?:to be|be|expensive|tired|cold|late|hard|difficult|bad))\b/g, m, 1, 'despite + a noun or -ing: despite being tired.'));
  out = out.concat(A(/\b((?:although|even though)\b[^.]*?,\s*but)\b/g, m, 1, 'although OR but. Never both.'));
  out = out.concat(A(/\b((?:although|even though) the (?:rain|mud|delay|price|power cut|cold|traffic|noise))\s*,/g, m, 1, 'although needs subject + verb: although it rained. Or despite the rain.'));
  out = out.concat(A(/(,\s*however\s+(?:i|you|he|she|it|we|they|the|my|nobody|everyone|people)\b)/g, m, 1, 'However starts a NEW sentence: … . However, …'));
  return out;
};
