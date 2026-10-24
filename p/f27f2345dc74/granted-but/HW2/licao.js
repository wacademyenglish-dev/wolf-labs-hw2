/* GRANTED, BUT · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: concessão (Granted, but / Admittedly, even so / That said / Even though). B2: nenhum português. Imagens do próprio live-* (escuras). */
window.HW2 = {
  "id": "granted-but",
  "titulo": "Granted, But",
  "nivel": "B2",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/f27f2345dc74/granted-but/img/live-balanca.webp",
  "alvo": "concession in argument: Granted, X, but Y · Admittedly, X. Even so, Y · X. That said, Y / Having said that, Y · Even though X, Y in one sentence; the first half gives a point to the OTHER side; never although ... but, never 'even so' as a conjunction, never 'having say that'",
  "abrir": "Where do you do your best work, and what do you lose there?",
  "fecho": "<b>Concede first, then turn.</b> <b>Granted, X, but Y.</b> · <b>Admittedly, X. Even so, Y.</b> · <b>X. That said, Y.</b> The first half gives a real point to the other side; the second half is yours. <b>Even though X, Y</b> needs no <i>but</i>: one connector is enough. <b>Even so</b> and <b>that said</b> start a new sentence, never join one. And it is <b>having said that</b>.",
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
      "sub": "Mia and Leo prepare a memo for a town hall. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/f27f2345dc74/granted-but/img/live-sala.webp",
      "leg": "The meeting hall before the town hall",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, the town hall is at four, and my memo needs both sides of the office debate."
        },
        {
          "quem": "leo",
          "t": "Start with the CEO's side. Granted, the office helps new people learn, but most of us finish more work at home."
        },
        {
          "quem": "mia",
          "t": "Good: a point for the other side, then the turn. What about the lease?"
        },
        {
          "quem": "leo",
          "t": "Admittedly, the lease ends on the thirty-first of March. Even so, nobody has shown that four days a week would help."
        },
        {
          "quem": "mia",
          "t": "So 'even so' starts a new sentence, and it has a comma after it."
        },
        {
          "quem": "leo",
          "t": "Exactly. Same with 'that said'. The commute is long. That said, many people enjoy the train."
        },
        {
          "quem": "mia",
          "t": "And the one-sentence version?"
        },
        {
          "quem": "leo",
          "t": "Even though the office is empty on Fridays, the rent is the same."
        },
        {
          "quem": "mia",
          "t": "Careful: never 'although' and 'but' together. One connector is enough."
        },
        {
          "quem": "leo",
          "t": "Right. Even though the rent is high, we could still share desks. No 'but'."
        },
        {
          "quem": "mia",
          "t": "Perfect. Both sides will find their point in my memo."
        }
      ],
      "perguntas": [
        {
          "q": "Which point does Leo give to the CEO's side?",
          "op": [
            "The office helps new people learn",
            "Remote work is cheaper",
            "The lease is too short"
          ],
          "a": 0,
          "por": "Granted, the office helps new people learn, but most of us finish more work at home."
        },
        {
          "q": "What does Leo say about the sentence after 'even so'?",
          "op": [
            "It starts a new sentence",
            "It joins two facts with a comma",
            "It needs a 'but' after it"
          ],
          "a": 0,
          "por": "'Even so' starts a new sentence, and it has a comma after it."
        },
        {
          "q": "Why does Mia warn against 'although' and 'but' together?",
          "op": [
            "One connector is enough",
            "They mean the opposite",
            "They are too formal"
          ],
          "a": 0,
          "por": "Never 'although' and 'but' together. One connector is enough."
        }
      ]
    },
    "out": {
      "sub": "Three ways to give a point and take it back. Hear it, then say it.",
      "frases": [
        {
          "t": "Granted, the office helps new people, but I finish more work at home.",
          "img": "https://wolf-labs.pages.dev/p/f27f2345dc74/granted-but/img/live-balanca.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "Admittedly, the lease ends in March. Even so, we should wait.",
          "img": "https://wolf-labs.pages.dev/p/f27f2345dc74/granted-but/img/live-sala.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "The commute is long. That said, many people enjoy the train.",
          "img": "https://wolf-labs.pages.dev/p/f27f2345dc74/granted-but/img/live-corredor.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Give the point, then turn. Four quick ones.",
      "regra": "<b>Granted, X, but Y</b> · <b>Admittedly, X. Even so, Y</b> · <b>X. That said, Y</b> · <b>Even though X, Y</b> (no <i>but</i>) · <b>having said that</b>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "Granted, the lease is expensive, but the location is excellent.",
          "aceita": [],
          "d": "Hint: first the point for the other side, then <b>but</b> and your own point."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is too many.",
          "mostra": "Although the office is quiet, but I prefer home.",
          "r": "Although the office is quiet, I prefer home.",
          "aceita": [
            "Even though the office is quiet, I prefer home.",
            "The office is quiet, but I prefer home."
          ],
          "d": "Hint: <b>although</b> already does the job of <i>but</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "Even so the office is far, I will go.",
          "r": "Even though the office is far, I will go.",
          "aceita": [
            "Even though the office is far, I'll go."
          ],
          "d": "Hint: to join two ideas in one sentence use <b>even though</b>. <b>Even so</b> needs a new sentence."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "Having say that, I still disagree.",
          "r": "Having said that, I still disagree.",
          "aceita": [
            "Having said that I still disagree."
          ],
          "d": "Hint: <b>having</b> + third form: <b>having said that</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/f27f2345dc74/granted-but/img/live-casa.webp",
      "leg": "A laptop and a cup by a window at home",
      "pede": "Look at the picture: a laptop and a cup of coffee on a desk by a window. Write 2 or 3 sentences about working at home or in an office. Give a point to the other side first. Use <b>Granted, … but …</b>, <b>Admittedly, … Even so, …</b> or <b>That said, …</b>.",
      "ph": "Granted, …, but …",
      "ex": "Granted, home is quiet, but I miss my colleagues. Admittedly, the office is far. Even so, the meetings there are better."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "Think of a rule you disagree with at work or school. What is one fair point in its favor?",
          "ph": "Granted, … but …",
          "ex": "Granted, the rule keeps things tidy, but it wastes our time."
        },
        {
          "q": "Someone says: 'Offices will disappear.' What do you answer?",
          "ph": "Admittedly, … Even so, …",
          "ex": "Admittedly, many will close. Even so, people will still want somewhere to meet."
        }
      ]
    }
  }
};
