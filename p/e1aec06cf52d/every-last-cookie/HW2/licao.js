/* EVERY LAST COOKIE · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: all / every / some / any / none / nobody. A2: dicas em inglês simples. */
window.HW2 = {
  "id": "every-last-cookie",
  "titulo": "Every Last Cookie",
  "nivel": "A2",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/e1aec06cf52d/every-last-cookie/img/live-capa.webp",
  "alvo": "all / every / some / any / none / no and everybody / nobody: every + one thing (every cookie is), all + many things (all the cookies are), some (+) and any (- ?), none / nobody = zero with one negative only",
  "abrir": "What is in your kitchen right now?",
  "fecho": "<b>Every</b> + one thing: <i>every cookie is gone</i>. <b>All</b> + many things: <i>all the cookies are gone</i>. <b>Some</b> (+), <b>any</b> (- and ?). <b>None / no / nobody</b> = zero, and only one negative: <i>Nobody saw</i>, never <i>nobody didn't see</i>.",
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
      "sub": "Mia and Leo in the office kitchen. A new scene, about 45 seconds.",
      "img": "https://wolf-labs.pages.dev/p/e1aec06cf52d/every-last-cookie/img/live-conversa.webp",
      "leg": "Notes on the fridge door",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, the cookie jar is empty. Every last cookie is gone!"
        },
        {
          "quem": "mia",
          "t": "Not one? Is there any cookie in the box?"
        },
        {
          "quem": "leo",
          "t": "No, none. All the cookies are gone, and nobody knows why."
        },
        {
          "quem": "mia",
          "t": "Everybody likes cookies. Somebody ate them all."
        },
        {
          "quem": "leo",
          "t": "I asked some people. Nobody in Sales saw anything."
        },
        {
          "quem": "mia",
          "t": "What about IT? Some of them are always here late."
        },
        {
          "quem": "leo",
          "t": "Every person in IT says no. They didn't eat any."
        },
        {
          "quem": "mia",
          "t": "Then who did? There are only some crumbs on the floor."
        },
        {
          "quem": "leo",
          "t": "Wait. All the crumbs go to the boss's door."
        },
        {
          "quem": "mia",
          "t": "Ha! Now everybody knows who it was."
        }
      ],
      "perguntas": [
        {
          "q": "How many cookies are in the jar?",
          "op": [
            "None",
            "All of them",
            "Some"
          ],
          "a": 0,
          "por": "No, none. All the cookies are gone."
        },
        {
          "q": "What did the people in Sales see?",
          "op": [
            "Nobody saw anything",
            "Everybody saw the boss",
            "Some people saw a bag"
          ],
          "a": 0,
          "por": "Nobody in Sales saw anything."
        },
        {
          "q": "Where do the crumbs go?",
          "op": [
            "To the boss's door",
            "To the IT room",
            "To the kitchen"
          ],
          "a": 0,
          "por": "All the crumbs go to the boss's door."
        }
      ]
    },
    "out": {
      "sub": "Three sentences about the jar. Hear it, then say it.",
      "frases": [
        {
          "t": "Every last cookie is gone.",
          "img": "https://wolf-labs.pages.dev/p/e1aec06cf52d/every-last-cookie/img/live-capa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "All the cookies are gone, and nobody knows why.",
          "img": "https://wolf-labs.pages.dev/p/e1aec06cf52d/every-last-cookie/img/live-conversa.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "There are some crumbs, but there isn't any cookie.",
          "img": "https://wolf-labs.pages.dev/p/e1aec06cf52d/every-last-cookie/img/live-capa.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "all, every, some, any or none? Four quick ones.",
      "regra": "<b>every</b> + one thing (is) · <b>all</b> + many things (are) · <b>some</b> (+) · <b>any</b> (- ?) · <b>nobody / none</b> = zero, one negative only.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "Nobody knows who ate the cookies.",
          "aceita": [],
          "d": "Hint: <b>nobody</b> + a singular verb: nobody <b>knows</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "Every cookies are gone.",
          "r": "Every cookie is gone.",
          "aceita": [
            "Every last cookie is gone."
          ],
          "d": "Hint: <b>every</b> + one thing: every cookie <b>is</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "I didn't eat some cookies.",
          "r": "I didn't eat any cookies.",
          "aceita": [
            "I didn't eat any."
          ],
          "d": "Hint: in a negative sentence, use <b>any</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: only one negative.",
          "mostra": "Nobody didn't see the boss.",
          "r": "Nobody saw the boss.",
          "aceita": [
            "Nobody saw him.",
            "Nobody saw her."
          ],
          "d": "Hint: <b>nobody</b> is already negative. The verb is positive."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/e1aec06cf52d/every-last-cookie/img/live-conversa.webp",
      "leg": "Notes on the fridge door",
      "pede": "Look at the picture: notes on a fridge door. Write 2 or 3 sentences about the office kitchen. Use <b>all</b>, <b>every</b>, <b>some</b>, <b>any</b>, <b>none</b> or <b>nobody</b>.",
      "ph": "Every note on the fridge is …",
      "ex": "Every note on the fridge is angry. Nobody knows who ate the cookies, and none are left."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "Is there any food in your kitchen right now? What?",
          "ph": "There is some … but there isn't any …",
          "ex": "Yes, there is some rice and some eggs."
        },
        {
          "q": "Does everybody in your family like cookies?",
          "ph": "Everybody … but nobody …",
          "ex": "Everybody in my family likes cookies, but nobody bakes."
        }
      ]
    }
  }
};
