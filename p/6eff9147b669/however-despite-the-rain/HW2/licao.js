/* HOWEVER, DESPITE THE RAIN · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: although / despite / in spite of / however. B1: nenhum português. Só imagens live-* (escuras). */
window.HW2 = {
  "id": "however-despite-the-rain",
  "titulo": "However, Despite the Rain",
  "nivel": "B1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/6eff9147b669/however-despite-the-rain/img/live-capa.webp",
  "alvo": "but joins two ideas · However starts a new sentence · although / even though + subject + verb · despite / in spite of + noun or -ing · although OR but, never both; never despite of, despite + clause, in spite the",
  "abrir": "Think of a night out that did not go as planned. Did you still have fun?",
  "fecho": "<b>Although / even though</b> + a full clause: <i>Although it rained, we danced.</i> <b>Despite / in spite of</b> + a noun or -ing: <i>Despite the rain, we danced.</i> <b>However</b> starts a new sentence: <i>It rained. However, we stayed.</i> Use although OR but, never both. Never <i>despite of</i>.",
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
      "sub": "Mia tells Leo about a rainy festival. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/6eff9147b669/however-despite-the-rain/img/live-palco.webp",
      "leg": "A stage with purple and blue lights",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, how was the festival on Saturday? It rained all day, didn't it?"
        },
        {
          "quem": "mia",
          "t": "It did. Despite the rain, we stayed until midnight."
        },
        {
          "quem": "leo",
          "t": "Really? I would have gone home. Wasn't the band late?"
        },
        {
          "quem": "mia",
          "t": "Two hours late! Although we were cold and wet, we danced in the mud."
        },
        {
          "quem": "leo",
          "t": "That sounds crazy. And I heard the power went out."
        },
        {
          "quem": "mia",
          "t": "The lights went out for ten minutes. However, nobody left. People sang instead."
        },
        {
          "quem": "leo",
          "t": "Even though it was dark?"
        },
        {
          "quem": "mia",
          "t": "Even though it was dark! In spite of the mud, my boots survived. The band was great, but the tickets were expensive."
        },
        {
          "quem": "leo",
          "t": "Would you go again?"
        },
        {
          "quem": "mia",
          "t": "Of course. Despite everything, it was the best night of the year."
        }
      ],
      "perguntas": [
        {
          "q": "How late was the band?",
          "op": [
            "Two hours",
            "Ten minutes",
            "All night"
          ],
          "a": 0,
          "por": "Two hours late!"
        },
        {
          "q": "What did people do when the lights went out?",
          "op": [
            "They sang",
            "They went home",
            "They bought tickets"
          ],
          "a": 0,
          "por": "However, nobody left. People sang instead."
        },
        {
          "q": "Why does Mia say it was the best night of the year?",
          "op": [
            "She had a great time in spite of the problems",
            "The weather was perfect",
            "The band came on time"
          ],
          "a": 0,
          "por": "Despite everything, it was the best night of the year."
        }
      ]
    },
    "out": {
      "sub": "Three sentences about a night with problems. Hear it, then say it.",
      "frases": [
        {
          "t": "Despite the rain, we stayed until midnight.",
          "img": "https://wolf-labs.pages.dev/p/6eff9147b669/however-despite-the-rain/img/live-botas.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "Although the band was late, nobody went home.",
          "img": "https://wolf-labs.pages.dev/p/6eff9147b669/however-despite-the-rain/img/live-palco.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "The mud was deep. However, we kept dancing.",
          "img": "https://wolf-labs.pages.dev/p/6eff9147b669/however-despite-the-rain/img/live-luzes.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "although, despite, in spite of. Four quick ones.",
      "regra": "<b>although</b> + clause · <b>despite / in spite of</b> + noun or -ing · although OR but, never both · <b>in spite OF</b>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "Although it rained, we danced all night.",
          "aceita": [],
          "d": "Hint: <b>although</b> + a full clause, then the main idea. No but."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "Despite it was raining, we stayed.",
          "r": "Despite the rain, we stayed.",
          "aceita": [
            "Despite raining, we stayed.",
            "Despite it raining, we stayed."
          ],
          "d": "Hint: after <b>despite</b>, use a noun or -ing, not a full clause."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "Although it rained, but we danced.",
          "r": "Although it rained, we danced.",
          "aceita": [
            "It rained, but we danced.",
            "Although it rained we danced."
          ],
          "d": "Hint: use <b>although</b> OR <b>but</b>, never both."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is missing.",
          "mostra": "In spite the mud, we kept dancing.",
          "r": "In spite of the mud, we kept dancing.",
          "aceita": [],
          "d": "Hint: the phrase is <b>in spite of</b>. The word OF always comes."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/6eff9147b669/however-despite-the-rain/img/live-mesa.webp",
      "leg": "A lamp and a red cup at a rainy window",
      "pede": "Look at the picture: a lamp and a cup at a rainy window. Write 2 or 3 sentences about a day when the weather or a problem did not stop you. Use <b>despite</b>, <b>although</b> or <b>however</b>.",
      "ph": "Despite the rain, I …",
      "ex": "Despite the rain, I walked to work. Although I was tired, I went to the gym. It was late. However, I finished my homework."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "Tell me about a day when something went wrong, but you still had a good time.",
          "ph": "Although … we …",
          "ex": "Although our train was late, we had a great time at the beach."
        },
        {
          "q": "What do you still do when you are very tired or busy?",
          "ph": "Despite … I still …",
          "ex": "Despite being busy, I still call my mother every night."
        }
      ]
    }
  }
};
