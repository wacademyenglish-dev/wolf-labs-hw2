/* THE FILES WERE DESTROYED · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: voz passiva: was/were + particípio, has been, by. B1: nenhum português. Jogo: mistério de escritório, sem violência (live-clinic fora). Só imagens live-* (lum < 50). */
window.HW2 = {
  "id": "the-files-were-destroyed",
  "titulo": "The Files Were Destroyed",
  "nivel": "B1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/f574efaf12b7/the-files-were-destroyed/img/live-files.webp",
  "alvo": "the passive voice: was / were + past participle (the files were moved) · has / have been + participle (the tape has been erased) · by + who, only when it matters; irregular participles (found, taken, hidden, written)",
  "abrir": "What was done in your home yesterday?",
  "fecho": "<b>was / were</b> + past participle: <i>The files were moved.</i> <b>has / have been</b> + participle: <i>The tape has been erased.</i> <b>By</b> + who did it, only when it matters: <i>The key was found by the manager.</i> Watch the irregular ones: <i>found, taken, hidden, written</i>.",
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
      "sub": "Mia and Leo in an office archive after a long night. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/f574efaf12b7/the-files-were-destroyed/img/live-safehouse.webp",
      "leg": "A desk in a small office",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, the archive room is a mess. The files were moved last night."
        },
        {
          "quem": "mia",
          "t": "Some were destroyed, but not all. And the tape has been erased."
        },
        {
          "quem": "leo",
          "t": "Who was seen here last night?"
        },
        {
          "quem": "mia",
          "t": "The cleaner was seen at ten. The lights were turned off at eleven."
        },
        {
          "quem": "leo",
          "t": "Was the camera checked?"
        },
        {
          "quem": "mia",
          "t": "Yes, it was checked this morning. It has been broken for a week, so nothing was recorded."
        },
        {
          "quem": "leo",
          "t": "And the key? Was it taken?"
        },
        {
          "quem": "mia",
          "t": "No. It was found under the desk by the manager."
        },
        {
          "quem": "leo",
          "t": "So the missing papers were hidden, not destroyed?"
        },
        {
          "quem": "mia",
          "t": "Good eye. They were hidden behind the old shelf. Mystery solved."
        }
      ],
      "perguntas": [
        {
          "q": "Who was seen at ten?",
          "op": [
            "The cleaner",
            "The manager",
            "A stranger"
          ],
          "a": 0,
          "por": "The cleaner was seen at ten."
        },
        {
          "q": "Why was nothing recorded?",
          "op": [
            "The camera has been broken for a week",
            "The tape was taken",
            "The lights were off"
          ],
          "a": 0,
          "por": "It has been broken for a week, so nothing was recorded."
        },
        {
          "q": "Where were the missing papers hidden?",
          "op": [
            "Behind the old shelf",
            "Under the desk",
            "In the cleaner's bag"
          ],
          "a": 0,
          "por": "They were hidden behind the old shelf."
        }
      ]
    },
    "out": {
      "sub": "Three sentences about a mystery. Hear it, then say it.",
      "frases": [
        {
          "t": "The files were moved to another room last night.",
          "img": "https://wolf-labs.pages.dev/p/f574efaf12b7/the-files-were-destroyed/img/live-files.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "The key was found under the desk.",
          "img": "https://wolf-labs.pages.dev/p/f574efaf12b7/the-files-were-destroyed/img/live-safehouse.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "The tape has been erased by someone.",
          "img": "https://wolf-labs.pages.dev/p/f574efaf12b7/the-files-were-destroyed/img/live-evidence.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Was, were or has been? Four quick ones.",
      "regra": "<b>was / were</b> + participle · <b>has / have been</b> + participle · <b>by</b> + who · irregular: found, taken, hidden, written.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "The door was locked by the manager.",
          "aceita": [],
          "d": "Hint: <b>was</b> + participle, then <b>by</b> + who did it."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "The files was moved yesterday.",
          "r": "The files were moved yesterday.",
          "aceita": [],
          "d": "Hint: <i>files</i> is plural, so <b>were</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "The key was find under the desk.",
          "r": "The key was found under the desk.",
          "aceita": [],
          "d": "Hint: the passive needs the participle: <b>found</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "The report was written from the manager.",
          "r": "The report was written by the manager.",
          "aceita": [],
          "d": "Hint: who did it? <b>By</b>, not <i>from</i>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/f574efaf12b7/the-files-were-destroyed/img/live-evidence.webp",
      "leg": "A notebook, a key and sealed bags",
      "pede": "Look at the picture: a notebook, a key and some sealed bags on a table. Write 2 or 3 sentences about what was done in a room last night. Use <b>was / were</b> + participle.",
      "ph": "The kitchen was … The dishes were …",
      "ex": "The kitchen was cleaned at ten. The dishes were washed, and the lights were turned off. The door was locked."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What was done in your home yesterday?",
          "ph": "The dishes were … The house was …",
          "ex": "The dishes were washed and the floor was cleaned."
        },
        {
          "q": "What has been changed in your city or street recently?",
          "ph": "A new … has been …",
          "ex": "A new bridge has been built, and the old market has been closed."
        }
      ]
    }
  }
};
