/* THE CRIT · LIÇÃO DE CASA 2.0 (24/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: feedback what / why / how: might, could, I wonder if. Curso de Design (B1+): nenhum português. */
window.HW2 = {
  "id": "the-crit",
  "titulo": "The Crit",
  "nivel": "B1",
  "minutos": 10,
  "capa": "../img/live-capa.webp",
  "alvo": "giving design feedback in three steps, what, why, how: What's working is ...; The ... is a bit ...; Users might ... because ...; I wonder if ...; You could try ... (plain verb after could and might); soft language",
  "abrir": "What was the most useful feedback you ever got? What made it useful?",
  "fecho": "Good feedback has three steps: <b>what</b> (name the element), <b>why</b> (the effect on the user), <b>how</b> (a suggestion). Start with something that works: <i>What's working really well is the photo.</i> Then be soft: <i>The date is a bit small. Users <b>might</b> miss it. I <b>wonder if</b> it has enough contrast. You <b>could try</b> white letters.</i> After <b>could</b> and <b>might</b>, the plain verb.",
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
      "sub": "Mia gives Leo feedback on his poster. A new scene, about one minute.",
      "img": "../img/live-capa.webp",
      "leg": "Drawings pinned on a wall",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, thanks for showing me the poster. What kind of feedback do you want?"
        },
        {
          "quem": "leo",
          "t": "Mostly the layout. The colors aren't final."
        },
        {
          "quem": "mia",
          "t": "Okay. What's working really well is the photo of the trumpet. It feels warm and real."
        },
        {
          "quem": "leo",
          "t": "Thanks! I spent hours on it."
        },
        {
          "quem": "mia",
          "t": "The date is a bit small. People might miss it, because it's gray on a dark background."
        },
        {
          "quem": "leo",
          "t": "Hmm, I see. What do you mean exactly?"
        },
        {
          "quem": "mia",
          "t": "I wonder if the date has enough contrast. From two meters away, I can't read it."
        },
        {
          "quem": "leo",
          "t": "That's a good point. What should I do?"
        },
        {
          "quem": "mia",
          "t": "You could try white letters and a bigger size. What if you put the date under the title?"
        },
        {
          "quem": "leo",
          "t": "Good idea. I'll make a new version tonight."
        },
        {
          "quem": "mia",
          "t": "Overall, it's really close. I love the photo."
        }
      ],
      "perguntas": [
        {
          "q": "What does Mia like most?",
          "op": [
            "The photo of the trumpet",
            "The colors",
            "The date"
          ],
          "a": 0,
          "por": "What's working really well is the photo of the trumpet."
        },
        {
          "q": "What is the problem with the date?",
          "op": [
            "It is small and has low contrast",
            "It is too bright",
            "It is under the title"
          ],
          "a": 0,
          "por": "The date is a bit small, and it's gray on a dark background."
        },
        {
          "q": "What does Mia suggest?",
          "op": [
            "White letters, a bigger size, under the title",
            "A new photo",
            "A different poster size"
          ],
          "a": 0,
          "por": "You could try white letters and a bigger size."
        }
      ]
    },
    "out": {
      "sub": "Three sentences from a crit. Hear it, then say it.",
      "frases": [
        {
          "t": "What's working really well is the photo.",
          "img": "../img/live-capa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "The date is a bit small, so people might miss it.",
          "img": "../img/live-conversa.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "You could try white letters and a bigger size.",
          "img": "../img/live-capa.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "might, could, soft words. Four quick ones.",
      "regra": "<b>You could try</b> + noun, <b>might</b> / <b>could</b> + plain verb · <b>be confused</b> (not <i>be confuse</i>) · <b>bigger</b> (never <i>more bigger</i>) · <b>I wonder if ...</b>",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "I wonder if the text is clear enough.",
          "aceita": [],
          "d": "Hint: <b>I wonder if</b> + a normal sentence."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is extra.",
          "mostra": "You could to try a bigger button.",
          "r": "You could try a bigger button.",
          "aceita": [],
          "d": "Hint: after <b>could</b>, the plain verb, no <i>to</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "Users might be confuse about this button.",
          "r": "Users might be confused about this button.",
          "aceita": [],
          "d": "Hint: <b>be confused</b> describes how the user feels."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is extra.",
          "mostra": "The date could be more bigger.",
          "r": "The date could be bigger.",
          "aceita": [],
          "d": "Hint: <b>bigger</b> is already the comparative. Do not add <i>more</i>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "../img/live-capa.webp",
      "leg": "Drawings pinned on a wall",
      "pede": "Look at the picture: drawings pinned on a wall in a crit. Imagine you give feedback on one of them. Write what works, one problem, and one suggestion.",
      "ph": "What's working is … The … might … You could try …",
      "ex": "What's working is the simple layout. The text might be hard to read, because it is small. You could try a bigger size."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "Think of a time someone gave you feedback on your work. What was useful about it?",
          "ph": "It was useful because …",
          "ex": "My teacher said my essay was clear but long. She suggested shorter paragraphs."
        },
        {
          "q": "Look at your phone's home screen. What works well? What might confuse a new user?",
          "ph": "What works is … might confuse …",
          "ex": "What works is the big clock. The small icons might confuse a new user."
        }
      ]
    }
  }
};
