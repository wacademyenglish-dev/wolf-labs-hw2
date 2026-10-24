/* A PLACE WORTH FIGHTING FOR · LIÇÃO DE CASA 2.0 (24/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: have / has. Jogo WOLFSTATION: falas originais, sem violência. A1: dicas em português só nas notas (d). */
window.HW2 = {
  "id": "a-place-worth-fighting-for",
  "titulo": "A Place Worth Fighting For",
  "nivel": "A1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/e0e734d78214/a-place-worth-fighting-for/img/live-holo.webp",
  "alvo": "have / has: I, you, we, they have; he, she, it has; Do you have ...? Does she have ...? Who has ...?; short answers with do / does",
  "abrir": "What do you have in your bag today?",
  "fecho": "<b>I, you, we, they have</b> · <b>he, she, it has</b>. Questions: <i>Do you have a map? Does she have food?</i> Short answer: <i>Yes, she does. No, we don't.</i> Never <i>she have</i>, never <i>does he has</i>.",
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
      "sub": "Mia and Leo pack a small ship for a long trip. A new scene, about 35 seconds.",
      "img": "https://wolf-labs.pages.dev/p/e0e734d78214/a-place-worth-fighting-for/img/live-nave.webp",
      "leg": "A small ship at dusk",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, we have a small ship, and the trip is long."
        },
        {
          "quem": "leo",
          "t": "Who has the map?"
        },
        {
          "quem": "mia",
          "t": "The pilot has the map."
        },
        {
          "quem": "leo",
          "t": "Does she have food?"
        },
        {
          "quem": "mia",
          "t": "Yes, she does. She has bread and water."
        },
        {
          "quem": "leo",
          "t": "Do we have blankets?"
        },
        {
          "quem": "mia",
          "t": "No, we don't. We have only two."
        },
        {
          "quem": "leo",
          "t": "Do I have the lamp?"
        },
        {
          "quem": "mia",
          "t": "Yes, you do. It's in your bag."
        },
        {
          "quem": "leo",
          "t": "The ship is small. It has only four seats."
        },
        {
          "quem": "mia",
          "t": "Then we have a plan. The small things come first."
        }
      ],
      "perguntas": [
        {
          "q": "Who has the map?",
          "op": [
            "The pilot",
            "Leo",
            "Mia"
          ],
          "a": 0,
          "por": "The pilot has the map."
        },
        {
          "q": "How many blankets do they have?",
          "op": [
            "Only two",
            "Ten",
            "None"
          ],
          "a": 0,
          "por": "We have only two."
        },
        {
          "q": "How many seats does the ship have?",
          "op": [
            "Four",
            "Two",
            "Ten"
          ],
          "a": 0,
          "por": "It has only four seats."
        }
      ]
    },
    "out": {
      "sub": "Three sentences about the trip. Hear it, then say it.",
      "frases": [
        {
          "t": "She has the map and a lamp.",
          "img": "https://wolf-labs.pages.dev/p/e0e734d78214/a-place-worth-fighting-for/img/live-holo.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "Do you have water in your bag?",
          "img": "https://wolf-labs.pages.dev/p/e0e734d78214/a-place-worth-fighting-for/img/live-koboh.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "The ship has only four seats.",
          "img": "https://wolf-labs.pages.dev/p/e0e734d78214/a-place-worth-fighting-for/img/live-nave.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "have or has? Four quick ones.",
      "regra": "<b>I, you, we, they have</b> · <b>he, she, it has</b> · <b>Do you have ...? Does she have ...?</b> · <b>Yes, she does.</b>",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "Does the pilot have the map",
          "aceita": [],
          "d": "Dica: pergunta com <b>he / she</b>: <b>does</b> + sujeito + <b>have</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "She have a small ship.",
          "r": "She has a small ship.",
          "aceita": [],
          "d": "Dica: com <b>she</b>, use <b>has</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "Does he has a lamp?",
          "r": "Does he have a lamp?",
          "aceita": [],
          "d": "Dica: depois de <b>does</b>, o verbo fica <b>have</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: the short answer is wrong.",
          "mostra": "Yes, she has.",
          "r": "Yes, she does.",
          "aceita": [],
          "d": "Dica: resposta curta usa <b>do / does</b>: Yes, she does."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/e0e734d78214/a-place-worth-fighting-for/img/live-nave.webp",
      "leg": "A small ship at dusk",
      "pede": "Look at the picture: a small ship at dusk. Write 2 or 3 sentences about what the ship has and what you have in your bag. Use <b>have</b> or <b>has</b>.",
      "ph": "The ship has …",
      "ex": "The ship has a small door. I have a bag, and my friend has a lamp."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What do you have in your bag?",
          "ph": "I have …",
          "ex": "I have a phone, keys and a bottle of water."
        },
        {
          "q": "Who has a car in your family?",
          "ph": "My … has a car.",
          "ex": "My father has a car. My sister doesn't have a car."
        }
      ]
    }
  }
};
