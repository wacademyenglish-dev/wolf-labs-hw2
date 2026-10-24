window.HW2_ARTIGO_CONTA = true; /* aula de artigos: a/an/the contam */
/* A MAN GOING DOWN · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: artigos a/an/the. A2: dicas em português só nas notas (d). Versículos (World English Bible, ao pé da letra): Luke 10:31 (Out loud), Luke 10:37 (Listen) e Luke 10:29 (Você). Nada da Bíblia é marcado como errado. O motor trata a/an/the como iguais: os itens pedem artigo que falta, não a troca. */
window.HW2 = {
  "id": "a-man-going-down",
  "titulo": "A Man Going Down",
  "nivel": "A2",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/4e89f462cc38/a-man-going-down/img/live-marco.webp",
  "alvo": "articles: a / an the first time (by the sound: an inn, an hour, a Samaritan) and the when we already know it; never a bare singular noun",
  "abrir": "Who is a good neighbor on your street?",
  "fecho": "<b>A / an</b> the first time: <i>A man fell.</i> <b>The</b> when we know it: <i>The man was hurt.</i> By the sound: <i>an inn, an hour, a Samaritan.</i> Never a bare noun: <i>A priest came</i>, not <s>Priest came</s>.",
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
      "sub": "Mia and Leo on a road. Mia quotes Luke 10:37. A new scene, about 40 seconds.",
      "img": "https://wolf-labs.pages.dev/p/4e89f462cc38/a-man-going-down/img/live-estrada.webp",
      "leg": "The road near the bridge",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, you look tired. What happened?"
        },
        {
          "quem": "leo",
          "t": "I saw an accident on the road this morning."
        },
        {
          "quem": "mia",
          "t": "An accident? Tell me."
        },
        {
          "quem": "leo",
          "t": "A man fell from his bike near the bridge. The man hurt his knee."
        },
        {
          "quem": "mia",
          "t": "Did anybody stop?"
        },
        {
          "quem": "leo",
          "t": "A bus went by, and a car went by. Then a woman stopped."
        },
        {
          "quem": "mia",
          "t": "A woman? Who was she?"
        },
        {
          "quem": "leo",
          "t": "I don't know. She is a stranger. The woman gave him a bottle of water, and she stayed an hour with the man."
        },
        {
          "quem": "mia",
          "t": "She was a good neighbor."
        },
        {
          "quem": "leo",
          "t": "Yes. The man is fine now, and I think the woman is a hero."
        },
        {
          "quem": "mia",
          "t": "Jesus tells a story like that. At the end he says, “Go and do likewise.”"
        }
      ],
      "perguntas": [
        {
          "q": "What happened to the man?",
          "op": [
            "He fell from his bike",
            "He lost his bag",
            "He missed the bus"
          ],
          "a": 0,
          "por": "A man fell from his bike near the bridge."
        },
        {
          "q": "Who stopped to help?",
          "op": [
            "A woman",
            "A bus driver",
            "Leo"
          ],
          "a": 0,
          "por": "Then a woman stopped."
        },
        {
          "q": "How long did she stay with the man?",
          "op": [
            "An hour",
            "Ten minutes",
            "All day"
          ],
          "a": 0,
          "por": "She stayed an hour with the man."
        }
      ]
    },
    "out": {
      "sub": "Three sentences from the story. The third is from the Bible: Luke 10:31 (World English Bible). Hear it, then say it.",
      "frases": [
        {
          "t": "A man was going down the road, and the man was hurt.",
          "img": "https://wolf-labs.pages.dev/p/4e89f462cc38/a-man-going-down/img/live-estrada.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "A Samaritan stopped. He took the man to an inn.",
          "img": "https://wolf-labs.pages.dev/p/4e89f462cc38/a-man-going-down/img/live-hospedaria.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "By chance a certain priest was going down that way.",
          "img": "https://wolf-labs.pages.dev/p/4e89f462cc38/a-man-going-down/img/live-marco.webp",
          "au": "audio/say3.mp3",
          "ref": "Luke 10:31"
        }
      ]
    },
    "focus": {
      "sub": "A, an or the? Four quick ones.",
      "regra": "<b>a / an</b> the first time · <b>the</b> when we know it · <b>an</b> before a vowel sound (an inn, an hour) · <b>a</b> before a consonant sound (a Samaritan).",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "He stayed an hour at an inn.",
          "aceita": [],
          "d": "Dica: <b>an</b> hour e <b>an</b> inn: o som começa com vogal."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is missing.",
          "mostra": "Priest walked by on the other side.",
          "r": "A priest walked by on the other side.",
          "aceita": [
            "The priest walked by on the other side."
          ],
          "d": "Dica: primeira vez, então <b>a priest</b>. Nunca um nome sozinho."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is missing.",
          "mostra": "He took the man to inn.",
          "r": "He took the man to an inn.",
          "aceita": [],
          "d": "Dica: falta o artigo: <b>an</b> inn (som de vogal)."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is missing.",
          "mostra": "The Levite looked at man and left.",
          "r": "The Levite looked at the man and left.",
          "aceita": [],
          "d": "Dica: já sabemos quem é o homem, então <b>the</b> man."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/4e89f462cc38/a-man-going-down/img/live-hospedaria.webp",
      "leg": "An inn at night",
      "pede": "Look at the picture: an inn at night. Write 2 or 3 sentences: who is there and what a person does. Use <b>a / an</b> the first time and <b>the</b> after.",
      "ph": "There is a man at the inn. The man is …",
      "ex": "A man is at the door of an inn. The man is tired, and the innkeeper has a lamp."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "In Luke 10:29 a man asks Jesus, “Who is my neighbor?” Who is a good neighbor on your street? What does he or she do?",
          "ph": "A … lives on my street. The … is …",
          "ex": "An old woman lives on the corner. The woman waters my plants when I travel."
        },
        {
          "q": "Did a stranger ever help you? What happened?",
          "ph": "Once a … helped me. The … was …",
          "ex": "Once a man helped me with a flat tire. The man was kind, and he stayed an hour."
        }
      ]
    }
  }
};
