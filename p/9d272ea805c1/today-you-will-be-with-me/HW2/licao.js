/* TODAY YOU WILL BE WITH ME · LIÇÃO DE CASA 2.0 (24/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: will (promessa, oferta, pergunta). Versículos (World English Bible, ao pé da letra): Luke 23:43 (Listen, Out loud) e Luke 23:42 (Você). Só a promessa e a esperança; nenhuma cena da cruz. Nada da Bíblia é marcado como errado. B1: nenhum português. */
window.HW2 = {
  "id": "today-you-will-be-with-me",
  "titulo": "Today You Will Be With Me",
  "nivel": "B1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/9d272ea805c1/today-you-will-be-with-me/img/live-lamparina.webp",
  "alvo": "will for promises (I will be there, I won't forget), offers (I'll help you) and quick decisions; Will you ...? to ask; won't for a promise not to; after when / as soon as the present, never will; plain verb after will",
  "abrir": "What is a promise you want to keep this year?",
  "fecho": "<b>will</b> + plain verb for a promise or an offer: <i>I'll help you on Saturday. I won't forget.</i> A question starts with <b>Will</b>: <i>Will you help me?</i> After <b>when</b> and <b>as soon as</b>, the present: <i>I'll call you when I arrive.</i>",
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
      "sub": "Mia and Leo talk about a second chance. Mia quotes Luke 23:43. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/9d272ea805c1/today-you-will-be-with-me/img/live-selos.webp",
      "leg": "Sealed letters, a candle",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, you look worried. What's wrong?"
        },
        {
          "quem": "leo",
          "t": "I promised to help you move last Saturday, and I didn't come. I'm really sorry. Can I have a second chance?"
        },
        {
          "quem": "mia",
          "t": "Of course. I forgive you. Everybody breaks a promise sometimes."
        },
        {
          "quem": "leo",
          "t": "Thank you. I'll help you this Saturday, and I won't forget. I'll set three alarms."
        },
        {
          "quem": "mia",
          "t": "Good plan. This morning I read a promise that made me feel hopeful. It's Luke 23:43. Jesus says, “Assuredly I tell you, today you will be with me in Paradise.”"
        },
        {
          "quem": "leo",
          "t": "A promise full of hope. I like that."
        },
        {
          "quem": "mia",
          "t": "Me too. A promise gives people hope. When you keep yours, I will trust you again."
        },
        {
          "quem": "leo",
          "t": "I will keep it. Will you text me the address?"
        },
        {
          "quem": "mia",
          "t": "I will. And I'll bring the coffee."
        }
      ],
      "perguntas": [
        {
          "q": "What did Leo ask Mia for?",
          "op": [
            "A second chance",
            "A new address",
            "A cup of coffee"
          ],
          "a": 0,
          "por": "Can I have a second chance?"
        },
        {
          "q": "How will Leo make sure he doesn't forget?",
          "op": [
            "He will set three alarms",
            "He will ask Mia to call him",
            "He will write it on his hand"
          ],
          "a": 0,
          "por": "I'll set three alarms."
        },
        {
          "q": "What will Mia bring on Saturday?",
          "op": [
            "The coffee",
            "The boxes",
            "The van"
          ],
          "a": 0,
          "por": "I'll bring the coffee."
        }
      ]
    },
    "out": {
      "sub": "Three sentences about promises. The third is from the Bible: Luke 23:43 (World English Bible), the words of Jesus. Hear it, then say it.",
      "frases": [
        {
          "t": "I will help you on Saturday, and I won't forget.",
          "img": "https://wolf-labs.pages.dev/p/9d272ea805c1/today-you-will-be-with-me/img/live-selos.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "Will you give me a second chance? I promise I won't be late again.",
          "img": "https://wolf-labs.pages.dev/p/9d272ea805c1/today-you-will-be-with-me/img/live-lamparina.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "Assuredly I tell you, today you will be with me in Paradise.",
          "img": "https://wolf-labs.pages.dev/p/9d272ea805c1/today-you-will-be-with-me/img/live-relogio.webp",
          "au": "audio/say3.mp3",
          "ref": "Luke 23:43"
        }
      ]
    },
    "focus": {
      "sub": "will, won't and Will you ...? Four quick ones.",
      "regra": "<b>will</b> + plain verb · <b>won't</b> = a promise not to · <b>Will you ...?</b> = a question · after <b>when</b> / <b>as soon as</b>: the present.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "I will call you as soon as I arrive.",
          "aceita": [],
          "d": "Hint: after <b>as soon as</b>, use the present (I arrive), not <i>I will arrive</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "I'll call you when you will arrive.",
          "r": "I'll call you when you arrive.",
          "aceita": [
            "I will call you when you arrive."
          ],
          "d": "Hint: after <b>when</b>, the present: <i>when you arrive</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "Do you will help me on Saturday?",
          "r": "Will you help me on Saturday?",
          "aceita": [
            "Will you help me on Saturday?"
          ],
          "d": "Hint: the question starts with <b>Will</b>. No <i>do</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "I promise I don't do it again.",
          "r": "I promise I won't do it again.",
          "aceita": [
            "I promise I will not do it again."
          ],
          "d": "Hint: a promise about the future needs <b>won't</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/9d272ea805c1/today-you-will-be-with-me/img/live-lamparina.webp",
      "leg": "A small flame in a dark room",
      "pede": "Look at the picture: a small flame in a dark room. Write 2 or 3 sentences about a promise you <b>will</b> keep and something you <b>will</b> do for a friend. Use <b>will</b> and <b>won't</b>.",
      "ph": "I will … and I won't …",
      "ex": "I will call my sister every Sunday, and I won't forget her birthday. I'll bring dinner to my neighbor tomorrow."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "In Luke 23:42 a man asks, “Lord, remember me when you come into your Kingdom.” Think about asking someone for a second chance. Who will you ask, and what will you promise?",
          "ph": "I will ask … I promise I will …",
          "ex": "I will ask my brother for a second chance. I promise I won't be late again."
        },
        {
          "q": "What promise will you keep this week?",
          "ph": "This week I will …",
          "ex": "I will call my grandmother on Sunday, and I won't forget."
        }
      ]
    }
  }
};
