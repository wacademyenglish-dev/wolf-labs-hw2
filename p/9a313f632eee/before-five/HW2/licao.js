/* BEFORE FIVE · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: Can you / Could you ..., please?. Business A1: dicas em português só nas notas (d). Só live-* escuras. */
window.HW2 = {
  "id": "before-five",
  "titulo": "Before Five",
  "nivel": "A1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/9a313f632eee/before-five/img/live-bg-office-late.webp",
  "alvo": "requests at work: Can you + verb? for a close person; Could you + verb, please? for a far person; plain verb, no to, no -s; answers: Sure. / Sorry, I can't.",
  "abrir": "Think of a colleague. Is it easy to ask that person for help?",
  "fecho": "Close person: <b>Can you</b> + verb? Far person (boss, client): <b>Could you</b> + verb, <b>please</b>? The verb stays plain: no <i>to</i>, no <i>-s</i>. Answers: <b>Sure.</b> / <b>Sorry, I can't.</b>",
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
  "rate": "-16%",
  "rodadas": {
    "listen": {
      "sub": "Mia and Leo at the office, ten to five. A new scene, about 45 seconds.",
      "img": "https://wolf-labs.pages.dev/p/9a313f632eee/before-five/img/live-bg-desk-late.webp",
      "leg": "A desk at the end of the day",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, it's ten to five. Can you help me with the printer?"
        },
        {
          "quem": "leo",
          "t": "Sure! What's the problem?"
        },
        {
          "quem": "mia",
          "t": "The paper is stuck. And I need Mr. Park's signature on this contract."
        },
        {
          "quem": "leo",
          "t": "Mr. Park is the director. Don't say, 'Sign this.' Say, 'Could you sign this, please?'"
        },
        {
          "quem": "mia",
          "t": "Right. Leo, could you take it to him, please? I can't go now."
        },
        {
          "quem": "leo",
          "t": "Sorry, I can't. I have a call with a client. Can you ask Diego?"
        },
        {
          "quem": "mia",
          "t": "Good idea. Diego sits next to me, so I can say, 'Diego, can you take this to Mr. Park?'"
        },
        {
          "quem": "leo",
          "t": "Yes! Diego is close. Can you is fine."
        }
      ],
      "perguntas": [
        {
          "q": "What does Mia need first?",
          "op": [
            "Help with the printer",
            "A truck",
            "A new phone"
          ],
          "a": 0,
          "por": "Can you help me with the printer?"
        },
        {
          "q": "Who is Mr. Park?",
          "op": [
            "The director",
            "A client",
            "Diego"
          ],
          "a": 0,
          "por": "Mr. Park is the director."
        },
        {
          "q": "Why can't Leo take the contract?",
          "op": [
            "He has a call with a client",
            "He is at lunch",
            "He is sick"
          ],
          "a": 0,
          "por": "I have a call with a client."
        }
      ]
    },
    "out": {
      "sub": "Three requests at work. Hear it, then say it.",
      "frases": [
        {
          "t": "Diego, can you help me with the printer?",
          "au": "audio/say1.mp3"
        },
        {
          "t": "Mr. Park, could you sign this contract, please?",
          "au": "audio/say2.mp3",
          "img": "https://wolf-labs.pages.dev/p/9a313f632eee/before-five/img/live-bg-desk-late.webp"
        },
        {
          "t": "Could you call me back, please?",
          "au": "audio/say3.mp3",
          "img": "https://wolf-labs.pages.dev/p/9a313f632eee/before-five/img/live-bg-phone-late.webp"
        }
      ]
    },
    "focus": {
      "sub": "Can you or Could you? Four quick ones.",
      "regra": "<b>Can you</b> + verb? (close) · <b>Could you</b> + verb, <b>please</b>? (far) · no <b>to</b> · no <b>-s</b>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "Could you open the window, please?",
          "aceita": [],
          "d": "Dica: <b>Could you</b> + verbo limpo + <b>please</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "Could you to sign this, please?",
          "r": "Could you sign this, please?",
          "aceita": [],
          "d": "Dica: depois de <b>could you</b>, o verbo vem limpo, sem <b>to</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "Diego, can you sends me the file?",
          "r": "Diego, can you send me the file?",
          "aceita": [],
          "d": "Dica: depois de <b>can you</b>, o verbo não leva -s: <b>send</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "You can open the door?",
          "r": "Can you open the door?",
          "aceita": [
            "Could you open the door, please?"
          ],
          "d": "Dica: para pedir, <b>Can you</b> vem primeiro, antes do verbo."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/9a313f632eee/before-five/img/live-sticky.webp",
      "leg": "Sticky notes on a monitor",
      "pede": "Look at the picture: sticky notes on a monitor. Write 2 or 3 requests for people at work. Use <b>Can you</b> for a close person and <b>Could you ..., please?</b> for a far person.",
      "ph": "Diego, can you …? Mr. Park, could you …, please?",
      "ex": "Diego, can you send me the file? Mr. Park, could you sign this, please? Could you call the client, please?"
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "Think of a close person, at work or at home. What do you ask that person?",
          "ph": "Ana, can you …?",
          "ex": "Ana, can you help me with the computer?"
        },
        {
          "q": "Now a far person: a director or a client. What do you ask?",
          "ph": "Could you …, please?",
          "ex": "Could you send me the contract, please?"
        }
      ]
    }
  }
};
