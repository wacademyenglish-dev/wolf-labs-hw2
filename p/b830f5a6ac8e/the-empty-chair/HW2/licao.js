/* THE EMPTY CHAIR · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: should have / could have / couldn't have + participle. B2: nenhum portugues. Tema: pessoa ausente numa reuniao, sem luto. live-sala/trem/carta. */
window.HW2 = {
  "id": "the-empty-chair",
  "titulo": "The Empty Chair",
  "nivel": "B2",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/b830f5a6ac8e/the-empty-chair/img/live-sala.webp",
  "alvo": "should have / could have / couldn't have + past participle: should have = it was somebody's duty, could have = the chance was open, couldn't have = it was impossible; never should of, never should have went",
  "abrir": "Think of a meeting where one person was missing. What went wrong?",
  "fecho": "<b>should have</b> + past participle: it was somebody's duty (<i>she should have told him</i>). <b>could have</b>: the chance was open (<i>she could have called</i>). <b>couldn't have</b>: it was impossible (<i>he couldn't have known</i>). Never <i>should of</i>; the participle stays a participle: <i>should have gone</i>, not <i>went</i>.",
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
      "sub": "Mia and Leo after a meeting with an empty chair. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/b830f5a6ac8e/the-empty-chair/img/live-sala.webp",
      "leg": "The meeting room",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, the chair at the end of the table was empty again. Where was Marco?"
        },
        {
          "quem": "leo",
          "t": "He didn't come. Nobody told him that the meeting had moved to nine."
        },
        {
          "quem": "mia",
          "t": "Somebody should have told him. It was Sandra's job to send the update."
        },
        {
          "quem": "leo",
          "t": "True. She could have called him, too. She had his number."
        },
        {
          "quem": "mia",
          "t": "And Marco should have checked the calendar. He was counting on an old invitation."
        },
        {
          "quem": "leo",
          "t": "He couldn't have known about the change, though. The invitation never updated."
        },
        {
          "quem": "mia",
          "t": "So the real mistake was the system. We should have tested it before the launch."
        },
        {
          "quem": "leo",
          "t": "We could have fixed it last week. We just didn't look."
        },
        {
          "quem": "mia",
          "t": "Next time I'll send the update myself."
        }
      ],
      "perguntas": [
        {
          "q": "Why was the chair empty?",
          "op": [
            "Nobody told Marco about the new time",
            "Marco refused to come",
            "The meeting was cancelled"
          ],
          "a": 0,
          "por": "He didn't come. Nobody told him that the meeting had moved to nine."
        },
        {
          "q": "Whose job was it to send the update?",
          "op": [
            "Sandra's",
            "Marco's",
            "Leo's"
          ],
          "a": 0,
          "por": "It was Sandra's job to send the update."
        },
        {
          "q": "Why couldn't Marco have known about the change?",
          "op": [
            "The invitation never updated",
            "He never checks email",
            "Nobody had his number"
          ],
          "a": 0,
          "por": "He couldn't have known about the change, though. The invitation never updated."
        }
      ]
    },
    "out": {
      "sub": "Three sentences about a missed meeting. Hear it, then say it.",
      "frases": [
        {
          "t": "Somebody should have told him about the new time.",
          "img": "https://wolf-labs.pages.dev/p/b830f5a6ac8e/the-empty-chair/img/live-sala.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "She could have called him, but she didn't.",
          "img": "https://wolf-labs.pages.dev/p/b830f5a6ac8e/the-empty-chair/img/live-carta.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "He couldn't have known about the change.",
          "img": "https://wolf-labs.pages.dev/p/b830f5a6ac8e/the-empty-chair/img/live-trem.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "should have, could have, couldn't have. Four quick ones.",
      "regra": "<b>should have</b> = duty · <b>could have</b> = open chance · <b>couldn't have</b> = impossible · + past participle: <b>gone, told, known</b>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "We should have tested the system before the launch.",
          "aceita": [],
          "d": "Hint: <b>should have</b> + past participle."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is missing.",
          "mostra": "She should told him about the meeting.",
          "r": "She should have told him about the meeting.",
          "aceita": [],
          "d": "Hint: <b>should have</b> + participle. Never <i>should</i> + past alone."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "He should have went to the meeting.",
          "r": "He should have gone to the meeting.",
          "aceita": [],
          "d": "Hint: after <b>have</b>, use the participle: <b>gone</b>, not <i>went</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: it was impossible for him.",
          "mostra": "Nobody told him, so he should have known.",
          "r": "Nobody told him, so he couldn't have known.",
          "aceita": [
            "Nobody told him, so he could not have known."
          ],
          "d": "Hint: nobody told him, so it was impossible: <b>couldn't have known</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/b830f5a6ac8e/the-empty-chair/img/live-sala.webp",
      "leg": "A meeting room with one empty chair",
      "pede": "Look at the picture: a meeting room with one empty chair. Write 2 or 3 sentences about a time someone missed a meeting, a class or a chance. Use <b>should have, could have</b> or <b>couldn't have</b>.",
      "ph": "Somebody should have …",
      "ex": "Somebody should have sent him the new time. I could have called him, but I forgot. He couldn't have known about the change."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What should you have done last week, but didn't?",
          "ph": "I should have …",
          "ex": "I should have answered my manager's email on Monday."
        },
        {
          "q": "What could you have done for a friend or colleague, but didn't?",
          "ph": "I could have …",
          "ex": "I could have helped my colleague with her presentation."
        }
      ]
    }
  }
};
