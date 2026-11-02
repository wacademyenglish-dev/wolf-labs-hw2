/* As regras do corretor da revisão The Night Editor. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b((?:is|are|was) (?:said|thought|believed|reported|known) to (?:stop|fail|find|paint|happen|leave|fall|die|break) (?:yesterday|last|in 1\d\d\d|in 20\d\d))/gi, m, 1, "The past: is said to HAVE stopped."));
  out = out.concat(A(/\b(it (?:believes|says|thinks|expects) that)\b/gi, m, 1, "Passive reporting: it IS believed / said / thought that…"));
  out = out.concat(A(/\b((?:must|should|has to|have to|needs to) (?:approve|check|confirm|sign|fix|repair))\b(?= (?:by|before|tonight)\b)/gi, m, 1, "Modal passive: must BE approved."));
  out = out.concat(A(/\b(could be avoided)\b(?=[^.]*\b(?:yesterday|last|ago|if \w+ had))/gi, m, 1, "The past: could HAVE BEEN avoided."));
  return out;
};
