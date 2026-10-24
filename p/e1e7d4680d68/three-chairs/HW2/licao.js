/* THREE CHAIRS · LIÇÃO DE CASA 2.0 (24/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: modais no passado (must / might / can't / should have). Versículos (WEB, ao pé da letra): Luke 15:20 (Listen), Luke 15:22 (Out loud), Luke 15:28 (Você). Nada da Bíblia é marcado como errado. B2: nenhum português. */
window.HW2 = {
  "id": "three-chairs",
  "titulo": "Three Chairs",
  "nivel": "B2",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/e1e7d4680d68/three-chairs/img/live-cadeiras.webp",
  "alvo": "modals in the past: must have (sure), might / may / could have (maybe), can't have (impossible), should / shouldn't have (a mistake); always + past participle; never must had, must have went, should have call",
  "abrir": "Think of a friend who didn't answer your message. What might have happened?",
  "fecho": "<b>must have</b> = I'm sure · <b>might / could have</b> = maybe · <b>can't have</b> = impossible · <b>should / shouldn't have</b> = a mistake. Always <b>have + past participle</b>: <i>He must have gone home.</i> Never <i>must had</i>, never <i>must have went</i>.",
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
      "sub": "Mia and Leo talk about a brother who did not call. She reads Luke 15:20. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/e1e7d4680d68/three-chairs/img/live-cadeiras.webp",
      "leg": "A long table in the evening light",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, you look puzzled. What's wrong?"
        },
        {
          "quem": "leo",
          "t": "My brother didn't call me on my birthday. He must have forgotten. Or he might have been busy."
        },
        {
          "quem": "mia",
          "t": "He can't have forgotten. He always remembers. Maybe his phone broke."
        },
        {
          "quem": "leo",
          "t": "Maybe. I should have called him first, honestly."
        },
        {
          "quem": "mia",
          "t": "Listen, I'm reading Luke chapter fifteen, verse twenty. A son comes home after a long time, and this is what the father does."
        },
        {
          "quem": "mia",
          "t": "He arose and came to his father. But while he was still far off, his father saw him and was moved with compassion, and ran, fell on his neck, and kissed him."
        },
        {
          "quem": "leo",
          "t": "The father must have been waiting for him. Otherwise he couldn't have seen him from so far away."
        },
        {
          "quem": "mia",
          "t": "Exactly. And the son might have been nervous. He must have practised what to say."
        },
        {
          "quem": "leo",
          "t": "He shouldn't have left in the first place, though."
        },
        {
          "quem": "mia",
          "t": "Maybe. But the father didn't wait to hear that. He ran."
        },
        {
          "quem": "leo",
          "t": "OK, I'll call my brother now. I shouldn't have waited so long."
        }
      ],
      "perguntas": [
        {
          "q": "What does Leo think about his brother?",
          "op": [
            "He might have been busy",
            "He must have been angry",
            "He can't have been busy"
          ],
          "a": 0,
          "por": "He must have forgotten. Or he might have been busy."
        },
        {
          "q": "Why does Leo say the father must have been waiting?",
          "op": [
            "He saw his son from far away",
            "He was working in the field",
            "He heard music from the house"
          ],
          "a": 0,
          "por": "Otherwise he couldn't have seen him from so far away."
        },
        {
          "q": "What does Leo decide to do?",
          "op": [
            "Call his brother",
            "Wait a few more days",
            "Go to his brother's house"
          ],
          "a": 0,
          "por": "OK, I'll call my brother now."
        }
      ]
    },
    "out": {
      "sub": "Three sentences about the past. The third is from the Bible: Luke 15:22 (World English Bible). Hear it, then say it.",
      "frases": [
        {
          "t": "He must have walked for many days.",
          "img": "https://wolf-labs.pages.dev/p/e1e7d4680d68/three-chairs/img/live-estrada.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "She should have called her brother first.",
          "img": "https://wolf-labs.pages.dev/p/e1e7d4680d68/three-chairs/img/live-cadeiras.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "Put a ring on his hand and sandals on his feet.",
          "img": "https://wolf-labs.pages.dev/p/e1e7d4680d68/three-chairs/img/live-capa2.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Modals in the past. Four quick ones.",
      "regra": "<b>must have</b> = sure · <b>might have</b> = maybe · <b>can't have</b> = impossible · <b>should have</b> = a mistake · always + <b>past participle</b>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "He must have been very tired.",
          "aceita": [],
          "d": "Hint: sure about the past → <b>must have</b> + participle."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "He must have went home late.",
          "r": "He must have gone home late.",
          "aceita": [],
          "d": "Hint: <b>go – went – gone</b>. After <b>have</b>, use the participle."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "She must had left early.",
          "r": "She must have left early.",
          "aceita": [
            "She must've left early."
          ],
          "d": "Hint: after a modal, <b>have</b>, never <i>had</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "I should have call you yesterday.",
          "r": "I should have called you yesterday.",
          "aceita": [],
          "d": "Hint: after <b>have</b>, the participle: <b>called</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/e1e7d4680d68/three-chairs/img/live-estrada.webp",
      "leg": "An empty road at sunset",
      "pede": "Look at the picture: an empty road at sunset. Someone has walked down it. Write 2 or 3 sentences about who it was and what happened. Use <b>must have</b>, <b>might have</b> or <b>can't have</b>.",
      "ph": "Someone must have … He might have …",
      "ex": "Someone must have walked here this morning. He might have been going home. He can't have been in a hurry."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "Luke 15:28 says, “But he was angry and would not go in.” Think of a time you felt left out. What should someone have done? What shouldn't they have done?",
          "ph": "They should have … They shouldn't have …",
          "ex": "When my friends planned a trip without me, they should have told me. They shouldn't have decided alone."
        },
        {
          "q": "Think of a friend who didn't answer your message. What might have happened? What must have happened?",
          "ph": "She might have … She must have …",
          "ex": "She might have been busy at work. She must have left her phone at home."
        }
      ]
    }
  }
};
