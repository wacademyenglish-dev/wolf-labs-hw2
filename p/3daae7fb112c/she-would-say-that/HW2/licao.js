/* SHE WOULD SAY THAT · LIÇÃO DE CASA 2.0 (24/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: will and would for what is typical. C1: nenhum português. Só imagens live-* (escuras). */
window.HW2 = {
  "id": "she-would-say-that",
  "titulo": "She Would Say That",
  "nivel": "C1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/3daae7fb112c/she-would-say-that/img/live-conversa.webp",
  "alvo": "will and would for what is typical: She would say that, wouldn't she? (predictable); He will leave his socks everywhere (annoying habit, stressed will); would for repeated past actions but used to for states; he's always -ing (complaint)",
  "abrir": "Who in your life will always say the same thing?",
  "fecho": "<b>She would say that, wouldn't she?</b> = typical of her. <b>He will leave</b> his cups everywhere = an annoying habit. <b>Would</b> + action = a past habit (<i>we would visit her every Sunday</i>); for a past state, <b>used to</b>. And <b>he's always losing</b> his keys = a complaint.",
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
      "sub": "Mia and Leo plan a dinner with an old friend. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/3daae7fb112c/she-would-say-that/img/live-capa.webp",
      "leg": "A table laid for dinner",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Dan says he can't come on Friday. He says he's swamped at work."
        },
        {
          "quem": "mia",
          "t": "Of course he does. He would say that, wouldn't he? It's his turn to cook."
        },
        {
          "quem": "leo",
          "t": "He will do that every single time. Last month it was a late meeting, the month before, a flat tyre."
        },
        {
          "quem": "mia",
          "t": "Remember when we were students? He would borrow my notes the night before every exam and never say thank you."
        },
        {
          "quem": "leo",
          "t": "And you'd lend them. You would always say it was fine."
        },
        {
          "quem": "mia",
          "t": "I know, I know. And he was always losing his keys, wasn't he? Always on my doorstep at midnight."
        },
        {
          "quem": "leo",
          "t": "Honestly, some things never change. He's always forgetting something."
        },
        {
          "quem": "mia",
          "t": "Let's just move dinner to Saturday. He won't have an excuse then."
        },
        {
          "quem": "leo",
          "t": "He'll find one. He always does."
        },
        {
          "quem": "mia",
          "t": "Then we'll cook without him."
        }
      ],
      "perguntas": [
        {
          "q": "What does Mia think of Dan's excuse?",
          "op": [
            "It is typical of him",
            "She believes it completely",
            "She thinks it is a joke"
          ],
          "a": 0,
          "por": "He would say that, wouldn't he?"
        },
        {
          "q": "What would Dan do before every exam?",
          "op": [
            "Borrow Mia's notes",
            "Lend her his notes",
            "Skip the exam"
          ],
          "a": 0,
          "por": "He would borrow my notes the night before every exam."
        },
        {
          "q": "What do they decide to do?",
          "op": [
            "Move dinner to Saturday",
            "Cancel the dinner",
            "Cook at Dan's place"
          ],
          "a": 0,
          "por": "Let's just move dinner to Saturday."
        }
      ]
    },
    "out": {
      "sub": "Three sentences about habits and character. Hear it, then say it.",
      "frases": [
        {
          "t": "My brother will leave his plates in the sink and then say he's tired.",
          "img": "https://wolf-labs.pages.dev/p/3daae7fb112c/she-would-say-that/img/live-capa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "When I was little, my grandmother would make pasta for the whole street.",
          "img": "https://wolf-labs.pages.dev/p/3daae7fb112c/she-would-say-that/img/live-conversa.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "She would say that, wouldn't she? She's the one who designed it.",
          "img": "https://wolf-labs.pages.dev/p/3daae7fb112c/she-would-say-that/img/live-capa.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "will and would for habits and character. Four quick ones.",
      "regra": "<b>She would say that</b> = typical · <b>He will leave</b> his cups = annoying habit · <b>would</b> + action, <b>used to</b> + state · <b>always -ing</b> = complaint",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "Of course he would say that, wouldn't he?",
          "aceita": [],
          "d": "Hint: it is exactly what you expect him to say."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "When I was a child, we would live near the sea.",
          "r": "When I was a child, we used to live near the sea.",
          "aceita": [],
          "d": "Hint: <i>live</i> is a state, not a repeated action. Use <b>used to</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "She was going to say that, wasn't she?",
          "r": "She would say that, wouldn't she?",
          "aceita": [],
          "d": "Hint: you want 'it's typical of her', not a plan from the past."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is in the wrong place.",
          "mostra": "He always will leave the lights on.",
          "r": "He will always leave the lights on.",
          "aceita": [
            "He is always leaving the lights on."
          ],
          "d": "Hint: with <b>will</b>, the word <b>always</b> comes after it."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/3daae7fb112c/she-would-say-that/img/live-conversa.webp",
      "leg": "An armchair by a window",
      "pede": "Look at the picture: a quiet armchair by a window. Write 2 or 3 sentences about someone whose habits you know. Use <b>will</b> for an annoying habit and <b>would</b> for something they did often in the past.",
      "ph": "My uncle will always … and he would …",
      "ex": "My uncle will always fall asleep in that chair, and he will snore! When I was a child, he would tell us the same story every Sunday."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "Who in your life will always be late, or will always say the same thing?",
          "ph": "My … will always …",
          "ex": "My best friend will always arrive twenty minutes late, and she will say the bus was full."
        },
        {
          "q": "What would you do every summer when you were a child?",
          "ph": "Every summer, we would …",
          "ex": "Every summer, we would drive to the coast and my father would sing the whole way."
        }
      ]
    }
  }
};
