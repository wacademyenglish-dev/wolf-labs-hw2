/* THE INTERVIEWER · LIÇÃO DE CASA 2.0 (24/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: perguntas de aprofundamento (What made you...? How did you...? Could you walk me through...?). B2: nenhum português na lição. */
window.HW2 = {
  "id": "the-interviewer",
  "titulo": "The Interviewer",
  "nivel": "B2",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/ac3ac3d65813/the-interviewer/img/live-capa.webp",
  "alvo": "follow-up questions that dig deeper: What made you + base verb? How did you + base verb? Could you walk me through ...? What would you do differently? Normal question order, no did after made, explain something to someone",
  "abrir": "Think of a decision you made recently. What could someone ask to dig deeper?",
  "fecho": "A follow-up digs one layer deeper: <b>What made you choose it?</b> (<i>made you</i> + base verb, no <s>to</s>) · <b>How did you decide?</b> (question order: <i>did you</i>) · <b>Could you walk me through it?</b> · <b>What would you do differently?</b> And <b>explain</b> takes <i>to</i> before a person: <i>explain it to me</i>.",
  "elenco": {
    "mia": { "nome": "Mia", "voz": "en-US-AvaNeural", "cor": "#86c9f0" },
    "leo": { "nome": "Leo", "voz": "en-AU-WilliamMultilingualNeural", "cor": "#f0b866" }
  },
  "rate": "-12%",
  "rodadas": {
    "listen": {
      "sub": "Mia and Leo talk about a job interview. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/ac3ac3d65813/the-interviewer/img/live-capa.webp",
      "leg": "The interview room",
      "audio": "audio/listen.mp3",
      "falas": [
        { "quem": "mia", "t": "Leo, how was the interview with Rafael? Is he good?" },
        { "quem": "leo", "t": "He says he built the whole search feature. So I asked, What exactly did you do?" },
        { "quem": "mia", "t": "And what did he say?" },
        { "quem": "leo", "t": "He kept saying we. We chose Postgres. So I asked, What made you choose it? He had no answer." },
        { "quem": "mia", "t": "Hmm. Did you ask how he decided?" },
        { "quem": "leo", "t": "Yes. How did you decide? He said the team lead decided." },
        { "quem": "mia", "t": "So it wasn't his decision. Did he explain the trade-offs to you?" },
        { "quem": "leo", "t": "Not really. I asked, Could you walk me through the design? He only repeated the names of the tools." },
        { "quem": "mia", "t": "What about mistakes? What would he do differently?" },
        { "quem": "leo", "t": "Nothing. He said he wouldn't change a thing. That's a red flag for me." },
        { "quem": "mia", "t": "OK. Write it in the feedback, and I'll talk to him tomorrow." }
      ],
      "perguntas": [
        {
          "q": "What did Leo ask about the database?",
          "op": ["What made you choose it?", "Why is Postgres slow?", "Did you use it before?"],
          "a": 0,
          "por": "So I asked, What made you choose it? He had no answer."
        },
        {
          "q": "Who really made the decision, according to Rafael?",
          "op": ["The team lead", "Rafael", "Leo"],
          "a": 0,
          "por": "He said the team lead decided."
        },
        {
          "q": "Why is his last answer a red flag for Leo?",
          "op": ["He wouldn't change a thing", "He talked about his mistakes too much", "He asked too many questions"],
          "a": 0,
          "por": "Nothing. He said he wouldn't change a thing. That's a red flag for me."
        }
      ]
    },
    "out": {
      "sub": "Three questions from the interview. Hear it, then say it.",
      "frases": [
        { "t": "What made you choose that database?", "au": "audio/say1.mp3", "img": "https://wolf-labs.pages.dev/p/ac3ac3d65813/the-interviewer/img/live-b.webp" },
        { "t": "Could you walk me through the design?", "au": "audio/say2.mp3", "img": "https://wolf-labs.pages.dev/p/ac3ac3d65813/the-interviewer/img/live-capa.webp" },
        { "t": "What would you do differently next time?", "au": "audio/say3.mp3", "img": "https://wolf-labs.pages.dev/p/ac3ac3d65813/the-interviewer/img/live-b.webp" }
      ]
    },
    "focus": {
      "sub": "Order, verb form, preposition. Four quick ones.",
      "regra": "<b>What made you</b> + base verb, no <i>to</i> · question order: <b>How did you solve</b> it? · <b>explain</b> it <b>to</b> me · <b>What made</b>, not <i>what did make</i>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "What made you choose that database?",
          "aceita": [],
          "d": "Hint: <b>made you</b> + base verb: <b>choose</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word too many.",
          "mostra": "What made you to leave your last job?",
          "r": "What made you leave your last job?",
          "aceita": [],
          "d": "Hint: after <b>made you</b> the verb has no <i>to</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: the order is wrong.",
          "mostra": "How you did solve the problem?",
          "r": "How did you solve the problem?",
          "aceita": [],
          "d": "Hint: question order: <b>did you</b> + base verb."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: a word is missing.",
          "mostra": "Can you explain me your design?",
          "r": "Can you explain your design to me?",
          "aceita": ["Can you explain to me your design?", "Could you explain your design to me?"],
          "d": "Hint: <b>explain</b> something <b>to</b> someone."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/ac3ac3d65813/the-interviewer/img/live-b.webp",
      "leg": "Preparing the questions",
      "pede": "Look at the picture: someone is preparing an interview. A candidate says: I improved our app. Write three follow-up questions that dig deeper. Use <b>What made you ...?</b>, <b>How did you ...?</b> or <b>Could you walk me through ...?</b>",
      "ph": "What exactly did you …?",
      "ex": "What exactly did you improve? How did you measure it? Could you walk me through the hardest part?"
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "Think of a decision you made recently. What could someone ask you to dig deeper?",
          "ph": "What made you …?",
          "ex": "What made you choose this course?"
        },
        {
          "q": "A friend says: I fixed the bug. Ask two follow-up questions.",
          "ph": "How did you …?",
          "ex": "How did you find the cause? Could you walk me through the fix?"
        }
      ]
    }
  }
};
