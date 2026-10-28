/* SAFETY FIRST · LIÇÃO DE CASA 2.0 (24/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: must / mustn't / don't have to (prevenção em casa). Curso Au Pair. B1: nenhum português. Só prevenção, sem acidentes. */
window.HW2 = {
  "id": "safety-first",
  "titulo": "Safety First",
  "nivel": "B1",
  "minutos": 10,
  "capa": "../img/live-conversa.webp",
  "alvo": "must (necessary), mustn't (forbidden), don't have to (not necessary); must + plain verb, no to, no -s; Do I have to ...? never Do I must; never mustn't for something that is only not necessary",
  "abrir": "What is one safety rule you know for children?",
  "fecho": "<b>must</b> = necessary: <i>You must close the gate.</i> <b>mustn't</b> = forbidden: <i>Kids mustn't touch the stove.</i> <b>don't have to</b> = not necessary: <i>You don't have to cook for us.</i> After must, the plain verb. The question: <i>Do I have to ...?</i>",
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
      "sub": "Leo shows Mia the safety rules at home. A new scene, about one minute.",
      "img": "../img/live-conversa.webp",
      "leg": "A baby gate at the top of the stairs",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Welcome, Mia. Let me show you our house rules. First, the stairs. You must close the gate every night."
        },
        {
          "quem": "mia",
          "t": "OK. Do I have to close it in the morning, too?"
        },
        {
          "quem": "leo",
          "t": "No, you don't have to close it in the morning, because you are with the kids."
        },
        {
          "quem": "mia",
          "t": "And the kitchen?"
        },
        {
          "quem": "leo",
          "t": "The kids mustn't touch the stove, and you mustn't leave a pot on it alone."
        },
        {
          "quem": "mia",
          "t": "Got it. What about the car?"
        },
        {
          "quem": "leo",
          "t": "Everyone must wear a seat belt, every trip, even a short one."
        },
        {
          "quem": "mia",
          "t": "And near the street?"
        },
        {
          "quem": "leo",
          "t": "Children must hold your hand when you cross the street. And you mustn't look at your phone."
        },
        {
          "quem": "mia",
          "t": "Understood. Is there anything I don't have to do?"
        },
        {
          "quem": "leo",
          "t": "Yes. You don't have to cook dinner for us. Only for the kids."
        }
      ],
      "perguntas": [
        {
          "q": "When must Mia close the stair gate?",
          "op": [
            "Every night",
            "Only in the morning",
            "Never"
          ],
          "a": 0,
          "por": "You must close the gate every night."
        },
        {
          "q": "What must the kids do when they cross the street?",
          "op": [
            "Hold Mia's hand",
            "Run to the other side",
            "Use a phone"
          ],
          "a": 0,
          "por": "Children must hold your hand when you cross the street."
        },
        {
          "q": "What doesn't Mia have to do?",
          "op": [
            "Cook dinner for the parents",
            "Wear a seat belt",
            "Hold the kids' hands"
          ],
          "a": 0,
          "por": "You don't have to cook dinner for us."
        }
      ]
    },
    "out": {
      "sub": "Three rules for a safe home. Hear it, then say it.",
      "frases": [
        {
          "t": "You must close the gate every night.",
          "img": "../img/live-conversa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "Children mustn't run on the stairs.",
          "img": "../img/live-conversa.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "You don't have to close it in the morning.",
          "img": "../img/live-conversa.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "must, mustn't or don't have to? Four quick ones.",
      "regra": "<b>must</b> = necessary · <b>mustn't</b> = forbidden · <b>don't have to</b> = not necessary · must + plain verb · <b>Do I have to ...?</b>",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "You must close the gate every night.",
          "aceita": [],
          "d": "Hint: <b>must</b> + the plain verb (close)."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "Children must to wear a seat belt.",
          "r": "Children must wear a seat belt.",
          "aceita": [],
          "d": "Hint: after <b>must</b>, the plain verb. No <i>to</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "You mustn't clean the whole house.",
          "r": "You don't have to clean the whole house.",
          "aceita": [
            "You do not have to clean the whole house."
          ],
          "d": "Hint: it is not necessary, but it is not forbidden: <b>don't have to</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: make the question correct.",
          "mostra": "Do I must close the gate?",
          "r": "Do I have to close the gate?",
          "aceita": [
            "Must I close the gate?"
          ],
          "d": "Hint: the question with <b>do</b> needs <b>have to</b>, not <i>must</i>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "../img/live-conversa.webp",
      "leg": "A baby gate at the top of the stairs",
      "pede": "Look at the picture: a baby gate at the top of the stairs. Write 2 or 3 safety rules for the kids at home. Use <b>must</b>, <b>mustn't</b> or <b>don't have to</b>.",
      "ph": "You must … Children mustn't …",
      "ex": "You must close the gate at night. Children mustn't play on the stairs. You don't have to close it in the day."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What is one rule in your house that people must follow?",
          "ph": "People must … They mustn't …",
          "ex": "People must take off their shoes. They mustn't shout at night."
        },
        {
          "q": "What don't you have to do on Sundays?",
          "ph": "I don't have to …",
          "ex": "I don't have to wake up early on Sundays."
        }
      ]
    }
  }
};
