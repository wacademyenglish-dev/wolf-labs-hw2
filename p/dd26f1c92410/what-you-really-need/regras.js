/* As regras do corretor desta aula (B2): frases clivadas de conselho. "all what"; "the thing what"; "do … is" + -ING
   (What you need to do is calling); "The problem it's / it is"; what-clivada com ordem de pergunta (What do you need is);
   want / need is + verbo puro (What you want is paint). A aula e a lição de casa Live usam este arquivo. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b([Aa]ll what)\b/g, m, 1, 'All + you / I…, never “all what”. All you need is…'));
  out = out.concat(A(/\b(thing what|things what)\b/g, m, 1, 'The thing (that) you…, never “the thing what”.'));
  out = out.concat(A(/\b(to do (?:is|was) \w+ing)\b/g, m, 1, 'After “do … is”: the base verb. What you need to do is call her.'));
  out = out.concat(A(/\b((?:problem|thing|point|truth|question) (?:it’s|it's|it is))\b/g, m, 1, 'The sentence already has a subject: The problem is that…'));
  out = out.concat(A(/\b([Ww]hat (?:do|does|did) (?:you|I|we|they|he|she) (?:need|want|have to do|need to do|should do)[^.?!]* (?:is|was)\b)/g, m, 1, 'Not a question: What you need is…, no do.'));
  out = out.concat(A(/\b((?:want|wants|need|needs|wanted|needed) (?:is|was) (?:paint|study|travel|rest|leave|quit|move|change|sleep|talk|go|start|work|live))\b/g, m, 1, 'What you want / need IS + TO + verb: What you want is to rest.'));
  return out;
};
