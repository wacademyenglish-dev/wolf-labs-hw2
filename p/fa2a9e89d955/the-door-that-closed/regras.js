/* As regras do corretor desta aula (nível 3): third conditional. WOULD na metade do IF ("If I would have known"); would have + passado simples ("would have went"); had + forma base ("If I had know"); would + forma base com marca de passado ("would pass last year"); "would have + base" ("wouldn't have find"). A aula e a lição de casa Live usam este arquivo. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b(if (?:i|you|he|she|it|we|they|\w+) (?:would have|would’ve|would've|wouldn't have|wouldn’t have))\b/g, m, 1, 'No WOULD in the IF half: If I had known.'));
  out = out.concat(A(/\b((?:would|wouldn't|wouldn’t|could|couldn't|couldn’t|might|should) (?:not )?have (?:went|took|ate|saw|did|was|were|came|drank|wrote|knew|forgot|gave|spoke|chose|began|find|meet|take|go|see|know|do|eat|give|tell|make))\b/g, m, 1, 'would have + third form: gone, taken, seen, known, met, found.'));
  out = out.concat(A(/\b(if (?:i|you|he|she|it|we|they) (?:had|hadn't|hadn’t) (?:know|go|take|see|eat|do|leave|tell|meet|find|forget|give|write|speak|study|check|say|ask|arrive))\b/g, m, 1, 'IF + had + third form: had known, had gone, had left.'));
  out = out.concat(A(/\b(would (?:pass|go|win|come|see|help|call|take|meet|make|get) [^.,!?]*\b(?:last (?:year|week|night|month|summer)|yesterday))\b/g, m, 1, 'A shut door (yesterday, last year): would HAVE + third form.'));
  return out;
};
