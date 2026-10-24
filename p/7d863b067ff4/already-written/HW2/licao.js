/* ALREADY WRITTEN · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: past perfect (had + particípio). B2: nenhum português. Escritora na cabana do lago; sem terror, sem morte. Só live-* escuras. */
window.HW2 = {
  "id": "already-written",
  "titulo": "Already Written",
  "nivel": "B2",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/7d863b067ff4/already-written/img/live-typewriter.webp",
  "alvo": "past perfect: had + third form for the earlier moment in a story told in the past (By the time he arrived, I had gone to bed); signals by the time, when, before, after, already, never; had written / had gone, never had wrote; hadn't never",
  "abrir": "Think of yesterday. What had you already done by nine o'clock?",
  "fecho": "<b>Had + third form</b> = the earlier moment in a story told in the past: <i>By the time he arrived, I had gone to bed.</i> Signals: <b>by the time, when, before, after, already, never</b>. The third form is the real one: <i>had written, had gone</i>, never <i>had wrote</i>. And only one negative: <i>had never seen</i>, not <i>hadn't never</i>.",
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
      "sub": "Mia and Leo at a lake cabin. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/7d863b067ff4/already-written/img/live-cabin.webp",
      "leg": "A quiet cabin by a misty lake",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, I got to the cabin at nine, and the lights were already off. What happened?"
        },
        {
          "quem": "mia",
          "t": "By the time you arrived, I had gone to bed. I had written for twelve hours."
        },
        {
          "quem": "leo",
          "t": "Twelve hours? Had you eaten anything?"
        },
        {
          "quem": "mia",
          "t": "No, I hadn't eaten since breakfast. And I had forgotten to charge my phone, so you couldn't reach me."
        },
        {
          "quem": "leo",
          "t": "I called five times. When I saw the pier, I realized that you had left the lantern on for me."
        },
        {
          "quem": "mia",
          "t": "Yes, I had put it there before I started the last chapter."
        },
        {
          "quem": "leo",
          "t": "And the book? Had you finished it?"
        },
        {
          "quem": "mia",
          "t": "Almost. After I had read the last page out loud, I understood that the ending had been on the first page all along."
        },
        {
          "quem": "leo",
          "t": "So it was already written."
        },
        {
          "quem": "mia",
          "t": "Exactly. I had just needed to read it again."
        }
      ],
      "perguntas": [
        {
          "q": "Why couldn't Leo reach Mia?",
          "op": [
            "She had forgotten to charge her phone",
            "She had lost her phone",
            "She had turned it off on purpose"
          ],
          "a": 0,
          "por": "I had forgotten to charge my phone, so you couldn't reach me."
        },
        {
          "q": "What had Mia left for Leo?",
          "op": [
            "A lantern on the pier",
            "A note on the door",
            "A key under the mat"
          ],
          "a": 0,
          "por": "You had left the lantern on for me."
        },
        {
          "q": "What did Mia understand at the end?",
          "op": [
            "The ending had been on the first page",
            "The book was too long",
            "She had lost a chapter"
          ],
          "a": 0,
          "por": "The ending had been on the first page all along."
        }
      ]
    },
    "out": {
      "sub": "Three sentences about an earlier moment. Hear it, then say it.",
      "frases": [
        {
          "t": "By the time he arrived, I had already gone to bed.",
          "img": "https://wolf-labs.pages.dev/p/7d863b067ff4/already-written/img/live-cabin.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "I hadn't eaten since breakfast because I had been writing all day.",
          "img": "https://wolf-labs.pages.dev/p/7d863b067ff4/already-written/img/live-typewriter.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "I had left the lantern on the pier before the sun went down.",
          "img": "https://wolf-labs.pages.dev/p/7d863b067ff4/already-written/img/live-pier.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "had + third form. Four quick ones.",
      "regra": "<b>had</b> + third form for the earlier moment · <b>by the time, when, before, after, already</b> · <b>had written</b>, not <i>had wrote</i> · <b>never</b> alone: <i>had never seen</i>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "When he arrived, I had already left.",
          "aceita": [],
          "d": "Hint: the earlier moment takes <b>had</b> + third form: <b>had left</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is missing.",
          "mostra": "When we arrived, the film already started.",
          "r": "When we arrived, the film had already started.",
          "aceita": [],
          "d": "Hint: the film started first, so it needs <b>had</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "I had wrote the letter before he called.",
          "r": "I had written the letter before he called.",
          "aceita": [],
          "d": "Hint: after <b>had</b>, use the third form of <i>write</i>: <b>written</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "She hadn't never seen the lake before.",
          "r": "She had never seen the lake before.",
          "aceita": [
            "She hadn't ever seen the lake before."
          ],
          "d": "Hint: use only one negative: <b>had never</b>, or <b>hadn't ever</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/7d863b067ff4/already-written/img/live-typewriter.webp",
      "leg": "A typewriter and a lamp on a desk",
      "pede": "Look at the picture: a typewriter and a lamp on a desk. Write 2 or 3 sentences about a day when something was already finished or already gone before you arrived. Use <b>had + third form</b> and <b>by the time</b>, <b>when</b> or <b>before</b>.",
      "ph": "By the time I got there, … had already …",
      "ex": "By the time I got home, my family had already eaten. I had forgotten my keys, so I waited outside."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "By the time you left home this morning, what had you already done?",
          "ph": "By the time I left, I had …",
          "ex": "By the time I left, I had already made coffee and answered two messages."
        },
        {
          "q": "Think of a day that went badly. What had you forgotten?",
          "ph": "I had forgotten …",
          "ex": "I had forgotten my umbrella, so I got wet on the way to work."
        }
      ]
    }
  }
};
