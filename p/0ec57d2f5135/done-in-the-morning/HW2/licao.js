/* DONE IN THE MORNING · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: passive voice: be + past participle. B1: nenhum português. Só as imagens live-* (escuras, lum < 50). Falas originais, sem a série. */
window.HW2 = {
  "id": "done-in-the-morning",
  "titulo": "Done in the Morning",
  "nivel": "B1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/0ec57d2f5135/done-in-the-morning/img/live-capa.webp",
  "alvo": "passive voice: be + past participle (is / are / was / were), irregular participles (written, taken, done), the question Was it done? with no did, by + who only when it matters",
  "abrir": "What is done at your work or school that nobody explains?",
  "fecho": "<b>be + past participle</b>: <i>the files are sorted, the memo was found, lunch will be served.</i> Irregular: <i>write → written, take → taken, do → done.</i> The question: <b>Was</b> the door closed? Never <i>Did the door was closed?</i>",
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
      "sub": "Mia and Leo talk about a strange morning at the office. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/0ec57d2f5135/done-in-the-morning/img/live-mesa.webp",
      "leg": "An office at night, green screens",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, you look surprised. What happened at the office?"
        },
        {
          "quem": "mia",
          "t": "A new rule was announced this morning. All the files are sorted by the night team now."
        },
        {
          "quem": "leo",
          "t": "Who was told about it?"
        },
        {
          "quem": "mia",
          "t": "Nobody was told. The memo was found on a desk at seven."
        },
        {
          "quem": "leo",
          "t": "And what was done with the old files?"
        },
        {
          "quem": "mia",
          "t": "They were taken to the basement last week. The door is closed every evening."
        },
        {
          "quem": "leo",
          "t": "Will they be used again?"
        },
        {
          "quem": "mia",
          "t": "I think they will be forgotten. Only the new numbers are checked now."
        },
        {
          "quem": "leo",
          "t": "That sounds strange. Is lunch still served at noon?"
        },
        {
          "quem": "mia",
          "t": "Yes, it is. Lunch is served at noon, and the lights are turned off at six."
        }
      ],
      "perguntas": [
        {
          "q": "When was the memo found?",
          "op": [
            "At seven, on a desk",
            "At noon, in the basement",
            "At six, by the night team"
          ],
          "a": 0,
          "por": "The memo was found on a desk at seven."
        },
        {
          "q": "Where were the old files taken?",
          "op": [
            "To the basement",
            "To the roof",
            "To the street"
          ],
          "a": 0,
          "por": "They were taken to the basement last week."
        },
        {
          "q": "Who sorts the files now?",
          "op": [
            "The night team",
            "Mia",
            "Leo"
          ],
          "a": 0,
          "por": "All the files are sorted by the night team now."
        }
      ]
    },
    "out": {
      "sub": "Three sentences about the office. Hear it, then say it.",
      "frases": [
        {
          "t": "The memo was found on a desk at seven.",
          "img": "https://wolf-labs.pages.dev/p/0ec57d2f5135/done-in-the-morning/img/live-capa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "The files are sorted every night.",
          "img": "https://wolf-labs.pages.dev/p/0ec57d2f5135/done-in-the-morning/img/live-estatua.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "Lunch is served at noon.",
          "img": "https://wolf-labs.pages.dev/p/0ec57d2f5135/done-in-the-morning/img/live-neve.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "be + past participle. Four quick ones.",
      "regra": "<b>be + past participle</b> · is / are · was / were · <b>will be</b> · the question: <b>Was</b> it done? (no did).",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "The old files were taken to the basement.",
          "aceita": [],
          "d": "Hint: <b>were taken</b> = be + past participle of take."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "The memo was wrote last night.",
          "r": "The memo was written last night.",
          "aceita": [],
          "d": "Hint: the participle of write is <b>written</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is missing.",
          "mostra": "Lunch served at noon.",
          "r": "Lunch is served at noon.",
          "aceita": [
            "Lunch will be served at noon.",
            "Lunch was served at noon."
          ],
          "d": "Hint: the passive always needs <b>be</b> before the participle."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: make the question correct.",
          "mostra": "Did the door was closed?",
          "r": "Was the door closed?",
          "aceita": [],
          "d": "Hint: a passive question starts with <b>was</b>. No <i>did</i>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/0ec57d2f5135/done-in-the-morning/img/live-mesa.webp",
      "leg": "An office at night, green screens",
      "pede": "Look at the picture: an office at night, with old computers. Write 2 or 3 sentences about things that are done there. Use the passive: <b>is / are / was / were + past participle</b>.",
      "ph": "The files are … Lunch was …",
      "ex": "The files are sorted every morning. The windows were cleaned last night. Lunch is served at noon."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What is done every day at your work or school that nobody thinks about?",
          "ph": "… is done every day.",
          "ex": "The floors are cleaned every night, and nobody sees it."
        },
        {
          "q": "What was done at your home last weekend?",
          "ph": "… was / were … last weekend.",
          "ex": "The kitchen was painted last weekend, and the old table was sold."
        }
      ]
    }
  }
};
