/* THE OLD PHOTO · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: there was / there were / wasn't / weren't any. A1: dicas em português só nas notas (d). */
window.HW2 = {
  "id": "the-old-photo",
  "titulo": "The Old Photo",
  "nivel": "A1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/42ef449fab0a/the-old-photo/img/live-capa.webp",
  "alvo": "there was / there were (one thing, many things), there wasn't / weren't any, Was there ...? Were there ...?; the past of there is / there are",
  "abrir": "What was there on your street when you were a child?",
  "fecho": "<b>There was</b> + one thing, <b>there were</b> + many things: <i>There was a cinema, and there were two coffee shops.</i> No: <b>there wasn't a</b> / <b>there weren't any</b>. A question: <b>Was there a ...?</b> Never <i>had</i>.",
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
      "sub": "Mia and Leo find a box of old photos. A new scene, about 40 seconds.",
      "img": "https://wolf-labs.pages.dev/p/42ef449fab0a/the-old-photo/img/live-caixa.webp",
      "leg": "A box of old photos",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, look! An old photo of our street."
        },
        {
          "quem": "leo",
          "t": "Wow. What was there on the street?"
        },
        {
          "quem": "mia",
          "t": "There was a small cinema, and there were two coffee shops."
        },
        {
          "quem": "leo",
          "t": "Was there a supermarket?"
        },
        {
          "quem": "mia",
          "t": "No, there wasn't. There was a market on Fridays."
        },
        {
          "quem": "leo",
          "t": "Were there any cars?"
        },
        {
          "quem": "mia",
          "t": "Yes, there were two old cars. But there weren't any traffic lights."
        },
        {
          "quem": "leo",
          "t": "And now?"
        },
        {
          "quem": "mia",
          "t": "Now there is a gym, and there are a lot of cars."
        },
        {
          "quem": "leo",
          "t": "Things change!"
        }
      ],
      "perguntas": [
        {
          "q": "How many coffee shops were there?",
          "op": [
            "Two",
            "One",
            "Six"
          ],
          "a": 0,
          "por": "There was a small cinema, and there were two coffee shops."
        },
        {
          "q": "What was there on Fridays?",
          "op": [
            "A market",
            "A supermarket",
            "A gym"
          ],
          "a": 0,
          "por": "There wasn't a supermarket. There was a market on Fridays."
        }
      ]
    },
    "out": {
      "sub": "Three sentences about the past. Hear it, then say it.",
      "frases": [
        {
          "t": "There was a small cinema on Main Street.",
          "img": "https://wolf-labs.pages.dev/p/42ef449fab0a/the-old-photo/img/live-rua.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "There were two old trains at the station.",
          "img": "https://wolf-labs.pages.dev/p/42ef449fab0a/the-old-photo/img/live-estacao.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "There wasn't a TV in the kitchen.",
          "img": "https://wolf-labs.pages.dev/p/42ef449fab0a/the-old-photo/img/live-cozinha.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Was or were? Four quick ones.",
      "regra": "<b>there was</b> + one thing · <b>there were</b> + many things · <b>there weren't any</b> · <b>Was there a ...?</b>",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "There were two coffee shops on the street.",
          "aceita": [],
          "d": "Dica: duas coisas: <b>there were</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "There was two old cars.",
          "r": "There were two old cars.",
          "aceita": [],
          "d": "Dica: duas coisas pedem <b>were</b>, não 'was'."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "There weren't no cars.",
          "r": "There weren't any cars.",
          "aceita": [],
          "d": "Dica: um <b>não</b> basta: <b>weren't any</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: make a question.",
          "mostra": "There was a cinema.",
          "r": "Was there a cinema?",
          "aceita": [],
          "d": "Dica: pergunta: <b>Was there</b> primeiro."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/42ef449fab0a/the-old-photo/img/live-caixa.webp",
      "leg": "A box of old photos",
      "pede": "Look at the picture: a box of old photos. Write 2 or 3 sentences about a street or a town in the past. Use <b>there was</b>, <b>there were</b> or <b>there weren't any</b>.",
      "ph": "In the old photo there was …",
      "ex": "In the old photo there was a small cinema. There were two coffee shops. There weren't any traffic lights."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What was there on your street when you were a child?",
          "ph": "There was … There were …",
          "ex": "There was a small bakery. There were a lot of trees."
        },
        {
          "q": "Was there a park near your house?",
          "ph": "Yes, there was. / No, there wasn't.",
          "ex": "Yes, there was. There was a small park with a lake."
        }
      ]
    }
  }
};
