/* IT IS BELIEVED · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: passive reporting (it is said that / is said to have). Filme: falas originais, no mundo da aula, sem violência. B2: nenhum português. Tema: arquivos e boatos. */
window.HW2 = {
  "id": "it-is-believed",
  "titulo": "It Is Believed",
  "nivel": "B2",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/7006c312e0fb/it-is-believed/img/live-capa.webp",
  "alvo": "passive reporting: It is said / believed / thought / reported that + clause; He is said / believed / thought to be (now); He is said / believed / thought to have + past participle (earlier); never It says that, never is said have (no to), never to be + past for a finished action",
  "abrir": "What is said about your city that may not be true?",
  "fecho": "<b>It is said that</b> + a full clause: <i>It is said that the guard left early.</i> <b>He is said to</b> + verb: <i>He is believed to be a spy.</i> For an earlier action: <b>to have</b> + past participle: <i>He is thought to have left at nine.</i> Never <i>It says that</i>, never <i>is said have</i>.",
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
      "sub": "Mia and Leo in a newsroom, after a file goes missing. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/7006c312e0fb/it-is-believed/img/live-arquivos.webp",
      "leg": "A room full of old files",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, did you hear about the missing file? It is said that it was taken from this very room."
        },
        {
          "quem": "mia",
          "t": "I heard. It is believed to contain names from the old reports."
        },
        {
          "quem": "leo",
          "t": "And who took it? Is anybody known to have been here last night?"
        },
        {
          "quem": "mia",
          "t": "The night guard is thought to have left early. He is said to have gone home at nine."
        },
        {
          "quem": "leo",
          "t": "So the room was empty. The file is believed to have disappeared after midnight."
        },
        {
          "quem": "mia",
          "t": "Some people say it was never a real file. It is rumored to be a joke."
        },
        {
          "quem": "leo",
          "t": "But the camera is reported to have stopped at ten. That is strange."
        },
        {
          "quem": "mia",
          "t": "Very strange. Let's ask the editor. She is known to remember everything."
        }
      ],
      "perguntas": [
        {
          "q": "What is the missing file believed to contain?",
          "op": [
            "Names from the old reports",
            "Photos of the sky",
            "A map of the city"
          ],
          "a": 0,
          "por": "It is believed to contain names from the old reports."
        },
        {
          "q": "What is the night guard thought to have done?",
          "op": [
            "Left early",
            "Taken the file",
            "Stayed all night"
          ],
          "a": 0,
          "por": "The night guard is thought to have left early."
        },
        {
          "q": "What is reported to have stopped at ten?",
          "op": [
            "The camera",
            "The lift",
            "The guard"
          ],
          "a": 0,
          "por": "The camera is reported to have stopped at ten."
        }
      ]
    },
    "out": {
      "sub": "Three sentences about things people say. Hear it, then say it.",
      "frases": [
        {
          "t": "It is said that the file was taken at night.",
          "img": "https://wolf-labs.pages.dev/p/7006c312e0fb/it-is-believed/img/live-arquivos.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "The signal is believed to come from far away.",
          "img": "https://wolf-labs.pages.dev/p/7006c312e0fb/it-is-believed/img/live-antena.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "Something is said to have fallen near this farm.",
          "img": "https://wolf-labs.pages.dev/p/7006c312e0fb/it-is-believed/img/live-roswell.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "It is said that, is thought to, to have. Four quick ones.",
      "regra": "<b>It is said that</b> + clause · <b>is said to</b> + verb · <b>is said to have</b> + past participle · never <i>It says that</i>, never <i>is said have</i>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "The file is believed to be in Kansas City.",
          "aceita": [],
          "d": "Hint: <b>is believed to</b> + the plain verb: <i>to be</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is missing.",
          "mostra": "He is said have left the studio.",
          "r": "He is said to have left the studio.",
          "aceita": [],
          "d": "Hint: after <b>is said</b>, you need <b>to</b>: <i>to have left</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "It says that the guard left early.",
          "r": "It is said that the guard left early.",
          "aceita": [
            "They say that the guard left early.",
            "It's said that the guard left early."
          ],
          "d": "Hint: to report what people say, use <b>It is said that</b>, not <i>It says that</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "She is thought to be left at nine.",
          "r": "She is thought to have left at nine.",
          "aceita": [],
          "d": "Hint: for something finished in the past, use <b>to have</b> + past participle."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/7006c312e0fb/it-is-believed/img/live-antena.webp",
      "leg": "A big antenna under the night sky",
      "pede": "Look at the picture: a big antenna under the night sky. Write 2 or 3 sentences about a rumor or a mystery you know. Use <b>It is said that</b>, <b>is believed to</b> or <b>is thought to have</b>.",
      "ph": "It is said that … / … is believed to …",
      "ex": "It is said that the old tower is haunted. The mayor is thought to have lived there as a boy. The signal is believed to come from the hill."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What is said about your town or your city that may not be true?",
          "ph": "It is said that …",
          "ex": "It is said that a lake is hidden under our main street."
        },
        {
          "q": "Who in your family is said to have done something unusual?",
          "ph": "My … is said to have …",
          "ex": "My grandfather is said to have walked to school for ten kilometers."
        }
      ]
    }
  }
};
