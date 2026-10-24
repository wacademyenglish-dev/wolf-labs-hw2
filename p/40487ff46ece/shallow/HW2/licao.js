/* SHALLOW · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: question tags. Linha de música: NENHUM verso aqui; o listening é diálogo original. Cena neutra (regra 9: nada de morte, luto, doença). B1: nenhum português. Cena: pular do trampolim na piscina. */
window.HW2 = {
  "id": "shallow",
  "titulo": "Shallow",
  "nivel": "B1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/40487ff46ece/shallow/img/live-piscina.webp",
  "alvo": "question tags: positive sentence + negative tag (you can swim, can't you?), negative sentence + positive tag (it isn't cold, is it?), the same auxiliary (did for the past simple), I am -> aren't I; never isn't it? or no? for everything",
  "abrir": "Do you prefer the shallow end or the deep end of a pool?",
  "fecho": "A question tag checks something you think is true. Positive sentence → negative tag: <i>You can swim, can't you?</i> Negative sentence → positive tag: <i>It isn't cold, is it?</i> Use the same auxiliary (<b>did</b> for the past simple), never <i>isn't it?</i> for everything. Voice down = I'm sure; voice up = I really want to know.",
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
      "sub": "Mia and Leo at the swimming pool on a warm evening. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/40487ff46ece/shallow/img/live-piscina.webp",
      "leg": "The pool in the evening",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "You can swim, can't you, Leo?"
        },
        {
          "quem": "leo",
          "t": "Well, a little. I usually stay in the shallow end."
        },
        {
          "quem": "mia",
          "t": "The water isn't cold today, is it?"
        },
        {
          "quem": "leo",
          "t": "No, it's warm. But the deep end is really deep, isn't it?"
        },
        {
          "quem": "mia",
          "t": "It's three meters. You've jumped from the diving board before, haven't you?"
        },
        {
          "quem": "leo",
          "t": "No, I haven't. I've only watched other people jump."
        },
        {
          "quem": "mia",
          "t": "You aren't afraid, are you?"
        },
        {
          "quem": "leo",
          "t": "Maybe a little. You'll stay next to the ladder, won't you?"
        },
        {
          "quem": "mia",
          "t": "Of course I will. Just jump, swim to the side and hold the ladder."
        },
        {
          "quem": "leo",
          "t": "Okay. One, two, three! That wasn't so bad, was it?"
        }
      ],
      "perguntas": [
        {
          "q": "Where does Leo usually stay?",
          "op": [
            "In the shallow end",
            "On the diving board",
            "Outside the pool"
          ],
          "a": 0,
          "por": "I usually stay in the shallow end."
        },
        {
          "q": "How deep is the deep end?",
          "op": [
            "Three meters",
            "One meter",
            "Five meters"
          ],
          "a": 0,
          "por": "It's three meters."
        },
        {
          "q": "What does Leo ask Mia to do?",
          "op": [
            "Stay next to the ladder",
            "Jump with him",
            "Bring a towel"
          ],
          "a": 0,
          "por": "You'll stay next to the ladder, won't you?"
        }
      ]
    },
    "out": {
      "sub": "Three questions with tags. Hear it, then say it.",
      "frases": [
        {
          "t": "The water isn't cold today, is it?",
          "img": "https://wolf-labs.pages.dev/p/40487ff46ece/shallow/img/live-piscina.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "You've jumped from the diving board before, haven't you?",
          "img": "https://wolf-labs.pages.dev/p/40487ff46ece/shallow/img/live-trampolim.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "That wasn't so bad, was it?",
          "img": "https://wolf-labs.pages.dev/p/40487ff46ece/shallow/img/live-mergulho.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Tags that match. Four quick ones.",
      "regra": "positive → negative tag (<i>can't you?</i>) · negative → positive tag (<i>is it?</i>) · same auxiliary · past simple → <b>did</b>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "You don't like cold water, do you?",
          "aceita": [],
          "d": "Hint: a negative sentence takes a positive tag: <i>do you?</i>"
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "You're Brazilian, isn't it?",
          "r": "You're Brazilian, aren't you?",
          "aceita": [
            "You are Brazilian, aren't you?"
          ],
          "d": "Hint: the tag repeats the verb and the subject: <i>you're → aren't you?</i>"
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "She went to the pool yesterday, wasn't she?",
          "r": "She went to the pool yesterday, didn't she?",
          "aceita": [],
          "d": "Hint: <i>went</i> is past simple, so the tag uses <b>did</b>: <i>didn't she?</i>"
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "You aren't tired, aren't you?",
          "r": "You aren't tired, are you?",
          "aceita": [
            "You're not tired, are you?"
          ],
          "d": "Hint: negative sentence, positive tag: <i>are you?</i>"
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/40487ff46ece/shallow/img/live-trampolim.webp",
      "leg": "A diving board over deep water",
      "pede": "Look at the picture: a diving board over deep water. Write 2 or 3 questions with tags that you would ask a friend before a big jump (in a pool or in life).",
      "ph": "You're ready, aren't you?",
      "ex": "You're ready, aren't you? You've done this before, haven't you? It isn't too high, is it?"
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "Guess two things about your teacher. Use tags.",
          "ph": "You like …, don't you?",
          "ex": "You like coffee, don't you? You aren't from São Paulo, are you?"
        },
        {
          "q": "What is a risk you took? How did it go?",
          "ph": "I … It was …",
          "ex": "I moved to a new city last year. It was scary, but it was the right choice."
        }
      ]
    }
  }
};
