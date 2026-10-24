/* TOO MUCH SUGAR · LIÇÃO DE CASA 2.0 (24/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: much / many / too much / too many / enough. A2: dicas em português só nas notas (d). Falas originais, sem cena do filme. Só imagens live-* escuras. */
window.HW2 = {
  "id": "too-much-sugar",
  "titulo": "Too Much Sugar",
  "nivel": "A2",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/c74e527f2f53/too-much-sugar/img/live-doces.webp",
  "alvo": "much / many / a lot of; too much (uncountable) / too many (countable); too + adjective (too expensive); enough before a noun; never too many sugar, many money, too much expensive",
  "abrir": "What do you have too much of at home?",
  "fecho": "<b>Much</b> for what you can't count (<i>money, sugar</i>), <b>many</b> for what you can (<i>kids, candy bars</i>). <b>Too much / too many</b> = more than you want. <b>Too + adjective</b>: <i>too expensive</i>. <b>Enough</b> goes before the noun: <i>enough candy</i>.",
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
      "sub": "Mia and Leo plan the candy for Halloween. A new scene, about 45 seconds.",
      "img": "https://wolf-labs.pages.dev/p/c74e527f2f53/too-much-sugar/img/live-doces.webp",
      "leg": "Jars of candy",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, we need candy for Halloween. How much money do we have?"
        },
        {
          "quem": "mia",
          "t": "Not much. Only twenty dollars."
        },
        {
          "quem": "leo",
          "t": "How many kids come to our street?"
        },
        {
          "quem": "mia",
          "t": "A lot of kids. Maybe forty."
        },
        {
          "quem": "leo",
          "t": "Forty! We don't have enough candy bars for forty kids."
        },
        {
          "quem": "mia",
          "t": "Then let's buy small candies. Two bags are enough."
        },
        {
          "quem": "leo",
          "t": "Careful. Too much sugar is bad for the kids."
        },
        {
          "quem": "mia",
          "t": "True. But too many candy bars cost too much money."
        },
        {
          "quem": "leo",
          "t": "OK. Two bags of candy and a bowl of apples."
        },
        {
          "quem": "mia",
          "t": "Good idea. Not many people give apples!"
        }
      ],
      "perguntas": [
        {
          "q": "How much money do they have?",
          "op": [
            "Not much",
            "A lot",
            "Forty dollars"
          ],
          "a": 0,
          "por": "Not much. Only twenty dollars."
        },
        {
          "q": "How many kids come to their street?",
          "op": [
            "A lot, maybe forty",
            "Not many",
            "Only two"
          ],
          "a": 0,
          "por": "A lot of kids. Maybe forty."
        },
        {
          "q": "Why don't they buy candy bars?",
          "op": [
            "They cost too much money",
            "The kids don't like them",
            "There is not enough sugar"
          ],
          "a": 0,
          "por": "Too many candy bars cost too much money."
        }
      ]
    },
    "out": {
      "sub": "Three sentences about candy and money. Hear it, then say it.",
      "frases": [
        {
          "t": "We don't have enough candy for forty kids.",
          "img": "https://wolf-labs.pages.dev/p/c74e527f2f53/too-much-sugar/img/live-doces.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "Too many candy bars cost too much money.",
          "img": "https://wolf-labs.pages.dev/p/c74e527f2f53/too-much-sugar/img/live-precos.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "Not many people give apples.",
          "img": "https://wolf-labs.pages.dev/p/c74e527f2f53/too-much-sugar/img/live-porta.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "much, many, too much, too many, enough. Four quick ones.",
      "regra": "<b>much</b> + uncountable · <b>many</b> + countable · <b>too much / too many</b> · <b>too</b> + adjective · <b>enough</b> + noun.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "We don't have enough candy for all the kids.",
          "aceita": [],
          "d": "Dica: <b>enough</b> vem antes do substantivo: <i>enough candy</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "I don't have many money.",
          "r": "I don't have much money.",
          "aceita": [],
          "d": "Dica: <b>money</b> não se conta, então <b>much</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "There were too much kids on the street.",
          "r": "There were too many kids on the street.",
          "aceita": [],
          "d": "Dica: <b>kids</b> se conta, então <b>too many</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "The candy is too much expensive.",
          "r": "The candy is too expensive.",
          "aceita": [],
          "d": "Dica: antes de adjetivo, só <b>too</b>: <i>too expensive</i>, nunca 'too much expensive'."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/c74e527f2f53/too-much-sugar/img/live-porta.webp",
      "leg": "A door with pumpkins at night",
      "pede": "Look at the picture: a door with pumpkins at night. Write 2 or 3 sentences about a party or about your week. Use <b>too much</b>, <b>too many</b> or <b>enough</b>.",
      "ph": "At a party, there is too much … There aren't enough …",
      "ex": "At my birthday party, there was too much food. There weren't enough chairs, and I didn't have much time to talk."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What do you have too much of? What don't you have enough of?",
          "ph": "I have too much … I don't have enough …",
          "ex": "I have too much homework, but I don't have enough free time."
        },
        {
          "q": "How much money do you spend on food every week? Is it a lot?",
          "ph": "I spend … It is / isn't a lot …",
          "ex": "I spend about two hundred reais. It isn't a lot, but it is too much for me."
        }
      ]
    }
  }
};
