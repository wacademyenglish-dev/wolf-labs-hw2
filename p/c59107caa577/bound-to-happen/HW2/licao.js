/* BOUND TO HAPPEN · LIÇÃO DE CASA 2.0 (24/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: the future with nuance. C1: nenhum português. Só imagens live-* (escuras). */
window.HW2 = {
  "id": "bound-to-happen",
  "titulo": "Bound to Happen",
  "nivel": "C1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/c59107caa577/bound-to-happen/img/live-capa.webp",
  "alvo": "the future with nuance: be bound to (almost certain), be set to (planned, news), be due to (timetable), be likely / unlikely to, be about to (in a moment), be on the verge of + -ing; never 'probable to', 'on the verge to', 'about to leaving'",
  "abrir": "What is something in your city that is bound to happen every year?",
  "fecho": "How sure are you, and how soon? <b>Bound to</b> = almost certain · <b>set to / due to</b> = planned, on the schedule · <b>likely / unlikely to</b> = probably (not) · <b>about to</b> = in a moment · <b>on the verge of</b> + -ing = very close to doing it. Never <i>probable to</i>.",
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
      "sub": "Mia and Leo talk about a new tram line. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/c59107caa577/bound-to-happen/img/live-capa.webp",
      "leg": "An airport at night, seen through a window",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Did you hear? The new tram line is set to open next month."
        },
        {
          "quem": "mia",
          "t": "Finally. Opening day is bound to be chaos, though. Everything in this city is."
        },
        {
          "quem": "leo",
          "t": "Probably. The mayor is due to cut the ribbon at ten, and half the city will turn up."
        },
        {
          "quem": "mia",
          "t": "And the unions? Weren't they on the verge of going on strike?"
        },
        {
          "quem": "leo",
          "t": "They were, but a strike is unlikely now. They're about to sign a new deal, apparently."
        },
        {
          "quem": "mia",
          "t": "Good. Are you taking the first tram?"
        },
        {
          "quem": "leo",
          "t": "I'm due at the airport by seven that morning, so no chance."
        },
        {
          "quem": "mia",
          "t": "Shame. You'll miss all the fuss."
        },
        {
          "quem": "leo",
          "t": "Not really. I'm bound to see it when I'm back. It isn't going anywhere."
        },
        {
          "quem": "mia",
          "t": "Ha. Then let's ride it together the day you get home."
        }
      ],
      "perguntas": [
        {
          "q": "What does Mia expect on opening day?",
          "op": [
            "Chaos, as usual",
            "A quiet morning",
            "A strike"
          ],
          "a": 0,
          "por": "Opening day is bound to be chaos, though."
        },
        {
          "q": "Why is a strike unlikely now?",
          "op": [
            "The unions are about to sign a new deal",
            "The tram line is closed",
            "The mayor has cancelled the opening"
          ],
          "a": 0,
          "por": "They're about to sign a new deal, apparently."
        },
        {
          "q": "Why can't Leo take the first tram?",
          "op": [
            "He has to be at the airport early",
            "He doesn't like trams",
            "The tram will be full"
          ],
          "a": 0,
          "por": "I'm due at the airport by seven that morning, so no chance."
        }
      ]
    },
    "out": {
      "sub": "Three sentences about what will happen, and how sure you are. Hear it, then say it.",
      "frases": [
        {
          "t": "The new bridge is set to open next week, and the roads are bound to be busy.",
          "img": "https://wolf-labs.pages.dev/p/c59107caa577/bound-to-happen/img/live-capa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "The strike is unlikely to end before Friday, but both sides are on the verge of an agreement.",
          "img": "https://wolf-labs.pages.dev/p/c59107caa577/bound-to-happen/img/live-conversa.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "The minister is due to speak at noon, and a storm is about to hit the coast.",
          "img": "https://wolf-labs.pages.dev/p/c59107caa577/bound-to-happen/img/live-conversa.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "bound to, likely to, about to, on the verge of. Four quick ones.",
      "regra": "<b>bound to</b> = almost certain · <b>likely to</b> = probably · <b>about to</b> + verb · <b>on the verge of</b> + -ing · never <i>probable to</i>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "Prices are bound to rise again next year.",
          "aceita": [],
          "d": "Hint: <b>bound to</b> + verb tells the listener you are almost sure."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "She is on the verge to quit her job.",
          "r": "She is on the verge of quitting her job.",
          "aceita": [],
          "d": "Hint: after <b>on the verge of</b> comes a verb with -ing."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "It is probable to rain this afternoon.",
          "r": "It is likely to rain this afternoon.",
          "aceita": [],
          "d": "Hint: <i>probable</i> does not take <i>to</i>. Use <b>likely to</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "I'm about to leaving, so call me later.",
          "r": "I'm about to leave, so call me later.",
          "aceita": [],
          "d": "Hint: <b>about to</b> is followed by the plain verb."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/c59107caa577/bound-to-happen/img/live-capa.webp",
      "leg": "An airport at night, seen through a window",
      "pede": "Look at the picture: an airport at night. Write 2 or 3 sentences about what is going to happen soon in your life or your city. Use <b>bound to</b>, <b>set to</b>, <b>due to</b>, <b>likely to</b> or <b>about to</b>.",
      "ph": "My flight is due to … and the airport is bound to …",
      "ex": "My flight is due to leave at midnight, and the airport is bound to be crowded. I'm about to board, and I'm unlikely to sleep."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What is set to change in your city, or at your workplace, in the next year?",
          "ph": "… is set to … next year.",
          "ex": "A new metro line is set to open next year, and traffic is likely to improve."
        },
        {
          "q": "What is something that is bound to happen this week?",
          "ph": "… is bound to …",
          "ex": "The traffic on Friday is bound to be terrible. It always is."
        }
      ]
    }
  }
};
