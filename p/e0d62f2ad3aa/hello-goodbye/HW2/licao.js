/* HELLO, GOODBYE · LIÇÃO DE CASA 2.0 (24/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: present simple he / she / it, doesn't, does. Linha de música: NENHUM verso aqui; o listening é diálogo original. A1: dicas em português só nas notas (d). */
window.HW2 = {
  "id": "hello-goodbye",
  "titulo": "Hello, Goodbye",
  "nivel": "A1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/e0d62f2ad3aa/hello-goodbye/img/live-capa.webp",
  "alvo": "present simple with he / she / it: add -s (he says, she walks); I / you / we / they: no -s; negative: doesn't + plain verb (he doesn't say); question: Does + he / she + plain verb (Does she say hello?); no -s after doesn't or does",
  "abrir": "Who says hello to you every morning?",
  "fecho": "<b>I / you / they</b> say. <b>He / she</b> says. The no is <b>doesn't</b> + plain verb: <i>He doesn't say goodbye.</i> The question is <b>Does</b> + she + plain verb: <i>Does she say hello?</i> After <i>doesn't</i> and <i>Does</i>, no -s.",
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
  "rate": "-14%",
  "rodadas": {
    "listen": {
      "sub": "Mia and Leo talk at the station. A new scene, about 40 seconds.",
      "img": "https://wolf-labs.pages.dev/p/e0d62f2ad3aa/hello-goodbye/img/live-estacao.webp",
      "leg": "A station at sunset",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, my sister works at the station. She says hello to everyone."
        },
        {
          "quem": "mia",
          "t": "Everyone? Does she say hello to you too?"
        },
        {
          "quem": "leo",
          "t": "Yes, she does. But my brother doesn't say hello. He never talks in the morning."
        },
        {
          "quem": "mia",
          "t": "My brother is the same! He doesn't say anything before coffee."
        },
        {
          "quem": "leo",
          "t": "What does your mother say?"
        },
        {
          "quem": "mia",
          "t": "She says good morning to the whole street. She talks a lot."
        },
        {
          "quem": "leo",
          "t": "My father says goodbye to the dog every day, then he runs for the train."
        },
        {
          "quem": "mia",
          "t": "Does the dog say goodbye too?"
        },
        {
          "quem": "leo",
          "t": "No, it doesn't. It sleeps!"
        }
      ],
      "perguntas": [
        {
          "q": "Who doesn't say hello in the morning?",
          "op": [
            "Leo's brother",
            "Leo's sister",
            "Mia's mother"
          ],
          "a": 0,
          "por": "My brother doesn't say hello."
        },
        {
          "q": "What does Leo's father say to the dog every day?",
          "op": [
            "Goodbye",
            "Hello",
            "Nothing"
          ],
          "a": 0,
          "por": "My father says goodbye to the dog every day."
        },
        {
          "q": "Does the dog say goodbye too?",
          "op": [
            "No, it sleeps",
            "Yes, every day",
            "Yes, it runs"
          ],
          "a": 0,
          "por": "No, it doesn't. It sleeps!"
        }
      ]
    },
    "out": {
      "sub": "Three sentences about people and hello. Hear it, then say it.",
      "frases": [
        {
          "t": "My sister says hello to everyone.",
          "img": "https://wolf-labs.pages.dev/p/e0d62f2ad3aa/hello-goodbye/img/live-estacao.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "My brother doesn't say hello in the morning.",
          "img": "https://wolf-labs.pages.dev/p/e0d62f2ad3aa/hello-goodbye/img/live-janela.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "Does your mother say goodbye to the dog?",
          "img": "https://wolf-labs.pages.dev/p/e0d62f2ad3aa/hello-goodbye/img/live-estacao.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "says or say? Four quick ones.",
      "regra": "<b>he / she</b> + verb<b>-s</b> · <b>doesn't</b> / <b>Does</b> + plain verb · I / you / they: no -s.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "My sister says hello to the neighbors.",
          "aceita": [],
          "d": "Dica: com <b>my sister</b> (she), o verbo leva <b>-s</b>: says."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "He say hello to me every day.",
          "r": "He says hello to me every day.",
          "aceita": [],
          "d": "Dica: com <b>he</b>, o verbo leva <b>-s</b>: says."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "She don't say goodbye to the dog.",
          "r": "She doesn't say goodbye to the dog.",
          "aceita": [
            "She does not say goodbye to the dog."
          ],
          "d": "Dica: com <b>she</b>, o não é <b>doesn't</b>, nunca 'don't'."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "Does your brother says hello?",
          "r": "Does your brother say hello?",
          "aceita": [],
          "d": "Dica: depois de <b>Does</b>, o verbo fica limpo, sem -s."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/e0d62f2ad3aa/hello-goodbye/img/live-janela.webp",
      "leg": "A window at dusk, a small lamp",
      "pede": "Look at the picture: a window at dusk with a small lamp. Write 2 or 3 sentences about a person in your family: what he or she <b>says</b> every day, and what he or she <b>doesn't</b> say.",
      "ph": "My brother says … but he doesn't say …",
      "ex": "My brother says hello to the dog. He doesn't say goodbye to me. My mother says good night every day."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "Who says hello to you every morning?",
          "ph": "My … says hello to me.",
          "ex": "My mother says hello to me every morning."
        },
        {
          "q": "Who in your family talks a lot? What does he or she say?",
          "ph": "My … talks a lot. He / She says …",
          "ex": "My uncle talks a lot. He says funny things at dinner."
        }
      ]
    }
  }
};
