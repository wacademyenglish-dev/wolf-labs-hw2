/* HARD NEWS · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: notícia difícil com empatia (I'm afraid / I appreciate / It's essential that). C1: nenhum português. Só live-capa (a live-b mostra uma caixa de mudança, a live-a é clara). Projeto cancelado, empregos seguros. */
window.HW2 = {
  "id": "hard-news",
  "titulo": "Hard News",
  "nivel": "C1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/b0cb38a94476/hard-news/img/live-capa.webp",
  "alvo": "empathetic language for bad news at work: I'm afraid (that) ... · I appreciate this is hard for you · I want to be transparent · I understand how you feel · It's essential that everyone knows ...; never 'I'm afraid of telling you', 'how do you feel', 'hard to you', 'essential to everyone know'",
  "abrir": "Who gave you bad news recently? How did they say it?",
  "fecho": "<b>I'm afraid (that)</b> + a sentence softens the news. <b>I appreciate this is hard for you</b> and <b>I understand how you feel</b> show empathy (after <i>how</i>, the order is normal: <i>how you feel</i>). <b>I want to be transparent</b> promises honesty. <b>It's essential that everyone knows</b> + what changes.",
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
      "sub": "Mia coaches Leo before a hard conversation. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/b0cb38a94476/hard-news/img/live-capa.webp",
      "leg": "An empty meeting room by the window",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, you look nervous. What is happening at two o'clock?"
        },
        {
          "quem": "leo",
          "t": "I have to tell the team that the offline-mode project has been cancelled. Three months of work."
        },
        {
          "quem": "mia",
          "t": "That's tough. How do you plan to start?"
        },
        {
          "quem": "leo",
          "t": "I want to be transparent. I'm afraid the project won't continue, and that's all I know."
        },
        {
          "quem": "mia",
          "t": "Add one sentence for them: I appreciate this is hard for you, because you built most of it."
        },
        {
          "quem": "leo",
          "t": "I appreciate this is hard for you. I understand how you feel. I feel it too."
        },
        {
          "quem": "mia",
          "t": "Good. But don't say 'I understand how do you feel'. After 'how', the word order is normal."
        },
        {
          "quem": "leo",
          "t": "Right, how you feel. And then? Nobody's job is at risk, but they will ask."
        },
        {
          "quem": "mia",
          "t": "Say it clearly. It's essential that everyone knows what changes next week and what stays the same."
        },
        {
          "quem": "leo",
          "t": "What changes: they move to the search project. What stays: the same team and the same manager."
        },
        {
          "quem": "mia",
          "t": "Perfect. Say it slowly and leave room for questions."
        }
      ],
      "perguntas": [
        {
          "q": "Why is Leo nervous?",
          "op": [
            "He has to tell the team that a project was cancelled",
            "He has to ask for a salary rise",
            "He has to present a new product"
          ],
          "a": 0,
          "por": "I have to tell the team that the offline-mode project has been cancelled."
        },
        {
          "q": "Which sentence does Mia suggest to show empathy?",
          "op": [
            "I appreciate this is hard for you",
            "It was only a small project",
            "You should have expected this"
          ],
          "a": 0,
          "por": "Add one sentence for them: I appreciate this is hard for you."
        },
        {
          "q": "What does Mia say is essential?",
          "op": [
            "That everyone knows what changes and what stays the same",
            "That nobody asks any questions",
            "That the meeting is as short as possible"
          ],
          "a": 0,
          "por": "It's essential that everyone knows what changes next week and what stays the same."
        }
      ]
    },
    "out": {
      "sub": "Three kind and clear lines. Hear it, then say it.",
      "frases": [
        {
          "t": "I want to be transparent: I'm afraid the project has been cancelled.",
          "img": "https://wolf-labs.pages.dev/p/b0cb38a94476/hard-news/img/live-capa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "I appreciate this is hard for you, and I understand how you feel.",
          "img": "https://wolf-labs.pages.dev/p/b0cb38a94476/hard-news/img/live-capa.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "It's essential that everyone knows what changes and what stays the same.",
          "img": "https://wolf-labs.pages.dev/p/b0cb38a94476/hard-news/img/live-capa.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Kind and clear. Four quick ones.",
      "regra": "<b>I'm afraid (that) ...</b> · <b>I appreciate this is hard for you</b> · <b>I understand how you feel</b> · <b>I want to be transparent</b> · <b>It's essential that everyone knows ...</b>",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "I'm afraid that the release will be delayed.",
          "aceita": [],
          "d": "Hint: soften the news with <b>I'm afraid that</b> + a full sentence."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: some words are wrong.",
          "mostra": "I'm afraid of telling you the launch is delayed.",
          "r": "I'm afraid the launch is delayed.",
          "aceita": [
            "I'm afraid that the launch is delayed.",
            "I am afraid the launch is delayed.",
            "I am afraid that the launch is delayed."
          ],
          "d": "Hint: <b>I'm afraid</b> is followed directly by a sentence, not by <i>of telling you</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is out of place.",
          "mostra": "I understand how do you feel about the delay.",
          "r": "I understand how you feel about the delay.",
          "aceita": [],
          "d": "Hint: this is not a direct question, so there is no <i>do</i>: <b>how you feel</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: some words are wrong.",
          "mostra": "It is essential to everyone know the new date.",
          "r": "It is essential that everyone knows the new date.",
          "aceita": [
            "It is essential that everyone know the new date.",
            "It's essential that everyone knows the new date.",
            "It's essential that everyone know the new date."
          ],
          "d": "Hint: after <b>essential</b>, use <b>that</b> + a subject + a verb."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/b0cb38a94476/hard-news/img/live-capa.webp",
      "leg": "An empty meeting room, before a hard conversation",
      "pede": "Look at the picture: an empty meeting room by the window, before a hard conversation. Write 2 or 3 sentences telling a colleague that a deadline has moved, kindly and clearly. Use <b>I'm afraid …</b>, <b>I appreciate this is hard for you</b> or <b>It's essential that …</b>.",
      "ph": "I'm afraid the deadline …",
      "ex": "I'm afraid the deadline has moved to June. I appreciate this is hard for you, and I want to be transparent about why. It's essential that everyone knows the new plan."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "Think of a time you had to give someone disappointing news. How did you start?",
          "ph": "I started by saying I'm afraid …",
          "ex": "I started by saying I'm afraid the trip was cancelled, and that I was really sorry."
        },
        {
          "q": "A colleague's project was cancelled. What would you say to them?",
          "ph": "I appreciate this is hard for you …",
          "ex": "I appreciate this is hard for you. I understand how you feel, and I'm here if you want to talk."
        }
      ]
    }
  }
};
