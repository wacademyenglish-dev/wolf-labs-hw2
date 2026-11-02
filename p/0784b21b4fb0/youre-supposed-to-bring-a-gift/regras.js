/* As regras do corretor desta aula (nível 3): be supposed to. "we supposed to" sem BE; "supposed + verbo" sem TO; "suppose to" sem D depois de BE; "is to bring" sem pessoa; "supposed to being"; "didn't suppose to"; "expected + verbo" sem TO. A aula e a lição de casa Live usam este arquivo. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/(?:^|[^a-z’'])(?<!(?:are|is|am|was|were|n't|n’t) )((?:i|you|we|they|he|she|guests|people) (?:not )?supposed to)\b/g, m, 1, 'It needs BE: we’re supposed to …'));
  out = out.concat(A(/\b((?:am|is|are|was|were|'m|’m|'s|’s|'re|’re|isn't|isn’t|aren't|aren’t|wasn't|wasn’t|weren't|weren’t) (?:not )?supposed (?!to\b)(?:bring|reply|arrive|wear|sit|give|be|use|stand|go|come|eat|pay|call|send|do|say))\b/g, m, 1, 'It needs TO: supposed TO bring.'));
  out = out.concat(A(/\b((?:am|is|are|was|were|'m|’m|'s|’s|'re|’re|isn't|isn’t|aren't|aren’t|wasn't|wasn’t|weren't|weren’t) (?:not )?suppose to)\b/g, m, 1, 'supposed, with a D.'));
  out = out.concat(A(/\b((?:didn't|didn’t|don't|don’t|doesn't|doesn’t) suppose)\b/g, m, 1, 'BE supposed to: it wasn’t supposed to …'));
  out = out.concat(A(/(?:^|[.?!]\s*)(is to (?:bring|arrive|wear|give|sit|reply)\b)/gi, m, 1, 'A person and BE: are we supposed to bring …?'));
  out = out.concat(A(/\b(supposed to being)\b/g, m, 1, 'supposed to + the base verb: supposed to be.'));
  out = out.concat(A(/\b((?:am|is|are|was|were|'m|’m|'s|’s|'re|’re) (?:not )?expected (?!to\b)(?:bring|arrive|wear|sit|give|stand|pay|answer|be|come))\b/g, m, 1, 'expected TO + verb.'));
  return out;
};
