/* As regras do corretor desta aula (nível 1): at / in / on com lugares; home sem preposição. A aula e a lição de casa Live usam este arquivo. */
var CIDADES = '(?:london|paris|brazil|rio|recife|bahia|sao paulo|são paulo|new york|edinburgh|portugal|lisbon|buenos aires|japan|my city|the city|the country)';
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b(in)\s+(?:the|a)\s+(?:bus|train|plane|bike|boat|ship|subway|metro)\b/g, m, 1, 'Big transport you walk on: ON the bus.'));
  out = out.concat(A(new RegExp('\\b(at)\\s+' + CIDADES + '\\b', 'g'), m, 1, 'A city or a country is a box: IN London.'));
  out = out.concat(A(/\b((?:in|at|to)\s+(?:the\s+)?home)\b(?!\s+(?:of|page|office|team))/g, m, 1, 'HOME takes no word: I’m home.'));
  out = out.concat(A(/\b(?:i['’]?m|i am|we are|we['’]re|she is|he is|she['’]s|he['’]s)\s+(in|on)\s+(?:work|school)\b/g, m, 1, 'AT work, AT school: one point.'));
  out = out.concat(A(/\b(in)\s+(?:a|the)\s+bridge\b/g, m, 1, 'A bridge is a line: ON a bridge.'));
  out = out.concat(A(/\b(on)\s+(?:the|a)\s+(?:park|kitchen|room|house)\b/g, m, 1, 'Walls or trees around you: IN the park.'));
  out = out.concat(A(/\b(?:is|are|['’]s|['’]re|am)\s+(big very|busy very|good very|hot very)\b/g, m, 1, 'VERY goes before the word: very big.'));
  return out;
};
