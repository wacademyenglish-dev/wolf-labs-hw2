/* WHILE WE WERE SLEEPING · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: past continuous x past simple. Filme: falas originais, no mundo da aula, sem violência. B1: nenhum português. */
window.HW2 = {
  "id": "while-we-were-sleeping",
  "titulo": "While We Were Sleeping",
  "nivel": "B1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/cd2c9d3fcbfa/while-we-were-sleeping/img/live-capa.webp",
  "alvo": "past continuous x past simple: was / were + -ing for the long action, cut by when + past simple (the moment); while + -ing; What were you doing when ...? ; never was + base verb, never while + past simple",
  "abrir": "What were you doing last night at nine?",
  "fecho": "<b>was / were + -ing</b> = the long action: <i>I was sleeping.</i> <b>when + past simple</b> = the moment that cuts it: <i>when the lights went out.</i> <b>while + -ing</b> = the long action again: <i>While she was cooking, …</i> A question: <b>What were you doing when …?</b>",
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
      "sub": "Mia and Leo compare a strange night. A new scene, about 45 seconds.",
      "img": "https://wolf-labs.pages.dev/p/cd2c9d3fcbfa/while-we-were-sleeping/img/live-tokio.webp",
      "leg": "A control room full of screens",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, what were you doing when the lights went out last night?"
        },
        {
          "quem": "mia",
          "t": "I was sleeping. A loud noise woke me up."
        },
        {
          "quem": "leo",
          "t": "I was watching a movie when the screen went black."
        },
        {
          "quem": "mia",
          "t": "My neighbor was walking his dog while the whole street was sleeping. He says the sky turned green."
        },
        {
          "quem": "leo",
          "t": "Green? I was making coffee when the radio started to play only static."
        },
        {
          "quem": "mia",
          "t": "While we were sleeping, something strange happened all over the world."
        },
        {
          "quem": "leo",
          "t": "And what was your sister doing in Tokyo?"
        },
        {
          "quem": "mia",
          "t": "She was waiting for the bus when every clock stopped at the same minute."
        },
        {
          "quem": "leo",
          "t": "Every clock? That's creepy."
        }
      ],
      "perguntas": [
        {
          "q": "What was Mia doing when the lights went out?",
          "op": [
            "She was sleeping",
            "She was watching a movie",
            "She was making coffee"
          ],
          "a": 0,
          "por": "I was sleeping. A loud noise woke me up."
        },
        {
          "q": "What was Leo doing when the screen went black?",
          "op": [
            "He was watching a movie",
            "He was walking a dog",
            "He was making coffee"
          ],
          "a": 0,
          "por": "I was watching a movie when the screen went black."
        },
        {
          "q": "What was Mia's sister doing when every clock stopped?",
          "op": [
            "She was waiting for the bus",
            "She was sleeping",
            "She was driving"
          ],
          "a": 0,
          "por": "She was waiting for the bus when every clock stopped at the same minute."
        }
      ]
    },
    "out": {
      "sub": "Three sentences about a strange night. Hear it, then say it.",
      "frases": [
        {
          "t": "I was sleeping when the lights went out.",
          "img": "https://wolf-labs.pages.dev/p/cd2c9d3fcbfa/while-we-were-sleeping/img/live-capa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "While we were driving, the sky turned green.",
          "img": "https://wolf-labs.pages.dev/p/cd2c9d3fcbfa/while-we-were-sleeping/img/live-campo.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "She was waiting for the bus when every clock stopped.",
          "img": "https://wolf-labs.pages.dev/p/cd2c9d3fcbfa/while-we-were-sleeping/img/live-relogios.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Was / were + -ing, then when + past. Four quick ones.",
      "regra": "<b>was / were + -ing</b> (long action) · <b>when + past simple</b> (the moment) · <b>while + -ing</b> · <b>What were you doing</b> when …?",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "I was cooking when the lights went out.",
          "aceita": [],
          "d": "Hint: <b>was + -ing</b> first, then <b>when</b> + past simple."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "I was watch TV when she called.",
          "r": "I was watching TV when she called.",
          "aceita": [],
          "d": "Hint: after <b>was</b>, use the -ing form."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "While she cooked, the lights went out.",
          "r": "While she was cooking, the lights went out.",
          "aceita": [],
          "d": "Hint: after <b>while</b>, use the long action: <b>was cooking</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: the word order is wrong.",
          "mostra": "What you were doing when it rained?",
          "r": "What were you doing when it rained?",
          "aceita": [],
          "d": "Hint: in a question, <b>were</b> comes before <b>you</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/cd2c9d3fcbfa/while-we-were-sleeping/img/live-tokio.webp",
      "leg": "A control room at night",
      "pede": "Look at the picture: a control room full of screens at night. Write 2 or 3 sentences about a night you remember. Use <b>was / were + -ing</b> with <b>when</b> or <b>while</b>.",
      "ph": "I was … when …",
      "ex": "I was sleeping when my phone rang. My brother was playing a game while I was cooking."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What were you doing at nine last night?",
          "ph": "I was … at nine.",
          "ex": "I was watching a series with my mother at nine."
        },
        {
          "q": "What was your family doing when you woke up today?",
          "ph": "My … was …",
          "ex": "My mother was making coffee and my father was reading the news."
        }
      ]
    }
  }
};
