/* As regras do corretor desta aula (nível 3): voz passiva. be sem particípio (are sort, was promote, is clean), particípio irregular errado (was took, were took, was did, is cutted, was wrote), plural com was (the files was), did + passiva (Did it was…?, didn't told), passiva sem be (sorted every day, will forgotten), from no lugar de by. O corretor separa as frases com espaço na frente. A aula e a lição de casa Live usam este arquivo. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b((?:is|are|was|were|be|been|isn't|isn’t|aren't|aren’t|wasn't|wasn’t|weren't|weren’t) (?:sort|promote|tell|clean by|cut it|forget|finish|take|write|do|make|build|close|open|invent|name|ask|know))\b/g, m, 1, 'After be: the past participle. was promoted, is sorted.', function (x) { return !/\b(?:is|are|was|were) (?:to|going)\b/.test(x[1]); }));
  out = out.concat(A(/\b((?:is|are|was|were|be|been|wasn't|wasn’t|weren't|weren’t) (?:took|did|wrote|cutted|forgot|forgotted|maked|builded|taked|writed|gaved|gave|ate|saw|went|broke))\b/g, m, 1, 'This participle is irregular: taken, done, written, cut, forgotten.'));
  out = out.concat(A(/\b((?:the files|the numbers|they|the rooms|the computers|the papers|we|\w+s) was (?:\w+ed|taken|done|cut|written|told|sorted))\b/g, m, 1, 'Many things: were.', function (x) { return !/^(?:this|his|its|was|has|is|bus|glass|news|boss|class)\b/.test(x[1]); }));
  out = out.concat(A(/^\s*(did (?:it|the \w+|he|she|they|mark|the job) (?:was|were|be))\b/g, m, 1, 'Passive questions: Was it done? (no did)'));
  out = out.concat(A(/\b((?:didn't|didn’t|did not) (?:told|done|taken|cut|written|forgotten|promoted|sorted|cleaned))\b/g, m, 1, 'The negative passive: wasn’t + participle.'));
  out = out.concat(A(/^\s*(was done the \w+)/g, m, 1, 'Question order: Was + subject + participle.'));
  out = out.concat(A(/\b((?:the numbers|the files|his memory|the room|everything|the job|it|they) (?:sorted|cut|forgotten|cleaned|done|taken) (?:every|in|by|at|last))\b/g, m, 1, 'The passive needs be: are sorted, is cut.', function (x) { return !/\b(?:has|have|had|will be|was|were|is|are)\s*$/.test(m.slice(0, m.indexOf(x[1]))); }));
  out = out.concat(A(/\b(will (?:forgotten|done|taken|sorted|cleaned|cut|told))\b/g, m, 1, 'Future passive: will be + participle.'));
  out = out.concat(A(/\b((?:was|were|is|are) (?:\w+ed|made|done|built|written|taken) from (?:the|my|his|her) (?:night|day|team|staff|boss|company|cleaners|mother|father))\b/g, m, 1, 'The agent: by the night team.'));
  return out;
};
