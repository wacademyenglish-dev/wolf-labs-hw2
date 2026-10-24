/* THE SCOUT'S REPORT · LIÇÃO DE CASA 2.0 (24/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: there is / there are. Jogo WOLFSTATION: falas originais, sem violência. A1: dicas em português só nas notas (d). */
window.HW2 = {
  "id": "the-scouts-report",
  "titulo": "The Scout's Report",
  "nivel": "A1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/89ffa92d936c/the-scouts-report/img/live-ship.webp",
  "alvo": "there is / there are; there isn't / there aren't any; Is there ...? Are there any ...?; How many ... are there?; never have for there is, never there is + plural",
  "abrir": "What is there near your house?",
  "fecho": "<b>There is</b> + one thing · <b>there are</b> + two or more · <b>There isn't a</b> · <b>There aren't any</b> · <i>Is there a bridge? Are there any boxes? How many doors are there?</i> Never <i>Have two boxes</i>.",
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
      "sub": "Mia and Leo scout an old town from a hill. A new scene, about 35 seconds.",
      "img": "https://wolf-labs.pages.dev/p/89ffa92d936c/the-scouts-report/img/live-ruins.webp",
      "leg": "An old town from the hill",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, I'm on the hill. I can see the old town."
        },
        {
          "quem": "mia",
          "t": "What is there? Tell me."
        },
        {
          "quem": "leo",
          "t": "There is a big bridge, and there are two towers."
        },
        {
          "quem": "mia",
          "t": "Are there any people?"
        },
        {
          "quem": "leo",
          "t": "No, there aren't any people. There is only a dog."
        },
        {
          "quem": "mia",
          "t": "How many doors are there?"
        },
        {
          "quem": "leo",
          "t": "There are four doors, but there isn't a window."
        },
        {
          "quem": "mia",
          "t": "Is there any water?"
        },
        {
          "quem": "leo",
          "t": "Yes, there is. There is a small river under the bridge."
        },
        {
          "quem": "mia",
          "t": "Is there a way to the tower?"
        },
        {
          "quem": "leo",
          "t": "Yes, there is. There are stairs behind the big door."
        }
      ],
      "perguntas": [
        {
          "q": "What is there in the old town?",
          "op": [
            "A big bridge and two towers",
            "A big river and a ship",
            "Two dogs and a bridge"
          ],
          "a": 0,
          "por": "There is a big bridge, and there are two towers."
        },
        {
          "q": "How many doors are there?",
          "op": [
            "Four",
            "Two",
            "Six"
          ],
          "a": 0,
          "por": "There are four doors, but there isn't a window."
        },
        {
          "q": "Where are the stairs?",
          "op": [
            "Behind the big door",
            "Under the bridge",
            "Next to the river"
          ],
          "a": 0,
          "por": "There are stairs behind the big door."
        }
      ]
    },
    "out": {
      "sub": "Three sentences from the scout's report. Hear it, then say it.",
      "frases": [
        {
          "t": "There is a big bridge and two towers.",
          "img": "https://wolf-labs.pages.dev/p/89ffa92d936c/the-scouts-report/img/live-bridge.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "Are there any lamps in the street?",
          "img": "https://wolf-labs.pages.dev/p/89ffa92d936c/the-scouts-report/img/live-ruins.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "How many boxes are there on the ship?",
          "img": "https://wolf-labs.pages.dev/p/89ffa92d936c/the-scouts-report/img/live-ship.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "There is or there are? Four quick ones.",
      "regra": "<b>there is</b> + one · <b>there are</b> + two or more · <b>there isn't a</b> · <b>there aren't any</b> · <b>How many ... are there?</b>",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "How many doors are there in the tower",
          "aceita": [],
          "d": "Dica: pergunta de contar: <b>How many</b> + coisa + <b>are there</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "Have two boxes in the room.",
          "r": "There are two boxes in the room.",
          "aceita": [],
          "d": "Dica: em inglês, 'tem' é <b>there is / there are</b>, nunca have."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "There is three lamps on the bridge.",
          "r": "There are three lamps on the bridge.",
          "aceita": [],
          "d": "Dica: três lâmpadas é plural: <b>there are</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "There aren't some people here.",
          "r": "There aren't any people here.",
          "aceita": [],
          "d": "Dica: no negativo, use <b>any</b>, não some."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/89ffa92d936c/the-scouts-report/img/live-ruins.webp",
      "leg": "An old town with tall towers",
      "pede": "Look at the picture: an old town with tall towers. Write 2 or 3 sentences about what is there and what isn't. Use <b>there is, there are, there isn't</b> or <b>there aren't any</b>.",
      "ph": "There are tall towers. There isn't …",
      "ex": "There are three tall towers. There is a long street. There aren't any people."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What is there in your room? Name three things.",
          "ph": "In my room there is … and there are …",
          "ex": "In my room there is a bed and there are two windows."
        },
        {
          "q": "Is there a park near your house? What else is there?",
          "ph": "There is … near my house.",
          "ex": "There is a small park near my house. There aren't any big shops."
        }
      ]
    }
  }
};
