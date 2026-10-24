/* THIS SPRING I'M GOING TO PLANT · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: going to para planos + palavras de tempo. Jogo: falas originais, fazenda, sem violencia. A2: dicas em portugues so nas notas (d). */
window.HW2 = {
  "id": "this-spring-im-going-to-plant",
  "titulo": "This Spring I'm Going to Plant",
  "nivel": "A2",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/f0f021752c0d/this-spring-im-going-to-plant/img/live-seeds.webp",
  "alvo": "going to for plans: am / is / are + going to + plain verb; time words without a preposition (tomorrow, next week, this spring) and on + day (on Saturday); never I going to, going plant, in Saturday",
  "abrir": "What are you going to do this weekend?",
  "fecho": "<b>am / is / are + going to</b> + plain verb: <i>I'm going to plant corn.</i> Question: <i>Are you going to start tomorrow?</i> Days take <b>on</b> (<i>on Saturday</i>). No preposition before <i>tomorrow</i>, <i>next week</i>, <i>this spring</i>.",
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
      "sub": "Mia and Leo read a note on the village board. A new scene, about 45 seconds.",
      "img": "https://wolf-labs.pages.dev/p/f0f021752c0d/this-spring-im-going-to-plant/img/live-board.webp",
      "leg": "The village board at night",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, look at the board. There's a note: the spring festival is on Saturday."
        },
        {
          "quem": "leo",
          "t": "Great! What are you going to do this spring?"
        },
        {
          "quem": "mia",
          "t": "I'm going to plant corn and tomatoes. My seeds are on the table."
        },
        {
          "quem": "leo",
          "t": "Are you going to start this week?"
        },
        {
          "quem": "mia",
          "t": "Yes, tomorrow morning. The sky is clear, so it isn't going to rain."
        },
        {
          "quem": "leo",
          "t": "I'm going to build a small shed next to the river."
        },
        {
          "quem": "mia",
          "t": "Are you going to build it alone?"
        },
        {
          "quem": "leo",
          "t": "No, my brother is going to help me on Sunday."
        },
        {
          "quem": "mia",
          "t": "Nice! Next month we're going to sell our first vegetables."
        }
      ],
      "perguntas": [
        {
          "q": "What is Mia going to plant?",
          "op": [
            "Corn and tomatoes",
            "Flowers",
            "Apples"
          ],
          "a": 0,
          "por": "I'm going to plant corn and tomatoes."
        },
        {
          "q": "When is Mia going to start?",
          "op": [
            "Tomorrow morning",
            "On Saturday",
            "Next month"
          ],
          "a": 0,
          "por": "Yes, tomorrow morning."
        },
        {
          "q": "Who is going to help Leo?",
          "op": [
            "His brother",
            "Mia",
            "A neighbor"
          ],
          "a": 0,
          "por": "My brother is going to help me on Sunday."
        }
      ]
    },
    "out": {
      "sub": "Three sentences about spring plans. Hear it, then say it.",
      "frases": [
        {
          "t": "I'm going to plant corn tomorrow morning.",
          "img": "https://wolf-labs.pages.dev/p/f0f021752c0d/this-spring-im-going-to-plant/img/live-seeds.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "It isn't going to rain this afternoon.",
          "img": "https://wolf-labs.pages.dev/p/f0f021752c0d/this-spring-im-going-to-plant/img/live-farm.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "We're going to walk by the river on Sunday.",
          "img": "https://wolf-labs.pages.dev/p/f0f021752c0d/this-spring-im-going-to-plant/img/live-river.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "going to and time words. Four quick ones.",
      "regra": "<b>am / is / are + going to</b> + plain verb · <b>on</b> + day · no preposition before <b>tomorrow / next / this</b>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "She is going to plant seeds this week.",
          "aceita": [],
          "d": "Dica: <b>is going to</b> + verbo limpo: <b>plant</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is missing.",
          "mostra": "I going to plant tomatoes tomorrow.",
          "r": "I'm going to plant tomatoes tomorrow.",
          "aceita": [
            "I am going to plant tomatoes tomorrow."
          ],
          "d": "Dica: <b>going to</b> precisa de <b>am / is / are</b>: <b>I'm going to</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is missing.",
          "mostra": "She is going plant corn on Monday.",
          "r": "She is going to plant corn on Monday.",
          "aceita": [
            "She's going to plant corn on Monday."
          ],
          "d": "Dica: <b>going to</b> + verbo. Não esqueça o <b>to</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "We are going to build a shed in Saturday.",
          "r": "We are going to build a shed on Saturday.",
          "aceita": [
            "We're going to build a shed on Saturday."
          ],
          "d": "Dica: dia da semana pede <b>on</b>: <b>on Saturday</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/f0f021752c0d/this-spring-im-going-to-plant/img/live-farm.webp",
      "leg": "A small farm at night",
      "pede": "Look at the picture: a small farm at night. Write 2 or 3 sentences about your plans for this spring. Use <b>going to</b> and a time word.",
      "ph": "This spring I'm going to …",
      "ex": "This spring I'm going to plant flowers. On Saturday I'm going to clean the yard. Next month I'm going to paint the fence."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What are you going to do this weekend?",
          "ph": "This weekend I'm going to …",
          "ex": "This weekend I'm going to visit my grandmother."
        },
        {
          "q": "Are you going to study English tomorrow? When?",
          "ph": "Yes, I'm going to … / No, I'm not …",
          "ex": "Yes, I'm going to study tomorrow evening."
        }
      ]
    }
  }
};
