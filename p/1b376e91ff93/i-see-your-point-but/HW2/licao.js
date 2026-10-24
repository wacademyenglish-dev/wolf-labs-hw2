/* I SEE YOUR POINT, BUT... · LIÇÃO DE CASA 2.0 (24/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: discordar com concessão (While I agree that..., Although..., That said, ..., I take your point, but...). B2: nenhum português na lição. */
window.HW2 = {
  "id": "i-see-your-point-but",
  "titulo": "I See Your Point, But...",
  "nivel": "B2",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/1b376e91ff93/i-see-your-point-but/img/live-capa.webp",
  "alvo": "disagreeing politely with a concession: While I agree that ..., Although ..., That said, ..., I take your point, but ...; no but after although, no be after while I agree, although instead of despite + clause",
  "abrir": "Think of an opinion people argue about. Can you agree with part of it and still disagree?",
  "fecho": "Start with what you accept, then say your concern: <b>While I agree that</b> it is slow, a rewrite is risky. <b>Although</b> the idea is good, ... (no <s>but</s> in the same sentence). <b>I take your point, but</b> ... <b>That said,</b> ... Careful: <i>While I agree</i>, not <s>while I'm agree</s>; <i>although I agree</i>, not <s>despite I agree</s>.",
  "elenco": {
    "mia": { "nome": "Mia", "voz": "en-US-AvaNeural", "cor": "#86c9f0" },
    "leo": { "nome": "Leo", "voz": "en-AU-WilliamMultilingualNeural", "cor": "#f0b866" }
  },
  "rate": "-12%",
  "rodadas": {
    "listen": {
      "sub": "Mia and Leo talk about an architecture review. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/1b376e91ff93/i-see-your-point-but/img/live-capa.webp",
      "leg": "The whiteboard after the review",
      "audio": "audio/listen.mp3",
      "falas": [
        { "quem": "mia", "t": "Leo, how did the architecture review go? Viktor wants twelve microservices." },
        { "quem": "leo", "t": "I know. I said, While I agree that the monolith is slow, twelve services is a lot for a team of six." },
        { "quem": "mia", "t": "How did he react?" },
        { "quem": "leo", "t": "He said he built the monolith ten years ago. Then I said, I take your point, but the migration will cost us six months." },
        { "quem": "mia", "t": "Brave. Did he get angry?" },
        { "quem": "leo", "t": "No, because I started with something we agree on. That said, he didn't change his mind." },
        { "quem": "mia", "t": "So what's your alternative?" },
        { "quem": "leo", "t": "Although the idea is good, we could split only the payments part first." },
        { "quem": "mia", "t": "That sounds reasonable. Did you put it in the RFC?" },
        { "quem": "leo", "t": "Not yet. I'll write the comment tonight: what I accept, my concern, and the alternative." },
        { "quem": "mia", "t": "Good. Keep it calm, and keep it short." }
      ],
      "perguntas": [
        {
          "q": "How did Leo begin his disagreement?",
          "op": ["With something he agrees on", "With You are wrong", "With a joke"],
          "a": 0,
          "por": "While I agree that the monolith is slow, ..."
        },
        {
          "q": "What is Leo's concern about the migration?",
          "op": ["It will cost six months", "It will cost six weeks", "It needs twelve developers"],
          "a": 0,
          "por": "I take your point, but the migration will cost us six months."
        },
        {
          "q": "What alternative does Leo suggest?",
          "op": ["Split only the payments part first", "Keep the monolith forever", "Build twelve services at once"],
          "a": 0,
          "por": "We could split only the payments part first."
        }
      ]
    },
    "out": {
      "sub": "Three sentences from the review. Hear it, then say it.",
      "frases": [
        { "t": "While I agree that it is slow, a rewrite is risky.", "au": "audio/say1.mp3", "img": "https://wolf-labs.pages.dev/p/1b376e91ff93/i-see-your-point-but/img/live-a.webp" },
        { "t": "I take your point, but the migration will cost us six months.", "au": "audio/say2.mp3", "img": "https://wolf-labs.pages.dev/p/1b376e91ff93/i-see-your-point-but/img/live-b.webp" },
        { "t": "That said, we could split only the payments part first.", "au": "audio/say3.mp3", "img": "https://wolf-labs.pages.dev/p/1b376e91ff93/i-see-your-point-but/img/live-capa.webp" }
      ]
    },
    "focus": {
      "sub": "Concession, word choice, verb form. Four quick ones.",
      "regra": "<b>While I agree</b> (not <i>I'm agree</i>) · <b>Although</b> + clause, with no <i>but</i> · <b>despite</b> goes with a noun or -ing, not a clause · <b>That said,</b> + comma.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "While I agree that it scales, it costs more.",
          "aceita": [],
          "d": "Hint: first what you accept (<b>While I agree that</b> ...), then the concern."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word too many.",
          "mostra": "Although I agree, but we need more time.",
          "r": "Although I agree, we need more time.",
          "aceita": ["While I agree, we need more time.", "I agree, but we need more time."],
          "d": "Hint: <b>although</b> already does the job of <i>but</i>. Use only one."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: wrong word before a clause.",
          "mostra": "Despite I agree, the migration costs too much.",
          "r": "Although I agree, the migration costs too much.",
          "aceita": ["While I agree, the migration costs too much.", "Despite agreeing, the migration costs too much."],
          "d": "Hint: before a clause (<b>I agree</b>) use <b>although</b>, not <i>despite</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: the verb is wrong.",
          "mostra": "While I'm agree with you, it is risky.",
          "r": "While I agree with you, it is risky.",
          "aceita": [],
          "d": "Hint: <b>agree</b> is already a verb. No <i>am</i> before it."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/1b376e91ff93/i-see-your-point-but/img/live-b.webp",
      "leg": "A careful move",
      "pede": "Look at the picture: a chess game, every move is careful. A colleague wants to rewrite the whole app. Write your comment in the review: what you accept, your concern, an alternative. Use <b>While I agree that</b>, <b>Although</b>, <b>I take your point, but</b> or <b>That said</b>.",
      "ph": "While I agree that …, …",
      "ex": "While I agree that the old code is hard to read, a full rewrite will take a year. That said, we could clean up one module at a time. I take your point, but let's start small."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "Think of a popular opinion (dark mode, remote work, pineapple on pizza). Agree with part of it, then disagree.",
          "ph": "While I agree that …",
          "ex": "While I agree that dark mode looks cool, I find it hard to read in the sun."
        },
        {
          "q": "A colleague wants to change everything at once. What do you say?",
          "ph": "I take your point, but …",
          "ex": "I take your point, but a big change is risky. That said, we could try it on one small part."
        }
      ]
    }
  }
};
