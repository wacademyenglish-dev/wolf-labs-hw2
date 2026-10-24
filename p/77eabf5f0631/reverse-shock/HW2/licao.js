/* REVERSE SHOCK · LIÇÃO DE CASA 2.0 (24/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: condicionais mistas (if + had + participle, would + verb). B2: nenhum português na lição. */
window.HW2 = {
  "id": "reverse-shock",
  "titulo": "Reverse Shock",
  "nivel": "B2",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/77eabf5f0631/reverse-shock/img/live-b.webp",
  "alvo": "mixed conditionals: if + had + participle, would + verb for a past cause and a present result (If I hadn't travelled, I wouldn't be so independent now) and if + past, would have + participle (If I were more patient, I would have stayed); contrast with the third conditional; never 'If I didn't travel' for the past, never 'if I would have known'",
  "abrir": "How are you different from the person you were a year ago?",
  "fecho": "A <b>past cause</b> with a <b>result now</b>: <i>If I hadn't travelled, I wouldn't be so independent now.</i> (if + had + participle, would + verb). A <b>present trait</b> with a <b>past result</b>: <i>If I were more patient, I would have stayed longer.</i> Both past: <i>If I had known, I would have brought a coat.</i> After <b>if</b>, never <i>would have</i>: <i>If I had known</i>, not <i>if I would have known</i>.",
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
      "sub": "Mia talks to Leo, who just came home after a year abroad. A new scene, about one minute.",
      "leg": "Leo, home again",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo! Welcome home. How does it feel after a year away?"
        },
        {
          "quem": "leo",
          "t": "Strange. Everything is the same, but I'm different. If I hadn't travelled, I wouldn't be so independent now."
        },
        {
          "quem": "mia",
          "t": "Is that a good thing?"
        },
        {
          "quem": "leo",
          "t": "Mostly. But my family is louder than I remembered. If I were more patient, I would have stayed at the dinner table longer last night."
        },
        {
          "quem": "mia",
          "t": "What do you miss from your life abroad?"
        },
        {
          "quem": "leo",
          "t": "The quiet, and the public transport. If I had known how much I would miss it, I would have taken more photos."
        },
        {
          "quem": "mia",
          "t": "And what did you miss while you were away?"
        },
        {
          "quem": "leo",
          "t": "Rice and beans, honestly. I took it for granted before."
        },
        {
          "quem": "mia",
          "t": "So are you home for good?"
        },
        {
          "quem": "leo",
          "t": "I think so. If I hadn't met my friends there, I wouldn't feel so split between two places. I'm happy to be home, and a little lost at the same time."
        }
      ],
      "perguntas": [
        {
          "q": "According to Leo, what made him independent?",
          "op": [
            "His family",
            "The trip",
            "His job"
          ],
          "a": 1,
          "por": "If I hadn't travelled, I wouldn't be so independent now."
        },
        {
          "q": "What does Leo say about his family?",
          "op": [
            "They are louder than he remembered",
            "They are quieter than before",
            "They are not at home"
          ],
          "a": 0,
          "por": "My family is louder than I remembered."
        },
        {
          "q": "What did Leo take for granted before?",
          "op": [
            "The public transport",
            "The quiet",
            "Rice and beans"
          ],
          "a": 2,
          "por": "Rice and beans, honestly. I took it for granted before."
        }
      ],
      "audio": "audio/listen.mp3",
      "img": "https://wolf-labs.pages.dev/p/77eabf5f0631/reverse-shock/img/live-b.webp"
    },
    "out": {
      "sub": "Three sentences from Leo. Hear it, then say it.",
      "frases": [
        {
          "t": "If I hadn't travelled, I wouldn't be so independent now.",
          "au": "audio/say1.mp3",
          "img": "https://wolf-labs.pages.dev/p/77eabf5f0631/reverse-shock/img/live-b.webp"
        },
        {
          "t": "If I were more patient, I would have stayed longer.",
          "au": "audio/say2.mp3",
          "img": "https://wolf-labs.pages.dev/p/77eabf5f0631/reverse-shock/img/live-b.webp"
        },
        {
          "t": "If I hadn't lived alone, I wouldn't know how to cook.",
          "au": "audio/say3.mp3",
          "img": "https://wolf-labs.pages.dev/p/77eabf5f0631/reverse-shock/img/live-b.webp"
        }
      ]
    },
    "focus": {
      "sub": "Past cause, present result. Four quick ones.",
      "regra": "<b>if + had + participle</b>, <b>would + verb</b> (now) · <b>if + were</b>, <b>would have + participle</b> (then) · never <i>if I would have</i>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "If I hadn't lived abroad, I wouldn't speak English so well.",
          "aceita": [],
          "d": "Hint: past cause, result now: <b>hadn't lived</b>, <b>wouldn't speak</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: the trip is in the past.",
          "mostra": "If I didn't leave, I wouldn't be independent now.",
          "r": "If I hadn't left, I wouldn't be independent now.",
          "aceita": [
            "If I had not left, I would not be independent now."
          ],
          "d": "Hint: a past cause needs <b>had</b> + participle after <b>if</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "If I would have known, I would have come.",
          "r": "If I had known, I would have come.",
          "aceita": [],
          "d": "Hint: no <b>would</b> right after <b>if</b>: <b>if I had known</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is missing.",
          "mostra": "If I hadn't gone, I wouldn't met Ana.",
          "r": "If I hadn't gone, I wouldn't have met Ana.",
          "aceita": [],
          "d": "Hint: <b>wouldn't have</b> + participle."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "pede": "Look at the picture: your city again after a long trip. Write 2 or 3 sentences about how you are different now. Use <b>if + had + participle</b> with <b>would + verb</b>.",
      "ph": "If I hadn't …, I wouldn't … now.",
      "ex": "If I hadn't travelled, I wouldn't be so independent now. If I hadn't lived alone, I wouldn't know how to cook.",
      "img": "https://wolf-labs.pages.dev/p/77eabf5f0631/reverse-shock/img/live-b.webp",
      "leg": "A São Paulo avenue at night"
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "Think of a big change in your life (a trip, a move, a new job). How are you different now because of it?",
          "ph": "If I hadn't …, I wouldn't … now.",
          "ex": "If I hadn't changed jobs, I wouldn't feel so confident now."
        },
        {
          "q": "Think of your last trip or move. If you had known more, what would you have done differently?",
          "ph": "If I had known, I would have …",
          "ex": "If I had known it would rain, I would have brought a coat."
        }
      ]
    }
  }
};
