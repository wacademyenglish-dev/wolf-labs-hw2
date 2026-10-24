/* I ENDED UP · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: was going to / kept + -ing / ended up + -ing. B1: nenhum português. Só as imagens live-* (já escuras). Id da plataforma: the-monkey-deal (HWMETA monkey-lista). */
window.HW2 = {
  "id": "the-monkey-deal",
  "titulo": "I Ended Up",
  "nivel": "B1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/b6958f34ae45/the-monkey-deal/img/live-sofa.webp",
  "alvo": "was going to + verb (the plan) · kept + -ing (the loop) · ended up + -ing (what really happened); never kept to, ended up to, ended up + past",
  "abrir": "What were you going to do last weekend, and what happened instead?",
  "fecho": "<b>I was going to</b> + verb: the plan (<i>I was going to start at nine</i>). <b>I kept</b> + -ing: the loop (<i>I kept checking my phone</i>). <b>I ended up</b> + -ing: what really happened (<i>I ended up ordering a pizza</i>). Never <i>kept to</i>, never <i>ended up to</i>.",
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
      "sub": "Mia and Leo on a Sunday morning. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/b6958f34ae45/the-monkey-deal/img/live-mesa.webp",
      "leg": "A desk with a laptop and a cold coffee",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, did you finish the report on Saturday? You said you were going to start at nine."
        },
        {
          "quem": "mia",
          "t": "I was going to, I really was. But I kept checking my phone."
        },
        {
          "quem": "leo",
          "t": "Everybody does that. What happened next?"
        },
        {
          "quem": "mia",
          "t": "I made a coffee, and then I kept watching cooking videos for an hour."
        },
        {
          "quem": "leo",
          "t": "So the report never moved."
        },
        {
          "quem": "mia",
          "t": "Not one word. Around two, I was going to clean the kitchen instead, so at least I'd feel useful."
        },
        {
          "quem": "leo",
          "t": "And did you?"
        },
        {
          "quem": "mia",
          "t": "No. I ended up ordering a pizza at seven, and then I ended up falling asleep on the sofa."
        },
        {
          "quem": "leo",
          "t": "That sounds like my Saturdays. I was going to go to the gym, but I ended up walking around the block."
        },
        {
          "quem": "mia",
          "t": "Well, at least you walked! This morning I was going to start again, and look, I'm calling you instead."
        },
        {
          "quem": "leo",
          "t": "Let's get it over with. Open the file, and I'll stay on the line."
        }
      ],
      "perguntas": [
        {
          "q": "Why didn't Mia start the report at nine?",
          "op": [
            "She kept checking her phone",
            "She went to the gym",
            "She was too tired"
          ],
          "a": 0,
          "por": "I was going to, I really was. But I kept checking my phone."
        },
        {
          "q": "What did Mia end up doing at seven?",
          "op": [
            "Ordering a pizza",
            "Cleaning the kitchen",
            "Finishing the report"
          ],
          "a": 0,
          "por": "I ended up ordering a pizza at seven."
        },
        {
          "q": "What did Leo end up doing instead of the gym?",
          "op": [
            "Walking around the block",
            "Watching videos",
            "Sleeping on the sofa"
          ],
          "a": 0,
          "por": "I was going to go to the gym, but I ended up walking around the block."
        }
      ]
    },
    "out": {
      "sub": "Three sentences about plans that changed. Hear it, then say it.",
      "frases": [
        {
          "t": "I was going to start at nine, but I kept opening and closing the file.",
          "img": "https://wolf-labs.pages.dev/p/b6958f34ae45/the-monkey-deal/img/live-mesa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "I kept looking for my other shoe, so I ended up walking around the block.",
          "img": "https://wolf-labs.pages.dev/p/b6958f34ae45/the-monkey-deal/img/live-bolsa.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "We were going to leave early, but we ended up watching one more episode.",
          "img": "https://wolf-labs.pages.dev/p/b6958f34ae45/the-monkey-deal/img/live-sofa.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "The plan, the loop and the result. Four quick ones.",
      "regra": "<b>was going to</b> + plain verb · <b>kept</b> + -ing · <b>ended up</b> + -ing · never <i>kept to</i>, never <i>ended up to</i>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "I was going to answer the email, but I ended up calling her.",
          "aceita": [],
          "d": "Hint: <b>was going to</b> + plain verb, then <b>ended up</b> + -ing."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "I kept to check my phone all morning.",
          "r": "I kept checking my phone all morning.",
          "aceita": [],
          "d": "Hint: after <b>kept</b>, use -ing. Never <i>kept to</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "We ended up to order a pizza at midnight.",
          "r": "We ended up ordering a pizza at midnight.",
          "aceita": [
            "We ended up ordering pizza at midnight."
          ],
          "d": "Hint: <b>ended up</b> + -ing. Never <i>ended up to</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "She was going to starting at nine.",
          "r": "She was going to start at nine.",
          "aceita": [],
          "d": "Hint: <b>was going to</b> + the plain verb: <i>start</i>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/b6958f34ae45/the-monkey-deal/img/live-sofa.webp",
      "leg": "A blanket, popcorn and a phone",
      "pede": "Look at the picture: a blanket, popcorn and a phone on the sofa. Write 2 or 3 sentences about a day when you had a plan and it changed. Use <b>was going to</b>, <b>kept + -ing</b> or <b>ended up + -ing</b>.",
      "ph": "I was going to … but I kept … and I ended up …",
      "ex": "I was going to study on Sunday, but I kept checking my messages. I ended up watching three episodes of a series."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What were you going to do last weekend? What did you end up doing?",
          "ph": "I was going to … but I ended up …",
          "ex": "I was going to clean my room, but I ended up visiting my cousin."
        },
        {
          "q": "What do you keep doing when you should be working?",
          "ph": "I keep …",
          "ex": "I keep checking my phone, even when I am trying to focus."
        }
      ]
    }
  }
};
