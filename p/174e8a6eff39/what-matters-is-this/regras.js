/* As regras do corretor desta aula (nível 3): clivadas e ênfase. "the important is"; it-cleft sem IT no começo (Is/Was/Isn't the … that/who); "all what"; "the reason is because"; "the reason of"; "this is what that matters / what it matters / is that matters"; "did/do/does + passado ou -s"; "all … it's" e "what … it's" (vírgula de it sobrando). A aula e a lição de casa Live usam este arquivo. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b(the important (?:is|thing is not|was))\b(?! thing)/g, m, 1, 'English needs a clause: WHAT MATTERS is … / What’s important is …'));
  out = out.concat(A(/(?:^\s*|[.!?]\s+)((?:is|was|isn't|wasn't|isn’t|wasn’t) (?:the|my|our|her|his|this) [^.?!]*? (?:that|who))\b/g, m, 1, 'Keep the IT: IT is … that … / IT isn’t … that …'));
  out = out.concat(A(/\b(all what)\b/g, m, 1, 'After ALL, the clause comes straight in: All I want is …'));
  out = out.concat(A(/\b(the reason[^.?!]*? is because)\b/g, m, 1, 'The reason … is THAT …'));
  out = out.concat(A(/\b(the reason of)\b/g, m, 1, 'The reason (that) we need it … No OF.'));
  out = out.concat(A(/\b(what (?:that|it) matters|is that matters)\b/g, m, 1, 'This is WHAT matters.'));
  out = out.concat(A(/\b((?:did|do|does) (?:tried|worked|believed|asked|called|saw|went|tries|works|believes))\b/g, m, 1, 'DO / DID + base verb: we did TRY, it did WORK.'));
  out = out.concat(A(/(?:^\s*)(?:all|what) [^.?!]*? (it[’']s)\b/g, m, 1, 'One verb only: All we need IS … / What I want to say IS …'));
  out = out.concat(A(/(?:^\s*)(that i want to say is)\b/g, m, 1, 'The what-cleft: WHAT I want to say is …'));
  return out;
};
