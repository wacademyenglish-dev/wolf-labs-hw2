/* BEHIND THE WHEEL · LIÇÃO DE CASA 2.0 (24/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: should / shouldn't (dirigir com segurança). Curso Au Pair. B1: nenhum português. Só regras, sem batidas. */
window.HW2 = {
  "id": "behind-the-wheel",
  "titulo": "Behind the Wheel",
  "nivel": "B1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/416947a3e3d9/aupair-behind-the-wheel/img/live-conversa.webp",
  "alvo": "should / shouldn't for advice on safe driving; should + plain verb, no to, no -s; Should I ...? never Do I should, never should don't",
  "abrir": "What is one thing a good driver always does?",
  "fecho": "<b>should</b> = good advice: <i>You should check the mirrors.</i> <b>shouldn't</b> = bad idea: <i>You shouldn't touch your phone.</i> After should, the plain verb. The question: <i>Should I set the GPS?</i> Never <i>should don't</i>, never <i>Do I should</i>.",
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
      "sub": "Leo and Mia practice before the school run. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/416947a3e3d9/aupair-behind-the-wheel/img/live-conversa.webp",
      "leg": "The view through the windshield at night",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Ready, Mia? Before we start the car, you should check the mirrors."
        },
        {
          "quem": "mia",
          "t": "OK. Should I set the GPS now?"
        },
        {
          "quem": "leo",
          "t": "Yes, you should set it before you drive. And you shouldn't touch your phone while the car is moving."
        },
        {
          "quem": "mia",
          "t": "Should I put my phone in my bag?"
        },
        {
          "quem": "leo",
          "t": "Good idea. Now check the kids' seats. Everyone should wear a seat belt."
        },
        {
          "quem": "mia",
          "t": "The seats are ready. Should I drive fast?"
        },
        {
          "quem": "leo",
          "t": "No, you shouldn't. You should drive slowly near the school."
        },
        {
          "quem": "mia",
          "t": "And what should I do at a stop sign?"
        },
        {
          "quem": "leo",
          "t": "You should stop completely and look both ways."
        },
        {
          "quem": "mia",
          "t": "Thanks, Leo. I feel safer."
        },
        {
          "quem": "leo",
          "t": "Practice with me this week, and you'll be great."
        }
      ],
      "perguntas": [
        {
          "q": "What should Mia do before she drives?",
          "op": [
            "Set the GPS",
            "Call a friend",
            "Turn on the music"
          ],
          "a": 0,
          "por": "You should set it before you drive."
        },
        {
          "q": "What shouldn't Mia touch while the car is moving?",
          "op": [
            "Her phone",
            "The mirrors",
            "The seat belt"
          ],
          "a": 0,
          "por": "You shouldn't touch your phone while the car is moving."
        },
        {
          "q": "How should Mia drive near the school?",
          "op": [
            "Slowly",
            "Fast",
            "With one hand"
          ],
          "a": 0,
          "por": "You should drive slowly near the school."
        }
      ]
    },
    "out": {
      "sub": "Three pieces of advice for a safe drive. Hear it, then say it.",
      "frases": [
        {
          "t": "You should check the mirrors first.",
          "img": "https://wolf-labs.pages.dev/p/416947a3e3d9/aupair-behind-the-wheel/img/live-conversa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "You shouldn't touch your phone while you drive.",
          "img": "https://wolf-labs.pages.dev/p/416947a3e3d9/aupair-behind-the-wheel/img/live-conversa.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "You should stop completely at a stop sign.",
          "img": "https://wolf-labs.pages.dev/p/416947a3e3d9/aupair-behind-the-wheel/img/live-capa.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "should or shouldn't? Four quick ones.",
      "regra": "<b>should</b> = good advice · <b>shouldn't</b> = bad idea · should + plain verb · <b>Should I ...?</b> · never <b>should don't</b>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "You should check the mirrors before you drive.",
          "aceita": [],
          "d": "Hint: <b>should</b> + the plain verb (check)."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "You should to wear your seat belt.",
          "r": "You should wear your seat belt.",
          "aceita": [],
          "d": "Hint: after <b>should</b>, the plain verb. No <i>to</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "You should don't drive too fast.",
          "r": "You shouldn't drive too fast.",
          "aceita": [
            "You should not drive too fast."
          ],
          "d": "Hint: the negative is <b>shouldn't</b>, never <i>should don't</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: make the question correct.",
          "mostra": "Do I should set the GPS first?",
          "r": "Should I set the GPS first?",
          "aceita": [],
          "d": "Hint: the question starts with <b>Should</b>. No <i>do</i>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/416947a3e3d9/aupair-behind-the-wheel/img/live-conversa.webp",
      "leg": "The view through the windshield at night",
      "pede": "Look at the picture: the view through a car windshield at night. Give 2 or 3 pieces of advice to a new driver. Use <b>should</b> or <b>shouldn't</b>.",
      "ph": "You should … You shouldn't …",
      "ex": "You should drive slowly at night. You shouldn't look at your phone. You should check the mirrors."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What should a good driver always do?",
          "ph": "A good driver should …",
          "ex": "A good driver should look at the road and wear a seat belt."
        },
        {
          "q": "What shouldn't people do in a car with children?",
          "ph": "People shouldn't …",
          "ex": "People shouldn't shout or use the phone while they drive."
        }
      ]
    }
  }
};
