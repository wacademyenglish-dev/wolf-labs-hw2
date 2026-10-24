/* A TERRIFYING TOWN · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: adjetivos -ed / -ing. B1: nenhum português. Jogo: neblina e farol, suspense leve, sem horror. Só imagens live-* (lum < 50). */
window.HW2 = {
  "id": "a-terrifying-town",
  "titulo": "A Terrifying Town",
  "nivel": "B1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/5384d3a2c692/a-terrifying-town/img/live-street.webp",
  "alvo": "adjectives in -ed and -ing: the person FEELS (-ed: I'm bored, terrified, interested in) and the thing or place CAUSES it (-ing: the fog is terrifying, the film was boring); never I'm boring when you mean bored",
  "abrir": "What was the most boring thing you did this week? How did you feel?",
  "fecho": "The person feels: <b>-ed</b> (<i>I was terrified. I'm interested in old radios.</i>). The thing or place causes the feeling: <b>-ing</b> (<i>The fog was terrifying. The story is interesting.</i>). <i>I'm boring</i> means other people get bored with you!",
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
      "sub": "Mia tells Leo about a night in a foggy seaside town. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/5384d3a2c692/a-terrifying-town/img/live-radio.webp",
      "leg": "A small house with a radio mast",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, how was your night in the foggy town?"
        },
        {
          "quem": "mia",
          "t": "Honestly, I was terrified at first. The fog was so terrifying that I couldn't see the street."
        },
        {
          "quem": "leo",
          "t": "Wow. Was the old radio interesting, at least?"
        },
        {
          "quem": "mia",
          "t": "Very! The static was confusing, but I was fascinated. It played a strange song every hour."
        },
        {
          "quem": "leo",
          "t": "Were you bored in the hotel?"
        },
        {
          "quem": "mia",
          "t": "No, I wasn't bored. I was too excited to sleep."
        },
        {
          "quem": "leo",
          "t": "And the lighthouse?"
        },
        {
          "quem": "mia",
          "t": "At midnight the light came on, and I felt relaxed. It was a really relaxing view."
        },
        {
          "quem": "leo",
          "t": "I'm surprised. I thought the town was frightening."
        },
        {
          "quem": "mia",
          "t": "It is frightening, but in a fun way. I'm already interested in going back."
        }
      ],
      "perguntas": [
        {
          "q": "How did Mia feel at first?",
          "op": [
            "Terrified",
            "Bored",
            "Relaxed"
          ],
          "a": 0,
          "por": "I was terrified at first."
        },
        {
          "q": "Why wasn't Mia bored in the hotel?",
          "op": [
            "She was too excited to sleep",
            "She was too tired to read",
            "She was watching TV"
          ],
          "a": 0,
          "por": "No, I wasn't bored. I was too excited to sleep."
        },
        {
          "q": "What was really relaxing?",
          "op": [
            "The view of the lighthouse",
            "The old radio",
            "The foggy street"
          ],
          "a": 0,
          "por": "It was a really relaxing view."
        }
      ]
    },
    "out": {
      "sub": "Three sentences about feelings. Hear it, then say it.",
      "frases": [
        {
          "t": "The empty street was confusing, so I felt confused.",
          "img": "https://wolf-labs.pages.dev/p/5384d3a2c692/a-terrifying-town/img/live-street.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "I was fascinated by the old radio.",
          "img": "https://wolf-labs.pages.dev/p/5384d3a2c692/a-terrifying-town/img/live-radio.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "The view of the lighthouse was really relaxing.",
          "img": "https://wolf-labs.pages.dev/p/5384d3a2c692/a-terrifying-town/img/live-lighthouse.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "-ed or -ing? Four quick ones.",
      "regra": "the person feels: <b>-ed</b> · the thing causes it: <b>-ing</b> · <i>I'm bored</i> (me) / <i>It's boring</i> (the thing).",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "I was bored because the film was boring.",
          "aceita": [],
          "d": "Hint: I feel it: <b>bored</b>. The film causes it: <b>boring</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "I am very boring today.",
          "r": "I am very bored today.",
          "aceita": [],
          "d": "Hint: you feel it, so <b>-ed</b>. <i>I'm boring</i> means you bore other people."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "The lighthouse view was really relaxed.",
          "r": "The lighthouse view was really relaxing.",
          "aceita": [],
          "d": "Hint: the view causes the feeling, so <b>-ing</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "I'm very interesting in old radios.",
          "r": "I'm very interested in old radios.",
          "aceita": [],
          "d": "Hint: you feel it, so <b>interested</b>. The radio is <b>interesting</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/5384d3a2c692/a-terrifying-town/img/live-docks.webp",
      "leg": "Boats in the fog",
      "pede": "Look at the picture: boats in the fog. Write 2 or 3 sentences about an evening or a place that made you feel something. Use <b>-ed</b> for how you felt and <b>-ing</b> for what caused it.",
      "ph": "The film was … so I felt …",
      "ex": "Last Friday the film was really boring, so I felt tired. I was surprised when my friend called. The news was exciting."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What was the most boring thing you did this week? How did you feel?",
          "ph": "It was boring. I felt …",
          "ex": "Cleaning the house was boring. I felt tired and a little annoyed."
        },
        {
          "q": "What is the most exciting place you have visited? Why?",
          "ph": "It was exciting because …",
          "ex": "Rio was the most exciting place. I was amazed by the beach and the people."
        }
      ]
    }
  }
};
