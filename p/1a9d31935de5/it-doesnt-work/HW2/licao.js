/* IT DOESN'T WORK · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: doesn't / don't + verbo limpo; Does it...?. A1: dicas em português só nas notas (d). */
window.HW2 = {
  "id": "it-doesnt-work",
  "titulo": "It Doesn't Work",
  "nivel": "A1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/1a9d31935de5/it-doesnt-work/img/live-salao.webp",
  "alvo": "doesn't / don't + plain verb; Do / Does ...? questions; the S moves (she works -> she doesn't work), one S per sentence; one thing: doesn't, more than one: don't",
  "abrir": "What doesn't work well in your house?",
  "fecho": "<b>The S moves.</b> She work<b>s</b> &rarr; she doe<b>s</b>n’t work. One thing: <b>doesn’t</b>, <b>Does it…?</b> More than one, or I, you, we: <b>don’t</b>, <b>Do they…?</b> One S per sentence: never <i>doesn’t works</i>.",
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
      "sub": "Leo calls Mia from the laundromat. A new scene, about 35 seconds.",
      "img": "https://wolf-labs.pages.dev/p/1a9d31935de5/it-doesnt-work/img/live-porta.webp",
      "leg": "A glass door at night",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, I'm at the laundromat. Machine three doesn't work."
        },
        {
          "quem": "mia",
          "t": "What's wrong with it?"
        },
        {
          "quem": "leo",
          "t": "It doesn't take coins, and the door doesn't close."
        },
        {
          "quem": "mia",
          "t": "What about the other machines?"
        },
        {
          "quem": "leo",
          "t": "Machine four works, but it doesn't get hot."
        },
        {
          "quem": "mia",
          "t": "Do the dryers work?"
        },
        {
          "quem": "leo",
          "t": "Yes, they do. But they don't stop at nine."
        },
        {
          "quem": "mia",
          "t": "OK. Does the shop close at night?"
        },
        {
          "quem": "leo",
          "t": "No, it doesn't. The sign says: we don't close."
        }
      ],
      "perguntas": [
        {
          "q": "What is wrong with machine three?",
          "op": [
            "It doesn't take coins",
            "It doesn't stop",
            "It doesn't have a door"
          ],
          "a": 0,
          "por": "It doesn't take coins, and the door doesn't close."
        },
        {
          "q": "What doesn't machine four do?",
          "op": [
            "It doesn't get hot",
            "It doesn't start",
            "It doesn't take coins"
          ],
          "a": 0,
          "por": "Machine four works, but it doesn't get hot."
        },
        {
          "q": "Does the shop close at night?",
          "op": [
            "No, it doesn't",
            "Yes, at nine",
            "Yes, at ten"
          ],
          "a": 0,
          "por": "The sign says: we don't close."
        }
      ]
    },
    "out": {
      "sub": "Three sentences from the laundromat. Hear it, then say it.",
      "frases": [
        {
          "t": "Machine three doesn't take coins.",
          "img": "https://wolf-labs.pages.dev/p/1a9d31935de5/it-doesnt-work/img/live-salao.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "Does the door close?",
          "img": "https://wolf-labs.pages.dev/p/1a9d31935de5/it-doesnt-work/img/live-porta.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "The dryers don't stop at nine.",
          "img": "https://wolf-labs.pages.dev/p/1a9d31935de5/it-doesnt-work/img/live-caixa.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "doesn't or don't? Four quick ones.",
      "regra": "<b>doesn’t</b> = one thing · <b>don’t</b> = more than one, I, you, we · plain verb after them · <b>Does it …?</b>",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "Does the machine take coins?",
          "aceita": [],
          "d": "Dica: pergunta com <b>Does</b> + sujeito + verbo limpo (take)."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "She doesn't works here.",
          "r": "She doesn't work here.",
          "aceita": [],
          "d": "Dica: o S mudou para <b>doesn't</b>. O verbo fica limpo: <b>work</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "Does it gets hot?",
          "r": "Does it get hot?",
          "aceita": [],
          "d": "Dica: depois de <b>Does</b>, o verbo fica limpo: <b>get</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "The machines doesn't stop at nine.",
          "r": "The machines don't stop at nine.",
          "aceita": [],
          "d": "Dica: <b>machines</b> é mais de uma, então <b>don't</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/1a9d31935de5/it-doesnt-work/img/live-salao.webp",
      "leg": "A laundromat at night",
      "pede": "Look at the picture: a laundromat at night. Write 2 or 3 sentences about something at home that doesn't work. Add one question with <b>Does it …?</b>",
      "ph": "My … doesn't …",
      "ex": "My shower doesn't get hot. It doesn't make noise. Does your shower work?"
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What doesn't work well in your house?",
          "ph": "My … doesn't work.",
          "ex": "My wifi doesn't work in the kitchen."
        },
        {
          "q": "What doesn't your phone do well?",
          "ph": "It doesn't …",
          "ex": "It doesn't charge fast. The battery doesn't last."
        }
      ]
    }
  }
};
