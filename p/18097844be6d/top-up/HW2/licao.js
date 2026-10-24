/* TOP UP · LIÇÃO DE CASA 2.0 (24/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: a lot of / a few / a little + How much / How many. A2: dicas em português só nas notas (d). */
window.HW2 = {
  "id": "top-up",
  "titulo": "Top Up",
  "nivel": "A2",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/18097844be6d/top-up/img/live-capa.webp",
  "alvo": "quantity: a lot of / a few / a little / not much / not many + How much ...? (data, money) / How many ...? (days, calls); never 'How many data', 'I use much data', 'a few money'",
  "abrir": "What do you use your phone for when you travel?",
  "fecho": "<b>How much</b> + uncountable (<i>data, money</i>) · <b>How many</b> + countable (<i>days, calls</i>). Yes-sentences: <b>a lot of</b>, <b>a few</b> (calls), <b>a little</b> (money). Never <i>How many data</i>, never <i>I use much data</i>.",
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
      "sub": "Mia buys a SIM card, Leo works at the shop. A new scene, about 45 seconds.",
      "img": "https://wolf-labs.pages.dev/p/18097844be6d/top-up/img/live-capa.webp",
      "leg": "Kuala Lumpur at night",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Welcome! How can I help you?"
        },
        {
          "quem": "mia",
          "t": "Hi. I need a SIM card for ten days."
        },
        {
          "quem": "leo",
          "t": "How much data do you need?"
        },
        {
          "quem": "mia",
          "t": "I use a lot of data for maps and videos. But I make only a few calls."
        },
        {
          "quem": "leo",
          "t": "Then this plan is good. It has twenty gigabytes."
        },
        {
          "quem": "mia",
          "t": "How many days does it have?"
        },
        {
          "quem": "leo",
          "t": "Thirty days. It's fifteen ringgit. That's not much."
        },
        {
          "quem": "mia",
          "t": "Great, I'll take it. Do you need my passport?"
        },
        {
          "quem": "leo",
          "t": "Yes, please. And a few minutes to set it up."
        }
      ],
      "perguntas": [
        {
          "q": "What does Mia use a lot of data for?",
          "op": [
            "Maps and videos",
            "Calls",
            "E-mail"
          ],
          "a": 0,
          "por": "I use a lot of data for maps and videos."
        },
        {
          "q": "How many calls does Mia make?",
          "op": [
            "Only a few",
            "A lot",
            "None"
          ],
          "a": 0,
          "por": "I make only a few calls."
        },
        {
          "q": "What does Leo need from Mia?",
          "op": [
            "Her passport",
            "Her phone number",
            "Her hotel key"
          ],
          "a": 0,
          "por": "Do you need my passport? Yes, please."
        }
      ]
    },
    "out": {
      "sub": "Three sentences from the shop. Hear it, then say it.",
      "frases": [
        {
          "t": "I use a lot of data for maps.",
          "img": "https://wolf-labs.pages.dev/p/18097844be6d/top-up/img/live-capa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "I only make a few calls.",
          "img": "https://wolf-labs.pages.dev/p/18097844be6d/top-up/img/live-capa.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "How much does this plan cost?",
          "img": "https://wolf-labs.pages.dev/p/18097844be6d/top-up/img/live-capa.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Much, many or a lot of? Four quick ones.",
      "regra": "<b>How much</b> + data / money · <b>How many</b> + days / calls · <b>a lot of</b> in a yes-sentence · <b>a few</b> + countable, <b>a little</b> + uncountable.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "How many days does the plan have?",
          "aceita": [],
          "d": "Dica: dias se contam: <b>How many</b> + plural."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "How many data do I need?",
          "r": "How much data do I need?",
          "aceita": [],
          "d": "Dica: <b>data</b> não se conta aqui: <b>How much</b> data."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "I use much data for videos.",
          "r": "I use a lot of data for videos.",
          "aceita": [
            "I use lots of data for videos."
          ],
          "d": "Dica: em frase afirmativa, 'much' sozinho soa estranho: <b>a lot of</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "I only have a few money.",
          "r": "I only have a little money.",
          "aceita": [
            "I only have little money."
          ],
          "d": "Dica: dinheiro não se conta: <b>a little</b> money, não 'a few'."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/18097844be6d/top-up/img/live-capa.webp",
      "leg": "A city at night, no signal",
      "pede": "Look at the picture: a city at night, and your phone says No service. Write 2 or 3 sentences about what you use your phone for. Use <b>a lot of</b>, <b>a few</b> or <b>a little</b>.",
      "ph": "I use a lot of …",
      "ex": "I use a lot of data for maps. I make a few calls and I send a few messages."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "How much data do you use in a day?",
          "ph": "I use a lot of …",
          "ex": "I use a lot of data for videos."
        },
        {
          "q": "How many apps do you use every day?",
          "ph": "I use … apps.",
          "ex": "I use a few apps: maps, messages and music."
        }
      ]
    }
  }
};
