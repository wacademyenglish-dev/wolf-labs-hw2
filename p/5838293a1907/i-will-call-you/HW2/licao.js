/* I WILL CALL YOU · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: will / going to / Shall I. B1: nenhum português. */
window.HW2 = {
  "id": "i-will-call-you",
  "titulo": "I Will Call You",
  "nivel": "B1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/5838293a1907/i-will-call-you/img/live-conversa.webp",
  "alvo": "will for promises (I'll be there, I won't forget), offers (I'll carry it) and decisions made now (The phone is ringing: I'll get it); going to for plans already made; Shall I ...? for offers",
  "abrir": "Think of a friend who needs help this week. What could you offer to do?",
  "fecho": "<b>will</b> for a promise, an offer or a decision made now: <i>I'll carry it. I won't be late.</i> <b>Going to</b> for a plan made before: <i>I'm going to visit my aunt.</i> <b>Shall I ...?</b> to offer: <i>Shall I call the florist?</i>",
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
      "sub": "Mia and Leo in a kitchen, the night before a wedding. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/5838293a1907/i-will-call-you/img/live-conversa.webp",
      "leg": "A phone and a glass of water at night",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, the bakery just called. The cake will be ready at noon, not at ten."
        },
        {
          "quem": "leo",
          "t": "Don't worry. I'll pick it up at noon. I promise."
        },
        {
          "quem": "mia",
          "t": "Thank you! But the flowers are yellow, and Bia wanted white."
        },
        {
          "quem": "leo",
          "t": "Shall I call the florist? She opens at eight."
        },
        {
          "quem": "mia",
          "t": "Yes, please. Are you going to wear your grey suit tomorrow?"
        },
        {
          "quem": "leo",
          "t": "Yes, I'm going to wear it. I bought it last month. Oh, my phone is ringing. I'll get it."
        },
        {
          "quem": "mia",
          "t": "Who is it?"
        },
        {
          "quem": "leo",
          "t": "It's the DJ. He's stuck in traffic. OK, I'll play the music myself. I have a great playlist."
        },
        {
          "quem": "mia",
          "t": "You're the best. I'm going to sing all night!"
        },
        {
          "quem": "leo",
          "t": "And I won't dance, I promise. I'll call you at seven."
        }
      ],
      "perguntas": [
        {
          "q": "When will the cake be ready?",
          "op": [
            "At noon",
            "At ten",
            "At eight"
          ],
          "a": 0,
          "por": "The cake will be ready at noon."
        },
        {
          "q": "What does Leo offer to do about the flowers?",
          "op": [
            "Call the florist",
            "Buy white flowers",
            "Pay for them"
          ],
          "a": 0,
          "por": "Shall I call the florist?"
        },
        {
          "q": "Why does Leo say he will play the music?",
          "op": [
            "The DJ is stuck in traffic",
            "He loves loud music",
            "The DJ is too slow"
          ],
          "a": 0,
          "por": "He's stuck in traffic. OK, I'll play the music myself."
        }
      ]
    },
    "out": {
      "sub": "Three sentences with promises and offers. Hear it, then say it.",
      "frases": [
        {
          "t": "Don't worry, I'll pick up the cake at noon.",
          "img": "https://wolf-labs.pages.dev/p/5838293a1907/i-will-call-you/img/live-conversa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "Shall I call the florist for you?",
          "img": "https://wolf-labs.pages.dev/p/5838293a1907/i-will-call-you/img/live-conversa.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "I'm going to wear my grey suit, but I won't dance.",
          "img": "https://wolf-labs.pages.dev/p/5838293a1907/i-will-call-you/img/live-conversa.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "will, going to, Shall I and won't. Four quick ones.",
      "regra": "<b>will</b> = promise, offer, decision now · <b>going to</b> = plan made before · <b>Shall I ...?</b> = offer · <b>won't</b> = promise not to",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "Shall I carry the flowers to the car?",
          "aceita": [],
          "d": "Hint: <b>Shall I</b> + verb, to offer help."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: you decide right now.",
          "mostra": "The phone is ringing! I'm going to answer it.",
          "r": "The phone is ringing! I'll answer it.",
          "aceita": [
            "The phone is ringing! I will answer it."
          ],
          "d": "Hint: a decision at this moment uses <b>will</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: the plan was made last week.",
          "mostra": "I'll visit my aunt on Sunday.",
          "r": "I'm going to visit my aunt on Sunday.",
          "aceita": [
            "I am going to visit my aunt on Sunday."
          ],
          "d": "Hint: a plan made before uses <b>going to</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: make the promise correct.",
          "mostra": "I don't will be late, I promise.",
          "r": "I won't be late, I promise.",
          "aceita": [
            "I will not be late, I promise."
          ],
          "d": "Hint: the negative of <b>will</b> is <b>won't</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/5838293a1907/i-will-call-you/img/live-conversa.webp",
      "leg": "A phone and a glass of water on a bedside table",
      "pede": "Look at the picture: a phone and a glass of water on a bedside table, late at night. Write 2 or 3 sentences: a promise you will make to a friend, and something you are going to do tomorrow. Use <b>will</b>, <b>won't</b> and <b>going to</b>.",
      "ph": "I promise I'll … Tomorrow I'm going to …",
      "ex": "I promise I'll call you before nine. I won't forget. Tomorrow I'm going to wake up early and bake a cake."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "A friend is moving to a new flat on Saturday. What will you offer to do?",
          "ph": "I'll … / Shall I …?",
          "ex": "I'll carry the boxes. Shall I bring some pizza too?"
        },
        {
          "q": "What are you going to do tomorrow morning?",
          "ph": "I'm going to …",
          "ex": "I'm going to take a long walk and then answer my emails."
        }
      ]
    }
  }
};
