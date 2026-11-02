/* As regras do corretor desta aula (nível 1): o possessivo 's, whose, mine / yours. A aula e a lição de casa Live usam este arquivo. */
var DONOS = '(?:my (?:mother|father|mom|dad|sister|brother|friend|grandmother|grandfather|boss|wife|husband|son|daughter|teacher|cousin|uncle|aunt)|[A-Z][a-z]+)';
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(new RegExp('\\b([Tt]he \\w+ of ' + DONOS + ')\\b', 'g'), frase, 1, 'With people, the owner comes first: my sister’s car.', function (x) { return !/\bof (?:the|this|that)\b/.test(x[0]); }));
  out = out.concat(A(/\b(who's|who is)\s+(?!there|here|that|this|it|he|she|they|your|coming|going|calling|next|in|at|on)\w+\s+(?:is|are)\s+(?:this|that|these|those|it)\b/g, m, 1, 'For the owner: WHOSE. Whose bag is this?'));
  out = out.concat(A(/\b(?:it's|it is|they're|they are|is it|are they)\s+(my|your|our|their)\s*[.?!]/g, m, 1, 'When the thing is gone: mine, yours, ours, theirs.'));
  out = out.concat(A(/\b(?:it's|it is|is it)\s+(her)\s*[.?!]/g, m, 1, 'When the thing is gone: hers.'));
  out = out.concat(A(/\b(mine|yours|hers|ours|theirs)\s+(?:car|bag|book|phone|jacket|house|pen|bike|cap|key|notebook|bottle)\b/g, m, 1, 'Before a thing: my, your, her. Mine stands alone.'));
  out = out.concat(A(/\b(your's|her's|our's|their's|it's own)\b/g, m, 1, 'No apostrophe: yours, hers, ours, theirs.'));
  return out;
};
