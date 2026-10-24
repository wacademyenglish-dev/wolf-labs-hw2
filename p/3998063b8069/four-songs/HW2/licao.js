/* FOUR SONGS · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: reminds me of / sounds x sounds like / feel like + -ing. A2: dicas em portugues so nas notas (d). So imagens live-* escuras */
window.HW2 = {
  "id": "four-songs",
  "titulo": "Four Songs",
  "nivel": "A2",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/3998063b8069/four-songs/img/live-fundo.webp",
  "alvo": "talking about music and feelings: it reminds me of + noun · remember x remind · sounds + adjective x sounds like + noun · I feel like + -ing",
  "abrir": "What kind of music do you listen to when you cook?",
  "fecho": "<b>It reminds me of</b> + a person or place. <b>I remember</b> it myself. <b>It sounds</b> + adjective (<i>It sounds happy.</i>) but <b>sounds like</b> + noun (<i>It sounds like a party.</i>). <b>I feel like</b> + -ing (<i>I feel like dancing.</i>)",
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
      "sub": "Mia and Leo talk about songs in a car. A new scene, about 45 seconds.",
      "img": "https://wolf-labs.pages.dev/p/3998063b8069/four-songs/img/live-carro.webp",
      "leg": "A car in the rain, city lights",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, what is this song? It sounds familiar."
        },
        {
          "quem": "mia",
          "t": "It is an old samba. It reminds me of my grandfather. He played it every Sunday."
        },
        {
          "quem": "leo",
          "t": "It sounds happy. It sounds like a big family lunch."
        },
        {
          "quem": "mia",
          "t": "Exactly! I remember the smell of the food."
        },
        {
          "quem": "leo",
          "t": "Now I feel like cooking something."
        },
        {
          "quem": "mia",
          "t": "Ha! I feel like dancing. Can I turn it up?"
        },
        {
          "quem": "leo",
          "t": "Sure. What about this next one? It sounds sad."
        },
        {
          "quem": "mia",
          "t": "It sounds slow, but I like it. It reminds me of rainy days."
        },
        {
          "quem": "leo",
          "t": "Do you remember the name?"
        },
        {
          "quem": "mia",
          "t": "No. But I feel like listening to it again."
        }
      ],
      "perguntas": [
        {
          "q": "What does the old samba remind Mia of?",
          "op": [
            "Her grandfather",
            "Her school",
            "A trip"
          ],
          "a": 0,
          "por": "It reminds me of my grandfather."
        },
        {
          "q": "What does Leo say the song sounds like?",
          "op": [
            "A big family lunch",
            "A party at night",
            "A sad movie"
          ],
          "a": 0,
          "por": "It sounds like a big family lunch."
        },
        {
          "q": "What does Mia feel like doing?",
          "op": [
            "Dancing",
            "Cooking",
            "Sleeping"
          ],
          "a": 0,
          "por": "I feel like dancing."
        }
      ]
    },
    "out": {
      "sub": "Three sentences about songs. Hear it, then say it.",
      "frases": [
        {
          "t": "This song reminds me of my grandfather.",
          "img": "https://wolf-labs.pages.dev/p/3998063b8069/four-songs/img/live-fundo.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "It sounds happy. It sounds like a summer party.",
          "img": "https://wolf-labs.pages.dev/p/3998063b8069/four-songs/img/live-carro.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "I feel like dancing in the kitchen.",
          "img": "https://wolf-labs.pages.dev/p/3998063b8069/four-songs/img/live-cozinha.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "remind, sounds, feel like. Four quick ones.",
      "regra": "<b>reminds me of</b> + noun · <b>sounds</b> + adjective · <b>sounds like</b> + noun · <b>feel like</b> + -ing.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "This song reminds me of my old school.",
          "aceita": [],
          "d": "Dica: <b>reminds me of</b> + lugar ou pessoa."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "This song remembers me of my sister.",
          "r": "This song reminds me of my sister.",
          "aceita": [],
          "d": "Dica: a música faz isso com você: <b>reminds me of</b>. <b>Remember</b> é você que lembra."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: sounds + adjective.",
          "mostra": "It sounds like happy.",
          "r": "It sounds happy.",
          "aceita": [],
          "d": "Dica: <b>sounds</b> + adjetivo, sem <b>like</b>. <b>Like</b> só com substantivo."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "I feel like to dance.",
          "r": "I feel like dancing.",
          "aceita": [],
          "d": "Dica: depois de <b>feel like</b>, o verbo vai com <b>-ing</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/3998063b8069/four-songs/img/live-fundo.webp",
      "leg": "An old record player in the dark",
      "pede": "Look at the picture: an old record player in a dark room. Write 2 or 3 sentences about a song you know. Use <b>reminds me of</b>, <b>sounds</b> or <b>sounds like</b>, and <b>feel like</b>.",
      "ph": "This song reminds me of …",
      "ex": "This song reminds me of my grandfather. It sounds happy, like a Sunday lunch. I feel like dancing when I hear it."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "Name a song. Who or what does it remind you of?",
          "ph": "It reminds me of …",
          "ex": "It reminds me of my first job."
        },
        {
          "q": "What does your favorite song sound like?",
          "ph": "It sounds … It sounds like …",
          "ex": "It sounds fast. It sounds like a party."
        }
      ]
    }
  }
};
