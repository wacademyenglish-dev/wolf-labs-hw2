/* THREE OUT OF THREE · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: voz passiva: was / were + particípio, by só se importa, happen sem passiva. B1: nenhum português. Sem cilindro/máscara (claras e médicas). */
window.HW2 = {
  "id": "three-out-of-three",
  "titulo": "Three Out of Three",
  "nivel": "B1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/0bc6cbfc37a7/three-out-of-three/img/live-corredor.webp",
  "alvo": "the passive voice: be + third form, the thing that suffers the action in front; by only when the doer matters; happen, arrive, come, die have no passive; never was stole, was happened",
  "abrir": "What was done for you this week by someone else?",
  "fecho": "<b>Passive</b> = <b>was / were</b> + third form, and the thing the action happens to goes first: <i>The stage was cleaned.</i> Add <b>by</b> only when the doer matters: <i>The play was written by a student.</i> <b>Happen, arrive, come, die</b> never go into the passive: <i>It happened</i>, never <i>it was happened</i>.",
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
      "sub": "Mia and Leo before opening night. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/0bc6cbfc37a7/three-out-of-three/img/live-microfone.webp",
      "leg": "A microphone on an empty stage",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, the theatre is ready. The stage was cleaned this morning."
        },
        {
          "quem": "mia",
          "t": "And the lights? They were broken last week."
        },
        {
          "quem": "leo",
          "t": "They were repaired on Monday by the electrician."
        },
        {
          "quem": "mia",
          "t": "Good. Was the play written by a student?"
        },
        {
          "quem": "leo",
          "t": "Yes. It was written by Ana, and it was translated into English by her teacher."
        },
        {
          "quem": "mia",
          "t": "What happened to the old microphone?"
        },
        {
          "quem": "leo",
          "t": "It was taken away yesterday. A new one was bought."
        },
        {
          "quem": "mia",
          "t": "And the tickets?"
        },
        {
          "quem": "leo",
          "t": "They were sold in two days. Every seat was taken!"
        },
        {
          "quem": "mia",
          "t": "Then let's start. The doors will be opened at seven."
        }
      ],
      "perguntas": [
        {
          "q": "When were the lights repaired?",
          "op": [
            "On Monday",
            "This morning",
            "Last month"
          ],
          "a": 0,
          "por": "They were repaired on Monday by the electrician."
        },
        {
          "q": "Who was the play written by?",
          "op": [
            "Ana, a student",
            "The teacher",
            "The electrician"
          ],
          "a": 0,
          "por": "It was written by Ana."
        },
        {
          "q": "What was bought for the stage?",
          "op": [
            "A new microphone",
            "New lights",
            "New chairs"
          ],
          "a": 0,
          "por": "A new one was bought."
        }
      ]
    },
    "out": {
      "sub": "Three sentences about the theatre. Hear it, then say it.",
      "frases": [
        {
          "t": "The stage was cleaned this morning.",
          "img": "https://wolf-labs.pages.dev/p/0bc6cbfc37a7/three-out-of-three/img/live-corredor.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "A new microphone was bought yesterday.",
          "img": "https://wolf-labs.pages.dev/p/0bc6cbfc37a7/three-out-of-three/img/live-microfone.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "The tickets were sold in two days.",
          "img": "https://wolf-labs.pages.dev/p/0bc6cbfc37a7/three-out-of-three/img/live-respiro.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "was or were, and the third form. Four quick ones.",
      "regra": "<b>was / were</b> + third form · the thing first · <b>by</b> + doer only if it matters · <b>happen</b> has no passive.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "The play was written by a student.",
          "aceita": [],
          "d": "Hint: thing first, then <b>was</b> + third form, then <b>by</b> + the doer."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "The window was broke last night.",
          "r": "The window was broken last night.",
          "aceita": [],
          "d": "Hint: <b>was</b> + the third form: broken, not broke."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "The tickets was sold in two days.",
          "r": "The tickets were sold in two days.",
          "aceita": [],
          "d": "Hint: the tickets (plural) takes <b>were</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "The meeting was happened on Monday.",
          "r": "The meeting happened on Monday.",
          "aceita": [],
          "d": "Hint: <b>happen</b> never goes into the passive."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/0bc6cbfc37a7/three-out-of-three/img/live-corredor.webp",
      "leg": "An empty corridor at night",
      "pede": "Look at the picture: an empty corridor in a building at night. Write 2 or 3 sentences about what was done here today. Use the passive: <b>was / were</b> + third form.",
      "ph": "The floor was … The lights were …",
      "ex": "The floor was cleaned this morning. The lights were turned off at ten. The doors were locked by the guard."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What was done for you this week by someone else?",
          "ph": "My … was … by …",
          "ex": "My lunch was made by my mother. My phone was repaired on Tuesday."
        },
        {
          "q": "Think of your school or your home. When was it built or painted?",
          "ph": "My … was built / painted …",
          "ex": "My school was built in 1990. It was painted last year."
        }
      ]
    }
  }
};
