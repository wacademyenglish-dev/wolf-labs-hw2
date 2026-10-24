/* IT FELL ON HIM · LIÇÃO DE CASA 2.0 (24/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: object pronouns (me, him, her, them). A1: dicas em português só nas notas (d). Falas originais, sem violência. Só live-* escuras. */
window.HW2_ARTIGO_CONTA = true;
window.HW2 = {
  "id": "it-fell-on-him",
  "titulo": "It Fell on Him",
  "nivel": "A1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/0f3c3f83643f/it-fell-on-him/img/live-capa.webp",
  "alvo": "object pronouns after the verb and after to / with: me, you, him, her, it, us, them (helps him, calls me, give it to us); never help I, chases he, to they",
  "abrir": "Who do you call every day?",
  "fecho": "After the verb, use <b>me, you, him, her, it, us, them</b>: <i>The lawyer helps him. Please help me.</i> After <b>to</b> and <b>with</b> too: <i>Give the box to them.</i> Never <i>help I</i>, <i>chases he</i>.",
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
      "sub": "Mia and Leo look at a funny cartoon coyote. A new scene, about 40 seconds.",
      "img": "https://wolf-labs.pages.dev/p/0f3c3f83643f/it-fell-on-him/img/live-capa.webp",
      "leg": "A box on a canyon road",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, look at the coyote. He has a big box from the catalog."
        },
        {
          "quem": "mia",
          "t": "The box is heavy. He can't carry it."
        },
        {
          "quem": "leo",
          "t": "Does the coyote need help?"
        },
        {
          "quem": "mia",
          "t": "Yes. His lawyer helps him. She likes him."
        },
        {
          "quem": "leo",
          "t": "And the Road Runner? Does the coyote catch him?"
        },
        {
          "quem": "mia",
          "t": "No. He chases him every day, but he never catches him."
        },
        {
          "quem": "leo",
          "t": "Where are the products?"
        },
        {
          "quem": "mia",
          "t": "I have them here. Look, I'm giving them to you."
        },
        {
          "quem": "leo",
          "t": "Thank you! Do you like these products?"
        },
        {
          "quem": "mia",
          "t": "No, I don't like them. They are funny, but they don't work for us."
        }
      ],
      "perguntas": [
        {
          "q": "Who helps the coyote?",
          "op": [
            "His lawyer",
            "The Road Runner",
            "Mia"
          ],
          "a": 0,
          "por": "His lawyer helps him."
        },
        {
          "q": "Does the coyote catch the Road Runner?",
          "op": [
            "No, he never catches him",
            "Yes, every day",
            "Yes, with a box"
          ],
          "a": 0,
          "por": "He chases him every day, but he never catches him."
        },
        {
          "q": "Does Mia like the products?",
          "op": [
            "No, she doesn't like them",
            "Yes, she likes them",
            "Yes, she loves them"
          ],
          "a": 0,
          "por": "No, I don't like them."
        }
      ]
    },
    "out": {
      "sub": "Three sentences about the coyote. Hear it, then say it.",
      "frases": [
        {
          "t": "The coyote chases him every day.",
          "img": "https://wolf-labs.pages.dev/p/0f3c3f83643f/it-fell-on-him/img/live-capa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "I need help. Can you help me?",
          "img": "https://wolf-labs.pages.dev/p/0f3c3f83643f/it-fell-on-him/img/live-tribunal.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "Please give it to us.",
          "img": "https://wolf-labs.pages.dev/p/0f3c3f83643f/it-fell-on-him/img/live-mapa.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "him, her, me, them. Four quick ones.",
      "regra": "after the verb: <b>me · you · him · her · it · us · them</b> · never <i>help I</i>, <i>chases he</i> · after <b>to</b>: <i>to them</i>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "The lawyer helps him every day.",
          "aceita": [],
          "d": "Dica: depois do verbo vem <b>him</b>: helps him."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "The coyote chases he every day.",
          "r": "The coyote chases him every day.",
          "aceita": [],
          "d": "Dica: depois do verbo, <b>him</b>, não <i>he</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "Please help I with the box.",
          "r": "Please help me with the box.",
          "aceita": [],
          "d": "Dica: depois de <b>help</b>, use <b>me</b>, não <i>I</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "Give the box to they.",
          "r": "Give the box to them.",
          "aceita": [],
          "d": "Dica: depois de <b>to</b>, use <b>them</b>, não <i>they</i>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/0f3c3f83643f/it-fell-on-him/img/live-mapa.webp",
      "leg": "A canyon road",
      "pede": "Look at the picture: a road in a canyon. Write 2 or 3 sentences about a friend. Use <b>him</b>, <b>her</b>, <b>me</b> or <b>them</b> after the verb.",
      "ph": "My friend Ana is funny. I call her …",
      "ex": "My friend Ana is funny. I call her every day. She helps me a lot."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "Who do you call every day? Who calls you?",
          "ph": "I call … He / She calls me.",
          "ex": "I call my mother every day. She calls me at night."
        },
        {
          "q": "Think of two things you use every day. Do you like them?",
          "ph": "I use … I like them.",
          "ex": "I use my phone and my laptop every day. I like them."
        }
      ]
    }
  }
};
