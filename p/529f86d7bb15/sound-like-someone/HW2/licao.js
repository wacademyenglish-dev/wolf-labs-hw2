/* SOUND LIKE SOMEONE · LIÇÃO DE CASA 2.0 (24/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=".
   Better Speaking (B2). Nenhum português na lição. */
window.HW2 = {
  "id": "sound-like-someone",
  "titulo": "Sound Like Someone",
  "nivel": "B2",
  "minutos": 10,
  "alvo": "chunks and collocations: take it as it comes, the ups and downs, a week in the life of, a piece of advice; make a mistake, never 'do a mistake'; a piece of advice / some advice, never 'an advice'",
  "abrir": "Which English phrase do you love saying? Is it a whole chunk?",
  "fecho": "Speak in <b>chunks</b>: <i>take it as it comes, the ups and downs, a week in the life of, a piece of advice</i>. They are learned and said as one block, so you sound smoother. Watch the traps: <i>an advice</i> is <b>a piece of advice</b> or <b>some advice</b>, <i>do a mistake</i> is <b>make a mistake</b>. And choose one person to copy.",
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
      "sub": "Mia and Leo talk about how to sound more natural. A new scene, about one minute.",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, my English is correct, but it sounds slow. Word, word, word."
        },
        {
          "quem": "leo",
          "t": "Because you build every sentence from single words. Native speakers use chunks."
        },
        {
          "quem": "mia",
          "t": "Chunks? Like what?"
        },
        {
          "quem": "leo",
          "t": "Like take it as it comes. Or the ups and downs. You say them as one block."
        },
        {
          "quem": "mia",
          "t": "I also say things like, can I give you an advice?"
        },
        {
          "quem": "leo",
          "t": "Almost. Advice is uncountable. Say, can I give you a piece of advice, or some advice."
        },
        {
          "quem": "mia",
          "t": "And everybody does mistakes, right?"
        },
        {
          "quem": "leo",
          "t": "Everybody makes mistakes. Make a mistake, not do a mistake."
        },
        {
          "quem": "mia",
          "t": "Good to know. What is your best tip?"
        },
        {
          "quem": "leo",
          "t": "Pick one person you like, a presenter maybe, and copy how they speak. A piece of advice from me."
        },
        {
          "quem": "mia",
          "t": "Perfect. I will copy my favorite podcaster this week."
        }
      ],
      "perguntas": [
        {
          "q": "Why does Mia sound slow?",
          "op": [
            "She builds sentences word by word",
            "She speaks too quietly",
            "She reads too much"
          ],
          "a": 0,
          "por": "You build every sentence from single words. Native speakers use chunks."
        },
        {
          "q": "What is the correct form?",
          "op": [
            "A piece of advice",
            "An advice",
            "A advices"
          ],
          "a": 0,
          "por": "Say, can I give you a piece of advice, or some advice."
        },
        {
          "q": "What does Leo recommend at the end?",
          "op": [
            "Copy one person you like",
            "Stop speaking for a week",
            "Translate every word"
          ],
          "a": 0,
          "por": "Pick one person you like and copy how they speak."
        }
      ]
    },
    "out": {
      "sub": "Three sentences from the scene. Hear it, then say it.",
      "frases": [
        {
          "t": "Life has its ups and downs, so I just take it as it comes.",
          "au": "audio/say1.mp3"
        },
        {
          "t": "Can I give you a piece of advice about speaking?",
          "au": "audio/say2.mp3"
        },
        {
          "t": "Everybody makes mistakes, and that is part of learning.",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Chunks and collocations. Four quick ones.",
      "regra": "<b>the ups and downs</b> · <b>take it as it comes</b> · <b>a piece of advice</b> (never <i>an advice</i>) · <b>make a mistake</b> (never <i>do</i>).",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "Life has its ups and downs.",
          "aceita": [],
          "d": "Hint: a fixed chunk: <b>ups and downs</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "Can I give you an advice?",
          "r": "Can I give you a piece of advice?",
          "aceita": [
            "Can I give you some advice?"
          ],
          "d": "Hint: <b>advice</b> is uncountable: <b>a piece of advice</b> or <b>some advice</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "Everybody does mistakes.",
          "r": "Everybody makes mistakes.",
          "aceita": [],
          "d": "Hint: the verb that goes with <b>mistake</b> is <b>make</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "You just take it as it goes.",
          "r": "You just take it as it comes.",
          "aceita": [],
          "d": "Hint: the chunk ends with <b>comes</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "pede": "Write 2 or 3 sentences about your week, as if it were a chunk story. Use <b>the ups and downs</b>, <b>take it as it comes</b> or <b>a piece of advice</b>.",
      "ph": "This week had its ups and downs …",
      "ex": "This week had its ups and downs. I just take it as it comes. A piece of advice from me: sleep early."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "Which person would you like to copy when you speak English?",
          "ph": "I would like to copy …",
          "ex": "I would like to copy my favorite podcaster. She sounds so natural."
        },
        {
          "q": "Give your friend a piece of advice about learning English.",
          "ph": "A piece of advice: …",
          "ex": "A piece of advice: listen every day, even for five minutes."
        }
      ]
    }
  }
};
