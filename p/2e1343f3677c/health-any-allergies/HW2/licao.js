/* ANY ALLERGIES? · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: admissão: Do you…? Are you taking…? Have you ever had…? allergic to. B1+ (B1 na plataforma): nenhum português. Tom calmo, queixas leves do dia a dia; nada de doença grave, emergência ou perda. Imagens só as escuras e neutras da aula (sem leito, sem corredor). */
window.HW2 = {
  "id": "health-any-allergies",
  "titulo": "Any Allergies?",
  "nivel": "B1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/2e1343f3677c/health-any-allergies/img/live-capa.webp",
  "alvo": "admission questions: Do you have any allergies? What happens when you take it? (the reaction); Are you taking any medication at the moment? (now); Have you ever had an operation? (have + past participle); allergic to (never allergic of); Do you smoke?; read it back: Let me read this back to you",
  "abrir": "What three questions do you ask every new patient?",
  "fecho": "Three question shapes: <b>Do you</b> …? for habits (<i>Do you smoke?</i>), <b>Are you taking</b> …? for now (<i>Are you taking any medication at the moment?</i>), <b>Have you ever had</b> …? for life (<i>Have you ever had an operation?</i>). Allergic <b>to</b>, never <i>of</i>. Always ask the reaction: <i>What happens when you take it?</i>",
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
      "sub": "Leo welcomes Mia, a new patient, at the front desk of a dental clinic. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/2e1343f3677c/health-any-allergies/img/live-conversa.webp",
      "leg": "The front desk of the clinic",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Good morning, welcome to the clinic. Could I have your full name and date of birth, please?"
        },
        {
          "quem": "mia",
          "t": "Sure. Mia Torres, the fourteenth of May, 1990."
        },
        {
          "quem": "leo",
          "t": "Thank you. Do you have any allergies?"
        },
        {
          "quem": "mia",
          "t": "Yes, I'm allergic to penicillin."
        },
        {
          "quem": "leo",
          "t": "What happens when you take it?"
        },
        {
          "quem": "mia",
          "t": "I get a rash on my arms. It itches, but that's all."
        },
        {
          "quem": "leo",
          "t": "Thank you, that's important. Are you taking any medication at the moment?"
        },
        {
          "quem": "mia",
          "t": "Only an antihistamine in the spring, for my hay fever."
        },
        {
          "quem": "leo",
          "t": "Have you ever had an operation?"
        },
        {
          "quem": "mia",
          "t": "Yes, I had my wisdom teeth out in 2018."
        },
        {
          "quem": "leo",
          "t": "And do you smoke?"
        },
        {
          "quem": "mia",
          "t": "No, I don't."
        },
        {
          "quem": "leo",
          "t": "Great. Let me read this back to you: allergic to penicillin, with a rash; an antihistamine in the spring; wisdom teeth out in 2018; no smoking."
        },
        {
          "quem": "mia",
          "t": "That's all correct."
        },
        {
          "quem": "leo",
          "t": "Thank you, Ms. Torres. The dentist will see you in five minutes."
        }
      ],
      "perguntas": [
        {
          "q": "What happens when Mia takes penicillin?",
          "op": [
            "She gets a rash",
            "She feels dizzy",
            "Nothing happens"
          ],
          "a": 0,
          "por": "I get a rash on my arms."
        },
        {
          "q": "What does Mia take in the spring?",
          "op": [
            "An antihistamine",
            "Penicillin",
            "Vitamins"
          ],
          "a": 0,
          "por": "Only an antihistamine in the spring, for my hay fever."
        },
        {
          "q": "When did Mia have her wisdom teeth out?",
          "op": [
            "In 2018",
            "In 2015",
            "Last month"
          ],
          "a": 0,
          "por": "Yes, I had my wisdom teeth out in 2018."
        }
      ]
    },
    "out": {
      "sub": "Three admission questions. Hear it, then say it.",
      "frases": [
        {
          "t": "Do you have any allergies? What happens when you take it?",
          "au": "audio/say1.mp3",
          "img": "https://wolf-labs.pages.dev/p/2e1343f3677c/health-any-allergies/img/live-conversa.webp"
        },
        {
          "t": "Are you taking any medication at the moment?",
          "au": "audio/say2.mp3"
        },
        {
          "t": "Have you ever had an operation?",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Do you, are you taking, have you ever had. Four quick ones.",
      "regra": "<b>Do you have any</b> …? · <b>Are you taking any</b> …? · <b>Have you ever had</b> …? · allergic <b>to</b>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "Are you taking any medication at the moment?",
          "aceita": [],
          "d": "Hint: <b>Are you taking</b> = now, then <b>any</b> + the noun."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "I'm allergic of penicillin.",
          "r": "I'm allergic to penicillin.",
          "aceita": [
            "I am allergic to penicillin."
          ],
          "d": "Hint: <b>allergic to</b>, never <i>allergic of</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is missing.",
          "mostra": "You have any allergies?",
          "r": "Do you have any allergies?",
          "aceita": [],
          "d": "Hint: a question with <b>have</b> needs <b>Do</b> at the start."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "Have you ever have an operation?",
          "r": "Have you ever had an operation?",
          "aceita": [],
          "d": "Hint: <b>Have you ever</b> + past participle: <i>had</i>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/2e1343f3677c/health-any-allergies/img/live-conversa.webp",
      "leg": "The front desk before the clinic opens",
      "pede": "Look at the picture: a quiet front desk before the clinic opens. A new patient arrives. Write 3 questions for the admission form: allergies (and the reaction), medication now, and operations in the past.",
      "ph": "Do you have any allergies? …",
      "ex": "Do you have any allergies? Are you taking any medication at the moment? Have you ever had an operation?"
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "Do you have any allergies, for example to dust, pollen or a food? What happens?",
          "ph": "I'm allergic to … When …, I …",
          "ex": "I'm allergic to dust. When I clean my room, I sneeze a lot."
        },
        {
          "q": "What questions do you always ask a new patient in your job? Say two.",
          "ph": "I always ask: …",
          "ex": "I always ask: Do you have any allergies? Are you taking any medication at the moment?"
        }
      ]
    }
  }
};
