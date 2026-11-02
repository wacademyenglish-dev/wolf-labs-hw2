/* As regras do corretor desta aula (nível 4): adjetivos extremos. very / a bit / extremely / too / so very + extremo, absolutely / totally + normal, more / -er com extremo. O corretor separa as frases com espaço na frente. A aula e a lição de casa Live usam este arquivo. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  var EXT = '(?:terrified|exhausted|starving|boiling|freezing|furious|hilarious|awful|terrible|enormous|tiny|delicious|fantastic|amazing|horrible|gorgeous|ancient|filthy|brilliant|perfect|impossible|essential|devastated|thrilled|petrified|astonished)';
  var NORM = '(?:scared|tired|hungry|hot|cold|angry|funny|bad|big|small|tasty|good|old|dirty|surprised|happy|sad|important|afraid)';
  out = out.concat(A(new RegExp('\\b(very ' + EXT + ')\\b', 'g'), m, 1, 'An extreme word doesn’t take very: absolutely / really / totally.'));
  out = out.concat(A(new RegExp('\\b((?:a bit|a little|slightly|quite a bit) ' + EXT + ')\\b', 'g'), m, 1, 'An extreme word is already 100%: absolutely, not a bit.'));
  out = out.concat(A(new RegExp('\\b(extremely ' + EXT + ')\\b', 'g'), m, 1, 'Extremely + normal (extremely hot); the extreme word stands alone or with absolutely.'));
  out = out.concat(A(new RegExp('\\b(too ' + EXT + ')\\b', 'g'), m, 1, 'Too goes with normal words (too hot).'));
  out = out.concat(A(new RegExp('\\b((?:absolutely|totally|completely|utterly) ' + NORM + ')\\b', 'g'), m, 1, 'Absolutely goes with extreme words: absolutely terrified, not absolutely scared.'));
  out = out.concat(A(new RegExp('\\b((?:more|most|less) ' + EXT + ')\\b', 'g'), m, 1, 'Extreme words don’t compare: really starving, absolutely awful.'));
  out = out.concat(A(/\b((?:hilariouser|terrifieder|freezinger|starvinger|awfuller|enormouser))\b/g, m, 1, 'Extreme words don’t compare.'));
  return out;
};
