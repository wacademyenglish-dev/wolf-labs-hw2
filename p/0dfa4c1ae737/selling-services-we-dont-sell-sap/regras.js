/* As regras do corretor · Selling Services 3 · We Do Payroll. We Don’t Sell SAP.. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b((?:it|he|she|this|that|the \w+) don[’']t (?:is|are))\b/gi, m, 1, "With be, the negative is not: it isn’t, he isn’t. Never “don’t is”."));
  out = out.concat(A(/\b((?:we|you|they) don[’']t are)\b/gi, m, 1, "With be: we aren’t, they aren’t."));
  out = out.concat(A(/\b(i don[’']t am|i no am)\b/gi, m, 1, "I’m not."));
  out = out.concat(A(/\b(\w+ no (?:is|are))\b/gi, m, 1, "Negative of be: isn’t / aren’t."));
  out = out.concat(A(/\b((?:we|they|i|you) (?:aren[’']t|am not|are not) (?:sell|do|work|use|have|need|replace))\b/gi, m, 1, "Action verb: don’t + verb (we don’t sell)."));
  out = out.concat(A(/\b((?:he|she|it|the client|the company|the erp) don[’']t (?:use|work|sell|have|need|like))\b/gi, m, 1, "He / she / it: doesn’t + verb."));
  out = out.concat(A(/\b(we no \w+)\b/gi, m, 1, "Negative with an action: we don’t + verb."));
  return out;
};
