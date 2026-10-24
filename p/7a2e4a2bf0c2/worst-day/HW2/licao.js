/* THE WORST DAY · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: past simple: didn't, Did...?, wasn't, because / so. A1: dicas em português só nas notas (d). */
window.HW2 = {
  "id": "worst-day",
  "titulo": "The Worst Day",
  "nivel": "A1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/7a2e4a2bf0c2/worst-day/img/live-dominos.webp",
  "alvo": "past simple: didn't + plain verb (I didn't go), Did you ...? + plain verb, wasn't / weren't for be, because (reason) and so (result)",
  "abrir": "What went wrong for you this week?",
  "fecho": "<b>didn't</b> + plain verb: <i>I didn't take a taxi.</i> A question: <b>Did</b> you + plain verb: <i>Did you catch the bus?</i> The verb <b>be</b> is different: <i>It wasn't open.</i> <b>because</b> = the reason: <i>I was late because the alarm didn't ring.</i> <b>so</b> = the result: <i>The alarm didn't ring, so I woke up late.</i>",
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
      "sub": "Mia meets Leo after a very bad morning. A new scene, about 45 seconds.",
      "img": "https://wolf-labs.pages.dev/p/7a2e4a2bf0c2/worst-day/img/live-chuva.webp",
      "leg": "Two umbrellas on a wet street",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, you look very wet. What happened this morning?"
        },
        {
          "quem": "leo",
          "t": "It was a bad morning. I didn't take an umbrella, so I walked in the rain."
        },
        {
          "quem": "mia",
          "t": "Why didn't you take a taxi?"
        },
        {
          "quem": "leo",
          "t": "I didn't have my wallet. It was at home."
        },
        {
          "quem": "mia",
          "t": "Did you catch the bus?"
        },
        {
          "quem": "leo",
          "t": "No, I didn't. The bus left without me, because I woke up late."
        },
        {
          "quem": "mia",
          "t": "Why did you wake up late?"
        },
        {
          "quem": "leo",
          "t": "My phone died, so the alarm didn't ring."
        },
        {
          "quem": "mia",
          "t": "Did you arrive on time?"
        },
        {
          "quem": "leo",
          "t": "No, I didn't. I arrived at nine, and the office was closed. I forgot it was Sunday!"
        }
      ],
      "perguntas": [
        {
          "q": "Why didn't Leo take a taxi?",
          "op": [
            "He didn't have his wallet",
            "He didn't like taxis",
            "The taxi was late"
          ],
          "a": 0,
          "por": "I didn't have my wallet. It was at home."
        },
        {
          "q": "Why did the bus leave without Leo?",
          "op": [
            "He woke up late",
            "He lost his umbrella",
            "He was in a taxi"
          ],
          "a": 0,
          "por": "The bus left without me, because I woke up late."
        },
        {
          "q": "Why didn't the alarm ring?",
          "op": [
            "His phone died",
            "He didn't set it",
            "It was Sunday"
          ],
          "a": 0,
          "por": "My phone died, so the alarm didn't ring."
        }
      ]
    },
    "out": {
      "sub": "Three sentences about a bad morning. Hear it, then say it.",
      "frases": [
        {
          "t": "My phone died, so the alarm didn't ring.",
          "img": "https://wolf-labs.pages.dev/p/7a2e4a2bf0c2/worst-day/img/live-celular.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "I didn't take an umbrella, so I walked in the rain.",
          "img": "https://wolf-labs.pages.dev/p/7a2e4a2bf0c2/worst-day/img/live-chuva.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "The door was closed because it was Sunday.",
          "img": "https://wolf-labs.pages.dev/p/7a2e4a2bf0c2/worst-day/img/live-porta.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "didn't, did or wasn't? Four quick ones.",
      "regra": "<b>didn't</b> + plain verb · <b>Did</b> you + plain verb · <b>wasn't</b> for be · <b>because</b> = reason · <b>so</b> = result.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "My phone died, so I didn't hear the alarm.",
          "aceita": [],
          "d": "Dica: o resultado vem depois de <b>so</b>; <b>didn't</b> + verbo limpo (hear)."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "He didn't went to work.",
          "r": "He didn't go to work.",
          "aceita": [
            "He did not go to work."
          ],
          "d": "Dica: depois de <b>didn't</b>, o verbo fica limpo: go."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "Did you saw the email?",
          "r": "Did you see the email?",
          "aceita": [],
          "d": "Dica: depois de <b>Did</b>, o verbo fica limpo: see."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "The wallet didn't was in my bag.",
          "r": "The wallet wasn't in my bag.",
          "aceita": [
            "The wallet was not in my bag."
          ],
          "d": "Dica: o verbo <b>be</b> nunca usa didn't: <b>wasn't</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/7a2e4a2bf0c2/worst-day/img/live-chuva.webp",
      "leg": "Two umbrellas on a wet street",
      "pede": "Look at the picture: two umbrellas on a wet street. Write 2 or 3 sentences about a bad morning: one thing you <b>didn't</b> do, and why. Use <b>didn't</b>, <b>because</b> or <b>so</b>.",
      "ph": "I didn't … because …",
      "ex": "I didn't take an umbrella, so I walked in the rain. My bag wasn't dry, because the rain was strong."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What time did you wake up today? Did you sleep well?",
          "ph": "I woke up at … I didn't …",
          "ex": "I woke up at seven. I didn't sleep well, because it was hot."
        },
        {
          "q": "What didn't you do yesterday? Why?",
          "ph": "Yesterday I didn't … because …",
          "ex": "Yesterday I didn't cook dinner, so I ate a sandwich."
        }
      ]
    }
  }
};
