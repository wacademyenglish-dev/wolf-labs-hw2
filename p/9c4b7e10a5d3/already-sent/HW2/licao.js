/* ALREADY SENT · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: future perfect x future continuous. B1: nenhum português. Só live-relogio. */
window.HW2 = {
  "id": "already-sent",
  "titulo": "Already Sent",
  "nivel": "B1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/9c4b7e10a5d3/already-sent/img/live-relogio.webp",
  "alvo": "future perfect (will have + past participle: finished BEFORE a deadline) x future continuous (will be + -ing: in progress AT that moment); by + deadline; never will have + base verb",
  "abrir": "What will you have finished by Friday?",
  "fecho": "<b>will have + 3rd form</b>: done BEFORE the deadline (<i>By Wednesday we will have finished the design.</i>). <b>will be + -ing</b>: still going AT that moment (<i>At three Kenji will be testing.</i>). <b>By</b> + the deadline. Never <i>will have finish</i>.",
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
      "sub": "Mia and Leo on Monday, before a launch. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/9c4b7e10a5d3/already-sent/img/live-relogio.webp",
      "leg": "A clock near twelve",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, the site goes live on Friday at 3 PM. Are we ready?"
        },
        {
          "quem": "leo",
          "t": "By Wednesday we will have finished the design."
        },
        {
          "quem": "mia",
          "t": "And the code?"
        },
        {
          "quem": "leo",
          "t": "At three on Thursday, Kenji will still be testing it."
        },
        {
          "quem": "mia",
          "t": "So the test won't be done on Thursday afternoon."
        },
        {
          "quem": "leo",
          "t": "No. But by Thursday night he will have fixed the last bug."
        },
        {
          "quem": "mia",
          "t": "What will you be doing on Friday at 3 PM?"
        },
        {
          "quem": "leo",
          "t": "I'll be sending the final email to the client."
        },
        {
          "quem": "mia",
          "t": "Then by four o'clock we will have sent everything."
        },
        {
          "quem": "leo",
          "t": "Exactly. Done by then, or still going: always say which."
        }
      ],
      "perguntas": [
        {
          "q": "What will be finished by Wednesday?",
          "op": [
            "The design",
            "The code",
            "The final email"
          ],
          "a": 0,
          "por": "By Wednesday we will have finished the design."
        },
        {
          "q": "What will Kenji be doing on Thursday at three?",
          "op": [
            "Testing the code",
            "Fixing the last bug",
            "Sending the email"
          ],
          "a": 0,
          "por": "At three on Thursday, Kenji will still be testing it."
        },
        {
          "q": "What will Leo be doing on Friday at 3 PM?",
          "op": [
            "Sending the final email",
            "Designing the site",
            "Testing the code"
          ],
          "a": 0,
          "por": "I'll be sending the final email to the client."
        }
      ]
    },
    "out": {
      "sub": "Three sentences about the launch. Hear it, then say it.",
      "frases": [
        {
          "t": "By Wednesday we will have finished the design.",
          "img": "https://wolf-labs.pages.dev/p/9c4b7e10a5d3/already-sent/img/live-relogio.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "On Thursday at three Kenji will be testing the code.",
          "img": "https://wolf-labs.pages.dev/p/9c4b7e10a5d3/already-sent/img/live-relogio.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "By Friday at four we will have sent everything.",
          "img": "https://wolf-labs.pages.dev/p/9c4b7e10a5d3/already-sent/img/live-relogio.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Done by then, or still going? Four quick ones.",
      "regra": "<b>will have + 3rd form</b> = done before the deadline · <b>will be + -ing</b> = in progress at that moment · <b>by</b> + deadline.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "At nine tomorrow I will be driving to work.",
          "aceita": [],
          "d": "Hint: in progress at that moment: <b>will be</b> + -ing."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: it will be finished before Friday.",
          "mostra": "By Friday I will finish the report.",
          "r": "By Friday I will have finished the report.",
          "aceita": [],
          "d": "Hint: done before the deadline: <b>will have finished</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: it will be in progress at nine.",
          "mostra": "At nine tomorrow I will sleep.",
          "r": "At nine tomorrow I will be sleeping.",
          "aceita": [],
          "d": "Hint: in the middle of the action: <b>will be sleeping</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "She will have finish the work by noon.",
          "r": "She will have finished the work by noon.",
          "aceita": [],
          "d": "Hint: after <b>will have</b>, use the third form: <b>finished</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/9c4b7e10a5d3/already-sent/img/live-relogio.webp",
      "leg": "A clock near midnight",
      "pede": "Look at the picture: a clock near twelve. Write 2 or 3 sentences about December 31. Use <b>will have + third form</b> for what will be done and <b>will be + -ing</b> for what you will be doing.",
      "ph": "By December 31 I will have …",
      "ex": "By December 31 I will have finished my course. At midnight I will be watching fireworks with my family."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What will you have finished by Friday?",
          "ph": "By Friday I will have …",
          "ex": "By Friday I will have finished my report."
        },
        {
          "q": "What will you be doing tonight at nine?",
          "ph": "At nine I will be …",
          "ex": "At nine I will be watching a series."
        }
      ]
    }
  }
};
