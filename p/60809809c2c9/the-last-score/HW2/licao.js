/* THE LAST SCORE · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: reported speech (told / said / asked whether; o tempo recua). B2: nenhum português. Score = partitura de banda de festival; nada de crime ou armas. Só live-* escuras. */
window.HW2 = {
  "id": "the-last-score",
  "titulo": "The Last Score",
  "nivel": "B2",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/60809809c2c9/the-last-score/img/live-diario.webp",
  "alvo": "reported speech: told + person, said + something; the tense steps back (will -> would, is -> was, took -> had taken); a reported question keeps normal order (asked whether / if + subject + verb); never said me, asked where was the piano, said he will",
  "abrir": "Think of something somebody told you this week. What exactly did they say?",
  "fecho": "<b>Tell</b> someone, <b>say</b> something: <i>He told us that</i>, <i>he said that</i>. Reported later, the tense steps back: <i>will → would</i>, <i>is → was</i>, <i>took → had taken</i>. A reported question keeps normal order: <i>asked whether she could</i>, <i>asked where the piano was</i>.",
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
      "sub": "Mia and Leo after a small festival. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/60809809c2c9/the-last-score/img/live-acampamento.webp",
      "leg": "Tents and a fire at the festival",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, I'm writing in my travel journal. What did the band leader tell you about the last piece?"
        },
        {
          "quem": "leo",
          "t": "He told us that the score was too long, and he said we would cut the second page."
        },
        {
          "quem": "mia",
          "t": "Did he say why?"
        },
        {
          "quem": "leo",
          "t": "He explained that the audience had been waiting since six, and that people would get tired."
        },
        {
          "quem": "mia",
          "t": "And what did the violinist ask?"
        },
        {
          "quem": "leo",
          "t": "She asked whether she could play the solo twice. He answered that he would think about it."
        },
        {
          "quem": "mia",
          "t": "So he hadn't decided yet."
        },
        {
          "quem": "leo",
          "t": "No. Then he admitted that he had lost the first page, and he asked if anyone had a copy."
        },
        {
          "quem": "mia",
          "t": "Did anyone?"
        },
        {
          "quem": "leo",
          "t": "The drummer said he had taken a photo of it."
        },
        {
          "quem": "mia",
          "t": "Perfect. I'll write that down."
        }
      ],
      "perguntas": [
        {
          "q": "What did the band leader say about the score?",
          "op": [
            "It was too long",
            "It was perfect",
            "It was lost forever"
          ],
          "a": 0,
          "por": "He told us that the score was too long."
        },
        {
          "q": "What did the violinist ask?",
          "op": [
            "Whether she could play the solo twice",
            "Whether she could go home",
            "Whether the festival was over"
          ],
          "a": 0,
          "por": "She asked whether she could play the solo twice."
        },
        {
          "q": "Who had a copy of the first page?",
          "op": [
            "The drummer, in a photo",
            "The violinist",
            "Nobody"
          ],
          "a": 0,
          "por": "The drummer said he had taken a photo of it."
        }
      ]
    },
    "out": {
      "sub": "Three reports from the festival. Hear it, then say it.",
      "frases": [
        {
          "t": "He told us that the score was too long.",
          "img": "https://wolf-labs.pages.dev/p/60809809c2c9/the-last-score/img/live-diario.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "She asked whether she could play the solo twice.",
          "img": "https://wolf-labs.pages.dev/p/60809809c2c9/the-last-score/img/live-acampamento.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "The drummer said he had taken a photo of the first page.",
          "img": "https://wolf-labs.pages.dev/p/60809809c2c9/the-last-score/img/live-cidade.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Verb, tense, order. Four quick ones.",
      "regra": "<b>told</b> + person, <b>said</b> + something · the tense steps back: <b>would, was, had taken</b> · <b>asked whether</b> + normal order.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "He told us that the score was too long.",
          "aceita": [],
          "d": "Hint: <b>told</b> + person (<b>us</b>), then the tense steps back: <b>is</b> becomes <b>was</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one verb is wrong.",
          "mostra": "He said us that the concert would start late.",
          "r": "He told us that the concert would start late.",
          "aceita": [
            "He told us the concert would start late."
          ],
          "d": "Hint: with a person after the verb (<b>us</b>), use <b>told</b>, not <i>said</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: a reported question keeps normal order.",
          "mostra": "She asked where was the piano.",
          "r": "She asked where the piano was.",
          "aceita": [],
          "d": "Hint: no question order in a report: <b>where the piano was</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: step the tense back.",
          "mostra": "The drummer said he will bring a copy.",
          "r": "The drummer said he would bring a copy.",
          "aceita": [
            "The drummer said that he would bring a copy."
          ],
          "d": "Hint: reported later, <b>will</b> becomes <b>would</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/60809809c2c9/the-last-score/img/live-diario.webp",
      "leg": "An open journal by the fire",
      "pede": "Look at the picture: an open journal by the fire. Write 2 or 3 sentences in your own journal: report what people told you or asked you this week. Use <b>told</b>, <b>said</b> or <b>asked whether</b>.",
      "ph": "My teacher told us that …",
      "ex": "My teacher told us that the test would be on Friday. A friend asked whether I could help him. My boss said he had changed the date."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What did someone tell you this week that surprised you?",
          "ph": "… told me that …",
          "ex": "My boss told me that the meeting had been moved to Friday."
        },
        {
          "q": "What did a friend or a colleague ask you recently?",
          "ph": "… asked me if …",
          "ex": "My friend asked me if I could lend him a book."
        }
      ]
    }
  }
};
