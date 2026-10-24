/* IT CRASHES WHEN… · LIÇÃO DE CASA 2.0 (24/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: relatar um bug: When / If + presente, passos no imperativo, expected / actual, fatos. A2: dicas em português só nas notas (d). */
window.HW2 = {
  "id": "it-crashes-when",
  "titulo": "It Crashes When…",
  "nivel": "A2",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/2abd4fb17837/it-crashes-when/img/live-b.webp",
  "alvo": "writing a bug report: When / If + present simple (When I click Save, it crashes), steps with just the verb (Open, Click, Type), expected and actual, facts and not opinions; never When I will click, never it crash, never You open the app",
  "abrir": "Think of an app that annoys you. What happens when you use it?",
  "fecho": "A bug report is clear and short. <b>When</b> / <b>If</b> + present: <i>When I click Save, the app crashes.</i> Steps are just the verb: <i>Open the app. Click Pay.</i> Then <b>Expected</b> (what should happen) and <b>Actual</b> (what happens). Facts, not <i>I think</i>.",
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
      "sub": "Mia writes her first bug report. Leo reads it. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/2abd4fb17837/it-crashes-when/img/live-b.webp",
      "leg": "A bug on a laptop keyboard",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, your bug report says: the app is broken. That's not enough."
        },
        {
          "quem": "mia",
          "t": "Sorry! What do I write?"
        },
        {
          "quem": "leo",
          "t": "Start with the title. When do you see the problem?"
        },
        {
          "quem": "mia",
          "t": "When I click Pay, the app crashes."
        },
        {
          "quem": "leo",
          "t": "Good. Now the steps. Open the app. Log in. Go to the cart. Click Pay."
        },
        {
          "quem": "mia",
          "t": "And the expected and the actual?"
        },
        {
          "quem": "leo",
          "t": "Expected: the app shows the payment page. Actual: the app closes."
        },
        {
          "quem": "mia",
          "t": "Can I write: I think the button is broken?"
        },
        {
          "quem": "leo",
          "t": "No. Facts only. And add one more thing: it crashes if the Wi-Fi is off."
        },
        {
          "quem": "mia",
          "t": "Great. I'll add it now. Thanks, Leo!"
        }
      ],
      "perguntas": [
        {
          "q": "What is the title of the bug?",
          "op": [
            "When I click Pay, the app crashes",
            "The app is broken",
            "I think the button is broken"
          ],
          "a": 0,
          "por": "When I click Pay, the app crashes."
        },
        {
          "q": "How do you write the steps?",
          "op": [
            "With just the verb: Open, Log in, Click",
            "With I think",
            "With You should"
          ],
          "a": 0,
          "por": "Open the app. Log in. Go to the cart. Click Pay."
        },
        {
          "q": "When does the app crash too?",
          "op": [
            "If the Wi-Fi is off",
            "If the cart is full",
            "If the phone is new"
          ],
          "a": 0,
          "por": "It crashes if the Wi-Fi is off."
        }
      ]
    },
    "out": {
      "sub": "Three lines of a bug report. Hear it, then say it.",
      "frases": [
        {
          "t": "When I click Pay, the app crashes.",
          "au": "audio/say1.mp3",
          "img": "https://wolf-labs.pages.dev/p/2abd4fb17837/it-crashes-when/img/live-b.webp"
        },
        {
          "t": "Open the app. Log in. Click Pay.",
          "au": "audio/say2.mp3",
          "img": "https://wolf-labs.pages.dev/p/2abd4fb17837/it-crashes-when/img/live-a.webp"
        },
        {
          "t": "If the Wi-Fi is off, the page doesn't load.",
          "au": "audio/say3.mp3",
          "img": "https://wolf-labs.pages.dev/p/2abd4fb17837/it-crashes-when/img/live-b.webp"
        }
      ]
    },
    "focus": {
      "sub": "When, steps, facts. Four quick ones.",
      "regra": "<b>When / If</b> + present (no <i>will</i>) · it crash<b>es</b> · steps = just the verb · facts, not <i>I think</i>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "If the Wi-Fi is off, it doesn't load.",
          "aceita": [],
          "d": "Dica: <b>If</b> + presente, presente. Sem <b>will</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: no will after when.",
          "mostra": "When I will click Save, it crashes.",
          "r": "When I click Save, it crashes.",
          "aceita": [
            "When I click Save the app crashes."
          ],
          "d": "Dica: depois de <b>when</b>, presente: <b>click</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "When I click Save, it crash.",
          "r": "When I click Save, it crashes.",
          "aceita": [],
          "d": "Dica: com <b>it</b>, o verbo leva <b>-es</b>: <b>crashes</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: a step is just the verb.",
          "mostra": "You open the app.",
          "r": "Open the app.",
          "aceita": [
            "Please open the app."
          ],
          "d": "Dica: nos passos, só o verbo: <b>Open</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/2abd4fb17837/it-crashes-when/img/live-a.webp",
      "leg": "A magnifying glass over the notes",
      "pede": "Look at the picture: a magnifying glass over some notes. Write a short bug report for an app that annoys you: a title with <b>When</b>, then 2 steps with just the verb.",
      "ph": "When I …",
      "ex": "When I upload a photo, the app closes. Open the app. Click Upload."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What app annoys you? What happens?",
          "ph": "When I …",
          "ex": "When I open my bank app, it is very slow."
        },
        {
          "q": "What do you do when your phone is slow?",
          "ph": "When my phone is slow, I …",
          "ex": "When my phone is slow, I restart it."
        }
      ]
    }
  }
};
