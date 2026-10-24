/* YOU'RE NEW, AREN'T YOU? · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: question tags. B1: nenhum português. */
window.HW2 = {
  "id": "youre-new-arent-you",
  "titulo": "You're New, Aren't You?",
  "nivel": "B1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/63123f69516d/youre-new-arent-you/img/live-capa.webp",
  "alvo": "question tags: positive sentence + negative tag (It's hot, isn't it?), negative sentence + positive tag (You don't cook, do you?); the tag copies the auxiliary or uses do / does / did; Let's ..., shall we?",
  "abrir": "How do you start a conversation with a stranger in a class or at a party?",
  "fecho": "<b>Positive sentence, negative tag</b>: <i>You're new, aren't you?</i> <b>Negative sentence, positive tag</b>: <i>You don't cook, do you?</i> No auxiliary? Use <b>do / does / did</b>. And <i>Let's ..., shall we?</i>",
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
      "sub": "Mia and Leo at the first night of a cooking class. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/63123f69516d/youre-new-arent-you/img/live-conversa.webp",
      "leg": "A long table under warm lamps",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "You're new here, aren't you?"
        },
        {
          "quem": "mia",
          "t": "Yes, it's my first night. It's a bit scary, isn't it?"
        },
        {
          "quem": "leo",
          "t": "Only the knives! You don't cook much, do you?"
        },
        {
          "quem": "mia",
          "t": "Not really. I can make pasta and eggs."
        },
        {
          "quem": "leo",
          "t": "That's a start. The teacher looks serious, doesn't he?"
        },
        {
          "quem": "mia",
          "t": "He does. Is he nice?"
        },
        {
          "quem": "leo",
          "t": "Very. Last week I burned the sauce and he laughed. You came with a friend, didn't you?"
        },
        {
          "quem": "mia",
          "t": "No, I came alone. My friend cancelled."
        },
        {
          "quem": "leo",
          "t": "Then let's work together, shall we?"
        },
        {
          "quem": "mia",
          "t": "Great idea. I'm going to cry when we cut the onions, aren't I?"
        },
        {
          "quem": "leo",
          "t": "We all do. Welcome to the club!"
        }
      ],
      "perguntas": [
        {
          "q": "How does Mia feel on her first night?",
          "op": [
            "A bit scared",
            "Very confident",
            "Bored"
          ],
          "a": 0,
          "por": "It's a bit scary, isn't it?"
        },
        {
          "q": "What can Mia cook?",
          "op": [
            "Pasta and eggs",
            "Only toast",
            "Nothing at all"
          ],
          "a": 0,
          "por": "I can make pasta and eggs."
        },
        {
          "q": "Why did Mia come alone?",
          "op": [
            "Her friend cancelled",
            "Her friend was late",
            "She likes being alone"
          ],
          "a": 0,
          "por": "No, I came alone. My friend cancelled."
        }
      ]
    },
    "out": {
      "sub": "Three friendly questions with tags. Hear it, then say it.",
      "frases": [
        {
          "t": "You're new here, aren't you?",
          "img": "https://wolf-labs.pages.dev/p/63123f69516d/youre-new-arent-you/img/live-capa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "You don't cook much, do you?",
          "img": "https://wolf-labs.pages.dev/p/63123f69516d/youre-new-arent-you/img/live-capa.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "Let's cut the onions together, shall we?",
          "img": "https://wolf-labs.pages.dev/p/63123f69516d/youre-new-arent-you/img/live-conversa.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Question tags: the right tag every time. Four quick ones.",
      "regra": "<b>+ sentence, - tag</b> (isn't it?) · <b>- sentence, + tag</b> (do you?) · no auxiliary: <b>do / does / did</b> · <b>Let's ..., shall we?</b>",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "The kitchen is huge, isn't it?",
          "aceita": [],
          "d": "Hint: a positive sentence takes a <b>negative</b> tag."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: the tag is wrong.",
          "mostra": "You live near here, aren't you?",
          "r": "You live near here, don't you?",
          "aceita": [],
          "d": "Hint: <b>live</b> has no auxiliary, so the tag uses <b>do</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: the tag is wrong.",
          "mostra": "You didn't bring an apron, didn't you?",
          "r": "You didn't bring an apron, did you?",
          "aceita": [],
          "d": "Hint: a negative sentence takes a <b>positive</b> tag."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: the tag is wrong.",
          "mostra": "Let's start now, will we?",
          "r": "Let's start now, shall we?",
          "aceita": [],
          "d": "Hint: <b>Let's ...</b> always ends with <b>shall we?</b>"
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/63123f69516d/youre-new-arent-you/img/live-conversa.webp",
      "leg": "A long wooden table under warm lamps",
      "pede": "Look at the picture: a long wooden table under warm lamps in a quiet cooking classroom. Write 2 or 3 sentences you could say to a stranger there, each ending with a question tag. Use <b>isn't it?</b>, <b>don't you?</b>, <b>did you?</b> or <b>shall we?</b>",
      "ph": "This room is big, …",
      "ex": "This room is beautiful, isn't it? You came early, didn't you? Let's find a good seat, shall we?"
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "Say something about the place you are in now, and add a tag.",
          "ph": "This … is …, isn't it?",
          "ex": "This room is very quiet, isn't it?"
        },
        {
          "q": "Guess something about a friend's weekend, and add a tag.",
          "ph": "You … , didn't you?",
          "ex": "You went to the beach, didn't you?"
        }
      ]
    }
  }
};
