/* As regras do corretor desta aula (nível 3): I wish / If only. "wish/if only + sujeito + have/has/am/is/are/can/speak/live/don't" (presente: um passo para trás); "wish + sujeito + will"; "wish/if only I would" sobre si mesmo; "wish/if only + sujeito + passado simples + marca de passado" (alvo: had + particípio); "wish/if only … would have". A aula e a lição de casa Live usam este arquivo. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b((?:wish|if only) (?:i|you|he|she|we|they|it|my \w+) (?:have|has|am|is|are|can|speak|live|know|don't|don’t|doesn't|doesn’t))\b/g, m, 1, 'Now: one step back. I wish I HAD, I wish I SPOKE, I wish it WERE.'));
  out = out.concat(A(/\b((?:wish|if only) (?:he|she|it|my \w+|the \w+) (?!was\b|has\b|is\b|does\b)\w+s)\b(?! to\b)/g, m, 1, 'Someone else’s habit: he WOULD call; or now, one step back: he CALLED.'));
  out = out.concat(A(/\b((?:wish|if only) (?:i|you|he|she|we|they|it|my \w+) (?:will|won't|won’t))\b/g, m, 1, 'Someone else’s habit: I wish you WOULD …'));
  out = out.concat(A(/\b((?:wish|if only) i would)\b/g, m, 1, 'About yourself, use the past: I wish I spoke … (WOULD is for other people).'));
  out = out.concat(A(/\b((?:wish|if only) (?:i|you|he|she|we|they) (?:went|took|said|told|called|wrote|answered|learned|saved|asked|did|made)\b[^.!?]*\b(?:yesterday|last \w+|ago|that day|then|in \d{4}))\b/g, m, 1, 'Then: two steps back. I wish I HAD gone.'));
  out = out.concat(A(/\b((?:wish|if only) (?:i|you|he|she|we|they) would have)\b/g, m, 1, 'For the past: I wish I HAD + third form.'));
  return out;
};
