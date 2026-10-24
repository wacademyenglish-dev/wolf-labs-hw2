/* FIFTY THOUSAND DOLLARS · LIÇÃO DE CASA 2.0 (24/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: numbers, how much / how many, was / were. A1: dicas em português só nas notas (d). */
window.HW2 = {
  "id": "biz-cena-a1-05",
  "titulo": "Fifty Thousand Dollars",
  "nivel": "A1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/d66892597390/biz-cena-a1-05/img/live-capa.webp",
  "alvo": "big numbers and prices (four hundred, fifty thousand), How much is...? for money and things you don't count, How many...? for things you count, was / were for the past",
  "abrir": "How much is a coffee near your work?",
  "fecho": "<b>How much</b> asks about money: <i>How much is the room?</i> <b>How many</b> asks about things you count: <i>How many people are coming?</i> Big numbers have no -s: <i>four hundred</i>, <i>two thousand</i>. Before now: <b>was</b> (one) and <b>were</b> (more than one).",
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
      "sub": "Mia and Leo plan the office party. A new scene, about 40 seconds.",
      "img": "https://wolf-labs.pages.dev/p/d66892597390/biz-cena-a1-05/img/live-conversa.webp",
      "leg": "The pitch room",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, I have the budget for the office party. Look at the numbers."
        },
        {
          "quem": "leo",
          "t": "How much is the room?"
        },
        {
          "quem": "mia",
          "t": "The room is four hundred dollars."
        },
        {
          "quem": "leo",
          "t": "And how many people are coming?"
        },
        {
          "quem": "mia",
          "t": "Fifty people. Last year there were thirty people."
        },
        {
          "quem": "leo",
          "t": "How much is the food?"
        },
        {
          "quem": "mia",
          "t": "It is nine dollars for one person. So the food is four hundred fifty dollars."
        },
        {
          "quem": "leo",
          "t": "And the music?"
        },
        {
          "quem": "mia",
          "t": "The music is two hundred dollars. So the total is one thousand fifty dollars."
        },
        {
          "quem": "leo",
          "t": "Is that okay for the boss?"
        },
        {
          "quem": "mia",
          "t": "Yes! Last year the party was two thousand dollars. This year it is cheaper."
        }
      ],
      "perguntas": [
        {
          "q": "How many people are coming?",
          "op": [
            "Fifty",
            "Thirty",
            "Fifteen"
          ],
          "a": 0,
          "por": "Fifty people. Last year there were thirty people."
        },
        {
          "q": "How much is the room?",
          "op": [
            "Four hundred dollars",
            "Forty dollars",
            "Fourteen hundred dollars"
          ],
          "a": 0,
          "por": "The room is four hundred dollars."
        },
        {
          "q": "How much was the party last year?",
          "op": [
            "Two thousand dollars",
            "One thousand fifty dollars",
            "Four hundred dollars"
          ],
          "a": 0,
          "por": "Last year the party was two thousand dollars."
        }
      ]
    },
    "out": {
      "sub": "Three sentences about the party. Hear it, then say it.",
      "frases": [
        {
          "t": "The room is four hundred dollars.",
          "img": "https://wolf-labs.pages.dev/p/d66892597390/biz-cena-a1-05/img/live-conversa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "Fifty people are coming to the party.",
          "img": "https://wolf-labs.pages.dev/p/d66892597390/biz-cena-a1-05/img/live-capa.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "Last year there were thirty people.",
          "img": "https://wolf-labs.pages.dev/p/d66892597390/biz-cena-a1-05/img/live-conversa.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "How much, how many, hundred. Four quick ones.",
      "regra": "<b>How much</b> + money or things you don't count · <b>How many</b> + things you count · <b>hundred / thousand</b> never take -s · <b>was</b> (one), <b>were</b> (more).",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "How much is the food for fifty people?",
          "aceita": [],
          "d": "Dica: dinheiro e coisa que não se conta: <b>How much</b> + is."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "How much people are coming?",
          "r": "How many people are coming?",
          "aceita": [],
          "d": "Dica: pessoas a gente conta, então <b>How many</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "Last year there was thirty people.",
          "r": "Last year there were thirty people.",
          "aceita": [
            "Last year there were 30 people."
          ],
          "d": "Dica: trinta pessoas é mais de uma: <b>were</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "The room is four hundreds dollars.",
          "r": "The room is four hundred dollars.",
          "aceita": [
            "The room is 400 dollars."
          ],
          "d": "Dica: <b>hundred</b> nunca leva -s depois de um número."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/d66892597390/biz-cena-a1-05/img/live-capa.webp",
      "leg": "A small stand at night",
      "pede": "Look at the picture: a small stand. Write 2 or 3 sentences about a tiny business. Say a price and how many you sell. Use numbers.",
      "ph": "My product is … One … is …",
      "ex": "My stand sells lunch boxes. One box is nine dollars. Last month I sold six hundred boxes."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "How much is a coffee near your work?",
          "ph": "A coffee is …",
          "ex": "A coffee near my work is six reais."
        },
        {
          "q": "How many people work in your company?",
          "ph": "… people work in my company.",
          "ex": "Forty people work in my company."
        }
      ]
    }
  }
};
