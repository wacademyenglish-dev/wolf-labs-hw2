/* As regras do corretor desta aula (nível 3): os moldes de circunlocução e a junta do meio. A aula e a lição de casa Live usam este arquivo. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b(the thing (?:you use |that you use )?for)\s+(?!\w+ing\b)(open|cut|clean|cook|write|make|turn|get|take|keep|hold|wash|fix|carry|play|eat|drink|read|watch|listen)\b/g, m, 1, 'the thing you use for + -ING: for opening, for cutting.'));
  out = out.concat(A(/\b(a kind of a)\s+\w+/g, m, 1, 'a kind of + noun, no second a: a kind of insect.'));
  out = out.concat(A(/\b((?:a|the) (?:person|man|woman|guy) (?:who|that) (?:his|her|their))\s+\w+/g, m, 1, 'Their job: WHOSE job. A person whose job is…'));
  out = out.concat(A(/\b(it'?s like a \w+(?:\s\w+)?),?\s+(?!but\b)(?:and|only|just)\b/g, m, 1, 'It’s like…, BUT…: say the difference.'));
  out = out.concat(A(/\b(how do you say)\b/g, m, 1, 'Don’t stop: go around it. It’s a kind of… / the thing you use for…'));
  out = out.concat(A(/\b(?:a|the) (?:place|city|room|store|shop) (which)\s+(?:you|i|we|they|people)\b/g, m, 1, 'A place: WHERE you…'));
  return out;
};
