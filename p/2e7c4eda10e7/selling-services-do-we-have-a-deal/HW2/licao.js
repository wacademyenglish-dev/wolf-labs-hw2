/* DO WE HAVE A DEAL? · SELLING SERVICES LESSON 15 · LIÇÃO DE CASA 2.0 (27/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: review 6–14 in a negotiation: What about…? / We can offer… / Do we have a deal? + going to, past, comparatives, can. A1: português só nas dicas (d). Empresas fictícias. */
window.HW2 = {
  "id": "selling-services-do-we-have-a-deal",
  "titulo": "Do We Have a Deal?",
  "nivel": "A1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/2e7c4eda10e7/selling-services-do-we-have-a-deal/img/live-capa.webp",
  "alvo": "review 6–14 in a negotiation: What about…? / We can offer… / Do we have a deal? + going to, past, comparatives, can",
  "abrir": "A client says: “The price is a problem.” What is your first sentence?",
  "fecho": "Negotiate in three moves: <b>What about…?</b> · <b>We can offer…</b> · <b>Do we have a deal?</b> And give a reason: <i>it’s cheaper than…, last year we saved…</i>",
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
      "sub": "Mia negotiates with a CFO. About one minute.",
      "img": "https://wolf-labs.pages.dev/p/2e7c4eda10e7/selling-services-do-we-have-a-deal/img/live-conversa.webp",
      "leg": "Two coffees on a meeting table at night",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, we like the proposal, but it’s expensive."
        },
        {
          "quem": "mia",
          "t": "I understand. What about a two-year contract? It’s 8% cheaper."
        },
        {
          "quem": "leo",
          "t": "Two years is long. Can you give us a discount?"
        },
        {
          "quem": "mia",
          "t": "Sorry, we can’t. But we can offer free training for your team."
        },
        {
          "quem": "leo",
          "t": "Free training… When are you going to start?"
        },
        {
          "quem": "mia",
          "t": "We’re going to start on April 1."
        },
        {
          "quem": "leo",
          "t": "Last year, a supplier was late. Are you going to be on time?"
        },
        {
          "quem": "mia",
          "t": "Yes. Last year we finished ten projects on time."
        },
        {
          "quem": "leo",
          "t": "OK. It’s a deal."
        }
      ],
      "perguntas": [
        {
          "q": "What is Mia’s first offer?",
          "op": [
            "A two-year contract, 8% cheaper",
            "A free month",
            "A 20% discount"
          ],
          "a": 0,
          "por": "What about a two-year contract? It’s 8% cheaper."
        },
        {
          "q": "What can Mia offer instead of a discount?",
          "op": [
            "Free training",
            "A free month",
            "A new ERP"
          ],
          "a": 0,
          "por": "But we can offer free training for your team."
        },
        {
          "q": "When are they going to start?",
          "op": [
            "On April 1",
            "On March 1",
            "Next year"
          ],
          "a": 0,
          "por": "We’re going to start on April 1."
        }
      ]
    },
    "out": {
      "sub": "Three sentences from your job. Hear it, then say it.",
      "frases": [
        {
          "t": "What about a two-year contract?",
          "img": "https://wolf-labs.pages.dev/p/2e7c4eda10e7/selling-services-do-we-have-a-deal/img/live-capa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "We can offer a free first month.",
          "img": "https://wolf-labs.pages.dev/p/2e7c4eda10e7/selling-services-do-we-have-a-deal/img/live-mesa.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "Do we have a deal?",
          "img": "https://wolf-labs.pages.dev/p/2e7c4eda10e7/selling-services-do-we-have-a-deal/img/live-conversa.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Your own mistakes, fixed. Four quick ones.",
      "regra": "Negotiate: <b>What about…? · We can offer… · Do we have a deal?</b> · plan: <i>going to</i> · past: <i>-ed</i> · <i>cheaper than</i> · <i>can + verb</i>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "We can offer a free first month.",
          "aceita": [],
          "d": "Dica: <b>can</b> + verbo direto, sem “to”."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "We go to start on March 1.",
          "r": "We’re going to start on March 1.",
          "aceita": [
            "We are going to start on March 1."
          ],
          "d": "Dica: plano = <b>we’re going to</b> start."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "Can you to sign the contract?",
          "r": "Can you sign the contract?",
          "aceita": [],
          "d": "Dica: depois de <b>can</b>, sem “to”."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "Our service is more cheap.",
          "r": "Our service is cheaper.",
          "aceita": [],
          "d": "Dica: palavra curta: <b>cheaper</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/2e7c4eda10e7/selling-services-do-we-have-a-deal/img/live-mesa.webp",
      "leg": "Two coffees on a meeting table at night",
      "pede": "Write a short closing e-mail (3 or 4 sentences): thank you, the start date, the offer, the next step.",
      "ph": "Hi …, Thank you for … We’re going to start on … Can you sign …?",
      "ex": "Hi Karen, thank you for the meeting. We’re going to start on March 1. The first month is free. Can you sign the contract by Friday?"
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "Do clients ask you for discounts?",
          "ph": "Yes, they do. / No, they don’t.",
          "ex": "Yes, they do. Every client asks for a discount!"
        },
        {
          "q": "What was the best lesson of this course for you?",
          "ph": "The best lesson was … because …",
          "ex": "The best lesson was the phone call because I use it every day."
        }
      ]
    }
  }
};
