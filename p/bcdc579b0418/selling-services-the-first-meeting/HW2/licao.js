/* THE FIRST MEETING · SELLING SERVICES LESSON 5 · LIÇÃO DE CASA 2.0 (27/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: review: be + isn’t, there is / there are, don’t + action, questions; the follow-up e-mail. A1: português só nas dicas (d). Empresas fictícias. */
window.HW2 = {
  "id": "selling-services-the-first-meeting",
  "titulo": "The First Meeting",
  "nivel": "A1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/bcdc579b0418/selling-services-the-first-meeting/img/live-capa.webp",
  "alvo": "review: be + isn’t, there is / there are, don’t + action, questions; the follow-up e-mail",
  "abrir": "After a first meeting, what do you write in the e-mail?",
  "fecho": "A meeting in four moves: <b>We’re … / We aren’t …</b> · <b>There are …</b> · <b>We don’t …</b> · <b>Is Friday good for you?</b>",
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
      "sub": "Mia meets a finance director. About one minute.",
      "img": "https://wolf-labs.pages.dev/p/bcdc579b0418/selling-services-the-first-meeting/img/live-conversa.webp",
      "leg": "A meeting table at night",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Welcome, Mia. So, what is your company?"
        },
        {
          "quem": "mia",
          "t": "We’re a BPO and BTO company. We do payroll and tax."
        },
        {
          "quem": "leo",
          "t": "Do you sell SAP?"
        },
        {
          "quem": "mia",
          "t": "No, we don’t. We aren’t a reseller. How many employees are there here?"
        },
        {
          "quem": "leo",
          "t": "There are three thousand."
        },
        {
          "quem": "mia",
          "t": "Is there a shared service center?"
        },
        {
          "quem": "leo",
          "t": "No, there isn’t. It isn’t efficient."
        },
        {
          "quem": "mia",
          "t": "I understand. Is Friday good for a second meeting?"
        },
        {
          "quem": "leo",
          "t": "Yes, it is. Send me an e-mail."
        }
      ],
      "perguntas": [
        {
          "q": "Does Mia’s company sell SAP?",
          "op": [
            "No, it doesn’t.",
            "Yes, it does.",
            "Only TOTVS."
          ],
          "a": 0,
          "por": "No, we don’t. We aren’t a reseller."
        },
        {
          "q": "How many employees are there?",
          "op": [
            "Three thousand",
            "Three hundred",
            "Thirty"
          ],
          "a": 0,
          "por": "There are three thousand."
        },
        {
          "q": "What is the next step?",
          "op": [
            "A second meeting on Friday",
            "A proposal today",
            "A factory visit"
          ],
          "a": 0,
          "por": "Is Friday good for a second meeting? Yes, it is."
        }
      ]
    },
    "out": {
      "sub": "Three sentences from your job. Hear it, then say it.",
      "frases": [
        {
          "t": "Thank you for the meeting today.",
          "img": "https://wolf-labs.pages.dev/p/bcdc579b0418/selling-services-the-first-meeting/img/live-capa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "There are a lot of manual processes, and it isn’t efficient.",
          "img": "https://wolf-labs.pages.dev/p/bcdc579b0418/selling-services-the-first-meeting/img/live-mesa.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "Is Friday good for a second meeting?",
          "img": "https://wolf-labs.pages.dev/p/bcdc579b0418/selling-services-the-first-meeting/img/live-conversa.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Your own mistakes, fixed. Four quick ones.",
      "regra": "be → <b>isn’t</b> · action → <b>don’t</b> · two or more → <b>there are</b> · question → <b>Is … ?</b>",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "Is Friday good for a second meeting?",
          "aceita": [],
          "d": "Dica: pergunta com be: <b>Is</b> + Friday …?"
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "There is four thousand employees.",
          "r": "There are four thousand employees.",
          "aceita": [],
          "d": "Dica: plural → <b>there are</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "It don’t is efficient.",
          "r": "It isn’t efficient.",
          "aceita": [
            "It is not efficient.",
            "It’s not efficient."
          ],
          "d": "Dica: be → <b>isn’t</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "We aren’t sell SAP.",
          "r": "We don’t sell SAP.",
          "aceita": [
            "We do not sell SAP."
          ],
          "d": "Dica: sell é ação → <b>don’t</b> sell."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/bcdc579b0418/selling-services-the-first-meeting/img/live-mesa.webp",
      "leg": "A meeting table at night",
      "pede": "Write a short follow-up e-mail (3 or 4 sentences): thank you, one fact about the client, the next step.",
      "ph": "Hi …, Thank you for … There are … Is … good for …?",
      "ex": "Hi Daniel, thank you for the meeting today. There are a lot of manual processes in payroll. Is Friday good for a second meeting?"
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "Are you nervous before a first meeting?",
          "ph": "Yes, I am. / No, I’m not.",
          "ex": "Yes, I am. A little!"
        },
        {
          "q": "What do you prefer: a call or an e-mail after a meeting?",
          "ph": "I prefer … because …",
          "ex": "I prefer an e-mail because it isn’t long."
        }
      ]
    }
  }
};
