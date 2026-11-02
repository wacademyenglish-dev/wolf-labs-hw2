/* As regras do corretor desta aula (nível 4): mixed conditionals. would have + now / today (lado do agora), would no lado do if, passado simples no if com now / today, would + passado de agora com last year / yesterday, would + particípio sem have, will no resultado, particípio errado, pergunta sem inversão. O corretor separa as frases com espaço na frente. A aula e a lição de casa Live usam este arquivo. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b((?:would|wouldn't) have been [^.!?]*\b(?:now|today))\b/g, m, 1, 'The result is NOW (now, today): would + verb (would be).'));
  out = out.concat(A(/\b(if (?:\w+ ){1,3}?(?:would|wouldn't) (?:have |be )?\w+)/g, m, 1, 'No would in the if part: if he were, if she hadn’t spoken.', function (x) { return !/(?:know|wonder|ask|asked|sure|idea) $/.test(x.input.slice(0, x.index)); }));
  out = out.concat(A(/\b(if (?:[-\w]+ ){1,3}?(?<!had |hadn't )(?:didn't|did not|stayed|ran|met|joined|left|studied|moved)\b[^,]*, [^.!?]*\bwould (?:be|live|know)\b[^.!?]*\b(?:now|today))\b/g, m, 1, 'The if part is in the past: had + participle (hadn’t run, had stayed).'));
  out = out.concat(A(/\b(if (?:\w+ ){1,3}?(?:were|was|weren't|wasn't) [^,]*, [^.!?]*\b(?:would|wouldn't) (?:tell|lie|catch|say|do|go|help) [^.!?]*\b(?:last \w+|yesterday|ago))\b/g, m, 1, 'The result is in the PAST: would have + participle.'));
  out = out.concat(A(/\b((?:would|wouldn't) (?:been|lied|caught|told|said|done|gone|known))\b/g, m, 1, 'Would + have + participle (wouldn’t have lied) or would + verb (wouldn’t be).'));
  out = out.concat(A(/,\s*(?:\w+ ){0,2}((?:will|won't) (?:have )?(?:be|been|lied|know))\b/g, m, 1, 'Would, not will.', function (x) { return /^\s*if\b/.test(x.input) && /\b(?:had|hadn't|were|weren't|was|wasn't)\b/.test(x.input); }));
  out = out.concat(A(/\b((?:hadn't|had) (?:spoke|took|went|did|saw|ate|wrote|broke|knew|gave|ran|came|became|readed))\b/g, m, 1, 'After had: the participle (spoken, taken).'));
  out = out.concat(A(/\b((?:had|have) readed)\b/g, m, 1, 'The participle of read is read.'));
  out = out.concat(A(/^\s*((?:where|what|who|how) (?:you|he|she|they|we|i) would (?:be|have|live))\b/g, m, 1, 'Questions: Where would you be…?'));
  out = out.concat(A(/\b(never had (?:met|been|seen|known))\b/g, m, 1, 'Never goes after had: had never met.'));
  return out;
};
