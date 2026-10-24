/* IF ONLY · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: wish / if only. B2: nenhum português. Só imagens live-* (já escuras). Falas originais; arrependimentos do dia a dia. */
window.HW2 = {
  "id": "if-only",
  "titulo": "If Only",
  "nivel": "B2",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/538be2c0a802/if-only/img/live-capa.webp",
  "alvo": "wish / if only: wish + past simple (an unreal now), wish + had + past participle (a past regret), wish + would (annoyance); hope + present for what is possible; never wish + would have",
  "abrir": "What do you wish were different in your life right now?",
  "fecho": "<b>wish / if only + past</b> = unreal now: <i>I wish I had more time.</i> <b>wish + had + participle</b> = a past regret: <i>I wish I had kept it.</i> <b>wish + would</b> = annoyance: <i>I wish you would stop.</i> Never <i>wish I would have</i>. <b>Hope</b> is for what is possible: <i>I hope it stops.</i>",
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
  "rate": "-10%",
  "rodadas": {
    "listen": {
      "sub": "Mia and Leo find an old toy box in the attic. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/538be2c0a802/if-only/img/live-sotao.webp",
      "leg": "The attic and the toy box",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, look at this. A box of old toys in the attic."
        },
        {
          "quem": "mia",
          "t": "Oh, a teddy bear! I wish I had kept mine. I gave it away years ago."
        },
        {
          "quem": "leo",
          "t": "I wish I hadn't sold my old games. If only I had waited, they would be worth a lot now."
        },
        {
          "quem": "mia",
          "t": "If only my phone were quieter. It buzzes all day."
        },
        {
          "quem": "leo",
          "t": "I wish you would put it away at dinner."
        },
        {
          "quem": "mia",
          "t": "You're right. I wish my day had more hours, too."
        },
        {
          "quem": "leo",
          "t": "I wish I could stay, but I have to go. I hope it doesn't rain."
        },
        {
          "quem": "mia",
          "t": "I hope you get home early. And I wish tomorrow were Saturday."
        },
        {
          "quem": "leo",
          "t": "Me too. Let's leave the toys here. They look happy in the box."
        }
      ],
      "perguntas": [
        {
          "q": "What does Mia wish she had done?",
          "op": [
            "Kept her teddy bear",
            "Sold her teddy bear",
            "Bought new toys"
          ],
          "a": 0,
          "por": "I wish I had kept mine. I gave it away years ago."
        },
        {
          "q": "What does Leo wish about his old games?",
          "op": [
            "He hadn't sold them",
            "He had more of them",
            "He could play them now"
          ],
          "a": 0,
          "por": "I wish I hadn't sold my old games."
        },
        {
          "q": "What does Leo wish Mia would do at dinner?",
          "op": [
            "Put her phone away",
            "Cook dinner",
            "Stay home"
          ],
          "a": 0,
          "por": "I wish you would put it away at dinner."
        }
      ]
    },
    "out": {
      "sub": "Three sentences with wish. Hear it, then say it.",
      "frases": [
        {
          "t": "I wish I had kept my old teddy bear.",
          "img": "https://wolf-labs.pages.dev/p/538be2c0a802/if-only/img/live-caixa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "I wish my room were a little bigger.",
          "img": "https://wolf-labs.pages.dev/p/538be2c0a802/if-only/img/live-quarto.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "I wish you would put the tablet away.",
          "img": "https://wolf-labs.pages.dev/p/538be2c0a802/if-only/img/live-tablet.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "wish and if only. Four quick ones.",
      "regra": "<b>wish / if only + past</b> (now) · <b>wish + had + participle</b> (past regret) · <b>wish + would</b> (annoyance) · never <i>wish I would have</i>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "I wish I had taken the earlier train.",
          "aceita": [],
          "d": "Hint: <b>wish + had + participle</b> for a past regret."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "I wish I would have more time.",
          "r": "I wish I had more time.",
          "aceita": [],
          "d": "Hint: <b>wish + past simple</b> for now. Never <i>would have</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "I wish I didn't buy this phone.",
          "r": "I wish I hadn't bought this phone.",
          "aceita": [
            "I wish I had not bought this phone."
          ],
          "d": "Hint: a regret about the past needs <b>had + participle</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "If only I know the answer.",
          "r": "If only I knew the answer.",
          "aceita": [],
          "d": "Hint: <b>if only</b> + past for an unreal now."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/538be2c0a802/if-only/img/live-sotao.webp",
      "leg": "An old toy box in the attic",
      "pede": "Look at the picture: an old toy box in the attic. Write 2 or 3 sentences: one small thing you <b>wish</b> were different now, and one small thing you <b>wish</b> you <b>had</b> done.",
      "ph": "I wish … I wish I had …",
      "ex": "I wish I had more space at home. I wish I had kept my old bike. If only my street were quieter."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What do you wish were different in your life right now?",
          "ph": "I wish … were / had …",
          "ex": "I wish my commute were shorter."
        },
        {
          "q": "What do you wish you had done last year?",
          "ph": "I wish I had …",
          "ex": "I wish I had started my English classes earlier."
        }
      ]
    }
  }
};
