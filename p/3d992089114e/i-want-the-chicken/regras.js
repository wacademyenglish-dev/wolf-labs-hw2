/* As regras do corretor desta aula (nível 1): pedido educado (sem I want / give me / ordem seca). A aula e a lição de casa Live usam este arquivo. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/(?:^\s*|[.!?]\s+)(i\s+want)\s+(?:the|some|more|to\s+(?:pay|order|see|change|speak|try)|a\s+(?:coffee|table|fork|glass|menu|beer|juice|water|tea|refund))\b/g, m, 1, 'Correct, but rude. Say I’d like … please.'));
  out = out.concat(A(/(?:^\s*|[.!?]\s+)(give\s+me)\b/g, m, 1, 'An order. Ask: Could I have …?'));
  out = out.concat(A(/(?:^\s*|[.!?]\s+)((?:bring|change|call|take)\s+(?:me\s+)?(?:the|a|some|my|more|this|water))\b/g, m, 1, 'An order. Ask: Can you bring …? / Could you …?'));
  out = out.concat(A(/\b(i\s+would\s+like\s+to\s+the|i['’]d\s+like\s+to\s+the)\b/g, m, 1, 'I’d like THE chicken (no TO before a thing).'));
  out = out.concat(A(/\b(could|can)\s+i\s+(to)\s+\w+/g, m, 2, 'Could I + the verb alone.'));
  out = out.concat(A(/\bwe\s+pay\s+(separate)\b/g, m, 1, 'Separately, please.'));
  return out;
};
