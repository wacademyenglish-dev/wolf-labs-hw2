/* As regras do corretor da revisão I Will Call You. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b((?:will|won’t|won't|’ll|'ll) to)\b/gi, m, 1, "will + verb, no to: I’ll call."));
  out = out.concat(A(/\b(will I (?:help|call|send|carry|open|bring))\b/gi, m, 1, "To offer: Shall I help you?"));
  out = out.concat(A(/\b(I (?:call|pick|send|bring) (?:\w+ )*(?:tomorrow|later|tonight),? I promise)\b/gi, m, 1, "A promise: I’ll call you tomorrow, I promise."));
  return out;
};
