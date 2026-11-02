/* As regras do corretor desta aula (nível 1): a / an pelo som, o adjetivo antes da coisa. A aula e a lição de casa Live usam este arquivo. */
var COISAS_C = '(?:clock|lamp|box|watch|ring|mirror|chair|radio|vase|umbrella|phone|bag|toy|book|cup|guitar|computer|tv|car|bike|table|house|pencil|coat|shoe|shoes|photo)';
var ADJ_C = '(?:old|new|big|small|heavy|light|cheap|expensive|beautiful|ugly)';
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b(a)\s+(?!one\b|once\b|uni|use|eu|ewe)[aeiou]\w*/g, m, 1, 'A vowel sound takes AN: an old clock.'));
  out = out.concat(A(/\b(an)\s+(?!h(?:our|onest|onor|eir)\b)(?!mp3|fbi|sos|x-?ray)[bcdfghjklmnpqrstvwxyz]\w*/g, m, 1, 'A consonant sound takes A: a new radio.'));
  out = out.concat(A(new RegExp('\\b(?:a|an|the|my|your)\\s+(' + COISAS_C + '\\s+' + ADJ_C + ')\\b(?!\\s+(?:is|are|was|and))', 'g'), m, 1, 'The describing word jumps in front: an old clock.'));
  return out;
};
