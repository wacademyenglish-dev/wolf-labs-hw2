/* PAIR UP · LIÇÃO DE CASA 2.0 (24/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: sugerir, oferecer, discordar: Shall we / Why don't we / Let me / How about -ing / I disagree. B1: nenhum português. Imagens live-a e live-capa (escuras); live-b clara fica de fora. */
window.HW2 = {
  "id": "pair-up",
  "titulo": "Pair Up",
  "nivel": "B1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/108f63b8ba7a/pair-up/img/live-capa.webp",
  "alvo": "suggest, offer and disagree in a pair: Shall we + verb · Why don't we + verb · How about + -ing · Let me + verb · I see your point, but ... · I disagree; never Shall we to, Why don't we starting, How about start, Let me to, I'm disagree",
  "abrir": "Do you like working alone, or with someone next to you?",
  "fecho": "<b>Shall we</b> + verb · <b>Why don't we</b> + verb · <b>Let me</b> + verb: no <i>to</i>, no <i>-ing</i>. <b>How about</b> + <i>-ing</i>: <i>How about starting with the tests?</i> To disagree politely: <b>I see your point, but …</b> And <b>disagree</b> is a verb: <i>I disagree</i>, never <i>I'm disagree</i>.",
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
      "sub": "Mia and Leo pair on a bug. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/108f63b8ba7a/pair-up/img/live-capa.webp",
      "leg": "Two laptops, one bug",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, I'm stuck on the checkout bug. Shall we pair on it this afternoon?"
        },
        {
          "quem": "leo",
          "t": "Sure. Why don't we start by running the tests?"
        },
        {
          "quem": "mia",
          "t": "Good idea. Let me drive first, and you navigate."
        },
        {
          "quem": "leo",
          "t": "OK. The discount test is failing. How about adding a log before the price is calculated?"
        },
        {
          "quem": "mia",
          "t": "Done. Look, the discount is applied twice!"
        },
        {
          "quem": "leo",
          "t": "Then shall we remove the second call and run the tests again?"
        },
        {
          "quem": "mia",
          "t": "I see your point, but I'd rather check why it's there first."
        },
        {
          "quem": "leo",
          "t": "Fair. Let me read the commit history while you type."
        },
        {
          "quem": "mia",
          "t": "Found it, and the tests are green. Shall we swap now? You drive the next part."
        },
        {
          "quem": "leo",
          "t": "Yes. How about writing one more test for an empty cart?"
        }
      ],
      "perguntas": [
        {
          "q": "What does Leo suggest as a first step?",
          "op": [
            "Running the tests",
            "Rewriting the cart",
            "Calling the client"
          ],
          "a": 0,
          "por": "Why don't we start by running the tests?"
        },
        {
          "q": "What does Mia say instead of removing the second call right away?",
          "op": [
            "She wants to check why it's there",
            "She wants to delete the whole file",
            "She wants to wait until Monday"
          ],
          "a": 0,
          "por": "I see your point, but I'd rather check why it's there first."
        },
        {
          "q": "What does Leo suggest at the end?",
          "op": [
            "Writing a test for an empty cart",
            "Taking a long break",
            "Closing the ticket"
          ],
          "a": 0,
          "por": "How about writing one more test for an empty cart?"
        }
      ]
    },
    "out": {
      "sub": "Three sentences for working in a pair. Hear it, then say it.",
      "frases": [
        {
          "t": "Shall we start with the failing test?",
          "img": "https://wolf-labs.pages.dev/p/108f63b8ba7a/pair-up/img/live-capa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "Why don't we swap every twenty-five minutes?",
          "img": "https://wolf-labs.pages.dev/p/108f63b8ba7a/pair-up/img/live-a.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "I see your point, but let me check one more thing.",
          "img": "https://wolf-labs.pages.dev/p/108f63b8ba7a/pair-up/img/live-capa.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Suggest, offer, disagree. Four quick ones.",
      "regra": "<b>Shall we</b> + verb · <b>Why don't we</b> + verb · <b>Let me</b> + verb · <b>How about</b> + -ing · <b>I disagree</b> (a verb).",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "Why don't we run the tests first?",
          "aceita": [],
          "d": "Hint: <b>Why don't we</b> + the plain verb. No <i>-ing</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "Shall we to start with the tests?",
          "r": "Shall we start with the tests?",
          "aceita": [],
          "d": "Hint: after <b>Shall we</b>, the plain verb. No <i>to</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "How about start with a small test?",
          "r": "How about starting with a small test?",
          "aceita": [
            "How about we start with a small test?"
          ],
          "d": "Hint: after <b>How about</b>, use <i>-ing</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "I'm disagree with you.",
          "r": "I disagree with you.",
          "aceita": [
            "I don't agree with you."
          ],
          "d": "Hint: <b>disagree</b> is already a verb. No <i>I'm</i>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/108f63b8ba7a/pair-up/img/live-a.webp",
      "leg": "A dark screen and a keyboard",
      "pede": "Look at the picture: a dark screen and a keyboard. You and a colleague have a hard problem to solve. Write 2 or 3 sentences: suggest a first step and offer to do one part. Use <b>Shall we</b>, <b>Why don't we</b>, <b>How about + -ing</b> or <b>Let me</b>.",
      "ph": "Shall we … ? Let me …",
      "ex": "Shall we start with the error message? Let me write the test, and you can read the logs. How about swapping after half an hour?"
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "A colleague wants to change everything in the code. How do you disagree politely?",
          "ph": "I see your point, but …",
          "ex": "I see your point, but how about fixing the bug first?"
        },
        {
          "q": "You and a friend have to plan a trip. What do you suggest?",
          "ph": "Why don't we …? How about …?",
          "ex": "Why don't we go in May? How about booking a small hotel near the beach?"
        }
      ]
    }
  }
};
