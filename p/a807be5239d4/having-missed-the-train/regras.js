/* As regras do corretor desta aula (nível 3): orações de particípio. "Having + base" (alvo: having + particípio: having missed); "Don't/Doesn't knowing" (alvo: not knowing); "Nora sitting …, she" (sujeito duplo); "Having readed"; a oração de -ing seguida de it/the rain/the weather/nothing/the lights (sujeito pendurado comum). O sujeito pendurado com outros sujeitos fica com o professor. A aula e a lição de casa Live usam este arquivo. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b(having (?:miss|leave|finish|read(?:ed)|see|board|lose|take|forget|arrive|eat|work|study|wait|buy|spend|meet|go|come|do|make|get))\b(?!ed|ing)/g, m, 1, 'First this, then that: HAVING + past participle (having missed, having left).'));
  out = out.concat(A(/^\s*((?:don't|don’t|doesn't|doesn’t|didn't|didn’t) \w+ing)\b/g, m, 1, 'The negative goes first: NOT knowing, NOT having.'));
  out = out.concat(A(/^\s*((?!not |never |after |before |while |when )[a-z]+ \w+ing\b[^,]*, (?:she|he|i|they|we))\b/g, m, 1, 'One subject only: Sitting in the dark, Nora listened.'));
  out = out.concat(A(/^\s*(\w+ing\b[^,]*, (?:the rain|the weather|it|nothing|the lights|the sky|the phone|the train|the bus))\b/g, m, 1, 'Who did the first part? That one comes right after the comma.'));
  return out;
};
