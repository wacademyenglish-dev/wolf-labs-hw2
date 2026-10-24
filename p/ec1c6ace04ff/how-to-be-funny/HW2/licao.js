/* HOW TO BE FUNNY · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: even if / whether ... or. B1: nenhum português. Imagens live-* (mic, palco). */
window.HW2 = {
  "id": "how-to-be-funny",
  "titulo": "How to Be Funny",
  "nivel": "B1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/ec1c6ace04ff/how-to-be-funny/img/live-mic.jpg",
  "alvo": "even if (it doesn't matter if this is true) · whether ... or ... (it doesn't matter which one); never 'even that'",
  "abrir": "What did you do last time, even if you were nervous?",
  "fecho": "<b>Even if</b> = it doesn't matter if this is true: <i>Even if nobody laughs, I'll finish the joke.</i> <b>Whether … or …</b> = it doesn't matter which one: <i>Whether you're dry or goofy, be yourself.</i> Never <i>even that</i>.",
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
      "sub": "Mia and Leo before an open mic night. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/ec1c6ace04ff/how-to-be-funny/img/live-palco.jpg",
      "leg": "The stage, ten minutes before the show",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, are you really going on stage tonight? The open mic starts in ten minutes."
        },
        {
          "quem": "leo",
          "t": "Yes, but my jokes are terrible. Even if nobody laughs, I have to try."
        },
        {
          "quem": "mia",
          "t": "That's the spirit. Whether they laugh or not, you're braver than most people here."
        },
        {
          "quem": "leo",
          "t": "What if they don't get my pun? It's about a lettuce."
        },
        {
          "quem": "mia",
          "t": "Even if they don't get it, just smile and say it again, slowly."
        },
        {
          "quem": "leo",
          "t": "My dad always says that whether a joke is old or new, the punchline is what matters."
        },
        {
          "quem": "mia",
          "t": "Your dad is right. So, is your humor dry or goofy tonight?"
        },
        {
          "quem": "leo",
          "t": "Dry, I think. But whether I'm dry or goofy, I'm still me."
        },
        {
          "quem": "mia",
          "t": "Exactly. Now go! I'll be at the front table, laughing loudly."
        },
        {
          "quem": "leo",
          "t": "Even if it's a fake laugh?"
        },
        {
          "quem": "mia",
          "t": "Especially then!"
        }
      ],
      "perguntas": [
        {
          "q": "Why does Leo say he has to try?",
          "op": [
            "He will go on stage even if nobody laughs",
            "He is sure everybody will laugh",
            "He wants to win a prize"
          ],
          "a": 0,
          "por": "Even if nobody laughs, I have to try."
        },
        {
          "q": "What does Mia say to do if people don't get the pun?",
          "op": [
            "Smile and say it again, slowly",
            "Leave the stage",
            "Explain it for five minutes"
          ],
          "a": 0,
          "por": "Even if they don't get it, just smile and say it again, slowly."
        },
        {
          "q": "What does Leo say about being dry or goofy?",
          "op": [
            "He is still himself",
            "He wants to change his style",
            "He prefers to stay home"
          ],
          "a": 0,
          "por": "Whether I'm dry or goofy, I'm still me."
        }
      ]
    },
    "out": {
      "sub": "Three sentences about telling jokes. Hear it, then say it.",
      "frases": [
        {
          "t": "Even if nobody laughs, I will finish the joke.",
          "img": "https://wolf-labs.pages.dev/p/ec1c6ace04ff/how-to-be-funny/img/live-mic.jpg",
          "au": "audio/say1.mp3"
        },
        {
          "t": "Whether you are dry or goofy, be yourself.",
          "img": "https://wolf-labs.pages.dev/p/ec1c6ace04ff/how-to-be-funny/img/live-palco.jpg",
          "au": "audio/say2.mp3"
        },
        {
          "t": "Even if the pun is old, say it with a big smile.",
          "img": "https://wolf-labs.pages.dev/p/ec1c6ace04ff/how-to-be-funny/img/live-mic.jpg",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "even if, whether ... or. Four quick ones.",
      "regra": "<b>even if</b> = it doesn't matter if this is true · <b>whether … or …</b> = it doesn't matter which one · never <i>even that</i>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "Whether the joke is old or new, the punchline matters.",
          "aceita": [],
          "d": "Hint: <b>whether</b> … <b>or</b> …: two options, then the main idea."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "Even that nobody laughs, I will go on stage.",
          "r": "Even if nobody laughs, I will go on stage.",
          "aceita": [
            "Even if nobody laughs, I'll go on stage."
          ],
          "d": "Hint: <i>even that</i> does not exist. Use <b>even if</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is missing.",
          "mostra": "Whether you are dry, goofy, be yourself.",
          "r": "Whether you are dry or goofy, be yourself.",
          "aceita": [
            "Whether you're dry or goofy, be yourself."
          ],
          "d": "Hint: <b>whether</b> always needs its partner <b>or</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "Even if I don't understood the joke, I smile.",
          "r": "Even if I don't understand the joke, I smile.",
          "aceita": [
            "Even if I do not understand the joke, I smile."
          ],
          "d": "Hint: after <i>don't</i>, the verb stays plain: <b>understand</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/ec1c6ace04ff/how-to-be-funny/img/live-palco.jpg",
      "leg": "An empty stage with a red curtain and candles",
      "pede": "Look at the picture: an empty stage with a red curtain and candles. Write 2 or 3 sentences about what you would do on that stage. Use <b>even if</b> and <b>whether … or …</b>.",
      "ph": "Even if I'm nervous, I will …",
      "ex": "Even if I'm nervous, I will tell my best joke. Whether the audience laughs or stays quiet, I will smile."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What do you do even if you don't feel like it?",
          "ph": "Even if I don't feel like it, I …",
          "ex": "Even if I don't feel like it, I go for a walk every morning."
        },
        {
          "q": "Whether you are tired or in a good mood, what do you always do?",
          "ph": "Whether I'm … or …, I always …",
          "ex": "Whether I'm tired or happy, I always say hello first."
        }
      ]
    }
  }
};
