/* THEY MIGHT HAVE LEFT BY BOAT · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   B2: nenhum português na lição. */
window.HW2 = {
  "id": "they-might-have-left-by-boat",
  "titulo": "They Might Have Left by Boat",
  "nivel": "B2",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/c8feb6da74ab/they-might-have-left-by-boat/img/live-capa.webp",
  "alvo": "guessing about the past: must have (almost sure), may / might / could have (possible), can't / couldn't have (impossible) + past participle; never must to have, might have went, mustn't have",
  "abrir": "Think of something that went missing at home. What do you think happened to it?",
  "fecho": "Guess about the past with <b>have + past participle</b>. <b>Must have gone</b>: almost sure. <b>Might / may / could have gone</b>: possible. <b>Can't have gone</b>: impossible. Never <i>must to have</i>, never <i>might have went</i>, and never <i>mustn't have</i> for impossible.",
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
      "sub": "Mia and Leo at the lake house. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/c8feb6da74ab/they-might-have-left-by-boat/img/live-barco.webp",
      "leg": "The boathouse",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, the rowboat is gone! Did you take it out this morning?"
        },
        {
          "quem": "leo",
          "t": "Not me. I slept until nine. Somebody must have taken it early."
        },
        {
          "quem": "mia",
          "t": "The boathouse door is locked, though. They can't have broken in."
        },
        {
          "quem": "leo",
          "t": "True. Maybe Grandpa has the key. He might have gone fishing before sunrise."
        },
        {
          "quem": "mia",
          "t": "Grandpa hates the cold, so he can't have gone at five. But his fishing rod is not in the cabin."
        },
        {
          "quem": "leo",
          "t": "Then he could have taken the rod and gone anyway. Or Tom might have borrowed the boat."
        },
        {
          "quem": "mia",
          "t": "Tom can't have borrowed it. He is in Chicago this week."
        },
        {
          "quem": "leo",
          "t": "Right. Look, there are two cups on the dock, and they are still warm."
        },
        {
          "quem": "mia",
          "t": "So somebody must have been here a minute ago."
        },
        {
          "quem": "leo",
          "t": "Then they can't have gone far. They may have rowed to the island."
        },
        {
          "quem": "mia",
          "t": "Perfect. Let's make coffee and wait for them."
        }
      ],
      "perguntas": [
        {
          "q": "Why can't someone have broken into the boathouse?",
          "op": [
            "The door is locked",
            "The rope is cut",
            "The boat is too big"
          ],
          "a": 0,
          "por": "The boathouse door is locked, though. They can't have broken in."
        },
        {
          "q": "Why can't Tom have borrowed the boat?",
          "op": [
            "He is in Chicago this week",
            "He hates the cold",
            "He has no key"
          ],
          "a": 0,
          "por": "Tom can't have borrowed it. He is in Chicago this week."
        },
        {
          "q": "What do the warm cups on the dock tell Mia?",
          "op": [
            "Somebody must have been there a minute ago",
            "Somebody might have left yesterday",
            "Nobody has been there"
          ],
          "a": 0,
          "por": "So somebody must have been here a minute ago."
        }
      ]
    },
    "out": {
      "sub": "Three sentences from the scene. Hear it, then say it.",
      "frases": [
        {
          "t": "Somebody must have taken the boat early.",
          "au": "audio/say1.mp3",
          "img": "https://wolf-labs.pages.dev/p/c8feb6da74ab/they-might-have-left-by-boat/img/live-barco.webp"
        },
        {
          "t": "Tom can't have borrowed it. He is in Chicago.",
          "au": "audio/say2.mp3",
          "img": "https://wolf-labs.pages.dev/p/c8feb6da74ab/they-might-have-left-by-boat/img/live-cabana.webp"
        },
        {
          "t": "They may have rowed to the island.",
          "au": "audio/say3.mp3",
          "img": "https://wolf-labs.pages.dev/p/c8feb6da74ab/they-might-have-left-by-boat/img/live-ilha.webp"
        }
      ]
    },
    "focus": {
      "sub": "Choose the form: must, might, can't + have + participle. Four quick ones.",
      "regra": "<b>must have</b> + participle = almost sure · <b>might / may / could have</b> = possible · <b>can't have</b> = impossible · the participle of go is <b>gone</b>, not <i>went</i>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "Grandpa might have gone fishing before sunrise.",
          "aceita": [],
          "d": "Hint: <b>might have</b> + <b>gone</b> (a possible guess)."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one modal is wrong.",
          "mostra": "Tom is in Chicago. He mustn't have borrowed the boat.",
          "r": "Tom can't have borrowed the boat.",
          "aceita": [
            "Tom couldn't have borrowed the boat."
          ],
          "d": "Hint: for an impossible guess use <b>can't have</b>, not <i>mustn't have</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one verb form is wrong.",
          "mostra": "She might have went to the island.",
          "r": "She might have gone to the island.",
          "aceita": [
            "She may have gone to the island.",
            "She could have gone to the island."
          ],
          "d": "Hint: after <b>have</b>, use the past participle: <b>gone</b>."
        },
        {
          "tipo": "escreve",
          "t": "Guess about the past. Use the clue.",
          "mostra": "The cups are still warm. (almost sure: somebody / be here)",
          "r": "Somebody must have been here.",
          "aceita": [
            "Someone must have been here."
          ],
          "d": "Hint: almost sure = <b>must have</b> + <b>been</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/c8feb6da74ab/they-might-have-left-by-boat/img/live-capa.webp",
      "leg": "The dock at dawn",
      "pede": "Look at the picture: a quiet dock at dawn. Something is missing from your home, your street or your work. Say what must have, might have or can't have happened.",
      "ph": "Somebody might have …",
      "ex": "My bike is gone. Somebody must have taken it. It can't have rolled away, because the lock is open."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "Think of something you lost. Where might it have gone?",
          "ph": "… might have …",
          "ex": "My umbrella is gone. I might have left it on the bus."
        },
        {
          "q": "Something odd happened at home this week. What must have caused it?",
          "ph": "… must have …",
          "ex": "The lights went off. A neighbor must have turned the power off."
        }
      ]
    }
  }
};
