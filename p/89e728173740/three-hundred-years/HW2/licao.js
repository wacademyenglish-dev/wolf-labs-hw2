/* THREE HUNDRED YEARS · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: concessao (although/despite/even if). B2: nenhum portugues na licao. */
window.HW2 = {
  "id": "three-hundred-years",
  "titulo": "Three Hundred Years",
  "nivel": "B2",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/89e728173740/three-hundred-years/img/live-estojo.webp",
  "alvo": "concession: although / even though + clause · despite / in spite of + noun or -ing (despite the fact that + clause) · even if for something imagined; never despite of, never although + but",
  "abrir": "What do you keep doing in spite of the difficulty?",
  "fecho": "<b>Although / even though</b> + subject and verb. <b>Despite / in spite of</b> + a noun or -ing (<i>in spite <b>of</b></i>, never <i>despite of</i>). <b>Even if</b> is for something imagined. Only one connector per turn: <i>Although it was old, it came last</i>, not <i>…, but it came last</i>.",
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
      "sub": "Mia and Leo at lunch. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/89e728173740/three-hundred-years/img/live-estojo.webp",
      "leg": "A closed case on a table",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Did you read about the violin test? The players wore goggles, so they couldn't see the instruments."
        },
        {
          "quem": "mia",
          "t": "Let me guess. Even though one violin was three hundred years old, nobody could tell which one it was."
        },
        {
          "quem": "leo",
          "t": "It's worse. Despite its price, the old one came last."
        },
        {
          "quem": "mia",
          "t": "Although it cost millions? That's hard to believe."
        },
        {
          "quem": "leo",
          "t": "It's true. In spite of years of practice, the players preferred the new violins."
        },
        {
          "quem": "mia",
          "t": "So would you buy an old one?"
        },
        {
          "quem": "leo",
          "t": "Even if I had the money, I wouldn't. Well, maybe for the story."
        },
        {
          "quem": "mia",
          "t": "Despite the fact that it lost, the story is still worth something."
        },
        {
          "quem": "leo",
          "t": "True. Although the test was small, it made everybody think."
        },
        {
          "quem": "mia",
          "t": "Exactly. Even if the sound is the same, the history isn't."
        }
      ],
      "perguntas": [
        {
          "q": "Why couldn't the players see the instruments?",
          "op": [
            "They wore goggles",
            "It was dark",
            "The violins were in cases"
          ],
          "a": 0,
          "por": "The players wore goggles, so they couldn't see the instruments."
        },
        {
          "q": "What happened to the old violin?",
          "op": [
            "It came last",
            "It won easily",
            "It broke"
          ],
          "a": 0,
          "por": "Despite its price, the old one came last."
        },
        {
          "q": "Would Leo buy an old violin?",
          "op": [
            "No, not even with the money",
            "Yes, because it is famous",
            "Yes, if it were cheap"
          ],
          "a": 0,
          "por": "Even if I had the money, I wouldn't."
        }
      ]
    },
    "out": {
      "sub": "Three sentences from the lesson. Hear it, then say it.",
      "frases": [
        {
          "t": "Even though it cost millions, the old violin came last.",
          "img": "https://wolf-labs.pages.dev/p/89e728173740/three-hundred-years/img/live-estojo.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "In spite of years of practice, the players preferred the new one.",
          "img": "https://wolf-labs.pages.dev/p/89e728173740/three-hundred-years/img/live-sala.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "Although the test was small, it made everybody think.",
          "img": "https://wolf-labs.pages.dev/p/89e728173740/three-hundred-years/img/live-estojo.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Which connector? Four quick ones.",
      "regra": "<b>although / even though</b> + subject and verb · <b>despite / in spite of</b> + noun or -ing · <b>in spite OF</b>, never despite of · <b>even if</b> = imagined",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "Despite the high price, the old violin came last.",
          "aceita": [],
          "d": "Hint: <b>despite</b> is followed by a noun: the high price."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "Despite it was expensive, it came last.",
          "r": "Although it was expensive, it came last.",
          "aceita": [
            "Even though it was expensive, it came last.",
            "Despite being expensive, it came last.",
            "Despite the fact that it was expensive, it came last.",
            "Despite its price, it came last.",
            "In spite of being expensive, it came last.",
            "In spite of the fact that it was expensive, it came last."
          ],
          "d": "Hint: after <b>despite</b> a full clause does not fit. Use <b>although</b>, or turn the clause into a noun or -ing."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is missing.",
          "mostra": "In spite the noise, she kept playing.",
          "r": "In spite of the noise, she kept playing.",
          "aceita": [
            "Despite the noise, she kept playing."
          ],
          "d": "Hint: <b>in spite</b> always has its <b>of</b>. <b>Despite</b> never does."
        },
        {
          "tipo": "escreve",
          "t": "Say it with a word for something imagined.",
          "mostra": "Imagine you paid ten million: you would not hear the difference.",
          "r": "Even if you paid ten million, you would not hear the difference.",
          "aceita": [
            "Even if you paid ten million, you wouldn't hear the difference."
          ],
          "d": "Hint: nobody paid anything, we are imagining it: <b>even if</b>, not <i>even though</i>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/89e728173740/three-hundred-years/img/live-sala.webp",
      "leg": "A rehearsal room, empty",
      "pede": "Look at the picture: an empty rehearsal room. Write 2 or 3 sentences about something you did or would do against the odds. Use <b>although, even though, despite, in spite of</b> or <b>even if</b>.",
      "ph": "Although it was difficult, I …",
      "ex": "Even though I was tired, I practiced for an hour. Despite the noise, I finished my work. I would try again even if I failed."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What do you keep doing in spite of the difficulty? Why?",
          "ph": "In spite of …, I keep …",
          "ex": "In spite of the cost, I keep taking classes, because they change how I work."
        },
        {
          "q": "What would you do even if nobody paid you?",
          "ph": "Even if nobody paid me, I would …",
          "ex": "Even if nobody paid me, I would teach, because I enjoy watching people improve."
        }
      ]
    }
  }
};
