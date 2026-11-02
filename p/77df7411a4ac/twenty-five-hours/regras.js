/* As regras do corretor desta aula (nível 1). A aula e a lição de casa Live usam este mesmo arquivo. */
var NUMRE = '(?:one|two|three|four|five|six|seven|eight|nine|ten|eleven|twelve)';
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(new RegExp('\\b(?:at|it\'s|it is|is|until|from|to)\\s+' + NUMRE + '\\s+(hours?)\\b(?!\\s+(?:of|a|every|later|before|after|long))', 'g'), m, 1, 'The clock says o’clock: at eight o’clock.'));
  out = out.concat(A(new RegExp('\\b(' + NUMRE + ' and (?:a )?half)\\b(?!\\s+(?:an? )?hours?)', 'g'), m, 1, 'Half PAST: half past eight (not “eight and a half”).'));
  out = out.concat(A(new RegExp('\\b(half) ' + NUMRE + '\\b', 'g'), m, 1, 'Say half PAST: half past nine.'));
  out = out.concat(A(/\b(\d{1,2}) ?(?:o'clock|oclock|o clock)/g, m, 1, 'In words: eight o’clock.'));
  out = out.concat(A(/\b(?:past|to) (\d{1,2})\b/g, m, 1, 'In words: half past eight.'));
  out = out.concat(A(/\b(\d{1,2}:\d{2}|\d{1,2}h\d{0,2})\b/g, m, 1, 'Write it in words: 7:30 = half past seven.'));
  out = out.concat(A(/\b(oclock|o clock)\b/g, m, 1, 'Spell it o’clock.'));
  out = out.concat(A(/\b(?:at|it's|it is) (the) (?:noon|midnight)\b/g, m, 1, 'At noon, at midnight: no THE.'));
  return out;
};
