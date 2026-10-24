/* TAKE IT OUT, BRING IT BACK · LIÇÃO DE CASA 2.0 (24/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: take / bring e come / go pelo ponto de vista. Jogo: falas originais, sem violência. B1: nenhum português. Só live-* (já escuras). */
window.HW2 = {
  "id": "take-it-out-bring-it-back",
  "titulo": "Take It Out, Bring It Back",
  "nivel": "B1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/d30053d99951/take-it-out-bring-it-back/img/live-cargo.webp",
  "alvo": "take / bring and come / go by point of view: BRING and COME = toward the place where the speaker or the listener is; TAKE and GO = away to another place; bring me, take it there, I'll come to your place",
  "abrir": "What did you bring to class today?",
  "fecho": "<b>bring</b> and <b>come</b> go toward where the speaker or the listener is: <i>Bring me the map. I'll come to your place.</i> <b>take</b> and <b>go</b> go away to another place: <i>Take it there. I'll go to the port.</i>",
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
      "sub": "Mia at the port, Leo on the trail with the cargo. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/d30053d99951/take-it-out-bring-it-back/img/live-river.webp",
      "leg": "A bridge over a river",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, where are you? Are you bringing the boxes to the port today?"
        },
        {
          "quem": "leo",
          "t": "Not yet. I'm at the river. I'll take the boxes across the bridge first, and then I'll come to the port."
        },
        {
          "quem": "mia",
          "t": "Good. Will you bring me the blue box? I need the tools inside it."
        },
        {
          "quem": "leo",
          "t": "Yes, I'll bring it to you. But I can't take the heavy one up the mountain alone."
        },
        {
          "quem": "mia",
          "t": "Then I'll come to the river and help you. Should I bring a rope?"
        },
        {
          "quem": "leo",
          "t": "Yes, please bring a rope. And take a lamp with you. It gets dark here early."
        },
        {
          "quem": "mia",
          "t": "OK, I'll take a lamp. I'll come to you in an hour."
        },
        {
          "quem": "leo",
          "t": "Great. When you come, you can take the small box to the bridge, and I'll take the big one."
        },
        {
          "quem": "mia",
          "t": "Deal. And when we get back to the port, I'll bring you some hot tea."
        },
        {
          "quem": "leo",
          "t": "Perfect. Please bring two cups!"
        }
      ],
      "perguntas": [
        {
          "q": "Where is Leo now?",
          "op": [
            "At the river",
            "At the port",
            "On the mountain"
          ],
          "a": 0,
          "por": "I'm at the river."
        },
        {
          "q": "What will Mia bring to Leo at the river?",
          "op": [
            "A rope",
            "A blue box",
            "Hot tea"
          ],
          "a": 0,
          "por": "Yes, please bring a rope."
        },
        {
          "q": "What will Mia bring when they get back to the port?",
          "op": [
            "Hot tea",
            "A lamp",
            "The tools"
          ],
          "a": 0,
          "por": "I'll bring you some hot tea."
        }
      ]
    },
    "out": {
      "sub": "Three sentences about cargo and trips. Hear it, then say it.",
      "frases": [
        {
          "t": "Take the boxes across the river and bring the tools back.",
          "img": "https://wolf-labs.pages.dev/p/d30053d99951/take-it-out-bring-it-back/img/live-cargo.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "Please bring me the map when you come to the port.",
          "img": "https://wolf-labs.pages.dev/p/d30053d99951/take-it-out-bring-it-back/img/live-port.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "I'll take the heavy box over the mountain tomorrow.",
          "img": "https://wolf-labs.pages.dev/p/d30053d99951/take-it-out-bring-it-back/img/live-mountain.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "bring, take, come or go? Four quick ones.",
      "regra": "<b>bring</b> / <b>come</b> = toward me or you · <b>take</b> / <b>go</b> = away to another place · <b>bring me</b> · <b>take it there</b> · <b>I'll come to your place</b>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "Please bring me the map when you come.",
          "aceita": [],
          "d": "Hint: <b>bring me</b> = toward me. <b>Come</b> = toward where we meet."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "Take me some water, please.",
          "r": "Bring me some water, please.",
          "aceita": [],
          "d": "Hint: the water comes toward me, so <b>bring</b> me."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "I'll go to your house at six.",
          "r": "I'll come to your house at six.",
          "aceita": [],
          "d": "Hint: toward the place where you are: <b>I'll come</b> to your house."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "Please bring the cargo there.",
          "r": "Please take the cargo there.",
          "aceita": [],
          "d": "Hint: <b>there</b> is another place, away from here, so <b>take</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/d30053d99951/take-it-out-bring-it-back/img/live-network.webp",
      "leg": "Small lights along a trail at night",
      "pede": "Look at the picture: small lights along a trail at night. Write 2 or 3 sentences about a trip. What will you <b>take</b> with you, and what will you <b>bring</b> back? Use <b>take</b>, <b>bring</b>, <b>come</b> or <b>go</b>.",
      "ph": "I will take … and bring back …",
      "ex": "I will take my bag along the trail. When I come back, I will bring tea for my friend."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What do you always take when you leave the house? What do you bring back?",
          "ph": "I always take … I bring back …",
          "ex": "I always take my keys and my phone. Sometimes I bring back bread."
        },
        {
          "q": "A friend is coming to your place tomorrow. What do you want them to bring?",
          "ph": "Please bring …",
          "ex": "Please bring some juice and your charger."
        }
      ]
    }
  }
};
