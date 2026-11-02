/* As regras do corretor desta aula (nível 3): present perfect. have / has + verbo base ou passado simples (have find, have saw), am / is + particípio (am found), was been, presente com since (I am here since), since + período, for + ponto, have com he / she / someone, never / just antes de have, pergunta sem inversão. O corretor separa as frases com espaço na frente. A aula e a lição de casa Live usam este arquivo. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b((?:have|has|haven't|hasn't) (?:never |ever |just |already |not )?(?:find|see|saw|go|went|get|got lost|be|was|stop|walk|know|knew|eat|ate|do|did|make|take|took|write|wrote|come|came|give|gave|live|work|study|meet|met|tell|told|hear|try|leave|speak|spoke))\b/g, m, 1, 'After have / has: the past participle (found, seen, gotten, been).', function (x) { return !/(?:have|has) (?:to|got)\b/.test(x[1]); }));
  out = out.concat(A(/\b((?:i am|i'm|we are|they are) (?:found|seen|been))\b/g, m, 1, 'Present perfect: have + participle (I have found).'));
  out = out.concat(A(/\b(was been|were been)\b/g, m, 1, 'Have / has been, never was been.'));
  out = out.concat(A(/\b((?:i am|i'm|you are|we are|they are|he is|she is|are you|is he|is she) (?:here|there|in \w+|at \w+)?(?: every \w+)? since)\b/g, m, 1, 'From the past until now: have been (since…).'));
  out = out.concat(A(/\b(how long (?:are|is|do|does) (?:you|he|she|they|we))\b/g, m, 1, 'How long have you been…? (present perfect)'));
  out = out.concat(A(/\b(since (?:\w+ )?(?:hours|days|weeks|months|years|minutes))\b/g, m, 1, 'For + a period (for three hours). Since + a point.'));
  out = out.concat(A(/\b(for (?:i|you|he|she|we|they) (?:found|met|arrived|started|came|was|were)|for (?:monday|tuesday|wednesday|thursday|friday|saturday|sunday|january|2019|2020|2021|2022|2023|2024|2025|last \w+))\b/g, m, 1, 'Since + a point in time (since I found it, since Monday).'));
  out = out.concat(A(/\b((?:someone|somebody|he|she|it|the \w+|nobody|everybody) have (?:been|seen|found|gone|known|had|\w+ed))\b/g, m, 1, 'He / she / someone: has.', function (x) { return !/^the \w+s have/.test(x[1]) && !/^the (?:people|kids|children|men|women) /.test(x[1]); }));
  out = out.concat(A(/\b((?:never|just|already) (?:have|has) (?:\w+))\b/g, m, 1, 'Never / just go between have and the participle: I have never seen.'));
  out = out.concat(A(/^\s*((?:how long|what|where) (?:you|he|she|they|we) (?:have|has) \w+)/g, m, 1, 'Questions: How long have you been…? (have before you)'));
  out = out.concat(A(/^\s*((?:you|he|she|they|we) (?:have|has) ever \w+[^?]*\?)/g, m, 1, 'Questions: Have you ever…? (have first)'));
  out = out.concat(A(/\b((?:have|has) (?:you|he|she|they|we|it) (?:ever |never |just |already )?(?:get|see|saw|go|went|be|was|find|eat|ate|meet|met|do|did|take|took|try|stop|come|came|hear|speak|spoke|know|knew))\b/g, m, 1, 'After have / has: the past participle (Have you ever gotten…?).'));
  return out;
};
