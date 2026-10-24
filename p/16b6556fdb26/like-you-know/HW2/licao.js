/* LIKE, YOU KNOW · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: buy time: fillers, That's a good question, If I were you, I would. B2: nenhum português. Imagem: só a live-capa (escura, 42), a live-prox ficou de fora. */
window.HW2 = {
  "id": "like-you-know",
  "titulo": "Like, You Know",
  "nivel": "B2",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/16b6556fdb26/like-you-know/img/live-capa.jpg",
  "alvo": "buying time to think: small fillers (you know, I mean, sort of), That's a good question + repeating the question, If I were you, I would ... (never If I was you, I will); one filler is enough",
  "abrir": "What do you say when you need a second to think?",
  "fecho": "<b>Buy time, don't stop.</b> Praise the question and repeat it: <i>That's a good question. What would I change?</i> One small filler is enough: <b>you know</b>, <b>I mean</b>, <b>sort of</b>. For advice, the set phrase: <b>If I were you, I would ...</b>, never <i>If I was you, I will</i>.",
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
      "sub": "Mia and Leo before a panel. A new scene, about one minute.",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, the panel starts in ten minutes. What if they ask me something I can't answer?"
        },
        {
          "quem": "mia",
          "t": "Then buy some time. Say, That's a good question, and repeat it slowly."
        },
        {
          "quem": "leo",
          "t": "Repeat it? Won't that sound strange?"
        },
        {
          "quem": "mia",
          "t": "Not at all. What would I change about the project? Well, you know, I would start earlier. You sound calm, and you are already thinking."
        },
        {
          "quem": "leo",
          "t": "And if I get stuck in the middle of a sentence?"
        },
        {
          "quem": "mia",
          "t": "Use one small filler, like I mean, or sort of. One is enough. Three in a row sounds nervous."
        },
        {
          "quem": "leo",
          "t": "Like this? I, like, you know, sort of, like, I mean..."
        },
        {
          "quem": "mia",
          "t": "Exactly what not to do. Try advice instead: If I were you, I would take the second option."
        },
        {
          "quem": "leo",
          "t": "If I were you, I would take the second option. That sounds like a real person."
        },
        {
          "quem": "mia",
          "t": "It is. Fluent speakers pause all the time. Breathe, and say your first filler out loud."
        },
        {
          "quem": "leo",
          "t": "That's a good question. How do I stay calm? OK, I'm joking. Let's go."
        }
      ],
      "perguntas": [
        {
          "q": "What should Leo say first when a question is hard?",
          "op": [
            "That's a good question, and then repeat it",
            "I don't know, sorry",
            "Please ask someone else"
          ],
          "a": 0,
          "por": "Say, That's a good question, and repeat it slowly."
        },
        {
          "q": "Why should Leo avoid three fillers in a row?",
          "op": [
            "It sounds nervous",
            "It sounds too polite",
            "It makes the answer too short"
          ],
          "a": 0,
          "por": "One is enough. Three in a row sounds nervous."
        },
        {
          "q": "What does Mia say about fluent speakers?",
          "op": [
            "They pause all the time",
            "They never stop talking",
            "They never use fillers"
          ],
          "a": 0,
          "por": "Fluent speakers pause all the time."
        }
      ]
    },
    "out": {
      "sub": "Three ways to buy time. Hear it, then say it.",
      "frases": [
        {
          "t": "That's a good question. What would I change? Well, I would start earlier.",
          "au": "audio/say1.mp3"
        },
        {
          "t": "If I were you, I would take a moment and breathe.",
          "au": "audio/say2.mp3"
        },
        {
          "t": "I mean, it's sort of interesting, you know, but I'm not sure yet.",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Fillers, the question trick and the set phrase. Four quick ones.",
      "regra": "<b>That's a good question</b> + repeat it · one filler is enough: <b>you know</b>, <b>I mean</b>, <b>sort of</b> · <b>If I were you, I would ...</b>",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "If I were you, I would take the second option.",
          "aceita": [],
          "d": "Hint: the set phrase is <b>If I were you</b>, then <b>I would</b> + plain verb."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: two words are wrong.",
          "mostra": "If I was you, I will call her tomorrow.",
          "r": "If I were you, I would call her tomorrow.",
          "aceita": [],
          "d": "Hint: advice about a situation that is not real: <b>were</b> and <b>would</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is missing.",
          "mostra": "She is sort interested in the idea.",
          "r": "She is sort of interested in the idea.",
          "aceita": [],
          "d": "Hint: <b>sort of</b> + adjective makes the word softer."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "That's a good ask. What does it mean?",
          "r": "That's a good question. What does it mean?",
          "aceita": [],
          "d": "Hint: praise it with <b>question</b>, then repeat it to buy time."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/16b6556fdb26/like-you-know/img/live-capa.jpg",
      "leg": "A racket and a ball against a wall",
      "pede": "Look at the picture: a racket and a ball against a wall, like a champion practicing alone. Write 2 or 3 sentences answering a hard question: <i>What would you do with a free year?</i> Buy time with <b>That's a good question</b> and one small filler.",
      "ph": "That's a good question. What would I do? I mean, ...",
      "ex": "That's a good question. What would I do with a free year? Well, you know, I would probably travel, sort of slowly, to a few small towns."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "A friend is nervous before a big presentation. What would you tell them?",
          "ph": "If I were you, I would ...",
          "ex": "If I were you, I would breathe slowly and tell a real story."
        },
        {
          "q": "Here is a hard one: what does your favorite color say about you? Buy time first.",
          "ph": "That's a good question. ...",
          "ex": "That's a good question. What does it say about me? I mean, it sort of says I am calm."
        }
      ]
    }
  }
};
