/* THE CAFÉ WHERE WE MET · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: who / which / that / where (relativas). A2: dicas em português só nas notas (d). Só imagens live-* (escuras). */
window.HW2 = {
  "id": "the-cafe-where-we-met",
  "titulo": "The Café Where We Met",
  "nivel": "A2",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/17e1c58d1ef5/the-cafe-where-we-met/img/live-capa.webp",
  "alvo": "relative clauses: where for a place (the café where we met), which / that for a thing, who for a person; the pronoun is not repeated (no where ... there, no which ... it); the little word stays at the end (the song we danced to)",
  "abrir": "What is your favorite place in your city?",
  "fecho": "<b>where</b> = a place (<i>the café where we met</i>). <b>which / that</b> = a thing. <b>who</b> = a person. Say it once: never <i>where we met there</i>. The little word stays at the end: <i>the song we danced to</i>.",
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
      "sub": "Mia and Leo walk down his street. A new scene, about 45 seconds.",
      "img": "https://wolf-labs.pages.dev/p/17e1c58d1ef5/the-cafe-where-we-met/img/live-rua.webp",
      "leg": "A wet street at night",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, what a lovely street! Where are we going?"
        },
        {
          "quem": "leo",
          "t": "First, I want to show you the café where I work."
        },
        {
          "quem": "mia",
          "t": "Is that the old man who plays the piano?"
        },
        {
          "quem": "leo",
          "t": "Yes, that's Mr. Okafor. He is the man who owns the bookstore next door."
        },
        {
          "quem": "mia",
          "t": "What is that song on the radio? I love it."
        },
        {
          "quem": "leo",
          "t": "It's the song my sister and I danced to at her party."
        },
        {
          "quem": "mia",
          "t": "How nice! And where is your favorite bench?"
        },
        {
          "quem": "leo",
          "t": "It's the bench we sat on last summer. It's near the bridge which crosses the river."
        },
        {
          "quem": "mia",
          "t": "Let's go there. I want to see the lights on the water."
        },
        {
          "quem": "leo",
          "t": "Perfect. The bridge we walked across is only five minutes away."
        }
      ],
      "perguntas": [
        {
          "q": "What is the café?",
          "op": [
            "The café where Leo works",
            "The café where Mia works",
            "The café Leo hates"
          ],
          "a": 0,
          "por": "First, I want to show you the café where I work."
        },
        {
          "q": "Who is Mr. Okafor?",
          "op": [
            "The man who owns the bookstore",
            "The man who owns the café",
            "A friend of Mia"
          ],
          "a": 0,
          "por": "He is the man who owns the bookstore next door."
        },
        {
          "q": "What is the song on the radio?",
          "op": [
            "The song Leo and his sister danced to",
            "A new song from Mia",
            "A song about a bridge"
          ],
          "a": 0,
          "por": "It's the song my sister and I danced to at her party."
        }
      ]
    },
    "out": {
      "sub": "Three sentences about a street. Hear it, then say it.",
      "frases": [
        {
          "t": "This is the café where I work.",
          "img": "https://wolf-labs.pages.dev/p/17e1c58d1ef5/the-cafe-where-we-met/img/live-mesa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "He is the man who owns the bookstore.",
          "img": "https://wolf-labs.pages.dev/p/17e1c58d1ef5/the-cafe-where-we-met/img/live-rua.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "That is the bridge we walked across.",
          "img": "https://wolf-labs.pages.dev/p/17e1c58d1ef5/the-cafe-where-we-met/img/live-ponte.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "where, which, who or nothing? Four quick ones.",
      "regra": "<b>where</b> = place · <b>which / that</b> = thing · <b>who</b> = person · say it once (no <i>there</i>, no <i>it</i>) · the little word stays at the end.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "This is the café where we met.",
          "aceita": [],
          "d": "Dica: lugar: <b>the café where</b> + a história."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: where or which?",
          "mostra": "This is the café where we loved.",
          "r": "This is the café which we loved.",
          "aceita": [
            "This is the café that we loved.",
            "This is the café we loved."
          ],
          "d": "Dica: we loved <b>it</b> (não 'lá'): use <b>which</b> ou <b>that</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is too much.",
          "mostra": "That is the bench where we sat there.",
          "r": "That is the bench where we sat.",
          "aceita": [
            "That is the bench we sat on."
          ],
          "d": "Dica: <b>where</b> já quer dizer 'lá'. Diga uma vez só."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is missing.",
          "mostra": "This is the song we danced.",
          "r": "This is the song we danced to.",
          "aceita": [
            "This is the song which we danced to.",
            "This is the song that we danced to."
          ],
          "d": "Dica: a palavrinha fica no fim: <b>danced to</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/17e1c58d1ef5/the-cafe-where-we-met/img/live-guia.webp",
      "leg": "A little map in a notebook",
      "pede": "Look at the picture: a little map in a guidebook. Write 2 or 3 sentences about places and people in your city. Use <b>where</b>, <b>which / that</b> or <b>who</b>.",
      "ph": "This is the place where …",
      "ex": "This is the park where I run. It's the café I love most. He is the man who sells bread."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "Tell me about a place in your city. What do you do there?",
          "ph": "It's the place where …",
          "ex": "It's the beach where I run on Sundays."
        },
        {
          "q": "Who is a person in your street? What does he or she do?",
          "ph": "She is the woman who …",
          "ex": "She is the woman who sells fruit near my house."
        }
      ]
    }
  }
};
