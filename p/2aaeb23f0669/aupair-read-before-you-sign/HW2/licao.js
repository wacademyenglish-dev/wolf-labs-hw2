/* AU PAIR · LIÇÃO DE CASA 2.0 (24/10/2026)
   Motor: hw2.js. JSON puro depois do "=". Falas originais. */
window.HW2 = {
  "id": "aupair-read-before-you-sign",
  "titulo": "Read Before You Sign",
  "nivel": "B1",
  "minutos": 10,
  "capa": "../img/live-capa.webp",
  "alvo": "must / must not / don't have to / can for rules in an agreement; up to = the maximum, per week = every week; never must to, until for a limit, don't have to for something forbidden",
  "abrir": "Have you ever signed something without reading it?",
  "fecho": "<b>must</b> = required · <b>must not</b> = forbidden · <b>don't have to</b> = not required · <b>up to</b> = the maximum: <i>up to 45 hours per week.</i> After them, the plain verb: never <i>must to</i>.",
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
      "sub": "Mia and Leo at the dining table. A new scene, about one minute.",
      "img": "../img/live-conversa.webp",
      "leg": "A table with papers and a lamp",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, you look serious. What are you reading?"
        },
        {
          "quem": "mia",
          "t": "The Millers' agreement. I have to read it carefully before I sign."
        },
        {
          "quem": "leo",
          "t": "Good. What does it say about hours?"
        },
        {
          "quem": "mia",
          "t": "I can work up to forty-five hours per week, and no more than ten hours per day."
        },
        {
          "quem": "leo",
          "t": "And days off?"
        },
        {
          "quem": "mia",
          "t": "One and a half days per week. And here is a rule: I must not use my phone while I'm driving."
        },
        {
          "quem": "leo",
          "t": "That's fair. Is there a curfew?"
        },
        {
          "quem": "mia",
          "t": "Yes, on school nights I must be home by eleven. But I don't have to be home early on weekends."
        },
        {
          "quem": "leo",
          "t": "Is there any line you don't understand?"
        },
        {
          "quem": "mia",
          "t": "This one: light housework. I will ask them what it means before I sign."
        }
      ],
      "perguntas": [
        {
          "q": "What is the weekly limit?",
          "op": [
            "Up to forty-five hours",
            "Up to ten hours",
            "There is no limit"
          ],
          "a": 0,
          "por": "I can work up to forty-five hours per week."
        },
        {
          "q": "What must Mia not do while driving?",
          "op": [
            "Use her phone",
            "Listen to music",
            "Talk to the kids"
          ],
          "a": 0,
          "por": "I must not use my phone while I'm driving."
        },
        {
          "q": "What will Mia do about the line light housework?",
          "op": [
            "Ask what it means before she signs",
            "Sign it anyway",
            "Delete the line"
          ],
          "a": 0,
          "por": "I will ask them what it means before I sign."
        }
      ]
    },
    "out": {
      "sub": "Three sentences before you sign. Hear it, then say it.",
      "frases": [
        {
          "t": "I must read every line before I sign.",
          "img": "../img/live-capa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "I can work up to forty-five hours per week.",
          "img": "../img/live-conversa.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "Could you explain this line to me, please?",
          "img": "../img/live-capa.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "must, must not, up to. Four quick ones.",
      "regra": "<b>must</b> = required · <b>must not</b> = forbidden · <b>don't have to</b> = not required · <b>up to</b> = the maximum · plain verb after them, never <b>must to</b>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "You must not use your phone while driving.",
          "aceita": [],
          "d": "Hint: <b>must not</b> + plain verb: use."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "She must to be home by eleven.",
          "r": "She must be home by eleven.",
          "aceita": [
            "She has to be home by eleven."
          ],
          "d": "Hint: after <b>must</b>, the verb comes straight, with no <b>to</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "The family pays until $500 for classes.",
          "r": "The family pays up to $500 for classes.",
          "aceita": [],
          "d": "Hint: a maximum amount is <b>up to</b>. <i>Until</i> is for time."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: this is NOT allowed.",
          "mostra": "You don't have to text and drive.",
          "r": "You must not text and drive.",
          "aceita": [
            "You mustn't text and drive.",
            "You can't text and drive.",
            "You cannot text and drive."
          ],
          "d": "Hint: <b>don't have to</b> = not required. If it is forbidden, use <b>must not</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "../img/live-capa.webp",
      "leg": "A notebook, a pen and a cup of tea",
      "pede": "Look at the picture: a notebook, a pen and a cup of tea, the moment before you sign. Write 2 or 3 sentences: one rule you must follow, one thing you don't have to do, and one question you will ask before you sign.",
      "ph": "I must … I don't have to …",
      "ex": "I must be home by eleven on school nights. I don't have to work on weekends. Before I sign, I will ask what light housework means."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "Which line in an agreement would you ask about first? Why?",
          "ph": "I would ask about … because …",
          "ex": "I would ask about the hours, because I want a clear limit per week."
        },
        {
          "q": "A family wants you to work fifty hours per week. What do you say?",
          "ph": "I'm sorry, but …",
          "ex": "I'm sorry, but the limit is forty-five hours per week."
        }
      ]
    }
  }
};
