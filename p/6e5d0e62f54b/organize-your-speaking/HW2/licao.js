/* ORGANIZE YOUR SPEAKING · LIÇÃO DE CASA 2.0 (24/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=".
   Better Speaking (B2). Nenhum português na lição. */
window.HW2 = {
  "id": "organize-your-speaking",
  "titulo": "Organize Your Speaking",
  "nivel": "B2",
  "minutos": 10,
  "alvo": "signposting: phrases that tell the listener what is coming (an interesting question is, let me tell you about, on top of that, and another thing is, but in fact, on the other hand); in fact / actually, never 'in the truth'; on top of that, never 'beyond that'; on the other hand, never 'for other side'",
  "abrir": "Who is the clearest speaker you know? What do they do?",
  "fecho": "Signposts tell your listener what is coming. <b>Let me tell you about…</b> opens a topic, <b>on top of that</b> adds more, <b>but in fact</b> brings the real situation, <b>on the other hand</b> shows the opposite. Ask the question your listener would ask, then answer it. Careful: <i>in the truth</i> is <b>in fact</b>, <i>beyond that</i> is <b>on top of that</b>, and <i>for other side</i> is <b>on the other hand</b>.",
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
      "sub": "Mia has two minutes to present her city to a visitor. Leo coaches her. A new scene, about one minute.",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, I have to present our city to a visitor tomorrow. I always get lost halfway through."
        },
        {
          "quem": "leo",
          "t": "Then tell him what is coming. Start with a signpost. Let me tell you about the old market, for example."
        },
        {
          "quem": "mia",
          "t": "Okay. Let me tell you about the old market. It is cheap and colorful."
        },
        {
          "quem": "leo",
          "t": "Good. Now add something. On top of that, you can say what people eat there."
        },
        {
          "quem": "mia",
          "t": "On top of that, the food is amazing. And another thing is, the vendors always give you a small taste."
        },
        {
          "quem": "leo",
          "t": "Perfect. Now a contrast. Visitors think the market is only for tourists."
        },
        {
          "quem": "mia",
          "t": "But in fact, most customers are local people. On the other hand, it gets crowded on Saturdays."
        },
        {
          "quem": "leo",
          "t": "See? Every phrase warns the listener. He never feels lost."
        },
        {
          "quem": "mia",
          "t": "And I can even ask his question for him. An interesting question is, when is the best time to go?"
        },
        {
          "quem": "leo",
          "t": "Then answer it. Early on a weekday. You are ready."
        },
        {
          "quem": "mia",
          "t": "I feel much better. Thanks, Leo."
        }
      ],
      "perguntas": [
        {
          "q": "What does Leo tell Mia to do first?",
          "op": [
            "Tell the listener what is coming",
            "Speak very fast",
            "Read from a paper"
          ],
          "a": 0,
          "por": "Start with a signpost. Let me tell you about the old market."
        },
        {
          "q": "What does Mia say to show the real situation?",
          "op": [
            "But in fact, most customers are local people",
            "On the other hand, it is cheap",
            "And another thing is, it is old"
          ],
          "a": 0,
          "por": "But in fact, most customers are local people."
        },
        {
          "q": "Why does Mia ask the visitor's question herself?",
          "op": [
            "She asks it, then answers it",
            "She forgot her notes",
            "She wants to stop talking"
          ],
          "a": 0,
          "por": "An interesting question is, when is the best time to go? Then answer it."
        }
      ]
    },
    "out": {
      "sub": "Three sentences from the scene. Hear it, then say it.",
      "frases": [
        {
          "t": "Let me tell you about the old market, and why people love it.",
          "au": "audio/say1.mp3"
        },
        {
          "t": "On top of that, the food is amazing, and another thing is, it is cheap.",
          "au": "audio/say2.mp3"
        },
        {
          "t": "Visitors think it is only for tourists, but in fact most customers live here.",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Signpost, signpost, signpost. Four quick ones.",
      "regra": "<b>Let me tell you about</b> a topic · <b>on top of that</b> adds more · <b>but in fact</b> = in fact / actually · <b>on the other hand</b> = the opposite side.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "On top of that the traffic here is terrible.",
          "aceita": [],
          "d": "Hint: <b>on top of that</b> adds one more point."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one phrase is wrong.",
          "mostra": "In the truth, it took twenty minutes.",
          "r": "In fact, it took twenty minutes.",
          "aceita": [
            "Actually, it took twenty minutes.",
            "But in fact, it took twenty minutes."
          ],
          "d": "Hint: the signpost for the real situation is <b>in fact</b> or <b>actually</b>, not <i>in the truth</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one phrase is wrong.",
          "mostra": "Beyond that, the hotel was very expensive.",
          "r": "On top of that, the hotel was very expensive.",
          "aceita": [
            "And another thing is, the hotel was very expensive."
          ],
          "d": "Hint: to add more information, say <b>on top of that</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one phrase is wrong.",
          "mostra": "For other side, the food was cheap.",
          "r": "On the other hand, the food was cheap.",
          "aceita": [],
          "d": "Hint: to show the opposite side, say <b>on the other hand</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "pede": "Look at the picture: a speaker, ready, in front of a full room. Explain your job or your studies to a new colleague. Use <b>let me tell you about</b>, <b>on top of that</b> and <b>but in fact</b>.",
      "ph": "Let me tell you about my job …",
      "ex": "Let me tell you about my job. I work in a small shop. On top of that, I study English at night. But in fact, I like being busy."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "Who is the clearest speaker you know? What do they do?",
          "ph": "The clearest person I know is …",
          "ex": "My old teacher. He always told us what was coming next."
        },
        {
          "q": "Tell me about your city. Use two signposts.",
          "ph": "Let me tell you about …",
          "ex": "Let me tell you about my city. It is big. On top of that, it is noisy."
        }
      ]
    }
  }
};
