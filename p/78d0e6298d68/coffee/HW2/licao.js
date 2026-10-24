/* COFFEE · LIÇÃO DE CASA 2.0 (24/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: passiva no presente e no passado. B1: nenhum português. */
window.HW2 = {
  "id": "coffee",
  "titulo": "Coffee",
  "nivel": "B1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/78d0e6298d68/coffee/img/live-saca.webp",
  "alvo": "the passive in the present (is / are + past participle) and in the past (was / were + past participle); by + who did it; happen is never passive; irregular participles (grown, drunk, made)",
  "abrir": "How do you drink your coffee? Who makes it?",
  "fecho": "<b>is / are + past participle</b> = how it is made today: <i>Coffee is grown in Minas Gerais.</i> <b>was / were + past participle</b> = history: <i>It was first grown in Ethiopia.</i> <b>By</b> + the doer, only when it matters. <b>Happen</b> is never passive: <i>What happened?</i>",
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
      "sub": "Mia, a buyer for a cafe chain, visits Leo's coffee farm. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/78d0e6298d68/coffee/img/live-fazenda.webp",
      "leg": "Coffee rows at dusk",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, thank you for the visit. Where is your coffee grown?"
        },
        {
          "quem": "leo",
          "t": "It's grown here, on our farm in Minas Gerais. The cherries are picked by hand in June."
        },
        {
          "quem": "mia",
          "t": "And then?"
        },
        {
          "quem": "leo",
          "t": "They are dried in the sun for two weeks. Then the beans are sorted and packed in sacks."
        },
        {
          "quem": "mia",
          "t": "Is the coffee roasted on the farm?"
        },
        {
          "quem": "leo",
          "t": "No. It is sent to you green, and it is roasted in your city."
        },
        {
          "quem": "mia",
          "t": "Was the farm always this big?"
        },
        {
          "quem": "leo",
          "t": "No. It was started by my grandfather with just a few rows, and it was made bigger every year."
        },
        {
          "quem": "mia",
          "t": "Is the farm certified?"
        },
        {
          "quem": "leo",
          "t": "Not yet. The audit is planned for March."
        }
      ],
      "perguntas": [
        {
          "q": "How are the cherries picked?",
          "op": [
            "By hand",
            "By machine",
            "By the buyer"
          ],
          "a": 0,
          "por": "The cherries are picked by hand in June."
        },
        {
          "q": "How long are the cherries dried?",
          "op": [
            "For two weeks",
            "For two days",
            "For two months"
          ],
          "a": 0,
          "por": "They are dried in the sun for two weeks."
        },
        {
          "q": "When is the audit planned?",
          "op": [
            "In March",
            "In June",
            "Last year"
          ],
          "a": 0,
          "por": "The audit is planned for March."
        }
      ]
    },
    "out": {
      "sub": "Three sentences about coffee. Hear it, then say it.",
      "frases": [
        {
          "t": "The cherries are picked by hand in June.",
          "img": "https://wolf-labs.pages.dev/p/78d0e6298d68/coffee/img/live-fazenda.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "The coffee is sent to the buyer in sacks.",
          "img": "https://wolf-labs.pages.dev/p/78d0e6298d68/coffee/img/live-saca.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "The farm was visited by the buyer last year.",
          "img": "https://wolf-labs.pages.dev/p/78d0e6298d68/coffee/img/live-reuniao.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "is, are, was or were? Four quick ones.",
      "regra": "<b>is / are + past participle</b> = today · <b>was / were + past participle</b> = history · <b>happen</b> is never passive.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "Coffee is grown in Minas Gerais.",
          "aceita": [],
          "d": "Hint: today, one thing: <b>is</b> + past participle."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "Coffee was grow in Ethiopia first.",
          "r": "Coffee was grown in Ethiopia first.",
          "aceita": [],
          "d": "Hint: after <b>was</b>, use the past participle: <i>grown</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is missing.",
          "mostra": "The beans roasted here every week.",
          "r": "The beans are roasted here every week.",
          "aceita": [],
          "d": "Hint: the passive needs <b>be</b>: <i>are roasted</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "What was happened to the cherries?",
          "r": "What happened to the cherries?",
          "aceita": [],
          "d": "Hint: <b>happen</b> is never passive."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/78d0e6298d68/coffee/img/live-reuniao.webp",
      "leg": "A meeting table with coffee and beans",
      "pede": "Look at the picture: a meeting table with coffee cups and a jar of beans. Write 2 or 3 sentences about how a product from your region is made. Use <b>is / are + past participle</b>, and <b>was / were</b> for its history.",
      "ph": "… is made in my region …",
      "ex": "Cheese is made in my region. The milk is heated, and then it is pressed. It was first made here a hundred years ago."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "How is a food from your country made?",
          "ph": "… is made with …",
          "ex": "Brigadeiro is made with milk and chocolate."
        },
        {
          "q": "What is made or sold in your city? What was made there in the past?",
          "ph": "… is made in … It was …",
          "ex": "Shoes are made in my city. Cars were made there in the past."
        }
      ]
    }
  }
};
