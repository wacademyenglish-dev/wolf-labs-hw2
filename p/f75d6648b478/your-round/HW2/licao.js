/* YOUR ROUND · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: passado simples no papo + I'd like. A2: dicas em portugues so nas notas (d). Sem imagem; bebidas sem alcool. */
window.HW2 = {
  "id": "your-round",
  "titulo": "Your Round",
  "nivel": "A2",
  "minutos": 10,
  "capa": "",
  "alvo": "past simple in small talk: What did you do? Where did you go? I went, I saw, I had, I met; did + plain verb, didn't + plain verb; I'd like ... when you order; never Did you went, never Where you went, never Yesterday I go",
  "abrir": "What did you do last weekend?",
  "fecho": "<b>What did you do? Where did you go?</b> After <b>did</b>, the plain verb: <i>Did you go?</i> The answer: <i>I went to the beach. I saw a film. I had soup.</i> <b>No</b>: <i>I didn't go.</i> At the counter: <b>I'd like</b> a lemonade, please.",
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
  "rate": "-14%",
  "rodadas": {
    "listen": {
      "sub": "Mia and Leo meet friends on a Friday night. A new scene, about 45 seconds.",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia! What did you do today?"
        },
        {
          "quem": "mia",
          "t": "I went to the beach and I saw the old harbour. What about you?"
        },
        {
          "quem": "leo",
          "t": "I worked all day. Did you have lunch?"
        },
        {
          "quem": "mia",
          "t": "Yes, I had soup and bread in a small café."
        },
        {
          "quem": "leo",
          "t": "Good. Now it's my round. What would you like?"
        },
        {
          "quem": "mia",
          "t": "I'd like a lemonade, please."
        },
        {
          "quem": "leo",
          "t": "One lemonade. Did you meet Aoife today?"
        },
        {
          "quem": "mia",
          "t": "No, I didn't. Where did she go?"
        },
        {
          "quem": "leo",
          "t": "She went home to get her guitar. She's playing music here tonight."
        },
        {
          "quem": "mia",
          "t": "Great! Then the next round is mine."
        }
      ],
      "perguntas": [
        {
          "q": "What did Mia do today?",
          "op": [
            "She went to the beach",
            "She worked all day",
            "She met Aoife"
          ],
          "a": 0,
          "por": "I went to the beach and I saw the old harbour."
        },
        {
          "q": "What did Mia have for lunch?",
          "op": [
            "Soup and bread",
            "Pizza",
            "Nothing"
          ],
          "a": 0,
          "por": "I had soup and bread in a small café."
        },
        {
          "q": "Why did Aoife go home?",
          "op": [
            "To get her guitar",
            "To sleep",
            "To cook dinner"
          ],
          "a": 0,
          "por": "She went home to get her guitar."
        }
      ]
    },
    "out": {
      "sub": "Three sentences about your day. Hear it, then say it.",
      "frases": [
        {
          "t": "I went to the beach and I saw the harbour.",
          "au": "audio/say1.mp3"
        },
        {
          "t": "What did you do today?",
          "au": "audio/say2.mp3"
        },
        {
          "t": "I'd like a lemonade, please. It's my round.",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Past simple in small talk. Four quick ones.",
      "regra": "<b>did</b> + plain verb (<i>Did you go?</i>) · answer: <b>went, saw, had, met</b> · <b>didn't</b> + plain verb · <b>I'd like</b> ... · never <i>Did you went</i>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "Where did you go on Saturday?",
          "aceita": [],
          "d": "Dica: <b>Where did you go</b>: <b>did</b> + you + verbo limpo."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "Did you went to the party?",
          "r": "Did you go to the party?",
          "aceita": [],
          "d": "Dica: depois de <b>did</b>, o verbo fica limpo: <b>go</b>, não 'went'."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: the question is wrong.",
          "mostra": "Where you went yesterday?",
          "r": "Where did you go yesterday?",
          "aceita": [],
          "d": "Dica: pergunta no passado: <b>Where did you go</b>?"
        },
        {
          "tipo": "escreve",
          "t": "Fix it: it is in the past.",
          "mostra": "Yesterday I go to the beach.",
          "r": "Yesterday I went to the beach.",
          "aceita": [],
          "d": "Dica: <b>yesterday</b> pede o passado: go vira <b>went</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "pede": "Write 2 or 3 sentences about your last weekend or yesterday: what you did, where you went, what you had. Use the past simple.",
      "ph": "Yesterday I went to …",
      "ex": "Yesterday I went to the beach. I saw my friends and I had a big lunch. I didn't work."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What did you do last weekend?",
          "ph": "Last weekend I …",
          "ex": "Last weekend I visited my grandmother and I watched a film."
        },
        {
          "q": "It's your round. Order drinks for three friends. What do you say?",
          "ph": "I'd like …, please.",
          "ex": "I'd like three coffees, please."
        }
      ]
    }
  }
};
