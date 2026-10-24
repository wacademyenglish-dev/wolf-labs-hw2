/* YELLOW · LIÇÃO DE CASA 2.0 (24/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: past simple. Linha de música: NENHUM verso aqui; o listening é diálogo original. A2: dicas em português só nas notas (d). */
window.HW2 = {
  "id": "yellow",
  "titulo": "Yellow",
  "nivel": "A2",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/4f49d7e7d8f8/yellow/img/live-capa.webp",
  "alvo": "past simple: regular -ed (walked, looked, stayed), irregular (came, swam, wrote, drew, took, slept, went, saw), didn't + plain verb, Did you + plain verb?, was / were; never didn't went, writed, Did you saw",
  "abrir": "What did you do last night?",
  "fecho": "<b>Past</b> = -ed or a new word: <i>I walked. I came. I wrote. I swam.</i> <b>didn't</b> + plain verb: <i>I didn't go.</i> A question: <b>Did you</b> + plain verb: <i>Did you see it?</i> Never <i>didn't went</i>, never <i>Did you saw</i>.",
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
      "sub": "Mia and Leo talk about the weekend. A new scene, about 45 seconds.",
      "img": "https://wolf-labs.pages.dev/p/4f49d7e7d8f8/yellow/img/live-keyart.webp",
      "leg": "A beach under the stars",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, how was your weekend? Did you go to the beach?"
        },
        {
          "quem": "mia",
          "t": "Yes, I did. I came home late, because I stayed there until midnight."
        },
        {
          "quem": "leo",
          "t": "Did you swim?"
        },
        {
          "quem": "mia",
          "t": "I swam for ten minutes, but the water was cold. I didn't swim a lot."
        },
        {
          "quem": "leo",
          "t": "What did you do after that?"
        },
        {
          "quem": "mia",
          "t": "I walked on the sand and looked at the stars. I wrote a note to my sister."
        },
        {
          "quem": "leo",
          "t": "Did she answer?"
        },
        {
          "quem": "mia",
          "t": "No, she didn't. She slept early. Did you do anything fun?"
        },
        {
          "quem": "leo",
          "t": "I drew a map of the beach, and I took a photo of the sunrise."
        }
      ],
      "perguntas": [
        {
          "q": "How long did Mia swim?",
          "op": [
            "For ten minutes",
            "All night",
            "She didn't swim"
          ],
          "a": 0,
          "por": "I swam for ten minutes."
        },
        {
          "q": "What did Mia write?",
          "op": [
            "A note to her sister",
            "A long email",
            "A letter to Leo"
          ],
          "a": 0,
          "por": "I wrote a note to my sister."
        },
        {
          "q": "Why didn't her sister answer?",
          "op": [
            "She slept early",
            "She was at the beach",
            "She lost her phone"
          ],
          "a": 0,
          "por": "She slept early."
        }
      ]
    },
    "out": {
      "sub": "Three sentences about the past. Hear it, then say it.",
      "frases": [
        {
          "t": "I came home late and I didn't eat dinner.",
          "img": "https://wolf-labs.pages.dev/p/4f49d7e7d8f8/yellow/img/live-estrada.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "I swam for ten minutes in the cold sea.",
          "img": "https://wolf-labs.pages.dev/p/4f49d7e7d8f8/yellow/img/live-keyart.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "Did you take a photo of the stars last night?",
          "img": "https://wolf-labs.pages.dev/p/4f49d7e7d8f8/yellow/img/live-telhado.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "-ed, a new word, or didn't? Four quick ones.",
      "regra": "<b>-ed</b> or a new word (came, wrote, swam) · <b>didn't</b> + plain verb · <b>Did you</b> + plain verb.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "Did you see the stars last night",
          "aceita": [],
          "d": "Dica: pergunta: <b>did</b> + you + verbo limpo (see)."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "I didn't went to the party.",
          "r": "I didn't go to the party.",
          "aceita": [
            "I did not go to the party."
          ],
          "d": "Dica: depois de <b>didn't</b>, o verbo volta ao normal: go."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "She writed a long letter.",
          "r": "She wrote a long letter.",
          "aceita": [],
          "d": "Dica: o passado de write é <b>wrote</b>, não 'writed'."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "Did you saw my phone?",
          "r": "Did you see my phone?",
          "aceita": [],
          "d": "Dica: depois de <b>did</b>, o verbo fica limpo: see."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/4f49d7e7d8f8/yellow/img/live-caixa.webp",
      "leg": "An old box of photos and tickets",
      "pede": "Look at the picture: an old box of photos and tickets. Write 2 or 3 sentences in the <b>past</b> about something you did last weekend or last year. Use one <b>didn't</b>.",
      "ph": "Last weekend I … I didn't …",
      "ex": "Last year I took many photos. I kept the tickets from a concert. I didn't throw them away."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What did you do last night? Did you go out?",
          "ph": "Last night I … / I didn't …",
          "ex": "Last night I watched a movie and went to bed late."
        },
        {
          "q": "Where did you go on your last holiday? What did you see?",
          "ph": "I went to … I saw …",
          "ex": "I went to the beach. I saw a beautiful sunset."
        }
      ]
    }
  }
};
