/* THE SWORD OF DESTINY · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: participle clauses (-ing, having + participle, -ed, not + -ing). B2: nenhum portugues. Jogo: falas originais, sem violencia, sem armas. So imagens live-* escuras (<50). */
window.HW2 = {
  "id": "sword-of-destiny",
  "titulo": "The Sword of Destiny",
  "nivel": "B2",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/eecb4e7d3b91/sword-of-destiny/img/live-mapa.webp",
  "alvo": "participle clauses: -ing (at the same time, or because), having + participle (one action before the other), -ed (passive meaning: Asked about the road, she ...), not + -ing; the subject after the comma is the one who did the action of the clause; after before / after / while: -ing, never to",
  "abrir": "Think of a choice you made last year. Having made it, what changed?",
  "fecho": "One sentence, two actions, one subject: <b>Leaving at dawn, we reached the keep.</b> <b>Having</b> + participle = the first action is already done: <i>Having studied the map, he knew the way.</i> <b>Asked about the road</b> = when she was asked. <b>Not</b> + -ing for the negative: <i>Not knowing the road, she asked.</i> The one after the comma did the action. After <b>before</b> and <b>after</b>: -ing, never <i>to</i>.",
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
      "sub": "Mia and Leo at an inn before a long trip. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/eecb4e7d3b91/sword-of-destiny/img/live-inn.webp",
      "leg": "The inn, the night before the road",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, you look pleased. Having studied the map all night, you must have a plan."
        },
        {
          "quem": "leo",
          "t": "I do. Leaving at dawn, we can reach the old keep before dark."
        },
        {
          "quem": "mia",
          "t": "Is the road easy?"
        },
        {
          "quem": "leo",
          "t": "Not knowing the way, I asked the innkeeper. Asked about the road, she said it is easy, but the bridge is slow."
        },
        {
          "quem": "mia",
          "t": "Then we should pack lunch. Having eaten nothing since morning, I am hungry already."
        },
        {
          "quem": "leo",
          "t": "Not wanting to carry much, I bought only bread and apples."
        },
        {
          "quem": "mia",
          "t": "Good. Walking along the river, we can rest at the bell tower."
        },
        {
          "quem": "leo",
          "t": "Exactly. Having reached the tower, we turn left toward the keep. Worried about the weather, the innkeeper gave me a coat, too."
        },
        {
          "quem": "mia",
          "t": "Perfect. Having a coat and a map, we are ready."
        }
      ],
      "perguntas": [
        {
          "q": "Why did Leo ask the innkeeper?",
          "op": [
            "He didn't know the way",
            "He wanted a coat",
            "He was hungry"
          ],
          "a": 0,
          "por": "Not knowing the way, I asked the innkeeper."
        },
        {
          "q": "What did the innkeeper say about the road?",
          "op": [
            "It is easy, but the bridge is slow",
            "It is closed for the winter",
            "It is very long"
          ],
          "a": 0,
          "por": "Asked about the road, she said it is easy, but the bridge is slow."
        },
        {
          "q": "Why did Leo buy only bread and apples?",
          "op": [
            "He didn't want to carry much",
            "The inn had nothing else",
            "He doesn't like lunch"
          ],
          "a": 0,
          "por": "Not wanting to carry much, I bought only bread and apples."
        }
      ]
    },
    "out": {
      "sub": "Three sentences for the road. Hear it, then say it.",
      "frases": [
        {
          "t": "Having studied the map all night, he knew the way.",
          "img": "https://wolf-labs.pages.dev/p/eecb4e7d3b91/sword-of-destiny/img/live-mapa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "Not knowing the road, she asked the innkeeper.",
          "img": "https://wolf-labs.pages.dev/p/eecb4e7d3b91/sword-of-destiny/img/live-inn.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "Asked about the bridge, she said it was slow.",
          "img": "https://wolf-labs.pages.dev/p/eecb4e7d3b91/sword-of-destiny/img/live-keep.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Participle clauses. Four quick ones.",
      "regra": "<b>-ing</b> = same time or because · <b>having</b> + participle = first, finished · <b>not</b> + -ing · after <b>before / after</b>: -ing · the subject after the comma did it.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "Having packed her bag, she left at dawn.",
          "aceita": [],
          "d": "Hint: <b>having</b> + participle: the packing came first."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "Having wrote the letter, she left the inn.",
          "r": "Having written the letter, she left the inn.",
          "aceita": [],
          "d": "Hint: after <b>having</b>, use the third form: <i>written</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "Don't knowing the road, she asked a farmer.",
          "r": "Not knowing the road, she asked a farmer.",
          "aceita": [],
          "d": "Hint: the negative is <b>not</b> + -ing, never <i>don't</i> + -ing."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "Before to leave, she looked at the map.",
          "r": "Before leaving, she looked at the map.",
          "aceita": [
            "Before she left, she looked at the map."
          ],
          "d": "Hint: after <b>before</b>, use -ing, never <i>to</i>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/eecb4e7d3b91/sword-of-destiny/img/live-keep.webp",
      "leg": "A keep on a hill at dusk",
      "pede": "Look at the picture: a keep on a hill at dusk. Write 2 or 3 sentences about a trip, real or imagined. Use <b>-ing</b>, <b>having + participle</b> or <b>not + -ing</b> at the start.",
      "ph": "Having walked all day, I …",
      "ex": "Having walked all day, we were tired. Not knowing the road, I checked the map. Arriving at dusk, we found a warm room."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What did you do yesterday after work or class? Start with Having ...",
          "ph": "Having …, I …",
          "ex": "Having finished my homework, I watched a series."
        },
        {
          "q": "Think of a decision you made recently. What were you thinking?",
          "ph": "Thinking about …, I decided to …",
          "ex": "Thinking about my budget, I decided to wait."
        }
      ]
    }
  }
};
