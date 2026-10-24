/* Mind the Gap · LIÇÃO DE CASA 2.0 (24/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: imperatives + place. A1: dicas em português só nas notas (d). */
window.HW2 = {
  "id": "mind-the-gap",
  "titulo": "Mind the Gap",
  "nivel": "A1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/348205097645/mind-the-gap/img/live-capa.webp",
  "alvo": "imperatives for directions (Turn left. Go straight. Don't stand on the left.) and place (on the left, next to, opposite); never 'You turn left', 'Not stand', 'in the left', 'the line Central'",
  "abrir": "How do you go to work or school?",
  "fecho": "<b>Turn</b> left. <b>Go</b> straight. <b>Don't stand</b> on the left. The verb comes first, no <i>you</i>. <b>on</b> the left / right · <b>next to</b> · <b>opposite</b>. The name first: <i>the Central line</i>.",
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
      "sub": "Mia and Leo talk on the phone. She is in the London Underground. A new scene, about 45 seconds.",
      "img": "https://wolf-labs.pages.dev/p/348205097645/mind-the-gap/img/live-capa.webp",
      "leg": "A train in a tunnel",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, I'm at the station. How do I get to Camden Market?"
        },
        {
          "quem": "leo",
          "t": "Easy. Take the Northern line. Go down the escalator."
        },
        {
          "quem": "mia",
          "t": "Which side do I stand on?"
        },
        {
          "quem": "leo",
          "t": "Stand on the right. Don't stand on the left. People walk there."
        },
        {
          "quem": "mia",
          "t": "OK. And the platform?"
        },
        {
          "quem": "leo",
          "t": "Turn left at the bottom. The platform is next to the shop. And mind the gap!"
        },
        {
          "quem": "mia",
          "t": "Where do I change?"
        },
        {
          "quem": "leo",
          "t": "You don't change. Go straight, and get off at Camden Town."
        },
        {
          "quem": "mia",
          "t": "And the way out?"
        },
        {
          "quem": "leo",
          "t": "It is on the left. Have fun!"
        }
      ],
      "perguntas": [
        {
          "q": "Where does Mia stand on the escalator?",
          "op": [
            "On the right",
            "On the left",
            "Next to the shop"
          ],
          "a": 0,
          "por": "Stand on the right. Don't stand on the left."
        },
        {
          "q": "Which line does Mia take?",
          "op": [
            "The Northern line",
            "The Central line",
            "A bus"
          ],
          "a": 0,
          "por": "Take the Northern line."
        },
        {
          "q": "Where is the way out?",
          "op": [
            "On the left",
            "On the right",
            "Opposite the bank"
          ],
          "a": 0,
          "por": "It is on the left."
        }
      ]
    },
    "out": {
      "sub": "Three sentences from the Underground. Hear it, then say it.",
      "frases": [
        {
          "t": "Tap your card, then go straight.",
          "img": "https://wolf-labs.pages.dev/p/348205097645/mind-the-gap/img/live-a.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "Go down the escalator. Stand on the right.",
          "img": "https://wolf-labs.pages.dev/p/348205097645/mind-the-gap/img/live-b.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "Mind the gap. The train is here.",
          "img": "https://wolf-labs.pages.dev/p/348205097645/mind-the-gap/img/live-capa.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Directions. Four quick ones.",
      "regra": "<b>Turn</b> left · <b>Go</b> straight · <b>Don't</b> + verb · <b>on</b> the left · the name first: <b>the Central line</b>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "Don't stand on the left",
          "aceita": [],
          "d": "Dica: <b>Don't</b> + verbo: não fique do lado esquerdo."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "You turn left at the gate.",
          "r": "Turn left at the gate.",
          "aceita": [],
          "d": "Dica: para mandar, só o verbo, sem <b>you</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "Not stand on the left.",
          "r": "Don't stand on the left.",
          "aceita": [
            "Do not stand on the left."
          ],
          "d": "Dica: a proibição começa com <b>Don't</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "Where is the line Central?",
          "r": "Where is the Central line?",
          "aceita": [],
          "d": "Dica: o nome vem primeiro: <b>the Central line</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/348205097645/mind-the-gap/img/live-capa.webp",
      "leg": "A train in a tunnel",
      "pede": "Look at the picture: a train in an Underground tunnel. Your friend is lost. Write 2 or 3 sentences. Tell him where to go. Use <b>turn</b>, <b>go straight</b> or <b>don't</b>.",
      "ph": "Go down the stairs. Turn …",
      "ex": "Go down the stairs. Turn left and go straight. Don't stand next to the yellow line."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "How do you go from your home to your school or work? Use go straight and turn left.",
          "ph": "Go straight on my street. Turn …",
          "ex": "Go straight on my street. Turn left at the bank. My work is next to the bakery."
        },
        {
          "q": "Where is a bus stop near your home? Say where it is.",
          "ph": "The bus stop is next to … / on the …",
          "ex": "The bus stop is opposite the bank, on the right."
        }
      ]
    }
  }
};
