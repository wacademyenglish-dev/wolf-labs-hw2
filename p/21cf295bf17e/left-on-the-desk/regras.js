/* As regras do corretor desta aula (nível 3): relativas reduzidas. Cortou só uma das duas palavras: "which/that/who + particípio" sem BE (the report which written) e "who/which/that + -ing" sem BE (the people who working); -ING onde o substantivo recebe (the file sending on Friday, the car parking outside, a letter signing by); "X left … it is" (sujeito repetido). Cortar sem BE (the woman called you is …) fica com o professor: é ambíguo para a máquina. A aula e a lição de casa Live usam este arquivo. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b((?:which|that|who) (?:written|sent|signed|left|approved|discussed|rejected|parked|made|given|taken|done|seen|found|built))\b/g, m, 1, 'Cut BOTH words, or keep both: the report written by Ana / the report which was written.'));
  out = out.concat(A(/\b((?:who|which|that) (?!is\b|are\b|was\b|were\b|(?:morning|evening|thing|something|nothing|anything|everything|building|meeting|spring|king|ring|wedding|ceiling|feeling|painting|bring|sing)\b)\w+ing)\b/g, m, 1, 'Cut BOTH words: the people working here / the people who are working here.'));
  out = out.concat(A(/\b((?:file|files|letter|letters|report|reports|email|emails|invoice|car|cup|document|proposal)s? (?:sending|signing|writing|parking|leaving|approving|discussing|rejecting)) (?:on|by|last|yesterday|outside|on the)\b/g, m, 1, 'It RECEIVES the action: the file sent, the letter signed, the car parked.'));
  out = out.concat(A(/\b((?:left|sent|signed|written|parked) [^,.!?]{2,30} it is)\b/g, m, 1, 'One subject only: A cup left on the table is still warm.'));
  return out;
};
