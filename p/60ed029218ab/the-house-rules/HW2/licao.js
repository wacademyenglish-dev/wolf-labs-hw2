/* THE HOUSE RULES · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: must / mustn't / don't have to / should. B1: nenhum português. */
window.HW2 = {
  "id": "the-house-rules",
  "titulo": "The House Rules",
  "nivel": "B1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/60ed029218ab/the-house-rules/img/live-conversa.webp",
  "alvo": "must / have to for obligation, mustn't for forbidden, don't have to for not necessary, should for advice; must takes no -s, no to, no do / does",
  "abrir": "What is one rule at your home that everybody must follow?",
  "fecho": "<b>must / have to</b> = obligation. <b>mustn't</b> = forbidden. <b>don't have to</b> = not necessary. <b>should</b> = advice. <i>You mustn't use my food. You don't have to cook.</i> Must takes no -s and no <i>to</i>.",
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
      "sub": "Leo shows Mia around a shared flat. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/60ed029218ab/the-house-rules/img/live-conversa.webp",
      "leg": "A dark hallway with a trash basket",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Welcome to the flat, Mia. Let me explain the rules. First, you must wash your dishes the same day."
        },
        {
          "quem": "mia",
          "t": "That's fair. Can I use the food in the fridge?"
        },
        {
          "quem": "leo",
          "t": "Only your own food. You mustn't touch other people's food. Ben learned that the hard way."
        },
        {
          "quem": "mia",
          "t": "OK. Do I have to cook for everybody?"
        },
        {
          "quem": "leo",
          "t": "No, you don't have to. But Sunday dinner together is nice."
        },
        {
          "quem": "mia",
          "t": "And the trash?"
        },
        {
          "quem": "leo",
          "t": "We have to take it out on Tuesdays and Fridays. The building is strict."
        },
        {
          "quem": "mia",
          "t": "What about guests?"
        },
        {
          "quem": "leo",
          "t": "They're welcome, but they mustn't stay more than three nights. And you should close the window when it rains. The floor is old."
        },
        {
          "quem": "mia",
          "t": "Got it. Do I have to be quiet at night?"
        },
        {
          "quem": "leo",
          "t": "Only after eleven."
        }
      ],
      "perguntas": [
        {
          "q": "What must Mia do with her dishes?",
          "op": [
            "Wash them the same day",
            "Leave them in the sink",
            "Hide them"
          ],
          "a": 0,
          "por": "You must wash your dishes the same day."
        },
        {
          "q": "Does Mia have to cook for everybody?",
          "op": [
            "No, but Sunday dinner is nice",
            "Yes, every day",
            "Yes, on Tuesdays"
          ],
          "a": 0,
          "por": "No, you don't have to. But Sunday dinner together is nice."
        },
        {
          "q": "What mustn't guests do?",
          "op": [
            "Stay more than three nights",
            "Come on Sundays",
            "Use the kitchen"
          ],
          "a": 0,
          "por": "They mustn't stay more than three nights."
        }
      ]
    },
    "out": {
      "sub": "Three house rules. Hear it, then say it.",
      "frases": [
        {
          "t": "You must wash your dishes the same day.",
          "img": "https://wolf-labs.pages.dev/p/60ed029218ab/the-house-rules/img/live-conversa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "You mustn't use other people's food.",
          "img": "https://wolf-labs.pages.dev/p/60ed029218ab/the-house-rules/img/live-conversa.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "We have to take out the trash on Tuesdays.",
          "img": "https://wolf-labs.pages.dev/p/60ed029218ab/the-house-rules/img/live-conversa.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "must, mustn't, don't have to and have to. Four quick ones.",
      "regra": "<b>must / have to</b> = obligation · <b>mustn't</b> = forbidden · <b>don't have to</b> = not necessary · <b>should</b> = advice",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "You don't have to cook for everybody.",
          "aceita": [],
          "d": "Hint: <b>don't have to</b> means it is not necessary, but you can."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "You must to wash your dishes today.",
          "r": "You must wash your dishes today.",
          "aceita": [
            "You have to wash your dishes today."
          ],
          "d": "Hint: <b>must</b> + verb, with no <i>to</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: it is forbidden.",
          "mostra": "You don't have to use my food.",
          "r": "You mustn't use my food.",
          "aceita": [
            "You must not use my food."
          ],
          "d": "Hint: forbidden is <b>mustn't</b>. <i>Don't have to</i> means not necessary."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: make the question correct.",
          "mostra": "Do you must be quiet after eleven?",
          "r": "Do you have to be quiet after eleven?",
          "aceita": [],
          "d": "Hint: <b>must</b> does not use do / does, but <b>have to</b> does."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/60ed029218ab/the-house-rules/img/live-conversa.webp",
      "leg": "A dark hallway with a trash basket by the door",
      "pede": "Look at the picture: a dark hallway with a trash basket by the door. Write 2 or 3 sentences about the rules in your home: one thing you must do, one thing that is forbidden, and one thing you don't have to do. Use <b>must</b>, <b>mustn't</b> and <b>don't have to</b>.",
      "ph": "In my home, you must …",
      "ex": "In my home, you must take off your shoes. You mustn't leave the trash by the door. You don't have to wash the cups on Sunday."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What is one rule at your home or work that you must follow?",
          "ph": "I must … / I have to …",
          "ex": "I have to arrive at the office before nine."
        },
        {
          "q": "What is something you don't have to do, but you do anyway?",
          "ph": "I don't have to …, but …",
          "ex": "I don't have to make my bed, but I do it every morning."
        }
      ]
    }
  }
};
