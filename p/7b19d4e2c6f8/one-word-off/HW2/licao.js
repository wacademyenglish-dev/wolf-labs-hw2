window.HW2_ARTIGO_CONTA = true; /* aula de artigos: a/an/the contam */
/* ONE WORD OFF · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: artigos no trabalho: a / an, the, sem artigo. B1: nenhum português. Obs.: o motor trata a/an/the como iguais na escrita; o Focus testa o que ele consegue distinguir (artigo a mais, a menos, sem artigo). */
window.HW2 = {
  "id": "one-word-off",
  "titulo": "One Word Off",
  "nivel": "B1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/7b19d4e2c6f8/one-word-off/img/live-forno.webp",
  "alvo": "articles at work: a / an (one of many, first mention; the sound decides: an hour, a uniform; jobs take a / an), the (the one you both know), no word (all of them in general, and words English does not count: training, information)",
  "abrir": "What is on your desk right now?",
  "fecho": "One question: <b>one of many, the one you both know, or the whole idea?</b> One of many, the first time: <b>a / an</b> (<i>an oven</i>). The one you both know: <b>the</b> (<i>the oven from June</i>). The whole idea, or a word English does not count: <b>no word</b> (<i>spare parts are free, training is free</i>). The sound decides: <i>an hour, a uniform</i>. A job takes <b>a / an</b>: <i>she is an engineer</i>.",
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
      "sub": "Mia and Leo close a deal. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/7b19d4e2c6f8/one-word-off/img/live-bg-mesa.webp",
      "leg": "The meeting table",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, I read your quote. Clause one says an oven, but I don't want an oven. I want the oven from the trade fair."
        },
        {
          "quem": "mia",
          "t": "The RX-7. Of course. I will write the model in clause one."
        },
        {
          "quem": "leo",
          "t": "Good. We also need a mixer. Any model is fine."
        },
        {
          "quem": "mia",
          "t": "A standard mixer is in stock. Do you need spare parts?"
        },
        {
          "quem": "leo",
          "t": "Yes. Are spare parts free in the first year?"
        },
        {
          "quem": "mia",
          "t": "Yes, spare parts are free for the first year. All of them."
        },
        {
          "quem": "leo",
          "t": "And training? My bakers start at five in the morning."
        },
        {
          "quem": "mia",
          "t": "Training is free. An hour is enough for the team, and our engineer Rita does it."
        },
        {
          "quem": "leo",
          "t": "Perfect. Please call me before Friday."
        },
        {
          "quem": "mia",
          "t": "I will send the new contract tonight. Thank you."
        }
      ],
      "perguntas": [
        {
          "q": "Which oven does the client want?",
          "op": [
            "The one from the trade fair",
            "Any old oven",
            "The cheapest oven"
          ],
          "a": 0,
          "por": "I want the oven from the trade fair."
        },
        {
          "q": "What does he say about the mixer?",
          "op": [
            "Any model is fine",
            "He wants the one from the fair",
            "He does not need one"
          ],
          "a": 0,
          "por": "We also need a mixer. Any model is fine."
        },
        {
          "q": "What is free for the first year?",
          "op": [
            "Spare parts",
            "The mixers",
            "The ovens"
          ],
          "a": 0,
          "por": "Spare parts are free for the first year. All of them."
        }
      ]
    },
    "out": {
      "sub": "Three sentences from the call. Hear it, then say it.",
      "frases": [
        {
          "t": "I want the oven from the trade fair.",
          "img": "https://wolf-labs.pages.dev/p/7b19d4e2c6f8/one-word-off/img/live-forno.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "We need a mixer. Any model is fine.",
          "img": "https://wolf-labs.pages.dev/p/7b19d4e2c6f8/one-word-off/img/live-bg-copia.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "Spare parts are free, and training is free.",
          "img": "https://wolf-labs.pages.dev/p/7b19d4e2c6f8/one-word-off/img/live-bg-mesa.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "A, an, the or no word. Four quick ones.",
      "regra": "<b>a / an</b> = one of many · <b>the</b> = the one you both know · <b>no word</b> = all of them, or words English does not count (spare parts, training).",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "Rita is an engineer and she installs the oven.",
          "aceita": [],
          "d": "Hint: a job takes <b>a / an</b>: <b>an</b> engineer (the sound of the e)."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is extra.",
          "mostra": "We include a training for five bakers.",
          "r": "We include training for five bakers.",
          "aceita": [
            "We include training for the five bakers"
          ],
          "d": "Hint: English does not count training: no <b>a</b>, no <b>an</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one small word is missing. You both know which oven.",
          "mostra": "Please sign for oven on arrival.",
          "r": "Please sign for the oven on arrival.",
          "aceita": [
            "Please sign for the oven on arrival"
          ],
          "d": "Hint: you both know which oven now: <b>the</b> oven."
        },
        {
          "tipo": "escreve",
          "t": "Say it in general: all spare parts, the whole kind.",
          "mostra": "spare parts · free · first year",
          "r": "Spare parts are free for the first year.",
          "aceita": [
            "Spare parts are free in the first year.",
            "Spare parts are free during the first year."
          ],
          "d": "Hint: the whole kind, plural: no word in front."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/7b19d4e2c6f8/one-word-off/img/live-bg-copia.webp",
      "leg": "Boxes ready to leave the warehouse",
      "pede": "Look at the picture: boxes ready to leave the warehouse. You are writing to a client. Say what you send, which one, and what is free. Use <b>a / an</b>, <b>the</b> or no word.",
      "ph": "I will send …",
      "ex": "I will send an oven and a mixer. The oven is the RX-7 from the fair. Training is free for the first year."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What is your job, and where do you work?",
          "ph": "I'm a / an … I work for a …",
          "ex": "I'm a sales assistant. I work for a small logistics company."
        },
        {
          "q": "What is on your desk? Then tell me more about one thing.",
          "ph": "There is a … The … is …",
          "ex": "There is a laptop and a notebook. The laptop is new, and the notebook is full."
        }
      ]
    }
  }
};
