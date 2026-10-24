/* BY 2040 WE WILL HAVE · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: future perfect (will have + past participle: finished before a future moment) and future continuous (will be + -ing: in progress at that moment). B2: nenhum português. */
window.HW2 = {
  "id": "by-2040",
  "titulo": "By 2040 We Will Have",
  "nivel": "B2",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/e021083dc88f/by-2040/img/live-capsula.webp",
  "alvo": "future perfect (will have + past participle: finished before a future moment) and future continuous (will be + -ing: in progress at that moment); by (deadline) not until; by the time + present simple",
  "abrir": "Where will you be in 2040?",
  "fecho": "<b>By 2040 + will have + participle</b>: finished before then. <b>In 2040 / this time in 2040 + will be + -ing</b>: in progress at that moment. <b>By</b> = a deadline, not <i>until</i>. After <b>by the time</b>: the present simple, never <i>will</i>.",
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
      "sub": "Mia and Leo bury a time capsule. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/e021083dc88f/by-2040/img/live-capsula.webp",
      "leg": "A small time capsule in the dark soil",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, the capsule opens in 2040. What will you have done by then?"
        },
        {
          "quem": "leo",
          "t": "By 2040 I will have changed jobs twice, I think. And you?"
        },
        {
          "quem": "mia",
          "t": "By then I will have bought a small house. And at this time of day, I will be drinking coffee on my balcony."
        },
        {
          "quem": "leo",
          "t": "Nice. I will be teaching my daughter to drive, or she will be teaching me."
        },
        {
          "quem": "mia",
          "t": "Funny. Will the city have finished the new train line by then?"
        },
        {
          "quem": "leo",
          "t": "I hope so. By the time they open it, I will have waited ten years for it."
        },
        {
          "quem": "mia",
          "t": "Then put that in the note. By the time you read this, I will have kept my promise."
        },
        {
          "quem": "leo",
          "t": "Which promise?"
        },
        {
          "quem": "mia",
          "t": "To travel more. I will have visited Japan by 2040, or I will be on the plane."
        },
        {
          "quem": "leo",
          "t": "OK, I am writing: by 2040, I will have learned to play the piano."
        }
      ],
      "perguntas": [
        {
          "q": "What will Mia have done by 2040?",
          "op": [
            "Bought a small house",
            "Changed jobs twice",
            "Learned the piano"
          ],
          "a": 0,
          "por": "By then I will have bought a small house."
        },
        {
          "q": "What will Mia be doing at this time of day in 2040?",
          "op": [
            "Drinking coffee on her balcony",
            "Driving to work",
            "Teaching Leo"
          ],
          "a": 0,
          "por": "At this time of day, I will be drinking coffee on my balcony."
        },
        {
          "q": "What will Leo have learned by 2040?",
          "op": [
            "To play the piano",
            "Spanish",
            "To drive"
          ],
          "a": 0,
          "por": "By 2040, I will have learned to play the piano."
        }
      ]
    },
    "out": {
      "sub": "Three sentences about 2040. Hear it, then say it.",
      "frases": [
        {
          "t": "By 2040 the city will have finished the new train line.",
          "img": "https://wolf-labs.pages.dev/p/e021083dc88f/by-2040/img/live-trem.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "In 2040 people will be growing vegetables on the roofs.",
          "img": "https://wolf-labs.pages.dev/p/e021083dc88f/by-2040/img/live-telhado.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "By 2040 this highway will have become a park.",
          "img": "https://wolf-labs.pages.dev/p/e021083dc88f/by-2040/img/live-ponte.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "will have, will be, by, by the time. Four quick ones.",
      "regra": "<b>By 2040 will have</b> + participle · <b>In 2040 will be</b> + -ing · a deadline: <b>by</b> · <b>By the time</b> + present simple",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "By 2040 the city will have built a new tram line.",
          "aceita": [],
          "d": "Hint: <b>will have</b> + past participle, because it is finished before 2040."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "I will have finished the course until June.",
          "r": "I will have finished the course by June.",
          "aceita": [],
          "d": "Hint: a deadline is <b>by</b>. <i>Until</i> means the whole time up to then."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "By the time you will call, I will have left.",
          "r": "By the time you call, I'll have left.",
          "aceita": [
            "By the time you call, I will have left."
          ],
          "d": "Hint: after <b>by the time</b> use the present simple, not <i>will</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "In 2040 kids will be grow vegetables.",
          "r": "In 2040 kids will be growing vegetables.",
          "aceita": [],
          "d": "Hint: a scene in progress: <b>will be</b> + verb-ing."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/e021083dc88f/by-2040/img/live-estudio.webp",
      "leg": "An empty studio with one microphone",
      "pede": "Look at the picture: an empty studio with one microphone. Write 2 or 3 sentences, a radio message to 2040: one thing you will have done, and one thing you will be doing. Use <b>will have</b> + participle and <b>will be</b> + -ing.",
      "ph": "By 2040 I will have …",
      "ex": "By 2040 I will have changed jobs twice. At this time of day I will be drinking coffee on my balcony, and I will be teaching my own class."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What will you have done by 2040?",
          "ph": "By 2040 I will have …",
          "ex": "By 2040 I will have bought a small house near the sea."
        },
        {
          "q": "What will you be doing at this time of day in 2040?",
          "ph": "In 2040 I will be …",
          "ex": "At this time in 2040 I will be walking on a beach."
        }
      ]
    }
  }
};
