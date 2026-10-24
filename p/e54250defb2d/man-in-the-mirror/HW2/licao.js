/* MAN IN THE MIRROR · LIÇÃO DE CASA 2.0 (24/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: first conditional, unless, should (catálogo B2). Linha de música: NENHUM verso aqui; o listening é diálogo original, cena neutra. B2: nenhum português. Só imagens live-* escuras (lum < 50); sem cenas de perda (regra 9). */
window.HW2 = {
  "id": "man-in-the-mirror",
  "titulo": "Man in the Mirror",
  "nivel": "B2",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/e54250defb2d/man-in-the-mirror/img/live-reflexo.webp",
  "alvo": "first conditional for real plans: if + present, will + verb (no will after if); unless = if ... not (no extra don't); should + plain verb (never should to); have to / has to for what is necessary",
  "abrir": "What is one thing you want to change in your neighbourhood?",
  "fecho": "A real plan: <b>if</b> + present, <b>will</b> + verb: <i>If it rains, we'll meet on Sunday.</i> No <i>will</i> after <b>if</b>. <b>Unless</b> = if … not, so no extra <i>don't</i>: <i>Unless you help, nothing will change.</i> <b>Should</b> + plain verb, never <i>should to</i>. <b>Have to / has to</b> for what is necessary.",
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
      "sub": "Mia and Leo plan a clean-up day in their street. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/e54250defb2d/man-in-the-mirror/img/live-reflexo.webp",
      "leg": "The city at dusk",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, the square near my building is a mess. If we do nothing, it will only get worse."
        },
        {
          "quem": "leo",
          "t": "I agree. But people won't help unless someone starts first."
        },
        {
          "quem": "mia",
          "t": "Then we should start. If I make a poster tonight, will you put it up at the bakery?"
        },
        {
          "quem": "leo",
          "t": "Sure. But we have to ask the building manager first."
        },
        {
          "quem": "mia",
          "t": "Good point. If he says yes, we'll meet on Saturday at nine."
        },
        {
          "quem": "leo",
          "t": "And if it rains?"
        },
        {
          "quem": "mia",
          "t": "If it rains, we'll move it to Sunday. Unless it rains on Sunday too!"
        },
        {
          "quem": "leo",
          "t": "You should bring gloves and big bags. I'll bring coffee for everybody."
        },
        {
          "quem": "mia",
          "t": "If you bring coffee, half the street will come."
        }
      ],
      "perguntas": [
        {
          "q": "When will they meet if the manager says yes?",
          "op": [
            "On Saturday at nine",
            "On Sunday at ten",
            "On Friday night"
          ],
          "a": 0,
          "por": "If he says yes, we'll meet on Saturday at nine."
        },
        {
          "q": "What will they do if it rains?",
          "op": [
            "Move it to Sunday",
            "Cancel the plan",
            "Meet at the bakery"
          ],
          "a": 0,
          "por": "If it rains, we'll move it to Sunday."
        },
        {
          "q": "What will Leo bring?",
          "op": [
            "Coffee for everybody",
            "A poster",
            "A ladder"
          ],
          "a": 0,
          "por": "I'll bring coffee for everybody."
        }
      ]
    },
    "out": {
      "sub": "Three sentences about a small change. Hear it, then say it.",
      "frases": [
        {
          "t": "If we start this weekend, the square will look different.",
          "img": "https://wolf-labs.pages.dev/p/e54250defb2d/man-in-the-mirror/img/live-reflexo.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "The street won't stay clean unless everyone helps.",
          "img": "https://wolf-labs.pages.dev/p/e54250defb2d/man-in-the-mirror/img/live-capa.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "You should talk to your neighbours before you start.",
          "img": "https://wolf-labs.pages.dev/p/e54250defb2d/man-in-the-mirror/img/live-reflexo.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "if, unless, should. Four quick ones.",
      "regra": "<b>if</b> + present, <b>will</b> + verb · no <b>will</b> after <b>if</b> · <b>unless</b> = if … not · <b>should</b> + plain verb.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "If it rains on Saturday, we will meet on Sunday.",
          "aceita": [],
          "d": "Hint: <b>if</b> + present, then <b>will</b> + verb."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "If you will come, I will bring the gloves.",
          "r": "If you come, I will bring the gloves.",
          "aceita": [],
          "d": "Hint: no <b>will</b> after <b>if</b>: <i>If you come</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "Unless you don't help, nothing will change.",
          "r": "Unless you help, nothing will change.",
          "aceita": [
            "If you don't help, nothing will change."
          ],
          "d": "Hint: <b>unless</b> already means <i>if not</i>. No extra <i>don't</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "You should to wear gloves on Saturday.",
          "r": "You should wear gloves on Saturday.",
          "aceita": [],
          "d": "Hint: <b>should</b> + the plain verb, never <i>should to</i>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/e54250defb2d/man-in-the-mirror/img/live-reflexo.webp",
      "leg": "Lights coming on over the city",
      "pede": "Look at the picture: a city at dusk, the lights coming on. Write 2 or 3 sentences about one small thing you want to change in your street, your home or your routine. Use <b>if … will</b>, <b>unless</b> or <b>should</b>.",
      "ph": "If I …, … will … Unless …",
      "ex": "If I walk to work, I will save money. I should start on Monday. Unless it rains, I will leave the car at home."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What small change will you make this month? What will happen if you make it?",
          "ph": "I will … If I …, I will …",
          "ex": "I will cook at home more. If I cook at home, I will spend less."
        },
        {
          "q": "What should your neighbourhood change? What will happen unless someone acts?",
          "ph": "My street should … Unless …",
          "ex": "My street should have more trees. Unless someone plants them, it will stay hot and grey."
        }
      ]
    }
  }
};
