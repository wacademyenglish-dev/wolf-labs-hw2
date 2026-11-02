/* As regras do corretor desta aula (nível 1): can / can't. can to + verbo, cans, can + verbo com -s (can makes, can swims), don't / doesn't / not can, Do you can…?, is / am / are can. O corretor separa as frases com espaço na frente. A aula e a lição de casa Live usam este arquivo. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b((?:can|can't|can’t|cannot) to \w+)/g, m, 1, 'After can: the verb with no to. He can fly.'));
  out = out.concat(A(/\b(can (?:you|he|she|i|we|they) to \w+)/g, m, 1, 'After can: the verb with no to. Can you fly?'));
  out = out.concat(A(/\b(cans)\b/g, m, 1, 'Can never changes: he can, she can (no -s).'));
  out = out.concat(A(/\b((?:can|can't|can’t|cannot) (?:makes|swims|copies|moves|plays|speaks|runs|cooks|sings|drives|reads|flies|jumps|fights|punches|goes|does|has|is|dances|draws|rides|writes|eats|works|helps))\b/g, m, 1, 'After can: the base verb. can make, can swim.'));
  out = out.concat(A(/\b((?:don't|don’t|doesn't|doesn’t|do not|does not|not) can)\b/g, m, 1, 'The negative is can’t (cannot): I can’t.'));
  out = out.concat(A(/\b((?:do|does|did) (?:you|he|she|they|i|we) can)\b/g, m, 1, 'Questions: Can you…? (no do).'));
  out = out.concat(A(/\b((?:is|am|are) can)\b/g, m, 1, 'No is with can: he can copy.'));
  return out;
};
