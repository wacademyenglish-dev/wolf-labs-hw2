/* NO SOONER HAD WE ARRIVED · LIÇÃO DE CASA 2.0 (24/10/2026)
   Motor: hw2.js. JSON puro depois do "=".
   Alvo: inversão de tempo. C1: nenhum português na lição. */
window.HW2 = {
  "id": "no-sooner",
  "titulo": "No Sooner Had We Arrived",
  "nivel": "C1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/cb40af35d982/no-sooner/img/live-tenda.webp",
  "alvo": "inversion for time: No sooner had we ... than; Hardly / Scarcely had we ... when; Not until / Only when ... did; had before the subject, and the second clause has normal order after than / when",
  "abrir": "Tell me about a trip where everything went wrong, one thing after another.",
  "fecho": "<b>No sooner had we</b> arrived <b>than</b> it rained. <b>Hardly / Scarcely had we</b> arrived <b>when</b> it rained. Both mean <i>at once</i>, and <b>had</b> goes before the subject. <b>Not until / Only when</b> the rain stopped <b>did we</b> see the valley: <i>only then</i>, with <b>did</b> in the second part.",
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
      "sub": "Mia and Leo talk about a winter camping trip. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/cb40af35d982/no-sooner/img/live-tenda.webp",
      "leg": "A lit tent in the snow",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, how was the camping trip? Your message just said disaster."
        },
        {
          "quem": "leo",
          "t": "It was. No sooner had we put up the tent than the wind tore it down."
        },
        {
          "quem": "mia",
          "t": "Oh no. Did you fix it?"
        },
        {
          "quem": "leo",
          "t": "Eventually. Hardly had we finished when it started to snow."
        },
        {
          "quem": "mia",
          "t": "And the stove? Did that work?"
        },
        {
          "quem": "leo",
          "t": "Not at first. Not until Tomas found the matches did we have any hot food."
        },
        {
          "quem": "mia",
          "t": "So when did you finally relax?"
        },
        {
          "quem": "leo",
          "t": "Only when we were inside our sleeping bags did we feel warm."
        },
        {
          "quem": "mia",
          "t": "That sounds like a story you'll tell for years."
        },
        {
          "quem": "leo",
          "t": "Already telling it. No sooner had I got home than I called my brother."
        }
      ],
      "perguntas": [
        {
          "q": "What happened right after they put up the tent?",
          "op": [
            "The wind tore it down",
            "It started to snow",
            "They lost the matches"
          ],
          "a": 0,
          "por": "No sooner had we put up the tent than the wind tore it down."
        },
        {
          "q": "When did they have hot food?",
          "op": [
            "After Tomas found the matches",
            "As soon as they arrived",
            "Before the snow"
          ],
          "a": 0,
          "por": "Not until Tomas found the matches did we have any hot food."
        },
        {
          "q": "When did Leo feel warm?",
          "op": [
            "Inside the sleeping bags",
            "Next to the stove",
            "At the tent door"
          ],
          "a": 0,
          "por": "Only when we were inside our sleeping bags did we feel warm."
        }
      ]
    },
    "out": {
      "sub": "Three sentences about a bad trip. Hear it, then say it.",
      "frases": [
        {
          "t": "No sooner had we put up the tent than the wind tore it down.",
          "img": "https://wolf-labs.pages.dev/p/cb40af35d982/no-sooner/img/live-tenda.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "Hardly had we finished when it started to snow.",
          "img": "https://wolf-labs.pages.dev/p/cb40af35d982/no-sooner/img/live-diario.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "Only when we counted the food did we understand the danger.",
          "img": "https://wolf-labs.pages.dev/p/cb40af35d982/no-sooner/img/live-diario.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Order and link. Four quick ones.",
      "regra": "<b>No sooner had we … than</b> · <b>Hardly had we … when</b> · <b>Not until … did we</b> · <b>had</b> goes before the subject.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "No sooner had we landed than the storm hit.",
          "aceita": [],
          "d": "Hint: <b>had</b> comes before <b>we</b>, then <b>than</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "No sooner we had landed than the storm hit.",
          "r": "No sooner had we landed than the storm hit.",
          "aceita": [],
          "d": "Hint: invert the first part: <b>had we</b>, not <i>we had</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "Hardly had we set up camp than the ice cracked.",
          "r": "Hardly had we set up camp when the ice cracked.",
          "aceita": [
            "Scarcely had we set up camp when the ice cracked."
          ],
          "d": "Hint: <b>hardly</b> goes with <b>when</b>; <b>no sooner</b> goes with <b>than</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "Not until the fog lifted we saw the mountains.",
          "r": "Not until the fog lifted did we see the mountains.",
          "aceita": [],
          "d": "Hint: after <b>Not until</b> the second part is inverted: <b>did we see</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/cb40af35d982/no-sooner/img/live-diario.webp",
      "leg": "A journal, a compass and a lantern",
      "pede": "Look at the picture: a journal, a compass and a lantern. Write three dramatic sentences about a day when everything went wrong. Use <b>No sooner had … than</b>, <b>Hardly had … when</b> and <b>Not until … did</b>.",
      "ph": "No sooner had I …",
      "ex": "No sooner had I left home than it began to rain. Hardly had I reached the station when my train left. Not until midnight did I finally get a seat."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What happened the moment you arrived somewhere last time?",
          "ph": "No sooner had I arrived than …",
          "ex": "No sooner had I arrived at the hotel than the lights went out."
        },
        {
          "q": "When did you last feel truly relaxed?",
          "ph": "Only when … did I …",
          "ex": "Only when I turned off my phone did I really relax."
        }
      ]
    }
  }
};
