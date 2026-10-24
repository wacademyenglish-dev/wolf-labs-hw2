/* FIRST CONTACT · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: AIDET + I'm going to / may / examine. B1+ (B1 na plataforma): nenhum português. Tom calmo, queixas leves do dia a dia; nada de doença grave, emergência ou perda. Imagens só as escuras e neutras da aula (sem leito, sem corredor). */
window.HW2 = {
  "id": "health-first-contact",
  "titulo": "First Contact",
  "nivel": "B1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/04ad29c811e5/health-first-contact/img/live-capa.webp",
  "alvo": "the first contact with AIDET: Acknowledge (Good morning, Mr. ...), Introduce (I'm ..., your nurse today), Duration (This will take about ...), Explanation (I'm going to + verb; You may feel ...), Thank you; I'm going to + plain verb (never I go to); may + plain verb (no to); examine (not make an exam)",
  "abrir": "What do you say to a new patient in the first ten seconds?",
  "fecho": "Five steps, thirty seconds: <b>Good morning, Mr. Lane</b> · <b>I'm Mia, your nurse today</b> · <b>This will take about ten minutes</b> · <b>I'm going to</b> + verb · <b>Thank you</b>. Say <i>I'm going to check</i>, never <i>I go to check</i>. After <b>may</b>, the plain verb: <i>You may feel a small scratch.</i>",
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
      "sub": "Mia, a nurse, meets Leo at a clinic for his flu vaccine. A new scene, about one minute.",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Good morning. Mr. Lane? Thanks for waiting."
        },
        {
          "quem": "leo",
          "t": "Good morning. Yes, that's me."
        },
        {
          "quem": "mia",
          "t": "I'm Mia, the nurse who will look after you today."
        },
        {
          "quem": "leo",
          "t": "Nice to meet you. Will this take long?"
        },
        {
          "quem": "mia",
          "t": "Not at all. This will take about ten minutes."
        },
        {
          "quem": "leo",
          "t": "Great. What are you going to do first?"
        },
        {
          "quem": "mia",
          "t": "First, I'm going to check your blood pressure. It will feel a little tight on your arm."
        },
        {
          "quem": "leo",
          "t": "OK, no problem."
        },
        {
          "quem": "mia",
          "t": "Then I'm going to give you the flu vaccine. You may feel a small scratch."
        },
        {
          "quem": "leo",
          "t": "That's fine."
        },
        {
          "quem": "mia",
          "t": "All done. Do you have any questions before you go?"
        },
        {
          "quem": "leo",
          "t": "No, that was easy. Thank you."
        },
        {
          "quem": "mia",
          "t": "Thank you for your patience, Mr. Lane. Have a lovely day."
        }
      ],
      "perguntas": [
        {
          "q": "How long will the visit take?",
          "op": [
            "About ten minutes",
            "About an hour",
            "About two minutes"
          ],
          "a": 0,
          "por": "This will take about ten minutes."
        },
        {
          "q": "What will Mia do first?",
          "op": [
            "Check his blood pressure",
            "Give him the vaccine",
            "Take an X-ray"
          ],
          "a": 0,
          "por": "First, I'm going to check your blood pressure."
        },
        {
          "q": "What may Leo feel with the vaccine?",
          "op": [
            "A small scratch",
            "A strong pain",
            "Nothing at all"
          ],
          "a": 0,
          "por": "You may feel a small scratch."
        }
      ]
    },
    "out": {
      "sub": "Three sentences from a first contact. Hear it, then say it.",
      "frases": [
        {
          "t": "Good morning, Mr. Lane. I'm Mia, your nurse today.",
          "au": "audio/say1.mp3",
          "img": "https://wolf-labs.pages.dev/p/04ad29c811e5/health-first-contact/img/live-capa.webp"
        },
        {
          "t": "This will take about ten minutes.",
          "au": "audio/say2.mp3"
        },
        {
          "t": "I'm going to check your blood pressure now.",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "I'm going to, may, examine. Four quick ones.",
      "regra": "<b>I'm going to</b> + verb (never <i>I go to</i>) · <b>may</b> + plain verb, no <i>to</i> · <b>examine</b> you, not <i>make an exam</i> · <b>This will take about</b> + time.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "I'm going to take your blood pressure now.",
          "aceita": [],
          "d": "Hint: <b>I'm going to</b> + the verb, then what you will do."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "I go to take your blood pressure now.",
          "r": "I'm going to take your blood pressure now.",
          "aceita": [
            "I am going to take your blood pressure now.",
            "I'm going to check your blood pressure now.",
            "I am going to check your blood pressure now."
          ],
          "d": "Hint: a plan for the next minute is <b>I'm going to</b> + verb, not <i>I go to</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is extra.",
          "mostra": "You may to feel a small scratch.",
          "r": "You may feel a small scratch.",
          "aceita": [],
          "d": "Hint: after <b>may</b>, the plain verb. No <i>to</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "I'm going to make an exam of your knee.",
          "r": "I'm going to examine your knee.",
          "aceita": [
            "I am going to examine your knee.",
            "I'm going to check your knee.",
            "I am going to check your knee.",
            "I'm going to do an examination of your knee."
          ],
          "d": "Hint: in English you <b>examine</b> a patient. <i>Make an exam</i> is not natural."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/04ad29c811e5/health-first-contact/img/live-capa.webp",
      "leg": "A quiet desk before the first patient",
      "pede": "Look at the picture: a stethoscope and a cup of tea on a desk, before the first patient. Write your first contact with a patient in your profession: greet, introduce yourself, say how long it takes and what you are going to do. Use <b>This will take about</b> and <b>I'm going to</b>.",
      "ph": "Good morning, Ms. … I'm …, your … today.",
      "ex": "Good morning, Ms. Carter. I'm Rafael, your physiotherapist today. This will take about forty minutes. I'm going to check how your shoulder moves."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What do you usually say to a new patient in the first ten seconds?",
          "ph": "I usually say: Good morning, … I'm …",
          "ex": "I usually say: Good morning, Mr. Silva. I'm Ana, the nurse who will look after you today."
        },
        {
          "q": "Choose one thing you do every day at work. Explain it to a patient with I'm going to and You may feel.",
          "ph": "I'm going to … You may feel …",
          "ex": "I'm going to clean your teeth now. You may feel a little pressure, but it shouldn't hurt."
        }
      ]
    }
  }
};
