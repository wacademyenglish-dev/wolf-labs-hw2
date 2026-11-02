/* As regras do corretor desta aula (nível 3): present perfect + passiva para notícia. Plural com has; has + verbo puro; passiva sem been / com being; "it has been found a …"; verbo antes do sujeito ("has been found a rock"); has been just; present perfect com tempo terminado; particípio errado (builded, bring). A aula e a lição de casa Live usam este arquivo. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b((?:scientists|engineers|divers|researchers|footprints|they|we|people) has)\b/g, m, 1, 'Many: HAVE. Scientists have found…'));
  out = out.concat(A(/\b((?:the rover|a flood|she|he|it|nasa|the team|a rock|the sample|a new \w+) have (?:been|found|discovered|spotted|uncovered|built))\b/g, m, 1, 'One thing: HAS.'));
  out = out.concat(A(/\b((?:has|have|hasn't|hasn’t|haven't|haven’t)(?: just| already)? (?:find|discover|spot|uncover|build|bring|confirm|collect|seal|open|fix))\b/g, m, 1, 'After has / have: the past participle. found, discovered.'));
  out = out.concat(A(/\b((?:has|have) being)\b/g, m, 1, 'has BEEN, not being.'));
  out = out.concat(A(/\b(been (?:discover|find|spot|uncover|bring|confirm|collect|seal|open|fix|build|builded))\b/g, m, 1, 'been + the past participle: been discovered.'));
  out = out.concat(A(/\b(builded|bringed|finded)\b/g, m, 1, 'Irregular: built, brought, found.'));
  out = out.concat(A(/\b(it (?:has|have|was) been (?:found|discovered|spotted|uncovered) (?:a|an|the|some|\d+))\b/g, m, 1, 'No invented it. Start with the thing: A rock has been found.'));
  out = out.concat(A(/(?:^|[.!?]\s*)((?:has|have|was|were) (?:been )?(?:found|discovered|spotted|uncovered) (?:a|an|the|some|\d+))\b/g, m, 1, 'The thing goes FIRST: A rock has been found.'));
  out = out.concat(A(/\b((?:has|have) been just)\b/g, m, 1, 'has JUST been: just goes between has and been.'));
  out = out.concat(A(/\b((?:has|have)(?: been)? (?:found|discovered|spotted|collected|sealed|opened)\b[^.?!]*?\b(?:last (?:night|year|week|month)|yesterday|in (?:\w+ )?(?:19|20)\d\d|ago))\b/g, m, 1, 'A finished time: past simple. It was found yesterday.'));
  out = out.concat(A(/\b((?:a|the|this) (?:new |strange |old |mars )?(?:comet|rock|mushroom|ship|sample) has (?:spotted|found|discovered|sealed|collected))\b/g, m, 1, 'Did the comet do it? The thing first needs BEEN: has been spotted.'));
  return out;
};
