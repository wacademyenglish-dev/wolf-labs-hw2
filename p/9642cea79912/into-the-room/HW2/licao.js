/* INTO THE ROOM · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: movement prepositions: into, out of, onto, off, through, across, past. A2: dicas em português só nas notas (d). */
window.HW2 = {
  "id": "into-the-room",
  "titulo": "Into the Room",
  "nivel": "A2",
  "minutos": 10,
  "alvo": "movement prepositions: into, out of, onto, off, through, across, past; in = place, into = path; no 'enter in', no 'out the house', get off the bus",
  "abrir": "How do you get from your bed to your kitchen?",
  "fecho": "<b>In</b> is a place, <b>into</b> is the trip to the inside: <i>She walked into the room.</i> <b>Out of</b> = two words. Buses and trains: <i>get on, get off</i>. Never <i>enter in</i>.",
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
      "sub": "Mia and Leo look for lost keys. A new scene, about 45 seconds.",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, I can't find my keys. I looked in the kitchen, but they weren't there."
        },
        {
          "quem": "leo",
          "t": "Let's go back. You came in through the front door, right?"
        },
        {
          "quem": "mia",
          "t": "Yes. I walked past the kitchen and went into my bedroom."
        },
        {
          "quem": "leo",
          "t": "And then?"
        },
        {
          "quem": "mia",
          "t": "I came out of the bedroom and walked across the hall to the bathroom."
        },
        {
          "quem": "leo",
          "t": "Maybe you left them in the bathroom."
        },
        {
          "quem": "mia",
          "t": "No, wait. I put my bag onto the bed. The keys are in the bag!"
        },
        {
          "quem": "leo",
          "t": "Great. Go back into the bedroom and check."
        },
        {
          "quem": "mia",
          "t": "Found them! Thanks, Leo."
        }
      ],
      "perguntas": [
        {
          "q": "Which room did Mia walk past?",
          "op": [
            "The kitchen",
            "The bathroom",
            "The bedroom"
          ],
          "a": 0,
          "por": "I walked past the kitchen and went into my bedroom."
        },
        {
          "q": "How did Mia get to the bathroom?",
          "op": [
            "She walked across the hall",
            "She went through the kitchen",
            "She walked past the bed"
          ],
          "a": 0,
          "por": "I walked across the hall to the bathroom."
        },
        {
          "q": "Where were the keys?",
          "op": [
            "In her bag",
            "In the bathroom",
            "In the kitchen"
          ],
          "a": 0,
          "por": "I put my bag onto the bed. The keys are in the bag!"
        }
      ]
    },
    "out": {
      "sub": "Three paths. Hear it, then say it.",
      "frases": [
        {
          "t": "She walked into the room.",
          "au": "audio/say1.mp3"
        },
        {
          "t": "He went out of the house.",
          "au": "audio/say2.mp3"
        },
        {
          "t": "The cat jumped onto the table.",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Place or path? Four quick ones.",
      "regra": "<b>into</b> = the path to the inside · <b>out of</b> = two words · <b>enter</b> takes no preposition · <b>get on / get off</b> a bus or train.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "They walked across the park to the bakery.",
          "aceita": [],
          "d": "Dica: <b>across</b> = de um lado ao outro, por cima."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: enter has no preposition.",
          "mostra": "She entered in the room.",
          "r": "She entered the room.",
          "aceita": [
            "She went into the room."
          ],
          "d": "Dica: <b>enter</b> já tem o caminho. Ou: <b>went into</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: out needs of.",
          "mostra": "He went out the house.",
          "r": "He went out of the house.",
          "aceita": [],
          "d": "Dica: <b>out of</b> são duas palavras."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: it is a bus.",
          "mostra": "I got out the bus.",
          "r": "I got off the bus.",
          "aceita": [],
          "d": "Dica: ônibus, trem, avião: <b>get on / get off</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "pede": "Write 2 or 3 sentences: how you go from your bed to your kitchen in the morning. Use <b>into</b>, <b>out of</b>, <b>through</b>, <b>across</b> or <b>past</b>.",
      "ph": "I get out of bed and …",
      "ex": "I get out of bed and walk across my room. Then I go through the hall and into the kitchen."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "How do you get from your front door to the street?",
          "ph": "I go out of …",
          "ex": "I go out of my apartment, take the elevator and walk out of the building."
        },
        {
          "q": "What do you walk past on your way to work or school?",
          "ph": "I walk past …",
          "ex": "I walk past a bakery and a small park."
        }
      ]
    }
  }
};
