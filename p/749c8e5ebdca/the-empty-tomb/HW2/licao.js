/* THE EMPTY TOMB · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: was/were (antes) × is/are (agora); Where is he? A1: dicas em português só nas notas (d). Versículos (World English Bible, ao pé da letra): Matthew 28:6 (Listen e Out loud) e Matthew 28:8 (Você). Nada da Bíblia é marcado como errado. */
window.HW2 = {
  "id": "the-empty-tomb",
  "titulo": "The Empty Tomb",
  "nivel": "A1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/749c8e5ebdca/the-empty-tomb/img/live-noite.webp",
  "alvo": "was / were for before (Friday) and is / are for now (Sunday); questions: Where is he? Was she afraid?",
  "abrir": "Where were you last Friday night?",
  "fecho": "<b>Before</b>: was / were. <b>Now</b>: is / are. <i>On Friday the tomb was closed. Now it is empty.</i> In a question the verb goes first: <i>Where is he? Was she afraid?</i>",
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
      "sub": "Mia and Leo in a garden on Sunday morning. Mia quotes Matthew 28:6. A new scene, about 40 seconds.",
      "img": "https://wolf-labs.pages.dev/p/749c8e5ebdca/the-empty-tomb/img/live-noite.webp",
      "leg": "A garden, very early",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, you look happy. How was your morning?"
        },
        {
          "quem": "mia",
          "t": "It was beautiful. I was in the garden at six."
        },
        {
          "quem": "leo",
          "t": "At six? Was it dark?"
        },
        {
          "quem": "mia",
          "t": "Yes, it was dark, but now the sun is up."
        },
        {
          "quem": "leo",
          "t": "What were you reading?"
        },
        {
          "quem": "mia",
          "t": "The story of the first Sunday. On Friday the tomb was closed, and his friends were very sad."
        },
        {
          "quem": "leo",
          "t": "And on Sunday?"
        },
        {
          "quem": "mia",
          "t": "The women were at the tomb very early. The stone was away, and the tomb was empty!"
        },
        {
          "quem": "leo",
          "t": "Wow. And now the women are happy?"
        },
        {
          "quem": "mia",
          "t": "Yes. They ask: where is he?"
        },
        {
          "quem": "leo",
          "t": "And what is the answer?"
        },
        {
          "quem": "mia",
          "t": "A man in white says, “He is not here, for he has risen, just like he said.”"
        }
      ],
      "perguntas": [
        {
          "q": "Where was Mia at six?",
          "op": [
            "In the garden",
            "At school",
            "On a train"
          ],
          "a": 0,
          "por": "I was in the garden at six."
        },
        {
          "q": "How was the tomb on Friday?",
          "op": [
            "Closed",
            "Empty",
            "Open"
          ],
          "a": 0,
          "por": "On Friday the tomb was closed."
        },
        {
          "q": "How are the women now?",
          "op": [
            "Happy",
            "Sad",
            "Afraid"
          ],
          "a": 0,
          "por": "And now the women are happy?"
        }
      ]
    },
    "out": {
      "sub": "Three sentences from the story. The third is from the Bible: Matthew 28:6 (World English Bible). Hear it, then say it.",
      "frases": [
        {
          "t": "On Friday the tomb was closed.",
          "img": "https://wolf-labs.pages.dev/p/749c8e5ebdca/the-empty-tomb/img/live-noite.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "The women were sad, but now they are happy.",
          "img": "https://wolf-labs.pages.dev/p/749c8e5ebdca/the-empty-tomb/img/live-linho.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "Come, see the place where the Lord was lying.",
          "img": "https://wolf-labs.pages.dev/p/749c8e5ebdca/the-empty-tomb/img/live-manha.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Before or now? Four quick ones.",
      "regra": "<b>was</b> (he, she, it) · <b>were</b> (we, you, they, the women) · before = was / were · now = is / are · <b>Where is he?</b>",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "The women were at the tomb early.",
          "aceita": [],
          "d": "Dica: <b>the women</b> é plural, então <b>were</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "The women was sad on Friday.",
          "r": "The women were sad on Friday.",
          "aceita": [],
          "d": "Dica: muitas pessoas, então <b>were</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: Friday is the past.",
          "mostra": "On Friday the tomb is closed.",
          "r": "On Friday the tomb was closed.",
          "aceita": [],
          "d": "Dica: sexta-feira já passou: <b>was</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: make it a question.",
          "mostra": "Where he is?",
          "r": "Where is he?",
          "aceita": [],
          "d": "Dica: na pergunta, <b>is</b> vem antes de <b>he</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/749c8e5ebdca/the-empty-tomb/img/live-manha.webp",
      "leg": "The garden, early",
      "pede": "Look at the picture: a garden, early in the morning. Write 2 or 3 sentences: how it was on Friday and how it is now. Use <b>was, were, is</b> or <b>are</b>.",
      "ph": "On Friday the tomb was … Now it is …",
      "ex": "On Friday the tomb was closed, and the women were sad. Now the stone is away, and the tomb is empty."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "Where were you last Friday night?",
          "ph": "I was at … with …",
          "ex": "I was at home with my family. We were tired."
        },
        {
          "q": "Matthew 28:8 says, “They departed quickly from the tomb with fear and great joy, and ran to bring his disciples word.” When were you full of joy? Where were you?",
          "ph": "I was at … We were …",
          "ex": "I was at the beach with my friends. We were very happy."
        }
      ]
    }
  }
};
