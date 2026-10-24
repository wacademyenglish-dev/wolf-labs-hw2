/* MY PASSPORT IS GONE · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: past continuous x past simple com when / while. B1: nenhum portugues. Imagens live-a, live-b, live-capa (escuras, combinam). */
window.HW2 = {
  "id": "my-passport-is-gone",
  "titulo": "My Passport Is Gone",
  "nivel": "B1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/3cc2cec80192/my-passport-is-gone/img/live-capa.webp",
  "alvo": "past continuous for the scene + past simple for the short event, with when / while: I was ordering a coffee when a man bumped into me; While I was looking at the menu, someone opened my backpack; never 'I was pay', 'While I paid' or a long -ing for a one-second action",
  "abrir": "What were you doing at this time yesterday?",
  "fecho": "<b>was / were + -ing</b> = the scene, what was in progress. <b>Past simple</b> = the short event that interrupted it. <i>I was ordering a coffee <u>when</u> a man bumped into me.</i> <i><u>While</u> I was looking at the menu, someone opened my backpack.</i> Use <b>while</b> + the long action, <b>when</b> + the short one.",
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
      "sub": "Mia reports a stolen passport to Leo, a police officer. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/3cc2cec80192/my-passport-is-gone/img/live-capa.webp",
      "leg": "A quiet street in London at night",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Good afternoon. Tell me what happened, from the start."
        },
        {
          "quem": "mia",
          "t": "I was ordering a coffee when a man bumped into me."
        },
        {
          "quem": "leo",
          "t": "Did you notice anything strange?"
        },
        {
          "quem": "mia",
          "t": "Not really. While I was looking at the menu, someone opened my backpack."
        },
        {
          "quem": "leo",
          "t": "And you didn't feel it?"
        },
        {
          "quem": "mia",
          "t": "No. I was talking to the cashier, so I wasn't paying attention."
        },
        {
          "quem": "leo",
          "t": "When did you notice the passport was gone?"
        },
        {
          "quem": "mia",
          "t": "When I was paying, I looked in my bag, and it wasn't there."
        },
        {
          "quem": "leo",
          "t": "When is your flight?"
        },
        {
          "quem": "mia",
          "t": "Tomorrow morning. Can the consulate help me today?"
        },
        {
          "quem": "leo",
          "t": "They close at four, so let's hurry. I'll write the report while you call them."
        }
      ],
      "perguntas": [
        {
          "q": "What was Mia doing when the man bumped into her?",
          "op": [
            "Ordering a coffee",
            "Paying the bill",
            "Reading a map"
          ],
          "a": 0,
          "por": "I was ordering a coffee when a man bumped into me."
        },
        {
          "q": "When did Mia notice the passport was gone?",
          "op": [
            "When she was paying",
            "When she was ordering",
            "When she was leaving"
          ],
          "a": 0,
          "por": "When I was paying, I looked in my bag, and it wasn't there."
        },
        {
          "q": "What will Leo do while Mia calls the consulate?",
          "op": [
            "Write the report",
            "Watch the camera",
            "Look for the man"
          ],
          "a": 0,
          "por": "I'll write the report while you call them."
        }
      ]
    },
    "out": {
      "sub": "Three sentences about what was happening. Hear it, then say it.",
      "frases": [
        {
          "t": "I was ordering a coffee when a man bumped into me.",
          "au": "audio/say1.mp3"
        },
        {
          "t": "While I was looking at the menu, someone opened my backpack.",
          "img": "https://wolf-labs.pages.dev/p/3cc2cec80192/my-passport-is-gone/img/live-a.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "It was raining while we were walking along the street.",
          "img": "https://wolf-labs.pages.dev/p/3cc2cec80192/my-passport-is-gone/img/live-capa.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "was / were + -ing, and when / while. Four quick ones.",
      "regra": "<b>was / were + -ing</b> = the scene · <b>past simple</b> = the short event · <b>while</b> + long action · <b>when</b> + short action.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "While I was talking, someone took my bag.",
          "aceita": [],
          "d": "Hint: <b>while</b> + <b>was talking</b>, then the short event."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "I was pay when he bumped into me.",
          "r": "I was paying when he bumped into me.",
          "aceita": [],
          "d": "Hint: <b>was</b> + verb-<b>ing</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "While I paid, someone opened my bag.",
          "r": "While I was paying, someone opened my bag.",
          "aceita": [],
          "d": "Hint: <b>while</b> goes with the long action: <b>was paying</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "We were walking when it was starting to rain.",
          "r": "We were walking when it started to rain.",
          "aceita": [
            "We were walking when it began to rain."
          ],
          "d": "Hint: the short event that interrupts is past simple: <b>started</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/3cc2cec80192/my-passport-is-gone/img/live-b.webp",
      "leg": "A notebook and a pen on a dark desk",
      "pede": "Look at the picture: a notebook and a pen, ready for a statement. Write 2 or 3 sentences about a moment when something happened. It can be real or invented. Use <b>was / were + -ing</b> and a past simple verb with <b>when</b> or <b>while</b>.",
      "ph": "I was … when …",
      "ex": "I was waiting for a bus when my phone rang. While I was looking for it in my bag, the bus arrived. I missed it!"
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What were you doing at eight o'clock last night?",
          "ph": "At eight, I was …",
          "ex": "At eight, I was cooking dinner, and my sister called."
        },
        {
          "q": "Tell me about a time something surprising happened while you were doing something normal.",
          "ph": "I was … when …",
          "ex": "I was walking to work when I met an old friend."
        }
      ]
    }
  }
};
