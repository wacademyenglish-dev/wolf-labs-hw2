/* As regras do corretor desta aula (nível 3): the more…, the more…. Sem o THE (more I fight, more strong I get), more + adjetivo curto (the more strong), the most no lugar de the more, o segundo THE esquecido, -er em adjetivo longo (dangerouser), ordem invertida no fim (the easier gets it), the best. O corretor separa as frases com espaço na frente. A aula e a lição de casa Live usam este arquivo. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  var CURTOS = '(?:strong|fast|hard|easy|big|small|high|low|old|young|good|bad|happy|tired|soon|late|long|short|cheap|rich|poor|weak|brave|calm|thin|fat|deep|scary|busy|early|quick|slow|strict|smart)';
  out = out.concat(A(/^\s*(more \w+(?: \w+)? (?:i|you|we|they|he|she|it)\b)/g, m, 1, 'Start with THE: the more I fight….'));
  out = out.concat(A(/,\s*(more \w+ (?:i|you|we|they|he|she|it) \w+)/g, m, 1, 'The second part starts with THE too: the stronger I get.'));
  out = out.concat(A(new RegExp(',\\s*((?:faster|stronger|harder|easier|better|bigger|happier|less \\w+|more \\w+) (?:i|you|we|they|he|she|it) \\w+)', 'g'), m, 1, 'The second part starts with THE too: the faster he gets.'));
  out = out.concat(A(new RegExp('\\b(the more ' + CURTOS + ')\\b(?! \\w+ (?:i|you|we|they|he|she|it)\\b)', 'g'), m, 1, 'Short words take -er: the stronger, the faster, the easier.'));
  out = out.concat(A(new RegExp('\\b(the more ' + CURTOS + ') (?:i|you|we|they|he|she|it)\\b', 'g'), m, 1, 'Short words take -er: the stronger I get, the harder he works.'));
  out = out.concat(A(/\b(the most) (?:i|you|we|they|he|she|it|\w+ (?:i|you|we|they|he|she|it))\b/g, m, 1, 'The more, never the most.'));
  out = out.concat(A(/\b(the (?:dangerouser|scareder|beautifuler|interestinger|expensiver|difficulter|importanter|carefuler))\b/g, m, 1, 'Long words take more: the more dangerous, the more scared.'));
  out = out.concat(A(/\b(the (?:easier|harder|better|stronger|faster|less \w+|more \w+) (?:gets|feels|is|becomes|looks) (?:it|he|she))\b/g, m, 1, 'At the end: subject + verb. the easier it gets.'));
  out = out.concat(A(/\b(the more (?:he|she|i|you|we|they) (?:makes|make|earns|earn|has|have) (?:money|friends|time))\b/g, m, 1, 'Keep the thing with more: the more money he makes.'));
  out = out.concat(A(/,\s*(the best)\b/g, m, 1, 'Comparative, not superlative: the better.'));
  out = out.concat(A(/,\s*(you get more \w+|i get more \w+|he gets more \w+|she gets more \w+)/g, m, 1, 'Keep the shape: …, the more scared you get.'));
  return out;
};
