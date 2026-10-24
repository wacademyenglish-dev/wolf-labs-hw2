/* ONE WISH · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: second conditional: if + past, would + verbo. Filme: falas originais, no mundo da aula, sem violência. B1: nenhum português. */
window.HW2 = {
  "id": "one-wish",
  "titulo": "One Wish",
  "nivel": "B1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/992bfaf49899/one-wish/img/live-capa.webp",
  "alvo": "second conditional: If + past simple, would + plain verb for an unreal or unlikely situation (If I had one wish, I would ...); What would you do if ...?; could after if (If I could choose); never would after if, never if + present",
  "abrir": "If you had one wish, what would you ask for?",
  "fecho": "<b>If + past, would + verb</b> = something unreal or unlikely: <i>If I had one wish, I would ask for more time.</i> A question: <b>What would you do if …?</b> After <i>if</i>, never <i>would</i>: not <i>If I would have</i>. <b>If I could …</b> (not <i>If I can</i>).",
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
      "sub": "Mia and Leo find an old lamp in a shop. A new scene, about 45 seconds.",
      "img": "https://wolf-labs.pages.dev/p/992bfaf49899/one-wish/img/live-lampada.webp",
      "leg": "An old lamp with a thin smoke",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, look at this old lamp in the shop. What would you do if you had one wish?"
        },
        {
          "quem": "mia",
          "t": "If I had one wish, I would ask for more time. I'm always late."
        },
        {
          "quem": "leo",
          "t": "That's a small wish! If I had one wish, I would travel the world for a year."
        },
        {
          "quem": "mia",
          "t": "Where would you go first?"
        },
        {
          "quem": "leo",
          "t": "If I could choose, I would go to Japan. And what would you do if the lamp really worked?"
        },
        {
          "quem": "mia",
          "t": "If it worked, I would think very carefully. Wishes have prices."
        },
        {
          "quem": "leo",
          "t": "If I were you, I wouldn't make a wish at all. Let's just keep the lamp on a shelf."
        }
      ],
      "perguntas": [
        {
          "q": "What would Mia wish for?",
          "op": [
            "More time",
            "A new house",
            "A lot of money"
          ],
          "a": 0,
          "por": "If I had one wish, I would ask for more time."
        },
        {
          "q": "Where would Leo go first?",
          "op": [
            "Japan",
            "Brazil",
            "London"
          ],
          "a": 0,
          "por": "If I could choose, I would go to Japan."
        },
        {
          "q": "What would Leo do if he were Mia?",
          "op": [
            "He wouldn't make a wish",
            "He would wish for time",
            "He would sell the lamp"
          ],
          "a": 0,
          "por": "If I were you, I wouldn't make a wish at all."
        }
      ]
    },
    "out": {
      "sub": "Three sentences about wishes. Hear it, then say it.",
      "frases": [
        {
          "t": "If I had one wish, I would ask for more time.",
          "img": "https://wolf-labs.pages.dev/p/992bfaf49899/one-wish/img/live-lampada.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "If I were you, I would sleep early tonight.",
          "img": "https://wolf-labs.pages.dev/p/992bfaf49899/one-wish/img/live-quarto.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "If I found this shop, I would look at every shelf.",
          "img": "https://wolf-labs.pages.dev/p/992bfaf49899/one-wish/img/live-capa.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "If + past, would + verb. Four quick ones.",
      "regra": "<b>If + past</b>, <b>would</b> + plain verb · never <i>If I would</i> · <b>If I could</b> · <b>What would you do</b> if …?",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "If I had more time, I would paint.",
          "aceita": [],
          "d": "Hint: <b>if</b> + past, then <b>would</b> + plain verb."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "If I would have time, I would travel.",
          "r": "If I had time, I would travel.",
          "aceita": [],
          "d": "Hint: no <b>would</b> after if. Use the past: <b>had</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "If I can choose, I would stay.",
          "r": "If I could choose, I would stay.",
          "aceita": [],
          "d": "Hint: an unreal situation needs <b>could</b>, not can."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: the word order is wrong.",
          "mostra": "What you would do if you won?",
          "r": "What would you do if you won?",
          "aceita": [],
          "d": "Hint: in a question, <b>would</b> comes before <b>you</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/992bfaf49899/one-wish/img/live-quarto.webp",
      "leg": "A quiet bedroom at night",
      "pede": "Look at the picture: a quiet bedroom at night. Write 2 or 3 sentences about wishes. Use <b>If + past, would + verb</b>.",
      "ph": "If I had …, I would …",
      "ex": "If I had one wish, I would ask for more free time. If I had more money, I would travel to Japan."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "If you had one wish, what would you ask for?",
          "ph": "If I had one wish, I would …",
          "ex": "If I had one wish, I would ask for a calm life by the sea."
        },
        {
          "q": "What would you do if you didn't have to work tomorrow?",
          "ph": "If I didn't have to work, I would …",
          "ex": "If I didn't have to work, I would sleep late and go to the beach."
        }
      ]
    }
  }
};
