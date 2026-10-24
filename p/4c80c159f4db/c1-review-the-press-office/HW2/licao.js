/* REVIEW: THE PRESS OFFICE · LIÇÃO DE CASA 2.0 (24/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: Unit 8: analogies, participle clauses, impersonal reports, reportedly/according to, in other words. C1: nenhum português. Só as imagens live-* (já escuras). */
window.HW2 = {
  "id": "c1-review-the-press-office",
  "titulo": "Review: The Press Office",
  "nivel": "C1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/4c80c159f4db/c1-review-the-press-office/img/live-capa.webp",
  "alvo": "Unit 8 review (explain and report): analogies (it's a bit like, think of it as), participle clauses (Having checked...), impersonal reports (it has been suggested / agreed that), source and distance (reportedly, allegedly, according to), rephrasing (in other words), short answers (if so, if not, not that I know of)",
  "abrir": "What is a rumour you heard this week? Where did it come from?",
  "fecho": "<b>Source and distance</b>: <i>according to</i> the team, <i>reportedly</i>, <i>allegedly</i>. <b>Impersonal</b>: <i>It has been suggested that…</i> <b>Participle</b>: <i>Having checked the logs, the team found nothing.</i> <b>Explain</b>: <i>It's a bit like…</i>, <i>Think of it as…</i>, <i>In other words…</i> Short answers: <i>If so… If not… Not that I know of.</i>",
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
  "rate": "-8%",
  "rodadas": {
    "listen": {
      "sub": "Mia and Leo at the press office on a busy afternoon. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/4c80c159f4db/c1-review-the-press-office/img/live-capa.webp",
      "leg": "A lamp and a phone on a quiet desk",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, the radio says our company lost customer data. Is that true?"
        },
        {
          "quem": "leo",
          "t": "Not that I know of. According to the IT team, there was reportedly an attempt to get in last night."
        },
        {
          "quem": "mia",
          "t": "An attempt? What does that mean, exactly?"
        },
        {
          "quem": "leo",
          "t": "Think of it as someone trying every key on your front door. The door held."
        },
        {
          "quem": "mia",
          "t": "So is it confirmed that nothing was taken?"
        },
        {
          "quem": "leo",
          "t": "It has not been confirmed yet. Having checked the logs, the team found nothing missing."
        },
        {
          "quem": "mia",
          "t": "So, in other words, nobody got in."
        },
        {
          "quem": "leo",
          "t": "In other words, yes. It has been agreed that an outside audit will start this week."
        },
        {
          "quem": "mia",
          "t": "And if a journalist calls me?"
        },
        {
          "quem": "leo",
          "t": "If so, say only that. If not, wait for the statement at five."
        }
      ],
      "perguntas": [
        {
          "q": "Where does the news about the attempt come from?",
          "op": [
            "The IT team",
            "A newspaper",
            "A customer"
          ],
          "a": 0,
          "por": "According to the IT team, there was reportedly an attempt to get in last night."
        },
        {
          "q": "What did the team find after checking the logs?",
          "op": [
            "Nothing missing",
            "A broken door",
            "A stolen file"
          ],
          "a": 0,
          "por": "Having checked the logs, the team found nothing missing."
        },
        {
          "q": "What should Mia say to a journalist?",
          "op": [
            "That an outside audit will start",
            "That data was stolen",
            "That she cannot talk"
          ],
          "a": 0,
          "por": "It has been agreed that an outside audit will start this week."
        }
      ]
    },
    "out": {
      "sub": "Three sentences to report news carefully. Hear it, then say it.",
      "frases": [
        {
          "t": "Reportedly, someone tried to open the door last night.",
          "img": "https://wolf-labs.pages.dev/p/4c80c159f4db/c1-review-the-press-office/img/live-capa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "Having checked the logs, the team found nothing missing.",
          "img": "https://wolf-labs.pages.dev/p/4c80c159f4db/c1-review-the-press-office/img/live-conversa.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "It has been agreed that an outside audit will start this week.",
          "img": "https://wolf-labs.pages.dev/p/4c80c159f4db/c1-review-the-press-office/img/live-conversa.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Report, explain, rephrase. Four quick ones.",
      "regra": "<b>according to</b> + source · <b>It has been suggested that…</b> · <b>Having</b> + past participle · <b>Think of it as…</b> · <b>in other words</b>",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "Having checked the logs, the team found nothing.",
          "aceita": [],
          "d": "Hint: <b>Having</b> + past participle opens the sentence, then the main clause."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is missing.",
          "mostra": "According the finance director, profits are stable.",
          "r": "According to the finance director, profits are stable.",
          "aceita": [],
          "d": "Hint: the source needs <b>according to</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is missing.",
          "mostra": "It has suggested that profits will fall.",
          "r": "It has been suggested that profits will fall.",
          "aceita": [],
          "d": "Hint: the report is impersonal and passive: <b>It has been suggested</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "Think about it as a library.",
          "r": "Think of it as a library.",
          "aceita": [
            "Think of it like a library."
          ],
          "d": "Hint: an analogy starts with <b>Think of it as…</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/4c80c159f4db/c1-review-the-press-office/img/live-capa.webp",
      "leg": "A lamp and a phone on a quiet desk",
      "pede": "Look at the picture: a lamp and a phone on a quiet desk. Write 2 or 3 sentences for a press statement about a rumour at a company. Use <b>according to…</b>, <b>reportedly</b>, <b>it has been suggested that…</b> or <b>in other words</b>.",
      "ph": "According to our team, there was reportedly …",
      "ex": "According to our team, there was reportedly a small problem last night. It has not been confirmed that anything was lost. In other words, we believe everyone is safe."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "Tell me about a rumour you heard. Report it carefully, with a source.",
          "ph": "According to …, it has been suggested that …",
          "ex": "According to a colleague, it has been suggested that our office will move next year."
        },
        {
          "q": "Explain your job or your studies with an analogy.",
          "ph": "My work is a bit like …",
          "ex": "My work is a bit like being a translator between people and computers."
        }
      ]
    }
  }
};
