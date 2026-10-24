/* HAVE YOU GOT A MINUTE? · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: have got, Have you got ...?, short answers. A1: dicas em português só nas notas (d). casaco claro ficou de fora. */
window.HW2 = {
  "id": "have-you-got-a-minute",
  "titulo": "Have You Got a Minute?",
  "nivel": "A1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/5a9e13c7b204/have-you-got-a-minute/img/live-bolsa.webp",
  "alvo": "have got: I've got / she's got / I haven't got; questions Have you got ...? without do; short answers Yes, I have / No, I haven't / Yes, she has",
  "abrir": "What have you got in your bag today?",
  "fecho": "<b>I've got</b>, <b>she's got</b>, <b>I haven't got</b>. The question: <b>Have you got</b> a pen? (no <i>do</i>). Short answer: <b>Yes, I have.</b> <b>No, I haven't.</b> <b>Yes, she has.</b>",
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
      "sub": "Mia checks Leo's bag before his trip. A new scene, about 40 seconds.",
      "img": "https://wolf-labs.pages.dev/p/5a9e13c7b204/have-you-got-a-minute/img/live-bolsa.webp",
      "leg": "Things from a bag on a table",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, I travel tomorrow. Have you got a minute?"
        },
        {
          "quem": "mia",
          "t": "Yes, I have. What do you need?"
        },
        {
          "quem": "leo",
          "t": "Check my bag, please."
        },
        {
          "quem": "mia",
          "t": "Have you got your passport?"
        },
        {
          "quem": "leo",
          "t": "Yes, I have. I've got it here."
        },
        {
          "quem": "mia",
          "t": "Have you got your phone charger?"
        },
        {
          "quem": "leo",
          "t": "No, I haven't. It is in the kitchen."
        },
        {
          "quem": "mia",
          "t": "Go and get it! Has your sister got a key to your flat?"
        },
        {
          "quem": "leo",
          "t": "Yes, she has. She's got two keys."
        },
        {
          "quem": "mia",
          "t": "Good. You've got everything now. Have a nice trip!"
        }
      ],
      "perguntas": [
        {
          "q": "Has Leo got his passport?",
          "op": [
            "Yes, he has",
            "No, he hasn't",
            "Mia has it"
          ],
          "a": 0,
          "por": "Yes, I have. I've got it here."
        },
        {
          "q": "What hasn't Leo got in his bag?",
          "op": [
            "His phone charger",
            "His passport",
            "His keys"
          ],
          "a": 0,
          "por": "No, I haven't. It is in the kitchen."
        },
        {
          "q": "How many keys has his sister got?",
          "op": [
            "Two",
            "One",
            "Three"
          ],
          "a": 0,
          "por": "Yes, she has. She's got two keys."
        }
      ]
    },
    "out": {
      "sub": "Three sentences with have got. Hear it, then say it.",
      "frases": [
        {
          "t": "I've got my keys and my phone in my bag.",
          "img": "https://wolf-labs.pages.dev/p/5a9e13c7b204/have-you-got-a-minute/img/live-bolsa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "Have you got a minute? Yes, I have.",
          "img": "https://wolf-labs.pages.dev/p/5a9e13c7b204/have-you-got-a-minute/img/live-cozinha.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "She hasn't got a key to my flat.",
          "img": "https://wolf-labs.pages.dev/p/5a9e13c7b204/have-you-got-a-minute/img/live-bolsa.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "have got, short answers. Four quick ones.",
      "regra": "<b>I've got</b> · <b>she's got</b> · <b>Have you got ...?</b> (no do) · <b>Yes, I have.</b> · <b>No, I haven't.</b>",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "Have you got a pen in your bag?",
          "aceita": [],
          "d": "Dica: a pergunta começa com <b>Have</b>, depois you got."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "Do you have got a pen?",
          "r": "Have you got a pen?",
          "aceita": [
            "Do you have a pen?"
          ],
          "d": "Dica: com <b>got</b> a pergunta começa com <b>Have</b>, sem <i>do</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "Have you got a pen? Yes, I got.",
          "r": "Have you got a pen? Yes, I have.",
          "aceita": [
            "Have you got a pen? Yes, I have got."
          ],
          "d": "Dica: a resposta curta é <b>Yes, I have.</b>, sem 'got' sozinho."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "She have got two brothers.",
          "r": "She has got two brothers.",
          "aceita": [
            "She's got two brothers."
          ],
          "d": "Dica: com she, he e it, <b>has got</b> (ou <b>'s got</b>)."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/5a9e13c7b204/have-you-got-a-minute/img/live-bolsa.webp",
      "leg": "Things from a bag on a table",
      "pede": "Look at the picture: things from a bag. Write 2 or 3 sentences about what you have got in your bag. Use <b>I've got</b> and <b>I haven't got</b>.",
      "ph": "I've got … in my bag.",
      "ex": "I've got my keys and my phone. I've got a book. I haven't got an umbrella."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What have you got in your bag today?",
          "ph": "I've got …",
          "ex": "I've got my phone, my keys and a book."
        },
        {
          "q": "Have you got any brothers or sisters?",
          "ph": "Yes, I have. I've got … / No, I haven't.",
          "ex": "Yes, I have. I've got a sister."
        }
      ]
    }
  }
};
