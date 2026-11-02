/* As regras do corretor desta aula (nível 2): advérbios de modo — fastly, hardly (por hard), lately (por late), good como advérbio, adjetivo no lugar do advérbio, advérbio antes do objeto, look/feel + -ly. A aula e a lição de casa Live usam este arquivo. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b(fastly)\b/g, m, 1, 'fast doesn’t change: runs fast.'));
  out = out.concat(A(/\b(?:work|works|worked|working|train|trains|trained|study|studies|studied|push|pushes|pushed|try|tries|tried)\s+(?:very\s+|really\s+|so\s+)?(hardly)\b/g, m, 1, 'hard doesn’t change. hardly means almost not.'));
  out = out.concat(A(/\b(?:arrive|arrives|arrived|came|come|comes|finish|finishes|finished|got up|woke up|went to bed)\s+(?:very\s+|really\s+|so\s+)?(lately)\b/g, m, 1, 'late doesn’t change. lately means recently.'));
  out = out.concat(A(/\b(?:play|plays|played|speak|speaks|spoke|sing|sings|sang|cook|cooks|cooked|drive|drives|drove|dance|dances|danced|swim|swims|swam|write|writes|wrote|sleep|sleeps|slept)\s+(?:\w+\s+){0,2}?(?:very\s+|really\s+|so\s+)?(good)\b(?!\s+\w)/g, m, 1, 'How? The adverb of good is well.'));
  out = out.concat(A(/\b(?:speak|speaks|spoke|play|plays|played|open|opens|opened|drive|drives|drove)\s+((?:very\s+|really\s+)?(?:well|fast|slowly|carefully|badly|quickly|quietly))\s+(?:english|spanish|french|the|my|your|his|her|a)\b/g, m, 1, 'Verb + object + adverb: speaks English well.'));
  out = out.concat(A(/\b(?:look|looks|looked|feel|feels|felt|seem|seems|seemed)\s+(?:very\s+|so\s+|really\s+)?(sadly|happily|badly|nervously|angrily|tiredly)\b/g, m, 1, 'After look / feel: the adjective (sad, happy…).'));
  out = out.concat(A(/\b(?:run|runs|ran|walk|walks|walked|drive|drives|drove|climb|climbs|climbed|talk|talks|talked|eat|eats|ate|speak|speaks|spoke)\s+(?:very\s+|really\s+|so\s+)?(slow|quick|careful|quiet|loud|bad|noisy|happy)\b(?=\s*(?:[.,!?]|$|\s(?:and|but|every|on|in|at|to|today)\b))/g, m, 1, 'How? Adjective + -ly (slowly, carefully…).'));
  return out;
};
