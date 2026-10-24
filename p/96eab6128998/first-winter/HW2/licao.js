/* FIRST WINTER · LIÇÃO DE CASA 2.0 (24/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: past perfect em histórias (had + participle, had never, by the time). B2: nenhum português na lição. */
window.HW2 = {
  "id": "first-winter",
  "titulo": "First Winter",
  "nivel": "B2",
  "minutos": 10,
  "alvo": "past perfect in a story: had + participle for what happened earlier (the battery had died, the bus had already left), had never + participle (I had never seen black ice), by the time + past simple; never 'I never had seen', never 'had went'",
  "abrir": "What is the coldest day you have ever lived through?",
  "fecho": "In a story, the <b>earlier</b> past takes <b>had</b> + participle: <i>When I got to the car, the battery had died.</i> <b>Had never</b>: <i>I had never seen black ice.</i> <b>By the time</b> + past simple, then the past perfect: <i>By the time I got there, the bus had left.</i> Order: <b>had never seen</b>, not <i>never had seen</i>. Participle: <b>had gone</b>, <b>had frozen</b>.",
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
      "sub": "Mia tells Leo about her morning in Prince George. A new scene, about one minute.",
      "leg": "Mia and Leo, after a cold morning",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, you look frozen. What happened this morning?"
        },
        {
          "quem": "mia",
          "t": "It was a disaster. When I got to the car, the battery had died, because I hadn't plugged in the block heater."
        },
        {
          "quem": "leo",
          "t": "So how did you get to class?"
        },
        {
          "quem": "mia",
          "t": "I walked to the bus stop, but by the time I got there, the bus had already left."
        },
        {
          "quem": "leo",
          "t": "Oh no. Did you slip on the ice?"
        },
        {
          "quem": "mia",
          "t": "Almost. I had never seen black ice before, so I didn't see it until my foot slid."
        },
        {
          "quem": "leo",
          "t": "So who helped you?"
        },
        {
          "quem": "mia",
          "t": "My neighbour Carol saw me from her window. She had lived here for fifty years, so she knew exactly what to do. She gave me a ride."
        },
        {
          "quem": "leo",
          "t": "Do you miss home?"
        },
        {
          "quem": "mia",
          "t": "A little. Before I came here, I had never been so far from my family. But Carol made me a hot coffee, and I felt much better."
        }
      ],
      "perguntas": [
        {
          "q": "Why had the car battery died?",
          "op": [
            "She hadn't plugged in the block heater",
            "She had left the lights on",
            "She had forgotten her keys"
          ],
          "a": 0,
          "por": "The battery had died, because I hadn't plugged in the block heater."
        },
        {
          "q": "What had happened by the time Mia got to the bus stop?",
          "op": [
            "The bus had already left",
            "The bus hadn't come yet",
            "The bus had broken down"
          ],
          "a": 0,
          "por": "By the time I got there, the bus had already left."
        },
        {
          "q": "What had Mia never seen before?",
          "op": [
            "Deep snow",
            "Black ice",
            "A block heater"
          ],
          "a": 1,
          "por": "I had never seen black ice before."
        }
      ],
      "audio": "audio/listen.mp3"
    },
    "out": {
      "sub": "Three sentences from the morning. Hear it, then say it.",
      "frases": [
        {
          "t": "When I got to the car, the battery had died.",
          "au": "audio/say1.mp3"
        },
        {
          "t": "I had never seen black ice before that morning.",
          "au": "audio/say2.mp3"
        },
        {
          "t": "By the time I got to the stop, the bus had already left.",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Which past comes first? Four quick ones.",
      "regra": "The earlier past: <b>had</b> + participle · <b>had never seen</b> · <b>by the time</b> + past simple · participles: <b>gone, frozen, seen</b>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "By the time we arrived, the bus had already left.",
          "aceita": [],
          "d": "Hint: the bus left first, so it takes <b>had</b> + participle."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: the bus left BEFORE you arrived.",
          "mostra": "When I arrived, the bus left.",
          "r": "When I arrived, the bus had left.",
          "aceita": [
            "When I arrived, the bus had already left."
          ],
          "d": "Hint: the earlier event needs <b>had</b> + participle."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is in the wrong place.",
          "mostra": "I never had seen snow before.",
          "r": "I had never seen snow before.",
          "aceita": [],
          "d": "Hint: <b>had never seen</b>: never goes between had and the participle."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "My feet had froze by then.",
          "r": "My feet had frozen by then.",
          "aceita": [],
          "d": "Hint: after <b>had</b>, use the participle: <b>frozen</b>, not <i>froze</i>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "pede": "Write 2 or 3 sentences about a bad morning you had, real or imagined. Use <b>had</b> + participle at least once, and <b>by the time</b> if you can.",
      "ph": "By the time I got there, … had …",
      "ex": "This morning my alarm hadn't gone off, so I woke up late. By the time I got to the stop, the bus had already left. I had never run so fast in my life!"
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "Think of your first week in a new place (a new school, job or city). What had you never done before?",
          "ph": "I had never …",
          "ex": "I had never taken the subway alone before I started my new job."
        },
        {
          "q": "By the time you left home this morning, what had you already done?",
          "ph": "By the time I left home, I had …",
          "ex": "By the time I left home, I had made coffee and packed my bag."
        }
      ]
    }
  }
};
