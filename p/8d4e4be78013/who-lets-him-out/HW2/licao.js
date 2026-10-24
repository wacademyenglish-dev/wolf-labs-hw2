/* WHO LETS HIM OUT? · LIÇÃO DE CASA 2.0 (24/10/2026)
   Motor: hw2.js. JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: make, let, be made to, be allowed to. B1: nenhum português. Só imagens live-* escuras. Falas originais, sem violência. */
window.HW2 = {
  "id": "who-lets-him-out",
  "titulo": "Who Lets Him Out?",
  "nivel": "B1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/8d4e4be78013/who-lets-him-out/img/live-capa.webp",
  "alvo": "make, let, be made to, be allowed to: make / let + person + plain verb; be made to / be allowed to + verb; never make me to, let me to, I don't allowed",
  "abrir": "What do your parents or your boss not let you do?",
  "fecho": "<b>make</b> = force, <b>let</b> = allow, both + person + <b>plain verb</b>: <i>He made us clean. He let us leave.</i> In the passive, <b>to</b> comes back: <i>I was made to clean. We are allowed to leave.</i> Never <i>made me to</i>, <i>let me to</i> or <i>I don't allowed</i>.",
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
      "sub": "Mia and Leo talk about the rules at their school. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/8d4e4be78013/who-lets-him-out/img/live-caixa.webp",
      "leg": "An old box with paper seals",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, the teacher made us clean the whole library yesterday."
        },
        {
          "quem": "mia",
          "t": "Really? Did he let you go home early afterwards?"
        },
        {
          "quem": "leo",
          "t": "No. He made us stay until seven. But he let us borrow one book each."
        },
        {
          "quem": "mia",
          "t": "Lucky! I'm not allowed to borrow books. They make me read in the room."
        },
        {
          "quem": "leo",
          "t": "Why? Who makes you do that?"
        },
        {
          "quem": "mia",
          "t": "The headmaster. I was made to promise something: nobody is allowed to touch the old box on the shelf."
        },
        {
          "quem": "leo",
          "t": "The box with the paper seals? Nobody lets anyone open it."
        },
        {
          "quem": "mia",
          "t": "Right. Nobody is allowed near it. It makes me curious, though."
        },
        {
          "quem": "leo",
          "t": "Don't even think about it. They'd make us clean the library again!"
        }
      ],
      "perguntas": [
        {
          "q": "What did the teacher make the students do?",
          "op": [
            "Clean the library",
            "Read a book aloud",
            "Draw a map"
          ],
          "a": 0,
          "por": "He made us clean the whole library."
        },
        {
          "q": "What did the teacher let them do?",
          "op": [
            "Borrow one book each",
            "Go home early",
            "Open the old box"
          ],
          "a": 0,
          "por": "He let us borrow one book each."
        },
        {
          "q": "What is nobody allowed to do?",
          "op": [
            "Touch the old box",
            "Read in the room",
            "Visit the headmaster"
          ],
          "a": 0,
          "por": "Nobody is allowed to touch the old box on the shelf."
        }
      ]
    },
    "out": {
      "sub": "Three sentences about rules. Hear it, then say it.",
      "frases": [
        {
          "t": "The teacher made us clean the whole library.",
          "img": "https://wolf-labs.pages.dev/p/8d4e4be78013/who-lets-him-out/img/live-caixa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "He lets us stay on the roof after class.",
          "img": "https://wolf-labs.pages.dev/p/8d4e4be78013/who-lets-him-out/img/live-rua.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "We aren't allowed to leave the school area at night.",
          "img": "https://wolf-labs.pages.dev/p/8d4e4be78013/who-lets-him-out/img/live-mapa.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "make, let, be allowed to. Four quick ones.",
      "regra": "<b>make / let</b> + person + plain verb · <b>was made to</b> + verb · <b>be allowed to</b> + verb · never <i>made me to</i>, <i>let me to</i>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "The teacher lets us borrow one book.",
          "aceita": [],
          "d": "Hint: <b>lets</b> + person + plain verb: <i>lets us borrow</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "My boss made me to stay late.",
          "r": "My boss made me stay late.",
          "aceita": [],
          "d": "Hint: <b>made</b> + person + plain verb. No <i>to</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "I don't allowed to use my phone here.",
          "r": "I'm not allowed to use my phone here.",
          "aceita": [
            "I am not allowed to use my phone here."
          ],
          "d": "Hint: <b>be allowed to</b> is a passive form, so you need <b>be</b>, not <i>do</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is missing.",
          "mostra": "She was made clean the room.",
          "r": "She was made to clean the room.",
          "aceita": [],
          "d": "Hint: in the passive, <b>to</b> comes back: <i>was made to</i> + verb."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/8d4e4be78013/who-lets-him-out/img/live-caixa.webp",
      "leg": "An old box on a shelf",
      "pede": "Look at the picture: an old box on a shelf. Write 2 or 3 sentences about rules at your school or workplace. Use <b>make</b>, <b>let</b>, <b>be allowed to</b> or <b>be made to</b>.",
      "ph": "My boss lets us … We aren't allowed to …",
      "ex": "My boss lets us leave early on Fridays. We aren't allowed to use our phones in meetings. I was made to wear a tie once."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What does your boss, teacher or family let you do? What do they make you do?",
          "ph": "They let me … They make me …",
          "ex": "My parents let me stay out late on weekends. They make me wash the dishes."
        },
        {
          "q": "What aren't you allowed to do at work or at school?",
          "ph": "I'm not allowed to …",
          "ex": "I'm not allowed to wear shorts at work."
        }
      ]
    }
  }
};
