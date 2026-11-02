/* As regras do corretor da REVISÃO A1 · UNIDADE 1: idade com be (I have 30), from (of Canada),
   a / an antes da profissão (she is nurse), live in (I live at Recife). */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/\b((?:I|you|we|they) have \d+|(?:he|she) has \d+)(?! (?:years? old )?(?:kids|children|brothers|sisters|cats|dogs|friends|books|cars|rooms|bedrooms|reais|dollars|euros|minutes|hours|days|classes|students|people|things|questions))\b/gi, m, 1, 'Age is be: I am 30, she is 27.'));
  out = out.concat(A(/\b((?:am|is|are|i'm|he's|she's) of (?:brazil|canada|japan|egypt|chile|portugal|spain|mexico|italy))\b/gi, m, 1, 'Your country: from. I am from Brazil.'));
  out = out.concat(A(/\b((?:am|is|are|i'm|he's|she's) (?:nurse|teacher|doctor|student|designer|cook|driver|lawyer|engineer|architect|artist|actor|waiter))\b/gi, m, 1, 'A job needs a / an: she is a nurse, he is an engineer.'));
  out = out.concat(A(/\b(live (?:at|on) (?:[A-Z][a-z]+))\b/g, m, 1, 'A city: live in. I live in Recife.'));
  return out;
};