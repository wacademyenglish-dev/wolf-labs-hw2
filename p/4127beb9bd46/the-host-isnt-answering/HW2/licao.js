/* THE HOST ISN'T ANSWERING · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: so / such ... that + pedidos educados. B1: nenhum português. Só live-* escuras. */
window.HW2 = {
  "id": "the-host-isnt-answering",
  "titulo": "The Host Isn't Answering",
  "nivel": "B1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/4127beb9bd46/the-host-isnt-answering/img/live-capa.webp",
  "alvo": "so / such ... that for strong complaints (so + adjective, such a + adjective + noun) and polite requests (Could you + verb, I'd appreciate it if you could + verb); never so + noun, such + adjective alone, appreciate if, Could you to",
  "abrir": "Have you ever stayed in a place that was different from the photos?",
  "fecho": "<b>so + adjective</b>: <i>so dark that I couldn't read</i>. <b>such (a) + noun</b>: <i>such a long night that I slept in the car</i>. Ask politely: <b>Could you + verb</b> · <b>I'd appreciate it if you could + verb</b> (never <i>appreciate if</i>, never <i>Could you to</i>).",
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
      "sub": "Mia and Leo about a rental house. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/4127beb9bd46/the-host-isnt-answering/img/live-a.webp",
      "leg": "A dark door and a keypad",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, I'm standing outside the rental. The host isn't answering."
        },
        {
          "quem": "mia",
          "t": "How long have you been waiting?"
        },
        {
          "quem": "leo",
          "t": "Forty minutes. The code doesn't work, and the street is so dark that I can't see the number."
        },
        {
          "quem": "mia",
          "t": "That's such a long wait! Did you send a message?"
        },
        {
          "quem": "leo",
          "t": "Yes. I wrote: Could you send me the right code, please? I'd appreciate it if you could answer today."
        },
        {
          "quem": "mia",
          "t": "Good. Polite, but firm. Did he reply?"
        },
        {
          "quem": "leo",
          "t": "He just did. It's such a short answer: try four, two, one, nine."
        },
        {
          "quem": "mia",
          "t": "And does it work?"
        },
        {
          "quem": "leo",
          "t": "It works! The room is so small that I can touch both walls, but the bed is fine."
        },
        {
          "quem": "mia",
          "t": "Then write a fair review. And thank him for the code."
        }
      ],
      "perguntas": [
        {
          "q": "Why can't Leo see the house number?",
          "op": [
            "The street is so dark",
            "His phone is off",
            "It is raining"
          ],
          "a": 0,
          "por": "The street is so dark that I can't see the number."
        },
        {
          "q": "How does Leo write to the host?",
          "op": [
            "Politely, but firmly",
            "Very angrily",
            "He doesn't write"
          ],
          "a": 0,
          "por": "Could you send me the right code, please? I'd appreciate it if you could answer today."
        },
        {
          "q": "What is the host's answer like?",
          "op": [
            "Such a short answer: a new code",
            "A long apology",
            "A refund"
          ],
          "a": 0,
          "por": "It's such a short answer: try four, two, one, nine."
        }
      ]
    },
    "out": {
      "sub": "Three sentences from a bad rental. Hear it, then say it.",
      "frases": [
        {
          "t": "The street was so dark that I couldn't read the number.",
          "img": "https://wolf-labs.pages.dev/p/4127beb9bd46/the-host-isnt-answering/img/live-a.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "It was such a long wait that I almost left.",
          "img": "https://wolf-labs.pages.dev/p/4127beb9bd46/the-host-isnt-answering/img/live-capa.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "I'd appreciate it if you could answer today.",
          "img": "https://wolf-labs.pages.dev/p/4127beb9bd46/the-host-isnt-answering/img/live-b.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "so, such or a polite request? Four quick ones.",
      "regra": "<b>so</b> + adjective · <b>such a</b> + adjective + noun · <b>Could you</b> + verb · <b>I'd appreciate it if you could</b> + verb.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "The room was so cold that I left.",
          "aceita": [],
          "d": "Hint: <b>so</b> + adjective + <b>that</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: so or such?",
          "mostra": "It was so small room that we left.",
          "r": "It was such a small room that we left.",
          "aceita": [],
          "d": "Hint: before a noun (<b>room</b>), use <b>such a</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is missing.",
          "mostra": "I'd appreciate if you could answer.",
          "r": "I'd appreciate it if you could answer.",
          "aceita": [
            "I would appreciate it if you could answer."
          ],
          "d": "Hint: <b>appreciate it if</b>. The word <b>it</b> is needed."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "Could you to send the code?",
          "r": "Could you send the code?",
          "aceita": [],
          "d": "Hint: after <b>Could you</b>, use the plain verb, without <b>to</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/4127beb9bd46/the-host-isnt-answering/img/live-b.webp",
      "leg": "A dark room at night",
      "pede": "Look at the picture: a dark rental room at night. Write 2 or 3 sentences: one problem with <b>so … that</b> or <b>such … that</b>, and one polite request with <b>Could you</b> or <b>I'd appreciate it if</b>.",
      "ph": "The room was so … that …",
      "ex": "The room was so dark that I couldn't find the bed. It was such a long night that I didn't sleep. Could you send someone to fix the light?"
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "Tell me about a place you stayed that was not what you expected.",
          "ph": "The place was so … that …",
          "ex": "The hotel was so noisy that I couldn't sleep."
        },
        {
          "q": "Your neighbor plays loud music at night. Ask politely.",
          "ph": "Could you …?",
          "ex": "Could you turn the music down, please?"
        }
      ]
    }
  }
};
