/* As regras do corretor da revisão What I Really Meant. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b(what I (?:meant|said|need|want|regret) it (?:was|is))\b/gi, m, 1, "No extra it: What I meant was…"));
  out = out.concat(A(/\b(all what)\b/gi, m, 1, "All I said was… (no what)."));
  out = out.concat(A(/\b(it (?:was|wasn’t|wasn't) (?:\w+ )?(?:Leo|Ana|Tom|me|him|her|the chef|my boss|my mother) which)\b/gi, m, 1, "For people: who or that."));
  out = out.concat(A(/\b(what I need are)\b/gi, m, 1, "What I need is…"));
  return out;
};
