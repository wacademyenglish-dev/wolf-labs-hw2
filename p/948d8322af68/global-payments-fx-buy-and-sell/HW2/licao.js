/* FX: BUY AND SELL · GLOBAL PAYMENTS ENGLISH LESSON 9 · LIÇÃO DE CASA 2.0 (03/11/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: rates with point + buy / sell + How much …? + higher / lower. A1 com cara de A0: português só nas dicas (d). Bancos e empresas fictícios. */
window.HW2 = {
  "id": "global-payments-fx-buy-and-sell",
  "titulo": "FX: Buy and Sell",
  "nivel": "A1",
  "minutos": 12,
  "capa": "../img/live-capa.webp",
  "alvo": "rates with point + buy / sell + How much …? + higher / lower",
  "abrir": "A client asks: “How much is the dollar today?” The rate is 5.4380. What do you say?",
  "fecho": "Decimal = <b>point</b>, then digit by digit. The client <b>buys</b> → we <b>sell</b>. Money: <b>How much</b>. Compare: <b>higher / lower</b>.",
  "elenco": {
    "tom": {
      "nome": "Tom",
      "voz": "en-US-BrianNeural",
      "cor": "#86c9f0"
    },
    "ana": {
      "nome": "Ana",
      "voz": "en-US-AvaNeural",
      "cor": "#b9a6e8"
    }
  },
  "rate": "-15%",
  "rodadas": {
    "listen": {
      "sub": "Tom asks for a euro quote. About 30 seconds.",
      "img": "../img/live-conversa.webp",
      "leg": "A dark trading desk",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "tom",
          "t": "Hi Ana. How much is the euro today?"
        },
        {
          "quem": "ana",
          "t": "We sell at five point nine three one zero."
        },
        {
          "quem": "tom",
          "t": "And for the dollar?"
        },
        {
          "quem": "ana",
          "t": "We sell at five point four three eight zero."
        },
        {
          "quem": "tom",
          "t": "So the euro is higher."
        },
        {
          "quem": "ana",
          "t": "Yes. The euro is more expensive."
        }
      ],
      "perguntas": [
        {
          "q": "What’s the sell rate for the euro?",
          "op": [
            "5.9310",
            "5.4380",
            "5.8950"
          ],
          "a": 0,
          "por": "We sell at five point nine three one zero."
        },
        {
          "q": "Which is higher?",
          "op": [
            "The euro",
            "The dollar",
            "They are the same."
          ],
          "a": 0,
          "por": "So the euro is higher."
        },
        {
          "q": "Who sells the currency?",
          "op": [
            "The bank",
            "Tom",
            "Nobody"
          ],
          "a": 0,
          "por": "We sell at …"
        }
      ]
    },
    "out": {
      "sub": "Three sentences from your job. Hear it, then say it three times.",
      "frases": [
        {
          "t": "The rate is five point four three eight zero.",
          "img": "../img/live-capa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "The client buys dollars. We sell at five point four three eight zero.",
          "img": "../img/live-mesa.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "How much is the euro today?",
          "img": "../img/live-conversa.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Your own mistakes, fixed. Four quick ones.",
      "regra": "Decimal = <b>point</b> + digit by digit · money: <b>How much</b> · compare: <b>higher / lower</b>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "How much is the dollar today?",
          "aceita": [],
          "d": "Dica: dinheiro → <b>How much</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "The rate is five comma four.",
          "r": "The rate is five point four.",
          "aceita": [],
          "d": "Dica: decimal em inglês = <b>point</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "How many is the euro?",
          "r": "How much is the euro?",
          "aceita": [],
          "d": "Dica: dinheiro → <b>How much</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "The sell rate is more high.",
          "r": "The sell rate is higher.",
          "aceita": [],
          "d": "Dica: high → <b>higher</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "../img/live-mesa.webp",
      "leg": "Gold and silver coins under a lamp",
      "pede": "Write a short quote to a client: the rate and the total.",
      "ph": "We sell … at … The total is …",
      "ex": "We sell dollars at 5.4380. The total is 135,950 reais."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "How much is the dollar today, more or less?",
          "ph": "It’s about …",
          "ex": "It’s about five point four."
        },
        {
          "q": "Do you buy dollars for travel?",
          "ph": "Yes, I do. / No, I don’t.",
          "ex": "Yes, I do. I use a card."
        }
      ]
    }
  }
};
