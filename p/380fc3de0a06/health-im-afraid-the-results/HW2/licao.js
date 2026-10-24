/* HEALTH ENGLISH · I’M AFRAID THE RESULTS… · LIÇÃO DE CASA 2.0 (24/10/2026)
   Motor: hw2.js. JSON puro depois do "=". Falas originais (Mia e Leo).
   Alvo: I'm afraid / Unfortunately + frase; haven't ... yet; next step
   B1+ (B1 na plataforma): nenhum português. Tom calmo, cenas administrativas, nada grave. Sem imagem (a sala de família da aula é o cenário da notícia difícil). */
window.HW2 = {
  "id": "health-im-afraid-the-results",
  "titulo": "I’m Afraid the Results…",
  "nivel": "B1",
  "minutos": 10,
  "capa": "",
  "alvo": "a soft warning before news people don't want: I'm afraid + a full sentence (never afraid of), Unfortunately + a sentence; the news in plain words (the results haven't come back yet); the next step and an open question (What questions do you have?); never the results didn't come yet, in next week",
  "abrir": "What is the last small piece of news you didn't want to hear?",
  "fecho": "<b>I'm afraid</b> + a full sentence, never <i>afraid of</i>: <i>I'm afraid the results haven't come back yet.</i> <b>Unfortunately,</b> + the news in plain words. Then the next step: <i>Here's what we'll do next.</i> And open the door: <i>What questions do you have?</i>",
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
      "sub": "Mia at the clinic reception, Leo comes for his results. A new scene, about one minute.",
      "img": "",
      "leg": "",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Good morning, Mia. I'm here for my blood test results. My appointment is at ten."
        },
        {
          "quem": "mia",
          "t": "Good morning, Leo. Please have a seat. What did the nurse tell you last week?"
        },
        {
          "quem": "leo",
          "t": "She said the results would be ready in five days."
        },
        {
          "quem": "mia",
          "t": "I'm afraid the results haven't come back from the lab yet."
        },
        {
          "quem": "leo",
          "t": "Oh. Is there a problem?"
        },
        {
          "quem": "mia",
          "t": "No, nothing like that. Unfortunately, the lab is very busy this month, so everything is a little slow."
        },
        {
          "quem": "leo",
          "t": "OK. So what happens now?"
        },
        {
          "quem": "mia",
          "t": "Here's what we'll do next. I'll call the lab today, and we'll text you as soon as the results arrive."
        },
        {
          "quem": "leo",
          "t": "And can I still see the doctor?"
        },
        {
          "quem": "mia",
          "t": "I'm afraid Doctor Costa is fully booked this week, so you'll need to come back next Tuesday. Is ten o'clock OK?"
        },
        {
          "quem": "leo",
          "t": "Ten is fine. Thank you for explaining it so clearly."
        },
        {
          "quem": "mia",
          "t": "You're welcome. What questions do you have?"
        },
        {
          "quem": "leo",
          "t": "Just one. Can I have a coffee before I come?"
        },
        {
          "quem": "mia",
          "t": "Of course you can. See you on Tuesday."
        }
      ],
      "perguntas": [
        {
          "q": "Why can't Leo see his results today?",
          "op": [
            "They haven't come back from the lab yet",
            "He came on the wrong day",
            "The nurse lost them"
          ],
          "a": 0,
          "por": "I'm afraid the results haven't come back from the lab yet."
        },
        {
          "q": "What will the clinic do?",
          "op": [
            "Text Leo when the results arrive",
            "Repeat the test today",
            "Send Leo to another lab"
          ],
          "a": 0,
          "por": "We'll text you as soon as the results arrive."
        },
        {
          "q": "When is Leo's new appointment?",
          "op": [
            "Next Tuesday at ten",
            "Tomorrow at nine",
            "Next Friday at ten"
          ],
          "a": 0,
          "por": "You'll need to come back next Tuesday. Is ten o'clock OK?"
        }
      ]
    },
    "out": {
      "sub": "Three soft warnings from a clinic. Hear it, then say it.",
      "frases": [
        {
          "t": "I'm afraid the results haven't come back yet.",
          "img": "",
          "au": "audio/say1.mp3"
        },
        {
          "t": "Unfortunately, the clinic is fully booked this week.",
          "img": "",
          "au": "audio/say2.mp3"
        },
        {
          "t": "I'm afraid we need to repeat the test, because the label was wrong.",
          "img": "",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "A soft warning, then the news. Four quick ones.",
      "regra": "<b>I'm afraid</b> + a sentence (no <i>of</i>) · <b>Unfortunately,</b> + a sentence · <b>haven't</b> … <b>yet</b> · <b>next week</b>, no <i>in</i>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "I'm afraid you'll need to come back next week.",
          "aceita": [],
          "d": "Hint: <b>I'm afraid</b> + a full sentence. <b>Next week</b> needs no <i>in</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is extra.",
          "mostra": "I'm afraid of the results aren't ready.",
          "r": "I'm afraid the results aren't ready.",
          "aceita": [
            "I'm afraid the results aren't ready yet."
          ],
          "d": "Hint: to soften news, <b>I'm afraid</b> + a sentence. No <i>of</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "The results didn't come back yet.",
          "r": "The results haven't come back yet.",
          "aceita": [],
          "d": "Hint: with <b>yet</b>, use <b>haven't</b> + the past participle: <i>haven't come back</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "We need to repeat your blood exam.",
          "r": "We need to repeat your blood test.",
          "aceita": [],
          "d": "Hint: in English it is a <b>blood test</b>. An <i>exam</i> is usually at school."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "",
      "leg": "",
      "pede": "Imagine you work at a clinic reception. A patient comes for a result, but it isn't ready. Write 2 or 3 sentences: a soft warning (<b>I'm afraid…</b> or <b>Unfortunately…</b>), the news in plain words, and the next step.",
      "ph": "I'm afraid the results …",
      "ex": "I'm afraid your results haven't come back yet. Unfortunately, the lab is very busy. We'll text you as soon as they arrive."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "Think of a time someone gave you news you didn't want: a late flight, a closed shop, a delay. How did they say it?",
          "ph": "They said: I'm afraid …",
          "ex": "The airline said: I'm afraid your flight is two hours late. It was clear and polite."
        },
        {
          "q": "In your job, what small news do you sometimes have to give? Say it with I'm afraid.",
          "ph": "I'm afraid …",
          "ex": "I'm afraid the doctor is running thirty minutes late today."
        }
      ]
    }
  }
};
