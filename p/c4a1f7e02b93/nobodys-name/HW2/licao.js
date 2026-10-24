/* NOBODY'S NAME · LIÇÃO DE CASA 2.0 (24/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: passiva no passado (was / were + particípio). B1: nenhum português. */
window.HW2 = {
  "id": "nobodys-name",
  "titulo": "Nobody's Name",
  "nivel": "B1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/c4a1f7e02b93/nobodys-name/img/live-caneta-preta.webp",
  "alvo": "the passive in the past: was / were + past participle to take the name out of the sentence (The samples were left in a taxi); the thing goes first; happen has no passive; by + name to put a name back on purpose",
  "abrir": "What small thing went wrong at work or school this month?",
  "fecho": "<b>was / were + past participle</b> takes the name out: <i>The old price list was sent. The samples were left in a taxi.</i> The thing goes first. <b>Happen</b> has no passive: <i>A mistake happened.</i> To put a name back on purpose: <b>by</b> + name: <i>The account was saved by Lía.</i>",
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
      "sub": "Mia and Leo write an incident report at the end of a bad Friday. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/c4a1f7e02b93/nobodys-name/img/live-bg-desk-report.webp",
      "leg": "A desk late in the evening",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, Dani wants one page by five o'clock, with no names. What went wrong today?"
        },
        {
          "quem": "leo",
          "t": "Three things. First, the old price list was sent to the client."
        },
        {
          "quem": "mia",
          "t": "Okay. And the second?"
        },
        {
          "quem": "leo",
          "t": "The meeting room was booked twice. Both teams arrived at ten."
        },
        {
          "quem": "mia",
          "t": "And the third?"
        },
        {
          "quem": "leo",
          "t": "The samples were left in a taxi."
        },
        {
          "quem": "mia",
          "t": "Was anything saved?"
        },
        {
          "quem": "leo",
          "t": "Yes. The account was saved by Lía. She called the client herself."
        },
        {
          "quem": "mia",
          "t": "Then we write that. No names, except Lía's."
        },
        {
          "quem": "leo",
          "t": "Perfect. The page is finished."
        }
      ],
      "perguntas": [
        {
          "q": "What was sent to the client?",
          "op": [
            "The old price list",
            "The samples",
            "The report"
          ],
          "a": 0,
          "por": "The old price list was sent to the client."
        },
        {
          "q": "What happened to the meeting room?",
          "op": [
            "It was booked twice",
            "It was left in a taxi",
            "It was saved"
          ],
          "a": 0,
          "por": "The meeting room was booked twice."
        },
        {
          "q": "Who saved the account?",
          "op": [
            "Lía",
            "Dani",
            "Leo"
          ],
          "a": 0,
          "por": "The account was saved by Lía."
        }
      ]
    },
    "out": {
      "sub": "Three sentences for the report. Hear it, then say it.",
      "frases": [
        {
          "t": "The old price list was sent to the client.",
          "img": "https://wolf-labs.pages.dev/p/c4a1f7e02b93/nobodys-name/img/live-bg-desk-report.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "The meeting room was booked twice.",
          "img": "https://wolf-labs.pages.dev/p/c4a1f7e02b93/nobodys-name/img/live-bg-file-room.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "The account was saved by Lía.",
          "img": "https://wolf-labs.pages.dev/p/c4a1f7e02b93/nobodys-name/img/live-caneta-preta.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "was or were, and the right verb. Four quick ones.",
      "regra": "<b>was / were + past participle</b> · the thing goes first · <b>happen</b> has no passive · <b>by</b> + name puts a name back.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "The samples were left in a taxi.",
          "aceita": [],
          "d": "Hint: plural thing, so <b>were</b> + past participle."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "The report was wrote on Friday.",
          "r": "The report was written on Friday.",
          "aceita": [],
          "d": "Hint: after <b>was</b>, use the past participle: <i>written</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "The samples was left in a taxi.",
          "r": "The samples were left in a taxi.",
          "aceita": [],
          "d": "Hint: <i>samples</i> is plural, so <b>were</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "A mistake was happened in the file.",
          "r": "A mistake happened in the file.",
          "aceita": [
            "A mistake was made in the file."
          ],
          "d": "Hint: <b>happen</b> has no passive. Say <i>happened</i>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/c4a1f7e02b93/nobodys-name/img/live-bg-desk-report.webp",
      "leg": "A desk with papers and markers",
      "pede": "Look at the picture: a desk with papers and markers late in the evening. Write 2 or 3 sentences about something that went wrong at work or school. Use <b>was / were + past participle</b> and leave the name out.",
      "ph": "The file was …",
      "ex": "The file was sent to the wrong person. Two chairs were broken. The report was finished late."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What went wrong at your work or school this week? Say it without a name.",
          "ph": "The … was …",
          "ex": "The printer was broken on Monday, and the files were lost."
        },
        {
          "q": "What was done well this week? Put the name back with by.",
          "ph": "… was … by …",
          "ex": "The party was organized by my sister."
        }
      ]
    }
  }
};
