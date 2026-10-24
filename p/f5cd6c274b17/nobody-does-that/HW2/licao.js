/* NOBODY DOES THAT ANYMORE · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: used to / didn't use to. A2: dicas em português só nas notas (d). */
window.HW2 = {
  "id": "nobody-does-that",
  "titulo": "Nobody Does That Anymore",
  "nivel": "A2",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/f5cd6c274b17/nobody-does-that/img/live-museu.webp",
  "alvo": "used to + plain verb for a habit or state that is over; didn't use to; Did you use to ...?; Where did you use to ...?; with did the D goes away; still true now = usually",
  "abrir": "What did you use to do when you were ten?",
  "fecho": "Habit that is over: <b>used to</b> + plain verb: <i>People used to carry coins.</i> With <b>did</b>, the D goes: <i>I didn't use to · Did you use to ...?</i> Still true now? <b>usually</b>.",
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
  "rate": "-14%",
  "rodadas": {
    "listen": {
      "sub": "Mia and Leo in a museum of old things. A new scene, about 45 seconds.",
      "img": "https://wolf-labs.pages.dev/p/f5cd6c274b17/nobody-does-that/img/live-payphone.webp",
      "leg": "An old phone in the museum",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, look at this old phone. People used to put coins in it."
        },
        {
          "quem": "leo",
          "t": "Coins? Why?"
        },
        {
          "quem": "mia",
          "t": "Because they didn't use to have cell phones. They used to call from the street."
        },
        {
          "quem": "leo",
          "t": "Did your family use to have one at home?"
        },
        {
          "quem": "mia",
          "t": "Yes. My grandmother used to call me every Sunday."
        },
        {
          "quem": "leo",
          "t": "Did she use to talk for a long time?"
        },
        {
          "quem": "mia",
          "t": "No, she didn't. It used to be expensive, so she talked for five minutes."
        },
        {
          "quem": "leo",
          "t": "Nobody does that now. I usually send a message."
        },
        {
          "quem": "mia",
          "t": "Me too. But I miss her calls."
        },
        {
          "quem": "leo",
          "t": "Then call her tonight!"
        }
      ],
      "perguntas": [
        {
          "q": "What did people use to put in the old phone?",
          "op": [
            "Coins",
            "Cards",
            "Letters"
          ],
          "a": 0,
          "por": "People used to put coins in it."
        },
        {
          "q": "Why did Mia's grandmother talk for five minutes?",
          "op": [
            "It used to be expensive",
            "She didn't like phones",
            "She was busy"
          ],
          "a": 0,
          "por": "It used to be expensive, so she talked for five minutes."
        },
        {
          "q": "What does Leo usually do now?",
          "op": [
            "He sends a message",
            "He calls every Sunday",
            "He writes a letter"
          ],
          "a": 0,
          "por": "I usually send a message."
        }
      ]
    },
    "out": {
      "sub": "Three sentences about things people used to do. Hear it, then say it.",
      "frases": [
        {
          "t": "People used to put coins in the phone.",
          "img": "https://wolf-labs.pages.dev/p/f5cd6c274b17/nobody-does-that/img/live-payphone.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "They used to look for numbers in a big book.",
          "img": "https://wolf-labs.pages.dev/p/f5cd6c274b17/nobody-does-that/img/live-phonebook.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "Did you use to rent movies at the video store?",
          "img": "https://wolf-labs.pages.dev/p/f5cd6c274b17/nobody-does-that/img/live-videostore.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "used to + the plain verb. Four quick ones.",
      "regra": "<b>used to</b> + plain verb · <b>didn't use to</b> · <b>Did you use to ...?</b> · with did, no D · still true now: <b>usually</b>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "Did you use to have a dog?",
          "aceita": [],
          "d": "Dica: com <b>did</b>, o D some: <b>use to</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "She didn't used to drive.",
          "r": "She didn't use to drive.",
          "aceita": [
            "She did not use to drive."
          ],
          "d": "Dica: depois de <b>didn't</b>, o D some: <b>use to</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "Families used to watched TV together.",
          "r": "Families used to watch TV together.",
          "aceita": [],
          "d": "Dica: depois de <b>used to</b>, o verbo fica limpo: <b>watch</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: make the question correct.",
          "mostra": "Where did you used to work?",
          "r": "Where did you use to work?",
          "aceita": [],
          "d": "Dica: com <b>did</b>, o D some: <b>use to</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/f5cd6c274b17/nobody-does-that/img/live-museu.webp",
      "leg": "A dark museum with old things",
      "pede": "Look at the picture: a dark museum with old things. Write 2 or 3 sentences about something people <b>used to</b> do, and what they do now.",
      "ph": "People used to …",
      "ex": "People used to write letters. They didn't use to send messages. Now I usually text my friends."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What did you use to do when you were ten?",
          "ph": "When I was ten, I used to …",
          "ex": "When I was ten, I used to ride my bike every afternoon."
        },
        {
          "q": "What did you use to eat as a child? Do you still eat it?",
          "ph": "I used to eat … but now …",
          "ex": "I used to eat a lot of candy, but now I don't."
        }
      ]
    }
  }
};
