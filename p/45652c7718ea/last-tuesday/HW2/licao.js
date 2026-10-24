/* LAST TUESDAY · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: passado simples (didn't, Did, irregulares). A2: dicas em português só nas notas (d). */
window.HW2 = {
  "id": "last-tuesday",
  "titulo": "Last Tuesday",
  "nivel": "A2",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/45652c7718ea/last-tuesday/img/live-servidores.webp",
  "alvo": "past simple: -ed verbs (called, restarted) and irregular verbs (went, rang, got, lost, came, left); didn't + plain verb; Did + plain verb ...?; the past goes in one place only (never didn't received, never Did you called)",
  "abrir": "What did you do last Tuesday?",
  "fecho": "<b>Called, restarted</b>; irregular: <b>went, rang, got, lost, came, left</b>. No: <b>didn't</b> + plain verb: <i>I didn't receive it.</i> Question: <b>Did</b> + plain verb: <i>Did you call?</i> The past goes in <b>one</b> place only, never <i>didn't received</i>, never <i>Did you called</i>.",
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
      "sub": "Mia and Leo on Monday morning. A new scene, about 50 seconds.",
      "img": "https://wolf-labs.pages.dev/p/45652c7718ea/last-tuesday/img/live-abertura.webp",
      "leg": "A dark server room",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, what happened last Tuesday? I wasn't here."
        },
        {
          "quem": "leo",
          "t": "The lights went out at four. The phone rang ten times."
        },
        {
          "quem": "mia",
          "t": "Did you call the building?"
        },
        {
          "quem": "leo",
          "t": "Yes, I called them at ten past four. They didn't answer."
        },
        {
          "quem": "mia",
          "t": "And the server? Did it come back?"
        },
        {
          "quem": "leo",
          "t": "No, it didn't. Diego restarted it twice."
        },
        {
          "quem": "mia",
          "t": "Did the printer finish my report?"
        },
        {
          "quem": "leo",
          "t": "No. It stopped at page two. Then everybody left at five."
        },
        {
          "quem": "mia",
          "t": "Wow. Did anybody lose a file?"
        },
        {
          "quem": "leo",
          "t": "Ana lost one, but she found it on Wednesday."
        }
      ],
      "perguntas": [
        {
          "q": "What time did the lights go out?",
          "op": [
            "At four",
            "At five",
            "At nine"
          ],
          "a": 0,
          "por": "The lights went out at four."
        },
        {
          "q": "What did Diego do?",
          "op": [
            "He restarted the server twice",
            "He called the building",
            "He left at four"
          ],
          "a": 0,
          "por": "Diego restarted it twice."
        },
        {
          "q": "Who lost a file?",
          "op": [
            "Ana",
            "Diego",
            "Mia"
          ],
          "a": 0,
          "por": "Ana lost one, but she found it on Wednesday."
        }
      ]
    },
    "out": {
      "sub": "Three sentences about the blackout. Hear it, then say it.",
      "frases": [
        {
          "t": "The lights went out at four.",
          "img": "https://wolf-labs.pages.dev/p/45652c7718ea/last-tuesday/img/live-abertura.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "I called the building, but they didn't answer.",
          "img": "https://wolf-labs.pages.dev/p/45652c7718ea/last-tuesday/img/live-servidores.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "Did the server come back?",
          "img": "https://wolf-labs.pages.dev/p/45652c7718ea/last-tuesday/img/live-abertura.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "One past, one place. Four quick ones.",
      "regra": "<b>went, rang, lost, left</b> · <b>didn't</b> + plain verb · <b>Did</b> + plain verb? · the past in <b>one</b> place.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "The lights went out at four.",
          "aceita": [],
          "d": "Dica: go no passado é irregular: <b>went</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "I didn't received the email.",
          "r": "I didn't receive the email.",
          "aceita": [
            "I did not receive the email."
          ],
          "d": "Dica: o passado já está em <b>didn't</b>. O verbo fica limpo: receive."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "Did you called Diego?",
          "r": "Did you call Diego?",
          "aceita": [],
          "d": "Dica: o passado já está em <b>Did</b>. O verbo fica limpo: call."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "We goed home at five.",
          "r": "We went home at five.",
          "aceita": [],
          "d": "Dica: go é irregular. O passado é <b>went</b>, nunca goed."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/45652c7718ea/last-tuesday/img/live-servidores.webp",
      "leg": "A dark server corridor",
      "pede": "Look at the picture: a dark server corridor. Write 2 or 3 sentences about a bad day at work or school last week: what happened, and one thing that <b>didn't</b> work.",
      "ph": "Last week I …",
      "ex": "Last Monday I lost my keys. I didn't find them, so I went home late."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What did you do last Tuesday?",
          "ph": "Last Tuesday I … I didn't …",
          "ex": "Last Tuesday I worked late. I didn't go to the gym."
        },
        {
          "q": "Did you lose something this year? What was it?",
          "ph": "Yes, I lost my … / No, I didn't.",
          "ex": "Yes, I lost my wallet on the bus."
        }
      ]
    }
  }
};
