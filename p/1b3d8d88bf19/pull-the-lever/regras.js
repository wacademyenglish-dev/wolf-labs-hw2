/* As regras do corretor desta aula (nível 2): have to / has to / don't have to / Do I have to…? / had to. have that + verbo (tenho que), he / she have to, I / you / we / they has to, don't / doesn't must, haven't to / hasn't to, doesn't has to, Have I to…? / Has he to…?, Do I must…?, Do he / Do Tahani…?, have / has sem to antes do verbo, have to + passado, had to + passado. O corretor separa as frases com espaço na frente. A aula e a lição de casa Live usam este arquivo. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b((?:have|has|had) that \w+)/g, m, 1, 'In English: have to + verb (not have that).', function (x) { return !/that (?:is|was|one|book|car|house|dog|cat|problem|idea|job)\b/.test(x[1]); }));
  out = out.concat(A(/\b((?:he|she|it|chidi|eleanor|michael|tahani|jason|janet|my (?:mother|father|boss|brother|sister|friend|son|daughter|teacher)) have to)\b/g, m, 1, 'He / she: has to.', function (x) { return !/\b(?:do|does|did|don't|don’t|doesn't|doesn’t|didn't|didn’t|will|would|not|and)\s*$/i.test(frase.slice(0, frase.toLowerCase().indexOf(x[1].toLowerCase()))); }));
  out = out.concat(A(/\b((?:i|you|we|they|janet|jason) has to)\b/g, m, 1, 'I / you / we / they: have to.', function (x) { return !/^(?:janet|jason)/.test(x[1]) || /\band\s*$/i.test(frase.slice(0, frase.toLowerCase().indexOf(x[1].toLowerCase()))); }));
  out = out.concat(A(/\b((?:don't|don’t|doesn't|doesn’t|didn't|didn’t|do not|does not) must)\b/g, m, 1, 'Not necessary: don’t have to.'));
  out = out.concat(A(/\b((?:haven't|haven’t|hasn't|hasn’t) to)\b/g, m, 1, 'The negative is don’t / doesn’t have to.'));
  out = out.concat(A(/\b((?:doesn't|doesn’t|does|did|didn't|didn’t) has to)\b/g, m, 1, 'After does / doesn’t: have to (not has).'));
  out = out.concat(A(/^\s*((?:have|has) (?:i|you|we|they|he|she|chidi|eleanor|tahani) to)\b/g, m, 1, 'Questions: Do I have to…? Does she have to…?'));
  out = out.concat(A(/\b((?:do|does) (?:i|you|we|they|he|she) must)\b/g, m, 1, 'Questions: Do I have to…? (not Do I must)'));
  out = out.concat(A(/^\s*(do (?:he|she|it|chidi|eleanor|michael|tahani|my \w+) have to)\b/g, m, 1, 'He / she: Does … have to…?'));
  out = out.concat(A(/\b((?:has|have|had) (?:choose|pull|decide|pay|go|learn|tell|plan|teach|work|study|wake|answer|do|be|eat|call|return|share|help|throw))\b/g, m, 1, 'Have to / has to: don’t forget the to.'));
  out = out.concat(A(/\b((?:have|has|had) to (?:planned|went|decided|chose|paid|learned|told|taught|worked|studied|answered|called|returned|helped|did|was|were))\b/g, m, 1, 'After have to / had to: the base verb. had to plan.'));
  out = out.concat(A(/\b(there has to be (?:stakes|rules|people|reasons|two|three|many|some))\b/g, m, 1, 'Many things: there have to be.'));
  return out;
};
