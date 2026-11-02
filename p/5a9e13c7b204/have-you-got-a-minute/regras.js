/* As regras do corretor desta aula (nível 1): have got com um só auxiliar e a resposta curta. A aula e a lição de casa Live usam este arquivo. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b(do|does|did)\s+(?:you|i|we|they|he|she|it|your\s+\w+|my\s+\w+)\s+(?:have|has)\s+got\b/g, m, 1, 'One helper: Have you got …? (no DO).'));
  out = out.concat(A(/\b((?:don['’]?t|doesn['’]?t|didn['’]?t|do not|does not)\s+(?:have|has)\s+got)\b/g, m, 1, 'The no: I haven’t got (never don’t have got).'));
  out = out.concat(A(/\b((?:have|has|['’]ve|['’]s)\s+got\s+not)\b/g, m, 1, 'NOT goes with the helper: I haven’t got.'));
  out = out.concat(A(/\b(?:yes|no),?\s+(?:i|you|we|they|he|she|it)\s+((?:haven['’]?t\s+|hasn['’]?t\s+|have\s+|has\s+)?got)\s*[.!]/g, m, 1, 'The short answer stops at the helper: Yes, I have.'));
  out = out.concat(A(/\b(?:he|she|it)\s*(['’]ve)\s+got\b/g, m, 1, 'He, she, it: ’s got.'));
  out = out.concat(A(/\b(?:i|you|we|they)\s*(['’]s)\s+got\b/g, m, 1, 'I, you, we, they: ’ve got.'));
  out = out.concat(A(/\b(?:he|she|it)\s+(have)\s+got\b/g, m, 1, 'He, she, it: HAS got (she’s got).'));
  out = out.concat(A(/\b(?:i|you|we|they)\s+(has)\s+got\b/g, m, 1, 'I, you, we, they: HAVE got.'));
  out = out.concat(A(/(?:^\s*|\b(?:and|but|so)\s+)(?:i|you|we|they|he|she)\s+(got)\s+(?:a|an|two|three|some|any|no|my|your|his|her|blue|brown)\b(?![^.!?]*\b(?:yesterday|last|ago|this morning)\b)/g, m, 1, 'Say the helper: I’ve got a car.'));
  return out;
};
