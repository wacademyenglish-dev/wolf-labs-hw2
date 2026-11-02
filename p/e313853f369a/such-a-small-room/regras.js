/* As regras do corretor desta aula (nível 3): so × such. so + adjetivo + substantivo; such + adjetivo sem substantivo; such sem A com substantivo singular contável; such a com plural ou incontável; such a + vogal; a so; so a; such a long night so (no lugar de that). A aula e a lição de casa Live usam este arquivo. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  var ADJ = '(?:small|big|long|short|loud|quiet|hard|soft|cold|hot|slow|fast|noisy|dirty|clean|ugly|nice|good|bad|kind|friendly|cheap|expensive|beautiful|old|full|crowded|great|terrible|boring|funny)';
  var SING = '(?:room|bed|night|day|view|hotel|place|party|line|offer|cook|trip|city|house|elevator|movie|book|song|film|girl|boy|guy|man|woman|person|question|problem|town|restaurant|beach|hostel)';
  out = out.concat(A(new RegExp('\\b(so (?:a |an )?' + ADJ + ' (?:' + SING + '|people|towels|guests|music|weather|food|staff|neighbors))\\b', 'g'), m, 1, 'A noun after the adjective: SUCH (A). such a small room.'));
  out = out.concat(A(new RegExp('\\b(such ' + ADJ + ')(?=[.!?,]|$| that\\b)', 'g'), m, 1, 'No noun after it: SO. so hard.'));
  out = out.concat(A(new RegExp('\\b(such ' + ADJ + ' ' + SING + ')\\b', 'g'), m, 1, 'One countable thing: SUCH A. such a small room.'));
  out = out.concat(A(new RegExp('\\b(such an? ' + ADJ + ' (?:people|towels|guests|music|weather|food|news|advice|information))\\b', 'g'), m, 1, 'Plural or uncountable: such, no A.'));
  out = out.concat(A(/\b(such a (?:ugly|old|amazing|awful|interesting|expensive|easy|open|empty|unusual|honest))\b/g, m, 1, 'A vowel sound: such AN.'));
  out = out.concat(A(/\b(a so \w+)/g, m, 1, 'such a … Never a so.'));
  out = out.concat(A(/\b(so a \w+)/g, m, 1, 'No noun after it: just SO. Or such a + noun.'));
  out = out.concat(A(new RegExp('\\b((?:such (?:an? )?' + ADJ + ' \\w+|so ' + ADJ + ') so (?:we|i|nobody|the|two|they|she|he))\\b', 'g'), m, 1, 'The result: THAT. such a long night that…'));
  return out;
};
