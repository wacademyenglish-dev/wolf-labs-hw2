/* THE FULL CALL · SELLING SERVICES LESSON 25 · LIÇÃO DE CASA 2.0 (27/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: questions with a helper (Do/Does/Is/Can/Will) + What, Who, How many, Where; never “You use SAP?”, “What system you use?”, “How many … has the company?”. A1: português só nas dicas (d). Empresas fictícias. */
window.HW2 = {
  "id": "selling-services-the-full-call",
  "titulo": "The Full Call",
  "nivel": "A1",
  "minutos": 10,
  "capa": "../img/live-capa.webp",
  "alvo": "questions with a helper (Do/Does/Is/Can/Will) + What, Who, How many, Where; never “You use SAP?”, “What system you use?”, “How many … has the company?”",
  "abrir": "A new client answers the phone. What are your first two questions?",
  "fecho": "Every question has a helper: <b>Do you…? Does she…? Is it…? Can we…? Will you…?</b> <i>What system do you use? How many employees do you have?</i>",
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
      "sub": "Mia, a seller, makes a discovery call to a new client. About one minute.",
      "img": "../img/live-conversa.webp",
      "leg": "A phone and a notebook with questions at night",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Hi Leo, this is Mia from Brightway. Is this a good time?"
        },
        {
          "quem": "leo",
          "t": "Yes, I have ten minutes."
        },
        {
          "quem": "mia",
          "t": "Thanks. How many employees do you have?"
        },
        {
          "quem": "leo",
          "t": "About six hundred, in two factories."
        },
        {
          "quem": "mia",
          "t": "What system do you use?"
        },
        {
          "quem": "leo",
          "t": "SAP. We use it for everything."
        },
        {
          "quem": "mia",
          "t": "Who does the payroll today?"
        },
        {
          "quem": "leo",
          "t": "An outside company, but they’re slow."
        },
        {
          "quem": "mia",
          "t": "I see. Can we meet next week?"
        },
        {
          "quem": "leo",
          "t": "Sure. Will you send me an invite?"
        }
      ],
      "perguntas": [
        {
          "q": "How many employees does the company have?",
          "op": [
            "About six hundred",
            "About sixty",
            "About six thousand"
          ],
          "a": 0,
          "por": "About six hundred, in two factories."
        },
        {
          "q": "Who does the payroll today?",
          "op": [
            "An outside company",
            "Leo’s team",
            "Mia’s company"
          ],
          "a": 0,
          "por": "An outside company, but they’re slow."
        },
        {
          "q": "What is the next step?",
          "op": [
            "A meeting next week",
            "A call tomorrow",
            "A proposal today"
          ],
          "a": 0,
          "por": "I see. Can we meet next week?"
        }
      ]
    },
    "out": {
      "sub": "Three sentences from your job. Hear it, then say it.",
      "frases": [
        {
          "t": "Is this a good time?",
          "img": "../img/live-capa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "What system do you use?",
          "img": "../img/live-mesa.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "Can we meet next week?",
          "img": "../img/live-conversa.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Your own mistakes, fixed. Four quick ones.",
      "regra": "A question needs a helper: <b>Do / Does / Is / Can / Will</b> · Wh- first: <i>What system do you use?</i>",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "How many employees do you have?",
          "aceita": [],
          "d": "Dica: How many + <b>do you have</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "You use SAP?",
          "r": "Do you use SAP?",
          "aceita": [],
          "d": "Dica: pergunta precisa de <b>Do</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "What system you use?",
          "r": "What system do you use?",
          "aceita": [],
          "d": "Dica: What + <b>do</b> + you + verbo."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "Where is located the office?",
          "r": "Where is the office?",
          "aceita": [
            "Where is the office located?"
          ],
          "d": "Dica: simples: <b>Where is the office?</b>"
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "../img/live-mesa.webp",
      "leg": "A phone and a notebook with questions at night",
      "pede": "Write four questions for a first call with a real client, and one question for the next step.",
      "ph": "How many …? What …? Who …? Does …? Can we …?",
      "ex": "How many employees do you have? What system do you use? Who signs the contracts? Does your CFO know about this call? Can we meet next week?"
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "Who do you call most at work?",
          "ph": "I call … most.",
          "ex": "I call the finance directors most."
        },
        {
          "q": "What question do clients ask you a lot?",
          "ph": "They ask: “…?”",
          "ex": "They ask: “How much is it?”"
        }
      ]
    }
  }
};
