/* HOW MUCH IS IT? · SELLING SERVICES LESSON 8 · LIÇÃO DE CASA 2.0 (27/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: big numbers (thousand, million, no s), percent, How much (money) × How many (people, invoices), 1.2 × 4,000. A1: português só nas dicas (d). Empresas fictícias. */
window.HW2 = {
  "id": "selling-services-how-much-is-it",
  "titulo": "How Much Is It?",
  "nivel": "A1",
  "minutos": 10,
  "capa": "../img/live-capa.webp",
  "alvo": "big numbers (thousand, million, no s), percent, How much (money) × How many (people, invoices), 1.2 × 4,000",
  "abrir": "A client asks: “How much is it?” What three numbers do you give?",
  "fecho": "<b>thousand, million, percent</b>: no s. Money → <b>How much?</b> People, invoices → <b>How many?</b> 1.2 = one <b>point</b> two.",
  "elenco": {
    "mia": {
      "nome": "Mia",
      "voz": "en-US-AvaNeural",
      "cor": "#86c9f0"
    },
    "leo": {
      "nome": "Leo",
      "voz": "en-US-GuyNeural",
      "cor": "#7fd1b9"
    }
  },
  "rate": "-12%",
  "rodadas": {
    "listen": {
      "sub": "A client asks Mia about the price. About one minute.",
      "img": "../img/live-conversa.webp",
      "leg": "A calculator and a proposal on a desk at night",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "So, Mia, how much is it?"
        },
        {
          "quem": "mia",
          "t": "The monthly fee is fifty thousand reais."
        },
        {
          "quem": "leo",
          "t": "Fifty thousand a month? That’s six hundred thousand a year."
        },
        {
          "quem": "mia",
          "t": "Yes. And today your payroll costs eight hundred thousand a year."
        },
        {
          "quem": "leo",
          "t": "So we save two hundred thousand?"
        },
        {
          "quem": "mia",
          "t": "Exactly. That’s twenty-five percent."
        },
        {
          "quem": "leo",
          "t": "How many people do we need inside?"
        },
        {
          "quem": "mia",
          "t": "Only one. Today there are five."
        },
        {
          "quem": "leo",
          "t": "OK. And how much is the project?"
        },
        {
          "quem": "mia",
          "t": "Eighty thousand, one time."
        }
      ],
      "perguntas": [
        {
          "q": "How much is the monthly fee?",
          "op": [
            "Fifty thousand reais",
            "Fifteen thousand reais",
            "Five hundred thousand reais"
          ],
          "a": 0,
          "por": "The monthly fee is fifty thousand reais."
        },
        {
          "q": "What percent do they save?",
          "op": [
            "Twenty-five percent",
            "Twenty percent",
            "Fifty percent"
          ],
          "a": 0,
          "por": "That’s twenty-five percent."
        },
        {
          "q": "How many people do they need inside?",
          "op": [
            "One",
            "Five",
            "Two"
          ],
          "a": 0,
          "por": "Only one. Today there are five."
        }
      ]
    },
    "out": {
      "sub": "Three sentences from your job. Hear it, then say it.",
      "frases": [
        {
          "t": "There are four thousand employees.",
          "img": "../img/live-capa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "You save twenty-five percent.",
          "img": "../img/live-mesa.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "How much is the monthly fee?",
          "img": "../img/live-conversa.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Your own mistakes, fixed. Four quick ones.",
      "regra": "thousand / million / percent: <b>no s</b> · count it → <b>How many</b> · money → <b>How much</b> · 1.2 = one <b>point</b> two.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "How many invoices do you get a month?",
          "aceita": [],
          "d": "Dica: invoices se contam → <b>How many</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "There are two thousands employees.",
          "r": "There are two thousand employees.",
          "aceita": [],
          "d": "Dica: com número, <b>thousand</b> fica sem s."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "How much employees are there?",
          "r": "How many employees are there?",
          "aceita": [],
          "d": "Dica: pessoas se contam → <b>How many</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "We save twenty percents.",
          "r": "We save twenty percent.",
          "aceita": [
            "We save 20 percent.",
            "We save 20%."
          ],
          "d": "Dica: <b>percent</b> não tem s."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "../img/live-mesa.webp",
      "leg": "A calculator and a proposal on a desk at night",
      "pede": "Write three numbers for a proposal: the cost today, your price, the savings.",
      "ph": "Today it costs … a year. With us, it’s … a month. You save … percent.",
      "ex": "Today it costs one million a year. With us, it’s sixty thousand a month. You save twenty-eight percent."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "How many e-mails do you get in a day?",
          "ph": "About …",
          "ex": "About eighty. Too many!"
        },
        {
          "q": "How much is a coffee near your office?",
          "ph": "It’s … reais.",
          "ex": "It’s eight reais."
        }
      ]
    }
  }
};
