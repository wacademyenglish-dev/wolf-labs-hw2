/* SOMEONE MUST HAVE · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: must / might / can't have, should have. B2: nenhum português. So live-conversa (a live-capa e clara demais). */
window.HW2 = {
  "id": "someone-must-have",
  "titulo": "Someone Must Have",
  "nivel": "B2",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/fe2ddb67e6a4/someone-must-have/img/live-conversa.webp",
  "alvo": "modals of deduction in the past (must have, might / could have, can't have + participle) and criticism (should have, shouldn't have); never must saw, never mustn't have for impossible",
  "abrir": "Think of something that went missing at your work or school. Who did you suspect?",
  "fecho": "<b>Modal + have + participle</b>. Almost sure: <b>must have</b>. Possible: <b>might / could have</b>. Impossible: <b>can't have</b> (never <i>mustn't have</i>). Criticism of what did not happen: <b>should have</b>. The participle is the third form: <i>might have gone</i>, not <i>went</i>.",
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
      "sub": "Mia and Leo in the office kitchen. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/fe2ddb67e6a4/someone-must-have/img/live-conversa.webp",
      "leg": "A notebook, a magnifying glass, a cup",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, my sandwich has disappeared from the office fridge. Someone must have taken it."
        },
        {
          "quem": "leo",
          "t": "It can't have been Dan. He is on holiday this week."
        },
        {
          "quem": "mia",
          "t": "Then it might have been Rosa. She was in the kitchen at noon."
        },
        {
          "quem": "leo",
          "t": "Or it could have been the cleaner. The fridge door was open, so somebody must have forgotten to close it."
        },
        {
          "quem": "mia",
          "t": "They should have checked the label. My name is on it, in big letters."
        },
        {
          "quem": "leo",
          "t": "Wait. Look, there are crumbs on your desk. You must have eaten it yourself at eleven."
        },
        {
          "quem": "mia",
          "t": "Oh no. I must have forgotten."
        },
        {
          "quem": "leo",
          "t": "You shouldn't have accused everyone before checking."
        },
        {
          "quem": "mia",
          "t": "I should have looked at my own desk first!"
        }
      ],
      "perguntas": [
        {
          "q": "Why can't it have been Dan?",
          "op": [
            "He is on holiday this week",
            "He does not eat lunch",
            "He was in the kitchen at noon"
          ],
          "a": 0,
          "por": "It can't have been Dan. He is on holiday this week."
        },
        {
          "q": "What did Leo find on Mia's desk?",
          "op": [
            "Crumbs",
            "A label",
            "A key"
          ],
          "a": 0,
          "por": "Look, there are crumbs on your desk."
        },
        {
          "q": "What should Mia have done first?",
          "op": [
            "Looked at her own desk",
            "Asked the cleaner",
            "Called Rosa"
          ],
          "a": 0,
          "por": "I should have looked at my own desk first!"
        }
      ]
    },
    "out": {
      "sub": "Three sentences about the missing lunch. Hear it, then say it.",
      "frases": [
        {
          "t": "Someone must have forgotten to close the fridge.",
          "img": "https://wolf-labs.pages.dev/p/fe2ddb67e6a4/someone-must-have/img/live-conversa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "It can't have been Dan, because he was away.",
          "img": "https://wolf-labs.pages.dev/p/fe2ddb67e6a4/someone-must-have/img/live-conversa.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "I should have checked my own desk first.",
          "img": "https://wolf-labs.pages.dev/p/fe2ddb67e6a4/someone-must-have/img/live-conversa.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Must have, can't have, should have. Four quick ones.",
      "regra": "<b>must have</b> = almost sure · <b>might / could have</b> = possible · <b>can't have</b> = impossible · <b>should have</b> = criticism · always + the third form.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "You must have eaten it yourself at eleven.",
          "aceita": [],
          "d": "Hint: <b>must have</b> + participle (<i>eaten</i>)."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: say it is impossible.",
          "mostra": "It must not have been Dan; he was away.",
          "r": "It can't have been Dan; he was away.",
          "aceita": [
            "It couldn't have been Dan; he was away."
          ],
          "d": "Hint: impossible in the past is <b>can't have</b>, never <i>must not have</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "She might have went home early.",
          "r": "She might have gone home early.",
          "aceita": [],
          "d": "Hint: modal + <b>have</b> + third form: <i>gone</i>."
        },
        {
          "tipo": "escreve",
          "t": "Criticize it: the label was not checked.",
          "mostra": "You must have checked the label first.",
          "r": "You should have checked the label first.",
          "aceita": [
            "You ought to have checked the label first."
          ],
          "d": "Hint: criticism of what did not happen: <b>should have</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/fe2ddb67e6a4/someone-must-have/img/live-conversa.webp",
      "leg": "A notebook and a magnifying glass",
      "pede": "Look at the picture: a notebook, a magnifying glass and a cup. Write 2 or 3 sentences about a small mystery at home or at work. Use <b>must have, might have, can't have</b> or <b>should have</b>.",
      "ph": "Someone must have …",
      "ex": "My pen disappeared. Someone must have borrowed it. It can't have been my boss. I should have kept it in my bag."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "Think of something you lost. What might have happened to it?",
          "ph": "I might have …",
          "ex": "I lost my scarf. I might have left it in the taxi."
        },
        {
          "q": "What is something you should have done last week?",
          "ph": "I should have …",
          "ex": "I should have called my aunt on her birthday."
        }
      ]
    }
  }
};
