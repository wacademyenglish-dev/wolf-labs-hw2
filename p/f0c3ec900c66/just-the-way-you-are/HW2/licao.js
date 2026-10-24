/* JUST THE WAY YOU ARE · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: be + adjetivo, so / really / very, a very kind person. Linha de música: NENHUM verso aqui; o listening é diálogo original. A1: dicas em português só nas notas (d). */
window.HW2 = {
  "id": "just-the-way-you-are",
  "titulo": "Just the Way You Are",
  "nivel": "A1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/f0c3ec900c66/just-the-way-you-are/img/live-capa.webp",
  "alvo": "be + adjective (she is kind, they are funny); the adjective never changes (no -s); so / really / very before the adjective; a very kind person (adjective before the noun); never a person kind, never my mom very nice",
  "abrir": "Who is a very kind person in your life?",
  "fecho": "<b>be</b> + adjective: <i>She is kind. They are funny.</i> The adjective never takes <b>-s</b>. <b>So, really, very</b> go before it: <i>She is very kind.</i> Before a noun, the adjective comes first: <i>a very kind person</i>, never <i>a person kind</i>. Never forget <b>is / are</b>: not <i>my mom very nice</i>.",
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
      "sub": "Mia and Leo look at an old photo. A new scene, about 40 seconds.",
      "img": "https://wolf-labs.pages.dev/p/f0c3ec900c66/just-the-way-you-are/img/live-havai.webp",
      "leg": "A quiet beach at night",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, who is that in the photo?"
        },
        {
          "quem": "mia",
          "t": "That is my grandmother. She is a very kind person."
        },
        {
          "quem": "leo",
          "t": "She looks so happy."
        },
        {
          "quem": "mia",
          "t": "She is really funny too. Her stories are very long, but they are great."
        },
        {
          "quem": "leo",
          "t": "And her house? It looks so quiet."
        },
        {
          "quem": "mia",
          "t": "Yes, the house is small, and the garden is beautiful."
        },
        {
          "quem": "leo",
          "t": "Are you like her?"
        },
        {
          "quem": "mia",
          "t": "A little. I am not so funny, but I am really patient."
        },
        {
          "quem": "leo",
          "t": "You are a kind person too."
        },
        {
          "quem": "mia",
          "t": "Thanks, Leo. You are a very good friend."
        }
      ],
      "perguntas": [
        {
          "q": "Who is in the photo?",
          "op": [
            "Mia's grandmother",
            "Mia's sister",
            "Leo's mother"
          ],
          "a": 0,
          "por": "That is my grandmother."
        },
        {
          "q": "What is she like?",
          "op": [
            "A very kind person",
            "A very sad person",
            "A very tired person"
          ],
          "a": 0,
          "por": "She is a very kind person."
        },
        {
          "q": "What is Mia really?",
          "op": [
            "Patient",
            "Funny",
            "Tired"
          ],
          "a": 0,
          "por": "I am not so funny, but I am really patient."
        }
      ]
    },
    "out": {
      "sub": "Three sentences about calm places. Hear it, then say it.",
      "frases": [
        {
          "t": "The old record player is really beautiful.",
          "img": "https://wolf-labs.pages.dev/p/f0c3ec900c66/just-the-way-you-are/img/live-grammy.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "The beach is so quiet at night.",
          "img": "https://wolf-labs.pages.dev/p/f0c3ec900c66/just-the-way-you-are/img/live-havai.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "The park is very calm in the evening.",
          "img": "https://wolf-labs.pages.dev/p/f0c3ec900c66/just-the-way-you-are/img/live-parque.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "be + adjective. Four quick ones.",
      "regra": "<b>be</b> + adjective · no <b>-s</b> on the adjective · <b>so, really, very</b> before it · <b>a very kind person</b>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "My grandmother is a very kind person.",
          "aceita": [],
          "d": "Dica: <b>a very kind</b> + person: o adjetivo vem antes."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "She is a person very kind.",
          "r": "She is a very kind person.",
          "aceita": [],
          "d": "Dica: em inglês o adjetivo vem antes do nome: <b>a very kind person</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "My friends are funnys.",
          "r": "My friends are funny.",
          "aceita": [],
          "d": "Dica: o adjetivo nunca leva <b>-s</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is missing.",
          "mostra": "My mom very nice.",
          "r": "My mom is very nice.",
          "aceita": [],
          "d": "Dica: o verbo <b>is</b> não pode sumir."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/f0c3ec900c66/just-the-way-you-are/img/live-capa.webp",
      "leg": "An old mirror in the dark",
      "pede": "Look at the picture: an old mirror in the dark. Write 2 or 3 sentences about a person you love. Use <b>is / are</b> + an adjective, and <b>so</b>, <b>really</b> or <b>very</b>.",
      "ph": "My … is very …",
      "ex": "My sister is very kind. She is really funny. My parents are so happy."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "Who is a very kind person in your life? Why?",
          "ph": "My … is a very … person.",
          "ex": "My neighbor is a very kind person. She is always happy."
        },
        {
          "q": "What is your best friend like? Say two adjectives.",
          "ph": "My friend is … and …",
          "ex": "My best friend is funny and really patient."
        }
      ]
    }
  }
};
