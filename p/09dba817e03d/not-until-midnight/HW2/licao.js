/* NOT UNTIL MIDNIGHT · LIÇÃO DE CASA 2.0 (24/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: inversion after negative time and place expressions. C1: nenhum português. Só imagens live-* (escuras). */
window.HW2 = {
  "id": "not-until-midnight",
  "titulo": "Not Until Midnight",
  "nivel": "C1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/09dba817e03d/not-until-midnight/img/live-capa.webp",
  "alvo": "inversion after negative time and place expressions: Not until midnight did they arrive; Not until I saw the map did I understand; Not once did we stop; Not since 1990 has it snowed here; Nowhere have I seen such stars; the inversion goes in the main clause",
  "abrir": "Tell me about a night you will never forget.",
  "fecho": "After a negative time or place expression, the auxiliary comes first: <b>Not until midnight did they arrive.</b> <b>Not since 1990 has it snowed here.</b> <b>Nowhere have I seen such stars.</b> With <b>not until I saw the map</b>, the inversion goes in the second part: <i>did I understand</i>. And the main verb goes back to its base form: <i>did they arrive</i>.",
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
      "sub": "Mia and Leo, after a weekend in the mountains. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/09dba817e03d/not-until-midnight/img/live-conversa.webp",
      "leg": "A ridge under the stars",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, you look wrecked. What on earth happened this weekend?"
        },
        {
          "quem": "leo",
          "t": "We got lost on the ridge. Not until midnight did we find the hut."
        },
        {
          "quem": "mia",
          "t": "Midnight! Didn't you have a map?"
        },
        {
          "quem": "leo",
          "t": "We did, but not until I turned it the right way up did I understand where we were."
        },
        {
          "quem": "mia",
          "t": "You were reading it upside down?"
        },
        {
          "quem": "leo",
          "t": "Don't remind me. And not once did Tom offer to check. He just kept saying we were fine."
        },
        {
          "quem": "mia",
          "t": "Typical. Did you at least see the stars?"
        },
        {
          "quem": "leo",
          "t": "Nowhere have I seen a sky like that. Not since I was a kid have I felt so small."
        },
        {
          "quem": "mia",
          "t": "Well, that almost makes up for it."
        },
        {
          "quem": "leo",
          "t": "Almost. Next time I'm bringing a proper compass."
        }
      ],
      "perguntas": [
        {
          "q": "When did they finally find the hut?",
          "op": [
            "Not until midnight",
            "Early in the evening",
            "At sunrise"
          ],
          "a": 0,
          "por": "Not until midnight did we find the hut."
        },
        {
          "q": "What was wrong with the map?",
          "op": [
            "Leo was holding it upside down",
            "It was out of date",
            "Tom had lost it"
          ],
          "a": 0,
          "por": "Not until I turned it the right way up did I understand where we were."
        },
        {
          "q": "How did Leo feel about the sky?",
          "op": [
            "He had never seen one like it",
            "He found it disappointing",
            "He was too tired to look"
          ],
          "a": 0,
          "por": "Nowhere have I seen a sky like that."
        }
      ]
    },
    "out": {
      "sub": "Three sentences told with drama. Hear it, then say it.",
      "frases": [
        {
          "t": "Not until the fog lifted did we see how close we were to the road.",
          "img": "https://wolf-labs.pages.dev/p/09dba817e03d/not-until-midnight/img/live-capa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "Nowhere in the valley have I seen a sky so clear.",
          "img": "https://wolf-labs.pages.dev/p/09dba817e03d/not-until-midnight/img/live-conversa.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "Not once during the whole night did the wind stop.",
          "img": "https://wolf-labs.pages.dev/p/09dba817e03d/not-until-midnight/img/live-conversa.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Not until, not since, not once, nowhere. Four quick ones.",
      "regra": "<b>Not until midnight did they arrive.</b> · <b>Not since 1990 has it snowed.</b> · <b>Nowhere have I seen ...</b> · the auxiliary comes before the subject, and the main verb stays in its base form",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "Nowhere have I seen such beautiful stars.",
          "aceita": [],
          "d": "Hint: the place expression comes first, then the auxiliary."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "Not until midnight did they arrived.",
          "r": "Not until midnight did they arrive.",
          "aceita": [],
          "d": "Hint: after <b>did</b>, the main verb goes back to its base form."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: the word order is wrong.",
          "mostra": "Not until I saw the map I understood.",
          "r": "Not until I saw the map did I understand.",
          "aceita": [],
          "d": "Hint: the inversion goes in the <b>second</b> part, after the map."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: the word order is wrong.",
          "mostra": "Not since 1990 it has snowed here.",
          "r": "Not since 1990 has it snowed here.",
          "aceita": [],
          "d": "Hint: <b>has</b> comes before the subject."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/09dba817e03d/not-until-midnight/img/live-conversa.webp",
      "leg": "A mountain ridge under the stars",
      "pede": "Look at the picture: a mountain ridge under a sky full of stars. Imagine a night you spent outdoors. Write 2 or 3 sentences using <b>Not until ... did</b>, <b>Not once did</b>, <b>Nowhere have I</b> or <b>Not since ... have</b>.",
      "ph": "Not until … did we …",
      "ex": "Not until the sun came up did we realise how far we had walked. Nowhere have I felt so tired, and not once did anyone complain."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "Tell me about a day when something happened later than expected.",
          "ph": "Not until … did …",
          "ex": "Not until nine o'clock did the plumber finally turn up."
        },
        {
          "q": "What is a place where you have never felt more relaxed?",
          "ph": "Nowhere have I felt so … as …",
          "ex": "Nowhere have I felt so relaxed as on my grandfather's farm."
        }
      ]
    }
  }
};
