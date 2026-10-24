/* WHAT YOU REALLY NEED · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: cleft sentences for advice. B2: no Portuguese. Only live-* images (all dark). */
window.HW2 = {
  "id": "what-you-really-need",
  "titulo": "What You Really Need",
  "nivel": "B2",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/dd26f1c92410/what-you-really-need/img/live-capa.webp",
  "alvo": "cleft sentences for advice: What you need is + noun · What you need to do is + plain verb · All you have to do is + plain verb · The thing you should ... is · The problem is (that) ...; never all what you need, is calling, What do you need is",
  "abrir": "Who do you call when you have a problem?",
  "fecho": "Put the important part last. <b>What you need is</b> + noun: <i>What you need is a plan.</i> <b>What you need to do is</b> + plain verb: <i>What you need to do is call her.</i> <b>All you have to do is</b> + plain verb. <b>The problem is (that)</b> + a full clause. Never <i>all what</i>, never <i>What do you need is</i>, never <i>is calling</i>.",
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
      "sub": "Mia gives Leo advice. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/dd26f1c92410/what-you-really-need/img/live-capa.webp",
      "leg": "A radio studio at night",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, I got a job offer in another city, and my brother thinks I should stay."
        },
        {
          "quem": "mia",
          "t": "What you need is a clear list, not more opinions."
        },
        {
          "quem": "leo",
          "t": "A list of what?"
        },
        {
          "quem": "mia",
          "t": "What you need to do is write down what you want, and what scares you."
        },
        {
          "quem": "leo",
          "t": "All I want is some peace and quiet. The problem is that I keep changing my mind."
        },
        {
          "quem": "mia",
          "t": "All you have to do is decide by Friday. The thing you should ask yourself is what you would regret."
        },
        {
          "quem": "leo",
          "t": "What I would regret is staying just because it's easy."
        },
        {
          "quem": "mia",
          "t": "Then what you want is to go."
        },
        {
          "quem": "leo",
          "t": "Maybe. What I need to do is call my brother first."
        }
      ],
      "perguntas": [
        {
          "q": "What does Mia say Leo needs?",
          "op": [
            "A clear list",
            "More opinions",
            "A new brother"
          ],
          "a": 0,
          "por": "What you need is a clear list, not more opinions."
        },
        {
          "q": "What is Leo's problem?",
          "op": [
            "He keeps changing his mind",
            "He dislikes his city",
            "He has no offer"
          ],
          "a": 0,
          "por": "The problem is that I keep changing my mind."
        },
        {
          "q": "What will Leo do first?",
          "op": [
            "Call his brother",
            "Take the job",
            "Write a letter"
          ],
          "a": 0,
          "por": "What I need to do is call my brother first."
        }
      ]
    },
    "out": {
      "sub": "Three pieces of advice. Hear it, then say it.",
      "frases": [
        {
          "t": "What you need is a clear list, not more opinions.",
          "img": "https://wolf-labs.pages.dev/p/dd26f1c92410/what-you-really-need/img/live-cartas.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "All you have to do is decide by Friday.",
          "img": "https://wolf-labs.pages.dev/p/dd26f1c92410/what-you-really-need/img/live-mesa.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "The problem is that I keep changing my mind.",
          "img": "https://wolf-labs.pages.dev/p/dd26f1c92410/what-you-really-need/img/live-linhas.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "What you need is ... Four quick ones.",
      "regra": "<b>What you need is</b> + noun · <b>What you need to do is</b> + plain verb · <b>All you have to do is</b> + plain verb · never <i>all what</i>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "What you need to do is write it down.",
          "aceita": [],
          "d": "Hint: <b>What you need to do is</b> + plain verb."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "What you need to do is calling her.",
          "r": "What you need to do is call her.",
          "aceita": [],
          "d": "Hint: after <b>do is</b>, use the plain verb: <b>call</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "All what you need is some rest.",
          "r": "All you need is some rest.",
          "aceita": [],
          "d": "Hint: no <i>what</i> after <b>all</b>: <b>All you need is</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: the order is wrong.",
          "mostra": "What do you need is a plan.",
          "r": "What you need is a plan.",
          "aceita": [],
          "d": "Hint: no question order here: <b>What you need is</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/dd26f1c92410/what-you-really-need/img/live-cartas.webp",
      "leg": "Letters on a dark table",
      "pede": "Look at the picture: letters on a dark table. Imagine a friend wrote you one. Write 2 or 3 pieces of advice for them. Use <b>What you need is</b>, <b>All you have to do is</b> or <b>The problem is that</b>.",
      "ph": "What you need is …",
      "ex": "What you need is a break. All you have to do is ask for help. The problem is that you never say no."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What do you really need this month?",
          "ph": "What I really need is …",
          "ex": "What I really need is more sleep."
        },
        {
          "q": "What is the thing you keep avoiding?",
          "ph": "The thing I keep avoiding is …",
          "ex": "The thing I keep avoiding is calling the bank."
        }
      ]
    }
  }
};
