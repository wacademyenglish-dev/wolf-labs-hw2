/* ENGLISH FOR DESIGNERS · SO WHAT YOU'RE SAYING IS · LIÇÃO DE CASA 2.0 (24/10/2026)
   Motor: hw2.js (kit/hw2). JSON puro depois do "=".
   Alvo: clarifying and confirming what a client means: When you say X, do you mean ...? What do you mean by ...? Just to clarify, ... So what you are saying is that ...; explain to me; want to + verb. B1: nenhum português na lição. */
window.HW2 = {
  "id": "design-so-what-youre-saying-is",
  "titulo": "So What You're Saying Is",
  "nivel": "B1",
  "minutos": 10,
  "alvo": "clarifying and confirming what a client means: When you say X, do you mean ...? What do you mean by ...? Just to clarify, ... So what you are saying is that ...; explain to me; want to + verb",
  "abrir": "A friend says: \"I want a quiet weekend.\" What could that mean?",
  "fecho": "Vague words need clear questions: <b>When you say modern, do you mean…?</b> <b>What do you mean by pop?</b> Say <b>by</b>, not <i>with</i>. Then confirm with <b>Just to clarify…</b> or <b>So what you are saying is that…</b>. And <b>explain to me</b>, not <i>explain me</i>. Asking is not weak English: it is what good designers do.",
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
  "rate": "-8%",
  "rodadas": {
    "listen": {
      "sub": "Mia, a designer, and Leo, who owns a plant shop. A new scene, about one minute.",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Hi Mia. For my new plant shop, I want a modern look. Clean, but fun. Make it pop."
        },
        {
          "quem": "mia",
          "t": "Thanks, Leo. When you say modern, do you mean simple and minimal, or bold and colorful?"
        },
        {
          "quem": "leo",
          "t": "Simple, I think. Lots of white space. But with one bright color."
        },
        {
          "quem": "mia",
          "t": "And what do you mean by pop? Can you show me an example?"
        },
        {
          "quem": "leo",
          "t": "Like this poster on my phone. The yellow is very strong against the dark green."
        },
        {
          "quem": "mia",
          "t": "I see. So what you are saying is that you want a quiet design with one strong color, right?"
        },
        {
          "quem": "leo",
          "t": "Exactly. And not too many leaves. Everyone uses leaves."
        },
        {
          "quem": "mia",
          "t": "Just to clarify, you don't want any leaves in the logo?"
        },
        {
          "quem": "leo",
          "t": "A small one is fine. Just not a big green leaf."
        },
        {
          "quem": "mia",
          "t": "Got it. I will write it in the brief and send it today. Please check it."
        },
        {
          "quem": "leo",
          "t": "Great. Thanks for asking. Nobody asks me these questions."
        }
      ],
      "perguntas": [
        {
          "q": "What does Leo mean by modern?",
          "op": [
            "Simple, with white space and one bright color",
            "Bold, with many leaves",
            "Old and serious"
          ],
          "a": 0,
          "por": "Simple, I think. Lots of white space. But with one bright color."
        },
        {
          "q": "What example does Leo show?",
          "op": [
            "A poster on his phone",
            "A photo of his shop",
            "His old logo"
          ],
          "a": 0,
          "por": "Like this poster on my phone."
        },
        {
          "q": "What can the logo have?",
          "op": [
            "A small leaf",
            "A big green leaf",
            "No color at all"
          ],
          "a": 0,
          "por": "A small one is fine. Just not a big green leaf."
        }
      ]
    },
    "out": {
      "sub": "Three sentences to clarify. Hear it, then say it.",
      "frases": [
        {
          "t": "When you say modern, do you mean simple or bold?",
          "au": "audio/say1.mp3"
        },
        {
          "t": "So what you are saying is that you want one strong color.",
          "au": "audio/say2.mp3"
        },
        {
          "t": "Just to clarify, you don't want any big leaves in the logo?",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Ask, explain, confirm. Four quick ones.",
      "regra": "<b>What do you mean by…?</b> · <b>explain to me</b> · <b>want to</b> + verb · <b>So what you are saying is that…</b>",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "So what you are saying is that the logo is too serious.",
          "aceita": [],
          "d": "Hint: <b>So what you are saying is that</b> + the client's idea, in your words."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one little word is wrong.",
          "mostra": "What do you mean with modern?",
          "r": "What do you mean by modern?",
          "aceita": [],
          "d": "Hint: <b>mean by</b>, not <i>mean with</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: explain needs to.",
          "mostra": "Can you explain me what pop means?",
          "r": "Can you explain to me what pop means?",
          "aceita": [
            "Can you explain what pop means?"
          ],
          "d": "Hint: <b>explain to me</b>, not <i>explain me</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: a word is missing.",
          "mostra": "You want make the poster bigger, right?",
          "r": "You want to make the poster bigger, right?",
          "aceita": [
            "Do you want to make the poster bigger?"
          ],
          "d": "Hint: <b>want to</b> + verb."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "pede": "A client says: \"Make it cozy, but not boring.\" Write two questions to clarify. Then confirm in one sentence with <b>So what you are saying is…</b>",
      "ph": "When you say cozy, do you mean …?",
      "ex": "When you say cozy, do you mean warm colors or soft shapes? What do you mean by boring? So what you are saying is that you want a calm place that is not too plain."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "Think of a word like cheap, quick or big. What does it mean for you?",
          "ph": "For me, quick means …",
          "ex": "For me, quick means less than ten minutes."
        },
        {
          "q": "A friend says: \"I want a quiet weekend.\" Confirm it with \"So what you are saying is…\"",
          "ph": "So what you are saying is …",
          "ex": "So what you are saying is that you want to stay at home and rest."
        }
      ]
    }
  }
};
