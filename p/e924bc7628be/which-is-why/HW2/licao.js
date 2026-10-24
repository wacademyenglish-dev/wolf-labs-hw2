/* WHICH IS WHY IT MATTERS · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: non-defining relative with ', which' that comments on the whole idea before it (which is why / which means / which explains / which surprised). B2: nenhum português. */
window.HW2 = {
  "id": "which-is-why",
  "titulo": "Which Is Why It Matters",
  "nivel": "B2",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/e924bc7628be/which-is-why/img/live-sala.webp",
  "alvo": "non-defining relative with ', which' that comments on the whole idea before it (which is why / which means / which explains / which surprised); a comma before which; never 'what is why', 'that means' after a comma, or 'which it means'",
  "abrir": "Do you vote in every election in your country?",
  "fecho": "A comma + <b>which</b> comments on the <b>whole idea</b> before it: <i>Turnout was low, which is why the lines were short.</i> Use <b>which is why / which means / which explains / which surprised</b>. Never <i>, what is why</i>, never <i>, that means</i>, never <i>which it means</i>.",
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
      "sub": "Mia and Leo at the news desk on election night. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/e924bc7628be/which-is-why/img/live-sala.webp",
      "leg": "An empty hall at sunset",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, the polls closed at eight, which means the first results are coming in."
        },
        {
          "quem": "leo",
          "t": "Turnout was low this year, which is why the lines were short."
        },
        {
          "quem": "mia",
          "t": "Which surprised me. Last time the lines went around the block."
        },
        {
          "quem": "leo",
          "t": "Many people voted by mail, which explains the empty hall."
        },
        {
          "quem": "mia",
          "t": "Mail ballots take days to count, which is why the final numbers are slow."
        },
        {
          "quem": "leo",
          "t": "So we wait until tomorrow, which means no sleep for the news desk."
        },
        {
          "quem": "mia",
          "t": "In one race the winner had only 300 more votes, which shows that every vote counts."
        },
        {
          "quem": "leo",
          "t": "That is true. Which reminds me: did you vote?"
        },
        {
          "quem": "mia",
          "t": "Of course, which is why I am allowed to complain!"
        },
        {
          "quem": "leo",
          "t": "Ha! Then let's get coffee, which will help us stay up."
        }
      ],
      "perguntas": [
        {
          "q": "Why were the lines short?",
          "op": [
            "Turnout was low",
            "The hall was closed",
            "Nobody wanted coffee"
          ],
          "a": 0,
          "por": "Turnout was low this year, which is why the lines were short."
        },
        {
          "q": "What explains the empty hall?",
          "op": [
            "Many people voted by mail",
            "The polls opened late",
            "The results were fast"
          ],
          "a": 0,
          "por": "Many people voted by mail, which explains the empty hall."
        },
        {
          "q": "What does the close race show?",
          "op": [
            "That every vote counts",
            "That mail is slow",
            "That turnout was high"
          ],
          "a": 0,
          "por": "The winner had only 300 more votes, which shows that every vote counts."
        }
      ]
    },
    "out": {
      "sub": "Three sentences with a comment. Hear it, then say it.",
      "frases": [
        {
          "t": "The town hall stays open late, which is why the lights are on.",
          "img": "https://wolf-labs.pages.dev/p/e924bc7628be/which-is-why/img/live-prefeitura.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "Each voter steps into a booth, which means the vote is private.",
          "img": "https://wolf-labs.pages.dev/p/e924bc7628be/which-is-why/img/live-capa.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "One piece fell, which made all the others fall.",
          "img": "https://wolf-labs.pages.dev/p/e924bc7628be/which-is-why/img/live-domino.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "A comma + which comments on the whole idea. Four quick ones.",
      "regra": "<b>, which is why / which means / which explains / which surprised</b> · a comma before <b>which</b> · it points at the whole idea",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "Turnout was low, which is why the results surprised everyone.",
          "aceita": [],
          "d": "Hint: a comma, then <b>which is why</b> + the result."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "I overslept, what is why I was late.",
          "r": "I overslept, which is why I was late.",
          "aceita": [],
          "d": "Hint: the comment starts with <b>which</b>, never <i>what</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "It rained, that means we stay home.",
          "r": "It rained, which means we stay home.",
          "aceita": [],
          "d": "Hint: a comma cannot glue two sentences. Use <b>, which means</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "He passed, which it surprised us.",
          "r": "He passed, which surprised us.",
          "aceita": [],
          "d": "Hint: <b>which</b> is already the subject. Do not add <i>it</i>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/e924bc7628be/which-is-why/img/live-capa.webp",
      "leg": "Empty voting booths in a quiet hall",
      "pede": "Look at the picture: empty voting booths in a quiet hall. Write 2 or 3 sentences about your day or your country. End each one with a comment: <b>, which is why</b>, <b>, which means</b> or <b>, which surprised me</b>.",
      "ph": "I woke up early today, which …",
      "ex": "I woke up early today, which is why I am tired now. My country has two big holidays in December, which means many shops close. It rains a lot here, which surprised me."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "Do you vote in every election? Add a comment with which.",
          "ph": "I always vote, which …",
          "ex": "I always vote because it is required, which is why almost everybody does."
        },
        {
          "q": "What surprises visitors in your country? Comment with which.",
          "ph": "Visitors love …, which …",
          "ex": "Dinner is very late here, which surprises most visitors."
        }
      ]
    }
  }
};
