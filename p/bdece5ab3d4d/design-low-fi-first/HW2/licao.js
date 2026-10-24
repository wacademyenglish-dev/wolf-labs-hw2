/* LOW-FI FIRST · LIÇÃO DE CASA 2.0 (24/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: trabalho em andamento: might / going to / for now. Curso de Design (B1+): nenhum português. */
window.HW2 = {
  "id": "low-fi-first",
  "titulo": "Low-Fi First",
  "nivel": "B1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/bdece5ab3d4d/design-low-fi-first/img/live-conversa.webp",
  "alvo": "presenting work in progress: This is still a rough version; Please ignore ... for now; might / will / going to + plain verb (no to after might or will); What we're testing here is ...; asking for specific feedback",
  "abrir": "Do you show unfinished work to other people? Why, or why not?",
  "fecho": "Say that it is rough: <i>This is still a rough version.</i> Say what to ignore: <i>Please ignore the colors <b>for now</b>.</i> Say what may change: <i>The layout <b>might</b> change. We <b>will</b> add the colors later. We are <b>going to</b> test it next week.</i> After <b>might</b> and <b>will</b>, the plain verb, never <i>to</i>. Ask for the right feedback: <i>What we're testing is the order.</i>",
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
      "sub": "Mia shows Leo a paper sketch of an app. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/bdece5ab3d4d/design-low-fi-first/img/live-conversa.webp",
      "leg": "A wall of sticky notes",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, is that your design? It's just paper and boxes."
        },
        {
          "quem": "mia",
          "t": "Yes. This is still a rough version of the home screen. Please ignore the colors for now. There aren't any."
        },
        {
          "quem": "leo",
          "t": "I see gray boxes and a few arrows. Why show me this today?"
        },
        {
          "quem": "mia",
          "t": "Because it's cheap to change. What we're testing here is the order of the steps, not the visual design."
        },
        {
          "quem": "leo",
          "t": "So the buttons might move?"
        },
        {
          "quem": "mia",
          "t": "They might. We're going to try it with five students next week, and then we'll know more."
        },
        {
          "quem": "leo",
          "t": "And if the order doesn't work?"
        },
        {
          "quem": "mia",
          "t": "Then we'll redraw it on Monday. That takes an hour, not a month."
        },
        {
          "quem": "leo",
          "t": "Okay. What kind of feedback do you want from me?"
        },
        {
          "quem": "mia",
          "t": "Does the order make sense? And is anything missing?"
        },
        {
          "quem": "leo",
          "t": "The order makes sense. I think the search box is missing."
        },
        {
          "quem": "mia",
          "t": "Great catch. I'll add it to the next version."
        }
      ],
      "perguntas": [
        {
          "q": "What should Leo ignore?",
          "op": [
            "The colors",
            "The order of the steps",
            "The arrows"
          ],
          "a": 0,
          "por": "Please ignore the colors for now."
        },
        {
          "q": "What is Mia testing?",
          "op": [
            "The order of the steps",
            "The visual design",
            "The paper"
          ],
          "a": 0,
          "por": "What we're testing here is the order of the steps."
        },
        {
          "q": "What is missing from the sketch?",
          "op": [
            "A search box",
            "A logo",
            "A button at the bottom"
          ],
          "a": 0,
          "por": "I think the search box is missing."
        }
      ]
    },
    "out": {
      "sub": "Three sentences about work in progress. Hear it, then say it.",
      "frases": [
        {
          "t": "This is still a rough version of the home screen.",
          "img": "https://wolf-labs.pages.dev/p/bdece5ab3d4d/design-low-fi-first/img/live-conversa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "Please ignore the colors for now.",
          "img": "https://wolf-labs.pages.dev/p/bdece5ab3d4d/design-low-fi-first/img/live-conversa.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "We're going to test it with five students.",
          "img": "https://wolf-labs.pages.dev/p/bdece5ab3d4d/design-low-fi-first/img/live-conversa.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "might, going to, for now. Four quick ones.",
      "regra": "<b>for now</b> (not <i>by now</i>) · <b>might</b> / <b>will</b> + plain verb, no <i>to</i> · <b>going to</b> + verb · <b>What we're testing is ...</b>",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "What we are testing is the order.",
          "aceita": [],
          "d": "Hint: start with <b>What we are testing</b>, then <b>is</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is extra.",
          "mostra": "The layout might to change.",
          "r": "The layout might change.",
          "aceita": [],
          "d": "Hint: after <b>might</b>, the plain verb, no <i>to</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is missing.",
          "mostra": "We are going test it next week.",
          "r": "We are going to test it next week.",
          "aceita": [],
          "d": "Hint: <b>going to</b> + verb."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "Please ignore the colors by now.",
          "r": "Please ignore the colors for now.",
          "aceita": [],
          "d": "Hint: for the moment is <b>for now</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/bdece5ab3d4d/design-low-fi-first/img/live-conversa.webp",
      "leg": "A wall of sticky notes",
      "pede": "Look at the picture: a wall of sticky notes. Imagine you show a rough sketch to a client. Write 2 or 3 sentences: what is still rough, and what might change. Use <b>still</b>, <b>might</b>, <b>for now</b> or <b>going to</b>.",
      "ph": "This is still rough. The … might …",
      "ex": "This is still a rough sketch. The colors might change after the test. We are going to ask five users next week."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "Do you show unfinished work to other people? Why, or why not?",
          "ph": "I … because …",
          "ex": "Yes, I do. I show my drafts to a friend so that I find the problems early."
        },
        {
          "q": "What are you going to do next week for work or study? What might change?",
          "ph": "I am going to … It might …",
          "ex": "I am going to start a new course. The time might change."
        }
      ]
    }
  }
};
