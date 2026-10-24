/* THE PR DESCRIPTION · LIÇÃO DE CASA 2.0 (24/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: finalidade: to + verbo / so that / in order (not) to. B1: nenhum português. Imagens live-capa e live-b (49,5); live-a clara fica de fora. */
window.HW2 = {
  "id": "the-pr-description",
  "titulo": "The PR Description",
  "nivel": "B1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/bc6d1885c754/the-pr-description/img/live-capa.webp",
  "alvo": "purpose: to + verb (I added a cache to make it faster) · so that + subject + verb (so that it's easier to read) · in order to / in order not to + verb; never for to + verb, for + verb, in order to don't",
  "abrir": "Do people review your work? Is it easy to explain what you did?",
  "fecho": "<b>To</b> + verb tells the purpose: <i>I added a log <b>to see</b> the error.</i> <b>So that</b> + a full clause: <i>I renamed it <b>so that</b> it's easier to read.</i> Formal: <b>in order to</b> + verb, and <b>in order not to</b> + verb for the negative. Never <i>for to see</i>, never <i>for make</i>, never <i>in order to don't</i>.",
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
      "sub": "Mia and Leo review a pull request. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/bc6d1885c754/the-pr-description/img/live-capa.webp",
      "leg": "A change in the diff",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, I'm reading your pull request. Why did you add this cache?"
        },
        {
          "quem": "mia",
          "t": "I added it to make the price page faster. Before, we called the API every time."
        },
        {
          "quem": "leo",
          "t": "That makes sense. And why did you rename this variable?"
        },
        {
          "quem": "mia",
          "t": "I renamed it so that it's easier to read. The old name was just x."
        },
        {
          "quem": "leo",
          "t": "Fair. What is this new check for?"
        },
        {
          "quem": "mia",
          "t": "It's there to avoid an error with empty carts. I also wrote a test so that nobody breaks it again."
        },
        {
          "quem": "leo",
          "t": "Nice. But your description is empty. Please write it so that I know how to test it."
        },
        {
          "quem": "mia",
          "t": "You're right. I'll add the steps so that you can run them in two minutes."
        },
        {
          "quem": "leo",
          "t": "Perfect. Then I'll approve it tonight."
        }
      ],
      "perguntas": [
        {
          "q": "Why did Mia add the cache?",
          "op": [
            "To make the price page faster",
            "To delete old prices",
            "To test the API"
          ],
          "a": 0,
          "por": "I added it to make the price page faster."
        },
        {
          "q": "Why did she rename the variable?",
          "op": [
            "So that it's easier to read",
            "Because it was too long",
            "Because Leo asked"
          ],
          "a": 0,
          "por": "I renamed it so that it's easier to read."
        },
        {
          "q": "What does Leo ask Mia to write?",
          "op": [
            "A description with the steps to test",
            "A new cache",
            "A message to the client"
          ],
          "a": 0,
          "por": "Please write it so that I know how to test it."
        }
      ]
    },
    "out": {
      "sub": "Three sentences about why you changed something. Hear it, then say it.",
      "frases": [
        {
          "t": "I added a log to see the error.",
          "img": "https://wolf-labs.pages.dev/p/bc6d1885c754/the-pr-description/img/live-capa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "I renamed the file so that it's easier to find.",
          "img": "https://wolf-labs.pages.dev/p/bc6d1885c754/the-pr-description/img/live-b.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "I wrote a test so that nobody breaks it again.",
          "img": "https://wolf-labs.pages.dev/p/bc6d1885c754/the-pr-description/img/live-capa.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "To, so that, in order not to. Four quick ones.",
      "regra": "<b>to</b> + verb · <b>so that</b> + subject + verb · <b>in order to</b> / <b>in order not to</b> + verb · never <i>for</i> + verb.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "I added a check to avoid an error.",
          "aceita": [],
          "d": "Hint: <b>to</b> + the plain verb gives the purpose."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "I added a log for to see the error.",
          "r": "I added a log to see the error.",
          "aceita": [],
          "d": "Hint: purpose is <b>to</b> + verb. Not <i>for to</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "I used a cache for make it faster.",
          "r": "I used a cache to make it faster.",
          "aceita": [],
          "d": "Hint: <b>for</b> + verb is not possible. Use <b>to</b> + verb."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "I added a test in order to don't break it.",
          "r": "I added a test in order not to break it.",
          "aceita": [
            "I added a test so that it doesn't break.",
            "I added a test so that it won't break."
          ],
          "d": "Hint: the negative is <b>in order not to</b> + verb, or use <b>so that</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/bc6d1885c754/the-pr-description/img/live-b.webp",
      "leg": "One change, many branches",
      "pede": "Look at the picture: one change that spreads in many directions. Write 2 or 3 sentences about a change you made recently (at work, at school or at home) and why. Use <b>to</b> + verb or <b>so that</b>.",
      "ph": "I changed … to … / so that …",
      "ex": "I moved my desk so that I can see the window. I bought a second cable to charge my phone at work. I made a list so that I don't forget anything."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What did you do this week to make your life easier?",
          "ph": "I … to …",
          "ex": "I made a list to save time at the supermarket."
        },
        {
          "q": "Think of a change you made so that something works better. What was it?",
          "ph": "I changed … so that …",
          "ex": "I changed my alarm to six o'clock so that I have time for breakfast."
        }
      ]
    }
  }
};
