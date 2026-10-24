/* NOBODY DISAGREES · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: discordar com cuidado (I see what you mean, but... / Isn't it a bit...?). B1: nenhum português. */
window.HW2 = {
  "id": "nobody-disagrees",
  "titulo": "Nobody Disagrees",
  "nivel": "B1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/72a184b607ed/nobody-disagrees/img/live-sala.webp",
  "alvo": "disagreeing with care: I see what you mean, but... / I'm not sure that... / Isn't it a bit...? / Wouldn't it be better to...?; I don't agree (with you), never I'm not agree or I don't agree you",
  "abrir": "Who do you find hard to disagree with?",
  "fecho": "A careful no that is still a no: <b>I see what you mean, but…</b> · <b>I'm not sure that…</b> · <b>Isn't it a bit…?</b> · <b>Wouldn't it be better to…?</b> And <b>I don't agree with you</b>: never <i>I'm not agree</i>, never <i>I don't agree you</i>.",
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
      "sub": "Mia and Leo before a meeting about a deadline. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/72a184b607ed/nobody-disagrees/img/live-sala.webp",
      "leg": "An empty meeting room",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, the boss wants the report on Monday. Isn't it a bit early? We haven't finished the numbers."
        },
        {
          "quem": "mia",
          "t": "I see what you mean, but the client wants it this week."
        },
        {
          "quem": "leo",
          "t": "I'm not sure that's possible. And I don't agree with working on the weekend."
        },
        {
          "quem": "mia",
          "t": "Neither do I. Wouldn't it be better to ask for Wednesday?"
        },
        {
          "quem": "leo",
          "t": "Yes. Wouldn't it be easier if we sent a short version first?"
        },
        {
          "quem": "mia",
          "t": "Good idea. I'll say it in a calm way. I don't want to tell the boss he is wrong."
        },
        {
          "quem": "leo",
          "t": "Right. Isn't that the best way to keep everybody friendly?"
        },
        {
          "quem": "mia",
          "t": "It is. People listen when the room stays calm."
        },
        {
          "quem": "leo",
          "t": "I see what you mean, but I'm still a little nervous."
        },
        {
          "quem": "mia",
          "t": "Don't worry. Let's go in together."
        }
      ],
      "perguntas": [
        {
          "q": "What does Leo think about Monday?",
          "op": [
            "It is a bit early",
            "It is too late",
            "It is perfect"
          ],
          "a": 0,
          "por": "Isn't it a bit early? We haven't finished the numbers."
        },
        {
          "q": "What does Mia suggest?",
          "op": [
            "Asking for Wednesday",
            "Working at the weekend",
            "Cancelling the meeting"
          ],
          "a": 0,
          "por": "Wouldn't it be better to ask for Wednesday?"
        },
        {
          "q": "Why will Mia speak in a calm way?",
          "op": [
            "She doesn't want to tell the boss he is wrong",
            "She is afraid of the client",
            "She wants to leave early"
          ],
          "a": 0,
          "por": "I don't want to tell the boss he is wrong."
        }
      ]
    },
    "out": {
      "sub": "Three careful ways to say no. Hear it, then say it.",
      "frases": [
        {
          "t": "I see what you mean, but I'm not sure.",
          "img": "https://wolf-labs.pages.dev/p/72a184b607ed/nobody-disagrees/img/live-mesa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "Wouldn't it be better to wait until Wednesday?",
          "img": "https://wolf-labs.pages.dev/p/72a184b607ed/nobody-disagrees/img/live-sala.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "Isn't it a bit early for that?",
          "img": "https://wolf-labs.pages.dev/p/72a184b607ed/nobody-disagrees/img/live-mesa.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "A careful no. Four quick ones.",
      "regra": "<b>I see what you mean, but…</b> · <b>I'm not sure that…</b> · <b>Isn't it a bit…?</b> · <b>Wouldn't it be better to…?</b> · <b>I don't agree with…</b> · never <i>I'm not agree</i>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "Wouldn't it be better to ask for more time?",
          "aceita": [],
          "d": "Hint: the question starts with <b>Wouldn't it</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "I'm not agree with this plan.",
          "r": "I don't agree with this plan.",
          "aceita": [
            "I do not agree with this plan."
          ],
          "d": "Hint: <b>agree</b> is a verb, so <b>don't agree</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is missing.",
          "mostra": "I don't agree you.",
          "r": "I don't agree with you.",
          "aceita": [
            "I do not agree with you."
          ],
          "d": "Hint: you agree <b>with</b> a person."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "I'm not sure that it work.",
          "r": "I'm not sure that it works.",
          "aceita": [
            "I'm not sure it works."
          ],
          "d": "Hint: <b>it</b> needs the -s: <b>it works</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/72a184b607ed/nobody-disagrees/img/live-mesa.webp",
      "leg": "A quiet table in a meeting room",
      "pede": "Look at the picture: a quiet meeting table. Write 2 or 3 sentences to disagree with a plan in a careful way. Use <b>I see what you mean, but</b>, <b>Isn't it a bit…?</b> or <b>Wouldn't it be better to…?</b>",
      "ph": "I see what you mean, but …",
      "ex": "I see what you mean, but isn't it a bit expensive? Wouldn't it be better to wait a month? I don't agree with the first date."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "Think of a plan you disagree with. How would you say it kindly?",
          "ph": "I see what you mean, but …",
          "ex": "I see what you mean, but I'm not sure that it will work."
        },
        {
          "q": "What would you say to a friend who wants to change the date again?",
          "ph": "Wouldn't it be better to …?",
          "ex": "Wouldn't it be better to keep the date? Isn't it a bit late to change?"
        }
      ]
    }
  }
};
