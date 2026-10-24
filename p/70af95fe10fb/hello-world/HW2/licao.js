/* HELLO, WORLD · LIÇÃO DE CASA 2.0 (24/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: Where are you based? What time is it there? at / in. A2: dicas em português só nas notas (d). Só imagens live-* escuras (lum < 50). */
window.HW2 = {
  "id": "hello-world",
  "titulo": "Hello, World",
  "nivel": "A2",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/70af95fe10fb/hello-world/img/live-capa.webp",
  "alvo": "first-day small talk with a remote team: Where are you based? I'm based in ...; What time is it there? (it is, never What time is there?); questions with do you; work at a company, live in a city",
  "abrir": "On your first day at a new job, what do you talk about?",
  "fecho": "<b>Where are you based?</b> <i>I'm based in Recife.</i> The time: <b>What time is it there?</b> <i>It's nine o'clock.</i> A question needs <b>do you</b>: <i>Where do you live?</i> A company is <b>at</b>: <i>I work at Packhouse.</i> A city is <b>in</b>: <i>I live in Brazil.</i>",
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
  "rate": "-14%",
  "rodadas": {
    "listen": {
      "sub": "Mia and Leo meet in the team chat. A new scene, about 45 seconds.",
      "img": "https://wolf-labs.pages.dev/p/70af95fe10fb/hello-world/img/live-capa.webp",
      "leg": "A laptop and a cup of coffee",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Hi Mia! Welcome to the team. Where are you based?"
        },
        {
          "quem": "mia",
          "t": "I'm based in Recife, in Brazil. And you?"
        },
        {
          "quem": "leo",
          "t": "I'm in Lisbon. What time is it there?"
        },
        {
          "quem": "mia",
          "t": "It's nine o'clock in the morning. What time is it for you?"
        },
        {
          "quem": "leo",
          "t": "It's already lunch time here. Our team lives in five countries!"
        },
        {
          "quem": "mia",
          "t": "Wow! Do you work in an office?"
        },
        {
          "quem": "leo",
          "t": "No, I work from home. I work at Packhouse, on the Payments team."
        },
        {
          "quem": "mia",
          "t": "Me too! I'm new on the Payments team."
        },
        {
          "quem": "leo",
          "t": "Great! Do you want a virtual coffee at ten?"
        },
        {
          "quem": "mia",
          "t": "Yes, please. See you at ten!"
        }
      ],
      "perguntas": [
        {
          "q": "Where is Mia based?",
          "op": [
            "In Recife, Brazil",
            "In Lisbon",
            "In Accra"
          ],
          "a": 0,
          "por": "I'm based in Recife, in Brazil."
        },
        {
          "q": "What time is it for Mia?",
          "op": [
            "Nine in the morning",
            "One in the afternoon",
            "Midnight"
          ],
          "a": 0,
          "por": "It's nine o'clock in the morning."
        },
        {
          "q": "Where does Leo work?",
          "op": [
            "From home",
            "In an office",
            "In a cafe"
          ],
          "a": 0,
          "por": "No, I work from home."
        }
      ]
    },
    "out": {
      "sub": "Three sentences for your first day. Hear it, then say it.",
      "frases": [
        {
          "t": "Where are you based?",
          "img": "https://wolf-labs.pages.dev/p/70af95fe10fb/hello-world/img/live-capa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "What time is it there?",
          "img": "https://wolf-labs.pages.dev/p/70af95fe10fb/hello-world/img/live-capa.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "I work at Packhouse, and I live in Brazil.",
          "img": "https://wolf-labs.pages.dev/p/70af95fe10fb/hello-world/img/live-capa.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Where? What time? At or in? Four quick ones.",
      "regra": "<b>Where are you based?</b> · <b>What time is it</b> there? · <b>do you</b> in questions · <b>at</b> a company, <b>in</b> a city.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "What time is it in Lisbon?",
          "aceita": [],
          "d": "Dica: hora é <b>it is</b>: What time <b>is it</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is missing.",
          "mostra": "What time is there?",
          "r": "What time is it there?",
          "aceita": [],
          "d": "Dica: falta o <b>it</b>: What time is <b>it</b> there?"
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is missing.",
          "mostra": "Where you live?",
          "r": "Where do you live?",
          "aceita": [
            "Where are you based?"
          ],
          "d": "Dica: pergunta pede <b>do you</b>: Where <b>do you</b> live?"
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "I work in Packhouse.",
          "r": "I work at Packhouse.",
          "aceita": [],
          "d": "Dica: empresa é <b>at</b>: I work <b>at</b> Packhouse."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/70af95fe10fb/hello-world/img/live-capa.webp",
      "leg": "A laptop and a cup of coffee on a desk",
      "pede": "Look at the picture: a laptop and a coffee on a desk. Write 2 or 3 sentences to say hello to your team. Say where you are based and what time it is there.",
      "ph": "Hi everyone! I'm based in …",
      "ex": "Hi everyone! I'm based in Recife. It's nine o'clock here. I work at Packhouse."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "Where are you based? What time is it there now?",
          "ph": "I'm based in … It's … here.",
          "ex": "I'm based in São Paulo. It's three o'clock here."
        },
        {
          "q": "Where do you work or study? Where do your friends live?",
          "ph": "I work at … My friend lives in …",
          "ex": "I work at a small company. My friend lives in Lisbon."
        }
      ]
    }
  }
};
