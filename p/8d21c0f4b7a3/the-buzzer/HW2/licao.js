/* THE BUZZER · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: will x going to. A2: dicas em português só nas notas (d). */
window.HW2 = {
  "id": "the-buzzer",
  "titulo": "The Buzzer",
  "nivel": "A2",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/8d21c0f4b7a3/the-buzzer/img/live-fundo.webp",
  "alvo": "will x going to: going to for a plan or proof you can see; will / won't for a decision, offer or promise made now; Will you ...? asks for help, Are you going to ...? asks about a plan; never will to",
  "abrir": "What are you going to do this weekend?",
  "fecho": "Plan or proof already there: <b>going to</b> (<i>My bag is packed. I'm going to leave.</i>). Born while you speak (offer, promise): <b>will / won't</b> (<i>I'll help you. I won't tell.</i>). Never <i>will to</i>.",
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
      "sub": "Mia and Leo before a game show. A new scene, about 45 seconds.",
      "img": "https://wolf-labs.pages.dev/p/8d21c0f4b7a3/the-buzzer/img/live-ceu.webp",
      "leg": "Black clouds over the stage",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Look at the sky, Mia. Those clouds are black. It's going to rain."
        },
        {
          "quem": "mia",
          "t": "Oh no. And my phone has two percent. It's going to die."
        },
        {
          "quem": "leo",
          "t": "Don't worry. I'll lend you my charger."
        },
        {
          "quem": "mia",
          "t": "Thanks! I won't forget it this time."
        },
        {
          "quem": "leo",
          "t": "Are you going to stay for the show tonight?"
        },
        {
          "quem": "mia",
          "t": "Yes. I bought the tickets in March. We're going to sit in the front row."
        },
        {
          "quem": "leo",
          "t": "Will you save me a seat? I'll be late."
        },
        {
          "quem": "mia",
          "t": "Of course I will. I think you'll love it."
        },
        {
          "quem": "leo",
          "t": "I hope so. And I'll bring the snacks!"
        },
        {
          "quem": "mia",
          "t": "Perfect. See you at the buzzer!"
        }
      ],
      "perguntas": [
        {
          "q": "Why is it going to rain?",
          "op": [
            "The clouds are black",
            "The forecast said so",
            "Leo has an umbrella"
          ],
          "a": 0,
          "por": "Those clouds are black. It's going to rain."
        },
        {
          "q": "What will Leo do about Mia's phone?",
          "op": [
            "He'll lend her a charger",
            "He'll buy a new phone",
            "He'll call her"
          ],
          "a": 0,
          "por": "I'll lend you my charger."
        },
        {
          "q": "What will Mia do for Leo?",
          "op": [
            "She'll save him a seat",
            "She'll bring the snacks",
            "She'll buy a ticket"
          ],
          "a": 0,
          "por": "Will you save me a seat? Of course I will."
        }
      ]
    },
    "out": {
      "sub": "Three sentences about what happens next. Hear it, then say it.",
      "frases": [
        {
          "t": "Look at the clouds. It's going to rain soon.",
          "img": "https://wolf-labs.pages.dev/p/8d21c0f4b7a3/the-buzzer/img/live-ceu.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "My bag is packed. I'm going to leave at six.",
          "img": "https://wolf-labs.pages.dev/p/8d21c0f4b7a3/the-buzzer/img/live-mala.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "The glass is on the edge. It's going to fall.",
          "img": "https://wolf-labs.pages.dev/p/8d21c0f4b7a3/the-buzzer/img/live-copo.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Plan or decision? Four quick ones.",
      "regra": "<b>going to</b> = a plan or proof you can see · <b>will / won't</b> = decided now (offer, promise) · never <b>will to</b>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "Are you going to watch anything tonight?",
          "aceita": [],
          "d": "Dica: pergunta sobre plano: <b>Are you going to</b> + verbo."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: no to after will.",
          "mostra": "That box looks heavy. I will to help you.",
          "r": "That box looks heavy. I'll help you.",
          "aceita": [
            "That box looks heavy. I will help you."
          ],
          "d": "Dica: depois de <b>will</b>, o verbo vem direto, sem <b>to</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: the plan was already made.",
          "mostra": "My bag is packed. I will leave at six.",
          "r": "My bag is packed. I'm going to leave at six.",
          "aceita": [
            "My bag is packed. I am going to leave at six."
          ],
          "d": "Dica: a mala já está pronta, é plano: <b>I'm going to</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "Look at those clouds. It's going to raining.",
          "r": "Look at those clouds. It's going to rain.",
          "aceita": [
            "Look at those clouds. It is going to rain."
          ],
          "d": "Dica: depois de <b>going to</b>, o verbo fica limpo: <b>rain</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/8d21c0f4b7a3/the-buzzer/img/live-mala.webp",
      "leg": "A packed bag, ready to go",
      "pede": "Look at the picture: a packed bag. Write 2 or 3 sentences: one plan with <b>going to</b> and one decision or promise with <b>I'll</b> or <b>I won't</b>.",
      "ph": "I'm going to …",
      "ex": "I'm going to travel on Friday. I'll call you when I arrive, and I won't forget my charger."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What are you going to do this weekend?",
          "ph": "This weekend I'm going to …",
          "ex": "This weekend I'm going to visit my grandmother."
        },
        {
          "q": "Your friend has a lot of bags. You decide to help. What do you say?",
          "ph": "I'll …",
          "ex": "I'll carry that bag for you."
        }
      ]
    }
  }
};
