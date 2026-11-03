/* THE DOCUMENTS · GLOBAL PAYMENTS ENGLISH LESSON 10 · LIÇÃO DE CASA 2.0 (03/11/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: Do you have …? · Yes, I do / No, I don’t · We need … · the import documents. A1 com cara de A0: português só nas dicas (d). Bancos e empresas fictícios. */
window.HW2 = {
  "id": "global-payments-the-documents",
  "titulo": "The Documents",
  "nivel": "A1",
  "minutos": 12,
  "capa": "../img/live-capa.webp",
  "alvo": "Do you have …? · Yes, I do / No, I don’t · We need … · the import documents",
  "abrir": "A payment needs the bill of lading. What do you ask the client?",
  "fecho": "Question: <b>Do you have</b> …? Short answer: <b>Yes, I do. / No, I don’t.</b> · <b>We need</b> the … (no “of”).",
  "elenco": {
    "tom": {
      "nome": "Tom",
      "voz": "en-US-BrianNeural",
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
      "sub": "Ana asks Tom for a document. About 30 seconds.",
      "img": "../img/live-conversa.webp",
      "leg": "A cargo ship at night",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "ana",
          "t": "Hi Tom. We need the proforma invoice for FX-20488."
        },
        {
          "quem": "tom",
          "t": "The proforma? OK."
        },
        {
          "quem": "ana",
          "t": "Do you have it?"
        },
        {
          "quem": "tom",
          "t": "No, I don’t. My supplier has it."
        },
        {
          "quem": "ana",
          "t": "Can you ask them, please? It’s urgent."
        },
        {
          "quem": "tom",
          "t": "Sure. I can send it tomorrow."
        }
      ],
      "perguntas": [
        {
          "q": "Which document does Ana need?",
          "op": [
            "The proforma invoice",
            "The bill of lading",
            "The FX contract"
          ],
          "a": 0,
          "por": "We need the proforma invoice."
        },
        {
          "q": "Does Tom have it?",
          "op": [
            "No, he doesn’t.",
            "Yes, he does.",
            "He has two."
          ],
          "a": 0,
          "por": "No, I don’t. My supplier has it."
        },
        {
          "q": "When can he send it?",
          "op": [
            "Tomorrow",
            "Today",
            "Next week"
          ],
          "a": 0,
          "por": "I can send it tomorrow."
        }
      ]
    },
    "out": {
      "sub": "Three sentences from your job. Hear it, then say it three times.",
      "frases": [
        {
          "t": "Do you have the bill of lading?",
          "img": "../img/live-capa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "We need the import declaration.",
          "img": "../img/live-mesa.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "No, I don’t. Can you send it, please?",
          "img": "../img/live-conversa.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Your own mistakes, fixed. Four quick ones.",
      "regra": "Question: <b>Do you have</b> …? · <b>Yes, I do / No, I don’t</b> · <b>We need</b> the … (no “of”).",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "Do you have the bill of lading?",
          "aceita": [],
          "d": "Dica: comece com <b>Do you</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "You have the invoice?",
          "r": "Do you have the invoice?",
          "aceita": [],
          "d": "Dica: pergunta com <b>Do</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "Yes, I have.",
          "r": "Yes, I do.",
          "aceita": [],
          "d": "Dica: resposta curta: <b>Yes, I do</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "We need of the FX contract.",
          "r": "We need the FX contract.",
          "aceita": [],
          "d": "Dica: need sem “of”."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "../img/live-mesa.webp",
      "leg": "A neat stack of documents with a stamp",
      "pede": "Write a short email to a client asking for a missing document.",
      "ph": "Dear … We need … Do you have …? Can you send …, please?",
      "ex": "Dear Tom, We need the bill of lading for FX-20486. Do you have it? Can you send it, please?"
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "Do you have a lot of papers on your desk?",
          "ph": "Yes, I do. / No, I don’t.",
          "ex": "No, I don’t. Everything is on the screen."
        },
        {
          "q": "What document is always missing in your job?",
          "ph": "The … is always missing.",
          "ex": "The import declaration is always missing!"
        }
      ]
    }
  }
};
