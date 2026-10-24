/* THE TALK · LIÇÃO DE CASA 2.0 (24/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: falar em público (signposting, did + verbo, inversão). C1: nenhum português. */
window.HW2 = {
  "id": "the-talk",
  "titulo": "The Talk",
  "nivel": "C1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/21536fb3e0ae/the-talk/img/live-a.webp",
  "alvo": "public speaking: signposting (Let me start with... · Moving on to... · To put this in perspective... · To sum up...), emphasis with do/did + base verb, and inversion after negative words (Not only did we... · Never have I...)",
  "abrir": "What is the best way to start a talk? What is the worst?",
  "fecho": "Signs on the road: <b>Let me start with</b>… · <b>Moving on to</b>… · <b>To sum up</b>… Emphasis: <i>We <b>did</b> test it.</i> (do / did + base verb). Inversion for big moments: <b>Not only did</b> we fix it… · <b>Never have I</b> seen…",
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
      "sub": "Mia rehearses a conference talk with Leo. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/21536fb3e0ae/the-talk/img/live-a.webp",
      "leg": "A microphone on a small stage",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, can I practise my talk? It's ten minutes about a bug that cost a company nine hundred dollars."
        },
        {
          "quem": "leo",
          "t": "Go ahead. Start the way you want to on stage."
        },
        {
          "quem": "mia",
          "t": "Let me start with a number. Nine hundred dollars, in one month."
        },
        {
          "quem": "leo",
          "t": "Strong. Now a signpost, so people know where you are."
        },
        {
          "quem": "mia",
          "t": "Moving on to the cause: a job that ran every minute."
        },
        {
          "quem": "leo",
          "t": "Good. Now add emphasis. Don't say, we tested it. Say, we did test it."
        },
        {
          "quem": "mia",
          "t": "We did test it, and the tests passed. But the bug was in the settings."
        },
        {
          "quem": "leo",
          "t": "Nice. Try an inversion for the big moment."
        },
        {
          "quem": "mia",
          "t": "Never have I seen such a small mistake cost so much."
        },
        {
          "quem": "leo",
          "t": "That is the line people will remember. And finish with, to sum up."
        },
        {
          "quem": "mia",
          "t": "To sum up: check the schedule before you ship."
        }
      ],
      "perguntas": [
        {
          "q": "How does Mia start her talk?",
          "op": [
            "With a number",
            "With her name",
            "With an apology"
          ],
          "a": 0,
          "por": "Let me start with a number. Nine hundred dollars, in one month."
        },
        {
          "q": "How can Mia add emphasis?",
          "op": [
            "By saying, we did test it",
            "By speaking more slowly",
            "By repeating the slide"
          ],
          "a": 0,
          "por": "Don't say, we tested it. Say, we did test it."
        },
        {
          "q": "What is Mia's final advice?",
          "op": [
            "Check the schedule before you ship",
            "Always test on Fridays",
            "Never use a cloud service"
          ],
          "a": 0,
          "por": "To sum up: check the schedule before you ship."
        }
      ]
    },
    "out": {
      "sub": "Three lines from the talk. Hear it, then say it.",
      "frases": [
        {
          "t": "Let me start with a number: nine hundred dollars.",
          "img": "https://wolf-labs.pages.dev/p/21536fb3e0ae/the-talk/img/live-a.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "We did test it, and the tests passed.",
          "img": "https://wolf-labs.pages.dev/p/21536fb3e0ae/the-talk/img/live-b.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "Never have I seen such a small mistake cost so much.",
          "img": "https://wolf-labs.pages.dev/p/21536fb3e0ae/the-talk/img/live-a.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Signposts, emphasis, inversion. Four quick ones.",
      "regra": "<b>Moving on to</b>… · <b>We did test</b> it (did + base verb) · <b>Not only did we</b>… · <b>Never have I</b>… (auxiliary before the subject).",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "Not only did we fix the bug, we kept the client.",
          "aceita": [],
          "d": "Hint: <b>Not only did</b> + subject + base verb."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: the order is wrong.",
          "mostra": "Never I have seen such a bill.",
          "r": "Never have I seen such a bill.",
          "aceita": [],
          "d": "Hint: after <b>never</b>, the auxiliary comes first: <b>have I</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one verb is wrong.",
          "mostra": "We did tested it, I promise.",
          "r": "We did test it, I promise.",
          "aceita": [],
          "d": "Hint: <b>did</b> + base verb: <b>test</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is missing.",
          "mostra": "Moving on the next point.",
          "r": "Moving on to the next point.",
          "aceita": [],
          "d": "Hint: <b>moving on to</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/21536fb3e0ae/the-talk/img/live-a.webp",
      "leg": "A microphone on a small stage",
      "pede": "Look at the picture: a microphone on a small stage. You open a short talk at a meetup. Write two or three sentences. Use <b>Let me start with</b>, <b>Moving on to</b>, <b>To sum up</b> or <b>We did…</b>",
      "ph": "Let me start with …",
      "ex": "Let me start with a question: how many of you have broken production on a Friday? Moving on to my story, we did test it, but we missed one setting. To sum up, never ship without a checklist."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "How would you open a talk about your job? One sentence, with a hook.",
          "ph": "Let me start with …",
          "ex": "Let me start with a mistake that cost my team a weekend."
        },
        {
          "q": "Name something you have never done at work. Use an inversion.",
          "ph": "Never have I …",
          "ex": "Never have I deployed on a Friday night without a rollback plan."
        }
      ]
    }
  }
};
