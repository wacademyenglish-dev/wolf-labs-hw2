/* THE PEOPLE VS. RADER · LIÇÃO DE CASA 2.0 (24/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: 3rd and mixed conditionals. B2: nenhum português. Cenário neutro: jogo cooperativo, sem violência. */
window.HW2 = {
  "id": "the-people-vs-rader",
  "titulo": "The People vs. Rader",
  "nivel": "B2",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/817528a2f0bc/the-people-vs-rader/img/live-ponte.webp",
  "alvo": "third and mixed conditionals: if + had + participle, would have + participle (a different past, a result in the past); if + had + participle, would + base verb (a result that reaches today). Never: if I would have known.",
  "abrir": "Which small decision changed your life?",
  "fecho": "<b>If + had + participle, would have + participle</b>: a different past, and the result stayed in the past (<i>If I had known, I would have called.</i>). <b>If + had + participle, would + base verb</b>: the result reaches today (<i>If she hadn't called, I would be lost now.</i>). Never <i>if I would have known</i>.",
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
  "rate": "-8%",
  "rodadas": {
    "listen": {
      "sub": "Mia and Leo talk about a co-op game. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/817528a2f0bc/the-people-vs-rader/img/live-neon.webp",
      "leg": "A neon city from the game",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, you look tired. Did you stay up playing that co-op game again?"
        },
        {
          "quem": "leo",
          "t": "Yes! If I had known it was so long, I would have started earlier."
        },
        {
          "quem": "mia",
          "t": "How far did you get?"
        },
        {
          "quem": "leo",
          "t": "Level six. If my partner hadn't jumped at the right moment, we would have lost the whole level."
        },
        {
          "quem": "mia",
          "t": "Who is your partner?"
        },
        {
          "quem": "leo",
          "t": "A stranger online. If we hadn't been matched, I would be playing alone now."
        },
        {
          "quem": "mia",
          "t": "So you're glad it happened."
        },
        {
          "quem": "leo",
          "t": "Totally. If I had played alone, I wouldn't have finished the dragon level."
        },
        {
          "quem": "mia",
          "t": "I would have quit at the first puzzle. Send me the game!"
        },
        {
          "quem": "leo",
          "t": "Ask me tomorrow. If I weren't so sleepy, I would send it right now."
        }
      ],
      "perguntas": [
        {
          "q": "Why did Leo start late?",
          "op": [
            "He didn't know the game was so long",
            "His partner was late",
            "His battery was dead"
          ],
          "a": 0,
          "por": "If I had known it was so long, I would have started earlier."
        },
        {
          "q": "What saved the level?",
          "op": [
            "His partner jumped at the right moment",
            "Leo played alone",
            "The game was easy"
          ],
          "a": 0,
          "por": "If my partner hadn't jumped at the right moment, we would have lost the whole level."
        },
        {
          "q": "Why isn't Leo playing alone now?",
          "op": [
            "He and a stranger were matched online",
            "His friend came to his house",
            "He doesn't like the game"
          ],
          "a": 0,
          "por": "If we hadn't been matched, I would be playing alone now."
        }
      ]
    },
    "out": {
      "sub": "Three sentences. Hear it, then say it.",
      "frases": [
        {
          "t": "If I had seen the bridge earlier, I would have crossed before dark.",
          "img": "https://wolf-labs.pages.dev/p/817528a2f0bc/the-people-vs-rader/img/live-ponte.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "If the dragon eggs hadn't hatched, the level would have ended there.",
          "img": "https://wolf-labs.pages.dev/p/817528a2f0bc/the-people-vs-rader/img/live-nest.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "If we hadn't trusted each other, we wouldn't be a team today.",
          "img": "https://wolf-labs.pages.dev/p/817528a2f0bc/the-people-vs-rader/img/live-rooftop.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "If I had known, I would have... Four quick ones.",
      "regra": "<b>If + had + participle, would have + participle</b> · now: <b>If + had + participle, would + base verb</b> · never <b>if + would have</b>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "If we had left earlier, we would have caught the train.",
          "aceita": [],
          "d": "Hint: <b>if + had + participle</b>, then <b>would have + participle</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "If I would have known, I would have called.",
          "r": "If I had known, I would have called.",
          "aceita": [
            "If I'd known, I would have called.",
            "If I'd known, I'd have called.",
            "If I had known, I'd have called."
          ],
          "d": "Hint: after <b>if</b> we use <b>had</b> + participle, not <b>would have</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "If it didn't rain, we would have gone.",
          "r": "If it hadn't rained, we would have gone.",
          "aceita": [
            "If it had not rained, we would have gone.",
            "If it hadn't rained, we'd have gone."
          ],
          "d": "Hint: a different past needs <b>hadn't</b> + participle."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: the result is about today.",
          "mostra": "If she hadn't called, I would have been lost now.",
          "r": "If she hadn't called, I would be lost now.",
          "aceita": [
            "If she had not called, I would be lost now.",
            "If she hadn't called, I'd be lost now."
          ],
          "d": "Hint: <b>now</b> = <b>would</b> + base verb, not <b>would have been</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/817528a2f0bc/the-people-vs-rader/img/live-nest.webp",
      "leg": "A nest of glowing dragon eggs",
      "pede": "Look at the picture: a nest of dragon eggs in a game level. Imagine the eggs hadn't hatched. Write 2 or 3 sentences about what would have happened. Use <b>if + had + participle</b> and <b>would have</b>.",
      "ph": "If the eggs hadn't hatched, …",
      "ex": "If the eggs hadn't hatched, the level would have ended. If the dragons hadn't grown, we wouldn't have crossed the canyon. We would be stuck there now."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "Which decision would you change if you could go back? Why?",
          "ph": "If I had …, I would have …",
          "ex": "If I had chosen design, I would be happier at work now."
        },
        {
          "q": "Think of someone you met by chance. How would your life be different without that meeting?",
          "ph": "If I hadn't met …, I wouldn't …",
          "ex": "If I hadn't met my teacher, I wouldn't speak English now."
        }
      ]
    }
  }
};
