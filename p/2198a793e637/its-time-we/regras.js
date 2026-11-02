/* As regras do corretor desta aula (nível 4): would rather / it's time. would rather to, would rather + -ing, would rather + pessoa + presente / to / would, it's (high) time + pessoa + presente / will / base, it's time + -ing, it's time for + verbo, I'd rather don't, I'd not rather, Do you rather. O corretor separa as frases com espaço na frente. A aula e a lição de casa Live usam este arquivo. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b((?:would|'d) rather (?:not )?to \w+)/g, m, 1, 'After would rather: the base verb, no to.'));
  out = out.concat(A(/\b((?:would|'d) rather (?:not )?\w+ing)\b/g, m, 1, 'Would rather + base verb (stay), not -ing.', function (x) { return !/rather (?:bring|sing)$/.test(x[1]); }));
  out = out.concat(A(/\b((?:would|'d) rather (?:you|he|she|they|we|the \w+|my \w+) (?:listen|is|are|am|stay|leads|lead|comes|come|goes|go|stays|does|do|has|have|tell|call|stop|don't|doesn't))\b/g, m, 1, 'Another person: would rather + person + past (you listened, he were).'));
  out = out.concat(A(/\b((?:would|'d) rather (?:you|he|she|they|we|the \w+) to \w+)/g, m, 1, 'No to: I’d rather you listened.'));
  out = out.concat(A(/\b((?:would|'d) rather (?:you|he|she|they|we|the \w+) (?:would|will) \w+)/g, m, 1, 'No would after rather + person: I’d rather he were here.'));
  out = out.concat(A(/\b((?:it's|it is) (?:high |about )?time (?:we|you|they|he|she|i|somebody|someone|the \w+) (?:will |would )?(?:fight|go|leave|lead|leads|stand|start|stop|learn|make|talk|have|are|is|change|do|get|tell))\b/g, m, 1, 'It’s (high) time + person + past: it’s time we fought.'));
  out = out.concat(A(/\b((?:it's|it is) (?:high )?time \w+ing)\b/g, m, 1, 'It’s time to + verb.'));
  out = out.concat(A(/\b((?:it's|it is) (?:high )?time for (?:make|go|leave|start|stop|choose|do|learn))\b/g, m, 1, 'It’s time to + verb (or it’s time for + a noun).'));
  out = out.concat(A(/\b((?:would|'d) rather (?:don't|doesn't|didn't))\b/g, m, 1, 'The negative: I’d rather not + verb.'));
  out = out.concat(A(/\b((?:i|you|he|she|we|they)'d not rather|would not rather)\b/g, m, 1, 'Not comes after rather: I’d rather not go.'));
  out = out.concat(A(/^\s*((?:do|does|did) (?:you|he|she|they|we) rather)\b/g, m, 1, 'The question: Would you rather…?'));
  return out;
};
