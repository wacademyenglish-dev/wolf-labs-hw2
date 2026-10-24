/* THE PHONE SHOP · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Revisão A2: mistura das unidades da aula. A2: dicas em português só nas notas (d). Sem imagens. */
window.HW2 = {
  "id": "a2-review-the-phone-shop",
  "titulo": "The Phone Shop",
  "nivel": "A2",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/ff11dc413322/a2-review-the-phone-shop/img/live-capa.webp",
  "alvo": "Unit 5 review, comparing and describing: comparatives and superlatives (faster than, the cheapest), as ... as, bored x boring, adverbs of manner (well, quickly), good at + -ing; never more fast, never the most cheap, never works good",
  "abrir": "What is the best thing you have?",
  "fecho": "Compare: <b>faster than</b> · the top: <b>the cheapest</b> · equal: <b>as … as</b>. The thing: <b>boring</b>; the person: <b>bored</b>. How you do it: <b>well, quickly</b> (never <i>works good</i>). <b>Good at</b> + <b>-ing</b>.",
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
  "rate": "-14%",
  "rodadas": {
    "listen": {
      "sub": "Leo needs a new phone and Mia works in the shop. About 45 seconds.",
      "img": "https://wolf-labs.pages.dev/p/ff11dc413322/a2-review-the-phone-shop/img/live-capa.webp",
      "leg": "At the phone shop",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Welcome! What do you use your phone for?"
        },
        {
          "quem": "leo",
          "t": "I use it for playing games. My old phone is slower than my laptop."
        },
        {
          "quem": "mia",
          "t": "Then the Nova 5 is better. It's faster than the Nova 2."
        },
        {
          "quem": "leo",
          "t": "Is it as cheap as the Nova 2?"
        },
        {
          "quem": "mia",
          "t": "No, it's not as cheap, but it's the best phone in the shop."
        },
        {
          "quem": "leo",
          "t": "I'm bored of waiting for slow apps!"
        },
        {
          "quem": "mia",
          "t": "Waiting is boring! The Nova 5 works really quickly."
        },
        {
          "quem": "leo",
          "t": "I'm good at using technology, so I like the big screen."
        },
        {
          "quem": "mia",
          "t": "Great choice."
        },
        {
          "quem": "leo",
          "t": "I'll take it. Thank you!"
        }
      ],
      "perguntas": [
        {
          "q": "What does Leo use his phone for?",
          "op": [
            "Taking photos",
            "Calling his friends",
            "Playing games"
          ],
          "a": 2,
          "por": "I use it for playing games."
        },
        {
          "q": "Is the Nova 5 as cheap as the Nova 2?",
          "op": [
            "No, it isn't",
            "Yes, it is",
            "It is cheaper"
          ],
          "a": 0,
          "por": "No, it's not as cheap."
        },
        {
          "q": "Why is Leo bored?",
          "op": [
            "He waits for slow apps",
            "The shop is closed",
            "His laptop is old"
          ],
          "a": 0,
          "por": "I'm bored of waiting for slow apps!"
        }
      ]
    },
    "out": {
      "sub": "Three sentences from the shop. Hear it, then say it.",
      "frases": [
        {
          "t": "The Nova 5 is faster than the Nova 2.",
          "au": "audio/say1.mp3"
        },
        {
          "t": "It is the best phone in the shop.",
          "au": "audio/say2.mp3"
        },
        {
          "t": "The Nova 2 is not as fast as the Nova 5.",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "-er than, the -est, well, boring. Four quick ones.",
      "regra": "<b>faster than</b> (never <i>more fast</i>) · <b>the cheapest</b> · <b>works well</b> (not <i>good</i>) · the thing is <b>boring</b>, the person is <b>bored</b>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "Which phone is the cheapest in the shop?",
          "aceita": [],
          "d": "Dica: o mais barato da loja: <b>the cheapest</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: short adjective.",
          "mostra": "This phone is more fast than that one.",
          "r": "This phone is faster than that one.",
          "aceita": [],
          "d": "Dica: adjetivo curto + <b>-er than</b>: <b>faster</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: how it works.",
          "mostra": "It works good.",
          "r": "It works well.",
          "aceita": [],
          "d": "Dica: o jeito de fazer é advérbio: <b>well</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: -ed or -ing?",
          "mostra": "The movie was bored.",
          "r": "The movie was boring.",
          "aceita": [],
          "d": "Dica: a coisa é <b>boring</b>; a pessoa fica <b>bored</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "pede": "Write 2 or 3 sentences comparing two phones, or two things you have. Use <b>-er than</b>, <b>the -est</b> or <b>as … as</b>.",
      "ph": "My phone is …",
      "ex": "My phone is newer than my old one. It is not as big as a tablet, but it works very well."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What are you good at?",
          "ph": "I'm good at …",
          "ex": "I'm good at cooking and singing."
        },
        {
          "q": "What is the best thing you have?",
          "ph": "The best thing I have is …",
          "ex": "The best thing I have is my bike."
        }
      ]
    }
  }
};
