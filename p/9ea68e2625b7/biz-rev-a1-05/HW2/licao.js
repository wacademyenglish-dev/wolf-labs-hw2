/* THE EXPENSE REPORT · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: review da unidade 5: números, preços, how much/many, was/were. A1: dicas em português só nas notas (d). */
window.HW2 = {
  "id": "biz-rev-a1-05",
  "titulo": "The Expense Report",
  "nivel": "A1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/9ea68e2625b7/biz-rev-a1-05/img/live-capa.webp",
  "alvo": "review of unit 5: numbers (-teen x -ty), prices, How much is / are ...? and How many ...?, days and dates (on May 3rd), was / were (I was, we were, there were)",
  "abrir": "Where were you yesterday at ten?",
  "fecho": "<b>How much</b> for money: <i>How much was the taxi?</i> <b>How many</b> for things you count: <i>How many people?</i> <b>Was</b>: I, he, she, it. <b>Were</b>: you, we, they, there + two or more. A date: <b>on</b> May 3rd. Careful: <b>thirteen</b> and <b>thirty</b> sound different.",
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
  "rate": "-14%",
  "rodadas": {
    "listen": {
      "sub": "Mia and Leo at the finance desk. A new scene, about 45 seconds.",
      "img": "https://wolf-labs.pages.dev/p/9ea68e2625b7/biz-rev-a1-05/img/live-capa.webp",
      "leg": "A till on the finance desk",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, it is Friday, and the expense report is due. Where were you on Monday?"
        },
        {
          "quem": "leo",
          "t": "I was in Campinas, at a client's office. Tom and I were there."
        },
        {
          "quem": "mia",
          "t": "How much was the taxi?"
        },
        {
          "quem": "leo",
          "t": "It was thirty-eight dollars. Not eighteen. Thirty-eight."
        },
        {
          "quem": "mia",
          "t": "OK. And lunch on Tuesday? How many people were there?"
        },
        {
          "quem": "leo",
          "t": "There were four people. Lunch was a hundred and twenty-four dollars and fifty cents."
        },
        {
          "quem": "mia",
          "t": "Good. I need the report today, on Friday the sixteenth."
        },
        {
          "quem": "leo",
          "t": "No problem. I send it at five."
        }
      ],
      "perguntas": [
        {
          "q": "Where were Leo and Tom on Monday?",
          "op": [
            "In Campinas",
            "At the airport",
            "At a restaurant"
          ],
          "a": 0,
          "por": "I was in Campinas. Tom and I were there."
        },
        {
          "q": "How much was the taxi?",
          "op": [
            "Thirty-eight dollars",
            "Eighteen dollars",
            "Eighty dollars"
          ],
          "a": 0,
          "por": "It was thirty-eight dollars."
        },
        {
          "q": "How many people were at lunch?",
          "op": [
            "Four",
            "Fourteen",
            "Forty"
          ],
          "a": 0,
          "por": "There were four people."
        }
      ]
    },
    "out": {
      "sub": "Three sentences for the report. Hear it, then say it.",
      "frases": [
        {
          "t": "We were in Campinas on Monday.",
          "img": "https://wolf-labs.pages.dev/p/9ea68e2625b7/biz-rev-a1-05/img/live-capa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "The taxi was thirty-eight dollars.",
          "img": "https://wolf-labs.pages.dev/p/9ea68e2625b7/biz-rev-a1-05/img/live-capa.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "How many people were at lunch?",
          "img": "https://wolf-labs.pages.dev/p/9ea68e2625b7/biz-rev-a1-05/img/live-capa.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "was / were, how much, how many, on. Four quick ones.",
      "regra": "<b>was</b> (I, he, she, it) · <b>were</b> (you, we, they) · <b>how much</b> = money · <b>how many</b> = people, things · <b>on</b> May 3rd.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "Where were you on Monday?",
          "aceita": [],
          "d": "Dica: com <b>you</b>, o passado de to be é <b>were</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "How many is the taxi?",
          "r": "How much is the taxi?",
          "aceita": [],
          "d": "Dica: dinheiro e preço pedem <b>how much</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "The report is due in May 3rd.",
          "r": "The report is due on May 3rd.",
          "aceita": [
            "The report is due on May third.",
            "The report is due on the 3rd of May."
          ],
          "d": "Dica: data pede <b>on</b>: on May 3rd."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "There was four people at lunch.",
          "r": "There were four people at lunch.",
          "aceita": [],
          "d": "Dica: quatro pessoas é plural, então <b>there were</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/9ea68e2625b7/biz-rev-a1-05/img/live-capa.webp",
      "leg": "A till on the finance desk",
      "pede": "Look at the picture: a till on a desk. Write 2 or 3 sentences about a day last week: where you were, one price, and how many people were there.",
      "ph": "Last Friday I was at …",
      "ex": "Last Friday I was at a restaurant. Lunch was twenty-five dollars. There were three people."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "Where were you yesterday at ten in the morning?",
          "ph": "Yesterday at ten I was …",
          "ex": "Yesterday at ten I was at work."
        },
        {
          "q": "How much was your last lunch?",
          "ph": "My last lunch was … reais.",
          "ex": "My last lunch was thirty reais."
        }
      ]
    }
  }
};
