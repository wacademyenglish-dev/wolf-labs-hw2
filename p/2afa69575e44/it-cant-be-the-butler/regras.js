/* As regras do corretor desta aula (nível 3): dedução no presente. must / might / may / could / can't + be (nunca to be, nunca is); "doesn't can be"; "Maybe is"; "can be not"; must be + -ing; "can be" como palpite sobre um suspeito/pessoa. A aula e a lição de casa Live usam este arquivo. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b((?:must|might|may|could|can't|cannot|can’t) to be)\b/g, m, 1, 'No to: must be, might be, can’t be.'));
  out = out.concat(A(/\b((?:must|might|may|could|can't|can’t) (?:is|are|am|was))\b/g, m, 1, 'Modal + be: must be, might be.'));
  out = out.concat(A(/\b((?:doesn't|doesn’t|don't|don’t) can be)\b/g, m, 1, '100% no: can’t be.'));
  out = out.concat(A(/\b(can be not)\b/g, m, 1, '100% no: can’t be.'));
  out = out.concat(A(/(?:^|[.!?,]\s*)(maybe (?:is|are)\b)/g, m, 1, 'Maybe it’s… / It might be…'));
  out = out.concat(A(/\b((?:must|might|could|may) be (?:walk|have|go|do|watch|rain|sleep|play|cook|talk|work|run|eat|listen|wait))\b/g, m, 1, 'An action now: must be + -ing (must be walking).'));
  out = out.concat(A(/\b((?:must|might|could) (?:walking|having|raining|sleeping|playing|cooking|watching|working|waiting))\b/g, m, 1, 'must be + -ing: must be walking.'));
  out = out.concat(A(/\b((?:it|that|this|the thief|he|she|(?:the|her|his|my|your) (?:battery|phone)) can be (?:the )?(?:butler|gardener|cook|driver|cat|mailman|neighbor|thief|pizza guy|mom|dad|him|her|my brother|my sister|a present|a gift|a mistake|dead|asleep|awake))\b/g, m, 1, 'A guess about now: might be / could be.'));
  return out;
};
