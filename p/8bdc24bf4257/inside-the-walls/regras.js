/* As regras do corretor desta aula (nível 2): can / could / be allowed to. don't / doesn't / not + can, can / can't / could + to, cans, can / could + verbo com -s ou passado, allow sem -ed depois de be, allowed sem be (we allowed / don't allowed / didn't allowed), allowed sem to, can't com marca de passado (as a child, when I was), pergunta sem inversão (We are allowed to…?). O corretor separa as frases com espaço na frente. A aula e a lição de casa Live usam este arquivo. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b((?:don't|don’t|doesn't|doesn’t|didn't|didn’t|not) can)\b/g, m, 1, 'The negative is can’t / couldn’t: People can’t go outside.'));
  out = out.concat(A(/\b((?:can|can't|can’t|cannot|could|couldn't|couldn’t) to \w+)/g, m, 1, 'After can / could: no to. (But allowed TO.)'));
  out = out.concat(A(/\b(cans)\b/g, m, 1, 'Can never changes: she can.'));
  out = out.concat(A(/\b((?:can|can't|can’t|could|couldn't|couldn’t) (?:fights|goes|opens|reads|climbs|flies|sees|lives|fought|went|opened|read|climbed|flew|saw|lived|was|were))\b/g, m, 1, 'After can / could: the base verb. can fight, couldn’t fight.', function (x) { return !/\b(?:can|could) read\b/.test(x[1]); }));
  out = out.concat(A(/\b((?:is|are|am|was|were|isn't|isn’t|aren't|aren’t|wasn't|wasn’t|weren't|weren’t|be|not) allow (?:to|in))\b/g, m, 1, 'Allowed, with -ed: are allowed to.'));
  out = out.concat(A(/\b((?:i|you|we|they|he|she|people|children|soldiers|the \w+(?: \w+)?|armin|eren|mikasa) (?:allowed to|don't allowed|don’t allowed|didn't allowed|didn’t allowed|doesn't allowed|doesn’t allowed))\b/g, m, 1, 'Allowed needs be: are / aren’t / was / wasn’t allowed to.', function (x) { return !/\b(?:is|are|was|were|be|been|isn't|aren't|wasn't|weren't|isn’t|aren’t|wasn’t|weren’t)\s+allowed/.test(x[1]) && !/\b(?:is|are|was|were|am|isn't|aren't|wasn't|weren't|isn’t|aren’t|wasn’t|weren’t)\s*$/i.test(frase.slice(0, frase.toLowerCase().indexOf(x[1].toLowerCase()))); }));
  out = out.concat(A(/^\s*((?:do|does|did) (?:i|you|we|they|he|she|people|children) allowed)\b/g, m, 1, 'Allowed needs be: Are we allowed to…?'));
  out = out.concat(A(/\b(allowed (?:climb|go|open|read|eat|use|play|watch|stay|leave|smoke|stand|drive|talk))\b/g, m, 1, 'Allowed + to: allowed to climb.'));
  out = out.concat(A(/\b((?:as a (?:child|kid|boy|girl)|when (?:i|he|she|we|they) (?:was|were) (?:a )?(?:child|kid|young|little|small|ten|five))[^.!?]*\b(?:can't|can’t|cannot|can) \w+)/g, m, 1, 'In the past: could / couldn’t.'));
  out = out.concat(A(/^\s*((?:we|you|they|i|he|she) (?:are|is|am) allowed to [^?]*\?)/g, m, 1, 'Questions: Are we allowed to…?'));
  return out;
};
