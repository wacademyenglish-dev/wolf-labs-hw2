/* THE TIDY STORY · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: reporting passive: X is said / thought / believed / reported / known + to + verb. B2: nenhum português. */
window.HW2 = {
  "id": "the-tidy-story",
  "titulo": "The Tidy Story",
  "nivel": "B2",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/76aa2736154d/the-tidy-story/img/live-sala.webp",
  "alvo": "reporting passive: X is said / thought / believed / reported / known + to + verb; to have + past participle for the earlier time; It is said that + clause when there is no topic; the name goes first, never 'He is said that he ...'",
  "abrir": "What does everybody say about your town that nobody has checked?",
  "fecho": "<b>X is said / thought / believed / reported / known to</b> + verb. Earlier time: <b>to have</b> + past participle: <i>He is said to have left in 2010.</i> No topic: <b>It is said that</b> + clause. One door, not both: never <i>He is said that he ...</i>",
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
      "sub": "Mia and Leo in a newsroom. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/76aa2736154d/the-tidy-story/img/live-sala.webp",
      "leg": "A quiet archive room, lamps on the tables",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, your draft says the old clock tower is the oldest building in town. Is that a fact?"
        },
        {
          "quem": "leo",
          "t": "Well, it is said to be the oldest. Everyone at the cafe says so."
        },
        {
          "quem": "mia",
          "t": "Everyone says so? That is not a source. Who counted?"
        },
        {
          "quem": "leo",
          "t": "The tourist office is reported to have a plaque from 1790. That part holds up."
        },
        {
          "quem": "mia",
          "t": "Better. And your line about the architect: he is known to have worked alone."
        },
        {
          "quem": "leo",
          "t": "Hmm. He is thought to have worked alone, but nobody has proved it."
        },
        {
          "quem": "mia",
          "t": "Then write thought, not known. It is believed that he had help, too."
        },
        {
          "quem": "leo",
          "t": "Fair. So the tower is said to be old, and the plaque is reported to be from 1790."
        },
        {
          "quem": "mia",
          "t": "And the rumor about the secret room? Leave it out until we have a document."
        },
        {
          "quem": "leo",
          "t": "Agreed. I will call the archive tomorrow and ask for the plans."
        }
      ],
      "perguntas": [
        {
          "q": "Why does Mia question Leo's first sentence?",
          "op": [
            "Because everyone says so is not a source",
            "Because the tower is new",
            "Because Leo did not write it"
          ],
          "a": 0,
          "por": "Everyone says so? That is not a source."
        },
        {
          "q": "Where is there a plaque from 1790?",
          "op": [
            "At the tourist office",
            "In the archive",
            "At the cafe"
          ],
          "a": 0,
          "por": "The tourist office is reported to have a plaque from 1790."
        },
        {
          "q": "Which word does Mia want for the architect?",
          "op": [
            "Thought",
            "Known",
            "Proved"
          ],
          "a": 0,
          "por": "Then write thought, not known."
        }
      ]
    },
    "out": {
      "sub": "Three sentences with the name first. Hear it, then say it.",
      "frases": [
        {
          "t": "The cabinet is said to hold ten thousand cards.",
          "img": "https://wolf-labs.pages.dev/p/76aa2736154d/the-tidy-story/img/live-gavetas.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "The top drawer is believed to have been empty for years.",
          "img": "https://wolf-labs.pages.dev/p/76aa2736154d/the-tidy-story/img/live-gaveta.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "The archive is known to have opened in 1950.",
          "img": "https://wolf-labs.pages.dev/p/76aa2736154d/the-tidy-story/img/live-sala.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "is said to, to have + participle, It is said that. Four quick ones.",
      "regra": "<b>X is said / thought / believed to</b> + verb · earlier: <b>to have</b> + past participle · no topic: <b>It is said that</b> + clause",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "The bridge is believed to have been built in 1890.",
          "aceita": [],
          "d": "Hint: <b>is believed to have</b> + past participle."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "He is said that he is very rich.",
          "r": "He is said to be very rich.",
          "aceita": [
            "It is said that he is very rich."
          ],
          "d": "Hint: the name goes first, then <b>is said to</b>. Or start with <b>It is said that</b>. Not both."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: the earlier time is wrong.",
          "mostra": "She is believed to left in 2010.",
          "r": "She is believed to have left in 2010.",
          "aceita": [],
          "d": "Hint: before now, so <b>to have</b> + past participle."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: move the name to the front.",
          "mostra": "It is said the chef to have trained abroad.",
          "r": "The chef is said to have trained abroad.",
          "aceita": [
            "It is said that the chef trained abroad."
          ],
          "d": "Hint: <b>The chef is said to have</b> + participle."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/76aa2736154d/the-tidy-story/img/live-ficha.webp",
      "leg": "A blank file card with a paper clip",
      "pede": "Look at the picture: a blank file card. Write 2 or 3 sentences about a rumor in your town or at your work. Use <b>is said to</b>, <b>is thought to have</b> + participle, and <b>It is said that</b>.",
      "ph": "My town is said to …",
      "ex": "My town is said to have the best bakery in the country. The old mill is thought to have been closed since 1990. It is said that the mayor lives in a small flat."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What is your city said to be famous for? Is it true?",
          "ph": "My city is said to …",
          "ex": "My city is said to have the best coffee in the country, but I have never checked."
        },
        {
          "q": "Name something people believe about your job. Is it known, or only thought?",
          "ph": "Teachers are thought to …",
          "ex": "Teachers are thought to have long holidays, but it is not really true."
        }
      ]
    }
  }
};
