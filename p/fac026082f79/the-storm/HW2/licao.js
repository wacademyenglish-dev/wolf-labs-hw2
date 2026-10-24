/* THE STORM · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: orders (imperativo). A1: dicas em português só nas notas (d). Versículos (World English Bible, ao pé da letra): Mark 4:39 (Listen e Out loud) e Mark 4:40 (Você). Nada da Bíblia é marcado como errado. */
window.HW2 = {
  "id": "the-storm",
  "titulo": "The Storm",
  "nivel": "A1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/fac026082f79/the-storm/img/live-tempestade.webp",
  "alvo": "orders (imperative): verb first (Sit down!), Don't + verb, Don't be afraid, Let's + verb",
  "abrir": "What do you say to a friend who is afraid?",
  "fecho": "An order starts with the <b>verb</b>: <i>Sit down!</i> For no, use <b>don't</b>: <i>Don't stand up!</i> With afraid, late or still, add <b>be</b>: <i>Don't be afraid! Be still!</i>",
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
      "sub": "Mia and Leo in a small boat. Mia quotes Mark 4:39. A new scene, about 30 seconds.",
      "img": "https://wolf-labs.pages.dev/p/fac026082f79/the-storm/img/live-conves.webp",
      "leg": "A small boat, a big wind",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, the wind is very strong! Hold the rope!"
        },
        {
          "quem": "mia",
          "t": "I'm holding it! Don't stand up, Leo!"
        },
        {
          "quem": "leo",
          "t": "OK, I'm sitting down. Look, there is water in the boat!"
        },
        {
          "quem": "mia",
          "t": "Take the water out. Use the bucket!"
        },
        {
          "quem": "leo",
          "t": "Here, I have the bucket. It is heavy."
        },
        {
          "quem": "mia",
          "t": "I'm afraid, Leo."
        },
        {
          "quem": "leo",
          "t": "Don't be afraid. We are together. Let's sing."
        },
        {
          "quem": "mia",
          "t": "OK, let's sing. Be strong, little boat!"
        },
        {
          "quem": "leo",
          "t": "Look, Mia. The wind is quiet now."
        },
        {
          "quem": "mia",
          "t": "Yes! The water is calm. It is like the old story: Jesus says to the sea, “Peace! Be still!”"
        },
        {
          "quem": "leo",
          "t": "Sit down and rest, Mia."
        }
      ],
      "perguntas": [
        {
          "q": "What can Leo not do in the boat?",
          "op": [
            "Stand up",
            "Sit down",
            "Sing"
          ],
          "a": 0,
          "por": "Don't stand up, Leo!"
        },
        {
          "q": "What do they use to take the water out?",
          "op": [
            "A bucket",
            "A hat",
            "A box"
          ],
          "a": 0,
          "por": "Take the water out. Use the bucket!"
        },
        {
          "q": "How is the water at the end?",
          "op": [
            "Calm",
            "Strong",
            "Dark"
          ],
          "a": 0,
          "por": "The water is calm."
        }
      ]
    },
    "out": {
      "sub": "Three sentences from the story. The third is from the Bible: Mark 4:39 (World English Bible). Hear it, then say it.",
      "frases": [
        {
          "t": "Hold the rope and don't stand up.",
          "img": "https://wolf-labs.pages.dev/p/fac026082f79/the-storm/img/live-conves.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "Don't be afraid. Let's sing together.",
          "img": "https://wolf-labs.pages.dev/p/fac026082f79/the-storm/img/live-almofada.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "The wind ceased and there was a great calm.",
          "img": "https://wolf-labs.pages.dev/p/fac026082f79/the-storm/img/live-calma.webp",
          "au": "audio/say3.mp3",
          "ref": "Mark 4:39"
        }
      ]
    },
    "focus": {
      "sub": "Orders and Don't. Four quick ones.",
      "regra": "<b>Sit</b> down! (verb first) · <b>Don't</b> + verb · <b>Don't be</b> afraid · <b>Let's</b> + verb.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "Don't stand up in the boat.",
          "aceita": [],
          "d": "Dica: <b>don't</b> + verbo (stand up)."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: make it an order.",
          "mostra": "You sit down!",
          "r": "Sit down!",
          "aceita": [
            "Sit down."
          ],
          "d": "Dica: a ordem começa com o verbo. Sem <b>you</b>."
        },
        {
          "tipo": "escreve",
          "t": "Say NO.",
          "mostra": "Stand up!",
          "r": "Don't stand up!",
          "aceita": [
            "Do not stand up!"
          ],
          "d": "Dica: <b>don't</b> + verbo."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is missing.",
          "mostra": "Don't afraid!",
          "r": "Don't be afraid!",
          "aceita": [
            "Do not be afraid!"
          ],
          "d": "Dica: afraid não é verbo: <b>don't be</b> afraid."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/fac026082f79/the-storm/img/live-calma.webp",
      "leg": "The lake, calm again",
      "pede": "Look at the picture: the lake is calm. Write 2 or 3 orders for a friend in a boat. Use <b>Don't</b> or <b>Let's</b>.",
      "ph": "Sit down! Don't …",
      "ex": "Sit down and be still. Don't stand up. Let's go home."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "In Mark 4:40 Jesus asks his friends, “Why are you so afraid?” A friend is afraid. What do you say?",
          "ph": "Don't … ! Let's …",
          "ex": "Don't worry! Let's take a walk."
        },
        {
          "q": "Give your family two orders for a rainy day.",
          "ph": "Let's … Don't …",
          "ex": "Let's make popcorn. Don't go out."
        }
      ]
    }
  }
};
