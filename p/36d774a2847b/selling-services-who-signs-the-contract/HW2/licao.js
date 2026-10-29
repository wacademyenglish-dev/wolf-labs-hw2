/* WHO SIGNS THE CONTRACT? · SELLING SERVICES LESSON 20 · LIÇÃO DE CASA 2.0 (27/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: finding the decision maker: has / have; Who signs…? / What does she do? / Where does he work?; job titles. A1: português só nas dicas (d). Empresas fictícias. */
window.HW2 = {
  "id": "selling-services-who-signs-the-contract",
  "titulo": "Who Signs the Contract?",
  "nivel": "A1",
  "minutos": 10,
  "capa": "../img/live-capa.webp",
  "alvo": "finding the decision maker: has / have; Who signs…? / What does she do? / Where does he work?; job titles",
  "abrir": "A client says: “I love your proposal!” What is your next question?",
  "fecho": "Find the decision maker: <b>Who signs the contract?</b> · <b>Who has the budget?</b> · <b>Who else is in the decision?</b>",
  "elenco": {
    "mia": {
      "nome": "Mia",
      "voz": "en-US-AvaNeural",
      "cor": "#86c9f0"
    },
    "leo": {
      "nome": "Leo",
      "voz": "en-US-GuyNeural",
      "cor": "#7fd1b9"
    }
  },
  "rate": "-12%",
  "rodadas": {
    "listen": {
      "sub": "Mia asks a client about the decision. About one minute.",
      "img": "../img/live-conversa.webp",
      "leg": "An organization chart on a whiteboard",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, we really like your proposal."
        },
        {
          "quem": "mia",
          "t": "Great! What do you do at Dune Textiles, Leo?"
        },
        {
          "quem": "leo",
          "t": "I’m the payroll coordinator."
        },
        {
          "quem": "mia",
          "t": "And who signs the contract?"
        },
        {
          "quem": "leo",
          "t": "Our CFO, Grace Kim. She has the budget."
        },
        {
          "quem": "mia",
          "t": "Does she work in your office?"
        },
        {
          "quem": "leo",
          "t": "No, she works in Houston."
        },
        {
          "quem": "mia",
          "t": "Who else is in the decision?"
        },
        {
          "quem": "leo",
          "t": "Our IT manager. He checks the systems."
        },
        {
          "quem": "mia",
          "t": "Thanks. Can we have a call with Grace next week?"
        }
      ],
      "perguntas": [
        {
          "q": "What does Leo do?",
          "op": [
            "He’s the payroll coordinator",
            "He’s the CFO",
            "He’s the IT manager"
          ],
          "a": 0,
          "por": "I’m the payroll coordinator."
        },
        {
          "q": "Who signs the contract?",
          "op": [
            "Grace Kim, the CFO",
            "Leo",
            "The IT manager"
          ],
          "a": 0,
          "por": "Our CFO, Grace Kim."
        },
        {
          "q": "Where does Grace work?",
          "op": [
            "In Houston",
            "In Leo’s office",
            "In Chicago"
          ],
          "a": 0,
          "por": "She works in Houston."
        }
      ]
    },
    "out": {
      "sub": "Three sentences from your job. Hear it, then say it.",
      "frases": [
        {
          "t": "Who signs the contract?",
          "img": "../img/live-capa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "Who has the budget?",
          "img": "../img/live-mesa.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "Where does she work?",
          "img": "../img/live-conversa.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Your own mistakes, fixed. Four quick ones.",
      "regra": "<b>Who signs…?</b> (no do/does) · he / she <b>has</b> · <b>Where does she work?</b> · Does she <b>have</b>…?",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "Who has the budget for this project?",
          "aceita": [],
          "d": "Dica: <b>who</b> é o sujeito: sem do/does."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "Who does sign the contract?",
          "r": "Who signs the contract?",
          "aceita": [],
          "d": "Dica: <b>Who</b> + verbo com -s."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "She have a big team.",
          "r": "She has a big team.",
          "aceita": [],
          "d": "Dica: he / she = <b>has</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "Where she works?",
          "r": "Where does she work?",
          "aceita": [],
          "d": "Dica: <b>Where does</b> + she + verbo."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "../img/live-mesa.webp",
      "leg": "An organization chart on a whiteboard",
      "pede": "Write about a real client: who signs, who has the budget, and who uses the service.",
      "ph": "… signs the contract. … has the budget. … uses …",
      "ex": "The CEO signs the contract. The CFO has the budget. The payroll team uses our service every day."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "Who has the final word in your team?",
          "ph": "… has the final word.",
          "ex": "My manager, Paula, has the final word."
        },
        {
          "q": "What does your manager do every day?",
          "ph": "He / She …",
          "ex": "She checks the sales numbers and talks to clients."
        }
      ]
    }
  }
};
