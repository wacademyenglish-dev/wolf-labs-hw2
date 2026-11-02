/* As regras do corretor desta aula (nível 2): os pedidos de esclarecimento bem formados (could you say…, more slowly, do you mean, how do you spell, what does … mean). A aula e a lição de casa Live usam este arquivo. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b(could you repeat again)\b/g, m, 1, 'One is enough: Could you say that again? / Could you repeat that?'));
  out = out.concat(A(/\b(speak more slow)\b(?!ly)/g, m, 1, 'more slowly.'));
  out = out.concat(A(/\b(speak (?:more )?slower)\b/g, m, 1, 'Polite and standard: speak more slowly.'));
  out = out.concat(A(/\b(what (?:means|mean))\s+["“']?\w+/g, m, 1, 'What does … mean?'));
  out = out.concat(A(/\b(what does (?:it|this|that|\S+) means)\b/g, m, 1, 'After does: mean. What does it mean?'));
  out = out.concat(A(/\b(how (?:do you|you) write)\b(?=[^.?!]*\b(?:name|that|it|word)\b)/g, m, 1, 'For letters: How do you spell that?'));
  out = out.concat(A(/(?<!\bdo\s)\b(you mean)\s+\w+[^.?!]*\?/g, m, 1, 'Do you mean …?'));
  out = out.concat(A(/(?:^|[.!?]\s*)(what\?|repeat\.)/g, m, 1, 'That sounds rude. Sorry, could you say that again?'));
  return out;
};
