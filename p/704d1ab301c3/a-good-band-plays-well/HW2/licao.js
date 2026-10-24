/* A GOOD BAND PLAYS WELL · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: good x well, -ly. A1: dicas em português só nas notas (d). */
window.HW2 = {
  "id": "a-good-band-plays-well",
  "titulo": "A Good Band Plays Well",
  "nivel": "A1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/704d1ab301c3/a-good-band-plays-well/img/live-capa.webp",
  "alvo": "good (the thing: a good band, she is good) versus well (the doing: she sings well); -ly for how (slowly, badly, carefully); fast and hard stay the same; never sings good, never a well singer",
  "abrir": "What do you do well?",
  "fecho": "<b>Good</b> = about the thing: <i>a good band, she is good.</i> <b>Well</b> = about the doing: <i>she sings well.</i> Many words add <b>-ly</b>: <i>slowly, badly, carefully.</i> <b>Fast</b> and <b>hard</b> stay the same.",
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
      "sub": "Mia and Leo in a record shop. A new scene, about 45 seconds.",
      "img": "https://wolf-labs.pages.dev/p/704d1ab301c3/a-good-band-plays-well/img/live-palco.webp",
      "leg": "Guitars in a small music room",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, listen. The band in the corner is good."
        },
        {
          "quem": "mia",
          "t": "Yes, they are. They play very well."
        },
        {
          "quem": "leo",
          "t": "The singer is a good singer. She sings beautifully."
        },
        {
          "quem": "mia",
          "t": "But the drummer plays badly. He plays too loudly."
        },
        {
          "quem": "leo",
          "t": "Maybe. But he works hard. He practices every day."
        },
        {
          "quem": "mia",
          "t": "OK. He plays fast, and he works hard."
        },
        {
          "quem": "leo",
          "t": "Do you play anything yourself?"
        },
        {
          "quem": "mia",
          "t": "I play the guitar, but I play it badly."
        },
        {
          "quem": "leo",
          "t": "Don't worry. Play slowly and carefully. You can play well one day."
        }
      ],
      "perguntas": [
        {
          "q": "How does the singer sing?",
          "op": [
            "She sings beautifully",
            "She sings badly",
            "She sings slowly"
          ],
          "a": 0,
          "por": "She sings beautifully."
        },
        {
          "q": "How does the drummer play?",
          "op": [
            "Badly and loudly",
            "Well and quietly",
            "Slowly and carefully"
          ],
          "a": 0,
          "por": "The drummer plays badly. He plays too loudly."
        },
        {
          "q": "How does Mia play the guitar?",
          "op": [
            "She plays it badly",
            "She plays it very well",
            "She plays it fast"
          ],
          "a": 0,
          "por": "I play the guitar, but I play it badly."
        }
      ]
    },
    "out": {
      "sub": "Three sentences about a band. Hear it, then say it.",
      "frases": [
        {
          "t": "The singer sings very well.",
          "img": "https://wolf-labs.pages.dev/p/704d1ab301c3/a-good-band-plays-well/img/live-palco.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "It is a good band, and they play loudly.",
          "img": "https://wolf-labs.pages.dev/p/704d1ab301c3/a-good-band-plays-well/img/live-mesa.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "He plays the drums badly, but he works hard.",
          "img": "https://wolf-labs.pages.dev/p/704d1ab301c3/a-good-band-plays-well/img/live-vitrola.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "good or well? Four quick ones.",
      "regra": "<b>good</b> = the thing (a good band) · <b>well</b> = the doing (plays well) · <b>-ly</b> = how (slowly, carefully) · never <i>sings good</i>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "She plays the guitar very well.",
          "aceita": [],
          "d": "Dica: o fazer pede <b>well</b>: plays + very well."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "She sings good.",
          "r": "She sings well.",
          "aceita": [
            "She sings very well."
          ],
          "d": "Dica: cantar é um fazer, então <b>well</b>, não good."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "He is a well drummer.",
          "r": "He is a good drummer.",
          "aceita": [
            "He is a good drummer."
          ],
          "d": "Dica: antes de um substantivo (drummer), use <b>good</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "He drives careful.",
          "r": "He drives carefully.",
          "aceita": [
            "He drives very carefully."
          ],
          "d": "Dica: dirigir é um fazer: careful + <b>-ly</b> = carefully."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/704d1ab301c3/a-good-band-plays-well/img/live-capa.webp",
      "leg": "A guitar in its case in a record shop",
      "pede": "Look at the picture: a guitar in its case in a record shop. Write 2 or 3 sentences about a band or a singer you know: what they are like (<b>good</b>) and how they play or sing (<b>well</b>, <b>-ly</b>).",
      "ph": "My favorite band is a good band. They play …",
      "ex": "My favorite band is a good band. The singer sings beautifully, and the drummer plays very well."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "Who is a good singer or band for you? How do they sing or play?",
          "ph": "… is a good band. They play …",
          "ex": "Coldplay is a good band. They play very well live."
        },
        {
          "q": "What do you do well? What do you do badly?",
          "ph": "I … well. I … badly.",
          "ex": "I cook well. I sing badly, but I love it."
        }
      ]
    }
  }
};
