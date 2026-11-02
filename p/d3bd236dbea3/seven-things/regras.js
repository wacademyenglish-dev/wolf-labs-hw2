/* As regras do corretor desta aula (nível 1): can / can't. A aula e a lição de casa Live usam este arquivo. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b(?:he|she|it|house|mom|dad|mother|father|sister|brother|friend|phone|everybody|nobody|somebody)\s+(cans)\b/g, m, 1, 'No S, ever: she can.'));
  out = out.concat(A(/\b(can(?:['’]?t|not)? to)\s+(?!the\b|a\b|my\b|your\b)\w+/g, m, 1, 'No TO after can: I can swim.'));
  out = out.concat(A(/\b((?:don['’]?t|doesn['’]?t|didn['’]?t|do not|does not)\s+can)\b/g, m, 1, 'The negative is can’t: I can’t swim.'));
  out = out.concat(A(/\b((?:do|does)\s+(?:you|i|we|they|he|she|it|the house)\s+can)\b/g, m, 1, 'No do: Can you swim?'));
  out = out.concat(A(/\bcan(?:['’]?t|not)?\s+(?!always\b|sometimes\b|this\b|his\b|its\b|us\b|focus\b|discuss\b)(\w+[^su'’\s]s)\b/g, m, 1, 'After can: the plain verb. She can drive.'));
  out = out.concat(A(/\b(can able)\b/g, m, 1, 'Just can: I can swim (or I am able to swim).'));
  return out;
};
