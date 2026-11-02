/* As regras do corretor desta aula (nível 1): there was / there were, there is / are hoje. A aula e a lição de casa Live usam este arquivo. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\bthere\s+(was|wasn't|is|isn't)\s+(?:two|three|four|five|six|seven|eight|nine|ten|twenty|thirty|many|a lot of|lots of|some|\d+|any)\b/g, m, 1, 'Many things: there were / there are.'));
  out = out.concat(A(/\bthere\s+(were|weren't)\s+(?:a|an|one)\s+(?!lot\b)/g, m, 1, 'One thing: there was / there is.'));
  out = out.concat(A(/(?:^|[,.]\s*|\b(?:in \d{4}|when i was a child|in my town|in my street|in the square)\s*,?\s*)(had|has)\s+(?:a|an|two|three|many|a lot|lots|\d+)\b/g, m, 1, 'A place with something in it: there was / there were.'));
  out = out.concat(A(/\b(?:weren't|wasn't|aren't|isn't)\s+(no)\b/g, m, 1, 'One no is enough: there weren’t any.'));
  out = out.concat(A(/\b(?:in (?:19|20)\d\d|when i was (?:a child|young|a kid)|years ago)\b[^.]*?\bthere\s+(is|are)\b/g, m, 1, 'That was then: there was / there were.'));
  out = out.concat(A(/^\s*(there (?:was|were) [^.?]*\?)/g, m, 1, 'A question: Was there…? Were there…?'));
  return out;
};
