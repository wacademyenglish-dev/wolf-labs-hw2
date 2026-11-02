/* As regras do corretor desta aula (nível 1): superlativos. A aula e a lição de casa Live usam este arquivo. */
var CURTAS_S = '(?:big|small|tall|short|cheap|old|young|hot|cold|long|fast|slow|new|nice|sweet|fair|large|high|low|strong|heavy|happy|easy|busy|funny|pretty|good|bad|far)';
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(new RegExp('\\b(the most ' + CURTAS_S + ')\\b', 'g'), m, 1, 'Short word: -EST. The biggest, not the most big.'));
  out = out.concat(A(/\b(the most \w+est)\b/g, m, 1, 'One or the other: the biggest, or the most beautiful. Never both.'));
  out = out.concat(A(/\b(goodest|baddest|most good|most bad|more best|most best|most worst)\b/g, m, 1, 'good → the best. bad → the worst.'));
  out = out.concat(A(/\b(beautifulest|expensivest|interestingest|importantest|comfortablest|modernest|famousest)\b/g, m, 1, 'Long word: THE MOST beautiful.'));
  out = out.concat(A(/\b(bigest|hotest|niceest|largeest|heavyest|happyest|thinest|fatest)\b/g, m, 1, 'Spelling: biggest, hottest, nicest, largest, heaviest.'));
  out = out.concat(A(/\b(?:is|was|are|were)\s+(more\s+\w+|\w+er)\s+(?:in|of)\s+(?:the|my|our|all)\b/g, m, 1, 'In a group, the winner is THE -EST / THE MOST: the tallest in the class.'));
  return out;
};
