/* As regras do corretor da revisão The Weekend Planner. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b(if (?:it|you|we|they|he|she|I) will)\b/gi, m, 1, "After if: present. If it rains, we’ll…"));
  out = out.concat(A(/\b((?:enjoy|enjoys|avoid|avoids|finish|finished|mind|keep|keeps) to \w+)\b/gi, m, 1, "enjoy / avoid / finish / keep + -ing."));
  out = out.concat(A(/\b((?:want|wants|need|needs|decided|decide|plan|plans) (?:go|stay|climb|cook|relax|sleep|try|buy|call|see|visit))\b/gi, m, 1, "want / need / decide + to: want to go."));
  out = out.concat(A(/\b((?:told|asked) (?:me|him|her|us|them) (?:call|wait|bring|stop|come|go))\b/gi, m, 1, "tell / ask + person + to: told me to call."));
  out = out.concat(A(/\b((?:forget|remember|don’t forget|don't forget) (?:call|bring|pack|buy|lock|close))\b/gi, m, 1, "forget / remember + to: don’t forget to call."));
  return out;
};
