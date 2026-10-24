/* DEMO DAY · LIÇÃO DE CASA 2.0 (24/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: present perfect (just/already/yet) x passado simples com hora; for x since. B1: nenhum português. Imagens live-capa e live-a; live-b clara fica de fora. */
window.HW2 = {
  "id": "demo-day",
  "titulo": "Demo Day",
  "nivel": "B1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/86d9b108b79a/demo-day/img/live-capa.webp",
  "alvo": "present perfect for what the team has done (We've fixed the bug) · just / already in the middle · yet at the end (haven't finished yet) · past simple when the time is named (We fixed it on Tuesday); never have + yesterday, didn't ... yet, since + a period",
  "abrir": "What have you done this week? Tell me one thing you haven't done yet.",
  "fecho": "<b>Have / has + past participle</b> for a result now: <i>We've fixed the bug.</i> <b>Just</b> and <b>already</b> go in the middle; <b>yet</b> goes at the end: <i>We haven't finished it yet.</i> With a named time, use the past simple: <i>We fixed it on Tuesday</i>, never <i>have fixed … yesterday</i>. And <b>for</b> + a period: <i>for two weeks</i>.",
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
      "sub": "Mia and Leo before the sprint demo. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/86d9b108b79a/demo-day/img/live-capa.webp",
      "leg": "The demo room",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, the demo starts in ten minutes. What have we finished this sprint?"
        },
        {
          "quem": "leo",
          "t": "We've fixed the checkout bug. We fixed it last Tuesday, and it has worked fine since then."
        },
        {
          "quem": "mia",
          "t": "Great. Have we added dark mode?"
        },
        {
          "quem": "leo",
          "t": "Yes, we've already added it. We released it on Monday."
        },
        {
          "quem": "mia",
          "t": "And the CSV export? Have you finished it yet?"
        },
        {
          "quem": "leo",
          "t": "No, we haven't finished it yet. We've only done the design."
        },
        {
          "quem": "mia",
          "t": "OK, I'll say that honestly. Have you tested the demo?"
        },
        {
          "quem": "leo",
          "t": "I've just run it twice, and it works."
        },
        {
          "quem": "mia",
          "t": "Good. Let's join the call."
        }
      ],
      "perguntas": [
        {
          "q": "When did the team fix the checkout bug?",
          "op": [
            "Last Tuesday",
            "Today",
            "On Friday"
          ],
          "a": 0,
          "por": "We fixed it last Tuesday."
        },
        {
          "q": "What has the team already added?",
          "op": [
            "Dark mode",
            "The CSV export",
            "A new login page"
          ],
          "a": 0,
          "por": "Yes, we've already added it."
        },
        {
          "q": "What hasn't the team finished yet?",
          "op": [
            "The CSV export",
            "The checkout fix",
            "Dark mode"
          ],
          "a": 0,
          "por": "No, we haven't finished it yet."
        }
      ]
    },
    "out": {
      "sub": "Three sentences for a sprint demo. Hear it, then say it.",
      "frases": [
        {
          "t": "We've just released dark mode.",
          "img": "https://wolf-labs.pages.dev/p/86d9b108b79a/demo-day/img/live-capa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "We haven't finished the export yet.",
          "img": "https://wolf-labs.pages.dev/p/86d9b108b79a/demo-day/img/live-a.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "Last Tuesday we fixed the checkout bug.",
          "img": "https://wolf-labs.pages.dev/p/86d9b108b79a/demo-day/img/live-capa.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Done, not yet, or with a time. Four quick ones.",
      "regra": "<b>have + participle</b> (no time) · <b>just / already</b> in the middle · <b>yet</b> at the end · named time = <b>past simple</b> · <b>for</b> + a period.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "We have already tested the new search.",
          "aceita": [],
          "d": "Hint: <b>have</b> + <b>already</b> + past participle."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "We have fixed the bug yesterday.",
          "r": "We fixed the bug yesterday.",
          "aceita": [],
          "d": "Hint: <b>yesterday</b> names the time, so use the past simple."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "We didn't finish the export yet.",
          "r": "We haven't finished the export yet.",
          "aceita": [
            "We have not finished the export yet."
          ],
          "d": "Hint: <b>yet</b> goes with the present perfect."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "We have worked on it since two weeks.",
          "r": "We have worked on it for two weeks.",
          "aceita": [
            "We've worked on it for two weeks."
          ],
          "d": "Hint: <b>for</b> + a period of time. <b>Since</b> + a starting point."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/86d9b108b79a/demo-day/img/live-a.webp",
      "leg": "A cup of coffee at the end of the day",
      "pede": "Look at the picture: a cup of coffee at the end of a long day. Write 2 or 3 sentences about this week: what you have done, and one thing you haven't done yet. Use <b>have + participle</b>, <b>already</b>, <b>just</b> or <b>yet</b>.",
      "ph": "This week I've … but I haven't … yet.",
      "ex": "This week I've finished a big report. I've already answered all my e-mails. I haven't started the new project yet."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What have you done today? What haven't you done yet?",
          "ph": "I've … but I haven't … yet.",
          "ex": "I've had breakfast and I've answered some messages, but I haven't called my mother yet."
        },
        {
          "q": "Tell me one thing you finished last week. When exactly?",
          "ph": "On … I finished …",
          "ex": "On Friday I finished a long report for my boss."
        }
      ]
    }
  }
};
