/* REVIEW: READY FOR THE CLIENT · SELLING SERVICES LESSON 29 · LIÇÃO DE CASA 2.0 (27/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: review 16–28 in a follow-up: love + -ing, I’m calling about…, but/so, it includes, have to, I’ll, Would you like…?. A1: português só nas dicas (d). Empresas fictícias. */
window.HW2 = {
  "id": "selling-services-ready-for-the-client",
  "titulo": "Review: Ready for the Client",
  "nivel": "A1",
  "minutos": 10,
  "capa": "../img/live-capa.webp",
  "alvo": "review 16–28 in a follow-up: love + -ing, I’m calling about…, but/so, it includes, have to, I’ll, Would you like…?",
  "abrir": "A week after a meeting, you call the client. What are your first two sentences?",
  "fecho": "A good follow-up: <i>How was your weekend?</i> → <b>I’m calling about…</b> → <b>It includes…</b> → <b>I have to…</b> → <b>I’ll send…</b> → <b>Would you like…?</b>",
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
      "sub": "Mia, a seller, calls a client a week after the meeting. About one minute.",
      "img": "../img/live-conversa.webp",
      "leg": "A phone on a desk next to a calendar at night",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Hi Leo, this is Mia from Brightway. How was your weekend?"
        },
        {
          "quem": "leo",
          "t": "Great! I love cycling, and I rode 50 kilometers."
        },
        {
          "quem": "mia",
          "t": "Wow! I’m calling about the proposal. Did you read it?"
        },
        {
          "quem": "leo",
          "t": "Yes, but it’s expensive for us."
        },
        {
          "quem": "mia",
          "t": "I understand. But it includes training, so your team learns fast."
        },
        {
          "quem": "leo",
          "t": "Hmm. I have to talk to my CFO."
        },
        {
          "quem": "mia",
          "t": "Of course. Would she like a call with us?"
        },
        {
          "quem": "leo",
          "t": "Yes. Thursday at 3 p.m.?"
        },
        {
          "quem": "mia",
          "t": "Perfect. I’ll send an invite today."
        }
      ],
      "perguntas": [
        {
          "q": "What does Leo love doing?",
          "op": [
            "Cycling",
            "Sailing",
            "Running"
          ],
          "a": 0,
          "por": "Great! I love cycling, and I rode 50 kilometers."
        },
        {
          "q": "What does the proposal include?",
          "op": [
            "Training",
            "Travel",
            "A new ERP"
          ],
          "a": 0,
          "por": "But it includes training, so your team learns fast."
        },
        {
          "q": "When is the call with the CFO?",
          "op": [
            "Thursday at 3 p.m.",
            "Tuesday at 10 a.m.",
            "Today"
          ],
          "a": 0,
          "por": "Yes. Thursday at 3 p.m.?"
        }
      ]
    },
    "out": {
      "sub": "Three sentences from your job. Hear it, then say it.",
      "frases": [
        {
          "t": "I’m calling about the proposal.",
          "img": "../img/live-capa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "It includes training, so your team learns fast.",
          "img": "../img/live-mesa.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "I’ll send you an invite today.",
          "img": "../img/live-conversa.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Your own mistakes, fixed. Four quick ones.",
      "regra": "Review: <b>love + -ing</b> · <b>it includes / doesn’t include</b> · <b>have to</b> · decision: <b>I’ll</b> · <i>Would you like…?</i>",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "I’m calling about the proposal.",
          "aceita": [],
          "d": "Dica: motivo da ligação = <b>I’m calling about</b>…"
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "I really enjoyed talk with you.",
          "r": "I really enjoyed talking with you.",
          "aceita": [],
          "d": "Dica: enjoy + <b>-ing</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "It don’t include travel.",
          "r": "It doesn’t include travel.",
          "aceita": [
            "It does not include travel."
          ],
          "d": "Dica: it → <b>doesn’t</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "OK, I send you an invite today.",
          "r": "OK, I’ll send you an invite today.",
          "aceita": [
            "OK, I will send you an invite today."
          ],
          "d": "Dica: decidiu agora = <b>I’ll</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "../img/live-mesa.webp",
      "leg": "A phone on a desk next to a calendar at night",
      "pede": "Write a short follow-up e-mail after a meeting: thank you, one thing the proposal includes, and the next step.",
      "ph": "Hi …, thank you for … The proposal includes … I’ll …",
      "ex": "Hi Karen, thank you for the call today. The proposal includes two days of training. I’ll send you an invite for Tuesday."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What do you love doing on weekends?",
          "ph": "I love …ing.",
          "ex": "I love cycling and cooking for my friends."
        },
        {
          "q": "What will you do after this course?",
          "ph": "I think I’ll …",
          "ex": "I think I’ll call a client in the US!"
        }
      ]
    }
  }
};
