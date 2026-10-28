/* WHAT THIS TEST WILL SHOW · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: explicar um exame de rotina: agenda, will/won't, first/then, on + dia. B1+: nenhum português. Tom calmo: exame de sangue de rotina, resultado normal. Só live-capa (tubos no laboratório). */
window.HW2 = {
  "id": "health-what-this-test-will-show",
  "titulo": "What This Test Will Show",
  "nivel": "B1",
  "minutos": 10,
  "capa": "../img/live-capa.webp",
  "alvo": "explaining a routine test: agenda (I'm going to explain..., and then you can ask me anything) · This test will show... · steps in order (First, Then, After that, Finally) · will / won't for what the patient will feel and when results come (on Friday) · checking: Does that make sense so far?",
  "abrir": "Think of a routine test you know well. What does it show?",
  "fecho": "Start with an agenda: <b>I'm going to explain the test, and then you can ask me anything.</b> Say what it <b>will show</b>. Give the steps in order: <b>First, Then, After that, Finally</b>. Use <b>will / won't</b>: <i>You won't feel anything.</i> Days take <b>on</b>: <i>ready on Friday</i>. Check: <b>Does that make sense so far?</b>",
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
      "sub": "Mia, a nurse, explains a routine blood test to Leo at his yearly check-up. A new scene, about 45 seconds.",
      "img": "../img/live-capa.webp",
      "leg": "The lab, early in the morning",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Hello, Leo. I'm going to explain today's test, and then you can ask me anything."
        },
        {
          "quem": "leo",
          "t": "Great, thanks. What will the test show?"
        },
        {
          "quem": "mia",
          "t": "It's a routine blood test for your yearly check-up. It will show your iron and vitamin D levels."
        },
        {
          "quem": "leo",
          "t": "Okay. What happens first?"
        },
        {
          "quem": "mia",
          "t": "First, I'll take a small sample from your arm. It only takes a minute."
        },
        {
          "quem": "leo",
          "t": "And after that?"
        },
        {
          "quem": "mia",
          "t": "Then we'll send it to the lab. After that, the doctor will look at the results."
        },
        {
          "quem": "leo",
          "t": "When will the results be ready?"
        },
        {
          "quem": "mia",
          "t": "They'll be ready on Friday. If everything is normal, we'll just send you a message."
        },
        {
          "quem": "leo",
          "t": "That's easy."
        },
        {
          "quem": "mia",
          "t": "Does that make sense so far?"
        },
        {
          "quem": "leo",
          "t": "Yes, it does. Thank you."
        }
      ],
      "perguntas": [
        {
          "q": "What will the test show?",
          "op": [
            "His iron and vitamin D levels",
            "His blood pressure",
            "His heart rate"
          ],
          "a": 0,
          "por": "It will show your iron and vitamin D levels."
        },
        {
          "q": "When will the results be ready?",
          "op": [
            "On Friday",
            "Tomorrow morning",
            "In two weeks"
          ],
          "a": 0,
          "por": "They'll be ready on Friday."
        },
        {
          "q": "How does Mia check that Leo understood?",
          "op": [
            "She asks: Does that make sense so far?",
            "She asks him to repeat everything",
            "She gives him a leaflet"
          ],
          "a": 0,
          "por": "Does that make sense so far?"
        }
      ]
    },
    "out": {
      "sub": "Three sentences from an explanation. Hear it, then say it.",
      "frases": [
        {
          "t": "I'm going to explain the test, and then you can ask me anything.",
          "img": null,
          "au": "audio/say1.mp3"
        },
        {
          "t": "This test will show your vitamin D level.",
          "img": "../img/live-capa.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "You won't feel anything, and it only takes five minutes.",
          "img": null,
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Explaining a test, step by step. Four quick ones.",
      "regra": "<b>will</b> + plain verb · <b>won't</b> + <b>anything</b> (one negative only) · <b>on</b> + a day · <b>First, Then, After that</b>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "Then the doctor will look at the results.",
          "aceita": [],
          "d": "Hint: <b>Then</b> + who + <b>will</b> + verb."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "You will not feel nothing.",
          "r": "You won't feel anything.",
          "aceita": [
            "You will not feel anything."
          ],
          "d": "Hint: English uses one negative only: <b>won't</b> + <i>anything</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "The results will be ready in Friday.",
          "r": "The results will be ready on Friday.",
          "aceita": [],
          "d": "Hint: days of the week take <b>on</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "This test will shows your iron level.",
          "r": "This test will show your iron level.",
          "aceita": [],
          "d": "Hint: after <b>will</b>, the plain verb, no <i>-s</i>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "../img/live-capa.webp",
      "leg": "Test tubes in a quiet lab",
      "pede": "Look at the picture: test tubes in a quiet lab. Explain a routine test to a patient in 3 sentences: what it <b>will show</b>, the steps (<b>first, then</b>), and when the results <b>will be ready</b>.",
      "ph": "This test will show …",
      "ex": "This test will show your cholesterol level. First, I'll take a small sample, and then we'll send it to the lab. The results will be ready on Monday."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "Which test or procedure do you explain most often at work? What will it show?",
          "ph": "I often explain … It will show …",
          "ex": "I often explain a dental X-ray. It will show the teeth and the bone."
        },
        {
          "q": "A patient asks: \"Will it hurt?\" What do you say?",
          "ph": "No, you won't …",
          "ex": "No, you won't feel anything. It only takes five minutes."
        }
      ]
    }
  }
};
