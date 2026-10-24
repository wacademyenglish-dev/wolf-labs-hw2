/* GROWTH IS EXPECTED TO SLOW · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: passivas de relato (It is expected that / is expected to / to be -ing / to have + particípio). B2: nenhum português. Imagens do próprio live-* (escuras). */
window.HW2 = {
  "id": "growth-is-expected-to-slow",
  "titulo": "Growth Is Expected to Slow",
  "nivel": "B2",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/3b92bde207d4/growth-is-expected-to-slow/img/live-mesa-neve.webp",
  "alvo": "reporting passives for news: It is expected / believed / said / thought / reported that + clause; Subject + is expected to + verb (later); is believed to be + -ing (now); is reported to have + third form (before); never 'Is said that' without it, never 'is expected slowing'",
  "abrir": "What is expected to change in your city or your job next year?",
  "fecho": "News never says <i>it is a fact</i>. <b>It is expected / believed / said that</b> + clause, or the subject first: <i>Growth is expected <b>to slow</b></i> (later), <i>The firm is believed <b>to be hiring</b></i> (now), <i>The chairman is reported <b>to have lost</b> a client</i> (before). Always start with <b>it</b> or the subject, and always <b>to</b> + verb, never <i>-ing</i>.",
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
      "sub": "Mia and Leo in a mountain newsroom, minutes before the Brief. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/3b92bde207d4/growth-is-expected-to-slow/img/live-estudio.webp",
      "leg": "The newsroom, an hour before the Evening Brief",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, the Evening Brief goes out at six. What have you got on the Halden Group?"
        },
        {
          "quem": "leo",
          "t": "Two things. Growth is expected to slow next year, and the company is believed to be hiring fewer people already."
        },
        {
          "quem": "mia",
          "t": "Believed by whom? We can't print a rumor as a fact."
        },
        {
          "quem": "leo",
          "t": "Fair. The central bank says growth is expected to slow to two percent. The hiring story is only a rumor."
        },
        {
          "quem": "mia",
          "t": "Then write that it is said that the company is hiring fewer people, nothing stronger. What about last year's problem?"
        },
        {
          "quem": "leo",
          "t": "The chairman is reported to have lost a major client last spring, but nobody has confirmed it."
        },
        {
          "quem": "mia",
          "t": "Good. 'Is reported to have lost': the loss came before the report."
        },
        {
          "quem": "leo",
          "t": "And the new factory? It is thought to be running at half capacity right now."
        },
        {
          "quem": "mia",
          "t": "Half capacity right now. So 'to be running', not 'to run'."
        },
        {
          "quem": "leo",
          "t": "Done. Nothing is stated as a fact, and every headline shows who says it."
        },
        {
          "quem": "mia",
          "t": "Perfect. Send it before six, and I'll read it first."
        }
      ],
      "perguntas": [
        {
          "q": "What does the central bank say about next year?",
          "op": [
            "Growth is expected to slow",
            "Hiring is expected to rise",
            "The factory is expected to close"
          ],
          "a": 0,
          "por": "The central bank says growth is expected to slow to two percent."
        },
        {
          "q": "Why does Mia like 'is reported to have lost'?",
          "op": [
            "The loss came before the report",
            "The loss is happening right now",
            "The loss will happen next year"
          ],
          "a": 0,
          "por": "'Is reported to have lost': the loss came before the report."
        },
        {
          "q": "How is the new factory described?",
          "op": [
            "It is thought to be running at half capacity",
            "It is expected to open soon",
            "It is said to have doubled its output"
          ],
          "a": 0,
          "por": "It is thought to be running at half capacity right now."
        }
      ]
    },
    "out": {
      "sub": "Three lines for the Brief. Hear it, then say it.",
      "frases": [
        {
          "t": "Growth is expected to slow next year.",
          "img": "https://wolf-labs.pages.dev/p/3b92bde207d4/growth-is-expected-to-slow/img/live-mesa-neve.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "The company is believed to be hiring fewer people.",
          "img": "https://wolf-labs.pages.dev/p/3b92bde207d4/growth-is-expected-to-slow/img/live-camera.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "The chairman is reported to have lost a major client.",
          "img": "https://wolf-labs.pages.dev/p/3b92bde207d4/growth-is-expected-to-slow/img/live-estudio.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Which frame? Four quick ones.",
      "regra": "<b>It is said that</b> + clause · <b>is expected to</b> + verb (later) · <b>is believed to be</b> + -ing (now) · <b>is reported to have</b> + third form (before).",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "The factory is thought to be running at half capacity.",
          "aceita": [],
          "d": "Hint: it is happening <i>now</i>, so <b>is thought to be</b> + -ing."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "Growth is expected slowing next year.",
          "r": "Growth is expected to slow next year.",
          "aceita": [
            "Growth is expected to slow down next year."
          ],
          "d": "Hint: after <b>is expected</b> comes <b>to</b> + plain verb, never <i>-ing</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is missing.",
          "mostra": "Is said that the company is hiring.",
          "r": "It is said that the company is hiring.",
          "aceita": [
            "It's said that the company is hiring."
          ],
          "d": "Hint: English needs a subject: start with <b>It is said that</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: the time is wrong.",
          "mostra": "He is said to lose clients last year.",
          "r": "He is said to have lost clients last year.",
          "aceita": [
            "He is said to have lost his clients last year."
          ],
          "d": "Hint: <b>last year</b> is before the report, so <b>to have</b> + third form."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/3b92bde207d4/growth-is-expected-to-slow/img/live-mesa-neve.webp",
      "leg": "A microphone, a dark table, a snowy valley",
      "pede": "Look at the picture: a microphone on a table, a snowy valley outside, minutes before the evening news. Write 2 or 3 headlines about your city or your work. Nothing as a fact! Use <b>is expected to</b>, <b>is believed to be</b>, <b>is said that</b> or <b>is reported to have</b>.",
      "ph": "Prices are expected to …",
      "ex": "Rents are expected to rise again this year. The new metro line is believed to be running late. It is said that the mayor will speak on Friday."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What is the latest rumor at your work or school? Who is it said to come from?",
          "ph": "It is said that …",
          "ex": "It is said that our manager is changing teams."
        },
        {
          "q": "What is expected to get better or worse in your area this year?",
          "ph": "… is expected to …",
          "ex": "Traffic is expected to get worse because of the roadworks."
        }
      ]
    }
  }
};
