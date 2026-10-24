/* A TEN-HOUR FLIGHT · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   B2: nenhum português na lição. */
window.HW2 = {
  "id": "a-ten-hour-flight",
  "titulo": "A Ten-Hour Flight",
  "nivel": "B2",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/f795d16b7fc6/a-ten-hour-flight/img/live-capa.webp",
  "alvo": "compound adjectives before a noun: number + noun (a ten-hour flight), well + participle (a well-known hotel), noun + -ing (an Italian-speaking guide, a mouth-watering breakfast), noun + participle (hand-made bread); hyphen, one adjective, never plural",
  "abrir": "Think of your longest trip. How would you describe it in one short headline?",
  "fecho": "A long description becomes <b>one adjective</b>, with a hyphen, <b>before</b> the noun, and the first part is <b>never plural</b>: <i>a ten-hour flight</i>, <i>a well-known hotel</i>, <i>an Italian-speaking guide</i>, <i>a mouth-watering breakfast</i>.",
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
      "sub": "Mia writes a travel blog. Leo is her editor. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/f795d16b7fc6/a-ten-hour-flight/img/live-mesa.webp",
      "leg": "The editor's desk",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, your headline is too long: A flight that lasted ten hours."
        },
        {
          "quem": "mia",
          "t": "So what do I write?"
        },
        {
          "quem": "leo",
          "t": "A ten-hour flight. No S on hour."
        },
        {
          "quem": "mia",
          "t": "Got it. And a hotel that everyone knows?"
        },
        {
          "quem": "leo",
          "t": "A well-known hotel. One adjective, with a hyphen."
        },
        {
          "quem": "mia",
          "t": "What about a guide who speaks Italian?"
        },
        {
          "quem": "leo",
          "t": "An Italian-speaking guide."
        },
        {
          "quem": "mia",
          "t": "And a breakfast that makes your mouth water?"
        },
        {
          "quem": "leo",
          "t": "A mouth-watering breakfast. Now it sounds like a headline."
        },
        {
          "quem": "mia",
          "t": "Great. So my post is: A ten-hour flight, a well-known hotel and a mouth-watering breakfast."
        },
        {
          "quem": "leo",
          "t": "Publish it."
        }
      ],
      "perguntas": [
        {
          "q": "How should Mia say 'a flight that lasted ten hours'?",
          "op": [
            "A ten-hour flight",
            "A ten-hours flight",
            "A flight ten-hour"
          ],
          "a": 0,
          "por": "A ten-hour flight. No S on hour."
        },
        {
          "q": "What does a well-known hotel mean?",
          "op": [
            "A hotel that everyone knows",
            "A hotel with a good well",
            "A very old hotel"
          ],
          "a": 0,
          "por": "A hotel that everyone knows. One adjective, with a hyphen."
        },
        {
          "q": "Who is an Italian-speaking guide?",
          "op": [
            "A guide who speaks Italian",
            "A guide from Italy",
            "A guide who sings"
          ],
          "a": 0,
          "por": "A guide who speaks Italian. An Italian-speaking guide."
        }
      ]
    },
    "out": {
      "sub": "Three sentences from the scene. Hear it, then say it.",
      "frases": [
        {
          "t": "It was a ten-hour flight.",
          "au": "audio/say1.mp3",
          "img": "https://wolf-labs.pages.dev/p/f795d16b7fc6/a-ten-hour-flight/img/live-janela.webp"
        },
        {
          "t": "We stayed in a well-known hotel.",
          "au": "audio/say2.mp3",
          "img": "https://wolf-labs.pages.dev/p/f795d16b7fc6/a-ten-hour-flight/img/live-mala.webp"
        },
        {
          "t": "We had a mouth-watering breakfast.",
          "au": "audio/say3.mp3",
          "img": "https://wolf-labs.pages.dev/p/f795d16b7fc6/a-ten-hour-flight/img/live-cafe.webp"
        }
      ]
    },
    "focus": {
      "sub": "One adjective, one hyphen, no plural. Four quick ones.",
      "regra": "number + noun: <b>a ten-hour flight</b> (no S) · <b>well-known</b> · noun + -ing: <b>mouth-watering</b> · the whole adjective goes before the noun.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "We took a ten-hour flight to Rome.",
          "aceita": [
            "We took a ten-hour flight to Rome"
          ],
          "d": "Hint: <b>ten-hour</b>, with no S on <i>hour</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: the first part is never plural.",
          "mostra": "It was a ten-hours flight.",
          "r": "It was a ten-hour flight.",
          "aceita": [
            "It was a ten hour flight."
          ],
          "d": "Hint: in a compound adjective, <b>hour</b> stays singular."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: -ing or -ed?",
          "mostra": "We had a mouth-watered breakfast.",
          "r": "We had a mouth-watering breakfast.",
          "aceita": [],
          "d": "Hint: the breakfast makes your mouth water: <b>-ing</b>."
        },
        {
          "tipo": "escreve",
          "t": "Say it as one short adjective.",
          "mostra": "A guide who speaks Italian (an …)",
          "r": "An Italian-speaking guide.",
          "aceita": [
            "an Italian-speaking guide",
            "An Italian speaking guide."
          ],
          "d": "Hint: noun + <b>-ing</b>, with a hyphen, before the noun."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/f795d16b7fc6/a-ten-hour-flight/img/live-vista.webp",
      "leg": "A mountain view at dusk",
      "pede": "Look at the picture: a mountain view at dusk. Write a short travel headline about a real trip. Use two compound adjectives, such as <b>five-star, well-known, ten-hour, mouth-watering</b>.",
      "ph": "It was a …",
      "ex": "It was a ten-hour bus ride to a small mountain town. We stayed in a well-known hotel and had a mouth-watering dinner."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "Tell me about a trip. How long was it? Use a number + a noun.",
          "ph": "It was a …-hour …",
          "ex": "It was a six-hour train ride."
        },
        {
          "q": "Describe a hotel, a meal or a guide you liked. Use one compound adjective.",
          "ph": "We had a … lunch.",
          "ex": "We had a mouth-watering lunch at a family-run restaurant."
        }
      ]
    }
  }
};
