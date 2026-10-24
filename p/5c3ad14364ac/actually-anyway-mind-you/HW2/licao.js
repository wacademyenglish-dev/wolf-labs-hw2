/* ACTUALLY, ANYWAY, MIND YOU · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   B2: nenhum português na lição. */
window.HW2 = {
  "id": "actually-anyway-mind-you",
  "titulo": "Actually, Anyway, Mind You",
  "nivel": "B2",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/5c3ad14364ac/actually-anyway-mind-you/img/live-capa.webp",
  "alvo": "discourse markers with one job each: actually (corrects a fact or surprises, never 'now'), by the way (a side topic), anyway (back to the subject or closing), mind you (the other side), as I was saying (back after an interruption)",
  "abrir": "Think of the last conversation where you changed the subject. Which little word did you use?",
  "fecho": "Each little word has <b>one job</b>. <b>Actually</b>: a correction or a surprise, never <i>now</i>. <b>By the way</b>: a side topic. <b>Anyway</b>: back to the subject, or the end. <b>Mind you</b>: the other side of the picture. <b>As I was saying</b>: back after an interruption.",
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
      "sub": "Mia hosts a podcast. Leo is her guest. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/5c3ad14364ac/actually-anyway-mind-you/img/live-mesa.webp",
      "leg": "The mixing desk",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Welcome back to Off Script. Leo, you told me you hate cooking shows."
        },
        {
          "quem": "leo",
          "t": "Actually, I love them. I just hate cooking."
        },
        {
          "quem": "mia",
          "t": "Ha! Fair enough. By the way, did you try the new ramen place?"
        },
        {
          "quem": "leo",
          "t": "Not yet. Anyway, you asked about my worst trip."
        },
        {
          "quem": "mia",
          "t": "Right, the trip. Go on."
        },
        {
          "quem": "leo",
          "t": "Well, the flight was late, the hotel lost my booking, and it rained for four days."
        },
        {
          "quem": "mia",
          "t": "That sounds awful."
        },
        {
          "quem": "leo",
          "t": "It was. Mind you, the food was incredible."
        },
        {
          "quem": "mia",
          "t": "So it wasn't all bad?"
        },
        {
          "quem": "leo",
          "t": "Not at all. Actually, it became my favorite city."
        },
        {
          "quem": "leo",
          "t": "Anyway, as I was saying, I would go back tomorrow."
        }
      ],
      "perguntas": [
        {
          "q": "What does Leo say about cooking shows?",
          "op": [
            "He loves them but hates cooking",
            "He hates them",
            "He cooks every day"
          ],
          "a": 0,
          "por": "Actually, I love them. I just hate cooking."
        },
        {
          "q": "Which word brings Leo back to Mia's question?",
          "op": [
            "Anyway",
            "Actually",
            "By the way"
          ],
          "a": 0,
          "por": "Not yet. Anyway, you asked about my worst trip."
        },
        {
          "q": "What does 'mind you' add about the trip?",
          "op": [
            "Something good: the food was incredible",
            "Something worse: more rain",
            "A new topic: ramen"
          ],
          "a": 0,
          "por": "It was. Mind you, the food was incredible."
        }
      ]
    },
    "out": {
      "sub": "Three sentences from the scene. Hear it, then say it.",
      "frases": [
        {
          "t": "Actually, I love cooking shows.",
          "au": "audio/say1.mp3",
          "img": "https://wolf-labs.pages.dev/p/5c3ad14364ac/actually-anyway-mind-you/img/live-fones.webp"
        },
        {
          "t": "By the way, did you try the new ramen place?",
          "au": "audio/say2.mp3",
          "img": "https://wolf-labs.pages.dev/p/5c3ad14364ac/actually-anyway-mind-you/img/live-sofa.webp"
        },
        {
          "t": "It was awful. Mind you, the food was incredible.",
          "au": "audio/say3.mp3",
          "img": "https://wolf-labs.pages.dev/p/5c3ad14364ac/actually-anyway-mind-you/img/live-cabine.webp"
        }
      ]
    },
    "focus": {
      "sub": "One word, one job. Four quick ones.",
      "regra": "<b>actually</b> = in fact, a correction (not <i>now</i>) · <b>by the way</b> = a side topic · <b>anyway</b> = back to the subject · <b>mind you</b> = the other side.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "Anyway back to what I was saying.",
          "aceita": [],
          "d": "Hint: <b>anyway</b> brings us back to the subject."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: <b>actually</b> does not mean <i>now</i>.",
          "mostra": "Actually I am busy.",
          "r": "Right now I am busy.",
          "aceita": [
            "At the moment I am busy.",
            "Currently I am busy.",
            "I am busy right now.",
            "I am busy at the moment.",
            "Right now, I am busy."
          ],
          "d": "Hint: say <b>right now</b>, <b>at the moment</b> or <b>currently</b>. <b>Actually</b> means <i>in fact</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: use the marker for the other side.",
          "mostra": "It was cheap. By the way, it was dirty.",
          "r": "It was cheap. Mind you, it was dirty.",
          "aceita": [
            "It was cheap. Mind you it was dirty."
          ],
          "d": "Hint: the other side of the picture is <b>mind you</b>, not <i>by the way</i>."
        },
        {
          "tipo": "escreve",
          "t": "Write the marker that brings us back to the topic.",
          "mostra": "We talked for an hour. ___ back to your question.",
          "r": "Anyway, back to your question.",
          "aceita": [
            "Anyway back to your question."
          ],
          "d": "Hint: returning to the subject = <b>anyway</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/5c3ad14364ac/actually-anyway-mind-you/img/live-sofa.webp",
      "leg": "A talk show sofa",
      "pede": "Look at the picture: a sofa in the spotlight. You are the host of a small talk show. Write a short chat with a guest. Use <b>actually, by the way, anyway</b> or <b>mind you</b>.",
      "ph": "Actually, …",
      "ex": "Actually, I never watch talk shows. By the way, do you like coffee? Mind you, I only drink tea. Anyway, tell me about your trip."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What do people often get wrong about you? Start with Actually.",
          "ph": "Actually, …",
          "ex": "Actually, I am not shy. I just listen a lot."
        },
        {
          "q": "Think of a place you know well. What is bad about it, and what is the other side? Use mind you.",
          "ph": "… Mind you, …",
          "ex": "The city is noisy. Mind you, the food is fantastic."
        }
      ]
    }
  }
};
