/* LGTM · LIÇÃO DE CASA 2.0 (24/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: sugerir no code review (Could we, I'd suggest -ing, Have you considered -ing). B1: nenhum português na lição. Só imagens live-* escuras (lum < 50). */
window.HW2 = {
  "id": "lgtm",
  "titulo": "LGTM",
  "nivel": "B1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/80de599f0025/lgtm/img/live-capa.webp",
  "alvo": "suggesting instead of ordering in code review: Could we...?, What if we...?, I'd suggest + -ing, Have you considered + -ing?; never I suggest you to + verb, never Have you considered to + verb; labels: nit, blocking, LGTM",
  "abrir": "Think of the last feedback you got. Was it soft or direct?",
  "fecho": "<b>Suggest, don't order</b>: <i>Could we rename this function? What if we move this check to the server?</i> <b>I'd suggest + -ing</b>: <i>I'd suggest splitting it.</i> <b>Have you considered + -ing?</b> Never <i>suggest you to</i>, never <i>considered to</i>. Labels: <b>nit</b> = small, <b>blocking</b> = must change, <b>LGTM</b> = looks good to me.",
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
      "sub": "Mia and Leo review a pull request. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/80de599f0025/lgtm/img/live-capa.webp",
      "leg": "Two mugs and a laptop on a dark desk",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, I'm reviewing Kenji's pull request. The reset flow works, but the code is messy."
        },
        {
          "quem": "leo",
          "t": "Be careful. Kenji is sensitive. What are you going to write?"
        },
        {
          "quem": "mia",
          "t": "My first comment was: you must rename this function. It sounds rude."
        },
        {
          "quem": "leo",
          "t": "A bit. Try this: Could we rename this function? The name doesn't say what it does."
        },
        {
          "quem": "mia",
          "t": "Better! And for the long block: I'd suggest splitting it into two smaller functions."
        },
        {
          "quem": "leo",
          "t": "Good. And the password check? That one is blocking, because the new password can be one letter."
        },
        {
          "quem": "mia",
          "t": "Then I'll write: Have you considered adding a minimum length? This one is blocking."
        },
        {
          "quem": "leo",
          "t": "Perfect. And mark the small things as nit. A nit isn't blocking."
        },
        {
          "quem": "mia",
          "t": "Like the extra spaces. Nit: remove the extra spaces. And at the end I write LGTM?"
        },
        {
          "quem": "leo",
          "t": "Only after Kenji fixes the blocking comment. Then you can write LGTM."
        }
      ],
      "perguntas": [
        {
          "q": "Why is the password check blocking?",
          "op": [
            "The new password can be one letter",
            "The function name is bad",
            "There are extra spaces"
          ],
          "a": 0,
          "por": "The new password can be one letter."
        },
        {
          "q": "What does Mia suggest for the long block?",
          "op": [
            "Splitting it into smaller functions",
            "Deleting it",
            "Adding more comments"
          ],
          "a": 0,
          "por": "I'd suggest splitting it into two smaller functions."
        },
        {
          "q": "When can Mia write LGTM?",
          "op": [
            "After Kenji fixes the blocking comment",
            "Right now",
            "After the nits"
          ],
          "a": 0,
          "por": "Only after Kenji fixes the blocking comment."
        }
      ]
    },
    "out": {
      "sub": "Three review comments. Hear it, then say it.",
      "frases": [
        {
          "t": "Could we rename this function?",
          "img": "https://wolf-labs.pages.dev/p/80de599f0025/lgtm/img/live-capa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "I'd suggest splitting it into two smaller functions.",
          "img": "https://wolf-labs.pages.dev/p/80de599f0025/lgtm/img/live-a.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "Have you considered adding a minimum length?",
          "img": "https://wolf-labs.pages.dev/p/80de599f0025/lgtm/img/live-b.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Could we, I'd suggest -ing, Have you considered -ing. Four quick ones.",
      "regra": "<b>Could we...?</b> · <b>What if we...?</b> · <b>I'd suggest + -ing</b> · <b>Have you considered + -ing?</b> · no <i>suggest you to</i>, no <i>considered to</i>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "What if we move this check to the server?",
          "aceita": [],
          "d": "Hint: <b>What if we</b> + the plain verb."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "I suggest you to rename this variable.",
          "r": "I suggest renaming this variable.",
          "aceita": [
            "I suggest you rename this variable.",
            "I'd suggest renaming this variable.",
            "I would suggest renaming this variable."
          ],
          "d": "Hint: after <b>suggest</b>, use -ing, or <b>you</b> + the plain verb. Never <i>you to</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "Have you considered to use a constant here?",
          "r": "Have you considered using a constant here?",
          "aceita": [],
          "d": "Hint: after <b>considered</b>, use the -ing form."
        },
        {
          "tipo": "escreve",
          "t": "Make it softer. Start with Could we.",
          "mostra": "You must change this name.",
          "r": "Could we change this name?",
          "aceita": [
            "Could we change this name"
          ],
          "d": "Hint: <b>Could we</b> + plain verb sounds like a team, not an order."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/80de599f0025/lgtm/img/live-b.webp",
      "leg": "A rubber duck next to a keyboard",
      "pede": "Look at the picture: a rubber duck on a developer's desk. Imagine a pull request with a long function. Write 2 or 3 review comments. Use <b>Could we...?</b>, <b>I'd suggest + -ing</b> or <b>Have you considered + -ing?</b>",
      "ph": "Could we …?",
      "ex": "Could we rename this function? I'd suggest splitting it into smaller parts. Have you considered adding a test?"
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "When did someone give you feedback that was too direct? How could they say it softer?",
          "ph": "They said … They could say …",
          "ex": "My boss said: change this now. He could say: could we change this today?"
        },
        {
          "q": "What would you suggest to improve an app or website you use?",
          "ph": "I'd suggest …",
          "ex": "I'd suggest adding a dark mode to my bank app."
        }
      ]
    }
  }
};
