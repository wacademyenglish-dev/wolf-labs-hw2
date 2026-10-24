/* HOOK THEM IN TEN SECONDS · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: hooks for a talk. C1: zero portugues. */
window.HW2 = {
  "id": "hook-them-in-ten-seconds",
  "titulo": "Hook Them in Ten Seconds",
  "nivel": "C1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/ac9f329dfac8/hook-them-in-ten-seconds/img/live-capa.webp",
  "alvo": "openings for a talk: Have you ever wondered why ...? (indirect question, no do), Did you know that ...?, Imagine + present, Raise your hand if ..., Last year, I ..., By the end of this talk, you'll ...; never open with an apology or your name",
  "abrir": "Think of a talk or a class you loved. How did it begin?",
  "fecho": "Five ways in: <b>Have you ever wondered why we dream?</b> (indirect question: no <i>do</i>) · <b>Did you know that …?</b> · <b>Imagine you're on a plane</b> (present, not future) · <b>Raise your hand if …</b> · <b>By the end of this talk, you'll …</b> (<i>by</i>, not <i>in</i>). Never open with an apology.",
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
      "sub": "Leo rehearses a talk and Mia coaches him. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/ac9f329dfac8/hook-them-in-ten-seconds/img/live-conversa.webp",
      "leg": "The green room before the talk",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, listen to my opening. Good morning, my name is Leo, and today I will talk about commuting. Sorry for my English."
        },
        {
          "quem": "mia",
          "t": "Leo, you've lost them already. Nobody remembers an apology."
        },
        {
          "quem": "leo",
          "t": "What should I say instead?"
        },
        {
          "quem": "mia",
          "t": "Start with a question. Have you ever wondered why a thirty-minute journey feels like two hours?"
        },
        {
          "quem": "leo",
          "t": "That's good. Then maybe a fact: did you know that some people spend more than an hour a day just getting to work?"
        },
        {
          "quem": "mia",
          "t": "Even better. Or paint a picture: imagine it's seven in the morning and your train has just been cancelled."
        },
        {
          "quem": "leo",
          "t": "And then, raise your hand if that has ever happened to you."
        },
        {
          "quem": "mia",
          "t": "Exactly. And finish the opening with a promise: by the end of this talk, you'll know how to win back an hour of your day."
        },
        {
          "quem": "leo",
          "t": "And my name?"
        },
        {
          "quem": "mia",
          "t": "Later. Hook first, introduce yourself after."
        }
      ],
      "perguntas": [
        {
          "q": "Why does Mia reject Leo's first opening?",
          "op": [
            "It starts with an apology, which nobody remembers",
            "It is much too long",
            "It does not include his name"
          ],
          "a": 0,
          "por": "You've lost them already. Nobody remembers an apology."
        },
        {
          "q": "Which technique does imagine it's seven in the morning use?",
          "op": [
            "It paints a picture for the audience",
            "It gives a surprising number",
            "It makes a promise"
          ],
          "a": 0,
          "por": "Or paint a picture: imagine it's seven in the morning."
        },
        {
          "q": "When should Leo say his name?",
          "op": [
            "Later, after the hook",
            "In the very first sentence",
            "He should not say it at all"
          ],
          "a": 0,
          "por": "Later. Hook first, introduce yourself after."
        }
      ]
    },
    "out": {
      "sub": "Three hooks. Hear it, then say it.",
      "frases": [
        {
          "t": "Have you ever wondered why a short journey can feel so long?",
          "img": "https://wolf-labs.pages.dev/p/ac9f329dfac8/hook-them-in-ten-seconds/img/live-capa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "Raise your hand if you have ever stared at the ceiling at three in the morning.",
          "img": "https://wolf-labs.pages.dev/p/ac9f329dfac8/hook-them-in-ten-seconds/img/live-conversa.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "By the end of this talk, you'll know how to win back an hour of your day.",
          "img": "https://wolf-labs.pages.dev/p/ac9f329dfac8/hook-them-in-ten-seconds/img/live-capa.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Hooks that work. Four quick ones.",
      "regra": "<b>Have you ever wondered why we ...?</b> (no do) · <b>Imagine you're ...</b> (present) · <b>By the end of this talk</b> · never open with an apology.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "Have you ever wondered why we forget names?",
          "aceita": [],
          "d": "Hint: after <b>wondered why</b>, the normal word order: <b>we forget</b>, no <b>do</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "Have you ever wondered why do we dream?",
          "r": "Have you ever wondered why we dream?",
          "aceita": [],
          "d": "Hint: it is an indirect question, so no <b>do</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "In the end of this talk, you'll agree.",
          "r": "By the end of this talk, you'll agree.",
          "aceita": [
            "By the end of this talk you will agree."
          ],
          "d": "Hint: a deadline in time is <b>by the end of</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "Imagine that you will be on a plane.",
          "r": "Imagine you're on a plane.",
          "aceita": [
            "Imagine that you are on a plane.",
            "Imagine you are on a plane."
          ],
          "d": "Hint: after <b>imagine</b>, use the present to make the scene vivid."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/ac9f329dfac8/hook-them-in-ten-seconds/img/live-capa.webp",
      "leg": "An empty stage and a microphone",
      "pede": "Look at the picture: an empty stage and a microphone. Write the first ten seconds of a talk on a topic you love: a hook, a short bridge and a promise. Use <b>Have you ever wondered why …</b>, <b>Imagine …</b> or <b>By the end of this talk, you'll …</b>.",
      "ph": "Have you ever wondered why …?",
      "ex": "Have you ever wondered why Mondays feel so heavy? Imagine it's seven in the morning and you are already dreading the week. By the end of this talk, you'll have three ways to change that."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What is the best opening to a talk or a class you have ever heard?",
          "ph": "The best opening I heard was …",
          "ex": "The best opening I heard was a teacher who asked, who here has never been late? Everyone laughed."
        },
        {
          "q": "Give me a hook for a talk about your job. Start with 'Did you know that'.",
          "ph": "Did you know that …",
          "ex": "Did you know that a good teacher can change how a student sees themselves in a single lesson?"
        }
      ]
    }
  }
};
