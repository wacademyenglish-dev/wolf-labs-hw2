/* THREE QUOTES · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: comparativo e superlativo. A2: dicas em português só nas notas (d). */
window.HW2 = {
  "id": "three-quotes",
  "titulo": "Three Quotes",
  "nivel": "A2",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/e580915fbd35/three-quotes/img/live-envelopes.webp",
  "alvo": "comparatives and superlatives: short word + -er than (cheaper), long word more ... than (more reliable), the -est / the most for three or more, better / worse, as ... as; never more cheap, more good, as ... than",
  "abrir": "What two things did you compare this week?",
  "fecho": "Short word: <b>cheaper than</b>, <b>the cheapest</b>. Long word: <b>more reliable than</b>, <b>the most reliable</b>. <b>good</b> becomes <b>better than</b>, <b>the best</b>. The same: <b>as fast as</b>. Never <i>more cheap</i>, never <i>more good</i>.",
  "elenco": {
    "mia": {
      "nome": "Mia",
      "voz": "en-US-AvaNeural",
      "cor": "#86c9f0"
    },
    "leo": {
      "nome": "Leo",
      "voz": "en-AU-WilliamMultilingualNeural",
      "cor": "#f0b866"
    }
  },
  "rate": "-12%",
  "rodadas": {
    "listen": {
      "sub": "Mia and Leo compare three printer quotes. A new scene, about 45 seconds.",
      "img": "https://wolf-labs.pages.dev/p/e580915fbd35/three-quotes/img/live-envelopes.webp",
      "leg": "Three quotes on a desk",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, we have three quotes for a new printer. Which one do we choose?"
        },
        {
          "quem": "leo",
          "t": "Let's compare. Alpha is cheaper than Beta."
        },
        {
          "quem": "mia",
          "t": "Yes, but Beta is faster than Alpha."
        },
        {
          "quem": "leo",
          "t": "And Gamma?"
        },
        {
          "quem": "mia",
          "t": "Gamma is the most expensive, but it is the most reliable."
        },
        {
          "quem": "leo",
          "t": "Alpha is not as reliable as Gamma."
        },
        {
          "quem": "mia",
          "t": "The cheapest is not always the best."
        },
        {
          "quem": "leo",
          "t": "True. Beta is better than Alpha, and it is cheaper than Gamma."
        },
        {
          "quem": "mia",
          "t": "Then Beta is the best for the team."
        }
      ],
      "perguntas": [
        {
          "q": "Which printer is the cheapest?",
          "op": [
            "Alpha",
            "Beta",
            "Gamma"
          ],
          "a": 0,
          "por": "Alpha is cheaper than Beta."
        },
        {
          "q": "Which printer is the most reliable?",
          "op": [
            "Gamma",
            "Alpha",
            "Beta"
          ],
          "a": 0,
          "por": "Gamma is the most expensive, but it is the most reliable."
        },
        {
          "q": "Which printer is the best for the team?",
          "op": [
            "Beta",
            "Alpha",
            "Gamma"
          ],
          "a": 0,
          "por": "Then Beta is the best for the team."
        }
      ]
    },
    "out": {
      "sub": "Three comparisons. Hear it, then say it.",
      "frases": [
        {
          "t": "Alpha is cheaper than Beta.",
          "img": "https://wolf-labs.pages.dev/p/e580915fbd35/three-quotes/img/live-envelopes.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "Gamma is more reliable than Alpha.",
          "img": "https://wolf-labs.pages.dev/p/e580915fbd35/three-quotes/img/live-envelopes.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "Beta is the best for the team.",
          "img": "https://wolf-labs.pages.dev/p/e580915fbd35/three-quotes/img/live-envelopes.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "-er, more, better, as ... as. Four quick ones.",
      "regra": "<b>cheap + -er than</b> · <b>more reliable than</b> · <b>the cheapest / the most reliable</b> · <b>better</b> · <b>as ... as</b>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "Gamma is the most expensive one.",
          "aceita": [],
          "d": "Dica: o topo de três: <b>the most</b> + palavra longa."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "Alpha is more cheap than Beta.",
          "r": "Alpha is cheaper than Beta.",
          "aceita": [],
          "d": "Dica: palavra curta usa <b>-er</b>: cheaper, não more cheap."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "Beta is more good than Alpha.",
          "r": "Beta is better than Alpha.",
          "aceita": [],
          "d": "Dica: good é especial: <b>better</b>, nunca more good."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "Beta is not as fast than Gamma.",
          "r": "Beta is not as fast as Gamma.",
          "aceita": [],
          "d": "Dica: a estrutura é <b>as ... as</b>, e não as ... than."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/e580915fbd35/three-quotes/img/live-envelopes.webp",
      "leg": "Three quotes on a desk",
      "pede": "Look at the picture: three envelopes with quotes on a desk. Write 2 or 3 sentences comparing two things you want to buy. Use <b>-er than</b> or <b>more ... than</b>, and one <b>the best</b> or <b>the cheapest</b>.",
      "ph": "The blue phone is cheaper than …",
      "ex": "The blue phone is cheaper than the black one. The black one is more modern. The blue phone is the best for me."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "Compare your phone with a friend's phone.",
          "ph": "My phone is … than …",
          "ex": "My phone is older than my friend's phone."
        },
        {
          "q": "What is the most expensive thing you have?",
          "ph": "The most expensive thing I have is …",
          "ex": "The most expensive thing I have is my laptop."
        }
      ]
    }
  }
};
