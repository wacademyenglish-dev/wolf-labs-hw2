/* As regras do corretor desta aula (nível 2): preposições de movimento. enter sem in, out OF, get on/off o ônibus, into depois de verbo de movimento, cross sem across. A aula e a lição de casa Live usam este arquivo. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b(enter(?:s|ed|ing)? in(?:to)?)\s+(?:the|my|your|a|his|her|our|their)\b/g, m, 1, 'enter takes no preposition: enter the room (or go into the room).'));
  out = out.concat(A(/\b((?:go|goes|went|going|walk|walks|walked|run|runs|ran|come|comes|came|get|gets|got) out)\s+(?:the|my|your|a|his|her|our|their)\s+(?:house|room|building|car|kitchen|office|school|apartment|hall|taxi|bathroom|garden)\b/g, m, 1, 'out OF: two words. go out of the house.'));
  out = out.concat(A(/\b(get|gets|got|getting) out (?:of )?(?:the|a|my) (bus|train|plane|subway|boat)\b/g, m, 1, 'Buses, trains, planes: get off.'));
  out = out.concat(A(/\b((?:go|goes|went|walk|walks|walked|run|runs|ran|come|comes|came|jump|jumps|jumped) in)\s+the\s+(?:room|house|kitchen|building|office|bathroom|hall|car)\b/g, m, 1, 'A path to the inside: into.'));
  out = out.concat(A(/\b(cross(?:es|ed|ing)? across)\b/g, m, 1, 'cross already has the path: cross the park.'));
  out = out.concat(A(/\b(on to)\s+(?:the|a|my)\s+(?:table|roof|box|bed|chair|stage|bus|train)\b/g, m, 1, 'onto: one word.'));
  return out;
};
