/* THE LIGHT AT SEVEN · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: present simple he/she + S (doesn't). A1: dicas em português só nas notas (d). */
window.HW2 = {
  "id": "light-at-seven",
  "titulo": "The Light at Seven",
  "nivel": "A1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/3e5964ff7c55/light-at-seven/img/live-noite.webp",
  "alvo": "present simple with he / she / it: verb + S (she works, he goes, she studies, he has); they take no S; he / she doesn't + plain verb; the S has one place only",
  "abrir": "What does one person in your house do at seven?",
  "fecho": "<b>He, she, it</b>: verb + <b>S</b>: <i>he wakes up, she reads.</i> <b>They</b>: no S. <b>Doesn't</b> + plain verb: <i>he doesn't work.</i> One S, one place: never <i>he doesn't works.</i>",
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
      "sub": "Mia tells Leo about her neighbor. A new scene, about 40 seconds.",
      "img": "https://wolf-labs.pages.dev/p/3e5964ff7c55/light-at-seven/img/live-manha.webp",
      "leg": "A courtyard in the morning",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, my neighbor is funny. He wakes up at six every day."
        },
        {
          "quem": "leo",
          "t": "Every day? What does he do next?"
        },
        {
          "quem": "mia",
          "t": "He makes tea and he reads the news. His wife sleeps until eight."
        },
        {
          "quem": "leo",
          "t": "Does she work?"
        },
        {
          "quem": "mia",
          "t": "Yes, she does. She works at a bank. She goes there by bus."
        },
        {
          "quem": "leo",
          "t": "And on Sunday?"
        },
        {
          "quem": "mia",
          "t": "On Sunday he doesn't work. They watch TV, and the dog sleeps on the sofa."
        },
        {
          "quem": "leo",
          "t": "A nice life."
        }
      ],
      "perguntas": [
        {
          "q": "What time does the neighbor wake up?",
          "op": [
            "At six",
            "At seven",
            "At eight"
          ],
          "a": 0,
          "por": "He wakes up at six every day."
        },
        {
          "q": "What does his wife do?",
          "op": [
            "She works at a bank",
            "She reads the news",
            "She makes tea"
          ],
          "a": 0,
          "por": "She works at a bank."
        },
        {
          "q": "What does the dog do on Sunday?",
          "op": [
            "It sleeps on the sofa",
            "It watches TV",
            "It goes by bus"
          ],
          "a": 0,
          "por": "The dog sleeps on the sofa."
        }
      ]
    },
    "out": {
      "sub": "Three sentences about a neighbor. Hear it, then say it.",
      "frases": [
        {
          "t": "My neighbor wakes up at six.",
          "img": "https://wolf-labs.pages.dev/p/3e5964ff7c55/light-at-seven/img/live-manha.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "He reads a book at night.",
          "img": "https://wolf-labs.pages.dev/p/3e5964ff7c55/light-at-seven/img/live-uma.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "The light comes on at seven.",
          "img": "https://wolf-labs.pages.dev/p/3e5964ff7c55/light-at-seven/img/live-noite.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "One S, one place. Four quick ones.",
      "regra": "<b>he / she / it</b> + verb<b>S</b> (works, goes, studies, has) · <b>they</b> = no S · <b>doesn't</b> + plain verb.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "She studies English at night.",
          "aceita": [],
          "d": "Dica: com <b>she</b>, study vira <b>studies</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "She work at a bank.",
          "r": "She works at a bank.",
          "aceita": [
            "She works at a bank."
          ],
          "d": "Dica: com <b>she</b>, o verbo leva <b>-s</b>: works."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "He go to bed at eleven.",
          "r": "He goes to bed at eleven.",
          "aceita": [
            "He goes to bed at eleven."
          ],
          "d": "Dica: go vira <b>goes</b> com he, she, it."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "He doesn't works on Sunday.",
          "r": "He doesn't work on Sunday.",
          "aceita": [
            "He does not work on Sunday."
          ],
          "d": "Dica: depois de <b>doesn't</b>, o verbo fica limpo, sem -s."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/3e5964ff7c55/light-at-seven/img/live-noite.webp",
      "leg": "A window across a dark courtyard",
      "pede": "Look at the picture: a window across a dark courtyard. Imagine one neighbor. Write 2 or 3 sentences: what he or she <b>does</b> and when. Remember the S.",
      "ph": "My neighbor wakes up at …",
      "ex": "My neighbor wakes up at six. She makes coffee and reads a book. She goes to bed at ten."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What does your mother or father do in the morning?",
          "ph": "My … gets up at … He / She …",
          "ex": "My mother gets up at six. She makes coffee."
        },
        {
          "q": "What does your best friend do on Sunday?",
          "ph": "On Sunday my friend …",
          "ex": "On Sunday my friend plays soccer and watches TV."
        }
      ]
    }
  }
};
