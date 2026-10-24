/* A PIECE OF FEEDBACK · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: substantivos incontáveis do trabalho. B1: nenhum português. Só live-caneta-vermelha. */
window.HW2 = {
  "id": "a-piece-of-feedback",
  "titulo": "A Piece of Feedback",
  "nivel": "B1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/3f21c8b4e7a9/a-piece-of-feedback/img/live-caneta-vermelha.webp",
  "alvo": "uncountable work nouns (feedback, advice, information, news, equipment, work, progress): no plural -s, no a / an, singular verb (the news is); use a piece of / a bit of / a lot of / much; never two advices, many informations",
  "abrir": "What is the best piece of advice you ever got?",
  "fecho": "<b>Feedback, advice, information, news, progress</b> have no plural and no <i>a</i>. The number goes on the piece: <i>two pieces of advice</i>. The verb is singular: <i>The news is good.</i> Say <b>a lot of</b> or <b>much</b>, never <i>many informations</i>.",
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
      "sub": "Mia and Leo after a review with their manager. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/3f21c8b4e7a9/a-piece-of-feedback/img/live-caneta-vermelha.webp",
      "leg": "A red pen on a dark page",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, Julia sent my update back with a lot of red pen."
        },
        {
          "quem": "leo",
          "t": "Did she give you any feedback?"
        },
        {
          "quem": "mia",
          "t": "Yes, one useful piece of feedback: use shorter sentences."
        },
        {
          "quem": "leo",
          "t": "That's good advice. What about the numbers?"
        },
        {
          "quem": "mia",
          "t": "She said the information is clear, but I need more research."
        },
        {
          "quem": "leo",
          "t": "How much progress did we make this week?"
        },
        {
          "quem": "mia",
          "t": "A lot of progress. The good news is that the client is happy."
        },
        {
          "quem": "leo",
          "t": "And the bad news?"
        },
        {
          "quem": "mia",
          "t": "The bad news is that we don't have enough equipment for the demo."
        },
        {
          "quem": "leo",
          "t": "Then let's ask Julia for help. One more piece of advice never hurts."
        }
      ],
      "perguntas": [
        {
          "q": "What piece of feedback did Julia give?",
          "op": [
            "Use shorter sentences",
            "Add more numbers",
            "Send it earlier"
          ],
          "a": 0,
          "por": "One useful piece of feedback: use shorter sentences."
        },
        {
          "q": "What is the good news?",
          "op": [
            "The client is happy",
            "The equipment arrived",
            "The research is done"
          ],
          "a": 0,
          "por": "The good news is that the client is happy."
        },
        {
          "q": "What is missing for the demo?",
          "op": [
            "Enough equipment",
            "Enough feedback",
            "Enough news"
          ],
          "a": 0,
          "por": "We don't have enough equipment for the demo."
        }
      ]
    },
    "out": {
      "sub": "Three sentences with work words. Hear it, then say it.",
      "frases": [
        {
          "t": "She gave me one useful piece of feedback.",
          "img": "https://wolf-labs.pages.dev/p/3f21c8b4e7a9/a-piece-of-feedback/img/live-caneta-vermelha.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "The news is good, and the information is clear.",
          "img": "https://wolf-labs.pages.dev/p/3f21c8b4e7a9/a-piece-of-feedback/img/live-caneta-vermelha.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "We made a lot of progress this week.",
          "img": "https://wolf-labs.pages.dev/p/3f21c8b4e7a9/a-piece-of-feedback/img/live-caneta-vermelha.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Count the piece, not the word. Four quick ones.",
      "regra": "<b>feedback, advice, information, news, equipment</b>: no <b>-s</b>, no <b>a</b> · <b>a piece of</b> · <b>a lot of</b> · singular verb: <b>the news is</b>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "She gave me two pieces of advice.",
          "aceita": [],
          "d": "Hint: the number goes on <b>pieces</b>, and <b>advice</b> stays singular."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "She gave me two advices.",
          "r": "She gave me two pieces of advice.",
          "aceita": [
            "She gave me two bits of advice."
          ],
          "d": "Hint: <b>advice</b> has no plural: two <b>pieces of</b> advice."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one verb is wrong.",
          "mostra": "The news are good today.",
          "r": "The news is good today.",
          "aceita": [],
          "d": "Hint: <b>news</b> takes a singular verb: <b>is</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "Can you give me many informations?",
          "r": "Can you give me a lot of information?",
          "aceita": [
            "Can you give me much information?"
          ],
          "d": "Hint: <b>information</b> has no -s and no <i>many</i>: <b>a lot of information</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/3f21c8b4e7a9/a-piece-of-feedback/img/live-caneta-vermelha.webp",
      "leg": "A red pen on a dark page",
      "pede": "Look at the picture: a red pen on a page. Write 2 or 3 sentences about feedback you got or gave at work or school. Use <b>a piece of</b>, <b>a lot of</b> or <b>the news is</b>.",
      "ph": "My manager gave me a piece of …",
      "ex": "My manager gave me a useful piece of feedback. The news is good: we made a lot of progress. I need more information."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What is the best piece of advice you ever got?",
          "ph": "The best piece of advice was …",
          "ex": "The best piece of advice was: sleep before you decide."
        },
        {
          "q": "What good news did you get this month?",
          "ph": "The good news is …",
          "ex": "The good news is that I passed my driving test."
        }
      ]
    }
  }
};
