/* IT IS THOUGHT TO HAVE BEEN · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   B2: nenhum português na lição. */
window.HW2 = {
  "id": "it-is-thought-to-have-been",
  "titulo": "It Is Thought to Have Been",
  "nivel": "B2",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/ee77794bd895/it-is-thought-to-have-been/img/live-capa.webp",
  "alvo": "advanced passive reporting: is thought / said / believed + to have been + participle (an earlier event); is being + participle (in progress); never 'is thought to be made' for the past or an active 'to have destroyed'",
  "abrir": "Think of an old place near you. What is it said to have been in the past?",
  "fecho": "<b>Is thought / said / believed to have been</b> + participle: the belief is now, the event is before now. <i>The pot is thought to have been made in the hills.</i> For something in progress, use <b>is being</b> + participle: <i>The site is being mapped.</i>",
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
      "sub": "Mia and Leo in the dig tent. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/ee77794bd895/it-is-thought-to-have-been/img/live-barraca.webp",
      "leg": "The dig tent",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, look at this pot. How old is it?"
        },
        {
          "quem": "leo",
          "t": "It is thought to be about two thousand years old."
        },
        {
          "quem": "mia",
          "t": "And the village? What was it?"
        },
        {
          "quem": "leo",
          "t": "It is believed to have been a market town."
        },
        {
          "quem": "mia",
          "t": "Was it rich?"
        },
        {
          "quem": "leo",
          "t": "It is said to have been very rich. The coins prove it."
        },
        {
          "quem": "mia",
          "t": "Was the pot made here?"
        },
        {
          "quem": "leo",
          "t": "It is thought to have been made in the hills, then brought down by traders."
        },
        {
          "quem": "mia",
          "t": "And what is being done now?"
        },
        {
          "quem": "leo",
          "t": "The site is being mapped, and the samples are being tested in a lab."
        },
        {
          "quem": "mia",
          "t": "Good. I will write it down like a report."
        },
        {
          "quem": "leo",
          "t": "Perfect. That is exactly how a report sounds."
        }
      ],
      "perguntas": [
        {
          "q": "How old is the pot thought to be?",
          "op": [
            "About two thousand years old",
            "About two hundred years old",
            "About twenty years old"
          ],
          "a": 0,
          "por": "It is thought to be about two thousand years old."
        },
        {
          "q": "What is the village believed to have been?",
          "op": [
            "A market town",
            "A fishing port",
            "A school"
          ],
          "a": 0,
          "por": "It is believed to have been a market town."
        },
        {
          "q": "What is being done now?",
          "op": [
            "The site is being mapped and samples are being tested",
            "The pot is being sold",
            "The village is being rebuilt"
          ],
          "a": 0,
          "por": "The site is being mapped, and the samples are being tested in a lab."
        }
      ]
    },
    "out": {
      "sub": "Three sentences from the scene. Hear it, then say it.",
      "frases": [
        {
          "t": "The pot is thought to have been made in the hills.",
          "au": "audio/say1.mp3",
          "img": "https://wolf-labs.pages.dev/p/ee77794bd895/it-is-thought-to-have-been/img/live-achados.webp"
        },
        {
          "t": "The village is believed to have been a market town.",
          "au": "audio/say2.mp3",
          "img": "https://wolf-labs.pages.dev/p/ee77794bd895/it-is-thought-to-have-been/img/live-trincheira.webp"
        },
        {
          "t": "The samples are being tested in a lab.",
          "au": "audio/say3.mp3",
          "img": "https://wolf-labs.pages.dev/p/ee77794bd895/it-is-thought-to-have-been/img/live-biblioteca.webp"
        }
      ]
    },
    "focus": {
      "sub": "The belief is now. The event is before. Four quick ones.",
      "regra": "<b>is said / thought / believed to have been</b> + participle = an earlier event · <b>is being</b> + participle = in progress now.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "The village is believed to have been rich.",
          "aceita": [],
          "d": "Hint: <b>believed to have been</b> = the belief is now, the event is before."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is missing.",
          "mostra": "The market is said to have rebuilt twice.",
          "r": "The market is said to have been rebuilt twice.",
          "aceita": [],
          "d": "Hint: <b>to have been</b> + participle (<b>rebuilt</b>)."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: it is happening now.",
          "mostra": "The site is mapping at the moment.",
          "r": "The site is being mapped at the moment.",
          "aceita": [
            "The site is being mapped right now.",
            "The site is being mapped."
          ],
          "d": "Hint: in progress, with no actor: <b>is being</b> + participle."
        },
        {
          "tipo": "escreve",
          "t": "Rewrite it in report style.",
          "mostra": "People say the pot was made in the hills. (The pot is …)",
          "r": "The pot is said to have been made in the hills.",
          "aceita": [
            "The pot is thought to have been made in the hills.",
            "The pot is believed to have been made in the hills."
          ],
          "d": "Hint: <b>is said to have been</b> + participle."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/ee77794bd895/it-is-thought-to-have-been/img/live-barraca.webp",
      "leg": "The dig tent",
      "pede": "Look at the picture: a dig tent with notes on the ground. Write two or three report sentences about an old place or object you know. Use <b>is said / thought / believed to have been</b>.",
      "ph": "The old tower is said to have been …",
      "ex": "The old church in my town is said to have been built in 1700. It is believed to have been a school once. It is being repaired now."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What is an old building or place near you said to have been?",
          "ph": "… is said to have been …",
          "ex": "The old station is said to have been a hotel."
        },
        {
          "q": "What is being built or repaired near you now?",
          "ph": "… is being …",
          "ex": "A new bridge is being built near my house."
        }
      ]
    }
  }
};
