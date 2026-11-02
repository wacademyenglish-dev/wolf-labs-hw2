/* As regras do corretor desta aula (nível 3): orações sem verbo. "though/although/when/while/once/if + was/were/is/are" (corta os dois); "Was alone/unsure…," no começo; "despite + adjetivo"; "though exhausting/tiring"; "in case of doubt"; "if doubt"; "once finishing"; "her legs burned, she" (vírgula colando duas frases); "she alone…, she" (sujeito duplo); o sujeito errado depois da vírgula (the finish line / the crowd / the road…). A aula e a lição de casa Live usam este arquivo. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/(?:^\s*|["“]\s*)((?:though|although|when|while|once|if) (?:was|were|is|are|am))\b/g, m, 1, 'Cut the subject AND be: Though exhausted, she …'));
  out = out.concat(A(/(?:^\s*)((?:was|were) (?:alone|unsure|tired|exhausted|halfway|ready|in pain|happy))\b/g, m, 1, 'No verb at all: Alone at the start line, she …'));
  out = out.concat(A(/\b((?:despite|in spite of) (?:tired|exhausted|sore|alone|happy|ill|sick|in pain|hungry|cold|afraid|nervous|ready))\b/g, m, 1, 'DESPITE + noun or -ing (despite being tired). With an adjective alone: THOUGH tired.'));
  out = out.concat(A(/\b((?:though|although|while) (?:exhausting|tiring|boring|annoying))\b/g, m, 1, 'The one who feels it: exhaustED, tirED.'));
  out = out.concat(A(/\b(in case of doubt)\b/g, m, 1, 'The fixed chunk: IF IN DOUBT (or when in doubt).'));
  out = out.concat(A(/\b(if doubt)\b/g, m, 1, 'The fixed chunk: IF IN DOUBT.'));
  out = out.concat(A(/\b(once (?:finishing|finish))\b/g, m, 1, 'ONCE + participle: once finishED.'));
  out = out.concat(A(/(?:^\s*)((?:her|his|my|their|our) \w+ (?:were|was|burned|hurt|shook)(?: on fire)?), (?:she|he|i|they|we)\b/g, m, 1, 'Two sentences glued by a comma. The writer’s move: Her legs BURNING, she …'));
  out = out.concat(A(/(?:^\s*)((?:she|he|i|they|we) (?:alone|unsure|tired|exhausted)\b[^,]*), (?:she|he|i|they|we)\b/g, m, 1, 'One subject only: Alone on the bridge, she …'));
  out = out.concat(A(/(?:^\s*)(?:though|although|once|when|while|alone|unsure|halfway|tired)\b[^,]*, (the (?:finish line|crowd|road|sea|grass|clock|sun|race|sky)|her gloves|every stranger)\b/g, m, 1, 'Who is tired? That one must come right after the comma.'));
  return out;
};
