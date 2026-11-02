/* As regras do corretor desta aula (nível 3): condicionais mistas. "would have + particípio … now/today" (resultado de hoje: would + verbo); "would + verbo … yesterday/last …" (resultado acabado: would have); WOULD na metade do IF; "If I was" para irreal (alvo: were) — fica com o professor, não marca. A aula e a lição de casa Live usam este arquivo. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b((?:would|wouldn't|wouldn’t|could|might) (?:not )?have (?:been|had|known|owned|lived|worked|got|gotten)\b[^.,!?]*?\b(?:now|today|these days|right now|at the moment))\b/g, m, 1, 'The result is TODAY: WOULD + verb (would be, would have = would own).'));
  out = out.concat(A(/\b((?:would|wouldn't|wouldn’t) (?!have\b|be\b)(?:get|go|say|speak|visit|lose|pass|see|meet|take|win|buy|call|come)\b[^.,!?]*?\b(?:yesterday|last (?:year|month|week|night|summer|time)|ago))\b/g, m, 1, 'The result is finished: WOULD HAVE + third form.'));
  out = out.concat(A(/\b(if (?:i|you|he|she|we|they|it) (?:would have|would’ve|would've|wouldn't have|wouldn’t have))\b/g, m, 1, 'No WOULD in the IF half: if we had left.'));
  out = out.concat(A(/\b(if (?:i|you|he|she|we|they) (?:didn't|didn’t) \w+[^.,!?]*?, (?:i|you|he|she|we|they) (?:would|wouldn't|wouldn’t) be (?:here|there|home)[^.,!?]* now)\b/g, m, 1, 'A closed past: HADN’T + third form.'));
  return out;
};
