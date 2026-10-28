/* IT’S CHEAPER THAN A NEW TEAM · SELLING SERVICES LESSON 12 · LIÇÃO DE CASA 2.0 (27/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: comparatives: -er, more + long word, better / worse, less, than; never “more cheap”, “more better”, “cheaper that”. A1: português só nas dicas (d). Empresas fictícias. */
window.HW2 = {
  "id": "selling-services-cheaper-than-a-new-team",
  "titulo": "It’s Cheaper Than a New Team",
  "nivel": "A1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/0b7e3129fb34/selling-services-cheaper-than-a-new-team/img/live-capa.webp",
  "alvo": "comparatives: -er, more + long word, better / worse, less, than; never “more cheap”, “more better”, “cheaper that”",
  "abrir": "A client says: “Why not a new team inside the company?” What do you answer?",
  "fecho": "Short word → <b>-er</b> (cheaper) · long word → <b>more</b> (more efficient) · good → <b>better</b> · always <b>than</b>.",
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
      "sub": "Mia compares in-house and outsourcing with a client. About one minute.",
      "img": "https://wolf-labs.pages.dev/p/0b7e3129fb34/selling-services-cheaper-than-a-new-team/img/live-conversa.webp",
      "leg": "Two options on a whiteboard at night",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, we want a new accounting team. Four people."
        },
        {
          "quem": "mia",
          "t": "I understand. But outsourcing is cheaper than a new team."
        },
        {
          "quem": "leo",
          "t": "How much cheaper?"
        },
        {
          "quem": "mia",
          "t": "About 25% less per year. And it’s faster: we start in six weeks."
        },
        {
          "quem": "leo",
          "t": "But a team inside is easier to control."
        },
        {
          "quem": "mia",
          "t": "That’s true. But our process is more efficient. We use automation."
        },
        {
          "quem": "leo",
          "t": "Is the quality better?"
        },
        {
          "quem": "mia",
          "t": "Yes. Our reports are more accurate than spreadsheets."
        },
        {
          "quem": "leo",
          "t": "OK. Send me the numbers, please."
        }
      ],
      "perguntas": [
        {
          "q": "How much cheaper is outsourcing?",
          "op": [
            "About 25% less per year",
            "About 50% less",
            "It isn’t cheaper"
          ],
          "a": 0,
          "por": "About 25% less per year."
        },
        {
          "q": "How fast can they start?",
          "op": [
            "In six weeks",
            "In six months",
            "Tomorrow"
          ],
          "a": 0,
          "por": "It’s faster: we start in six weeks."
        },
        {
          "q": "What is easier with a team inside, for Leo?",
          "op": [
            "To control",
            "To pay",
            "To start"
          ],
          "a": 0,
          "por": "But a team inside is easier to control."
        }
      ]
    },
    "out": {
      "sub": "Three sentences from your job. Hear it, then say it.",
      "frases": [
        {
          "t": "Our service is cheaper than a new team.",
          "img": "https://wolf-labs.pages.dev/p/0b7e3129fb34/selling-services-cheaper-than-a-new-team/img/live-capa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "It’s faster and more efficient.",
          "img": "https://wolf-labs.pages.dev/p/0b7e3129fb34/selling-services-cheaper-than-a-new-team/img/live-mesa.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "Our reports are better than spreadsheets.",
          "img": "https://wolf-labs.pages.dev/p/0b7e3129fb34/selling-services-cheaper-than-a-new-team/img/live-conversa.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Your own mistakes, fixed. Four quick ones.",
      "regra": "Short → <b>-er</b> · long → <b>more</b> · good → <b>better</b> · bad → <b>worse</b> · always <b>than</b>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "A BPO is cheaper than a new team.",
          "aceita": [],
          "d": "Dica: cheap é curta → <b>cheaper than</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "It’s more cheap than a new team.",
          "r": "It’s cheaper than a new team.",
          "aceita": [
            "It is cheaper than a new team."
          ],
          "d": "Dica: palavra curta: <b>-er</b>, sem “more”."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "Our reports are more better.",
          "r": "Our reports are better.",
          "aceita": [],
          "d": "Dica: <b>better</b> já é “mais bom”: sem “more”."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "It’s faster that in-house.",
          "r": "It’s faster than in-house.",
          "aceita": [
            "It is faster than in-house."
          ],
          "d": "Dica: “que” na comparação = <b>than</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/0b7e3129fb34/selling-services-cheaper-than-a-new-team/img/live-mesa.webp",
      "leg": "Two options on a whiteboard at night",
      "pede": "Compare your service with a new team in 2 or 3 sentences: cost, time, quality.",
      "ph": "It’s cheaper than … It’s faster … Our … is more … than …",
      "ex": "Our service is cheaper than a new team. It’s faster: we start in eight weeks. Our process is more efficient."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "Is your city bigger than São Paulo?",
          "ph": "Yes, it’s bigger. / No, it’s smaller.",
          "ex": "No, it’s smaller, but it’s quieter."
        },
        {
          "q": "What is better for you: mornings or afternoons?",
          "ph": "… are better because …",
          "ex": "Mornings are better because I’m more relaxed."
        }
      ]
    }
  }
};
