/* SBAR HANDOVER · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: SBAR em 4 passos (I'm calling about / was admitted / números / Could you…?). B1+ (nivel B1 no hw2.mjs): nenhum português. Caso leve (asma melhorando, alta). Só live-capa (telefone na mesa, escura). */
window.HW2 = {
  "id": "health-sbar-handover",
  "titulo": "SBAR Handover",
  "nivel": "B1",
  "minutos": 10,
  "capa": "../img/live-capa.webp",
  "alvo": "SBAR handover in four steps: Situation in one sentence (This is… I'm calling about…) · Background, only what matters (He was admitted… with…) · Assessment with numbers (His saturation is…) · Recommendation as a clear request (Could you…? Would you consider…?)",
  "abrir": "Who do you usually talk to at the end of your shift?",
  "fecho": "<b>S</b>: <i>This is Mia, the nurse on Ward 5. I'm calling about Mr. Hall in bed 6.</i> <b>B</b>: only what matters: <i>He was admitted two days ago with mild asthma.</i> <b>A</b>: numbers first: <i>His saturation is 98 percent.</i> <b>R</b>: a clear request: <i>Could you review him this morning?</i>",
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
  "rate": "-12%",
  "rodadas": {
    "listen": {
      "sub": "Mia, a ward nurse, calls Dr. Leo on a quiet morning. A new scene, about one minute.",
      "img": "../img/live-capa.webp",
      "leg": "The phone on the ward desk",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Good morning, Dr. Leo. This is Mia, the nurse on Ward 5."
        },
        {
          "quem": "leo",
          "t": "Morning, Mia. How can I help?"
        },
        {
          "quem": "mia",
          "t": "I'm calling about Mr. Hall in bed 6. His asthma is much better, and I think he's ready to go home."
        },
        {
          "quem": "leo",
          "t": "Okay. Remind me of the background."
        },
        {
          "quem": "mia",
          "t": "He's 29. He was admitted two days ago with a mild asthma attack, and he was started on inhalers."
        },
        {
          "quem": "leo",
          "t": "And how is he today?"
        },
        {
          "quem": "mia",
          "t": "His breathing rate is 16, his oxygen saturation is 98 percent, and his peak flow went up from 300 to 450. He's walking around and eating well."
        },
        {
          "quem": "leo",
          "t": "That sounds great. What would you like me to do?"
        },
        {
          "quem": "mia",
          "t": "Could you review him this morning and consider discharge? And would you consider a follow-up with the asthma nurse?"
        },
        {
          "quem": "leo",
          "t": "Of course. I'll see him at ten. Thanks for the clear handover, Mia."
        }
      ],
      "perguntas": [
        {
          "q": "What is the situation, in one sentence?",
          "op": [
            "Mr. Hall is much better and may be ready to go home",
            "Mr. Hall needs a new bed",
            "Mr. Hall missed his medicine"
          ],
          "a": 0,
          "por": "I'm calling about Mr. Hall in bed 6. His asthma is much better, and I think he's ready to go home."
        },
        {
          "q": "Which numbers does Mia give?",
          "op": [
            "Breathing rate, oxygen saturation and peak flow",
            "Only his age",
            "His weight and height"
          ],
          "a": 0,
          "por": "His breathing rate is 16, his oxygen saturation is 98 percent, and his peak flow went up from 300 to 450."
        },
        {
          "q": "What does Mia ask for?",
          "op": [
            "A review this morning and a follow-up with the asthma nurse",
            "A new inhaler",
            "A bed on another ward"
          ],
          "a": 0,
          "por": "Could you review him this morning and consider discharge? And would you consider a follow-up with the asthma nurse?"
        }
      ]
    },
    "out": {
      "sub": "Three lines from a calm SBAR call. Hear it, then say it.",
      "frases": [
        {
          "t": "Hi, this is Mia, the nurse on Ward 5. I'm calling about Mr. Hall in bed 6.",
          "au": "audio/say1.mp3",
          "img": "../img/live-capa.webp"
        },
        {
          "t": "He was admitted two days ago with mild asthma, and his oxygen saturation is now 98 percent.",
          "au": "audio/say2.mp3"
        },
        {
          "t": "Could you review him this morning and consider discharge?",
          "au": "audio/say3.mp3",
          "img": "../img/live-capa.webp"
        }
      ]
    },
    "focus": {
      "sub": "S, B, A and R. Four quick ones.",
      "regra": "<b>S</b>: I'm calling about… · <b>B</b>: was admitted / is 29 · <b>A</b>: numbers · <b>R</b>: <b>Could you</b> + plain verb?",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "I am calling about the patient in bed 4.",
          "aceita": [],
          "d": "Hint: the Situation starts with <b>I am calling about</b> + who."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "She was admit yesterday with a sprained ankle.",
          "r": "She was admitted yesterday with a sprained ankle.",
          "aceita": [],
          "d": "Hint: <b>was</b> + third form: <i>admitted</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "He has 29 years and mild asthma.",
          "r": "He is 29 and has mild asthma.",
          "aceita": [
            "He is 29 years old and has mild asthma.",
            "He's 29 and has mild asthma.",
            "He's 29 years old and has mild asthma."
          ],
          "d": "Hint: age in English uses <b>be</b>: <i>he is 29</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "Could you to review him this morning?",
          "r": "Could you review him this morning?",
          "aceita": [],
          "d": "Hint: after <b>Could you</b>, the plain verb, no <i>to</i>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "pede": "Look at the picture: a phone and a notebook on a desk. Write a short SBAR for a routine case: a patient with a sprained ankle who is ready to start physio. Give <b>S</b>, <b>B</b>, one number for <b>A</b>, and a clear <b>R</b>.",
      "ph": "I'm calling about …",
      "ex": "I'm calling about Ms. Lopes in bed 3. She was admitted yesterday with a sprained ankle. Her pain is now 2 out of 10. Could you see her today and refer her to physio?",
      "img": "../img/live-capa.webp",
      "leg": "A phone and a notebook on a desk"
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "Who do you hand over to at the end of your shift, and how?",
          "ph": "At the end of my shift, I …",
          "ex": "At the end of my shift, I talk to the night nurse at the desk."
        },
        {
          "q": "Think of a routine patient. Say the Situation in one sentence.",
          "ph": "I'm calling about …",
          "ex": "I'm calling about Mr. Reis in bed 2: his wound is healing well."
        }
      ]
    }
  }
};
