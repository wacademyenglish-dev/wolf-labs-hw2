/* THE PRICE LIST · LIÇÃO DE CASA 2.0 (24/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=".
   Alvo: How much is/are + preços + enough (Blue Door Studio). A1: português só nas dicas (d). Imagens live-* escuras. */
window.HW2 = {
  "id": "the-price-list",
  "titulo": "The Price List",
  "nivel": "A1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/f580a62bac50/the-price-list/img/live-mesa.webp",
  "alvo": "How much is it? / How much are they?; saying prices (a hundred and twenty, twelve fifty); enough / not enough before the noun; how many + things you count",
  "abrir": "How much is a coffee near your work? Is it expensive?",
  "fecho": "<b>How much is</b> a chair? <b>How much are</b> the lamps? Say it as it sounds: <b>a hundred and twenty</b>, <b>twelve fifty</b>. <b>Enough</b> comes before the thing: <i>enough chairs</i>. <i>We don't have enough</i>, never <i>we have not enough</i>.",
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
  "rate": "-14%",
  "rodadas": {
    "listen": {
      "sub": "Priya and Rowan plan the office chairs at Blue Door Studio. A new scene, about 45 seconds.",
      "img": "https://wolf-labs.pages.dev/p/f580a62bac50/the-price-list/img/live-cadeiras.webp",
      "leg": "Empty chairs in the office",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Rowan, we need chairs for six people. How much is a chair in the catalog?"
        },
        {
          "quem": "leo",
          "t": "It's a hundred and twenty dollars. Each."
        },
        {
          "quem": "mia",
          "t": "And the desk lamps? How much are they?"
        },
        {
          "quem": "leo",
          "t": "They are twelve fifty. Each."
        },
        {
          "quem": "mia",
          "t": "We have six hundred dollars. Is it enough for six chairs?"
        },
        {
          "quem": "leo",
          "t": "Six chairs are seven hundred and twenty dollars. It's not enough."
        },
        {
          "quem": "mia",
          "t": "But we already have four chairs."
        },
        {
          "quem": "leo",
          "t": "Right. We need two more. That's two hundred and forty dollars."
        },
        {
          "quem": "mia",
          "t": "Good. That is enough. And the lamps?"
        },
        {
          "quem": "leo",
          "t": "Two lamps are twenty-five dollars. We have enough money."
        }
      ],
      "perguntas": [
        {
          "q": "How much is one chair?",
          "op": [
            "A hundred and twenty dollars",
            "Twelve fifty",
            "Six hundred dollars"
          ],
          "a": 0,
          "por": "It's a hundred and twenty dollars. Each."
        },
        {
          "q": "Is six hundred dollars enough for six chairs?",
          "op": [
            "No, it's not enough",
            "Yes, it's enough",
            "Only for four"
          ],
          "a": 0,
          "por": "Six chairs are seven hundred and twenty dollars. It's not enough."
        },
        {
          "q": "How many more chairs do they need?",
          "op": [
            "Two",
            "Four",
            "Six"
          ],
          "a": 0,
          "por": "We need two more."
        }
      ]
    },
    "out": {
      "sub": "Three sentences about prices. Hear it, then say it.",
      "frases": [
        {
          "t": "How much is a chair?",
          "au": "audio/say1.mp3",
          "img": "https://wolf-labs.pages.dev/p/f580a62bac50/the-price-list/img/live-mesa.webp"
        },
        {
          "t": "It's a hundred and twenty dollars.",
          "au": "audio/say2.mp3",
          "img": "https://wolf-labs.pages.dev/p/f580a62bac50/the-price-list/img/live-cadeiras.webp"
        },
        {
          "t": "We don't have enough chairs.",
          "au": "audio/say3.mp3",
          "img": "https://wolf-labs.pages.dev/p/f580a62bac50/the-price-list/img/live-armario.webp"
        }
      ]
    },
    "focus": {
      "sub": "How much is, how much are, enough. Four quick ones.",
      "regra": "<b>How much is</b> + one thing · <b>How much are</b> + things · <b>two hundred</b> (no -s) · <b>don't have enough</b> + thing.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "How much are the lamps?",
          "aceita": [],
          "d": "Dica: coisas no plural pedem <b>How much are</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "How much costs a chair?",
          "r": "How much is a chair?",
          "aceita": [],
          "d": "Dica: em inglês é <b>How much is</b>, nunca 'how much costs'."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "The chair is two hundreds dollars.",
          "r": "The chair is two hundred dollars.",
          "aceita": [],
          "d": "Dica: <b>hundred</b> nunca leva -s depois de um número."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "We have not enough chairs.",
          "r": "We don't have enough chairs.",
          "aceita": [
            "We do not have enough chairs."
          ],
          "d": "Dica: <b>don't have enough</b> + a coisa."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/f580a62bac50/the-price-list/img/live-armario.webp",
      "leg": "A shelf with paper and files",
      "pede": "Look at the picture: a shelf with paper. Write 2 or 3 sentences for your office with prices. Use <b>How much is …?</b> or <b>enough</b>.",
      "ph": "A pen is … We don't have enough …",
      "ex": "A pen is two dollars. Ten pens are twenty dollars. We don't have enough paper."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "How much is a coffee near your work or school?",
          "ph": "A coffee is …",
          "ex": "A coffee is six reais. It's a little expensive."
        },
        {
          "q": "Do you have enough time for lunch at work?",
          "ph": "I have enough … / I don't have enough …",
          "ex": "No, I don't have enough time. Only twenty minutes."
        }
      ]
    }
  }
};
