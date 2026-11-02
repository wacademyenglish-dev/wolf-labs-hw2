/* As regras do corretor desta aula (nível 2): has / has got para descrever; it have; cor sem -s e antes da coisa; have it got; it don't. A aula e a lição de casa Live usam este arquivo. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b(?:it|he|she|my monster|the monster|my creature|the creature|the mummy|the witch|the ghost|the zombie|the werewolf|the vampire|dracula)\s+(have)\b/g, m, 1, 'he, she, it: has. Or: It’s got.'));
  out = out.concat(A(/\b(?:it|he|she)\s+(don['’]t|haven['’]t)\s+(?:have|got)\b/g, m, 1, 'it: It hasn’t got… or It doesn’t have…'));
  out = out.concat(A(/\b(yellows|reds|greens|blues|purples|oranges|blacks|whites|pinks|browns|greys|grays)\s+(?:eyes|horns|teeth|arms|legs|ears|spots|hands|feet|fangs|claws|bolts|scars|stitches)\b/g, m, 1, 'Colors never take -s: two yellow eyes.'));
  out = out.concat(A(/\b((?:eyes|horns|teeth|arms|legs|ears|spots|hair|nose|mouth|tail|fangs|claws|skin|hat|cape|coat)\s+(?:yellow|red|green|blue|purple|orange|black|white|pink|brown|grey|gray))\b/g, m, 1, 'The color comes first: yellow eyes.'));
  out = out.concat(A(/^\s*(have)\s+(?:it|he|she)\s+got\b/g, m, 1, 'it: Has it got…?'));
  out = out.concat(A(/\b(?:it|he|she|my monster|the monster|my creature|the creature|the witch)\s+(has got|has)\s+(?:green|purple|orange|blue|red|yellow|pink|black|white|grey|gray|pale|grey-green)\s*[.!]?\s*$/g, m, 1, 'The color of the body: It is grey.'));
  return out;
};
