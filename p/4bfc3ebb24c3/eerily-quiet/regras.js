/* As regras do corretor desta aula (nível 2): colocações advérbio + adjetivo; very com adjetivo extremo; absolutely com graduável; o advérbio sem -ly antes de adjetivo. A aula e a lição de casa Live usam este arquivo. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b(very|so very|quite a bit)\s+(?:terrified|petrified|exhausted|freezing|boiling|deserted|furious|starving|enormous|tiny|hideous|ancient|silent|horrified|astonished|awful|terrible|dreadful)\b/g, m, 1, 'An extreme word: utterly, absolutely, completely. Not very.'));
  out = out.concat(A(/\b(absolutely|utterly|completely)\s+(?:scary|scared|cold|quiet|dark|tired|nervous|sad|interesting|big|small|important|difficult|old)\b/g, m, 1, 'A gradable word: very, extremely, really. absolutely goes with extreme words.'));
  out = out.concat(A(/\b(strongly|highly|heavily)\s+(?:cold|quiet|dark|scared|sorry|pale|slow|familiar|still)\b/g, m, 1, 'Not a natural pair. Try: bitterly cold, eerily quiet, deeply sorry, deathly pale.'));
  out = out.concat(A(/\b(eerie|bitter|dim|faint|utter|painful|deathly-)\s+(?:quiet|cold|lit|familiar|deserted|slow|still|pale)\b/g, m, 1, 'Before an adjective: the adverb, with -ly (eerily quiet).'));
  out = out.concat(A(/\b(strongly unlikely|strongly likely|very unlikely that)\b/g, m, 1, 'likely / unlikely go with highly.'));
  return out;
};
