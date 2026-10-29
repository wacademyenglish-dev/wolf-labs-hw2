/* PLEASE CALL ME BACK · SELLING SERVICES LESSON 18 · LIÇÃO DE CASA 2.0 (27/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: voicemail: Please call me back at…; phone numbers digit by digit; times with a.m./p.m.; e-mails with at / dot. A1: português só nas dicas (d). Empresas fictícias. */
window.HW2 = {
  "id": "selling-services-please-call-me-back",
  "titulo": "Please Call Me Back",
  "nivel": "A1",
  "minutos": 10,
  "capa": "../img/live-capa.webp",
  "alvo": "voicemail: Please call me back at…; phone numbers digit by digit; times with a.m./p.m.; e-mails with at / dot",
  "abrir": "Nobody answers your call. Beep! What do you say first?",
  "fecho": "A perfect voicemail: <b>This is…</b> · <b>I’m calling about…</b> · <b>Please call me back at…</b> (say it twice!) · <b>I’m free after … p.m.</b>",
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
      "sub": "Two voicemails for Mia. About one minute.",
      "img": "../img/live-conversa.webp",
      "leg": "A phone with a voicemail notification on a desk",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Hi, Mia. This is Leo Grant, from Cedar Paper."
        },
        {
          "quem": "leo",
          "t": "I’m calling about the new contract."
        },
        {
          "quem": "leo",
          "t": "Please call me back at five five five, oh three one eight."
        },
        {
          "quem": "leo",
          "t": "I’m free tomorrow after 11 a.m. Thanks!"
        },
        {
          "quem": "mia",
          "t": "Hi, Leo. This is Mia, from Clearline. I’m returning your call."
        },
        {
          "quem": "mia",
          "t": "Sorry, I’m busy tomorrow morning."
        },
        {
          "quem": "mia",
          "t": "Is 4 p.m. good for you?"
        },
        {
          "quem": "mia",
          "t": "My e-mail is mia at clearline dot com."
        },
        {
          "quem": "mia",
          "t": "Please send me the contract. Thanks!"
        }
      ],
      "perguntas": [
        {
          "q": "What is Leo’s number?",
          "op": [
            "555-0318",
            "555-0381",
            "555-3018"
          ],
          "a": 0,
          "por": "Please call me back at five five five, oh three one eight."
        },
        {
          "q": "When is Leo free?",
          "op": [
            "Tomorrow after 11 a.m.",
            "Tomorrow at 4 p.m.",
            "Today after 11 a.m."
          ],
          "a": 0,
          "por": "I’m free tomorrow after 11 a.m."
        },
        {
          "q": "What does Mia want?",
          "op": [
            "The contract",
            "A meeting in the morning",
            "His e-mail"
          ],
          "a": 0,
          "por": "Please send me the contract."
        }
      ]
    },
    "out": {
      "sub": "Three sentences from your job. Hear it, then say it.",
      "frases": [
        {
          "t": "Please call me back at 555-0143.",
          "img": "../img/live-capa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "I’m free on Tuesday after 3 p.m.",
          "img": "../img/live-mesa.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "My e-mail is leo dot martins at bluepeak dot com.",
          "img": "../img/live-conversa.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Your own mistakes, fixed. Four quick ones.",
      "regra": "<b>Please call me back at…</b> · numbers digit by digit (0 = oh) · times: <b>1–12 + a.m./p.m.</b> · <b>Please + verb</b>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "Please call me back at 555-0143.",
          "aceita": [],
          "d": "Dica: “me retorne” = <b>call me back</b>; número: <b>at</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "Please return me.",
          "r": "Please call me back.",
          "aceita": [
            "Please call me back"
          ],
          "d": "Dica: “me retorne” = <b>call me back</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "I’m free at 15h.",
          "r": "I’m free at 3 p.m.",
          "aceita": [
            "I’m free at 3 pm.",
            "I am free at 3 p.m."
          ],
          "d": "Dica: em inglês, de 1 a 12 + <b>a.m./p.m.</b>"
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "Please to send me the numbers.",
          "r": "Please send me the numbers.",
          "aceita": [],
          "d": "Dica: <b>Please</b> + verbo, sem “to”."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "../img/live-mesa.webp",
      "leg": "A notebook with a phone number and a time written on it",
      "pede": "Write your voicemail for a client: who you are, the reason, your number and a good time.",
      "ph": "Hi …, this is … I’m calling about … Please call me back at … I’m free …",
      "ex": "Hi Ana, this is Leo, from Bluepeak. I’m calling about your proposal. Please call me back at 555-0143. I’m free today after 2 p.m."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What time do you have lunch?",
          "ph": "At … a.m. / p.m.",
          "ex": "At 12:30 p.m., near my office."
        },
        {
          "q": "How many voicemails do you get in a week?",
          "ph": "About … · I don’t get …",
          "ex": "About three. Clients prefer WhatsApp."
        }
      ]
    }
  }
};
