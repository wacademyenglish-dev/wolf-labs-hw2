/* As regras do corretor desta aula (nível 1): there is / there are; his, her, their. Have / has no começo para dizer que existe (Have a table…), there is + número / many / plural, there are a / an, a + vogal (a old), the X of him / her / them, they + substantivo (they cups), There is…? como pergunta, there no is / there not is. O corretor separa as frases com espaço na frente. A aula e a lição de casa Live usam este arquivo. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/^\s*((?:have|has|don't have|don’t have) (?:a|an|two|three|four|many|some|\d+)\b)/g, m, 1, 'A thing in a place: there is / there are (not have).'));
  out = out.concat(A(/\b(there is (?:two|three|four|five|six|many|a lot of|some|\d+) \w+)/g, m, 1, 'Two or more: there are.', function (x) { return !/there is (?:a lot of|some) (?:water|bread|food|money|time|milk|coffee|sand|furniture)\b/.test(x[1]); }));
  out = out.concat(A(/\b(there are (?:a|an) \w+)/g, m, 1, 'One thing: there is.', function (x) { return !/there are a (?:lot|few|couple)\b/.test(x[1]); }));
  out = out.concat(A(/\b(a (?:old|empty|orange|apple|egg|island|old|elephant|umbrella|uncle|ugly|open|English|interesting|amazing))\b/g, m, 1, 'Before a vowel sound: an old dog, an empty chair.'));
  out = out.concat(A(/\b(the \w+ of (?:him|her|them|me|us))\b/g, m, 1, 'In English: his bed, her loom, their cups.'));
  out = out.concat(A(/\b((?:are|is|these are|those are) they (?:cups|chairs|things|books|cars|house|dog|bed|room|rooms))\b/g, m, 1, 'Many people: their. These are their cups.'));
  out = out.concat(A(/^\s*(there (?:is|are) [^?]*\?)/g, m, 1, 'Questions: Is there…? Are there…?'));
  out = out.concat(A(/\b(there (?:no is|not is|no are|not are|is no a|isn't no))\b/g, m, 1, 'No: there isn’t / there aren’t.'));
  return out;
};
