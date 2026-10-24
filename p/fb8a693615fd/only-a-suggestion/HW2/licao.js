/* ONLY A SUGGESTION · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: suggest / recommend / insist e as regências. B2: nenhum português. */
window.HW2 = {
  "id": "only-a-suggestion",
  "titulo": "Only a Suggestion",
  "nivel": "B2",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/fb8a693615fd/only-a-suggestion/img/live-sala.webp",
  "alvo": "suggest / recommend / insist and their patterns: no person right after suggest or recommend (that + person + plain verb, or -ing); insist on + -ing; explain / mention + thing + to + person; tell / ask / remind / advise + person + to + verb",
  "abrir": "What would you suggest to improve a meeting?",
  "fecho": "<b>suggest / recommend</b> have no seat for a person: <i>I suggest that Paulo send it</i> (plain verb, no -s) or <i>I suggest sending it.</i> <b>insist on</b> + -ing. <b>explain / mention</b> + thing + <b>to</b> + person: <i>I explained the delay to him.</i> <b>tell / ask / remind / advise</b> take the person at once: <i>I asked Marina to send it.</i>",
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
      "sub": "Mia and Leo sort out a problem at the office. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/fb8a693615fd/only-a-suggestion/img/live-corredor.webp",
      "leg": "An office corridor",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, the printer broke again. I suggest that we ask someone to fix it properly."
        },
        {
          "quem": "mia",
          "t": "I'd recommend that Paulo look at it. He fixed it last spring."
        },
        {
          "quem": "leo",
          "t": "Good idea. Should I tell him to come today?"
        },
        {
          "quem": "mia",
          "t": "Don't tell him. Just suggest that he stop by after lunch. He hates being given orders."
        },
        {
          "quem": "leo",
          "t": "Fair enough. I'll ask Marina to book a technician too, just in case."
        },
        {
          "quem": "mia",
          "t": "And please explain the problem to the manager. She insisted on seeing a report."
        },
        {
          "quem": "leo",
          "t": "I mentioned the delay to her yesterday, but I'll send the details. I suggest sending them before five."
        },
        {
          "quem": "mia",
          "t": "Perfect. I'll remind Ines to update the shared sheet."
        }
      ],
      "perguntas": [
        {
          "q": "Who does Mia recommend for the printer?",
          "op": [
            "Paulo",
            "Marina",
            "Ines"
          ],
          "a": 0,
          "por": "I'd recommend that Paulo look at it."
        },
        {
          "q": "Why doesn't Mia want Leo to tell Paulo to come?",
          "op": [
            "He hates being given orders",
            "He is on holiday",
            "He is the manager"
          ],
          "a": 0,
          "por": "He hates being given orders."
        },
        {
          "q": "What did the manager insist on?",
          "op": [
            "Seeing a report",
            "Hiring a technician",
            "Fixing the sheet"
          ],
          "a": 0,
          "por": "She insisted on seeing a report."
        }
      ]
    },
    "out": {
      "sub": "Three lines from a meeting. Hear it, then say it.",
      "frases": [
        {
          "t": "I suggest that Paulo look at the printer after lunch.",
          "img": "https://wolf-labs.pages.dev/p/fb8a693615fd/only-a-suggestion/img/live-corredor.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "Marina explained the delay to the client.",
          "img": "https://wolf-labs.pages.dev/p/fb8a693615fd/only-a-suggestion/img/live-caderno.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "I'd recommend sending the report before five.",
          "img": "https://wolf-labs.pages.dev/p/fb8a693615fd/only-a-suggestion/img/live-sala.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Who is in the sentence? Four quick ones.",
      "regra": "<b>suggest / recommend that</b> + person + plain verb · <b>suggest + -ing</b> · <b>insist on + -ing</b> · <b>explain + thing + to + person</b>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "I suggested that Paulo send the revised quote.",
          "aceita": [],
          "d": "Hint: <b>suggested that</b> + person + plain verb: no <b>to</b>, no <b>-s</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: the pattern is wrong.",
          "mostra": "She suggested me to call the supplier.",
          "r": "She suggested that I call the supplier.",
          "aceita": [
            "She suggested I call the supplier.",
            "She suggested calling the supplier."
          ],
          "d": "Hint: <b>suggest</b> has no seat for a person: use <b>that</b> + person + plain verb."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: the pattern is wrong.",
          "mostra": "He insisted to pay for lunch.",
          "r": "He insisted on paying for lunch.",
          "aceita": [],
          "d": "Hint: <b>insist</b> + <b>on</b> + -ing."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: the pattern is wrong.",
          "mostra": "I explained him the delay.",
          "r": "I explained the delay to him.",
          "aceita": [],
          "d": "Hint: <b>explain</b> + the thing + <b>to</b> + the person."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/fb8a693615fd/only-a-suggestion/img/live-ata.webp",
      "leg": "The minutes of a meeting",
      "pede": "Look at the picture: the minutes of a meeting. Write 2 or 3 sentences for the minutes: one suggestion with a person, one idea with no owner, and one thing somebody insisted on. Use <b>suggest that</b>, <b>suggest + -ing</b> and <b>insist on</b>.",
      "ph": "Marina suggested that … / We suggested …ing …",
      "ex": "Marina suggested that Hugo send the invoice today. Ines suggested moving the meeting to Friday. Paulo insisted on checking the numbers himself."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What would you suggest to improve meetings at your work, or at a place you know? Who should do it?",
          "ph": "I suggest that … I'd also recommend …",
          "ex": "I suggest that the team leader send the agenda a day before. I'd also recommend ending every meeting with a list of names and tasks."
        },
        {
          "q": "Think of a piece of advice you got lately. Who gave it, and what exactly did they say?",
          "ph": "… advised me to … / … suggested that I …",
          "ex": "My cousin advised me to save more money. She also suggested that I open a second account."
        }
      ]
    }
  }
};
