/* LOOK AT MY PICTURES · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: at / in / on, home sem palavra, very antes da palavra. A1: dicas em português só nas notas (d). A aula não tem imagens próprias: HW2 sem figuras. */
window.HW2 = {
  "id": "look-at-my-pictures",
  "titulo": "Look at My Pictures",
  "nivel": "A1",
  "minutos": 10,
  "alvo": "places: AT (one point: at the shops, at work), IN (a box: in London, in the park, in the kitchen), ON (a surface or a line: on a bridge, on the bus); home with no word (I'm home); very before the word (very big)",
  "abrir": "Where are you right now? Is it big or small?",
  "fecho": "<b>Three frames.</b> <b>AT</b> is one point on the map: at the shops, at work. <b>IN</b> is a box around you: in London, in the park, in the kitchen. <b>ON</b> is a surface or a line: on a bridge, on the bus. <b>Home</b> takes no word: I'm home. And <b>very</b> comes first: very big, very busy.",
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
      "sub": "Mia shows Leo her photos from London. A new scene, about 30 seconds.",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, look at my pictures from London!"
        },
        {
          "quem": "leo",
          "t": "Wow! Where are you in this one?"
        },
        {
          "quem": "mia",
          "t": "I'm on a bridge. London is very big."
        },
        {
          "quem": "leo",
          "t": "And this one?"
        },
        {
          "quem": "mia",
          "t": "I'm in the park. It is very green."
        },
        {
          "quem": "leo",
          "t": "Nice! Are you at the shops here?"
        },
        {
          "quem": "mia",
          "t": "Yes, I'm at the shops. It's very busy!"
        },
        {
          "quem": "leo",
          "t": "And this one? Is it a train?"
        },
        {
          "quem": "mia",
          "t": "No, I'm on a bus. The bus is red."
        },
        {
          "quem": "leo",
          "t": "Where are you now?"
        },
        {
          "quem": "mia",
          "t": "I'm home. It's very good to be home."
        }
      ],
      "perguntas": [
        {
          "q": "Where is Mia in the first picture?",
          "op": [
            "On a bridge",
            "In the park",
            "At the shops"
          ],
          "a": 0,
          "por": "I'm on a bridge. London is very big."
        },
        {
          "q": "What is very busy?",
          "op": [
            "The shops",
            "The park",
            "The bridge"
          ],
          "a": 0,
          "por": "Yes, I'm at the shops. It's very busy!"
        },
        {
          "q": "Where is Mia now?",
          "op": [
            "Home",
            "On a bus",
            "At the shops"
          ],
          "a": 0,
          "por": "I'm home. It's very good to be home."
        }
      ]
    },
    "out": {
      "sub": "Three sentences from the pictures. Hear it, then say it.",
      "frases": [
        {
          "t": "I'm on a bridge. London is very big.",
          "au": "audio/say1.mp3"
        },
        {
          "t": "I'm in the park. It is very green.",
          "au": "audio/say2.mp3"
        },
        {
          "t": "I'm at the shops. It's very busy!",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "At, in, on and very. Four quick ones.",
      "regra": "<b>at</b> = one point (the shops, work) · <b>in</b> = a box (London, the park, the kitchen) · <b>on</b> = a surface or line (a bridge, the bus) · <b>very</b> comes first: very big.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "I am at the shops and it is very busy.",
          "aceita": [],
          "d": "Dica: <b>at</b> = um ponto no mapa. <b>very</b> vem antes da palavra: very busy."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one little word is wrong.",
          "mostra": "I am on London.",
          "r": "I am in London.",
          "aceita": [
            "I'm in London.",
            "I am in London!"
          ],
          "d": "Dica: uma cidade é uma caixa em volta de você: <b>in</b> London."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one little word is wrong.",
          "mostra": "I am in the bus.",
          "r": "I am on the bus.",
          "aceita": [
            "I'm on the bus.",
            "I am on a bus.",
            "I'm on a bus."
          ],
          "d": "Dica: ônibus e trem são uma superfície: <b>on</b> the bus."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: very is in the wrong place.",
          "mostra": "London is big very.",
          "r": "London is very big.",
          "aceita": [
            "London is very big!"
          ],
          "d": "Dica: <b>very</b> vem antes da palavra: very big."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "pede": "Imagine you are in London and you send photos to a friend. Write 3 sentences: where you are, and how it is. Use <b>at</b>, <b>in</b>, <b>on</b> and <b>very</b>.",
      "ph": "I am at …",
      "ex": "I am in the park. It is very big. I am on a bus. It is very busy."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "Where are you now? Say it with in, at or on.",
          "ph": "I am in / at / on …",
          "ex": "I am in my kitchen."
        },
        {
          "q": "Where are you at eight in the morning? How is it there?",
          "ph": "At eight I am … It is very …",
          "ex": "At eight I am on the bus. It is very busy."
        }
      ]
    }
  }
};
