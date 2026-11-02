/* As regras do corretor desta aula (nível 1): present continuous — am/is/are + -ing, a ortografia do -ing, I'm not, a pergunta. A aula e a lição de casa Live usam este arquivo. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/(?:^|[.!?]\s*)(?:i|you|he|she|it|we|they|my \w+|the \w+)\s+((?!going\b|nothing\b|something\b|anything\b|everything\b|morning\b|evening\b|thing\b|king\b|ring\b|sing\b|bring\b|spring\b)\w{3,}ing)\b/g, m, 1, 'Two pieces: is / am / are + …ing.'));
  out = out.concat(A(/\b(?:am|is|are|i'm|he's|she's|it's|we're|they're|you're)\s+(?:not\s+)?(sleep|study|work|play|eat|watch|write|read|run|cook|rain|listen|talk|drink|sit|swim|dance|walk)\b(?!ing)/g, m, 1, 'Add -ing: sleeping, studying …'));
  out = out.concat(A(/\b(writeing|makeing|danceing|comeing|takeing|haveing|rideing|driveing|smileing)\b/g, m, 1, 'Ends in -e? Drop the e: writing.'));
  out = out.concat(A(/\b(runing|siting|swiming|geting|puting|stoping|shoping|begining)\b/g, m, 1, 'Short verb: double the last letter. running, sitting.'));
  out = out.concat(A(/\b(amn't|i am no|i no am|he no is|she no is)\b/g, m, 1, 'No: I’m not · isn’t · aren’t.'));
  out = out.concat(A(/^\s*((?:you|he|she|it|they|we)\s+(?:are|is)\s+\w+ing[^.?]*\?)/g, m, 1, 'Question: am / is / are first. Are you …ing?'));
  return out;
};
