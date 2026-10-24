/* THE TOWN HALL · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: concessao, contraste, causa/efeito, finalidade (unidade 8). B2: nenhum português. Imagens: live-capa e live-conversa (escuras, combinam). */
window.HW2 = {
  "id": "b2-review-the-town-hall",
  "titulo": "The Town Hall",
  "nivel": "B2",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/3db100b30277/b2-review-the-town-hall/img/live-capa.webp",
  "alvo": "connect, contrast and explain: although / despite + noun, granted / having said that / even so, no matter how, whereas / while / in contrast, due to + noun / as a result, so that; never despite of, never due to + a full sentence",
  "abrir": "Think of a small decision in your town. Who was for it, and who was against?",
  "fecho": "<b>Although</b> + a full sentence; <b>despite</b> + a noun, never <i>despite of</i>. <b>Granted… having said that…</b> concedes, then turns. <b>Whereas / while</b> join two contrasting ideas. <b>Due to</b> + a noun (<i>due to the roadworks</i>); <b>as a result</b> starts a new sentence. <b>So that</b> + subject + verb gives the purpose.",
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
      "sub": "Mia and Leo after a council meeting. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/3db100b30277/b2-review-the-town-hall/img/live-conversa.webp",
      "leg": "The fountain square at night",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, you went to the council meeting about Main Street. How did it go?"
        },
        {
          "quem": "leo",
          "t": "Long. Although everyone was tired, nobody wanted to leave."
        },
        {
          "quem": "mia",
          "t": "Did the bakers agree to close the street?"
        },
        {
          "quem": "leo",
          "t": "Granted, they were worried. Having said that, one baker said she would try it, whereas the taxi drivers were completely against it."
        },
        {
          "quem": "mia",
          "t": "And the cafe owner?"
        },
        {
          "quem": "leo",
          "t": "Despite the noise, she is all for it. She wants tables outside, so that people can stay longer."
        },
        {
          "quem": "mia",
          "t": "What about the traffic?"
        },
        {
          "quem": "leo",
          "t": "Due to the roadworks, the ring road is very slow. As a result, the vote was postponed."
        },
        {
          "quem": "mia",
          "t": "So nothing was decided."
        },
        {
          "quem": "leo",
          "t": "No matter how long they talked, nobody changed their mind. Even so, they agreed to meet again in May."
        },
        {
          "quem": "mia",
          "t": "Fair enough. At least I will have time to read the plan."
        }
      ],
      "perguntas": [
        {
          "q": "Why was the vote postponed?",
          "op": [
            "The roadworks made the ring road slow",
            "The bakers left the meeting",
            "Nobody came to the square"
          ],
          "a": 0,
          "por": "Due to the roadworks, the ring road is very slow. As a result, the vote was postponed."
        },
        {
          "q": "Why does the cafe owner want the street closed?",
          "op": [
            "She wants tables outside so that people stay longer",
            "She wants a bigger car park",
            "She wants to open earlier"
          ],
          "a": 0,
          "por": "She wants tables outside, so that people can stay longer."
        },
        {
          "q": "What did the meeting finally agree?",
          "op": [
            "To meet again in May",
            "To close the street at once",
            "To build a new road"
          ],
          "a": 0,
          "por": "They agreed to meet again in May."
        }
      ]
    },
    "out": {
      "sub": "Three sentences about the meeting. Hear it, then say it.",
      "frases": [
        {
          "t": "Despite the rain, the square was full of people.",
          "img": "https://wolf-labs.pages.dev/p/3db100b30277/b2-review-the-town-hall/img/live-conversa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "The cafe wants tables outside so that people can stay longer.",
          "img": "https://wolf-labs.pages.dev/p/3db100b30277/b2-review-the-town-hall/img/live-conversa.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "Due to the roadworks, the vote was postponed until May.",
          "img": "https://wolf-labs.pages.dev/p/3db100b30277/b2-review-the-town-hall/img/live-capa.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Despite, due to, whereas and more. Four quick ones.",
      "regra": "<b>despite / due to</b> + noun · <b>although</b> + full sentence · <b>whereas</b> joins two contrasts · <b>granted… having said that…</b> · <b>so that</b> + purpose.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "Despite the heavy rain, the meeting started on time.",
          "aceita": [],
          "d": "Hint: <b>despite</b> + a noun phrase (<i>the heavy rain</i>)."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "Despite of the rain, the square was full.",
          "r": "Despite the rain, the square was full.",
          "aceita": [
            "In spite of the rain, the square was full."
          ],
          "d": "Hint: <b>despite</b> never takes <i>of</i>. (<i>In spite of</i> does.)"
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "Due to the road was closed, we were late.",
          "r": "Due to the closed road, we were late.",
          "aceita": [
            "Because the road was closed, we were late.",
            "Due to the road being closed, we were late.",
            "Due to the road closure, we were late."
          ],
          "d": "Hint: <b>due to</b> + a noun, not a full sentence."
        },
        {
          "tipo": "escreve",
          "t": "Join the two ideas with whereas.",
          "mostra": "Cars are fast. Bikes are cheap.",
          "r": "Cars are fast, whereas bikes are cheap.",
          "aceita": [
            "Whereas cars are fast, bikes are cheap.",
            "Cars are fast whereas bikes are cheap."
          ],
          "d": "Hint: <b>whereas</b> joins two contrasting ideas in one sentence."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/3db100b30277/b2-review-the-town-hall/img/live-capa.webp",
      "leg": "The empty council chamber",
      "pede": "Look at the picture: an empty council chamber. Write 2 or 3 sentences about a decision in your town or workplace. Use <b>although, despite, whereas, due to, as a result</b> or <b>so that</b>.",
      "ph": "Although the plan is … ",
      "ex": "Although the plan is expensive, I support it, so that children can walk safely. Due to the traffic, the air is poor. As a result, we must act."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What is good about your city, despite its problems?",
          "ph": "Despite …, I love …",
          "ex": "Despite the high prices, I love my neighborhood."
        },
        {
          "q": "Compare two things in your life in a formal way.",
          "ph": "… whereas …",
          "ex": "My parents live in a quiet village, whereas I live in a busy city."
        }
      ]
    }
  }
};
