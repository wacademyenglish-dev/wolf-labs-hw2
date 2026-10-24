/* REPORTEDLY, ALLEGEDLY · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: reportedly / allegedly / according to / apparently / supposedly (notícia leve). C1: nenhum português. Notícias leves, sem crime. Imagens live-capa e live-conversa (escuras). */
window.HW2 = {
  "id": "reportedly-allegedly",
  "titulo": "Reportedly, Allegedly",
  "nivel": "C1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/2dd84eca9370/reportedly-allegedly/img/live-capa.webp",
  "alvo": "source and distance: reportedly (several reports, no single source) · according to + a source (never 'according to me': in my opinion) · allegedly (accused, not proven; never for good news) · apparently (I heard / it seems) · supposedly (people say so, with doubt) · seemingly · sources say · rumour has it that",
  "abrir": "When you hear a surprising story, how do you decide if it is true?",
  "fecho": "A careful reporter shows the source and the distance. <b>Reportedly</b>: several reports, no single source. <b>According to</b> + a source: <i>according to the caretaker</i>, never <i>according to me</i> (say <b>in my opinion</b>). <b>Allegedly</b>: accused but not proven, so never for good news. <b>Apparently</b> = I heard it, it seems. <b>Supposedly</b> = people say so, and I doubt it.",
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
      "sub": "Mia and Leo in a radio newsroom, minutes before the news. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/2dd84eca9370/reportedly-allegedly/img/live-capa.webp",
      "leg": "The radio desk, red light on",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, you're on air in five minutes. What have we got on the birthday cake?"
        },
        {
          "quem": "leo",
          "t": "Reportedly, the giant cake for the town's anniversary has vanished from the town hall overnight."
        },
        {
          "quem": "mia",
          "t": "Careful with 'reportedly'. Do we have a single source, or just several reports?"
        },
        {
          "quem": "leo",
          "t": "According to the caretaker, the cake was there at ten and gone by six."
        },
        {
          "quem": "mia",
          "t": "Good, name the source. And the rumour about the mayor?"
        },
        {
          "quem": "leo",
          "t": "Rumour has it that he ate the last slice. I'd say he allegedly did, if I say anything at all."
        },
        {
          "quem": "mia",
          "t": "Allegedly is for accusations, and this one is a joke, so keep it light. Has he commented?"
        },
        {
          "quem": "leo",
          "t": "Not yet. Apparently he was seen near the kitchen, but that's not confirmed."
        },
        {
          "quem": "mia",
          "t": "And the cake was supposedly protected by a security camera, wasn't it?"
        },
        {
          "quem": "leo",
          "t": "Supposedly. The camera, seemingly, was switched off for cleaning."
        },
        {
          "quem": "mia",
          "t": "Lovely. Sources say a replacement is on the way. And never say 'according to me'. Say 'in my opinion'."
        },
        {
          "quem": "leo",
          "t": "Noted. In my opinion, it's a delicious scandal."
        }
      ],
      "perguntas": [
        {
          "q": "Why does Mia question the word 'reportedly'?",
          "op": [
            "She wants to know if there is one named source",
            "She thinks it is too formal",
            "She prefers 'allegedly' for this story"
          ],
          "a": 0,
          "por": "Careful with 'reportedly'. Do we have a single source, or just several reports?"
        },
        {
          "q": "What does the caretaker say?",
          "op": [
            "The cake was there at ten and gone by six",
            "He saw the mayor eating it",
            "The camera was broken"
          ],
          "a": 0,
          "por": "According to the caretaker, the cake was there at ten and gone by six."
        },
        {
          "q": "What is the problem with the security camera?",
          "op": [
            "It seems to have been switched off for cleaning",
            "It filmed the mayor in the kitchen",
            "It was never installed"
          ],
          "a": 0,
          "por": "The camera, seemingly, was switched off for cleaning."
        }
      ]
    },
    "out": {
      "sub": "Three careful news lines. Hear it, then say it.",
      "frases": [
        {
          "t": "According to the caretaker, the cake was gone by six.",
          "img": "https://wolf-labs.pages.dev/p/2dd84eca9370/reportedly-allegedly/img/live-capa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "The mayor allegedly ate the last slice, but he hasn't commented.",
          "img": "https://wolf-labs.pages.dev/p/2dd84eca9370/reportedly-allegedly/img/live-conversa.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "The cake was supposedly protected by a camera, but it was seemingly switched off.",
          "img": "https://wolf-labs.pages.dev/p/2dd84eca9370/reportedly-allegedly/img/live-capa.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Source and distance. Four quick ones.",
      "regra": "<b>according to</b> + a source (never <i>me</i>) · <b>allegedly</b> = accused, not proven · <b>reportedly</b> · <b>apparently</b> · <b>supposedly</b> = with doubt.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "The mayor allegedly ate the last slice of cake.",
          "aceita": [],
          "d": "Hint: <b>allegedly</b> sits before the verb: he is accused, nothing is proven."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one phrase is wrong.",
          "mostra": "According to me, the concert was too long.",
          "r": "In my opinion, the concert was too long.",
          "aceita": [
            "In my view, the concert was too long."
          ],
          "d": "Hint: <b>according to</b> is for other sources. For yourself: <b>in my opinion</b> or <b>in my view</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "He allegedly won the lottery last week.",
          "r": "He reportedly won the lottery last week.",
          "aceita": [
            "He apparently won the lottery last week."
          ],
          "d": "Hint: <b>allegedly</b> is for accusations. For good news, use <b>reportedly</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "Supposedly, it is closing: I saw the notice.",
          "r": "Apparently, it is closing: I saw the notice.",
          "aceita": [
            "Apparently it is closing. I saw the notice."
          ],
          "d": "Hint: <b>supposedly</b> carries doubt. You saw the notice yourself, so use <b>apparently</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/2dd84eca9370/reportedly-allegedly/img/live-conversa.webp",
      "leg": "A city at night, seen from a window",
      "pede": "Look at the picture: a city at night, seen from a window. Write 2 or 3 news lines about a light, made-up story (a lost umbrella, a famous cat, a late train). Use <b>reportedly</b>, <b>according to …</b>, <b>apparently</b> or <b>supposedly</b>. Keep it friendly: <b>allegedly</b> only for a joke.",
      "ph": "The town's famous cat has reportedly …",
      "ex": "The town's famous cat has reportedly moved to a new street. According to a neighbour, she now sleeps in a bakery. Apparently, the baker feeds her cheese."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What surprising story have you heard this week? How sure are you that it is true?",
          "ph": "Apparently, … I'm not sure …",
          "ex": "Apparently, our local bakery is going to open a second shop. According to my cousin, it will be near the station."
        },
        {
          "q": "What do people supposedly say about your town, your job or your family?",
          "ph": "Supposedly, … but …",
          "ex": "Supposedly, our town has the best pizza in the country, but I think my mother's is better."
        }
      ]
    }
  }
};
