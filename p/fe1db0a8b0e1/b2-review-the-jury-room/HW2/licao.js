/* THE JURY ROOM · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: third / mixed conditional, should have, could have. B2: nenhum português. */
window.HW2 = {
  "id": "b2-review-the-jury-room",
  "titulo": "The Jury Room",
  "nivel": "B2",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/fe1db0a8b0e1/b2-review-the-jury-room/img/live-capa.webp",
  "alvo": "third conditional (if + had + participle, would have + participle), mixed conditional (past if, present result: would + plain verb), should have / could have + participle; never would after if",
  "abrir": "Think of a small thing that went wrong this week. What would you do differently?",
  "fecho": "<b>If + had + participle, would have + participle</b>: the past that did not happen (<i>If he had known, he would have stopped</i>). Never <i>would</i> after <i>if</i>. A past cause with a result now: <i>If I hadn't come, I would be home now.</i> <b>Should have / could have</b> + participle: what was right, or possible, and did not happen.",
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
      "sub": "Mia and Leo after a day on a jury. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/fe1db0a8b0e1/b2-review-the-jury-room/img/live-conversa.webp",
      "leg": "The courthouse corridor",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, I was on a jury today. The case was about a very noisy birthday party."
        },
        {
          "quem": "leo",
          "t": "Who complained?"
        },
        {
          "quem": "mia",
          "t": "The woman downstairs. She said that if the party had ended at midnight, she would have slept fine."
        },
        {
          "quem": "leo",
          "t": "And what did the host say?"
        },
        {
          "quem": "mia",
          "t": "He admitted that he should have asked the neighbors first. If he had known about her early shift, he would have turned the music down."
        },
        {
          "quem": "leo",
          "t": "So whose fault was it?"
        },
        {
          "quem": "mia",
          "t": "Partly hers, too. She could have knocked on his door at ten, but she waited until two."
        },
        {
          "quem": "leo",
          "t": "If she had knocked earlier, he would have stopped."
        },
        {
          "quem": "mia",
          "t": "Exactly. And now she is so tired that she would be asleep right now if the party hadn't happened."
        },
        {
          "quem": "leo",
          "t": "What was the verdict?"
        },
        {
          "quem": "mia",
          "t": "A small fine for him, and an apology from both. They shouldn't have waited so long."
        }
      ],
      "perguntas": [
        {
          "q": "What did the woman say?",
          "op": [
            "She would have slept fine if the party had ended at midnight",
            "She would have joined the party if she had been invited",
            "She would have called the police at ten"
          ],
          "a": 0,
          "por": "She said that if the party had ended at midnight, she would have slept fine."
        },
        {
          "q": "What could the woman have done at ten?",
          "op": [
            "Knocked on his door",
            "Called the host's boss",
            "Gone to the party"
          ],
          "a": 0,
          "por": "She could have knocked on his door at ten, but she waited until two."
        },
        {
          "q": "What does Mia say about the woman now?",
          "op": [
            "She would be asleep if the party hadn't happened",
            "She would have won a prize",
            "She would be at the party now"
          ],
          "a": 0,
          "por": "She would be asleep right now if the party hadn't happened."
        }
      ]
    },
    "out": {
      "sub": "Three sentences from the case. Hear it, then say it.",
      "frases": [
        {
          "t": "If the party had ended at midnight, she would have slept well.",
          "img": "https://wolf-labs.pages.dev/p/fe1db0a8b0e1/b2-review-the-jury-room/img/live-conversa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "He should have asked the neighbors before he invited everyone.",
          "img": "https://wolf-labs.pages.dev/p/fe1db0a8b0e1/b2-review-the-jury-room/img/live-capa.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "She could have knocked on his door, but she waited until two.",
          "img": "https://wolf-labs.pages.dev/p/fe1db0a8b0e1/b2-review-the-jury-room/img/live-conversa.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Third conditional, mixed, should have. Four quick ones.",
      "regra": "<b>if + had + participle</b>, <b>would have + participle</b> · never <i>would</i> after <i>if</i> · past cause, result now: <b>would</b> + plain verb · <b>should / could have</b> + participle.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "If he had known, he would have turned the music down.",
          "aceita": [],
          "d": "Hint: <b>if + had + participle</b>, then <b>would have + participle</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "If she would have knocked, he would have stopped.",
          "r": "If she had knocked, he would have stopped.",
          "aceita": [
            "If she'd knocked, he would have stopped.",
            "If she had knocked, he'd have stopped."
          ],
          "d": "Hint: no <i>would</i> after <i>if</i>. Use <b>had</b> + participle."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "He should have ask the neighbors first.",
          "r": "He should have asked the neighbors first.",
          "aceita": [],
          "d": "Hint: <b>should have</b> is followed by the past participle."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: the result is about now.",
          "mostra": "If I hadn't come, I would have been home now.",
          "r": "If I hadn't come, I would be home now.",
          "aceita": [
            "If I had not come, I would be home now.",
            "If I hadn't come, I'd be home now.",
            "If I had not come, I'd be home now."
          ],
          "d": "Hint: the cause is in the past, but <b>now</b> is the result: <b>would</b> + plain verb."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/fe1db0a8b0e1/b2-review-the-jury-room/img/live-conversa.webp",
      "leg": "The corridor outside the jury room",
      "pede": "Look at the picture: an empty corridor outside a jury room. Write 2 or 3 sentences about something that went wrong for you recently. Use <b>If I had …, I would have …</b>, <b>should have</b> or <b>could have</b>.",
      "ph": "If I had …, I would have …",
      "ex": "If I had left home earlier, I would have caught the bus. I should have checked the time. I could have called a taxi."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What is something you should have done last week?",
          "ph": "I should have …",
          "ex": "I should have called my aunt on her birthday."
        },
        {
          "q": "If you had chosen a different hobby years ago, what would you be doing now?",
          "ph": "If I had chosen …, I would be …",
          "ex": "If I had chosen music, I would be teaching piano now."
        }
      ]
    }
  }
};
