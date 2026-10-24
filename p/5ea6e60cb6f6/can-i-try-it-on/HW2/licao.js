/* CAN I TRY IT ON? · LIÇÃO DE CASA 2.0 (24/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: too/very + try it on / try them on + it fits. A1: dicas em português só nas notas (d). */
window.HW2 = {
  "id": "can-i-try-it-on",
  "titulo": "Can I Try It On?",
  "nivel": "A1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/5ea6e60cb6f6/can-i-try-it-on/img/live-capa.webp",
  "alvo": "too + adjective (too tight, too long) · very + adjective · Can I try it on? / Can I try them on? · It fits / They fit · jeans are plural",
  "abrir": "What are you wearing today?",
  "fecho": "<b>Too</b> = a problem: <i>It's too tight.</i> <b>Very</b> = a lot, no problem: <i>It's very warm.</i> <i>Can I try it on?</i> <i>Can I try them on?</i> Never <i>try on it</i>. <i>The jeans are too long.</i>",
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
      "sub": "Mia and Leo in a clothes shop in Manchester. A new scene, about 40 seconds.",
      "img": "https://wolf-labs.pages.dev/p/5ea6e60cb6f6/can-i-try-it-on/img/live-a.webp",
      "leg": "The fitting room curtain",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, it's very cold here. I need a warm jacket."
        },
        {
          "quem": "mia",
          "t": "Look at this blue jacket. It looks warm."
        },
        {
          "quem": "leo",
          "t": "Excuse me, can I try it on, please?"
        },
        {
          "quem": "mia",
          "t": "The assistant says yes. The fitting room is there."
        },
        {
          "quem": "leo",
          "t": "Hmm. It's too tight. I can't move my arms."
        },
        {
          "quem": "mia",
          "t": "Try the large size."
        },
        {
          "quem": "leo",
          "t": "Now it's too big. The sleeves are too long."
        },
        {
          "quem": "mia",
          "t": "Try the medium one."
        },
        {
          "quem": "leo",
          "t": "It fits! And it's very warm."
        },
        {
          "quem": "mia",
          "t": "Perfect. It's a very nice jacket."
        }
      ],
      "perguntas": [
        {
          "q": "What is wrong with the first jacket?",
          "op": [
            "It's too tight",
            "It's too long",
            "It's too short"
          ],
          "a": 0,
          "por": "It's too tight."
        },
        {
          "q": "Which size fits Leo?",
          "op": [
            "Medium",
            "Small",
            "Large"
          ],
          "a": 0,
          "por": "Try the medium one. It fits!"
        }
      ]
    },
    "out": {
      "sub": "Three sentences from the shop. Hear it, then say it.",
      "frases": [
        {
          "t": "Can I try it on, please?",
          "img": "https://wolf-labs.pages.dev/p/5ea6e60cb6f6/can-i-try-it-on/img/live-a.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "It's too tight. I need a bigger size.",
          "img": "https://wolf-labs.pages.dev/p/5ea6e60cb6f6/can-i-try-it-on/img/live-c-jacket.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "It fits! It's very warm.",
          "img": "https://wolf-labs.pages.dev/p/5ea6e60cb6f6/can-i-try-it-on/img/live-capa.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Too, very, try it on. Four quick ones.",
      "regra": "<b>too</b> + adjective = a problem · <b>very</b> = a lot · <b>try it on</b> / <b>try them on</b> · jeans = <b>are</b>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "Can I try these jeans on, please?",
          "aceita": [],
          "d": "Dica: <b>try</b> + a peça + <b>on</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: too and the adjective.",
          "mostra": "It's too much tight.",
          "r": "It's too tight.",
          "aceita": [
            "It is too tight."
          ],
          "d": "Dica: sem <b>much</b>: <b>too tight</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: where does it go?",
          "mostra": "Can I try on it?",
          "r": "Can I try it on?",
          "aceita": [],
          "d": "Dica: <b>it</b> vem no meio: <b>try it on</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: jeans are plural.",
          "mostra": "The jeans is too long.",
          "r": "The jeans are too long.",
          "aceita": [
            "These jeans are too long.",
            "My jeans are too long."
          ],
          "d": "Dica: <b>jeans</b> é plural: <b>are</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/5ea6e60cb6f6/can-i-try-it-on/img/live-capa.webp",
      "leg": "A clothes shop in the evening",
      "pede": "Look at the picture: a clothes shop. Write 2 or 3 sentences: what you want, the colour, and how it fits.",
      "ph": "I want a … It is …",
      "ex": "I want a warm jacket. It's black. It fits, and it's very warm."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What are you wearing today?",
          "ph": "I'm wearing …",
          "ex": "I'm wearing a black T-shirt and blue jeans."
        },
        {
          "q": "What is too big or too small for you? Clothes, a room, a car…",
          "ph": "My … is too …",
          "ex": "My old jeans are too small now."
        }
      ]
    }
  }
};
