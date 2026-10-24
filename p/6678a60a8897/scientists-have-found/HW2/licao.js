/* SCIENTISTS HAVE FOUND · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: present perfect + passive para notícia (has been found). B1: nenhum português. */
window.HW2 = {
  "id": "scientists-have-found",
  "titulo": "Scientists Have Found",
  "nivel": "B1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/6678a60a8897/scientists-have-found/img/live-capa.webp",
  "alvo": "news with the present perfect: Scientists have found... / the thing first with the passive: A rock has been found; has / have + been + past participle; just between has and been; a finished time needs the past simple",
  "abrir": "What is the biggest news you have heard this week?",
  "fecho": "<b>have / has + past participle</b> for new news: <i>Scientists have found a rock.</i> The thing first: <b>has / have been + participle</b>: <i>A rock has been found.</i> Never <i>It has been found a rock</i>. <b>Just</b> goes in the middle: <i>has just been sent</i>.",
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
      "sub": "Mia and Leo in the newsroom before the 9 PM bulletin. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/6678a60a8897/scientists-have-found/img/live-estudio.webp",
      "leg": "The news studio, before the bulletin",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, the nine o'clock bulletin starts soon. Scientists have found a strange rock on Mars."
        },
        {
          "quem": "mia",
          "t": "A rock has been found? Who found it?"
        },
        {
          "quem": "leo",
          "t": "The rover did. A small rock has been found near a dry river."
        },
        {
          "quem": "mia",
          "t": "Has anything been confirmed yet?"
        },
        {
          "quem": "leo",
          "t": "Not yet. Samples have been collected, but they haven't been tested."
        },
        {
          "quem": "mia",
          "t": "So we can't say that life has been found."
        },
        {
          "quem": "leo",
          "t": "Right. Another website wrote that life has been found on Mars. That headline is wrong."
        },
        {
          "quem": "mia",
          "t": "Then let's write it clearly. A rock has been discovered. Life hasn't been found."
        },
        {
          "quem": "leo",
          "t": "Good. Dana will read it at nine."
        },
        {
          "quem": "mia",
          "t": "And the new photos have just been sent to the newsroom. Let's take a look."
        }
      ],
      "perguntas": [
        {
          "q": "What has been found on Mars?",
          "op": [
            "A small rock near a dry river",
            "A living animal",
            "A new rover"
          ],
          "a": 0,
          "por": "A small rock has been found near a dry river."
        },
        {
          "q": "What has been collected?",
          "op": [
            "Samples",
            "Photos of life",
            "Water"
          ],
          "a": 0,
          "por": "Samples have been collected, but they haven't been tested."
        },
        {
          "q": "What is wrong with the other website's headline?",
          "op": [
            "It says life has been found",
            "It says nothing has been found",
            "It says the rover is broken"
          ],
          "a": 0,
          "por": "Another website wrote that life has been found on Mars. That headline is wrong."
        }
      ]
    },
    "out": {
      "sub": "Three lines for the bulletin. Hear it, then say it.",
      "frases": [
        {
          "t": "A rock has been found on Mars.",
          "img": "https://wolf-labs.pages.dev/p/6678a60a8897/scientists-have-found/img/live-marte.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "Samples have been collected from the old river.",
          "img": "https://wolf-labs.pages.dev/p/6678a60a8897/scientists-have-found/img/live-laboratorio.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "The new photos have just been sent to the newsroom.",
          "img": "https://wolf-labs.pages.dev/p/6678a60a8897/scientists-have-found/img/live-redacao.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "has been + participle, the thing first. Four quick ones.",
      "regra": "<b>have / has + participle</b> for new news · <b>the thing first</b>: <b>has / have been</b> + participle · <b>just</b> between has and been · never <i>It has been found a rock</i>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "A new sample has been collected from Mars.",
          "aceita": [],
          "d": "Hint: the thing first, then <b>has been</b> + participle."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is missing.",
          "mostra": "A new comet has spotted near Earth.",
          "r": "A new comet has been spotted near Earth.",
          "aceita": [
            "A new comet has been discovered near Earth."
          ],
          "d": "Hint: the comet did not spot anything. It needs <b>been</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "Engineers has built a new rover.",
          "r": "Engineers have built a new rover.",
          "aceita": [
            "Engineers have made a new rover."
          ],
          "d": "Hint: many engineers, so <b>have</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: the order is wrong.",
          "mostra": "It has been found a rock on Mars.",
          "r": "A rock has been found on Mars.",
          "aceita": [
            "A rock has been discovered on Mars."
          ],
          "d": "Hint: the thing goes first. No invented <b>it</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/6678a60a8897/scientists-have-found/img/live-laboratorio.webp",
      "leg": "Sample tubes in a dark lab",
      "pede": "Look at the picture: sample tubes in a dark lab. Write 2 or 3 news sentences about your own city or your week. Put the thing first, with <b>has been</b> or <b>have been</b>.",
      "ph": "A new … has been …",
      "ex": "A new bridge has been opened in my city. Two old buildings have been repaired. Nothing has been decided about the park."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What news has been in the headlines this week?",
          "ph": "A … has been …",
          "ex": "A new law has been announced, and two roads have been closed."
        },
        {
          "q": "What has been built or changed in your city lately?",
          "ph": "A new … has been built …",
          "ex": "A new metro station has been built near my house."
        }
      ]
    }
  }
};
