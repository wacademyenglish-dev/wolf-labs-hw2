/* HAVE YOU EVER WORKED WITH SAP? · SELLING SERVICES LESSON 27 · LIÇÃO DE CASA 2.0 (27/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: Have you ever…? / Yes, we have / No, I haven’t / We’ve never… for experience; a time → past; never “You already worked…?”, “Have you ever work…?”, “Yes, I do”. A1: português só nas dicas (d). Empresas fictícias. */
window.HW2 = {
  "id": "selling-services-have-you-ever-worked",
  "titulo": "Have You Ever Worked with SAP?",
  "nivel": "A1",
  "minutos": 10,
  "capa": "../img/live-capa.webp",
  "alvo": "Have you ever…? / Yes, we have / No, I haven’t / We’ve never… for experience; a time → past; never “You already worked…?”, “Have you ever work…?”, “Yes, I do”",
  "abrir": "A client asks: “Have you ever worked with a company like us?” What do you say?",
  "fecho": "Experience: <b>Have you ever + -ed?</b> → <i>Yes, we have. / No, I haven’t.</i> With a time: <i>We worked with them in 2024.</i>",
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
      "sub": "Mia, a seller, answers a client’s questions about experience. About one minute.",
      "img": "../img/live-conversa.webp",
      "leg": "A wall of client logos in an office at night",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, have you ever worked with a hotel company?"
        },
        {
          "quem": "mia",
          "t": "Yes, we have. We worked with three hotels last year."
        },
        {
          "quem": "leo",
          "t": "Have you ever used Oracle for payroll?"
        },
        {
          "quem": "mia",
          "t": "Yes, many times. We’ve used it for eight years."
        },
        {
          "quem": "leo",
          "t": "Have you ever had a problem with a go-live?"
        },
        {
          "quem": "mia",
          "t": "Honestly, yes. Once, in 2022. We learned a lot."
        },
        {
          "quem": "leo",
          "t": "I like your honesty. Have you ever worked in Chile?"
        },
        {
          "quem": "mia",
          "t": "No, we haven’t. But we’ve worked in Argentina."
        },
        {
          "quem": "leo",
          "t": "OK. Can you send me a case study?"
        }
      ],
      "perguntas": [
        {
          "q": "How many hotels did Mia’s company work with last year?",
          "op": [
            "Three",
            "Eight",
            "Two"
          ],
          "a": 0,
          "por": "Yes, we have. We worked with three hotels last year."
        },
        {
          "q": "Have they ever had a problem with a go-live?",
          "op": [
            "Yes, once, in 2022.",
            "No, never.",
            "Yes, last year."
          ],
          "a": 0,
          "por": "Honestly, yes. Once, in 2022. We learned a lot."
        },
        {
          "q": "Have they worked in Chile?",
          "op": [
            "No, but they’ve worked in Argentina.",
            "Yes, in 2022.",
            "Yes, many times."
          ],
          "a": 0,
          "por": "No, we haven’t. But we’ve worked in Argentina."
        }
      ]
    },
    "out": {
      "sub": "Three sentences from your job. Hear it, then say it.",
      "frases": [
        {
          "t": "Yes, we have. We’ve worked with six hotels.",
          "img": "../img/live-capa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "No, we haven’t, but we’ve used Oracle.",
          "img": "../img/live-mesa.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "We worked with them in 2025.",
          "img": "../img/live-conversa.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Your own mistakes, fixed. Four quick ones.",
      "regra": "Experience: <b>Have you ever + -ed?</b> · <i>Yes, I have / No, I haven’t</i> · <i>We’ve never…</i> · with a time → past: <i>We worked in 2024.</i>",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "Have you ever worked with SAP?",
          "aceita": [],
          "d": "Dica: experiência = <b>Have you ever</b> + -ed."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "You already worked with Oracle?",
          "r": "Have you ever worked with Oracle?",
          "aceita": [],
          "d": "Dica: “você já…?” = <b>Have you ever…?</b>"
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "Have you ever use TOTVS?",
          "r": "Have you ever used TOTVS?",
          "aceita": [],
          "d": "Dica: have + <b>-ed</b>: used."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "We have worked with them in 2024.",
          "r": "We worked with them in 2024.",
          "aceita": [],
          "d": "Dica: com ano (in 2024) = passado: <b>worked</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "../img/live-mesa.webp",
      "leg": "A wall of client logos in an office at night",
      "pede": "A client asks: “Have you ever worked with a company like us?” Write your answer: yes or no, and one example with a year.",
      "ph": "Yes, we have. In …, we worked with … / No, we haven’t, but …",
      "ex": "Yes, we have. We’ve worked with five retail companies. In 2025, we worked with Costa Retail, and they saved 15%."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "Have you ever made a big mistake at work?",
          "ph": "Yes, I have. / No, I haven’t.",
          "ex": "Yes, I have! Once, I sent a proposal to the wrong client."
        },
        {
          "q": "Have you ever been to another country?",
          "ph": "Yes, I have. I’ve been to …",
          "ex": "Yes, I have. I’ve been to Portugal and Chile."
        }
      ]
    }
  }
};
