/* DUE TO, AS A RESULT · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   B2: nenhum português na lição. */
window.HW2 = {
  "id": "due-to-as-a-result",
  "titulo": "Due To, As a Result",
  "nivel": "B2",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/1b5d9fa5c9a9/due-to-as-a-result/img/live-capa.webp",
  "alvo": "cause and effect: due to / owing to / because of + noun; because + clause; As a result, / Consequently, start a new sentence; as a result OF + noun; which led to + noun or -ing",
  "abrir": "Think of something small that caused something big this week. What was the cause?",
  "fecho": "<b>Due to / because of / owing to</b> + a noun. <b>Because</b> + a whole clause. <b>As a result,</b> and <b>Consequently,</b> start a new sentence with the effect. <b>As a result of</b> + a noun. <b>Which led to</b> + a noun or an -ing form.",
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
      "sub": "Mia and Leo at the Drift Lab. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/1b5d9fa5c9a9/due-to-as-a-result/img/live-laboratorio.webp",
      "leg": "The Drift Lab",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, why did the ferry stop yesterday?"
        },
        {
          "quem": "leo",
          "t": "Due to the storm. The wind was too strong."
        },
        {
          "quem": "mia",
          "t": "Because of the wind, or because of the waves?"
        },
        {
          "quem": "leo",
          "t": "Both. The sea was rough because the wind blew all night."
        },
        {
          "quem": "mia",
          "t": "And as a result, nobody could cross the bay."
        },
        {
          "quem": "leo",
          "t": "Exactly. Consequently, the shop on the island ran out of bread."
        },
        {
          "quem": "mia",
          "t": "Bread? That is a big result."
        },
        {
          "quem": "leo",
          "t": "It is. Owing to the delay, the baker could not bring any flour."
        },
        {
          "quem": "mia",
          "t": "So the storm led to a bread shortage."
        },
        {
          "quem": "leo",
          "t": "Yes. And as a result of the shortage, everyone ate rice for dinner!"
        }
      ],
      "perguntas": [
        {
          "q": "Why did the ferry stop?",
          "op": [
            "Due to the storm",
            "Due to a broken engine",
            "Because the bay was closed"
          ],
          "a": 0,
          "por": "Due to the storm. The wind was too strong."
        },
        {
          "q": "What happened to the shop on the island?",
          "op": [
            "It ran out of bread",
            "It closed for a holiday",
            "It sold all its rice"
          ],
          "a": 0,
          "por": "Consequently, the shop on the island ran out of bread."
        },
        {
          "q": "What did the storm lead to?",
          "op": [
            "A bread shortage",
            "A new ferry",
            "A bigger shop"
          ],
          "a": 0,
          "por": "So the storm led to a bread shortage."
        }
      ]
    },
    "out": {
      "sub": "Three sentences from the scene. Hear it, then say it.",
      "frases": [
        {
          "t": "The ferry stopped due to the storm.",
          "au": "audio/say1.mp3",
          "img": "https://wolf-labs.pages.dev/p/1b5d9fa5c9a9/due-to-as-a-result/img/live-navio.webp"
        },
        {
          "t": "The sea was rough because the wind blew all night.",
          "au": "audio/say2.mp3",
          "img": "https://wolf-labs.pages.dev/p/1b5d9fa5c9a9/due-to-as-a-result/img/live-praia.webp"
        },
        {
          "t": "As a result, nobody could cross the bay.",
          "au": "audio/say3.mp3",
          "img": "https://wolf-labs.pages.dev/p/1b5d9fa5c9a9/due-to-as-a-result/img/live-farol.webp"
        }
      ]
    },
    "focus": {
      "sub": "Noun or clause? Cause or effect? Four quick ones.",
      "regra": "<b>due to / because of</b> + noun · <b>because</b> + clause · <b>As a result,</b> starts a new sentence · <b>as a result of</b> + noun.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "The shop closed because of the bad weather.",
          "aceita": [],
          "d": "Hint: <b>because of</b> + a noun (<b>the bad weather</b>)."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: <b>due to</b> needs a noun.",
          "mostra": "The ferry stopped due to the wind was strong.",
          "r": "The ferry stopped due to the strong wind.",
          "aceita": [
            "The ferry stopped because the wind was strong.",
            "The ferry stopped because of the strong wind."
          ],
          "d": "Hint: after <b>due to</b>, a noun, not a clause."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is missing.",
          "mostra": "As a result the storm, the ferry stopped.",
          "r": "As a result of the storm, the ferry stopped.",
          "aceita": [
            "As a result of the storm the ferry stopped.",
            "Because of the storm, the ferry stopped.",
            "Due to the storm, the ferry stopped."
          ],
          "d": "Hint: <b>as a result of</b> + noun. Without <b>of</b>, it starts a new sentence."
        },
        {
          "tipo": "escreve",
          "t": "Join the cause and the effect in one sentence.",
          "mostra": "The baker had no flour. (because of / the delay)",
          "r": "The baker had no flour because of the delay.",
          "aceita": [
            "Because of the delay, the baker had no flour.",
            "The baker had no flour due to the delay.",
            "Due to the delay, the baker had no flour."
          ],
          "d": "Hint: <b>because of</b> + the delay (a noun)."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/1b5d9fa5c9a9/due-to-as-a-result/img/live-pato.webp",
      "leg": "A toy duck on the beach",
      "pede": "Look at the picture: a small toy duck on a dark beach. Write a short chain of causes and effects about its journey. Use <b>due to, because of, as a result</b> or <b>which led to</b>.",
      "ph": "Due to a storm, …",
      "ex": "Due to a storm, a box fell from a ship. As a result, a toy duck floated for years, which led to a long journey across the sea."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What small thing led to something big in your life? Use which led to.",
          "ph": "… which led to …",
          "ex": "I missed a bus, which led to meeting my best friend."
        },
        {
          "q": "Why were you late, tired or happy recently? Use because of or due to.",
          "ph": "… due to …",
          "ex": "I was late due to the traffic."
        }
      ]
    }
  }
};
