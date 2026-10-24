/* SMELLS LIKE TEEN SPIRIT · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: adjetivos -ed x -ing. Linha de música: NENHUM verso aqui; o listening é diálogo original. B1: nenhum português. */
window.HW2 = {
  "id": "smells-like-teen-spirit",
  "titulo": "Smells Like Teen Spirit",
  "nivel": "B1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/b3147d1bd9a1/smells-like-teen-spirit/img/hw-capa.webp",
  "alvo": "-ed vs -ing adjectives: -ed = how a person feels (I'm bored), -ing = what causes the feeling (the class is boring); interested in, excited about",
  "abrir": "When were you really bored at school?",
  "fecho": "<b>-ed</b> is how you feel; <b>-ing</b> is what causes it: <i>I'm bored. The class is boring.</i> And remember the little words: interested <b>in</b>, excited <b>about</b>.",
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
      "sub": "Mia and Leo talk about a school reunion. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/b3147d1bd9a1/smells-like-teen-spirit/img/arquibancada.webp",
      "leg": "After the reunion",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, how was the school reunion last night?"
        },
        {
          "quem": "leo",
          "t": "Honestly, I was bored. The speeches were so boring."
        },
        {
          "quem": "mia",
          "t": "Really? I thought the old photos were amazing."
        },
        {
          "quem": "leo",
          "t": "The photos were fine. But then I tripped in front of my old gym teacher."
        },
        {
          "quem": "mia",
          "t": "Oh no! Were you embarrassed?"
        },
        {
          "quem": "leo",
          "t": "Very! It was the most embarrassing moment of the night."
        },
        {
          "quem": "mia",
          "t": "Everybody else seemed excited about the music, though."
        },
        {
          "quem": "leo",
          "t": "Yes, but I'm not very interested in dancing."
        },
        {
          "quem": "mia",
          "t": "Come with me next time. I promise it won't be boring."
        },
        {
          "quem": "leo",
          "t": "Only if it's exciting!"
        }
      ],
      "perguntas": [
        {
          "q": "How did Leo feel about the speeches?",
          "op": [
            "He was bored",
            "He was excited",
            "He was embarrassed"
          ],
          "a": 0,
          "por": "Honestly, I was bored. The speeches were so boring."
        },
        {
          "q": "What was the most embarrassing moment?",
          "op": [
            "He tripped in front of his old teacher",
            "He forgot the music",
            "He lost the photos"
          ],
          "a": 0,
          "por": "I tripped in front of my old gym teacher."
        },
        {
          "q": "Why doesn't Leo want to dance?",
          "op": [
            "He isn't interested in dancing",
            "He is excited about the speeches",
            "He doesn't like his old teacher"
          ],
          "a": 0,
          "por": "I'm not very interested in dancing."
        }
      ]
    },
    "out": {
      "sub": "Three sentences about school. Hear it, then say it.",
      "frases": [
        {
          "t": "The lesson was boring, so we were all bored.",
          "img": "https://wolf-labs.pages.dev/p/b3147d1bd9a1/smells-like-teen-spirit/img/armarios.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "I'm interested in music, but I'm not excited about the test.",
          "img": "https://wolf-labs.pages.dev/p/b3147d1bd9a1/smells-like-teen-spirit/img/ginasio.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "The game was exciting, and the crowd was excited.",
          "img": "https://wolf-labs.pages.dev/p/b3147d1bd9a1/smells-like-teen-spirit/img/arquibancada.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "-ed or -ing? Four quick ones.",
      "regra": "<b>-ed</b> = how you feel · <b>-ing</b> = what causes the feeling · interested <b>in</b> · excited <b>about</b>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "She was bored because the movie was boring.",
          "aceita": [],
          "d": "Hint: she feels <b>bored</b>; the movie is <b>boring</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "The game was very excited.",
          "r": "The game was very exciting.",
          "aceita": [
            "The game was really exciting.",
            "The game was so exciting."
          ],
          "d": "Hint: the game causes the feeling, so <b>exciting</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "I'm interesting in music.",
          "r": "I'm interested in music.",
          "aceita": [
            "I am interested in music."
          ],
          "d": "Hint: you feel it, so <b>interested</b>, and then <b>in</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "She was embarrassing when she fell.",
          "r": "She was embarrassed when she fell.",
          "aceita": [
            "She felt embarrassed when she fell."
          ],
          "d": "Hint: how she feels is <b>embarrassed</b>. <i>Embarrassing</i> is the moment."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/b3147d1bd9a1/smells-like-teen-spirit/img/ginasio.webp",
      "leg": "The empty gym",
      "pede": "Look at the picture: an empty school gym after the game. Write 2 or 3 sentences about how a student feels there and what the place is like. Use <b>-ed</b> and <b>-ing</b> adjectives.",
      "ph": "The gym is empty, so I feel …",
      "ex": "I feel lonely in the empty gym. The silence is a little scary, but I'm interested in the old photos on the wall."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What was the most boring class you ever had? How did you feel?",
          "ph": "The most boring class was … I felt …",
          "ex": "The most boring class was history. The teacher read the book, so I felt bored and sleepy."
        },
        {
          "q": "What are you interested in? What makes you excited?",
          "ph": "I'm interested in … and I'm excited about …",
          "ex": "I'm interested in photography, and I'm excited about my trip next month."
        }
      ]
    }
  }
};
