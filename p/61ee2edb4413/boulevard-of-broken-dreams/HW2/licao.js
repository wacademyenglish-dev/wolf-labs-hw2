/* BOULEVARD OF BROKEN DREAMS · LIÇÃO DE CASA 2.0 (24/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: there is / there are + preposições de lugar. Linha de música: NENHUM verso aqui; o listening é diálogo original. A1: dicas em português só nas notas (d). */
window.HW2 = {
  "id": "boulevard-of-broken-dreams",
  "titulo": "Boulevard of Broken Dreams",
  "nivel": "A1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/61ee2edb4413/boulevard-of-broken-dreams/img/live-capa.webp",
  "alvo": "there is / there are + place words (next to, between, opposite, in front of, on the corner): is for one, are for two or more; never has / have for there is; on the corner, not in the corner, for a street",
  "abrir": "What is on your street?",
  "fecho": "<b>There is</b> + one thing: <i>There is a café next to the bank.</i> <b>There are</b> + two or more: <i>There are two bus stops.</i> Never <i>has</i> or <i>have</i> for this. A street corner is <b>on the corner</b>. More: <b>between</b> · <b>opposite</b> · <b>in front of</b>.",
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
      "sub": "Leo is new in town and calls Mia. A new scene, about 40 seconds.",
      "img": "https://wolf-labs.pages.dev/p/61ee2edb4413/boulevard-of-broken-dreams/img/live-avenida.webp",
      "leg": "A street at night",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, I'm on the main street. Where is the café?"
        },
        {
          "quem": "mia",
          "t": "There is a café on the corner, next to the bank."
        },
        {
          "quem": "leo",
          "t": "I see a bank. Is there a bus stop near here?"
        },
        {
          "quem": "mia",
          "t": "Yes, there is. There is a bus stop opposite the bank."
        },
        {
          "quem": "leo",
          "t": "Are there any shops?"
        },
        {
          "quem": "mia",
          "t": "Yes, there are two shops between the bank and the bridge."
        },
        {
          "quem": "leo",
          "t": "And is there a park?"
        },
        {
          "quem": "mia",
          "t": "No, there isn't. But there is a small garden in front of the café."
        }
      ],
      "perguntas": [
        {
          "q": "Where is the café?",
          "op": [
            "On the corner, next to the bank",
            "Between the shops",
            "Opposite the bridge"
          ],
          "a": 0,
          "por": "There is a café on the corner, next to the bank."
        },
        {
          "q": "What is opposite the bank?",
          "op": [
            "A bus stop",
            "A park",
            "A shop"
          ],
          "a": 0,
          "por": "There is a bus stop opposite the bank."
        },
        {
          "q": "How many shops are between the bank and the bridge?",
          "op": [
            "Two",
            "One",
            "Three"
          ],
          "a": 0,
          "por": "There are two shops between the bank and the bridge."
        }
      ]
    },
    "out": {
      "sub": "Three sentences about a street. Hear it, then say it.",
      "frases": [
        {
          "t": "There is a café next to the bank.",
          "img": "https://wolf-labs.pages.dev/p/61ee2edb4413/boulevard-of-broken-dreams/img/live-cafe.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "There are two bus stops on this street.",
          "img": "https://wolf-labs.pages.dev/p/61ee2edb4413/boulevard-of-broken-dreams/img/live-ponto.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "There is a bridge in front of the hotel.",
          "img": "https://wolf-labs.pages.dev/p/61ee2edb4413/boulevard-of-broken-dreams/img/live-ponte.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "There is or there are? Four quick ones.",
      "regra": "<b>There is</b> + one · <b>There are</b> + two or more · never <b>has / have</b> · <b>on the corner</b>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "There is a bank next to the café.",
          "aceita": [],
          "d": "Dica: uma coisa só: <b>there is</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "Has a bank next to the café.",
          "r": "There is a bank next to the café.",
          "aceita": [
            "There's a bank next to the café."
          ],
          "d": "Dica: 'tem' em inglês é <b>there is</b>, nunca 'has' ou 'have'."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "There is two shops next to the bank.",
          "r": "There are two shops next to the bank.",
          "aceita": [],
          "d": "Dica: duas coisas pedem <b>there are</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "There is a bus stop in the corner.",
          "r": "There is a bus stop on the corner.",
          "aceita": [
            "There's a bus stop on the corner."
          ],
          "d": "Dica: a esquina da rua é <b>on the corner</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/61ee2edb4413/boulevard-of-broken-dreams/img/live-ponte.webp",
      "leg": "A bridge and lights on the water",
      "pede": "Look at the picture: a bridge and lights at night. Write 2 or 3 sentences. What <b>is</b> there? What <b>are</b> there? Use <b>next to</b>, <b>in front of</b> or <b>between</b>.",
      "ph": "There is a … There are …",
      "ex": "There is a bridge in front of the tower. There are many lights on the water. There is a street next to the river."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What is on your street? Use there is or there are.",
          "ph": "There is … There are …",
          "ex": "There is a bakery next to my house. There are two small shops opposite it."
        },
        {
          "q": "What is opposite your house or building?",
          "ph": "Opposite my house there is …",
          "ex": "Opposite my house there is a small park."
        }
      ]
    }
  }
};
