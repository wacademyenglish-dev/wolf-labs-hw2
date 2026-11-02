/* As regras do corretor desta aula (nível 3): recursos retóricos. "because is / because was" (o sujeito some); "; is about" depois de ponto e vírgula; pergunta sem inversão (Why we should…?, What kind of town we are…?, Who we are…?, Where I can…?); "Why to…?"; "when will be? / who will be?"; "etc." no fim da lista; o paralelismo quebrado (to read, studying · for meeting). A aula e a lição de casa Live usam este arquivo. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b(because (?:is|was|isn't|wasn't))\b/g, m, 1, 'Keep the subject: because IT IS …'));
  out = out.concat(A(/[;,] ((?:is|was) (?:about|not|for))\b/g, m, 1, 'Keep the subject in both halves: IT IS about people.'));
  out = out.concat(A(/(?:^\s*|["“]\s*)((?:why|what|who|where|how|when)(?: kind of \w+)? (?:we|i|you|they|he|she) (?:should|can|could|would|will|are|is|were|was|do|did|must|have))\b[^.!]*\?/g, m, 1, 'A question: auxiliary BEFORE the subject. Why SHOULD WE …? Who ARE WE …?'));
  out = out.concat(A(/(?:^\s*)(why to)\b/g, m, 1, 'A real question needs a subject and an auxiliary: Why SHOULD WE keep …?'));
  out = out.concat(A(/\b((?:when|who) will be)\?/g, m, 1, 'Keep it short and parallel: If not now, WHEN? If not us, WHO?'));
  out = out.concat(A(/(,? etc\.?)(?=\s|$)/g, m, 1, 'A tricolon ends with the biggest item, never with etc.'));
  out = out.concat(A(/\bto [a-z]+, ((?!to\b)[a-z]+ing)\b/g, m, 1, 'Same shape in every part: to read, TO STUDY, TO MEET.'));
  out = out.concat(A(/\b(?:and|,) (for [a-z]+ing)\b/g, m, 1, 'Same shape in every part: to read, to study and TO MEET.'));
  return out;
};
