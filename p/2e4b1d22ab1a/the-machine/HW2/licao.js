/* THE MACHINE · LIÇÃO DE CASA 2.0 (24/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: orações relativas who / which / that / where. Jogo: falas originais. B1: nenhum português. */
window.HW2 = {
  "id": "the-machine",
  "titulo": "The Machine",
  "nivel": "B1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/2e4b1d22ab1a/the-machine/img/live-split.webp",
  "alvo": "relative clauses: who for a person, which / that for a thing, where for a place; no extra pronoun (a robot that follows us, not that it follows); no extra in or there (the city where I live)",
  "abrir": "Who is a person who makes you laugh?",
  "fecho": "<b>who</b> = a person: <i>a writer who loves dragons</i>. <b>which / that</b> = a thing: <i>a machine which makes stories real</i>. <b>where</b> = a place: <i>a forest where the trees can talk</i>. No extra pronoun: <i>a robot that follows us</i>.",
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
      "sub": "Mia and Leo build a level in a story machine. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/2e4b1d22ab1a/the-machine/img/live-machine.webp",
      "leg": "The story machine",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, this is the machine which puts writers inside their stories."
        },
        {
          "quem": "leo",
          "t": "Cool! Is this the room where we start?"
        },
        {
          "quem": "mia",
          "t": "Yes. It's a room where everything is blue and silent."
        },
        {
          "quem": "leo",
          "t": "I'm a writer who loves dragons. What about you?"
        },
        {
          "quem": "mia",
          "t": "I'm a writer who loves robots. My world is a city where the streets are made of light."
        },
        {
          "quem": "leo",
          "t": "Mine is a forest where the trees can talk. There's a small dragon which sleeps in a nest."
        },
        {
          "quem": "mia",
          "t": "Let's build a level together. We need a place where the two worlds meet."
        },
        {
          "quem": "leo",
          "t": "A bridge which connects the city and the forest!"
        },
        {
          "quem": "mia",
          "t": "And a helper who can open doors. Maybe a small robot that follows us."
        },
        {
          "quem": "leo",
          "t": "A robot that follows us and a dragon that helps. That's our level!"
        }
      ],
      "perguntas": [
        {
          "q": "What does the machine do?",
          "op": [
            "It puts writers inside their stories",
            "It makes tea",
            "It paints rooms"
          ],
          "a": 0,
          "por": "This is the machine which puts writers inside their stories."
        },
        {
          "q": "What is Mia's world like?",
          "op": [
            "A city where the streets are made of light",
            "A forest where the trees can talk",
            "A room where everything is red"
          ],
          "a": 0,
          "por": "My world is a city where the streets are made of light."
        },
        {
          "q": "What do they need where the two worlds meet?",
          "op": [
            "A bridge",
            "A tall tower",
            "A big door"
          ],
          "a": 0,
          "por": "A bridge which connects the city and the forest!"
        }
      ]
    },
    "out": {
      "sub": "Three pieces of a new level. Hear it, then say it.",
      "frases": [
        {
          "t": "This is the machine which puts writers inside their stories.",
          "img": "https://wolf-labs.pages.dev/p/2e4b1d22ab1a/the-machine/img/live-machine.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "It's a forest where the trees can talk.",
          "img": "https://wolf-labs.pages.dev/p/2e4b1d22ab1a/the-machine/img/live-fantasy.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "There's a small dragon which sleeps in a nest.",
          "img": "https://wolf-labs.pages.dev/p/2e4b1d22ab1a/the-machine/img/live-dragon.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "who, which, that or where? Four quick ones.",
      "regra": "<b>who</b> = a person · <b>which / that</b> = a thing · <b>where</b> = a place · no extra pronoun · no extra <b>in</b> or <b>there</b>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "It is a city where the streets shine at night.",
          "aceita": [],
          "d": "Hint: a place is <b>where</b>, then the new part of the sentence."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "She is a writer which loves dragons.",
          "r": "She is a writer who loves dragons.",
          "aceita": [
            "She is a writer that loves dragons."
          ],
          "d": "Hint: a person is <b>who</b> (or <b>that</b>), not <i>which</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "This is the city where I live in.",
          "r": "This is the city where I live.",
          "aceita": [
            "This is the city I live in.",
            "This is the city in which I live."
          ],
          "d": "Hint: <b>where</b> already means <i>in</i>. No extra <i>in</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "It is a robot that it follows us.",
          "r": "It is a robot that follows us.",
          "aceita": [
            "It is a robot which follows us."
          ],
          "d": "Hint: <b>that</b> is already the subject. No extra <i>it</i>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/2e4b1d22ab1a/the-machine/img/live-castle.webp",
      "leg": "A castle above the clouds",
      "pede": "Look at the picture: a castle above the clouds. Design one piece of a new level. Write 2 or 3 sentences with <b>who</b>, <b>which</b>, <b>that</b> or <b>where</b>.",
      "ph": "It is a place where …",
      "ex": "It is a castle where the clouds are soft like beds. There is a bird which carries letters. A girl who loves music lives there."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "Describe your favorite place. What is it like?",
          "ph": "It's a place where …",
          "ex": "It's a small cafe where I read on Sundays."
        },
        {
          "q": "Who is a person who makes you laugh?",
          "ph": "It's … who …",
          "ex": "It's my brother, who tells funny stories."
        }
      ]
    }
  }
};
