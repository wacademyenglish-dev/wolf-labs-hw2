/* WHOEVER TAKES IT · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: whoever / whatever / wherever / whenever / however. B2: nenhum português. Só imagens live-* (já escuras). Falas originais. */
window.HW2 = {
  "id": "whoever-takes-it",
  "titulo": "Whoever Takes It",
  "nivel": "B2",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/737bb2ad36b5/whoever-takes-it/img/live-capa.webp",
  "alvo": "whoever / whatever / wherever / whenever / however (= any person who / anything that / any place where / any time when / no matter how): the verb after whoever agrees with it (whoever wants), however + adjective + subject + verb",
  "abrir": "What do you do whenever you have free time?",
  "fecho": "<b>Whoever</b> = any person who: <i>Whoever wants can come.</i> <b>Whatever</b> = anything that. <b>Wherever</b> = any place where. <b>Whenever</b> = any time that, with a present verb: <i>Whenever I arrive, I call.</i> <b>However</b> + adjective + subject + verb: <i>However cold it is, we go.</i>",
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
      "sub": "Mia and Leo plan a long walk across the hills. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/737bb2ad36b5/whoever-takes-it/img/live-mapa.webp",
      "leg": "The old map",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, the map is ready. Whoever carries it must keep it dry."
        },
        {
          "quem": "mia",
          "t": "I'll carry it. Wherever we go, I keep it in my bag."
        },
        {
          "quem": "leo",
          "t": "Good. We can sleep in whatever village we find on the way."
        },
        {
          "quem": "mia",
          "t": "And whenever it rains, we stop at the river and wait."
        },
        {
          "quem": "leo",
          "t": "What about the path? However steep it is, we follow the old road."
        },
        {
          "quem": "mia",
          "t": "However slow we are, we will arrive before winter."
        },
        {
          "quem": "leo",
          "t": "Whatever happens, we stay together."
        },
        {
          "quem": "mia",
          "t": "Agreed. And whoever finds the cave first can make the fire."
        },
        {
          "quem": "leo",
          "t": "Deal. I'm very fast."
        }
      ],
      "perguntas": [
        {
          "q": "Who must keep the map dry?",
          "op": [
            "Whoever carries it",
            "Only Leo",
            "Nobody"
          ],
          "a": 0,
          "por": "Whoever carries it must keep it dry."
        },
        {
          "q": "What do they do whenever it rains?",
          "op": [
            "They stop at the river and wait",
            "They run to the cave",
            "They go home"
          ],
          "a": 0,
          "por": "Whenever it rains, we stop at the river and wait."
        },
        {
          "q": "Who can make the fire?",
          "op": [
            "Whoever finds the cave first",
            "Mia, always",
            "Leo, always"
          ],
          "a": 0,
          "por": "Whoever finds the cave first can make the fire."
        }
      ]
    },
    "out": {
      "sub": "Three sentences about a long walk. Hear it, then say it.",
      "frases": [
        {
          "t": "Whoever carries the map must keep it dry.",
          "img": "https://wolf-labs.pages.dev/p/737bb2ad36b5/whoever-takes-it/img/live-capa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "Wherever we go, we follow the river.",
          "img": "https://wolf-labs.pages.dev/p/737bb2ad36b5/whoever-takes-it/img/live-rio.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "Whenever it rains, we wait in the cave.",
          "img": "https://wolf-labs.pages.dev/p/737bb2ad36b5/whoever-takes-it/img/live-caverna.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "whoever, whatever, however, whenever. Four quick ones.",
      "regra": "<b>whoever</b> (any person) · <b>whatever</b> (anything) · <b>wherever</b> (any place) · <b>whenever</b> (any time) · <b>however</b> + adjective + subject + verb.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "Whatever happens, we stay together.",
          "aceita": [],
          "d": "Hint: <b>whatever</b> = no matter what."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "Whoever want this map can ask me.",
          "r": "Whoever wants this map can ask me.",
          "aceita": [],
          "d": "Hint: <b>whoever</b> is one person, so the verb takes <b>-s</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: the word order is wrong.",
          "mostra": "However it is cold, we go.",
          "r": "However cold it is, we go.",
          "aceita": [
            "However cold it is, we will go."
          ],
          "d": "Hint: <b>however</b> + adjective first, then subject and verb."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "Whenever I will arrive, I call you.",
          "r": "Whenever I arrive, I call you.",
          "aceita": [
            "Whenever I arrive, I will call you."
          ],
          "d": "Hint: after <b>whenever</b>, use the present, never <i>will</i>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/737bb2ad36b5/whoever-takes-it/img/live-condado.webp",
      "leg": "A small house with warm lights",
      "pede": "Look at the picture: a small house with warm lights in the evening. Write 2 or 3 sentences about your habits or a rule at home. Use two of these: <b>whoever, whatever, wherever, whenever, however</b>.",
      "ph": "Whenever I … Wherever I …",
      "ex": "Whenever I travel, I take a small notebook. Wherever I go, I write one line a day. Whoever wants can read it."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What do you do whenever you have free time?",
          "ph": "Whenever I have free time, I …",
          "ex": "Whenever I have free time, I read in the park."
        },
        {
          "q": "Is there something you always do, wherever you are or whatever happens?",
          "ph": "Wherever I go, I … / Whatever happens, I …",
          "ex": "Wherever I go, I take my headphones. Whatever happens, I call my sister on Sunday."
        }
      ]
    }
  }
};
