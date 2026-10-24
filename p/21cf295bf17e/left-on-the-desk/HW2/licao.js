/* LEFT ON THE DESK · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: reduced relative clauses (-ing / -ed). B2: nenhum português. */
window.HW2 = {
  "id": "left-on-the-desk",
  "titulo": "Left on the Desk",
  "nivel": "B2",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/21cf295bf17e/left-on-the-desk/img/live-luminaria.webp",
  "alvo": "reduced relative clauses: cut who / which / that + BE and nothing else; -ing when the noun does the action (the client waiting in reception), -ed / past participle when the noun receives it (the report left on the desk); no BE, no cut (the woman who called you)",
  "abrir": "Look at your desk right now. What is the oldest thing on it?",
  "fecho": "<b>Cut who / which / that + BE</b>, nothing else. <b>-ing</b>: the noun does it (<i>the client waiting in reception</i>). <b>-ed</b>: the noun receives it (<i>the report left on the desk</i>). No BE, nothing to cut: <i>the woman who called you</i>.",
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
  "rate": "-10%",
  "rodadas": {
    "listen": {
      "sub": "Mia hands over her desk to Leo before a nine o'clock meeting. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/21cf295bf17e/left-on-the-desk/img/live-luminaria.webp",
      "leg": "Papers under a desk lamp",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, thanks for coming early. The report left on my desk needs a signature before nine."
        },
        {
          "quem": "leo",
          "t": "The one written by the new intern?"
        },
        {
          "quem": "mia",
          "t": "Yes. And the client waiting in reception wants a date for the launch."
        },
        {
          "quem": "leo",
          "t": "Who is the woman standing next to him?"
        },
        {
          "quem": "mia",
          "t": "His lawyer. She's the one making the decisions."
        },
        {
          "quem": "leo",
          "t": "What about the files sent on Friday?"
        },
        {
          "quem": "mia",
          "t": "They're missing two pages. Everyone working on the project knows, but nobody has told the client."
        },
        {
          "quem": "leo",
          "t": "And the invoice approved last week?"
        },
        {
          "quem": "mia",
          "t": "Still unpaid. Anyone asking about it should talk to Marta."
        },
        {
          "quem": "leo",
          "t": "Got it. Nine o'clock. Wish me luck."
        }
      ],
      "perguntas": [
        {
          "q": "What needs a signature before nine?",
          "op": [
            "The report left on Mia's desk",
            "The files sent on Friday",
            "The invoice approved last week"
          ],
          "a": 0,
          "por": "The report left on my desk needs a signature before nine."
        },
        {
          "q": "Who is the woman standing next to the client?",
          "op": [
            "His lawyer",
            "The new intern",
            "Marta"
          ],
          "a": 0,
          "por": "His lawyer. She's the one making the decisions."
        },
        {
          "q": "What is wrong with the files sent on Friday?",
          "op": [
            "They are missing two pages",
            "They have no signature",
            "They went to the wrong client"
          ],
          "a": 0,
          "por": "They're missing two pages."
        }
      ]
    },
    "out": {
      "sub": "Three sentences with reduced relative clauses. Hear it, then say it.",
      "frases": [
        {
          "t": "The report left on my desk needs a signature.",
          "img": "https://wolf-labs.pages.dev/p/21cf295bf17e/left-on-the-desk/img/live-luminaria.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "The client waiting in reception wants a date.",
          "img": "https://wolf-labs.pages.dev/p/21cf295bf17e/left-on-the-desk/img/live-sala.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "Anyone asking about the invoice should talk to Marta.",
          "img": "https://wolf-labs.pages.dev/p/21cf295bf17e/left-on-the-desk/img/live-mesa.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "-ing, -ed, or no cut at all. Four quick ones.",
      "regra": "<b>Cut who / which / that + BE</b> · <b>-ing</b> = the noun does it · <b>-ed</b> = the noun receives it · no BE = nothing to cut",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "The woman standing next to him is his lawyer.",
          "aceita": [],
          "d": "Hint: the noun does the action, so <b>-ing</b> right after it."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: the form is wrong.",
          "mostra": "The report writing by the intern is excellent.",
          "r": "The report written by the intern is excellent.",
          "aceita": [
            "The report that was written by the intern is excellent.",
            "The report which was written by the intern is excellent."
          ],
          "d": "Hint: the report receives the action, so use the past participle: <b>written</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: cut both words or none.",
          "mostra": "The people who working here are friendly.",
          "r": "The people working here are friendly.",
          "aceita": [
            "The people who work here are friendly."
          ],
          "d": "Hint: cut <b>who</b> and keep -ing. Never <i>who working</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: there is no BE to cut.",
          "mostra": "The woman called you is my manager.",
          "r": "The woman who called you is my manager.",
          "aceita": [
            "The woman that called you is my manager."
          ],
          "d": "Hint: <b>who called</b> has no BE, so keep <b>who</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/21cf295bf17e/left-on-the-desk/img/live-mesa.webp",
      "leg": "A desk by a window with a lamp, a cup and one page",
      "pede": "Look at the picture: a desk by a window, a lamp, a cup and one page left on the table. Describe the scene in 2 or 3 short, exact sentences. Use <b>-ing</b> or <b>-ed</b> after the noun, without who / which / that.",
      "ph": "The page left on the desk …",
      "ex": "The page left on the desk is a handover note. The cup standing beside it is still warm, so the person working here left recently."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "Describe one object near you now. Use -ing or -ed right after the noun.",
          "ph": "The … left / placed / standing … is …",
          "ex": "The mug left on my desk has been there since Monday."
        },
        {
          "q": "Think of a plan or decision at work or school that people are discussing. Describe it with -ed or -ing.",
          "ph": "The plan agreed / The people discussing …",
          "ex": "The plan agreed last month is working, but the people managing it want more time."
        }
      ]
    }
  }
};
