/* SALES WENT UP SHARPLY · LIÇÃO DE CASA 2.0 (24/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: tendências: rose / fell + advérbio + by / from-to. B1: nenhum português. */
window.HW2 = {
  "id": "sales-went-up-sharply",
  "titulo": "Sales Went Up Sharply",
  "nivel": "B1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/71ef0d175d4b/sales-went-up-sharply/img/live-rastro.webp",
  "alvo": "describing trends: rise / rose, fall / fell, go up / went up, increase + adverb (sharply, steadily, slightly); by + the difference, from ... to ...; never raised for rose, never increased in 12%, never rose sharp",
  "abrir": "What went up or down in your life this year? How fast?",
  "fecho": "The verb says which way: <b>rise → rose</b>, <b>fall → fell</b>, <b>go up → went up</b>. The adverb says how steep: <b>sharply · steadily · slightly</b>. <b>By</b> = how much it changed; <b>from … to …</b> = the old and new number: <i>Sales rose slightly, by two percent, from 9,880 to 10,070.</i> Never <i>sales raised</i>, never <i>increased in 12%</i>.",
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
  "rate": "-12%",
  "rodadas": {
    "listen": {
      "sub": "Mia and Leo before a board meeting at a bike factory. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/71ef0d175d4b/sales-went-up-sharply/img/live-painel.webp",
      "leg": "The board room before the meeting",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, the board meets at eleven. I have six charts and no captions."
        },
        {
          "quem": "leo",
          "t": "Start with sales. Rafe's slide says sales went up sharply. Look at the chart."
        },
        {
          "quem": "mia",
          "t": "The axis starts at nine thousand eight hundred eighty. From zero, the line is almost flat."
        },
        {
          "quem": "leo",
          "t": "So what is the honest caption?"
        },
        {
          "quem": "mia",
          "t": "Sales rose slightly, by two percent, from 9,880 to 10,070."
        },
        {
          "quem": "leo",
          "t": "Good. And costs?"
        },
        {
          "quem": "mia",
          "t": "Costs fell steadily from March, by ten percent."
        },
        {
          "quem": "leo",
          "t": "And the website visits?"
        },
        {
          "quem": "mia",
          "t": "Visits peaked at forty thousand in June, then leveled off at thirty-five thousand."
        },
        {
          "quem": "leo",
          "t": "Nice. Say peaked at a number, not in a number."
        },
        {
          "quem": "mia",
          "t": "Got it. Now I can walk in with a straight face."
        }
      ],
      "perguntas": [
        {
          "q": "What is wrong with Rafe's headline?",
          "op": [
            "The chart hides that the rise is small",
            "The sales fell last year",
            "The board is late"
          ],
          "a": 0,
          "por": "From zero, the line is almost flat."
        },
        {
          "q": "How did costs change?",
          "op": [
            "They fell steadily by ten percent",
            "They rose sharply",
            "They stayed the same"
          ],
          "a": 0,
          "por": "Costs fell steadily from March, by ten percent."
        },
        {
          "q": "Where did the website visits level off?",
          "op": [
            "At thirty-five thousand",
            "At forty thousand",
            "At ten thousand"
          ],
          "a": 0,
          "por": "Visits leveled off at thirty-five thousand."
        }
      ]
    },
    "out": {
      "sub": "Three captions for the charts. Hear it, then say it.",
      "frases": [
        {
          "t": "Sales rose slightly, by two percent, in spring.",
          "img": "https://wolf-labs.pages.dev/p/71ef0d175d4b/sales-went-up-sharply/img/live-sala.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "Costs fell steadily from March.",
          "img": "https://wolf-labs.pages.dev/p/71ef0d175d4b/sales-went-up-sharply/img/live-fabrica.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "Visits peaked at forty thousand in June.",
          "img": "https://wolf-labs.pages.dev/p/71ef0d175d4b/sales-went-up-sharply/img/live-rastro.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Verb, adverb, by. Four quick ones.",
      "regra": "<b>rose / fell / went up</b> + <b>sharply / steadily / slightly</b> · <b>by</b> = how much · <b>from … to …</b> · <b>peaked at</b>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "Costs fell steadily by ten percent from March.",
          "aceita": [],
          "d": "Hint: verb, then the adverb, then <b>by</b> + how much."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "Sales raised by two percent in spring.",
          "r": "Sales rose by two percent in spring.",
          "aceita": [
            "Sales went up by two percent in spring.",
            "Sales increased by two percent in spring."
          ],
          "d": "Hint: <i>raise</i> needs an object. Without one, use <b>rose</b>, <b>went up</b> or <b>increased</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "Visits rose sharp in June.",
          "r": "Visits rose sharply in June.",
          "aceita": [],
          "d": "Hint: the verb needs an adverb: <b>sharply</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "Sales increased in twelve percent.",
          "r": "Sales increased by twelve percent.",
          "aceita": [],
          "d": "Hint: how much it changed goes with <b>by</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/71ef0d175d4b/sales-went-up-sharply/img/live-painel.webp",
      "leg": "A dark board room with a blank screen",
      "pede": "Look at the picture: a board room with a blank screen. Write 2 or 3 sentences about trends in your life or work. Use <b>rose / fell / went up</b>, an adverb, and <b>by</b> or <b>from … to …</b>.",
      "ph": "My … rose … by …",
      "ex": "My phone bill rose slightly last year, by ten reais. My free time fell sharply in March. My savings went up steadily."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What went up in your life this year? How fast?",
          "ph": "My … rose … by …",
          "ex": "My rent rose sharply, by twenty percent."
        },
        {
          "q": "What went down recently? How much?",
          "ph": "My … fell … by …",
          "ex": "My stress fell slowly after my holiday."
        }
      ]
    }
  }
};
