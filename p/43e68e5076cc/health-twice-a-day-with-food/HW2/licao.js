/* TWICE A DAY WITH FOOD · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: explicar um remédio: twice a day, should, avoid + -ing, teach-back. B1+: nenhum português. Tom calmo: antibiótico para dor de garganta. live-capa (farmácia) e live-conversa (porta-comprimidos). */
window.HW2 = {
  "id": "health-twice-a-day-with-food",
  "titulo": "Twice a Day With Food",
  "nivel": "B1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/43e68e5076cc/health-twice-a-day-with-food/img/live-capa.webp",
  "alvo": "explaining a medicine: dose and frequency (once / twice / three times a day, every eight hours) · with food, on an empty stomach · should / shouldn't / must not · avoid + -ing · finish the whole course · teach-back (Can you tell me how you're going to take it?)",
  "abrir": "When did you last pick up a medicine at a pharmacy? What did they tell you?",
  "fecho": "Say the dose and how often: <b>once / twice / three times a day</b>, <b>every eight hours</b> (never <i>two times for day</i>). Food: <b>with food</b> or <b>on an empty stomach</b>. Advice: <b>should</b> + plain verb; rules: <b>must not</b>. <b>Avoid</b> + -ing: <i>avoid drinking alcohol</i>. Finish with a teach-back: <b>Can you tell me how you're going to take it?</b>",
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
      "sub": "Mia, a pharmacist, explains a new medicine to Leo. A new scene, about 45 seconds.",
      "img": "https://wolf-labs.pages.dev/p/43e68e5076cc/health-twice-a-day-with-food/img/live-capa.webp",
      "leg": "The pharmacy counter",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Hi, Leo. Before I explain your new medicine, do you have any allergies?"
        },
        {
          "quem": "leo",
          "t": "No, none that I know of."
        },
        {
          "quem": "mia",
          "t": "Good. Are you taking any other medicines, vitamins or herbal products?"
        },
        {
          "quem": "leo",
          "t": "Just vitamin C sometimes."
        },
        {
          "quem": "mia",
          "t": "That's fine. This is an antibiotic for your sore throat. Take one tablet twice a day, in the morning and in the evening, with food."
        },
        {
          "quem": "leo",
          "t": "For how long?"
        },
        {
          "quem": "mia",
          "t": "For seven days. You should finish the whole course, even if you feel better."
        },
        {
          "quem": "leo",
          "t": "Is there anything I should avoid?"
        },
        {
          "quem": "mia",
          "t": "You should avoid drinking alcohol until you finish it. And take it with food, so it won't upset your stomach."
        },
        {
          "quem": "leo",
          "t": "Okay, got it."
        },
        {
          "quem": "mia",
          "t": "Just to check: can you tell me how you're going to take it?"
        },
        {
          "quem": "leo",
          "t": "One tablet twice a day, with food, for seven days, and no alcohol."
        },
        {
          "quem": "mia",
          "t": "Perfect."
        }
      ],
      "perguntas": [
        {
          "q": "How often should Leo take the tablet?",
          "op": [
            "Twice a day, with food",
            "Three times a day, before food",
            "Once a day, at bedtime"
          ],
          "a": 0,
          "por": "Take one tablet twice a day, in the morning and in the evening, with food."
        },
        {
          "q": "What should he do if he feels better?",
          "op": [
            "Finish the whole course",
            "Stop the tablets",
            "Take one a day"
          ],
          "a": 0,
          "por": "You should finish the whole course, even if you feel better."
        },
        {
          "q": "What should he avoid?",
          "op": [
            "Drinking alcohol",
            "Vitamin C",
            "Eating before the tablet"
          ],
          "a": 0,
          "por": "You should avoid drinking alcohol until you finish it."
        }
      ]
    },
    "out": {
      "sub": "Three sentences from the pharmacy. Hear it, then say it.",
      "frases": [
        {
          "t": "Take one tablet twice a day, with food.",
          "img": "https://wolf-labs.pages.dev/p/43e68e5076cc/health-twice-a-day-with-food/img/live-capa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "You should finish the whole course, even if you feel better.",
          "img": "https://wolf-labs.pages.dev/p/43e68e5076cc/health-twice-a-day-with-food/img/live-conversa.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "Can you tell me how you're going to take it?",
          "img": null,
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Dose, food and advice. Four quick ones.",
      "regra": "<b>twice a day</b> · <b>every eight hours</b> · <b>should</b> + plain verb · <b>avoid</b> + -ing · <b>on an empty stomach</b>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "Take it on an empty stomach, before breakfast.",
          "aceita": [],
          "d": "Hint: <b>on an empty stomach</b> = with no food in it."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "Take it two times for day.",
          "r": "Take it twice a day.",
          "aceita": [
            "Take it two times a day."
          ],
          "d": "Hint: in English, <b>twice a day</b> (or <i>two times a day</i>)."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "You should to take it with food.",
          "r": "You should take it with food.",
          "aceita": [],
          "d": "Hint: after <b>should</b>, the plain verb, no <i>to</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "Avoid to drink alcohol with this medicine.",
          "r": "Avoid drinking alcohol with this medicine.",
          "aceita": [],
          "d": "Hint: <b>avoid</b> + verb-ing."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/43e68e5076cc/health-twice-a-day-with-food/img/live-conversa.webp",
      "leg": "A pill organizer on the table",
      "pede": "Look at the picture: a pill organizer on a kitchen table. Explain a medicine to a patient in 3 sentences: the dose and <b>how often</b>, food, and one thing to <b>avoid</b>.",
      "ph": "Take one … a day, …",
      "ex": "Take one tablet three times a day, every eight hours. Take it with food. You should avoid drinking alcohol while you take it."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "Which medicine or product do you explain most often in your job? How should the patient use it?",
          "ph": "I often explain … Use it …",
          "ex": "I often explain a mouthwash. Use it twice a day, after brushing."
        },
        {
          "q": "How do you check that a patient understood the instructions?",
          "ph": "I ask: …",
          "ex": "I ask: Can you tell me how you're going to take it?"
        }
      ]
    }
  }
};
