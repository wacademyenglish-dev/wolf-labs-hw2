/* FIFTEEN MINUTES · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: past perfect: had + particípio. B1: nenhum português. Sem botão (choque) e copo. */
window.HW2 = {
  "id": "fifteen-minutes",
  "titulo": "Fifteen Minutes",
  "nivel": "B1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/cda192a457e6/fifteen-minutes/img/live-portao.webp",
  "alvo": "past perfect: had + third form, the past of the past, only with two past moments; When I arrived, the train had left (it was already gone); never had went, had began, or had with only one moment",
  "abrir": "Think of a time you arrived late. What had already happened?",
  "fecho": "<b>Had</b> + third form = the past of the past: the thing that was already over. <i>When I arrived, the train had left.</i> You need <b>two</b> past moments. With only one, use the past simple: <i>Yesterday I missed my bus</i>, never <i>had missed</i>. Third form: <i>gone</i>, <i>begun</i>, never <i>had went</i>.",
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
      "sub": "Mia and Leo, one evening at the station. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/cda192a457e6/fifteen-minutes/img/live-plataforma.webp",
      "leg": "A dark platform",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, where are you? The train just left."
        },
        {
          "quem": "mia",
          "t": "I know. When I arrived at the platform, it had already left."
        },
        {
          "quem": "leo",
          "t": "Why were you late?"
        },
        {
          "quem": "mia",
          "t": "I had left the house at eight, but I had forgotten my bag, so I went back."
        },
        {
          "quem": "leo",
          "t": "I told you to leave early."
        },
        {
          "quem": "mia",
          "t": "And you? Did you get your ticket?"
        },
        {
          "quem": "leo",
          "t": "No. When I got to the station, the ticket office had closed."
        },
        {
          "quem": "mia",
          "t": "So we were both late. The next train is in fifteen minutes."
        },
        {
          "quem": "leo",
          "t": "Fifteen minutes in an empty waiting room. I had never done that before."
        },
        {
          "quem": "mia",
          "t": "Let's put our phones away and talk. Deal?"
        },
        {
          "quem": "leo",
          "t": "Deal."
        }
      ],
      "perguntas": [
        {
          "q": "What had happened when Mia arrived?",
          "op": [
            "The train had already left",
            "The ticket office had opened",
            "The rain had stopped"
          ],
          "a": 0,
          "por": "When I arrived at the platform, it had already left."
        },
        {
          "q": "Why did Mia go back home?",
          "op": [
            "She had forgotten her bag",
            "She had lost her phone",
            "She had missed Leo"
          ],
          "a": 0,
          "por": "I had forgotten my bag, so I went back."
        },
        {
          "q": "What had closed when Leo got to the station?",
          "op": [
            "The ticket office",
            "The waiting room",
            "The gate"
          ],
          "a": 0,
          "por": "The ticket office had closed."
        }
      ]
    },
    "out": {
      "sub": "Three sentences about a trip that went wrong. Hear it, then say it.",
      "frases": [
        {
          "t": "When we arrived, the gate had already closed.",
          "img": "https://wolf-labs.pages.dev/p/cda192a457e6/fifteen-minutes/img/live-portao.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "I had never missed a train before that day.",
          "img": "https://wolf-labs.pages.dev/p/cda192a457e6/fifteen-minutes/img/live-plataforma.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "She had forgotten her suitcase, so she went back.",
          "img": "https://wolf-labs.pages.dev/p/cda192a457e6/fifteen-minutes/img/live-mala.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "had + third form. Four quick ones.",
      "regra": "<b>had</b> + third form · two past moments · the first one is already over · one moment only: past simple.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "When we arrived the train had already left.",
          "aceita": [],
          "d": "Hint: arrive (the moment you tell) and <b>had left</b> (already over)."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "I had went to that station before.",
          "r": "I had gone to that station before.",
          "aceita": [],
          "d": "Hint: after <b>had</b>, use the third form: gone."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "When we arrived, the film had already began.",
          "r": "When we arrived, the film had already begun.",
          "aceita": [],
          "d": "Hint: the third form of <i>begin</i> is begun."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "Yesterday I had missed my bus.",
          "r": "Yesterday I missed my bus.",
          "aceita": [],
          "d": "Hint: only one past moment, so use the past simple."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/cda192a457e6/fifteen-minutes/img/live-sala.webp",
      "leg": "An empty room with a table",
      "pede": "Look at the picture: an empty room with a table. Write 2 or 3 sentences about a time you waited in a room like this. What had happened before? Use <b>had</b> + third form.",
      "ph": "Before I waited, I had …",
      "ex": "I waited in a room like this before an interview. I had arrived an hour early, because I had never been there before."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "Think of a time you arrived late. What had already happened?",
          "ph": "When I arrived, … had already …",
          "ex": "I arrived late to a party. The cake had already been eaten."
        },
        {
          "q": "Before this year, what had you never done?",
          "ph": "Before this year, I had never …",
          "ex": "Before this year I had never lived alone."
        }
      ]
    }
  }
};
