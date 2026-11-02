/* As regras do corretor da revisão You’re New, Aren’t You?. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b((?:it’s|it's|you’re|you're|he’s|he's|she’s|she's|this is|that’s|that's) [^,?]+, no\?)/gi, m, 1, "English uses a tag: It’s hot, isn’t it?"));
  out = out.concat(A(/\b((?:likes|loves|lives|works|cooks|looks) [^,?]*, (?:isn’t|isn't|is) (?:he|she|it)\?)/gi, m, 1, "No auxiliary in the sentence: use does → doesn’t he?"));
  out = out.concat(A(/\b((?:went|came|made|had|did|saw) [^,?]*, (?:don’t|don't|do) (?:you|they|we)\?)/gi, m, 1, "Past: did → didn’t you?"));
  out = out.concat(A(/\b(amn’t I|amn't I)\b/gi, m, 1, "I’m…, aren’t I?"));
  return out;
};
