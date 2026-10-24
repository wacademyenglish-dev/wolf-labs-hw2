/* NOT YOUR SHOE SIZE · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: hedging: tend to / seem to / arguably / to some extent. B2: nenhum português. */
window.HW2 = {
  "id": "shoe-size",
  "titulo": "Not Your Shoe Size",
  "nivel": "B2",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/5cee02214dd8/shoe-size/img/live-mesa.webp",
  "alvo": "hedging: tend to / seem to + bare verb, arguably, to some extent (always TO); a claim is not evidence, so match the strength of the sentence to the strength of the proof; never in some extent, tend to + -ing",
  "abrir": "Think of something you believe about people. How sure are you, really?",
  "fecho": "Match the sentence to the proof. <b>tend to / seem to</b> + base verb: <i>People tend to sleep better in a quiet room.</i> <b>Arguably</b> shows it is your reading of the evidence. <b>To some extent</b>: always <i>to</i>. A claim is not evidence: one small study is a reason to soften.",
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
      "sub": "Mia and Leo prepare a short talk. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/5cee02214dd8/shoe-size/img/live-palco.webp",
      "leg": "An empty hall with one light",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, my talk is about sleep. My first slide says: people who wake up early are more productive."
        },
        {
          "quem": "mia",
          "t": "That sounds like a claim. Do you have evidence?"
        },
        {
          "quem": "leo",
          "t": "One article. It says early risers seem to finish more tasks, but only in office jobs."
        },
        {
          "quem": "mia",
          "t": "Then soften it. Early risers tend to finish more tasks, at least in office jobs."
        },
        {
          "quem": "leo",
          "t": "Arguably, the biggest factor is not the hour but the habit."
        },
        {
          "quem": "mia",
          "t": "That works. Arguably tells the audience it is your reading of the evidence, not a fact."
        },
        {
          "quem": "leo",
          "t": "And my last slide says everybody sleeps better in silence."
        },
        {
          "quem": "mia",
          "t": "Everybody? To some extent, maybe. The study had only forty students."
        },
        {
          "quem": "leo",
          "t": "OK. People tend to sleep better in a quiet room. Forty students is evidence, but it isn't proof."
        },
        {
          "quem": "mia",
          "t": "Exactly. Say what you found, and no more."
        }
      ],
      "perguntas": [
        {
          "q": "What does Mia say about the first slide?",
          "op": [
            "It is a claim, so it needs evidence",
            "It is already proven",
            "It is too careful"
          ],
          "a": 0,
          "por": "That sounds like a claim. Do you have evidence?"
        },
        {
          "q": "What does the article suggest about early risers?",
          "op": [
            "They seem to finish more tasks in office jobs",
            "They sleep longer than others",
            "They prefer a quiet room"
          ],
          "a": 0,
          "por": "Early risers seem to finish more tasks, but only in office jobs."
        },
        {
          "q": "Why is Mia careful about everybody sleeps better in silence?",
          "op": [
            "The study had only forty students",
            "Silence is always bad",
            "Leo did not read the article"
          ],
          "a": 0,
          "por": "The study had only forty students."
        }
      ]
    },
    "out": {
      "sub": "Three careful sentences. Hear it, then say it.",
      "frases": [
        {
          "t": "Early risers tend to finish more tasks.",
          "img": "https://wolf-labs.pages.dev/p/5cee02214dd8/shoe-size/img/live-mesa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "The habit is arguably more important than the hour.",
          "img": "https://wolf-labs.pages.dev/p/5cee02214dd8/shoe-size/img/live-palco.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "This seems to be true, to some extent.",
          "img": "https://wolf-labs.pages.dev/p/5cee02214dd8/shoe-size/img/live-regua.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "As strong as the evidence. Four quick ones.",
      "regra": "<b>tend to / seem to</b> + base verb · <b>arguably</b> · <b>to some extent</b> (never <i>in</i>) · a claim needs a careful verb.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "Early risers seem to finish more tasks.",
          "aceita": [],
          "d": "Hint: <b>seem to</b> + base verb."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "People tend to sleeping better in a quiet room.",
          "r": "People tend to sleep better in a quiet room.",
          "aceita": [],
          "d": "Hint: after <b>tend to</b>, the base verb."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "This is true in some extent.",
          "r": "This is true to some extent.",
          "aceita": [],
          "d": "Hint: the preposition is always <b>to</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: make the claim more careful.",
          "mostra": "Everybody learns faster at night.",
          "r": "People tend to learn faster at night.",
          "aceita": [
            "Some people tend to learn faster at night.",
            "People seem to learn faster at night.",
            "Many people seem to learn faster at night."
          ],
          "d": "Hint: one small study is not enough for <i>everybody</i>. Try <b>tend to</b> or <b>seem to</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/5cee02214dd8/shoe-size/img/live-mesa.webp",
      "leg": "A notebook, a pen and a lamp",
      "pede": "Look at the picture: a notebook, a pen and a lamp. Imagine you are preparing a short talk about a habit. Write 2 or 3 careful sentences. Use <b>tend to</b>, <b>seem to</b>, <b>arguably</b> or <b>to some extent</b>.",
      "ph": "People tend to …",
      "ex": "People tend to check their phones first thing in the morning. It seems to make them more anxious, to some extent. Arguably, a short walk is a better start."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What do people in your country tend to do on weekends?",
          "ph": "People here tend to …",
          "ex": "People in my city tend to meet friends for a long lunch on Sundays."
        },
        {
          "q": "Name something you believe, but only to some extent.",
          "ph": "I believe … to some extent.",
          "ex": "I believe that practice beats talent, but only to some extent."
        }
      ]
    }
  }
};
