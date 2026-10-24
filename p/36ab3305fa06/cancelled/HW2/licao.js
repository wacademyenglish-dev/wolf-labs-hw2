/* CANCELLED · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: be allowed to / entitled to / supposed to. B1: nenhum português. Só live-* escuras. */
window.HW2 = {
  "id": "cancelled",
  "titulo": "Cancelled",
  "nivel": "B1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/36ab3305fa06/cancelled/img/live-capa.webp",
  "alvo": "be allowed to (permission), be entitled to (a right), be supposed to (the plan or the rule); past: was supposed to; never entitled without to, allow without -ed, am supposed to for the past",
  "abrir": "Have you ever had a flight, a bus or a class cancelled on you?",
  "fecho": "<b>be entitled to</b> = a right: <i>I'm entitled to a refund.</i> <b>be allowed to</b> = permission: <i>We aren't allowed to leave.</i> <b>be supposed to</b> = the plan or rule: <i>I was supposed to fly at eight.</i> Past plan: <b>was</b> supposed to.",
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
      "sub": "Mia and Leo about a cancelled flight. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/36ab3305fa06/cancelled/img/live-capa.webp",
      "leg": "The airport at night",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, my flight is cancelled. I was supposed to leave at eight."
        },
        {
          "quem": "mia",
          "t": "Oh no. Are you entitled to anything?"
        },
        {
          "quem": "leo",
          "t": "Yes. I'm entitled to a hotel and a meal, because it was the airline's problem."
        },
        {
          "quem": "mia",
          "t": "And are you allowed to change the flight for free?"
        },
        {
          "quem": "leo",
          "t": "Yes. They aren't allowed to charge me. I'm going to rebook for tomorrow morning."
        },
        {
          "quem": "mia",
          "t": "Where are you supposed to wait?"
        },
        {
          "quem": "leo",
          "t": "At gate twenty-seven. We aren't allowed to leave until the agent calls us."
        },
        {
          "quem": "mia",
          "t": "OK. Send me a photo of the board. I was supposed to pick you up, but I'll wait."
        },
        {
          "quem": "leo",
          "t": "Thanks. I'll text you at midnight."
        }
      ],
      "perguntas": [
        {
          "q": "What was Leo supposed to do at eight?",
          "op": [
            "Leave on a flight",
            "Pick up Mia",
            "Meet an agent"
          ],
          "a": 0,
          "por": "I was supposed to leave at eight."
        },
        {
          "q": "What is Leo entitled to?",
          "op": [
            "A hotel and a meal",
            "A free ticket to Paris",
            "Nothing"
          ],
          "a": 0,
          "por": "I'm entitled to a hotel and a meal."
        },
        {
          "q": "What aren't they allowed to do?",
          "op": [
            "Charge him for the change",
            "Rebook him",
            "Call him"
          ],
          "a": 0,
          "por": "They aren't allowed to charge me."
        }
      ]
    },
    "out": {
      "sub": "Three sentences from the airport. Hear it, then say it.",
      "frases": [
        {
          "t": "I was supposed to fly at eight, but my flight was cancelled.",
          "img": "https://wolf-labs.pages.dev/p/36ab3305fa06/cancelled/img/live-capa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "Am I entitled to a hotel tonight?",
          "img": "https://wolf-labs.pages.dev/p/36ab3305fa06/cancelled/img/live-a.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "We aren't allowed to leave the gate area.",
          "img": "https://wolf-labs.pages.dev/p/36ab3305fa06/cancelled/img/live-capa.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "allowed, entitled or supposed? Four quick ones.",
      "regra": "<b>entitled to</b> = a right · <b>allowed to</b> = permission · <b>supposed to</b> = the plan · past plan: <b>was supposed to</b>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "We aren't allowed to leave the gate area.",
          "aceita": [],
          "d": "Hint: <b>aren't allowed to</b> + plain verb."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is missing.",
          "mostra": "I'm entitled a hotel tonight.",
          "r": "I'm entitled to a hotel tonight.",
          "aceita": [],
          "d": "Hint: <b>entitled to</b> + noun."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "We are allow to change the flight.",
          "r": "We are allowed to change the flight.",
          "aceita": [],
          "d": "Hint: <b>be allowed</b>: the verb needs <b>-ed</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: the plan was in the past.",
          "mostra": "I am supposed to fly yesterday.",
          "r": "I was supposed to fly yesterday.",
          "aceita": [],
          "d": "Hint: yesterday = past, so <b>was supposed to</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/36ab3305fa06/cancelled/img/live-a.webp",
      "leg": "A suitcase on an empty bench",
      "pede": "Look at the picture: a suitcase on an empty bench. Write 2 or 3 sentences: what you <b>were supposed to</b> do today, and one thing you are <b>allowed to</b> or <b>entitled to</b> do.",
      "ph": "I was supposed to …",
      "ex": "I was supposed to study tonight, but my class is cancelled. I'm allowed to stay home. I'm entitled to a refund for the class."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What were you supposed to do last weekend, but didn't?",
          "ph": "I was supposed to …",
          "ex": "I was supposed to clean my room, but I slept all day."
        },
        {
          "q": "What are you allowed to do at your job or school that surprises people?",
          "ph": "I'm allowed to …",
          "ex": "I'm allowed to work from home on Fridays."
        }
      ]
    }
  }
};
