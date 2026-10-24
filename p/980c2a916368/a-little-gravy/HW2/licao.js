/* A LITTLE GRAVY, A FEW BEANS · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: countable x uncountable: a few / many / not many with countable, a little / much / not much with uncountable, a lot of with both. A2: dicas em português só nas notas (d). */
window.HW2 = {
  "id": "a-little-gravy",
  "titulo": "A Little Gravy, a Few Beans",
  "nivel": "A2",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/980c2a916368/a-little-gravy/img/live-capa.webp",
  "alvo": "countable x uncountable: a few / many / not many with countable, a little / much / not much with uncountable, a lot of with both; How many / How much; no 'a few of'",
  "abrir": "What is the biggest family meal of the year for you?",
  "fecho": "Can you count it? <b>A few, many</b> (beans, chairs) · <b>a little, much</b> (gravy, time) · <b>a lot of</b> with both. Questions: <i>How many chairs? How much time?</i> No <i>of</i> after <i>a few</i> / <i>a little</i>.",
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
      "sub": "Mia and Leo plan a big dinner. A new scene, about 45 seconds.",
      "img": "https://wolf-labs.pages.dev/p/980c2a916368/a-little-gravy/img/live-capa.webp",
      "leg": "Food for a big dinner",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, how many people are coming to dinner?"
        },
        {
          "quem": "mia",
          "t": "Twelve! I need a lot of potatoes."
        },
        {
          "quem": "leo",
          "t": "How many potatoes? Five?"
        },
        {
          "quem": "mia",
          "t": "More. Maybe twenty. But I don't need much gravy. Only a little."
        },
        {
          "quem": "leo",
          "t": "How much butter do we have?"
        },
        {
          "quem": "mia",
          "t": "Not much. Just a little. Can you buy some?"
        },
        {
          "quem": "leo",
          "t": "Sure. And how many chairs do we have?"
        },
        {
          "quem": "mia",
          "t": "Not many. Only a few."
        },
        {
          "quem": "leo",
          "t": "Then I'm going to bring a few chairs from my house."
        },
        {
          "quem": "mia",
          "t": "Thanks! We don't have much time."
        }
      ],
      "perguntas": [
        {
          "q": "How many people are coming to dinner?",
          "op": [
            "Twelve",
            "Twenty",
            "Five"
          ],
          "a": 0,
          "por": "Twelve!"
        },
        {
          "q": "How much gravy does Mia need?",
          "op": [
            "A little",
            "A lot",
            "Not any"
          ],
          "a": 0,
          "por": "I don't need much gravy. Only a little."
        },
        {
          "q": "How many chairs do they have?",
          "op": [
            "Only a few",
            "A lot",
            "None"
          ],
          "a": 0,
          "por": "Not many. Only a few."
        }
      ]
    },
    "out": {
      "sub": "Three sentences about the dinner. Hear it, then say it.",
      "frases": [
        {
          "t": "We need a few more chairs.",
          "au": "audio/say1.mp3",
          "img": "https://wolf-labs.pages.dev/p/980c2a916368/a-little-gravy/img/live-capa.webp"
        },
        {
          "t": "I don't have much time.",
          "au": "audio/say2.mp3",
          "img": "https://wolf-labs.pages.dev/p/980c2a916368/a-little-gravy/img/live-despensa.webp"
        },
        {
          "t": "How many potatoes do you need?",
          "au": "audio/say3.mp3",
          "img": "https://wolf-labs.pages.dev/p/980c2a916368/a-little-gravy/img/live-capa.webp"
        }
      ]
    },
    "focus": {
      "sub": "Count it or not? Four quick ones.",
      "regra": "<b>a few / many</b> = you can count it · <b>a little / much</b> = you can't · <b>a lot of</b> = both · no <b>of</b> after <b>a few / a little</b>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "How much gravy do we need?",
          "aceita": [],
          "d": "Dica: molho não se conta: <b>How much</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: you can't count gravy.",
          "mostra": "We only need a few gravy.",
          "r": "We only need a little gravy.",
          "aceita": [],
          "d": "Dica: <b>gravy</b> não se conta: <b>a little</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: you can count chairs.",
          "mostra": "We don't have much chairs.",
          "r": "We don't have many chairs.",
          "aceita": [],
          "d": "Dica: cadeiras se contam: <b>many</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: no of after a few.",
          "mostra": "I need a few of potatoes.",
          "r": "I need a few potatoes.",
          "aceita": [],
          "d": "Dica: depois de <b>a few</b> não tem <b>of</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/980c2a916368/a-little-gravy/img/live-despensa.webp",
      "leg": "A pantry shelf",
      "pede": "Look at the picture: a pantry. Write 2 or 3 sentences about food at your house: one with <b>a lot of</b>, one with <b>a few</b> or <b>a little</b>, and one with <b>not much</b> or <b>not many</b>.",
      "ph": "At my house there is a lot of …",
      "ex": "At my house there is a lot of rice. There are a few eggs. There isn't much milk."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "How much free time do you have this week?",
          "ph": "I have …",
          "ex": "Not much. I have a lot of work."
        },
        {
          "q": "How many close friends do you have?",
          "ph": "I have …",
          "ex": "Not many. A few very good ones."
        }
      ]
    }
  }
};
