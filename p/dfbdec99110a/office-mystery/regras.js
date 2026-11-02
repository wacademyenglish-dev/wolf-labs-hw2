/* As regras do corretor desta aula (nível 3): dedução no passado. modal + passado simples ("must took"); modal + have + passado simples ("must have went"); modal + have + forma base ("must have take"); "mustn't have" no lugar de "can't have"; "must to have". A aula e a lição de casa Live usam este arquivo. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [], MOD = '(?:must|might|may|could|can\'t|can’t|couldn\'t|couldn’t|cannot)';
  var PASS = '(?:took|went|ate|saw|did|was|were|came|made|left|gave|knew|forgot|stole|broke|drank|wrote|told|said|had|got|heard|found|thought|lost)';
  out = out.concat(A(new RegExp('\\b(' + MOD + ' ' + PASS + ')\\b', 'g'), m, 1, 'About the past: modal + HAVE + past participle. must have taken.'));
  out = out.concat(A(new RegExp('\\b(' + MOD + ' (?:not )?have (?:took|went|ate|saw|did|was|were|came|drank|wrote|stole|broke|knew|forgot|gave|spoke|chose|began|rang))\\b', 'g'), m, 1, 'After HAVE, the past participle: taken, gone, eaten, seen, done, been.'));
  out = out.concat(A(new RegExp('\\b(' + MOD + ' (?:not )?have (?:take|go|eat|see|do|make|give|know|break|steal|write|forget|leave|hear|find|drink|think|lose))\\b', 'g'), m, 1, 'After HAVE, the past participle: taken, gone, made.'));
  out = out.concat(A(/\b(mustn't have|mustn’t have)\b/g, m, 1, 'Impossible in the past: CAN’T HAVE. It can’t have been Marcus.'));
  out = out.concat(A(/\b((?:must|might|could|may) to have)\b/g, m, 1, 'No TO after a modal: must have.'));
  return out;
};
