/* FINAL PROJECT: THE DEAL · SELLING SERVICES LESSON 30 · LIÇÃO DE CASA 2.0 (27/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: the whole A1+ course in one sale: questions with a helper, -s, going to, past, Have you ever…?, it includes, I’ll, What about…? / It’s a deal. A1: português só nas dicas (d). Empresas fictícias. */
window.HW2 = {
  "id": "selling-services-final-project-the-deal",
  "titulo": "Final Project: The Deal",
  "nivel": "A1",
  "minutos": 10,
  "capa": "../img/live-capa.webp",
  "alvo": "the whole A1+ course in one sale: questions with a helper, -s, going to, past, Have you ever…?, it includes, I’ll, What about…? / It’s a deal",
  "abrir": "A new client says: “So, tell me: what do you do?” What are your two sentences?",
  "fecho": "The whole sale: <b>We help… We’ve worked with…</b> → <b>How many…? Who signs…?</b> → <b>It includes… What about…?</b> → <b>We’re going to start… Do we have a deal?</b> → <b>I’ll send…</b>",
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
      "sub": "Mia, a seller, closes a deal with a client. About one minute.",
      "img": "../img/live-conversa.webp",
      "leg": "Two hands shaking over a signed contract at night",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, we like the proposal. But your competitor is cheaper."
        },
        {
          "quem": "mia",
          "t": "I understand. But our price includes training, and theirs doesn’t."
        },
        {
          "quem": "leo",
          "t": "Have you ever worked with a company like us?"
        },
        {
          "quem": "mia",
          "t": "Yes, we have. Last year, we worked with two airlines."
        },
        {
          "quem": "leo",
          "t": "OK. When are you going to start?"
        },
        {
          "quem": "mia",
          "t": "We’re going to start on February 2."
        },
        {
          "quem": "leo",
          "t": "Our CFO has to sign. She’s here today."
        },
        {
          "quem": "mia",
          "t": "Great. Do we have a deal?"
        },
        {
          "quem": "leo",
          "t": "Yes. It’s a deal!"
        },
        {
          "quem": "mia",
          "t": "Thank you! I’ll send the contract this afternoon."
        }
      ],
      "perguntas": [
        {
          "q": "Why is Mia’s price better?",
          "op": [
            "It includes training.",
            "It’s cheaper.",
            "It includes travel."
          ],
          "a": 0,
          "por": "But our price includes training, and theirs doesn’t."
        },
        {
          "q": "What experience does Mia have?",
          "op": [
            "Two airlines last year",
            "Ten banks",
            "No experience"
          ],
          "a": 0,
          "por": "Yes, we have. Last year, we worked with two airlines."
        },
        {
          "q": "When are they going to start?",
          "op": [
            "On February 2",
            "In January",
            "Next week"
          ],
          "a": 0,
          "por": "We’re going to start on February 2."
        }
      ]
    },
    "out": {
      "sub": "Three sentences from your job. Hear it, then say it.",
      "frases": [
        {
          "t": "We help companies with payroll and finance.",
          "img": "../img/live-capa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "Our price includes training.",
          "img": "../img/live-mesa.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "Do we have a deal?",
          "img": "../img/live-conversa.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Your own mistakes, fixed. Four quick ones.",
      "regra": "The course in four rules: <b>he / she / it + -s</b> · questions with a helper (<i>Do you…?</i>) · plans: <b>be + going to</b> · past: <b>-ed</b>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "We’re going to start in January.",
          "aceita": [],
          "d": "Dica: plano = <b>we’re going to</b> + verbo."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "The CFO sign the contracts.",
          "r": "The CFO signs the contracts.",
          "aceita": [],
          "d": "Dica: the CFO = she → sign<b>s</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "You use SAP?",
          "r": "Do you use SAP?",
          "aceita": [],
          "d": "Dica: pergunta precisa de <b>Do</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "Last year we save 20%.",
          "r": "Last year we saved 20%.",
          "aceita": [],
          "d": "Dica: last year = passado: <b>saved</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "../img/live-mesa.webp",
      "leg": "Two hands shaking over a signed contract at night",
      "pede": "Write a short closing e-mail to a client: thank you, the start date with going to, one thing the price includes, the next step with I’ll.",
      "ph": "Hi …, thank you for … We’re going to start on … The price includes … I’ll send …",
      "ex": "Hi Ivy, thank you for the meeting. We’re going to start on January 5. The price includes the night shifts. I’ll send you the contract today."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What was the most useful lesson for your job?",
          "ph": "The most useful was … because …",
          "ex": "The most useful was the discovery call because I use the questions every week."
        },
        {
          "q": "What are you going to do with your English next year?",
          "ph": "I’m going to …",
          "ex": "I’m going to visit a client in Miami and present in English!"
        }
      ]
    }
  }
};
