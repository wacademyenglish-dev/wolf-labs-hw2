/* THE CRIMSON DIAMOND · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: past continuous (was / were + -ing). A2: dicas em português só nas notas (d). Só imagens live-* escuras. */
window.HW2 = {
  "id": "crimson-diamond",
  "titulo": "The Crimson Diamond",
  "nivel": "A2",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/3b5c4131edda/crimson-diamond/img/live-vitrine-a.webp",
  "alvo": "past continuous in alibis and questions: What were you doing at ten? · I was + -ing · I wasn't ... · Were you ...? Yes, I was; never What you were doing, I was sleep, He working",
  "abrir": "What were you doing yesterday at 10 PM?",
  "fecho": "<b>was / were + -ing</b>: <i>I was sleeping. They were closing the doors.</i> No: <b>wasn't / weren't</b> + -ing. The question: <b>What were you doing?</b> <b>Were you working?</b> Never <i>I was sleep</i>, never <i>He working</i>.",
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
      "sub": "Mia and Leo at the museum. A new scene, about 45 seconds.",
      "img": "https://wolf-labs.pages.dev/p/3b5c4131edda/crimson-diamond/img/live-galeria.webp",
      "leg": "A dark gallery at night",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, the alarm rang at ten past ten. The diamond is gone!"
        },
        {
          "quem": "mia",
          "t": "What was Arthur doing at ten?"
        },
        {
          "quem": "leo",
          "t": "He was walking in the hall. He wasn't sleeping."
        },
        {
          "quem": "mia",
          "t": "And Marco, the barman? What was he doing?"
        },
        {
          "quem": "leo",
          "t": "He was washing glasses. He says the bar was closed."
        },
        {
          "quem": "mia",
          "t": "Was Eleanor with her husband?"
        },
        {
          "quem": "leo",
          "t": "No, she wasn't. She was looking at the paintings alone."
        },
        {
          "quem": "mia",
          "t": "And where was her husband?"
        },
        {
          "quem": "leo",
          "t": "He says he was getting champagne. But the bar was closed!"
        },
        {
          "quem": "mia",
          "t": "So he wasn't getting champagne. I think he was taking the diamond."
        }
      ],
      "perguntas": [
        {
          "q": "What was Arthur doing at ten?",
          "op": [
            "He was walking in the hall",
            "He was sleeping",
            "He was washing glasses"
          ],
          "a": 0,
          "por": "He was walking in the hall. He wasn't sleeping."
        },
        {
          "q": "What was Marco doing?",
          "op": [
            "He was washing glasses",
            "He was serving champagne",
            "He was looking at the paintings"
          ],
          "a": 0,
          "por": "He was washing glasses."
        },
        {
          "q": "Why is the husband's story strange?",
          "op": [
            "The bar was closed",
            "The bar was full",
            "He was with Eleanor"
          ],
          "a": 0,
          "por": "He says he was getting champagne. But the bar was closed!"
        }
      ]
    },
    "out": {
      "sub": "Three sentences about one night. Hear it, then say it.",
      "frases": [
        {
          "t": "What were you doing at ten o'clock?",
          "img": "https://wolf-labs.pages.dev/p/3b5c4131edda/crimson-diamond/img/live-vitrine-a.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "I was looking at the paintings in the gallery.",
          "img": "https://wolf-labs.pages.dev/p/3b5c4131edda/crimson-diamond/img/live-galeria.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "She wasn't sleeping when the alarm rang.",
          "img": "https://wolf-labs.pages.dev/p/3b5c4131edda/crimson-diamond/img/live-vitrine-b.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "was / were + -ing. Four quick ones.",
      "regra": "<b>was / were + -ing</b> · <b>wasn't / weren't</b> + -ing · <b>What were you doing?</b> · <b>Were you …?</b>",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "Was she looking at the paintings?",
          "aceita": [],
          "d": "Dica: <b>Was</b> vem primeiro, depois she + verbo com -ing."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "What you were doing at ten?",
          "r": "What were you doing at ten?",
          "aceita": [
            "What were you doing at ten o'clock?"
          ],
          "d": "Dica: na pergunta, <b>were</b> pula para antes de <i>you</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "I was sleep at ten.",
          "r": "I was sleeping at ten.",
          "aceita": [],
          "d": "Dica: depois de <b>was</b>, o verbo leva -ing: <i>sleeping</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is missing.",
          "mostra": "He working at the bar.",
          "r": "He was working at the bar.",
          "aceita": [
            "He wasn't working at the bar."
          ],
          "d": "Dica: faltam as duas peças: <b>was</b> + <i>working</i>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/3b5c4131edda/crimson-diamond/img/live-galeria.webp",
      "leg": "A dark gallery at night",
      "pede": "Look at the picture: a dark gallery at night. Write 2 or 3 sentences about what you and other people were doing yesterday at 10 PM. Use <b>was / were + -ing</b>.",
      "ph": "At ten, I was …",
      "ex": "At ten, I was watching a series. My sister was sleeping. We weren't talking."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What were you doing yesterday at 7 PM?",
          "ph": "At seven, I was …",
          "ex": "At seven, I was cooking dinner."
        },
        {
          "q": "What was your family doing last night?",
          "ph": "My mother was … My brother was …",
          "ex": "My mother was reading. My brother was playing a game."
        }
      ]
    }
  }
};
