/* As regras do corretor desta aula (nível 3): very / quite / a bit com adjetivo normal; absolutely com extremo; really com os dois. A aula e a lição de casa Live usam este arquivo. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  var EXT = '(?:exhausted|exhausting|amazing|awful|terrible|starving|freezing|boiling|huge|enormous|tiny|hilarious|fascinating|fantastic|wonderful|delicious|disgusting|filthy|furious|terrified|brilliant|gorgeous|perfect|impossible|essential|ancient|horrible|excellent)';
  var NOR = '(?:tired|good|bad|hungry|cold|hot|big|small|funny|interesting|nice|happy|sad|angry|scared|dirty|clean|boring|bored|tasty|pretty|important|difficult|easy|expensive|cheap|quiet|noisy|slow|fast)';
  out = out.concat(A(new RegExp('\\b((?:very|quite|a bit|a little|so very|extremely)\\s+' + EXT + ')\\b', 'g'), m, 1, 'An extreme adjective already means very, very: absolutely (or really).'));
  out = out.concat(A(new RegExp('\\b((?:absolutely|completely|totally)\\s+' + NOR + ')\\b', 'g'), m, 1, 'A normal adjective: very (or really). Absolutely is for extreme ones.'));
  out = out.concat(A(/\b(?:movie|film|show|book|class|series|season|game)\s+(?:is|was)\s+(?:very\s+|really\s+|so\s+)?(bored|interested|tired|surprised)\b/g, m, 1, 'The movie makes you feel it: boring, interesting, tiring, surprising.'));
  return out;
};
