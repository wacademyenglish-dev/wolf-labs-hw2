/* As regras do corretor da revisão The Escape Room. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b(I wish (?:I|you|we|they|he|she|it) (?:have|am|is|are|can|know|live|will))\b/gi, m, 1, "wish + past: I wish I HAD, I wish I COULD."));
  out = out.concat(A(/\b((?:must|might|may|could|can’t|can't|should|shouldn’t|shouldn't) (?:left|went|took|said|saw|slept|stopped|trusted|lied|escaped|been))\b/gi, m, 1, "Past modals: must HAVE left."));
  out = out.concat(A(/\b(mustn’t have|mustn't have)\b/gi, m, 1, "Impossible in the past: can’t have."));
  out = out.concat(A(/\b(if only (?:I|you|we|they|he|she) would have)\b/gi, m, 1, "If only + had done: if only I HAD known."));
  return out;
};
