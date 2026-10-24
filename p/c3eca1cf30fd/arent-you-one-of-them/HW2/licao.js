/* AREN'T YOU ONE OF THEM? · LIÇÃO DE CASA 2.0 (24/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: question tags. Versículos (World English Bible, ao pé da letra): Luke 22:58 (Listen), Luke 22:57 (Out loud), Luke 22:60 (Você). Nada da Bíblia é marcado como errado. B1: nenhum português. */
window.HW2 = {
  "id": "arent-you-one-of-them",
  "titulo": "Aren't You One of Them?",
  "nivel": "B1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/c3eca1cf30fd/arent-you-one-of-them/img/live-patio.webp",
  "alvo": "question tags: copy the helper verb and flip positive / negative (You were with him, weren't you? / He isn't here, is he?); no helper = do / does / did; I am = aren't I; never one tag for everything (isn't it?); falling voice = sure, rising voice = really asking",
  "abrir": "You had a busy week, didn't you? Which day was the busiest?",
  "fecho": "A tag <b>copies the helper and flips it</b>: <i>You were there, weren't you?</i> · <i>He isn't here, is he?</i> No helper in the sentence? Use <b>do / does / did</b>: <i>She knows him, doesn't she?</i> Never one tag for everything: not <i>isn't it?</i>. And: <i>I'm late, aren't I?</i>",
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
      "sub": "Mia and Leo talk about a night story. She reads Luke 22:58. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/c3eca1cf30fd/arent-you-one-of-them/img/live-patio.webp",
      "leg": "A courtyard at night, a small fire",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, you've read the story of Peter by the fire, haven't you?"
        },
        {
          "quem": "leo",
          "t": "Yes, I have. It was a cold night, wasn't it?"
        },
        {
          "quem": "mia",
          "t": "It was. Peter was afraid, so he sat with the other men. Listen to Luke chapter twenty-two, verse fifty-eight."
        },
        {
          "quem": "mia",
          "t": "After a little while someone else saw him and said, “You also are one of them!” But Peter answered, “Man, I am not!”"
        },
        {
          "quem": "leo",
          "t": "That's sad, isn't it? He was one of them, wasn't he?"
        },
        {
          "quem": "mia",
          "t": "Yes, he was. But he was scared. People don't always tell the truth when they're scared, do they?"
        },
        {
          "quem": "leo",
          "t": "No, they don't. I think I'd be scared too. I'm not very brave, am I?"
        },
        {
          "quem": "mia",
          "t": "Nobody is always brave, are they? Let's read the next verse, shall we?"
        }
      ],
      "perguntas": [
        {
          "q": "Why did Peter say he was not one of them?",
          "op": [
            "He was scared",
            "He was angry",
            "He was sleeping"
          ],
          "a": 0,
          "por": "But he was scared."
        },
        {
          "q": "What does Leo say about himself?",
          "op": [
            "He isn't very brave",
            "He is very brave",
            "He was at the fire"
          ],
          "a": 0,
          "por": "I'm not very brave, am I?"
        },
        {
          "q": "What do Mia and Leo do next?",
          "op": [
            "They read the next verse",
            "They go home",
            "They make a fire"
          ],
          "a": 0,
          "por": "Let's read the next verse, shall we?"
        }
      ]
    },
    "out": {
      "sub": "Three sentences with tags. The third is from the Bible: Luke 22:57 (World English Bible). Hear it, then say it.",
      "frases": [
        {
          "t": "You were at the fire, weren't you?",
          "img": "https://wolf-labs.pages.dev/p/c3eca1cf30fd/arent-you-one-of-them/img/live-patio.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "He isn't in the courtyard, is he?",
          "img": "https://wolf-labs.pages.dev/p/c3eca1cf30fd/arent-you-one-of-them/img/live-capa2.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "He denied Jesus, saying, “Woman, I don’t know him.”",
          "img": "https://wolf-labs.pages.dev/p/c3eca1cf30fd/arent-you-one-of-them/img/live-patio.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Question tags. Four quick ones.",
      "regra": "<b>were → weren't you?</b> · <b>isn't → is he?</b> · no helper: <b>do / does / did</b> · <b>I am → aren't I?</b> · one tag for everything (<i>isn't it?</i>) is not English.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "You were with him, weren't you?",
          "aceita": [],
          "d": "Hint: <b>were</b> in the sentence, so <b>weren't</b> in the tag."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: the tag is wrong.",
          "mostra": "She knows him, isn't it?",
          "r": "She knows him, doesn't she?",
          "aceita": [],
          "d": "Hint: no helper in the sentence, so the tag uses <b>does</b>, and it matches <b>she</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: the tag is wrong.",
          "mostra": "You are one of them, are you?",
          "r": "You are one of them, aren't you?",
          "aceita": [],
          "d": "Hint: a positive sentence needs a negative tag."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: the tag is wrong.",
          "mostra": "They lit the fire, weren't they?",
          "r": "They lit the fire, didn't they?",
          "aceita": [],
          "d": "Hint: <b>lit</b> is a past verb with no helper, so the tag uses <b>did</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/c3eca1cf30fd/arent-you-one-of-them/img/live-capa2.webp",
      "leg": "Glowing coals in the dark",
      "pede": "Look at the picture: glowing coals in the dark. Write 2 or 3 sentences with question tags about a cold night by a fire. Ask a friend something, and check something you think you know.",
      "ph": "It's a cold night, isn't it? …",
      "ex": "It's a cold night, isn't it? You didn't bring a coat, did you? We can sit by the fire, can't we?"
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "In Luke 22:60 Peter says, “Man, I don’t know what you are talking about!” Think of a time when you were afraid to say the truth. Write two sentences, and end each one with a tag.",
          "ph": "I was afraid to … , wasn't I?",
          "ex": "Last year I was afraid to say no to a friend. It's hard to say no, isn't it? You have felt that too, haven't you?"
        },
        {
          "q": "Think of a place you know well. Check two things about it with tags.",
          "ph": "It's a quiet place, isn't it? …",
          "ex": "The beach near my house is quiet, isn't it? It doesn't get crowded in winter, does it?"
        }
      ]
    }
  }
};
