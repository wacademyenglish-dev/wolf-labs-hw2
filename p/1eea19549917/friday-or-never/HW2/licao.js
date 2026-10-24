/* FRIDAY OR NEVER · LIÇÃO DE CASA 2.0 (24/10/2026)
   Motor: hw2.js. JSON puro depois do "=".
   Alvo: will x going to: going to for a plan made before (Monday's c. A2: dicas em português só nas notas (d). */
window.HW2 = {
  "id": "friday-or-never",
  "titulo": "Friday or Never",
  "nivel": "A2",
  "minutos": 10,
  "alvo": "will x going to: going to for a plan made before (Monday's calendar); will / 'll for a decision made now, at the moment of the problem; Will you ...? asks for help; never will to",
  "abrir": "What are you going to do this weekend?",
  "fecho": "A plan already made: <b>going to</b> (<i>I'm going to meet Vega Foods on Thursday.</i>). A decision made at the moment of the problem: <b>will / 'll</b> (<i>The printer is broken. I'll use the copy shop.</i>). After <b>will</b>, the plain verb, never <i>to</i>.",
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
  "rate": "-14%",
  "rodadas": {
    "listen": {
      "sub": "Mia and Leo, Monday and Wednesday of one week. A new scene, about 50 seconds.",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, this is Monday's plan. We're going to send the contract on Tuesday."
        },
        {
          "quem": "leo",
          "t": "And I'm going to meet Vega Foods on Thursday. It's in my calendar."
        },
        {
          "quem": "mia",
          "t": "It's Wednesday now. Leo! The printer is broken. The contract is not ready."
        },
        {
          "quem": "leo",
          "t": "Oh no. OK, I'll use the copy shop. I'll go now."
        },
        {
          "quem": "mia",
          "t": "And Vega Foods called. Their manager is away until Friday."
        },
        {
          "quem": "leo",
          "t": "Then I'll call his assistant. I'll ask for Friday morning."
        },
        {
          "quem": "mia",
          "t": "Will you send me the new time?"
        },
        {
          "quem": "leo",
          "t": "Yes, I will. I'll write it down now. Friday or never!"
        }
      ],
      "perguntas": [
        {
          "q": "What is Leo going to do on Thursday?",
          "op": [
            "Meet Vega Foods",
            "Fix the printer",
            "Go to the copy shop"
          ],
          "a": 0,
          "por": "I'm going to meet Vega Foods on Thursday."
        },
        {
          "q": "What does Leo decide when the printer breaks?",
          "op": [
            "He'll use the copy shop",
            "He'll buy a new printer",
            "He'll cancel the contract"
          ],
          "a": 0,
          "por": "OK, I'll use the copy shop."
        },
        {
          "q": "What new day will Leo ask for?",
          "op": [
            "Friday morning",
            "Tuesday",
            "Monday"
          ],
          "a": 0,
          "por": "I'll ask for Friday morning."
        }
      ]
    },
    "out": {
      "sub": "Three sentences: plan and decision. Hear it, then say it.",
      "frases": [
        {
          "t": "We're going to send the contract on Tuesday.",
          "au": "audio/say1.mp3"
        },
        {
          "t": "The printer is broken. I'll use the copy shop.",
          "au": "audio/say2.mp3"
        },
        {
          "t": "I'll call his assistant now.",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Plan or decision? Four quick ones.",
      "regra": "<b>going to</b> = a plan made before · <b>will / 'll</b> = decided now, at the problem · <b>am / is / are</b> before <b>going to</b> · plain verb after <b>will</b>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "I'll call his assistant and ask for Friday.",
          "aceita": [],
          "d": "Dica: decidiu agora, na hora do problema: <b>I'll</b> + verbo."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "I will to call him now.",
          "r": "I will call him now.",
          "aceita": [
            "I'll call him now."
          ],
          "d": "Dica: depois de <b>will</b>, o verbo vem direto, sem <b>to</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is missing.",
          "mostra": "I going to meet Vega on Thursday.",
          "r": "I'm going to meet Vega on Thursday.",
          "aceita": [
            "I am going to meet Vega on Thursday."
          ],
          "d": "Dica: <b>going to</b> precisa de <b>am / is / are</b> antes."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one verb is wrong.",
          "mostra": "Will you sending me the time?",
          "r": "Will you send me the time?",
          "aceita": [],
          "d": "Dica: depois de <b>will you</b>, o verbo fica limpo: <b>send</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "pede": "Write 2 or 3 sentences: one plan for next week, and one quick decision about a problem. Use <b>going to</b> and <b>will</b>.",
      "ph": "Next week I'm going to …",
      "ex": "Next week I'm going to visit my aunt. My phone is dead, so I'll charge it now."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What are you going to do on Saturday?",
          "ph": "I'm going to …",
          "ex": "I'm going to see my friends."
        },
        {
          "q": "Your internet is down at work. What will you do?",
          "ph": "I'll …",
          "ex": "I'll call the internet company."
        }
      ]
    }
  }
};
