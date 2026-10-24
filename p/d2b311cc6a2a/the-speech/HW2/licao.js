/* THE SPEECH · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: recursos retóricos: tricolon, paralelismo, antítese, pergunta retórica, anáfora. C1: nenhum português. Só imagens live-* escuras. */
window.HW2 = {
  "id": "the-speech",
  "titulo": "The Speech",
  "nivel": "C1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/d2b311cc6a2a/the-speech/img/live-capa.webp",
  "alvo": "rhetorical devices: tricolon (three items, the biggest last) · parallelism (same grammar in every part) · antithesis (not because X, but because Y) · rhetorical question (auxiliary before the subject) · anaphora (the same opening words, on purpose)",
  "abrir": "Which place in your town would you fight to keep?",
  "fecho": "A line that sounds like a speech has a shape. <b>Tricolon</b>: three items, the biggest last. <b>Parallelism</b>: the same grammar each time (<i>to read, to study and to meet</i>). <b>Antithesis</b>: <i>not because it is easy, but because it is right</i>. <b>Question</b>: <i>Why should we…?</i> <b>Anaphora</b>: the same opening, on purpose, never a synonym.",
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
  "rate": "-6%",
  "rodadas": {
    "listen": {
      "sub": "Mia drafts a ninety-second radio speech with Leo. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/d2b311cc6a2a/the-speech/img/live-radio.webp",
      "leg": "A radio booth, the light on",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, the council votes on the Lantern Library tonight. I have ninety seconds on the radio. Here's my opening."
        },
        {
          "quem": "leo",
          "t": "Read it to me."
        },
        {
          "quem": "mia",
          "t": "We read here. We learn here. We belong here."
        },
        {
          "quem": "leo",
          "t": "Three beats, and the biggest comes last. That works. Now say what you're really fighting for."
        },
        {
          "quem": "mia",
          "t": "This is not a building we can replace. It is a promise we can keep."
        },
        {
          "quem": "leo",
          "t": "Not this, but that. I like it. Now put a question to the council, one they can't answer."
        },
        {
          "quem": "mia",
          "t": "Why should we close the one door that is always open?"
        },
        {
          "quem": "leo",
          "t": "Strong. And now repeat one opening, so the whole town remembers it."
        },
        {
          "quem": "mia",
          "t": "We will not forget the nights it kept us warm. We will not forget the children it taught. We will not forget who built it."
        },
        {
          "quem": "leo",
          "t": "That's it. Keep the same words every time. If you swap one for a synonym, the rhythm is gone."
        },
        {
          "quem": "mia",
          "t": "Understood. Let's time it."
        }
      ],
      "perguntas": [
        {
          "q": "What does Leo say about the three beats?",
          "op": [
            "The biggest one comes last",
            "The shortest one comes last",
            "They should all be different"
          ],
          "a": 0,
          "por": "Three beats, and the biggest comes last."
        },
        {
          "q": "What question does Mia put to the council?",
          "op": [
            "Why should we close the one door that is always open?",
            "Who will pay for the library?",
            "When does the vote start?"
          ],
          "a": 0,
          "por": "Why should we close the one door that is always open?"
        },
        {
          "q": "Why does Leo say to keep the same words every time?",
          "op": [
            "A synonym would break the rhythm",
            "The council likes short lines",
            "It saves time on the radio"
          ],
          "a": 0,
          "por": "If you swap one for a synonym, the rhythm is gone."
        }
      ]
    },
    "out": {
      "sub": "Three lines with a shape. Hear it, then say it.",
      "frases": [
        {
          "t": "We read here, we learn here, we belong here.",
          "img": "https://wolf-labs.pages.dev/p/d2b311cc6a2a/the-speech/img/live-biblioteca.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "It is not a building we lose, but a promise we break.",
          "img": "https://wolf-labs.pages.dev/p/d2b311cc6a2a/the-speech/img/live-podio.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "Why should we close the one door that is always open?",
          "img": "https://wolf-labs.pages.dev/p/d2b311cc6a2a/the-speech/img/live-radio.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Shape, order, repetition. Four quick ones.",
      "regra": "<b>tricolon</b> · <b>parallelism</b>: <i>to read, to study and to meet</i> · <b>antithesis</b>: <i>not because it is X, but because it is Y</i> · <b>question</b>: <i>Why should we…?</i> · <b>anaphora</b>: same opening words.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "We will not forget the nights it kept us warm.",
          "aceita": [],
          "d": "Hint: the opening <b>We will not forget</b> is the one that repeats in the speech."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: the question has the wrong order.",
          "mostra": "Why we should close the one open door?",
          "r": "Why should we close the one open door?",
          "aceita": [
            "Why should we close the one door that is open?"
          ],
          "d": "Hint: even a rhetorical question puts the auxiliary <b>should</b> before the subject <b>we</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: make the list parallel.",
          "mostra": "We come to read, studying and for meeting.",
          "r": "We come to read, to study and to meet.",
          "aceita": [
            "We come to read, study and meet."
          ],
          "d": "Hint: three items, the same grammar in each one: <b>to read, to study and to meet</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: the second part is wrong.",
          "mostra": "Not because is cheap but because is ours.",
          "r": "Not because it is cheap but because it is ours.",
          "aceita": [
            "Not because it's cheap but because it's ours."
          ],
          "d": "Hint: after <b>because</b> you need a subject: <b>it is</b>, in both halves."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/d2b311cc6a2a/the-speech/img/live-podio.webp",
      "leg": "A microphone on a podium",
      "pede": "Look at the picture: a microphone on a podium. Write 2 or 3 lines of a speech to save a place you love (a park, a market, a school). Use a list of three, <b>not because… but because…</b> or a question that starts with <b>Why should we…?</b>",
      "ph": "We come here to …",
      "ex": "We come to this park to run, to rest and to breathe. It is not a patch of grass but our living room. Why should we give it away?"
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "Which place in your city would you fight to keep? Why?",
          "ph": "We should keep it, not because … but because …",
          "ex": "We should keep the old market, not because it is pretty but because it is ours."
        },
        {
          "q": "What do you do at your favorite place? Give me three things.",
          "ph": "I go there to …, to … and to …",
          "ex": "I go to the beach to walk, to think and to forget my phone."
        }
      ]
    }
  }
};
