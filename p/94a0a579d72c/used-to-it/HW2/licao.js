/* USED TO IT · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: used to / be used to / get used to + -ing. B1: nenhum portugues. So live-neve e live-mala (live-mudanca fica de fora: clara). */
window.HW2 = {
  "id": "used-to-it",
  "titulo": "Used to It",
  "nivel": "B1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/94a0a579d72c/used-to-it/img/live-neve.webp",
  "alvo": "used to + verb (a habit that ended); be used to + -ing or a noun (normal now); get used to + -ing (the road in between); that TO is a preposition, so -ing; never used to + -ing, be used to + plain verb",
  "abrir": "What did you have to get used to recently?",
  "fecho": "<b>used to</b> + verb: it is over (<i>I used to walk to work.</i>). <b>be used to</b> + -ing: it is normal now (<i>I'm used to walking.</i>). <b>get used to</b>: the road in between (<i>I'm getting used to it.</i>). That <b>to</b> is a preposition, so: <b>-ing</b>.",
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
      "sub": "Mia and Leo talk about a cold new city. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/94a0a579d72c/used-to-it/img/live-neve.webp",
      "leg": "A snowy street at night",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, you moved to a cold city last year. Is the winter still hard for you?"
        },
        {
          "quem": "mia",
          "t": "At first it was terrible. I wasn't used to the cold at all."
        },
        {
          "quem": "leo",
          "t": "Because you used to live near the beach, right?"
        },
        {
          "quem": "mia",
          "t": "Yes! I used to walk to the sea every morning. Now I'm getting used to wearing three coats."
        },
        {
          "quem": "leo",
          "t": "And the food? Is it different?"
        },
        {
          "quem": "mia",
          "t": "I'm still getting used to having dinner at six. Back home, we used to eat at nine."
        },
        {
          "quem": "leo",
          "t": "Do you miss it?"
        },
        {
          "quem": "mia",
          "t": "Sometimes. But I'm used to the snow now, and I'm used to working from home."
        },
        {
          "quem": "leo",
          "t": "In a year, you'll be used to everything."
        },
        {
          "quem": "mia",
          "t": "I hope so. I could never get used to the early dark, though."
        }
      ],
      "perguntas": [
        {
          "q": "What did Mia use to do every morning?",
          "op": [
            "Walk to the sea",
            "Wear three coats",
            "Work from home"
          ],
          "a": 0,
          "por": "I used to walk to the sea every morning."
        },
        {
          "q": "What is Mia still getting used to?",
          "op": [
            "Having dinner at six",
            "The snow",
            "Working from home"
          ],
          "a": 0,
          "por": "I'm still getting used to having dinner at six."
        },
        {
          "q": "What is Mia used to now?",
          "op": [
            "The snow",
            "The early dark",
            "Eating at nine"
          ],
          "a": 0,
          "por": "I'm used to the snow now."
        }
      ]
    },
    "out": {
      "sub": "Three sentences about change. Hear it, then say it.",
      "frases": [
        {
          "t": "I'm not used to the cold yet.",
          "img": "https://wolf-labs.pages.dev/p/94a0a579d72c/used-to-it/img/live-neve.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "I used to live near the sea.",
          "img": "https://wolf-labs.pages.dev/p/94a0a579d72c/used-to-it/img/live-mala.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "I'm getting used to waking up in the dark.",
          "img": "https://wolf-labs.pages.dev/p/94a0a579d72c/used-to-it/img/live-neve.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "used to, be used to, get used to. Four quick ones.",
      "regra": "<b>used to</b> + verb = over · <b>be used to</b> + -ing = normal now · <b>get used to</b> = on the way · that <i>to</i> takes <b>-ing</b>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "I'm getting used to working from home.",
          "aceita": [],
          "d": "Hint: <b>getting used to</b> + -ing: it is not easy yet."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "I'm used to wake up early now.",
          "r": "I'm used to waking up early now.",
          "aceita": [
            "I am used to waking up early now."
          ],
          "d": "Hint: that <i>to</i> is a preposition, so use <b>-ing</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "We used to living near the sea.",
          "r": "We used to live near the sea.",
          "aceita": [],
          "d": "Hint: <b>used to</b> for the past is followed by the plain verb."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is missing.",
          "mostra": "I'm slowly used to the cold.",
          "r": "I'm slowly getting used to the cold.",
          "aceita": [
            "I am slowly getting used to the cold."
          ],
          "d": "Hint: it is still changing, so you need <b>getting</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/94a0a579d72c/used-to-it/img/live-neve.webp",
      "leg": "A snowy street at night",
      "pede": "Look at the picture: a snowy street at night. Write 2 or 3 sentences about a change in your life. Use <b>used to</b>, <b>I'm used to</b> or <b>I'm getting used to</b>.",
      "ph": "I used to … Now I'm getting used to …",
      "ex": "I used to live near the sea. Now I'm getting used to the cold. I'm used to working from home."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What did you use to do that you don't do now?",
          "ph": "I used to …",
          "ex": "I used to play football every Sunday."
        },
        {
          "q": "What are you still getting used to?",
          "ph": "I'm still getting used to …",
          "ex": "I'm still getting used to my new schedule."
        }
      ]
    }
  }
};
