/* HEAVY RAIN, STRONG COFFEE · LIÇÃO DE CASA 2.0 (24/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: colocações (heavy rain, strong coffee, highly recommended, deeply grateful, bitterly cold). C1: nenhum português. */
window.HW2 = {
  "id": "heavy-rain-strong-coffee",
  "titulo": "Heavy Rain, Strong Coffee",
  "nivel": "C1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/81bedf0ff924/heavy-rain-strong-coffee/img/live-conversa.webp",
  "alvo": "collocations: heavy rain / traffic / smoker, strong coffee / accent, highly recommended / unlikely, deeply grateful / moved, bitterly cold / disappointed, a narrow escape, a quick bite; never strong rain, high recommended, strongly disappointed",
  "abrir": "Think of the last time the weather ruined a plan. What did you do instead?",
  "fecho": "Words choose their partners: <b>heavy rain, heavy traffic</b> (never <i>strong rain</i>), <b>strong coffee, a strong accent</b>, <b>highly recommended, highly unlikely</b> (never <i>high recommended</i>), <b>deeply grateful, bitterly cold, bitterly disappointed</b>, <b>a narrow escape, a quick bite</b>. A native picks the pair, not the word-for-word translation.",
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
  "rate": "-8%",
  "rodadas": {
    "listen": {
      "sub": "Mia and Leo on a rainy weekend in Lisbon. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/81bedf0ff924/heavy-rain-strong-coffee/img/live-conversa.webp",
      "leg": "A rainy street and a tram at night",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, did you see the forecast? Heavy rain all weekend. So much for our long walk."
        },
        {
          "quem": "mia",
          "t": "Typical. And the traffic is heavy too, so a taxi will take ages."
        },
        {
          "quem": "leo",
          "t": "Let's grab a quick bite at that little place by the tram stop. It's highly recommended."
        },
        {
          "quem": "mia",
          "t": "Recommended by whom?"
        },
        {
          "quem": "leo",
          "t": "By everyone. The owner makes strong coffee, and the custard tarts are famous."
        },
        {
          "quem": "mia",
          "t": "Sold. Honestly, I'm deeply grateful you booked this trip, even in this weather."
        },
        {
          "quem": "leo",
          "t": "It was a narrow escape, really. I almost booked Berlin, and it's bitterly cold there in March."
        },
        {
          "quem": "mia",
          "t": "Berlin in March? I would have been bitterly disappointed."
        },
        {
          "quem": "leo",
          "t": "Told you. Lisbon wins, even soaked. And the waiter's accent is so strong I'll never understand the menu."
        },
        {
          "quem": "mia",
          "t": "A strong accent and a strong coffee. A perfect combination."
        }
      ],
      "perguntas": [
        {
          "q": "What does the forecast promise?",
          "op": [
            "Heavy rain all weekend",
            "A sunny weekend",
            "Heavy snow"
          ],
          "a": 0,
          "por": "Heavy rain all weekend."
        },
        {
          "q": "What does the little place offer?",
          "op": [
            "Strong coffee and custard tarts",
            "Cold drinks and salads",
            "Big dinners"
          ],
          "a": 0,
          "por": "The owner makes strong coffee, and the custard tarts are famous."
        },
        {
          "q": "What was the narrow escape?",
          "op": [
            "Almost booking Berlin",
            "Missing the tram",
            "Losing an umbrella"
          ],
          "a": 0,
          "por": "It was a narrow escape, really. I almost booked Berlin."
        }
      ]
    },
    "out": {
      "sub": "Three sentences with the right pairs. Hear it, then say it.",
      "frases": [
        {
          "t": "We're stuck in heavy traffic, so we'll grab a quick bite.",
          "img": "https://wolf-labs.pages.dev/p/81bedf0ff924/heavy-rain-strong-coffee/img/live-conversa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "The café is highly recommended, and the coffee is strong.",
          "img": "https://wolf-labs.pages.dev/p/81bedf0ff924/heavy-rain-strong-coffee/img/live-conversa.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "That was a narrow escape, and I'm deeply grateful.",
          "img": "https://wolf-labs.pages.dev/p/81bedf0ff924/heavy-rain-strong-coffee/img/live-conversa.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "The word that fits its partner. Four quick ones.",
      "regra": "<b>heavy</b> rain / traffic · <b>strong</b> coffee / accent · <b>highly</b> recommended / unlikely · <b>deeply</b> grateful · <b>bitterly</b> cold / disappointed.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "The traffic was heavy all the way into town.",
          "aceita": [],
          "d": "Hint: traffic is <b>heavy</b>, and the verb goes after the noun."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "We had strong rain all weekend.",
          "r": "We had heavy rain all weekend.",
          "aceita": [],
          "d": "Hint: rain is <b>heavy</b>. <i>Strong</i> goes with coffee and accents."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "That restaurant is high recommended.",
          "r": "That restaurant is highly recommended.",
          "aceita": [
            "That restaurant is very highly recommended."
          ],
          "d": "Hint: the adverb needs <b>-ly</b>: <b>highly</b> recommended."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "I was strongly disappointed with the service.",
          "r": "I was bitterly disappointed with the service.",
          "aceita": [
            "I was deeply disappointed with the service.",
            "I was very disappointed with the service.",
            "I was really disappointed with the service.",
            "I was extremely disappointed with the service.",
            "I was terribly disappointed with the service."
          ],
          "d": "Hint: disappointment goes with <b>bitterly</b> or <b>deeply</b>, not <i>strongly</i>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/81bedf0ff924/heavy-rain-strong-coffee/img/live-conversa.webp",
      "leg": "A rainy street and a tram at night",
      "pede": "Look at the picture: a rainy street with a tram at night. Write 2 or 3 sentences about a trip or a rainy day. Use pairs such as <b>heavy rain</b>, <b>strong coffee</b>, <b>highly recommended</b> or <b>deeply grateful</b>.",
      "ph": "We had heavy rain, so …",
      "ex": "We had heavy rain all weekend, so we hid in a café with strong coffee. I am deeply grateful to the owner, and the place is highly recommended."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "How do you take your coffee or tea? Describe it with a word pair.",
          "ph": "I like strong …",
          "ex": "I like strong black coffee, and I have a quick one before work."
        },
        {
          "q": "What place do you highly recommend? Why?",
          "ph": "I highly recommend … because …",
          "ex": "I highly recommend the old market near my house. The food is cheap and the people are warm."
        }
      ]
    }
  }
};
