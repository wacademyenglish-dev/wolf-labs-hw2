/* EVERYTHING I EVER DID · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: reported speech (said / told / asked). Bíblia WEB: John 4:26 e 4:30 (Out loud), John 4:29 (Listen e Você). B1: nenhum português. */
window.HW2 = {
  "id": "everything-i-ever-did",
  "titulo": "Everything I Ever Did",
  "nivel": "B1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/117dc0a5067d/everything-i-ever-did/img/live-poco.webp",
  "alvo": "reported speech: said (that) / told + person (that) / asked + person + if or a question word, with backshift (is -> was, will -> would); the normal word order after asked (where the station was), if for yes/no; never said me, never told that",
  "abrir": "What did someone tell you this week?",
  "fecho": "<b>said that</b> (no person after said) · <b>told me that</b> (person after told) · <b>asked me if</b> (yes / no) · <b>asked me where it was</b> (normal order, no question order). The tense moves back: <i>is → was</i>, <i>will → would</i>.",
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
      "sub": "Mia tells Leo about a woman at a well. She reads John 4:29. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/117dc0a5067d/everything-i-ever-did/img/live-poco.webp",
      "leg": "A well at dusk",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, I'm reading John four. A woman came to a well at noon, and Jesus asked her for a drink."
        },
        {
          "quem": "leo",
          "t": "What did she say?"
        },
        {
          "quem": "mia",
          "t": "She asked him why he, a Jew, was asking her for water. And he told her that he could give her living water."
        },
        {
          "quem": "leo",
          "t": "Living water? What did she think?"
        },
        {
          "quem": "mia",
          "t": "She told him that the well was deep, and she asked him where he would get it."
        },
        {
          "quem": "leo",
          "t": "And then?"
        },
        {
          "quem": "mia",
          "t": "She went back to the city. In John 4:29 she says, “Come, see a man who told me everything that I have done. Can this be the Christ?”"
        },
        {
          "quem": "leo",
          "t": "So she told everyone what happened, and she asked them to come and see."
        },
        {
          "quem": "mia",
          "t": "Yes. And they went out of the city to see him."
        }
      ],
      "perguntas": [
        {
          "q": "What did Jesus tell the woman he could give her?",
          "op": [
            "Living water",
            "Bread",
            "A new house"
          ],
          "a": 0,
          "por": "He told her that he could give her living water."
        },
        {
          "q": "What did the woman ask the people to do?",
          "op": [
            "To come and see a man",
            "To bring more water",
            "To go home"
          ],
          "a": 0,
          "por": "She told everyone what happened, and she asked them to come and see."
        },
        {
          "q": "What did the woman ask Jesus about the water?",
          "op": [
            "Where he would get it",
            "How much it cost",
            "Who carried it"
          ],
          "a": 0,
          "por": "She asked him where he would get it."
        }
      ]
    },
    "out": {
      "sub": "Three sentences. The second and third are from the Bible: John 4:26 and John 4:30 (World English Bible). Hear it, then say it.",
      "frases": [
        {
          "t": "She asked him where he would get living water.",
          "img": "https://wolf-labs.pages.dev/p/117dc0a5067d/everything-i-ever-did/img/live-poco.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "Jesus said to her, “I am he, the one who speaks to you.”",
          "img": "https://wolf-labs.pages.dev/p/117dc0a5067d/everything-i-ever-did/img/live-capa2.webp",
          "au": "audio/say2.mp3",
          "ref": "John 4:26"
        },
        {
          "t": "They went out of the city, and were coming to him.",
          "img": "https://wolf-labs.pages.dev/p/117dc0a5067d/everything-i-ever-did/img/live-vila.webp",
          "au": "audio/say3.mp3",
          "ref": "John 4:30"
        }
      ]
    },
    "focus": {
      "sub": "said, told or asked? Four quick ones.",
      "regra": "<b>said that</b> · <b>told me that</b> · <b>asked me if</b> · <b>asked me where it was</b> · normal order, and the tense moves back.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "She asked me if I liked the movie.",
          "aceita": [],
          "d": "Hint: a yes / no question becomes <b>asked me if</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "He said me that he was late.",
          "r": "He told me that he was late.",
          "aceita": [
            "He said that he was late."
          ],
          "d": "Hint: <b>said</b> has no person after it. With a person, use <b>told me</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: the word order is wrong.",
          "mostra": "She asked me where was the station.",
          "r": "She asked me where the station was.",
          "aceita": [],
          "d": "Hint: after <b>asked me</b>, normal order: <i>where the station was</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "He asked me did I like the food.",
          "r": "He asked me if I liked the food.",
          "aceita": [
            "He asked me whether I liked the food."
          ],
          "d": "Hint: a yes / no question uses <b>if</b>, and the tense moves back: <i>liked</i>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/117dc0a5067d/everything-i-ever-did/img/live-vila.webp",
      "leg": "A quiet street in a small town",
      "pede": "Look at the picture: a quiet street in a small town. Write 2 or 3 sentences about something someone told you or asked you this week. Use <b>said that</b>, <b>told me that</b> or <b>asked me if</b>.",
      "ph": "My … told me that … / asked me if …",
      "ex": "My boss told me that the meeting was at ten. My friend asked me if I wanted to go to the cinema. I said that I was busy."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "In John 4:29 a woman says, “Come, see a man who told me everything that I have done.” Think of someone you want to tell your friends about. What did you tell them?",
          "ph": "I told my friends that … / I said that …",
          "ex": "I told my friends that I found a good teacher. I said that she was very kind."
        },
        {
          "q": "What did your boss, your teacher or a friend ask you last week? Report it.",
          "ph": "My … asked me if … / where …",
          "ex": "My friend asked me if I wanted to travel in July. I told her that I couldn't."
        }
      ]
    }
  }
};
