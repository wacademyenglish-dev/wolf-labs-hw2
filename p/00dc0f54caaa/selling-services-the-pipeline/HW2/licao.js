/* THE PIPELINE · SELLING SERVICES LESSON 24 · LIÇÃO DE CASA 2.0 (27/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: will for decisions at the moment (I’ll + verb), won’t, Will you…?; never “OK, I call him tomorrow”, “I’ll to send”, “I don’t will”. A1: português só nas dicas (d). Empresas fictícias. */
window.HW2 = {
  "id": "selling-services-the-pipeline",
  "titulo": "The Pipeline",
  "nivel": "A1",
  "minutos": 10,
  "capa": "../img/live-capa.webp",
  "alvo": "will for decisions at the moment (I’ll + verb), won’t, Will you…?; never “OK, I call him tomorrow”, “I’ll to send”, “I don’t will”",
  "abrir": "No answer from a client for two weeks. Decide now: what will you do?",
  "fecho": "A decision now: <b>I’ll + verb</b>. <i>OK, I’ll call him on Monday. I won’t wait. Will you talk to the CFO?</i>",
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
      "sub": "Mia, a seller, talks to a client who isn’t ready. About one minute.",
      "img": "../img/live-conversa.webp",
      "leg": "A sales board with sticky notes at night",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Hi Leo. Did you read our proposal?"
        },
        {
          "quem": "leo",
          "t": "Yes, I did. But we aren’t ready. Our budget is closed."
        },
        {
          "quem": "mia",
          "t": "I understand. When does the new budget start?"
        },
        {
          "quem": "leo",
          "t": "In February."
        },
        {
          "quem": "mia",
          "t": "OK. I’ll call you in February, then."
        },
        {
          "quem": "leo",
          "t": "Good. Will you send me a short case study?"
        },
        {
          "quem": "mia",
          "t": "Sure, I’ll send it today."
        },
        {
          "quem": "leo",
          "t": "Thanks. I won’t forget your proposal."
        },
        {
          "quem": "mia",
          "t": "Great. I’ll put a note in my calendar."
        }
      ],
      "perguntas": [
        {
          "q": "Why isn’t the client ready?",
          "op": [
            "The budget is closed.",
            "He doesn’t like the price.",
            "He’s on vacation."
          ],
          "a": 0,
          "por": "We aren’t ready. Our budget is closed."
        },
        {
          "q": "When will Mia call him?",
          "op": [
            "In February",
            "Tomorrow",
            "Next week"
          ],
          "a": 0,
          "por": "OK. I’ll call you in February, then."
        },
        {
          "q": "What will Mia send today?",
          "op": [
            "A short case study",
            "The contract",
            "A new price"
          ],
          "a": 0,
          "por": "Sure, I’ll send it today."
        }
      ]
    },
    "out": {
      "sub": "Three sentences from your job. Hear it, then say it.",
      "frases": [
        {
          "t": "OK, I’ll call him on Monday.",
          "img": "../img/live-capa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "I won’t wait two weeks.",
          "img": "../img/live-mesa.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "Will you talk to the CFO?",
          "img": "../img/live-conversa.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Your own mistakes, fixed. Four quick ones.",
      "regra": "Decision now: <b>I’ll + simple verb</b> · negative: <b>won’t</b> · question: <i>Will you…?</i>",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "OK, I’ll call him on Monday.",
          "aceita": [],
          "d": "Dica: decisão na hora = <b>I’ll</b> + verbo."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "OK, I call him tomorrow.",
          "r": "OK, I’ll call him tomorrow.",
          "aceita": [
            "OK, I will call him tomorrow."
          ],
          "d": "Dica: decidiu agora? <b>I’ll</b> call."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "I’ll to send the proposal.",
          "r": "I’ll send the proposal.",
          "aceita": [
            "I will send the proposal."
          ],
          "d": "Dica: depois de will, sem “to”."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "I don’t will call this month.",
          "r": "I won’t call this month.",
          "aceita": [
            "I will not call this month."
          ],
          "d": "Dica: negativa = <b>won’t</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "../img/live-mesa.webp",
      "leg": "A sales board with sticky notes at night",
      "pede": "Two leads from your work. For each one: move forward or not yet, and your next step with I’ll.",
      "ph": "Lead 1: … I’ll … Lead 2: … I won’t … I’ll …",
      "ex": "Brava Foods: move forward. I’ll send three dates today. Delta Foods: not yet. I’ll call them in January."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What will you do this weekend? Decide now!",
          "ph": "I think I’ll …",
          "ex": "I think I’ll visit my parents and rest."
        },
        {
          "q": "Your colleague is very busy. What do you say?",
          "ph": "I’ll help you with …",
          "ex": "Don’t worry, I’ll help you with the report."
        }
      ]
    }
  }
};
