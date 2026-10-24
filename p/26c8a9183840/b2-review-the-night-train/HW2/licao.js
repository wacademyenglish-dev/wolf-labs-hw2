/* THE NIGHT TRAIN · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: deducao no passado, participle clauses, cleft, inversao (unidade 9). B2: nenhum português. Imagens: live-capa e live-conversa (escuras). */
window.HW2 = {
  "id": "b2-review-the-night-train",
  "titulo": "The Night Train",
  "nivel": "B2",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/26c8a9183840/b2-review-the-night-train/img/live-capa.webp",
  "alvo": "deduction in the past (must have, can't have, might have + participle), participle clauses (Having checked...), cleft sentences (It was the porter who...), inversion (Never have I..., Had we known...); never must saw, never Never I have",
  "abrir": "Think of something that went missing at home or at work. How did you work out what happened?",
  "fecho": "<b>Must have / can't have / might have</b> + participle: how sure you are about the past. <b>Having checked…</b> joins two actions. <b>It was the porter who…</b> puts the focus on one person. After <b>Never</b> the order flips: <i>Never have I seen…</i> And <b>Had we known</b> = <i>If we had known</i>.",
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
      "sub": "Mia and Leo on a stopped night train. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/26c8a9183840/b2-review-the-night-train/img/live-conversa.webp",
      "leg": "The foggy line",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, tell me about the safe. When did the necklace vanish?"
        },
        {
          "quem": "leo",
          "t": "Around ten past three. The door of the safe was open, so someone must have had the key."
        },
        {
          "quem": "mia",
          "t": "The cook can't have taken it. He was serving tea in the dining car all night."
        },
        {
          "quem": "leo",
          "t": "True. And it was the porter who found the safe open, not the cook."
        },
        {
          "quem": "mia",
          "t": "Having checked every ticket, I know that only three passengers were in carriage seven."
        },
        {
          "quem": "leo",
          "t": "One of them might have slipped out while the train was stopped in the fog."
        },
        {
          "quem": "mia",
          "t": "Not only did the window stay closed, but the corridor was locked too. Never have I seen such a quiet crime."
        },
        {
          "quem": "leo",
          "t": "What I don't understand is why the alarm didn't ring."
        },
        {
          "quem": "mia",
          "t": "Had the alarm been working, we would have heard it. Someone must have switched it off."
        },
        {
          "quem": "leo",
          "t": "So who is it?"
        },
        {
          "quem": "mia",
          "t": "I will tell you at the next station."
        }
      ],
      "perguntas": [
        {
          "q": "Why can't the cook have taken the necklace?",
          "op": [
            "He was serving tea all night",
            "He had no ticket",
            "He got off the train"
          ],
          "a": 0,
          "por": "The cook can't have taken it. He was serving tea in the dining car all night."
        },
        {
          "q": "Who found the safe open?",
          "op": [
            "The porter",
            "The cook",
            "The inspector"
          ],
          "a": 0,
          "por": "It was the porter who found the safe open."
        },
        {
          "q": "What does Mia think about the alarm?",
          "op": [
            "Someone must have switched it off",
            "It rang, but nobody listened",
            "It was never installed"
          ],
          "a": 0,
          "por": "Had the alarm been working, we would have heard it. Someone must have switched it off."
        }
      ]
    },
    "out": {
      "sub": "Three sentences from the night train. Hear it, then say it.",
      "frases": [
        {
          "t": "It was the porter who found the safe open.",
          "img": "https://wolf-labs.pages.dev/p/26c8a9183840/b2-review-the-night-train/img/live-capa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "Having checked every ticket, she knew the three names.",
          "img": "https://wolf-labs.pages.dev/p/26c8a9183840/b2-review-the-night-train/img/live-capa.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "Never have I seen such a quiet night.",
          "img": "https://wolf-labs.pages.dev/p/26c8a9183840/b2-review-the-night-train/img/live-conversa.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Must have, never have I, had we known. Four quick ones.",
      "regra": "<b>must / can't / might have</b> + participle · <b>Having checked…</b> · <b>It was … who…</b> · <b>Never have I…</b> · <b>Had I known…</b>",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "The cook can't have taken the necklace.",
          "aceita": [],
          "d": "Hint: <b>can't have</b> + participle = impossible in the past."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "The thief might have took the key.",
          "r": "The thief might have taken the key.",
          "aceita": [],
          "d": "Hint: modal + <b>have</b> + the third form: <i>taken</i>, not <i>took</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "Never I have seen such a quiet crime.",
          "r": "Never have I seen such a quiet crime.",
          "aceita": [],
          "d": "Hint: after <b>Never</b> the order flips: <b>have I</b>."
        },
        {
          "tipo": "escreve",
          "t": "Say it with Had instead of If.",
          "mostra": "If I had known, I would have called you.",
          "r": "Had I known, I would have called you.",
          "aceita": [],
          "d": "Hint: drop <b>if</b> and put <b>had</b> first."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/26c8a9183840/b2-review-the-night-train/img/live-conversa.webp",
      "leg": "A red light in the fog",
      "pede": "Look at the picture: a red light far away in the fog. Write 2 or 3 sentences about a small mystery from your life. Use <b>must have, can't have, might have</b>, or <b>It was … who</b>.",
      "ph": "Someone must have …",
      "ex": "My keys were missing. Someone must have moved them. It can't have been my sister, because she was away. It might have been me."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "Think of a time something was lost at home. What do you think happened?",
          "ph": "It must have …",
          "ex": "My umbrella disappeared. I must have left it on the bus."
        },
        {
          "q": "Say one thing that has never happened to you, starting with Never.",
          "ph": "Never have I …",
          "ex": "Never have I been late for a flight."
        }
      ]
    }
  }
};
