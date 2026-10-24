/* THAT'S A GREAT QUESTION · LIÇÃO DE CASA 2.0 (24/10/2026)
   Motor: hw2.js. JSON puro depois do "=".
   Alvo: Q&A phrases: buy time, check, admit, park, close. C1: nenhum português. */
window.HW2 = {
  "id": "thats-a-great-question",
  "titulo": "That's a Great Question",
  "nivel": "C1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/422f8d754555/thats-a-great-question/img/live-capa.webp",
  "alvo": "handling questions after a talk: buy time (Let me think about that for a second), check (If I understand you correctly), admit (I don't have the figures with me / I'd have to check), park (Can I come back to that at the end?), stay on topic (a bit outside the scope), calm a hostile one (I can see why you'd think that. However, ...), close (Does that answer your question?)",
  "abrir": "Which question do you fear most after a presentation?",
  "fecho": "After a talk, the questions decide how you sound. <b>Buy time</b>: <i>Let me think about that for a second.</i> <b>Check</b>: <i>If I understand you correctly, you're asking…</i> <b>Admit, then offer</b>: <i>I don't have the figures with me, but I'd be happy to send them.</i> <b>Stay on topic</b>: <i>a bit outside the scope of today's talk</i>. <b>Calm a hostile one</b>: <i>I can see why you'd think that. However, …</i> <b>Close</b>: <i>Does that answer your question?</i> Never <i>answer to</i> a question, and never invent a number.",
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
      "sub": "Mia and Leo rehearse the questions for his talk. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/422f8d754555/thats-a-great-question/img/live-conversa.webp",
      "leg": "A glass of water and a notebook at the lectern",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, your talk is tomorrow. Let's practice the questions. I'll be the audience. How many people use your app?"
        },
        {
          "quem": "leo",
          "t": "That's a great question. Let me think about that for a second. I don't have the exact figures with me, but it's around forty thousand."
        },
        {
          "quem": "mia",
          "t": "So, you're saying that's not very many?"
        },
        {
          "quem": "leo",
          "t": "If I understand you correctly, you're asking whether forty thousand is enough. I can see why you'd think that. However, for a new app, it's a strong start."
        },
        {
          "quem": "mia",
          "t": "What about prices in other countries, and taxes, and the law?"
        },
        {
          "quem": "leo",
          "t": "That's a bit outside the scope of today's talk, but can I come back to that at the end?"
        },
        {
          "quem": "mia",
          "t": "Good. And if you really don't know something?"
        },
        {
          "quem": "leo",
          "t": "I'd have to check, and I'd be happy to send you the answer tomorrow. I would never invent a number."
        },
        {
          "quem": "mia",
          "t": "Perfect. Now close your answer."
        },
        {
          "quem": "leo",
          "t": "Does that answer your question?"
        },
        {
          "quem": "mia",
          "t": "Yes! Now you sound calm and professional."
        }
      ],
      "perguntas": [
        {
          "q": "What does Leo say about the exact figures?",
          "op": [
            "He doesn't have them with him",
            "He invents a number",
            "He refuses to answer"
          ],
          "a": 0,
          "por": "I don't have the exact figures with me."
        },
        {
          "q": "How does Leo deal with the question about prices, taxes and the law?",
          "op": [
            "He says it is outside the scope and offers to come back to it",
            "He answers all three at once",
            "He ignores it"
          ],
          "a": 0,
          "por": "That's a bit outside the scope of today's talk, but can I come back to that at the end?"
        },
        {
          "q": "What would Leo never do?",
          "op": [
            "Invent a number",
            "Ask for a break",
            "Send a report"
          ],
          "a": 0,
          "por": "I would never invent a number."
        }
      ]
    },
    "out": {
      "sub": "Three sentences for the question time. Hear it, then say it.",
      "frases": [
        {
          "t": "I don't have the exact figures with me, but I'd be happy to send them.",
          "img": "https://wolf-labs.pages.dev/p/422f8d754555/thats-a-great-question/img/live-capa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "That's a bit outside the scope of today's talk.",
          "img": "https://wolf-labs.pages.dev/p/422f8d754555/thats-a-great-question/img/live-conversa.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "If I understand you correctly, you're asking about the cost.",
          "img": "https://wolf-labs.pages.dev/p/422f8d754555/thats-a-great-question/img/live-capa.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Time, honesty, and a calm close. Four quick ones.",
      "regra": "<b>Let me think about that</b> · <b>If I understand you correctly</b> · <b>I'd have to check</b> · <b>Does that answer your question?</b> (no <i>answer to</i>) · <b>find out</b>, not <i>discover</i>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "Let me think about that for a second.",
          "aceita": [],
          "d": "Hint: the phrase that buys you a moment."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is extra.",
          "mostra": "Does that answer to your question?",
          "r": "Does that answer your question?",
          "aceita": [],
          "d": "Hint: <b>answer</b> takes the question directly: no <i>to</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one verb is wrong.",
          "mostra": "I don't know, but I can discover it.",
          "r": "I don't know, but I can find out.",
          "aceita": [],
          "d": "Hint: to get information, use <b>find out</b>. <i>Discover</i> is for new things nobody knew."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "I'm not sure to understand your question.",
          "r": "I'm not sure I understand your question.",
          "aceita": [
            "I'm not sure that I understand your question."
          ],
          "d": "Hint: <b>sure</b> + a full clause: <b>I understand</b>, not <i>to understand</i>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/422f8d754555/thats-a-great-question/img/live-conversa.webp",
      "leg": "A glass of water and a notebook at the lectern",
      "pede": "Look at the picture: a glass of water and a notebook at a lectern. Write 2 or 3 sentences: a difficult question you might get, and how you would answer it calmly. Use <b>Let me think about that</b>, <b>I can see why you'd think that</b> or <b>I'd have to check</b>.",
      "ph": "A difficult question would be … I would say …",
      "ex": "A hostile question might be about the price. I would say: I can see why you'd think that. However, the quality is much higher. Does that answer your question?"
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "Which question at work do you hate to hear? How could you buy time?",
          "ph": "I hate it when … I could say …",
          "ex": "I hate it when somebody asks about the budget. I could say: let me think about that for a second."
        },
        {
          "q": "What do you say when you don't have the answer?",
          "ph": "I would say … and I would offer …",
          "ex": "I would say: I don't have that with me, but I'd be happy to check and send it tomorrow."
        }
      ]
    }
  }
};
