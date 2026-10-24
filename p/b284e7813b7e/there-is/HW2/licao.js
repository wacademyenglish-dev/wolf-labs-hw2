/* THERE IS · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: there is / there are, isn't / aren't, Is there. A1: dicas em português só nas notas (d). Só as imagens live-* (já escuras). */
window.HW2 = {
  "id": "there-is",
  "titulo": "There Is",
  "nivel": "A1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/b284e7813b7e/there-is/img/live-fila.webp",
  "alvo": "there is (one) / there are (more than one) · there isn't / there aren't any · Is there ...? Are there any ...?; never have a park, never is a park",
  "abrir": "What is there on your street?",
  "fecho": "<b>There is</b> + one thing: <i>There is a park.</i> <b>There are</b> + more than one: <i>There are two cinemas.</i> No: <b>there isn't</b> a ..., <b>there aren't any</b> ... Ask: <b>Is there</b> a station? <b>Are there</b> any shops? Never <i>have a park</i>, never <i>is a park</i>.",
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
      "sub": "Mia asks Leo about his town. A new scene, about 40 seconds.",
      "img": "https://wolf-labs.pages.dev/p/b284e7813b7e/there-is/img/live-fila.webp",
      "leg": "Empty seats in a cinema",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, what is there in your town?"
        },
        {
          "quem": "leo",
          "t": "There is a beach and a small market."
        },
        {
          "quem": "mia",
          "t": "Is there a cinema?"
        },
        {
          "quem": "leo",
          "t": "Yes, there are two cinemas."
        },
        {
          "quem": "mia",
          "t": "Are there any museums?"
        },
        {
          "quem": "leo",
          "t": "No, there aren't any museums. But there is a big park."
        },
        {
          "quem": "mia",
          "t": "Is there a train station?"
        },
        {
          "quem": "leo",
          "t": "No, there isn't. There are buses."
        },
        {
          "quem": "mia",
          "t": "Is there a good café?"
        },
        {
          "quem": "leo",
          "t": "Yes! There are lots of cafés near the beach."
        }
      ],
      "perguntas": [
        {
          "q": "What is there in Leo's town?",
          "op": [
            "A beach and a market",
            "A station and a museum",
            "Two parks"
          ],
          "a": 0,
          "por": "There is a beach and a small market."
        },
        {
          "q": "Is there a train station?",
          "op": [
            "No, there isn't",
            "Yes, there is",
            "Yes, there are two"
          ],
          "a": 0,
          "por": "No, there isn't. There are buses."
        },
        {
          "q": "Where are the cafés?",
          "op": [
            "Near the beach",
            "Near the station",
            "In the park"
          ],
          "a": 0,
          "por": "There are lots of cafés near the beach."
        }
      ]
    },
    "out": {
      "sub": "Three sentences about three towns. Hear it, then say it.",
      "frases": [
        {
          "t": "There are lots of museums in London.",
          "img": "https://wolf-labs.pages.dev/p/b284e7813b7e/there-is/img/live-london.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "There is a beach in Brighton.",
          "img": "https://wolf-labs.pages.dev/p/b284e7813b7e/there-is/img/live-brighton.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "There is a river in Cambridge.",
          "img": "https://wolf-labs.pages.dev/p/b284e7813b7e/there-is/img/live-cambridge.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "There is or there are? Four quick ones.",
      "regra": "<b>there is</b> + one · <b>there are</b> + more than one · <b>Is there ...?</b> · <b>there isn't</b>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "There are two cinemas in my town.",
          "aceita": [],
          "d": "Dica: dois = <b>there are</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "Have a park near my house.",
          "r": "There is a park near my house.",
          "aceita": [],
          "d": "Dica: em inglês a frase começa com <b>there is</b>, não com 'have'."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "There is two cinemas in this town.",
          "r": "There are two cinemas in this town.",
          "aceita": [],
          "d": "Dica: o número está no fim: dois = <b>are</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "Are there a station near here?",
          "r": "Is there a station near here?",
          "aceita": [],
          "d": "Dica: uma estação só: <b>Is there</b> a ...?"
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/b284e7813b7e/there-is/img/live-petworth.webp",
      "leg": "A quiet street in a small town",
      "pede": "Look at the picture: a quiet street in a small town. Write 2 or 3 sentences about it. Use <b>there is</b>, <b>there are</b> or <b>there isn't</b>.",
      "ph": "There is a street with …",
      "ex": "There are old houses on this street. There is a small road. There isn't a beach."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What is there in your town? Say two things.",
          "ph": "There is a … and there are …",
          "ex": "There is a big park and there are two supermarkets."
        },
        {
          "q": "What isn't there in your town, but you want?",
          "ph": "There isn't a … in my town.",
          "ex": "There isn't a cinema in my town. I want one."
        }
      ]
    }
  }
};
