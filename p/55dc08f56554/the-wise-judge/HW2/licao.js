/* THE WISE JUDGE · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: -ing or to (verb patterns). B1: nenhum português. Imagens live-* (camara, balanca, corte); a capa clara ficou de fora. */
window.HW2 = {
  "id": "the-wise-judge",
  "titulo": "The Wise Judge",
  "nivel": "B1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/55dc08f56554/the-wise-judge/img/live-camara.webp",
  "alvo": "verb patterns: want / need / decide / plan / promise + to + verb; stop / keep / avoid / enjoy + -ing; after a preposition always -ing (afraid of failing, thank you for helping)",
  "abrir": "What advice do you give your friends but never take yourself?",
  "fecho": "<b>want / need / decide / plan / promise + to</b>: <i>I need to decide.</i> <b>stop / keep / avoid / enjoy + -ing</b>: <i>Stop waiting.</i> After a preposition, always <b>-ing</b>: <i>afraid of failing, thank you for helping</i>.",
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
      "sub": "Mia asks Leo for advice about her job. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/55dc08f56554/the-wise-judge/img/live-camara.webp",
      "leg": "A candle, a scroll and a window at night",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, I want to quit my job, but I keep thinking about it every night."
        },
        {
          "quem": "leo",
          "t": "Okay, let me try something. Talk about yourself as if you were another person. Call her Ana."
        },
        {
          "quem": "mia",
          "t": "Why? That sounds silly."
        },
        {
          "quem": "leo",
          "t": "It's called Solomon's paradox. We give wise advice to our friends, but we avoid giving it to ourselves."
        },
        {
          "quem": "mia",
          "t": "Fine. Ana wants to quit, but she's afraid of losing her income."
        },
        {
          "quem": "leo",
          "t": "Then Ana should stop waiting for the perfect moment. Nobody finds it."
        },
        {
          "quem": "mia",
          "t": "True. Ana needs to save some money first, and she plans to talk to her boss next week."
        },
        {
          "quem": "leo",
          "t": "That sounds wise. And Ana should keep doing her job well while she decides."
        },
        {
          "quem": "mia",
          "t": "I can't believe it works. I already feel calmer. Thanks for helping me, Judge Leo."
        },
        {
          "quem": "leo",
          "t": "Anytime. Just remember to follow your own advice."
        }
      ],
      "perguntas": [
        {
          "q": "Why does Leo ask Mia to talk about Ana?",
          "op": [
            "To give advice to herself, like she does for a friend",
            "To hide her name from her boss",
            "To practice a story for work"
          ],
          "a": 0,
          "por": "We give wise advice to our friends, but we avoid giving it to ourselves."
        },
        {
          "q": "What is Ana afraid of?",
          "op": [
            "Losing her income",
            "Failing an exam",
            "Talking to her boss"
          ],
          "a": 0,
          "por": "Ana wants to quit, but she's afraid of losing her income."
        },
        {
          "q": "What does Ana plan to do next week?",
          "op": [
            "Talk to her boss",
            "Start a new job",
            "Move abroad"
          ],
          "a": 0,
          "por": "She plans to talk to her boss next week."
        }
      ]
    },
    "out": {
      "sub": "Three sentences about hard decisions. Hear it, then say it.",
      "frases": [
        {
          "t": "Ana needs to stop waiting for the perfect moment.",
          "img": "https://wolf-labs.pages.dev/p/55dc08f56554/the-wise-judge/img/live-balanca.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "She decided to apply, so she stopped worrying about it.",
          "img": "https://wolf-labs.pages.dev/p/55dc08f56554/the-wise-judge/img/live-camara.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "He is afraid of failing, but he wants to try.",
          "img": "https://wolf-labs.pages.dev/p/55dc08f56554/the-wise-judge/img/live-corte.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "-ing or to? Four quick ones.",
      "regra": "<b>want / need / decide / plan + to</b> · <b>stop / keep / avoid / enjoy + -ing</b> · after a preposition: <b>-ing</b>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "Ana avoids talking about money with her boss.",
          "aceita": [],
          "d": "Hint: <b>avoid</b> + verb-ing."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "I want quitting my job.",
          "r": "I want to quit my job.",
          "aceita": [
            "I want to quit my job"
          ],
          "d": "Hint: <b>want</b> + <b>to</b> + plain verb."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "She avoids to talk about it.",
          "r": "She avoids talking about it.",
          "aceita": [],
          "d": "Hint: <b>avoid</b> is followed by <b>-ing</b>, never by <i>to</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "Thank you for help me.",
          "r": "Thank you for helping me.",
          "aceita": [],
          "d": "Hint: after a preposition (<i>for</i>, <i>of</i>, <i>about</i>), always <b>-ing</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/55dc08f56554/the-wise-judge/img/live-camara.webp",
      "leg": "A candle and an open scroll by a window at night",
      "pede": "Look at the picture: a candle, a scroll and a window at night. Imagine a wise judge writing advice for you. Write 2 or 3 sentences about yourself in the third person. Use <b>want / need / decide + to</b> and <b>stop / keep / avoid + -ing</b>.",
      "ph": "[Your name] needs to stop …",
      "ex": "Ana wants to change careers. She should stop waiting for the perfect moment, and she needs to send her CV this week."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What do you want to do this year?",
          "ph": "This year I want to …",
          "ex": "This year I want to learn to cook, and I plan to start next month."
        },
        {
          "q": "What do you need to stop doing? What do you want to keep doing?",
          "ph": "I need to stop … I want to keep …",
          "ex": "I need to stop checking my phone at night, and I want to keep exercising."
        }
      ]
    }
  }
};
