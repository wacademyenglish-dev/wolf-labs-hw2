/* As regras do corretor da revisão The Big Party. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b(how much (?:cups|chairs|people|guests|sandwiches|plates|friends|bottles))\b/gi, m, 1, "Things you count: how many."));
  out = out.concat(A(/\b((?:how many|a few|many) (?:ice|juice|water|food|cake|money|time|rice|milk))\b/gi, m, 1, "Things you don’t count: how much, a little, much."));
  out = out.concat(A(/\b((?:isn’t|isn't|don’t|don't|doesn’t|doesn't|didn’t|didn't) (?:nothing|nobody|none))\b/gi, m, 1, "One negative only: there isn’t anything / there is nothing."));
  out = out.concat(A(/\b((?:everybody|everyone|somebody|nobody) (?:are|have|were))\b/gi, m, 1, "everybody / nobody + singular: everybody is."));
  out = out.concat(A(/\b(a (?:apple|orange|egg|ice cream|hour|old))\b/gi, m, 1, "A vowel sound: an."));
  return out;
};
