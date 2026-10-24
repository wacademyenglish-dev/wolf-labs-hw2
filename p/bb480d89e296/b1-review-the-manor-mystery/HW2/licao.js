/* THE MANOR MYSTERY · LIÇÃO DE CASA 2.0 (23/10/2026) · revisão B1. Motor: hw2.js. JSON puro depois do "=". B1: nenhum português. */
window.HW2 = {
  "id": "b1-review-the-manor-mystery",
  "titulo": "The Manor Mystery",
  "nivel": "B1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/bb480d89e296/b1-review-the-manor-mystery/img/live-capa.webp",
  "alvo": "Unit 6 review: must / have to / mustn't / don't have to; be supposed to; could / managed to / was able to; deduction in the past: must have, might have, can't have + participle",
  "abrir": "What rules do you have to follow in your home?",
  "fecho": "<b>mustn't</b> = forbidden · <b>don't have to</b> = not necessary · <b>be supposed to</b> = the rule · <b>managed to</b> = one difficult success · Guessing the past: <b>must have</b> (sure), <b>might have</b> (maybe), <b>can't have</b> (impossible) + participle.",
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
      "sub": "Mia and Leo at an old manor house. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/bb480d89e296/b1-review-the-manor-mystery/img/live-conversa.webp",
      "leg": "A quiet room with a fire",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, the blue vase is on the floor! What happened last night?"
        },
        {
          "quem": "leo",
          "t": "I don't know. We're supposed to be in our rooms by midnight, so nobody should have been downstairs."
        },
        {
          "quem": "mia",
          "t": "It can't have been the cook. She was in the kitchen all night."
        },
        {
          "quem": "leo",
          "t": "True. And the nephew had headphones on. He might have heard something, but he can't have done it."
        },
        {
          "quem": "mia",
          "t": "Look at the window. It's wide open!"
        },
        {
          "quem": "leo",
          "t": "But guests mustn't open the windows. The house is very windy."
        },
        {
          "quem": "mia",
          "t": "Then the wind must have pushed the vase. Somebody must have opened the window first."
        },
        {
          "quem": "leo",
          "t": "The old aunt, maybe. She couldn't sleep, but she managed to open that heavy window."
        },
        {
          "quem": "mia",
          "t": "Well, she doesn't have to say sorry. It's only a vase."
        },
        {
          "quem": "leo",
          "t": "Let's ask her at breakfast. Case closed!"
        }
      ],
      "perguntas": [
        {
          "q": "Why can't it have been the cook?",
          "op": [
            "She was in the kitchen all night",
            "She was asleep upstairs",
            "She was not at the manor"
          ],
          "a": 0,
          "por": "It can't have been the cook. She was in the kitchen all night."
        },
        {
          "q": "What must have pushed the vase?",
          "op": [
            "The wind",
            "The cat",
            "The nephew"
          ],
          "a": 0,
          "por": "Then the wind must have pushed the vase."
        },
        {
          "q": "What did the old aunt manage to do?",
          "op": [
            "Open a heavy window",
            "Fix the vase",
            "Sleep all night"
          ],
          "a": 0,
          "por": "She couldn't sleep, but she managed to open that heavy window."
        }
      ]
    },
    "out": {
      "sub": "Three sentences about rules and guesses. Hear it, then say it.",
      "frases": [
        {
          "t": "Guests mustn't open the windows at night.",
          "au": "audio/say1.mp3"
        },
        {
          "t": "You don't have to wear a suit at breakfast.",
          "au": "audio/say2.mp3"
        },
        {
          "t": "The window was open, so it must have been the wind.",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "must, have to, managed to, must have. Four quick ones.",
      "regra": "<b>mustn't</b> = forbidden · <b>don't have to</b> = not necessary · <b>managed to</b> = succeeded · <b>must have</b> + participle = a guess about the past.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "It can't have been the cat because it was outside.",
          "aceita": [],
          "d": "Hint: <b>can't have</b> + participle = impossible, in the past."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "You mustn't bring a gift. It's not necessary.",
          "r": "You don't have to bring a gift. It's not necessary.",
          "aceita": [],
          "d": "Hint: not necessary is <b>don't have to</b>. <i>Mustn't</i> means forbidden."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "The vase must broke at two o'clock.",
          "r": "The vase must have broken at two o'clock.",
          "aceita": [
            "The vase must have been broken at two o'clock."
          ],
          "d": "Hint: <b>must have</b> + participle (<i>broken</i>)."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: it was difficult, and it worked.",
          "mostra": "Yesterday I could open the heavy door.",
          "r": "Yesterday I managed to open the heavy door.",
          "aceita": [
            "Yesterday I was able to open the heavy door."
          ],
          "d": "Hint: one difficult success in the past: <b>managed to</b> or <b>was able to</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/bb480d89e296/b1-review-the-manor-mystery/img/live-conversa.webp",
      "leg": "An old room with a fire",
      "pede": "Look at the picture: an old room with a fire and two armchairs. Write 2 or 3 sentences: who must have sat there, and one rule for guests in an old house. Use <b>must have</b>, <b>mustn't</b> or <b>don't have to</b>.",
      "ph": "Someone must have …",
      "ex": "Someone must have sat by the fire. Guests mustn't leave the door open, but they don't have to wear a suit."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What is a rule you have to follow? What is something you don't have to do?",
          "ph": "I have to … but I don't have to …",
          "ex": "I have to answer emails by nine, but I don't have to wear a suit."
        },
        {
          "q": "Something is missing from your bag or desk. What might have happened?",
          "ph": "I might have … / Someone must have …",
          "ex": "My pen is gone. I might have left it at work."
        }
      ]
    }
  }
};
