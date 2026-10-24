/* WHERE WERE YOU YESTERDAY · LIÇÃO DE CASA 2.0 (24/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=".
   Alvo: was/were (Kestrel Office Chairs na feira). A1: português só nas dicas (d). Imagens live-* escuras. */
window.HW2 = {
  "id": "where-were-you-yesterday",
  "titulo": "Where Were You Yesterday",
  "nivel": "A1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/29a64d68bd4e/where-were-you-yesterday/img/live-salao.webp",
  "alvo": "was / were: I, he, she, it was · you, we, they were · Where were you? · Were you …? with no did · wasn't / weren't · short answers Yes, I was. / No, I wasn't.",
  "abrir": "Where were you yesterday at three o'clock? Who was with you?",
  "fecho": "<b>I was</b>, <b>he was</b>, <b>she was</b> · <b>you were</b>, <b>we were</b>, <b>they were</b>. The question starts with the verb: <b>Where were you</b>? <b>Were you</b> late? Short answer: <b>Yes, I was.</b> / <b>No, I wasn't.</b> Never <i>did</i> with was / were.",
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
      "sub": "Ms. Park asks Tom about the trade fair. A new scene, about 45 seconds.",
      "img": "https://wolf-labs.pages.dev/p/29a64d68bd4e/where-were-you-yesterday/img/live-palco.webp",
      "leg": "A big hall, quiet and dark",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Tom, where were you yesterday at three? Our stand was empty."
        },
        {
          "quem": "leo",
          "t": "I'm sorry, Ms. Park. Sam and I were in hall B21."
        },
        {
          "quem": "mia",
          "t": "B21? Our stand is B12!"
        },
        {
          "quem": "leo",
          "t": "I know. We were lost. The map was upside down."
        },
        {
          "quem": "mia",
          "t": "Were you with a client?"
        },
        {
          "quem": "leo",
          "t": "No, I wasn't. We weren't with anybody."
        },
        {
          "quem": "mia",
          "t": "Mr. Haddad was at our stand at three."
        },
        {
          "quem": "leo",
          "t": "Oh no. Was he angry?"
        },
        {
          "quem": "mia",
          "t": "No, he wasn't. June was there at four. She was great."
        },
        {
          "quem": "leo",
          "t": "Thank you, June!"
        }
      ],
      "perguntas": [
        {
          "q": "Where was Tom at three?",
          "op": [
            "In hall B21",
            "At the stand",
            "At home"
          ],
          "a": 0,
          "por": "Sam and I were in hall B21."
        },
        {
          "q": "Was Tom with a client?",
          "op": [
            "No, he wasn't",
            "Yes, he was",
            "Yes, they were"
          ],
          "a": 0,
          "por": "No, I wasn't. We weren't with anybody."
        },
        {
          "q": "Who was at the stand at four?",
          "op": [
            "June",
            "Mr. Haddad",
            "Sam"
          ],
          "a": 0,
          "por": "June was there at four."
        }
      ]
    },
    "out": {
      "sub": "Three sentences about yesterday. Hear it, then say it.",
      "frases": [
        {
          "t": "Where were you yesterday?",
          "au": "audio/say1.mp3",
          "img": "https://wolf-labs.pages.dev/p/29a64d68bd4e/where-were-you-yesterday/img/live-salao.webp"
        },
        {
          "t": "I was in hall B21.",
          "au": "audio/say2.mp3",
          "img": "https://wolf-labs.pages.dev/p/29a64d68bd4e/where-were-you-yesterday/img/live-palco.webp"
        },
        {
          "t": "We weren't at the stand.",
          "au": "audio/say3.mp3",
          "img": "https://wolf-labs.pages.dev/p/29a64d68bd4e/where-were-you-yesterday/img/live-crachas.webp"
        }
      ]
    },
    "focus": {
      "sub": "Was or were? Four quick ones.",
      "regra": "<b>I / he / she / it was</b> · <b>you / we / they were</b> · <b>Where were you</b>? · <b>No, I wasn't.</b>",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "Where were you at three o'clock?",
          "aceita": [],
          "d": "Dica: a pergunta começa com <b>Where were</b> + you."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "We was at the office yesterday.",
          "r": "We were at the office yesterday.",
          "aceita": [],
          "d": "Dica: <b>we</b> leva <b>were</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "Where you were yesterday?",
          "r": "Where were you yesterday?",
          "aceita": [],
          "d": "Dica: o verbo vem antes: <b>Where were you</b>?"
        },
        {
          "tipo": "escreve",
          "t": "Fix it: fix the short answer. Were you at the stand?",
          "mostra": "No, I didn't.",
          "r": "No, I wasn't.",
          "aceita": [
            "No I wasn't",
            "No, I was not."
          ],
          "d": "Dica: com was / were, a resposta é <b>No, I wasn't</b>. Sem did."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/29a64d68bd4e/where-were-you-yesterday/img/live-crachas.webp",
      "leg": "Badges on a table",
      "pede": "Look at the picture: badges from a work event. Write 2 or 3 sentences about yesterday at work. Say where you were and who was with you. Use <b>was</b> and <b>were</b>.",
      "ph": "Yesterday I was at … My boss was …",
      "ex": "I was at the office yesterday. My boss was in a meeting. We were very busy."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "Where were you yesterday at three o'clock?",
          "ph": "I was at …",
          "ex": "I was at the office. My boss was with me."
        },
        {
          "q": "Were you busy last week at work?",
          "ph": "Yes, I was. / No, I wasn't.",
          "ex": "Yes, I was. I was in meetings every day."
        }
      ]
    }
  }
};
