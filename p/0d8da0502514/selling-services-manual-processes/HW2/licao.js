/* THERE ARE A LOT OF MANUAL PROCESSES · SELLING SERVICES LESSON 2 · LIÇÃO DE CASA 2.0 (27/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: there is / there are + a / some / many / a lot of; never “there is three”, never “have” for “tem”. A1: português só nas dicas (d). Empresas fictícias. */
window.HW2 = {
  "id": "selling-services-manual-processes",
  "titulo": "There Are a Lot of Manual Processes",
  "nivel": "A1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/0d8da0502514/selling-services-manual-processes/img/live-capa.webp",
  "alvo": "there is / there are + a / some / many / a lot of; never “there is three”, never “have” for “tem”",
  "abrir": "Think of a client. How many employees are there?",
  "fecho": "One thing: <b>there is</b>. Two or more: <b>there are</b>. “Tem” is <b>there is / there are</b>, not “have”.",
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
      "sub": "Mia tells Leo about a new client. About one minute.",
      "img": "https://wolf-labs.pages.dev/p/0d8da0502514/selling-services-manual-processes/img/live-conversa.webp",
      "leg": "A spreadsheet on a laptop at night",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "So, Mia, tell me about Delta Foods."
        },
        {
          "quem": "mia",
          "t": "It’s a food company. There are two factories and nine hundred employees."
        },
        {
          "quem": "leo",
          "t": "Is there an IT team?"
        },
        {
          "quem": "mia",
          "t": "Yes, there is, but it’s small. There are three people."
        },
        {
          "quem": "leo",
          "t": "And how many ERPs are there?"
        },
        {
          "quem": "mia",
          "t": "There are two, and they aren’t connected."
        },
        {
          "quem": "leo",
          "t": "Are there a lot of spreadsheets?"
        },
        {
          "quem": "mia",
          "t": "Yes, there are. There’s a lot of manual work in payroll."
        },
        {
          "quem": "leo",
          "t": "Great. That’s a real need."
        }
      ],
      "perguntas": [
        {
          "q": "How many factories are there?",
          "op": [
            "Two",
            "Three",
            "Nine"
          ],
          "a": 0,
          "por": "There are two factories and nine hundred employees."
        },
        {
          "q": "How many people are there in the IT team?",
          "op": [
            "Three",
            "Two",
            "Nine hundred"
          ],
          "a": 0,
          "por": "There are three people."
        },
        {
          "q": "Where is there a lot of manual work?",
          "op": [
            "In payroll",
            "In IT",
            "In the factories"
          ],
          "a": 0,
          "por": "There’s a lot of manual work in payroll."
        }
      ]
    },
    "out": {
      "sub": "Three sentences from your job. Hear it, then say it.",
      "frases": [
        {
          "t": "There are two ERPs in the company.",
          "img": "https://wolf-labs.pages.dev/p/0d8da0502514/selling-services-manual-processes/img/live-capa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "There are a lot of manual processes.",
          "img": "https://wolf-labs.pages.dev/p/0d8da0502514/selling-services-manual-processes/img/live-mesa.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "There isn’t a payroll system.",
          "img": "https://wolf-labs.pages.dev/p/0d8da0502514/selling-services-manual-processes/img/live-conversa.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Your own mistakes, fixed. Four quick ones.",
      "regra": "One → <b>there is</b> · two or more → <b>there are</b> · “tem” = there is / there are (not “have”).",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "There are three factories in Brazil.",
          "aceita": [],
          "d": "Dica: três fábricas = plural: there <b>are</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "There is three systems.",
          "r": "There are three systems.",
          "aceita": [],
          "d": "Dica: three = plural → <b>there are</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "Have two ERPs in the company.",
          "r": "There are two ERPs in the company.",
          "aceita": [],
          "d": "Dica: “tem” (existe) = <b>there are</b>, não “have”."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "There is many problems.",
          "r": "There are many problems.",
          "aceita": [],
          "d": "Dica: many + plural → <b>there are</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/0d8da0502514/selling-services-manual-processes/img/live-mesa.webp",
      "leg": "A spreadsheet on a laptop at night",
      "pede": "Write 2 or 3 sentences about a client company: employees, systems, one problem. No secret numbers.",
      "ph": "There are … There is … There isn’t …",
      "ex": "There are 3,000 employees. There is one ERP. There are a lot of spreadsheets."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "How many people are there in your team?",
          "ph": "There are …",
          "ex": "There are eight people in my team."
        },
        {
          "q": "Is there a big client on your list?",
          "ph": "Yes, there is. / No, there isn’t.",
          "ex": "Yes, there is. It’s a steel company."
        }
      ]
    }
  }
};
