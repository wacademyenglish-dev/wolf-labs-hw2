/* WAY OF THE SWORD · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: make / let + pessoa + verbo; were made to; allowed to. B1: nenhum português. Jogo: casa de treino, sem luta nem lâmina (live-duel fora). Só imagens live-* (lum < 50). */
window.HW2 = {
  "id": "way-of-the-sword",
  "titulo": "Way of the Sword",
  "nivel": "B1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/2526de77741f/way-of-the-sword/img/live-court.webp",
  "alvo": "make / let + person + plain verb (the master made us clean; he let me carry); in the passive, to comes back (we were made to leave); be allowed to for permission; never made me to, let me to",
  "abrir": "What did your parents make you do as a child? What did they let you do?",
  "fecho": "<b>make / let</b> + a person + the plain verb: <i>The master made us clean. He let me carry the box.</i> No <i>to</i>. In the passive, <b>to</b> comes back: <i>We were made to leave our phones.</i> Permission: <b>be allowed to</b>.",
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
      "sub": "Mia tells Leo about her first week at a quiet training house. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/2526de77741f/way-of-the-sword/img/live-gate.webp",
      "leg": "The gate of the training house",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, how was your first week at the training house?"
        },
        {
          "quem": "mia",
          "t": "Hard! The master made us clean the whole courtyard every morning."
        },
        {
          "quem": "leo",
          "t": "Did he let you rest?"
        },
        {
          "quem": "mia",
          "t": "Only for ten minutes. He doesn't let us talk during practice."
        },
        {
          "quem": "leo",
          "t": "That's strict. Were you allowed to use your phone?"
        },
        {
          "quem": "mia",
          "t": "No way. We were made to leave our phones at the gate."
        },
        {
          "quem": "leo",
          "t": "And what do you practice?"
        },
        {
          "quem": "mia",
          "t": "Balance and breathing. He makes us stand on one leg for five minutes. It makes me laugh, but I'm not allowed to."
        },
        {
          "quem": "leo",
          "t": "Do you like it?"
        },
        {
          "quem": "mia",
          "t": "Yes. Yesterday he let me carry the wooden box to the shrine. I was so proud."
        }
      ],
      "perguntas": [
        {
          "q": "What did the master make them do every morning?",
          "op": [
            "Clean the courtyard",
            "Run to the shrine",
            "Practice the shamisen"
          ],
          "a": 0,
          "por": "The master made us clean the whole courtyard every morning."
        },
        {
          "q": "Where were they made to leave their phones?",
          "op": [
            "At the gate",
            "In the courtyard",
            "At the shrine"
          ],
          "a": 0,
          "por": "We were made to leave our phones at the gate."
        },
        {
          "q": "What did the master let Mia do yesterday?",
          "op": [
            "Carry the box to the shrine",
            "Talk during practice",
            "Go home early"
          ],
          "a": 0,
          "por": "Yesterday he let me carry the wooden box to the shrine."
        }
      ]
    },
    "out": {
      "sub": "Three sentences about strict rules. Hear it, then say it.",
      "frases": [
        {
          "t": "The master made us clean the courtyard.",
          "img": "https://wolf-labs.pages.dev/p/2526de77741f/way-of-the-sword/img/live-court.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "We were made to leave our phones at the gate.",
          "img": "https://wolf-labs.pages.dev/p/2526de77741f/way-of-the-sword/img/live-gate.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "Yesterday he let me carry the box to the shrine.",
          "img": "https://wolf-labs.pages.dev/p/2526de77741f/way-of-the-sword/img/live-box.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Make, let or be made to? Four quick ones.",
      "regra": "<b>make / let</b> + person + plain verb · passive: <b>were made to</b> + verb · permission: <b>be allowed to</b> · never <i>made me to</i>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "The teacher let us leave early on Friday.",
          "aceita": [],
          "d": "Hint: <b>let</b> + a person + the plain verb. No <i>to</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "My boss made me to work late.",
          "r": "My boss made me work late.",
          "aceita": [],
          "d": "Hint: <b>made</b> + a person + the plain verb. No <i>to</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is missing.",
          "mostra": "They were made clean the room.",
          "r": "They were made to clean the room.",
          "aceita": [],
          "d": "Hint: in the passive, <b>to</b> comes back: <i>were made to</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "My mother doesn't let me to go out.",
          "r": "My mother doesn't let me go out.",
          "aceita": [],
          "d": "Hint: <b>let</b> + a person + the plain verb. No <i>to</i>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/2526de77741f/way-of-the-sword/img/live-rope.webp",
      "leg": "A heavy rope on a stone floor",
      "pede": "Look at the picture: a heavy rope on the stone floor of a quiet courtyard. Write 2 or 3 sentences about the rules at your school or job. Use <b>make / let</b> or <b>be made to / be allowed to</b>.",
      "ph": "My boss makes us … He doesn't let us …",
      "ex": "My boss makes us arrive at eight. He doesn't let us use our phones. We are allowed to leave at five."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What did your parents make you do when you were a child? What did they let you do?",
          "ph": "My parents made me … They let me …",
          "ex": "My parents made me clean my room. They let me watch cartoons on Sunday."
        },
        {
          "q": "What are you not allowed to do at work or at school?",
          "ph": "I'm not allowed to …",
          "ex": "I'm not allowed to wear shorts at work."
        }
      ]
    }
  }
};
