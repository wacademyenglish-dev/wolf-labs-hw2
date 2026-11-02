/* As regras do corretor desta aula (nível 2): before / after / when + frase inteira ou -ing, nunca TO; sem will depois do nó. A aula e a lição de casa Live usam este arquivo. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b(?:before|after)\s+(to)\s+\w+/g, m, 1, 'A whole sentence after before / after (or -ing). No to.'));
  out = out.concat(A(/(?<!(?:know|ask|wonder|sure|idea|me|tell)\s)\b(?:when|after|before|as soon as)\s+(?:i|you|he|she|we|they|it|the \w+)\s+(will|'ll)\b/g, m, 1, 'No will after the knot: when I arrive, after I get home.'));
  out = out.concat(A(/\b(?:when|after|before)\s+(i'll|you'll|he'll|she'll|we'll|they'll)\b/g, m, 1, 'No will after the knot: when I arrive.'));
  out = out.concat(A(/\bwhen\s+(?:i|you|he|she|we|they)\s+(am|is|are)\s+(?:a child|a kid|young|little|a teenager)\b[^.]*\b(?:was|were|had|did|lived|went)\b/g, m, 1, 'A story in the past: both halves in the past (When I was a child).'));
  out = out.concat(A(/\bwhen\s+(stopped|arrived|opened|came|left)\s+the\b/g, m, 1, 'Person first, then the verb: when the car stopped.'));
  return out;
};
