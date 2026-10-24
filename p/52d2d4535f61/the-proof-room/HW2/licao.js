/* THE PROOF ROOM · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: could × was able to × managed to. B1: nenhum português na lição. */
window.HW2 = {
  "id": "the-proof-room",
  "titulo": "The Proof Room",
  "nivel": "B1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/52d2d4535f61/the-proof-room/img/live-saida.webp",
  "alvo": "could (years, a skill) vs was able to (one moment, you did it) vs managed to (one moment, and it was hard); couldn't works for both",
  "abrir": "What was the hardest thing you did this week?",
  "fecho": "<b>Could</b> is for years, a skill: <i>I could swim at six.</i> For one moment use <b>was able to</b> (<i>I was able to book the last seat</i>) or <b>managed to</b> when it was hard (<i>After three tries, I managed to open it</i>). <b>Couldn't</b> works for both.",
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
      "sub": "Mia and Leo before work. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/52d2d4535f61/the-proof-room/img/live-caixa.webp",
      "leg": "A stuck bike lock",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, you won't believe my morning. The lock on my bike was jammed."
        },
        {
          "quem": "mia",
          "t": "Again? Last year you could open it with your eyes closed."
        },
        {
          "quem": "leo",
          "t": "I know. Last year I could open anything. Today, I couldn't."
        },
        {
          "quem": "mia",
          "t": "So what did you do?"
        },
        {
          "quem": "leo",
          "t": "I tried the key for ten minutes. Then I put some oil on it, and I managed to open it."
        },
        {
          "quem": "mia",
          "t": "At least you were able to get to work on time."
        },
        {
          "quem": "leo",
          "t": "Barely. I was able to catch the eight-thirty train, but I couldn't find a seat."
        },
        {
          "quem": "mia",
          "t": "That's a small price. When we were kids, you could climb any tree."
        },
        {
          "quem": "leo",
          "t": "Yes, and I could never sit still. Now I can't even open a bike lock."
        },
        {
          "quem": "mia",
          "t": "Don't worry. Next time, call me. I'll bring the oil."
        }
      ],
      "perguntas": [
        {
          "q": "How did Leo finally open the lock?",
          "op": [
            "With oil, after ten minutes",
            "With a new key",
            "Mia opened it"
          ],
          "a": 0,
          "por": "I put some oil on it, and I managed to open it."
        },
        {
          "q": "What could Leo do last year?",
          "op": [
            "Open any lock",
            "Fix any bike",
            "Catch any train"
          ],
          "a": 0,
          "por": "Last year I could open anything."
        },
        {
          "q": "What could Leo do when he was a kid?",
          "op": [
            "Climb any tree",
            "Sit still for hours",
            "Ride without hands"
          ],
          "a": 0,
          "por": "When we were kids, you could climb any tree."
        }
      ]
    },
    "out": {
      "sub": "Three sentences from the lesson. Hear it, then say it.",
      "frases": [
        {
          "t": "After ten minutes, I managed to open the lock.",
          "img": "https://wolf-labs.pages.dev/p/52d2d4535f61/the-proof-room/img/live-caixa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "Last year I could open any lock, but today I couldn't.",
          "img": "https://wolf-labs.pages.dev/p/52d2d4535f61/the-proof-room/img/live-chaves.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "I was able to catch the early train, but I couldn't find a seat.",
          "img": "https://wolf-labs.pages.dev/p/52d2d4535f61/the-proof-room/img/live-porta.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Years or one moment? Four quick ones.",
      "regra": "<b>could</b> = years, a skill · <b>was able to</b> = one moment, you did it · <b>managed to</b> = one moment, and it was hard · <b>couldn't</b> = both.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "I managed to fix the door after ten minutes.",
          "aceita": [],
          "d": "Hint: one hard moment, so <b>managed to</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "I could open the jar last night.",
          "r": "I managed to open the jar last night.",
          "aceita": [
            "I was able to open the jar last night."
          ],
          "d": "Hint: one night is one moment, so not <i>could</i>. Use <b>managed to</b> or <b>was able to</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is missing.",
          "mostra": "She managed open the window after three tries.",
          "r": "She managed to open the window after three tries.",
          "aceita": [
            "She was able to open the window after three tries."
          ],
          "d": "Hint: <b>managed</b> is always followed by <b>to</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: this is a skill from years.",
          "mostra": "When I was a child, I managed to swim very well.",
          "r": "When I was a child, I could swim very well.",
          "aceita": [
            "As a child, I could swim very well."
          ],
          "d": "Hint: a skill over years takes <b>could</b>, not <i>managed to</i>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/52d2d4535f61/the-proof-room/img/live-chaves.webp",
      "leg": "Four keys on a table",
      "pede": "Look at the picture: the keys. Write 2 or 3 sentences: a problem you solved once (<b>managed to</b> / <b>was able to</b>) and something you <b>could</b> do as a child.",
      "ph": "Last week I managed to …",
      "ex": "Last week I managed to fix my phone after an hour. When I was a child, I could ride a bike with no hands."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What could you do as a child that you can't do now?",
          "ph": "When I was …, I could …",
          "ex": "When I was ten, I could do a cartwheel. Now I can't."
        },
        {
          "q": "Tell me about something difficult you managed to do this year.",
          "ph": "This year I managed to …",
          "ex": "This year I managed to run ten kilometers, even though I hated running."
        }
      ]
    }
  }
};
