/* SORT OF, KIND OF · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: linguagem vaga: sort of, kind of, -ish, about, more or less. B2: nenhum português. Imagem: só a live-capa (escura, 33), a live-prox ficou de fora. */
window.HW2 = {
  "id": "sort-of-kind-of",
  "titulo": "Sort Of, Kind Of",
  "nivel": "B2",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/0e2465c5b1e8/sort-of-kind-of/img/live-capa.jpg",
  "alvo": "vague language on purpose: sort of, kind of, -ish (tallish, eight-ish), about, like + number, more or less, or something, and stuff; one vague word is enough; never more or less of, a type of shy",
  "abrir": "What time do you usually get home, more or less?",
  "fecho": "<b>Sort of / kind of</b> + adjective: <i>kind of shy</i>. <b>-ish</b>: <i>tallish, eight-ish</i>. Numbers: <b>about</b> fifty, <b>like</b> fifty, <b>more or less</b>. Lists: <b>or something</b>, <b>and stuff</b>. One vague word is enough. Never <i>more or less of</i>, never <i>a type of shy</i>.",
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
  "rate": "-10%",
  "rodadas": {
    "listen": {
      "sub": "Mia and Leo talk about a new colleague. A new scene, about one minute.",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, who is the new guy on your team? Describe him."
        },
        {
          "quem": "mia",
          "t": "Well, he's tallish, with reddish hair, and sort of quiet at first."
        },
        {
          "quem": "leo",
          "t": "How old would you say?"
        },
        {
          "quem": "mia",
          "t": "Thirty-ish, I guess. Kind of young for a manager."
        },
        {
          "quem": "leo",
          "t": "And what's he like?"
        },
        {
          "quem": "mia",
          "t": "Funny, in a dry sort of way. He's planning a party, like, forty people or something."
        },
        {
          "quem": "leo",
          "t": "When is it?"
        },
        {
          "quem": "mia",
          "t": "Saturday, around eight-ish, and there will be pizza and stuff."
        },
        {
          "quem": "leo",
          "t": "Are you going?"
        },
        {
          "quem": "mia",
          "t": "Ish. I might come for an hour or so, more or less."
        }
      ],
      "perguntas": [
        {
          "q": "How does Mia describe the new colleague?",
          "op": [
            "Tallish, with reddish hair",
            "Very tall, with black hair",
            "Short, with grey hair"
          ],
          "a": 0,
          "por": "He's tallish, with reddish hair, and sort of quiet at first."
        },
        {
          "q": "When is the party?",
          "op": [
            "On Saturday, around eight",
            "On Friday at nine exactly",
            "On Sunday afternoon"
          ],
          "a": 0,
          "por": "Saturday, around eight-ish."
        },
        {
          "q": "Is Mia going to the party?",
          "op": [
            "Sort of: she might come for an hour or so",
            "Yes, for the whole night",
            "No, never"
          ],
          "a": 0,
          "por": "Ish. I might come for an hour or so, more or less."
        }
      ]
    },
    "out": {
      "sub": "Three vague sentences. Hear it, then say it.",
      "frases": [
        {
          "t": "He's tallish, with reddish hair, and sort of quiet.",
          "au": "audio/say1.mp3"
        },
        {
          "t": "The party starts at eight-ish, and there will be pizza and stuff.",
          "au": "audio/say2.mp3"
        },
        {
          "t": "There were about forty people, more or less.",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Be vague, but correctly. Four quick ones.",
      "regra": "<b>sort of / kind of</b> + adjective · <b>-ish</b> · <b>about</b> / <b>like</b> + number · <b>more or less</b> (no <i>of</i>) · one vague word is enough",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "The party starts at eight, more or less.",
          "aceita": [],
          "d": "Hint: <b>more or less</b> closes the sentence."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "It starts at eight, more or less of.",
          "r": "It starts at eight, more or less.",
          "aceita": [],
          "d": "Hint: <b>more or less</b> never takes <i>of</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: two words are wrong.",
          "mostra": "He is a type of shy at first.",
          "r": "He is kind of shy at first.",
          "aceita": [
            "He is sort of shy at first."
          ],
          "d": "Hint: <b>kind of</b> or <b>sort of</b> + adjective means a little."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is too much.",
          "mostra": "There were like some fifty people there.",
          "r": "There were like fifty people there.",
          "aceita": [
            "There were about fifty people there.",
            "There were some fifty people there."
          ],
          "d": "Hint: one approximating word is enough."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/0e2465c5b1e8/sort-of-kind-of/img/live-capa.jpg",
      "leg": "An accordion and records on a red sofa",
      "pede": "Look at the picture: an accordion and a pile of records on a red sofa. Write 2 or 3 sentences describing the room or its owner, without being exact. Use <b>sort of</b>, <b>kind of</b>, <b>-ish</b>, <b>about</b> or <b>more or less</b>.",
      "ph": "It's a kind of music room, with about ...",
      "ex": "It's a kind of music room, with a reddish sofa and about twenty records, more or less. The owner is sort of old-fashioned, or something."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "Describe the room you are in now, without being exact.",
          "ph": "It's a ...ish room, about ...",
          "ex": "It's a smallish room, about three meters wide, more or less. The walls are sort of white."
        },
        {
          "q": "What time do you usually get home? Be vague.",
          "ph": "I get home around ...-ish",
          "ex": "I usually get home around seven-ish, or a bit later if the traffic is bad."
        }
      ]
    }
  }
};
