/* As regras do corretor desta aula (nível 3): would rather + verbo puro + than; prefer + to/-ing, prefer … TO … (não than); rather … THAN (não to). "I prefer to read" é certo. A aula e a lição de casa Live usam este arquivo. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b((?:'d|’d|would(?: you| we| they| he| she)?) rather to \w+)/g, m, 1, 'No TO after rather: I’d rather read.'));
  out = out.concat(A(/\b((?:'d|’d|would) rather (?:reading|walking|staying|sleeping|watching|going|playing|cooking))\b/g, m, 1, 'rather + the plain verb: I’d rather read.'));
  out = out.concat(A(/\b((?:i|you|we|they) prefer (?:read|watch|walk|sleep|stay|go|cook|play|drive|eat))\b/g, m, 1, 'prefer TO read, or prefer readING.'));
  out = out.concat(A(/\b((?:she|he) prefers (?:read|watch|walk|sleep|stay|go|cook|play|drive|eat))\b/g, m, 1, 'prefers TO read, or prefers readING.'));
  out = out.concat(A(/\b(prefers? \w+ing\b[^.?!]*? than)\b/g, m, 1, 'prefer … TO: I prefer reading to scrolling.'));
  out = out.concat(A(/\b((?:'d|’d|would) rather \w+(?: \w+)? to (?:drive|scroll|walk|read|watch|stay|go|sleep|cook))\b/g, m, 1, 'rather … THAN: I’d rather walk than drive.'));
  return out;
};
