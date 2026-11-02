/* As regras do corretor desta aula (nível 1): o tempo com It's, be (não make/have), sunny/hot, in winter, weather × time. A aula e a lição de casa Live usam este arquivo. */
WolfCorretor.regras = function (frase, m) {
  var A = WolfCorretor.acha, out = [];
  out = out.concat(A(/(?:^|[.!?,]\s*|\b(?:and|but|when|because|now)\s+)(is)\s+(?:raining|snowing|sunny|cloudy|windy|hot|cold|warm|cool|very|\d+|minus)\b/g, m, 1, 'English needs a subject: It’s raining. It’s cold.'));
  out = out.concat(A(/\b(?:it\s+)?(makes?)\s+(?:cold|hot|sun|heat|rain|wind|\d+)/g, m, 1, 'The weather uses be: It’s cold. It’s 30 degrees.'));
  out = out.concat(A(/\bit\s+(has)\s+\d+\s+degrees\b/g, m, 1, 'It’s 31 degrees.'));
  out = out.concat(A(/\bit(?:'s| is)\s+(?:very\s+)?(sun|wind|cloud|heat|fog)\b/g, m, 1, 'After it’s: sunny, windy, cloudy, hot, foggy.'));
  out = out.concat(A(/\bit(?:'s| is)\s+(rain|snow)\s+(?:now|today|right now)\b/g, m, 1, 'Right now: It’s raining. It’s snowing.'));
  out = out.concat(A(/\b(on)\s+(?:winter|summer|spring|fall|autumn|january|february|march|april|june|july|august|september|october|november|december)\b/g, m, 1, 'Seasons and months: in winter, in July.'));
  out = out.concat(A(/\bin\s+(the)\s+(?:january|february|march|april|june|july|august|september|october|november|december)\b/g, m, 1, 'No the: in January.'));
  out = out.concat(A(/\b(how is the weather like|how's the weather like)\b/g, m, 1, 'What’s the weather like?'));
  out = out.concat(A(/\bthe\s+(time)\s+(?:is|like)\s+(?:sunny|cold|hot|rainy|windy|cloudy|like)/g, m, 1, 'Sun and rain are the weather. time is the clock.'));
  out = out.concat(A(/\bwhat's the\s+(time)\s+like\b/g, m, 1, 'What’s the weather like?'));
  return out;
};
