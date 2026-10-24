/* BUSINESS 1 · CENA 01 (I'M LOYAL, I'M TRUSTWORTHY) · LIÇÃO DE CASA 2.0 (24/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: apresentar-se com I am + adjetivo, I love + coisa, I want to + verbo (Northwind & Co.). A1: dicas em português só nas notas (d). */
window.HW2 = {
  "id": "biz-cena-a1-01",
  "titulo": "I'm Loyal, I'm Trustworthy",
  "nivel": "A1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/85439300266f/biz-cena-a1-01/img/live-capa.webp",
  "alvo": "introduce yourself for a job: I am + adjective (I am friendly), I love + noun / -ing (I love teamwork), I want to + verb (I want to learn)",
  "abrir": "You want a job. What are two good words about you?",
  "fecho": "<b>I am</b> + good word: <i>I am organized</i>. <b>I love</b> + thing: <i>I love teamwork</i>. <b>I want to</b> + verb: <i>I want to learn</i>. For age: <i>I am 30 years old</i>, not <i>I have 30 years</i>.",
  "elenco": {
    "mia": { "nome": "Mia", "voz": "en-US-AvaNeural", "cor": "#86c9f0" },
    "leo": { "nome": "Leo", "voz": "en-AU-WilliamMultilingualNeural", "cor": "#f0b866" }
  },
  "rate": "-14%",
  "rodadas": {
    "listen": {
      "sub": "Leo practices a short video for a job. A new scene, about 40 seconds.",
      "img": "https://wolf-labs.pages.dev/p/85439300266f/biz-cena-a1-01/img/live-capa.webp",
      "leg": "A phone on a tripod, ready for the video",
      "audio": "audio/listen.mp3",
      "falas": [
        { "quem": "leo", "t": "Mia, I am making a video for Northwind and Company. Can you listen?" },
        { "quem": "mia", "t": "Sure! Go ahead." },
        { "quem": "leo", "t": "Hi! I'm Leo. I'm from Perth. I'm friendly and organized." },
        { "quem": "mia", "t": "Nice! What do you love?" },
        { "quem": "leo", "t": "I love teamwork. And I want to learn every day." },
        { "quem": "mia", "t": "Good. What are you good at?" },
        { "quem": "leo", "t": "I'm good with people. I'm not good at Excel, but I learn fast." },
        { "quem": "mia", "t": "That is honest. Say thank you at the end." },
        { "quem": "leo", "t": "Thank you! OK, one more time." }
      ],
      "perguntas": [
        { "q": "Where is Leo from?", "op": ["Perth", "Northwind", "Excel"], "a": 0, "por": "I'm from Perth." },
        { "q": "What does Leo love?", "op": ["Teamwork", "Excel", "Videos"], "a": 0, "por": "I love teamwork." },
        { "q": "What is Leo not good at?", "op": ["Excel", "People", "Learning"], "a": 0, "por": "I'm not good at Excel, but I learn fast." }
      ]
    },
    "out": {
      "sub": "Three sentences for your video. Hear it, then say it.",
      "frases": [
        { "t": "I am friendly and organized.", "au": "audio/say1.mp3", "img": "https://wolf-labs.pages.dev/p/85439300266f/biz-cena-a1-01/img/live-capa.webp" },
        { "t": "I love teamwork.", "au": "audio/say2.mp3", "img": "https://wolf-labs.pages.dev/p/85439300266f/biz-cena-a1-01/img/live-capa.webp" },
        { "t": "I want to learn every day.", "au": "audio/say3.mp3", "img": "https://wolf-labs.pages.dev/p/85439300266f/biz-cena-a1-01/img/live-capa.webp" }
      ]
    },
    "focus": {
      "sub": "I am, I love, I want. Four quick ones.",
      "regra": "<b>I am</b> + good word · <b>I love</b> + thing / -ing · <b>I want to</b> + verb · age: <b>I am 30 years old</b>.",
      "itens": [
        { "tipo": "monta", "t": "Put the words in order.", "r": "I love teamwork and I want to learn.", "aceita": [], "d": "Dica: <b>I love</b> + coisa; <b>I want to</b> + verbo." },
        { "tipo": "escreve", "t": "Fix it: one word is wrong.", "mostra": "I love work in a team.", "r": "I love working in a team.", "aceita": ["I love to work in a team."], "d": "Dica: depois de <b>love</b>, use <b>-ing</b> (working) ou <b>to</b> + verbo." },
        { "tipo": "escreve", "t": "Fix it: one word is missing.", "mostra": "I want learn English.", "r": "I want to learn English.", "aceita": [], "d": "Dica: <b>want to</b> + verbo. Faltou o <b>to</b>." },
        { "tipo": "escreve", "t": "Fix it: how do you say your age?", "mostra": "I have 30 years.", "r": "I am 30 years old.", "aceita": ["I'm 30 years old.", "I am 30."], "d": "Dica: idade em inglês é <b>I am</b>, não <i>I have</i>." }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/85439300266f/biz-cena-a1-01/img/live-capa.webp",
      "leg": "A phone on a tripod",
      "pede": "Look at the picture: a phone ready for a video. Write 2 or 3 sentences to introduce yourself. Use <b>I am</b>, <b>I love</b> or <b>I want to</b>.",
      "ph": "Hi! I am …",
      "ex": "Hi! I am Paula. I am friendly and organized. I love teamwork."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        { "q": "What are two good words about you?", "ph": "I am … and …", "ex": "I am friendly and organized." },
        { "q": "What do you want to learn this year?", "ph": "I want to learn …", "ex": "I want to learn English and Excel." }
      ]
    }
  }
};
