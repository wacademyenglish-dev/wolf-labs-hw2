/* OUT OF LINE · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: negative inversion. B2: no Portuguese. Only live-* images (all dark). */
window.HW2 = {
  "id": "out-of-line",
  "titulo": "Out of Line",
  "nivel": "B2",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/bfb714799cf2/out-of-line/img/live-pulpito.webp",
  "alvo": "negative inversion: a negative word in front + the helper before the subject (Never have I seen..., Rarely does she call...); no helper: do / does / did + plain verb; Hardly ... when, No sooner ... than; never Never I have seen, Rarely she calls, No sooner ... when",
  "abrir": "What is something you had never seen before, until that day?",
  "fecho": "Put the negative word first and the helper before the subject: <i>Never have I seen…</i> No helper? Borrow <b>do / does / did</b> and keep the verb plain: <i>Rarely does she call.</i> <b>Hardly … when</b>, <b>No sooner … than</b>. Never <i>Never I have seen</i>, never <i>Rarely she calls</i>. Use it twice in a speech, not ten times.",
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
      "sub": "Mia and Leo write a farewell speech. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/bfb714799cf2/out-of-line/img/live-pulpito.webp",
      "leg": "A lectern on an empty stage",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, help me with Marta's farewell speech. I wrote: I have never seen anyone so calm."
        },
        {
          "quem": "leo",
          "t": "Make it stronger. Put the negative first: Never have I seen anyone so calm."
        },
        {
          "quem": "mia",
          "t": "Never have I seen anyone so calm. Yes, that has weight. What about her work?"
        },
        {
          "quem": "leo",
          "t": "Rarely does a manager listen the way she does."
        },
        {
          "quem": "mia",
          "t": "Nice. And: not only did she save the project, she also trained the whole team."
        },
        {
          "quem": "leo",
          "t": "Perfect. Then add: hardly had she started when the clients began to call her."
        },
        {
          "quem": "mia",
          "t": "Or: no sooner had she arrived than she was fixing problems."
        },
        {
          "quem": "leo",
          "t": "Careful. Three or four of these, and it sounds like a costume."
        },
        {
          "quem": "mia",
          "t": "You're right. I'll keep two, and say the rest plainly."
        },
        {
          "quem": "leo",
          "t": "Then everyone will hear the ones that matter."
        }
      ],
      "perguntas": [
        {
          "q": "What does the speech say about Marta?",
          "op": [
            "She is very calm",
            "She is always late",
            "She dislikes speeches"
          ],
          "a": 0,
          "por": "Never have I seen anyone so calm."
        },
        {
          "q": "What else did Marta do besides saving the project?",
          "op": [
            "She trained the whole team",
            "She changed her job",
            "She wrote the speech"
          ],
          "a": 0,
          "por": "Not only did she save the project, she also trained the whole team."
        },
        {
          "q": "Why does Leo give a warning?",
          "op": [
            "Too many of them sound like a costume",
            "The speech is too short",
            "Marta dislikes surprises"
          ],
          "a": 0,
          "por": "Three or four of these, and it sounds like a costume."
        }
      ]
    },
    "out": {
      "sub": "Three lines from the speech. Hear it, then say it.",
      "frases": [
        {
          "t": "Never have I worked with anyone so calm.",
          "img": "https://wolf-labs.pages.dev/p/bfb714799cf2/out-of-line/img/live-pulpito.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "Rarely does a manager listen the way she does.",
          "img": "https://wolf-labs.pages.dev/p/bfb714799cf2/out-of-line/img/live-microfone.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "No sooner had she arrived than she started working.",
          "img": "https://wolf-labs.pages.dev/p/bfb714799cf2/out-of-line/img/live-plateia.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Which word goes first? Four quick ones.",
      "regra": "negative word first · helper before the subject · no helper: <b>do / does / did</b> + plain verb · <b>Hardly … when</b> · <b>No sooner … than</b>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "Hardly had she sat down when the phone rang.",
          "aceita": [],
          "d": "Hint: <b>Hardly had</b> + subject, then <b>when</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: the order is wrong.",
          "mostra": "Never I have seen a room so quiet.",
          "r": "Never have I seen a room so quiet.",
          "aceita": [],
          "d": "Hint: after <b>Never</b>, the helper goes before the subject: <b>have I</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: the order is wrong.",
          "mostra": "Rarely she calls her parents.",
          "r": "Rarely does she call her parents.",
          "aceita": [],
          "d": "Hint: no helper in the sentence, so borrow <b>does</b> and keep the verb plain."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "No sooner had he arrived when it started to rain.",
          "r": "No sooner had he arrived than it started to rain.",
          "aceita": [],
          "d": "Hint: <b>No sooner</b> goes with <b>than</b>. <b>Hardly</b> goes with <b>when</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/bfb714799cf2/out-of-line/img/live-pulpito.webp",
      "leg": "A lectern on an empty stage",
      "pede": "Look at the picture: a lectern on an empty stage. Imagine you give a short speech there. Write 2 or 3 sentences with <b>Never have I …</b>, <b>Rarely do I …</b> or <b>No sooner had I … than …</b>.",
      "ph": "Never have I …",
      "ex": "Never have I felt so nervous. Rarely do I speak in public. No sooner had I started than everybody smiled."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What is something you have never done before? Start with Never have I.",
          "ph": "Never have I …",
          "ex": "Never have I eaten food from Thailand."
        },
        {
          "q": "What do you rarely do? Start with Rarely do I.",
          "ph": "Rarely do I …",
          "ex": "Rarely do I wake up before seven."
        }
      ]
    }
  }
};
