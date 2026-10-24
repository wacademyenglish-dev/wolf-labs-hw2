/* NOTHING ELSE MATTERS · LIÇÃO DE CASA 2.0 (24/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: concession: although, despite, however, no matter how, even if. Linha de música: NENHUM verso aqui; o listening é diálogo original, cena neutra. B2: nenhum português. Só imagens live-* escuras (lum < 50); sem cenas de perda (regra 9). */
window.HW2 = {
  "id": "nothing-else-matters",
  "titulo": "Nothing Else Matters",
  "nivel": "B2",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/f3f50ae01125/nothing-else-matters/img/live-palco.webp",
  "alvo": "concession: although / even though + full sentence (no but in the same sentence); despite / in spite of + noun or -ing (never despite of); however starts a new sentence; no matter how + adjective / adverb + subject + verb; even if + present (no will)",
  "abrir": "What do you keep doing, even when it's hard?",
  "fecho": "<b>Although / even though</b> + a full sentence, and no <i>but</i> after it: <i>Although it was raining, we played.</i> <b>Despite / in spite of</b> + a noun or -ing: <i>despite the rain</i> (never <i>despite of</i>). <b>However</b> opens a new sentence. <b>No matter how</b> + adjective + subject + verb: <i>no matter how tired we are</i>. <b>Even if</b> + present, no <i>will</i>.",
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
      "sub": "Mia tells Leo about a concert in the park. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/f3f50ae01125/nothing-else-matters/img/live-orquestra.webp",
      "leg": "Music stands before the concert",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, did your band play at the park festival on Saturday? It rained all day."
        },
        {
          "quem": "mia",
          "t": "We did! Although it was raining, almost two hundred people stayed."
        },
        {
          "quem": "leo",
          "t": "Two hundred? Even though the field was full of mud?"
        },
        {
          "quem": "mia",
          "t": "Yes. Despite the rain, nobody went home. People brought umbrellas and danced."
        },
        {
          "quem": "leo",
          "t": "And the sound? I heard there were problems."
        },
        {
          "quem": "mia",
          "t": "In spite of a broken cable, the sound was fine. However, our drummer arrived late."
        },
        {
          "quem": "leo",
          "t": "Why? Did he get lost?"
        },
        {
          "quem": "mia",
          "t": "The traffic was terrible. No matter how early he left, he couldn't get there on time."
        },
        {
          "quem": "leo",
          "t": "Will you play there again next year?"
        },
        {
          "quem": "mia",
          "t": "Of course. Even if it rains again, we'll be there."
        }
      ],
      "perguntas": [
        {
          "q": "How many people stayed in the rain?",
          "op": [
            "Almost two hundred",
            "About twenty",
            "Nobody"
          ],
          "a": 0,
          "por": "Although it was raining, almost two hundred people stayed."
        },
        {
          "q": "Why did the drummer arrive late?",
          "op": [
            "The traffic was terrible",
            "He got lost",
            "He forgot the time"
          ],
          "a": 0,
          "por": "The traffic was terrible."
        },
        {
          "q": "Will the band play there next year?",
          "op": [
            "Yes, even if it rains",
            "Only if it's sunny",
            "No, never again"
          ],
          "a": 0,
          "por": "Even if it rains again, we'll be there."
        }
      ]
    },
    "out": {
      "sub": "Three sentences about playing anyway. Hear it, then say it.",
      "frases": [
        {
          "t": "Although it was raining, the band played until ten.",
          "img": "https://wolf-labs.pages.dev/p/f3f50ae01125/nothing-else-matters/img/live-palco.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "Despite the mud, nobody went home.",
          "img": "https://wolf-labs.pages.dev/p/f3f50ae01125/nothing-else-matters/img/live-estrada.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "No matter how tired we are, we always rehearse on Fridays.",
          "img": "https://wolf-labs.pages.dev/p/f3f50ae01125/nothing-else-matters/img/live-orquestra.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "although, despite, even if. Four quick ones.",
      "regra": "<b>although</b> + sentence, no <i>but</i> · <b>despite</b> + noun or -ing, no <i>of</i> · <b>however</b> starts a sentence · <b>even if</b> + present.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "Despite the rain, nobody went home.",
          "aceita": [],
          "d": "Hint: <b>despite</b> + a noun, then the main sentence."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is extra.",
          "mostra": "Although it was raining, but we played.",
          "r": "Although it was raining, we played.",
          "aceita": [
            "Even though it was raining, we played.",
            "It was raining, but we played."
          ],
          "d": "Hint: <b>although</b> already makes the contrast. No <i>but</i> after it."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is extra.",
          "mostra": "Despite of the traffic, he arrived early.",
          "r": "Despite the traffic, he arrived early.",
          "aceita": [
            "In spite of the traffic, he arrived early."
          ],
          "d": "Hint: <b>despite</b> has no <i>of</i>. With <i>of</i>, it is <b>in spite of</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "Even if it will rain, we will play.",
          "r": "Even if it rains, we will play.",
          "aceita": [],
          "d": "Hint: after <b>even if</b>, the present: <i>it rains</i>. No <i>will</i>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/f3f50ae01125/nothing-else-matters/img/live-palco.webp",
      "leg": "A small stage, one light",
      "pede": "Look at the picture: a small stage, one light and a stool. Write 2 or 3 sentences about something you did although it was difficult. Use <b>although</b>, <b>despite</b> or <b>no matter how</b>.",
      "ph": "Although I was …, I … Despite …",
      "ex": "Although I was tired, I went to my guitar class. Despite the traffic, I arrived on time. No matter how busy I am, I practise every day."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What do you always do, no matter how busy you are?",
          "ph": "No matter how busy I am, I …",
          "ex": "No matter how busy I am, I take a walk after lunch."
        },
        {
          "q": "Tell me about a day you had fun despite a problem.",
          "ph": "Despite …, we …",
          "ex": "Despite the rain, we had a great barbecue under the roof."
        }
      ]
    }
  }
};
