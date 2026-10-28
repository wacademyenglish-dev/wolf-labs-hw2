/* As regras do corretor da revisão Your Questions for Them. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b(tell me (?:what|where|when|how|who) (?:is|are|do|does|did|was|were) )/gi, m, 1, "Indirect question: subject BEFORE the verb (what the team is like)."));
  out = out.concat(A(/\b(wondering (?:what|how|when|where|who|if) (?:do|does|did|is|are) )/gi, m, 1, "After I was wondering: statement order."));
  return out;
};
