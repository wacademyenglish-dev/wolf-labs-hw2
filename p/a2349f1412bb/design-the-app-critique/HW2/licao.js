/* THE APP CRITIQUE · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: crítica de app: usuário + elemento + efeito, so/might, too + adj. B1: nenhum português. Só live-capa e live-conversa (escuras). */
window.HW2 = {
  "id": "design-the-app-critique",
  "titulo": "The App Critique",
  "nivel": "B1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/a2349f1412bb/design-the-app-critique/img/live-capa.webp",
  "alvo": "a strong critique comment = user + element + effect, with so / because / might (The button is small, so it might be hard to see); overview (This app helps people + verb); opportunity and trade-off; too + adjective, never too much + adjective; helps + person + plain verb",
  "abrir": "Which app do you open first in the morning? What does it do for you?",
  "fecho": "A strong comment names the <b>user</b>, the <b>element</b> and the <b>effect</b>: <i>The button is small, so new users might not see it.</i> Start with an overview: <i>This app helps people find a bike.</i> End with an <b>opportunity</b> and a <b>trade-off</b>. Say <b>too small</b>, never <i>too much small</i>.",
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
      "sub": "Mia critiques an app out loud while Leo plays the interviewer. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/a2349f1412bb/design-the-app-critique/img/live-conversa.webp",
      "leg": "The interview room",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Pick an app, Mia. You have one minute."
        },
        {
          "quem": "mia",
          "t": "Okay, let me think for a second. I'll take a bike-sharing app."
        },
        {
          "quem": "leo",
          "t": "Start with the overview."
        },
        {
          "quem": "mia",
          "t": "The app helps people find and unlock a bike nearby. The main users are probably students and commuters."
        },
        {
          "quem": "leo",
          "t": "Walk me through one flow."
        },
        {
          "quem": "mia",
          "t": "Let's say I'm late for class and I need a bike. The map is clear, and green pins show free bikes, so I find one in seconds. But the unlock button is small and gray, so it might be hard to see in sunlight."
        },
        {
          "quem": "leo",
          "t": "Anything about hierarchy?"
        },
        {
          "quem": "mia",
          "t": "The price is the same size as the bike number, so people might miss it. One opportunity could be a bigger price. The trade-off is less space for the map."
        },
        {
          "quem": "leo",
          "t": "That is a strong critique: user, element and effect."
        }
      ],
      "perguntas": [
        {
          "q": "Who are the main users, according to Mia?",
          "op": [
            "Students and commuters",
            "Tourists and drivers",
            "Bike mechanics"
          ],
          "a": 0,
          "por": "The main users are probably students and commuters."
        },
        {
          "q": "What works well in the app?",
          "op": [
            "Green pins show free bikes",
            "The unlock button",
            "The price"
          ],
          "a": 0,
          "por": "The map is clear, and green pins show free bikes, so I find one in seconds."
        },
        {
          "q": "What is the trade-off of a bigger price?",
          "op": [
            "Less space for the map",
            "A slower app",
            "More free bikes"
          ],
          "a": 0,
          "por": "One opportunity could be a bigger price. The trade-off is less space for the map."
        }
      ]
    },
    "out": {
      "sub": "Three sentences from an app critique. Hear it, then say it.",
      "frases": [
        {
          "t": "The app helps people find and unlock a bike nearby.",
          "img": "https://wolf-labs.pages.dev/p/a2349f1412bb/design-the-app-critique/img/live-conversa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "The button is small and gray, so it might be hard to see.",
          "img": "https://wolf-labs.pages.dev/p/a2349f1412bb/design-the-app-critique/img/live-capa.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "A bigger price helps, but the trade-off is less space for the map.",
          "img": "https://wolf-labs.pages.dev/p/a2349f1412bb/design-the-app-critique/img/live-capa.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Strong comments, with a reason. Four quick ones.",
      "regra": "user + element + effect · <b>so / because / might</b> · <b>too</b> + adjective · <b>helps</b> + person + plain verb · opportunity and trade-off.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "The search bar is hidden, so new users might not find it.",
          "aceita": [],
          "d": "Hint: element + <b>so</b> + user + <b>might</b> + effect."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "The button is too much small, so people can't see it.",
          "r": "The button is too small, so people can't see it.",
          "aceita": [],
          "d": "Hint: before an adjective, use <b>too</b>, not <i>too much</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "This app helps to people find a bike.",
          "r": "This app helps people find a bike.",
          "aceita": [
            "This app helps people to find a bike."
          ],
          "d": "Hint: no <i>to</i> before the person after <b>helps</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is missing.",
          "mostra": "The text is light gray, so is hard to read.",
          "r": "The text is light gray, so it is hard to read.",
          "aceita": [
            "The text is light gray, so it's hard to read."
          ],
          "d": "Hint: English needs a subject: <b>so it is</b> hard to read."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/a2349f1412bb/design-the-app-critique/img/live-capa.webp",
      "leg": "A phone and a notebook on a dark desk",
      "pede": "Look at the picture: a phone and a notebook. Choose an app you use. Write 3 sentences: what the app does, one strong comment (user + element + effect), and one trade-off.",
      "ph": "This app helps … One problem is that …, so …",
      "ex": "This app helps people order food from local shops. The search icon is small, so new users might not find it. A bigger icon is an opportunity, but the trade-off is less space for offers."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "Which app do you use every day? What problem does it solve for you?",
          "ph": "I use … It helps me …",
          "ex": "I use a map app. It helps me find the right bus without waiting."
        },
        {
          "q": "What is one thing you would change in that app, and why?",
          "ph": "I would change …, because …",
          "ex": "I would change the menu, because it has too many options."
        }
      ]
    }
  }
};
