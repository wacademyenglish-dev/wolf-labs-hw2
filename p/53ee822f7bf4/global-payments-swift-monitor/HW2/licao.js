/* SWIFT MONITOR · GLOBAL PAYMENTS ENGLISH LESSON 3 · LIÇÃO DE CASA 2.0 (03/11/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: Who is…? / What is…? + spelling a BIC. A1 com cara de A0: português só nas dicas (d). Bancos e empresas fictícios. */
window.HW2 = {
  "id": "global-payments-swift-monitor",
  "titulo": "SWIFT Monitor",
  "nivel": "A1",
  "minutos": 12,
  "capa": "../img/live-capa.webp",
  "alvo": "Who is…? / What is…? + spelling a BIC",
  "abrir": "Someone says a BIC very fast on the phone. What do you say?",
  "fecho": "<b>Who</b> = quem · <b>What</b> = qual. In a question, <b>is</b> comes first: Who <b>is</b> the beneficiary?",
  "elenco": {
    "david": {
      "nome": "David",
      "voz": "en-GB-RyanNeural",
      "cor": "#86c9f0"
    },
    "ana": {
      "nome": "Ana",
      "voz": "en-US-AvaNeural",
      "cor": "#b9a6e8"
    }
  },
  "rate": "-15%",
  "rodadas": {
    "listen": {
      "sub": "David from Harbor Trust asks about a message. About 30 seconds.",
      "img": "../img/live-conversa.webp",
      "leg": "A call with the intermediary bank",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "david",
          "t": "Hi Ana. Who is the beneficiary of FX-20483?"
        },
        {
          "quem": "ana",
          "t": "The beneficiary is Atlas Motors."
        },
        {
          "quem": "david",
          "t": "What is the BIC of the bank?"
        },
        {
          "quem": "ana",
          "t": "N, G, T, Q, U, S, three, three."
        },
        {
          "quem": "david",
          "t": "Can you spell that, please? Slowly."
        },
        {
          "quem": "ana",
          "t": "Sure. N … G … T … Q … U … S … three … three."
        }
      ],
      "perguntas": [
        {
          "q": "Who is the beneficiary?",
          "op": [
            "Atlas Motors",
            "Harbor Trust",
            "Lumen Trading"
          ],
          "a": 0,
          "por": "The beneficiary is Atlas Motors."
        },
        {
          "q": "What does David ask?",
          "op": [
            "Can you spell that, please?",
            "What’s the amount?",
            "Is it urgent?"
          ],
          "a": 0,
          "por": "Can you spell that, please? Slowly."
        },
        {
          "q": "The BIC starts with…",
          "op": [
            "N, G, T",
            "M, G, D",
            "N, J, T"
          ],
          "a": 0,
          "por": "N, G, T, Q, U, S, three, three."
        }
      ]
    },
    "out": {
      "sub": "Three sentences from your job. Hear it, then say it three times.",
      "frases": [
        {
          "t": "Who is the beneficiary?",
          "img": "../img/live-capa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "What is the BIC?",
          "img": "../img/live-mesa.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "Can you spell that, please?",
          "img": "../img/live-conversa.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Your own mistakes, fixed. Four quick ones.",
      "regra": "Question: <b>Who / What</b> + <b>is</b> + the …? · Never “Who the … is?”",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "Who is the beneficiary?",
          "aceita": [],
          "d": "Dica: Who + <b>is</b> + the beneficiary?"
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "What the BIC is?",
          "r": "What is the BIC?",
          "aceita": [
            "What’s the BIC?"
          ],
          "d": "Dica: na pergunta, o <b>is</b> vem antes."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "Who the sender is?",
          "r": "Who is the sender?",
          "aceita": [],
          "d": "Dica: <b>Who is</b> …?"
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "What is the beneficiary?",
          "r": "Who is the beneficiary?",
          "aceita": [],
          "d": "Dica: beneficiário é empresa/pessoa → <b>Who</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "../img/live-mesa.webp",
      "leg": "A world map of bank routes",
      "pede": "Write two or three questions about a payment message.",
      "ph": "Who is …? What is …?",
      "ex": "Who is the beneficiary? What is the BIC? Who is the intermediary bank?"
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "Can you spell your name?",
          "ph": "Yes. It’s …",
          "ex": "Yes. A-N-A, R-E-I-S."
        },
        {
          "q": "Who is your manager?",
          "ph": "My manager is …",
          "ex": "My manager is Paul."
        }
      ]
    }
  }
};
