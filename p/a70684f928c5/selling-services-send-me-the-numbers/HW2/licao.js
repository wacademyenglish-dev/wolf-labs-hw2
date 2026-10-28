/* CAN YOU SEND ME THE NUMBERS? · SELLING SERVICES LESSON 7 · LIÇÃO DE CASA 2.0 (27/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: can / can’t + verb, Can you…?, Could you…, please?; never “can to”, never “You can send me?”. A1: português só nas dicas (d). Empresas fictícias. */
window.HW2 = {
  "id": "selling-services-send-me-the-numbers",
  "titulo": "Can You Send Me the Numbers?",
  "nivel": "A1",
  "minutos": 10,
  "capa": "../img/live-capa.webp",
  "alvo": "can / can’t + verb, Can you…?, Could you…, please?; never “can to”, never “You can send me?”",
  "abrir": "You need the headcount from a client. How do you ask?",
  "fecho": "<b>can / can’t</b> + verb (no “to”). Question: <b>Can you…?</b> Polite request: <b>Could you…, please?</b>",
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
      "sub": "Mia asks a client for numbers for the proposal. About one minute.",
      "img": "../img/live-conversa.webp",
      "leg": "An open laptop with an e-mail draft at night",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Hi, Leo. For the proposal, can you send me the headcount?"
        },
        {
          "quem": "leo",
          "t": "Yes, I can. It’s about 900 people."
        },
        {
          "quem": "mia",
          "t": "Great. Could you send me the payroll report, please?"
        },
        {
          "quem": "leo",
          "t": "Sorry, I can’t. It’s confidential."
        },
        {
          "quem": "mia",
          "t": "No problem. Can you send me the number of invoices?"
        },
        {
          "quem": "leo",
          "t": "Yes. Our team can export it from TOTVS."
        },
        {
          "quem": "mia",
          "t": "Thank you. Can I call you on Thursday?"
        },
        {
          "quem": "leo",
          "t": "I can’t talk on Thursday. Friday morning is better."
        },
        {
          "quem": "mia",
          "t": "Perfect. Friday morning, then."
        }
      ],
      "perguntas": [
        {
          "q": "How many people are there in the company?",
          "op": [
            "About 900",
            "About 9,000",
            "About 90"
          ],
          "a": 0,
          "por": "It’s about 900 people."
        },
        {
          "q": "Why can’t Leo send the payroll report?",
          "op": [
            "It’s confidential.",
            "It isn’t ready.",
            "He doesn’t have it."
          ],
          "a": 0,
          "por": "Sorry, I can’t. It’s confidential."
        },
        {
          "q": "When can they talk?",
          "op": [
            "Friday morning",
            "Thursday",
            "Monday"
          ],
          "a": 0,
          "por": "Friday morning is better."
        }
      ]
    },
    "out": {
      "sub": "Three sentences from your job. Hear it, then say it.",
      "frases": [
        {
          "t": "Could you send me the headcount, please?",
          "img": "../img/live-capa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "We can sign an NDA first.",
          "img": "../img/live-mesa.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "I can’t meet on Monday.",
          "img": "../img/live-conversa.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Your own mistakes, fixed. Four quick ones.",
      "regra": "<b>can / can’t</b> + verb (no <b>to</b>) · question: <b>Can you…?</b> · polite: <b>Could you…, please?</b>",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "Could you send me the report, please?",
          "aceita": [],
          "d": "Dica: pedido educado: <b>Could you</b> + verbo …, please?"
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "We can to send the numbers.",
          "r": "We can send the numbers.",
          "aceita": [],
          "d": "Dica: depois de can não vem <b>to</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "You can send me the headcount?",
          "r": "Can you send me the headcount?",
          "aceita": [],
          "d": "Dica: na pergunta, <b>Can</b> vem primeiro."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "I can’t to meet today.",
          "r": "I can’t meet today.",
          "aceita": [
            "I cannot meet today.",
            "I can not meet today."
          ],
          "d": "Dica: can’t + verbo, sem <b>to</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "../img/live-mesa.webp",
      "leg": "An open laptop with an e-mail draft at night",
      "pede": "Write a short e-mail (3 or 4 sentences) to ask a client for two numbers. Be polite.",
      "ph": "Hi …, Could you send me …, please? Can you …? Can I call you on …?",
      "ex": "Hi Karen, could you send me the headcount, please? Can you send me the number of invoices too? Can I call you on Tuesday?"
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "Can you understand English on the phone?",
          "ph": "Yes, I can. / No, I can’t. Not yet.",
          "ex": "I can, a little!"
        },
        {
          "q": "What can you do in Excel?",
          "ph": "I can … I can’t …",
          "ex": "I can make tables. I can’t make macros."
        }
      ]
    }
  }
};
