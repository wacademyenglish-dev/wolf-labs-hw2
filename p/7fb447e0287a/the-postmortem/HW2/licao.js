/* THE POSTMORTEM · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: passiva sem culpa (was/will be/has been + participio); postmortem = termo de software. B2: nenhum portugues. So live-capa (lum 36). */
window.HW2 = {
  "id": "the-postmortem",
  "titulo": "The Postmortem",
  "nivel": "B2",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/7fb447e0287a/the-postmortem/img/live-capa.webp",
  "alvo": "the passive voice to describe what happened without blaming people (The config was changed · The alert was not sent), will be + third form for actions (A check will be added), present perfect passive for what is done (has been updated); never was change, it was happened",
  "abrir": "Think of a mistake you learned a lot from. What did it teach you?",
  "fecho": "A blameless postmortem describes the system, not the person: <b>was / were + third form</b>: <i>The config was changed</i>, <i>The alert was not sent</i>. Next steps: <b>will be + third form</b>: <i>A check will be added</i>. Done already: <b>has / have been + third form</b>: <i>The runbook has been updated</i>. Never <i>it was happened</i>: <i>happen</i> has no passive.",
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
      "sub": "Mia and Leo before the postmortem meeting. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/7fb447e0287a/the-postmortem/img/live-capa.webp",
      "leg": "A meeting room",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, the postmortem meeting is at ten. Is the document ready?"
        },
        {
          "quem": "mia",
          "t": "Almost. The timeline has been written, and the impact has been added: forty minutes of failed payments."
        },
        {
          "quem": "leo",
          "t": "What does it say about the cause?"
        },
        {
          "quem": "mia",
          "t": "The config was changed at 2:40, and the alert was not sent because the threshold was set too high."
        },
        {
          "quem": "leo",
          "t": "Good. We don't write that Dan broke production."
        },
        {
          "quem": "mia",
          "t": "Right. Blameless means we describe what happened to the system, not who did it."
        },
        {
          "quem": "leo",
          "t": "And the actions?"
        },
        {
          "quem": "mia",
          "t": "A check will be added to the deploy pipeline, the alert will be fixed this week, and the runbook has been updated."
        },
        {
          "quem": "leo",
          "t": "Victor will ask for a name."
        },
        {
          "quem": "mia",
          "t": "Then I'll say the process failed, not a person. Mistakes were made, and we've learned from them."
        },
        {
          "quem": "leo",
          "t": "Perfect. Let's go."
        }
      ],
      "perguntas": [
        {
          "q": "What was the impact of the incident?",
          "op": [
            "Forty minutes of failed payments",
            "A lost database",
            "A slow website"
          ],
          "a": 0,
          "por": "The impact has been added: forty minutes of failed payments."
        },
        {
          "q": "Why was the alert not sent?",
          "op": [
            "The threshold was set too high",
            "Nobody was on call",
            "The server was off"
          ],
          "a": 0,
          "por": "The alert was not sent because the threshold was set too high."
        },
        {
          "q": "What will be added to the deploy pipeline?",
          "op": [
            "A check",
            "A new server",
            "A new engineer"
          ],
          "a": 0,
          "por": "A check will be added to the deploy pipeline."
        }
      ]
    },
    "out": {
      "sub": "Three sentences from the document. Hear it, then say it.",
      "frases": [
        {
          "t": "The config was changed at 2:40, and the alert was not sent.",
          "img": "https://wolf-labs.pages.dev/p/7fb447e0287a/the-postmortem/img/live-capa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "A check will be added to the deploy pipeline.",
          "img": "https://wolf-labs.pages.dev/p/7fb447e0287a/the-postmortem/img/live-capa.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "The runbook has been updated, and the tests have been fixed.",
          "img": "https://wolf-labs.pages.dev/p/7fb447e0287a/the-postmortem/img/live-capa.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Passive, no blame. Four quick ones.",
      "regra": "<b>was / were</b> + third form · <b>will be</b> + third form · <b>has / have been</b> + third form · <i>happen</i> has no passive.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "A check will be added to the pipeline.",
          "aceita": [],
          "d": "Hint: <b>will be</b> + third form for a next step."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "The config was change at 2:40.",
          "r": "The config was changed at 2:40.",
          "aceita": [],
          "d": "Hint: the passive needs the third form: <b>was changed</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "It was happened at night.",
          "r": "It happened at night.",
          "aceita": [
            "It happened during the night."
          ],
          "d": "Hint: <i>happen</i> has no passive. Just say <b>happened</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "The runbook has updated this morning.",
          "r": "The runbook has been updated this morning.",
          "aceita": [
            "The runbook was updated this morning."
          ],
          "d": "Hint: the runbook doesn't update itself: <b>has been updated</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/7fb447e0287a/the-postmortem/img/live-capa.webp",
      "leg": "A meeting room, after hours",
      "pede": "Look at the picture: a meeting room after hours. Write 2 or 3 sentences about a mistake you know (work, class or home) without blaming anyone. Use the passive: <b>was / were + third form</b> or <b>will be + third form</b>.",
      "ph": "The … was …",
      "ex": "The report was sent to the wrong address. The file was not checked. A second check will be added next time."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What is one thing in your work or studies that has been improved recently?",
          "ph": "… has been improved.",
          "ex": "Our weekly report has been improved. It is shorter now."
        },
        {
          "q": "Think of a small mistake in your team. How can you describe it without blaming a person?",
          "ph": "The … was …",
          "ex": "The invoice was sent twice. A reminder will be added to our list."
        }
      ]
    }
  }
};
