/* LET'S MAKE A DEAL · LIÇÃO DE CASA 2.0 (24/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: ofertas condicionais para negociar (If you could..., I'd...; Would you accept...?). B2: nenhum português na lição. */
window.HW2 = {
  "id": "lets-make-a-deal",
  "titulo": "Let's Make a Deal",
  "nivel": "B2",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/1c41c0036e1b/lets-make-a-deal/img/live-capa.webp",
  "alvo": "conditional offers to negotiate: If you could lower it, I'd + verb; I'd be willing / happy to + verb; Would you accept + number / throw in + noun; never 'I will buy' after 'if you could', 'willing pay', 'accept to 450'",
  "abrir": "Do you negotiate prices? When do you do it, and when not?",
  "fecho": "An offer uses the conditional: <b>If you could lower it, I'd buy two.</b> (if + past or could, then I'd + verb). <b>I'd be willing to</b> / <b>I'd be happy to</b> + verb. Ask with <b>Would you</b> + verb: <i>Would you accept three hundred? Would you throw in two cups?</i> No <i>to</i> after <b>accept</b>.",
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
      "sub": "Mia tells Leo how she bought a tea set in Hong Kong. A new scene, about one minute.",
      "leg": "A night market under red lanterns",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, what is that beautiful tea set?"
        },
        {
          "quem": "mia",
          "t": "It's from a stall on Temple Street, in Hong Kong. The seller asked for eight hundred dollars."
        },
        {
          "quem": "leo",
          "t": "Eight hundred? What did you say?"
        },
        {
          "quem": "mia",
          "t": "I smiled and said, Would you accept five hundred? She laughed."
        },
        {
          "quem": "leo",
          "t": "And then?"
        },
        {
          "quem": "mia",
          "t": "She said six hundred and fifty. So I said, If you could lower it to five hundred and fifty, I'd be willing to pay cash."
        },
        {
          "quem": "leo",
          "t": "Smart. Did she agree?"
        },
        {
          "quem": "mia",
          "t": "Not yet. She said, final price, take it or leave it. So I walked away, politely."
        },
        {
          "quem": "leo",
          "t": "And she called you back?"
        },
        {
          "quem": "mia",
          "t": "Yes! She said, OK, OK, five fifty. Then I asked, Would you throw in two more cups? And she did. Deal!"
        }
      ],
      "perguntas": [
        {
          "q": "What was the asking price?",
          "op": [
            "Eight hundred dollars",
            "Five hundred dollars",
            "Six hundred and fifty dollars"
          ],
          "a": 0,
          "por": "The seller asked for eight hundred dollars."
        },
        {
          "q": "What did Mia do when she heard take it or leave it?",
          "op": [
            "She paid at once",
            "She walked away, politely",
            "She got angry"
          ],
          "a": 1,
          "por": "So I walked away, politely."
        },
        {
          "q": "What did Mia get for free?",
          "op": [
            "A gift box",
            "A discount card",
            "Two more cups"
          ],
          "a": 2,
          "por": "Would you throw in two more cups? And she did."
        }
      ],
      "audio": "audio/listen.mp3",
      "img": "https://wolf-labs.pages.dev/p/1c41c0036e1b/lets-make-a-deal/img/live-capa.webp"
    },
    "out": {
      "sub": "Three sentences from the market. Hear it, then say it.",
      "frases": [
        {
          "t": "If you could lower it to five hundred, I'd take two.",
          "au": "audio/say1.mp3",
          "img": "https://wolf-labs.pages.dev/p/1c41c0036e1b/lets-make-a-deal/img/live-capa.webp"
        },
        {
          "t": "I'd be willing to pay cash.",
          "au": "audio/say2.mp3",
          "img": "https://wolf-labs.pages.dev/p/1c41c0036e1b/lets-make-a-deal/img/live-capa.webp"
        },
        {
          "t": "Would you throw in two more cups?",
          "au": "audio/say3.mp3",
          "img": "https://wolf-labs.pages.dev/p/1c41c0036e1b/lets-make-a-deal/img/live-capa.webp"
        }
      ]
    },
    "focus": {
      "sub": "If you could..., I'd... Four quick ones.",
      "regra": "<b>If you could…, I'd</b> + verb · <b>I'd be willing to</b> + verb · <b>Would you accept</b> + number · <b>Would you throw in</b> + noun.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "Would you throw in two more cups?",
          "aceita": [],
          "d": "Hint: the polite question starts with <b>Would you</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "If you could lower it, I will buy two.",
          "r": "If you could lower it, I'd buy two.",
          "aceita": [
            "If you could lower it, I would buy two."
          ],
          "d": "Hint: <b>if you could</b> pairs with <b>I'd</b> (would), not <i>will</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is missing.",
          "mostra": "I'd be willing pay cash.",
          "r": "I'd be willing to pay cash.",
          "aceita": [],
          "d": "Hint: <b>willing to</b> + verb."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is too many.",
          "mostra": "Would you accept to three hundred?",
          "r": "Would you accept three hundred?",
          "aceita": [],
          "d": "Hint: <b>accept</b> + the number, no <i>to</i>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "pede": "Look at the picture: a night market under red lanterns. Imagine you want something there. Write 2 or 3 offers. Use <b>If you could…, I'd…</b> or <b>Would you…?</b>",
      "ph": "If you could …, I'd …",
      "ex": "If you could lower it to three hundred, I'd buy two. I'd be willing to pay cash. Would you throw in a bag?",
      "img": "https://wolf-labs.pages.dev/p/1c41c0036e1b/lets-make-a-deal/img/live-capa.webp",
      "leg": "Red lanterns at a night market"
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "Think of something you bought or sold recently (a phone, a bike, a car). What offer would you make?",
          "ph": "If you could …, I'd …",
          "ex": "If you could lower it to four hundred, I'd buy it today."
        },
        {
          "q": "When would you walk away from a deal?",
          "ph": "I'd walk away if …",
          "ex": "I'd walk away if the seller refused to move at all."
        }
      ]
    }
  }
};
