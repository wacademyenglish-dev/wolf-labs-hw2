/* As regras do corretor desta aula (nível 2): as frases de ganhar tempo bem formadas (hold on, how do I put it, it's a kind of, give me a second). A aula e a lição de casa Live usam este arquivo. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b(how (?:i|can i) put it)\b/g, m, 1, 'The move: How do I put it…'));
  out = out.concat(A(/\b(it's kind a|its kind a)\s+of\b/g, m, 1, 'It’s a kind of …'));
  out = out.concat(A(/\bit'?s?\s+a\s+(kind)\s+(?!of\b)\w+/g, m, 1, 'a kind OF: It’s a kind of bag.'));
  out = out.concat(A(/\b(hold up on|hold in)\b/g, m, 1, 'Hold on.'));
  out = out.concat(A(/\b(let me to think|let me thinking|let me thinks)\b/g, m, 1, 'Let me think.'));
  out = out.concat(A(/\b(it's good question|that's good question)\b/g, m, 1, 'That’s a good question.'));
  return out;
};
