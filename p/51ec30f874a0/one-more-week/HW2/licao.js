/* ONE MORE WEEK · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: I'd rather / It's time we + passado. B1: nenhum português. */
window.HW2 = {
  "id": "one-more-week",
  "titulo": "One More Week",
  "nivel": "B1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/51ec30f874a0/one-more-week/img/live-mesa.webp",
  "alvo": "wishes and time: I'd rather + plain verb (about me); I'd rather you + past form (about someone else, now or tomorrow); It's time we + past form; I'd rather you hadn't + participle for something already done",
  "abrir": "What would you rather do this weekend?",
  "fecho": "About you: <b>I'd rather + plain verb</b>: <i>I'd rather stay in.</i> About someone else: <b>I'd rather you + past form</b>: <i>I'd rather you stayed in.</i> <b>It's time we + past form</b>: <i>It's time we left.</i> Already done: <b>I'd rather you hadn't said that.</b>",
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
      "sub": "Mia and Leo share a flat. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/51ec30f874a0/one-more-week/img/live-corredor.webp",
      "leg": "The hallway of a shared flat",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, I'd rather stay in tonight. My report is due on Friday."
        },
        {
          "quem": "leo",
          "t": "OK. But I'd rather you asked for more time. It's a lot of work."
        },
        {
          "quem": "mia",
          "t": "I'd rather ask my boss tomorrow. It's time I talked to him."
        },
        {
          "quem": "leo",
          "t": "It is. And I'd rather you didn't wait until Thursday."
        },
        {
          "quem": "mia",
          "t": "You're right. By the way, I'd rather you didn't invite people over on weeknights."
        },
        {
          "quem": "leo",
          "t": "Fair. I'd rather have my friends over on Saturday."
        },
        {
          "quem": "mia",
          "t": "Good. It's time we made a house rule."
        },
        {
          "quem": "leo",
          "t": "Agreed. I'd rather you hadn't taken my charger yesterday, though."
        },
        {
          "quem": "mia",
          "t": "Sorry! I'd rather you told me next time than just waited."
        },
        {
          "quem": "leo",
          "t": "Deal. I'd rather we talked about it now than later."
        }
      ],
      "perguntas": [
        {
          "q": "What would Mia rather do tonight?",
          "op": [
            "Stay in",
            "Go out with Leo",
            "Visit her boss"
          ],
          "a": 0,
          "por": "I'd rather stay in tonight."
        },
        {
          "q": "What does Leo want Mia to do?",
          "op": [
            "Ask for more time",
            "Finish the report tonight",
            "Move out"
          ],
          "a": 0,
          "por": "I'd rather you asked for more time."
        },
        {
          "q": "What is it time to do?",
          "op": [
            "Make a house rule",
            "Buy a new charger",
            "Clean the hallway"
          ],
          "a": 0,
          "por": "It's time we made a house rule."
        }
      ]
    },
    "out": {
      "sub": "Three wishes at home. Hear it, then say it.",
      "frases": [
        {
          "t": "I'd rather stay at home tonight.",
          "img": "https://wolf-labs.pages.dev/p/51ec30f874a0/one-more-week/img/live-corredor.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "It's time we cleaned this room.",
          "img": "https://wolf-labs.pages.dev/p/51ec30f874a0/one-more-week/img/live-mesa.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "I'd rather you called me before you come.",
          "img": "https://wolf-labs.pages.dev/p/51ec30f874a0/one-more-week/img/live-vazio.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "rather and It's time. Four quick ones.",
      "regra": "<b>I'd rather + plain verb</b> (me) · <b>I'd rather you + past form</b> (someone else) · <b>It's time we + past form</b> · never <i>I'd rather to stay</i>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "It's time we talked about it.",
          "aceita": [],
          "d": "Hint: <b>It's time we</b> + past form."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "I'd rather you go home now.",
          "r": "I'd rather you went home now.",
          "aceita": [
            "I would rather you went home now."
          ],
          "d": "Hint: about someone else, the past form: <b>went</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "It's time we go to bed.",
          "r": "It's time we went to bed.",
          "aceita": [
            "It is time we went to bed."
          ],
          "d": "Hint: <b>It's time we</b> + past form."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "I'd rather to stay here.",
          "r": "I'd rather stay here.",
          "aceita": [
            "I would rather stay here."
          ],
          "d": "Hint: no <b>to</b> after <b>rather</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/51ec30f874a0/one-more-week/img/live-vazio.webp",
      "leg": "A bedroom with a half-open door",
      "pede": "Look at the picture: a quiet room with a half-open door. Write 3 short wishes: one about you, one about someone else, one about time. Use <b>I'd rather</b>, <b>I'd rather you</b> and <b>It's time</b>.",
      "ph": "I'd rather … It's time …",
      "ex": "I'd rather stay in this weekend. I'd rather my neighbor played music earlier. It's time we booked our holiday."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What would you rather do this weekend?",
          "ph": "I'd rather …",
          "ex": "I'd rather stay home and cook than go out."
        },
        {
          "q": "What do you want someone near you to do differently? Say it kindly.",
          "ph": "I'd rather you …",
          "ex": "I'd rather you called before you come. It's time we made a plan."
        }
      ]
    }
  }
};
