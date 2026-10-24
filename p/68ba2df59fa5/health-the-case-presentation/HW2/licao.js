/* THE CASE PRESENTATION · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: apresentação de caso: sinalizadores + passiva no passado. B1+: nenhum português. Caso leve (fratura de punho que consolidou bem). Sem imagem (as da aula são claras). */
window.HW2 = {
  "id": "health-the-case-presentation",
  "titulo": "The Case Presentation",
  "nivel": "B1",
  "minutos": 10,
  "capa": null,
  "alvo": "presenting a case in order (who, complaint, history, examination, tests, diagnosis, treatment, outcome) with signposts (presented with, has a history of, on examination, showed, ruled out) and the past passive (was admitted, was treated, was referred, was discharged)",
  "abrir": "In your job, where do you talk about patients with colleagues?",
  "fecho": "Tell the case in order: <b>This is…, who presented with…</b> · <b>She has a history of…</b> · <b>On examination,…</b> · <b>The X-ray showed…</b> · then the passive, because the patient is the center: <b>was treated</b>, <b>was referred</b>, <b>was discharged</b> (<b>was</b> + third form).",
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
      "sub": "Leo presents a case at the Monday team meeting. Mia leads the meeting. A new scene, about one minute.",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Good morning, everyone. Leo, would you like to start with your case?"
        },
        {
          "quem": "leo",
          "t": "Sure. This is Mrs. P., a 52-year-old librarian who presented with pain and swelling in her right wrist after she slipped on a wet step."
        },
        {
          "quem": "mia",
          "t": "Any relevant history?"
        },
        {
          "quem": "leo",
          "t": "She has a history of mild asthma. Nothing else."
        },
        {
          "quem": "leo",
          "t": "On examination, the wrist was swollen and tender, but her fingers moved well. The X-ray showed a small, simple fracture."
        },
        {
          "quem": "mia",
          "t": "How was it treated?"
        },
        {
          "quem": "leo",
          "t": "The wrist was put in a cast, and she was given pain relief. She was referred to the fracture clinic."
        },
        {
          "quem": "mia",
          "t": "And the outcome?"
        },
        {
          "quem": "leo",
          "t": "At six weeks, the fracture had healed well. The cast was removed, and she was referred to physio. She's back at work this week."
        },
        {
          "quem": "mia",
          "t": "Lovely. Clear, in order, and under two minutes. Thank you, Leo."
        }
      ],
      "perguntas": [
        {
          "q": "Why did Mrs. P. come in?",
          "op": [
            "Pain and swelling in her right wrist",
            "A cough and a fever",
            "A toothache"
          ],
          "a": 0,
          "por": "This is Mrs. P., a 52-year-old librarian who presented with pain and swelling in her right wrist."
        },
        {
          "q": "What did the X-ray show?",
          "op": [
            "A small, simple fracture",
            "Nothing at all",
            "A problem with her lungs"
          ],
          "a": 0,
          "por": "The X-ray showed a small, simple fracture."
        },
        {
          "q": "How did the case end?",
          "op": [
            "The fracture healed, and she is back at work",
            "She was sent to another hospital",
            "She needs a second cast"
          ],
          "a": 0,
          "por": "At six weeks, the fracture had healed well. She's back at work this week."
        }
      ]
    },
    "out": {
      "sub": "Three lines from a case presentation. Hear it, then say it.",
      "frases": [
        {
          "t": "This is Mrs. P., a 52-year-old librarian who presented with a painful wrist.",
          "au": "audio/say1.mp3"
        },
        {
          "t": "On examination, the wrist was swollen, and the X-ray showed a small fracture.",
          "au": "audio/say2.mp3"
        },
        {
          "t": "She was treated with a cast and was referred to the fracture clinic.",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Signposts and the passive. Four quick ones.",
      "regra": "<b>presented with</b> · <b>has a history of</b> · <b>on examination</b> · <b>showed</b> · <b>was</b> + third form (was treated, was referred).",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "She was referred to the fracture clinic.",
          "aceita": [],
          "d": "Hint: <b>was</b> + <b>referred</b>, then <b>to</b> + the place."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "He was treat with a cast and pain relief.",
          "r": "He was treated with a cast and pain relief.",
          "aceita": [],
          "d": "Hint: the passive is <b>was</b> + third form: <i>treated</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "The blood exams were normal.",
          "r": "The blood tests were normal.",
          "aceita": [],
          "d": "Hint: in English, blood work is <b>tests</b>; an <i>exam</i> is for students."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is missing.",
          "mostra": "She has history of mild asthma.",
          "r": "She has a history of mild asthma.",
          "aceita": [],
          "d": "Hint: the signpost is <b>has a history of</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "pede": "Present a short, routine case in 3 sentences: a 25-year-old runner with a sprained ankle. Say who and why (<b>presented with</b>), what you found (<b>on examination</b> or <b>showed</b>), and the treatment in the passive (<b>was treated</b>, <b>was referred</b>).",
      "ph": "This is …, who presented with …",
      "ex": "This is Mr. K., a 25-year-old runner who presented with a painful ankle. On examination, the ankle was swollen, and the X-ray showed no fracture. He was treated with rest and ice and was referred to physio."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "In your work, when do you present cases to colleagues?",
          "ph": "I present cases …",
          "ex": "I present cases at our team meeting every Monday."
        },
        {
          "q": "Think of a patient who got better. Give the outcome in the passive.",
          "ph": "He / She was …",
          "ex": "She was discharged on day two with physio at home."
        }
      ]
    }
  }
};
