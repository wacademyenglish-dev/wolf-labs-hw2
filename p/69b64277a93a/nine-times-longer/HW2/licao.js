/* NINE TIMES LONGER · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: comparativos duplos (the more…, the less…) e multiplicadores. B2: nenhum português na lição. */
window.HW2 = {
  "id": "nine-times-longer",
  "titulo": "Nine Times Longer",
  "nivel": "B2",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/69b64277a93a/nine-times-longer/img/hw-capa.webp",
  "alvo": "double comparatives: The more X, the more/less/fewer Y · The -er X, the -er Y (two THEs, one comma); multipliers: twice as long as, three times longer than, half as many as",
  "abrir": "What takes you longer than it should? Why?",
  "fecho": "<b>The more …, the less …</b>: two THEs tie two amounts, with one comma between them: <i>The more you check, the less you finish.</i> For numbers: <i>twice as long <b>as</b></i>, <i>three times longer <b>than</b></i>, <i>half as many <b>as</b></i>.",
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
      "sub": "Mia and Leo at the office. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/69b64277a93a/nine-times-longer/img/envelopes.webp",
      "leg": "The inbox that never ends",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, did you see the new rule? Every team has to answer within an hour."
        },
        {
          "quem": "mia",
          "t": "I saw it. The faster we answer, the more messages we get, so it's a trap."
        },
        {
          "quem": "leo",
          "t": "Last week I checked my inbox every ten minutes. The more I checked it, the less I finished."
        },
        {
          "quem": "mia",
          "t": "Of course. Every interruption costs you twenty minutes. My report took three times longer than usual."
        },
        {
          "quem": "leo",
          "t": "So what's the fix? Checking twice a day?"
        },
        {
          "quem": "mia",
          "t": "Try it. The sooner you start, the better. With half as many checks, I think you'll finish twice as much."
        },
        {
          "quem": "leo",
          "t": "And if a client complains?"
        },
        {
          "quem": "mia",
          "t": "The longer we wait, the angrier they get. But a quick answer is not always a good answer."
        },
        {
          "quem": "leo",
          "t": "Fine. Tomorrow I'll try once an hour, not every ten minutes."
        },
        {
          "quem": "mia",
          "t": "Good. Let's see who finishes first."
        }
      ],
      "perguntas": [
        {
          "q": "Why does Leo finish less work?",
          "op": [
            "He checks his inbox too often",
            "He has too many clients",
            "He works fewer hours"
          ],
          "a": 0,
          "por": "The more I checked it, the less I finished."
        },
        {
          "q": "How long did Mia's report take?",
          "op": [
            "Three times longer than usual",
            "Half as long as usual",
            "Twice as long as usual"
          ],
          "a": 0,
          "por": "My report took three times longer than usual."
        },
        {
          "q": "What will Leo try tomorrow?",
          "op": [
            "Checking once an hour",
            "Checking twice a day",
            "Not checking at all"
          ],
          "a": 0,
          "por": "Tomorrow I'll try once an hour, not every ten minutes."
        }
      ]
    },
    "out": {
      "sub": "Three sentences from the lesson. Hear it, then say it.",
      "frases": [
        {
          "t": "The more messages we answer, the less real work we finish.",
          "img": "https://wolf-labs.pages.dev/p/69b64277a93a/nine-times-longer/img/monitor.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "The longer the queue, the worse the replies.",
          "img": "https://wolf-labs.pages.dev/p/69b64277a93a/nine-times-longer/img/envelopes.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "Fixing it took three times longer than writing it.",
          "img": "https://wolf-labs.pages.dev/p/69b64277a93a/nine-times-longer/img/marte.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Two THEs, one comma. Four quick ones.",
      "regra": "<b>The</b> more / less / fewer / -er … <b>,</b> <b>the</b> more / less / fewer / -er … · <b>twice as long as</b> · <b>three times longer than</b>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "The more you check your phone, the less you read.",
          "aceita": [],
          "d": "Hint: two THEs and one comma. The first amount goes up, the second one goes down."
        },
        {
          "tipo": "escreve",
          "t": "Say it with two THEs.",
          "mostra": "If you start earlier, you feel calmer.",
          "r": "The earlier you start, the calmer you feel.",
          "aceita": [
            "The sooner you start, the calmer you feel."
          ],
          "d": "Hint: The + comparative, comma, the + comparative. Short adjectives take -er: earlier, calmer."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "The more emails you send, the less replies you get.",
          "r": "The more emails you send, the fewer replies you get.",
          "aceita": [],
          "d": "Hint: you can count replies, so <b>fewer</b>, not <i>less</i>."
        },
        {
          "tipo": "escreve",
          "t": "Write it with a multiplier.",
          "mostra": "Normal: 2 hours. Today: 6 hours. (longer)",
          "r": "It took three times longer than usual.",
          "aceita": [
            "Today it took three times longer than usual.",
            "It took three times longer than normal.",
            "Today it took three times longer than normal.",
            "It took three times as long as usual.",
            "Today it took three times as long as usual."
          ],
          "d": "Hint: <b>three times longer than</b>, or <b>three times as long as</b>. Never <i>three times more long</i>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/69b64277a93a/nine-times-longer/img/marte.webp",
      "leg": "A machine, busy and silent",
      "pede": "Look at the picture: a machine that was busy all day and finished nothing. Write 2 or 3 sentences about it, or about your own week. Use <b>The more …, the less …</b> or a multiplier.",
      "ph": "The more tasks it did, the less …",
      "ex": "The more small tasks it did, the less important work it finished. My week is the same: the more messages I answer, the less I write. My reports take twice as long as they should."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "The more you use your phone, what changes in your day?",
          "ph": "The more I use my phone, the …",
          "ex": "The more I use my phone, the less I sleep, and the more tired I feel at work."
        },
        {
          "q": "What takes you three times longer than it should? Why?",
          "ph": "… takes me three times longer than it should because …",
          "ex": "Cleaning my inbox takes me three times longer than it should because I read every message twice."
        }
      ]
    }
  }
};
