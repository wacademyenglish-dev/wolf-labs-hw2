/* As regras do corretor desta aula (nível 1): he is / she is + a / an + profissão, a pergunta com o verbo na frente. A aula e a lição de casa Live usam este arquivo. */
var JOBS = '(?:doctor|pilot|engineer|translator|cook|chef|teacher|nurse|driver|student|lawyer|artist|astronaut|mechanic|captain|biologist|singer|dentist|waiter|waitress|farmer|journalist|architect|actor|actress|accountant|police officer|secretary|salesperson|programmer|designer|photographer|writer|musician|electrician|plumber|scientist)';
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(new RegExp("\\b(?:i am|i'm|you are|you're|he is|he's|she is|she's|is|am|are|isn't|aren't|not)\\s+(" + JOBS + ")\\b", 'g'), m, 1, 'A job needs a little word: she is a doctor.'));
  out = out.concat(A(/\b((?:is|are|am)\s+(?:he|she|it|they|you|i)\s+(?:is|are|am))\b/g, m, 1, 'The verb jumps to the front. It is not copied: Is she a doctor?'));
  out = out.concat(A(/\b(a)\s+(?=engineer|astronaut|artist|actor|actress|accountant|architect|electrician|interpreter|engineer)/g, m, 1, 'A vowel sound takes AN: an engineer.'));
  out = out.concat(A(/\b(an)\s+(?=doctor|pilot|cook|teacher|nurse|driver|translator|student|mechanic|captain|biologist|singer|dentist|lawyer)/g, m, 1, 'A consonant sound takes A: a doctor.'));
  out = out.concat(A(/\bfrom\s+(the)\s+(?=brazil|egypt|portugal|croatia|singapore|japan|france|spain|italy|mexico|china|canada|recife|lisbon)/g, m, 1, 'A country takes no little word: from Egypt.'));
  out = out.concat(A(/(?<!\b(?:is|was|isn't|wasn't)\s+)\b(he|she)\s+(?:a|an)\s+\w+/g, m, 1, 'Don’t drop the verb: she IS a doctor.'));
  return out;
};
