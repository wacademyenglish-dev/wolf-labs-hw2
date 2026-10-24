/* IT'S A MATCH · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: responder à família: would love to, Thank you for + -ing, going to, pergunta embutida. A2 (curso A2+): dicas em português só nas notas (d). Só imagens live-* escuras. */
window.HW2 = {
  "id": "aupair-its-a-match",
  "titulo": "It's a Match",
  "nivel": "A2",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/34500dab5a0c/aupair-its-a-match/img/live-capa.webp",
  "alvo": "answering a host family kindly: I would love to be... ; Thank you for + -ing; a polite no (I don't think we are the right match); will / going to for the arrival; Could you tell me what the weather is like?",
  "abrir": "A family you do not want writes to you. What do you do?",
  "fecho": "<b>Yes:</b> <i>I would love to be your au pair. Thank you for choosing me.</i> <b>Kind no:</b> <i>Thank you for your message, but I don't think we are the right match.</i> <b>Plans:</b> <i>I am going to arrive in March.</i> A question inside a question keeps the order: <i>Could you tell me what the weather is like?</i>",
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
      "sub": "Mia answers two families. A new scene, about 45 seconds.",
      "img": "https://wolf-labs.pages.dev/p/34500dab5a0c/aupair-its-a-match/img/live-capa.webp",
      "leg": "A living room waiting for a new au pair",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, a new family wrote to me. They have two children and a dog."
        },
        {
          "quem": "leo",
          "t": "That is nice. Do you want to say yes?"
        },
        {
          "quem": "mia",
          "t": "I think so. But first I will answer in a kind way."
        },
        {
          "quem": "leo",
          "t": "Good. What will you write?"
        },
        {
          "quem": "mia",
          "t": "I would love to be your au pair. Thank you for choosing me."
        },
        {
          "quem": "leo",
          "t": "And another family wrote to you last week, right?"
        },
        {
          "quem": "mia",
          "t": "Yes. They have three children, and I am looking for a smaller family. I will say no, kindly."
        },
        {
          "quem": "leo",
          "t": "Good idea. Answer in 24 hours, even for a no."
        },
        {
          "quem": "mia",
          "t": "Yes. And I am going to ask when they want me to arrive."
        },
        {
          "quem": "leo",
          "t": "Send it now. You will feel better."
        }
      ],
      "perguntas": [
        {
          "q": "How many children does the first family have?",
          "op": [
            "Two",
            "Three",
            "One"
          ],
          "a": 0,
          "por": "They have two children and a dog."
        },
        {
          "q": "Why will Mia say no to the second family?",
          "op": [
            "She wants a smaller family",
            "She does not like dogs",
            "She is not free"
          ],
          "a": 0,
          "por": "They have three children, and I am looking for a smaller family."
        },
        {
          "q": "What is Mia going to ask the family?",
          "op": [
            "When they want her to arrive",
            "How much money they have",
            "What the dog's name is"
          ],
          "a": 0,
          "por": "I am going to ask when they want me to arrive."
        }
      ]
    },
    "out": {
      "sub": "Three lines for a family message. Hear it, then say it.",
      "frases": [
        {
          "t": "I would love to be your au pair.",
          "img": "https://wolf-labs.pages.dev/p/34500dab5a0c/aupair-its-a-match/img/live-capa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "Thank you so much for your message.",
          "img": "https://wolf-labs.pages.dev/p/34500dab5a0c/aupair-its-a-match/img/live-conversa.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "I am going to arrive in March.",
          "img": "https://wolf-labs.pages.dev/p/34500dab5a0c/aupair-its-a-match/img/live-conversa.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Yes, no and plans. Four quick ones.",
      "regra": "<b>I would love to be</b> · <b>Thank you for</b> + -ing · <b>I am going to</b> + verb · <b>Could you tell me what the weather is like?</b>",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "I am going to arrive in March.",
          "aceita": [],
          "d": "Dica: <b>going to</b> + verbo limpo (arrive)."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is missing.",
          "mostra": "I would love be your au pair.",
          "r": "I would love to be your au pair.",
          "aceita": [],
          "d": "Dica: <b>would love to</b> + verbo: falta o <b>to</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "Thank you for choose me.",
          "r": "Thank you for choosing me.",
          "aceita": [],
          "d": "Dica: depois de <b>for</b>, o verbo vai com <b>-ing</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: the word order is wrong.",
          "mostra": "Could you tell me what is the weather like?",
          "r": "Could you tell me what the weather is like?",
          "aceita": [
            "Could you tell me what the weather's like?"
          ],
          "d": "Dica: dentro da pergunta educada, a ordem é de frase normal: <b>the weather is</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/34500dab5a0c/aupair-its-a-match/img/live-conversa.webp",
      "leg": "A clock on a quiet wall",
      "pede": "Look at the picture: a clock on a quiet wall. Write 2 or 3 lines to a family: say yes, say thank you and say when you are going to arrive. Use <b>I would love to</b> and <b>I am going to</b>.",
      "ph": "Hi! I would love to …",
      "ex": "Hi! I would love to be your au pair. Thank you for choosing me. I am going to arrive in March."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "How fast will you answer a family? Why?",
          "ph": "I will answer …",
          "ex": "I will answer in 24 hours, even for a no, because families remember kindness."
        },
        {
          "q": "What will you ask a new host family? Write one question.",
          "ph": "Could you tell me …?",
          "ex": "Could you tell me what the children like to do?"
        }
      ]
    }
  }
};
