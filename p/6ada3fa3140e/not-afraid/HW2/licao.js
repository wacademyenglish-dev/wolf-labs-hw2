/* NOT AFRAID · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: adjective + to + verb; afraid of. Linha de música: NENHUM verso aqui; o listening é diálogo original. B1: nenhum português. */
window.HW2 = {
  "id": "not-afraid",
  "titulo": "Not Afraid",
  "nivel": "B1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/6ada3fa3140e/not-afraid/img/live-escada.webp",
  "alvo": "adjective + to + verb (ready to start, happy to hear, nervous to ask) and afraid of + noun / -ing (afraid of heights, afraid of speaking); never afraid of speak, happy of see",
  "abrir": "What are you afraid of?",
  "fecho": "<b>Adjective + to + verb</b>: <i>I'm ready to start. I'm happy to hear that.</i> <b>Afraid of + noun or -ing</b>: <i>I'm afraid of heights. I'm afraid of speaking.</i> Never <i>afraid of speak</i> and never <i>happy of see</i>.",
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
      "sub": "Mia and Leo before a big presentation. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/6ada3fa3140e/not-afraid/img/live-escada.webp",
      "leg": "A long staircase",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, you look nervous. Are you afraid of the presentation?"
        },
        {
          "quem": "mia",
          "t": "A little. I'm afraid of speaking in front of so many people."
        },
        {
          "quem": "leo",
          "t": "Why? You're good at it. It's easy to talk when you know the topic."
        },
        {
          "quem": "mia",
          "t": "True, but I'm not ready to go up on that stage yet. I'm afraid of making a mistake."
        },
        {
          "quem": "leo",
          "t": "Everyone is afraid of something. I'm afraid of heights, but I'm not afraid to try new things."
        },
        {
          "quem": "mia",
          "t": "What do you mean?"
        },
        {
          "quem": "leo",
          "t": "Yesterday I was nervous to ask my boss for a day off, but he said yes."
        },
        {
          "quem": "mia",
          "t": "That's great. I'm happy to hear that."
        },
        {
          "quem": "leo",
          "t": "So take one step. It's not hard to start."
        },
        {
          "quem": "mia",
          "t": "OK. I'm ready to go up those stairs and talk."
        }
      ],
      "perguntas": [
        {
          "q": "What is Mia afraid of?",
          "op": [
            "Speaking in front of many people",
            "Heights",
            "Her boss"
          ],
          "a": 0,
          "por": "I'm afraid of speaking in front of so many people."
        },
        {
          "q": "What is Leo afraid of?",
          "op": [
            "Heights",
            "Making a mistake",
            "Stairs"
          ],
          "a": 0,
          "por": "I'm afraid of heights."
        },
        {
          "q": "What was Leo nervous to do?",
          "op": [
            "Ask his boss for a day off",
            "Give a presentation",
            "Try a new job"
          ],
          "a": 0,
          "por": "I was nervous to ask my boss for a day off."
        }
      ]
    },
    "out": {
      "sub": "Three sentences about being ready. Hear it, then say it.",
      "frases": [
        {
          "t": "It's not hard to open the first door.",
          "img": "https://wolf-labs.pages.dev/p/6ada3fa3140e/not-afraid/img/live-porta.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "I'm ready to climb these stairs.",
          "img": "https://wolf-labs.pages.dev/p/6ada3fa3140e/not-afraid/img/live-escada.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "Are you afraid of driving at night?",
          "img": "https://wolf-labs.pages.dev/p/6ada3fa3140e/not-afraid/img/live-estrada.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "to or of? Four quick ones.",
      "regra": "<b>adjective + to + verb</b> (ready to start) · <b>afraid of + noun / -ing</b> (afraid of heights, afraid of flying).",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "My sister is afraid of speaking English.",
          "aceita": [],
          "d": "Hint: <b>afraid of</b> + verb-ing."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "I'm afraid of speak in public.",
          "r": "I'm afraid of speaking in public.",
          "aceita": [
            "I am afraid of speaking in public."
          ],
          "d": "Hint: after <b>of</b>, the verb takes <b>-ing</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "I'm happy of see you again.",
          "r": "I'm happy to see you again.",
          "aceita": [
            "I am happy to see you again."
          ],
          "d": "Hint: <b>happy to</b> + verb, not <i>of</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "I have afraid of the dark.",
          "r": "I am afraid of the dark.",
          "aceita": [
            "I'm afraid of the dark."
          ],
          "d": "Hint: in English it is <b>am afraid</b>, not <i>have afraid</i>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/6ada3fa3140e/not-afraid/img/live-escada.webp",
      "leg": "A long staircase going up",
      "pede": "Look at the picture: a long staircase going up. Write 2 or 3 sentences: what are you <b>afraid of</b>? What are you <b>ready to</b> do?",
      "ph": "I'm afraid of … but I'm ready to …",
      "ex": "I'm afraid of speaking in front of many people. But I'm ready to try, and I'm happy to learn."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What are you afraid of?",
          "ph": "I'm afraid of …",
          "ex": "I'm afraid of driving on the highway."
        },
        {
          "q": "What are you ready to do this year?",
          "ph": "I'm ready to …",
          "ex": "I'm ready to change my job, and I'm excited to learn new things."
        }
      ]
    }
  }
};
