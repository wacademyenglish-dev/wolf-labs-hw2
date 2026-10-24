/* WISH YOU WERE HERE · LIÇÃO DE CASA 2.0 (24/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: embedded questions. Linha de música: NENHUM verso aqui; o listening é diálogo original, cena neutra. B2: nenhum português. Só imagens live-* escuras (lum < 50); sem cenas de perda (regra 9). */
window.HW2 = {
  "id": "wish-you-were-here",
  "titulo": "Wish You Were Here",
  "nivel": "B2",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/ce3d9260f157/wish-you-were-here/img/live-disco.webp",
  "alvo": "embedded questions: Do you know / Can you tell me / I wonder + question word + normal order (Do you know where it is?); no do / does / did inside; yes / no questions with if / whether",
  "abrir": "What's a question you would ask a local in a city you're visiting?",
  "fecho": "Wrapped inside another question, the question turns back into a normal sentence: <i>Where is it?</i> → <b>Do you know where it is?</b> No <b>do / does / did</b> inside: <i>Do you know when the train left?</i> A yes / no question opens with <b>if</b> or <b>whether</b>: <i>I wonder if they're open.</i>",
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
      "sub": "Mia and Leo in a little record shop on holiday. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/ce3d9260f157/wish-you-were-here/img/live-disco.webp",
      "leg": "A record on an old turntable",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, this little record shop is amazing. Do you know what time it closes?"
        },
        {
          "quem": "leo",
          "t": "I asked at the counter. It closes at seven, so we have an hour."
        },
        {
          "quem": "mia",
          "t": "Great. I wonder where they keep the jazz records."
        },
        {
          "quem": "leo",
          "t": "Over there, by the window. Do you know how much this one costs? There's no price on it."
        },
        {
          "quem": "mia",
          "t": "No, but I can ask. I'd like to know if they take cards, too."
        },
        {
          "quem": "leo",
          "t": "They do. I saw a sign. Can you tell me why you need three copies of the same album?"
        },
        {
          "quem": "mia",
          "t": "One for me, one for my sister and one for my friend in Chile. I'm sending her a postcard with it."
        },
        {
          "quem": "leo",
          "t": "Do you know how long a parcel takes to get to Chile?"
        },
        {
          "quem": "mia",
          "t": "I have no idea. I wonder whether it will arrive before her birthday."
        }
      ],
      "perguntas": [
        {
          "q": "What time does the shop close?",
          "op": [
            "At seven",
            "At eleven",
            "At nine"
          ],
          "a": 0,
          "por": "It closes at seven, so we have an hour."
        },
        {
          "q": "Where are the jazz records?",
          "op": [
            "By the window",
            "Near the counter",
            "In the back room"
          ],
          "a": 0,
          "por": "Over there, by the window."
        },
        {
          "q": "Why does Mia buy three copies?",
          "op": [
            "For herself, her sister and a friend",
            "Because they are cheap",
            "For a party"
          ],
          "a": 0,
          "por": "One for me, one for my sister and one for my friend in Chile."
        }
      ]
    },
    "out": {
      "sub": "Three polite questions in a shop. Hear it, then say it.",
      "frases": [
        {
          "t": "Do you know what time the shop closes?",
          "img": "https://wolf-labs.pages.dev/p/ce3d9260f157/wish-you-were-here/img/live-disco.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "I wonder where they keep the old records.",
          "img": "https://wolf-labs.pages.dev/p/ce3d9260f157/wish-you-were-here/img/live-radio.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "Could you tell me if this record is on sale?",
          "img": "https://wolf-labs.pages.dev/p/ce3d9260f157/wish-you-were-here/img/live-disco.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "The question inside a question. Four quick ones.",
      "regra": "Inside: normal order · <b>Do you know where it is?</b> · no <b>do / does / did</b> inside · yes / no: <b>if / whether</b>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "Do you know where the station is?",
          "aceita": [],
          "d": "Hint: inside the question, normal order: <i>where the station is</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "Do you know what time does the shop close?",
          "r": "Do you know what time the shop closes?",
          "aceita": [],
          "d": "Hint: no <b>does</b> inside. The verb takes the -s: <i>the shop closes</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: the word order is wrong.",
          "mostra": "Can you tell me where is the bank?",
          "r": "Can you tell me where the bank is?",
          "aceita": [],
          "d": "Hint: inside the question, subject first, then the verb: <i>where the bank is</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "Do you know when did the train leave?",
          "r": "Do you know when the train left?",
          "aceita": [],
          "d": "Hint: no <b>did</b> inside. The verb goes to the past: <i>the train left</i>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/ce3d9260f157/wish-you-were-here/img/live-janela.webp",
      "leg": "Rain on a window, city lights behind",
      "pede": "Look at the picture: rain on a window in a city you're visiting. Write 2 or 3 polite questions you might ask at the hotel desk. Use <b>Do you know …</b>, <b>Could you tell me …</b> or <b>I wonder if …</b>.",
      "ph": "Could you tell me where … Do you know if …",
      "ex": "Could you tell me where the nearest museum is? Do you know if it's open on Mondays? I wonder whether I need an umbrella today."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "Think of a trip you'd like to take. What do you want to know about the place? Start with I wonder …",
          "ph": "I wonder how … I'd like to know if …",
          "ex": "I wonder how cold Chile is in July. I'd like to know if the trains are expensive."
        },
        {
          "q": "Ask a friend two polite questions about their weekend. Start with Do you know … or Can you tell me …",
          "ph": "Can you tell me where … Do you know if …",
          "ex": "Can you tell me where you had dinner on Saturday? Do you know if the restaurant opens on Sundays?"
        }
      ]
    }
  }
};
