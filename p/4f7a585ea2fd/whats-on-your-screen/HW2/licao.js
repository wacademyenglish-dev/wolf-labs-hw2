/* WHAT'S ON YOUR SCREEN? · LIÇÃO DE CASA 2.0 (24/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: instruções na tela compartilhada: Click on / Open / Type / Don't + verbo, e o lugar: at the top, on the left, in the corner. A2: dicas em português só nas notas (d). */
window.HW2 = {
  "id": "whats-on-your-screen",
  "titulo": "What's on Your Screen?",
  "nivel": "A2",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/4f7a585ea2fd/whats-on-your-screen/img/live-capa.webp",
  "alvo": "guiding someone on a shared screen: instructions with just the verb (Click on, Open, Type) and Don't + verb; places on the screen: at the top, at the bottom, on the left, in the top right corner; never You click in the button, never Don't to close",
  "abrir": "Think of the last time you showed your screen to someone. What did you show?",
  "fecho": "An instruction is just the verb: <b>Click on</b> the button. <b>Open</b> the terminal. <b>Type</b> git pull. <b>Don't push</b> to main (no <i>to</i>). Places: <b>at</b> the top, <b>at</b> the bottom, <b>on</b> the left, <b>in</b> the top right corner.",
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
      "sub": "Leo shares his screen. Mia is new on the team. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/4f7a585ea2fd/whats-on-your-screen/img/live-capa.webp",
      "leg": "Two screens full of code",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, I can see your screen. Where do I start?"
        },
        {
          "quem": "leo",
          "t": "Open the terminal, please. It's at the bottom."
        },
        {
          "quem": "mia",
          "t": "I see it. It says main in the corner."
        },
        {
          "quem": "leo",
          "t": "Yes, that's the branch name. It's in the bottom left corner."
        },
        {
          "quem": "mia",
          "t": "OK. What do I type?"
        },
        {
          "quem": "leo",
          "t": "Type git pull and press Enter. Don't close the window."
        },
        {
          "quem": "mia",
          "t": "Done. Now how do I run the tests?"
        },
        {
          "quem": "leo",
          "t": "Click on the green Run button. It's at the top, on the right."
        },
        {
          "quem": "mia",
          "t": "Great, it's running. Can I push to main?"
        },
        {
          "quem": "leo",
          "t": "No. Don't push to main. Create a new branch for your ticket."
        }
      ],
      "perguntas": [
        {
          "q": "Where is the terminal?",
          "op": [
            "At the bottom",
            "At the top",
            "On the left"
          ],
          "a": 0,
          "por": "Open the terminal, please. It's at the bottom."
        },
        {
          "q": "Where is the Run button?",
          "op": [
            "At the top, on the right",
            "At the bottom, on the left",
            "In the middle"
          ],
          "a": 0,
          "por": "Click on the green Run button. It's at the top, on the right."
        },
        {
          "q": "What does Leo say about main?",
          "op": [
            "Don't push to main",
            "Push to main now",
            "Close main"
          ],
          "a": 0,
          "por": "Don't push to main. Create a new branch for your ticket."
        }
      ]
    },
    "out": {
      "sub": "Three instructions for a new colleague. Hear it, then say it.",
      "frases": [
        {
          "t": "Open the terminal. It's at the bottom of the screen.",
          "au": "audio/say1.mp3",
          "img": "https://wolf-labs.pages.dev/p/4f7a585ea2fd/whats-on-your-screen/img/live-b.webp"
        },
        {
          "t": "Click on the Run button in the top right corner.",
          "au": "audio/say2.mp3",
          "img": "https://wolf-labs.pages.dev/p/4f7a585ea2fd/whats-on-your-screen/img/live-capa.webp"
        },
        {
          "t": "Don't push to main. Create a new branch.",
          "au": "audio/say3.mp3",
          "img": "https://wolf-labs.pages.dev/p/4f7a585ea2fd/whats-on-your-screen/img/live-b.webp"
        }
      ]
    },
    "focus": {
      "sub": "Click on, at the top, don't. Four quick ones.",
      "regra": "<b>Click on</b> / <b>Open</b> / <b>Type</b> = just the verb · <b>Don't</b> + verb (no <i>to</i>) · <b>at</b> the top, <b>on</b> the left, <b>in</b> the corner.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "Click on the button at the top.",
          "aceita": [],
          "d": "Dica: instrução = só o verbo: <b>Click on</b> + o botão."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "Click in the Run button.",
          "r": "Click on the Run button.",
          "aceita": [
            "Click the Run button."
          ],
          "d": "Dica: clicar em um botão: <b>click on</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "The terminal is in the bottom.",
          "r": "The terminal is at the bottom.",
          "aceita": [
            "It's at the bottom."
          ],
          "d": "Dica: embaixo na tela: <b>at the bottom</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: no to after don't.",
          "mostra": "Don't to close the window.",
          "r": "Don't close the window.",
          "aceita": [
            "Do not close the window."
          ],
          "d": "Dica: depois de <b>don't</b>, o verbo vem direto, sem <b>to</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/4f7a585ea2fd/whats-on-your-screen/img/live-b.webp",
      "leg": "A laptop with a terminal open",
      "pede": "Look at the picture: a laptop with a terminal. A new colleague is on a call with you. Write 2 or 3 short instructions: <b>Open…</b>, <b>Click on…</b>, <b>Type…</b>. Say where things are.",
      "ph": "Open the …",
      "ex": "Open the terminal at the bottom. Type git pull. Click on the Run button in the top right corner."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "Where is your favorite app on your phone screen?",
          "ph": "It's …",
          "ex": "It's at the bottom, on the left."
        },
        {
          "q": "How do you open your e-mail? Give two steps.",
          "ph": "Open … Click on …",
          "ex": "Open the browser. Click on my e-mail."
        }
      ]
    }
  }
};
