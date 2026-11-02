/* As regras do corretor desta aula (nível 1): let's + verbo puro, let's not, Shall we…? A aula e a lição de casa Live usam este arquivo. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\blet'?s\s+(?:not\s+)?(to)\s+\w+/g, m, 1, 'After let’s, the verb comes plain: let’s go.'));
  out = out.concat(A(/\b(let'?s don't|let'?s do not|don't let'?s)\b/g, m, 1, 'The no is let’s not: let’s not go.'));
  out = out.concat(A(/\blet'?s\s+(?:not\s+)?(going|goes|went|putting|taking|starts|takes|puts)\b/g, m, 1, 'After let’s, the plain verb: let’s go, let’s take.'));
  out = out.concat(A(/\b(shall us|shall we to)\b/g, m, 1, 'Shall we + the plain verb.'));
  out = out.concat(A(/^\s*(we go)\s+(?!to\s+(?:school|work|bed|church)\b)\w+/g, m, 1, 'To invite: Let’s … (we go is not an invitation).'));
  out = out.concat(A(/\b([Ll]ets)\b/g, frase, 1, 'Let’s has an apostrophe: let us.'));
  return out;
};
