/* I WAS WONDERING · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: perguntas indiretas educadas. B1: nenhum português. Só live-telefone. */
window.HW2 = {
  "id": "i-was-wondering",
  "titulo": "I Was Wondering",
  "nivel": "B1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/6b073494597b/i-was-wondering/img/live-telefone.webp",
  "alvo": "indirect questions: after Could you tell me / Do you know / I was wondering the word order goes back to a statement (no do / does / did, no inversion); yes-or-no questions take if / whether; 'I was wondering' ends with a full stop",
  "abrir": "What is one thing you need to find out this week?",
  "fecho": "After a polite opening the question goes back to normal order: <i>Could you tell me when it ships?</i> No <b>do / does / did</b> inside. A yes-or-no question takes <b>if</b> or <b>whether</b>: <i>I was wondering if you got my email.</i> <b>I was wondering</b> ends with a full stop.",
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
      "sub": "Mia and Leo before a supplier call. A new scene, about 50 seconds.",
      "img": "https://wolf-labs.pages.dev/p/6b073494597b/i-was-wondering/img/live-telefone.webp",
      "leg": "A desk phone in the evening",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, I have five minutes with David from Calder. Help me ask politely."
        },
        {
          "quem": "leo",
          "t": "Don't say, when does it ship? Say, could you tell me when it ships?"
        },
        {
          "quem": "mia",
          "t": "And the price? How much does it cost?"
        },
        {
          "quem": "leo",
          "t": "Better: do you know how much it costs? The helper word doesn't come back."
        },
        {
          "quem": "mia",
          "t": "What about a yes or no question? Did he get my email?"
        },
        {
          "quem": "leo",
          "t": "Use if. I was wondering if you got my email."
        },
        {
          "quem": "mia",
          "t": "And no question mark at the end?"
        },
        {
          "quem": "leo",
          "t": "Right. I was wondering ends with a full stop."
        },
        {
          "quem": "mia",
          "t": "So: could you tell me when it ships, do you know how much it costs, and I was wondering if you got my email."
        },
        {
          "quem": "leo",
          "t": "Perfect. David will say yes."
        }
      ],
      "perguntas": [
        {
          "q": "Which question is polite?",
          "op": [
            "Could you tell me when it ships?",
            "When does it ship?",
            "Could you tell me when does it ship?"
          ],
          "a": 0,
          "por": "Say, could you tell me when it ships?"
        },
        {
          "q": "Which word opens a yes-or-no question?",
          "op": [
            "If",
            "Do",
            "Did"
          ],
          "a": 0,
          "por": "Use if. I was wondering if you got my email."
        },
        {
          "q": "How does I was wondering end?",
          "op": [
            "With a full stop",
            "With a question mark",
            "With nothing"
          ],
          "a": 0,
          "por": "I was wondering ends with a full stop."
        }
      ]
    },
    "out": {
      "sub": "Three polite questions for a call. Hear it, then say it.",
      "frases": [
        {
          "t": "Could you tell me when it ships?",
          "img": "https://wolf-labs.pages.dev/p/6b073494597b/i-was-wondering/img/live-telefone.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "Do you know where the file is?",
          "img": "https://wolf-labs.pages.dev/p/6b073494597b/i-was-wondering/img/live-telefone.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "I was wondering if you got my email.",
          "img": "https://wolf-labs.pages.dev/p/6b073494597b/i-was-wondering/img/live-telefone.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Polite order, no helper. Four quick ones.",
      "regra": "after the polite opening: <b>statement order</b> · no <b>do / does / did</b> · yes or no → <b>if / whether</b> · <b>I was wondering</b> + full stop.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "Could you tell me how much it costs?",
          "aceita": [],
          "d": "Hint: after <b>Could you tell me</b>, the order is subject + verb: <i>it costs</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: the order is wrong.",
          "mostra": "Could you tell me when does it ship?",
          "r": "Could you tell me when it ships?",
          "aceita": [],
          "d": "Hint: no <i>does</i> inside the polite question: <b>when it ships</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: the order is wrong.",
          "mostra": "Do you know where is the file?",
          "r": "Do you know where the file is?",
          "aceita": [],
          "d": "Hint: subject first, then the verb: <b>the file is</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: make it a polite statement.",
          "mostra": "I was wondering did you get my email.",
          "r": "I was wondering if you got my email.",
          "aceita": [
            "I was wondering whether you got my email.",
            "I was wondering if you received my email.",
            "I was wondering whether you received my email."
          ],
          "d": "Hint: a yes-or-no question inside takes <b>if</b> or <b>whether</b>, then normal order."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/6b073494597b/i-was-wondering/img/live-telefone.webp",
      "leg": "A desk phone in the evening",
      "pede": "Look at the picture: a phone on a desk. Write 3 polite questions for a supplier or a colleague. Use <b>Could you tell me</b>, <b>Do you know</b> and <b>I was wondering if</b>.",
      "ph": "Could you tell me when …",
      "ex": "Could you tell me when the order ships? Do you know how much it costs? I was wondering if you got my email."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What do you need to find out this week? Start with: Could you tell me ...",
          "ph": "Could you tell me …",
          "ex": "Could you tell me when my new card arrives?"
        },
        {
          "q": "Ask me one polite yes-or-no question.",
          "ph": "I was wondering if …",
          "ex": "I was wondering if you like phone calls."
        }
      ]
    }
  }
};
