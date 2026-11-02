/* As regras do corretor desta aula (nível 4): third conditional. passado simples no if com would have no resultado, would no if, would / might / could sem have + particípio, particípio errado, will have, would had, pergunta sem inversão. O corretor separa as frases com espaço na frente. A aula e a lição de casa Live usam este arquivo. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b(if (?:\w+ ){1,3}?(?<!had |hadn't |had not )(?:didn't|did not|went|was|wasn't|were|weren't|moved|waited|stayed|chose|had(?! (?:been|gone|done|had|seen|taken|known|left|stayed|waited|moved|chosen|come|met|studied|won|lost|quit|fought|n't|not)\b))\b[^.!?]*?(?:would|might|could|wouldn't|couldn't)(?: not)? have \w+)/g, m, 1, 'The if part, in the past: had + participle (if he hadn’t gone).'));
  out = out.concat(A(/\b(if (?:\w+ ){1,3}?(?:would|wouldn't) have \w+)/g, m, 1, 'No would in the if part: if he had been.'));
  out = out.concat(A(/\b((?:would|wouldn't|might|could|couldn't|should) (?:not )?(?:laughed|escaped|saved|happened|died|lived|stayed|became|took|went|known|been|done|gone|taken))\b/g, m, 1, 'Don’t forget have: wouldn’t have laughed, might have escaped.'));
  out = out.concat(A(/\b((?:would|wouldn't|might|could) (?:not )?have (?:took|chose|became|went|did|saw|ate|wrote|spoke|broke|knew|gave|ran|came|be|go|do|take|choose|happen|die|save|see))\b/g, m, 1, 'After have: the participle (taken, chosen, become).'));
  out = out.concat(A(/\b((?:hadn't|had not|had) (?:chose|took|went|did|saw|ate|wrote|spoke|broke|knew|gave|ran|came|became|choose|take|go|do))\b/g, m, 1, 'After had: the participle (chosen, taken, gone).'));
  out = out.concat(A(/\b((?:will|won't) have (?:died|happened|been|done|gone|taken|become))\b[^.!?]*/g, m, 1, 'Would have, not will have.', function (x) { return /\bif\b/.test(x.input); }));
  out = out.concat(A(/\b((?:would|might|could) (?:\w+ )?had (?:done|been|gone|taken|said))\b/g, m, 1, 'After would: have, not had.'));
  out = out.concat(A(/^\s*((?:what|where|how|who) (?:you|he|she|they|we|i) (?:would|might|could) have)\b/g, m, 1, 'Questions: What would you have done?'));
  out = out.concat(A(/\b(if (?:\w+ ){1,3}?(?:hadn't|had) (?:gone|been|moved|stayed|waited|chosen|known|left)\b[^.!?]*?(?:would|might|could|wouldn't|couldn't) (?:happen|die|escape|laugh|become|save|live|stay))\b/g, m, 1, 'The result in the past: would have + participle (would have happened).'));
  return out;
};
