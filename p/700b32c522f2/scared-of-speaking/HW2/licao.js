/* SCARED OF SPEAKING · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: adjective + small word + -ing. A2: dicas em português só nas notas (d). */
window.HW2 = {
  "id": "scared-of-speaking",
  "titulo": "Scared of Speaking",
  "nivel": "A2",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/700b32c522f2/scared-of-speaking/img/live-palco.webp",
  "alvo": "adjective + small word + -ing: good at, scared of, tired of, nervous about, interested in, proud of; after the small word the verb ends in -ing; never good in, interested on, scared of speak",
  "abrir": "What are you good at?",
  "fecho": "Adjective + small word + <b>-ing</b>: <i>good at singing, scared of flying, tired of waiting, nervous about speaking, interested in learning</i>. Never <i>good in</i> or <i>scared of speak</i>.",
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
      "sub": "Mia and Leo before an open mic night. A new scene, about 40 seconds.",
      "img": "https://wolf-labs.pages.dev/p/700b32c522f2/scared-of-speaking/img/live-palco.webp",
      "leg": "A microphone on a stage",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, are you ready for the open mic tonight?"
        },
        {
          "quem": "mia",
          "t": "I'm a little nervous about singing in front of people."
        },
        {
          "quem": "leo",
          "t": "But you're really good at singing!"
        },
        {
          "quem": "mia",
          "t": "Thanks. I'm good at singing in the shower. I'm scared of forgetting the words."
        },
        {
          "quem": "leo",
          "t": "Everybody is nervous about the first song."
        },
        {
          "quem": "mia",
          "t": "Are you nervous too?"
        },
        {
          "quem": "leo",
          "t": "No. I'm interested in watching you. And I'm proud of you already."
        },
        {
          "quem": "mia",
          "t": "Thank you, Leo. OK, I'm not scared of starting anymore. Let's go!"
        }
      ],
      "perguntas": [
        {
          "q": "What is Mia nervous about?",
          "op": [
            "Singing in front of people",
            "Forgetting her keys",
            "Driving to the bar"
          ],
          "a": 0,
          "por": "I'm a little nervous about singing in front of people."
        },
        {
          "q": "What is Mia scared of?",
          "op": [
            "Forgetting the words",
            "Missing the bus",
            "Singing in the shower"
          ],
          "a": 0,
          "por": "I'm scared of forgetting the words."
        },
        {
          "q": "How does Leo feel about Mia?",
          "op": [
            "He's proud of her",
            "He's tired of her",
            "He's scared of her"
          ],
          "a": 0,
          "por": "I'm proud of you already."
        }
      ]
    },
    "out": {
      "sub": "Three sentences with a small word and -ing. Hear it, then say it.",
      "frases": [
        {
          "t": "I'm good at cooking rice.",
          "img": "https://wolf-labs.pages.dev/p/700b32c522f2/scared-of-speaking/img/live-palco.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "She is nervous about speaking in public.",
          "img": "https://wolf-labs.pages.dev/p/700b32c522f2/scared-of-speaking/img/live-palco.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "We are tired of waiting for the bus.",
          "img": "https://wolf-labs.pages.dev/p/700b32c522f2/scared-of-speaking/img/live-palco.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Which small word? Four quick ones.",
      "regra": "<b>good at</b> · <b>scared of</b> · <b>tired of</b> · <b>nervous about</b> · <b>interested in</b> · then the verb with <b>-ing</b>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "I am interested in learning new songs.",
          "aceita": [],
          "d": "Dica: <b>interested in</b> + verbo com <b>-ing</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "I'm good in singing.",
          "r": "I'm good at singing.",
          "aceita": [],
          "d": "Dica: <b>good at</b>, nunca 'good in'."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: the verb after the small word.",
          "mostra": "She is scared of speak.",
          "r": "She is scared of speaking.",
          "aceita": [],
          "d": "Dica: depois da preposição, o verbo leva <b>-ing</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "I'm tired for waiting.",
          "r": "I'm tired of waiting.",
          "aceita": [],
          "d": "Dica: <b>tired of</b>, nunca 'tired for'."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/700b32c522f2/scared-of-speaking/img/live-palco.webp",
      "leg": "An empty stage with a microphone",
      "pede": "Look at the picture: a microphone on a stage. Write 2 or 3 sentences: one thing you are <b>good at</b>, and one thing you are <b>nervous about</b> or <b>tired of</b>. Use <b>-ing</b> after the small word.",
      "ph": "I'm good at …",
      "ex": "I'm good at cooking. I'm nervous about speaking in meetings. I'm tired of waiting for the bus."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What are you good at?",
          "ph": "I'm good at …",
          "ex": "I'm good at drawing and cooking."
        },
        {
          "q": "What are you nervous about, or tired of?",
          "ph": "I'm nervous about …",
          "ex": "I'm tired of waking up early."
        }
      ]
    }
  }
};
