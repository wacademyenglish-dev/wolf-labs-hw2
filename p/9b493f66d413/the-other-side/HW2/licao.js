/* THE OTHER SIDE · LIÇÃO DE CASA 2.0 (24/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: past modals (should/could/might/would have). B2: nenhum português. Cenário neutro: cabana na neve, violão esquecido; sem violência. */
window.HW2 = {
  "id": "the-other-side",
  "titulo": "The Other Side",
  "nivel": "B2",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/9b493f66d413/the-other-side/img/live-porch.webp",
  "alvo": "past modals: should have + participle (a regret), could have + participle (it was possible, it did not happen), might have + participle (maybe it happened), would have + participle (the result of an imagined past). Never: should have + base verb, should to have, could have took.",
  "abrir": "What is one thing you should have done last week?",
  "fecho": "<b>should have + participle</b> = a regret. <b>could have</b> = it was possible, but it didn't happen. <b>might have</b> = maybe it happened. <b>would have</b> = the result of an imagined past. Always the participle: <i>should have called</i>, <i>could have taken</i>.",
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
  "rate": "-8%",
  "rodadas": {
    "listen": {
      "sub": "Mia and Leo after a weekend in a snowy cabin. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/9b493f66d413/the-other-side/img/live-town.webp",
      "leg": "A snowy mountain town at night",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "I can't believe I forgot my guitar at the cabin. I should have checked the porch before we left."
        },
        {
          "quem": "mia",
          "t": "You could have called the owner. She might have found it already."
        },
        {
          "quem": "leo",
          "t": "I should have asked her yesterday. I was too busy."
        },
        {
          "quem": "mia",
          "t": "If you had packed the night before, you wouldn't have forgotten it."
        },
        {
          "quem": "leo",
          "t": "True. I should have listened to you. You said that twice."
        },
        {
          "quem": "mia",
          "t": "I could have packed it myself, honestly. I should have helped."
        },
        {
          "quem": "leo",
          "t": "No, it's my fault. And the snow was heavy, so we might have missed the bus anyway."
        },
        {
          "quem": "mia",
          "t": "Let's call her now. She might have put it in the kitchen."
        },
        {
          "quem": "leo",
          "t": "Good idea. Next time I'll make a list."
        },
        {
          "quem": "mia",
          "t": "And I'll remind you. We both should have done that this morning."
        }
      ],
      "perguntas": [
        {
          "q": "What did Leo forget at the cabin?",
          "op": [
            "His guitar",
            "His phone",
            "His coat"
          ],
          "a": 0,
          "por": "I can't believe I forgot my guitar at the cabin."
        },
        {
          "q": "What does Mia say Leo could have done?",
          "op": [
            "Called the owner",
            "Taken a taxi",
            "Stayed one more night"
          ],
          "a": 0,
          "por": "You could have called the owner."
        },
        {
          "q": "Why might they have missed the bus?",
          "op": [
            "The snow was heavy",
            "They woke up late",
            "The bus was full"
          ],
          "a": 0,
          "por": "The snow was heavy, so we might have missed the bus anyway."
        }
      ]
    },
    "out": {
      "sub": "Three sentences. Hear it, then say it.",
      "frases": [
        {
          "t": "I should have taken the guitar from the porch.",
          "img": "https://wolf-labs.pages.dev/p/9b493f66d413/the-other-side/img/live-porch.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "We could have walked across the bridge before dark.",
          "img": "https://wolf-labs.pages.dev/p/9b493f66d413/the-other-side/img/live-bridge.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "If I had written in my journal, I would have remembered the day.",
          "img": "https://wolf-labs.pages.dev/p/9b493f66d413/the-other-side/img/live-journal.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Should have, could have, would have. Four quick ones.",
      "regra": "<b>should / could / might / would have</b> + the <b>participle</b> (called, taken, gone, seen) · never the base verb after <b>have</b>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "You should have called her before you left.",
          "aceita": [],
          "d": "Hint: <b>should have</b> + participle = a regret."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "I should have call her last night.",
          "r": "I should have called her last night.",
          "aceita": [
            "I should've called her last night.",
            "I should have phoned her last night."
          ],
          "d": "Hint: after <b>have</b> use the participle: <b>called</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "We could have took the earlier bus.",
          "r": "We could have taken the earlier bus.",
          "aceita": [
            "We could've taken the earlier bus."
          ],
          "d": "Hint: <b>take, took, taken</b>: after <b>have</b> we need <b>taken</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is extra.",
          "mostra": "He should to have asked for help.",
          "r": "He should have asked for help.",
          "aceita": [
            "He should've asked for help."
          ],
          "d": "Hint: after <b>should</b> there is no <b>to</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/9b493f66d413/the-other-side/img/live-journal.webp",
      "leg": "An open journal and a cup on a table",
      "pede": "Look at the picture: a journal and a cup on a table. Write 2 or 3 sentences about a day you could have used better. Use <b>should have</b>, <b>could have</b> or <b>might have</b>.",
      "ph": "I should have …",
      "ex": "I should have written in my journal yesterday. I could have finished it before dinner, but I might have been too tired."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What is one thing you should have done last week?",
          "ph": "I should have …",
          "ex": "I should have gone to the gym on Monday."
        },
        {
          "q": "What could you have done better last month?",
          "ph": "I could have …",
          "ex": "I could have saved more money and spent less on food."
        }
      ]
    }
  }
};
