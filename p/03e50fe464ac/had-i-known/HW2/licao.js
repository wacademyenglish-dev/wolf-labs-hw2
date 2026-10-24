/* HAD I KNOWN · LIÇÃO DE CASA 2.0 (24/10/2026)
   Motor: hw2.js. JSON puro depois do "=".
   Alvo: condicionais invertidas. C1: nenhum português na lição. */
window.HW2 = {
  "id": "had-i-known",
  "titulo": "Had I Known",
  "nivel": "C1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/03e50fe464ac/had-i-known/img/live-capa.webp",
  "alvo": "inverted conditionals: Had I known (past), Were I / Were it not for (now), Should you need (future); no if, no contraction, not after the subject",
  "abrir": "Is there something you would do differently, had you known?",
  "fecho": "Drop the <b>if</b> and move the auxiliary to the front: <b>Had I known</b>, I would have called (past) · <b>Were it not for</b> your help, I would have failed (now) · <b>Should you need</b> anything, call me (possible future). No <i>if</i> with these: not <i>If had I known</i>.",
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
  "rate": "-10%",
  "rodadas": {
    "listen": {
      "sub": "Mia and Leo talk about a concert Leo missed. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/03e50fe464ac/had-i-known/img/live-palco.webp",
      "leg": "An empty stage",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, you missed the concert last night. Everyone asked where you were."
        },
        {
          "quem": "leo",
          "t": "Had I known it was the last show, I would have been the first in line."
        },
        {
          "quem": "mia",
          "t": "Nobody told you? It was on the poster."
        },
        {
          "quem": "leo",
          "t": "I never looked. Were it not for my cousin, I wouldn't even have heard about it."
        },
        {
          "quem": "mia",
          "t": "Well, there is a recording. Should you want it, I can send you the link."
        },
        {
          "quem": "leo",
          "t": "Please! Should you have any photos too, send those as well."
        },
        {
          "quem": "mia",
          "t": "I do. Had I been quicker, I would have filmed the whole encore."
        },
        {
          "quem": "leo",
          "t": "Were I you, I would be proud of the photos already."
        },
        {
          "quem": "mia",
          "t": "Thanks. Next time, check the poster."
        }
      ],
      "perguntas": [
        {
          "q": "Why does Leo regret missing the concert?",
          "op": [
            "It was the last show",
            "It was free",
            "It was close to home"
          ],
          "a": 0,
          "por": "Had I known it was the last show, I would have been the first in line."
        },
        {
          "q": "How did Leo hear about it?",
          "op": [
            "His cousin told him",
            "He saw the poster",
            "Mia called him"
          ],
          "a": 0,
          "por": "Were it not for my cousin, I wouldn't even have heard about it."
        },
        {
          "q": "What can Mia send Leo?",
          "op": [
            "A recording and photos",
            "Two tickets",
            "A poster"
          ],
          "a": 0,
          "por": "There is a recording. Should you want it, I can send you the link."
        }
      ]
    },
    "out": {
      "sub": "Three sentences with no IF. Hear it, then say it.",
      "frases": [
        {
          "t": "Had I known it was the last show, I would have gone.",
          "img": "https://wolf-labs.pages.dev/p/03e50fe464ac/had-i-known/img/live-palco.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "Were it not for my cousin, I would have missed it.",
          "img": "https://wolf-labs.pages.dev/p/03e50fe464ac/had-i-known/img/live-capa.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "Should you need a ride, just call me.",
          "img": "https://wolf-labs.pages.dev/p/03e50fe464ac/had-i-known/img/live-capa.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Drop the IF, flip the verb. Four quick ones.",
      "regra": "<b>Had I known</b> (past) · <b>Were it not for</b> (now) · <b>Should you need</b> (future) · no <b>if</b>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "Had I known about the delay, I would have left earlier.",
          "aceita": [],
          "d": "Hint: <b>had</b> goes before <b>I</b>, with no <b>if</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "If had I known, I would have called you.",
          "r": "Had I known, I would have called you.",
          "aceita": [
            "Had I known, I would have called."
          ],
          "d": "Hint: the inversion replaces <b>if</b>, so drop it."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "Was it not for your help, I would have failed.",
          "r": "Were it not for your help, I would have failed.",
          "aceita": [
            "Were it not for your help, I would have failed."
          ],
          "d": "Hint: this inversion always uses <b>were</b>, even with <b>it</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "Should you will need help, call me.",
          "r": "Should you need help, call me.",
          "aceita": [
            "Should you need any help, call me."
          ],
          "d": "Hint: after <b>should</b> use the plain verb: <b>need</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/03e50fe464ac/had-i-known/img/live-palco.webp",
      "leg": "An empty stage with a red curtain",
      "pede": "Look at the picture: an empty stage. Write three sentences about a chance you missed or got. Use one with <b>Had I …</b>, one with <b>Were it not for …</b> and one with <b>Should you …</b>.",
      "ph": "Had I known …",
      "ex": "Had I known about the audition, I would have prepared a song. Were it not for my teacher, I would never have tried. Should you ever need advice, ask me."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What would you do differently, had you known more at eighteen?",
          "ph": "Had I known …, I would have …",
          "ex": "Had I known how useful English is, I would have started earlier."
        },
        {
          "q": "Who helped you most? What if they hadn't?",
          "ph": "Were it not for …, I would …",
          "ex": "Were it not for my sister, I would still be in my old job."
        }
      ]
    }
  }
};
