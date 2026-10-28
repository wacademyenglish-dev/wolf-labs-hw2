/* WHAT'S FOR LUNCH? · LIÇÃO DE CASA 2.0 (24/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: some / any, much / many, contáveis e incontáveis. Curso Au Pair. A2: dicas em português só nas notas (d). Só comida do dia a dia. */
window.HW2 = {
  "id": "whats-for-lunch",
  "titulo": "What's for Lunch?",
  "nivel": "A2",
  "minutos": 10,
  "capa": "../img/live-conversa.webp",
  "alvo": "some / any with food (some in positive sentences and offers, any in negatives and questions), countable and uncountable (two slices of bread), How much / How many; never there isn't some, never two breads, never how much eggs",
  "abrir": "What do you eat for lunch every day?",
  "fecho": "<b>some</b> = positive and offers: <i>There is some chicken. Would you like some salad?</i> <b>any</b> = negative and questions: <i>There isn't any rice. Is there any pasta?</i> <b>How many</b> + things you count (eggs); <b>How much</b> + things you don't count (milk).",
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
      "sub": "Mia and Leo plan the kids' lunch. A new scene, about 40 seconds.",
      "img": "../img/live-conversa.webp",
      "leg": "The open fridge",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "What's for lunch today, Leo?"
        },
        {
          "quem": "leo",
          "t": "Let's check the fridge. There is some chicken, and there are some tomatoes."
        },
        {
          "quem": "mia",
          "t": "Is there any rice?"
        },
        {
          "quem": "leo",
          "t": "No, there isn't any rice. But there is some pasta."
        },
        {
          "quem": "mia",
          "t": "How many tomatoes do we have?"
        },
        {
          "quem": "leo",
          "t": "We have four."
        },
        {
          "quem": "mia",
          "t": "Great. Would you like some salad with the pasta?"
        },
        {
          "quem": "leo",
          "t": "Yes, please. And some bread, too."
        },
        {
          "quem": "mia",
          "t": "Sorry, there isn't any bread today. We have some crackers."
        },
        {
          "quem": "leo",
          "t": "Perfect. The kids love crackers."
        }
      ],
      "perguntas": [
        {
          "q": "Is there any rice?",
          "op": [
            "No, there isn't",
            "Yes, a lot",
            "Yes, a little"
          ],
          "a": 0,
          "por": "No, there isn't any rice."
        },
        {
          "q": "What is there instead of rice?",
          "op": [
            "Some pasta",
            "Some bread",
            "Some potatoes"
          ],
          "a": 0,
          "por": "But there is some pasta."
        },
        {
          "q": "What is there instead of bread?",
          "op": [
            "Some crackers",
            "Some cake",
            "Some rice"
          ],
          "a": 0,
          "por": "We have some crackers."
        }
      ]
    },
    "out": {
      "sub": "Three sentences about lunch. Hear it, then say it.",
      "frases": [
        {
          "t": "There is some chicken in the fridge.",
          "img": "../img/live-conversa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "There isn't any rice today.",
          "img": "../img/live-conversa.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "How many tomatoes do we have?",
          "img": "../img/live-capa.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "some, any, much or many? Four quick ones.",
      "regra": "<b>some</b> = positive and offers · <b>any</b> = negative and questions · <b>How many</b> + eggs · <b>How much</b> + milk · two <b>slices of</b> bread.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "There isn't any milk in the fridge.",
          "aceita": [],
          "d": "Dica: negativa = <b>any</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "There isn't some bread today.",
          "r": "There isn't any bread today.",
          "aceita": [],
          "d": "Dica: na negativa, use <b>any</b>, não <b>some</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "How much eggs do we have?",
          "r": "How many eggs do we have?",
          "aceita": [],
          "d": "Dica: ovos a gente conta: <b>How many</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "I have two breads.",
          "r": "I have two slices of bread.",
          "aceita": [
            "I have two pieces of bread."
          ],
          "d": "Dica: <b>bread</b> não se conta. Use <b>slices of</b> bread."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "../img/live-capa.webp",
      "leg": "A plate with salad and a sandwich",
      "pede": "Look at the picture: a plate with salad and a sandwich. Write 2 or 3 sentences about a lunch for the kids. What is there, and what isn't there? Use <b>some</b> and <b>any</b>.",
      "ph": "There is some … There isn't any …",
      "ex": "There is some salad and a sandwich. There isn't any juice today."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What is in your fridge now? Is there any fruit?",
          "ph": "There is some … There isn't any …",
          "ex": "There is some milk and some eggs. There isn't any fruit."
        },
        {
          "q": "What would you make for a quick lunch for the kids?",
          "ph": "I would make …",
          "ex": "I would make some pasta and a small salad."
        }
      ]
    }
  }
};
