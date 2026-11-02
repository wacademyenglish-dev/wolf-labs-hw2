/* As regras do corretor desta aula (nível 1): this / that / these / those, o verbo e o número. A aula e a lição de casa Live usam este arquivo. */
var PLURAIS = '(?:keys|shoes|socks|books|scissors|glasses|pens|cups|friends|clothes|boxes|plants|photos|jeans|chairs|toys|presents|stars|hands|people|children)';
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b((?:this|that)\s+are)\b/g, m, 1, 'One thing takes IS: this is, that is.'));
  out = out.concat(A(/\b((?:these|those)\s+is)\b/g, m, 1, 'More than one takes ARE: these are, those are.'));
  out = out.concat(A(/\b(what\s+is\s+(?:these|those)|what['’]s\s+(?:these|those))\b/g, m, 1, 'More than one: What are these? What are those?'));
  out = out.concat(A(/\b(what\s+are\s+(?:this|that))\b/g, m, 1, 'One thing: What is this? What’s that?'));
  out = out.concat(A(new RegExp('\\b((?:this|that)\\s+' + PLURAIS + ')\\b', 'g'), m, 1, 'More than one thing: these / those.'));
  return out;
};
