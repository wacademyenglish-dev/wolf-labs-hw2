/* COULD YOU TELL ME · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: perguntas indiretas (Could you tell me where ... is). B1: nenhum portugues. Imagens live-* escuras. */
window.HW2 = {
  "id": "could-you-tell-me",
  "titulo": "Could You Tell Me",
  "nivel": "B1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/21bed70a6bfb/could-you-tell-me/img/live-banco.webp",
  "alvo": "indirect questions: a polite start (Could you tell me, Do you know, I was wondering if) + normal sentence order (where the office is); no do / does / did; yes/no with if or whether",
  "abrir": "Are you good at asking for help?",
  "fecho": "A polite start, then a normal sentence: <i>Could you tell me where the office is?</i> No <i>do / does / did</i>: <i>Do you know what time it starts?</i> Yes/no questions take <b>if</b> or <b>whether</b>: <i>Can you tell me if it is open?</i>",
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
      "sub": "Mia asks Leo some polite questions at a bank. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/21bed70a6bfb/could-you-tell-me/img/live-banco.webp",
      "leg": "A bank lobby",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Excuse me. Could you tell me where I can find the manager's office?"
        },
        {
          "quem": "leo",
          "t": "It's on the second floor, next to the elevator."
        },
        {
          "quem": "mia",
          "t": "Thanks. Do you know if she is in today?"
        },
        {
          "quem": "leo",
          "t": "I think so. Can I ask what your name is?"
        },
        {
          "quem": "mia",
          "t": "Mia Costa. I was wondering if she has time at ten."
        },
        {
          "quem": "leo",
          "t": "Let me check. Would you mind waiting a moment?"
        },
        {
          "quem": "mia",
          "t": "Not at all. Could you tell me how long it takes to open an account?"
        },
        {
          "quem": "leo",
          "t": "About twenty minutes."
        },
        {
          "quem": "mia",
          "t": "Great. And do you know whether I need to bring a document?"
        },
        {
          "quem": "leo",
          "t": "Yes, please bring your ID."
        }
      ],
      "perguntas": [
        {
          "q": "Where is the manager's office?",
          "op": [
            "On the second floor",
            "On the first floor",
            "Next to the café"
          ],
          "a": 0,
          "por": "It's on the second floor, next to the elevator."
        },
        {
          "q": "What does Leo ask Mia?",
          "op": [
            "What her name is",
            "Where she lives",
            "How old she is"
          ],
          "a": 0,
          "por": "Can I ask what your name is?"
        },
        {
          "q": "What should Mia bring?",
          "op": [
            "Her ID",
            "Her phone",
            "A pen"
          ],
          "a": 0,
          "por": "Yes, please bring your ID."
        }
      ]
    },
    "out": {
      "sub": "Three polite questions. Hear it, then say it.",
      "frases": [
        {
          "t": "Could you tell me where the office is?",
          "img": "https://wolf-labs.pages.dev/p/21bed70a6bfb/could-you-tell-me/img/live-corredor.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "Do you know what time the bank closes?",
          "img": "https://wolf-labs.pages.dev/p/21bed70a6bfb/could-you-tell-me/img/live-banco.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "I was wondering if you could help me.",
          "img": "https://wolf-labs.pages.dev/p/21bed70a6bfb/could-you-tell-me/img/live-cracha.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "A polite start, then normal order. Four quick ones.",
      "regra": "polite start + <b>normal order</b> · no <b>do / does / did</b> · yes/no: <b>if</b> or <b>whether</b>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "Could you tell me where the bank is?",
          "aceita": [],
          "d": "Hint: polite start, then normal order: <b>where the bank is</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "Could you tell me where is the office?",
          "r": "Could you tell me where the office is?",
          "aceita": [],
          "d": "Hint: after the polite start, use sentence order: <b>the office is</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "Do you know what time does it start?",
          "r": "Do you know what time it starts?",
          "aceita": [],
          "d": "Hint: no <i>does</i> inside the question: <b>it starts</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is missing.",
          "mostra": "Can you tell me is it open?",
          "r": "Can you tell me if it is open?",
          "aceita": [
            "Can you tell me whether it is open?",
            "Can you tell me if it's open?"
          ],
          "d": "Hint: a yes/no question needs <b>if</b> or <b>whether</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/21bed70a6bfb/could-you-tell-me/img/live-corredor.webp",
      "leg": "A quiet corridor",
      "pede": "Look at the picture: a quiet corridor in a big building. Imagine you are new here. Write 2 or 3 polite questions. Start with <b>Could you tell me</b>, <b>Do you know</b> or <b>I was wondering if</b>.",
      "ph": "Could you tell me where …?",
      "ex": "Could you tell me where the meeting room is? Do you know what time the office opens? I was wondering if I could leave my bag here."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "You are at a new gym. Ask a polite question about the opening hours.",
          "ph": "Could you tell me …?",
          "ex": "Could you tell me what time you open on Sunday?"
        },
        {
          "q": "Now ask a polite yes/no question about the price.",
          "ph": "Do you know if …?",
          "ex": "Do you know if there is a student price?"
        }
      ]
    }
  }
};
