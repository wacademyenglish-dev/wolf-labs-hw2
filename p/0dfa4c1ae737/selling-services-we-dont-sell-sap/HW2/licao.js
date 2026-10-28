/* WE DO PAYROLL. WE DON’T SELL SAP. · SELLING SERVICES LESSON 3 · LIÇÃO DE CASA 2.0 (27/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: don’t / doesn’t + action verb × isn’t / aren’t with be; never “it don’t is”, never “we aren’t sell”. A1: português só nas dicas (d). Empresas fictícias. */
window.HW2 = {
  "id": "selling-services-we-dont-sell-sap",
  "titulo": "We Do Payroll. We Don’t Sell SAP.",
  "nivel": "A1",
  "minutos": 10,
  "capa": "../img/live-capa.webp",
  "alvo": "don’t / doesn’t + action verb × isn’t / aren’t with be; never “it don’t is”, never “we aren’t sell”",
  "abrir": "A client asks: “Do you sell software?” What is your answer?",
  "fecho": "The test: an <b>action</b>? → <i>don’t / doesn’t</i> + verb. No action (be)? → <i>isn’t / aren’t</i>.",
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
      "sub": "A client asks Mia some direct questions. About one minute.",
      "img": "../img/live-conversa.webp",
      "leg": "An office at night with a phone on the desk",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Hi, Mia. Quick question: do you sell SAP?"
        },
        {
          "quem": "mia",
          "t": "No, we don’t. We aren’t a reseller. We connect SAP with your payroll."
        },
        {
          "quem": "leo",
          "t": "Is it expensive?"
        },
        {
          "quem": "mia",
          "t": "It isn’t cheap, but it isn’t per hour. It’s a monthly fee."
        },
        {
          "quem": "leo",
          "t": "Do you work with small companies?"
        },
        {
          "quem": "mia",
          "t": "No, we don’t. Our clients are mid-size and large."
        },
        {
          "quem": "leo",
          "t": "Our CFO doesn’t like long meetings."
        },
        {
          "quem": "mia",
          "t": "No problem. Our first meeting isn’t long. It’s thirty minutes."
        }
      ],
      "perguntas": [
        {
          "q": "Does Mia’s company sell SAP?",
          "op": [
            "No. It isn’t a reseller.",
            "Yes, it does.",
            "Only Oracle."
          ],
          "a": 0,
          "por": "No, we don’t. We aren’t a reseller."
        },
        {
          "q": "How is the price?",
          "op": [
            "A monthly fee",
            "Per hour",
            "It’s free"
          ],
          "a": 0,
          "por": "It isn’t per hour. It’s a monthly fee."
        },
        {
          "q": "What doesn’t the CFO like?",
          "op": [
            "Long meetings",
            "E-mails",
            "Small companies"
          ],
          "a": 0,
          "por": "Our CFO doesn’t like long meetings."
        }
      ]
    },
    "out": {
      "sub": "Three sentences from your job. Hear it, then say it.",
      "frases": [
        {
          "t": "We don’t sell software. It isn’t our business.",
          "img": "../img/live-capa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "The price isn’t per hour.",
          "img": "../img/live-mesa.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "There are three ERPs: SAP, Oracle and TOTVS.",
          "img": "../img/live-conversa.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Your own mistakes, fixed. Four quick ones.",
      "regra": "Action → <b>don’t / doesn’t</b> + verb · be → <b>isn’t / aren’t</b>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "We don’t sell software licenses.",
          "aceita": [],
          "d": "Dica: sell é ação → <b>don’t</b> sell."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "We aren’t sell SAP.",
          "r": "We don’t sell SAP.",
          "aceita": [
            "We do not sell SAP."
          ],
          "d": "Dica: <b>sell</b> é ação → <i>don’t sell</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "It don’t is expensive.",
          "r": "It isn’t expensive.",
          "aceita": [
            "It is not expensive.",
            "It’s not expensive."
          ],
          "d": "Dica: expensive descreve (be) → <i>isn’t</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "The client don’t use Oracle.",
          "r": "The client doesn’t use Oracle.",
          "aceita": [
            "The client does not use Oracle."
          ],
          "d": "Dica: the client = he/she/it → <i>doesn’t</i>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "../img/live-mesa.webp",
      "leg": "A meeting table at night",
      "pede": "Write your pitch in 2 or 3 sentences: what your company does, what it doesn’t do, and what it isn’t.",
      "ph": "We do … We don’t … We aren’t …",
      "ex": "We do payroll and tax. We don’t sell software. We aren’t a reseller."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What do you do on Monday mornings?",
          "ph": "I usually … I don’t …",
          "ex": "I usually call clients. I don’t have meetings."
        },
        {
          "q": "Is your job easy?",
          "ph": "Yes, it is. / No, it isn’t.",
          "ex": "No, it isn’t! But I like it."
        }
      ]
    }
  }
};
