/* As regras do corretor desta aula (nível 4): was going to / was about to / would / was supposed to. was going sem to, going to + passado, he were going, sem be, about sem to, will no relato, would + passado, supposed sem be, they was, pergunta sem inversão. O corretor separa as frases com espaço na frente. A aula e a lição de casa Live usam este arquivo. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b((?:was|were) (?:never )?to (?:led|saw|became|took|went|came|met|knew|won|gave|made|left|stayed))\b/g, m, 1, 'After to: the base verb (was to lead).'));
  out = out.concat(A(/\b((?:was|were) (?:lead|see|become|take|save|rule|meet|win|stay) (?:the|his|her|them|their|a)\b)/g, m, 1, 'Destiny: was to + verb (was to lead).'));
  out = out.concat(A(/\b((?:promised|said|told \w+|swore|thought|knew) (?:that )?(?:he|she|i|they|we|you) (?:will|won't) \w+)/g, m, 1, 'Told in the past: would, not will.'));
  out = out.concat(A(/\b((?:would|wouldn't) (?:never )?(?:took|went|came|became|saw|left|stayed|won|gave|made))\b/g, m, 1, 'After would: the base verb (would take).'));
  out = out.concat(A(/\b((?:i|you|he|she|it|we|they|chani|paul|\w+) supposed to)\b/g, m, 1, 'Don’t forget be: was supposed to.', function (x) { return !/(?:was|were|is|are|am) $/.test(x.input.slice(0, x.index)) && !/^(?:was|were|is|are|am|be|been|not|i'm|he's|she's)\b/.test(x[1]) && !/(?:was|were|is|are|am|be|been) supposed/.test(x[1]); }));
  out = out.concat(A(/\b((?:was|were|is|are|am) (?:(?:he|she|i|you|they|we|it) )?suppose to)\b/g, m, 1, 'Supposed, with -d.'));
  out = out.concat(A(/\b((?:was|were) go to)\b/g, m, 1, 'Were going to + verb.'));
  out = out.concat(A(/\b((?:they|we|you) was (?:going|supposed))\b/g, m, 1, 'They / we / you: were going to.'));
  out = out.concat(A(/\b(about (?!to\b)(?:begin|start|leave|go|end|come|say|open|close|call|fall|quit|give))\b/g, m, 1, 'Was about to + verb.'));
  out = out.concat(A(/\b(about to (?:began|started|left|went|ended|came|said|opened|closed|called|fell|quit|gave))\b/g, m, 1, 'After to: the base verb (about to begin).'));
  out = out.concat(A(/^\s*(it (?:wrote|was writing|foretold|told) that)\b/g, m, 1, 'The prophecy is passive: It was written that…'));
  out = out.concat(A(/\b(never was to)\b/g, m, 1, 'Never goes after was: was never to.'));
  out = out.concat(A(/^\s*((?:what|where|who|how) (?:he|she|they|we|i|you) (?:was|were) supposed to)\b/g, m, 1, 'Questions: What was he supposed to do?'));
  out = out.concat(A(/\b((?:was|were) going (?!to\b)(?:go|be|become|give|tell|call|leave|stay|do|study|open|find|make)\b)/g, m, 1, 'Going TO + verb: was going to go.'));
  out = out.concat(A(/\b(going to (?:went|became|gave|told|called|left|stayed|did|opened|found|made|studied))\b/g, m, 1, 'After to: the base verb (going to go).'));
  out = out.concat(A(/\b((?:he|she|it|i|daniela|jason) were going)\b/g, m, 1, 'He / she: was going to.'));
  out = out.concat(A(/\b((?:he|she|they|we|i|you|daniela|jason) going to \w+)/g, m, 1, 'Don’t forget be: was / were going to.', function (x) { return !/(?:was|were|is|are|am|'m|'re|'s|not) $/.test(x.input.slice(0, x.index)); }));
  out = out.concat(A(/\b((?:knew|thought|said|hoped) (?:that )?(?:he|she|i|they|we) would (?:found|went|saw|came|got|made))\b/g, m, 1, 'After would: the base verb (would find).'));
  out = out.concat(A(/^\s*((?:what|where|who|how) (?:he|she|they|we|i|you) (?:was|were) going to)\b/g, m, 1, 'Questions: What was he going to do?'));
  return out;
};
