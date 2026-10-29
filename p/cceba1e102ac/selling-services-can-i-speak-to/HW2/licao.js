/* CAN I SPEAK TO MR. DUARTE? · SELLING SERVICES LESSON 17 · LIÇÃO DE CASA 2.0 (27/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: phone calls with an assistant: This is… / I’m calling about… / Can I speak to…? / Could you take a message?. A1: português só nas dicas (d). Empresas fictícias. */
window.HW2 = {
  "id": "selling-services-can-i-speak-to",
  "titulo": "Can I Speak to Mr. Duarte?",
  "nivel": "A1",
  "minutos": 10,
  "capa": "../img/live-capa.webp",
  "alvo": "phone calls with an assistant: This is… / I’m calling about… / Can I speak to…? / Could you take a message?",
  "abrir": "You call a company. The receptionist answers. What is your first sentence?",
  "fecho": "Open the door politely: <b>This is…</b> · <b>I’m calling about…</b> · <b>Can I speak to…, please?</b> · <b>Could you take a message?</b>",
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
      "sub": "Mia calls a company. The assistant answers. About one minute.",
      "img": "../img/live-conversa.webp",
      "leg": "An office phone on a reception desk",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Good morning, Harbor Tools. Leo speaking."
        },
        {
          "quem": "mia",
          "t": "Hi, Leo. This is Mia Brooks, from Clearline Services."
        },
        {
          "quem": "mia",
          "t": "I’m calling about our accounting proposal. Can I speak to Ms. Lane, please?"
        },
        {
          "quem": "leo",
          "t": "Sorry, she’s in a meeting."
        },
        {
          "quem": "mia",
          "t": "No problem. Could you take a message, please?"
        },
        {
          "quem": "leo",
          "t": "Sure. What’s the message?"
        },
        {
          "quem": "mia",
          "t": "Please tell her Mia called about the proposal. My number is 555-0187."
        },
        {
          "quem": "leo",
          "t": "OK. She’s free after 3 p.m."
        },
        {
          "quem": "mia",
          "t": "Perfect. Thank you for your help!"
        }
      ],
      "perguntas": [
        {
          "q": "Why is Mia calling?",
          "op": [
            "About an accounting proposal",
            "About a payroll problem",
            "About a meeting"
          ],
          "a": 0,
          "por": "I’m calling about our accounting proposal."
        },
        {
          "q": "Where is Ms. Lane?",
          "op": [
            "In a meeting",
            "On a trip",
            "At lunch"
          ],
          "a": 0,
          "por": "Sorry, she’s in a meeting."
        },
        {
          "q": "When is Ms. Lane free?",
          "op": [
            "After 3 p.m.",
            "Tomorrow morning",
            "At noon"
          ],
          "a": 0,
          "por": "She’s free after 3 p.m."
        }
      ]
    },
    "out": {
      "sub": "Three sentences from your job. Hear it, then say it.",
      "frases": [
        {
          "t": "Hi, this is Leo Martins, from Bluepeak.",
          "img": "../img/live-capa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "I’m calling about our proposal.",
          "img": "../img/live-mesa.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "Could you take a message, please?",
          "img": "../img/live-conversa.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Your own mistakes, fixed. Four quick ones.",
      "regra": "Phone: <b>This is…</b> · <b>I’m calling about…</b> · <b>Can I speak to…?</b> · <b>Could you take a message?</b>",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "Can I speak to Hugo Duarte, please?",
          "aceita": [],
          "d": "Dica: pedir para falar com alguém: <b>Can I speak to…</b>"
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "Hi, here is Leo, from Bluepeak.",
          "r": "Hi, this is Leo, from Bluepeak.",
          "aceita": [
            "This is Leo, from Bluepeak.",
            "Hi, this is Leo from Bluepeak."
          ],
          "d": "Dica: no telefone, “aqui é” = <b>this is</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "I’m calling for the proposal.",
          "r": "I’m calling about the proposal.",
          "aceita": [
            "I am calling about the proposal."
          ],
          "d": "Dica: o motivo da ligação: calling <b>about</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "Can you get a message?",
          "r": "Could you take a message?",
          "aceita": [
            "Could you take a message, please?",
            "Can you take a message?"
          ],
          "d": "Dica: recado = <b>take a message</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "../img/live-mesa.webp",
      "leg": "A notebook with a call script next to a phone",
      "pede": "Write the start of a cold call: your name, the reason, and the person.",
      "ph": "Hi, this is … from … I’m calling about … Can I speak to …, please?",
      "ex": "Hi, this is Leo Martins, from Bluepeak. I’m calling about our payroll proposal. Can I speak to Ms. Lane, please?"
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "Who do you want to call this week?",
          "ph": "I want to call … because …",
          "ex": "I want to call a CFO in Curitiba because she has a big finance team."
        },
        {
          "q": "Do you prefer calling or e-mailing a new client? Why?",
          "ph": "I prefer … because …",
          "ex": "I prefer e-mailing because the client can answer later."
        }
      ]
    }
  }
};
