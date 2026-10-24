/* ENOUGH · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: contável/incontável, some/any, how many/much, a few/a little. A1: dicas em português só nas notas (d). */
window.HW2 = {
  "id": "enough",
  "titulo": "Enough",
  "nivel": "A1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/5418412d039b/enough/img/live-c-ovo.webp",
  "alvo": "countable and uncountable food: some / any, how many / how much, a few / a little, enough",
  "abrir": "What is in your fridge right now?",
  "fecho": "<b>Count it:</b> two eggs, a few onions, <i>How many</i> eggs? <b>Measure it:</b> a little milk, some rice, <i>How much</i> milk? In a no or a question, use <b>any</b>: <i>There isn't any milk.</i> When it is OK, it is <b>enough</b>.",
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
      "sub": "Mia and Leo in the kitchen. A new scene, about 40 seconds.",
      "img": "https://wolf-labs.pages.dev/p/5418412d039b/enough/img/live-mercado.webp",
      "leg": "Dinner at eight",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, the guests come at eight. Is there enough food?"
        },
        {
          "quem": "mia",
          "t": "Let me look. There are some eggs and some tomatoes."
        },
        {
          "quem": "leo",
          "t": "How many eggs are there?"
        },
        {
          "quem": "mia",
          "t": "Six eggs. And there is some cheese."
        },
        {
          "quem": "leo",
          "t": "Is there any milk?"
        },
        {
          "quem": "mia",
          "t": "No, there isn't any milk. I need a little milk for the cake."
        },
        {
          "quem": "leo",
          "t": "How much rice do we have?"
        },
        {
          "quem": "mia",
          "t": "A lot of rice. I only need a little rice and a few onions."
        },
        {
          "quem": "leo",
          "t": "I can go to the market. I will buy a carton of milk."
        },
        {
          "quem": "mia",
          "t": "Thank you! Now we have enough."
        }
      ],
      "perguntas": [
        {
          "q": "How many eggs are there?",
          "op": [
            "Six",
            "Some",
            "A little"
          ],
          "a": 0,
          "por": "Six eggs."
        },
        {
          "q": "What is missing?",
          "op": [
            "Milk",
            "Cheese",
            "Rice"
          ],
          "a": 0,
          "por": "No, there isn't any milk."
        },
        {
          "q": "What does Leo buy?",
          "op": [
            "A carton of milk",
            "A bag of rice",
            "Six eggs"
          ],
          "a": 0,
          "por": "I will buy a carton of milk."
        }
      ]
    },
    "out": {
      "sub": "Three sentences from the lesson. Hear it, then say it.",
      "frases": [
        {
          "t": "There isn't any milk, so I need a carton.",
          "img": "https://wolf-labs.pages.dev/p/5418412d039b/enough/img/geladeira.jpg",
          "au": "audio/say1.mp3"
        },
        {
          "t": "How many eggs are there in the fridge?",
          "img": "https://wolf-labs.pages.dev/p/5418412d039b/enough/img/live-c-ovo.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "I need a few onions and a little salt.",
          "img": "https://wolf-labs.pages.dev/p/5418412d039b/enough/img/live-c-cebola.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Count it or measure it? Four quick ones.",
      "regra": "<b>how many</b> + things you count · <b>how much</b> + things you measure · <b>a few</b> + count · <b>a little</b> + measure · <b>any</b> in no and questions.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "There isn't any milk in the fridge.",
          "aceita": [],
          "d": "Dica: no negativo usamos <b>any</b>: there isn't <b>any</b> milk."
        },
        {
          "tipo": "escreve",
          "t": "Ask the question.",
          "mostra": "eggs (you count them)",
          "r": "How many eggs are there?",
          "aceita": [
            "How many eggs do we have?",
            "How many eggs do you have?",
            "How many eggs are in the fridge?"
          ],
          "d": "Dica: ovos se contam: <b>How many</b> eggs. Leite se mede: How much milk."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "I need a few rice.",
          "r": "I need a little rice.",
          "aceita": [
            "I need some rice.",
            "I need a lot of rice."
          ],
          "d": "Dica: arroz não se conta, então <b>a little</b> rice, não <i>a few</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "There is some eggs on the table.",
          "r": "There are some eggs on the table.",
          "aceita": [
            "There are a few eggs on the table."
          ],
          "d": "Dica: <b>eggs</b> é plural, então <b>there are</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/5418412d039b/enough/img/geladeira.jpg",
      "leg": "The fridge, late at night",
      "pede": "Look at the picture. Write 2 or 3 sentences about a fridge: what there is and what there isn't. Use <b>some, any, a few</b> or <b>a little</b>.",
      "ph": "There is some … but there isn't any …",
      "ex": "There is some cheese and a few eggs. There isn't any milk, so I need to go to the market."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What is in your fridge right now?",
          "ph": "There is some … and there aren't any …",
          "ex": "There is some rice and there are a few eggs. There isn't any milk."
        },
        {
          "q": "What do you need to buy for dinner?",
          "ph": "I need some … and a few …",
          "ex": "I need some rice, a few onions and a little oil."
        }
      ]
    }
  }
};
