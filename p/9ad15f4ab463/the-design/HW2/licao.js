/* THE DESIGN · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: linguagem de suposicao: let's assume / if we used / that would mean / in that case. B2: nenhum portugues. So live-capa (lum 35). */
window.HW2 = {
  "id": "the-design",
  "titulo": "The Design",
  "nivel": "B2",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/9ad15f4ab463/the-design/img/live-capa.webp",
  "alvo": "the language of assumptions in a system design interview: Let's assume + present (no will), If we used a cache, we'd ... (second conditional), That would mean ..., In that case ...; never let's assume that we will have, never supposing we would have",
  "abrir": "How would you explain to a friend what happens when a small shop suddenly gets ten times more customers?",
  "fecho": "<b>Let's assume</b> + present: <i>Let's assume we have two million orders a day</i> (no <i>will</i>). <b>If we used</b> a cache, <b>we'd</b> cut the load. <b>That would mean</b> a lot of reads. <b>In that case</b>, the requests go to the database. Never <i>supposing we would have</i>.",
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
      "sub": "Mia practises for her interview with Leo. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/9ad15f4ab463/the-design/img/live-capa.webp",
      "leg": "A system diagram of glowing boxes",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Okay, Mia. Design a delivery app for five million people. Where do you start?"
        },
        {
          "quem": "mia",
          "t": "Let's assume we have about two million orders a day. Is that fair?"
        },
        {
          "quem": "leo",
          "t": "Fair. What would that mean for the database?"
        },
        {
          "quem": "mia",
          "t": "That would mean a lot of reads at lunchtime. If we used a cache, we'd cut most of the load."
        },
        {
          "quem": "leo",
          "t": "And if the cache went down?"
        },
        {
          "quem": "mia",
          "t": "In that case, the requests would go straight to the database. It would be slow, but it would still work."
        },
        {
          "quem": "leo",
          "t": "What if traffic were a hundred times bigger?"
        },
        {
          "quem": "mia",
          "t": "Then we'd add a queue, so the orders wait in line and nothing is lost."
        },
        {
          "quem": "leo",
          "t": "Good. You said your assumptions out loud. That's what the interviewer wants to hear."
        },
        {
          "quem": "mia",
          "t": "Let's assume I get the job, then!"
        }
      ],
      "perguntas": [
        {
          "q": "What does Mia assume at the start?",
          "op": [
            "About two million orders a day",
            "Five million drivers",
            "Fifty orders a day"
          ],
          "a": 0,
          "por": "Let's assume we have about two million orders a day."
        },
        {
          "q": "What would a cache do?",
          "op": [
            "Cut most of the load",
            "Delete the orders",
            "Make the app slower"
          ],
          "a": 0,
          "por": "If we used a cache, we'd cut most of the load."
        },
        {
          "q": "What would Mia add if traffic were a hundred times bigger?",
          "op": [
            "A queue",
            "A bigger phone",
            "A second city"
          ],
          "a": 0,
          "por": "Then we'd add a queue, so the orders wait in line."
        }
      ]
    },
    "out": {
      "sub": "Three sentences for the interview. Hear it, then say it.",
      "frases": [
        {
          "t": "Let's assume we have two million orders a day.",
          "img": "https://wolf-labs.pages.dev/p/9ad15f4ab463/the-design/img/live-capa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "If we used a cache, we would cut most of the load.",
          "img": "https://wolf-labs.pages.dev/p/9ad15f4ab463/the-design/img/live-capa.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "In that case, the requests would go straight to the database.",
          "img": "https://wolf-labs.pages.dev/p/9ad15f4ab463/the-design/img/live-capa.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Assumptions and what-ifs. Four quick ones.",
      "regra": "<b>Let's assume</b> + present · <b>If we used</b>, <b>we'd</b> · <b>That would mean</b> · <b>In that case</b> · no <i>will</i> after <i>assume</i>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "That would mean a lot of reads at lunchtime.",
          "aceita": [],
          "d": "Hint: <b>that would mean</b> + the consequence."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "Let's assume that we will have two million orders.",
          "r": "Let's assume we have two million orders.",
          "aceita": [
            "Let's assume that we have two million orders."
          ],
          "d": "Hint: after <b>assume</b>, use the present. No <b>will</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "Supposing we would have a cache, the load would drop.",
          "r": "Supposing we had a cache, the load would drop.",
          "aceita": [
            "Supposing we had a cache, the load would go down."
          ],
          "d": "Hint: after <b>supposing</b>, use the past simple, not <b>would</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "If we use a cache, we'd cut the load.",
          "r": "If we used a cache, we'd cut the load.",
          "aceita": [
            "If we used a cache, we would cut the load."
          ],
          "d": "Hint: a what-if idea needs <b>if + past</b>, then <b>would</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/9ad15f4ab463/the-design/img/live-capa.webp",
      "leg": "A diagram of glowing boxes",
      "pede": "Look at the picture: a system diagram of glowing boxes. Write 2 or 3 sentences about an app you know. Start with an assumption, then say what would happen. Use <b>Let's assume…</b>, <b>If we used…</b> or <b>That would mean…</b>",
      "ph": "Let's assume … That would mean …",
      "ex": "Let's assume the app has a million users. That would mean a lot of requests at night. If we used a cache, the pages would load faster."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "How would you start designing a simple app for your city? What would you assume?",
          "ph": "Let's assume …",
          "ex": "Let's assume ten thousand people use it every day. That would mean we need a simple database."
        },
        {
          "q": "If your favourite app had a hundred times more users, what would break first?",
          "ph": "If it had …, … would …",
          "ex": "If it had a hundred times more users, the search would break first. It would become very slow."
        }
      ]
    }
  }
};
