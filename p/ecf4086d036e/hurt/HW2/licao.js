/* HURT · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: second conditional (if + past, would). Linha de música: NENHUM verso aqui; o listening é diálogo original. B2: nenhum português. */
window.HW2 = {
  "id": "hurt",
  "titulo": "Hurt",
  "nivel": "B2",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/ecf4086d036e/hurt/img/live-violao.webp",
  "alvo": "second conditional: if + past simple, would + base verb for an imaginary present or future; If I were you, I would ... for advice; never if + would, never if + will",
  "abrir": "If you had one extra hour every day, what would you do with it?",
  "fecho": "Imaginary: <b>if + past simple, would + base verb</b>. <i>If I had more time, I would learn to play.</i> No <b>would</b> after <b>if</b>. Advice: <b>If I were you, I would…</b> The real world uses <i>will</i>; the imaginary one uses <i>would</i>.",
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
      "sub": "Mia and Leo find an old guitar. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/ecf4086d036e/hurt/img/live-guitarra.webp",
      "leg": "A guitar on a chair by a window",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, I found this old guitar in the storage room. If I had more time, I would learn to play it properly."
        },
        {
          "quem": "mia",
          "t": "You always say that. If I were you, I would practice ten minutes a day."
        },
        {
          "quem": "leo",
          "t": "Ten minutes? If I practiced every day, would I really get better?"
        },
        {
          "quem": "mia",
          "t": "You would. If you played for a month, your fingers would feel stronger."
        },
        {
          "quem": "leo",
          "t": "And if I had a teacher, I would learn faster."
        },
        {
          "quem": "mia",
          "t": "If I knew a good one, I would tell you. Actually, my cousin teaches on Saturdays."
        },
        {
          "quem": "leo",
          "t": "If he charged too much, I wouldn't go."
        },
        {
          "quem": "mia",
          "t": "He wouldn't charge anything. He teaches in the library for free."
        },
        {
          "quem": "leo",
          "t": "Then I would go this Saturday."
        }
      ],
      "perguntas": [
        {
          "q": "What would Leo do if he had more time?",
          "op": [
            "Learn to play the guitar properly",
            "Sell the guitar",
            "Visit the library"
          ],
          "a": 0,
          "por": "If I had more time, I would learn to play it properly."
        },
        {
          "q": "What would Mia do in Leo's place?",
          "op": [
            "Practice ten minutes a day",
            "Buy a new guitar",
            "Wait for a month"
          ],
          "a": 0,
          "por": "If I were you, I would practice ten minutes a day."
        },
        {
          "q": "Why wouldn't the price be a problem?",
          "op": [
            "Mia's cousin teaches for free in the library",
            "The guitar is already cheap",
            "Leo has a lot of money"
          ],
          "a": 0,
          "por": "He teaches in the library for free."
        }
      ]
    },
    "out": {
      "sub": "Three imaginary sentences. Hear it, then say it.",
      "frases": [
        {
          "t": "If I had more time, I would learn to play.",
          "img": "https://wolf-labs.pages.dev/p/ecf4086d036e/hurt/img/live-violao.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "If I were you, I would practice every day.",
          "img": "https://wolf-labs.pages.dev/p/ecf4086d036e/hurt/img/live-guitarra.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "If he taught for free, I would go every Saturday.",
          "img": "https://wolf-labs.pages.dev/p/ecf4086d036e/hurt/img/live-capa.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "if + past, would + verb. Four quick ones.",
      "regra": "<b>if</b> + past simple, <b>would</b> + base verb · <b>If I were you, I would…</b> · never <i>if + would</i>, never <i>if + will</i>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "If I knew a good teacher, I would tell you.",
          "aceita": [],
          "d": "Hint: <b>if</b> + past (<b>knew</b>), then <b>would</b> + base verb."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "If she practiced more, she will play better.",
          "r": "If she practiced more, she would play better.",
          "aceita": [],
          "d": "Hint: an imaginary result takes <b>would</b>, not <i>will</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "If I were you, I will ask for a lesson.",
          "r": "If I were you, I would ask for a lesson.",
          "aceita": [
            "If I was you, I would ask for a lesson."
          ],
          "d": "Hint: advice in the imaginary world: <b>I would</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "If he teaches for free, I would go every week.",
          "r": "If he taught for free, I would go every week.",
          "aceita": [],
          "d": "Hint: after <b>if</b>, the past simple for an imaginary situation."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/ecf4086d036e/hurt/img/live-violao.webp",
      "leg": "A guitar next to a small lamp",
      "pede": "Look at the picture: a guitar next to a small lamp. Write 2 or 3 imaginary sentences: what you would do with one free hour every day, and what advice you would give a friend. Use <b>if + past, would + verb</b> and <b>If I were you, …</b>",
      "ph": "If I had an extra hour, I would …",
      "ex": "If I had an extra hour every day, I would learn to draw. I would also walk more. If I were you, I would try a new hobby."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "If you had a free afternoon every week, what would you do?",
          "ph": "If I had a free afternoon, I would …",
          "ex": "If I had a free afternoon every week, I would learn to paint."
        },
        {
          "q": "A friend wants to learn something new. What would you say?",
          "ph": "If I were you, I would …",
          "ex": "If I were you, I would choose one small goal and practice a little every day."
        }
      ]
    }
  }
};
