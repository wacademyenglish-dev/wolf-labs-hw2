/* As regras do corretor da revisão Every Last Cookie. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b(every (?:cookies|days|people|colleagues|desks|mornings))\b/gi, m, 1, "every + singular: every day, every cookie."));
  out = out.concat(A(/\b((?:didn’t|didn't|don’t|don't|isn’t|isn't|aren’t|aren't) (?:\w+ )?some)\b/gi, m, 1, "Negative: any. I didn’t eat any."));
  out = out.concat(A(/\b(nobody (?:didn’t|didn't|doesn’t|doesn't|don’t|don't))\b/gi, m, 1, "nobody is already negative: Nobody ate them."));
  out = out.concat(A(/\b((?:everybody|everyone|nobody|somebody) (?:are|were|have))\b/gi, m, 1, "everybody / nobody + singular: everybody is."));
  return out;
};
