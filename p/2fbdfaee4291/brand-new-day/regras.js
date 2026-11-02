/* As regras do corretor desta aula (nível 3): used to × present perfect. use to sem d na afirmativa (we use to), used to + passado (used to lived), were used to + verbo base (é outra estrutura), used + verbo sem to, did / didn't + used to, Used + pessoa + to…?, not used to sem didn't, presente com for / since (I live here for, I am here since), for + ponto / since + período (since two years, for Monday), have com he / she (he haven't), Did you ever + passado, have + verbo base (have you ever meet), present perfect com tempo fechado (have seen yesterday). O corretor separa as frases com espaço na frente. A aula e a lição de casa Live usam este arquivo. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b((?:i|you|we|they|he|she|people|peter|mj|ned|\w+ and \w+) use to)\b/g, m, 1, 'A past habit: used to (with d).', function (x) { return !/\b(?:did|didn't|didn’t|do|does|don't|don’t|doesn't|doesn’t)\s*$/i.test(m.slice(0, m.indexOf(x[1]))); }));
  out = out.concat(A(/\b(used to (?:lived|walked|knew|had|went|played|liked|loved|forgot|was|were|worked|studied))\b/g, m, 1, 'After used to: the base verb. used to live.'));
  out = out.concat(A(/\b((?:was|were|am|is|are) used to (?:walk|live|play|go|know|have|work|study|eat|watch))\b/g, m, 1, 'A past habit: used to + verb (be used to is “be familiar with + -ing”).'));
  out = out.concat(A(/\b(used (?:walk|live|play|go|know|have|work|study|eat|watch|be))\b/g, m, 1, 'Don’t forget the to: used to walk.'));
  out = out.concat(A(/\b((?:did|didn't|didn’t|did not) (?:\w+ )?used to)\b/g, m, 1, 'After did / didn’t: use to (no d).'));
  out = out.concat(A(/^\s*(used (?:you|people|he|she|they|we|i) to)\b/g, m, 1, 'Questions: Did + person + use to…?'));
  out = out.concat(A(/\b((?:i|you|we|they|he|she|ned|peter|mj) not used to)\b/g, m, 1, 'The negative: didn’t use to.'));
  out = out.concat(A(/\b((?:i|you|we|they) (?:live|am|work|study|know) [^.!?]*?\b(?:for (?:two|three|\d+|many|a few|ten) (?:weeks|years|months|days|hours)|since (?:monday|tuesday|wednesday|thursday|friday|saturday|sunday|\d{4}|january|march|the spell|last \w+)))\b/g, m, 1, 'From then until now: have / has + participle. I have lived, I have been.'));
  out = out.concat(A(/\b((?:he|she|peter|it) (?:lives|is|works|knows) [^.!?]*?\bsince \w+)/g, m, 1, 'From then until now: has + participle. He has lived since…'));
  out = out.concat(A(/\b(since (?:two|three|four|five|ten|\d+|many|a few) (?:years|months|weeks|days|hours))\b/g, m, 1, 'A period: for. for two years.'));
  out = out.concat(A(/\b(for (?:monday|tuesday|wednesday|thursday|friday|saturday|sunday|\d{4}|january|the spell|last \w+|yesterday))\b/g, m, 1, 'A point in time: since. since Monday.'));
  out = out.concat(A(/\b((?:he|she|it|peter|ned) (?:haven't|haven’t|have) (?:seen|been|lived|had|met|known))\b/g, m, 1, 'He / she: has. He hasn’t seen.'));
  out = out.concat(A(/^\s*(did (?:you|he|she|they) ever (?:met|saw|went|had|been|seen|was))\b/g, m, 1, 'Life experience: Have you ever met…?'));
  out = out.concat(A(/\b((?:have|has|haven't|haven’t|hasn't|hasn’t) (?:you |he |she |they |we )?(?:ever |never )?(?:meet|see|go|eat|be|have|know|live))\b/g, m, 1, 'After have: the past participle. met, seen, been.'));
  out = out.concat(A(/\b((?:have|has) (?:seen|met|been|gone|had|done) [^.!?]*\b(?:yesterday|last (?:week|year|month|night)|in (?:19|20)\d\d|ago))\b/g, m, 1, 'Finished time (yesterday, ago): past simple. I saw her yesterday.'));
  return out;
};
