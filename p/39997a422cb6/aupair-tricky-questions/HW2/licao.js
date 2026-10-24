/* AU PAIR · LIÇÃO DE CASA 2.0 (24/10/2026)
   Motor: hw2.js. JSON puro depois do "=". Falas originais. */
window.HW2 = {
  "id": "aupair-tricky-questions",
  "titulo": "Tricky Questions",
  "nivel": "B1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/39997a422cb6/aupair-tricky-questions/img/live-capa.webp",
  "alvo": "second conditional: What would you do if + past? If + past, I would + plain verb; never if + would, would + past, will for an imaginary situation",
  "abrir": "What is the hardest question you could get in an interview?",
  "fecho": "<b>What would you do if + past?</b> Answer with <b>If + past, I would + plain verb</b>: <i>If the baby cried, I would check his diaper.</i> Never <i>if + would</i> and never <i>would + past</i>.",
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
      "sub": "Mia and Leo practice the interview in the kitchen. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/39997a422cb6/aupair-tricky-questions/img/live-conversa.webp",
      "leg": "A lunch box and apples on the kitchen table",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, imagine this. The host mom asks: What would you do if the baby didn't stop crying?"
        },
        {
          "quem": "mia",
          "t": "Hmm. I would check if he was hungry or tired first."
        },
        {
          "quem": "leo",
          "t": "And if he still cried?"
        },
        {
          "quem": "mia",
          "t": "I would stay calm and call the parents. Safety first."
        },
        {
          "quem": "leo",
          "t": "Good. Next one: what would you do if two kids fought over a toy?"
        },
        {
          "quem": "mia",
          "t": "I would separate them and use a timer, so each child plays for five minutes."
        },
        {
          "quem": "leo",
          "t": "Nice. And if you lost the house key?"
        },
        {
          "quem": "mia",
          "t": "I would tell the parents right away and say sorry. Then I would help find a solution."
        },
        {
          "quem": "leo",
          "t": "That's a strong answer. Calm and honest."
        }
      ],
      "perguntas": [
        {
          "q": "What would Mia check first if the baby cried?",
          "op": [
            "If he was hungry or tired",
            "If the door was open",
            "If the TV was on"
          ],
          "a": 0,
          "por": "I would check if he was hungry or tired first."
        },
        {
          "q": "How would she solve the fight over a toy?",
          "op": [
            "She would use a timer",
            "She would take the toy home",
            "She would ignore it"
          ],
          "a": 0,
          "por": "I would separate them and use a timer."
        },
        {
          "q": "What would she do if she lost the house key?",
          "op": [
            "Tell the parents right away",
            "Say nothing",
            "Buy a new door"
          ],
          "a": 0,
          "por": "I would tell the parents right away and say sorry."
        }
      ]
    },
    "out": {
      "sub": "Three answers for a tricky interview. Hear it, then say it.",
      "frases": [
        {
          "t": "What would you do if the baby cried?",
          "img": "https://wolf-labs.pages.dev/p/39997a422cb6/aupair-tricky-questions/img/live-conversa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "I would stay calm and call the parents.",
          "img": "https://wolf-labs.pages.dev/p/39997a422cb6/aupair-tricky-questions/img/live-conversa.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "If I were you, I would ask the family first.",
          "img": "https://wolf-labs.pages.dev/p/39997a422cb6/aupair-tricky-questions/img/live-capa.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "If + past, would + verb. Four quick ones.",
      "regra": "<b>If + past, would + plain verb</b> for imaginary situations · <b>What would you do if…?</b> · never <b>if + would</b> · never <b>would + past</b>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "What would you do if the baby cried?",
          "aceita": [],
          "d": "Hint: <b>What would you do if</b> + past: cried."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "If he would cry, I would help him.",
          "r": "If he cried, I would help him.",
          "aceita": [],
          "d": "Hint: after <b>if</b>, use the past. <b>Would</b> belongs to the answer part."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "I would stay calm and called the parents.",
          "r": "I would stay calm and call the parents.",
          "aceita": [],
          "d": "Hint: after <b>would</b>, both verbs stay plain: stay, call."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "If they asked, I will say no.",
          "r": "If they asked, I would say no.",
          "aceita": [
            "If they asked, I'd say no."
          ],
          "d": "Hint: an imaginary situation with <i>asked</i> needs <b>would</b>, not <i>will</i>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/39997a422cb6/aupair-tricky-questions/img/live-capa.webp",
      "leg": "A question mark over an open book",
      "pede": "Look at the picture: a question mark over an open book. Write 2 or 3 sentences: one tricky question a host mom could ask, and how you would answer it. Use <b>If + past, I would + verb</b>.",
      "ph": "What would you do if …?",
      "ex": "What would you do if a child refused to eat? I would stay calm and offer two choices. I would also tell the parents."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What would you do if a child refused to do homework?",
          "ph": "I would …",
          "ex": "I would give a short break, and then I would make it a game."
        },
        {
          "q": "If you were a host mom, what would you ask an au pair?",
          "ph": "If I were a host mom, I would ask …",
          "ex": "If I were a host mom, I would ask how she handles a tantrum."
        }
      ]
    }
  }
};
