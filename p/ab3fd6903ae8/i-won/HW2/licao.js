/* I WON! · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: past simple: -ed, went, won. A1: dicas em português só nas notas (d). Só live-capa e live-prox (já escuras). */
window.HW2 = {
  "id": "i-won",
  "titulo": "I Won!",
  "nivel": "A1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/ab3fd6903ae8/i-won/img/live-capa.jpg",
  "alvo": "past simple: regular verbs + -ed (worked, wanted, watched), irregular verbs change (go-went, win-won); yesterday / last week need the past; never goed, never yesterday I work",
  "abrir": "What did you do last weekend?",
  "fecho": "<b>Yesterday</b> and <b>last week</b> need the past. Regular verbs: <b>+ -ed</b> (<i>I worked</i>). Some verbs change: <b>go → went</b>, <b>win → won</b>. Never <i>goed</i>.",
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
      "sub": "Mia and Leo after a race. A new scene, about 35 seconds.",
      "img": "https://wolf-labs.pages.dev/p/ab3fd6903ae8/i-won/img/live-prox.jpg",
      "leg": "A finish line at a castle gate",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, I won! I won the race!"
        },
        {
          "quem": "mia",
          "t": "Really? What did you do this week?"
        },
        {
          "quem": "leo",
          "t": "I worked all week, and I went to the park every day."
        },
        {
          "quem": "mia",
          "t": "Did you want to stop?"
        },
        {
          "quem": "leo",
          "t": "Yes, I wanted to stop on Tuesday. But I didn't stop."
        },
        {
          "quem": "mia",
          "t": "And today?"
        },
        {
          "quem": "leo",
          "t": "Today I went to the gate, and I won. It was great!"
        },
        {
          "quem": "mia",
          "t": "You were amazing. I watched you from the street."
        }
      ],
      "perguntas": [
        {
          "q": "What did Leo win?",
          "op": [
            "The race",
            "A coffee",
            "A bus"
          ],
          "a": 0,
          "por": "I won the race!"
        },
        {
          "q": "When did Leo want to stop?",
          "op": [
            "On Tuesday",
            "Today",
            "On Sunday"
          ],
          "a": 0,
          "por": "I wanted to stop on Tuesday."
        },
        {
          "q": "How was today?",
          "op": [
            "It was great",
            "It was boring",
            "It was cold"
          ],
          "a": 0,
          "por": "It was great!"
        }
      ]
    },
    "out": {
      "sub": "Three sentences in the past. Hear it, then say it.",
      "frases": [
        {
          "t": "Yesterday I worked at the shop.",
          "img": "https://wolf-labs.pages.dev/p/ab3fd6903ae8/i-won/img/live-capa.jpg",
          "au": "audio/say1.mp3"
        },
        {
          "t": "I went to the gate and I won.",
          "img": "https://wolf-labs.pages.dev/p/ab3fd6903ae8/i-won/img/live-prox.jpg",
          "au": "audio/say2.mp3"
        },
        {
          "t": "I wanted to stop, but I didn't stop.",
          "img": "https://wolf-labs.pages.dev/p/ab3fd6903ae8/i-won/img/live-capa.jpg",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Past or present? Four quick ones.",
      "regra": "<b>yesterday</b> = past · regular: <b>+ -ed</b> · <b>go → went</b> · <b>win → won</b> · never <i>goed</i>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "Last week I went to the park.",
          "aceita": [],
          "d": "Dica: <b>last week</b> pede o passado: <b>went</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "I goed to the park yesterday.",
          "r": "I went to the park yesterday.",
          "aceita": [
            "Yesterday I went to the park."
          ],
          "d": "Dica: <b>go</b> é irregular: <b>went</b>, nunca 'goed'."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "Yesterday I work at the shop.",
          "r": "Yesterday I worked at the shop.",
          "aceita": [
            "I worked at the shop yesterday."
          ],
          "d": "Dica: <b>yesterday</b> pede o passado: work + -ed."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "Leo win the race.",
          "r": "Leo won the race.",
          "aceita": [
            "Leo won the race"
          ],
          "d": "Dica: <b>win</b> muda: <b>won</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/ab3fd6903ae8/i-won/img/live-prox.jpg",
      "leg": "A red ribbon at the finish",
      "pede": "Look at the picture: a red ribbon at the finish line. Write 2 or 3 sentences about a day you did something big or won something. Use <b>went</b>, <b>worked</b>, <b>wanted</b> or <b>won</b>.",
      "ph": "Last week I went …",
      "ex": "Last week I went to the park. I worked a lot, and I won a small prize."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What did you do last weekend?",
          "ph": "I went to … I watched …",
          "ex": "I went to my friend's house, and we watched a film."
        },
        {
          "q": "Did you win something once?",
          "ph": "Yes, I won … / No, never.",
          "ex": "Yes, I won a chocolate at school."
        }
      ]
    }
  }
};
