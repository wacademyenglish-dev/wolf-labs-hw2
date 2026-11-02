/* As regras do corretor desta aula (nível 3): have / get + a coisa + particípio. Pega o particípio errado (cutted, maked, took, wash), a ordem trocada (had washed her car → had her car washed só quando há um lugar de serviço), "got fixed my phone" e "I cut my hair at the salon". A aula e a lição de casa Live usam este arquivo. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b(cutted|maked|taked|doed|builded|writed)\b/g, m, 1, 'Irregular participle: cut, made, taken, done, built, written.'));
  out = out.concat(A(/\b((?:have|has|had|having|get|got|gets|getting) (?:my|your|his|her|our|their|the|it|them) ?(?:hair|car|nails|dress|phone|house|shoes|suit|photos|cake|room|living room|garden|eyes|teeth|bike|computer|laptop|jeans|watch)? (?:wash|fix|clean|paint|print|took|shorten|check|repair|color|deliver|engrave|tidy|dye))\b(?!ed|ing|s\b)/g, m, 1, 'After the thing: the participle (washed, fixed, taken).'));
  out = out.concat(A(/\b((?:got|get|have|had) (?:fixed|washed|cleaned|painted|cut|done|repaired|shortened|printed) (?:my|your|his|her|our|their|the))\b/g, m, 1, 'The thing goes in the MIDDLE: got my phone fixed.'));
  out = out.concat(A(/\b((?:i|she|he|we|they|you) (?:cut|colored|dyed|did) (?:my|her|his|our|their|your) (?:hair|nails)(?: done)? (?:at|in) (?:the |a )?(?:salon|hairdresser|barber|barbershop))/g, m, 1, 'The salon did it: I had my hair cut at the salon.'));
  out = out.concat(A(/\b((?:i|she|he|we|they|you) (?:fixed|repaired|washed|cleaned|painted) (?:my|her|his|our|their|your) \w+ (?:at|in) (?:the |a )?(?:garage|shop|store|mall|dry cleaner|tailor))/g, m, 1, 'The shop did it: I had my … fixed at the shop.'));
  return out;
};
