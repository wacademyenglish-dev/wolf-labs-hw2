/* 3 A.M. · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: past continuous / past perfect / present perfect in an incident. B2: nenhum portugues. Imagens live-* escuras (lum<20). */
window.HW2 = {
  "id": "three-am",
  "titulo": "3 A.M.",
  "nivel": "B2",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/0b9dccbb849f/three-am/img/live-capa.webp",
  "alvo": "telling an incident with precision: past continuous + past simple (While I was checking the logs, the alert fired), past perfect for what came first (The deploy had gone out at 2:40), present perfect for updates (We've rolled back); never 'already started' without had, never present perfect with yesterday",
  "abrir": "Think of the last time something broke at the worst moment. What were you doing when you found out?",
  "fecho": "<b>While I was checking</b> the logs, the alert <b>fired</b>: the long action and the interruption. <b>Had gone out</b> = it came first: <i>the deploy had gone out at 2:40</i>. <b>We've rolled back</b> = an update with no time marker; with <i>yesterday</i>, use <b>rolled back</b>. Never <i>I was check</i>.",
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
      "sub": "Mia and Leo the morning after the incident. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/0b9dccbb849f/three-am/img/live-b.webp",
      "leg": "A laptop glowing in the dark",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, you were on call last night. What happened at three?"
        },
        {
          "quem": "mia",
          "t": "While I was checking the logs, the alert fired again. Checkout errors jumped to thirty-eight percent."
        },
        {
          "quem": "leo",
          "t": "Had anything changed before that?"
        },
        {
          "quem": "mia",
          "t": "Yes. A deploy had gone out at 2:40, twenty minutes before the first alert."
        },
        {
          "quem": "leo",
          "t": "So that was the trigger?"
        },
        {
          "quem": "mia",
          "t": "Probably. We've rolled back the release, and the errors have dropped to two percent."
        },
        {
          "quem": "leo",
          "t": "Have you told the customers?"
        },
        {
          "quem": "mia",
          "t": "I've updated the status page. And I was writing the summary when the CEO joined the channel."
        },
        {
          "quem": "leo",
          "t": "What did she ask?"
        },
        {
          "quem": "mia",
          "t": "She wanted to know if we were losing money. I said we had found the cause and the fix was already live."
        },
        {
          "quem": "leo",
          "t": "Good. When did the errors reach zero?"
        },
        {
          "quem": "mia",
          "t": "At 3:40. We've been watching the dashboard ever since."
        }
      ],
      "perguntas": [
        {
          "q": "What was Mia doing when the alert fired again?",
          "op": [
            "Checking the logs",
            "Writing the summary",
            "Rolling back the release"
          ],
          "a": 0,
          "por": "While I was checking the logs, the alert fired again."
        },
        {
          "q": "What had happened at 2:40?",
          "op": [
            "A deploy had gone out",
            "The server had crashed",
            "The CEO had joined"
          ],
          "a": 0,
          "por": "A deploy had gone out at 2:40, twenty minutes before the first alert."
        },
        {
          "q": "What has Mia done for the customers?",
          "op": [
            "She has updated the status page",
            "She has called every customer",
            "She has sent refunds"
          ],
          "a": 0,
          "por": "I've updated the status page."
        }
      ]
    },
    "out": {
      "sub": "Three sentences from the war room. Hear it, then say it.",
      "frases": [
        {
          "t": "While I was checking the logs, the alert fired again.",
          "img": "https://wolf-labs.pages.dev/p/0b9dccbb849f/three-am/img/live-b.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "The deploy had gone out twenty minutes before the first alert.",
          "img": "https://wolf-labs.pages.dev/p/0b9dccbb849f/three-am/img/live-a.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "We've rolled back the release, and the errors have dropped.",
          "img": "https://wolf-labs.pages.dev/p/0b9dccbb849f/three-am/img/live-capa.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Past continuous, past perfect, present perfect. Four quick ones.",
      "regra": "<b>was checking</b> + <b>fired</b> · <b>had gone out</b> = it came first · <b>we've rolled back</b> = an update · with a finished time (yesterday), use the simple past.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "While I was checking the logs, the alert fired.",
          "aceita": [],
          "d": "Hint: <b>was checking</b> is the long action, <b>fired</b> is the interruption."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is missing.",
          "mostra": "When I arrived, the error already started.",
          "r": "When I arrived, the error had already started.",
          "aceita": [
            "When I arrived, the error had started already."
          ],
          "d": "Hint: it happened before another past moment, so <b>had</b> + third form."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "We have rolled back the release yesterday.",
          "r": "We rolled back the release yesterday.",
          "aceita": [
            "We rolled the release back yesterday."
          ],
          "d": "Hint: <i>yesterday</i> is a finished time, so the simple past."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "I was check the logs at three.",
          "r": "I was checking the logs at three.",
          "aceita": [],
          "d": "Hint: after <b>was</b>, the verb needs <b>-ing</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/0b9dccbb849f/three-am/img/live-a.webp",
      "leg": "A dark server hall with red and green lights",
      "pede": "Look at the picture: a dark server hall with red and green lights. Write 2 or 3 sentences about a time something broke or stopped working. Use <b>while I was …</b>, <b>had + third form</b> or <b>we've + third form</b>.",
      "ph": "While I was … the …",
      "ex": "While I was testing the app, it crashed. The server had run out of memory. We've restarted it, and everything works again."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "Tell a short story about a bug or a problem. What was happening when you noticed it?",
          "ph": "When I noticed it, I was …",
          "ex": "When I noticed the bug, I was reviewing a pull request. The page had stopped loading for some users."
        },
        {
          "q": "What have you fixed or finished this week?",
          "ph": "This week I've …",
          "ex": "This week I've fixed two bugs and I've written a short report."
        }
      ]
    }
  }
};
