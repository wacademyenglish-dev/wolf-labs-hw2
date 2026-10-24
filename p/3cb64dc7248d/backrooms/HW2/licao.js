/* BACKROOMS · LIÇÃO DE CASA 2.0 (24/10/2026)
   Motor: hw2.js. JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: present perfect, since / for, never / ever / yet. B1: nenhum português. Só imagens live-* escuras. Falas originais, sem violência. */
window.HW2 = {
  "id": "backrooms",
  "titulo": "Backrooms",
  "nivel": "B1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/3cb64dc7248d/backrooms/img/live-capa.webp",
  "alvo": "present perfect: have / has + past participle (seen, gone, been); since + a starting point, for + a length of time; never, ever, yet; not with a finished time (yesterday, last year)",
  "abrir": "Have you ever been alone in a big, empty building?",
  "fecho": "<b>have / has + past participle</b> links the past to now. <b>Since</b> + a starting point (<i>since Monday</i>), <b>for</b> + a length (<i>for three years</i>). <b>Never</b> and <b>ever</b>: <i>Have you ever seen it?</i> <b>Yet</b> in questions and negatives. With <i>yesterday</i> or <i>last year</i>, use the simple past.",
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
      "sub": "Mia and Leo talk about a strange door. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/3cb64dc7248d/backrooms/img/live-loja.webp",
      "leg": "A dark store, late at night",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, you won't believe it. I've found a strange door at the back of the store."
        },
        {
          "quem": "mia",
          "t": "A door? You've worked there for three years. Have you never seen it before?"
        },
        {
          "quem": "leo",
          "t": "Never. I think it has been behind a big wardrobe since the summer."
        },
        {
          "quem": "mia",
          "t": "Have you opened it yet?"
        },
        {
          "quem": "leo",
          "t": "Not yet. Nobody has opened it for a long time. The handle is covered in dust."
        },
        {
          "quem": "mia",
          "t": "Has anyone in the store ever mentioned it?"
        },
        {
          "quem": "leo",
          "t": "No one. I've asked my boss twice, and he has never heard of it."
        },
        {
          "quem": "mia",
          "t": "That's odd. How long have you known about it?"
        },
        {
          "quem": "leo",
          "t": "Only since Monday. I've thought about nothing else for three days."
        },
        {
          "quem": "mia",
          "t": "Take a photo and send it to me. I haven't seen a mystery like this in years."
        }
      ],
      "perguntas": [
        {
          "q": "Where is the strange door?",
          "op": [
            "Behind a big wardrobe",
            "Next to the cash register",
            "In the parking lot"
          ],
          "a": 0,
          "por": "I think it has been behind a big wardrobe since the summer."
        },
        {
          "q": "Has Leo opened the door?",
          "op": [
            "Not yet",
            "Yes, twice",
            "Yes, on Monday"
          ],
          "a": 0,
          "por": "Not yet. Nobody has opened it for a long time."
        },
        {
          "q": "What has Leo's boss said about the door?",
          "op": [
            "He has never heard of it",
            "He has opened it before",
            "He has sold it"
          ],
          "a": 0,
          "por": "I've asked my boss twice, and he has never heard of it."
        }
      ]
    },
    "out": {
      "sub": "Three sentences about places and time. Hear it, then say it.",
      "frases": [
        {
          "t": "Nobody has opened this door for years.",
          "img": "https://wolf-labs.pages.dev/p/3cb64dc7248d/backrooms/img/live-corredor.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "Have you ever seen a room like this?",
          "img": "https://wolf-labs.pages.dev/p/3cb64dc7248d/backrooms/img/live-foto.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "I've been in the store since eight o'clock.",
          "img": "https://wolf-labs.pages.dev/p/3cb64dc7248d/backrooms/img/live-loja.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Present perfect, since and for. Four quick ones.",
      "regra": "<b>have / has + participle</b> · <b>since</b> + a point (since Monday) · <b>for</b> + a length (for two years) · <b>never / ever / yet</b> · past time word (yesterday) = simple past.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "Nobody has answered the door yet.",
          "aceita": [],
          "d": "Hint: <b>has</b> + answered, and <b>yet</b> goes at the end."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "I have seen that door yesterday.",
          "r": "I saw that door yesterday.",
          "aceita": [
            "I did see that door yesterday."
          ],
          "d": "Hint: <b>yesterday</b> is a finished time, so use the simple past."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "She has went to the store already.",
          "r": "She has gone to the store already.",
          "aceita": [
            "She's gone to the store already."
          ],
          "d": "Hint: <b>go, went, gone</b>. After <b>has</b>, use the participle."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "He has worked here since three years.",
          "r": "He has worked here for three years.",
          "aceita": [
            "He's worked here for three years."
          ],
          "d": "Hint: three years is a length of time, so <b>for</b>. <i>Since</i> needs a starting point."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/3cb64dc7248d/backrooms/img/live-foto.webp",
      "leg": "An empty room with a dark floor",
      "pede": "Look at the picture: an empty room. Write 2 or 3 sentences about a place you know. Use <b>have been</b>, <b>since</b>, <b>for</b>, <b>never</b> or <b>yet</b>.",
      "ph": "I have never been … I've lived here for …",
      "ex": "I have never been in an empty building at night. I've lived on this street for six years. I haven't visited the old museum yet."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "Have you ever found something strange or surprising? What was it?",
          "ph": "I have never … / Once I found …",
          "ex": "I've never found anything strange, but once I found an old key in my garden."
        },
        {
          "q": "How long have you lived in your home? What has changed since you moved in?",
          "ph": "I've lived here for … Since then …",
          "ex": "I've lived here for four years. Since then, the street has become much quieter."
        }
      ]
    }
  }
};
