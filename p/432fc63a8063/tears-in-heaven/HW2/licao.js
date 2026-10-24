/* TEARS IN HEAVEN · LIÇÃO DE CASA 2.0 (24/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: Would you like / I'd like. Linha de música: NENHUM verso aqui; o listening é diálogo original. A1: dicas em português só nas notas (d). Cena neutra de loja de música, sem imagens (tema sensível: nada de perda, saudade ou céu). */
window.HW2 = {
  "id": "tears-in-heaven",
  "titulo": "Tears in Heaven",
  "nivel": "A1",
  "minutos": 10,
  "capa": "",
  "alvo": "Would you like + a thing / to + verb for polite offers (Would you like a coffee? Would you like to try it?); I'd like + a thing / to + verb to ask politely; no -s on like, never Would you to like, never I like for ordering",
  "abrir": "What would you like to drink right now?",
  "fecho": "To offer: <b>Would you like</b> + a thing or <b>to</b> + verb: <i>Would you like a coffee? Would you like to sit?</i> To ask politely: <b>I'd like</b>: <i>I'd like a guitar lesson.</i> No -s on <i>like</i>, and never <i>Would you to like</i>.",
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
      "sub": "Leo visits a music shop. Mia works there. A new scene, about 40 seconds.",
      "img": "",
      "leg": "",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Hello! Welcome to the music shop. Would you like some help?"
        },
        {
          "quem": "leo",
          "t": "Yes, please. I'd like a guitar for my brother."
        },
        {
          "quem": "mia",
          "t": "Nice. Would you like an electric guitar or a classic one?"
        },
        {
          "quem": "leo",
          "t": "A classic one, please. He is a beginner."
        },
        {
          "quem": "mia",
          "t": "Would you like to try this one? It is not expensive."
        },
        {
          "quem": "leo",
          "t": "Yes, I would. Oh, it sounds great!"
        },
        {
          "quem": "mia",
          "t": "Would you like a case too? It's a good price."
        },
        {
          "quem": "leo",
          "t": "Yes, I'd like a black case, please."
        },
        {
          "quem": "mia",
          "t": "Perfect. Would you like to pay by card?"
        }
      ],
      "perguntas": [
        {
          "q": "What would Leo like?",
          "op": [
            "A guitar for his brother",
            "A drum for himself",
            "A piano"
          ],
          "a": 0,
          "por": "I'd like a guitar for my brother."
        },
        {
          "q": "Which guitar would Leo like?",
          "op": [
            "A classic one",
            "An electric one",
            "A red one"
          ],
          "a": 0,
          "por": "A classic one, please."
        },
        {
          "q": "What color case would Leo like?",
          "op": [
            "Black",
            "Red",
            "Blue"
          ],
          "a": 0,
          "por": "I'd like a black case, please."
        }
      ]
    },
    "out": {
      "sub": "Three polite sentences in a music shop. Hear it, then say it.",
      "frases": [
        {
          "t": "Would you like some help?",
          "img": "https://wolf-labs.pages.dev/p/432fc63a8063/tears-in-heaven/img/",
          "au": "audio/say1.mp3"
        },
        {
          "t": "I'd like a guitar for my brother.",
          "img": "https://wolf-labs.pages.dev/p/432fc63a8063/tears-in-heaven/img/",
          "au": "audio/say2.mp3"
        },
        {
          "t": "Would you like to try this one?",
          "img": "https://wolf-labs.pages.dev/p/432fc63a8063/tears-in-heaven/img/",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Would you like? Four quick ones.",
      "regra": "<b>Would you like</b> + a thing / <b>to</b> + verb · <b>I'd like</b> = polite ask · no -s on <b>like</b>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "I would like to try this guitar.",
          "aceita": [],
          "d": "Dica: <b>I would like</b> + <b>to</b> + verbo: pedido educado."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "Would you likes a coffee?",
          "r": "Would you like a coffee?",
          "aceita": [],
          "d": "Dica: depois de <b>would</b>, <b>like</b> fica sem -s."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is missing.",
          "mostra": "Would you like drink some water?",
          "r": "Would you like to drink some water?",
          "aceita": [],
          "d": "Dica: com um verbo depois de <b>would you like</b>, entra o <b>to</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "I like a coffee, please.",
          "r": "I'd like a coffee, please.",
          "aceita": [
            "I would like a coffee, please."
          ],
          "d": "Dica: para pedir com educação, use <b>I'd like</b>, não 'I like'."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "",
      "leg": "",
      "pede": "Imagine a music shop, and you work there. Write 2 or 3 sentences to a customer. Offer something with <b>Would you like</b>. Then say what you would like to buy: <b>I'd like</b>.",
      "ph": "Would you like …? I'd like …",
      "ex": "Would you like to try this guitar? Would you like a case too? I'd like a new guitar for my birthday."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What would you like to drink right now?",
          "ph": "I'd like …",
          "ex": "I'd like a glass of cold water."
        },
        {
          "q": "Would you like to learn an instrument? Which one?",
          "ph": "I'd like to learn …",
          "ex": "Yes, I would. I'd like to learn the guitar."
        }
      ]
    }
  }
};
