/* THE FINAL STATION · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: consulta inteira: ICE, resumo, plano em inglês simples, safety-netting. B1+: nenhum português. Entorse leve de tornozelo. Sem imagem (leito/estetoscópio claro ficam de fora). */
window.HW2 = {
  "id": "health-the-final-station",
  "titulo": "The Final Station",
  "nivel": "B1",
  "minutos": 10,
  "capa": null,
  "alvo": "a whole routine consultation: ICE (What do you think could be causing it? · Is anything worrying you? · What were you hoping I could do today?) · a short empathy line · summarize and check (Let me summarize what you told me) · a plain-English plan with safety-netting (Come back straight away if…)",
  "abrir": "What is the first question you ask a patient?",
  "fecho": "<b>I</b>deas: <i>What do you think could be causing it?</i> <b>C</b>oncerns: <i>Is anything worrying you?</i> <b>E</b>xpectations: <i>What were you hoping I could do today?</i> Then summarize (<i>Let me summarize what you told me</i>), explain the plan in plain English, and safety-net: <b>Come back straight away if</b> it <b>gets</b> worse.",
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
      "sub": "An exam-style station: Mia is the clinician, Leo is a patient with a sore ankle. A new scene, about one minute.",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Hi, I'm Mia. What brings you in today?"
        },
        {
          "quem": "leo",
          "t": "I twisted my ankle playing football on Saturday. It's still a bit sore."
        },
        {
          "quem": "mia",
          "t": "I see. What do you think could be causing the pain?"
        },
        {
          "quem": "leo",
          "t": "I think I just twisted it. But I can walk on it."
        },
        {
          "quem": "mia",
          "t": "Is anything worrying you about it?"
        },
        {
          "quem": "leo",
          "t": "Well, we have a final next month, and I really want to play."
        },
        {
          "quem": "mia",
          "t": "I can understand why that matters to you. What were you hoping I could do today?"
        },
        {
          "quem": "leo",
          "t": "Maybe an X-ray, just to be sure."
        },
        {
          "quem": "mia",
          "t": "Let me summarize what you told me. You twisted your ankle on Saturday, you can walk, and you want to play next month. Is that right?"
        },
        {
          "quem": "leo",
          "t": "Yes, that's right."
        },
        {
          "quem": "mia",
          "t": "The good news is that this sounds like a mild sprain, and an X-ray isn't needed. Rest it, use ice, and keep it up. Come back straight away if you can't walk on it. Does that sound OK?"
        }
      ],
      "perguntas": [
        {
          "q": "What is Leo worried about?",
          "op": [
            "Missing a football final next month",
            "The cost of an X-ray",
            "His other ankle"
          ],
          "a": 0,
          "por": "Well, we have a final next month, and I really want to play."
        },
        {
          "q": "What was Leo hoping for?",
          "op": [
            "An X-ray, just to be sure",
            "A day off work",
            "New football boots"
          ],
          "a": 0,
          "por": "Maybe an X-ray, just to be sure."
        },
        {
          "q": "When should Leo come back straight away?",
          "op": [
            "If he can't walk on it",
            "Next Saturday",
            "After the final"
          ],
          "a": 0,
          "por": "Come back straight away if you can't walk on it."
        }
      ]
    },
    "out": {
      "sub": "Three lines from the station. Hear it, then say it.",
      "frases": [
        {
          "t": "What do you think could be causing the pain?",
          "au": "audio/say1.mp3"
        },
        {
          "t": "Is anything worrying you? What were you hoping I could do today?",
          "au": "audio/say2.mp3"
        },
        {
          "t": "Come back straight away if you can't walk on it. Does that sound OK?",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "ICE, summary and the plan. Four quick ones.",
      "regra": "<b>Ideas · Concerns · Expectations</b> · summarize: <b>what you told me</b> · safety-net: <b>if it gets worse</b>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "Is there anything you are worried about?",
          "aceita": [],
          "d": "Hint: a question starts with <b>Is there</b> + <b>anything</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "Let me summarize what you said me.",
          "r": "Let me summarize what you told me.",
          "aceita": [],
          "d": "Hint: <b>tell</b> + person (<i>told me</i>); <i>say</i> takes no person."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "Come back straight away if the pain get worse.",
          "r": "Come back straight away if the pain gets worse.",
          "aceita": [],
          "d": "Hint: <b>the pain</b> = it, so the verb takes <b>-s</b>: <i>gets</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "Don't put the ice direct on your skin.",
          "r": "Don't put the ice directly on your skin.",
          "aceita": [
            "Do not put the ice directly on your skin."
          ],
          "d": "Hint: to describe how you do something, use the adverb: <b>directly</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "pede": "A patient has a mild sprained wrist. Write the plan in plain English in 3 sentences: the good news, what to do at home, and when to come back (<b>Come back straight away if…</b>). End by checking: <b>Does that sound OK?</b>",
      "ph": "The good news is that …",
      "ex": "The good news is that it's a mild sprain. Rest your wrist and use ice for two days. Come back straight away if the pain gets worse. Does that sound OK?"
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "How do you usually ask a patient about their worries?",
          "ph": "I usually ask …",
          "ex": "I usually ask: Is anything worrying you about this?"
        },
        {
          "q": "Give a plain-English plan for a patient with a cold, with safety-netting.",
          "ph": "What I'd suggest is … Come back if …",
          "ex": "What I'd suggest is rest and water. Come back if you have a high fever."
        }
      ]
    }
  }
};
