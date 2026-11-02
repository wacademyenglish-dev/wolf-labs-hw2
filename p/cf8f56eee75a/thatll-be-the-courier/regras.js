/* As regras do corretor da revisão That’ll Be the Courier. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b((?:will|’ll|'ll|won’t|won't) (?:left|arrived|landed|read|finished|gone|seen|opened))\b/gi, m, 1, "A guess about the past: will HAVE left."));
  out = out.concat(A(/\b((?:must|might|may) (?:arrived|left|landed|finished|gone|seen))\b/gi, m, 1, "Past guess: must HAVE arrived."));
  out = out.concat(A(/\b(would have (?:twenty|thirty|forty|fifty|sixty|\d+)(?: years)?)\b/gi, m, 1, "Age: he would BE twenty."));
  out = out.concat(A(/\b(will has)\b/gi, m, 1, "will have + participle."));
  return out;
};
