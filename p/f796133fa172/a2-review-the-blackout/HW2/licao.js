/* THE BLACKOUT · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Revisão A2: mistura das unidades da aula. A2: dicas em português só nas notas (d). Sem imagens. */
window.HW2 = {
  "id": "a2-review-the-blackout",
  "titulo": "The Blackout",
  "nivel": "A2",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/f796133fa172/a2-review-the-blackout/img/live-capa.webp",
  "alvo": "Unit 3 review, what was happening: past continuous (was / were + -ing), past continuous x past simple with when / while, used to / didn't use to, would for past habits; never she were, never I use to",
  "abrir": "What were you doing last night at eight?",
  "fecho": "Action in progress: <b>was / were + -ing</b> (<i>I was cooking</i>). Short action: past simple (<i>when the lights went out</i>). Old habit: <b>used to</b> or <b>would</b>. Never <i>she were</i>, never <i>I use to</i>.",
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
      "sub": "Mia and Leo in their building after the lights went out. About 45 seconds.",
      "img": "https://wolf-labs.pages.dev/p/f796133fa172/a2-review-the-blackout/img/live-capa.webp",
      "leg": "The building in the dark",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, what were you doing when the lights went out?"
        },
        {
          "quem": "mia",
          "t": "I was cooking pasta! Then everything was dark."
        },
        {
          "quem": "leo",
          "t": "I was in the elevator. I was going up when it stopped."
        },
        {
          "quem": "mia",
          "t": "Oh no! Were you scared?"
        },
        {
          "quem": "leo",
          "t": "A little. While I was waiting, I called the manager."
        },
        {
          "quem": "mia",
          "t": "The lights used to go out every month in this building."
        },
        {
          "quem": "leo",
          "t": "Really? I didn't use to have problems in my old flat."
        },
        {
          "quem": "mia",
          "t": "When I was a kid, we would play cards in the dark."
        },
        {
          "quem": "leo",
          "t": "That sounds fun. Let's eat your pasta by candlelight."
        },
        {
          "quem": "mia",
          "t": "Good idea. I'll find some candles!"
        }
      ],
      "perguntas": [
        {
          "q": "What was Mia doing when the lights went out?",
          "op": [
            "Watching TV",
            "Cooking pasta",
            "Sleeping"
          ],
          "a": 1,
          "por": "I was cooking pasta!"
        },
        {
          "q": "Where was Leo?",
          "op": [
            "In the elevator",
            "In the kitchen",
            "On the stairs"
          ],
          "a": 0,
          "por": "I was in the elevator."
        },
        {
          "q": "What would Mia do when she was a kid?",
          "op": [
            "Read books",
            "Watch TV",
            "Play cards in the dark"
          ],
          "a": 2,
          "por": "We would play cards in the dark."
        }
      ]
    },
    "out": {
      "sub": "Three sentences from the blackout. Hear it, then say it.",
      "frases": [
        {
          "t": "I was cooking when the lights went out.",
          "au": "audio/say1.mp3"
        },
        {
          "t": "While she was reading, the phone rang.",
          "au": "audio/say2.mp3"
        },
        {
          "t": "We used to play cards in the dark.", "img": "https://wolf-labs.pages.dev/p/f796133fa172/a2-review-the-blackout/img/live-conversa.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "was / were + -ing, used to. Four quick ones.",
      "regra": "<b>was / were + -ing</b> for the long action · past simple for the short one (<b>when</b>) · <b>used to</b> + verb for old habits.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "What were you doing when the lights went out?",
          "aceita": [],
          "d": "Dica: <b>What were you doing</b> + <b>when</b> + ação curta."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: was or were?",
          "mostra": "She were cooking pasta.",
          "r": "She was cooking pasta.",
          "aceita": [],
          "d": "Dica: com <b>she / he / it</b> use <b>was</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: past habit.",
          "mostra": "I use to live here.",
          "r": "I used to live here.",
          "aceita": [],
          "d": "Dica: hábito do passado é <b>used to</b>, com <b>d</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: after was, add -ing.",
          "mostra": "I was cook when the phone rang.",
          "r": "I was cooking when the phone rang.",
          "aceita": [],
          "d": "Dica: depois de <b>was</b>, o verbo leva <b>-ing</b>: <b>cooking</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "pede": "Write 2 or 3 sentences about a time something stopped or went wrong. Use <b>was / were + -ing</b> with <b>when</b> or <b>while</b>.",
      "ph": "I was … when …",
      "ex": "I was watching a movie when the lights went out. While I was looking for a candle, my phone rang."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What were you doing yesterday at eight PM?",
          "ph": "Yesterday at eight I was …",
          "ex": "I was having dinner with my family."
        },
        {
          "q": "What did you use to do when you were a kid?",
          "ph": "I used to …",
          "ex": "I used to play football in the street."
        }
      ]
    }
  }
};
