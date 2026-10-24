/* THE MENTOR · LIÇÃO DE CASA 2.0 (24/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: feedback que ajuda (What I liked was, worth + -ing, considered + -ing). C1: nenhum português. */
window.HW2 = {
  "id": "the-mentor",
  "titulo": "The Mentor",
  "nivel": "C1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/26523ce421a3/the-mentor/img/live-a.webp",
  "alvo": "feedback that helps: What I liked was... · It might be worth + -ing · Have you considered + -ing? · I'd encourage you to + verb · The one thing I'd change is...; no to after worth/considered, no it in the cleft, no that after encourage",
  "abrir": "Who gave you the most useful feedback you ever got? What did they say?",
  "fecho": "Good feedback is specific and kind. <b>What I liked was</b>… · <b>It might be worth</b> + <b>-ing</b> · <b>Have you considered</b> + <b>-ing</b>? · <b>I'd encourage you to</b> + verb. Praise, one idea, one next step.",
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
      "sub": "Mia asks Leo how to give feedback to a junior. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/26523ce421a3/the-mentor/img/live-a.webp",
      "leg": "A small plant in the light",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, I have to give feedback to Rui, our new junior, about his pull request. I don't want to discourage him."
        },
        {
          "quem": "leo",
          "t": "Start with something specific. Not, good job. What did you like?"
        },
        {
          "quem": "mia",
          "t": "What I liked was the way he wrote the tests."
        },
        {
          "quem": "leo",
          "t": "Perfect. Now the growth area. What is it?"
        },
        {
          "quem": "mia",
          "t": "The pull request was huge. Eight hundred lines."
        },
        {
          "quem": "leo",
          "t": "Then suggest, don't order. It might be worth splitting it into smaller pull requests."
        },
        {
          "quem": "mia",
          "t": "Can I ask a question instead?"
        },
        {
          "quem": "leo",
          "t": "Yes. Have you considered opening a draft pull request early?"
        },
        {
          "quem": "mia",
          "t": "And at the end I could say I'd encourage him to ask for help sooner."
        },
        {
          "quem": "leo",
          "t": "Exactly. Praise, one idea, one next step. That is enough for one conversation."
        },
        {
          "quem": "mia",
          "t": "Thanks. It feels less scary now."
        }
      ],
      "perguntas": [
        {
          "q": "What did Mia like about Rui's work?",
          "op": [
            "The way he wrote the tests",
            "The size of the pull request",
            "How fast he finished"
          ],
          "a": 0,
          "por": "What I liked was the way he wrote the tests."
        },
        {
          "q": "What was the problem with the pull request?",
          "op": [
            "It was huge, about eight hundred lines",
            "It had no tests",
            "It was sent too late"
          ],
          "a": 0,
          "por": "The pull request was huge. Eight hundred lines."
        },
        {
          "q": "How should Mia give the suggestion?",
          "op": [
            "As a suggestion, not an order",
            "Only by e-mail",
            "In front of the whole team"
          ],
          "a": 0,
          "por": "Then suggest, don't order."
        }
      ]
    },
    "out": {
      "sub": "Three feedback sentences. Hear it, then say it.",
      "frases": [
        {
          "t": "What I liked was the way you wrote the tests.",
          "img": "https://wolf-labs.pages.dev/p/26523ce421a3/the-mentor/img/live-a.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "It might be worth splitting this into smaller pull requests.",
          "img": "https://wolf-labs.pages.dev/p/26523ce421a3/the-mentor/img/live-b.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "Have you considered opening a draft pull request early?",
          "img": "https://wolf-labs.pages.dev/p/26523ce421a3/the-mentor/img/live-a.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Specific and kind. Four quick ones.",
      "regra": "<b>What I liked was</b>… · <b>It might be worth</b> + <b>-ing</b> · <b>Have you considered</b> + <b>-ing</b>? · <b>I'd encourage you to</b> + verb.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "It might be worth splitting this pull request.",
          "aceita": [],
          "d": "Hint: <b>worth</b> + verb with <b>-ing</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "Have you considered to ask for help?",
          "r": "Have you considered asking for help?",
          "aceita": [],
          "d": "Hint: <b>considered</b> + <b>-ing</b>, never <i>to</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "It might be worth to write more tests.",
          "r": "It might be worth writing more tests.",
          "aceita": [],
          "d": "Hint: <b>worth</b> + <b>-ing</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "I encourage you that you ask earlier.",
          "r": "I'd encourage you to ask earlier.",
          "aceita": [
            "I would encourage you to ask earlier.",
            "I encourage you to ask earlier."
          ],
          "d": "Hint: <b>encourage</b> + person + <b>to</b> + verb."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/26523ce421a3/the-mentor/img/live-a.webp",
      "leg": "A small plant in the light",
      "pede": "Look at the picture: a small plant growing in the light. A junior colleague sends you work with one big problem. Write two or three sentences of feedback: one thing you liked, one suggestion. Use <b>What I liked was</b>, <b>It might be worth</b> + <b>-ing</b> or <b>Have you considered</b> + <b>-ing</b>?",
      "ph": "What I liked was …",
      "ex": "What I liked was your clear commit messages. It might be worth splitting the work into smaller steps. Have you considered asking for a review earlier?"
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "Think of a colleague or classmate. What do you like about how they work?",
          "ph": "What I like about … is …",
          "ex": "What I like about Ana's work is how she explains her choices."
        },
        {
          "q": "A friend is always late with projects. What would you suggest?",
          "ph": "It might be worth …",
          "ex": "It might be worth starting with the hardest task in the morning."
        }
      ]
    }
  }
};
