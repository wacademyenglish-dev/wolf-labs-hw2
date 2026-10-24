/* THE OFFICE MYSTERY · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: must have / might have / can't have + particípio. B1: nenhum português. Só live-* escuras (sem a mancha, clara). */
window.HW2 = {
  "id": "office-mystery",
  "titulo": "The Office Mystery",
  "nivel": "B1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/dfbdec99110a/office-mystery/img/live-porta.webp",
  "alvo": "deduction about the past: must have + third form (sure it happened), might have (maybe), can't have (sure it didn't); never must took, must have went, mustn't have for a negative deduction",
  "abrir": "Think of something you lost once. What might have happened to it?",
  "fecho": "<b>must have</b> + third form = I am sure it happened. <b>might have</b> = maybe. <b>can't have</b> = I am sure it didn't. The modal never changes: <i>She must have taken it</i>, never <i>must took</i>. For a negative deduction, use <b>can't have</b>, not <i>mustn't have</i>.",
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
      "img": "https://wolf-labs.pages.dev/p/dfbdec99110a/office-mystery/img/live-mesa.webp",
      "leg": "A dark desk by the window",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, my prototype is gone. Somebody must have taken it last night."
        },
        {
          "quem": "mia",
          "t": "Who stayed late? The door log should tell us."
        },
        {
          "quem": "leo",
          "t": "Three people: Arthur, Elena and Marcus. Arthur left at nine, so he can't have taken it at midnight."
        },
        {
          "quem": "mia",
          "t": "True. What about Elena? She was here until eleven."
        },
        {
          "quem": "leo",
          "t": "She might have taken it. There's a wet tea stain on my desk, and Elena drinks green tea."
        },
        {
          "quem": "mia",
          "t": "Then she must have been at your desk. But wait. Marcus drinks green tea too."
        },
        {
          "quem": "leo",
          "t": "So it might have been Marcus. We need more proof."
        },
        {
          "quem": "mia",
          "t": "The garage camera must have seen who left with a box."
        },
        {
          "quem": "leo",
          "t": "Good idea. Let's go down to the garage."
        }
      ],
      "perguntas": [
        {
          "q": "Why can't Arthur have taken the prototype?",
          "op": [
            "He left at nine",
            "He has no key",
            "He was on holiday"
          ],
          "a": 0,
          "por": "Arthur left at nine, so he can't have taken it at midnight."
        },
        {
          "q": "What proof is there on the desk?",
          "op": [
            "A wet tea stain",
            "A broken lock",
            "A black coat"
          ],
          "a": 0,
          "por": "There's a wet tea stain on my desk."
        },
        {
          "q": "Where do Mia and Leo go at the end?",
          "op": [
            "To the garage",
            "To the kitchen",
            "To the front door"
          ],
          "a": 0,
          "por": "Let's go down to the garage."
        }
      ]
    },
    "out": {
      "sub": "Three deductions about last night. Hear it, then say it.",
      "frases": [
        {
          "t": "Somebody must have opened this door last night.",
          "img": "https://wolf-labs.pages.dev/p/dfbdec99110a/office-mystery/img/live-porta.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "It can't have been Arthur, because he left at nine.",
          "img": "https://wolf-labs.pages.dev/p/dfbdec99110a/office-mystery/img/live-mesa.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "The tea stain might have come from the kitchen.",
          "img": "https://wolf-labs.pages.dev/p/dfbdec99110a/office-mystery/img/live-copa.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "must have, might have, can't have. Four quick ones.",
      "regra": "<b>must have</b> = sure it did · <b>might have</b> = maybe · <b>can't have</b> = sure it didn't · always + the third form.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "She must have left the key on the desk.",
          "aceita": [],
          "d": "Hint: <b>must have</b> + third form (left): you are sure."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "He must took the prototype last night.",
          "r": "He must have taken the prototype last night.",
          "aceita": [],
          "d": "Hint: <b>must have</b> + the third form: taken."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "She can't have went home yet.",
          "r": "She can't have gone home yet.",
          "aceita": [
            "She couldn't have gone home yet."
          ],
          "d": "Hint: after <b>have</b>, use the third form: gone, not went."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "It mustn't have been Marcus.",
          "r": "It can't have been Marcus.",
          "aceita": [
            "It couldn't have been Marcus."
          ],
          "d": "Hint: when you are sure it did NOT happen, use <b>can't have</b>, never <i>mustn't have</i>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/dfbdec99110a/office-mystery/img/live-garagem.webp",
      "leg": "An empty car park at night",
      "pede": "Look at the picture: an empty car park at night. Write 2 or 3 sentences about who was here and what happened. Use <b>must have</b>, <b>might have</b> or <b>can't have</b>.",
      "ph": "Somebody must have … It can't have been …",
      "ex": "Somebody must have parked here, because there is an oil stain. It can't have been today. A car might have left an hour ago."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "A friend is very late and doesn't answer the phone. What might have happened?",
          "ph": "She might have …",
          "ex": "She might have missed the bus. She must have forgotten her phone at home."
        },
        {
          "q": "Think of something you lost once. What do you think happened to it?",
          "ph": "I think I must have … It can't have …",
          "ex": "I lost my keys once. I must have left them in the car. They can't have fallen at home."
        }
      ]
    }
  }
};
