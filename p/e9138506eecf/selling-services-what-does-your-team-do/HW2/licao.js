/* WHAT DOES YOUR TEAM DO? · SELLING SERVICES LESSON 6 · LIÇÃO DE CASA 2.0 (27/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: present simple 3rd person: she works, he doesn’t send, does it…?; never “she work”, never “he don’t”. A1: português só nas dicas (d). Empresas fictícias. */
window.HW2 = {
  "id": "selling-services-what-does-your-team-do",
  "titulo": "What Does Your Team Do?",
  "nivel": "A1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/e9138506eecf/selling-services-what-does-your-team-do/img/live-capa.webp",
  "alvo": "present simple 3rd person: she works, he doesn’t send, does it…?; never “she work”, never “he don’t”",
  "abrir": "Think of a client. Who does payroll there?",
  "fecho": "He, she, it, the team: verb + <b>s</b> (she works). Negative: <b>doesn’t</b> + verb. Question: <b>Does</b> … + verb. Only one s.",
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
      "sub": "Mia asks a client who does what in his finance team. About one minute.",
      "img": "https://wolf-labs.pages.dev/p/e9138506eecf/selling-services-what-does-your-team-do/img/live-conversa.webp",
      "leg": "A whiteboard with a process map at night",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, who does payroll at your company?"
        },
        {
          "quem": "leo",
          "t": "Ana does. She works with spreadsheets."
        },
        {
          "quem": "mia",
          "t": "Does she use the ERP?"
        },
        {
          "quem": "leo",
          "t": "No, she doesn’t. The ERP doesn’t have a payroll module."
        },
        {
          "quem": "mia",
          "t": "And who pays the suppliers?"
        },
        {
          "quem": "leo",
          "t": "Pedro does. He pays them every Friday."
        },
        {
          "quem": "mia",
          "t": "Does the tax team work with Ana?"
        },
        {
          "quem": "leo",
          "t": "No, it doesn’t. It works in another city."
        },
        {
          "quem": "mia",
          "t": "I see. And what does your director want?"
        },
        {
          "quem": "leo",
          "t": "She wants one report every week."
        }
      ],
      "perguntas": [
        {
          "q": "Who does payroll?",
          "op": [
            "Ana",
            "Pedro",
            "The director"
          ],
          "a": 0,
          "por": "Ana does. She works with spreadsheets."
        },
        {
          "q": "When does Pedro pay the suppliers?",
          "op": [
            "Every Friday",
            "Every Monday",
            "Every month"
          ],
          "a": 0,
          "por": "He pays them every Friday."
        },
        {
          "q": "What does the director want?",
          "op": [
            "One report every week",
            "A new ERP",
            "A new team"
          ],
          "a": 0,
          "por": "She wants one report every week."
        }
      ]
    },
    "out": {
      "sub": "Three sentences from your job. Hear it, then say it.",
      "frases": [
        {
          "t": "She does payroll with spreadsheets.",
          "img": "https://wolf-labs.pages.dev/p/e9138506eecf/selling-services-what-does-your-team-do/img/live-capa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "The team doesn’t use the ERP.",
          "img": "https://wolf-labs.pages.dev/p/e9138506eecf/selling-services-what-does-your-team-do/img/live-mesa.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "Who pays the suppliers?",
          "img": "https://wolf-labs.pages.dev/p/e9138506eecf/selling-services-what-does-your-team-do/img/live-conversa.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Your own mistakes, fixed. Four quick ones.",
      "regra": "he, she, it → verb + <b>s</b> · negative: <b>doesn’t</b> + verb · question: <b>Does</b> … + verb (one s only).",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "She does payroll every month.",
          "aceita": [],
          "d": "Dica: she → <b>does</b> (com s)."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "She work in tax.",
          "r": "She works in tax.",
          "aceita": [],
          "d": "Dica: she → verbo + <b>s</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "He don’t send the reports.",
          "r": "He doesn’t send the reports.",
          "aceita": [
            "He does not send the reports."
          ],
          "d": "Dica: he → <b>doesn’t</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "The team don’t use SAP.",
          "r": "The team doesn’t use SAP.",
          "aceita": [
            "The team does not use SAP."
          ],
          "d": "Dica: the team = it → <b>doesn’t</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/e9138506eecf/selling-services-what-does-your-team-do/img/live-mesa.webp",
      "leg": "A whiteboard with a process map at night",
      "pede": "Write 3 sentences: who does what in a client’s finance team (or in your team).",
      "ph": "… does payroll. He / She uses … The team doesn’t …",
      "ex": "Paula does payroll. She uses spreadsheets. The tax team doesn’t use the ERP."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What does your manager do on Mondays?",
          "ph": "She / He usually …",
          "ex": "He usually checks the numbers."
        },
        {
          "q": "Does your team work on Saturdays?",
          "ph": "Yes, it does. / No, it doesn’t.",
          "ex": "No, it doesn’t!"
        }
      ]
    }
  }
};
