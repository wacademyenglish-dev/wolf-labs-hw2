/* IS THERE A PAYROLL TEAM? · SELLING SERVICES LESSON 4 · LIÇÃO DE CASA 2.0 (27/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: questions Is there / Are there / Do you / Does it + short answers; never “You use SAP?”, never “Yes, I use”. A1: português só nas dicas (d). Empresas fictícias. */
window.HW2 = {
  "id": "selling-services-is-there-a-payroll-team",
  "titulo": "Is There a Payroll Team?",
  "nivel": "A1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/2eb0183f1c47/selling-services-is-there-a-payroll-team/img/live-capa.webp",
  "alvo": "questions Is there / Are there / Do you / Does it + short answers; never “You use SAP?”, never “Yes, I use”",
  "abrir": "Before a call with a CFO: what is your first question?",
  "fecho": "The helper comes first: <b>Is there…? Are there…? Do you…? Does it…?</b> Short answers repeat it: <i>Yes, we do. No, it isn’t.</i>",
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
      "sub": "Mia asks a CFO six short questions. About one minute.",
      "img": "https://wolf-labs.pages.dev/p/2eb0183f1c47/selling-services-is-there-a-payroll-team/img/live-conversa.webp",
      "leg": "A phone call at the office at night",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Thank you for your time, Leo. Is there a payroll team at your company?"
        },
        {
          "quem": "leo",
          "t": "Yes, there is. There are six people."
        },
        {
          "quem": "mia",
          "t": "Do you use TOTVS for payroll?"
        },
        {
          "quem": "leo",
          "t": "No, we don’t. We use spreadsheets."
        },
        {
          "quem": "mia",
          "t": "Are there problems at the end of the month?"
        },
        {
          "quem": "leo",
          "t": "Yes, there are. The reports are late."
        },
        {
          "quem": "mia",
          "t": "Is the tax team in the same office?"
        },
        {
          "quem": "leo",
          "t": "No, it isn’t. It’s in Recife."
        },
        {
          "quem": "mia",
          "t": "Do you have a budget for next year?"
        },
        {
          "quem": "leo",
          "t": "Yes, we do."
        }
      ],
      "perguntas": [
        {
          "q": "How many people are there in the payroll team?",
          "op": [
            "Six",
            "Five",
            "Two"
          ],
          "a": 0,
          "por": "Yes, there is. There are six people."
        },
        {
          "q": "What do they use for payroll?",
          "op": [
            "Spreadsheets",
            "TOTVS",
            "SAP"
          ],
          "a": 0,
          "por": "No, we don’t. We use spreadsheets."
        },
        {
          "q": "Where is the tax team?",
          "op": [
            "In Recife",
            "In the same office",
            "In São Paulo"
          ],
          "a": 0,
          "por": "No, it isn’t. It’s in Recife."
        }
      ]
    },
    "out": {
      "sub": "Three sentences from your job. Hear it, then say it.",
      "frases": [
        {
          "t": "Is there a payroll team?",
          "img": "https://wolf-labs.pages.dev/p/2eb0183f1c47/selling-services-is-there-a-payroll-team/img/live-capa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "Are there many manual processes?",
          "img": "https://wolf-labs.pages.dev/p/2eb0183f1c47/selling-services-is-there-a-payroll-team/img/live-mesa.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "No, it isn’t. It’s in another office.",
          "img": "https://wolf-labs.pages.dev/p/2eb0183f1c47/selling-services-is-there-a-payroll-team/img/live-conversa.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Your own mistakes, fixed. Four quick ones.",
      "regra": "Questions: <b>Is there…? Are there…? Do you…? Does it…?</b> · short answers: <i>Yes, we do. No, it isn’t.</i>",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "Do you use Oracle for payroll?",
          "aceita": [],
          "d": "Dica: pergunta com verbo de ação começa com <b>Do</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "You use SAP?",
          "r": "Do you use SAP?",
          "aceita": [],
          "d": "Dica: falta o auxiliar: <b>Do</b> you use…?"
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "Have a payroll team?",
          "r": "Is there a payroll team?",
          "aceita": [],
          "d": "Dica: “tem…?” = <b>Is there</b>…?"
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "Do you use TOTVS? Yes, I use.",
          "r": "Do you use TOTVS? Yes, I do.",
          "aceita": [
            "Do you use TOTVS? Yes, we do."
          ],
          "d": "Dica: resposta curta repete o auxiliar: <i>Yes, I do.</i>"
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/2eb0183f1c47/selling-services-is-there-a-payroll-team/img/live-mesa.webp",
      "leg": "A phone call at the office at night",
      "pede": "Write 3 questions for a discovery call with a real or invented client.",
      "ph": "Is there …? Do you use …? Are there …?",
      "ex": "Is there a payroll team? Do you use SAP? Are there problems at the end of the month?"
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "Do you call clients in English?",
          "ph": "Yes, I do. / No, I don’t.",
          "ex": "No, I don’t. Not yet!"
        },
        {
          "q": "Is there a meeting room in your office?",
          "ph": "Yes, there is. / No, there isn’t.",
          "ex": "Yes, there is. There are two."
        }
      ]
    }
  }
};
