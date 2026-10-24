/* THIS YEAR I'M GOING TO · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: going to x will x want to. A2: dicas em português só nas notas (d). Sem imagens (fotofobia). */
window.HW2 = {
  "id": "this-year-im-going-to",
  "titulo": "This Year I'm Going to…",
  "nivel": "A2",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/1995193b1d4a/this-year-im-going-to/img/live-capa.webp",
  "alvo": "going to (plan or proof you can see) x will (decided now, promise, I think); want to / would like to + verb; never will to, going + verb without to",
  "abrir": "What is one thing you want to do this year?",
  "fecho": "<b>going to</b> = a plan or proof you can see: <i>I'm going to learn the guitar. Look, it's going to rain.</i> <b>will</b> = decided now, a promise: <i>I'll help you. I'll call you.</i> <b>want to / would like to</b> + verb. Never <i>will to</i>.",
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
      "sub": "Mia and Leo in January. A new scene, about 45 seconds.",
      "img": "https://wolf-labs.pages.dev/p/1995193b1d4a/this-year-im-going-to/img/live-sala.webp",
      "leg": "A new year begins",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Happy new year, Mia! What are you going to do this year?"
        },
        {
          "quem": "mia",
          "t": "I'm going to learn the guitar. I bought one yesterday."
        },
        {
          "quem": "leo",
          "t": "Great! I'd like to learn too. Will you teach me?"
        },
        {
          "quem": "mia",
          "t": "Of course I will. But first I'm going to practice alone."
        },
        {
          "quem": "leo",
          "t": "Look at the sky. It's going to rain, and I have no umbrella."
        },
        {
          "quem": "mia",
          "t": "I'll lend you mine. I won't need it. I'm going to stay home."
        },
        {
          "quem": "leo",
          "t": "Thanks! I want to run every morning this year."
        },
        {
          "quem": "mia",
          "t": "Last year you were going to run too, but you stopped in February."
        },
        {
          "quem": "leo",
          "t": "True. This time I'll tell you every Sunday. I promise."
        },
        {
          "quem": "mia",
          "t": "Deal. I think you'll do it."
        }
      ],
      "perguntas": [
        {
          "q": "What is Mia going to do this year?",
          "op": [
            "Learn the guitar",
            "Run every morning",
            "Buy an umbrella"
          ],
          "a": 0,
          "por": "I'm going to learn the guitar."
        },
        {
          "q": "What does Mia say about her umbrella?",
          "op": [
            "She'll lend it to Leo",
            "She'll sell it",
            "She won't lend it"
          ],
          "a": 0,
          "por": "I'll lend you mine."
        },
        {
          "q": "What will Leo do every Sunday?",
          "op": [
            "Tell Mia about his running",
            "Run ten miles",
            "Teach Mia the guitar"
          ],
          "a": 0,
          "por": "This time I'll tell you every Sunday."
        }
      ]
    },
    "out": {
      "sub": "Three sentences about plans and promises. Hear it, then say it.",
      "frases": [
        {
          "t": "I bought a guitar. I'm going to learn it this year.", "img": "https://wolf-labs.pages.dev/p/1995193b1d4a/this-year-im-going-to/img/live-quadro.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "Look at the sky. It's going to rain.", "img": "https://wolf-labs.pages.dev/p/1995193b1d4a/this-year-im-going-to/img/live-janela.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "I'll lend you my umbrella. I promise.",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "A plan, a promise or a wish? Four quick ones.",
      "regra": "<b>going to</b> = a plan or proof you can see · <b>will</b> = decided now, a promise · <b>want to</b> + verb · never <b>will to</b>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "What are you going to do this year?",
          "aceita": [],
          "d": "Dica: pergunta sobre plano: <b>What are you going to</b> + verbo."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: no to after will.",
          "mostra": "I will to call you tomorrow.",
          "r": "I'll call you tomorrow.",
          "aceita": [
            "I will call you tomorrow."
          ],
          "d": "Dica: depois de <b>will</b>, o verbo vem direto, sem <b>to</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: you can see the proof.",
          "mostra": "Look at those clouds. It will rain.",
          "r": "Look at those clouds. It's going to rain.",
          "aceita": [
            "Look at those clouds. It is going to rain."
          ],
          "d": "Dica: as nuvens estão aí, é prova: <b>going to</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "I want going to learn the guitar.",
          "r": "I want to learn the guitar.",
          "aceita": [
            "I'm going to learn the guitar.",
            "I am going to learn the guitar."
          ],
          "d": "Dica: <b>want to</b> + verbo. Não misture com <b>going</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "pede": "Write 2 or 3 sentences about your year: one plan with <b>going to</b>, one wish with <b>want to</b> or <b>would like to</b>, and one promise with <b>I'll</b>.",
      "ph": "This year I'm going to …",
      "ex": "This year I'm going to save money. I want to travel in July. I'll call my mom every Sunday."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What are you going to do this year?",
          "ph": "This year I'm going to …",
          "ex": "This year I'm going to learn to swim."
        },
        {
          "q": "A friend says: I'm cold. You decide to help. What do you say?",
          "ph": "I'll …",
          "ex": "I'll close the window."
        }
      ]
    }
  }
};
