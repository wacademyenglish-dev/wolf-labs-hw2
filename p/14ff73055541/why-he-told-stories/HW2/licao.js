/* WHY HE TOLD STORIES · LIÇÃO DE CASA 2.0 (24/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: propósito e causa (to / in order to / so that / so as not to / because of). Versículos (WEB, ao pé da letra): Mark 4:6 (Listen), Mark 4:3 (Out loud), Mark 4:8 (Você). Nada da Bíblia é marcado como errado. B2: nenhum português. */
window.HW2 = {
  "id": "why-he-told-stories",
  "titulo": "Why He Told Stories",
  "nivel": "B2",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/14ff73055541/why-he-told-stories/img/live-solos.webp",
  "alvo": "purpose and cause: to + verb, in order to + verb, so that + can / could / will / would, so as not to + verb; because + clause vs because of + noun; never for + verb, so that + to, in order to + -ing, because of + clause",
  "abrir": "What did you do this week so that something would be easier next week?",
  "fecho": "<b>Purpose:</b> <i>to buy</i> · <i>in order to buy</i> · <i>so that he could buy</i> (past: <b>could / would</b>). Negative: <i>so as not to wake him</i>. <b>Cause:</b> <i>because + clause</i> (<i>because it had no root</i>) · <i>because of + noun</i> (<i>because of the heat</i>). Never <i>for buy</i>.",
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
      "sub": "Mia plants seeds on her balcony. She reads Mark 4:6. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/14ff73055541/why-he-told-stories/img/live-semente.webp",
      "leg": "A small pot, a bowl, some leaves",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, why are you planting seeds in that old pot? It's winter."
        },
        {
          "quem": "mia",
          "t": "I'm planting them now so that they'll be ready in spring. I read a story last night, and it gave me the idea."
        },
        {
          "quem": "leo",
          "t": "What story?"
        },
        {
          "quem": "mia",
          "t": "The farmer who sowed seeds. Jesus told it so that people would think about their own hearts. Listen to Mark chapter four, verse six."
        },
        {
          "quem": "mia",
          "t": "When the sun had risen, it was scorched; and because it had no root, it withered away."
        },
        {
          "quem": "leo",
          "t": "So the seed died because it had no root?"
        },
        {
          "quem": "mia",
          "t": "Yes. In order to grow, a plant needs deep roots. That's why I'm using a deep pot, not a flat one."
        },
        {
          "quem": "leo",
          "t": "And the stones at the bottom?"
        },
        {
          "quem": "mia",
          "t": "I put them there so that the water can run out. Too much water is bad for the roots."
        },
        {
          "quem": "leo",
          "t": "You've convinced me. I'll buy some seeds tomorrow to start my own little garden."
        }
      ],
      "perguntas": [
        {
          "q": "Why is Mia using a deep pot?",
          "op": [
            "So that the plant can grow deep roots",
            "Because it was cheap",
            "To hide the seeds"
          ],
          "a": 0,
          "por": "In order to grow, a plant needs deep roots."
        },
        {
          "q": "Why does Mia put stones at the bottom?",
          "op": [
            "So that the water can run out",
            "So that the pot is heavier",
            "So that the seeds stay warm"
          ],
          "a": 0,
          "por": "I put them there so that the water can run out."
        },
        {
          "q": "What does Leo decide to do?",
          "op": [
            "Buy seeds and start his own garden",
            "Move the pot",
            "Plant seeds in winter at once"
          ],
          "a": 0,
          "por": "I'll buy some seeds tomorrow to start my own little garden."
        }
      ]
    },
    "out": {
      "sub": "Three sentences about purpose. The third is from the Bible: Mark 4:3 (World English Bible). Hear it, then say it.",
      "frases": [
        {
          "t": "I use a deep pot so that the roots can grow.",
          "img": "https://wolf-labs.pages.dev/p/14ff73055541/why-he-told-stories/img/live-semente.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "She planted the seeds in order to have flowers in spring.",
          "img": "https://wolf-labs.pages.dev/p/14ff73055541/why-he-told-stories/img/live-solos.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "Listen! Behold, the farmer went out to sow.",
          "img": "https://wolf-labs.pages.dev/p/14ff73055541/why-he-told-stories/img/live-manuscritos.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Purpose and cause. Four quick ones.",
      "regra": "<b>to / in order to + verb</b> · <b>so that + could / would</b> (past) · <b>so as not to + verb</b> · <b>because + clause</b> · <b>because of + noun</b>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "She whispered so as not to wake him.",
          "aceita": [],
          "d": "Hint: <b>so as not to</b> + plain verb."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "He sold everything for buy the field.",
          "r": "He sold everything to buy the field.",
          "aceita": [
            "He sold everything in order to buy the field."
          ],
          "d": "Hint: purpose = <b>to</b> + verb. Never <i>for</i> + verb."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "The seed died because of it had no root.",
          "r": "The seed died because it had no root.",
          "aceita": [],
          "d": "Hint: <b>because</b> opens a clause; <b>because of</b> needs a noun."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "He spoke softly so that nobody can hear.",
          "r": "He spoke softly so that nobody could hear.",
          "aceita": [
            "He spoke softly so that nobody would hear."
          ],
          "d": "Hint: the sentence is in the past, so <b>could</b> or <b>would</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/14ff73055541/why-he-told-stories/img/live-capa2.webp",
      "leg": "Tiny seeds on dark ground",
      "pede": "Look at the picture: tiny seeds on dark ground, some on a stone. Write 2 or 3 sentences about a plant (or a plan) you want to look after. Use <b>to</b>, <b>in order to</b>, <b>so that</b> or <b>because</b>.",
      "ph": "I want to grow … so that …",
      "ex": "I want to grow herbs on my balcony in order to cook with them. I put the pot near the window so that it gets enough light."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "Mark 4:8 says, “Others fell into the good ground and yielded fruit, growing up and increasing.” What do you do every day so that something good in your life can grow?",
          "ph": "Every day I … so that …",
          "ex": "Every day I study English for twenty minutes so that I can change jobs one day."
        },
        {
          "q": "Why did you start learning English? Use to, in order to or so that.",
          "ph": "I started learning English to …",
          "ex": "I started learning English in order to travel alone, and so that I can read books in English."
        }
      ]
    }
  }
};
