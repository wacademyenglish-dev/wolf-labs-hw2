/* TWO WEEKS ON · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: should have / could have / terceira condicional. B2: nenhum português. Sem imagens (todas claras). */
window.HW2 = {
  "id": "two-weeks-on",
  "titulo": "Two Weeks On",
  "nivel": "B2",
  "minutos": 10,
  "alvo": "regret and criticism about the past: should (not) have + participle, could have + participle, third conditional (If I'd known, I would have + participle); never should have went, should had, If I knew ... would have",
  "abrir": "Think about a big change in your life. What would you do differently?",
  "fecho": "<b>should have</b> + participle = regret or advice about the past: <i>I should have packed a jacket.</i> <b>could have</b> = it was possible, but I didn't. <b>If I'd known, I would have</b> + participle. Watch the participle: <i>gone</i>, not <i>went</i>.",
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
      "sub": "Mia and Leo, two weeks after her move. A new scene, about one minute.",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, two weeks in Perth! How is it going?"
        },
        {
          "quem": "mia",
          "t": "Good, but I made some mistakes. I should have packed a warm jacket."
        },
        {
          "quem": "leo",
          "t": "In Australia? Really?"
        },
        {
          "quem": "mia",
          "t": "The nights at the camp are freezing. And I shouldn't have signed the contract so fast."
        },
        {
          "quem": "leo",
          "t": "Why? Is the roster bad?"
        },
        {
          "quem": "mia",
          "t": "It's long. If I'd known, I would have asked for a shorter swing. I could have negotiated."
        },
        {
          "quem": "leo",
          "t": "And at home? Do they miss you?"
        },
        {
          "quem": "mia",
          "t": "I missed my sister's birthday. I should have called her, but I forgot."
        },
        {
          "quem": "leo",
          "t": "You can still call her tonight. You shouldn't wait another day."
        },
        {
          "quem": "mia",
          "t": "You're right. And next time, I'll read everything twice."
        }
      ],
      "perguntas": [
        {
          "q": "What should Mia have packed?",
          "op": [
            "A warm jacket",
            "A bigger bag",
            "More shoes"
          ],
          "a": 0,
          "por": "I should have packed a warm jacket."
        },
        {
          "q": "What would she have done if she'd known?",
          "op": [
            "Asked for a shorter swing",
            "Refused the job",
            "Moved to another city"
          ],
          "a": 0,
          "por": "If I'd known, I would have asked for a shorter swing."
        },
        {
          "q": "What should she have done for her sister?",
          "op": [
            "Called her",
            "Sent a gift",
            "Visited her"
          ],
          "a": 0,
          "por": "I should have called her, but I forgot."
        }
      ]
    },
    "out": {
      "sub": "Three regrets. Hear it, then say it.",
      "frases": [
        {
          "t": "I should have packed a warm jacket.",
          "au": "audio/say1.mp3"
        },
        {
          "t": "If I'd known, I would have asked for a shorter swing.",
          "au": "audio/say2.mp3"
        },
        {
          "t": "I shouldn't have signed the contract so fast.",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Regret, chance or imagined past? Four quick ones.",
      "regra": "<b>should (not) have</b> + participle = regret · <b>could have</b> = a missed chance · <b>If I'd known, I would have</b> + participle.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "I could have asked for a different roster.",
          "aceita": [],
          "d": "Hint: <b>could have</b> + participle = a missed chance."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "I should have went to bed early.",
          "r": "I should have gone to bed early.",
          "aceita": [],
          "d": "Hint: after <b>have</b>, use the participle: <b>gone</b>, not <i>went</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "I should had called her yesterday.",
          "r": "I should have called her yesterday.",
          "aceita": [
            "I should've called her yesterday."
          ],
          "d": "Hint: <b>should have</b>, not <i>should had</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: imagine the past.",
          "mostra": "If I knew, I would have asked for help.",
          "r": "If I'd known, I would have asked for help.",
          "aceita": [
            "If I had known, I would have asked for help."
          ],
          "d": "Hint: the imagined past needs <b>If I'd known</b> (<b>had</b> + participle)."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "pede": "Think about a big change in your life, like a new job, school or city. Write 2 or 3 sentences about what you <b>should have</b> or <b>could have</b> done differently.",
      "ph": "I should have …",
      "ex": "I should have learned English before I moved. I could have asked my friends for help. If I'd known, I would have saved more money."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What is something you should have done earlier?",
          "ph": "I should have … earlier.",
          "ex": "I should have started studying English earlier."
        },
        {
          "q": "Think of a mistake you made recently. What would you have done differently?",
          "ph": "If I'd known …, I would have …",
          "ex": "If I'd known the shop closed at six, I would have gone earlier."
        }
      ]
    }
  }
};
