/* SELL IT UPSTAIRS · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: persuasão (Imagine if / What if we tried / Suppose / condicional mista). C1: nenhum português. Imagens live-a, live-b e live-capa (escuras). */
window.HW2 = {
  "id": "sell-it-upstairs",
  "titulo": "Sell It Upstairs",
  "nivel": "C1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/0a1e0baaeecc/sell-it-upstairs/img/live-b.webp",
  "alvo": "persuasion: What if we tried ...? · Imagine if customers could ... · Suppose we ... + mixed conditionals (If we had launched it last year, we'd be ahead now); never 'If we would have launched', 'What if we would try', 'Imagine if customers would see'",
  "abrir": "What is an idea you would love to sell to your boss?",
  "fecho": "<b>Imagine if</b> + past: <i>Imagine if customers could see their money.</i> <b>What if we tried</b> + noun: <i>What if we tried a small pilot?</i> <b>Suppose we</b> + past. Mixed conditional: <b>If + had + participle</b>, then <b>would + verb</b> now: <i>If we had launched it last year, we'd be ahead now.</i> Never <i>would</i> in the if-part.",
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
      "sub": "Mia and Leo prepare to pitch an idea to the CEO. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/0a1e0baaeecc/sell-it-upstairs/img/live-b.webp",
      "leg": "A bright idea over a laptop",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, Martin gives you ten minutes for your tracker idea. Don't explain the code."
        },
        {
          "quem": "leo",
          "t": "So what do I say? That we built a real-time status service?"
        },
        {
          "quem": "mia",
          "t": "No. Imagine if customers could see where their money is, without calling support."
        },
        {
          "quem": "leo",
          "t": "Imagine if customers could see where their money is. That's much better. What if we tried it with one thousand users first?"
        },
        {
          "quem": "mia",
          "t": "Yes, a small pilot. Suppose we ran it for one month and measured the support calls."
        },
        {
          "quem": "leo",
          "t": "And if he says a competitor tried this and failed?"
        },
        {
          "quem": "mia",
          "t": "Then use a mixed conditional. If we had launched it last year, we would be ahead now."
        },
        {
          "quem": "leo",
          "t": "If we had launched it last year, we would be ahead now. Isn't that too negative?"
        },
        {
          "quem": "mia",
          "t": "It's honest, and it shows the cost of doing nothing. Just don't say 'If we would have launched'. The would goes in the result, not in the if-part."
        },
        {
          "quem": "leo",
          "t": "If we had launched, we would be ahead. Got it. And the worst case of the pilot?"
        },
        {
          "quem": "mia",
          "t": "Four weeks of work. Say that, and Martin will relax."
        }
      ],
      "perguntas": [
        {
          "q": "What does Mia tell Leo not to do?",
          "op": [
            "Explain the code to the CEO",
            "Mention the pilot",
            "Ask for ten minutes"
          ],
          "a": 0,
          "por": "Don't explain the code."
        },
        {
          "q": "What does 'If we had launched it last year, we would be ahead now' show?",
          "op": [
            "The cost of doing nothing",
            "That the pilot has failed",
            "That the competitor is wrong"
          ],
          "a": 0,
          "por": "It's honest, and it shows the cost of doing nothing."
        },
        {
          "q": "Where does 'would' belong in this kind of sentence?",
          "op": [
            "In the result part, not in the if-part",
            "In both parts of the sentence",
            "Only at the end of the sentence"
          ],
          "a": 0,
          "por": "The would goes in the result, not in the if-part."
        }
      ]
    },
    "out": {
      "sub": "Three lines to win a CEO. Hear it, then say it.",
      "frases": [
        {
          "t": "Imagine if customers could see where their money is.",
          "img": "https://wolf-labs.pages.dev/p/0a1e0baaeecc/sell-it-upstairs/img/live-b.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "What if we tried it with one thousand users for a month?",
          "img": "https://wolf-labs.pages.dev/p/0a1e0baaeecc/sell-it-upstairs/img/live-capa.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "If we had launched it last year, we would be ahead now.",
          "img": "https://wolf-labs.pages.dev/p/0a1e0baaeecc/sell-it-upstairs/img/live-a.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Imagine it, then say it. Four quick ones.",
      "regra": "<b>Imagine if ...</b> + past · <b>What if we tried ...?</b> · <b>Suppose we ...</b> · <b>If we had launched ..., we would be ...</b>",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "What if we tried it with a small group first?",
          "aceita": [],
          "d": "Hint: <b>What if we</b> + past tense: <b>tried</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "If we would have launched it last year, we would be ahead now.",
          "r": "If we had launched it last year, we would be ahead now.",
          "aceita": [
            "If we had launched it last year, we'd be ahead now."
          ],
          "d": "Hint: no <i>would</i> in the if-part. Use <b>had</b> + past participle."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "What if we would try a small pilot?",
          "r": "What if we tried a small pilot?",
          "aceita": [
            "What if we try a small pilot?"
          ],
          "d": "Hint: after <b>What if we</b>, use a simple tense, without <i>would</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "Imagine if customers would see their money live.",
          "r": "Imagine if customers could see their money live.",
          "aceita": [
            "Imagine if customers saw their money live."
          ],
          "d": "Hint: after <b>Imagine if</b>, use <b>could</b> or the simple past, not <i>would</i>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/0a1e0baaeecc/sell-it-upstairs/img/live-b.webp",
      "leg": "A bright idea over a laptop",
      "pede": "Look at the picture: a small bright idea above a laptop. Write 2 or 3 sentences pitching an idea to your boss. Use <b>Imagine if …</b>, <b>What if we tried …</b> or <b>If we had …, we would be … now</b>.",
      "ph": "Imagine if …",
      "ex": "Imagine if every new colleague could start work on day one. What if we tried a simple checklist? If we had built it last year, we would be faster now."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What is one idea you would pitch to your boss? Start with Imagine if.",
          "ph": "Imagine if …",
          "ex": "Imagine if our customers could see the status of every order without calling us."
        },
        {
          "q": "Think of a decision you did not take. How would your life be different now?",
          "ph": "If I had …, I would be … now.",
          "ex": "If I had started English classes earlier, I would be more confident in meetings now."
        }
      ]
    }
  }
};
