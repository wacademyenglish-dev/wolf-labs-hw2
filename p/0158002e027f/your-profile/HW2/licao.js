/* YOUR PROFILE · LIÇÃO DE CASA 2.0 (24/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: verbos fortes + números, responsible for + -ing, passado com ano fechado. B1: nenhum português na lição. Só imagens live-* escuras (lum < 50). */
window.HW2 = {
  "id": "your-profile",
  "titulo": "Your Profile",
  "nivel": "B1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/0158002e027f/your-profile/img/live-capa.webp",
  "alvo": "strong past verbs + numbers on a developer profile: built, led, reduced, migrated; by 40 percent, in three months, for 20,000 users; responsible for + -ing (never responsible for develop); a finished year takes the past simple (I built it in 2022), never I have built it in 2022",
  "abrir": "What is the work you are proudest of? Say it with a number.",
  "fecho": "<b>Strong verb + number</b>: <i>I built the checkout page for 20,000 users. I reduced errors by 30 percent.</i> <b>by</b> shows how much it changed. <b>Responsible for</b> + -ing: <i>responsible for fixing bugs</i>, never <i>for fix</i>. A year that is finished takes the past: <i>I built it in 2022</i>, not <i>I have built it in 2022</i>.",
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
      "sub": "Mia and Leo before a call with a recruiter. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/0158002e027f/your-profile/img/live-capa.webp",
      "leg": "A laptop and a framed certificate on a dark desk",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, I read your LinkedIn profile before your call with the recruiter. Can I be honest?"
        },
        {
          "quem": "leo",
          "t": "Sure. Is it bad?"
        },
        {
          "quem": "mia",
          "t": "It's not bad, but it's weak. Look at this line: I was part of the team that changed the database."
        },
        {
          "quem": "leo",
          "t": "But it's true. I helped with the migration."
        },
        {
          "quem": "mia",
          "t": "Then say it with a strong verb and a number: I led the migration of our database and reduced errors by thirty percent."
        },
        {
          "quem": "leo",
          "t": "I like it. I've also built the new checkout page, and twenty thousand users use it every day."
        },
        {
          "quem": "mia",
          "t": "That's your headline! Frontend developer who built a checkout page for twenty thousand users."
        },
        {
          "quem": "leo",
          "t": "And what about responsible for fixing bugs? I have that line in my profile."
        },
        {
          "quem": "mia",
          "t": "Keep it, but add a number. How many bugs did you fix in three months?"
        },
        {
          "quem": "leo",
          "t": "About forty. I fixed around forty bugs in three months."
        },
        {
          "quem": "mia",
          "t": "Perfect. Put that in your profile tonight, before the call."
        }
      ],
      "perguntas": [
        {
          "q": "What does Mia want Leo to add to his profile?",
          "op": [
            "Strong verbs and numbers",
            "A new photo",
            "More technologies"
          ],
          "a": 0,
          "por": "Then say it with a strong verb and a number."
        },
        {
          "q": "What has Leo built?",
          "op": [
            "The new checkout page",
            "A database",
            "A payments bank"
          ],
          "a": 0,
          "por": "I've also built the new checkout page."
        },
        {
          "q": "How many bugs did Leo fix in three months?",
          "op": [
            "About forty",
            "About twenty",
            "About four hundred"
          ],
          "a": 0,
          "por": "I fixed around forty bugs in three months."
        }
      ]
    },
    "out": {
      "sub": "Three sentences for a developer profile. Hear it, then say it.",
      "frases": [
        {
          "t": "I've built three apps for more than 20,000 users.",
          "img": "https://wolf-labs.pages.dev/p/0158002e027f/your-profile/img/live-capa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "I led the migration and reduced errors by thirty percent.",
          "img": "https://wolf-labs.pages.dev/p/0158002e027f/your-profile/img/live-a.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "I'm responsible for testing and fixing bugs.",
          "img": "https://wolf-labs.pages.dev/p/0158002e027f/your-profile/img/live-b.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Strong verbs, by + number, responsible for + -ing. Four quick ones.",
      "regra": "<b>built, led, reduced</b> + a number · <b>by</b> 40 percent · <b>responsible for</b> + -ing · a finished year = past simple.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "I reduced the loading time by forty percent.",
          "aceita": [],
          "d": "Hint: <b>by</b> + a number shows how much it changed."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "I am responsible for develop the API.",
          "r": "I am responsible for developing the API.",
          "aceita": [
            "I'm responsible for developing the API."
          ],
          "d": "Hint: after <b>responsible for</b>, use the -ing form."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "I have built the app in 2022.",
          "r": "I built the app in 2022.",
          "aceita": [],
          "d": "Hint: 2022 is a finished year, so use the past simple."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "We improved the speed for 40 percent.",
          "r": "We improved the speed by 40 percent.",
          "aceita": [
            "We improved the speed by forty percent.",
            "We improved the speed by 40%."
          ],
          "d": "Hint: the size of a change takes <b>by</b>, not <i>for</i>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/0158002e027f/your-profile/img/live-b.webp",
      "leg": "A trophy on a dark shelf",
      "pede": "Look at the picture: a trophy on a shelf. Write 2 or 3 sentences for your profile. Use a strong verb (<b>built, led, reduced</b>) and a number.",
      "ph": "I built … for … users.",
      "ex": "I built a booking app for 5,000 users. I've worked with React and Node for four years. I reduced the loading time by 30 percent."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What is the best thing you've built or fixed? Give a number.",
          "ph": "I've built …",
          "ex": "I've built a small shop app that 300 people use every month."
        },
        {
          "q": "How long have you worked or studied in tech? What have you learned?",
          "ph": "I've been … for …",
          "ex": "I've been studying programming for two years. I've learned JavaScript and Git."
        }
      ]
    }
  }
};
