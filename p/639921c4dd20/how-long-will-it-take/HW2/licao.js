/* HOW LONG WILL IT TAKE? · LIÇÃO DE CASA 2.0 (24/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: estimativa com certeza, It depends on, primeira condicional. B1: nenhum português na lição. Só imagens live-* escuras (lum < 50). */
window.HW2 = {
  "id": "how-long-will-it-take",
  "titulo": "How Long Will It Take?",
  "nivel": "B1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/639921c4dd20/how-long-will-it-take/img/live-a.webp",
  "alvo": "estimates with degrees of certainty: It'll take, It might take, It probably won't, It depends on; first conditional: If the API is ready, we'll finish on Friday (present after if, will in the result); never If the API will be ready, never It depends of, never will can",
  "abrir": "How long does it take you to get ready in the morning? What does it depend on?",
  "fecho": "<b>How sure are you?</b> <i>It'll take four days. It might take a week. It probably won't fit before Friday.</i> <b>It depends on</b> + thing: <i>It depends on the API.</i> <b>If</b> + present, then <b>will</b>: <i>If the API is ready, we'll finish on Friday.</i> Never <i>If the API will be ready</i>, never <i>depends of</i>.",
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
      "sub": "Mia and Leo before sprint planning. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/639921c4dd20/how-long-will-it-take/img/live-a.webp",
      "leg": "An hourglass on a dark desk",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Priya wants the new login page by Friday. Leo, how long will it take?"
        },
        {
          "quem": "leo",
          "t": "I don't know yet. It depends on the API."
        },
        {
          "quem": "mia",
          "t": "What if the API isn't ready?"
        },
        {
          "quem": "leo",
          "t": "Then it might take a week. If the API is ready by Tuesday, we'll finish on Friday."
        },
        {
          "quem": "mia",
          "t": "So Friday is possible, but it's not sure."
        },
        {
          "quem": "leo",
          "t": "Exactly. I'd say it'll probably take four days."
        },
        {
          "quem": "mia",
          "t": "And the tests? Last time, we forgot them."
        },
        {
          "quem": "leo",
          "t": "Good point. If we add the tests, it'll take one more day. It probably won't fit before Friday."
        },
        {
          "quem": "mia",
          "t": "Then we tell Priya now. If we tell her on Friday, she'll be angry."
        },
        {
          "quem": "leo",
          "t": "Agreed. Honest estimate: four days for the page, five with the tests, if the API is ready."
        }
      ],
      "perguntas": [
        {
          "q": "What does the estimate depend on?",
          "op": [
            "The API",
            "The design",
            "Priya's holiday"
          ],
          "a": 0,
          "por": "I don't know yet. It depends on the API."
        },
        {
          "q": "When will they finish if the API is ready by Tuesday?",
          "op": [
            "On Friday",
            "On Tuesday",
            "Next month"
          ],
          "a": 0,
          "por": "If the API is ready by Tuesday, we'll finish on Friday."
        },
        {
          "q": "Why do they tell Priya now?",
          "op": [
            "She will be angry if they wait until Friday",
            "The tests are ready",
            "The API is ready"
          ],
          "a": 0,
          "por": "If we tell her on Friday, she'll be angry."
        }
      ]
    },
    "out": {
      "sub": "Three sentences for planning. Hear it, then say it.",
      "frases": [
        {
          "t": "It depends on the API.",
          "img": "https://wolf-labs.pages.dev/p/639921c4dd20/how-long-will-it-take/img/live-a.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "If the API is ready on Tuesday, we'll finish on Friday.",
          "img": "https://wolf-labs.pages.dev/p/639921c4dd20/how-long-will-it-take/img/live-b.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "It probably won't fit before Friday.",
          "img": "https://wolf-labs.pages.dev/p/639921c4dd20/how-long-will-it-take/img/live-a.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "It might, it depends on, if + present. Four quick ones.",
      "regra": "<b>It'll / It might / It probably won't</b> · <b>It depends on</b> + thing · <b>If</b> + present, <b>will</b> + verb.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "If we add the tests, it will take one more day.",
          "aceita": [],
          "d": "Hint: <b>if</b> + present simple, then <b>will</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "If the API will be ready, we finish on Friday.",
          "r": "If the API is ready, we will finish on Friday.",
          "aceita": [
            "If the API is ready, we'll finish on Friday."
          ],
          "d": "Hint: after <b>if</b> use the present; the result takes <b>will</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "It depends of the API.",
          "r": "It depends on the API.",
          "aceita": [],
          "d": "Hint: the preposition is <b>on</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: two modal verbs together.",
          "mostra": "Maybe it will can take two days.",
          "r": "Maybe it will take two days.",
          "aceita": [
            "It might take two days.",
            "It could take two days.",
            "Maybe it'll take two days."
          ],
          "d": "Hint: one modal only: <b>will</b>, <b>might</b> or <b>could</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/639921c4dd20/how-long-will-it-take/img/live-b.webp",
      "leg": "A notebook and a stopwatch",
      "pede": "Look at the picture: a notebook and a stopwatch. Priya asks: how long will it take? Write an honest estimate. Use <b>It depends on</b> and <b>if</b>.",
      "ph": "It'll probably take …",
      "ex": "It'll probably take three days. It depends on the design. If the design is ready on Monday, we'll finish on Thursday."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "How long will your next big task take? What does it depend on?",
          "ph": "It might take … It depends on …",
          "ex": "It might take two weeks. It depends on my work schedule."
        },
        {
          "q": "What will you do this weekend if it rains?",
          "ph": "If it rains, I'll …",
          "ex": "If it rains, I'll stay home and study English."
        }
      ]
    }
  }
};
