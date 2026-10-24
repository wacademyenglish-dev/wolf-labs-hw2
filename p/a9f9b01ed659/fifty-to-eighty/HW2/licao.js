/* FIFTY TO EIGHTY · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: condicionais mistas. B2: nenhum portugues. live-caminho/domingo/arquivo. */
window.HW2 = {
  "id": "fifty-to-eighty",
  "titulo": "Fifty to Eighty",
  "nivel": "B2",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/a9f9b01ed659/fifty-to-eighty/img/live-caminho.webp",
  "alvo": "mixed conditionals: if + past perfect (closed past) + would + verb (result still true NOW); if + past simple / were (always true about you) + would have + participle (result already finished)",
  "abrir": "Think of one decision from years ago. How is your life different today?",
  "fecho": "A closed past, a result that is still true <b>now</b>: <i>If I had taken that job, I would be living by the sea now.</i> (<b>had</b> + participle → <b>would</b> + verb.) Something always true about you, a result in the past: <i>If I were braver, I would have quit last year.</i> (<b>were</b> → <b>would have</b> + participle.) The result picks the tense of its half.",
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
      "sub": "Mia and Leo on a walk. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/a9f9b01ed659/fifty-to-eighty/img/live-caminho.webp",
      "leg": "A quiet street in autumn",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, you look thoughtful. What are you thinking about?"
        },
        {
          "quem": "leo",
          "t": "About the job in Lisbon. If I had taken it ten years ago, I would be living by the sea now."
        },
        {
          "quem": "mia",
          "t": "And do you regret it?"
        },
        {
          "quem": "leo",
          "t": "Not really. If I had gone, I wouldn't have met Clara. And I wouldn't have this family today."
        },
        {
          "quem": "mia",
          "t": "Funny. If I were braver, I would have quit my job last year."
        },
        {
          "quem": "leo",
          "t": "If you were braver, you would have told your boss already."
        },
        {
          "quem": "mia",
          "t": "True. And if I had saved more in my twenties, I would own a flat now."
        },
        {
          "quem": "leo",
          "t": "If we had kept in touch with the old team, we would know about their new project today."
        },
        {
          "quem": "mia",
          "t": "Then let's call them tonight."
        }
      ],
      "perguntas": [
        {
          "q": "Where would Leo be living now?",
          "op": [
            "By the sea",
            "In the mountains",
            "In a big city"
          ],
          "a": 0,
          "por": "If I had taken it ten years ago, I would be living by the sea now."
        },
        {
          "q": "What wouldn't Leo have today if he had gone?",
          "op": [
            "This family",
            "This job",
            "This flat"
          ],
          "a": 0,
          "por": "If I had gone, I wouldn't have met Clara. And I wouldn't have this family today."
        },
        {
          "q": "What would Mia own now if she had saved more?",
          "op": [
            "A flat",
            "A car",
            "A company"
          ],
          "a": 0,
          "por": "If I had saved more in my twenties, I would own a flat now."
        }
      ]
    },
    "out": {
      "sub": "Three sentences about roads not taken. Hear it, then say it.",
      "frases": [
        {
          "t": "If I had taken that job, I would be living by the sea now.",
          "img": "https://wolf-labs.pages.dev/p/a9f9b01ed659/fifty-to-eighty/img/live-caminho.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "If I were braver, I would have quit last year.",
          "img": "https://wolf-labs.pages.dev/p/a9f9b01ed659/fifty-to-eighty/img/live-domingo.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "If we had kept in touch, we would know the news today.",
          "img": "https://wolf-labs.pages.dev/p/a9f9b01ed659/fifty-to-eighty/img/live-arquivo.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "mixed conditionals. Four quick ones.",
      "regra": "<b>if + had + participle</b> → <b>would + verb</b> (result true now) · <b>if + were / past</b> → <b>would have + participle</b> (result finished).",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "If I had saved money I would own a flat now.",
          "aceita": [],
          "d": "Hint: closed past (<b>had saved</b>), result true now (<b>would own</b>)."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: the result is still true now.",
          "mostra": "If I had left, I would have been happy now.",
          "r": "If I had left, I would be happy now.",
          "aceita": [],
          "d": "Hint: <b>now</b> asks for <b>would be</b>, not <i>would have been</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "If we hadn't moved, we won't be friends.",
          "r": "If we hadn't moved, we wouldn't be friends.",
          "aceita": [
            "If we had not moved, we would not be friends."
          ],
          "d": "Hint: an imagined result needs <b>would</b>, not <i>will</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: the result is finished.",
          "mostra": "If I were braver, I would quit last year.",
          "r": "If I were braver, I would have quit last year.",
          "aceita": [],
          "d": "Hint: <b>last year</b> is finished, so <b>would have</b> + participle."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/a9f9b01ed659/fifty-to-eighty/img/live-caminho.webp",
      "leg": "A quiet street, a bench, autumn leaves",
      "pede": "Look at the picture: a quiet street in autumn. Write 2 or 3 sentences: one decision from the past that shapes your life now, and one thing about you that changed something last year. Use <b>if + had</b> … <b>would</b>, and <b>if + were</b> … <b>would have</b>.",
      "ph": "If I had …, I would …",
      "ex": "If I had stayed in my hometown, I would work in a bank now. If I were shyer, I would have missed this chance."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What would your life be like today if you had chosen differently ten years ago?",
          "ph": "If I had …, I would …",
          "ex": "If I had studied design, I would be working in a studio now."
        },
        {
          "q": "What would you have done last year if you were braver?",
          "ph": "If I were braver, I would have …",
          "ex": "If I were braver, I would have asked for a raise."
        }
      ]
    }
  }
};
