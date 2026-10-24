/* THE ROAD TO EMMAUS · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: past continuous x past simple, while / when. Bíblia WEB: Luke 24:15 e 24:31 (Out loud), Luke 24:32 (Listen e Você). Nada da Bíblia é marcado como errado. A2: dicas em português só nas notas (d). */
window.HW2 = {
  "id": "the-road-to-emmaus",
  "titulo": "The Road to Emmaus",
  "nivel": "A2",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/46193e331b31/the-road-to-emmaus/img/live-caminho.webp",
  "alvo": "past continuous (were / was + -ing) for the long action and past simple for the short moment; while / when; they were (never they was); What were you doing? (were before you); the moment in the past (rang, came), never the base verb",
  "abrir": "What were you doing at nine o'clock last night?",
  "fecho": "The long action: <b>was / were + -ing</b>: <i>They were walking.</i> The short moment: past simple: <i>A man came near.</i> Together: <b>While</b> they were walking, a man came. <i>They were</i>, never <i>they was</i>. Question: <i>What were you doing?</i>",
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
      "sub": "Mia tells Leo about two friends on a long road. She reads Luke 24:32. A new scene, about 50 seconds.",
      "img": "https://wolf-labs.pages.dev/p/46193e331b31/the-road-to-emmaus/img/live-caminho.webp",
      "leg": "A long road at sunset",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, I'm reading a story about two friends on a long road."
        },
        {
          "quem": "leo",
          "t": "What were they doing?"
        },
        {
          "quem": "mia",
          "t": "They were walking to a village and they were talking about the week."
        },
        {
          "quem": "leo",
          "t": "Was anyone with them?"
        },
        {
          "quem": "mia",
          "t": "Yes! While they were talking, a man came near and walked with them. They didn't know him."
        },
        {
          "quem": "leo",
          "t": "When did they know him?"
        },
        {
          "quem": "mia",
          "t": "At the table. He took the bread, and their eyes were opened. Then they said this, in Luke 24:32. They said to one another, “Weren’t our hearts burning within us while he spoke to us along the way, and while he opened the Scriptures to us?”"
        },
        {
          "quem": "leo",
          "t": "What a happy moment! They were walking in the evening, and now they were smiling at the table."
        }
      ],
      "perguntas": [
        {
          "q": "What were the two friends doing on the road?",
          "op": [
            "Walking and talking",
            "Cooking dinner",
            "Sleeping"
          ],
          "a": 0,
          "por": "They were walking to a village and they were talking about the week."
        },
        {
          "q": "What happened while they were talking?",
          "op": [
            "A man came near",
            "It started to rain",
            "They saw a big house"
          ],
          "a": 0,
          "por": "While they were talking, a man came near and walked with them."
        },
        {
          "q": "Where did they know him?",
          "op": [
            "At the table, with the bread",
            "On the road",
            "In the village market"
          ],
          "a": 0,
          "por": "At the table. He took the bread, and their eyes were opened."
        }
      ]
    },
    "out": {
      "sub": "Three sentences. The second and third are from the Bible: Luke 24:15 and Luke 24:31 (World English Bible). Hear it, then say it.",
      "frases": [
        {
          "t": "The two friends were walking and talking.",
          "img": "https://wolf-labs.pages.dev/p/46193e331b31/the-road-to-emmaus/img/live-caminho.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "While they talked and questioned together, Jesus himself came near, and went with them.",
          "img": "https://wolf-labs.pages.dev/p/46193e331b31/the-road-to-emmaus/img/live-emaus.webp",
          "au": "audio/say2.mp3",
          "ref": "Luke 24:15"
        },
        {
          "t": "Their eyes were opened and they recognized him; then he vanished out of their sight.",
          "img": "https://wolf-labs.pages.dev/p/46193e331b31/the-road-to-emmaus/img/live-pao.webp",
          "au": "audio/say3.mp3",
          "ref": "Luke 24:31"
        }
      ]
    },
    "focus": {
      "sub": "Was / were + -ing or past simple? Four quick ones.",
      "regra": "<b>was / were + -ing</b> = the long action · past simple = the short moment · <b>while / when</b> · <b>they were</b> · <b>What were you doing?</b>",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "I was cooking when my brother called.",
          "aceita": [],
          "d": "Dica: a ação longa fica com <b>was cooking</b>; o momento curto fica no passado simples: <b>called</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "They was talking when I arrived.",
          "r": "They were talking when I arrived.",
          "aceita": [],
          "d": "Dica: com <b>they</b> o certo é <b>were</b>, nunca 'they was'."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: the question is wrong.",
          "mostra": "What you were doing at six?",
          "r": "What were you doing at six?",
          "aceita": [],
          "d": "Dica: na pergunta, <b>were</b> vem antes de <b>you</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "While she was cooking, the phone ring.",
          "r": "While she was cooking, the phone rang.",
          "aceita": [
            "When she was cooking, the phone rang."
          ],
          "d": "Dica: o momento curto está no passado: <b>rang</b>, não 'ring'."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/46193e331b31/the-road-to-emmaus/img/live-pao.webp",
      "leg": "A table, a candle and bread",
      "pede": "Look at the picture: a table with bread and a candle in the evening. Write 2 or 3 sentences about last night at your table. What were you doing? What happened? Use <b>was / were + -ing</b> and a past verb.",
      "ph": "Last night I was … when …",
      "ex": "Last night I was eating dinner when my friend called. We were talking for an hour."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "In Luke 24:32 two friends say, “Weren’t our hearts burning within us while he spoke to us along the way, and while he opened the Scriptures to us?” Think of a good talk with a friend. What were you doing, and where?",
          "ph": "I was … with my friend …",
          "ex": "I was walking with my friend and we were talking about music."
        },
        {
          "q": "What were you doing at nine o'clock last night?",
          "ph": "At nine I was …",
          "ex": "At nine I was watching a series when my friend called."
        }
      ]
    }
  }
};
