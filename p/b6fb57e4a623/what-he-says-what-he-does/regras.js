/* As regras do corretor desta aula (nível 2): present simple × present continuous. he / she sem -s (Loid work), is / are + verbo base (is work), marca de agora com presente simples (look! he reads / right now he spies), marca de rotina com -ing (is working every day), sujeito + -ing sem be (he spying), verbos de estado com -ing (is liking, am knowing, are understanding, is wanting), Are you understand?, Is he go…?, Do + he / nome, What do you doing?, What you are doing?, Papa and Mama is. O corretor separa as frases com espaço na frente. A aula e a lição de casa Live usam este arquivo. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b((?:loid|yor|anya|he|she|my (?:mother|father|brother|sister|boss)) (?:work|go|live|like|read|cook|study|want|say|know))\b/g, m, 1, 'He / she, every day: works, goes, likes.', function (x) { return !/\b(?:does|doesn't|doesn’t|did|didn't|didn’t|will|can|could|should|to|and)\s*$/i.test(frase.slice(0, frase.toLowerCase().indexOf(x[1].toLowerCase()))); }));
  out = out.concat(A(/\b((?:am|is|are|isn't|isn’t|aren't|aren’t|'m|'s|'re|’m|’s|’re) (?:work|go|read|spy|cook|study|play|flirt|eat|sleep|watch|walk|talk|do))\b/g, m, 1, 'Be + base verb never goes together: he works / he is working.'));
  out = out.concat(A(/^\s*((?:look!?|right now|now|listen!?),? (?:\w+ ){1,2}(?:reads|spies|works|cooks|eats|sleeps|watches|talks|flirt|flirts|reads|walks|plays|goes))\b/g, m, 1, 'Right now, look!: be + -ing. He is reading.'));
  out = out.concat(A(/^\s*((?:every day|every morning|always|usually),? [^.!?]*\b(?:am|is|are) \w+ing)\b/g, m, 1, 'Every day = routine: present simple. Yor works.'));
  out = out.concat(A(/\b((?:papa and mama|they|we|you|\w+ and \w+) (?:flirt|walk|talk|eat|play) now)\b/g, m, 1, 'Right now: are + -ing. They are flirting.'));
  out = out.concat(A(/\b((?:am|is|are|'m|'s|'re|’m|’s|’re) \w+ing [^.!?]*\b(?:every day|every morning|every week|always|usually|on mondays|on sundays))\b/g, m, 1, 'Every day = routine: present simple. She works every day.'));
  out = out.concat(A(/\b((?:he|she|loid|yor|anya|it) (?:spying|working|reading|flirting|cooking|eating|sleeping|playing|going))\b/g, m, 1, 'Right now: is + -ing. He is spying.', function (x) { return !/\b(?:is|was|isn't|wasn't|isn’t|wasn’t|keeps|stops|likes|loves|hates|enjoys|starts)\s*$/i.test(frase.slice(0, frase.toLowerCase().indexOf(x[1].toLowerCase()))); }));
  out = out.concat(A(/\b((?:am|is|are|isn't|isn’t|aren't|aren’t|'m|'s|'re|’m|’s|’re) (?:liking|loving|knowing|wanting|understanding|hating|needing|believing))\b/g, m, 1, 'Like, know, want, understand: no -ing. She likes.'));
  out = out.concat(A(/^\s*((?:are|is|am) (?:you|we|they|he|she|i) (?:understand|know|like|want|go|work|live))\b/g, m, 1, 'Questions: Do you understand? Does he go…?'));
  out = out.concat(A(/^\s*(do (?:he|she|it|loid|yor|anya|my \w+))\b/g, m, 1, 'He / she: Does Loid go…?'));
  out = out.concat(A(/\b(what (?:do|does) (?:you|he|she|they|we) \w+ing)\b/g, m, 1, 'Questions about now: What are you doing?', function (x) { return !/\b(?:thing|ring|bring|sing|king|spring)\b/.test(x[1]); }));
  out = out.concat(A(/^\s*(what (?:you|he|she|they|we) (?:are|is|am) \w+ing)\b/g, m, 1, 'Questions: What are you doing? (are before you)'));
  out = out.concat(A(/\b((?:papa and mama|mama and papa|\w+ and \w+) is \w+ing)\b/g, m, 1, 'Two people = they: are flirting.'));
  return out;
};
