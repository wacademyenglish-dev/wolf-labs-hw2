/* PLAIN ENGLISH, PLEASE · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: jargão para palavras simples + teach-back; explain to me; tests. B1+: nenhum português. Tom calmo: pressão um pouco alta num check-up. Sem imagem (as duas live-* são claras). */
window.HW2 = {
  "id": "health-plain-english-please",
  "titulo": "Plain English, Please",
  "nivel": "B1",
  "minutos": 10,
  "capa": null,
  "alvo": "from jargon to plain words (hypertension = high blood pressure, analgesic = painkiller, oral = by mouth, bilateral = on both sides) · one idea at a time · good news in simple language · teach-back (Can you tell me in your own words...?); explain to me, never explain me; tests, not exams",
  "abrir": "Think of a medical word from your job. How would you say it to a patient?",
  "fecho": "With colleagues, jargon is fine. With patients, short words: <b>hypertension</b> = high blood pressure, <b>analgesic</b> = painkiller, <b>oral</b> = <b>by mouth</b>. One idea at a time. Patients have <b>tests</b> (not <i>exams</i>). Finish with a teach-back: <b>Can you tell me in your own words…?</b> And it is <b>explain to me</b>, never <i>explain me</i>.",
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
      "sub": "Leo, a doctor, explains Mia's check-up results. A new scene, about 45 seconds.",
      "img": null,
      "leg": null,
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, your check-up results are here, and most of them are normal."
        },
        {
          "quem": "mia",
          "t": "Good. What about the rest?"
        },
        {
          "quem": "leo",
          "t": "Your notes say mild hypertension. In plain English, your blood pressure is a little high."
        },
        {
          "quem": "mia",
          "t": "Should I worry?"
        },
        {
          "quem": "leo",
          "t": "Not at all. It's very common, and small changes usually help."
        },
        {
          "quem": "mia",
          "t": "What kind of changes?"
        },
        {
          "quem": "leo",
          "t": "Less salt, a short walk every day, and more water. We'll check it again in three months."
        },
        {
          "quem": "mia",
          "t": "Okay. That sounds easy."
        },
        {
          "quem": "leo",
          "t": "Just to make sure I explained it well, can you tell me in your own words what we're going to do?"
        },
        {
          "quem": "mia",
          "t": "My blood pressure is a little high. I'll eat less salt, walk every day, and come back in three months."
        },
        {
          "quem": "leo",
          "t": "Perfect. That's exactly it."
        }
      ],
      "perguntas": [
        {
          "q": "What does mild hypertension mean in plain English?",
          "op": [
            "Her blood pressure is a little high",
            "Her heart is slow",
            "Her tests are all normal"
          ],
          "a": 0,
          "por": "In plain English, your blood pressure is a little high."
        },
        {
          "q": "What changes does Leo suggest?",
          "op": [
            "Less salt, a daily walk and more water",
            "A new medicine every day",
            "No coffee and more sleep"
          ],
          "a": 0,
          "por": "Less salt, a short walk every day, and more water."
        },
        {
          "q": "How does Leo check that Mia understood?",
          "op": [
            "He asks her to say it in her own words",
            "He gives her a written test",
            "He asks: Did you understand?"
          ],
          "a": 0,
          "por": "Can you tell me in your own words what we're going to do?"
        }
      ]
    },
    "out": {
      "sub": "Three plain-English sentences. Hear it, then say it.",
      "frases": [
        {
          "t": "In plain English, your blood pressure is a little high.",
          "img": null,
          "au": "audio/say1.mp3"
        },
        {
          "t": "This is a painkiller. Take it by mouth, with water.",
          "img": null,
          "au": "audio/say2.mp3"
        },
        {
          "t": "Can you tell me in your own words what we're going to do?",
          "img": null,
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Plain words and a teach-back. Four quick ones.",
      "regra": "<b>by mouth</b> · <b>explain to me</b> · <b>tests</b> (not exams) · teach-back: <b>Can you tell me in your own words…?</b>",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "The good news is that everything is normal.",
          "aceita": [],
          "d": "Hint: <b>The good news is that</b> + a clause."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "Take it for the mouth.",
          "r": "Take it by mouth.",
          "aceita": [],
          "d": "Hint: <b>oral</b> in plain English is <b>by mouth</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is missing.",
          "mostra": "Can you explain me how to use it?",
          "r": "Can you explain to me how to use it?",
          "aceita": [
            "Can you explain how to use it?"
          ],
          "d": "Hint: <b>explain to me</b>, never <i>explain me</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "Your exams are all normal.",
          "r": "Your tests are all normal.",
          "aceita": [
            "Your test results are all normal.",
            "Your results are all normal."
          ],
          "d": "Hint: a patient has <b>tests</b> or <b>test results</b>; students have exams."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": null,
      "leg": null,
      "pede": "A patient's notes say: <i>Analgesic, oral, twice daily.</i> Write 2 or 3 sentences to explain it in plain English. Finish with a teach-back question.",
      "ph": "This is a painkiller. …",
      "ex": "This is a painkiller. Take it by mouth, twice a day. Can you tell me in your own words how you'll take it?"
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "Which medical word do you use at work that patients often don't understand? How do you say it simply?",
          "ph": "At work I say … With patients, I say …",
          "ex": "At work I say hypertension. With patients, I say high blood pressure."
        },
        {
          "q": "How do you check that a patient understood you?",
          "ph": "I ask them …",
          "ex": "I ask them to tell me in their own words."
        }
      ]
    }
  }
};
