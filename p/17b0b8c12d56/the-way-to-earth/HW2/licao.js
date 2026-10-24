/* THE WAY TO EARTH · LIÇÃO DE CASA 2.0 (24/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: will x going to. Jogo: falas originais. A2: dicas em português só nas notas (d). */
window.HW2 = {
  "id": "the-way-to-earth",
  "titulo": "The Way to Earth",
  "nivel": "A2",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/17b0b8c12d56/the-way-to-earth/img/live-launch.webp",
  "alvo": "will x going to: going to = a plan already decided (I'm going to fix the tower), will = a decision made right now, a promise or a prediction (OK, I'll take the stairs. I'll call you. It'll be dark); never will going to, never I'll to, going to needs am / is / are",
  "abrir": "What are you going to do this weekend?",
  "fecho": "<b>Going to</b> = a plan: <i>I'm going to fix the tower.</i> <b>Will</b> = a decision right now, a promise or a guess: <i>The lift is broken. I'll take the stairs. I'll call you. It'll be dark.</i> Never <i>will going to</i>. <b>Going to</b> always needs <b>am / is / are</b>.",
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
      "sub": "Mia and Leo on a lunar station, planning the day. A new scene, about 45 seconds.",
      "img": "https://wolf-labs.pages.dev/p/17b0b8c12d56/the-way-to-earth/img/live-comms.webp",
      "leg": "The radio room",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, what is the plan for today?"
        },
        {
          "quem": "mia",
          "t": "I'm going to fix the radio tower. Then I'm going to call Earth."
        },
        {
          "quem": "leo",
          "t": "Good plan. Oh, look! The lift is broken."
        },
        {
          "quem": "mia",
          "t": "No problem. I'll take the stairs."
        },
        {
          "quem": "leo",
          "t": "And the door at the end is stuck."
        },
        {
          "quem": "mia",
          "t": "I'll push it with the tool. Wait, the lights are going off."
        },
        {
          "quem": "leo",
          "t": "Don't worry. I'll bring a lamp. It'll be dark in the tunnel."
        },
        {
          "quem": "mia",
          "t": "Thanks. I'm going to be careful, and I won't be long."
        }
      ],
      "perguntas": [
        {
          "q": "What is Mia going to fix?",
          "op": [
            "The radio tower",
            "The lift",
            "The lamp"
          ],
          "a": 0,
          "por": "I'm going to fix the radio tower."
        },
        {
          "q": "What will Mia do about the broken lift?",
          "op": [
            "She will take the stairs",
            "She will wait",
            "She will call Earth"
          ],
          "a": 0,
          "por": "No problem. I'll take the stairs."
        },
        {
          "q": "What will Leo bring?",
          "op": [
            "A lamp",
            "A tool",
            "A map"
          ],
          "a": 0,
          "por": "I'll bring a lamp."
        }
      ]
    },
    "out": {
      "sub": "Plans and quick decisions. Hear it, then say it.",
      "frases": [
        {
          "t": "I'm going to fix the radio tower.",
          "img": "https://wolf-labs.pages.dev/p/17b0b8c12d56/the-way-to-earth/img/live-comms.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "The lift is broken, so I'll take the stairs.",
          "img": "https://wolf-labs.pages.dev/p/17b0b8c12d56/the-way-to-earth/img/live-hangar.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "It'll be dark, so I'll bring a lamp.",
          "img": "https://wolf-labs.pages.dev/p/17b0b8c12d56/the-way-to-earth/img/live-dark.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "going to or will? Four quick ones.",
      "regra": "<b>going to</b> = a plan (<b>am / is / are</b> + going to + verb) · <b>will</b> = a decision now, a promise, a guess · never <b>will going to</b>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "We are going to call Earth tonight.",
          "aceita": [],
          "d": "Dica: <b>are going to</b> + o verbo limpo (call)."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "I will going to fix the door.",
          "r": "I'm going to fix the door.",
          "aceita": [
            "I am going to fix the door."
          ],
          "d": "Dica: um plano usa <b>going to</b>, sem <b>will</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is missing.",
          "mostra": "She going to fly home tomorrow.",
          "r": "She is going to fly home tomorrow.",
          "aceita": [
            "She's going to fly home tomorrow."
          ],
          "d": "Dica: <b>going to</b> sempre precisa de <b>am / is / are</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: it's a decision right now.",
          "mostra": "The lift is broken. I'm going to walk.",
          "r": "The lift is broken. I'll walk.",
          "aceita": [
            "The lift is broken. I will walk."
          ],
          "d": "Dica: decisão na hora (o elevador acabou de quebrar) = <b>I'll</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/17b0b8c12d56/the-way-to-earth/img/live-porthole.webp",
      "leg": "A round window with Earth in view",
      "pede": "Look at the picture: a round window with Earth in view. Write 2 or 3 sentences: one plan with <b>going to</b> and one promise to a friend with <b>I'll</b>.",
      "ph": "Tomorrow I'm going to …",
      "ex": "Tomorrow I'm going to visit my sister. I'll call you when I get home."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What are you going to do this weekend?",
          "ph": "I'm going to …",
          "ex": "I'm going to meet my friends and watch a film."
        },
        {
          "q": "A friend needs help with a heavy box. What do you say?",
          "ph": "I'll …",
          "ex": "I'll help you! I'll carry the box."
        }
      ]
    }
  }
};
