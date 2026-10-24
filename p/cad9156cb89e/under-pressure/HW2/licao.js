/* UNDER PRESSURE · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: because / because of / leads to / to / so that. B1: nenhum português. */
window.HW2 = {
  "id": "under-pressure",
  "titulo": "Under Pressure",
  "nivel": "B1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/cad9156cb89e/under-pressure/img/live-caldeira.webp",
  "alvo": "cause, effect and purpose: because + a sentence, because of + a thing; leads to / results in + a thing or -ing; to / in order to + plain verb; so that + subject + can / could; never because of I was, for + verb, in order to don't",
  "abrir": "Think of one place where you feel pressure. Why does it get to you?",
  "fecho": "<b>Because</b> + a sentence (<i>because I was nervous</i>). <b>Because of</b> + a thing (<i>because of the noise</i>). <b>Leads to / results in</b> + a thing or -ing: <i>stress leads to mistakes</i>. <b>To / in order to</b> + plain verb: <i>I came early to check the screen</i>. <b>So that</b> + subject + can / could. Never <i>for</i> + verb.",
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
      "sub": "Mia and Leo before a big presentation. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/cad9156cb89e/under-pressure/img/live-sala.webp",
      "leg": "An empty room with one table",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, you look nervous. Is it because of the presentation?"
        },
        {
          "quem": "leo",
          "t": "Yes. I can't sleep because I keep thinking about it."
        },
        {
          "quem": "mia",
          "t": "Too much worry leads to mistakes. It happened to me last year."
        },
        {
          "quem": "leo",
          "t": "What did you do?"
        },
        {
          "quem": "mia",
          "t": "I went to the room early in order to check the screen. After that, the room didn't scare me."
        },
        {
          "quem": "leo",
          "t": "Smart. I practised at home so that I wouldn't forget the words."
        },
        {
          "quem": "mia",
          "t": "And did it work?"
        },
        {
          "quem": "leo",
          "t": "A little. But my hands are cold because of the air conditioning."
        },
        {
          "quem": "mia",
          "t": "Then breathe slowly. Think about your body, not about the people in the room."
        },
        {
          "quem": "leo",
          "t": "I came here to ask for help, and you gave me a plan. Thanks."
        }
      ],
      "perguntas": [
        {
          "q": "Why can't Leo sleep?",
          "op": [
            "He keeps thinking about the presentation",
            "His room is noisy",
            "He drank too much coffee"
          ],
          "a": 0,
          "por": "I can't sleep because I keep thinking about it."
        },
        {
          "q": "Why did Mia go to the room early?",
          "op": [
            "To check the screen",
            "To meet the boss",
            "To eat lunch"
          ],
          "a": 0,
          "por": "I went to the room early in order to check the screen."
        },
        {
          "q": "Why did Leo practise at home?",
          "op": [
            "So that he wouldn't forget the words",
            "To buy a new laptop",
            "To sleep better"
          ],
          "a": 0,
          "por": "I practised at home so that I wouldn't forget the words."
        }
      ]
    },
    "out": {
      "sub": "Three sentences about pressure. Hear it, then say it.",
      "frases": [
        {
          "t": "I was nervous because of the exam.",
          "img": "https://wolf-labs.pages.dev/p/cad9156cb89e/under-pressure/img/live-dominos.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "Too much worry leads to mistakes.",
          "img": "https://wolf-labs.pages.dev/p/cad9156cb89e/under-pressure/img/live-caldeira.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "I arrived early in order to find a good seat.",
          "img": "https://wolf-labs.pages.dev/p/cad9156cb89e/under-pressure/img/live-sala.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Because, to, so that. Four quick ones.",
      "regra": "<b>because</b> + sentence · <b>because of</b> + thing · <b>leads to</b> + thing or -ing · <b>to / in order to</b> + plain verb · <b>so that</b> + can / could.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "I came early so that I could find a seat.",
          "aceita": [],
          "d": "Hint: <b>so that</b> + subject + <b>could</b>: the purpose."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "I was late because of the bus was slow.",
          "r": "I was late because the bus was slow.",
          "aceita": [
            "I was late because of the slow bus."
          ],
          "d": "Hint: a full sentence (the bus was slow) takes <b>because</b>. <i>Because of</i> takes a thing."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "I called him for ask a question.",
          "r": "I called him to ask a question.",
          "aceita": [
            "I called him in order to ask a question."
          ],
          "d": "Hint: purpose + verb = <b>to</b> + plain verb. Never <i>for</i> + verb."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "Stress leads to make mistakes.",
          "r": "Stress leads to making mistakes.",
          "aceita": [
            "Stress leads to mistakes.",
            "Stress results in making mistakes.",
            "Stress results in mistakes."
          ],
          "d": "Hint: after <b>leads to</b>, use a thing or -ing."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/cad9156cb89e/under-pressure/img/live-sala.webp",
      "leg": "An empty room with one table",
      "pede": "Look at the picture: an empty room with one table. Imagine a person who feels pressure in a room like this. Write 2 or 3 sentences: why, and what they can do. Use <b>because</b>, <b>because of</b>, <b>to</b> or <b>so that</b>.",
      "ph": "He feels pressure because … He arrives early to …",
      "ex": "He feels pressure because the exam is important. He arrived early in order to relax. He sits near the window so that he can breathe."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What makes you nervous? Why?",
          "ph": "I get nervous before … because …",
          "ex": "I get nervous before exams because I worry about my grade."
        },
        {
          "q": "What do you do to feel calm? Why does it help?",
          "ph": "I … so that I can …",
          "ex": "I walk for ten minutes so that I can clear my head."
        }
      ]
    }
  }
};
