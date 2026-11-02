/* As regras do corretor desta aula (nível 3): kept + -ing (nunca kept to / kept + verbo puro / kept + passado); ended up + -ing (nunca ended up to / + passado); was going to + verbo puro. A aula e a lição de casa Live usam este arquivo. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b((?:kept|keep|keeps) to (?:check|look|say|open|watch|ask|call|write|try|go|do|eat|play|scroll|talk|think|rewrite|work|read|tell|make|forget|lose|put))\b/g, m, 1, 'kept + -ing: I kept checking.'));
  out = out.concat(A(/\b((?:ended|end|ends) up to (?!the\b|a\b|an\b|my\b|your\b|his\b|her\b|our\b|their\b|\d)\w+)/g, m, 1, 'ended up + -ing: I ended up ordering.'));
  out = out.concat(A(/\b((?:kept|keep|keeps) (?:check|look|say|open|watch|ask|call|write|try|eat|play|scroll|talk|think|rewrite|read|tell|forget|lose|said|watched|looked|checked|opened|asked|called|wrote|tried|played|scrolled|talked|thought|rewrote|told|forgot|lost))\b/g, m, 1, 'kept + -ing: kept watching, kept saying.'));
  out = out.concat(A(/\b((?:ended|end|ends) up (?:went|did|made|slept|wrote|ordered|watched|sent|stayed|called|took|bought|ate|walked|started|send|order|sleep|write|walk|start|buy|eat|take|call|watch|stay|do|go))\b/g, m, 1, 'ended up + -ing: ended up sleeping, ended up going.'));
  out = out.concat(A(/\b((?:was|were) going to (?!bring|sing|ring|swing|sting)\w+ing)\b/g, m, 1, 'was going to + the plain verb: was going to start.'));
  return out;
};
