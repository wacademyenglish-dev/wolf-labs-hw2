/* THE BILL · LIÇÃO DE CASA 2.0 (24/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: explicar com analogias (a bit like, Think of it as, Put simply). C1: nenhum português. */
window.HW2 = {
  "id": "the-bill",
  "titulo": "The Bill",
  "nivel": "C1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/4997afc09a87/the-bill/img/live-capa.webp",
  "alvo": "explaining technical things with analogies: It's a bit like + noun · Think of it as + noun · Put simply, ... · In other words, ... · Imagine + present; no if after like, think OF it, Put simply (not simply put it), no would after imagine",
  "abrir": "How would you explain the cloud to your grandmother?",
  "fecho": "Plain English for people who are not technical: <b>It's a bit like</b> + noun · <b>Think of it as</b> + noun · <b>Put simply</b>, … · <b>In other words</b>, … · <b>Imagine</b> + present: <i>Imagine you have an alarm that rings every minute.</i>",
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
      "sub": "Mia and Leo prepare how to explain a cloud bill. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/4997afc09a87/the-bill/img/live-capa.webp",
      "leg": "A calculator, some coins, a lamp",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, Sarah's cloud bill went from ninety-two to nine hundred dollars. I have to explain it to her tonight."
        },
        {
          "quem": "leo",
          "t": "Without jargon, please. What happened?"
        },
        {
          "quem": "mia",
          "t": "A scheduled job runs every minute instead of every hour."
        },
        {
          "quem": "leo",
          "t": "Use an analogy. It's a bit like an alarm clock that rings sixty times an hour instead of once."
        },
        {
          "quem": "mia",
          "t": "Nice. And the cost? She pays every time it runs."
        },
        {
          "quem": "leo",
          "t": "Think of it as a taxi meter. Every ring is another ride, and the meter never stops."
        },
        {
          "quem": "mia",
          "t": "Put simply, the job did the same work sixty times too often."
        },
        {
          "quem": "leo",
          "t": "Good. Then say what you fixed. In other words, it now rings once an hour."
        },
        {
          "quem": "mia",
          "t": "And her accountant? He only likes numbers."
        },
        {
          "quem": "leo",
          "t": "Imagine you have a printer that prints the same page every minute, all night. He will get it."
        }
      ],
      "perguntas": [
        {
          "q": "How does Leo describe the job in everyday terms?",
          "op": [
            "An alarm clock that rings too often",
            "A printer that is out of paper",
            "A phone that is turned off"
          ],
          "a": 0,
          "por": "It's a bit like an alarm clock that rings sixty times an hour instead of once."
        },
        {
          "q": "Why does the bill keep growing?",
          "op": [
            "Every run costs money",
            "The code is too long",
            "The accountant made a mistake"
          ],
          "a": 0,
          "por": "She pays every time it runs."
        },
        {
          "q": "What is the fix, in other words?",
          "op": [
            "The job now runs once an hour",
            "The job was deleted",
            "The bill was cancelled"
          ],
          "a": 0,
          "por": "In other words, it now rings once an hour."
        }
      ]
    },
    "out": {
      "sub": "Three ways to explain it. Hear it, then say it.",
      "frases": [
        {
          "t": "It's a bit like an alarm clock that rings every minute.",
          "img": "https://wolf-labs.pages.dev/p/4997afc09a87/the-bill/img/live-capa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "Think of it as a taxi meter that never stops.",
          "img": "https://wolf-labs.pages.dev/p/4997afc09a87/the-bill/img/live-capa.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "Put simply, the job ran sixty times too often.",
          "img": "https://wolf-labs.pages.dev/p/4997afc09a87/the-bill/img/live-capa.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Analogies and plain English. Four quick ones.",
      "regra": "<b>It's a bit like</b> + noun · <b>Think of it as</b> + noun · <b>Put simply</b>, … · <b>Imagine</b> + present.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "Imagine you have an alarm that rings every minute.",
          "aceita": [],
          "d": "Hint: <b>Imagine</b> + present: <b>you have</b>, not <i>you would have</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "It's a bit like if you have a taxi.",
          "r": "It's a bit like a taxi.",
          "aceita": [],
          "d": "Hint: <b>a bit like</b> + noun, no <i>if</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is missing.",
          "mostra": "Think it as a taxi meter.",
          "r": "Think of it as a taxi meter.",
          "aceita": [],
          "d": "Hint: <b>think of it as</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: the order is wrong.",
          "mostra": "Simply put it, the job ran too often.",
          "r": "Put simply, the job ran too often.",
          "aceita": [
            "Simply put, the job ran too often."
          ],
          "d": "Hint: <b>Put simply</b>, … is the fixed phrase."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/4997afc09a87/the-bill/img/live-capa.webp",
      "leg": "A calculator, some coins, a lamp",
      "pede": "Look at the picture: a calculator, some coins and a lamp. Explain to a non-technical friend why a cloud bill can jump. Write two or three sentences with an analogy. Use <b>It's a bit like</b>, <b>Think of it as</b> or <b>Put simply</b>.",
      "ph": "A cloud bill is a bit like …",
      "ex": "A cloud bill is a bit like a taxi meter. Think of it as a counter that never stops. Put simply, the more your code runs, the more you pay."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "Explain what a password manager is to your grandmother.",
          "ph": "It's a bit like …",
          "ex": "It's a bit like a safe with one key for all your passwords."
        },
        {
          "q": "Explain what the cloud is in one sentence, without jargon.",
          "ph": "Think of it as …",
          "ex": "Think of it as renting a computer that lives in someone else's building."
        }
      ]
    }
  }
};
