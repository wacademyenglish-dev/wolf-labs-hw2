/* As regras do corretor desta aula (nível 1): question words. A ordem da pergunta com be (What your name is? Where he is?), How many years do you have / I have 25 years (idade é be), pergunta sem do (Where you live? What you do?), does com you / do com he / she, What are you do?, how much + coisa contável (children, people, brothers), What is + pessoa? fica de fora (ambíguo). O corretor separa as frases com espaço na frente. A aula e a lição de casa Live usam este arquivo. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b((?:what|where|who|how old|why) (?:your|his|her|my|the) \w+ (?:is|are))\b(?=\s*\??\s*$)/g, m, 1, 'In a question, the verb comes before the person: What is your name?'));
  out = out.concat(A(/\b((?:where|how old|why|what) (?:you|he|she|they|we) (?:is|are|am))\b/g, m, 1, 'In a question, the verb comes before the person: Where is he? Why are you…?'));
  out = out.concat(A(/\b(how many years (?:do|does) (?:you|he|she|they) have)\b/g, m, 1, 'Age is be: How old are you? (I am 50.)'));
  out = out.concat(A(/\b((?:i|you|he|she|we|they) (?:have|has) \d+ years)\b(?! ago)/g, m, 1, 'Age is be: I am 25. He is 50.'));
  out = out.concat(A(/\b((?:where|what|how many \w+|who) (?:you|they|we) (?:live|do|work|have|like|want|go|study))\b/g, m, 1, 'Most verbs need do: Where do you live? What do you do?'));
  out = out.concat(A(/\b((?:where|what|how many \w+|who) (?:he|she|it) (?:lives|does|works|has|likes|wants|goes|live|do|work|have))\b/g, m, 1, 'He / she needs does: Where does he live?'));
  out = out.concat(A(/\b(does (?:you|they|we|i))\b/g, m, 1, 'You → do. He / she → does.'));
  out = out.concat(A(/\b(do (?:he|she|it))\b(?! (?:not))/g, m, 1, 'He / she → does: Where does he live?', function () { return !/\b(?:how do|what do|where do) (?:he|she)\b/.test('') ; }));
  out = out.concat(A(/\b(what (?:are|is) (?:you|he|she) do)\b/g, m, 1, 'With other verbs, do / does: What do you do?'));
  out = out.concat(A(/\b(how much (?:children|people|brothers|sisters|friends|cars|kids|books|rooms))\b/g, m, 1, 'People and things you can count: how many.'));
  out = out.concat(A(/\b(who (?:are) (?:your|his|her) (?:wife|husband|mother|father|son|daughter|teacher|boss|friend|brother|sister))\b/g, m, 1, 'One person: who is your wife?'));
  return out;
};
