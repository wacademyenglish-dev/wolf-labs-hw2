/* THEN PRESS ENTER · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: instruções: verbo na frente, don't, first/then/next/finally, please. A1: dicas em português só nas notas (d). */
window.HW2 = {
  "id": "then-press-enter",
  "titulo": "Then Press Enter",
  "nivel": "A1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/994607aa664d/then-press-enter/img/live-bg-printer.webp",
  "alvo": "instructions: the verb first (Press the button), Don't + verb, First / Then / Next / Finally at the start of the step, Please + verb",
  "abrir": "How do you make coffee or tea? What do you do first?",
  "fecho": "An instruction starts with the <b>verb</b>: <i>Press the button.</i> No <i>you</i>, no <i>to</i>, no <i>-ing</i>. A no: <b>Don't</b> + verb. The order words open the step: <b>First,</b> … <b>Then</b> … <b>Next,</b> … <b>Finally,</b> … And to be polite: <b>Please</b> + verb.",
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
      "sub": "Mia and Leo at the copier. A new scene, about 30 seconds.",
      "img": "https://wolf-labs.pages.dev/p/994607aa664d/then-press-enter/img/live-bg-printer.webp",
      "leg": "The office copier",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, I need two copies. Help me, please."
        },
        {
          "quem": "mia",
          "t": "Sure. First, put your badge on the reader."
        },
        {
          "quem": "leo",
          "t": "OK. Done."
        },
        {
          "quem": "mia",
          "t": "Then press the green button. Don't press it twice!"
        },
        {
          "quem": "leo",
          "t": "Sorry. What next?"
        },
        {
          "quem": "mia",
          "t": "Next, choose COPY on the screen. Please wait for the green light."
        },
        {
          "quem": "leo",
          "t": "I see a red light."
        },
        {
          "quem": "mia",
          "t": "Don't open the tray. It's hot. Wait."
        },
        {
          "quem": "leo",
          "t": "The light is green now."
        },
        {
          "quem": "mia",
          "t": "Finally, take your copies. Good job!"
        }
      ],
      "perguntas": [
        {
          "q": "What is the first step?",
          "op": [
            "Put your badge on the reader",
            "Press the green button",
            "Choose COPY"
          ],
          "a": 0,
          "por": "First, put your badge on the reader."
        },
        {
          "q": "What does Mia say about the red light?",
          "op": [
            "Don't open the tray",
            "Press the button twice",
            "Take your copies"
          ],
          "a": 0,
          "por": "Don't open the tray. It's hot. Wait."
        },
        {
          "q": "What is the last step?",
          "op": [
            "Take your copies",
            "Wait for the light",
            "Press the green button"
          ],
          "a": 0,
          "por": "Finally, take your copies."
        }
      ]
    },
    "out": {
      "sub": "Three sentences from the copier. Hear it, then say it.",
      "frases": [
        {
          "t": "First, put your badge on the reader.",
          "au": "audio/say1.mp3",
          "img": "https://wolf-labs.pages.dev/p/994607aa664d/then-press-enter/img/live-bg-note.webp"
        },
        {
          "t": "Then press the green button. Don't press it twice!",
          "au": "audio/say2.mp3",
          "img": "https://wolf-labs.pages.dev/p/994607aa664d/then-press-enter/img/live-bg-printer.webp"
        },
        {
          "t": "Please wait for the green light.",
          "au": "audio/say3.mp3",
          "img": "https://wolf-labs.pages.dev/p/994607aa664d/then-press-enter/img/live-bg-screen.webp"
        }
      ]
    },
    "focus": {
      "sub": "Instructions, don't and order words. Four quick ones.",
      "regra": "<b>Press</b> the button (verb first) · <b>Don't</b> + verb · <b>First, Then, Next, Finally</b> at the start · <b>Please</b> + verb.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "Next, choose COPY on the screen.",
          "aceita": [],
          "d": "Dica: a palavra de ordem (<b>Next</b>) vem no começo, depois o verbo."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: make it an instruction.",
          "mostra": "You press the green button.",
          "r": "Press the green button.",
          "aceita": [
            "Press the green button!",
            "Please press the green button.",
            "Please press the green button!"
          ],
          "d": "Dica: a instrução começa com o verbo. Sem <b>you</b>."
        },
        {
          "tipo": "escreve",
          "t": "Say NO.",
          "mostra": "Open the tray.",
          "r": "Don't open the tray.",
          "aceita": [
            "Do not open the tray.",
            "Don't open the tray!",
            "Do not open the tray!"
          ],
          "d": "Dica: <b>don't</b> + verbo."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: the order word goes first.",
          "mostra": "Press then Enter.",
          "r": "Then press Enter.",
          "aceita": [
            "Then, press Enter.",
            "Then press Enter!",
            "Then, press Enter!"
          ],
          "d": "Dica: <b>Then</b> abre o passo, depois o verbo."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/994607aa664d/then-press-enter/img/live-bg-note.webp",
      "leg": "A note on the copier",
      "pede": "Look at the picture: a note on a copier. Write 3 or 4 steps for a friend: how to use a machine you know (a coffee machine, a washing machine). Use <b>First, Then, Next, Finally</b> and one <b>Don't</b>.",
      "ph": "First, …",
      "ex": "First, put water in the machine. Then press the red button. Next, wait. Finally, take your coffee. Don't touch the cup, it's hot."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "How do you make coffee or tea? Give me the steps.",
          "ph": "First, … Then …",
          "ex": "First, boil the water. Then put the tea in the cup. Finally, add sugar."
        },
        {
          "q": "Your friend has a new phone. What do you say? Use a Don't.",
          "ph": "Open … Don't …",
          "ex": "Open the app. Don't forget your password."
        }
      ]
    }
  }
};
