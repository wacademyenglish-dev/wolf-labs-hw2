/* As regras do corretor desta aula (nível 1): comparativos (-er / more / than) e as três irregulares. A aula e a lição de casa Live usam este arquivo. */
var CURTAS = '(?:big|small|tall|short|cheap|old|young|hot|cold|long|wide|fast|slow|new|warm|nice|light|dark|happy|heavy|easy|busy|pretty|funny|large|high|low|strong|close)';
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(new RegExp('\\b(more ' + CURTAS + ')\\b(?=\\s+than\\b|\\s*[.,!?;]|\\s*$)', 'g'), m, 1, 'Short word: -ER. bigger, not more big.'));
  out = out.concat(A(/\b(more \w+er)\b(?=\s+than)/g, m, 1, 'One or the other: bigger, or more expensive. Never both.'));
  out = out.concat(A(/\b(more (?:better|worse))\b/g, m, 1, 'BETTER and WORSE are already comparisons. No more.'));
  out = out.concat(A(/\b\w+er\s+(then|that)\b(?!\s+(?:one|ones|shirt|jacket|coat|bag|store|car|house|day|one's))/g, m, 1, 'After a comparison: THAN.'));
  out = out.concat(A(/\b(more (?:expensive|comfortable|beautiful|important|modern|interesting)\s+(?:then|that))\b/g, m, 1, 'After a comparison: THAN.'));
  out = out.concat(A(/\b(expensiver|comfortabler|beautifuler|importanter|interestinger|moderner)\b/g, m, 1, 'Long word: MORE expensive, not expensiver.'));
  out = out.concat(A(/\b(gooder|badder|worser|farer|more good|more bad|more far)\b/g, m, 1, 'good → better, bad → worse, far → farther.'));
  return out;
};
