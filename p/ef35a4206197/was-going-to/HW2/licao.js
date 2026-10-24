/* THE LIFE I WAS GOING TO HAVE · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: was going to / was about to / would / was supposed to. B2: nenhum português. Só live-* escuras. Sem violência. */
window.HW2 = {
  "id": "was-going-to",
  "titulo": "The Life I Was Going to Have",
  "nivel": "B2",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/ef35a4206197/was-going-to/img/live-cozinha.webp",
  "alvo": "the future in the past: was / were going to (the plan), was about to (just before), would (what was said to happen later), was supposed to (the agreement); the plan that did not happen: was going to ... but ...",
  "abrir": "What was a plan you had a year ago that never happened?",
  "fecho": "<b>Was going to</b> = the plan: <i>I was going to start a course.</i> <b>Was about to</b> = just before: <i>I was about to book it.</i> <b>Would</b> = what was said would happen later: <i>He said he would call.</i> <b>Was supposed to</b> = the agreement: <i>We were supposed to meet at six.</i> The plan that failed: <i>was going to … but …</i>",
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
      "sub": "Mia and Leo talk about a trip that did not happen. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/ef35a4206197/was-going-to/img/live-cozinha.webp",
      "leg": "A kitchen table, two cups",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, you look surprised. Weren't you in Lisbon this week?"
        },
        {
          "quem": "mia",
          "t": "I was supposed to be. I was going to start a design course there, but the school moved the start to January."
        },
        {
          "quem": "leo",
          "t": "That's a shame. Had you already booked the flight?"
        },
        {
          "quem": "mia",
          "t": "I was about to book it when the email arrived. The school said the course would start in January instead."
        },
        {
          "quem": "leo",
          "t": "So what are you going to do now?"
        },
        {
          "quem": "mia",
          "t": "My landlord had told me he would keep my room until October, so I'm lucky."
        },
        {
          "quem": "leo",
          "t": "Did you tell your sister? She said she was going to visit you in Lisbon."
        },
        {
          "quem": "mia",
          "t": "Not yet. She was going to take her holidays in March, so she has time to change her plans."
        },
        {
          "quem": "leo",
          "t": "And you? What will you do with the extra months?"
        },
        {
          "quem": "mia",
          "t": "I was going to say I'd rest, but I think I'll work and save more money."
        }
      ],
      "perguntas": [
        {
          "q": "Why isn't Mia in Lisbon?",
          "op": [
            "The school moved the start of the course",
            "She missed her flight",
            "Her landlord asked her to stay"
          ],
          "a": 0,
          "por": "I was going to start a design course there, but the school moved the start to January."
        },
        {
          "q": "What was Mia about to do when the email arrived?",
          "op": [
            "Book the flight",
            "Call her sister",
            "Pay the rent"
          ],
          "a": 0,
          "por": "I was about to book it when the email arrived."
        },
        {
          "q": "What did the landlord say?",
          "op": [
            "He would keep her room until October",
            "He was going to sell the flat",
            "He was supposed to call"
          ],
          "a": 0,
          "por": "My landlord had told me he would keep my room until October."
        }
      ]
    },
    "out": {
      "sub": "Three sentences about a plan that changed. Hear it, then say it.",
      "frases": [
        {
          "t": "I was going to start a course, but the school changed the date.",
          "img": "https://wolf-labs.pages.dev/p/ef35a4206197/was-going-to/img/live-cozinha.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "I was about to book the flight when the email arrived.",
          "img": "https://wolf-labs.pages.dev/p/ef35a4206197/was-going-to/img/live-beco.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "The school said that the course would start in January.",
          "img": "https://wolf-labs.pages.dev/p/ef35a4206197/was-going-to/img/live-bar.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "The plan, the moment before, what was said. Four quick ones.",
      "regra": "<b>was / were going to</b> + verb = the plan · <b>was about to</b> + verb = just before · <b>would</b> = what was said would happen · <b>was / were supposed to</b> + verb.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "She was about to book the flight.",
          "aceita": [],
          "d": "Hint: <b>was about to</b> + the plain verb: the moment just before."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "He said he will call me.",
          "r": "He said he would call me.",
          "aceita": [
            "He said that he would call me."
          ],
          "d": "Hint: in a report about the past, <b>will</b> steps back to <b>would</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is missing.",
          "mostra": "I was about call you.",
          "r": "I was about to call you.",
          "aceita": [],
          "d": "Hint: <b>was about to</b> + verb. The word <b>to</b> is part of it."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is missing.",
          "mostra": "We were supposed meet at six.",
          "r": "We were supposed to meet at six.",
          "aceita": [],
          "d": "Hint: <b>were supposed to</b> + verb."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/ef35a4206197/was-going-to/img/live-beco.webp",
      "leg": "An empty street at night",
      "pede": "Look at the picture: an empty street at night. Write 2 or 3 sentences about a plan of yours that did not happen. Use <b>was going to … but</b>, <b>was about to</b> or <b>was supposed to</b>.",
      "ph": "I was going to … but …",
      "ex": "I was going to take a photography course last year, but the price went up. I was about to pay when I changed my mind. The class was supposed to start in May."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What were you going to do last weekend? What happened?",
          "ph": "I was going to … but …",
          "ex": "I was going to visit my cousin, but it rained all day."
        },
        {
          "q": "Think of a time someone said something would happen. Did it?",
          "ph": "He / She said that … would …",
          "ex": "My boss said that we would finish early, but we stayed until seven."
        }
      ]
    }
  }
};
