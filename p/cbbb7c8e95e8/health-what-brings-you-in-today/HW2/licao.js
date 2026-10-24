/* WHAT BRINGS YOU IN TODAY? · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: How long have you had…? for / since, When did it start?. B1+ (B1 na plataforma): nenhum português. Tom calmo, queixas leves do dia a dia; nada de doença grave, emergência ou perda. Imagens só as escuras e neutras da aula (sem leito, sem corredor). */
window.HW2 = {
  "id": "health-what-brings-you-in-today",
  "titulo": "What Brings You In Today?",
  "nivel": "B1",
  "minutos": 10,
  "alvo": "taking the history of a complaint: open with What brings you in today?; How long have you had ...? (present perfect, never How long do you have); for + a period, since + a starting point; When did it start? (past simple, never When has it started); summarize: Let me check I've got this right",
  "abrir": "When someone tells you about a problem, what is your first question?",
  "fecho": "Open first: <b>What brings you in today?</b> For something that started before and is still going: <b>How long have you had</b> this cough? (never <i>How long do you have</i>). <b>for</b> + a period (<i>for five days</i>), <b>since</b> + a starting point (<i>since Thursday</i>). A moment in the past: <b>When did it start?</b> Then check: <i>Let me check I've got this right.</i>",
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
      "sub": "Leo, a family doctor, sees Mia for a sore throat. A new scene, about one minute.",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Hello, Ms. Rivera. Please have a seat. What brings you in today?"
        },
        {
          "quem": "mia",
          "t": "Hi, doctor. I've had a sore throat, and it isn't getting better."
        },
        {
          "quem": "leo",
          "t": "I'm sorry to hear that. How long have you had it?"
        },
        {
          "quem": "mia",
          "t": "I've had it for about five days."
        },
        {
          "quem": "leo",
          "t": "When did it start? Suddenly, or little by little?"
        },
        {
          "quem": "mia",
          "t": "Little by little. It started on Thursday, after a cold, windy day at the beach."
        },
        {
          "quem": "leo",
          "t": "Have you had a fever?"
        },
        {
          "quem": "mia",
          "t": "A small one, on Friday. I've felt fine since Saturday, but swallowing still hurts."
        },
        {
          "quem": "leo",
          "t": "Does anything make it better?"
        },
        {
          "quem": "mia",
          "t": "Warm tea with honey helps a lot."
        },
        {
          "quem": "leo",
          "t": "OK. Let me check I've got this right: a sore throat for five days, a small fever on Friday, and warm tea helps."
        },
        {
          "quem": "mia",
          "t": "Yes, that's it exactly."
        },
        {
          "quem": "leo",
          "t": "Good. I'm going to have a quick look at your throat now."
        }
      ],
      "perguntas": [
        {
          "q": "How long has Mia had a sore throat?",
          "op": [
            "For about five days",
            "Since last month",
            "For two hours"
          ],
          "a": 0,
          "por": "I've had it for about five days."
        },
        {
          "q": "When did Mia have a fever?",
          "op": [
            "On Friday",
            "On Thursday",
            "Since Saturday"
          ],
          "a": 0,
          "por": "A small one, on Friday."
        },
        {
          "q": "What makes her throat feel better?",
          "op": [
            "Warm tea with honey",
            "Cold water",
            "Ice cream"
          ],
          "a": 0,
          "por": "Warm tea with honey helps a lot."
        }
      ]
    },
    "out": {
      "sub": "Three questions and answers from a consultation. Hear it, then say it.",
      "frases": [
        {
          "t": "What brings you in today?",
          "au": "audio/say1.mp3"
        },
        {
          "t": "How long have you had this cough?",
          "au": "audio/say2.mp3"
        },
        {
          "t": "I've had it since Monday, but it's getting better.",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "How long, for, since, when. Four quick ones.",
      "regra": "<b>How long have you had …?</b> · <b>for</b> + a period · <b>since</b> + a starting point · <b>When did it start?</b> (past simple).",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "How long have you had this pain?",
          "aceita": [],
          "d": "Hint: <b>How long have you had</b> + the problem."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "How long do you have this cough?",
          "r": "How long have you had this cough?",
          "aceita": [],
          "d": "Hint: it started before and it is still going: <b>have you had</b>, not <i>do you have</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "I've had this cough since two weeks.",
          "r": "I've had this cough for two weeks.",
          "aceita": [
            "I have had this cough for two weeks."
          ],
          "d": "Hint: two weeks is a period, so <b>for</b>. <i>Since</i> needs a starting point, like <i>since Monday</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "When has the pain started?",
          "r": "When did the pain start?",
          "aceita": [
            "When did it start?"
          ],
          "d": "Hint: <b>when</b> asks about a moment in the past, so the past simple: <i>When did … start?</i>"
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "pede": "A patient comes to you with a sore knee after playing tennis. Write 3 questions you ask: one open question, one with <b>How long have you had …?</b> and one with <b>When did …?</b>",
      "ph": "What brings you in today? How long …",
      "ex": "What brings you in today? How long have you had this pain in your knee? When did it start?"
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "Think of something you have had for a long time: a bike, a phone, a favourite mug. How long have you had it?",
          "ph": "I've had my … for / since …",
          "ex": "I've had my bike since 2019. I've had my phone for three years."
        },
        {
          "q": "Think of a patient you saw recently, with no names. What was the complaint, and when did it start?",
          "ph": "A patient came in with … It started …",
          "ex": "A patient came in with a sore back. It started on Saturday, after a day in the garden."
        }
      ]
    }
  }
};
